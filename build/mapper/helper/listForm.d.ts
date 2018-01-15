import { Types } from "..";
/**
 * List Form
 */
export interface IListForm {
    /**
     * Creates an instance of the list form
     * @param props - The list form properties.
     */
    new (props: IListFormProps): PromiseLike<IListFormResult>;
    /**
     * Method to refresh the item.
     * @param listInfo - The list form information.
     */
    refreshItem(listInfo: IListFormResult): PromiseLike<Types.IListItemQueryResult>;
    /**
     * Method to save the item.
     * @param itemValues - The list item values.
     * @param list - The list.
     */
    saveItem(itemValues: any, list: Types.IListResult): PromiseLike<IListFormResult>;
}
/**
 * List Form Properties
 */
export interface IListFormProps {
    /** The form fields */
    fields?: Array<string>;
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
    /** The form fields */
    fields: {
        [key: string]: Types.IFieldResult;
    };
    /** The list item */
    item?: Types.IListItemQueryResult | Types.IListItemResult;
    /** The item query */
    query?: Types.ODataQuery;
    /** The list */
    list: Types.IListResult;
}
/**
 * List Form Field Information
 */
export interface IListFormFieldInfo {
    /** The default value. */
    defaultValue?: any;
    /** The list field. */
    field?: Types.IFieldResult | Types.IFieldQueryResult;
    /** The list name. */
    listName: string;
    /** The internal name of the field. */
    name: string;
    /** Flag indicating if the field is read-only. */
    readOnly?: boolean;
    /** True indicates a required field type. */
    required?: boolean;
    /** The display name of the field. */
    title?: string;
    /** The field type. */
    type?: number;
    /** The field type as a string. */
    typeAsString?: string;
    /** The relative web url containing the list. */
    webUrl?: string;
}
/**
 * List Form Field
 */
export interface IListFormField {
    /**
     * Creates an instance of the list form field
     * @param props - The list form field properties
     */
    new (props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;
}
