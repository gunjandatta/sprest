import { BasePermissions } from "gd-sprest-def/lib/SP/complextypes";

/**
 * Base Permission Types
 */
export type IBasePermissionTypes = {
    AddAndCustomizePages: number,
    AddDelPrivateWebParts: number,
    AddListItems: number,
    AnonymousSearchAccessList: number,
    AnonymousSearchAccessWebLists: number,
    ApplyStyleSheets: number,
    ApplyThemeAndBorder: number,
    ApproveItems: number,
    BrowseDirectories: number,
    BrowseUserInfo: number,
    CancelCheckout: number,
    CreateAlerts: number,
    CreateGroups: number,
    CreateSSCSite: number,
    DeleteListItems: number,
    DeleteVersions: number,
    EditListItems: number,
    EditMyUserInfo: number,
    EmptyMask: number,
    EnumeratePermissions: number,
    FullMask: number,
    ManageAlerts: number,
    ManageLists: number,
    ManagePermissions: number,
    ManagePersonalViews: number,
    ManageSubwebs: number,
    ManageWeb: number,
    Open: number,
    OpenItems: number,
    UpdatePersonalWebParts: number,
    UseClientIntegration: number,
    UseRemoteAPIs: number,
    ViewFormPages: number,
    ViewListItems: number,
    ViewPages: number,
    ViewUsageData: number,
    ViewVersions: number
}

/**
 * Calendar Types
 */
export type ICalendarType = {
    /** Gregorian (localized) */
    Gregorian: number,

    /** Japanese Emperor Era */
    JapaneseEmperorEra: number,

    /** Taiwan Calendar */
    TaiwanCalendar: number,

    /** Korean Tangun Era */
    KoreanTangunEra: number,

    /** Hijri (Arabic Lunar) */
    Hijri: number,

    /** Thai */
    Thai: number,

    /** Hebrew Lunar */
    HebrewLunar: number,

    /** Gregorian (Middle East French) */
    GregorianMiddleEastFrench: number,

    /** Gregorian (Arabic) */
    GregorianArabic: number,

    /** Gregorian (Transliterated English) */
    GregorianTransliteratedEnglish: number,

    /** Gregorian (Transliterated French) */
    GregorianTransliteratedFrench: number,

    /** Korean and Japanese Lunar */
    KoreanandJapaneseLunar: number,

    /** Chinese Lunar */
    ChineseLunar: number,

    /** Saka Era */
    SakaEra: number
}

/**
 * Check In Types
 */
export type ICheckInType = {
    /** Minor Check In */
    MinorCheckIn: number,

    /** Major Check In */
    MajorCheckIn: number,

    /** Overwrite Check In */
    OverwriteCheckIn: number
};

/**
 * Check Out Types
 */
export type ICheckOutType = {
    /** Online */
    Online: number,

    /** Offline */
    Offline: number,

    /** None */
    None: number
};

/**
 * Choice Format Types
 */
export type IChoiceFormatType = {
    /** Dropdown */
    Dropdown: number,

    /** Radio buttons */
    RadioButtons: number
};

/**
 * Client Template Utility
 */
export type IClientTemplateUtility = {
    /** User Lookup Delimiter */
    UserLookupDelimitString: string,

    /** Multi-User Value Delimiter */
    UserMultiValueDelimitString: string
}

/**
 * Control Modes
 */
export type IControlMode = {
    /** A placeholder value in the export typeeration indicating that it has no valid display mode from one of the other export typeeration values. */
    Invalid: number,

    /** Specifies that the control is in display mode. */
    Display: number,

    /** Specifies that the control is in edit mode. */
    Edit: number,

    /** Specifies that the control is in new mode. */
    New: number,

    /** Specifies that the control is in view mode. */
    View: number
};

/**
 * Date Format
 */
export type IDateFormat = {
    /** Displays only the date. */
    DateOnly: number,

    /** Displays the date and time. */
    DateTime: number
}

/**
 * Draft Visibility Types
 */
export type IDraftVisibilityType = {
    /** export typeeration whose values specify that the minimum permission is approver. */
    Approver: number,

    /** export typeeration whose values specify that the minimum permission is author. */
    Author: number,

    /** export typeeration whose values specify that the minimum permission is reader. */
    Reader: number
};

