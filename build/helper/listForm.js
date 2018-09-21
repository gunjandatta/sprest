"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
/**
 * List Form
 */
exports.ListForm = {
    // Method to create an instance of the list form
    create: function (props) {
        var _cacheData = null;
        var _info = null;
        var _props = null;
        var _reject = null;
        var _resolve = null;
        // Save the properties
        _props = props || {};
        _props.fields = _props.fields;
        // Method to load the list data
        var load = function () {
            // Clear the information
            _info = {
                item: _props.item,
                query: _props.query || {}
            };
            // Load the data from cache
            loadFromCache();
            // Load the list data
            loadListData().then(
            // Success
            function () {
                // See if the fields have been defined
                if (_props.fields) {
                    // Process the fields
                    processFields();
                    // Load the item data
                    loadItem();
                }
                else {
                    // Load the content type
                    loadDefaultContentType();
                }
            }, 
            // Reject
            _reject);
        };
        // Method to load the default content type
        var loadDefaultContentType = function () {
            // See if the content type info exists
            if (_cacheData && _cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    var ct = __1.Helper.parse(_cacheData.ct);
                    // Load the default fields
                    loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
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
                .execute(function (ct) {
                // See if we are storing data in cache
                if (_props.cacheKey) {
                    // Update the cache data
                    _cacheData = _cacheData || {};
                    _cacheData.ct = ct.stringify();
                    // Update the cache
                    sessionStorage.setItem(_props.cacheKey, JSON.stringify(_cacheData));
                }
                // Resolve the promise
                loadDefaultFields(ct.results[0]);
            }, _reject);
        };
        // Method to load the default fields
        var loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            // Parse the field links
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                // Get the field
                var field = _info.fields[fieldLink.Name];
                if (field) {
                    // Skip the content type field
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    // Skip hidden fields
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    // Save the form field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _info.fields = formFields;
            // Load the item data
            loadItem();
        };
        // Method to load the field data
        var loadFieldData = function (fields) {
            // Clear the fields
            _info.fields = {};
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // See if the exclude fields is defined
                if (_props.excludeFields) {
                    var excludeField = false;
                    // Parse the fields to exclude
                    for (var j = 0; j < _props.excludeFields.length; j++) {
                        // See if we are excluding this field
                        if (_props.excludeFields[j] == field.InternalName) {
                            // Set the flag
                            excludeField = true;
                            break;
                        }
                    }
                    // See if we are excluding the field
                    if (excludeField) {
                        continue;
                    }
                }
                // Save the field
                _info.fields[field.InternalName] = field;
            }
        };
        // Method to load the data from cache
        var loadFromCache = function () {
            // See if we are loading from cache
            if (_props.cacheKey) {
                // Get the data
                var data = sessionStorage.getItem(_props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _cacheData = JSON.parse(data);
                        // Update the list information
                        _info = _info || {};
                        _info.list = __1.Helper.parse(_cacheData.list);
                        // Load the field data
                        loadFieldData(__1.Helper.parse(_cacheData.fields));
                    }
                    catch (_a) {
                        // Clear the cache data
                        sessionStorage.removeItem(_props.cacheKey);
                    }
                }
            }
        };
        // Method to load the item
        var loadItem = function () {
            var reloadItem = false;
            // See if the item already exist
            if (_info.item) {
                // Parse the fields
                for (var fieldName in _info.fields) {
                    var field = _info.fields[fieldName];
                    // See what type of field this is
                    switch (field.FieldTypeKind) {
                        // Lookup or User Field
                        case __1.SPTypes.FieldType.Lookup:
                        case __1.SPTypes.FieldType.User:
                            var fieldValue = _info.item[fieldName + "Id"];
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
                                var fieldValue_1 = _info.item[fieldName + "Id"];
                                // Ensure the value exists
                                if (fieldValue_1) {
                                    // See if a field value exists
                                    if (fieldValue_1.results ? fieldValue_1.results.length > 0 : fieldValue_1 != null) {
                                        // Parse the fields
                                        for (var fieldName_1 in _info.fields) {
                                            var valueField = _info.fields[fieldName_1];
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
                    if (reloadItem) {
                        break;
                    }
                }
            }
            // See if the item exists
            if (_info.item && !reloadItem) {
                // See if we are loading attachments
                if (_props.loadAttachments && _info.attachments == null) {
                    // Load the attachments
                    exports.ListForm.loadAttachments(_props).then(function (attachments) {
                        // Set the attachments
                        _info.attachments = attachments;
                        // Resolve the promise
                        _resolve(_info);
                    }, _reject);
                }
                else {
                    // Resolve the promise
                    _resolve(_info);
                }
            }
            // Else, see if we are loading the list item
            else if (reloadItem || _props.itemId > 0) {
                // Update the item query
                _info.query = exports.ListForm.generateODataQuery(_info, _props.loadAttachments);
                // Get the list item
                _info.list.Items(reloadItem ? _props.item.Id : _props.itemId)
                    // Set the query
                    .query(_info.query)
                    // Execute the request
                    .execute(function (item) {
                    // Save the attachments
                    _info.attachments = item.AttachmentFiles.results;
                    // Save the item
                    _info.item = item;
                    // Resolve the promise
                    _resolve(_info);
                }, _reject);
            }
            else {
                // Resolve the promise
                _resolve(_info);
            }
        };
        // Method to load the list data
        var loadListData = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the list & fields already exist
                if (_info.list && _info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the web
                __1.Web(_props.webUrl)
                    // Get the list
                    .Lists(_props.listName)
                    // Execute the request
                    .execute(function (list) {
                    // Save the list and web url
                    _info.list = list;
                    _info.webUrl = _props.webUrl;
                }, reject)
                    // Load the fields
                    .Fields()
                    // Execute the request
                    .execute(function (fields) {
                    // See if we are caching the data
                    if (_props.cacheKey) {
                        // Update the cache
                        _cacheData = _cacheData || {};
                        _cacheData.fields = fields.stringify();
                        _cacheData.list = _info.list.stringify();
                        // Cache the data
                        sessionStorage.setItem(_props.cacheKey, JSON.stringify(_cacheData));
                    }
                    // Load the field data
                    loadFieldData(fields);
                    // Resolve the promise
                    resolve();
                }, reject);
            });
        };
        // Method to process the fields
        var processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _props.fields.length; i++) {
                var field = _info.fields[_props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                    // See if this is a taxonomy field
                    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                        // Parse the list fields
                        for (var fieldName in _info.fields) {
                            var valueField = _info.fields[fieldName];
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
        };
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the methods
            _reject = reject;
            _resolve = resolve;
            // Load the list data
            load();
        });
    },
    // Method to generate the odata query
    generateODataQuery: function (info, loadAttachments) {
        if (loadAttachments === void 0) { loadAttachments = false; }
        var query = info.query || {};
        // Default the select query to get all the fields by default
        query.Select = query.Select || ["*"];
        query.Expand = query.Expand || [];
        // See if we are loading the attachments
        if (loadAttachments) {
            // Expand the attachment files collection
            query.Expand.push("AttachmentFiles");
            // Select the attachment files
            query.Select.push("Attachments");
            query.Select.push("AttachmentFiles");
        }
        // Parse the fields
        for (var fieldName in info.fields) {
            var field = info.fields[fieldName];
            // Update the query, based on the type
            switch (field.FieldTypeKind) {
                // Lookup Field
                case __1.SPTypes.FieldType.Lookup:
                    // Expand the field
                    query.Expand.push(field.InternalName);
                    // Select the fields
                    query.Select.push(field.InternalName + "/Id");
                    query.Select.push(field.InternalName + "/" + field.LookupField);
                    break;
                // User Field
                case __1.SPTypes.FieldType.User:
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
                        for (var fieldName_2 in info.fields) {
                            var valueField = info.fields[fieldName_2];
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
    loadAttachments: function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the item id exists
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                __1.Web(info.webUrl)
                    // Get the list
                    .Lists(info.listName)
                    // Get the item
                    .Items(itemId)
                    // Get the attachment files
                    .AttachmentFiles()
                    // Execute the request
                    .execute(function (attachments) {
                    // Ensure the attachments exist
                    if (!attachments.existsFl) {
                        // Reject the promise
                        reject(attachments.response);
                        return;
                    }
                    // Resolve the promise
                    resolve(attachments.results || []);
                }, reject);
            }
            else {
                // Resolve the promise
                resolve([]);
            }
        });
    },
    // Method to refresh an item
    refreshItem: function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Update the query
            info.query = exports.ListForm.generateODataQuery(info, true);
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                // Update the item
                info.item = item;
                // Resolve the promise
                resolve(info);
            }, reject);
        });
    },
    // Method to remove attachments from an item
    removeAttachment: function (info, fileName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure attachments exist
            if (info.attachments) {
                // Parse the attachments
                for (var i = 0; i < info.attachments.length; i++) {
                    // See if this is the target attachment
                    var attachment = info.attachments[i];
                    if (attachment.FileName == fileName) {
                        // Get the web
                        __1.Web(info.webUrl)
                            // Get the file
                            .getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                            // Delete the file
                            .delete()
                            // Execute the request
                            .execute(function () {
                            // Resolve the promise
                            resolve(info);
                        }, reject);
                        // Attachment found
                        return;
                    }
                    // Attachment not found
                    reject("Attachment '" + fileName + "' was not found.");
                }
            }
            else {
                // Attachments not loaded
                reject("Attachment '" + fileName + "' was not found.");
            }
        });
    },
    // Method to save attachments to an existing item
    saveAttachments: function (info, attachmentInfo) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                var attachments = __1.Web(info.webUrl)
                    // Get the lists
                    .Lists(info.listName)
                    // Get the item
                    .Items(itemId)
                    // Get the attachment files
                    .AttachmentFiles();
                // Parse the attachment information
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                // Wait for the requests to complete
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Resolve the promise
                    resolve.apply(args);
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    },
    // Method to save a new or existing item
    saveItem: function (info, formValues) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(function (response) {
                    // Refresh the item
                    exports.ListForm.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    }, reject);
                });
            }
            else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                // Add the item
                info.list.Items().add(formValues)
                    // Execute the request
                    .execute(function (item) {
                    // Update the info
                    info.item = item;
                    // Refresh the item
                    exports.ListForm.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                }, reject);
            }
        });
    },
    // Method to show a file dialog
    showFileDialog: function (info, onSave) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Method to add an attachment
            var addAttachment = function (ev) {
                // Get the source file
                var srcFile = ev.target["files"][0];
                if (srcFile) {
                    var reader = new FileReader();
                    // Call the save event
                    onSave ? onSave() : null;
                    // Set the file loaded event
                    reader.onloadend = function (ev) {
                        var attachment = null;
                        var ext = srcFile.name.split(".");
                        ext = ext[ext.length - 1].toLowerCase();
                        // Get the list
                        info.list
                            // Get the item
                            .Items(info.item.Id)
                            // Get the attachments
                            .AttachmentFiles()
                            // Add the file
                            .add(srcFile.name, ev.target.result)
                            // Execute the request
                            .execute(function () {
                            // Refresh the item
                            exports.ListForm.refreshItem(info).then(function (info) {
                                // Remove the element
                                document.body.removeChild(el);
                                // Resolve the promise
                                resolve(info);
                            });
                        }, reject);
                    };
                    // Set the error
                    reader.onerror = function (ev) {
                        // Reject the promise
                        reject(ev.target.error);
                    };
                    // Read the file
                    reader.readAsArrayBuffer(srcFile);
                }
            };
            // Create the file element
            var el = document.body.querySelector("#listform-attachment");
            if (el == null) {
                el = document.createElement("input");
                // Set the properties
                el.id = "listform-attachment";
                el.type = "file";
                el.hidden = true;
                el.onchange = addAttachment;
                // Add the element to the body
                document.body.appendChild(el);
            }
            // Show the dialog
            el.click();
        });
    }
};
