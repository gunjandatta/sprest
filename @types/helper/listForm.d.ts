import { IODataQuery } from "gd-sprest-def/lib/base";
import { Attachment, ContentType, Field, FieldLink, List, ListItem, ListItemOData } from "gd-sprest-def/lib/SP/entitytypes";
import * as Types from "../intellisense";

/**
 * Helper class for creating custom list forms.
 */
export const ListForm: IListForm;

/**
 * List Form
 */
export interface IListForm {
    /**
     * Creates an instance of the list form
     * @param props - The list form properties.
     */
    create(props: IListFormProps): PromiseLike<IListFormResult>;

    /**
     * Method to generate the odata query for the list item.
     */
    generateODataQuery(info: IListFormResult, loadAttachments?: boolean): IODataQuery;

    /**
     * Method to load the item attachments
     * @param info - The list form information.
    */
    loadAttachments(info: IListFormProps): PromiseLike<Array<Attachment>>

    /**
     * Method to refresh the item.
     * @param info - The list form information.
     */
    refreshItem(info: IListFormResult): PromiseLike<IListFormResult>;

    /**
     * Method to remove attachment from an item.
     */
    removeAttachment(info: IListFormResult, fileName: string): PromiseLike<IListFormResult>;

    /**
     * Method to save attachments to the item.
     * @param info - The list form information.
     * @param attachmentInfo - The attachment files to add.
     */
    saveAttachments(info: IListFormProps, attachmentInfo: Array<IListFormAttachmentInfo>): PromiseLike<Array<Attachment>>;

    /**
     * Method to save the item.
     * @param info - The list form information.
     * @param itemValues - The list item values.
     */
    saveItem(info: IListFormResult, formValues: any): PromiseLike<IListFormResult>;

    /**
     * Method to show the file dialog.
     * @param info - The list form information.
     * @param onSave - The save event triggered when a file is uploaded to the item.
     */
    showFileDialog(): PromiseLike<IListFormAttachmentInfo>;

    /**
     * Method to show the file dialog.
     * @param info - The list form information.
     * @param onSave - The save event triggered when a file is uploaded to the item.
     */
    showFileDialog(info: IListFormResult, onSave?: (IListFormAttachmentInfo) => void): PromiseLike<IListFormResult>;
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
 * List Form Display
 */
export interface IListFormDisplay {
    /**
     * Method to get the fields
     */
    getFields(): Array<HTMLDivElement>;
}

/**
 * List Form Display Properties
 */
export interface IListFormDisplayProps {
    /** The element to render the form to. */
    el: Element;

    /** The fields to exclude from the form. */
    excludeFields?: Array<string>;

    /** The fields to include in the form. */
    includeFields?: Array<string>;

    /** The list form information. */
    info: IListFormResult;
}

/**
 * List Form Edit
 */
export interface IListFormEdit {
    /**
     * Method to get the fields
     */
    getFields<T = any>(): Array<T>;

    /**
     * Method to get the form values
     */
    getValues<T = any>(): PromiseLike<T>;
}

/**
 * List Form Edit Properties
 */
export interface IListFormEditProps extends IListFormDisplayProps {
    /** The form mode (New/Edit) */
    controlMode?: number;
}

/**
 * List Form Properties
 */
export interface IListFormProps {
    /** If defined, the data will be cached to the session storage. */
    cacheKey?: string;

    /** The content type to target for the list form fields. */
    contentType?: string;

    /** The form fields to exclude. */
    excludeFields?: Array<string>;

    /** The form fields */
    fields?: Array<string>;

    /** The list item */
    item?: ListItemOData | ListItem;

    /** The item id */
    itemId?: number;

    /** The list name */
    listName: string;

    /** Flag to deteremine if we are loading attachments */
    loadAttachments?: boolean;

    /** OData query used when loading an item */
    query?: IODataQuery;

    /** The relative web url containing the list */
    webUrl?: string;
}

/**
 * List Form Result
 */
export interface IListFormResult {
    /** The item attachments. */
    attachments?: Array<Attachment>;

    /** The referenced content type. */
    contentType: ContentType;

    /** The form fields. */
    fields: { [key: string]: Field };

    /** The form field links, if a content type was referenced. */
    fieldLinks: { [key: string]: FieldLink };

    /** The list item. */
    item?: ListItemOData | ListItem;

    /** The item query. */
    query?: IODataQuery;

    /** The list. */
    list: List;

    /** The relative web url containing the list. */
    webUrl?: string;
}