import { Types } from "../mapper";
/**
 * List Form Field Information
 */
export interface IListFormFieldInfo {
    /** The default value. */
    defaultValue?: any;
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
 * List Form Field Properties
 */
export interface IListFormFieldProps {
    /** The list field. */
    field?: Types.IFieldResult | Types.IFieldQueryResult;
    /** The list field information. */
    fieldInfo?: IListFormFieldInfo;
    /** The initialized event */
    onInit?: (fieldInfo: IListFormFieldInfo) => void;
}
/**
 * List Form Field
 */
export interface IListFormField {
    new (props: IListFormFieldProps): any;
}
export declare const ListFormField: IListFormField;
