import { Types } from "..";

/**
 * List Form
 */
export interface IListForm {
    /**
     * Creates an instance of the list form
     * @param props - The list form properties.
     */
    new(props: IListFormProps): PromiseLike<IListFormResult>;

    /**
     * Method to load the item attachments
     * @param listInfo - The list form information.
    */
    loadAttachments(listInfo: IListFormProps): PromiseLike<Array<Types.IAttachment>>;

    /**
     * Method to refresh the item.
     * @param listInfo - The list form information.
     */
    refreshItem(listInfo: IListFormResult): PromiseLike<IListFormResult>;

    /**
     * Method to remove attachments from an item.
     */
    removeAttachments(listInfo: IListFormProps, attachmentInfo: Array<Types.IAttachment>): PromiseLike<void>;

    /**
     * Method to save attachments to the item.
     * @param listInfo - The list form information.
     * @param attachmentInfo - The attachment files to add.
     */
    saveAttachments(listInfo: IListFormProps, attachmentInfo: Array<IListFormAttachmentInfo>): PromiseLike<Array<Types.IAttachment>>;

    /**
     * Method to save the item.
     * @param itemValues - The list item values.
     * @param list - The list.
     */
    saveItem(itemValues: any, list: Types.IListResult): PromiseLike<IListFormResult>;
}

/**
 * List Form Attachment Information
 */
export interface IListFormAttachmentInfo {
    /** The file content */
    data: any;

    /** The name of the file */
    name: string;
}

/**
 * List Form Cache
 */
export interface IListFormCache {
    ct: string;
    fields: string;
    list: string;
}

/**
 * List Form Properties
 */
export interface IListFormProps {
    /** If defined, the data will be cached to the session storage. */
    cacheKey?: string;

    /** The form fields */
    fields?: Array<string>;

    /** The list item */
    item?: Types.IListItemQueryResult | Types.IListItemResult;

    /** The item id */
    itemId?: number;

    /** The list name */
    listName: string;

    /** Flag to deteremine if we are loading attachments */
    loadAttachments?: boolean;

    /** OData query used when loading an item */
    query?: Types.ODataQuery;

    /** The relative web url containing the list */
    webUrl?: string;
}

/**
 * List Form Result
 */
export interface IListFormResult {
    /** The item attachments */
    attachments?: Array<Types.IAttachment>;

    /** The form fields */
    fields: { [key: string]: Types.IFieldResult };

    /** The list item */
    item?: Types.IListItemQueryResult | Types.IListItemResult;

    /** The item query */
    query?: Types.ODataQuery;

    /** The list */
    list: Types.IListResult;
}