import { ISiteIconManager } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Site Icon Manager
 */
export const SiteIconManager: ISiteIconManager = ((url?: string, targetInfo?: ITargetInfoProps) => {
    let siteIconMgr = new Base(targetInfo);

    // Default the properties
    siteIconMgr.targetInfo.defaultToWebFl = true;
    siteIconMgr.targetInfo.endpoint = "SiteIconManager";

    // See if the web url exists
    if (url) {
        // Set the settings
        siteIconMgr.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(siteIconMgr, { __metadata: { type: "Microsoft.SharePoint.Portal.SiteIconManager" } });

    // Return the site
    return siteIconMgr;
}) as any as ISiteIconManager;