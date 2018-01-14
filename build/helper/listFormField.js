"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _ListFormField = /** @class */ (function () {
    /**
     * Constructor
     */
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        /**
         * Methods
         */
        // Load the field
        this.load = function () {
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Get the web
                (new lib_1.Web(_this._fieldInfo.webUrl))
                    .Lists(_this._fieldInfo.listName)
                    .Fields()
                    .getByInternalNameOrTitle(_this._fieldInfo.name)
                    .execute(function (field) {
                    // Save the field
                    _this._fieldInfo.field = field;
                    // Process the field
                    _this.processField();
                });
            }
        };
        // Method to proces the field and save its information
        this.processField = function () {
            // Update the field information
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            // Resolve the promise
            _this._resolve(_this._fieldInfo);
        };
        // Save the properties and field information
        this._fieldInfo = props || {};
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Load the field
                _this.load();
            }
        });
    }
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map