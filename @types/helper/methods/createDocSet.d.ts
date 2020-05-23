import { ListItem } from "gd-sprest-def/lib/SP/entitytypes";

/**
 * Creates a document set item.
 * @category Helper
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet: IcreateDocSet;
export interface IcreateDocSet {
    (name: string, listName: string, webUrl?: string): PromiseLike<ListItem>;
}
