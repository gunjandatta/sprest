"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
/**
 * List Form Field
 */
exports.ListFormField = {
    // Method to create an instance of the list form field
    create: function (props) {
        var _fieldInfo = props || {};
        var _resolve = null;
        // Load the field
        var load = function () {
            // See if the field exists
            if (_fieldInfo.field) {
                // Process the field
                processField();
            }
            // Else, load the field from the information provided
            else {
                // Get the web
                __1.Web(_fieldInfo.webUrl)
                    // Get the list
                    .Lists(_fieldInfo.listName)
                    // Get the fields
                    .Fields()
                    // Get the field by its internal name
                    .getByInternalNameOrTitle(_fieldInfo.name)
                    // Execute the request
                    .execute(function (field) {
                    // Save the field
                    _fieldInfo.field = field;
                    // Process the field
                    processField();
                });
            }
        };
        // Method to proces the field and save its information
        var processField = function () {
            // Update the field information
            _fieldInfo.defaultValue = _fieldInfo.field.DefaultValue;
            _fieldInfo.readOnly = _fieldInfo.field.ReadOnlyField;
            _fieldInfo.required = _fieldInfo.field.Required ? true : false;
            _fieldInfo.title = _fieldInfo.field.Title;
            _fieldInfo.type = _fieldInfo.field.FieldTypeKind;
            _fieldInfo.typeAsString = _fieldInfo.field.TypeAsString;
            // Update the field info, based on the type
            switch (_fieldInfo.type) {
                // Choice
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _fieldInfo.field.Choices;
                    _fieldInfo.choices = (choices ? choices.results : null) || [];
                    _fieldInfo.multi = _fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                // Date/Time
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _fieldInfo.field;
                    _fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                // Lookup
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _fieldInfo.field;
                    _fieldInfo.lookupField = fldLookup.LookupField;
                    _fieldInfo.lookupListId = fldLookup.LookupList;
                    _fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                // Number
                case __1.SPTypes.FieldType.Number:
                    var fldNumber = _fieldInfo.field;
                    var startIdx = fldNumber.SchemaXml.indexOf('Decimals="') + 10;
                    _fieldInfo.decimals = startIdx > 10 ? parseInt(fldNumber.SchemaXml.substr(startIdx, fldNumber.SchemaXml.substr(startIdx).indexOf('"'))) : 0;
                    _fieldInfo.maxValue = fldNumber.MaximumValue;
                    _fieldInfo.minValue = fldNumber.MinimumValue;
                    _fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    break;
                // Note
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _fieldInfo.field;
                    _fieldInfo.multiline = true;
                    _fieldInfo.richText = fldNote.RichText;
                    _fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                // Text
                case __1.SPTypes.FieldType.Text:
                    _fieldInfo.multiline = false;
                    _fieldInfo.richText = false;
                    _fieldInfo.rows = 1;
                    break;
                // User
                case __1.SPTypes.FieldType.User:
                    var fldUser = _fieldInfo.field;
                    _fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                // Default
                default:
                    // See if this is an MMS field
                    if (_fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _fieldInfo.field;
                        _fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _fieldInfo.termSetId = fldMMS.TermSetId;
                        _fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            // Resolve the promise
            _resolve(_fieldInfo);
        };
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _resolve = resolve;
            // See if the field exists
            if (_fieldInfo.field) {
                // Process the field
                processField();
            }
            else {
                // Load the field
                load();
            }
        });
    },
    // Method to load the lookup data
    loadLookupData: function (info, queryTop) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current site collection
            __1.Site()
                // Get the web containing the lookup list
                .openWebById(info.lookupWebId)
                // Execute the request
                .execute(function (web) {
                // Ensure the web exists
                if (!web.existsFl) {
                    // Reject the promise
                    reject(web.response);
                    return;
                }
                // Get the list
                web.Lists()
                    // Get the list by id
                    .getById(info.lookupListId)
                    // Get the items
                    .Items()
                    // Set the query
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    // Execute the request
                    .execute(function (items) {
                    // Ensure the items exist
                    if (!items.existsFl) {
                        // Reject the promise
                        reject(items.response);
                        return;
                    }
                    // Resolve the promise
                    resolve(items.results);
                });
            });
        });
    },
    // Method to load the mms data
    loadMMSData: function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term set
            __1.Helper.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                // Get the target root term
                var root = __1.Helper.Taxonomy.findById(termSet, info.termId);
                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = __1.Helper.Taxonomy.findById(termSet, info.termSetId);
                }
                // Resolve the request
                resolve(__1.Helper.Taxonomy.toArray(root));
            }, reject);
        });
    },
    // Method to load the mms value field
    loadMMSValueField: function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the web
            __1.Web(info.webUrl)
                // Get the list
                .Lists(info.listName)
                // Get the fields
                .Fields()
                // Get the hidden field
                .getByInternalNameOrTitle(info.name + "_0")
                // Execute the request
                .execute(function (field) {
                // See if the field exists
                if (field.existsFl) {
                    // Resolve the promise
                    resolve(field);
                }
                else {
                    reject("Unable to find the hidden value field for '" + info.name + "'.");
                }
            });
        });
    }
};
