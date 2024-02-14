import { IBaseExecution } from "gd-sprest-def/lib/base";
import { site } from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.0/sites
 *
 * #### Get list from the current site collection
 *
 * ```typescript
 * import { Site } from "gd-sprest";
 * 
 * Site().execute(site => {
 *   let hubSiteId = site.HubSiteId;
 * });
 * ```
 * 
 *
 * #### Query a list to include various collections
 *
 * ```typescript
 * import { Site } from "gd-sprest";
 * 
 * Site().query({
 *  Expand: ["UserCustomActions"]
 * }).execute(list => {
 *   let actions = site.UserCustomActions.results;
 * });
 * ```
 */
export const Sites: ISites;

/**
 * Sites
 * The v2.0 REST endpoint.
 * @category Sites
 */
export interface ISites {
    /**
     * Creates an instance of the site library.
     * @param id - (Optional) The site id to target.
     * @param targetInfo - (Optional) The target information.
     */
    (id?: string, targetInfo?: ITargetInfoProps): site;
}