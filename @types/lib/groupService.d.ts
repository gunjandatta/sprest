import { IGroupService as IGroupServiceDef } from "../../lib/Microsoft/SharePoint/Portal/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/Microsoft.SharePoint.Portal.GroupService
 */
export const GroupService: IGroupService;

/**
 * Group Service
 * @category Group Site
 */
export interface IGroupService {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): IGroupServiceDef;
}