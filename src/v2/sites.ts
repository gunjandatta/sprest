import { ITargetInfoProps } from "../../@types/utils";
import { Isites } from "../../@types/v2";
import { ContextInfo } from "../lib/contextInfo";
import { Site } from "../lib/site";
import { Base, Request, RequestType } from "../utils";

/**
 * Sites
 * The sites graph endpoint.
 */
export const sites: Isites = ((props: { siteId?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let sites = new Base(props.targetInfo);

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.endpoint = "_api/v2.0/sites/" + (props.siteId || ContextInfo?.siteId?.replace(/[{}]/g, ''));
    sites.targetInfo.requestType = RequestType.GraphGet;

    // Add the methods
    Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#sites" } });

    // Return the sites
    return sites;
}) as any as Isites;

/** Returns the current web. */
sites.getCurrentWeb = () => { return sites().sites(ContextInfo.webId.replace(/^\{|\}$/g, '')) as any }

/** Returns a drive */
sites.getDrive = ((props: { siteId?: string, siteUrl?: string, libName?: string }) => {
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
}) as any;

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