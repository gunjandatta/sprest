import { IUser, SPTypes } from "../index";
/**
 * App Tiles
 */
export interface IAppTiles {
    AppId: string;
    AppPrincipalId: string;
    AppSource: number;
    AppStatus: number;
    AppType: number;
    AssetId: string;
    BaseTemplate: number;
    ChildCount: number;
    ContentMarket: string;
    CustomSettingsUrl: string;
    Description: string;
    IsCorporateCatalogSite: boolean;
    LastModified: string;
    LastModifiedDate: string;
    ProductId: string;
    Target: string;
    Thumbnail: string;
    Title: string;
    Version: number;
}
/**
 * Attachment
 */
export interface IAttachment {
    /** The filename. */
    FileName: string;
    /** The filename as a path. */
    FileNameAsPath: IResourcePath;
    /** The server relative path. */
    ServerRelativePath: IResourcePath;
    /** The server relative url. */
    ServerRelativeUrl: string;
}
/**
 * Audit
 */
export interface IAudit {
    AuditFlags: number;
}
/**
 * Base Permissions
 */
export interface IBasePermissions {
    High: number;
    Low: number;
}
/**
 * Contains Confidential Information
 */
export interface IContainsConfidentialInfo {
    ContainsConfidentialInfo: boolean;
    ContainsConfidentialInfoLearnMoreUrl: string;
    ExternalSharingTipsEnabled: boolean;
    ExternalSharingTipsInfoLearnMoreUrl: string;
}
/**
 * Content Type Creation Information
 */
export interface IContentTypeCreationInformation {
    /** The content type description. */
    Description?: string;
    /** The content type group. */
    Group?: string;
    /** The content type id. */
    Id?: string;
    /** The content type name. */
    Name: string;
}
/**
 * Context Information
 */
export interface IContextInfo {
    FormDigestTimeoutSeconds: number;
    FormDigestValue: string;
    LibraryVersion: string;
    SiteFullUrl: string;
    SupportedSchemaVersions: IResults<string>;
    WebFullUrl: string;
}
/**
 * Entity Data
 */
export interface IEntityData {
    /** Account Name */
    AccountName: string;
    /** Department. */
    Department: string;
    /** EMail */
    Email: string;
    /** */
    IsAltSecIdPresent: boolean;
    /** Mobile Phone */
    MobilePhone: string;
    /** Object ID */
    ObjectId: string;
    /** Principal Type */
    PrincipalType: string;
    /** SharePoint User ID */
    SPUserID: string;
    /** Title */
    Title: string;
}
/**
 * Event Receiver Definition Creation Information
 */
export interface IEventReceiverDefinitionCreationInformation {
    /** The event receiver type. */
    EventType: SPTypes.EventReceiverType | number;
    /** The strong name of the assembly that is used for receiving events. */
    ReceiverAssembly?: string;
    /** A string that represents the class that is used for receiving events. */
    ReceiverClass?: string;
    /** The name of the event receiver. */
    ReceiverName: string;
    /** The URL of a web service that is used for receiving events. */
    ReceiverUrl?: string;
    /** An integer that represents the relative sequence of the event. */
    SequenceNumber?: number;
    /** The execution synchronization of the event receiver. */
    Synchronization?: number;
}
/**
 * Feature
 */
export interface IFeature {
    DefinitionId: string;
}
/**
 * Field Creation Information
 */
export interface IFieldCreationInformation {
    /** The choices. */
    Choices?: {
        results: Array<string>;
    };
    /** The field type. */
    FieldTypeKind: SPTypes.FieldType | number;
    /** Indicates whether only the first eight characters are used for the field name. */
    IsCompactName?: boolean;
    /** The name of the source lookup field. */
    LookupFieldName?: string;
    /** The ID of the target list for the source lookup field. */
    LookupListId?: any;
    /** The ID of the site that contains the list that is the source for the lookup field value. */
    LookupWebId?: any;
    /** A value that specifies whether the field requires a value. */
    Required?: boolean;
    /** A value that specifies the display name of the field. */
    Title: string;
}
/**
 * Field Link
 */
