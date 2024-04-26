import * as SPTypes from "../../@types/sptypes";

/**
 * Base Permission Types
 */
export const BasePermissionTypes: SPTypes.IBasePermissionTypes = {
    EmptyMask: 0,
    ViewListItems: 1,
    AddListItems: 2,
    EditListItems: 3,
    DeleteListItems: 4,
    ApproveItems: 5,
    OpenItems: 6,
    ViewVersions: 7,
    DeleteVersions: 8,
    CancelCheckout: 9,
    ManagePersonalViews: 10,
    ManageLists: 12,
    ViewFormPages: 13,
    AnonymousSearchAccessList: 14,
    Open: 17,
    ViewPages: 18,
    AddAndCustomizePages: 19,
    ApplyThemeAndBorder: 20,
    ApplyStyleSheets: 21,
    ViewUsageData: 22,
    CreateSSCSite: 23,
    ManageSubwebs: 24,
    CreateGroups: 25,
    ManagePermissions: 26,
    BrowseDirectories: 27,
    BrowseUserInfo: 28,
    AddDelPrivateWebParts: 29,
    UpdatePersonalWebParts: 30,
    ManageWeb: 31,
    AnonymousSearchAccessWebLists: 32,
    UseClientIntegration: 37,
    UseRemoteAPIs: 38,
    ManageAlerts: 39,
    CreateAlerts: 40,
    EditMyUserInfo: 41,
    EnumeratePermissions: 63,
    FullMask: 65
}

/**
 * Calendar Types
 */
export const CalendarTypes: SPTypes.ICalendarType = {
    Gregorian: 1,
    JapaneseEmperorEra: 3,
    TaiwanCalendar: 4,
    KoreanTangunEra: 5,
    Hijri: 6,
    Thai: 7,
    HebrewLunar: 8,
    GregorianMiddleEastFrench: 9,
    GregorianArabic: 10,
    GregorianTransliteratedEnglish: 11,
    GregorianTransliteratedFrench: 12,
    KoreanandJapaneseLunar: 14,
    ChineseLunar: 15,
    SakaEra: 16
};

/**
 * Check In Types
 */
export const CheckInType: SPTypes.ICheckInType = { MinorCheckIn: 0, MajorCheckIn: 1, OverwriteCheckIn: 2 };

/**
 * Check Out Types
 */
export const CheckOutType: SPTypes.ICheckOutType = { Online: 0, Offline: 1, None: 2 };

/**
 * Choice Format Types
 */
export const ChoiceFormatType: SPTypes.IChoiceFormatType = { Dropdown: 0, RadioButtons: 1 };

/**
 * Client Side Templates
 */
export const ClientSidePageLayout: SPTypes.IClientSidePageLayout = {
    Article: "Article",
    HeaderlessSearchResults: "HeaderlessSearchResults",
    Home: "Home",
    RepostPage: "RepostPage",
    SingleWebPartAppPage: "SingleWebPartAppPage",
    Spaces: "Spaces",
    Topic: "Topic"
}

/**
 * Client Template Utility
 */
export const ClientTemplatesUtility: SPTypes.IClientTemplateUtility = {
    UserLookupDelimitString: ";#",
    UserMultiValueDelimitString: ",#"
}

/**
 * Cloud Environments
 */
