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
export declare class SPConfigFields {
    /** Returns the schema xml for a boolean field. */
    static createBoolean(fieldInfo: ISPConfigFieldInfo): string;
    /** Returns the schema xml for a calculated field. */
    static createCalculated(fieldInfo: ISPConfigFieldInfoCalculated): string;
    /** Returns the schema xml for a choice field. */
    static createChoice(fieldInfo: ISPConfigFieldInfoChoice): string;
    /** Returns the schema xml for a date field. */
    static createDate(fieldInfo: ISPConfigFieldInfoDate): string;
    /** Returns the schema xml for a lookup field. */
    static createLookup(fieldInfo: ISPConfigFieldInfoLookup): string;
    /** Returns the schema xml for a managed metadata field. */
    static createMMS(fieldInfo: ISPConfigFieldInfoMMS): Array<string>;
    /** Returns the schema xml for a note field. */
    static createNote(fieldInfo: ISPConfigFieldInfoNote): string;
    /** Returns the schema xml for a number field. */
    static createNumber(fieldInfo: ISPConfigFieldInfoNumber): string;
    /** Returns the schema xml for a text field. */
    static createText(fieldInfo: ISPConfigFieldInfo): string;
    /** Returns the schema xml for a url field. */
    static createUrl(fieldInfo: ISPConfigFieldInfo): string;
    /** Returns the schema xml for a user field. */
    static createUser(fieldInfo: ISPConfigFieldInfoUser): string;
    /**
     * Methods
     */
    private static getFieldProps;
    private static toString;
}
