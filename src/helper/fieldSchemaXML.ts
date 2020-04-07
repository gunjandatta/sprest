import {
    IFieldInfo, IFieldInfoCalculated, IFieldInfoChoice,
    IFieldInfoCurrency, IFieldInfoDate, IFieldInfoLookup,
    IFieldInfoMMS, IFieldInfoNote, IFieldInfoNumber, IFieldInfoUrl, IFieldInfoUser
} from "../../@types/helper";
import { ContextInfo, Web } from "../lib";
import { SPTypes } from "..";
import { SPCfgFieldType } from "./spCfg";

/**
 * Field Schema XML
 * Helper class for generating the field schema xml
 */
export const FieldSchemaXML = (fieldInfo: IFieldInfo): PromiseLike<string> => {
    let _resolve = null;

    // Returns the schema xml for a boolean field.
    let createBoolean = (fieldInfo: IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Boolean";

        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        schemaXml += "</Field>";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a calculated field.
    let createCalculated = (fieldInfo: IFieldInfoCalculated, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Calculated";

        // Set the result type
        switch (fieldInfo.resultType) {
            case SPTypes.FieldResultType.Boolean:
                props["ResultType"] = "Boolean";
                break;
            case SPTypes.FieldResultType.Currency:
                props["ResultType"] = "Currency";
                if (fieldInfo.lcid > 0) { props["LCID"] = fieldInfo.lcid; }
                break;
            case SPTypes.FieldResultType.DateOnly:
                props["Format"] = "DateOnly"
                props["ResultType"] = "DateTime";
                break;
            case SPTypes.FieldResultType.DateTime:
                props["Format"] = "DateTime"
                props["ResultType"] = "DateTime";
                break;
            case SPTypes.FieldResultType.Number:
                props["ResultType"] = "Number";
                if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
                if (fieldInfo.numberType == SPTypes.FieldNumberType.Percentage) { props["ShowPercentage"] = "TRUE"; }
                break;
            default:
                props["ResultType"] = "Text";
                break;
        }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.formula) { schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>"; }
        if (fieldInfo.fieldRefs) {
            schemaXml += "<FieldRefs>";
            for (let i = 0; i < fieldInfo.fieldRefs.length; i++) { schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />"; }
            schemaXml += "</FieldRefs>";
        }
        schemaXml += "</Field>";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a choice field.
    let createChoice = (fieldInfo: IFieldInfoChoice, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";

        // Set the result type
        switch (fieldInfo.format) {
            case SPTypes.ChoiceFormatType.Dropdown:
                props["Format"] = "Dropdown";
                break;
            case SPTypes.ChoiceFormatType.RadioButtons:
                props["Format"] = "RadioButtons";
                break;
        }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        if (fieldInfo.choices) {
            schemaXml += "<CHOICES>";
            for (let i = 0; i < fieldInfo.choices.length; i++) { schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>"; }
            schemaXml += "</CHOICES>";
        }
        schemaXml += "</Field>";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a currency field.
    let createCurrency = (fieldInfo: IFieldInfoCurrency, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Currency";

        // Set the number properties
        if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
        if (fieldInfo.lcid > 0) { props["LCID"] = fieldInfo.lcid; }
        if (fieldInfo.max != null) { props["Max"] = fieldInfo.max; }
        if (fieldInfo.min != null) { props["Min"] = fieldInfo.min; }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a date field.
    let createDate = (fieldInfo: IFieldInfoDate, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "DateTime";

        // Set the date/time properties
        props["Format"] = fieldInfo.format == SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a geolocation field.
    let createGeolocation = (fieldInfo: IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Geolocation";

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a lookup field.
    let createLookup = (fieldInfo: IFieldInfoLookup, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";

        // Set the lookup properties
        if (fieldInfo.fieldRef) { props["FieldRef"] = fieldInfo.fieldRef; }
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
        props["ShowField"] = fieldInfo.showField || "Title";

        // See if the lookup name exists
        if (fieldInfo.listName) {
            // Get the web containing the list
            Web(fieldInfo.webUrl)
                // Get the list
                .Lists(fieldInfo.listName)
                // Set the query
                .query({
                    Expand: ["ParentWeb"]
                })
                // Execute the request
                .execute(list => {
                    // Set the list and web ids
                    props["List"] = "{" + list.Id + "}";
                    if (fieldInfo.webUrl) { props["WebId"] = list.ParentWeb.Id; }

                    // Resolve the request
                    _resolve("<Field " + toString(props) + " />");
                });
        } else {
            // Set the list id
            props["List"] = "{" + fieldInfo.listId.replace(/[\{\}]/g, "") + "}";

            // Resolve the request
            _resolve("<Field " + toString(props) + " />");
        }
    }

    // Returns the schema xml for a managed metadata field.
    let createMMS = (fieldInfo: IFieldInfoMMS, props: object) => {
        // Create the value field
        let valueProps = {
            ID: "{" + ContextInfo.generateGUID() + "}",
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
        let schemaXmlValue = "<Field " + toString(valueProps) + " />";

        // Set the mms properties
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");

        // Generate the mms field schema xml
        let schemaXml = [
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
    }

    // Returns the schema xml for a note field.
    let createNote = (fieldInfo: IFieldInfoNote, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Note";

        // Set the note properties
        if (fieldInfo.appendFl) { props["AppendOnly"] = "TRUE"; }
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == SPTypes.FieldNoteType.RichText) { props["RichText"] = "TRUE"; }
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText) { props["RichTextMode"] = "FullHtml"; }
        if (fieldInfo.numberOfLines > 0) { props["NumLines"] = fieldInfo.numberOfLines; }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a number field.
    let createNumber = (fieldInfo: IFieldInfoNumber, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Number";

        // Set the number properties
        if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        if (fieldInfo.max != null) { props["Max"] = fieldInfo.max; }
        if (fieldInfo.min != null) { props["Min"] = fieldInfo.min; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Integer) { props["Decimals"] = 0; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Percentage) { props["ShowPercentage"] = "TRUE"; }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a text field.
    let createText = (fieldInfo: IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Text";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a url field.
    let createUrl = (fieldInfo: IFieldInfoUrl, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "URL";

        // Set the url properties
        props["Format"] = fieldInfo.format == SPTypes.UrlFormatType.Image ? "Image" : "Hyperlink";

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Returns the schema xml for a user field.
    let createUser = (fieldInfo: IFieldInfoUser, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "User";

        // Set the user properties
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
        if (fieldInfo.selectionMode != null) { props["UserSelectionMode"] = fieldInfo.selectionMode; }
        if (fieldInfo.selectionScope != null) { props["UserSelectionScope"] = fieldInfo.selectionScope; }

        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";

        // Resolve the request
        _resolve(schemaXml);
    }

    // Method to convert the properties to a string
    let toString = (props) => {
        let properties = "";

        // Parse the properties
        for (let key in props) {
            let value = props[key];

            // Add the property
            properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
        }

        // Return the string value
        return properties;
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // Set the resolve method
        _resolve = resolve;

        // See if the schema xml has been defined
        if (fieldInfo.schemaXml) {
            // Resolve the promise
            resolve(fieldInfo.schemaXml);
        } else {
            // Set the base properties
            let props = {};
            props["ID"] = "{" + ContextInfo.generateGUID() + "}";
            props["Name"] = fieldInfo.name;
            props["StaticName"] = fieldInfo.name;
            props["DisplayName"] = fieldInfo.title || fieldInfo.name;

            // Set the optional properties
            if (typeof (fieldInfo.description) !== "undefined") { props["Description"] = fieldInfo.description; }
            if (typeof (fieldInfo.group) !== "undefined") { props["Group"] = fieldInfo.group; }
            if (typeof (fieldInfo.jslink) !== "undefined") { props["JSLink"] = fieldInfo.jslink; }
            if (typeof (fieldInfo.hidden) !== "undefined") { props["Hidden"] = fieldInfo.hidden ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.readOnly) !== "undefined") { props["ReadOnly"] = fieldInfo.readOnly ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.required) !== "undefined") { props["Required"] = fieldInfo.required ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.showInDisplayForm) !== "undefined") { props["ShowInDisplayForm"] = fieldInfo.showInDisplayForm ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.showInEditForm) !== "undefined") { props["ShowInEditForm"] = fieldInfo.showInEditForm ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.showInListSettings) !== "undefined") { props["ShowInListSettings"] = fieldInfo.showInListSettings ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.showInNewForm) !== "undefined") { props["ShowInNewForm"] = fieldInfo.showInNewForm ? "TRUE" : "FALSE"; }
            if (typeof (fieldInfo.showInViewForms) !== "undefined") { props["ShowInViewForms"] = fieldInfo.showInViewForms ? "TRUE" : "FALSE"; }

            // Set the type
            switch (fieldInfo.type) {
                // Boolean
                case SPCfgFieldType.Boolean:
                    createBoolean(fieldInfo, props);
                    break;
                // Calculated
                case SPCfgFieldType.Calculated:
                    createCalculated(fieldInfo, props);
                    break;
                // Choice
                case SPCfgFieldType.Choice:
                    createChoice(fieldInfo, props);
                    break;
                // Currency
                case SPCfgFieldType.Currency:
                    createCurrency(fieldInfo, props);
                    break;
                // Date/Time
                case SPCfgFieldType.Date:
                    createDate(fieldInfo, props);
                    break;
                // Geolocation
                case SPCfgFieldType.Geolocation:
                    createGeolocation(fieldInfo, props);
                    break;
                // Lookup
                case SPCfgFieldType.Lookup:
                    createLookup(fieldInfo, props);
                    break;
                // MMS
                case SPCfgFieldType.MMS:
                    createMMS(fieldInfo, props);
                    break;
                // Note
                case SPCfgFieldType.Note:
                    createNote(fieldInfo, props);
                    break;
                // Number
                case SPCfgFieldType.Number:
                    createNumber(fieldInfo, props);
                    break;
                // Text
                case SPCfgFieldType.Text:
                    createText(fieldInfo, props);
                    break;
                // URL
                case SPCfgFieldType.Url:
                    createUrl(fieldInfo, props);
                    break;
                // User
                case SPCfgFieldType.User:
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
}