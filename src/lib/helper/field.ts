import { ContextInfo, Web } from "..";
import { Types } from "../../mapper";
import { SPTypes } from "../../types";
import { Promise } from "../../utils";
import { Helper } from ".";

/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Method to generate the field schema xml. */
    generate: (fieldInfo: Types.SPConfig.ISPConfigFieldInfo) => Promise;
}

/**
 * The field schema xml class
 */
class _FieldSchemaXML {
    // Generates the schema xml, based on the field information provided.
    generate = (fieldInfo: Types.SPConfig.ISPConfigFieldInfo): Promise => {
        let promise = new Promise();
        let schemaXml = null;

        // Set the base properties
        let props = {};
        props["ID"] = ContextInfo.generateGUID();
        props["Name"] = fieldInfo.name;
        props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
        props["StaticName"] = fieldInfo.name;
        props["Title"] = fieldInfo.title;

        // Set the type
        switch (fieldInfo.type) {
            // Boolean
            case Helper.Types.FieldType.Boolean:
                this.createBoolean(fieldInfo, props, promise);
                break;
            // Calculated
            case Helper.Types.FieldType.Calculated:
                this.createCalculated(fieldInfo, props, promise);
                break;
            // Choice
            case Helper.Types.FieldType.Choice:
                this.createChoice(fieldInfo, props, promise);
                break;
            // Date/Time
            case Helper.Types.FieldType.Date:
                this.createDate(fieldInfo, props, promise);
                break;
            // Lookup
            case Helper.Types.FieldType.Lookup:
                this.createLookup(fieldInfo, props, promise);
                break;
            // Note
            case Helper.Types.FieldType.Note:
                this.createNote(fieldInfo, props, promise);
                break;
            // Number
            case Helper.Types.FieldType.Number:
                this.createNumber(fieldInfo, props, promise);
                break;
            // Text
            case Helper.Types.FieldType.Text:
                this.createText(fieldInfo, props, promise);
                break;
            // URL
            case Helper.Types.FieldType.Url:
                this.createUrl(fieldInfo, props, promise);
                break;
            // User
            case Helper.Types.FieldType.User:
                this.createUser(fieldInfo, props, promise);
                break;
            // Field type not supported
            default:
                // Resolve the promise and return
                promise.resolve(null);
                return;
        }

        // Return a promise
        return promise;
    }

    /**
     * Methods
     */

    /** Returns the schema xml for a boolean field. */
    private createBoolean = (fieldInfo: Types.SPConfig.ISPConfigFieldInfo, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Boolean";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        schemaXml += "</Field>";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a calculated field. */
    private createCalculated = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoCalculated, props: object, promise: Promise) => {
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
                break;
            default:
                props["ResultType"] = "Text";
                break;
        }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.formula) { schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>"; }
        if (fieldInfo.fieldRefs) {
            schemaXml += "<FieldRefs>";
            for (let i = 0; i < fieldInfo.fieldRefs.length; i++) { schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />"; }
            schemaXml += "</FieldRefs>";
        }
        schemaXml += "</Field>";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a choice field. */
    private createChoice = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoChoice, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        if (fieldInfo.choices) {
            schemaXml += "<CHOICES>";
            for (let i = 0; i < fieldInfo.choices.length; i++) { schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>"; }
            schemaXml += "</CHOICES>";
        }
        schemaXml += "</Field>";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a date field. */
    private createDate = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoDate, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "DateTime";

        // Set the date/time properties
        props["Format"] = fieldInfo.format == SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a lookup field. */
    private createLookup = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoLookup, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Lookup";

        // Set the lookup properties
        if (fieldInfo.fieldRef) { props["FieldRef"] = fieldInfo.fieldRef; }
        if (fieldInfo.multi) { props["Multi"] = "TRUE"; }
        if (fieldInfo.showField) { props["ShowField"] = fieldInfo.showField; }

        // See if the lookup name exists
        if (fieldInfo.listName) {
            // Get the web containing the list
            (new Web(fieldInfo.webUrl))
                // Get the list
                .Lists(fieldInfo.listName)
                // Set the query
                .query({
                    Expand: ["ParentWeb"]
                })
                // Execute the request
                .execute(list => {
                    // Set the list and web ids
                    props["List"] = list.Id;
                    if (fieldInfo.webUrl) { props["WebId"] = list.ParentWeb.Id }

                    // Resolve the promise
                    promise.resolve("<Field " + this.toString(props) + " />");
                });
        } else {
            // Set the list id
            props["List"] = fieldInfo.listId;

            // Resolve the promise
            promise.resolve("<Field " + this.toString(props) + " />");
        }

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a managed metadata field. */
    private createMMS = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoMMS, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Create the value field
        let valueProps = {
            ID: ContextInfo.generateGUID(),
            Name: fieldInfo.name + "_0",
            StaticName: fieldInfo.name + "_0",
            Title: fieldInfo.title + " Value",
            Type: "Note",
            Required: fieldInfo.required ? "TRUE" : "FALSE",
            Hidden: "TRUE"
        };

        // Generate the value field schema xml
        let schemaXmlValue = "<Field " + this.toString(valueProps) + " />";

        // Set the mms properties
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");

        // Generate the mms field schema xml
        schemaXml += [
            "<Field " + this.toString(props) + ">",
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
    }

    /** Returns the schema xml for a note field. */
    private createNote = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoNote, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Note";

        // Set the note properties
        if (fieldInfo.appendFl) { props["AppendOnly"] = "TRUE"; }
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == SPTypes.FieldNoteType.RichText) { props["RichText"] = "TRUE"; }
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText) { props["RichTextMode"] = "FullHtml"; }
        if (fieldInfo.numberOfLines > 0) { props["NumLines"] = fieldInfo.numberOfLines; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a number field. */
    private createNumber = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoNumber, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Number";

        // Set the number properties
        if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
        if (fieldInfo.max != null) { props["Max"] = fieldInfo.max; }
        if (fieldInfo.min != null) { props["Min"] = fieldInfo.min; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Percentage) { props["ShowPercentage"] = "TRUE"; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a text field. */
    private createText = (fieldInfo: Types.SPConfig.ISPConfigFieldInfo, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Text";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a url field. */
    private createUrl = (fieldInfo: Types.SPConfig.ISPConfigFieldInfo, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "URL";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    /** Returns the schema xml for a user field. */
    private createUser = (fieldInfo: Types.SPConfig.ISPConfigFieldInfoUser, props: object, promise: Promise) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "User";

        // Set the user properties
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
        if (fieldInfo.selectionMode != null) { props["UserSelectionMode"] = fieldInfo.selectionMode; }
        if (fieldInfo.selectionScope != null) { props["UserSelectionScope"] = fieldInfo.selectionScope; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the promise
        promise.resolve(schemaXml);
    }

    // Method to convert the properties to a string
    private toString = (props) => {
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
}
export const FieldSchemaXML: IFieldSchemaXML = new _FieldSchemaXML();