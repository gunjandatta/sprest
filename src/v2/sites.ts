import { ITargetInfoProps } from "../../@types/utils";
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
    sites.targetInfo.endpoint = "_api/v2.1/sites/" + (props.siteId || ContextInfo?.siteId?.replace(/[{}]/g, ''));
    sites.targetInfo.requestType = RequestType.GraphGet;

    // See if the web id is provided
    if (props.webId) {
        // Append the web id
        sites.targetInfo.endpoint += "," + props.webId;
    }

    // Add the methods
    Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.1/$metadata#sites" } });

    // Return the sites
    return sites;
}) as any as Isites;

/** Returns the current web. */
sites.getCurrentWeb = () => { return sites().sites(ContextInfo.webId.replace(/^\{|\}$/g, '')); }

/** Returns a drive */
sites.getDrive = (props: { siteId?: string, siteUrl?: string, libName?: string, webId?: string }) => {
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
                        if (drive["name"] == libName) {
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
            getDriveId(props.siteId, props.webId, props.libName).then(driveId => {
                // Resolve the request
                resolve(sites({ siteId: props.siteId }).drives(driveId));
            }, reject);
        } else {
            // Get the site/web ids
            sites.getIdByUrl(props.siteUrl).then(info => {
                // Get the drive id
                getDriveId(info.siteId, info.webId, props.libName).then(driveId => {
                    // Resolve the request
                    resolve(sites({ siteId: info.siteId, webId: info.webId }).drives(driveId));
                }, reject);
            }, reject);
        }
    });
}

/** Returns a file */
sites.getFile = (props: { fileUrl: string, siteId?: string, siteUrl?: string, libName?: string }) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the site/web info
        sites.getIdByUrl(props.fileUrl).then(info => {
            // Get the drive
            sites.getDrive({ siteId: info.siteId, webId: info.webId, libName: props.libName }).then(drive => {
                // Get the file
                Web(info.webUrl).getFileByUrl(props.fileUrl).execute(file => {
                    // Resolve the request
                    resolve(drive.items(file.UniqueId));
                });
            }, reject);
        }, reject);
    });
}

/** Returns a list */
sites.getList = ((props: { siteId?: string, siteUrl?: string, listId?: string, listName?: string }) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // See if the site id exists
        if (props.siteId) {
            // Resolve the request
            resolve(sites({ siteId: props.siteId }).lists(props.listId || props.listName));
        } else {
            // Get the ids
            sites.getIdByUrl(props.siteUrl).then(info => {
                // Resolve the request
                resolve(sites({ siteId: info.siteId, webId: info.webId }).lists(props.listId || props.listName));
            }, reject);
        }
    });
}) as any;

/** Gets the site and web id from a url */
sites.getIdByUrl = (siteUrl: string) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the context information
        ContextInfo.getWeb(siteUrl).execute(context => {
            // Get the site id
            Site(context.GetContextWebInformation.SiteFullUrl).query({ Select: ["Id"] }).execute(site => {
                // Get the web id
                Web(context.GetContextWebInformation.WebFullUrl).query({ Select: ["Id"] }).execute(web => {
                    // Resolve the request
                    resolve({
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