/**
 * Event Receiver Types
 */
export type IEventReceiverType = {
    /** Event that occurs before an item has been added. */
    ItemAdding: number,

    /** Event that occurs before an item is updated. */
    ItemUpdating: number,

    /** Event that occurs before an item is deleted. */
    ItemDeleting: number,

    /** Event that occurs before an item has been checked in. */
    ItemCheckingIn: number,

    /** Event that occurs before an item is checked out. */
    ItemCheckingOut: number,

    /** Event that occurs before an item is unchecked out. */
    ItemUncheckingOut: number,

    /** Event that occurs before an attachment has been added to an item. */
    ItemAttachmentAdding: number,

    /** Event that occurs before an attachment has been removed from the item. */
    ItemAttachmentDeleting: number,

    /** Event that occurs before a file is moved. */
    ItemFileMoving: number,

    /** Event that occurs before a document version is deleted. */
    ItemVersionDeleting: number,

    /** Event that occurs before a field is added to a list. */
    FieldAdding: number,

    /** Event that occurs before a field is updated. */
    FieldUpdating: number,

    /** Event that occurs before a field is removed from a list. */
    FieldDeleting: number,

    /** Event that occurs before a list is created. */
    ListAdding: number,

    /** Event that occurs before a list is deleted. */
    ListDeleting: number,

    /** Event that occurs before a site collection is deleted. */
    SiteDeleting: number,

    /** Event that occurs before a site is deleted. */
    WebDeleting: number,

    /** Event that occurs before a site URL has been changed. */
    WebMoving: number,

    /** Event that occurs before a new site is created. */
    WebAdding: number,

    /** Event that occurs before a security group is added. */
    GroupAdding: number,

    /** Event that occurs before a security group is updated. */
    GroupUpdating: number,

    /** Event that occurs before a security group is deleted. */
    GroupDeleting: number,

    /** Event that occurs before a user is added to a security group. */
    GroupUserAdding: number,

    /** Event that occurs before a user is deleted from a security group. */
    GroupUserDeleting: number,

    /** Event that occurs before a role definition is added. */
    RoleDefinitionAdding: number,

    /** Event that occurs before a role definition is updated. */
    RoleDefinitionUpdating: number,

    /** Event that occurs before a role definition is deleted. */
    RoleDefinitionDeleting: number,

    /** Event that occurs before a role assignment is added. */
    RoleAssignmentAdding: number,

    /** Event that occurs before a role assignment is deleted. */
    RoleAssignmentDeleting: number,

    /** Event that occurs before an inheritance is broken. */
    InheritanceBreaking: number,

    /** Event that occurs before an inheritance is restored. */
    InheritanceResetting: number,

    /** Event that occurs before a workflow starts running. */
    WorkflowStarting: number,

    /** Event that occurs after an item has been added. */
    ItemAdded: number,

    /** Event that occurs after an item has been updated. */
    ItemUpdated: number,

    /** Event that occurs after an item has been deleted. */
    ItemDeleted: number,

    /** Event that occurs after an item has been checked in. */
    ItemCheckedIn: number,

    /** Event that occurs after an item has been checked out. */
    ItemCheckedOut: number,

    /** Event that occurs after an item has been unchecked out. */
    ItemUncheckedOut: number,

    /** Event that occurs after an attachment has been added to the item. */
    ItemAttachmentAdded: number,

    /** Event that occurs after an attachment has been removed from the item. */
    ItemAttachmentDeleted: number,

    /** Event that occurs after a file has been moved. */
    ItemFileMoved: number,

    /** Event that occurs after a file is transformed from one type to another. */
    ItemFileConverted: number,

    /** Event that occurs after a document version is deleted. */
    ItemVersionDeleted: number,

    /** Event that occurs after a field has been added. */
    FieldAdded: number,

    /** Event that occurs after a field has been updated. */
    FieldUpdated: number,

    /** Event that occurs after a field has been removed. */
    FieldDeleted: number,

    /** Event that occurs after a list has been created. */
    ListAdded: number,

    /** Event that occurs after a list has been deleted. */
    ListDeleted: number,

    /** Event that occurs after a site collection has been deleted. */
    SiteDeleted: number,

    /** Event that occurs after a site has been deleted. */
    WebDeleted: number,

    /** Event that occurs after a site URL has been changed. */
    WebMoved: number,

    /** Event that occurs after a new site has been created, but before that new site is provisioned. */
    WebProvisioned: number,

    /** Event that occurs happens after a security group is added. */
    GroupAdded: number,

    /** Event that occurs after a security group is updated. */
    GroupUpdated: number,

    /** Event that occurs after a security group is deleted. */
    GroupDeleted: number,

    /** Event that occurs after a user is added to a security group. */
    GroupUserAdded: number,

    /** Event that occurs after a user is deleted from a security group. */
    GroupUserDeleted: number,

    /** Event that occurs after a role definition is added. */
    RoleDefinitionAdded: number,

    /** Event that occurs after a role definition is updated. */
    RoleDefinitionUpdated: number,

    /** Event that occurs after a role definition is deleted. */
    RoleDefinitionDeleted: number,

    /** Event that occurs after a role assignment is added. */
    RoleAssignmentAdded: number,

    /** Event that occurs after a role definition is deleted. */
    RoleAssignmentDeleted: number,

    /** Event that occurs after an inheritance is broken. */
    InheritanceBroken: number,

    /** Event that occurs after an inheritance is restored. */
    InheritanceReset: number,

    /** Event that occurs after a workflow has started running. */
    WorkflowStarted: number,

    /** Event that occurs after a workflow has been postponed. */
    WorkflowPostponed: number,

    /** Event that occurs after a workflow has completed running. */
    WorkflowCompleted: number,

    /** Event that occurs when an instance of an external content type has been added. */
    EntityInstanceAdded: number,

    /** Event that occurs when an instance of an external content type has been updated. */
    EntityInstanceUpdated: number,

    /** Event that occurs when an instance of an external content type has been deleted. */
    EntityInstanceDeleted: number,

    /** Event that occurs after an app is installed. */
    AppInstalled: number,

    /** Event that occurs after an app is upgraded. */
    AppUpgraded: number,

    /** Event that occurs before an app is uninstalled. */
    AppUninstalling: number,

    /** Event that occurs after a list receives an e-mail message. */
    EmailReceived: number,

    /** Identifies workflow event receivers, and is therefore not a true event type. */
    ContextEvent: number,
};

