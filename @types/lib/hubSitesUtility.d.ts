import { Microsoft } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/HubSitesUtility
 */
export const HubSitesUtility: IHubSitesUtility;

/**
 * Hub Sites Utility
 * @category Hub Site
 */
export interface IHubSitesUtility {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): Microsoft.SharePoint.Portal.ISPHubSitesUtility;
}