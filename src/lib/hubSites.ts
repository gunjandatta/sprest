import { IHubSites } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request, RequestType } from "../utils";

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

// Static method to update a hub site
HubSites.update = ((id: string, props: any) => {
    // Return the base object
    return new Base({
        data: { ...{ __metadata: { type: "SP.HubSite" } }, ...props },
        endpoint: `HubSites/getById('${id}')`,
        method: "POST",
        requestType: RequestType.PostBodyNoArgs,
        requestHeader: {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose",
            "IF-MATCH": "*",
            "X-Http-Method": "MERGE"
        }
    });
}) as any;