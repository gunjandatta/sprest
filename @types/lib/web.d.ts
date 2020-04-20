import { IBaseExecution } from "../../lib/base";
import { IWeb as IWebDef, RemoteWeb } from "../../lib/SP/entitytypes";
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
    (url?: string, targetInfo?: ITargetInfoProps): IWebDef;

    /**
     * Method to get a remote web.
     * @param requestUrl - The absolute url of the remote web.
     */
    getRemoteWeb(requestUrl: string): IBaseExecution<RemoteWeb>;
}