import {
    IBase, IBaseCollection,
    IFolder, IFolderMethods, IFolderQueryResults
} from "..";

/**
 * Folders
 */
export interface IFolders extends IBaseCollection<IFolder, IFolderQueryResults> {
    /**
     * Adds the folder that is located at the specified URL to the collection.
     * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
     */
    add(url): IBase<IFolder>;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getbyurl(serverRelativeUrl): IFolderMethods;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFolders>;
}