import { IWebMethods } from "./webMethods";
import { IAppTiles, IBase, IBasePermissions, IContainsConfidentialInfo, IContentType, IEventReceiver, IFeature, IField, IFolder, IGroup, IList, IListTemplate, INavigation, IRecycleBinItem, IRegionalSettings, IResourcePath, IResults, IRoleDefinition, IThemeInfo, IUser, IUserCustomAction, IWeb, IWebInfo, IWorkflowTemplate } from "..";
/**
 * Web Query Results
 */
export interface IWebQueryResult extends IWebMethods {
    /**
     * Properties
     */
    /**
     * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
     */
    AllowCreateDeclarativeWorkflowForCurrentUser?: boolean;
    /**
     * Specifies whether the current user is allowed to use a designer application to customize this site.
     */
    AllowDesignerForCurrentUser?: boolean;
    /**
     * Specifies whether the current user is allowed to edit the master page.
     */
    AllowMasterPageEditingForCurrentUser?: boolean;
    /**
     * A collection of metadata for the Web site.
     */
    AllProperties?: Array<string>;
    /**
     * A value that specifies whether the current user is allowed to revert the site to a default site template.
     */
    AllowRevertFromTemplateForCurrentUser?: boolean;
    /** A value that specifies whether the site allows RSS feeds. */
    AllowRssFeeds: boolean;
    /**
     * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
     */
    AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser?: boolean;
    /**
     * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
     */
    AllowSavePublishDeclarativeWorkflowForCurrentUser?: boolean;
    /** The instance Id of the App Instance that this web represents. */
    AppInstanceId: string;
    /** The app tiles. */
    AppTiles?: IAppTiles;
    /**
     * The group of users who have been given contribute permissions to the Web site.
     */
    AssociatedMemberGroup: IGroup;
    /**
     * The associated owner group of the Web site.
     */
    AssociatedOwnerGroup: IGroup;
    /**
     * The associated visitor group of the Web site.
     */
    AssociatedVisitorGroup: IGroup;
    /** */
    Author: IUser;
    /**
     * The collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
     */
    AvailableContentTypes: IResults<IContentType>;
    /**
     * A value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
     */
    AvailableFields: IResults<IField>;
    ClientWebParts: IBase;
    /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
    Configuration: number;
    /**
     * The content types that are associated with the web.
     */
    ContentTypes: IResults<IContentType>;
    /** A value that specifies when the site was created. */
    Created: string;
    /** The current user of the site. */
    CurrentUser: IUser;
    /** The URL for a custom master page file to apply to the website. */
    CustomMasterUrl: string;
    DataLeakagePreventionStatusInfo: IContainsConfidentialInfo;
    /** The description for the site. */
    Description: string;
    /** The description resource. */
    DescriptionResource: IResourcePath;
    /** The URL where the current user can download SharePoint Designer. */
    DesignerDownloadUrlForCurrentUser: string;
    /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
    DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;
    /**
     * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
     */
    EffectiveBasePermissions: IBasePermissions;
    /** A Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
    EnableMinimalDownload: boolean;
    ExcludeFromOfflineClient: boolean;
    /**
     * The event receivers associated with the web.
    */
    EventReceivers: IResults<IEventReceiver>;
    /**
     * A value that specifies the collection of features that are currently activated in the site.
     */
    Features: IResults<IFeature>;
    /**
     * The fields in the web.
     */
    Fields: IResults<IField>;
    /**
     * The folders contained in the root folder.
     */
    Folders: IResults<IFolder>;
    /** A value that specifies the site identifier for the site. */
    Id: string;
    /** A value that specifies the LCID for the language that is used on the site. */
    Language: boolean;
    /** A value that specifies when an item was last modified in the site. */
    LastItemModifiedDate: string;
    /**
     * The lists in the Web.
     */
    Lists: IResults<IList>;
    /**
     * The list definitions and list templates available for creating lists on the site.
     */
    ListTemplates: IResults<IListTemplate>;
    /** The URL of the master page that is used for the website. */
    MasterUrl: string;
    MembersCanShare: boolean;
    /**
     * A value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
     */
    Navigation: INavigation;
    NoCrawl: boolean;
    NotificationsInOneDriveForBusinessEnabled: boolean;
    NotificationsInSharePointEnabled: boolean;
    OverwriteTranslationsOnChange: boolean;
    /**
     * The parent website of the specified website.
     */
    ParentWeb: IWeb;
    PreviewFeaturesEnabled: boolean;
    /**
     * The collection of push notification subscribers over the site.
     */
    PushNotificationSubscribers(): IBase;
    /** A value that specifies whether the Quick Launch area is enabled on the site. */
    QuickLaunchEnabled: boolean;
    /**
     * Specifies the collection of recycle bin items of the recycle bin of the site.
     */
    RecycleBin: IResults<IRecycleBinItem>;
    /** A value that determines whether the recycle bin is enabled for the website. */
    RecycleBinEnabled: boolean;
    /**
     * The regional settings that are currently implemented on the website.
     */
    RegionalSettings: IRegionalSettings;
    RequestAccessEmail: string;
    /**
     * The role definitions for the web.
     */
    RoleDefinitions: IResults<IRoleDefinition>;
    /**
     * The root folder in the web.
     */
    RootFolder: IFolder;
    /**
     * Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.
     */
    SaveSiteAsTemplateEnabled: boolean;
    ServerRelativePath: IResourcePath;
    /** The server-relative URL for the Web site. */
    ServerRelativeUrl: string;
    /**
     * A value that specifies whether the current user is able to view the file system structure of this site.
     */
    ShowUrlStructureForCurrentUser: boolean;
    /**
     * The site groups for the web.
     */
    SiteGroups: IResults<IGroup>;
    SiteLogoDescription: string;
    SiteLogoUrl: string;
    /**
     * The UserInfo list of the site collection that contains the Web site.
     */
    SiteUserInfoList: IList;
    /**
     * The collection of all users that belong to the site collection.
     */
    SiteUsers: IResults<IUser>;
    /**
     * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
     */
    SupportedUILanguageIds: IResults<number>;
    /** A value that specifies whether the RSS feeds are enabled on the site. */
    SyndicationEnabled: boolean;
    TenantTagPolicyEnabled: boolean;
    ThemeData: string;
    ThemedCssFolderUrl: string;
    /**
     * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
     */
    ThemeInfo: IThemeInfo;
    ThirdPartyMdmEnabled: boolean;
    /** The title for the Web site. */
    Title: string;
    TitleResource: IResourcePath;
    /** Gets or sets value that specifies whether the tree view is enabled on the site. */
    TreeViewEnabled: boolean;
    /** The user export interface (UI) version of the Web site. */
    UIVersion: number;
    /** A value that specifies whether the settings UI for visual upgrade is shown or hidden. */
    UIVersionConfigurationEnabled: boolean;
    /** The absolute URL for the website. */
    Url: string;
    /**
     * The user custom actions for the web.
     */
    UserCustomActions: IResults<IUserCustomAction>;
    /**
     * Represents key properties of the subsites of a site.
     */
    WebInfos: IResults<IWebInfo>;
    /**
     * A Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
     */
    Webs: IResults<IWeb>;
    /** The name of the site definition or site template that was used to create the site. */
    WebTemplate: string;
    /**
     * A value that specifies the collection of all workflow associations for the site.
     */
    WorkflowAssociations: IResults<any>;
    /**
     * A value that specifies the collection of workflow templates associated with the site.
     */
    WorkflowTemplates: IResults<IWorkflowTemplate>;
}