export const CloudEnvironment: SPTypes.ICloudEnvironment = {
    China: "https://microsoftgraph.chinacloudapi.cn",
    Default: "https://graph.microsoft.com",
    Flow: "https://service.flow.microsoft.com/",
    FlowAPI: "https://api.flow.microsoft.com/",
    FlowChina: "https://service.powerautomate.cn/",
    FlowChinaAPI: "https://api.powerautomate.cn/",
    FlowDoD: "https://service.flow.appsplatform.us/",
    FlowDoDAPI: "https://api.flow.appsplatform.us/",
    FlowGov: "https://gov.service.flow.microsoft.us/",
    FlowGovAPI: "https://gov.api.flow.microsoft.us/",
    FlowHigh: "https://high.service.flow.microsoft.us/",
    FlowHighAPI: "https://high.api.flow.microsoft.us/",
    FlowUSNat: "https://service.flow.eaglex.ic.gov/",
    FlowUSNatAPI: "https://api.flow.eaglex.ic.gov/",
    FlowUSSec: "https://service.flow.microsoft.scloud/",
    FlowUSSecAPI: "https://api.flow.microsoft.scloud/",
    Office: "https://substrate.office.com",
    USL4: "https://graph.microsoft.us",
    USL5: "https://dod-graph.microsoft.us"
}

/**
 * Control Modes
 */
export const ControlMode: SPTypes.IControlMode = {
    Invalid: 0,
    Display: 1,
    Edit: 2,
    New: 3,
    View: 4
};

/**
 * Date Format
 */
export const DateFormat: SPTypes.IDateFormat = { DateOnly: 0, DateTime: 1 };

/**
 * Display Mode
 */
export const DisplayMode: SPTypes.IDisplayMode = {
    Edit: 2,
    Read: 1
}

/**
 * Draft Visibility Types
 */
export const DraftVisibilityType: SPTypes.IDraftVisibilityType = { Reader: 0, Author: 1, Approver: 2 };

/**
 * Event Receiver Synchronization Types
 */
export const EventReceiverSynchronizationType: SPTypes.IEventReceiverSynchronizationType = { Synchronization: 1, Asynchronous: 2 };

/**
 * Event Receiver Types
 */
export const EventReceiverType: SPTypes.IEventReceiverType = {
    ItemAdding: 1,
    ItemUpdating: 2,
    ItemDeleting: 3,
    ItemCheckingIn: 4,
    ItemCheckingOut: 5,
    ItemUncheckingOut: 6,
    ItemAttachmentAdding: 7,
    ItemAttachmentDeleting: 8,
    ItemFileMoving: 9,
    ItemVersionDeleting: 11,
    FieldAdding: 101,
    FieldUpdating: 102,
    FieldDeleting: 103,
    ListAdding: 104,
    ListDeleting: 105,
    SiteDeleting: 201,
    WebDeleting: 202,
    WebMoving: 203,
    WebAdding: 204,
    GroupAdding: 301,
    GroupUpdating: 302,
    GroupDeleting: 303,
    GroupUserAdding: 304,
    GroupUserDeleting: 305,
    RoleDefinitionAdding: 306,
    RoleDefinitionUpdating: 307,
    RoleDefinitionDeleting: 308,
    RoleAssignmentAdding: 309,
    RoleAssignmentDeleting: 310,
    InheritanceBreaking: 311,
    InheritanceResetting: 312,
    WorkflowStarting: 501,
    ItemAdded: 10001,
    ItemUpdated: 10002,
    ItemDeleted: 10003,
    ItemCheckedIn: 10004,
    ItemCheckedOut: 10005,
    ItemUncheckedOut: 10006,
    ItemAttachmentAdded: 10007,
    ItemAttachmentDeleted: 10008,
    ItemFileMoved: 10009,
    ItemFileConverted: 10010,
    ItemVersionDeleted: 10011,
    FieldAdded: 10101,
    FieldUpdated: 10102,
    FieldDeleted: 10103,
    ListAdded: 10104,
    ListDeleted: 10105,
    SiteDeleted: 10201,
    WebDeleted: 10202,
    WebMoved: 10203,
    WebProvisioned: 10204,
    GroupAdded: 10301,
    GroupUpdated: 10302,
    GroupDeleted: 10303,
    GroupUserAdded: 10304,
    GroupUserDeleted: 10305,
    RoleDefinitionAdded: 10306,
    RoleDefinitionUpdated: 10307,
    RoleDefinitionDeleted: 10308,
    RoleAssignmentAdded: 10309,
    RoleAssignmentDeleted: 10310,
    InheritanceBroken: 10311,
    InheritanceReset: 10312,
    WorkflowStarted: 10501,
    WorkflowPostponed: 10502,
    WorkflowCompleted: 10503,
    EntityInstanceAdded: 10601,
    EntityInstanceUpdated: 10602,
    EntityInstanceDeleted: 10603,
    AppInstalled: 10701,
    AppUpgraded: 10702,
    AppUninstalling: 10703,
    EmailReceived: 20000,
    ContextEvent: 32766
};

