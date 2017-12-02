import { Types } from "../../mapper";
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
    Site?: Array<Types.IUserCustomActionCreationInformation>;
    /**
     * Custom actions to be created at the web level.
     */
    Web?: Array<Types.IUserCustomActionCreationInformation>;
}
/**
 * SharePoint Configuration - Field Information
 */
export interface ISPCfgFieldInfo {
    /**
     * The internal field name.
     */
    Name: string;
    /**
     * The schema definition of the field.
     */
    SchemaXml: string;
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
    new (cfg: ISPConfigProps, webUrl?: string): any;
    /**
     * Method to install the configuration
     * @param callback - An optional function called after the execution completes.
     */
    install(callback?: () => void): any;
    /**
     * Method to install by the configuration type.
     * @param cfgType - The configuration type.
     * @param callback - An optional function called after the execution completes.
     * @param targetName - The target configuration type to install.
     */
    installByType(cfgType: ISPConfigTypes, callback?: any, targetName?: string): any;
    /**
     * Method to install a specific content type
     * @param ctName - The content type to install.
     * @param callback - An optional function called after the execution completes.
     */
    installContentType(ctName: string, callback?: any): any;
    /**
     * Method to install a specific list
     * @param listName - The list to install.
     * @param callback - An optional function called after the execution completes.
     */
    installList(listName: string, callback?: any): any;
    /**
     * Method to install a specific site custom action
     * @param caName - The site user custom action to install.
     * @param callback - An optional function called after the execution completes.
     */
    installSiteCustomAction(caName: string, callback?: any): any;
    /**
     * Method to install a specific web custom action
     * @param caName - The web user custom action to install.
     * @param callback - An optional function called after the execution completes.
     */
    installWebCustomAction(caName: string, callback?: any): any;
    /**
     * Method to install the configuration
     * @param callback - An optional function called after the execution completes.
     */
    uninstall(callback?: () => void): any;
    /**
     * Method to uninstall by the configuration type.
     * @param cfgType - The configuration type.
     * @param callback - An optional function called after the execution completes.
     * @param targetName - The target configuration type to uninstall.
     */
    uninstallByType(cfgType: ISPConfigTypes, callback?: any, targetName?: string): any;
    /**
     * Method to uninstall a specific content type
     * @param ctName - The content type to uninstall.
     * @param callback - An optional function called after the execution completes.
     */
    uninstallContentType(ctName: string, callback?: any): any;
    /**
     * Method to uninstall a specific list
     * @param listName - The list to uninstall.
     * @param callback - An optional function called after the execution completes.
     */
    uninstallList(listName: string, callback?: any): any;
    /**
     * Method to uninstall a specific site custom action
     * @param caName - The site user custom action to uninstall.
     * @param callback - An optional function called after the execution completes.
     */
    uninstallSiteCustomAction(caName: string, callback?: any): any;
    /**
     * Method to uninstall a specific web custom action
     * @param caName - The web user custom action to uninstall.
     * @param callback - An optional function called after the execution completes.
     */
    uninstallWebCustomAction(caName: string, callback?: any): any;
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
/**
 * SharePoint Configuration
 */
export declare class SPConfig {
    /**
     * Global Properties
     */
    private _cfgType;
    private _configuration;
    private _targetName;
    private _webUrl;
    /**
     * Constructor
     */
    constructor(cfg: ISPConfigProps, webUrl?: string);
    /**
     * Public Methods
     */
    install(callback?: any, cfgType?: number, targetName?: string): void;
    installByType: (cfgType: number, callback?: any, targetName?: string) => void;
    installList(listName: string, callback?: any): void;
    installSiteCustomAction(caName: string, callback?: any): void;
    installWebCustomAction(caName: string, callback?: any): void;
    uninstall(callback?: any, cfgType?: number, targetName?: string): void;
    uninstallByType: (cfgType: number, callback?: any, targetName?: string) => void;
    uninstallList(listName: string, callback?: any): void;
    uninstallSiteCustomAction(caName: string, callback?: any): void;
    uninstallWebCustomAction(caName: string, callback?: any): void;
    /**
     * Methods
     */
    private createContentTypes;
    private createFields;
    private createLists;
    private createUserCustomActions;
    private createViews;
    private createWebParts;
    private installSite;
    private installWeb;
    private isInCollection;
    private removeContentTypes;
    private removeFields;
    private removeLists;
    private removeUserCustomActions;
    private removeWebParts;
    private updateFieldSchemaXml;
    private updateLists;
    private updateViews;
    private uninstallSite;
    private uninstallWeb;
}
