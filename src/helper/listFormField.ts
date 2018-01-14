import { Web } from "../lib";
import { Types } from "../mapper";

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
class _ListFormField {
    private _fieldInfo: IListFormFieldInfo = null;
    private _resolve = null;

    /**
     * Constructor
     */
    constructor(props: IListFormFieldInfo) {
        // Save the properties and field information
        this._fieldInfo = props || {} as any;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the resolve method
            this._resolve = resolve;

            // See if the field exists
            if (this._fieldInfo.field) {
                // Process the field
                this.processField();
            } else {
                // Load the field
                this.load();
            }
        }) as any;
    }

    /**
     * Methods
     */

    // Load the field
    private load = () => {
        // See if the field exists
        if (this._fieldInfo.field) {
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
                    this._fieldInfo.field = field;

                    // Process the field
                    this.processField();
                });
        }
    }

    // Method to proces the field and save its information
    private processField = () => {
        // Update the field information
        this._fieldInfo.defaultValue = this._fieldInfo.field.DefaultValue;
        this._fieldInfo.readOnly = this._fieldInfo.field.ReadOnlyField;
        this._fieldInfo.required = this._fieldInfo.field.Required ? true : false;
        this._fieldInfo.title = this._fieldInfo.field.Title;
        this._fieldInfo.type = this._fieldInfo.field.FieldTypeKind as number;
        this._fieldInfo.typeAsString = this._fieldInfo.field.TypeAsString;

        // Resolve the promise
        this._resolve(this._fieldInfo);
    }
}
export const ListFormField: IListFormField = _ListFormField as any;