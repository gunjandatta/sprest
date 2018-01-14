import { Web } from "../lib";
import { Types } from "../mapper";
import { IBaseCollection } from "../utils";
import { ListFormField } from "./listFormField";

/**
 * List Form
 */
class _ListForm {
    private _info: Types.Helper.ListForm.IListFormResult = null;
    private _props: Types.Helper.ListForm.IListFormProps = null;
    private _resolve = null;

    /**
     * Constructor
    */
    constructor(props: Types.Helper.ListForm.IListFormProps) {
        // Save the properties
        this._props = props || {} as any;
        this._props.fields = this._props.fields;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the resolve method
            this._resolve = resolve;

            // Load the list data
            this.load();
        }) as any;
    }

    /**
     * Methods
     */

    // Method to load the list data
    private load = () => {
        // Clear the information
        this._info = {
            query: this._props.query || {}
        } as any;

        // Get the web
        let list = (new Web(this._props.webUrl))
            // Get the list
            .Lists(this._props.listName)
            // Execute the request
            .execute(list => {
                // Save the list
                this._info.list = list;
            });

        // Load the fields
        list.Fields()
            // Execute the request
            .execute(fields => {
                // Clear the fields
                this._info.fields = {};

                // Save the fields
                for (let i = 0; i < fields.results.length; i++) {
                    let field = fields.results[i];

                    // Save the field
                    this._info.fields[field.InternalName] = field;
                }

                // See if the fields have been defined
                if (this._props.fields) {
                    // Process the fields
                    this.processFields();
                } else {
                    // Load the default fields
                    return this.loadDefaultFields();
                }
            });

        // See if we are loading the list item
        if (this._props.itemId > 0) {
            // Default the select query to get all the fields by default
            this._info.query.Select = this._info.query.Select || ["*"];

            // See if we are loading the attachments
            if (this._props.loadAttachments) {
                // Expand the attachment files collection
                this._info.query.Expand = this._info.query.Expand || [];
                this._info.query.Expand.push("AttachmentFiles")

                // Select the attachment files
                this._info.query.Select.push("Attachments");
                this._info.query.Select.push("AttachmentFiles");
            }

            // Get the list item
            list.Items(this._props.itemId)
                // Set the query
                .query(this._info.query)
                // Execute the request
                .execute(item => {
                    // Save the item
                    this._info.item = item;
                });
        }

        // Wait for the requests to complete
        list.done(() => {
            // Resolve the promise
            this._resolve(this._info);
        });
    }

    // Method to load the default fields
    private loadDefaultFields = () => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the content types
            this._info.list.ContentTypes()
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
                        let field = this._info.fields[fieldLink.FieldInternalName];

                        // Skip the content type field
                        if (fieldLink.FieldInternalName == "ContentType") { continue; }

                        // Skip hidden fields
                        if (field.Hidden || fieldLink.Hidden) { continue; }

                        // Save the form field
                        formFields[field.InternalName] = field;
                    }

                    // Update the fields
                    this._info.fields = formFields;

                    // Resolve the promise
                    resolve();
                }, true);
        });
    }

    // Method to process the fields
    private processFields = () => {
        let formFields = {};

        // Parse the fields provided
        for (let i = 0; i < this._props.fields.length; i++) {
            let field = this._info.fields[this._props.fields[i]];

            // Ensure the field exists
            if (field) {
                // Save the field
                formFields[field.InternalName] = field;
            }
        }

        // Update the fields
        this._info.fields = formFields;
    }

    // Method to refresh an item
    static refreshItem(info: Types.Helper.ListForm.IListFormResult): PromiseLike<Types.IListItemQueryResult> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(resolve);
        });
    }

    // Method to save a new or existing item
    static saveItem(info: Types.Helper.ListForm.IListFormResult, formValues: any) {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(response => {
                    // Refresh the item
                    this.refreshItem(info).then(item => {
                        // Update the item
                        info.item = item;

                        // Resolve the promise
                        resolve(info);
                    });
                });
            } else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };

                // Add the item
                info.list.Items().add(formValues)
                    // Execute the request
                    .execute(item => {
                        // Refresh the item
                        this.refreshItem(info).then(item => {
                            // Update the item
                            info.item = item;

                            // Resolve the promise
                            resolve(info);
                        });
                    });
            }
        });
    }
}
export const ListForm: Types.Helper.ListForm.IListForm = _ListForm as any;