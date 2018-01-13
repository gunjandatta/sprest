"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _ListForm = /** @class */ (function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._fields = null;
        this._list = null;
        this._props = null;
        /**
         * Methods
         */
        // Method to load the list data
        this.load = function () {
            // Get the web
            (new lib_1.Web(_this._props.webUrl))
                .Lists(_this._props.listName)
                .execute(function (list) {
                // Save the list
                _this._list = list;
            })
                .Fields()
                .execute(function (fields) {
                // Clear the fields
                _this._fields = {};
                // Save the fields
                for (var i = 0; i < fields.results.length; i++) {
                    var field = fields.results[i];
                    // Save the field
                    _this._fields[field.InternalName] = field;
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
            _this._list.ContentTypes()
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
                    var field = _this._fields[fieldLink.FieldInternalName];
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
                _this._fields = formFields;
                // Call the initialization event
                _this._props.onInit ? _this._props.onInit(_this._fields) : null;
            }, true);
        };
        // Method to process the fields
        this.processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._fields[_this._props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._fields = formFields;
            // Call the initialization event
            _this._props.onInit ? _this._props.onInit(_this._fields) : null;
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields || [];
        // Load the list data
        this.load();
    }
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map