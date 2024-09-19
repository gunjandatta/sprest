import { ContentTypeCreationInformation } from "gd-sprest-def/lib/SP/complextypes";
import { ContentType, Field, FieldLinkProps, File, List, ListProps, UserCustomActionProps, View } from "gd-sprest-def/lib/SP/entitytypes";

/**
 * Helper class for creating SharePoint Assets
 * 
 * ### Example Configuration
 * ```ts
 * let cfg = Helper.SPConfig({
 *     ListCfg: [
 *         {
 *             ListInformation: {
 *                 BaseTemplate: SPTypes.ListTemplateType.GenericList,
 *                 Description: "",
 *                 Title: "My Custom List",
 *             },
 *             ViewInformation: [
 *                 {
 *                     JSLink: "~sitecollection/style library/jslinks/mySolution.js",
 *                     ViewFields: ["ID", "Title", "InternalFieldName"],
 *                     ViewName: "All Items",
 *                     ViewQuery: "<Query></Query>"
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * 
 * // Install the library
 * cfg.install();
 * 
 * // Unisntall the library
 * cfg.uninstall();
 * ```
 */
export const SPConfig: (cfg: ISPConfigProps, webUrl?: string) => ISPConfig;

/**
 * Field Information
 */
export interface IFieldInfo {
    /** True, to allow deletion of the field. */
    allowDeletion?: boolean;

    /** The JSON property for applying a custom format to the field. */
    customFormatter?: object;

    /** The default value of the field. */
    defaultValue?: string;

    /** The field description. */
    description?: string;

    /** True to enforce unique values. */
    enforceUniqueValues?: boolean;

    /** The group name. */
    group?: string;

    /** True for hidden fields. */
    hidden?: boolean;

    /** The guid of the field. */
    id?: string;

    /** True to index the field. */
    indexed?: boolean;

    /** The JSLink value for the field. */
    jslink?: string;

    /** The internal name of the field. */
    name: string;

    /** Flag to determine if the field is readonly. */
    readOnly?: boolean;

    /** Flag to determine if the field is required. */
    required?: boolean;

    /** The schema definition of the field. */
    schemaXml?: string;

    /** Flag to make this field visible in the display form. */
    showInDisplayForm?: boolean;

    /** Flag to make this field visible in the edit form. */
    showInEditForm?: boolean;

    /** Flag to make this field visible in the list settings. */
    showInListSettings?: boolean;

    /** Flag to make this field visible in the new form. */
    showInNewForm?: boolean;

    /** Flag to make this field visible in the list view. */
    showInViewForms?: boolean;

    /** Flag to disable sorting from the list view. */
    sortable?: boolean;

    /** The field title */
    title?: string;

    /** The field type */
    type?: number;
}

/**
 * Calculated Field Information
 */
export interface IFieldInfoCalculated extends IFieldInfo {
    /** The number of decimal places */
    decimals?: number;

    /** The field references */
    fieldRefs?: Array<string>;

    /** The date/time format */
    format?: number;

    /** The formula */
    formula?: string;

    /** The country/region whose currency format is being used. */
    lcid?: number;

    /** The number field type */
    numberType?: number;

    /** The result type */
    resultType?: string;
}

/**
 * Choice Field Information
 */
export interface IFieldInfoChoice extends IFieldInfo {
    /** The choices */
    choices?: string[];

    /** Allow users to fill in custom values */
    fillInChoice?: boolean;

    /** The selection format */
    format?: number;

    /** Allow multiple choices */
    multi?: boolean;
}

/**
 * Currency Field Information
 */
export interface IFieldInfoCurrency extends IFieldInfo {
    /** The number of decimal places */
    decimals?: number;

    /** The country/region whose currency format is being used. */
    lcid?: number;

    /** The maximum value */
    max?: number;

    /** The minimum value */
    min?: number;
}

/**
 * Date Field Information
 */
export interface IFieldInfoDate extends IFieldInfo {
    /** The default formula */
    defaultFormula?: string;

    /** Sets the default value to today's date */
    defaultToday?: boolean;

    /** The display format */
    displayFormat?: number;

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

    /** The lookup field relationship behavior */
    relationshipBehavior?: number;

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
export interface IFieldInfoNote extends IFieldInfoText {
    /** Flag to append the comments. (This requires versioning to be enabled) */
    appendFl?: boolean;

    /** The note field type */
    noteType?: number;

    /** The number of lines */
    numberOfLines?: number;

    /** Allow unlimited length for document libraries. */
    unlimited?: boolean;
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
 * Text
 */
export interface IFieldInfoText extends IFieldInfo {
    /** The max length */
    maxLength?: number;
}

/**
 * Url
 */
export interface IFieldInfoUrl extends IFieldInfo {
    /** The attribute to set the url as a Hyperlink or Image */
    format?: number;
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