/**
 * Environment Type
 */
export const EnvironmentType: SPTypes.IEnvironmentType = {
    ClassicSharePoint: 3,
    Local: 1,
    SharePoint: 2,
    Test: 0
}

/**
 * Field Index Status
 */
export const FieldIndexStatus: SPTypes.IFieldIndexStatus = {
    None: 0,
    Indexed: 1,
    Enabling: 2,
    Disabling: 3
}

/**
 * Field Note Types
 */
export const FieldNoteType: SPTypes.IFieldNoteType = {
    /** Enhance Rich Text */
    EnhancedRichText: 0,

    /** Rich Text */
    RichText: 1,

    /** Text Only */
    TextOnly: 2
};

/**
 * Field Number Type
 */
export const FieldNumberType: SPTypes.IFieldNumberType = {
    /** Decimal */
    Decimal: 0,

    /** Integer */
    Integer: 1,

    /** Percentage */
    Percentage: 2,
}

/**
 * Field Result Types
 */
export const FieldResultType: SPTypes.IFieldResultType = {
    /** Boolean */
    Boolean: "Boolean",

    /** Currency */
    Currency: "Currency",

    /** Date Only */
    DateOnly: "DateOnly",

    /** Date & Time */
    DateTime: "DateTime",

    /** Number */
    Number: "Number",

    /** Text */
    Text: "Text"
};

/**
 * Field Types
 */
export const FieldType: SPTypes.IFieldType = {
    AllDayEvent: 29,
    Attachments: 19,
    Boolean: 8,
    Calculated: 17,
    Choice: 6,
    Computed: 12,
    ContentTypeId: 25,
    Counter: 5,
    CrossProjectLink: 22,
    Currency: 10,
    DateTime: 4,
    Error: 24,
    File: 18,
    Geolocation: 31,
    GridChoice: 16,
    Guid: 14,
    Image: 34,
    Integer: 1,
    Invalid: 0,
    Lookup: 7,
    MaxItems: 31,
    ModStat: 23,
    MultiChoice: 15,
    Note: 3,
    Number: 9,
    PageSeparator: 26,
    Recurrence: 21,
    Text: 2,
    ThreadIndex: 27,
    Threading: 13,
    URL: 11,
    User: 20,
    WorkflowEventType: 30,
    WorkflowStatus: 28
};

/**
 * Field User Selection Types
 */
export const FieldUserSelectionType: SPTypes.IFieldUserSelectionType = { PeopleOnly: 0, PeopleAndGroups: 1 }

/**
 * File Level
 */
export const FileLevelType: SPTypes.IFileLevelType = { Published: 1, Draft: 2, Checkout: 3 }

/**
 * File Template Types
*/
export const FileTemplateType: SPTypes.IFileTemplateType = { StandardPage: 0, WikiPage: 1, FormPage: 2 };

/**
 * Form Display Mode
 */
export const FormDisplayMode: SPTypes.IFormDisplayMode = {
    Display: 4,
    Edit: 6,
    New: 8
}

/**
 * Friendly Date Format
 */
export const FriendlyDateFormat: SPTypes.IFriendlyDateFormat = {
    Unspecified: 0,
    Disabled: 1,
    Relative: 2
}

/**
 * List Experience Types
 */
export const ListExperienceOptions: SPTypes.IListExperienceOptions = {
    Auto: 0,
    NewExperience: 1,
    ClassicExperience: 2
}

