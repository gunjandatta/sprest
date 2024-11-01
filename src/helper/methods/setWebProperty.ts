import { IsetWebProperty } from "../../../@types/helper/methods";
import { ContextInfo } from "../../lib/contextInfo";
import { Web } from "../../lib/web";

/**
 * Adds or updates a key/value pair for a web's property bag
 * This uses JSOM to set a web's property. The REST API doesn't support this at the moment.
 */
export const setWebProperty: IsetWebProperty = (key: string, value: string, indexed?: boolean, siteUrl?: string): PromiseLike<void> => {
    let encodedKey = "vti_x005f_indexedpropertykeys";
    let decodedKey = "vti_indexedpropertykeys";

    // Return a promise
    return new Promise((resolve, reject) => {
        // Gets the request digest value of the web
        let getRequestDigest = (): PromiseLike<string> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if the site url exists
                if (siteUrl) {
                    ContextInfo.getWeb(siteUrl).execute(context => {
                        // Resolve the request
                        resolve(context.GetContextWebInformation.FormDigestValue);
                    }, reject);
                } else {
                    // Resolve the request w/ the default digest value
                    resolve(ContextInfo.formDigestValue);
                }
            });
        }

        // Get the request digest for the web
        getRequestDigest().then(requestDigest => {
            // Convert the key to a base64 string
            let idxKeyValue = "";
            for (let i = 0; i < key.length; i++) {
                idxKeyValue += key[i] + "\x00";
            }
            idxKeyValue = btoa(idxKeyValue);

            // See if a value exists
            if (value) {
                // Add the property
                Web(siteUrl, { requestDigest }).AllProperties().add(key, value).execute(() => {
                    // See if we are indexing the property
                    if (indexed) {
                        // Get the properties
                        Web(siteUrl, { requestDigest }).AllProperties().execute(propBag => {
                            // See if the indexed keys doesn't contain this value
                            let idxKeys: string = propBag[encodedKey] || "";
                            if (idxKeys.indexOf(idxKeyValue) < 0) {
                                // Append the value
                                Web(siteUrl, { requestDigest }).AllProperties().add(decodedKey, idxKeys + idxKeyValue + "|").execute(() => {
                                    // Resolve the request
                                    resolve();
                                }, () => {
                                    // Reject the request
                                    reject("Error setting the indexed keys property.");
                                });
                            } else {
                                // Resolve the request
                                resolve();
                            }
                        });
                    } else {
                        // Resolve the request
                        resolve();
                    }
                }, () => {
                    // Reject the request
                    reject("Error adding the web property.");
                });
            } else {
                // Remove the property
                Web(siteUrl, { requestDigest }).AllProperties().remove(key).execute(() => {
                    // See if we are indexing the property
                    if (indexed) {
                        // Get the properties
                        Web(siteUrl, { requestDigest }).AllProperties().execute(propBag => {
                            // See if the indexed keys contains the value
                            let idxKeys: string = propBag[encodedKey] || "";
                            if (idxKeys.indexOf(idxKeyValue) >= 0) {
                                // Remove the value
                                Web(siteUrl, { requestDigest }).AllProperties().add(decodedKey, idxKeys.replace(idxKeyValue + "|", "")).execute(() => {
                                    // Resolve the request
                                    resolve();
                                }, () => {
                                    // Reject the request
                                    reject("Error setting the indexed keys property.");
                                });
                            } else {
                                // Resolve the request
                                resolve();
                            }
                        });
                    } else {
                        // Resolve the request
                        resolve();
                    }
                }, () => {
                    // Reject the request
                    reject("Error removing the web property.");
                });
            }
        }, () => {
            // Reject the request
            reject("Unable to get the context of this web.");
        });
    });
}
