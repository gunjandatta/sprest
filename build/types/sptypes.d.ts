/**
 * Calendar Types
 */
export declare const CalendarTypes: {
    Gregorian: number;
    JapaneseEmperorEra: number;
    TaiwanCalendar: number;
    KoreanTangunEra: number;
    Hijri: number;
    Thai: number;
    HebrewLunar: number;
    GregorianMiddleEastFrench: number;
    GregorianArabic: number;
    GregorianTransliteratedEnglish: number;
    GregorianTransliteratedFrench: number;
    KoreanandJapaneseLunar: number;
    ChineseLunar: number;
    SakaEra: number;
};
/**
 * Check Out Types
 */
export declare const CheckOutType: {
    Online: number;
    Offline: number;
    None: number;
};
/**
 * Choice Format Types
 */
export declare const ChoiceFormatType: {
    Dropdown: number;
    RadioButtons: number;
};
/**
 * Client Template Utility
 */
export declare const ClientTemplatesUtility: {
    UserLookupDelimitString: string;
    UserMultiValueDelimitString: string;
};
/**
 * Control Modes
 */
export declare const ControlMode: {
    Invalid: number;
    Display: number;
    Edit: number;
    New: number;
    View: number;
};
/**
 * Date Format
 */
export declare const DateFormat: {
    DateOnly: number;
    DateTime: number;
};
/**
 * Draft Visibility Types
 */
export declare const DraftVisibilityType: {
    Reader: number;
    Author: number;
    Approver: number;
};
/**
 * Event Receiver Types
 */
export declare const EventReceiverType: {
    ItemAdding: number;
    ItemUpdating: number;
    ItemDeleting: number;
    ItemCheckingIn: number;
    ItemCheckingOut: number;
    ItemUncheckingOut: number;
    ItemAttachmentAdding: number;
    ItemAttachmentDeleting: number;
    ItemFileMoving: number;
    ItemVersionDeleting: number;
    FieldAdding: number;
    FieldUpdating: number;
    FieldDeleting: number;
    ListAdding: number;
    ListDeleting: number;
    SiteDeleting: number;
    WebDeleting: number;
    WebMoving: number;
    WebAdding: number;
    GroupAdding: number;
    GroupUpdating: number;
    GroupDeleting: number;
    GroupUserAdding: number;
    GroupUserDeleting: number;
    RoleDefinitionAdding: number;
    RoleDefinitionUpdating: number;
    RoleDefinitionDeleting: number;
    RoleAssignmentAdding: number;
    RoleAssignmentDeleting: number;
    InheritanceBreaking: number;
    InheritanceResetting: number;
    WorkflowStarting: number;
    ItemAdded: number;
    ItemUpdated: number;
    ItemDeleted: number;
    ItemCheckedIn: number;
    ItemCheckedOut: number;
    ItemUncheckedOut: number;
    ItemAttachmentAdded: number;
    ItemAttachmentDeleted: number;
    ItemFileMoved: number;
    ItemFileConverted: number;
    ItemVersionDeleted: number;
    FieldAdded: number;
    FieldUpdated: number;
    FieldDeleted: number;
    ListAdded: number;
    ListDeleted: number;
    SiteDeleted: number;
    WebDeleted: number;
    WebMoved: number;
    WebProvisioned: number;
    GroupAdded: number;
    GroupUpdated: number;
    GroupDeleted: number;
    GroupUserAdded: number;
    GroupUserDeleted: number;
    RoleDefinitionAdded: number;
    RoleDefinitionUpdated: number;
    RoleDefinitionDeleted: number;
    RoleAssignmentAdded: number;
    RoleAssignmentDeleted: number;
    InheritanceBroken: number;
    InheritanceReset: number;
    WorkflowStarted: number;
    WorkflowPostponed: number;
    WorkflowCompleted: number;
    EntityInstanceAdded: number;
    EntityInstanceUpdated: number;
    EntityInstanceDeleted: number;
    AppInstalled: number;
    AppUpgraded: number;
    AppUninstalling: number;
    EmailReceived: number;
    ContextEvent: number;
};
/**
 * Event Receiver Synchronization Types
 */
export declare const EventReceiverSynchronizationType: {
    Synchronization: number;
    Asynchronous: number;
};
/**
 * Field User Selection Types
 */
export declare const FieldUserSelectionType: {
    PeopleOnly: number;
    PeopleAndGroups: number;
};
/**
 * Field Types
 */