/**
 * List Template Types
*/
export const ListTemplateType: SPTypes.IListTemplateType = {
    AccessApp: 3100,
    AccessRequest: 160,
    AdminTasks: 1200,
    Agenda: 201,
    AlchemyApprovalWorkflow: 3102,
    AlchemyMobileForm: 3101,
    Announcements: 104,
    AppCatalog: 336,
    AppDataCatalog: 125,
    AssetLibrary: 851,
    CallTrack: 404,
    Categories: 303,
    Circulation: 405,
    ClientSideAssets: 334,
    ClientSideComponentManifests: 331,
    Comments: 302,
    Contacts: 105,
    CustomGrid: 120,
    DataConnectionLibrary: 130,
    DataSources: 110,
    Decision: 204,
    DesignCatalog: 124,
    DeveloperSiteDraftApps: 1230,
    DiscussionBoard: 108,
    DocumentLibrary: 101,
    Events: 106,
    ExternalList: 600,
    Facility: 402,
    GanttTasks: 150,
    GenericList: 100,
    HealthReports: 1221,
    HealthRules: 1220,
    HelpLibrary: 151,
    Holidays: 421,
    HomePageLibrary: 212,
    IMEDic: 499,
    IssueTracking: 1100,
    KPIStatusList: 432,
    LanguagesAndTranslatorsList: 1301,
    Links: 103,
    ListTemplateCatalog: 114,
    MaintenanceLogs: 175,
    MasterPageCatalog: 116,
    MeetingObjective: 207,
    Meetings: 200,
    MeetingUser: 202,
    MicroFeed: 544,
    MySiteDocumentLibrary: 700,
    NoCodePublic: 122,
    NoCodeWorkflows: 117,
    PageLibrary: 850,
    PerformancePointContentList: 450,
    PerformancePointDataSourceLibrary: 460,
    PerformancePointDataConnectionsLibrary: 470,
    PerformancePointDashboardsLibrary: 480,
    PersonalDocumentLibrary: 2002,
    PictureLibrary: 109,
    Posts: 301,
    PrivateDocumentLibrary: 2003,
    RecordLibrary: 1302,
    ReportLibrary: 433,
    SharingLinks: 3300,
    SolutionCatalog: 121,
    Survey: 102,
    Tasks: 107,
    TasksWithTimelineAndHierarchy: 171,
    TenantAppCatalog: 330,
    TenantWideExtensions: 337,
    TextBox: 210,
    ThemeCatalog: 123,
    ThingsToBring: 211,
    Timecard: 420,
    TranslationManagementLibrary: 1300,
    UserInformation: 112,
    VisioProcessDiagramMetricLibrary: 505,
    VisioProcessDiagramUSUnitsLibrary: 506,
    WebPageLibrary: 119,
    WebPartCatalog: 113,
    WebTemplateCatalog: 111,
    Whereabouts: 403,
    WorkflowHistory: 140,
    WorkflowProcess: 118,
    XMLForm: 115
};

/**
 * Locale LCID Types
 */
