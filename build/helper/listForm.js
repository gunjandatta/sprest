"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
/**
 * List Form
 */
var _ListForm = /** @class */ (function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._info = null;
        this._props = null;
        this._resolve = null;
        /**
         * Methods
         */
        // Method to load the list data
        this.load = function () {
            // Clear the information
            _this._info = {};
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
                // Clear the fields
                _this._info.fields = {};
                // Save the fields
                for (var i = 0; i < fields.results.length; i++) {
                    var field = fields.results[i];
                    // Save the field
                    _this._info.fields[field.InternalName] = field;
                }
                // See if the fields have been defined
                if (_this._props.fields) {
                    // Process the fields
                    _this.processFields();
                }
                else {
                    // Load the default fields
                    return _this.loadDefaultFields();
                }
            });
            // See if we are loading the list item
            if (_this._props.itemId > 0) {
                // Default the select query to get all the fields by default
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
                list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    // Save the item
                    _this._info.item = item;
                });
            }
            // Wait for the requests to complete
            list.done(function () {
                // Resolve the promise
                _this._resolve(_this._info);
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Load the content types
                _this._info.list.ContentTypes()
                    .query({
                    Expand: ["FieldLinks"],
                    Top: 1
                })
                    .execute(function (ct) {
                    var fields = ct.results ? ct.results[0].FieldLinks.results : [];
                    var formFields = {};
                    // Parse the field links
                    for (var i = 0; fields.length; i++) {
                        var fieldLink = fields[i];
                        var field = _this._info.fields[fieldLink.FieldInternalName];
                        // Skip the content type field
                        if (fieldLink.FieldInternalName == "ContentType") {
                            continue;
                        }
                        // Skip hidden fields
                        if (field.Hidden || fieldLink.Hidden) {
                            continue;
                        }
                        // Save the form field
                        formFields[field.InternalName] = field;
                    }
                    // Update the fields
                    _this._info.fields = formFields;
                    // Resolve the promise
                    resolve();
                }, true);
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
        this._props.fields = this._props.fields || [];
        this._info = {};
        this._info.query = this._props.query || {};
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    // Method to refresh an item
    _ListForm.refreshItem = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(resolve);
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
                    _this.refreshItem(info).then(function (item) {
                        // Update the item
                        info.item = item;
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
                    // Refresh the item
                    _this.refreshItem(info).then(function (item) {
                        // Update the item
                        info.item = item;
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