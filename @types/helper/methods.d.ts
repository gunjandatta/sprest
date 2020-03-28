import { SP } from "gd-sprest-def";

/**
 * Adds a content editor webpart to a page.
 * @param url - The relative url of the page.
 * @param wpProps - The webpart properties.
 */
export const addContentEditorWebPart: (url: string, wpProps: IContentEditorWebPart) => PromiseLike<void>;

/**
 * Adds a script editor webpart to a page.
 * @param url - The relative url of the page.
 * @param wpProps - The webpart properties.
 */
export const addScriptEditorWebPart: (url: string, wpProps: IScriptEditorWebPart) => PromiseLike<void>;

/**
 * Creates a content type in a web or specified list.
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to.
 */
export const createContentType: (ctInfo: SP.ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string) => PromiseLike<SP.ContentType>;

/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<SP.ListItem>;

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions: (permissionMask: any, permissions: Array<number> | number) => boolean;

/**
 * Convert a JSON string to a base object
 */
export function parse<T = any>(jsonString: string): T;


/**
 * XML HTTP Request
 */
export const request: (props: IRequest) => PromiseLike<any>;

/**
 * Sets the field links associated with a content type.
 * @param ctInfo - The content type information
 */
export const setContentTypeFields: (ctInfo: { id: string, fields: Array<string>, listName?: string, webUrl?: string }) => PromiseLike<void>;

/**
 * Request
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

/**
 * The content editor webpart properties
 */
export interface IContentEditorWebPart {
    /** The webpart description. */
    description?: string;

    /** The webpart content. */
    content?: string;

    /** The webpart content link. */
    contentLink?: string;

    /** The webpart frame type. (BorderOnly, Default, None, Standard or TitleBarOnly) */
    frameType?: string;

    /** The webpart index. */
    index?: number;

    /** The webpart title. */
    title?: string;

    /** The webpart zone. */
    zone?: string;
}

/**
 * The script editor webpart properties
 */
export interface IScriptEditorWebPart {
    /** The webpart description. */
    description?: string;

    /** The webpart chrome type. (BorderOnly, Default, None, TitleAndBorder or TitleOnly) */
    chromeType?: string;

    /** The webpart content. */
    content: string;

    /** The webpart index. */
    index?: number;

    /** The webpart title. */
    title?: string;

    /** The webpart zone. */
    zone?: string;
}