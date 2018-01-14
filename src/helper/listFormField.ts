import { Web } from "../lib";
import { Types } from "../mapper";

/**
 * List Form Field
 */
class _ListFormField {
    private _fieldInfo: Types.Helper.ListForm.IListFormFieldInfo = null;
    private _resolve = null;

    /**
     * Constructor
     */
    constructor(props: Types.Helper.ListForm.IListFormFieldInfo) {
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
export const ListFormField: Types.Helper.ListForm.IListFormField = _ListFormField as any;