/**
 * Event Receiver Synchronization Types
 */
export type IEventReceiverSynchronizationType = {
    /** Event to be triggered asynchronously. */
    Asynchronous: number,

    /** Event to be triggered synchronously. */
    Synchronization: number
};

/**
 * Field Index Status
 */
export type IFieldIndexStatus = {
    None: number,
    Indexed: number,
    Enabling: number,
    Disabling: number
}

/**
 * Field Note Types
 */
export type IFieldNoteType = {
    /** Enhance Rich Text */
    EnhancedRichText: number,

    /** Rich Text */
    RichText: number,

    /** Text Only */
    TextOnly: number;
}

/**
 * Field Number Type
 */
export type IFieldNumberType = {
    /** Decimal */
    Decimal: number,

    /** Integer */
    Integer: number,

    /** Percentage */
    Percentage: number,
}

/**
 * Field Result Types
 */
export type IFieldResultType = {
    /** Boolean */
    Boolean: string,

    /** Currency */
    Currency: string,

    /** Date Only */
    DateOnly: string,

    /** Date & Time */
    DateTime: string,

    /** Number */
    Number: string,

    /** Text */
    Text: string
}

/**
 * Field Types
 */
export type IFieldType = {
    /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
    AllDayEvent: number,

    /** Specifies that the field indicates whether the list item has attachments. */
    Attachments: number,

    /** Specifies that the field contains a Boolean value. */
    Boolean: number,

    /** Specifies that the field is a calculated field. */
    Calculated: number,

    /** Specifies that the field contains a single value from a set of specified values. */
    Choice: number,

    /** Specifies that the field is a computed field. */
    Computed: number,

    /** Specifies that the field contains a content type identifier as a value. */
    ContentTypeId: number,

    /** Specifies that the field contains a monotonically increasing integer. */
    Counter: number,

    /** Specifies that the field contains a link between projects in a Meeting Workspace site. */
    CrossProjectLink: number,

    /** Specifies that the field contains a currency value. */
    Currency: number,

    /** Specifies that the field contains a date and time value or a date-only value. */
    DateTime: number,

    /** Specifies that the type of the field was set to an invalid value. */
    Error: number,

    /** Specifies that the field contains the leaf name of a document as a value. */
    File: number,

    /** Specifies that the field contains geographical location values. */
    Geolocation: number,

    /** Specifies that the field contains rating scale values for a survey list. */
    GridChoice: number,

    /** Specifies that the field contains a GUID value. */
    Guid: number,

    /** Specifies that the field contains an integer value. */
    Integer: number,

    /** Must not be used. */
    Invalid: number,

    /** Specifies that the field is a lookup field. */
    Lookup: number,

    /** Must not be used. */
    MaxItems: number,

    /** Specifies that the field indicates moderation status. */
    ModStat: number,

    /** Specifies that the field contains one or more values from a set of specified values. */
    MultiChoice: number,

    /** Specifies that the field contains multiple lines of text. */
    Note: number,

    /** Specifies that the field contains a floating-point number value. */
    Number: number,

    /** Specifies that the field separates questions in a survey list onto multiple pages. */
    PageSeparator: number,

    /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
    Recurrence: number,

    /** Specifies that the field contains a single line of text. */
    Text: number,

    /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */
    ThreadIndex: number,

    /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
    Threading: number,

    /** Specifies that the field contains a URI and an optional description of the URI. */
    URL: number,

    /** Specifies that the field contains one or more users and groups as values. */
    User: number,

    /** Specifies that the field contains the most recent event in a workflow instance. */
    WorkflowEventType: number,

    /** Specifies that the field indicates the status of a workflow instance on a list item. */
    WorkflowStatus: number
};

