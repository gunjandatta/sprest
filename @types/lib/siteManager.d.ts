import { IBaseExecution } from "gd-sprest-def/lib/base";
import * as Portal from "gd-sprest-def/lib/Microsoft/SharePoint/Portal/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/siteManager
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
export const SiteManager: ISiteManager;

/**
 * Site Manager
 * @category Site Manager
 */
export interface ISiteManager {
    /**
     * Creates an instance of the site library.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): Portal.ISPSiteManager;
}