import { Types } from "../..";
export interface IApp {
    copyFileToHostWeb(srcFileUrl: string, dstFolder: Types.SP.IFolderResult, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.SP.IFileResult;
        folder: Types.SP.IFolderResult;
    }>;
    copyFileToHostWeb(srcFileUrl: string, dstFolderUrl: string, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        file: Types.SP.IFileResult;
        folder: Types.SP.IFolderResult;
    }>;
    copyFilesToHostWeb(fileUrls: Array<string>, folderUrls: Array<string>, overwriteFl?: boolean, rootWebFl?: boolean): PromiseLike<{
        files: Array<Types.SP.IFileResult>;
        folders: Array<Types.SP.IFolderResult>;
    }>;
    createSubFolders(folder: Types.SP.IFolderResult, subFolderUrl: string): PromiseLike<Types.SP.IFolderResult>;
    getFolder(web: Types.SP.IWeb | Types.SP.IWebResult, folderUrl: string, createFl?: boolean): PromiseLike<Types.SP.IFolderResult>;
    removeEmptyFolders(web: Types.SP.IWebResult, folderUrls: Array<string>): PromiseLike<void>;
    removeFile(web: Types.SP.IWebResult, fileUrl: string): PromiseLike<void>;
    removeFiles(web: Types.SP.IWebResult, fileUrls: Array<string>): PromiseLike<void>;
}
