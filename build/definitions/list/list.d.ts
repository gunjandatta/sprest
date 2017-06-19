import { IListMethods } from "./listMethods";
import { IBase, IBasePermissions, IContentType, IContentTypes, IEventReceiver, IEventReceivers, IField, IFields, IFile, IFolder, IListItem, IListItems, IResourcePath, IRoleAssignment, IRoleAssignments, IStringValue, ITargetInfo, IUserCustomAction, IUserCustomActions, IView, IViews, SPTypes } from "..";
/**
 * List
 */
export interface IList extends IListMethods {
    /**
     * Constructor
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    new (listName: string, targetInfo?: ITargetInfo): IList;
    /**
     * Properties
     */
    /** Gets a value that specifies whether the list supports content types. */
    AllowContentTypes: boolean;
    AllowDeletion: boolean;
    /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
    BaseTemplate: SPTypes.ListTemplateType | number;
    /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
    BaseType: number;
    /**
     * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.
     */
    BrowserFileHandling: number;
    /**
     * Gets the content types that are associated with the list.
     */
    ContentTypes(): IContentTypes;
    /**
     * Gets the content types that are associated with the list.
     * @param id - The id of the content type.
     */
    ContentTypes(id: string): IContentType;
    /** Gets or sets a value that specifies whether content types are enabled for the list. */
    ContentTypesEnabled: boolean;
    /** Gets a value that specifies when the list was created. */
    Created: string;
    CurrentChangeToken: IStringValue;
    /**
     * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
     */
    DataSource(): Array<string>;
    /** Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
    DefaultContentApprovalWorkflowId: string;
    /**
     * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
     */
    DefaultDisplayFormUrl(): string;
    /**
     * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultEditFormUrl(): string;
    /**
     * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultNewFormUrl(): string;
    /**
     * Gets the default list view.
    */
    DefaultView(): IView;
    /**
     * Gets the URL of the default view for the list.
     */
    DefaultViewUrl(): string;
    /** Gets or sets a value that specifies the description of the list. */
    Description: string;
    DescriptionResouce(): IResourcePath;
    /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
    Direction: string;
    /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
    DocumentTemplateUrl: string;
    /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
    DraftVersionVisibility: number;
    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    EffectiveBasePermissions(): IBasePermissions;
    /**
     * Gets a value that specifies the effective permissions on the list that are for the user export interface.
    */
    EffectiveBasePermissionsForUI(): IBasePermissions;
    EnableAssignToEmail: boolean;
    /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
    EnableAttachments: boolean;
    /** Gets or sets a value that specifies whether new list folders can be added to the list. */
    EnableFolderCreation: boolean;
    /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
    EnableMinorVersions: boolean;
    /** Gets or sets a value that specifies whether content approval is enabled for the list. */
    EnableModeration: boolean;
    /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
    EnableVersioning: boolean;
    /**  */
    EntityTypeName: string;
    /**
     * Gets the event receivers associated with the list.
    */
    EventReceivers(): IEventReceivers;
    /**
     * Gets the event receiver associated with the list.
     * @param id - The id of the event receiver.
    */
    EventReceivers(id: string): IEventReceiver;
    ExcludeFromOfflineClient: boolean;
    /**
     * Gets the fields in the list.
     */
    Fields(): IFields;
    /**
     * Gets the field in the list.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): IField;
    FileSavePostProcessingEnabled: boolean;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): string;
    /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
    ForceCheckout: boolean;
    /**
     * Gets the list forms in the list.
     */
    Forms(): IBase;
    /**
     * Gets the list form in the list.
     * @param id - The id of the form.
     */
    Forms(id: string): IBase;
    /** Gets a value that specifies whether the list is an external list. */
    HasExternalDataSource: boolean;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments(): IBase;
    /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
    Hidden: boolean;
    /** Gets the GUID that identifies the list in the database. */
    Id: string;
    /** Gets a value that specifies the URI for the icon of the list. */
    ImageUrl: string;
    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings(): IBase;
    /**  */
    IrmEnabled: boolean;
    /**  */
    IrmExpire: boolean;
    /**  */
    IrmReject: boolean;
    /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
    IsApplicationList: boolean;
    /** Gets a value that specifies whether the list is a gallery. */
    IsCatalog: boolean;
    /**  */
    IsPrivate: boolean;
    /**
     * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
     */
    IsSiteAssetsLibrary(): boolean;
    /** Gets a value that specifies the number of list items in the list. */
    ItemCount: number;
    /**
     * Gets the list items in the list.
     */
    Items(): IListItems;
    /**
     * Gets the list item in the list.
     * @param id - The id of the list item.
     */
    Items(id: number): IListItem;
    /** Gets a value that specifies the last time a list item was deleted from the list. */
    LastItemDeletedDate: string;
    /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
    LastItemModifiedDate: string;
    ListExperienceOptions: number;
    /**  */
    ListItemEntityTypeFullName: string;
    MajorVersionLimit: number;
    MajorWithMinorVersionsLimit: number;
    /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
    MultipleDataList: boolean;
    /** Gets or sets a value that specifies that the crawler must not crawl the list. */
    NoCrawl: boolean;
    /**
     * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
     */
    OnQuickLaunch(): boolean;
    /**
     * Gets a value that specifies the site that contains the list.
     */
    ParentWeb(): IBase;
    /** Gets a value that specifies the server-relative URL of the site that contains the list. */
    ParentWebUrl: string;
    ParserDisabled: boolean;
    ReadSecurity: number;
    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments(): IRoleAssignments;
    /**
     * Gets the role assignments for the securable object.
     * @param id - The role assignment id.
     */
    RoleAssignments(id: string): IRoleAssignment;
    /**
     * Gets the root folder of the list.
     */
    RootFolder(): IFolder;
    /**
     * Gets the file in the root folder of the list.
     * @param url - The url of the file within the root folder.
     */
    RootFolder(url: string): IFile;
    /**
     * Gets a value that specifies the list schema of the list.
     */
    SchemaXml(): string;
    /** Gets a value that indicates whether folders can be created within the list. */
    ServerTemplateCanCreateFolders: boolean;
    Subscriptions(): IBase;
    /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
    TemplateFeatureId: string;
    /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
    Title: string;
    TitleResource(): IResourcePath;
    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions(): IUserCustomActions;
    /**
     * Gets the user custom action(s) for the list.
     * @param id - The id of the user custom action.
     */
    UserCustomActions(id: string): IUserCustomAction;
    /**
     * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
     */
    ValidationFormula(): string;
    /**
     * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
     */
    ValidationMessage(): string;
    /**
     * Gets the views in the list.
     */
    Views(): IViews;
    /**
     * Gets the view in the list.
     * @param id - The id of the view.
     */
    Views(id: string): IView;
    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    WorkflowAssociations(): string;
    WriteSecurity(): number;
}
