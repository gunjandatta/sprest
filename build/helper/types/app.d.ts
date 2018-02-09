import { Types } from "../..";
/**
 * App Helper Methods
 */
export interface IApp {
    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolder - The destination folder.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl: string, dstFolder: Types.SP.IFolderResult, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.SP.IFileResult;
        folder: Types.SP.IFolderResult;
    }>;
    /**
     * Method to copy a file from the app web to the host web.
     * @param srcFileUrl - The source file url, relative to the app web.
     * @param dstFolderUrl - The destination folder url, relative to the host web.
     * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFileToHostWeb(srcFileUrl: string, dstFolderUrl: string, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.SP.IFileResult;
        folder: Types.SP.IFolderResult;
    }>;
    /**
     * Method to copy a file from the app web to the host web
     * @param fileUrls - An array of source file urls, relative to the app web.
     * @param folderUrls - An array of destination folder urls, relative to the host web.
     * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
     */
    copyFilesToHostWeb(fileUrls: Array<string>, folderUrls: Array<string>, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        files: Array<Types.SP.IFileResult>;
        folders: Array<Types.SP.IFolderResult>;
    }>;
    /**
     * Method to create sub-folders.
     * @param folder - The app web relative url to the source file.
     * @param subFolderUrl - The host web relative url of the destination folder.
     */
    createSubFolders(folder: Types.SP.IFolder, subFolderUrl: string): PromiseLike<Types.SP.IFolderResult>;
    /**
     * Method to get the file content.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     * @param createFl - Flag to create the folder, if it doesn't exist.
     */
    getFolder(web: Types.SP.IWeb | Types.SP.IWebResult, folderUrl: string, createFl?: boolean): PromiseLike<Types.SP.IFolderResult>;
    /**
     * Method to remove empty folders
     * @param web - The web containing the files.
     * @param folderUrls - An array of folder urls, relative to the web.
     */
    removeEmptyFolders(web: Types.SP.IWebResult, folderUrls: Array<string>): PromiseLike<void>;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrl - The file url, relative to the web.
     */
    removeFile(web: Types.SP.IWebResult, fileUrl: string): PromiseLike<void>;
    /**
     * Method to remove files from a web.
     * @param web - The web containing the files.
     * @param fileUrls - An array of file urls, relative to the web.
     */
    removeFiles(web: Types.SP.IWebResult, fileUrls: Array<string>): PromiseLike<void>;
}
