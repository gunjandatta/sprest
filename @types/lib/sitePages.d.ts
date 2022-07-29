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
     * @param fileName - The name of the file to create, including the .aspx extension.
     * @param title - The title of the page.
     * @param template - The type of page to create.
     * @param url - The url of the web to create the page in.
     */
    createPage(fileName: string, title: string, template: string, url?:string): PromiseLike<{
        file: SP.File;
        item: SP.ListItem;
        page: SP.Publishing.SitePage;
    }>;
}