import { Web } from "../lib";
import { Types } from "../mapper";
import { IBaseCollection } from "../utils";
import { parse } from "./parse";
import { ListFormField } from "./listFormField";

/**
 * List Form
 */
class _ListForm {
    private _cacheData: Types.Helper.ListForm.IListFormCache = null;
    private _info: Types.Helper.ListForm.IListFormResult = null;
    private _props: Types.Helper.ListForm.IListFormProps = null;
    private _resolve: (info: Types.Helper.ListForm.IListFormResult) => void = null;

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
            item: this._props.item,
            query: this._props.query || {}
        } as any;

        // Load the data from cache
        this.loadFromCache();

        // Load the list data
        this.loadListData().then(() => {
            // See if the fields have been defined
            if (this._props.fields) {
                // Process the fields
                this.processFields();

                // Load the item data
                this.loadItem();
            } else {
                // Load the content type
                this.loadDefaultContentType();
            }
        });
    }

    // Method to load the item attachments
    static loadAttachments(info: Types.Helper.ListForm.IListFormResult): PromiseLike<Array<Types.IAttachment>> {
        // Return a promise
        return new Promise((resolve, reject) => {
            let query: Types.ODataQuery = {
                Expand: ["AttachmentFiles"],
                Select: ["Attachments", "AttachmentFiles"]
            };

            // Get the item
            info.list.Items(info.item.Id).query(query).execute(item => {
                // Resolve the promise
                resolve(item.AttachmentFiles.results);
            });
        });
    }

    // Method to load the default content type
    private loadDefaultContentType = () => {
        // See if the content type info exists
        if (this._cacheData && this._cacheData.ct) {
            // Try to parse the data
            try {
                // Parse the content type
                let ct = parse(this._cacheData.ct) as IBaseCollection<Types.IContentTypeQueryResult>;

                // Load the default fields
                this.loadDefaultFields(ct.results[0]);
                return;
            } catch{
                // Clear the cache data
                sessionStorage.removeItem(this._props.cacheKey);
            }
        }

        // Load the content types
        this._info.list.ContentTypes()
            // Query for the default content type and expand the field links
            .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
            // Execute the request, but wait for the previous one to be completed
            .execute(ct => {
                // See if we are storing data in cache
                if (this._props.cacheKey) {
                    // Update the cache data
                    this._cacheData = this._cacheData || {} as any;
                    this._cacheData.ct = ct.stringify();

                    // Update the cache
                    sessionStorage.setItem(this._props.cacheKey, JSON.stringify(this._cacheData));
                }

                // Resolve the promise
                this.loadDefaultFields(ct.results[0]);
            });
    }

    // Method to load the default fields
    private loadDefaultFields = (ct: Types.IContentTypeQueryResult) => {
        let fields = ct ? ct.FieldLinks.results : [];
        let formFields = {};

        // Parse the field links
        for (let i = 0; i < fields.length; i++) {
            let fieldLink = fields[i];

            // Get the field
            let field = this._info.fields[fieldLink.Name];
            if (field) {
                // Skip the content type field
                if (field.InternalName == "ContentType") { continue; }

                // Skip hidden fields
                if (field.Hidden || fieldLink.Hidden) { continue; }

                // Save the form field
                formFields[field.InternalName] = field;
            }
        }

        // Update the fields
        this._info.fields = formFields;

        // Load the item data
        this.loadItem();
    }

    // Method to load the field data
    private loadFieldData = (fields: Types.IFieldResults) => {
        // Clear the fields
        this._info.fields = {};

        // Parse the fields
        for (let i = 0; i < fields.results.length; i++) {
            let field = fields.results[i];

            // Save the field
            this._info.fields[field.InternalName] = field;
        }
    }

    // Method to load the data from cache
    private loadFromCache = () => {
        // See if we are loading from cache
        if (this._props.cacheKey) {
            // Get the data
            let data = sessionStorage.getItem(this._props.cacheKey);
            if (data) {
                // Try to parse the data
                try {
                    // Set the cache data
                    this._cacheData = JSON.parse(data);

                    // Update the list information
                    this._info = this._info || {} as any;
                    this._info.list = parse(this._cacheData.list);

                    // Load the field data
                    this.loadFieldData(parse(this._cacheData.fields));
                } catch {
                    // Clear the cache data
                    sessionStorage.removeItem(this._props.cacheKey);
                }
            }
        }
    }

    // Method to load the item
    private loadItem = () => {
        // See if the item already exist
        if (this._info.item) {
            // Resolve the promise
            this._resolve(this._info);
        }
        // Else, see if we are loading the list item
        else if (this._props.itemId > 0) {
            // Default the select query to get all the fields by default
            this._info.query = this._props.query || {};
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
            this._info.list.Items(this._props.itemId)
                // Set the query
                .query(this._info.query)
                // Execute the request
                .execute(item => {
                    // Save the item
                    this._info.item = item;

                    // Resolve the promise
                    this._resolve(this._info);
                });
        } else {
            // Resolve the promise
            this._resolve(this._info);
        }
    }

    // Method to load the list data
    private loadListData = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the list & fields already exist
            if (this._info.list && this._info.fields) {
                // Resolve the promise
                resolve();
                return;
            }

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
                    // See if we are caching the data
                    if (this._props.cacheKey) {
                        // Update the cache
                        this._cacheData = this._cacheData || {} as any;
                        this._cacheData.fields = fields.stringify();
                        this._cacheData.list = this._info.list.stringify();

                        // Cache the data
                        sessionStorage.setItem(this._props.cacheKey, JSON.stringify(this._cacheData));
                    }

                    // Load the field data
                    this.loadFieldData(fields as any);

                    // Resolve the promise
                    resolve();
                });
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
    static refreshItem(info: Types.Helper.ListForm.IListFormResult): PromiseLike<Types.Helper.ListForm.IListFormResult> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(item => {
                // Update the item
                info.item = item;

                // Resolve the promise
                resolve(info);
            });
        });
    }

    // Method to remove attachments from an item
    removeAttachments(info: Types.Helper.ListForm.IListFormProps, attachments: Array<Types.IAttachment>): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            let web = new Web(info.webUrl);

            // Parse the attachments
            for (let i = 0; i < attachments.length; i++) {
                let attachment = attachments[i];

                // Get the file
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    // Delete the file
                    .delete()
                    // Execute the request
                    .execute(true);
            }

            // Wait for the requests to complete
            web.done(() => {
                // Resolve the request
                resolve();
            });
        });
    }

    // Method to save attachments to an existing item
    static saveAttachments(info: Types.Helper.ListForm.IListFormProps, attachmentInfo: Array<Types.Helper.ListForm.IListFormAttachmentInfo>): PromiseLike<Array<Types.IAttachment>> {
        // Return a promise
        return new Promise((resolve, reject) => {
            let itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                let attachments = (new Web(info.webUrl))
                    // Get the lists
                    .Lists(info.listName)
                    // Get the item
                    .Items(info.itemId)
                    // Get the attachment files
                    .AttachmentFiles();

                // Parse the attachment information
                for (let i = 0; attachmentInfo.length; i++) {
                    let attachment = attachmentInfo[i];

                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }

                // Wait for the requests to complete
                attachments.done((...args) => {
                    // Resolve the promise
                    resolve(args);
                });
            } else {
                // Reject the promise
                console.error("[gd-sprest] The item does not exist.")
                reject();
            }
        });
    }

    // Method to save a new or existing item
    static saveItem(info: Types.Helper.ListForm.IListFormResult, formValues: any): PromiseLike<Types.Helper.ListForm.IListFormResult> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(response => {
                    // Refresh the item
                    this.refreshItem(info).then(info => {
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
                        // Update the info
                        info.item = item;

                        // Refresh the item
                        this.refreshItem(info).then(info => {
                            // Resolve the promise
                            resolve(info);
                        });
                    });
            }
        });
    }
}
export const ListForm: Types.Helper.ListForm.IListForm = _ListForm as any;