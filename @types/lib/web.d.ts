import { IBaseExecution } from "gd-sprest-def/lib/base";
import * as SP from "gd-sprest-def/lib/SP/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/web
 *
 * #### Get current web
 *
 * ```typescript
 * import { Web } from "gd-sprest";
 * 
 * Web().execute(web => {
 *   let title = web.Title;
 * });
 * ```
 * 
 *
 * #### Query a list to include various collections
 *
 * ```typescript
 * import { Web } from "gd-sprest";
 * 
 * Web().query({
 *  Expand: ["ContentTypes", "Fields", "Lists", "RootFolder"]
 * }).execute(web => {
 *   let contentTypes = web.ContentTypes.results;
 *   let fields = web.Fields.results;
 *   let lists = web.Lists.results;
 *   let rootFolder = web.RootFolder;
 * });
 * ```
 */
export const Web: IWeb;

/**
 * Web
 */
export interface IWeb {
    /**
     * Creates an instance of the web library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.IWeb;

    /**
     * Method to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    getRemoteWeb(requestUrl: string): IBaseExecution<SP.RemoteWeb>;

    /**
     * Method to get the web url from a page url. (SPO Only)
     * @param pageUrl - The absolute url of the page.
     */
    getWebUrlFromPageUrl(pageUrl: string): IBaseExecution<{ GetWebUrlFromPageUrl: string }>;
}