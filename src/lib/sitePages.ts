import { SP } from "gd-sprest-def";
import { ISitePages } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Web } from "./web";
import { Base, Request } from "../utils";
import { ContextInfo } from "./contextInfo";

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

// Static method to convert a modern page type
SitePages.convertPage = (pageUrl: string, layout: string, webUrl?: string): PromiseLike<void> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the page
        let getPage = (pageUrl: string): PromiseLike<SP.ListItemOData> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if the web url is specified
                if (webUrl) {
                    // Get the context info
                    ContextInfo.getWeb(webUrl).execute(context => {
                        // Get the page
                        Web(webUrl, {
                            requestDigest: context.GetContextWebInformation.FormDigestValue
                        }).Lists("Site Pages").Items().query({
                            Filter: "FileLeafRef eq '" + pageUrl + "'"
                        }).execute(items => {
                            // Resolve the request
                            resolve(items.results[0]);
                        }, reject);
                    }, reject);
                } else {
                    // Get the page
                    Web().Lists("Site Pages").Items().query({
                        Filter: "FileLeafRef eq '" + pageUrl + "'"
                    }).execute(items => {
                        // Resolve the request
                        resolve(items.results[0]);
                    }, reject);
                }
            });
        }

        // Get the page
        getPage(pageUrl).then(
            item => {
                // Update the item
                item.update({ PageLayoutType: layout }).execute(resolve, reject);
            },
            () => {
                // Log
                console.error("Unable to get the page: " + pageUrl);

                // Reject the request
                reject();
            }
        )
    });
}

// Static method to create a modern page
SitePages.createPage = ((pageName: string, pageTitle: string, pageTemplate: string, url?: string, targetInfo?: ITargetInfoProps): PromiseLike<{
    file: SP.File;
    item: SP.ListItem;
    page: SP.Publishing.SitePage;
}> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Method called after the updates have completed
        let onComplete = (itemId, fileUrl) => {
            let web = Web(url, targetInfo);
            let results: {
                file: SP.File;
                item: SP.ListItem;
                page: SP.Publishing.SitePage;
            } = { file: null, item: null, page: null };

            // Get the file
            web.getFileByUrl(fileUrl).query({ Select: ["*", "ListId"] }).execute(file => {
                // Set the file
                results.file = file as any;

                // Get the list
                web.Lists().getById(file.ListId).Items(itemId).execute(item => {
                    // Set the item
                    results.item = item;

                    // Get the page
                    SitePages(url, targetInfo).Pages(itemId).execute(page => {
                        // Set the page
                        results.page = page;

                        // Resolve the request
                        resolve(results);
                    }, reject);
                }, reject);
            }, reject);
        }

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
                    // Update the file url
                    let idx = page.Url.lastIndexOf('/');
                    let fileUrl = page.Url.substring(0, idx + 1) + pageName;

                    // Complete the request
                    onComplete(page.Id, fileUrl);
                },

                // Unable to update the file name, but still return the object
                () => {
                    // Complete the request
                    onComplete(page.Id, page.Url);
                });
        }, reject);
    });
});