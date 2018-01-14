import { Web } from "../lib";
import { Types } from "../mapper";
import { IBaseCollection } from "../utils";
import { ListFormField } from "./listFormField";

/**
 * List Form
 */
class _ListForm {
    private _fields: { [key: string]: Types.IFieldResult } = null;
    private _list: Types.IListResult = null;
    private _props: Types.Helper.ListForm.IListFormProps = null;
    private _resolve = null;

    /**
     * Constructor
    */
    constructor(props: Types.Helper.ListForm.IListFormProps) {
        // Save the properties
        this._props = props || {} as any;
        this._props.fields = this._props.fields || [];

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the resolve method
            this._resolve = resolve;

            // Load the list data
            this.load();
        }) as any;
    }

    /**
     * Properties
     */

    // The list fields
    get Fields(): { [key: string]: Types.IFieldResult } { return this._fields; }

    // The list
    get Lists(): Types.IListResult { return this._list; }

    /**
     * Methods
     */

    // Method to load the list data
    private load = () => {
        // Get the web
        (new Web(this._props.webUrl))
            // Get the list
            .Lists(this._props.listName)
            // Execute the request
            .execute(list => {
                // Save the list
                this._list = list;
            })

            // Load the fields
            .Fields()
            // Execute the request
            .execute(fields => {
                // Clear the fields
                this._fields = {};

                // Save the fields
                for (let i = 0; i < fields.results.length; i++) {
                    let field = fields.results[i];

                    // Save the field
                    this._fields[field.InternalName] = field;
                }

                // See if the fields have been defined
                if (this._props.fields) {
                    // Process the fields
                    this.processFields();
                } else {
                    // Load the default fields
                    this.loadDefaultFields();
                }
            });
    }

    // Method to load the default fields
    private loadDefaultFields = () => {
        // Load the content types
        this._list.ContentTypes()
            // Query for the default content type and expand the field links
            .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
            // Execute the request, but wait for the previous one to be completed
            .execute(ct => {
                let fields = ct.results ? ct.results[0].FieldLinks.results : [];
                let formFields = {};

                // Parse the field links
                for (let i = 0; fields.length; i++) {
                    let fieldLink = fields[i];
                    let field = this._fields[fieldLink.FieldInternalName];

                    // Skip the content type field
                    if (fieldLink.FieldInternalName == "ContentType") { continue; }

                    // Skip hidden fields
                    if (field.Hidden || fieldLink.Hidden) { continue; }

                    // Save the form field
                    formFields[field.InternalName] = field;
                }

                // Resolve the promise
                this._resolve(formFields);
            }, true);
    }

    // Method to process the fields
    private processFields = () => {
        let formFields = {};

        // Parse the fields provided
        for (let i = 0; i < this._props.fields.length; i++) {
            let field = this._fields[this._props.fields[i]];

            // Ensure the field exists
            if (field) {
                // Save the field
                formFields[field.InternalName] = field;
            }
        }

        // Resolve the promise
        this._resolve(formFields);
    }
}
export const ListForm: Types.Helper.ListForm.IListForm = _ListForm as any;