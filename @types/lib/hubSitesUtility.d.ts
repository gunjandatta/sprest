import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Hub Sites Utility
 */
export const HubSitesUtility: IHubSitesUtility;

/**
 * Hub Sites Utility
 */
export interface IHubSitesUtility {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.SharePoint.Portal.ISPHubSitesUtility;
}