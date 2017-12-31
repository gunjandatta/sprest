"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var types_1 = require("../../types");
/**
 * SharePoint Configuration Fields
 */
var SPConfigFields = /** @class */ (function () {
    function SPConfigFields() {
    }
    /** Returns the schema xml for a boolean field. */
    SPConfigFields.createBoolean = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Boolean;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) {
            schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
        }
        schemaXml += "</Field>";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a calculated field. */
    SPConfigFields.createCalculated = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Calculated;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
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
        schemaXml = "<Field " + this.toString(props) + ">";
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
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a choice field. */
    SPConfigFields.createChoice = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = fieldInfo.multi ? types_1.SPTypes.FieldType.MultiChoice : types_1.SPTypes.FieldType.Choice;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
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
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a date field. */
    SPConfigFields.createDate = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.DateTime;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        props["Format"] = fieldInfo.format == types_1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a lookup field. */
    SPConfigFields.createLookup = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Lookup;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        if (fieldInfo.fieldRef) {
            props["FieldRef"] = fieldInfo.fieldRef;
        }
        if (fieldInfo.listName) {
            props["List"] = fieldInfo.listName;
        }
        if (fieldInfo.multi) {
            props["Multi"] = "TRUE";
        }
        if (fieldInfo.showField) {
            props["ShowField"] = fieldInfo.showField;
        }
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a managed metadata field. */
    SPConfigFields.createMMS = function (fieldInfo) {
        var schemaXml = null;
        // Create the value field
        var valueProps = this.getFieldProps({
            name: fieldInfo.name + "_0",
            title: fieldInfo.title + " Value",
            type: types_1.SPTypes.FieldType.Note
        });
        // Generate the value field schema xml
        var schemaXmlValue = "<Field " + this.toString(valueProps) + " />";
        // Set the type
        var props = this.getFieldProps(fieldInfo);
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
        // Generate the mms field schema xml
        schemaXml += [
            "<Field " + this.toString(props) + ">",
            "<Customization>",
            "<ArrayOfProperties>",
            "<Property>",
            "<Name>TextField</Name>",
            "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps["ID"] + "</Value>",
            "</Property>",
            "</ArrayOfProperties>",
            "</Customization>",
            "</Field>"
        ].join("");
        // Return the schema xml
        return [schemaXmlValue, schemaXml];
    };
    /** Returns the schema xml for a note field. */
    SPConfigFields.createNote = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Note;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
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
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a number field. */
    SPConfigFields.createNumber = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Number;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
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
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a text field. */
    SPConfigFields.createText = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.Text;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a url field. */
    SPConfigFields.createUrl = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.URL;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /** Returns the schema xml for a user field. */
    SPConfigFields.createUser = function (fieldInfo) {
        var schemaXml = null;
        // Set the field type
        fieldInfo.type = types_1.SPTypes.FieldType.URL;
        // Get the base properties
        var props = this.getFieldProps(fieldInfo);
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
        schemaXml = "<Field " + this.toString(props) + " />";
        // Return the schema xml
        return schemaXml;
    };
    /**
     * Methods
     */
    // Method to get the field properties
    SPConfigFields.getFieldProps = function (fieldInfo) {
        var props = {};
        // Set the base properties
        props["ID"] = __1.ContextInfo.generateGUID();
        props["Name"] = fieldInfo.name;
        props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
        props["StaticName"] = fieldInfo.name;
        props["Title"] = fieldInfo.title;
        // Set the type
        switch (fieldInfo.type) {
            // Boolean
            case types_1.SPTypes.FieldType.Boolean:
                props["Type"] = "Boolean";
                break;
            // Choice
            case types_1.SPTypes.FieldType.Choice:
                props["Type"] = "Choice";
                break;
            // Date/Time
            case types_1.SPTypes.FieldType.DateTime:
                props["Type"] = "DateTime";
                break;
            // Multi-Choice
            case types_1.SPTypes.FieldType.MultiChoice:
                props["Type"] = "MultiChoice";
                break;
            // Lookup
            case types_1.SPTypes.FieldType.Lookup:
                props["Type"] = "Lookup";
                break;
            // Note
            case types_1.SPTypes.FieldType.Note:
                props["Type"] = "Note";
                break;
            // Number
            case types_1.SPTypes.FieldType.Number:
                props["Type"] = "Number";
                break;
            // Text
            case types_1.SPTypes.FieldType.Text:
                props["Type"] = "Text";
                break;
            // URL
            case types_1.SPTypes.FieldType.URL:
                props["Type"] = "URL";
                break;
            // User
            case types_1.SPTypes.FieldType.User:
                props["Type"] = "User";
                break;
        }
        // Return the properties
        return props;
    };
    // Method to convert the properties to a string
    SPConfigFields.toString = function (props) {
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
    return SPConfigFields;
}());
exports.SPConfigFields = SPConfigFields;
//# sourceMappingURL=spCfgField.js.map