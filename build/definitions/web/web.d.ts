import { IAppTiles, IBase, IContentTypeMethods, IContentTypes, IEventReceiverMethods, IEventReceivers, IFieldMethods, IFields, IFileMethods, IFolderMethods, IFolders, IGroup, ISiteGroups, IList, ILists, INavigation, IPropertyValues, IResourcePath, IRoleDefinitionMethods, IRoleDefinitions, ITargetInfo, IUserMethods, IUsers, IUserCustomActionMethods, IUserCustomActions, IWebMethods, IWebs } from "..";
/**
 * Web
 */
export interface IWeb extends IWebMethods {
    /**
     * Constructor
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    new (url?: string, targetInfo?: ITargetInfo): IWeb;
    /**
     * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
     */
    AllowCreateDeclarativeWorkflowForCurrentUser(): IBase<boolean>;
    /**
     * Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.
     */
    AllowDesignerForCurrentUser(): IBase<boolean>;
    /**
     * Gets a value that specifies whether the current user is allowed to edit the master page.
     */
    AllowMasterPageEditingForCurrentUser(): IBase<boolean>;
    /**
     * Property Bag
     */
    AllProperties(): IBase<IPropertyValues>;
    /**
     * Gets a value that specifies whether the current user is allowed to revert the site to a default site template.
     */
    AllowRevertFromTemplateForCurrentUser(): IBase<boolean>;
    /** Gets a value that specifies whether the site allows RSS feeds. */
    AllowRssFeeds: boolean;
    /**
     * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
     */
    AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser(): IBase<boolean>;
    /**
     * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
     */
    AllowSavePublishDeclarativeWorkflowForCurrentUser(): IBase<boolean>;
    /**
     * Gets a collection of metadata for the Web site.
     */
    AllProperties(): IBase;
    /** The instance Id of the App Instance that this web represents. */
    AppInstanceId: string;
    AppTiles(): IAppTiles;
    /**
     * Gets or sets the group of users who have been given contribute permissions to the Web site.
     */
    AssociatedMemberGroup(): IBase<IGroup>;
    /**
     * Gets or sets the associated owner group of the Web site.
     */
    AssociatedOwnerGroup(): IBase<IGroup>;
    /**
     * Gets or sets the associated visitor group of the Web site.
     */
    AssociatedVisitorGroup(): IBase<IGroup>;
    Author(): IUserMethods;
    /**
     * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
     */
    AvailableContentTypes(): IBase<IContentTypes>;
    /**
     * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
     */
    AvailableFields(): IBase<IFields>;
    ClientWebParts(): IBase;
    /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
    Configuration: number;
    /**
     * Gets the content types that are associated with the web.
     */
    ContentTypes(): IContentTypes;
    /**
     * Gets the content type that are associated with the web.
     * @param id - The id of the content type.
     */
    ContentTypes(id: string): IContentTypeMethods;
    /** Gets a value that specifies when the site was created. */
    Created: string;
    /**
     * Gets the current user of the site.
     */
    CurrentUser(): IUserMethods;
    /** Gets or sets the URL for a custom master page file to apply to the website. */
    CustomMasterUrl: string;
    DataLeakagePreventionStatusInfo(): IBase;
    /** Gets or sets the description for the site. */
    Description: string;
    DescriptionResource(): IBase<IResourcePath>;
    /**
     * Gets the URL where the current user can download SharePoint Designer.
     */
    DesignerDownloadUrlForCurrentUser(): IBase;
    /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
    DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;
    /**
     * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
     */
    EffectiveBasePermissions(): IBase<string>;
    /** Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
    EnableMinimalDownload: boolean;
    ExcludeFromOfflineClient: boolean;
    /**
     * Gets the event receivers associated with the web.
    */
    EventReceivers(): IEventReceivers;
    /**
     * Gets the event receiver associated with the web.
     * @param id - The id of the event receiver.
    */
    EventReceivers(id: string): IEventReceiverMethods;
    /**
     * Gets a value that specifies the collection of features that are currently activated in the site.
     */
    Features(): IBase;
    /**
     * Gets the fields in the web.
     */
    Fields(): IFields;
    /**
     * Gets the field in the web.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): IFieldMethods;
    /**
     * Gets the folders contained in the root folder.
     */
    Folders(): IFolders;
    /**
     * Gets the folder contained in the root folder.
     * @param url - The url of the sub-folder within the current folder.
     */
    Folders(url: string): IFolderMethods;
    /** Gets a value that specifies the site identifier for the site. */
    Id: string;
    /** Gets a value that specifies the LCID for the language that is used on the site. */
    Language: boolean;
    /** Gets a value that specifies when an item was last modified in the site. */
    LastItemModifiedDate: string;
    /**
     * Gets the lists in the Web.
     */
    Lists(): ILists;
    /**
     * Gets the list in the Web.
     * @param name - The list name.
     */
    Lists(name: string): IList;
    /**
     * Gets the list definitions and list templates available for creating lists on the site.
     */
    ListTemplates(): IBase;
    /**
     * Gets the list definition or list template available for creating lists on the site.
     * @param name - The list template form name.
     */
    ListTemplates(name: string): IBase;
    /** Gets or sets the URL of the master page that is used for the website. */
    MasterUrl: string;
    MembersCanShare: boolean;
    /**
     * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
     */
    Navigation(): IBase<INavigation>;
    NoCrawl: boolean;
    NotificationsInOneDriveForBusinessEnabled: boolean;
    NotificationsInSharePointEnabled: boolean;
    OverwriteTranslationsOnChange: boolean;
    /**
     * Gets the parent website of the specified website.
     */
    ParentWeb(): IWebMethods;
    PreviewFeaturesEnabled: boolean;
    /**
     * Gets the collection of push notification subscribers over the site.
     */
    PushNotificationSubscribers(): IBase;
    /** Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. */
    QuickLaunchEnabled: boolean;
    /**
     * Specifies the collection of recycle bin items of the recycle bin of the site.
     */
    RecycleBin(): IBase;
    /** Gets or sets a value that determines whether the recycle bin is enabled for the website. */
    RecycleBinEnabled: boolean;
    /**
     * Gets the regional settings that are currently implemented on the website.
     */
    RegionalSettings(): IBase;
    RequestAccessEmail: string;
    /**
     * Gets the role definitions for the web.
     */
    RoleDefinitions(): IRoleDefinitions;
    /**
     * Gets the role definitions for the web.
     * @param name - The role definition name.
     */
    RoleDefinitions(name: string): IRoleDefinitionMethods;
    /**
     * Gets the root folder in the web.
     */
    RootFolder(): IFolderMethods;
    /**
     * Gets the file in the web's root folder.
     * @param url - (Optional) The url of the file within the root folder.
     */
    RootFolder(url: string): IFileMethods;
    /**
     * Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.
     */
    SaveSiteAsTemplateEnabled: boolean;
    ServerRelativePath: IResourcePath;
    /** Gets or sets the server-relative URL for the Web site. */
    ServerRelativeUrl: string;
    /**
     * Gets a value that specifies whether the current user is able to view the file system structure of this site.
     */
    ShowUrlStructureForCurrentUser(): IBase;
    /**
     * Gets the site groups for the web.
     */
    SiteGroups(): ISiteGroups;
    /**
     * Gets the site groups for the web.
     * @param name - The group name.
     */
    SiteGroups(name: string): IBase<IGroup>;
    SiteLogoDescription: string;
    SiteLogoUrl: string;
    /**
     * Gets the UserInfo list of the site collection that contains the Web site.
     */
    SiteUserInfoList(): IBase;
    /**
     * Gets the collection of all users that belong to the site collection.
     */
    SiteUsers(): IBase<IUsers>;
    /**
     * Gets the collection of all users that belong to the site collection.
     * @param id - The user id.
     */
    SiteUsers(id: any): IUserMethods;
    /**
     * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
     */
    SupportedUILanguageIds(): IBase<Number>;
    /** Gets or sets a value that specifies whether the RSS feeds are enabled on the site. */
    SyndicationEnabled: boolean;
    TenantTagPolicyEnabled: boolean;
    ThemeData: string;
    ThemedCssFolderUrl: string;
    /**
     * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
     */
    ThemeInfo(): IBase;
    ThirdPartyMdmEnabled: boolean;
    /** Gets or sets the title for the Web site. */
    Title: string;
    TitleResource(): IBase<IResourcePath>;
    /** Gets or sets value that specifies whether the tree view is enabled on the site. */
    TreeViewEnabled: boolean;
    /** Gets or sets the user export interface (UI) version of the Web site. */
    UIVersion: number;
    /** Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. */
    UIVersionConfigurationEnabled: boolean;
    /** Gets the absolute URL for the website. */
    Url: string;
    /**
     * Gets the user custom actions for the web.
     */
    UserCustomActions(): IUserCustomActions;
    /**
     * Gets the user custom action for the web.
     * @param id - The id of the user custom action.
     */
    UserCustomActions(id: string): IUserCustomActionMethods;
    /**
     * Represents key properties of the subsites of a site.
     */
    WebInfos(): IBase;
    /**
     * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
     */
    Webs(): IWebs;
    /** Gets the name of the site definition or site template that was used to create the site. */
    WebTemplate: string;
    /**
     * Gets a value that specifies the collection of all workflow associations for the site.
     */
    WorkflowAssociations(): IBase;
    /**
     * Gets a value that specifies the collection of workflow templates associated with the site.
     */
    WorkflowTemplates(): IBase;
}
