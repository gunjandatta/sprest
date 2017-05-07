import { ComplexTypes, IBase, IFile, IFiles, IFolders, IPropertyValues } from ".";
/**
 * Folder
 */
export interface IFolder extends IBase {
    /**
     * Properties
     */
    /** Specifies the sequence in which content types are displayed. */
    ContentTypeOrder: ComplexTypes.ContentTypeId;
    /** Gets a value that specifies whether the file exists. */
    Exists: boolean;
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
    /** Gets a value that specifies the count of items in the list folder. */
    ItemCount: number;
    /** Indicates whether the folder is enabled for WOPI default action. */
    IsWOPIEnabled: boolean;
    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields(): IBase;
    /** Gets the name of the folder. */
    Name: string;
    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder(): IFolder;
    /**
     * Property Bag
     */
    Properties(): IPropertyValues;
    ServerRelativePath: ComplexTypes.ResourcePath;
    /** Gets the server-relative URL of the list folder. */
    ServerRelativeUrl: string;
    StorageMetrics(): IBase;
    TimeCreated: string;
    TimeLastModified: string;
    /** Gets or sets a value that specifies the content type order. */
    UniqueContentTypeOrder: ComplexTypes.ContentTypeId;
    UniqueId: string;
    /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
    WelcomePage: string;
    /**
     * Methods
     */
    /**
     * Deletes the folder.
     */
    delete(): IBase;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IFolder, ...args) => any): IFolder;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IFolder;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IFolder, ...args) => any, waitFl: boolean): IFolder;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IFolder;
    /**
     * Get the file at the specified URL.
     * @param serverRelativeUrl - The server-relative URL of the folder.
     */
    getByUrl(serverRelativeUrl: any): IFolder;
    /**
     * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;
    /**
     * Updates it's properties.
     * @param data - The file properties to update.
     */
    update(data: any): IBase;
}
