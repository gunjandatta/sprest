import {
    IBase,
    IFolder, IFolderQueryResults
} from "..";

/**
 * Folder Methods
 */
export interface IFolderMethods extends IBase<IFolder, IFolderQueryResults> {
    /**
     * Deletes the folder.
     */
    delete(): IBase;

    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getByUrl(serverRelativeUrl): IFolder;

    /**
     * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;

    /**
     * Updates it's properties.
     * @param data - The file properties to update.
     */
    update(data): IBase;
}