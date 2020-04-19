import { ISPHubSitesUtility as ISPHubSitesUtilityDef } from "gd-sprest-def/lib/Microsoft/SharePoint/Portal/entitytypes";
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
    (targetInfo?: ITargetInfoProps): ISPHubSitesUtilityDef;
}