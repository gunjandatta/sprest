import { SP } from "gd-sprest-def";
import { ITermInfo } from "./taxonomy";

/**
 * List Form Field
 */
export const ListFormField: IListFormField;

/**
 * List Form Field Information
 */
export interface IListFormFieldInfo {
    /** The default value. */
    defaultValue?: any;

    /** The list field. */
    field?: SP.Field | SP.FieldOData | SP.Taxonomy.TaxonomyField;

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
    field?: SP.FieldChoice | SP.FieldMultiChoice;

    /** Flag to determine if multiple values exist */
    multi?: boolean;
}

/**
 * List Form Date Field Information
 */
export interface IListFormDateFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: SP.FieldDateTime;

    /** Flag determining if we are displaying time */
    showTime?: boolean;
}

/**
 * List Form Lookup Field Information
 */
export interface IListFormLookupFieldInfo extends IListFormFieldInfo {
    /** The list field. */
    field?: SP.FieldLookup;

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
    field?: SP.Field & SP.Taxonomy.ITaxonomyField;

    /** Flag to determine if multiple values exist */
    multi?: boolean;

    /** The term id */
    termId?: string;

    /** The term set id */
    termSetId?: string;

    /** The term store id */
    termStoreId?: string;

    /** The value field */
    valueField?: SP.FieldMultiLineText;
}

/**
 * List Form Number Field Information
 */
export interface IListFormNumberFieldInfo extends IListFormFieldInfo {
    /** The number of decimals. */
    decimals?: number;

    /** The list field. */
    field?: SP.FieldNumber | SP.FieldCurrency;

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
    field?: SP.FieldText | SP.FieldMultiLineText;

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
    field?: SP.FieldUrl;
}

/**
 * List Form User Field Information
 */
export interface IListFormUserFieldInfo extends IListFormFieldInfo {
    /** Flag to determine if groups are allowed */
    allowGroups?: boolean;

    /** The list field. */
    field?: SP.FieldUser;

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
    create(props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;

    /** Method to load the lookup data */
    loadLookupData(info: IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<SP.IListItemQuery>>;

    /** Method to load the mms data */
    loadMMSData(info: IListFormMMSFieldInfo): PromiseLike<Array<ITermInfo>>;

    /** Method to load the mms value field */
    loadMMSValueField(info: IListFormMMSFieldInfo): PromiseLike<SP.FieldMultiLineText>;
}