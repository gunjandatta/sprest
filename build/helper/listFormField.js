"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var __1 = require("..");
var taxonomy_1 = require("./taxonomy");
var _ListFormField = (function () {
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        this.load = function () {
            if (_this._fieldInfo.field) {
                _this.processField();
            }
            else {
                (new lib_1.Web(_this._fieldInfo.webUrl))
                    .Lists(_this._fieldInfo.listName)
                    .Fields()
                    .getByInternalNameOrTitle(_this._fieldInfo.name)
                    .execute(function (field) {
                    _this._fieldInfo.field = field;
                    _this.processField();
                });
            }
        };
        this.processField = function () {
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            switch (_this._fieldInfo.type) {
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                case __1.SPTypes.FieldType.Number:
                    var fldNumber = _this._fieldInfo.field;
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    if (fldNumber.ShowAsPercentage != undefined) {
                        _this._fieldInfo.showAsPercentage = fldNumber.ShowAsPercentage;
                    }
                    else {
                        _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    }
                    break;
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                case __1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                case __1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                default:
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            _this._resolve(_this._fieldInfo);
        };
        this._fieldInfo = props || {};
        return new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            if (_this._fieldInfo.field) {
                _this.processField();
            }
            else {
                _this.load();
            }
        });
    }
    _ListFormField.loadLookupData = function (info, queryTop) {
        return new Promise(function (resolve, reject) {
            (new lib_1.Site())
                .openWebById(info.lookupWebId)
                .execute(function (web) {
                web.Lists()
                    .getById(info.lookupListId)
                    .Items()
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    .execute(function (items) {
                    resolve(items.results);
                });
            });
        });
    };
    _ListFormField.loadMMSData = function (info) {
        return new Promise(function (resolve, reject) {
            taxonomy_1.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                var root = taxonomy_1.Taxonomy.findById(termSet, info.termId);
                if (root == null) {
                    root = taxonomy_1.Taxonomy.findById(termSet, info.termSetId);
                }
                resolve(taxonomy_1.Taxonomy.toArray(root));
            });
        });
    };
    _ListFormField.loadMMSValueField = function (info) {
        return new Promise(function (resolve, reject) {
            if (info.multi) {
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Fields()
                    .getByInternalNameOrTitle(info.name + "_0")
                    .execute(function (field) {
                    if (field.existsFl) {
                        resolve(field);
                    }
                    else {
                        console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                    }
                });
            }
            else {
                resolve();
            }
        });
    };
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map