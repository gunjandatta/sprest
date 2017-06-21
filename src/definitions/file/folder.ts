import {
    IBase,
    IFile, IFiles,
    IFolders,
    IListItem,
    IPropertyValues,
    IResourcePath,
    IResults,
    IStringValue
} from "..";

/**
 * Folder Methods
 */
export interface IFolderMethods {
    /**
     * Deletes the folder.
     */
    delete(): IBase;

    /**
     * Get the folder at the specified URL.
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

/**
 * Folder Properties
 */
export interface IFolderProps {
    /** Specifies the sequence in which content types are displayed. */
    ContentTypeOrder: IStringValue;

    /** Gets a value that specifies whether the file exists. */
    Exists: boolean;

    /** Gets a value that specifies the count of items in the list folder. */
    ItemCount: number;

    /** Indicates whether the folder is enabled for WOPI default action. */
    IsWOPIEnabled: boolean;

    /** Gets the name of the folder. */
    Name: string;

    ServerRelativePath: IResourcePath;

    /** Gets the server-relative URL of the list folder. */
    ServerRelativeUrl: string;

    TimeCreated: string;

    TimeLastModified: string;

    /** Gets or sets a value that specifies the content type order. */
    UniqueContentTypeOrder: IStringValue;

    UniqueId: string;

    /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
    WelcomePage: string;
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
    Folders(url: string): IFolderMethods;

    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields(): IBase<IListItem>;

    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder(): IFolderMethods;

    /**
     * Property Bag
     */
    Properties(): IBase<IPropertyValues>;

    StorageMetrics(): IBase;
}

/**
 * Folder Query Result
 */
export interface IFolderQueryResult extends IFolderMethods, IFolderProps {
    /**
     * Gets the files contained in the folder.
     */
    Files: IResults<IFile>;

    /**
     * Gets the folders contained in the list folder.
     */
    Folders: IResults<IFolder>;

    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields: IListItem;

    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder: IFolder;

    /**
     * Property Bag
     */
    Properties: IPropertyValues;

    StorageMetrics: any;
}

/**
 * Folder Result
 */
export interface IFolderResult extends IFolderMethods, IFolderProps, IFolderQueryProps {}

/**
 * Folder
 */
export interface IFolder extends IFolderMethods, IFolderQueryProps, IBase<IFolderResult, IFolderQueryResult> {}