import { Base, Request } from "../utils";
import { IHubSites } from "./types/hubSites";
import { ITargetInfoProps } from "../utils/types/targetInfo";

/**
 * Hub Sites
 */
export const HubSites: IHubSites = ((targetInfo?: ITargetInfoProps) => {
    let hubs = new Base(targetInfo);

    // Default the properties
    hubs.targetInfo.defaultToWebFl = true;
    hubs.targetInfo.endpoint = "hubsites";

    // Add the methods
    Request.addMethods(hubs, { __metadata: { type: "SP.HubSite.Collection" } });

    // Return the hub sites
    return hubs;
}) as any as IHubSites;

// Static method to see if the current user can create hub sites
HubSites.canCreate = (() => {
    // Return the base object
    return new Base({
        endpoint: "SP.HubSites.CanCreate"
    });
}) as any;