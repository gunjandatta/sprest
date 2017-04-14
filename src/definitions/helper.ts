import {
    ComplexTypes,
    IBase,
    IField,
    IFolder,
    IPromise,
    IView,
    IWeb
} from ".";
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
    copyFileToHostWeb(srcFileUrl:string, dstFolder:IFolder, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolderUrl - The destination folder url, relative to the host web.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl:string, dstFolderUrl:string, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

    /**
     * Method to copy a file from the app web to the host web
     * @param fileUrls - An array of source file urls, relative to the app web.
     * @param folderUrls - An array of destination folder urls, relative to the host web.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFilesToHostWeb(fileUrls:Array<string>, folderUrls:Array<string>, overwriteFl?:boolean, rootWebFl?:boolean): IPromise;

    /**
     * Method to create sub-folders.
     * @param folder - The app web relative url to the source file.
     * @param subFolderUrl - The host web relative url of the destination folder.
     */
    createSubFolders(folder:IFolder, subFolderUrl:string): IPromise;

    /**
     * Method to get the file content.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     * @param createFl - Flag to create the folder, if it doesn't exist.
     */
    getFolder(web:IWeb, folderUrl:string, createFl?:boolean): IPromise;

    /**
     * Method to remove empty folders
     * @param web - The web containing the files.
     * @param folderUrls - An array of folder urls, relative to the web.
     */
    removeEmptyFolders(web:IWeb, folderUrls:Array<string>): IPromise;

    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrl - The file url, relative to the web.
     */
    removeFile(web:IWeb, fileUrl:string): IPromise;

    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     */
    removeFiles(web:IWeb, fileUrls:Array<string>): IPromise;
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
    disableEdit(ctx:any, field:any, requireValueFl?:boolean):string;

    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit(ctx:any, field:any);

    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView(ctx:any);

    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems(ctx:any);

    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems();

    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart(ctx);

    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField(ctx:any, field:any);

    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField(ctx:any, field:any);

    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField(ctx, field, formType?:number);
}

/**
 * List Helper Methods
 */
export interface IHelperList {
    /**
     * Adds the fields to the view.
     * @param view - The view to add the fields to.
     * @param fields - The fields to add to the view.
     */
    addViewFields(view:IView, fields:Array<string>):IView;
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
    waitForSPLibs(callback:any, timeout?:number, loadLibraries?:boolean);
}

/**
 * Web Helper - Custom Action Information
 */
export interface ISPCfgCustomActionInfo {
    /**
     * Custom actions to be created at the site collection level.
     */
    Site?:Array<ComplexTypes.UserCustomActionCreationInformation>,

    /**
     * Custom actions to be created at the web level.
     */
    Web?:Array<ComplexTypes.UserCustomActionCreationInformation>
}

/**
 * Web Helper - Field Information
 */
export interface ISPCfgFieldInfo {
    /**
     * The field object.
     */
    Field?:IField;

    /**
     * The internal field name.
     */
    Name:string;

    /**
     * The schema definition of the field.
     */
    SchemaXml:string;
}

/**
 * Web Helper - List Information
 */
export interface ISPCfgListInfo {
    CustomFields?:Array<ISPCfgFieldInfo>;
    ListInformation:ComplexTypes.ListCreationInformation;
    TitleFieldDisplayName?:string;
    ViewInformation?:Array<ISPCfgViewInfo>;
}

/**
 * Web Helper - View Information
 */
export interface ISPCfgViewInfo {
    JSLink?:string;
    ViewFields?:Array<string>;
    ViewName:string;
    ViewQuery?:string;
}

/**
 * Web Helper - Properties
 */
export interface ISPConfigProps {
    CustomActionCfg?:ISPCfgCustomActionInfo;
    FieldCfg?:Array<ISPCfgFieldInfo>;
    ListCfg?:Array<ISPCfgListInfo>;
}

/**
 * Web Helper Methods
 */
export interface ISPConfig {
    /**
     * Constructor
     * @param cfg - The SharePoint configuration information.
     */
    new(cfg:ISPConfigProps);

    /**
     * Method to execute the request.
     * @param callback - An optional function called after the execution completes.
     */
    execute(callback:() => void);
}

/**
 * Export the Helper Interface
 */
export interface IHelper {
    /**
     * App-Model helper methods
     */
    App:IHelperApp,

    /**
     * JSLink helper methods
     */
    JSLink:IHelperJSLink,

    /**
     * List helper methods
     */
    List:IHelperList,

    /**
     * Loader
     */
    Loader:ILoader,

    /**
     * Web helper methods
     */
    SPConfig: ISPConfig
};