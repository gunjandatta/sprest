import { Base, Request } from "../utils";
import { IHubSitesUtility } from "./types/hubSitesUtility";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Hub Sites Utility
 */
export const HubSitesUtility: IHubSitesUtility = ((targetInfo?: ITargetInfoProps) => {
    let utility = new Base(targetInfo);

    // Default the properties
    utility.targetInfo.defaultToWebFl = true;
    utility.targetInfo.endpoint = "hubsitesutility";

    // Add the methods
    Request.addMethods(utility, { __metadata: { type: "Microsoft.SharePoint.Portal.SPHubSitesUtility" } });

    // Return the hub sites utility
    return utility;
}) as any as IHubSitesUtility;