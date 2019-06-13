import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Group Site Manager
 */
export const GroupSiteManager: IGroupSiteManager;

/**
 * Group Site Manager
 */
export interface IGroupSiteManager {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.SharePoint.Portal.IGroupSiteManager;
}