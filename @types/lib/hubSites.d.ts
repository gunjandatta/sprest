import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.HubSite.Collection
 */
export const HubSites: IHubSites;

/**
 * Hub Sites
 * @category Hub Site
 */
export interface IHubSites {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.IHubSiteCollection;

    /**
     * A static method to see if the current user can create a hub site.
     */
    canCreate(): Base.IBaseExecution<{ CanCreate: boolean }>;
}