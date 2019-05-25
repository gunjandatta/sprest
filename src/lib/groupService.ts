import { Base, Request } from "../utils";
import { IGroupService } from "./types/groupService";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Group Service
 */
export const GroupService: IGroupService = ((targetInfo?: ITargetInfoProps) => {
    let svc = new Base(targetInfo);

    // Default the properties
    svc.targetInfo.defaultToWebFl = true;
    svc.targetInfo.endpoint = "groupservice";

    // Add the methods
    Request.addMethods(svc, { __metadata: { type: "Microsoft.SharePoint.Portal.GroupService" } });

    // Return the group service
    return svc;
}) as any as IGroupService;