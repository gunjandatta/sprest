import { Types } from "..";
export * from "./spCfgTypes.def";

/**
 * Field Information
 */
export interface IFieldInfo {
    /** The default value of the field */
    defaultValue?: string;

    /** The internal name of the field */
    name: string;

    /** Flag to determine if the field is required */
    required?: boolean;

    /** The schema definition of the field. */
    schemaXml?: string;

    /** The field title */
    title?: string;

    /** The field type */
    type?: number;
}

/**
 * Calculated Field Information
 */
export interface IFieldInfoCalculated extends IFieldInfo {
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
export interface IFieldInfoChoice extends IFieldInfo {
    /** The choices */
    choices?: string[];

    /** Allow multiple choices */
    multi?: boolean;
}

/**
 * Date Field Information
 */
export interface IFieldInfoDate extends IFieldInfo {
    /** The date/time format */
    format?: number;
}

/**
 * Lookup Field Information
 */
export interface IFieldInfoLookup extends IFieldInfo {
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
export interface IFieldInfoMMS extends IFieldInfo {
    /** The locale value */
    locale?: number;
}

/**
 * Note
 */
export interface IFieldInfoNote extends IFieldInfo {
    /** Flag to append the comments. (This requires versioning to be enabled) */
    appendFl?: boolean;

    /** The note field type */
    noteType?: number;

    /** The number of lines */
    numberOfLines?: number;
}

/**
 * Number
 */
export interface IFieldInfoNumber extends IFieldInfo {
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
export interface IFieldInfoUser extends IFieldInfo {
    /** Allow multiple choices */
    multi?: boolean;

    /** The user selection mode */
    selectionMode?: number;

    /** The user selection scope */
    selectionScope?: number;
}
/**
 * SharePoint Configuration - Content Type Information
 */
export interface ISPCfgContentTypeInfo extends Types.IContentTypeCreationInformation {
    /**
     * The content type. (This value is set internally.)
     */
    ContentType?: Types.IContentTypeResult;

    /**
     * The field references.
     */
    FieldRefs?: Array<string>;

    /**
     * The JSLink property.
     */
    JSLink?: string;

    /**
     * The parent content type name, required if different then the name.
     */
    ParentName?: string;

    /**
     * The url of the web containing the parent content type, required if the parent content type doesn't exist in the current web.
     */
    ParentWebUrl?: string;

    /**
     * Event triggered after the content type is created.
     */
    onCreated?: (ct: Types.IContentTypeResult) => void;

    /**
     * Event triggered after the content type is updated.
     */
    onUpdated?: (ct: Types.IContentTypeResult) => void;
}

/**
 * SharePoint Configuration - Custom Action Information
 */
export interface ISPCfgCustomActionInfo {
    /**
     * Custom actions to be created at the site collection level.
     */
    Site?: Array<Types.IUserCustomActionCreationInformation>,

    /**
     * Custom actions to be created at the web level.
     */
    Web?: Array<Types.IUserCustomActionCreationInformation>
}

/**
 * SharePoint Configuration - Field Information
 */
export interface ISPCfgFieldInfo extends IFieldInfo {
    /**
     * Event triggered after the field is created.
     */
    onCreated?: (field: Types.IFieldResult) => void;

    /**
     * Event triggered after the field is updated.
     */
    onUpdated?: (field: Types.IFieldResult) => void;
}

/**
 * SharePoint Configuration - List Information
 */
export interface ISPCfgListInfo {
    /** The content types. */
    ContentTypes?: Array<ISPCfgContentTypeInfo>;

    /** The custom list fields. */
    CustomFields?: Array<ISPCfgFieldInfo>;

    /** The list creation information. */
    ListInformation: Types.IListCreationInformation;

    /** The title display name. */
    TitleFieldDisplayName?: string;

    /** The user custom actions. */
    UserCustomActions?: Array<Types.IUserCustomActionCreationInformation>;

    /** The view information. */
    ViewInformation?: Array<ISPCfgViewInfo>;

    /**
     * Event triggered after the list is created or updated.
     */
    onCreated?: (list: Types.IListResult) => void;

    /**
     * Event triggered after the list is updated.
     */
    onUpdated?: (list: Types.IListQueryResult) => void;
}

/**
 * SharePoint Configuration - View Information
 */
export interface ISPCfgViewInfo {
    /** The JSLink property. */
    JSLink?: string;

    /** The view fields. */
    ViewFields?: Array<string>;

    /** The view name. */
    ViewName: string;

    /** The view query. */
    ViewQuery?: string;

    /**
     * Event triggered after the view is created or updated.
     */
    onCreated?: (view: Types.IViewResult) => void;

    /**
     * Event triggered after the view is updated.
     */
    onUpdated?: (view: Types.IView) => void;
}

/**
 * SharePoint Configuration - WebPart Information
 */
export interface ISPCfgWebPartInfo {
    /** The file name of the webpart. */
    FileName: string;

    /** The webpart group. */
    Group?: string;

    /** The webpart xml */
    XML: string;

    /**
     * Event triggered after the webpart file is created.
     */
    onCreated?: (file: Types.IFileResult) => void;

    /**
     * Event triggered after the webpart file is updated.
     */
    onUpdated?: (file: Types.IFileResult) => void;
}

/**
 * SharePoint Configuration Methods
 */
export interface ISPConfig {
    /**
     * Constructor
     * @param cfg - The SharePoint configuration information.
     * @param webUrl - An optional string representing the relative web url.
     */
    new(cfg: ISPConfigProps, webUrl?: string);

    /**
     * Method to install the configuration
     * @param callback - An optional function called after the execution completes.
     */
    install(callback?: () => void);

    /**
     * Method to install by the configuration type.
     * @param cfgType - The configuration type.
     * @param callback - An optional function called after the execution completes.
     * @param targetName - The target configuration type to install.
     */
    installByType(cfgType: number, callback?: any, targetName?: string);

    /**
     * Method to install the configuration
     * @param callback - An optional function called after the execution completes.
     */
    uninstall(callback?: () => void);

    /**
     * Method to uninstall by the configuration type.
     * @param cfgType - The configuration type.
     * @param callback - An optional function called after the execution completes.
     * @param targetName - The target configuration type to uninstall.
     */
    uninstallByType(cfgType: number, callback?: any, targetName?: string);
}

/**
 * SharePoint Configuration - Properties
 */
export interface ISPConfigProps {
    /** The content types. */
    ContentTypes?: Array<ISPCfgContentTypeInfo>;

    /** The custom action configuration. */
    CustomActionCfg?: ISPCfgCustomActionInfo;

    /** The site column configuration. */
    Fields?: Array<ISPCfgFieldInfo>;

    /** The list configuration. */
    ListCfg?: Array<ISPCfgListInfo>;

    /** The web part configuration. */
    WebPartCfg?: Array<ISPCfgWebPartInfo>;
}

/**
 * SharePoint Configuration - Types
 */
export interface ISPConfigTypes {
    /** Fields */
    Fields: number;

    /** Content Types */
    ContentTypes: number;

    /** Lists */
    Lists: number;

    /** Site User Custom Actions */
    SiteUserCustomActions: number;

    /** Web User Custom Actions */
    WebUserCustomActions: number;
}