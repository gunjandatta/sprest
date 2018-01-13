import { Web } from "../lib";
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
    new(props: IListFormFieldProps);
}
class _ListFormField {
    private _field: Types.IFieldResult | Types.IFieldQueryResult = null;
    private _fieldInfo: IListFormFieldInfo = null;
    private _props: IListFormFieldProps = null;

    /**
     * Constructor
     * @param props
     */
    constructor(props: IListFormFieldProps) {
        // Save the properties and field information
        this._props = props || {};
        this._field = props.field;
        this._fieldInfo = props.fieldInfo || {} as any;

        // See if the field exists
        if (this._field) {
            // Process the field
            this.processField();
        } else {
            // Load the field
            this.load();
        }
    }

    /**
     * Properties
     */

    // Field
    get Field(): Types.IFieldResult | Types.IFieldQueryResult { return this._field; }

    // Field Information
    get FieldInfo(): IListFormFieldInfo { return this._fieldInfo; }

    /**
     * Methods
     */

    // Load the field
    private load = () => {
        // See if the field exists
        if (this._field) {
            // Process the field
            this.processField();
        }
        // Else, load the field from the information provided
        else {
            // Get the web
            (new Web(this._fieldInfo.webUrl))
                // Get the list
                .Lists(this._fieldInfo.listName)
                // Get the fields
                .Fields()
                // Get the field by its internal name
                .getByInternalNameOrTitle(this._fieldInfo.name)
                // Execute the request
                .execute((field) => {
                    // Save the field
                    this._field = field;

                    // Process the field
                    this.processField();
                });
        }
    }

    // Method to proces the field and save its information
    private processField = () => {
        // Update the field information
        this._fieldInfo.defaultValue = this._field.DefaultValue;
        this._fieldInfo.readOnly = this._field.ReadOnlyField;
        this._fieldInfo.required = this._field.Required ? true : false;
        this._fieldInfo.title = this._field.Title;
        this._fieldInfo.type = this._field.FieldTypeKind as number;
        this._fieldInfo.typeAsString = this._field.TypeAsString;

        // Call the initialize event
        this._props.onInit ? this._props.onInit(this._fieldInfo) : null;
    }
}
export const ListFormField: IListFormField = _ListFormField;