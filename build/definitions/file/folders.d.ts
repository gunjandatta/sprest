import { IFolderQueryResults } from "./folderResults";
import { IBase, IFolder, IResults } from "..";
/**
 * Folders
 */
export interface IFolders extends IResults<IFolder>, IBase<IResults<IFolder>, IResults<IFolderQueryResults>> {
    /**
     * Adds the folder that is located at the specified URL to the collection.
     * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
     */
    add(url: any): IFolder;
    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getbyurl(serverRelativeUrl: any): any;
    /**
     * Method to get the next set of results.
     */
    next(): IFolders;
}