/**
 * Field User Selection Types
 */
export type IFieldUserSelectionType = {
    /** People only. */
    PeopleOnly: number,

    /** People and groups. */
    PeopleAndGroups: number
}

/**
 * File Level Types
 */
export type IFileLevelType = {
    /** The document is published. */
    Published: number,

    /** The document is a draft. */
    Draft: number,

    /** The document is checked out. */
    Checkout: number
}

/**
 * File Template Types
*/
export type IFileTemplateType = {
    /** export typeeration whose value specifies default form template. */
    FormPage: number,

    /** export typeeration whose value specifies default view template. */
    StandardPage: number,

    /** export typeeration whose value specifies default wiki template. */
    WikiPage: number
};

/**
 * Friendly Date Format
 */
export type IFriendlyDateFormat = {
    /** Unspecified */
    Unspecified: number,

    /** Disabled (standard absolute) */
    Disabled: number,

    /** Relative (standard friendly relative) */
    Relative: number
}

/**
 * Base Permission Result
 */
export interface IGetUserEffectivePermissionsResult {
    GetUserEffectivePermissions: BasePermissions
}

export type IListExperienceOptions = {
    /** Default set by the tenant */
    Auto: number,

    /** Modern experience */
    NewExperience: number,

    /** Classic experience */
    ClassicExperience: number
}

