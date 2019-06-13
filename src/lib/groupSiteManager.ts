import { IGroupSiteManager } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

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