export interface IFieldLink {
    DisplayName: string;
    FieldInternalName: string;
    Hidden: boolean;
    Id: string;
    Name: string;
    ReadOnly: boolean;
    Required: boolean;
    ShowInDisplayForm: boolean;
}
/**
 * Group Creation Information
 */
export interface IGroupCreationInformation {
    /** The group description. */
    Description?: string;
    /** The group name. */
    Title: string;
}
/**
 * Form
 */
export interface IForm {
    Id: string;
    ResourcePath: IResourcePath;
    ServerRelativeUrl: string;
    FormType: number;
}
/**
 * Information Rights Management Settings
 */
export interface IInformationRightsManagementSettings {
    AllowPrint: boolean;
    AllowScript: boolean;
    AllowWriteCopy: boolean;
    DisableDocumentBrowserView: boolean;
    DocumentAccessExpireDays: number;
    DocumentLibraryProtectionExpireDate: string;
    EnableDocumentAccessExpire: boolean;
    EnableDocumentBrowserPublishingView: boolean;
    EnableGroupProtection: boolean;
    GroupName: string;
    LicenseCacheExpireDays: number;
    PolicyDescription: string;
    PolicyTitle: string;
    TemplateId: string;
}
/**
 * List Creation Information
 */
export interface IListCreationInformation {
    /** The list template type. */
    BaseTemplate: SPTypes.ListTemplateType | number;
    /** The list schema xml. */
    CustomSchemaXml?: string;
    /** The list of data source properties. */
    DataSourceProperties?: Array<string>;
    /** The list description. */
    Description?: string;
    /** The list document template type. */
    DocumentTemplateType?: number;
    /** Option to display the list on the quick launch. */
    QuickLaunchOption?: number;
    /** The list template feature id. */
    TemplateFeatureId?: string;
    /** The list name. */
    Title: string;
}
/**
 * List Data Source
 */
export interface IListDataSource {
    Properties: Array<string>;
}
/**
 * List Template
 */
export interface IListTemplate {
    AllowsFolderCreation: boolean;
    Description: string;
    FeatureId: string;
    Hidden: boolean;
    ImageUrl: string;
    InternalName: string;
    IsCustomTemplate: boolean;
    ListTemplateTypeKind: number;
    Name: string;
    OnQuickLaunch: boolean;
    Unique: boolean;
}
/**
 * Navigation
 */
export interface INavigation {
    QuickLaunch: IResults<INavigationNode>;
    TopNavigationBar: IResults<INavigationNode>;
}
/**
 * Navigation Node
 */
export interface INavigationNode {
    Id: number;
    IsDocLib: boolean;
    IsExternal: boolean;
    IsVisible: boolean;
    ListTemplateType: number;
    Title: string;
    Url: string;
}
/**
 * People Picker Query
 */
export interface IPeoplePickerQuery {
    /** True to allow the email address. */
    AllowEmailAddresses?: boolean;
    /** True to allow multiple entities.  */
    AllowMultipleEntities?: boolean;
    /** True to allow all url zones. */
    AllUrlZones?: boolean;
    /** True to enable claim providers. */
    EnabledClaimProviders?: boolean;
    /** True to force claims. */
    ForceClaims?: boolean;
    /** Maximum entity suggestions. */
    MaximumEntitySuggestions: number;
    /** The principal source. */
    PrincipalSource?: number;
    /** The principal type. */
    PrincipalType?: number;
    /** The query string. This value must be >= 3 characters. */
    QueryString?: string;
    /** Required flag. */
    Required?: boolean;
    /** The SharePoint group id. */
    SharePointGroupID?: number;
    /** The url zone. */
    UrlZone?: number;
    /** Url zone specified flag. */
    UrlZoneSpecified?: boolean;
    /** The web. */
    Web?: any;
    /** The web application id. */
    WebApplicationID?: any;
}
/**
 * People Picker Resolve User
 */
