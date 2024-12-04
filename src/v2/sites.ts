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
export const sites: Isites = ((props: { siteId?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let sites = new Base(props.targetInfo);

    // Call the init event
    init();

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.endpoint = "_api/v2.1/sites/" + (props.siteId || ContextInfo?.siteId?.replace(/[{}]/g, ''));
    sites.targetInfo.requestType = RequestType.GraphGet;

    // Add the methods
    Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.1/$metadata#sites" } });

    // Return the sites
    return sites;
}) as any as Isites;

/** Returns the current web. */
sites.getCurrentWeb = () => { return sites().sites(ContextInfo.webId.replace(/^\{|\}$/g, '')); }

/** Returns a drive */
sites.getDrive = (props: { siteId?: string, siteUrl?: string, libName?: string }) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Method to get the drive id
        let getDriveId = (siteId: string, libName: string): PromiseLike<string> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Get the drives
                sites({ siteId }).drives().query({ Select: ["id", "name"] }).execute(drives => {
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
            getDriveId(props.siteId, props.libName).then(driveId => {
                // Resolve the request
                resolve(sites({ siteId: props.siteId }).drives(driveId));
            }, reject);
        } else {
            // Get the site
            Site(props.siteUrl).query({ Select: ["Id"] }).execute(site => {
                // Get the drive id
                getDriveId(site.Id, props.libName).then(driveId => {
                    // Resolve the request
                    resolve(sites({ siteId: site.Id }).drives(driveId));
                }, reject);
            }, reject);
        }
    });
}

/** Returns a file */
sites.getFile = (props: { fileUrl: string, siteId?: string, siteUrl?: string, libName?: string }) => {
    let getWebUrl = (): PromiseLike<string> => {
        return new Promise((resolve, reject) => {
            // See if the site id exists
            if (props.siteId) {
                // Get the url for this site
                Site.getUrlById(props.siteId).execute(siteInfo => {
                    // Resolve the request
                    resolve(siteInfo.GetUrlById);
                });
            } else {
                // Resolve the request
                resolve(props.siteUrl);
            }
        });
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the library
        sites.getDrive(props).then(drive => {
            // Get the web url
            getWebUrl().then(webUrl => {
                // Get the file
                Web(webUrl).getFileByUrl(props.fileUrl).execute(file => {
                    // Get the item for this file
                    file.ListItemAllFields().query({ Expand: ["ParentList"] }).execute(item => {
                        drive.items().query({
                            Expand: ["listItem"],
                            Filter: "listItem/id eq '" + item.Id + "'"
                        }).execute(resp => {
                            let file = resp.results[0];

                            // Resolve the request
                            resolve(file ? drive.items(file.id) : null);
                        }, reject);
                    });
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
            // Get the site
            Site(props.siteUrl).query({ Select: ["Id"] }).execute(site => {
                // Resolve the request
                resolve(sites({ siteId: site.Id }).lists(props.listId || props.listName));
            }, reject);
        }
    });
}) as any;