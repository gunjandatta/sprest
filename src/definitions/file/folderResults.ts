import {
    IBase,
    IFile,
    IFolder, IFolderMethods,
    IListItem,
    IPropertyValues,
    IResourcePath,
    IResults,
    IStringValue
} from "..";

/**
 * Folder Query Results
 */
export interface IFolderQueryResults extends IFolderMethods {
    /** Specifies the sequence in which content types are displayed. */
    ContentTypeOrder: IStringValue;

    /** Gets a value that specifies whether the file exists. */
    Exists: boolean;

    /**
     * Gets the files contained in the folder.
     */
    Files: IResults<IFile>;

    /**
     * Gets the folders contained in the list folder.
     */
    Folders: IResults<IFolder>;

    /** Gets a value that specifies the count of items in the list folder. */
    ItemCount: number;

    /** Indicates whether the folder is enabled for WOPI default action. */
    IsWOPIEnabled: boolean;

    /**
     * Specifies the list item field (2) values for the list item corresponding to the file.
     */
    ListItemAllFields: IListItem;

    /** Gets the name of the folder. */
    Name: string;

    /**
     * Gets the parent list folder of the folder.
     */
    ParentFolder: IFolder;

    /**
     * Property Bag
     */
    Properties: IPropertyValues;

    ServerRelativePath: IResourcePath;

    /** Gets the server-relative URL of the list folder. */
    ServerRelativeUrl: string;

    StorageMetrics: IBase;

    TimeCreated: string;

    TimeLastModified: string;

    /** Gets or sets a value that specifies the content type order. */
    UniqueContentTypeOrder: any;

    UniqueId: string;

    /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
    WelcomePage: string;
}