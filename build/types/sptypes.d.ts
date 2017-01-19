/**
 * Check Out Types
 */
export declare const CheckOutType: {
    Online: number;
    Offline: number;
    None: number;
};
/**
 * Control Modes
 */
export declare const ControlMode: {
    Invalid: number;
    Display: number;
    Edit: number;
    New: number;
};
/**
 * Draft Visibility Types
 */
export declare const DraftVisibilityType: {
    Approver: number;
    Author: number;
    Reader: number;
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
    Asynchronous: number;
    Synchronization: number;
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
    FormPage: number;
    StandardPage: number;
    WikiPage: number;
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
 * Master Page Gallery Types
 */
/**
 * Page Layout Types
 */
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
