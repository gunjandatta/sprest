import { IRequest } from "../../@types/helper";
import { ListItem } from "gd-sprest-def/lib/SP";
import { Web } from "../lib";
import { Base, Request } from "../utils";
declare var SP;

/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet = (name: string, listName: string, webUrl?: string): PromiseLike<ListItem> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the document set's root folder
        Web(webUrl).Lists(listName).query({ Expand: ["ContentTypes", "ParentWeb", "RootFolder"] }).execute(list => {
            // Parse the content types
            let ctId = "0x0120D520";
            for (let i = 0; i < list.ContentTypes.results.length; i++) {
                // See if this is the document set content type
                if (list.ContentTypes.results[i].StringId.indexOf(ctId) == 0) {
                    // Set the content type id
                    ctId = list.ContentTypes.results[i].StringId;
                    break;
                }
            }

            // Create the document set item
            request({
                method: "POST",
                url: list.ParentWebUrl + "/_vti_bin/listdata.svc/" + list.Title.replace(/ /g, ""),
                headers: {
                    Accept: "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    Slug: list.RootFolder.ServerRelativeUrl + "/" + name + "|" + ctId,
                    "X-Requested-With": "XMLHttpRequest"
                },
                data: {
                    Title: name,
                    Path: list.RootFolder.ServerRelativeUrl
                }
            }).then(response => {
                // See if the request was successful
                if (response.d && response.d.Id > 0) {
                    // Get the document set item and resolve the promise
                    Web(webUrl).Lists(listName).Items(response.d.Id).execute(resolve);
                } else {
                    // Reject the promise
                    reject(response["response"])
                }
            });
        }, reject);
    });
}

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions = (permissionMask: any, permissions: Array<number> | number = []): boolean => {
    let hasPermissions = false;

    // Set the permissions
    let requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;

    // Ensure the base permissions exist
    if (SP && SP.BasePermissions) {
        // Initialize the base permissions from the value
        let basePermissions = new SP.BasePermissions();
        basePermissions.initPropertiesFromJson(permissionMask);

        // Default the permission flag
        hasPermissions = true;

        // Parse the requested permissions
        for (let i = 0; i < requestedPermissions.length; i++) {
            // See if the user has permissions
            if (!basePermissions.has(requestedPermissions[i])) {
                // Set the flag and break from the loop
                hasPermissions = false;
                break;
            }
        }
    } else {
        // Log
        console.info("[gd-sprest] The 'SP' core library is not available.");
    }

    // Return the value
    return hasPermissions;
}

/**
 * Convert a JSON string to a base object
 */
export const parse = <T = Base>(jsonString: string): T => {
    // Try to parse the string
    try {
        let obj = JSON.parse(jsonString);

        // Create a base object
        let base = new Base(obj.props);

        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        base.targetInfo = obj.targetInfo;

        // Update the object
        Request.updateDataObject(base, false);

        // Return the base object
        return base as any;
    } catch { }

    return null;
}

/**
 * XML HTTP Request
 */
export const request = (props: IRequest): PromiseLike<any> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Execute the request and resolve the promise
        (new Base({
            method: props.method || "GET",
            url: props.url,
            requestHeader: props.headers,
            data: props.data
        })).execute(resolve, reject);
    });
}