export interface IPeoplePickerResolveUser {
    ClientPeoplePickerResolveUser: Array<IPeoplePickerUser>;
}
/**
 * People Picker Search User
 */
export interface IPeoplePickerSearchUser {
    ClientPeoplePickerSearchUser: Array<IPeoplePickerUser>;
}
/**
 * People Picker User
 */
export interface IPeoplePickerUser {
    /** Description */
    Description: string;
    /** Display Text */
    DisplayText: string;
    /** The user entity data. */
    EntityData: IEntityData;
    /** Entity Type */
    EntityType: string;
    /** Flag to determine if the search user is resolved. */
    IsResolved: boolean;
    /** The search value. */
    Key: string;
    /** An array of un-resolved user entities. */
    MultipleMatches: Array<IEntityData>;
    /** Provider Display Name */
    ProviderDisplayName: string;
    /** Provider Name */
    ProviderName: string;
}
/**
 * Recycle Bin Item
 */
export interface IRecycleBinItem {
    Author: IUser;
    AuthorEmail: string;
    AuthorName: string;
    DeletedBy: IUser;
    DeletedByEmail: string;
    DeletedByName: string;
    DeletedDate: string;
    DeletedDateLocalFormatted: string;
    DirName: string;
    DirNamePath: IResourcePath;
    Id: string;
    ItemState: number;
    ItemType: number;
    LeafName: string;
    LeafNamePath: IResourcePath;
    Size: string;
    Title: string;
}
/**
 * Regional Settings
 */
export interface IRegionalSettings {
    AdjustHijriDays: number;
    AlternateCalendarType: number;
    AM: string;
    CalendarType: number;
    Collation: number;
    CollationLCID: number;
    DateFormat: number;
    DateSeparator: string;
    DecimalSeparator: string;
    DigitGrouping: string;
    FirstDayOfWeek: number;
    FirstWeekOfYear: number;
    IsEastAsia: boolean;
    IsRightToLeft: boolean;
    IsUIRightToLeft: boolean;
    ListSeparator: string;
    LocaleId: number;
    NegativeSign: string;
    NegNumberMode: number;
    PM: string;
    PositiveSign: string;
    ShowWeeks: boolean;
    ThousandSeparator: string;
    Time24: boolean;
    TimeMarkerPosition: number;
    TimeSeparator: string;
    WorkDayEndHour: number;
    WorkDays: number;
    WorkDayStartHour: number;
}
/**
 * Resource Path
 */
export interface IResourcePath {
    DecodedUrl: string;
}
/**
 * Results
 */
export interface IResults<P> {
    /** The collection data */
    results: Array<P>;
}
/**
 * String Value
 */
export interface IStringValue {
    StringValue: string;
}
/**
 * Subscription
 */
export interface ISubscription {
}
/**
 * Theme Information
 */
export interface IThemeInfo {
    AccessibleDescription: string;
    ThemeBackgroundImageUri: string;
}
/**
 * Upgrade Info
 */
export interface IUpgradeInfo {
    ErrorFile: string;
    Errors: number;
    LastUpdated: string;
    LogFile: string;
    RequestDate: string;
    RetryCount: number;
    StartTime: string;
    Status: number;
    UpgradeType: number;
    Warnings: number;
}
/**
 * Usage Information
 */
export interface IUsageInfo {
    Bandwidth: number;
    DiscussionStorage: number;
    Hits: number;
    Storage: number;
    StoragePercentageUsed: number;
    Visits: number;
}
/**
 * User Creation Information
 */
export interface IUserCreationInformation {
    Email?: string;
    LoginName: string;
    Title?: string;
}
/**
 * User Custom Action Information
 */
