"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var parse_1 = require("./parse");
/**
 * List Form
 */
var _ListForm = /** @class */ (function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        /**
         * Methods
         */
        // Method to load the list data
        this.load = function () {
            // Clear the information
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            // Load the data from cache
            _this.loadFromCache();
            // Load the list data
            _this.loadListData().then(function () {
                // See if the fields have been defined
                if (_this._props.fields) {
                    // Process the fields
                    _this.processFields();
                    // Load the item data
                    _this.loadItem();
                }
                else {
                    // Load the content type
                    _this.loadDefaultContentType();
                }
            });
        };
        // Method to load the default content type
        this.loadDefaultContentType = function () {
            // See if the content type info exists
            if (_this._cacheData && _this._cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    var ct = parse_1.parse(_this._cacheData.ct);
                    // Load the default fields
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
                    // Clear the cache data
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            // Load the content types
            _this._info.list.ContentTypes()
                .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
                .execute(function (ct) {
                // See if we are storing data in cache
                if (_this._props.cacheKey) {
                    // Update the cache data
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    // Update the cache
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                // Resolve the promise
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            // Parse the field links
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                // Get the field
                var field = _this._info.fields[fieldLink.Name];
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
            _this._info.fields = formFields;
            // Load the item data
            _this.loadItem();
        };
        // Method to load the field data
        this.loadFieldData = function (fields) {
            // Clear the fields
            _this._info.fields = {};
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // Save the field
                _this._info.fields[field.InternalName] = field;
            }
        };
        // Method to load the data from cache
        this.loadFromCache = function () {
            // See if we are loading from cache
            if (_this._props.cacheKey) {
                // Get the data
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _this._cacheData = JSON.parse(data);
                        // Update the list information
                        _this._info = _this._info || {};
                        _this._info.list = parse_1.parse(_this._cacheData.list);
                        // Load the field data
                        _this.loadFieldData(parse_1.parse(_this._cacheData.fields));
                    }
                    catch (_a) {
                        // Clear the cache data
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        // Method to load the item
        this.loadItem = function () {
            // See if the item already exist
            if (_this._info.item) {
                // Resolve the promise
                _this._resolve(_this._info);
            }
            else if (_this._props.itemId > 0) {
                // Default the select query to get all the fields by default
                _this._info.query = _this._props.query || {};
                _this._info.query.Select = _this._info.query.Select || ["*"];
                // See if we are loading the attachments
                if (_this._props.loadAttachments) {
                    // Expand the attachment files collection
                    _this._info.query.Expand = _this._info.query.Expand || [];
                    _this._info.query.Expand.push("AttachmentFiles");
                    // Select the attachment files
                    _this._info.query.Select.push("Attachments");
                    _this._info.query.Select.push("AttachmentFiles");
                }
                // Get the list item
                _this._info.list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    // Save the item
                    _this._info.item = item;
                    // Resolve the promise
                    _this._resolve(_this._info);
                });
            }
            else {
                // Resolve the promise
                _this._resolve(_this._info);
            }
        };
        // Method to load the list data
        this.loadListData = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the list & fields already exist
                if (_this._info.list && _this._info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the web
                var list = (new lib_1.Web(_this._props.webUrl))
                    .Lists(_this._props.listName)
                    .execute(function (list) {
                    // Save the list
                    _this._info.list = list;
                });
                // Load the fields
                list.Fields()
                    .execute(function (fields) {
                    // See if we are caching the data
                    if (_this._props.cacheKey) {
                        // Update the cache
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        // Cache the data
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    // Load the field data
                    _this.loadFieldData(fields);
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to process the fields
        this.processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    // Method to load the item attachments
    _ListForm.loadAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var query = {
                Expand: ["AttachmentFiles"],
                Select: ["Attachments", "AttachmentFiles"]
            };
            // Get the item
            info.list.Items(info.item.Id).query(query).execute(function (item) {
                // Resolve the promise
                resolve(item.AttachmentFiles.results);
            });
        });
    };
    // Method to refresh an item
    _ListForm.refreshItem = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                // Update the item
                info.item = item;
                // Resolve the promise
                resolve(info);
            });
        });
    };
    // Method to remove attachments from an item
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var web = new lib_1.Web(info.list.ParentWebUrl);
            // Parse the attachments
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                // Get the file
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    .delete()
                    .execute(true);
            }
            // Wait for the requests to complete
            web.done(function () {
                // Resolve the request
                resolve();
            });
        });
    };
    // Method to save attachments to an existing item
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the item exists
            if (info.item) {
                // Get the list item attachments
                var attachments = info.list.Items(info.item.Id).AttachmentFiles();
                // Parse the attachment information
                for (var i = 0; attachmentInfo.length; i++) {
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
                    resolve(args);
                });
            }
            else {
                // Reject the promise
                console.error("[gd-sprest] The item does not exist.");
                reject();
            }
        });
    };
    // Method to save a new or existing item
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(function (response) {
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
            else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                // Add the item
                info.list.Items().add(formValues)
                    .execute(function (item) {
                    // Update the info
                    info.item = item;
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
        });
    };
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map