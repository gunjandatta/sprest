import { IUser } from "./user";
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
export interface IBasePermissions {
    High: number;
    Low: number;
}
export interface IContainsConfidentialInfo {
    ContainsConfidentialInfo: boolean;
    ContainsConfidentialInfoLearnMoreUrl: string;
    ExternalSharingTipsEnabled: boolean;
    ExternalSharingTipsInfoLearnMoreUrl: string;
}
export interface IContextInfo {
    FormDigestTimeoutSeconds: number;
    FormDigestValue: string;
    LibraryVersion: string;
    SiteFullUrl: string;
    SupportedSchemaVersions: IResults<string>;
    WebFullUrl: string;
}
export interface IEntityData {
    AccountName?: string;
    Department?: string;
    Email?: string;
    IsAltSecIdPresent?: boolean;
    MobilePhone?: string;
    ObjectId?: string;
    PrincipalType?: string;
    SPGroupID?: string;
    SPUserID?: string;
    Title?: string;
}
export interface IFeature {
    DefinitionId: string;
}
export interface IForm {
    Id: string;
    ResourcePath: IResourcePath;
    ServerRelativeUrl: string;
    FormType: number;
}
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
export interface IMenuNode {
    CustomProperties: IResults<any>;
    FriendlyUrlSegment: string;
    IsDeleted: boolean;
    IsHidden: boolean;
    Key: string;
    Nodes: IResults<IMenuNode>;
    NodeType: number;
    SimpleUrl: string;
    Title: string;
}
export interface IMenuState {
    FriendlyUrlPrefix: string;
    Nodes: IResults<IMenuNode>;
    SimpleUrl: string;
    SPSitePrefix: string;
    SPWebPrefix: string;
    StartingNodeKey: string;
    StartingNodeTitle: string;
    Version: string;
}
export interface INavigation {
    QuickLaunch: IResults<INavigationNode>;
    TopNavigationBar: IResults<INavigationNode>;
}
export interface INavigationNode {
    Id: number;
    IsDocLib: boolean;
    IsExternal: boolean;
    IsVisible: boolean;
    ListTemplateType: number;
    Title: string;
    Url: string;
}
export interface ODataQuery {
    Custom?: string;
    Expand?: Array<string>;
    Filter?: string;
    GetAllItems?: boolean;
    OrderBy?: Array<string>;
    Select?: Array<string>;
    Skip?: number;
    Top?: number;
}
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
export interface IResourcePath {
    DecodedUrl: string;
}
export interface IResults<P> {
    results: Array<P>;
}
export interface IStringValue {
    StringValue: string;
}
export interface ISubscription {
}
export interface IThemeInfo {
    AccessibleDescription: string;
    ThemeBackgroundImageUri: string;
}
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
export interface IUsageInfo {
    Bandwidth: number;
    DiscussionStorage: number;
    Hits: number;
    Storage: number;
    StoragePercentageUsed: number;
    Visits: number;
}
export interface IVisualization {
    DefaultScreen: IVisualizationStyleSet;
    DetailView: IVisualizationStyleSet;
    MediumScreen: IVisualizationStyleSet;
    SmallScreen: IVisualizationStyleSet;
    VisualizationAppInfo: IVisualizationAppInfo;
    VisualizationType: number;
}
export interface IVisualizationAppInfo {
    DesignUri: string;
    Id: string;
    RuntimeUri: string;
}
export interface IVisualizationField {
    InternalName: string;
    Style: string;
}
export interface IVisualizationStyleSet {
    AspectRatio: string;
    BackgroundColor: string;
    Fields: IVisualizationField;
    MinHeight: string;
}
export interface IContextWebInfo {
    GetContextWebInformation: IContextInfo;
}
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
