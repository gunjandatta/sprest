import {
    IUser
} from ".";

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
 * Feature
 */
export interface IFeature {
    DefinitionId: string;
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
 * Theme Information
 */
export interface IThemeInfo {
    AccessibleDescription: string;
    ThemeBackgroundImageUri: string;
}

/**
 * Web Creation
 */

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