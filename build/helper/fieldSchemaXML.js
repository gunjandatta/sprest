"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var __1 = require("..");
var spCfg_1 = require("./spCfg");
/**
 * Field Schema XML
 * Helper class for generating the field schema xml
 */
exports.FieldSchemaXML = function (fieldInfo) {
    var _resolve = null;
    // Returns the schema xml for a boolean field.
    var createBoolean = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Boolean";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.defaultValue) {
            schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
        }
        schemaXml += "</Field>";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a calculated field.
    var createCalculated = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Calculated";
        // Set the result type
        switch (fieldInfo.resultType) {
            case __1.SPTypes.FieldResultType.Boolean:
                props["ResultType"] = "Boolean";
                break;
            case __1.SPTypes.FieldResultType.Currency:
                props["ResultType"] = "Currency";
                break;
            case __1.SPTypes.FieldResultType.DateOnly:
                props["Format"] = "DateOnly";
                props["ResultType"] = "DateTime";
                break;
            case __1.SPTypes.FieldResultType.DateTime:
                props["Format"] = "DateTime";
                props["ResultType"] = "DateTime";
                break;
            case __1.SPTypes.FieldResultType.Number:
                props["ResultType"] = "Number";
                break;
            default:
                props["ResultType"] = "Text";
                break;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
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
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a choice field.
    var createChoice = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
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
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a currency field.
    var createCurrency = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Currency";
        // Set the number properties
        if (fieldInfo.decimals >= 0) {
            props["Decimals"] = fieldInfo.decimals;
        }
        if (fieldInfo.lcid > 0) {
            props["LCID"] = fieldInfo.lcid;
        }
        if (fieldInfo.max != null) {
            props["Max"] = fieldInfo.max;
        }
        if (fieldInfo.min != null) {
            props["Min"] = fieldInfo.min;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a date field.
    var createDate = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "DateTime";
        // Set the date/time properties
        props["Format"] = fieldInfo.format == __1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a lookup field.
    var createLookup = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";
        // Set the lookup properties
        if (fieldInfo.fieldRef) {
            props["FieldRef"] = fieldInfo.fieldRef;
        }
        if (fieldInfo.multi) {
            props["Mult"] = "TRUE";
        }
        if (fieldInfo.showField) {
            props["ShowField"] = fieldInfo.showField;
        }
        // See if the lookup name exists
        if (fieldInfo.listName) {
            // Get the web containing the list
            lib_1.Web(fieldInfo.webUrl)
                .Lists(fieldInfo.listName)
                .query({
                Expand: ["ParentWeb"]
            })
                .execute(function (list) {
                // Set the list and web ids
                props["List"] = "{" + list.Id + "}";
                if (fieldInfo.webUrl) {
                    props["WebId"] = list.ParentWeb.Id;
                }
                // Resolve the request
                _resolve("<Field " + toString(props) + " />");
            });
        }
        else {
            // Set the list id
            props["List"] = "{" + fieldInfo.listId.replace(/[\{\}]/g, "") + "}";
            // Resolve the request
            _resolve("<Field " + toString(props) + " />");
        }
    };
    // Returns the schema xml for a managed metadata field.
    var createMMS = function (fieldInfo, props) {
        // Create the value field
        var valueProps = {
            ID: "{" + lib_1.ContextInfo.generateGUID() + "}",
            Name: fieldInfo.name + "_0",
            StaticName: fieldInfo.name + "_0",
            DisplayName: fieldInfo.title + " Value",
            Type: "Note",
            Hidden: "TRUE",
            Required: "FALSE",
            ShowInViewForms: "FALSE",
            CanToggleHidden: "TRUE"
        };
        // Generate the value field schema xml
        var schemaXmlValue = "<Field " + toString(valueProps) + " />";
        // Set the mms properties
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
        // Generate the mms field schema xml
        var schemaXml = [
            "<Field " + toString(props) + ">",
            "<Customization>",
            "<ArrayOfProperty>",
            "<Property>",
            "<Name>TextField</Name>",
            "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps.ID + "</Value>",
            "</Property>",
            "</ArrayOfProperty>",
            "</Customization>",
            "</Field>"
        ].join("");
        // Resolve the request
        _resolve([schemaXmlValue, schemaXml]);
    };
    // Returns the schema xml for a note field.
    var createNote = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Note";
        // Set the note properties
        if (fieldInfo.appendFl) {
            props["AppendOnly"] = "TRUE";
        }
        if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == __1.SPTypes.FieldNoteType.RichText) {
            props["RichText"] = "TRUE";
        }
        if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText) {
            props["RichTextMode"] = "FullHtml";
        }
        if (fieldInfo.numberOfLines > 0) {
            props["NumLines"] = fieldInfo.numberOfLines;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a number field.
    var createNumber = function (fieldInfo, props) {
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
        if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Integer) {
            props["Decimals"] = 0;
        }
        if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Percentage) {
            props["ShowPercentage"] = "TRUE";
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a text field.
    var createText = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Text";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a url field.
    var createUrl = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "URL";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a user field.
    var createUser = function (fieldInfo, props) {
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
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
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
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Set the resolve method
        _resolve = resolve;
        // See if the schema xml has been defined
        if (fieldInfo.schemaXml) {
            // Resolve the promise
            resolve(fieldInfo.schemaXml);
        }
        else {
            // Set the base properties
            var props = {};
            props["ID"] = "{" + lib_1.ContextInfo.generateGUID() + "}";
            props["Name"] = fieldInfo.name;
            props["StaticName"] = fieldInfo.name;
            props["DisplayName"] = fieldInfo.title || fieldInfo.name;
            // Set the optional properties
            if (typeof (fieldInfo.group) !== "undefined") {
                props["Group"] = fieldInfo.group;
            }
            if (typeof (fieldInfo.hidden) !== "undefined") {
                props["Hidden"] = fieldInfo.hidden ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.readOnly) !== "undefined") {
                props["ReadOnly"] = fieldInfo.readOnly ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.required) !== "undefined") {
                props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.showInDisplayForm) !== "undefined") {
                props["ShowInDisplayForm"] = fieldInfo.showInDisplayForm ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.showInEditForm) !== "undefined") {
                props["ShowInEditForm"] = fieldInfo.showInEditForm ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.showInListSettings) !== "undefined") {
                props["ShowInListSettings"] = fieldInfo.showInListSettings ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.showInNewForm) !== "undefined") {
                props["ShowInNewForm"] = fieldInfo.showInNewForm ? "TRUE" : "FALSE";
            }
            if (typeof (fieldInfo.showInViewForms) !== "undefined") {
                props["ShowInViewForms"] = fieldInfo.showInViewForms ? "TRUE" : "FALSE";
            }
            // Set the type
            switch (fieldInfo.type) {
                // Boolean
                case spCfg_1.SPCfgFieldType.Boolean:
                    createBoolean(fieldInfo, props);
                    break;
                // Calculated
                case spCfg_1.SPCfgFieldType.Calculated:
                    createCalculated(fieldInfo, props);
                    break;
                // Choice
                case spCfg_1.SPCfgFieldType.Choice:
                    createChoice(fieldInfo, props);
                    break;
                // Currency
                case spCfg_1.SPCfgFieldType.Currency:
                    createCurrency(fieldInfo, props);
                    break;
                // Date/Time
                case spCfg_1.SPCfgFieldType.Date:
                    createDate(fieldInfo, props);
                    break;
                // Lookup
                case spCfg_1.SPCfgFieldType.Lookup:
                    createLookup(fieldInfo, props);
                    break;
                // MMS
                case spCfg_1.SPCfgFieldType.MMS:
                    createMMS(fieldInfo, props);
                    break;
                // Note
                case spCfg_1.SPCfgFieldType.Note:
                    createNote(fieldInfo, props);
                    break;
                // Number
                case spCfg_1.SPCfgFieldType.Number:
                    createNumber(fieldInfo, props);
                    break;
                // Text
                case spCfg_1.SPCfgFieldType.Text:
                    createText(fieldInfo, props);
                    break;
                // URL
                case spCfg_1.SPCfgFieldType.Url:
                    createUrl(fieldInfo, props);
                    break;
                // User
                case spCfg_1.SPCfgFieldType.User:
                    createUser(fieldInfo, props);
                    break;
                // Field type not supported
                default:
                    // Create a text field by default
                    createText(fieldInfo, props);
                    break;
            }
        }
    });
};
