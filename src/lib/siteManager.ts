import { ISiteManager } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Site Manager
 */
export const SiteManager: ISiteManager = ((url?: string, targetInfo?: ITargetInfoProps) => {
    let siteMgr = new Base(targetInfo);

    // Default the properties
    siteMgr.targetInfo.defaultToWebFl = true;
    siteMgr.targetInfo.endpoint = "SPSiteManager";

    // See if the web url exists
    if (url) {
        // Set the settings
        siteMgr.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(siteMgr, { __metadata: { type: "Microsoft.SharePoint.Portal.SPSiteManager" } });

    // Return the site
    return siteMgr;
}) as any as ISiteManager;