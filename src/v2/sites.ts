import { ITargetInfoProps, TargetInfo } from "../../@types/utils";
import { Isites } from "../../@types/v2";
import { ContextInfo } from "../lib/contextInfo";
import { Site } from "../lib/site";
import { Web } from "../lib/web";
import { Base, Request, RequestType } from "../utils";
import { init } from "./common";

/**
 * Sites
 * The sites graph endpoint.
 */
export const sites: Isites = ((props: { siteId?: string, webId?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let sites = new Base(props.targetInfo);

    // Call the init event
    init();

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.endpoint = "_api/v2.0/sites";
    sites.targetInfo.requestType = RequestType.GraphGet;

    // Default the url
    sites.targetInfo.url = props?.targetInfo?.url || ContextInfo.webServerRelativeUrl;

    // See if the site id was provided
    if (props.siteId) {
        // Append the site id
        sites.targetInfo.endpoint += "/" + props.siteId.replace(/^\{|\}$/g, '');

        // See if the web id is provided
        if (props.webId) {
            // Append the web id
            sites.targetInfo.endpoint += "," + props.webId.replace(/^\{|\}$/g, '');
        }
    }

    // Add the methods
    if (props.siteId || props.webId) {
        Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#site" } });
    } else {
        Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#sites" } });
    }

    // Return the sites
    return sites;
}) as any as Isites;

/** Returns the current site. */
sites.getCurrent = () => {
    return sites({
        siteId: ContextInfo.siteId,
        webId: ContextInfo.webId
    });
}

/** Returns a drive */
sites.getDrive = (props) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Method to get the drive id
        let getDriveId = (siteId: string, webId: string, libName: string): PromiseLike<string> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Get the drives
                sites({ siteId, webId }).drives().query({ Select: ["id", "name"] }).execute(drives => {
                    // Parse the drives
                    for (let i = 0; i < drives.results.length; i++) {
                        let drive = drives.results[i];

                        // See if this is the target library
                        if (drive["name"].toLowerCase() == libName.toLowerCase()) {
                            // Resolve the request
                            resolve(drive.id);
                            return;
                        }
                    }

                    // Not found
                    reject();
                }, reject);
            });
        }

        // See if the site id exists
        if (props.siteId) {
            // Get the drive id
            getDriveId(props.siteId, props.webId, props.listName).then(driveId => {
                // Resolve the request
                resolve(sites({ siteId: props.siteId }).drives(driveId));
            }, reject);
        } else {
            // Get the site/web ids
            sites.getIdByUrl(props.siteUrl).then(info => {
                // Get the drive id
                getDriveId(info.siteId, info.webId, props.listName).then(driveId => {
                    // Resolve the request
                    resolve(sites({ siteId: info.siteId, webId: info.webId }).drives(driveId));
                }, reject);
            }, reject);
        }
    });
}

/** Returns a file */
sites.getFile = (props) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the site/web info
        sites.getIdByUrl(props.fileUrl).then(info => {
            // Get the file
            Web(info.webUrl, { requestDigest: info.digestValue }).getFileByUrl(props.fileUrl).execute(file => {
                // See if the library was provided
                if (props.listName) {
                    // Get the drive
                    sites.getDrive({
                        listName: props.listName,
                        siteId: info.siteId,
                        siteUrl: info.siteUrl,
                        webId: info.webId
                    }).then(drive => {
                        // Resolve the request
                        resolve(drive.items(file.UniqueId));
                    }, reject);
                } else {
                    // Get the list information
                    file.ListItemAllFields().query({ Expand: ["ParentList"], Select: ["ParentList/Title"] }).execute(item => {
                        // Get the drive
                        sites.getDrive({
                            listName: item.ParentList.Title,
                            siteId: info.siteId,
                            siteUrl: info.siteUrl,
                            webId: info.webId
                        }).then(drive => {
                            // Resolve the request
                            resolve(drive.items(file.UniqueId));
                        }, reject);
                    });
                }
            }, reject);
        }, reject);
    });
}

/** Returns a list */
sites.getList = (props) => {
    // Finds the list
    let findList = (siteId: string, webId: string, listName: string): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            sites({ siteId, webId }).lists().query({
                Filter: "displayName eq '" + listName + "'",
                Select: ["id"]
            }).execute(sites => {
                // See if the list id exists
                let list = sites.results[0];
                if (list?.id) {
                    // Resolve the request
                    resolve(list?.id);
                } else {
                    // Reject the request
                    reject("List was not found.");
                }
            }, reject);
        });
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // See if the site id exists
        if (props.siteId) {
            // See if the id was given
            if (props.listId) {
                // Resolve the request
                resolve(sites({ siteId: props.siteId, webId: props.webId }).lists(props.listId));
            } else {
                // Find the list
                findList(props.siteId, props.webId, props.listName).then(listId => {
                    // Resolve the request
                    resolve(sites({ siteId: props.siteId, webId: props.webId }).lists(listId));
                }, reject);
            }
        } else {
            // Get the ids
            sites.getIdByUrl(props.siteUrl).then(info => {
                // See if the id was given
                if (props.listId) {
                    // Resolve the request
                    resolve(sites({ siteId: info.siteId, webId: info.webId }).lists(props.listId));
                } else {
                    // Find the list
                    findList(info.siteId, props.webId, props.listName).then(listId => {
                        // Resolve the request
                        resolve(sites({ siteId: info.siteId }).lists(listId));
                    }, reject);
                }
            }, reject);
        }
    });
}

/** Gets the site and web id from a url */
sites.getIdByUrl = (url) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the context information
        ContextInfo.getWeb(url).execute(context => {
            // Get the site id
            Site(context.GetContextWebInformation.SiteFullUrl).query({ Select: ["Id"] }).execute(site => {
                // Get the web id
                Web(context.GetContextWebInformation.WebFullUrl).query({ Select: ["Id"] }).execute(web => {
                    // Resolve the request
                    resolve({
                        digestValue: context.GetContextWebInformation.FormDigestValue,
                        siteId: site.Id,
                        siteUrl: context.GetContextWebInformation.SiteFullUrl,
                        webId: web.Id,
                        webUrl: context.GetContextWebInformation.WebFullUrl
                    });
                });
            }, reject);
        });
    })
}

/** Returns the root site of the current site. */
sites.getRoot = () => {
    return sites({
        siteId: ContextInfo.siteId
    });
}

/** Returns a site by url */
sites.getSite = (url: string) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the site info
        sites.getIdByUrl(url).then(info => {
            // Resolve the request
            resolve(sites({
                siteId: info.siteId,
                webId: info.webId
            }));
        }, reject);
    });
}