import { ISite } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";
import { ContextInfo } from "./contextInfo";
import { Graph } from "./graph";

/**
 * Site
 */
export const Site: ISite = ((url?: string, targetInfo?: ITargetInfoProps) => {
    let site = new Base(targetInfo);

    // Default the properties
    site.targetInfo.defaultToWebFl = true;
    site.targetInfo.endpoint = "site";

    // See if the web url exists
    if (url) {
        // Set the settings
        site.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(site, { __metadata: { type: "SP.Site" } });

    // Return the site
    return site;
}) as any as ISite;

// Static method to see if a site exists
Site.exists = ((url: string) => {
    // Return the base object
    return new Base({
        data: { url },
        defaultToWebFl: true,
        endpoint: "SP.Site.Exists",
        method: "POST"
    });
}) as any;

// Static method to get the app context
Site.getAppContext = ((siteUrl: string) => {
    // Return the base object
    return new Base({
        data: { siteUrl },
        defaultToWebFl: true,
        endpoint: "SP.AppContextSite",
        method: "POST"
    });
}) as any;

// Method to get the onedive web for the current user
Site.getOneDrive = (targetInfo = {}) => {
    // Set the url of the drive
    let host = document.location.host.split('.');
    let url = `https://${host[0]}-my.${host[1]}.${host[2]}/personal/${ContextInfo.userPrincipalName.replace(/[@,.]/g, '_')}`;

    // Return the web for the user's onedrive
    return Site(url, {
        ...targetInfo, ...{
            requestHeader: {
                Authorization: "Bearer " + Graph.Token,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
    });
}

// Method to get the url by id
Site.getUrlById = ((id: string) => {
    // Return the base object
    return new Base({
        data: { id },
        defaultToWebFl: true,
        endpoint: "SP.Site.GetUrlById",
        method: "POST"
    });
}) as any;