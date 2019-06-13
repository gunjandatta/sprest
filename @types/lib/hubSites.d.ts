import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Hub Sites
 */
export const HubSites: IHubSites;

/**
 * Hub Sites
 */
export interface IHubSites {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.IHubSiteCollection;

    /**
     * A static method to see if the current user can create a hub site.
     * @param props - The list entity request properties.
     */
    canCreate(): Base.IBaseExecution<{ CanCreate: boolean }>;
}