import { IWeb } from "../../@types/lib";
import { Base, Request } from "../utils";

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