"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var types_1 = require("../../types");
var utils_1 = require("../../utils");
/**
 * Create Field Schema
 */
exports.CreateFieldSchema = function (fieldInfo) {
    /**
     * Methods
     */
    /** Returns the schema xml for a boolean field. */
    var createBoolean = function (fieldInfo, props, promise) {
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
    var createCalculated = function (fieldInfo, props, promise) {
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
    var createChoice = function (fieldInfo, props, promise) {
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
    var createDate = function (fieldInfo, props, promise) {
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
    var createLookup = function (fieldInfo, props, promise) {
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
    var createMMS = function (fieldInfo, props, promise) {
        var schemaXml = null;
        // Create the value field
        var valueProps = {
            ID: __1.ContextInfo.generateGUID(),
            Name: fieldInfo.name + "_0",
            StaticName: fieldInfo.name + "_0",
            Title: fieldInfo.title + " Value",
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
        schemaXml += [
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
        promise.resolve(schemaXmlValue, schemaXml);
    };
    /** Returns the schema xml for a note field. */
    var createNote = function (fieldInfo, props, promise) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Note";
        // Set the note properties
        if (fieldInfo.noteType == types_1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == types_1.SPTypes.FieldNoteType.RichText) {
            props["RichText"] = "TRUE";
        }
        if (fieldInfo.noteType == types_1.SPTypes.FieldNoteType.EnhancedRichText) {
            props["RichTextMode"] = "FullHtml";
        }
        if (fieldInfo.numberOfLines > 0) {
            fieldInfo["NumLines"] = fieldInfo.numberOfLines;
        }
        // Generate the schema
        schemaXml = "<Field " + _this.toString(props) + " />";
        // Resolve the promise
        promise.resolve(schemaXml);
    };
    /** Returns the schema xml for a number field. */
    var createNumber = function (fieldInfo, props, promise) {
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
        if (fieldInfo.numberType == types_1.SPTypes.FieldNumberType.Percentage) {
            props["ShowPercentage"] = "TRUE";
        }
        // Generate the schema
        schemaXml = "<Field " + _this.toString(props) + " />";
        // Resolve the promise
        promise.resolve(schemaXml);
    };
    /** Returns the schema xml for a text field. */
    var createText = function (fieldInfo, props, promise) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Text";
        // Generate the schema
        schemaXml = "<Field " + _this.toString(props) + " />";
        // Resolve the promise
        promise.resolve(schemaXml);
    };
    /** Returns the schema xml for a url field. */
    var createUrl = function (fieldInfo, props, promise) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "URL";
        // Generate the schema
        schemaXml = "<Field " + _this.toString(props) + " />";
        // Resolve the promise
        promise.resolve(schemaXml);
    };
    /** Returns the schema xml for a user field. */
    var createUser = function (fieldInfo, props, promise) {
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
    var toString = function (props) {
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
    /**
     * Main
     */
    var promise = new utils_1.Promise();
    var schemaXml = null;
    // Set the base properties
    var props = {};
    props["ID"] = __1.ContextInfo.generateGUID();
    props["Name"] = fieldInfo.name;
    props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
    props["StaticName"] = fieldInfo.name;
    props["Title"] = fieldInfo.title;
    // Set the type
    switch (fieldInfo.type) {
        // Boolean
        case types_1.Helper.SPConfigFieldTypes.Boolean:
            _this.createBoolean(fieldInfo, props, promise);
            break;
        // Calculated
        case types_1.Helper.SPConfigFieldTypes.Calculated:
            _this.createCalculated(fieldInfo, props, promise);
            break;
        // Choice
        case types_1.Helper.SPConfigFieldTypes.Choice:
            _this.createChoice(fieldInfo, props, promise);
            break;
        // Date/Time
        case types_1.Helper.SPConfigFieldTypes.Date:
            _this.createDate(fieldInfo, props, promise);
            break;
        // Lookup
        case types_1.Helper.SPConfigFieldTypes.Lookup:
            _this.createLookup(fieldInfo, props, promise);
            break;
        // Note
        case types_1.Helper.SPConfigFieldTypes.Note:
            _this.createNote(fieldInfo, props, promise);
            break;
        // Number
        case types_1.Helper.SPConfigFieldTypes.Number:
            _this.createNumber(fieldInfo, props, promise);
            break;
        // Text
        case types_1.Helper.SPConfigFieldTypes.Text:
            _this.createText(fieldInfo, props, promise);
            break;
        // URL
        case types_1.Helper.SPConfigFieldTypes.Url:
            _this.createUrl(fieldInfo, props, promise);
            break;
        // User
        case types_1.Helper.SPConfigFieldTypes.User:
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
//# sourceMappingURL=spCfgFields.js.map