import { SP } from "gd-sprest-def";
import { IContentEditorWebPart, IScriptEditorWebPart } from "./webpart";

/**
 * Adds a content editor webpart to a page.
 * @category Helper
 * @param url The relative url of the page.
 * @param wpProps The webpart properties.
 * @returns A promise is returned.
 */
export const addContentEditorWebPart: IaddContentEditorWebPart;
export interface IaddContentEditorWebPart {
    (url: string, wpProps: IContentEditorWebPart): PromiseLike<void>;
}

/**
 * Adds a script editor webpart to a page.
 * @category Helper
 * @param url - The relative url of the page.
 * @param wpProps - The webpart properties.
 */
export const addScriptEditorWebPart: IaddScriptEditorWebPart;
export interface IaddScriptEditorWebPart {
    (url: string, wpProps: IScriptEditorWebPart): PromiseLike<void>;
}

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
    (ctInfo: SP.ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string): PromiseLike<SP.ContentType>;
}

/**
 * Creates a document set item.
 * @category Helper
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet: IcreateDocSet;
export interface IcreateDocSet {
    (name: string, listName: string, webUrl?: string): PromiseLike<SP.ListItem>;
}

/**
 * Determines if the user has permissions, based on the permission kind value
 * @category Helper
 */
export const hasPermissions: IhasPermissions;
export interface IhasPermissions {
    (permissionMask: any, permissions: Array<number> | number): boolean;
}

/**
 * Convert a JSON string to a base object
 * @category Helper
 */
export const parse: Iparse;
export interface Iparse {
    <T = any>(jsonString: string): T;
}


/**
 * XML HTTP Request
 * @category Helper
 */
export const request: Irequest;
export interface Irequest {
    (props: IRequest): PromiseLike<any>;
}

/**
 * Sets the field links associated with a content type.
 * @param ctInfo - The content type information
 * @category Helper
 */
export const setContentTypeFields: IsetContentTypeFields;
export interface IsetContentTypeFields {
    (ctInfo: { id: string, fields: Array<string>, listName?: string, webUrl?: string }): PromiseLike<void>;
}

/**
 * The XML HTTP request properties.
 */
export interface IRequest {
    /** The data to pass in the request. */
    data?: any;

    /** The request headers. */
    headers?: { [key: string]: string };

    /** The request method. */
    method?: string;

    /** The request url. */
    url: string;
}