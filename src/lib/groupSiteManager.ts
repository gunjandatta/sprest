import { Base, Request } from "../utils";
import { IGroupSiteManager } from "./types/groupSiteManager";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Group Site Manager
 */
export const GroupSiteManager: IGroupSiteManager = ((targetInfo?: ITargetInfoProps) => {
    let mgr = new Base(targetInfo);

    // Default the properties
    mgr.targetInfo.defaultToWebFl = true;
    mgr.targetInfo.endpoint = "groupsitemanager";

    // Add the methods
    Request.addMethods(mgr, { __metadata: { type: "Microsoft.SharePoint.Portal.GroupSiteManager" } });

    // Return the group site manager
    return mgr;
}) as any as IGroupSiteManager;