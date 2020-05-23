import { ContentTypeCreationInformation } from "gd-sprest-def/lib/SP/complextypes";
import { ContentType } from "gd-sprest-def/lib/SP/entitytypes";

/**
 * Creates a content type in a web or specified list.
 * @category Helper
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to.
 */
export const createContentType: IcreateContentType;
export interface IcreateContentType {
    (ctInfo: ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string): PromiseLike<ContentType>;
}
