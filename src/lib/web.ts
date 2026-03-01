import { IODataQuery } from "gd-sprest-def";
import { IWeb } from "../../@types/lib";
import { ContextInfo } from "./contextInfo";
import { Base, OData, Request, RequestType } from "../utils";
import { Graph } from "./graph";

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


// Method to get the onedive web for the current user
Web.getOneDrive = (token?: string) => {
    // Set the url of the drive
    let host = document.location.host.split('.');
    let url = `https://${host[0]}-my.${host[1]}.${host[2]}/personal/${ContextInfo.userPrincipalName.replace(/[@,.]/g, '_')}`;

    // Return the web for the user's onedrive
    return Web(url, {
        requestHeader: {
            Authorization: "Bearer " + (token || Graph.Token)
        }
    });
}

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

// Static method to get the sharing settings
Web.getSharingSettings = ((data: { objectUrl: string, groupId?: number, useSimplifiedRoles?: boolean }, query?: IODataQuery) => {
    // Return the sharing settings
    return new Base({
        data,
        defaultToWebFl: true,
        endpoint: "SP.Web.GetObjectSharingSettings" + (query ? "?" + (new OData(query)).QueryString : ""),
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