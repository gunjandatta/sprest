import { Types } from "../..";
import { ITermInfo } from ".";

/**
 * List Form Field Information
 */
export interface IListFormFieldInfo {
    /** The default value. */
    defaultValue?: any;

    /** The list field. */
    field?: Types.SP.IFieldResult | Types.SP.IFieldQueryResult;

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

    /** The list field. */
    field?: Types.SP.IFieldChoice | Types.SP.IFieldMultiChoice;

    /** Flag to determine if multiple values exist */
    multi?: boolean;
}

/**
 * List Form Date Field Information
 */
export interface IListFormDateFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: Types.SP.IFieldDateTime;

    /** Flag determining if we are displaying time */
    showTime?: boolean;
}

/**
 * List Form Lookup Field Information
 */
export interface IListFormLookupFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: Types.SP.IFieldLookup;

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
    /** The list field. */
    field?: Types.SP.IFieldManagedMetadata;

    /** Flag to determine if multiple values exist */
    multi?: boolean;

    /** The term id */
    termId?: string;

    /** The term set id */
    termSetId?: string;

    /** The term store id */
    termStoreId?: string;
}

/**
 * List Form Number Field Information
 */
export interface IListFormNumberFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: Types.SP.IFieldNumber | Types.SP.IFieldCurrency;

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
    /** The list field. */
    field?: Types.SP.IFieldText | Types.SP.IFieldNote;

    /** Flag determining if this is a note field */
    multiline?: boolean;

    /** Flag determining if this field value is html encoded */
    richText?: boolean;

    /** The number of rows to display */
    rows?: number;
}

/**
 * List Form URL Field Information
 */
export interface IListFormUrlFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: Types.SP.IFieldUrl;
}

/**
 * List Form User Field Information
 */
export interface IListFormUserFieldInfo extends IListFormFieldInfo {
    /** Flag to determine if groups are allowed */
    allowGroups?: boolean;

    /** The list field. */
    field?: Types.SP.IFieldUser;

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

    /**
     * Creates an instance of the list form field
     * @param props - The list form field properties
     */
    create(props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;

    /** Method to load the lookup data */
    loadLookupData(info: IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.SP.IListItemQueryResult>>;

    /** Method to load the mms data */
    loadMMSData(info: IListFormMMSFieldInfo): PromiseLike<Array<ITermInfo>>;

    /** Method to load the mms value field */
    loadMMSValueField(info: IListFormMMSFieldInfo): PromiseLike<Types.SP.IFieldManagedMetadata>;
}