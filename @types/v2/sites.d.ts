import { IBaseExecution } from "gd-sprest-def/lib/base";
import { sites } from "gd-sprest-def/lib/Microsoft/Graph/api";
import { list, listMethods, siteMethods } from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
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
export const sites: Isites;

/**
 * Sites
 * The v2.0 REST endpoint.
 * @category Sites
 */
export interface Isites {
    /**
     * Creates an instance of the site library.
     * @param siteId - (Optional) The site id to target, current by default.
     * @param targetInfo - (Optional) The target information.
     */
    (props?: { siteId?: string, targetInfo?: ITargetInfoProps }): siteMethods & sites;

    /** Returns the current web. */
    static getCurrentWeb(): IBaseExecution<sites> & siteMethods;

    /** Returns a drive for a site. */
    static getDrive(props: { siteId?: string, siteUrl?: string, libName?: string }): IBaseExecution<list> & listMethods;

    /** Returns a list for a site. */
    static getList(props: { siteId?: string, siteUrl?: string, listId?: string, listName?: string }): IBaseExecution<list> & listMethods;
}