/**
 * List Template Types
*/
export type IListTemplateType = {
    /** AccessApp */
    AccessApp: number;

    /** Access Request List */
    AccessRequest: number;

    /** Administrator Tasks */
    AdminTasks: number;

    /** Agenda (Meeting) */
    Agenda: number;

    /** Alchemy Approval Workflow */
    AlchemyApprovalWorkflow: number;

    /** Alchemy Mobile Form */
    AlchemyMobileForm: number;

    /** App Catalog */
    AppCatalog: number;

    /** App Data Catalog */
    AppDataCatalog: number;

    /** Announcements */
    Announcements: number;

    /** Asset Library */
    AssetLibrary: number;

    /** Call Track */
    CallTrack: number;

    /** Categories (Blog) */
    Categories: number;

    /** Circulation */
    Circulation: number;

    /** Client Side Assets */
    ClientSideAssets: number;

    /** Client Side Component Manifests */
    ClientSideComponentManifests: number;

    /** Comments (Blog) */
    Comments: number;

    /** Contacts */
    Contacts: number;

    /** Custom grid for a list */
    CustomGrid: number;

    /** Data connection library for sharing information about external data connections */
    DataConnectionLibrary: number;

    /** Data sources for a site */
    DataSources: number,

    /** Decisions (Meeting) */
    Decision: number,

    /** Design Catalog */
    DesignCatalog: number,

    /** Draft Apps library in Developer Site */
    DeveloperSiteDraftApps: number,

    /** Discussion board */
    DiscussionBoard: number,

    /** Document library */
    DocumentLibrary: number,

    /** Calendar */
    Events: number,

    /** External */
    ExternalList: number,

    /** Facility */
    Facility: number,

    /** Project Tasks */
    GanttTasks: number,

    /** Custom list */
    GenericList: number,

    /** Health Reports */
    HealthReports: number,

    /** Health Rules */
    HealthRules: number,

    /** Help Library */
    HelpLibrary: number,

    /** Holidays */
    Holidays: number,

    /** Workspace Pages (Meeting) */
    HomePageLibrary: number,

    /** IME (Input Method Editor) Dictionary */
    IMEDic: number,

    /** Issue tracking */
    IssueTracking: number,

    /** KPI Status List */
    KPIStatusList: number,

    /** Languages and Translators List */
    LanguagesAndTranslatorsList: number,

    /** Links */
    Links: number,

    /** List Template gallery */
    ListTemplateCatalog: number,

    /** Master Page gallery */
    MasterPageCatalog: number,

    /** Maintenance Logs Library */
    MaintenanceLogs: number,

    /** Objectives (Meeting) */
    MeetingObjective: number,

    /** Meeting Series (Meeting) */
    Meetings: number,

    /** Attendees (Meeting) */
    MeetingUser: number,

    /** Micro Feed */
    MicroFeed: number

    /** My Site Document Library */
    MySiteDocumentLibrary: number,

    /** Performance Point Content List */
    PerformancePointContentList: number,

    /** Performance Point Data Source Library */
    PerformancePointDataSourceLibrary: number;

    /** Performance Point Data Connections Library */
    PerformancePointDataConnectionsLibrary: number;

    /** Performance Point Dashboards Library */
    PerformancePointDashboardsLibrary: number;

    /** Personal Document Library */
    PersonalDocumentLibrary: number;

    /** Posts (Blog) */
    Posts: number;

    /** Private Document Library */
    PrivateDocumentLibrary: number;

    /** No Code Public Workflow */
    NoCodePublic: number;

    /** No Code Workflows */
    NoCodeWorkflows: number;

    /** Page Library */
    PageLibrary: number;

    /** Picture Library */
    PictureLibrary: number;

    /** Record Library */
    RecordLibrary: number;

    /** Report Library */
    ReportLibrary: number;

    /** Sharing Links */
    SharingLinks: number;

    /** Solutions */
    SolutionCatalog: number;

    /** Survey */
    Survey: number;

    /** Tasks */
    Tasks: number;

    /** Tasks with Timeline and Hierarchy */
    TasksWithTimelineAndHierarchy: number;

    /** Tenant Wide Extensions */
    TenantWideExtensions: number;

    /** Text Box (Meeting) */
    TextBox: number;

    /** Themes */
    ThemeCatalog: number;

    /** Things To Bring (Meeting) */
    ThingsToBring: number;

    /** Timecard */
    Timecard: number,

    /** TranslationManagement Library */
    TranslationManagementLibrary: number,

    /** User Information */
    UserInformation: number,

    /** VisioProcessDiagram Library (Metric) */
    VisioProcessDiagramMetricLibrary: number,

    /** VisioProcessDiagram Library (US Units) */
    VisioProcessDiagramUSUnitsLibrary: number,

    /** Wiki Page Library */
    WebPageLibrary: number,

    /** Web Part gallery */
    WebPartCatalog: number,

    /** Site template gallery */
    WebTemplateCatalog: number,

    /** Whereabouts */
    Whereabouts: number,

    /** Workflow History */
    WorkflowHistory: number,

    /** Custom Workflow Process */
    WorkflowProcess: number,

    /** XML Form library */
    XMLForm: number
};

