import { IBaseExecution, IBaseQuery } from "gd-sprest-def/lib/base";
import {
    drive, driveMethods, driveItem, driveItemMethods, list,
    listMethods, listItem, listItemMethods, site, siteMethods
} from "gd-sprest-def/lib/Microsoft/Graph/entityTypes";
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

export interface IsiteGetDriveProps {
    listName: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}

export interface IsiteProps {
    listName?: string;
    siteId?: string;
    siteUrl?: string;
    webId?: string;
}

export interface IsiteIdResult {
    digestValue: string;
    siteId: string;
    siteUrl: string;
    webId: string;
    webUrl: string;
}

/**
 * Sites
 * The v2.0 REST endpoint.
 * @category Sites
 */
export interface Isites {
    /**
     * Creates an instance of the site library.
     * @param siteId - (Optional) The site id to target, current by default.
     * @param webId - (Optional) The sub-site id to target.
     * @param targetInfo - (Optional) The target information.
     */
    (props?: { siteId?: string, webId?: string, targetInfo?: ITargetInfoProps }): IBaseQuery<site> & siteMethods;

    /** Returns the current site. */
    getCurrent(): IBaseQuery<site> & siteMethods;

    /** Returns a drive for a site. */
    getDrive(props: IsiteGetDriveProps): PromiseLike<IBaseQuery<drive> & driveMethods>;

    /** Returns a drive for a site. */
    getFile(props: IsiteProps & { fileUrl: string }): PromiseLike<IBaseQuery<driveItem> & driveItemMethods>;

    /** Returns a list for a site. */
    getList(props: IsiteProps & { listId?: string }): PromiseLike<IBaseQuery<list> & listMethods>;

    /** Returns the url to the site, web, list or file. */
    getIdByUrl(url: string): PromiseLike<IsiteIdResult>;

    /** Returns the root site of the current site. */
    getRoot(): IBaseQuery<site> & siteMethods;

    /** Returns a site by url. */
    getSite(url: string): PromiseLike<IBaseQuery<site> & siteMethods>;
}