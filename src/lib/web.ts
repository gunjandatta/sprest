import { IWeb } from "../../@types/lib";
import { ContextInfo } from "./contextInfo";
import { Base, Request, RequestType } from "../utils";

export const Web: IWeb = ((url?, targetInfo?) => {
    let web = new Base(targetInfo);

    // Default the properties
    web.targetInfo.defaultToWebFl = true;
    web.targetInfo.endpoint = "web";

    // See if the web url exists
    if (url) {
        // Set the settings
        web.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(web, { __metadata: { type: "SP.Web" } });

    // Return the web
    return web;
}) as any as IWeb;

// Static method to get a remote web
Web.getRemoteWeb = ((requestUrl: string) => {
    // Return the remote web information
    return new Base({
        data: { requestUrl },
        defaultToWebFl: true,
        endpoint: "SP.RemoteWeb?$expand=Web",
        method: "POST"
    });
}) as any;

// Static method to get the url of a web from a page url
Web.getWebUrlFromPageUrl = ((pageUrl: string) => {
    // Return the remote web information
    return new Base({
        endpoint: "SP.Web.GetWebUrlFromPageUrl(@v)?@v='" + pageUrl + "'",
        method: "POST"
    });
}) as any;

// Static method to execute a process query request
Web.processQuery = (query: string, webUrl?: string) => {
    // Minify the xml query
    let data = query.replace(/\r?\n/g, '').replace(/  /g, '');

    // Return a promise
    return new Promise((resolve, reject) => {
        let processResponse = (resp) => {
            // See if there was an error
            if (resp[0] && resp[0].ErrorInfo) {
                // Reject the request
                console.error("[Error] " + resp[0].ErrorInfo.ErrorMessage, resp[0].ErrorInfo);
                reject(resp[0].ErrorInfo);
            } else {
                // Resolve the request
                resolve(resp);
            }
        }

        // See if the web url exist
        if (webUrl) {
            // Get the context information for the web
            ContextInfo.getWeb(webUrl).execute(
                // Success
                ctx => {
                    // Execute the request
                    (new Base({
                        data,
                        endpoint: "_vti_bin/client.svc/ProcessQuery",
                        method: "POST",
                        requestDigest: ctx.GetContextWebInformation.FormDigestValue,
                        requestType: RequestType.Post,
                        url: webUrl
                    })).execute(processResponse, reject);
                },

                // Error
                () => {
                    // Reject the request
                    reject("Error getting the context information for the web.");
                }
            );
        } else {
            // Execute the request
            (new Base({
                data,
                endpoint: "_vti_bin/client.svc/ProcessQuery",
                method: "POST",
                requestDigest: ContextInfo.formDigestValue,
                requestType: RequestType.Post,
            })).execute(processResponse, reject);
        }
    });
}