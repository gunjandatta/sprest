import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Group Service
 */
export const GroupService: IGroupService;

/**
 * Group Service
 */
export interface IGroupService {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.SharePoint.Portal.IGroupService;
}