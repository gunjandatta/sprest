"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var __1 = require("..");
var taxonomy_1 = require("./taxonomy");
/**
 * List Form Field
 */
var _ListFormField = /** @class */ (function () {
    /**
     * Constructor
     */
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
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
            // Update the field info, based on the type
            switch (_this._fieldInfo.type) {
                // Choice
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                // Date/Time
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                // Lookup
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                // Number
                case __1.SPTypes.FieldType.Number:
                    var fldNumber = _this._fieldInfo.field;
                    var startIdx = fldNumber.SchemaXml.indexOf('Decimals="') + 10;
                    _this._fieldInfo.decimals = startIdx > 10 ? parseInt(fldNumber.SchemaXml.substr(startIdx, fldNumber.SchemaXml.substr(startIdx).indexOf('"'))) : 0;
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    break;
                // Note
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                // Text
                case __1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                // User
                case __1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                // Default
                default:
                    // See if this is an MMS field
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
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
    /**
     * Methods
     */
    // Method to create an instance of the list form field
    _ListFormField.create = function (props) {
        // Return an instance of the list form field
        return new _ListFormField(props);
    };
    // Method to load the lookup data
    _ListFormField.loadLookupData = function (info, queryTop) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current site collection
            (new lib_1.Site())
                .openWebById(info.lookupWebId)
                .execute(function (web) {
                // Get the list
                web.Lists()
                    .getById(info.lookupListId)
                    .Items()
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    .execute(function (items) {
                    // Resolve the promise
                    resolve(items.results);
                });
            });
        });
    };
    // Method to load the mms data
    _ListFormField.loadMMSData = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term set
            taxonomy_1.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                // Get the target root term
                var root = taxonomy_1.Taxonomy.findById(termSet, info.termId);
                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = taxonomy_1.Taxonomy.findById(termSet, info.termSetId);
                }
                // Resolve the request
                resolve(taxonomy_1.Taxonomy.toArray(root));
            });
        });
    };
    // Method to load the mms value field
    _ListFormField.loadMMSValueField = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if we are allowing multiple values
            if (info.multi) {
                // Get the web
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Fields()
                    .getByInternalNameOrTitle(info.name + "_0")
                    .execute(function (field) {
                    // See if the field exists
                    if (field.existsFl) {
                        // Resolve the promise
                        resolve(field);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                    }
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map