    /** The lookup field to show */
    showField?: string;
}

/**
 * SharePoint Configuration - Content Type Information
 */
export interface ISPCfgContentTypeInfo extends ContentTypeCreationInformation {
    /**
     * The client form custom formatter.
     */
    ClientFormCustomFormatter?: string;

    /**
     * The content type. (This value is set internally.)
     */
    ContentType?: ContentType;

    /**
     * The field references.
     */
    FieldRefs?: Array<string | FieldLinkProps>;

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
    onCreated?: (ct: ContentType, list?: List) => void;

    /**
     * Event triggered after the content type is updated.
     */
    onUpdated?: (ct: ContentType) => void;
}

/**
 * SharePoint Configuration - Custom Action Information
 */
export interface ISPCfgCustomActionInfo {
    /**
     * Custom actions to be created at the site collection level.
     */
    Site?: Array<UserCustomActionProps>,

    /**
     * Custom actions to be created at the web level.
     */
    Web?: Array<UserCustomActionProps>
}

/**
 * SharePoint Configuration - Field Information
 */
export interface ISPCfgFieldInfo extends IFieldInfo {
    /**
     * Event triggered after the field is created.
     */
    onCreated?: (field: Field, list?: List) => void;

    /**
     * Event triggered after the field is updated.
     */
    onUpdated?: (field: Field, list?: List) => void;
}

/**
 * SharePoint Configuration - List Information
 */
export interface ISPCfgListInfo {
    /** The content Types. */
    ContentTypes?: Array<ISPCfgContentTypeInfo>;

    /** The custom list fields. */
    CustomFields?: Array<ISPCfgFieldInfo>;

    /** The list creation information. */
    ListInformation: ListProps;

    /** The list url name. */
    ListUrlName?: string;

    /** The title default value. */
    TitleFieldDefaultValue?: string;

    /** The title display name. */
    TitleFieldDisplayName?: string;

    /** Flag to index the title field. */
    TitleFieldIndexed?: boolean;

    /** Flag to enfore a value. */
    TitleFieldRequired?: boolean;

    /** Flag to enforce unique values. */
    TitleFieldUniqueValues?: boolean;

    /** The user custom actions. */
    UserCustomActions?: Array<UserCustomActionProps>;

    /** The view information. */
    ViewInformation?: Array<ISPCfgViewInfo>;

    /**
     * Event triggered after the list is created and configured.
     */
    onCreated?: (list: List) => void;

    /**
     * Event triggered after the list is created.
     */
    onCreating?: (list: List) => void;

    /**
     * Event triggered after the list is updated.
     */
    onUpdated?: (list: List) => void;
}

/**
 * SharePoint Configuration - View Information
 */
export interface ISPCfgViewInfo {
    /** Custom formatter */
    CustomFormatter?: string;

    /** Flag to set the view as the default view. */
    Default?: boolean;

    /** The JSLink property. */
    JSLink?: string;

    /** Flag to set the view as hidden. */
    Hidden?: boolean;

    /** Flag to set the default mobile view. */
    MobileDefaultView?: boolean;

    /** Flag to set the view for mobile. */
    MobileView?: boolean;

    /** The row limit property. */
    RowLimit?: number;

    /** Flag to enable the tabular view option. */
    Tabular?: boolean;

    /** The view fields. */
    ViewFields?: Array<string>;

    /** The view name. */
    ViewName: string;

    /** The view query. */
    ViewQuery?: string;

    /**
     * Event triggered after the view is created or updated.
     */
    onCreated?: (view: View, list?: List) => void;

    /**
     * Event triggered after the view is updated.
     */
    onUpdated?: (view: View, list?: List) => void;
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
    onCreated?: (file: File) => void;

    /**
     * Event triggered after the webpart file is updated.
     */
    onUpdated?: (file: File) => void;
}

/**
 * SharePoint Configuration Methods
 */
export interface ISPConfig {
    /** The configuration. */
    _configuration: ISPConfigProps;

    /** Gets the web url for the solution assets. */
    getWebUrl(): string;

    /**
     * Method to install the configuration
     */
    install(): PromiseLike<void>;

    /**
     * Sets the web url to install/uninstall the solution to/from.
     * @param url - The web url.
     */
    setWebUrl(url: string);

    /**
     * Method to install the configuration
     */
    uninstall(): PromiseLike<void>;
}

/**
 * SharePoint Configuration - Properties
 */
export interface ISPConfigProps {
    /** The content Types. */
    ContentTypes?: Array<ISPCfgContentTypeInfo>;

    /** The custom action configuration. */
    CustomActionCfg?: ISPCfgCustomActionInfo;

    /** The site column configuration. */
    Fields?: Array<ISPCfgFieldInfo>;

    /** The list configuration. */
    ListCfg?: Array<ISPCfgListInfo>;

    /** Event for the logging of the configuration. */
    onLogMessage?: (msg: string, isError?: boolean) => void;

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