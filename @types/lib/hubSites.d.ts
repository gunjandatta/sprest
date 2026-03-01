import { IBaseExecution } from "gd-sprest-def/lib/base";
import { IHubSiteCollection, HubSiteProps } from "gd-sprest-def/lib/SP/entitytypes";
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
    (targetInfo?: ITargetInfoProps): IBaseExecution<IHubSiteCollection>;

    /**
     * A static method to see if the current user can create a hub site.
     */
    canCreate(): IBaseExecution<{ CanCreate: boolean }>;

    /**
     * A static method to update the hub site properties.
     * @param id - The id of the hub site.
     * @param props - The properties to update.
     */
    update(id: string, props: HubSiteProps): IBaseExecution;
}