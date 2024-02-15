import { IBaseExecution } from "gd-sprest-def/lib/base";
import { site } from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.0/sites
 *
 * #### Get the current site
 *
 * ```typescript
 * import { Sites } from "gd-sprest";
 * 
 * Sites().execute(site => {
 *   let siteTitle = site.title;
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
     * @param id - (Optional) The site id to target, current by default.
     * @param targetInfo - (Optional) The target information.
     */
    (id?: string, targetInfo?: ITargetInfoProps): site;
}