export interface IUserCustomActionCreationInformation {
    /** A value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
    CommandUIExtension?: string;
    /** The description of the custom action. */
    Description?: string;
    /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
    Group?: string;
    /** The URL of the image associated with the custom action. */
    ImageUrl?: string;
    /** The location of the custom action. */
    Location?: string;
    /** The name of the custom action. */
    Name: string;
    /** The value that specifies the identifier of the object associated with the custom action. */
    RegistrationId?: string;
    /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
    RegistrationType?: SPTypes.UserCustomActionRegistrationType | number;
    /** The value that specifies the permissions needed for the custom action. */
    Rights?: any;
    /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
    ScriptBlock?: string;
    /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
    ScriptSrc?: string;
    /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
    Sequence?: number;
    /** The display title of the custom action. */
    Title?: string;
    /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
    Url?: string;
}
/**
 * Version
 */
export interface IVersion {
    /** The check-in comment. */
    CheckInComment: string;
    /** The created date. */
    Created: string;
    /** The version id. */
    ID: number;
    /** Flag determining if this is the current version. */
    IsCurrentVersion: boolean;
    /** The file length. */
    Length: number;
    /** The file size. */
    Size: number;
    /** The file url. */
    Url: string;
    /** The version label. */
    VersionLabel: string;
}
/**
 * View Creation Information
 */
export interface IViewCreationInformation {
    /** The relative url to the jslink */
    JSLink?: string;
    /** The new list view is a paged view. */
    Paged?: boolean;
    /** The new list view is a personal view. If the value is false, the new list view is a public view. */
    PersonalView?: boolean;
    /** The maximum number of list items that the new list view displays on a visual page of the list view. */
    RowLimit?: number;
    /** Option to set as default view. */
    SetAsDefaultView?: boolean;
    /** The name of the view. */
    Title: string;
    /** The query for the new list view. */
    ViewQuery?: string;
    /** The view type. */
    ViewTypeKind?: SPTypes.ViewType | number;
}
/**
 * Visualization
 */
export interface IVisualization {
    DefaultScreen: IVisualizationStyleSet;
    DetailView: IVisualizationStyleSet;
    MediumScreen: IVisualizationStyleSet;
    SmallScreen: IVisualizationStyleSet;
    VisualizationAppInfo: IVisualizationAppInfo;
    VisualizationType: number;
}
/**
 * Visualization App Information
 */
export interface IVisualizationAppInfo {
    DesignUri: string;
    Id: string;
    RuntimeUri: string;
}
/**
 * Visualization Field
 */
export interface IVisualizationField {
    InternalName: string;
    Style: string;
}
/**
 * Visualization Style Set
 */
export interface IVisualizationStyleSet {
    AspectRatio: string;
    BackgroundColor: string;
    Fields: IVisualizationField;
    MinHeight: string;
}
/**
 * Web Context Information
 */
export interface IContextWebInfo {
    GetContextWebInformation: IContextInfo;
}
/**
 * Web Creation Information
 */
export interface IWebCreationInformation {
    /** The description of the new site. */
    Description?: string;
    /** The locale ID that specifies the language of the new site. */
    Language?: number;
    /** A value that specifies the title of the new site. */
    Title: string;
    /** The URL leaf name of the new site. The URL must not contain the following:
        The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
        The string \x7f
        Consecutive . or / characters
        Starting ., /, or _ characters
        Ending . or / characters
    */
    Url: string;
    /** A value that specifies whether the new site will inherit permissions from its parent site. */
    UseSamePermissionsAsParentSite?: boolean;
    /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
    WebTemplate: string;
}
/**
 * Web Information
 */
export interface IWebInfo {
    Configuration: number;
    Created: string;
    Description: string;
    Id: string;
    Language: number;
    LastItemModifiedDate: string;
    LastItemUserModifiedDate: string;
    ServerRelativeUrl: string;
    Title: string;
    WebTemplate: string;
    WebTemplateId: number;
}
/**
 * Workflow Template
 */
export interface IWorkflowTemplate {
    AllowManual: boolean;
    AssociationUrl: string;
    AutoStartChange: boolean;
    AutoStartCreate: boolean;
    Description: string;
    Id: string;
    IsDeclarative: boolean;
    Name: string;
    PermissionsManual: IBasePermissions;
}
