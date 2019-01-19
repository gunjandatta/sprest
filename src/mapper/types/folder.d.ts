import { SP } from "gd-sprest-def";
import * as Types from "../../mapper/types";
import { IBaseLib } from "../../utils/types/base";
import { IFile, IFileResults, IFiles, IFolderResults, IFolders } from ".";

/**
 * Folder Methods
 */
export interface IFolderMethods {
    /**
     * Deletes the folder.
     */
    delete(): IBaseLib;

    /**
     * Get the folder at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getByUrl(serverRelativeUrl): IFolder & IBaseLib<IFolder, IFolderResult, IFolderQueryResult>;

    /**
     * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBaseLib;

    /**
     * Updates it's properties.
     * @param data - The file properties to update.
     */
    update(data): IBaseLib;
}

/**
 * Folder Query Properties
 */
export interface IFolderQueryProps {
    /**
     * Gets the files contained in the folder.
     */
    Files(): IFiles;

    /**
     * Gets the file contained in the folder.
     * @param url - The url of the file within the current folder.
     */
    Files(url: string): IFile;

    /**
     * Gets the folders contained in the list folder.
     */
    Folders(): IFolders;

    /**
     * Gets the folder contained in the list folder.
     * @param url - The url of the sub-folder within the current folder.
     */
    Folders(url: string): IFolder;

    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields(): IBaseLib<Types.IListItem>;

    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder(): IFolder;

    /**
     * Property Bag
     */
    Properties(): IBaseLib<Types.IPropertyValues>;

    StorageMetrics(): IBaseLib;
}

/**
 * Folder Query Result
 */
export interface IFolderQueryResult extends IFolderMethods, SP.Folder {
    /**
     * Gets the files contained in the folder.
     */
    Files: IFileResults;

    /**
     * Gets the folders contained in the list folder.
     */
    Folders: IFolderResults;

    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields: Types.IListItemResults;

    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder: IFolderResult;

    /**
     * Property Bag
     */
    Properties: Types.IPropertyValues;

    StorageMetrics: any;
}

/**
 * Folder Result
 */
export interface IFolderResult extends IFolderMethods, SP.Folder, IFolderQueryProps, IFolderQueryProps, IBaseLib<IFolder, IFolderResult, IFolderQueryResult> { }

/**
 * Folder
 */
export interface IFolder extends IFolderMethods, IFolderQueryProps, IBaseLib<IFolder, IFolderResult, IFolderQueryResult> { }