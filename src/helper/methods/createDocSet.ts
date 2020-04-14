import { ListItem } from "gd-sprest-def/lib/SP";
import { IcreateDocSet } from "../../../@types/helper/methods";
import { Web } from "../../lib";
import { request } from "./request";

/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet: IcreateDocSet = (name: string, listName: string, webUrl?: string): PromiseLike<ListItem> => {
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
