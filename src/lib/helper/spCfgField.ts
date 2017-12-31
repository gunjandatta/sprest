import { ContextInfo } from "..";
import { Types } from "../../mapper";
import { SPTypes } from "../../types";

/**
 * Field Information
 */
export interface ISPConfigFieldInfo {
    /** The default value of the field */
    defaultValue?: string;

    /** The internal name of the field */
    name: string;

    /** Flag to determine if the field is required */
    required?: boolean;

    /** The field title */
    title: string;

    /** The field type */
    type?: number;
}

/**
 * Calculated Field Information
 */
export interface ISPConfigFieldInfoCalculated extends ISPConfigFieldInfo {
    /** The field references */
    fieldRefs?: Array<string>;

    /** The date/time format */
    format?: number;

    /** The formula */
    formula: string;

    /** The result type */
    resultType?: string;
}

/**
 * Choice Field Information
 */
export interface ISPConfigFieldInfoChoice extends ISPConfigFieldInfo {
    /** The choices */
    choices?: string[];

    /** Allow multiple choices */
    multi?: boolean;
}

/**
 * Date Field Information
 */
export interface ISPConfigFieldInfoDate extends ISPConfigFieldInfo {
    /** The date/time format */
    format: number;
}

/**
 * Lookup Field Information
 */
export interface ISPConfigFieldInfoLookup extends ISPConfigFieldInfo {
    /** The field reference (Required for associated lookup fields) */
    fieldRef?: string;

    /** Allow multiple lookup values */
    multi?: boolean;

    /** The list name */
    listName: string;

    /** The lookup field to show */
    showField: string;

    /** The relative web url containing the list */
    webUrl?: string;
}

/**
 * Managed Metadata
 */
export interface ISPConfigFieldInfoMMS extends ISPConfigFieldInfo {
    /** The locale value */
    locale?: number;
}

/**
 * Note
 */
export interface ISPConfigFieldInfoNote extends ISPConfigFieldInfo {
    /** The note field type */
    noteType: number;

    /** The number of lines */
    numberOfLines?: number;
}

/**
 * Number
 */
export interface ISPConfigFieldInfoNumber extends ISPConfigFieldInfo {
    /** The number of decimal places */
    decimals?: number;

    /** The maximum value */
    max?: number;

    /** The minimum value */
    min?: number;

    /** The number field type */
    numberType: number;
}

/**
 * User
 */
export interface ISPConfigFieldInfoUser extends ISPConfigFieldInfo {
    /** Allow multiple choices */
    multi?: boolean;

    /** The user selection mode */
    selectionMode?: number;

    /** The user selection scope */
    selectionScope?: number;
}

/**
 * SharePoint Configuration Fields
 */
export interface ISPConfigFields {
    /** Returns the schema xml for a boolean field. */
    createBoolean: (fieldInfo: ISPConfigFieldInfo) => string;

    /** Returns the schema xml for a calculated field. */
    createCalculated: (fieldInfo: ISPConfigFieldInfoCalculated) => string;

    /** Returns the schema xml for a choice field. */
    createChoice: (fieldInfo: ISPConfigFieldInfoChoice) => string;

    /** Returns the schema xml for a date field. */
    createDate: (fieldInfo: ISPConfigFieldInfoDate) => string;

    /** Returns the schema xml for a lookup field. */
    createLookup: (fieldInfo: ISPConfigFieldInfoLookup) => string;

    /** Returns the schema xml for a managed metadata field. */
    createMMS: (fieldInfo: ISPConfigFieldInfoMMS) => string;

    /** Returns the schema xml for a note field. */
    createNote: (fieldInfo: ISPConfigFieldInfoNote) => string;

    /** Returns the schema xml for a number field. */
    createNumber: (fieldInfo: ISPConfigFieldInfoNumber) => string;

    /** Returns the schema xml for a url field. */
    createUrl: (fieldInfo: ISPConfigFieldInfo) => string;

    /** Returns the schema xml for a user field. */
    createUser: (fieldInfo: ISPConfigFieldInfo) => string;
}

/**
 * SharePoint Configuration Fields
 */
