import { ListItem } from "gd-sprest-def/lib/SP";
import { IcreateDocSet } from "../../../@types/helper/methods";
import { ContextInfo, Web } from "../../lib";

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

            // Method to get the web information
            ((): PromiseLike<string> => {
                // Return a promise
                return new Promise((resolve, reject) => {
                    if (webUrl) {
                        // Get the web context information
                        ContextInfo.getWeb(webUrl).execute(webInfo => {
                            resolve(webInfo.GetContextWebInformation.FormDigestValue);
                        }, reject);
                    } else {
                        // Resolve the promise
                        resolve(null);
                    }
                });
            })().then(value => {
                // Create the document set item
                Web(webUrl, { requestDigest: value }).Lists(listName).addValidateUpdateItem({
                    FolderUrl: list.RootFolder.ServerRelativeUrl,
                    UnderlyingObjectType: 1
                }, [
                    {
                        FieldName: "HTML_x0020_File_x0020_Type",
                        FieldValue: "SharePoint.DocumentSet"
                    },
                    {
                        FieldName: "ContentTypeId",
                        FieldValue: ctId
                    },
                    {
                        FieldName: "FileLeafRef",
                        FieldValue: name
                    }
                ], false, "", true).execute(resp => {
                    // Parse the results
                    let itemId = 0;
                    for (let i = 0; i < resp.results.length; i++) {
                        // See if this is the item id
                        if (resp.results[i].FieldName == "Id") {
                            itemId = parseInt(resp.results[i].FieldValue);
                            break;
                        }
                    }

                    // Get the document set item and resolve the promise
                    Web(webUrl).Lists(listName).Items(itemId).execute(resolve);
                }, (request) => {
                    let errorMessage = request.response;

                    // Try to determine the error message
                    try {
                        errorMessage = (JSON.parse(errorMessage)).error.message.value;
                    } catch { }

                    // Reject the promise
                    reject(errorMessage);
                });
            });
        }, reject);
    });
}
