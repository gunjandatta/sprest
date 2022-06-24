import { SitePage, ISitePageService } from "gd-sprest-def/lib/SP/Publishing/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/sitePages
 *
 * #### Get site pages
 *
 * ```typescript
 * import { Site } from "gd-sprest";
 * 
 * SitePages().execute(sitePages => {
 *   // TODO
 * });
 * ```
 */
export const SitePages: ISitePages;

/**
 * Site Pages
 * @category Site Pages
 */
export interface ISitePages {
    /**
     * Creates an instance of the site library.
     * @param url - (Optional) The site url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): ISitePageService;

    /**
     * Creates a modern page.
     * @param url - The url of the file to create.
     * @param title - The title of the page.
     * @param template - The type of page to create.
     */
    createPage(url:string, title: string, template: string): PromiseLike<SitePage>;
}