/**
 * Locale LCID Types
 */
export type ILocaleLCIDType = {
    Afrikaans: number,
    Albanian: number,
    ArabicAlgeria: number,
    ArabicBahrain: number,
    ArabicEgypt: number,
    ArabicIraq: number,
    ArabicJordan: number,
    ArabicLebanon: number,
    ArabicLibya: number,
    ArabicMorocco: number,
    ArabicOman: number,
    ArabicQatar: number,
    ArabicSaudiArabia: number,
    ArabicSyria: number,
    ArabicTunisia: number,
    ArabicUAE: number,
    ArabicYemen: number,
    Armenian: number,
    AzeriCyrillic: number,
    AzeriLatin: number,
    Basque: number,
    Belarusian: number,
    Bulgarian: number,
    Catalan: number,
    ChineseHongKongSAR: number,
    ChineseMacaoSAR: number,
    ChinesePRC: number,
    ChineseSingapore: number,
    ChineseTaiwan: number,
    CroatianCroatia: number,
    Czech: number,
    Danish: number,
    Divehi: number,
    DutchBelgium: number,
    DutchNetherlands: number,
    EnglishAustralia: number,
    EnglishBelize: number,
    EnglishCanada: number,
    EnglishCaribbean: number,
    EnglishIreland: number,
    EnglishJamaica: number,
    EnglishNewZealand: number,
    EnglishPhilippines: number,
    EnglishSouthAfrica: number,
    EnglishTrinidad: number,
    EnglishUnitedKingdom: number,
    EnglishUnitedStates: number,
    EnglishZimbabwe: number,
    Estonian: number,
    Faeroese: number,
    Finnish: number,
    FrenchBelgium: number,
    FrenchCanada: number,
    FrenchFrance: number,
    FrenchLuxembourg: number,
    FrenchMonaco: number,
    FrenchSwitzerland: number,
    Galician: number,
    Georgian: number,
    GermanAustria: number,
    GermanGermany: number,
    GermanLiechtenstein: number,
    GermanLuxembourg: number,
    GermanSwitzerland: number,
    Greek: number,
    Gujarati: number,
    HebrewIsrael: number,
    HindiIndia: number,
    Hungarian: number,
    Icelandic: number,
    Indonesian: number,
    ItalianItaly: number,
    ItalianSwitzerland: number,
    Japanese: number,
    Kannada: number,
    Kazakh: number,
    Konkani: number,
    Korean: number,
    KyrgyzCyrillic: number,
    Latvian: number,
    Lithuanian: number,
    MacedonianFYROM: number,
    Malay: number,
    MalayBruneiDarussalam: number,
    Marathi: number,
    MongolianCyrillic: number,
    NorwegianBokmal: number,
    NorwegianNynorsk: number,
    PersianIran: number,
    Polish: number,
    PortugueseBrazil: number,
    PortuguesePortugal: number,
    Punjabi: number,
    Romanian: number,
    Russian: number,
    Sanskrit: number,
    SerbianCyrillic: number,
    SerbianLatin: number,
    Slovak: number,
    Slovenian: number,
    SpanishArgentina: number,
    SpanishBolivia: number,
    SpanishChile: number,
    SpanishColombia: number,
    SpanishCostaRica: number,
    SpanishDominicanRepublic: number,
    SpanishEcuador: number,
    SpanishElSalvador: number,
    SpanishGuatemala: number,
    SpanishHonduras: number,
    SpanishMexico: number,
    SpanishNicaragua: number,
    SpanishPanama: number,
    SpanishParaguay: number,
    SpanishPeru: number,
    SpanishPuertoRico: number,
    SpanishSpain: number,
    SpanishUruguay: number,
    SpanishVenezuela: number,
    Swahili: number,
    Swedish: number,
    SwedishFinland: number,
    Syriac: number,
    Tamil: number,
    Tatar: number,
    Telugu: number,
    ThaiThailand: number,
    Turkish: number,
    Ukrainian: number,
    UrduPakistan: number,
    UzbekCyrillic: number,
    UzbekLatin: number,
    Vietnamese: number
}

