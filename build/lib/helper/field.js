"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var _1 = require(".");
/**
 * The field schema xml class
 */
var _FieldSchemaXML = /** @class */ (function () {
    function _FieldSchemaXML() {
        var _this = this;
        // Generates the schema xml, based on the field information provided.
        this.generate = function (fieldInfo) {
            var promise = new utils_1.Promise();
            var schemaXml = null;
            // Set the base properties
            var props = {};
            props["ID"] = __1.ContextInfo.generateGUID();
            props["Name"] = fieldInfo.name;
            props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
            props["StaticName"] = fieldInfo.name;
            props["DisplayName"] = fieldInfo.title;
            // Set the type
            switch (fieldInfo.type) {
                // Boolean
                case _1.Helper.Types.SPCfgFieldType.Boolean:
                    _this.createBoolean(fieldInfo, props, promise);
                    break;
                // Calculated
                case _1.Helper.Types.SPCfgFieldType.Calculated:
                    _this.createCalculated(fieldInfo, props, promise);
                    break;
                // Choice
                case _1.Helper.Types.SPCfgFieldType.Choice:
                    _this.createChoice(fieldInfo, props, promise);
                    break;
                // Date/Time
                case _1.Helper.Types.SPCfgFieldType.Date:
                    _this.createDate(fieldInfo, props, promise);
                    break;
                // Lookup
                case _1.Helper.Types.SPCfgFieldType.Lookup:
                    _this.createLookup(fieldInfo, props, promise);
                    break;
                // MMS
                case _1.Helper.Types.SPCfgFieldType.MMS:
                    _this.createMMS(fieldInfo, props, promise);
                    break;
                // Note
                case _1.Helper.Types.SPCfgFieldType.Note:
                    _this.createNote(fieldInfo, props, promise);
                    break;
                // Number
                case _1.Helper.Types.SPCfgFieldType.Number:
                    _this.createNumber(fieldInfo, props, promise);
                    break;
                // Text
                case _1.Helper.Types.SPCfgFieldType.Text:
                    _this.createText(fieldInfo, props, promise);
                    break;
                // URL
                case _1.Helper.Types.SPCfgFieldType.Url:
                    _this.createUrl(fieldInfo, props, promise);
                    break;
                // User
                case _1.Helper.Types.SPCfgFieldType.User:
                    _this.createUser(fieldInfo, props, promise);
                    break;
                // Field type not supported
                default:
                    // Resolve the promise and return
                    promise.resolve(null);
                    return;
            }
            // Return a promise
            return promise;
        };
        /**
         * Methods
         */
        /** Returns the schema xml for a boolean field. */
        this.createBoolean = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Boolean";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            schemaXml += "</Field>";
            // Return the schema xml
            return schemaXml;
        };
        /** Returns the schema xml for a calculated field. */
        this.createCalculated = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Calculated";
            // Set the result type
            switch (fieldInfo.resultType) {
                case types_1.SPTypes.FieldResultType.Boolean:
                    props["ResultType"] = "Boolean";
                    break;
                case types_1.SPTypes.FieldResultType.Currency:
                    props["ResultType"] = "Currency";
                    break;
                case types_1.SPTypes.FieldResultType.DateOnly:
                    props["Format"] = "DateOnly";
                    props["ResultType"] = "DateTime";
                    break;
                case types_1.SPTypes.FieldResultType.DateTime:
                    props["Format"] = "DateTime";
                    props["ResultType"] = "DateTime";
                    break;
                case types_1.SPTypes.FieldResultType.Number:
                    props["ResultType"] = "Number";
                    break;
                default:
                    props["ResultType"] = "Text";
                    break;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.formula) {
                schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>";
            }
            if (fieldInfo.fieldRefs) {
                schemaXml += "<FieldRefs>";
                for (var i = 0; i < fieldInfo.fieldRefs.length; i++) {
                    schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />";
                }
                schemaXml += "</FieldRefs>";
            }
            schemaXml += "</Field>";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a choice field. */
        this.createChoice = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            if (fieldInfo.choices) {
                schemaXml += "<CHOICES>";
                for (var i = 0; i < fieldInfo.choices.length; i++) {
                    schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>";
                }
                schemaXml += "</CHOICES>";
            }
            schemaXml += "</Field>";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a date field. */
        this.createDate = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "DateTime";
            // Set the date/time properties
            props["Format"] = fieldInfo.format == types_1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a lookup field. */
        this.createLookup = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Lookup";
            // Set the lookup properties
            if (fieldInfo.fieldRef) {
                props["FieldRef"] = fieldInfo.fieldRef;
            }
            if (fieldInfo.multi) {
                props["Multi"] = "TRUE";
            }
            if (fieldInfo.showField) {
                props["ShowField"] = fieldInfo.showField;
            }
            // See if the lookup name exists
            if (fieldInfo.listName) {
                // Get the web containing the list
                (new __1.Web(fieldInfo.webUrl))
                    .Lists(fieldInfo.listName)
                    .query({
                    Expand: ["ParentWeb"]
                })
                    .execute(function (list) {
                    // Set the list and web ids
                    props["List"] = list.Id;
                    if (fieldInfo.webUrl) {
                        props["WebId"] = list.ParentWeb.Id;
                    }
                    // Resolve the promise
                    promise.resolve("<Field " + _this.toString(props) + " />");
                });
            }
            else {
                // Set the list id
                props["List"] = fieldInfo.listId;
                // Resolve the promise
                promise.resolve("<Field " + _this.toString(props) + " />");
            }
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a managed metadata field. */
        this.createMMS = function (fieldInfo, props, promise) {
            // Create the value field
            var valueProps = {
                ID: __1.ContextInfo.generateGUID(),
                Name: fieldInfo.name + "_0",
                StaticName: fieldInfo.name + "_0",
                DisplayName: fieldInfo.title + " Value",
                Type: "Note",
                Required: fieldInfo.required ? "TRUE" : "FALSE",
                Hidden: "TRUE"
            };
            // Generate the value field schema xml
            var schemaXmlValue = "<Field " + _this.toString(valueProps) + " />";
            // Set the mms properties
            props["Type"] = "TaxonomyFieldType";
            props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
            // Generate the mms field schema xml
            var schemaXml = [
                "<Field " + _this.toString(props) + ">",
                "<Customization>",
                "<ArrayOfProperties>",
                "<Property>",
                "<Name>TextField</Name>",
                "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps.ID + "</Value>",
                "</Property>",
                "</ArrayOfProperties>",
                "</Customization>",
                "</Field>"
            ].join("");
            // Resolve the promise
            promise.resolve([schemaXmlValue, schemaXml]);
        };
        /** Returns the schema xml for a note field. */
        this.createNote = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Note";
            // Set the note properties
            if (fieldInfo.appendFl) {
                props["AppendOnly"] = "TRUE";
            }
            if (fieldInfo.noteType == types_1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == types_1.SPTypes.FieldNoteType.RichText) {
                props["RichText"] = "TRUE";
            }
            if (fieldInfo.noteType == types_1.SPTypes.FieldNoteType.EnhancedRichText) {
                props["RichTextMode"] = "FullHtml";
            }
            if (fieldInfo.numberOfLines > 0) {
                props["NumLines"] = fieldInfo.numberOfLines;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a number field. */
        this.createNumber = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Number";
            // Set the number properties
            if (fieldInfo.decimals >= 0) {
                props["Decimals"] = fieldInfo.decimals;
            }
            if (fieldInfo.max != null) {
                props["Max"] = fieldInfo.max;
            }
            if (fieldInfo.min != null) {
                props["Min"] = fieldInfo.min;
            }
            if (fieldInfo.numberType == types_1.SPTypes.FieldNumberType.Integer) {
                props["Decimals"] = 0;
            }
            if (fieldInfo.numberType == types_1.SPTypes.FieldNumberType.Percentage) {
                props["ShowPercentage"] = "TRUE";
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a text field. */
        this.createText = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Text";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a url field. */
        this.createUrl = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "URL";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        /** Returns the schema xml for a user field. */
        this.createUser = function (fieldInfo, props, promise) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "User";
            // Set the user properties
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.selectionMode != null) {
                props["UserSelectionMode"] = fieldInfo.selectionMode;
            }
            if (fieldInfo.selectionScope != null) {
                props["UserSelectionScope"] = fieldInfo.selectionScope;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the promise
            promise.resolve(schemaXml);
        };
        // Method to convert the properties to a string
        this.toString = function (props) {
            var properties = "";
            // Parse the properties
            for (var key in props) {
                var value = props[key];
                // Add the property
                properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
            }
            // Return the string value
            return properties;
        };
    }
    return _FieldSchemaXML;
}());
exports.FieldSchemaXML = new _FieldSchemaXML();
//# sourceMappingURL=field.js.map