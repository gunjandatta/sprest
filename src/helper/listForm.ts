import { Base, SP } from "gd-sprest-def";
import { Helper, SPTypes, Web } from "..";
import {
    IListForm, IListFormAttachmentInfo,
    IListFormCache, IListFormResult, IListFormProps
} from "./types";

/**
 * List Form
 */
export const ListForm: IListForm = {
    // Method to create an instance of the list form
    create: (props: IListFormProps) => {
        let _cacheData: IListFormCache = null;
        let _info: IListFormResult = null;
        let _props: IListFormProps = null;
        let _reject: () => void = null;
        let _resolve: (info: IListFormResult) => void = null;

        // Save the properties
        _props = props || {} as any;
        _props.fields = _props.fields;

        // Method to load the list data
        let load = () => {
            // Clear the information
            _info = {
                item: _props.item,
                query: _props.query || {}
            } as any;

            // Load the data from cache
            loadFromCache();

            // Load the list data
            loadListData().then(
                // Success
                () => {
                    // See if the fields have been defined
                    if (_props.fields) {
                        // Process the fields
                        processFields();

                        // Load the item data
                        loadItem();
                    } else {
                        // Load the content type
                        loadDefaultContentType();
                    }
                },
                // Reject
                _reject
            );
        }

        // Method to load the default content type
        let loadDefaultContentType = () => {
            // See if the content type info exists
            if (_cacheData && _cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    let ct = Helper.parse(_cacheData.ct) as SP.IContentTypeQueryCollection;

                    // Load the default fields
                    loadDefaultFields(ct.results[0]);
                    return;
                } catch{
                    // Clear the cache data
                    sessionStorage.removeItem(_props.cacheKey);
                }
            }

            // Load the content types
            _info.list.ContentTypes()
                // Query for the default content type and expand the field links
                .query({
                    Expand: ["FieldLinks"],
                    Top: 1
                })
                // Execute the request, but wait for the previous one to be completed
                .execute(ct => {
                    // See if we are storing data in cache
                    if (_props.cacheKey) {
                        // Update the cache data
                        _cacheData = _cacheData || {} as any;
                        _cacheData.ct = ct.stringify();

                        // Update the cache
                        sessionStorage.setItem(_props.cacheKey, JSON.stringify(_cacheData));
                    }

                    // Resolve the promise
                    loadDefaultFields(ct.results[0]);
                }, _reject);
        }

        // Method to load the default fields
        let loadDefaultFields = (ct: SP.ContentTypeOData) => {
            let fields = ct ? ct.FieldLinks.results : [];
            let formFields = {};

            // Parse the field links
            for (let i = 0; i < fields.length; i++) {
                let fieldLink = fields[i];

                // Get the field
                let field = _info.fields[fieldLink.Name];
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
            _info.fields = formFields;

            // Load the item data
            loadItem();
        }

        // Method to load the field data
        let loadFieldData = (fields: SP.IFieldCollection) => {
            // Clear the fields
            _info.fields = {};

            // Parse the fields
            for (let i = 0; i < fields.results.length; i++) {
                let field = fields.results[i];

                // See if the exclude fields is defined
                if (_props.excludeFields) {
                    let excludeField = false;

                    // Parse the fields to exclude
                    for (let j = 0; j < _props.excludeFields.length; j++) {
                        // See if we are excluding this field
                        if (_props.excludeFields[j] == field.InternalName) {
                            // Set the flag
                            excludeField = true;
                            break;
                        }
                    }

                    // See if we are excluding the field
                    if (excludeField) { continue; }
                }

                // Save the field
                _info.fields[field.InternalName] = field;
            }
        }

        // Method to load the data from cache
        let loadFromCache = () => {
            // See if we are loading from cache
            if (_props.cacheKey) {
                // Get the data
                let data = sessionStorage.getItem(_props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _cacheData = JSON.parse(data);

                        // Update the list information
                        _info = _info || {} as any;
                        _info.list = Helper.parse(_cacheData.list);

                        // Load the field data
                        loadFieldData(Helper.parse(_cacheData.fields));
                    } catch {
                        // Clear the cache data
                        sessionStorage.removeItem(_props.cacheKey);
                    }
                }
            }
        }

        // Method to load the item
        let loadItem = () => {
            let reloadItem = false;

            // See if the item already exist
            if (_info.item) {
                // Parse the fields
                for (let fieldName in _info.fields) {
                    let field = _info.fields[fieldName];

                    // See what type of field this is
                    switch (field.FieldTypeKind) {
                        // Lookup or User Field
                        case SPTypes.FieldType.Lookup:
                        case SPTypes.FieldType.User:
                            let fieldValue = _info.item[fieldName + "Id"];

                            // Ensure the value exists
                            if (fieldValue) {
                                // See if a value exists
                                if (fieldValue.results ? fieldValue.results.length > 0 : fieldValue > 0) {
                                    // Ensure the field data has been loaded
                                    if (_info.item[fieldName] == null) {
                                        // Set the flag
                                        reloadItem = true;
                                    }
                                }
                            }
                            break;

                        // Default
                        default:
                            // See if this is an taxonomy field
                            if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                                let fieldValue = _info.item[fieldName + "Id"];

                                // Ensure the value exists
                                if (fieldValue) {
                                    // See if a field value exists
                                    if (fieldValue.results ? fieldValue.results.length > 0 : fieldValue != null) {
                                        // Parse the fields
                                        for (let fieldName in _info.fields) {
                                            let valueField = _info.fields[fieldName];

                                            // See if this is the value field
                                            if (valueField.InternalName == field.InternalName + "_0" || valueField.Title == field.InternalName + "_0") {
                                                // Ensure the value field is loaded
                                                if (_info.item[valueField.InternalName] == null) {
                                                    // Set the flag
                                                    reloadItem = true;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                    }

                    // See if we are reloading the item
                    if (reloadItem) { break; }
                }
            }

            // See if the item exists
            if (_info.item && !reloadItem) {
                // See if we are loading attachments
                if (_props.loadAttachments && _info.attachments == null) {
                    // Load the attachments
                    ListForm.loadAttachments(_props).then(attachments => {
                        // Set the attachments
                        _info.attachments = attachments;

                        // Resolve the promise
                        _resolve(_info);
                    }, _reject)
                } else {
                    // Resolve the promise
                    _resolve(_info);
                }
            }
            // Else, see if we are loading the list item
            else if (reloadItem || _props.itemId > 0) {
                // Update the item query
                _info.query = ListForm.generateODataQuery(_info, _props.loadAttachments);

                // Get the list item
                _info.list.Items(reloadItem ? _props.item.Id : _props.itemId)
                    // Set the query
                    .query(_info.query)
                    // Execute the request
                    .execute(item => {
                        // Save the attachments
                        _info.attachments = item.AttachmentFiles.results;

                        // Save the item
                        _info.item = item;

                        // Resolve the promise
                        _resolve(_info);
                    }, _reject);
            } else {
                // Resolve the promise
                _resolve(_info);
            }
        }

        // Method to load the list data
        let loadListData = (): PromiseLike<void> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if the list & fields already exist
                if (_info.list && _info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }

                // Get the web
                Web(_props.webUrl)
                    // Get the list
                    .Lists(_props.listName)
                    // Execute the request
                    .execute(list => {
                        // Save the list and web url
                        _info.list = list;
                        _info.webUrl = _props.webUrl;
                    }, reject)
                    // Load the fields
                    .Fields()
                    // Execute the request
                    .execute(fields => {
                        // See if we are caching the data
                        if (_props.cacheKey) {
                            // Update the cache
                            _cacheData = _cacheData || {} as any;
                            _cacheData.fields = fields.stringify();
                            _cacheData.list = _info.list.stringify();

                            // Cache the data
                            sessionStorage.setItem(_props.cacheKey, JSON.stringify(_cacheData));
                        }

                        // Load the field data
                        loadFieldData(fields as any);

                        // Resolve the promise
                        resolve();
                    }, reject, true);
            });
        }

        // Method to process the fields
        let processFields = () => {
            let formFields = {};

            // Parse the fields provided
            for (let i = 0; i < _props.fields.length; i++) {
                let field = _info.fields[_props.fields[i]];

                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;

                    // See if this is a taxonomy field
                    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                        // Parse the list fields
                        for (let fieldName in _info.fields) {
                            let valueField = _info.fields[fieldName];

                            // See if this is a value field
                            if (valueField.InternalName == field.InternalName + "_0" || valueField.Title == field.InternalName + "_0") {
                                // Include this field
                                formFields[valueField.InternalName] = valueField;
                                break;
                            }
                        }
                    }
                }
            }

            // Update the fields
            _info.fields = formFields;
        }

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the methods
            _reject = reject;
            _resolve = resolve;

            // Load the list data
            load();
        }) as any;
    },

    // Method to generate the odata query
    generateODataQuery: (info: IListFormResult, loadAttachments: boolean = false): Base.IODataQuery => {
        let query: Base.IODataQuery = info.query || {};

        // Default the select query to get all the fields by default
        query.Select = query.Select || ["*"];
        query.Expand = query.Expand || [];

        // See if we are loading the attachments
        if (loadAttachments) {
            // Expand the attachment files collection
            query.Expand.push("AttachmentFiles")

            // Select the attachment files
            query.Select.push("Attachments");
            query.Select.push("AttachmentFiles");
        }

        // Parse the fields
        for (let fieldName in info.fields) {
            let field = info.fields[fieldName];

            // Update the query, based on the type
            switch (field.FieldTypeKind) {
                // Lookup Field
                case SPTypes.FieldType.Lookup:
                    // Expand the field
                    query.Expand.push(field.InternalName);

                    // Select the fields
                    query.Select.push(field.InternalName + "/Id");
                    query.Select.push(field.InternalName + "/" + (field as SP.FieldLookup).LookupField);
                    break;

                // User Field
                case SPTypes.FieldType.User:
                    // Expand the field
                    query.Expand.push(field.InternalName);

                    // Select the fields
                    query.Select.push(field.InternalName + "/Id");
                    query.Select.push(field.InternalName + "/Title");
                    break;

                // Default
                default:
                    // See if this is an taxonomy field
                    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                        // Parse the fields
                        for (let fieldName in info.fields) {
                            let valueField = info.fields[fieldName];

                            // See if this is the value field
                            if (valueField.InternalName == field.InternalName + "_0" || valueField.Title == field.InternalName + "_0") {
                                // Include the value field
                                query.Select.push(valueField.InternalName);
                                break;
                            }
                        }
                    }
                    break;
            }
        }

        // Return the query
        return query;
    },

    // Method to load the item attachments
    loadAttachments: (info: IListFormProps): PromiseLike<Array<SP.Attachment>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the item id exists
            let itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                Web(info.webUrl)
                    // Get the list
                    .Lists(info.listName)
                    // Get the item
                    .Items(itemId)
                    // Get the attachment files
                    .AttachmentFiles()
                    // Execute the request
                    .execute(attachments => {
                        // Ensure the attachments exist
                        if (!attachments.existsFl) {
                            // Reject the promise
                            reject(attachments.response);
                            return;
                        }

                        // Resolve the promise
                        resolve(attachments.results || []);
                    }, reject);
            } else {
                // Resolve the promise
                resolve([]);
            }
        });
    },

    // Method to refresh an item
    refreshItem: (info: IListFormResult): PromiseLike<IListFormResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Update the query
            info.query = ListForm.generateODataQuery(info, true);

            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(item => {
                // Update the item
                info.item = item;

                // Resolve the promise
                resolve(info);
            }, reject);
        });
    },

    // Method to remove attachments from an item
    removeAttachment: (info: IListFormResult, fileName: string): PromiseLike<IListFormResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure attachments exist
            if (info.attachments) {
                // Parse the attachments
                for (let i = 0; i < info.attachments.length; i++) {
                    // See if this is the target attachment
                    let attachment = info.attachments[i];
                    if (attachment.FileName == fileName) {
                        // Get the web
                        Web(info.webUrl)
                            // Get the file
                            .getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                            // Delete the file
                            .delete()
                            // Execute the request
                            .execute(() => {
                                // Resolve the promise
                                resolve(info);
                            }, reject);

                        // Attachment found
                        return;
                    }

                    // Attachment not found
                    reject("Attachment '" + fileName + "' was not found.");
                }
            } else {
                // Attachments not loaded
                reject("Attachment '" + fileName + "' was not found.");
            }
        });
    },

    // Method to save attachments to an existing item
    saveAttachments: (info: IListFormProps, attachmentInfo: Array<IListFormAttachmentInfo>): PromiseLike<Array<SP.Attachment>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                let attachments = Web(info.webUrl)
                    // Get the lists
                    .Lists(info.listName)
                    // Get the item
                    .Items(itemId)
                    // Get the attachment files
                    .AttachmentFiles();

                // Parse the attachment information
                for (let i = 0; i < attachmentInfo.length; i++) {
                    let attachment = attachmentInfo[i];

                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }

                // Wait for the requests to complete
                attachments.done((...args) => {
                    // Resolve the promise
                    resolve.apply(args);
                });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    },

    // Method to save a new or existing item
    saveItem: (info: IListFormResult, formValues: any): PromiseLike<IListFormResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(response => {
                    // Refresh the item
                    ListForm.refreshItem(info).then(info => {
                        // Resolve the promise
                        resolve(info);
                    }, reject);
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
                        ListForm.refreshItem(info).then(info => {
                            // Resolve the promise
                            resolve(info);
                        });
                    }, reject);
            }
        });
    },

    // Method to show a file dialog
    showFileDialog: (info?: IListFormResult, onSave?: (fileInfo: IListFormAttachmentInfo) => void): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Method to add an attachment
            let addAttachment = (name, data) => {
                // Call the save event
                onSave ? onSave({ name, data }) : null;

                // Get the list
                info.list
                    // Get the item
                    .Items(info.item.Id)
                    // Get the attachments
                    .AttachmentFiles()
                    // Add the file
                    .add(name, data)
                    // Execute the request
                    .execute(() => {
                        // Refresh the item
                        ListForm.refreshItem(info).then(info => {
                            // Remove the element
                            document.body.removeChild(el);

                            // Resolve the promise
                            resolve(info);
                        });
                    }, reject);
            };

            // Method to read the file
            let readFile = (ev) => {
                // Get the source file
                let srcFile = ev.target["files"][0];
                if (srcFile) {
                    let reader = new FileReader();

                    // Set the file loaded event
                    reader.onloadend = (ev: any) => {
                        let attachment = null;

                        let ext = srcFile.name.split(".") as any;
                        ext = ext[ext.length - 1].toLowerCase();

                        // See if the info exists
                        if (info) {
                            // Add the attachment
                            addAttachment(srcFile.name, ev.target.result);
                        } else {
                            // Remove the element
                            document.body.removeChild(el);

                            // Resolve the promise with the file information
                            resolve({
                                data: ev.target.result,
                                name: srcFile.name
                            });
                        }
                    }

                    // Set the error
                    reader.onerror = (ev: any) => {
                        // Remove the element
                        document.body.removeChild(el);

                        // Reject the promise
                        reject(ev.target.error);
                    }

                    // Read the file
                    reader.readAsArrayBuffer(srcFile);
                }
            }

            // Create the file element
            let el = document.body.querySelector("#listform-attachment") as HTMLInputElement;
            if (el == null) {
                el = document.createElement("input");

                // Set the properties
                el.id = "listform-attachment";
                el.type = "file";
                el.hidden = true;
                el.onchange = readFile;

                // Add the element to the body
                document.body.appendChild(el);
            }

            // Show the dialog
            el.click();
        });
    }
}