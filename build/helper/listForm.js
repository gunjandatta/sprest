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
            (new lib_1.Web(_this._props.webUrl))
                .Lists(_this._props.listName)
                .execute(function (list) {
                // Save the list
                _this._info.list = list;
            })
                .Fields()
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
                    _this.loadDefaultFields();
                }
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function () {
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
                _this._resolve(_this._info);
            }, true);
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
            // Resolve the promise
            _this._resolve(_this._info);
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields || [];
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map