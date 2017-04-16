import { ComplexTypes, IField, IFolder, IPromise, IWeb } from ".";
/**
 * App Helper Methods
 */
export interface IHelperApp {
    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolder - The destination folder.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl: string, dstFolder: IFolder, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolderUrl - The destination folder url, relative to the host web.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl: string, dstFolderUrl: string, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
    /**
     * Method to copy a file from the app web to the host web
     * @param fileUrls - An array of source file urls, relative to the app web.
     * @param folderUrls - An array of destination folder urls, relative to the host web.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFilesToHostWeb(fileUrls: Array<string>, folderUrls: Array<string>, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
    /**
     * Method to create sub-folders.
     * @param folder - The app web relative url to the source file.
     * @param subFolderUrl - The host web relative url of the destination folder.
     */
    createSubFolders(folder: IFolder, subFolderUrl: string): IPromise;
    /**
     * Method to get the file content.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     * @param createFl - Flag to create the folder, if it doesn't exist.
     */
    getFolder(web: IWeb, folderUrl: string, createFl?: boolean): IPromise;
    /**
     * Method to remove empty folders
     * @param web - The web containing the files.
     * @param folderUrls - An array of folder urls, relative to the web.
     */
    removeEmptyFolders(web: IWeb, folderUrls: Array<string>): IPromise;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrl - The file url, relative to the web.
     */
    removeFile(web: IWeb, fileUrl: string): IPromise;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     */
    removeFiles(web: IWeb, fileUrls: Array<string>): IPromise;
}
/**
 * JSLink Helper Methods
 */
export interface IHelperJSLink {
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit(ctx: any, field: any, requireValueFl?: boolean): string;
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit(ctx: any, field: any): any;
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView(ctx: any): any;
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems(ctx: any): any;
    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems(): any;
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart(ctx: any): any;
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField(ctx: any, field: any): any;
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField(ctx: any, field: any): any;
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField(ctx: any, field: any, formType?: number): any;
}
/**
 * Loader
 */
export interface ILoader {
    /**
     * Waits for the SharePoint core libraries to be loaded.
     * @param callback - The callback function.
     * @param timeout - The max time (ms) to wait for the libraries to be loaded.
     * @param loadLibraries - Flag to load the core libraries manually.
     */
    waitForSPLibs(callback: any, timeout?: number, loadLibraries?: boolean): any;
}
/**
 * SharePoint Configuration - Custom Action Information
 */
export interface ISPCfgCustomActionInfo {
    /**
     * Custom actions to be created at the site collection level.
     */
    Site?: Array<ComplexTypes.UserCustomActionCreationInformation>;
    /**
     * Custom actions to be created at the web level.
     */
    Web?: Array<ComplexTypes.UserCustomActionCreationInformation>;
}
/**
 * SharePoint Configuration - Field Information
 */
export interface ISPCfgFieldInfo {
    /**
     * The field object.
     */
    Field?: IField;
    /**
     * The internal field name.
     */
    Name: string;
    /**
     * The schema definition of the field.
     */
    SchemaXml: string;
}
/**
 * SharePoint Configuration - List Information
 */
export interface ISPCfgListInfo {
    /** The custom list fields. */
    CustomFields?: Array<ISPCfgFieldInfo>;
    /** The list creation information. */
    ListInformation: ComplexTypes.ListCreationInformation;
    /** The title display name. */
    TitleFieldDisplayName?: string;
    /** The view information. */
    ViewInformation?: Array<ISPCfgViewInfo>;
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
}
/**
 * SharePoint Configuration Methods
 */
export interface ISPConfig {
    /**
     * Constructor
     * @param cfg - The SharePoint configuration information.
     */
    new (cfg: ISPConfigProps): any;
    /**
     * Method to install the configuration
     * @param webUrl - An optional string representing the relative web url.
     * @param callback - An optional function called after the execution completes.
     */
    install(webUrl?: string, callback?: () => void): any;
    /**
     * Method to install by the configuration type.
     * @param cfgType - The configuration type.
     * @param webUrl - An optional string representing the relative web url.
     */
    installByType(cfgType: ISPConfigTypes, webUrl?: string): any;
    /**
     * Method to install the configuration
     * @param webUrl - An optional string representing the relative web url.
     * @param callback - An optional function called after the execution completes.
     */
    uninstall(webUrl?: string, callback?: () => void): any;
    /**
     * Method to uninstall by the configuration type.
     * @param cfgType - The configuration type.
     * @param webUrl - An optional string representing the relative web url.
     */
    uninstallByType(cfgType: ISPConfigTypes, webUrl?: string): any;
}
/**
 * SharePoint Configuration - Properties
 */
export interface ISPConfigProps {
    CustomActionCfg?: ISPCfgCustomActionInfo;
    FieldCfg?: Array<ISPCfgFieldInfo>;
    ListCfg?: Array<ISPCfgListInfo>;
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
 * Export the Helper Interface
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App: IHelperApp;
    /**
     * JSLink helper methods
     */
    JSLink: IHelperJSLink;
    /**
     * Loader
     */
    Loader: ILoader;
    /**
     * Web helper methods
     */
    SPConfig: ISPConfig;
}
