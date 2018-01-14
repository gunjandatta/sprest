import { Types } from "../mapper";
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
    copyFileToHostWeb(srcFileUrl: string, dstFolder: Types.IFolderResult, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.IFileResult;
        folder: Types.IFolderResult;
    }>;
    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolderUrl - The destination folder url, relative to the host web.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl: string, dstFolderUrl: string, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.IFileResult;
        folder: Types.IFolderResult;
    }>;
    /**
     * Method to copy a file from the app web to the host web
     * @param fileUrls - An array of source file urls, relative to the app web.
     * @param folderUrls - An array of destination folder urls, relative to the host web.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFilesToHostWeb(fileUrls: Array<string>, folderUrls: Array<string>, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        files: Array<Types.IFileResult>;
        folders: Array<Types.IFolderResult>;
    }>;
    /**
     * Method to create sub-folders.
     * @param folder - The app web relative url to the source file.
     * @param subFolderUrl - The host web relative url of the destination folder.
     */
    createSubFolders(folder: Types.IFolderResult, subFolderUrl: string): any;
    /**
     * Method to get the file content.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     * @param createFl - Flag to create the folder, if it doesn't exist.
     */
    getFolder(web: Types.IWebResult, folderUrl: string, createFl?: boolean): any;
    /**
     * Method to remove empty folders
     * @param web - The web containing the files.
     * @param folderUrls - An array of folder urls, relative to the web.
     */
    removeEmptyFolders(web: Types.IWebResult, folderUrls: Array<string>): any;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrl - The file url, relative to the web.
     */
    removeFile(web: Types.IWebResult, fileUrl: string): any;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     */
    removeFiles(web: Types.IWebResult, fileUrls: Array<string>): any;
}
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare const AppHelper: {
    copyFileToHostWeb: (fileUrl: any, dstFolder: any, overwriteFl: any, rootWebFl: any) => Promise<{}>;
    copyFilesToHostWeb: (fileUrls: any, folderUrls: any, overwriteFl: any, rootWebFl: any) => Promise<{}>;
    createSubFolders: (folder: any, subFolderUrl: any) => Promise<{}>;
    getFolder: (web: any, folderUrl: any, createFl: any) => Promise<{}>;
    removeEmptyFolders: (web: any, folderUrls: any) => Promise<{}>;
    removeFile: (web: any, fileUrl: any) => Promise<{}>;
    removeFiles: (web: any, fileUrls: any, idx: any) => Promise<{}>;
};
