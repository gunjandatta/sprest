import { SP } from "gd-sprest-def";
import { ISitePages } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Web } from "./web";
import { Base, Request } from "../utils";

/**
 * Site Pages
 */
export const SitePages: ISitePages = ((url?: string, targetInfo?: ITargetInfoProps) => {
    let sitePages = new Base(targetInfo);

    // Default the properties
    sitePages.targetInfo.defaultToWebFl = true;
    sitePages.targetInfo.endpoint = "SitePages";

    // See if the web url exists
    if (url) {
        // Set the settings
        sitePages.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(sitePages, { __metadata: { type: "SP.Publishing.SitePageService" } });

    // Return the site pages
    return sitePages;
}) as any as ISitePages;

// Static method to create a modern page
SitePages.createPage = ((pageName: string, pageTitle: string, pageTemplate: string, url?: string, targetInfo?: ITargetInfoProps): PromiseLike<SP.Publishing.SitePage> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Create the page
        SitePages(url, targetInfo).Pages().createAppPage({
            Title: pageTitle,
            PageLayoutType: pageTemplate
        }).execute(page => {
            // Update the file name
            Web(url, targetInfo).Lists("Site Pages").Items(page.Id).update({
                FileLeafRef: pageName
            }).execute(
                // Updated the file name successfully
                () => {
                    // Get the page and resolve the request
                    SitePages(url, targetInfo).Pages(page.Id).execute(resolve, reject);
                },

                // Unable to update the file name, but still return the object
                () => {
                    // Get the page and resolve the request
                    SitePages(url, targetInfo).Pages(page.Id).execute(resolve, reject);
                });
        }, reject);
    });
});
