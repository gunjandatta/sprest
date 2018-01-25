import { IBase, IBaseCollection } from "../../utils/types";
import {
    IFolder, IFolderMethods, IFolderQueryResult, IFolderResult
} from ".";

/**
 * Methods
 */
export interface IFoldersMethods {
    /**
     * Adds the folder that is located at the specified URL to the collection.
     * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
     */
    add(url): IBase<IFolder, IFolderResult>;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getbyurl(serverRelativeUrl): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFolders, IFolderResults>;
}

/**
 * Folders
 */
export interface IFolders extends IFoldersMethods, IBaseCollection<IFolder, IFolderResult, IFolderQueryResult> { }

/**
 * Folder Results
 */
export interface IFolderResults extends IFoldersMethods, IBaseCollection<IFolderResult, IFolderResult, IFolderQueryResult> { }