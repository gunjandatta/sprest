import { ContentType, ContentTypeCreationInformation } from "gd-sprest-def/lib/SP";
import { IcreateContentType } from "../../../@types/helper/methods";
import { Web } from "../../lib";
declare var SP;

/**
 * Creates a content type in a web or specified list.
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to.
 */
export const createContentType: IcreateContentType = (ctInfo: ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string): PromiseLike<ContentType> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Set the context
        let ctx = webUrl ? new SP.ClientContext(webUrl) : SP.ClientContext.get_current();

        // Get the parent content type
        let parentContentType = (parentInfo.Url ? ctx.get_site().openWeb(parentInfo.Url) : ctx.get_web()).get_contentTypes().getById(parentInfo.Id);

        // Create the content type
        let ct = new SP.ContentTypeCreationInformation();
        ctInfo.Description != null ? ct.set_description(ctInfo.Description) : null;
        ctInfo.Group != null ? ct.set_group(ctInfo.Group) : null;
        ct.set_name(ctInfo.Name);
        ct.set_parentContentType(parentContentType)

        // Add the content type
        let src = listName ? ctx.get_web().get_lists().getByTitle(listName) : ctx.get_web();
        let contentTypes = src.get_contentTypes();
        contentTypes.add(ct);
        ctx.load(contentTypes);

        // Execute the request
        ctx.executeQueryAsync(
            // Success
            () => {
                // Set the content type collection
                let cts = (listName ? Web().Lists(listName) : Web()).ContentTypes();

                // Find the content type
                cts.query({ Filter: "Name eq '" + ctInfo.Name + "'" }).execute(cts => {
                    // Resolve the request
                    resolve(cts.results[0] as any);
                });
            },

            // Error
            (sender, args) => {
                // Log
                console.log("[gd-sprest][Create Content Type] Error adding the content type.", ctInfo.Name);

                // Reject the request
                reject(args.get_message());
            });
    });
}
