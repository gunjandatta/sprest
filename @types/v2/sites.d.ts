import { IBaseExecution, IBaseQuery } from "gd-sprest-def/lib/base";
import { sites } from "gd-sprest-def/lib/Microsoft/Graph/api";
import {
    drive, driveMethods, listItem, listItemMethods,
    list, listMethods, siteMethods
} from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/v2.1/sites
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
 * The v2.1 REST endpoint.
 * @category Sites
 */
export interface Isites {
    /**
     * Creates an instance of the site library.
     * @param siteId - (Optional) The site id to target, current by default.
     * @param webId - (Optional) The sub-site id to target.
     * @param targetInfo - (Optional) The target information.
     */
    (props?: { siteId?: string, webId?: string, targetInfo?: ITargetInfoProps }): siteMethods & sites;

    /** Returns the current web. */
    static getCurrentWeb(): IBaseQuery<site> & siteMethods;

    /** Returns a drive for a site. */
    static getDrive(props: { siteId?: string, siteUrl?: string, libName?: string, webId?: string }): PromiseLike<IBaseQuery<drive> & driveMethods>;

    /** Returns a drive for a site. */
    static getFile(props: { fileUrl: string, siteId?: string, siteUrl?: string, libName?: string }): PromiseLike<IBaseQuery<item> & itemMethods>;

    /** Returns a list for a site. */
    static getList(props: { siteId?: string, siteUrl?: string, listId?: string, listName?: string }): PromiseLike<IBaseQuery<list> & listMethods>;

    /** Returns the site and web ids. */
    static getIdByUrl(siteUrl: string): PromiseLike<{ siteId: string, siteUrl: string, webId: string, webUrl: string }>;
}