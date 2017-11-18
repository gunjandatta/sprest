import { Promise } from "../../utils/index";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare const AppHelper: {
    copyFileToHostWeb: (fileUrl: any, dstFolder: any, overwriteFl: any, rootWebFl: any) => Promise;
    copyFilesToHostWeb: (fileUrls: any, folderUrls: any, overwriteFl: any, rootWebFl: any, idx: any, promise: any, files: any, folders: any) => any;
    createSubFolders: (folder: any, subFolderUrl: any, promise: any) => any;
    getFolder: (web: any, folderUrl: any, createFl: any) => Promise;
    removeEmptyFolders: (web: any, folderUrls: any) => Promise;
    removeFile: (web: any, fileUrl: any) => Promise;
    removeFiles: (web: any, fileUrls: any, idx: any, promise: any) => any;
};