/**
 * Modal Dialog Results
 */
export type ModalDialogResult = {
    Invalid: number;
    Cancel: number;
    OK: number;
}

/**
 * Node Types
 */
export type INodeType = {
    /** Specifies no node types. */
    None: number;

    /** Specifies any type of SPWeb site. */
    Area: number;

    /** Specifies a List item in the Pages list. */
    Page: number;

    /** Specifies a Microsoft SharePoint Foundation list (SPList). */
    List: number;

    /** Specifies a Microsoft SharePoint Foundation list item (SPListItem). */
    ListItem: number;

    /** Specifies a CMS Page Layout. */
    PageLayout: number;

    /**  Specifies a navigation heading. */
    Heading: number;

    /** Specifies an authored link that references a page. */
    AuthoredLinkToPage: number;

    /** Specifies an authored link that references a Web site or area. */
    AuthoredLinkToWeb: number;

    /** Specifies a generic authored link. */
    AuthoredLinkPlain: number;

    /** Specifies a custom node type that may be useful for extensibility purposes. */
    Custom: number;

    /** Represents an error specific to node types. */
    Error: number;

    /** Specifies any type of authored link. */
    AuthoredLink: number;

    /** Specifies a combination of Area, Page, Heading and AuthoredLink. Navigation uses this value to determine which node types to return by default. */
    Default: number;

    /** Specifies all node types, including Area, Page, List, ListItem, PageLayout, Heading, AuthoredLink, and Custom. */
    All: number;
}

/**
 * Page Types
 */
export type IPageType = {
    /** export typeeration whose values specify a page that is the default view for a list. */
    DefaultView: number,

    /** export typeeration whose values specify a page suitable for display within a dialog box on a client computer. */
    DialogView: number,

    /** export typeeration whose values specify a list form for displaying a list item. */
    DisplayForm: number,

    /** export typeeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */
    DisplayFormDialog: number,

    /** export typeeration whose values specify a list form for editing a list item. */
    EditForm: number,

    /** export typeeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */
    EditFormDialog: number,

    /** export typeeration whose values specify a page that does not correspond to a list view or a list form. */
    Invalid: number,

    /** export typeeration whose values specify a list form for creating a new list item. */
    NewForm: number,

    /** export typeeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */
    NewFormDialog: number,

    /** export typeeration whose values specify a page that is a list view and is not the default view for a list. */
    NormalView: number,

    /** export typeeration whose values specify the total number of valid page types. */
    Page_MAXITEMS: number,

    /** export typeeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */
    SolutionForm: number,

    /** export typeeration whose values specify a page that is a list view. */
    View: number
};

/**
 * Personalization Scope
 */
export type IPersonalizationScope = {
    Shared: number,
    User: number
};

/**
 * Personal Site Capabilities
 */
export type IPersonalSiteCapabilities = {
    Education: number,
    Guest: number,
    MyTasksDashboard: number,
    None: number,
    Profile: number,
    Social: number,
    Storage: number
};

/**
 * Principal Sources
 */
export type IPrincipalSources = {
    /** Search all principal sources. */
    All: number,

    /** Search the current membership provider. */
    MembershipProvider: number,

    /** Search no principal sources. */
    None: number,

    /** Search the current role provider. */
    RoleProvider: number,

    /** Search the user information list. */
    UserInfoList: number,

    /** Search active directory. */
    Windows: number
}

/**
 * Principal Types
 */
export type IPrincipalTypes = {
    /** Return all entity types. */
    All: number,

    /** Return distribution list entity types. */
    DistributionList: number,

    /** Return no principal types. */
    None: number,

    /** Return security group entity types. */
    SecurityGroup: number,

    /** Return sharepoint group entity types. */
    SharePointGroup: number,

    /** Return user entity types. */
    User: number
}

/**
 * Relationship Delete Behavior Types
 */
export type IRelationshipDeleteBehaviorType = {
    /** No relationship behavior is applied. */
    None: number,

    /** Cascade behavior. */
    Cascade: number,

    /** Restrict behavior. */
    Restrict: number
};

