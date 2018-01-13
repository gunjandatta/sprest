"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _ListFormField = /** @class */ (function () {
    /**
     * Constructor
     * @param props
     */
    function _ListFormField(props) {
        var _this = this;
        this._field = null;
        this._fieldInfo = null;
        this._props = null;
        /**
         * Methods
         */
        // Load the field
        this.load = function () {
            // See if the field exists
            if (_this._field) {
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
                    _this._field = field;
                    // Process the field
                    _this.processField();
                });
            }
        };
        // Method to proces the field and save its information
        this.processField = function () {
            // Update the field information
            _this._fieldInfo.defaultValue = _this._field.DefaultValue;
            _this._fieldInfo.readOnly = _this._field.ReadOnlyField;
            _this._fieldInfo.required = _this._field.Required ? true : false;
            _this._fieldInfo.title = _this._field.Title;
            _this._fieldInfo.type = _this._field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._field.TypeAsString;
            // Call the initialize event
            _this._props.onInit ? _this._props.onInit(_this._fieldInfo) : null;
        };
        // Save the properties and field information
        this._props = props || {};
        this._field = props.field;
        this._fieldInfo = props.fieldInfo || {};
        // See if the field exists
        if (this._field) {
            // Process the field
            this.processField();
        }
        else {
            // Load the field
            this.load();
        }
    }
    Object.defineProperty(_ListFormField.prototype, "Field", {
        /**
         * Properties
         */
        // Field
        get: function () { return this._field; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ListFormField.prototype, "FieldInfo", {
        // Field Information
        get: function () { return this._fieldInfo; },
        enumerable: true,
        configurable: true
    });
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map