export const LocaleLCIDType: SPTypes.ILocaleLCIDType = {
    Afrikaans: 1078,
    Albanian: 1052,
    ArabicAlgeria: 5121,
    ArabicBahrain: 15361,
    ArabicEgypt: 3073,
    ArabicIraq: 2049,
    ArabicJordan: 11265,
    ArabicLebanon: 12289,
    ArabicLibya: 4097,
    ArabicMorocco: 6145,
    ArabicOman: 8193,
    ArabicQatar: 16385,
    ArabicSaudiArabia: 1025,
    ArabicSyria: 10241,
    ArabicTunisia: 7169,
    ArabicUAE: 14337,
    ArabicYemen: 9217,
    Armenian: 1067,
    AzeriCyrillic: 2092,
    AzeriLatin: 1068,
    Basque: 1069,
    Belarusian: 1059,
    Bulgarian: 1026,
    Catalan: 1027,
    ChineseHongKongSAR: 3076,
    ChineseMacaoSAR: 5124,
    ChinesePRC: 2052,
    ChineseSingapore: 4100,
    ChineseTaiwan: 1028,
    CroatianCroatia: 1050,
    Czech: 1029,
    Danish: 1030,
    Divehi: 1125,
    DutchBelgium: 2067,
    DutchNetherlands: 1043,
    EnglishAustralia: 3081,
    EnglishBelize: 10249,
    EnglishCanada: 4105,
    EnglishCaribbean: 9225,
    EnglishIreland: 6153,
    EnglishJamaica: 8201,
    EnglishNewZealand: 5129,
    EnglishPhilippines: 13321,
    EnglishSouthAfrica: 7177,
    EnglishTrinidad: 11273,
    EnglishUnitedKingdom: 2057,
    EnglishUnitedStates: 1033,
    EnglishZimbabwe: 12297,
    Estonian: 1061,
    Faeroese: 1080,
    Finnish: 1035,
    FrenchBelgium: 2060,
    FrenchCanada: 3084,
    FrenchFrance: 1036,
    FrenchLuxembourg: 5132,
    FrenchMonaco: 6156,
    FrenchSwitzerland: 4108,
    Galician: 1110,
    Georgian: 1079,
    GermanAustria: 3079,
    GermanGermany: 1031,
    GermanLiechtenstein: 5127,
    GermanLuxembourg: 4103,
    GermanSwitzerland: 2055,
    Greek: 1032,
    Gujarati: 1095,
    HebrewIsrael: 1037,
    HindiIndia: 1081,
    Hungarian: 1038,
    Icelandic: 1039,
    Indonesian: 1057,
    ItalianItaly: 1040,
    ItalianSwitzerland: 2064,
    Japanese: 1041,
    Kannada: 1099,
    Kazakh: 1087,
    Konkani: 1111,
    Korean: 1042,
    KyrgyzCyrillic: 1088,
    Latvian: 1062,
    Lithuanian: 1063,
    MacedonianFYROM: 1071,
    Malay: 1086,
    MalayBruneiDarussalam: 2110,
    Marathi: 1102,
    MongolianCyrillic: 1104,
    NorwegianBokmal: 1044,
    NorwegianNynorsk: 2068,
    PersianIran: 1065,
    Polish: 1045,
    PortugueseBrazil: 1046,
    PortuguesePortugal: 2070,
    Punjabi: 1094,
    Romanian: 1048,
    Russian: 1049,
    Sanskrit: 1103,
    SerbianCyrillic: 3098,
    SerbianLatin: 2074,
    Slovak: 1051,
    Slovenian: 1060,
    SpanishArgentina: 11274,
    SpanishBolivia: 16394,
    SpanishChile: 13322,
    SpanishColombia: 9226,
    SpanishCostaRica: 5130,
    SpanishDominicanRepublic: 7178,
    SpanishEcuador: 12298,
    SpanishElSalvador: 17418,
    SpanishGuatemala: 4106,
    SpanishHonduras: 18442,
    SpanishMexico: 2058,
    SpanishNicaragua: 19466,
    SpanishPanama: 6154,
    SpanishParaguay: 15370,
    SpanishPeru: 10250,
    SpanishPuertoRico: 20490,
    SpanishSpain: 3082,
    SpanishUruguay: 14346,
    SpanishVenezuela: 8202,
    Swahili: 1089,
    Swedish: 1053,
    SwedishFinland: 2077,
    Syriac: 1114,
    Tamil: 1097,
    Tatar: 1092,
    Telugu: 1098,
    ThaiThailand: 1054,
    Turkish: 1055,
    Ukrainian: 1058,
    UrduPakistan: 1056,
    UzbekCyrillic: 2115,
    UzbekLatin: 1091,
    Vietnamese: 1066,
}