/**
 * Render List Data Options
 */
export type IRenderListDataOptions = {
    None: number,
    ContextInfo: number,
    ListData: number,
    ListSchema: number,
    MenuView: number,
    ListContentType: number,
    FileSystemItemId: number,
    ClientFormSchema: number,
    QuickLaunch: number,
    Spotlight: number,
    Visualization: number,
    ViewMetadata: number,
    DisableAutoHyperlink: number,
    EnableMediaTAUrls: number,
    ParentInfo: number,
    PageContextInfo: number,
    ClientSideComponentManifest: number
};

/**
 * Reordering Rule Match Types
 */
export type IReorderingRuleMatchType = {
    ResultContainsKeyword: number,
    TitleContainsKeyword: number,
    TitleMatchesKeyword: number,
    UrlStartsWith: number,
    UrlExactlyMatches: number,
    ContentTypeIs: number,
    FileExtensionMatches: number,
    ResultHasTag: number,
    ManualCondition: number
};

/**
 * Role Types
 */
export type IRoleType = {
    /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
    Administrator: number,

    /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
    Contributor: number,

    /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
    Editor: number,

    /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
    Guest: number,

    /** export typeeration whose values specify that there are no rights on the Web site. */
    None: number,

    /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
    Reader: number,

    /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
    WebDesigner: number
};

/**
 * Status Pri Color
 */
export interface IStatusPriColor {
    /** Information */
    Blue: string,

    /** Success */
    Green: string,

    /** Very Important */
    Red: string,

    /** Important */
    Yellow: string
}

/**
 * URL Format Types
 */
export type IUrlFormatType = {
    /** Hyperlink */
    Hyperlink: number,

    /** Image */
    Image: number
};

/**
 * URL Zones
 */
export type IURLZones = {
    /** Search the custom zone. */
    Custom: number,

    /** Search the default zone. */
    Default: number,

    /** Search the extranet zone. */
    Extranet: number,

    /** Search the internet zone. */
    Internet: number,

    /** Search the intranet zone. */
    Intranet: number
}

/**
 * User Custom Action Registration Types
 */
export type IUserCustomActionRegistrationType = {
    /** export typeeration whose values specify that the object association is not specified. */
    None: number,

    /** export typeeration whose values specify that the custom action is associated with a list. */
    List: number,

    /** export typeeration whose values specify that the custom action is associated with a content type. */
    ContentType: number,

    /** export typeeration whose values specify that the custom action is associated with a ProgID. */
    ProgId: number,

    /** export typeeration whose values specify that the custom action is associated with a file extension. */
    FileType: number
};

/**
 * View Types
 */
export type IViewType = {
    /** export typeeration whose values specify a calendar list view type. */
    Calendar: number,

    /** export typeeration whose values specify a chart list view type. */
    Chart: number,

    /** export typeeration whose values specify a Gantt chart list view type. */
    Gantt: number,

    /** export typeeration whose values specify a datasheet list view type. */
    Grid: number,

    /** export typeeration whose values specify an HTML list view type. */
    Html: number,

    /** export typeeration whose values specify a list view type that displays recurring events. */
    Recurrence: number
}


/**
 * Web Template Types
 */
export type IWebTemplateType = {
    AcademicLibrary: string,
    App: string,
    AppCatalog: string,
    BasicSearch: string,
    Blog: string,
    BusinessIntelligenceCenter: string,
    CentralAdmin: string,
    Community: string,
    CommunityPortal: string,
    Dev: string,
    DocumentCenter: string,
    eDiscoveryCenter: string,
    EnterpriseSearch: string,
    EnterpriseWiki: string,
    Global: string,
    GroupWorkSite: string,
    Meetings: string,
    MeetingWorkspace: string,
    PerformancePoint: string,
    ProductCatalog: string,
    Profiles: string,
    ProjectSite: string,
    Publishing: string,
    PublishingSite: string,
    RecordsCenter: string,
    SharedServicesAdminSite: string,
    Site: string,
    TeamCollaborationSite: string,
    TenantAdmin: string,
    Wiki: string
}