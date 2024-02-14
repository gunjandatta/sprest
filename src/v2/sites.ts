import { ISites } from "../../@types/v2";
import { ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib/contextInfo";
import { Base, RequestType } from "../utils";

/**
 * Sites
 */
export const Sites: ISites = ((id?: string, targetInfo?: ITargetInfoProps) => {
    let sites = new Base(targetInfo);

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.endpoint = "_api/v2.0/sites/" + (id || ContextInfo?.siteId?.replace(/[{}]/g, ''));
    sites.targetInfo.requestType = RequestType.GraphGet;

    // Add the methods
    //Request.addMethods(site, { __metadata: { type: "SP.Site" } });

    // Return the sites
    return sites;
}) as any as ISites;