/**
 * Modal Dialog Results
 */
export const ModalDialogResult: SPTypes.ModalDialogResult = {
    Invalid: -1,
    Cancel: 0,
    OK: 1
}

/**
 * Node Types - Need to get this info. Documentation not found online. Ref the MS Publishing DLL and decompile to find the type info.
 */
export type NodeType = {
    /** Specifies no node SPTypes.I */
    None: 0,

    /** Specifies any type of SPWeb site. */
    Area: 0,

    /** Specifies a List item in the Pages list. */
    Page: 0,

    /** Specifies a Microsoft SharePoint Foundation list (SPList). */
    List: 0,

    /** Specifies a Microsoft SharePoint Foundation list item (SPListItem). */
    ListItem: 0;

    /** Specifies a CMS Page Layout. */
    PageLayout: 0;

    /**  Specifies a navigation heading. */
    Heading: 0;

    /** Specifies an authored link that references a page. */
    AuthoredLinkToPage: 0;

    /** Specifies an authored link that references a Web site or area. */
    AuthoredLinkToWeb: 0;

    /** Specifies a generic authored link. */
    AuthoredLinkPlain: 0;

    /** Specifies a custom node type that may be useful for extensibility purposes. */
    Custom: 0;

    /** Represents an error specific to node SPTypes.I */
    Error: 0;

    /** Specifies any type of authored link. */
    AuthoredLink: 0;

    /** Specifies a combination of Area, Page, Heading and AuthoredLink. Navigation uses this value to determine which node types to return by default. */
    Default: 0;

    /** Specifies all node types, including Area, Page, List, ListItem, PageLayout, Heading, AuthoredLink, and Custom. */
    All: 0;
}

/**
 * Page Types
 */
export const PageType: SPTypes.IPageType = {
    DefaultView: 0,
    DialogView: 2,
    DisplayForm: 4,
    DisplayFormDialog: 5,
    EditForm: 6,
    EditFormDialog: 7,
    Invalid: -1,
    NewForm: 8,
    NewFormDialog: 9,
    NormalView: 1,
    Page_MAXITEMS: 11,
    SolutionForm: 10,
    View: 3
};

/**
 * Personalization Scope
 */
export const PersonalizationScope: SPTypes.IPersonalizationScope = {
    Shared: 1,
    User: 0
}

/**
 * Personal Site Capabilities
 */
export const PersonalSiteCapabilities: SPTypes.IPersonalSiteCapabilities = {
    Education: 16,
    Guest: 32,
    MyTasksDashboard: 8,
    None: 0,
    Profile: 1,
    Social: 2,
    Storage: 4
};

/**
 * Principal Sources
 */
export const PrincipalSources: SPTypes.IPrincipalSources = {
    All: 15,
    MembershipProvider: 4,
    None: 0,
    RoleProvider: 8,
    UserInfoList: 1,
    Windows: 2
}

/**
 * Principal Types
 */
export const PrincipalTypes: SPTypes.IPrincipalTypes = {
    All: 15,
    DistributionList: 2,
    None: 0,
    SecurityGroup: 4,
    SharePointGroup: 8,
    User: 1
}

/**
 * Property Pane Types
 */
export const PropertyPaneType: SPTypes.IPropertyPaneType = {
    Button: 11,
    CheckBox: 2,
    ChoiceGroup: 10,
    Custom: 1,
    Dropdown: 6,
    DynamicField: 14,
    DynamicFieldSet: 16,
    DynamicTextField: 15,
    Heading: 9,
    HorizontalRule: 12,
    IconPicker: 19,
    Label: 7,
    Link: 13,
    Slider: 8,
    SpinButton: 17,
    TextField: 3,
    ThumbnailPicker: 18,
    Toggle: 5
}

/**
 * Relationship Delete Behavior Types
 */