export class SPConfigFields {
    /** Returns the schema xml for a boolean field. */
    static createBoolean(fieldInfo: ISPConfigFieldInfo): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Boolean;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        schemaXml += "</Field>";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a calculated field. */
    static createCalculated(fieldInfo: ISPConfigFieldInfoCalculated): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Calculated;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);

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

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a choice field. */
    static createChoice(fieldInfo: ISPConfigFieldInfoChoice): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = fieldInfo.multi ? SPTypes.FieldType.MultiChoice : SPTypes.FieldType.Choice;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + ">";
        if (fieldInfo.defaultValue) { schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>"; }
        if (fieldInfo.choices) {
            schemaXml += "<CHOICES>";
            for (let i = 0; i < fieldInfo.choices.length; i++) { schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>"; }
            schemaXml += "</CHOICES>";
        }
        schemaXml += "</Field>";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a date field. */
    static createDate(fieldInfo: ISPConfigFieldInfoDate): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.DateTime;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);
        props["Format"] = fieldInfo.format == SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a lookup field. */
    static createLookup(fieldInfo: ISPConfigFieldInfoLookup): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Lookup;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);
        if (fieldInfo.fieldRef) { props["FieldRef"] = fieldInfo.fieldRef; }
        if (fieldInfo.listName) { props["List"] = fieldInfo.listName; }
        if (fieldInfo.multi) { props["Multi"] = "TRUE"; }
        if (fieldInfo.showField) { props["ShowField"] = fieldInfo.showField; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a managed metadata field. */
    static createMMS(fieldInfo: ISPConfigFieldInfoMMS): Array<string> {
        let schemaXml: string = null;

        // Create the value field
        let valueProps = this.getFieldProps({
            name: fieldInfo.name + "_0",
            title: fieldInfo.title + " Value",
            type: SPTypes.FieldType.Note
        });

        // Generate the value field schema xml
        let schemaXmlValue = "<Field " + this.toString(valueProps) + " />";

        // Set the type
        let props = this.getFieldProps(fieldInfo);
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
    }

    /** Returns the schema xml for a note field. */
    static createNote(fieldInfo: ISPConfigFieldInfoNote): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Note;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == SPTypes.FieldNoteType.RichText) { props["RichText"] = "TRUE"; }
        if (fieldInfo.noteType == SPTypes.FieldNoteType.EnhancedRichText) { props["RichTextMode"] = "FullHtml"; }
        if (fieldInfo.numberOfLines > 0) { fieldInfo["NumLines"] = fieldInfo.numberOfLines; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a number field. */
    static createNumber(fieldInfo: ISPConfigFieldInfoNumber): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Number;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);
        if (fieldInfo.decimals >= 0) { props["Decimals"] = fieldInfo.decimals; }
        if (fieldInfo.max != null) { props["Max"] = fieldInfo.max; }
        if (fieldInfo.min != null) { props["Min"] = fieldInfo.min; }
        if (fieldInfo.numberType == SPTypes.FieldNumberType.Percentage) { props["ShowPercentage"] = "TRUE"; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a text field. */
    static createText(fieldInfo: ISPConfigFieldInfo): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.Text;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a url field. */
    static createUrl(fieldInfo: ISPConfigFieldInfo): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.URL;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /** Returns the schema xml for a user field. */
    static createUser(fieldInfo: ISPConfigFieldInfoUser): string {
        let schemaXml: string = null;

        // Set the field type
        fieldInfo.type = SPTypes.FieldType.URL;

        // Get the base properties
        let props = this.getFieldProps(fieldInfo);
        if (fieldInfo.multi) { props["Mult"] = "TRUE"; }
        if (fieldInfo.selectionMode != null) { props["UserSelectionMode"] = fieldInfo.selectionMode; }
        if (fieldInfo.selectionScope != null) { props["UserSelectionScope"] = fieldInfo.selectionScope; }

        // Generate the schema
        schemaXml = "<Field " + this.toString(props) + " />";

        // Return the schema xml
        return schemaXml;
    }

    /**
     * Methods
     */

    // Method to get the field properties
    private static getFieldProps = (fieldInfo: ISPConfigFieldInfo) => {
        let props = {};

        // Set the base properties
        props["ID"] = ContextInfo.generateGUID();
        props["Name"] = fieldInfo.name;
        props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
        props["StaticName"] = fieldInfo.name;
        props["Title"] = fieldInfo.title;

        // Set the type
        switch (fieldInfo.type) {
            // Boolean
            case SPTypes.FieldType.Boolean:
                props["Type"] = "Boolean";
                break;
            // Choice
            case SPTypes.FieldType.Choice:
                props["Type"] = "Choice";
                break;
            // Date/Time
            case SPTypes.FieldType.DateTime:
                props["Type"] = "DateTime";
                break;
            // Multi-Choice
            case SPTypes.FieldType.MultiChoice:
                props["Type"] = "MultiChoice";
                break;
            // Lookup
            case SPTypes.FieldType.Lookup:
                props["Type"] = "Lookup";
                break;
            // Note
            case SPTypes.FieldType.Note:
                props["Type"] = "Note";
                break;
            // Number
            case SPTypes.FieldType.Number:
                props["Type"] = "Number";
                break;
            // Text
            case SPTypes.FieldType.Text:
                props["Type"] = "Text";
                break;
            // URL
            case SPTypes.FieldType.URL:
                props["Type"] = "URL";
                break;
            // User
            case SPTypes.FieldType.User:
                props["Type"] = "User";
                break;
        }

        // Return the properties
        return props;
    }

    // Method to convert the properties to a string
    private static toString = (props) => {
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