export declare const FieldType: {
    AllDayEvent: number;
    Attachments: number;
    Boolean: number;
    Calculated: number;
    Choice: number;
    Computed: number;
    ContentTypeId: number;
    Counter: number;
    CrossProjectLink: number;
    Currency: number;
    DateTime: number;
    Error: number;
    File: number;
    Geolocation: number;
    GridChoice: number;
    Guid: number;
    Integer: number;
    Invalid: number;
    Lookup: number;
    MaxItems: number;
    ModStat: number;
    MultiChoice: number;
    Note: number;
    Number: number;
    PageSeparator: number;
    Recurrence: number;
    Text: number;
    ThreadIndex: number;
    Threading: number;
    URL: number;
    User: number;
    WorkflowEventType: number;
    WorkflowStatus: number;
};
/**
 * File Template Types
*/
export declare const FileTemplateType: {
    StandardPage: number;
    WikiPage: number;
    FormPage: number;
};
/**
 * Friendly Date Format
 */
export declare const FriendlyDateFormat: {
    Unspecified: number;
    Disabled: number;
    Relative: number;
};
/**
 * List Template Types
*/
export declare const ListTemplateType: {
    AccessRequest: number;
    AdminTasks: number;
    Agenda: number;
    AppDataCatalog: number;
    Announcements: number;
    CallTrack: number;
    Categories: number;
    Circulation: number;
    Comments: number;
    Contacts: number;
    CustomGrid: number;
    DataConnectionLibrary: number;
    DataSources: number;
    Decision: number;
    DesignCatalog: number;
    DeveloperSiteDraftApps: number;
    DiscussionBoard: number;
    DocumentLibrary: number;
    Events: number;
    ExternalList: number;
    Facility: number;
    GanttTasks: number;
    GenericList: number;
    HealthReports: number;
    HealthRules: number;
    HelpLibrary: number;
    Holidays: number;
    HomePageLibrary: number;
    IMEDic: number;
    IssueTracking: number;
    Links: number;
    ListTemplateCatalog: number;
    MasterPageCatalog: number;
    MaintenanceLogs: number;
    MeetingObjective: number;
    Meetings: number;
    MeetingUser: number;
    MySiteDocumentLibrary: number;
    Posts: number;
    NoCodePublic: number;
    NoCodeWorkflows: number;
    PictureLibrary: number;
    SolutionCatalog: number;
    Survey: number;
    Tasks: number;
    TasksWithTimelineAndHierarchy: number;
    TextBox: number;
    ThemeCatalog: number;
    ThingsToBring: number;
    Timecard: number;
    UserInformation: number;
    WebPageLibrary: number;
    WebPartCatalog: number;
    WebTemplateCatalog: number;
    Whereabouts: number;
    WorkflowHistory: number;
    WorkflowProcess: number;
    XMLForm: number;
};
/**
 * Locale LCID Types
 */
