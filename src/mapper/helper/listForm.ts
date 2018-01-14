import { Types } from "..";

/**
 * List Form
 */
export interface IListForm {
    /**
     * Creates an instance of the list form
     * @param props - The list form properties.
     */
    new(props: IListFormProps): PromiseLike<{ [key: string]: Types.IFieldResult }>;

    /** The list fields */
    Fields: { [key: string]: Types.IFieldResult };

    /** The list */
    List: Types.IListResult;
}

/**
 * List Form Properties
 */
export interface IListFormProps {
    /** The form fields */
    fields?: Array<string>;

    /** The list name */
    listName: string;

    /** The relative web url containing the list */
    webUrl?: string;
}

/**
 * List Form Field
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
    new(props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;
}