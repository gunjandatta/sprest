import { ISites } from "../../@types/v2";
import { ITargetInfoProps } from "../../@types/utils";
import { ContextInfo } from "../lib/contextInfo";
import { Base, RequestType } from "../utils";

/**
 * Sites
 * The sites graph endpoint.
 */
export const Sites: ISites = ((id?: string, targetInfo?: ITargetInfoProps) => {
    let sites = new Base(targetInfo);

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.requestType = RequestType.GraphGet;

    // See if an endpoint is not defined
    if (sites.targetInfo.endpoint == undefined) {
        // Default the endpoint
        sites.targetInfo.endpoint = "_api/v2.0/sites/" + (id || ContextInfo?.siteId?.replace(/[{}]/g, ''));

        // Add the methods
        sites["analytics"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/analytics" }, ...targetInfo });
        };
        sites["columns"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/columns" }, ...targetInfo });
        };
        sites["contentTypes"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/contentTypes" }, ...targetInfo });
        };
        sites["drive"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/drive" }, ...targetInfo });
        };
        sites["drives"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/drives" }, ...targetInfo });
        };
        sites["items"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/items" }, ...targetInfo });
        };
        sites["lists"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/lists" }, ...targetInfo });
        };
        sites["sites"] = () => {
            return Sites(id, { ...{ endpoint: sites.targetInfo.endpoint + "/sites" }, ...targetInfo });
        };
    }

    // Return the sites
    return sites;
}) as any as ISites;