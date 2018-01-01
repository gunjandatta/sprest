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
    formula?: string;

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
    format?: number;
}

/**
 * Lookup Field Information
 */
export interface ISPConfigFieldInfoLookup extends ISPConfigFieldInfo {
    /** The field reference (Required for associated lookup fields) */
    fieldRef?: string;

    /** Allow multiple lookup values */
    multi?: boolean;

    /** The list id */
    listId?: string;

    /** The list name */
    listName?: string;

    /** The lookup field to show */
    showField?: string;

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
    noteType?: number;

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
    numberType?: number;
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