export declare const LocaleLCIDType: {
    Afrikaans: number;
    Albanian: number;
    ArabicAlgeria: number;
    ArabicBahrain: number;
    ArabicEgypt: number;
    ArabicIraq: number;
    ArabicJordan: number;
    ArabicLebanon: number;
    ArabicLibya: number;
    ArabicMorocco: number;
    ArabicOman: number;
    ArabicQatar: number;
    ArabicSaudiArabia: number;
    ArabicSyria: number;
    ArabicTunisia: number;
    ArabicUAE: number;
    ArabicYemen: number;
    Armenian: number;
    AzeriCyrillic: number;
    AzeriLatin: number;
    Basque: number;
    Belarusian: number;
    Bulgarian: number;
    Catalan: number;
    ChineseHongKongSAR: number;
    ChineseMacaoSAR: number;
    ChinesePRC: number;
    ChineseSingapore: number;
    ChineseTaiwan: number;
    CroatianCroatia: number;
    Czech: number;
    Danish: number;
    Divehi: number;
    DutchBelgium: number;
    DutchNetherlands: number;
    EnglishAustralia: number;
    EnglishBelize: number;
    EnglishCanada: number;
    EnglishCaribbean: number;
    EnglishIreland: number;
    EnglishJamaica: number;
    EnglishNewZealand: number;
    EnglishPhilippines: number;
    EnglishSouthAfrica: number;
    EnglishTrinidad: number;
    EnglishUnitedKingdom: number;
    EnglishUnitedStates: number;
    EnglishZimbabwe: number;
    Estonian: number;
    Faeroese: number;
    Finnish: number;
    FrenchBelgium: number;
    FrenchCanada: number;
    FrenchFrance: number;
    FrenchLuxembourg: number;
    FrenchMonaco: number;
    FrenchSwitzerland: number;
    Galician: number;
    Georgian: number;
    GermanAustria: number;
    GermanGermany: number;
    GermanLiechtenstein: number;
    GermanLuxembourg: number;
    GermanSwitzerland: number;
    Greek: number;
    Gujarati: number;
    HebrewIsrael: number;
    HindiIndia: number;
    Hungarian: number;
    Icelandic: number;
    Indonesian: number;
    ItalianItaly: number;
    ItalianSwitzerland: number;
    Japanese: number;
    Kannada: number;
    Kazakh: number;
    Konkani: number;
    Korean: number;
    KyrgyzCyrillic: number;
    Latvian: number;
    Lithuanian: number;
    MacedonianFYROM: number;
    Malay: number;
    MalayBruneiDarussalam: number;
    Marathi: number;
    MongolianCyrillic: number;
    NorwegianBokmal: number;
    NorwegianNynorsk: number;
    PersianIran: number;
    Polish: number;
    PortugueseBrazil: number;
    PortuguesePortugal: number;
    Punjabi: number;
    Romanian: number;
    Russian: number;
    Sanskrit: number;
    SerbianCyrillic: number;
    SerbianLatin: number;
    Slovak: number;
    Slovenian: number;
    SpanishArgentina: number;
    SpanishBolivia: number;
    SpanishChile: number;
    SpanishColombia: number;
    SpanishCostaRica: number;
    SpanishDominicanRepublic: number;
    SpanishEcuador: number;
    SpanishElSalvador: number;
    SpanishGuatemala: number;
    SpanishHonduras: number;
    SpanishMexico: number;
    SpanishNicaragua: number;
    SpanishPanama: number;
    SpanishParaguay: number;
    SpanishPeru: number;
    SpanishPuertoRico: number;
    SpanishSpain: number;
    SpanishUruguay: number;
    SpanishVenezuela: number;
    Swahili: number;
    Swedish: number;
    SwedishFinland: number;
    Syriac: number;
    Tamil: number;
    Tatar: number;
    Telugu: number;
    ThaiThailand: number;
    Turkish: number;
    Ukrainian: number;
    UrduPakistan: number;
    UzbekCyrillic: number;
    UzbekLatin: number;
    Vietnamese: number;
};
/**
 * Page Types
 */
export declare const PageType: {
    DefaultView: number;
    DialogView: number;
    DisplayForm: number;
    DisplayFormDialog: number;
    EditForm: number;
    EditFormDialog: number;
    Invalid: number;
    NewForm: number;
    NewFormDialog: number;
    NormalView: number;
    Page_MAXITEMS: number;
    SolutionForm: number;
    View: number;
};
/**
 * Personal Site Capabilities
 */
export declare const PersonalSiteCapabilities: {
    Education: number;
    Guest: number;
    MyTasksDashboard: number;
    None: number;
    Profile: number;
    Social: number;
    Storage: number;
};
/**
 * Principal Sources
 */
export declare const PrincipalSources: {
    All: number;
    MembershipProvider: number;
    None: number;
    RoleProvider: number;
    UserInfoList: number;
    Windows: number;
};
/**
 * Principal Types
 */
export declare const PrincipalTypes: {
    All: number;
    DistributionList: number;
    None: number;
    SecurityGroup: number;
    SharePointGroup: number;
    User: number;
};
/**
 * Relationship Delete Behavior Types
 */
export declare const RelationshipDeleteBehaviorType: {
    None: number;
    Cascade: number;
    Restrict: number;
};
/**
 * Reordering Rule Match Types
 */
export declare const ReorderingRuleMatchType: {
    ContentTypeIs: number;
    FileExtensionMatches: number;
    ManualCondition: number;
    ResultContainsKeyword: number;
    ResultHasTag: number;
    TitleContainsKeyword: number;
    TitleMatchesKeyword: number;
    UrlExactlyMatches: number;
    UrlStartsWith: number;
};
/**
 * Role Types
 */
export declare const RoleType: {
    Administrator: number;
    Contributor: number;
    Editor: number;
    Guest: number;
    None: number;
    Reader: number;
    WebDesigner: number;
};
/**
 * URL Format Types
 */
export declare const UrlFormatType: {
    Hyperlink: number;
    Image: number;
};
/**
 * URL Zones
 */
export declare const URLZones: {
    Default: number;
    Intranet: number;
    Internet: number;
    Custom: number;
    Extranet: number;
};
/**
 * User Custom Action Registration Types
 */
export declare const UserCustomActionRegistrationType: {
    None: number;
    List: number;
    ContentType: number;
    ProgId: number;
    FileType: number;
};
/**
 * View Types
 */
export declare const ViewType: {
    Calendar: number;
    Chart: number;
    Gantt: number;
    Grid: number;
    Html: number;
    Recurrence: number;
};
