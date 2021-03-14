import { IWebTemplateExtensions } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Web Template Extensions
 */
export const WebTemplateExtensions: IWebTemplateExtensions = ((url: string, targetInfo?: ITargetInfoProps) => {
    let webTemplateExtensions = new Base(targetInfo);

    // Default the properties
    webTemplateExtensions.targetInfo.defaultToWebFl = true;
    webTemplateExtensions.targetInfo.endpoint = "Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptUtility";

    // See if the web url exists
    if (url) {
        // Set the settings
        webTemplateExtensions.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(webTemplateExtensions, { __metadata: { type: "webTemplateExtensions" } });

    // Return the web template extension utilities
    return webTemplateExtensions;
}) as any as IWebTemplateExtensions;