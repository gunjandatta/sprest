import { ContextInfo, Web } from "../lib";
import { SPTypes, Types } from "..";
import { IFieldSchemaXML } from "./types";
import { SPCfgFieldType } from "./spCfg";

/**
 * Field Schema XML
 * Helper class for generating the field schema xml
 */
class _FieldSchemaXML {
    // Method to resolve this request
    _resolve = null;

    // Generates the schema xml, based on the field information provided.
    generate = (fieldInfo: Types.Helper.IFieldInfo): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Set the resolve method
            this._resolve = resolve;

            // See if the schema xml has been defined
            if (fieldInfo.schemaXml) {
                // Resolve the promise
                resolve(fieldInfo.schemaXml);
            } else {
                // Set the base properties
                let props = {};
                props["ID"] = "{" + ContextInfo.generateGUID() + "}";
                props["Name"] = fieldInfo.name;
                props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
                props["StaticName"] = fieldInfo.name;
                props["DisplayName"] = fieldInfo.title;

                // Set the type
                switch (fieldInfo.type) {
                    // Boolean
                    case SPCfgFieldType.Boolean:
                        this.createBoolean(fieldInfo, props);
                        break;
                    // Calculated
                    case SPCfgFieldType.Calculated:
                        this.createCalculated(fieldInfo, props);
                        break;
                    // Choice
                    case SPCfgFieldType.Choice:
                        this.createChoice(fieldInfo, props);
                        break;
                    // Date/Time
                    case SPCfgFieldType.Date:
                        this.createDate(fieldInfo, props);
                        break;
                    // Lookup
                    case SPCfgFieldType.Lookup:
                        this.createLookup(fieldInfo, props);
                        break;
                    // MMS
                    case SPCfgFieldType.MMS:
                        this.createMMS(fieldInfo, props);
                        break;
                    // Note
                    case SPCfgFieldType.Note:
                        this.createNote(fieldInfo, props);
                        break;
                    // Number
                    case SPCfgFieldType.Number:
                        this.createNumber(fieldInfo, props);
                        break;
                    // Text
                    case SPCfgFieldType.Text:
                        this.createText(fieldInfo, props);
                        break;
                    // URL
                    case SPCfgFieldType.Url:
                        this.createUrl(fieldInfo, props);
                        break;
                    // User
                    case SPCfgFieldType.User:
                        this.createUser(fieldInfo, props);
                        break;
                    // Field type not supported
                    default:
                        // Resolve the promise
                        resolve();
                        break;
                }
            }
        });
    }

    /**
     * Methods
     */

    /** Returns the schema xml for a boolean field. */
    private createBoolean = (fieldInfo: Types.Helper.IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Boolean";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        schemaXml += "</Field>";

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a calculated field. */
    private createCalculated = (fieldInfo: Types.Helper.IFieldInfoCalculated, props: object) => {
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

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a choice field. */
    private createChoice = (fieldInfo: Types.Helper.IFieldInfoChoice, props: object) => {
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

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a date field. */
    private createDate = (fieldInfo: Types.Helper.IFieldInfoDate, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "DateTime";

        // Set the date/time properties
        props["Format"] = fieldInfo.format == SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a lookup field. */
    private createLookup = (fieldInfo: Types.Helper.IFieldInfoLookup, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";

        // Set the lookup properties
        if (fieldInfo.fieldRef) { props["FieldRef"] = fieldInfo.fieldRef; }
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
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

                    // Resolve the request
                    this._resolve("<Field " + this.toString(props) + " />");
                });
        } else {
            // Set the list id
            props["List"] = fieldInfo.listId;

            // Resolve the request
            this._resolve("<Field " + this.toString(props) + " />");
        }
    }

    /** Returns the schema xml for a managed metadata field. */
    private createMMS = (fieldInfo: Types.Helper.IFieldInfoMMS, props: object) => {
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
        let schemaXmlValue = "<Field " + this.toString(valueProps) + " />";

        // Set the mms properties
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");

        // Generate the mms field schema xml
        let schemaXml = [
            "<Field " + this.toString(props) + ">",
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
        this._resolve([schemaXmlValue, schemaXml]);
    }

    /** Returns the schema xml for a note field. */
    private createNote = (fieldInfo: Types.Helper.IFieldInfoNote, props: object) => {
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

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a number field. */
    private createNumber = (fieldInfo: Types.Helper.IFieldInfoNumber, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Number";

        // Set the number properties
        if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
        if (fieldInfo.max != null) { props["Max"] = fieldInfo.max; }
        if (fieldInfo.min != null) { props["Min"] = fieldInfo.min; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Integer) { props["Decimals"] = 0; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Percentage) { props["ShowPercentage"] = "TRUE"; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a text field. */
    private createText = (fieldInfo: Types.Helper.IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "Text";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a url field. */
    private createUrl = (fieldInfo: Types.Helper.IFieldInfo, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "URL";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the request
        this._resolve(schemaXml);
    }

    /** Returns the schema xml for a user field. */
    private createUser = (fieldInfo: Types.Helper.IFieldInfoUser, props: object) => {
        let schemaXml: string = null;

        // Set the field type
        props["Type"] = "User";

        // Set the user properties
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
        if (fieldInfo.selectionMode != null) { props["UserSelectionMode"] = fieldInfo.selectionMode; }
        if (fieldInfo.selectionScope != null) { props["UserSelectionScope"] = fieldInfo.selectionScope; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Resolve the request
        this._resolve(schemaXml);
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