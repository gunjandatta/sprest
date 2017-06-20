import { IBase, IFileMethods, IFileVersions, IInformationRightsManagementSettings, IListItem, IPropertyValues, IResourcePath, IResults, IUser, SPTypes } from "..";
/**
 * File Query Results
 */
export interface IFileQueryResults extends IFileMethods {
    /**
     * Gets a value that specifies the user who added the file.
     */
    Author: IUser;
    /**
     * Gets a value that returns the user who has checked out the file.
     */
    CheckedOutByUser: IUser;
    /** Gets a value that returns the comment used when a document is checked in to a document library. */
    CheckInComment: string;
    /** Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state. */
    CheckOutType: SPTypes.CheckOutType | number;
    /** Returns internal version of content, used to validate document equality for read purposes. */
    ContentTag: string;
    /** Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2. */
    CustomizedPageStatus: number;
    EffectiveInformationRightsManagementSettings: IBase;
    /** Gets a value that specifies the ETag value. */
    ETag: string;
    /** Gets a value that specifies whether the file exists. */
    Exists: boolean;
    InformationRightsManagementSettings: IInformationRightsManagementSettings;
    /** Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file. */
    Length: number;
    /** Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255. */
    Level: number;
    LinkingUrl: string;
    /**
     * Gets a value that specifies the list item field values for the list item corresponding to the file.
     */
    ListItemAllFields: IListItem;
    /**
     * Gets a value that returns the user that owns the current lock on the file.
     */
    LockedByUser: IUser;
    /** Gets a value that specifies the major version of the file. */
    MajorVersion: number;
    /** Gets a value that specifies the minor version of the file. */
    MinorVersion: number;
    /**
     * Gets a value that returns the user who last modified the file.
     */
    ModifiedBy: IUser;
    /** Gets the name of the file including the extension. */
    Name: string;
    /**
     * Property Bag
     */
    Properties: IPropertyValues;
    ServerRelativePath: IResourcePath;
    /** Gets the relative URL of the file based on the URL for the server. */
    ServerRelativeUrl: string;
    SiteId: string;
    /** Gets a value that specifies when the file was created. */
    TimeCreated: string;
    /** Gets a value that specifies when the file was last modified. */
    TimeLastModified: string;
    /** Gets a value that specifies the display name of the file. */
    Title: string;
    /** Gets a value that specifies the implementation-specific version identifier of the file. */
    UiVersion: number;
    /** Gets a value that specifies the implementation-specific version identifier of the file. */
    UiVersionLabel: string;
    UniqueId: string;
    VersionEvents: IResults<any>;
    /**
     * Gets a value that returns a collection of file version objects that represent the versions of the file.
     */
    Versions: IFileVersions;
    WebId: string;
}
