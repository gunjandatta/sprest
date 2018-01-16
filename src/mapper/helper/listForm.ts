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
     * Method to refresh the item.
     * @param listInfo - The list form information.
     */
    refreshItem(listInfo: IListFormResult): PromiseLike<IListFormResult>;

    /**
     * Method to save the item.
     * @param itemValues - The list item values.
     * @param list - The list.
     */
    saveItem(itemValues: any, list: Types.IListResult): PromiseLike<IListFormResult>;
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
    fields: { [key: string]: Types.IFieldResult };

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
 * List Form Choice Field Information
 */
export interface IListFormChoiceFieldInfo extends IListFormFieldInfo {
    /** The choices. */
    choices?: Array<string>;

    /** Flag to determine if multiple values exist */
    multi?: boolean;
}

/**
 * List Form Date Field Information
 */
export interface IListFormDateFieldInfo extends IListFormFieldInfo {
    /** Flag determining if we are displaying time */
    showTime?: boolean;
}

/**
 * List Form Lookup Field Information
 */
export interface IListFormLookupFieldInfo extends IListFormFieldInfo {
    /** The lookup field */
    lookupField?: string;

    /** The lookup list id */
    lookupListId?: string;

    /** The lookup web id */
    lookupWebId?: string;

    /** Flag to determine if multiple values exist */
    multi?: boolean;
}

/**
 * List Form MMS Field Information
 */
export interface IListFormMMSFieldInfo extends IListFormFieldInfo {
    /** Flag to determine if multiple values exist */
    multi?: boolean;

    /** The term set id */
    termSetId?: string;

    /** The term store id */
    termStoreId?: string;
}

/**
 * List Form Number Field Information
 */
export interface IListFormNumberFieldInfo extends IListFormFieldInfo {
    /** The maximum value */
    maxValue?: number;

    /** The minimum value */
    minValue?: number;

    /** Flag determining if we are displaying the value as a percentage */
    showAsPercentage?: boolean;
}

/**
 * List Form Text Field Information
 */
export interface IListFormTextFieldInfo extends IListFormFieldInfo {
    /** Flag determining if this is a note field */
    multiline?: boolean;

    /** Flag determining if this field value is html encoded */
    richText?: boolean;

    /** The number of rows to display */
    rows?: number;
}

/**
 * List Form User Field Information
 */
export interface IListFormUserFieldInfo extends IListFormFieldInfo {
    /** Flag to determine if groups are allowed */
    allowGroups?: boolean;

    /** Flag to determine if multiple values exist */
    multi?: boolean;
}

/**
 * List Form Field
 */
export interface IListFormField {
    /**
     * Creates an instance of the list form field
     * @param props - The list form field properties
     */
    new(props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;

    /** Method to load the lookup data */
    loadLookupData(info: Types.Helper.ListForm.IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.IListItemQueryResult>>;

    /** Method to load the mms data */
    loadMMSData(info: Types.Helper.ListForm.IListFormMMSFieldInfo): PromiseLike<Array<any>>;

    /** Method to load the mms value field */
    loadMMSValueField(info: Types.Helper.ListForm.IListFormMMSFieldInfo): PromiseLike<Types.IFieldManagedMetadata>;
}