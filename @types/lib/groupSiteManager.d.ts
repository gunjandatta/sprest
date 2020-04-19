import { IGroupSiteManager as IGroupSiteManagerDef } from "gd-sprest-def/lib/Microsoft/SharePoint/Portal/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/Microsoft.SharePoint.Portal.GroupSiteManager
 */
export const GroupSiteManager: IGroupSiteManager;

/**
 * Group Site Manager
 * @category Group Site
 */
export interface IGroupSiteManager {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): IGroupSiteManagerDef;
}