export const RelationshipDeleteBehaviorType: SPTypes.IRelationshipDeleteBehaviorType = { None: 0, Cascade: 1, Restrict: 2 };

/**
 * Render List Data Options
 */
export const RenderListDataOptions = {
    None: 0,
    ContextInfo: 1,
    ListData: 2,
    ListSchema: 4,
    MenuView: 8,
    ListContentType: 16,
    FileSystemItemId: 32,
    ClientFormSchema: 64,
    QuickLaunch: 128,
    Spotlight: 256,
    Visualization: 512,
    ViewMetadata: 1024,
    DisableAutoHyperlink: 2048,
    EnableMediaTAUrls: 4096,
    ParentInfo: 8192,
    PageContextInfo: 16384,
    ClientSideComponentManifest: 32768
}

/**
 * Reordering Rule Match Types
 */
export const ReorderingRuleMatchType: SPTypes.IReorderingRuleMatchType = {
    ContentTypeIs: 5,
    FileExtensionMatches: 6,
    ManualCondition: 8,
    ResultContainsKeyword: 0,
    ResultHasTag: 7,
    TitleContainsKeyword: 1,
    TitleMatchesKeyword: 2,
    UrlExactlyMatches: 4,
    UrlStartsWith: 3
};

/**
 * Role Types
 */
export const RoleType: SPTypes.IRoleType = {
    Administrator: 5,
    Contributor: 3,
    Editor: 6,
    Guest: 1,
    None: 0,
    Reader: 2,
    WebDesigner: 4
};

/**
 * Status Pri Color
 */
export const StatusPriColor: SPTypes.IStatusPriColor = {
    Blue: "blue",
    Green: "green",
    Red: "red",
    Yellow: "yellow"
}

/**
 * URL Format Types
 */
export const UrlFormatType: SPTypes.IUrlFormatType = { Hyperlink: 0, Image: 1 };

/**
 * URL Zones
 */
export const URLZones: SPTypes.IURLZones = { Default: 0, Intranet: 1, Internet: 2, Custom: 3, Extranet: 4 }

/**
 * User Custom Action Registration Types
 */
export const UserCustomActionRegistrationType: SPTypes.IUserCustomActionRegistrationType = { None: 0, List: 1, ContentType: 2, ProgId: 3, FileType: 4 };

/**
 * View Types
 */
export const ViewType: SPTypes.IViewType = {
    Calendar: 524288,
    Chart: 131072,
    Gantt: 67108864,
    Grid: 2048,
    Html: 1,
    Recurrence: 8193
};

/**
 * Web Template Types
 */
export const WebTemplateType = {
    AcademicLibrary: "DOCMARKETPLACESITE",
    App: "APP",
    AppCatalog: "APPCATALOG",
    BasicSearch: "SRCHCENTERLITE",
    Blog: "BLOG",
    BusinessIntelligenceCenter: "BICenterSite",
    CentralAdmin: "CENTRALADMIN",
    Community: "COMMUNITY",
    CommunityPortal: "COMMUNITYPORTAL",
    Dev: "DEV",
    DocumentCenter: "BDR",
    eDiscoveryCenter: "EDISC",
    EnterpriseSearch: "SRCHCEN",
    EnterpriseWiki: "ENTERWIKI",
    Global: "GLOBAL",
    GroupWorkSite: "SGS",
    Meetings: "MEETINGS",
    MeetingWorkspace: "MPS",
    PerformancePoint: "PPMASite",
    ProductCatalog: "PRODUCTCATALOG",
    Profiles: "PROFILES",
    ProjectSite: "PROJECTSITE",
    Publishing: "BLANKINTERNET",
    PublishingSite: "CMSPUBLISHING",
    RecordsCenter: "OFFILE",
    SharedServicesAdminSite: "OSRV",
    Site: "STS",
    TeamCollaborationSite: "TEAM",
    TenantAdmin: "TENANTADMIN",
    Wiki: "WIKI"
};