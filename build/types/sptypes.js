"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check Out Types
 */
exports.CheckOutType = { Online: 0, Offline: 1, None: 2 };
/**
 * Client Template Utility
 */
exports.ClientTemplatesUtility = {
    UserLookupDelimitString: ";#",
    UserMultiValueDelimitString: ",#"
};
/**
 * Control Modes
 */
exports.ControlMode = { Invalid: 0, Display: 1, Edit: 2, New: 3, View: 4 };
/**
 * Draft Visibility Types
 */
exports.DraftVisibilityType = { Reader: 0, Author: 1, Approver: 2 };
/**
 * Event Receiver Types
 */
exports.EventReceiverType = {
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
 * Event Receiver Synchronization Types
 */
exports.EventReceiverSynchronizationType = { Synchronization: 1, Asynchronous: 2 };
/**
 * Field Types
 */
exports.FieldType = {
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
 * File Template Types
*/
exports.FileTemplateType = { StandardPage: 0, WikiPage: 1, FormPage: 2 };
/**
 * List Template Types
*/
exports.ListTemplateType = {
    AccessRequest: 160,
    AdminTasks: 1200,
    Agenda: 201,
    AppDataCatalog: 125,
    Announcements: 104,
    CallTrack: 404,
    Categories: 303,
    Circulation: 405,
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
    Links: 103,
    ListTemplateCatalog: 114,
    MasterPageCatalog: 116,
    MaintenanceLogs: 175,
    MeetingObjective: 207,
    Meetings: 200,
    MeetingUser: 202,
    MySiteDocumentLibrary: 700,
    Posts: 301,
    NoCodePublic: 122,
    NoCodeWorkflows: 117,
    PictureLibrary: 109,
    SolutionCatalog: 121,
    Survey: 102,
    Tasks: 107,
    TasksWithTimelineAndHierarchy: 171,
    TextBox: 210,
    ThemeCatalog: 123,
    ThingsToBring: 211,
    Timecard: 420,
    UserInformation: 112,
    WebPageLibrary: 119,
    WebPartCatalog: 113,
    WebTemplateCatalog: 111,
    Whereabouts: 403,
    WorkflowHistory: 140,
    WorkflowProcess: 118,
    XMLForm: 115
};
/**
 * Page Types
 */
exports.PageType = {
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
 * Personal Site Capabilities
 */
exports.PersonalSiteCapabilities = {
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
exports.PrincipalSources = {
    All: 15,
    MembershipProvider: 4,
    None: 0,
    RoleProvider: 8,
    UserInfoList: 1,
    Windows: 2
};
/**
 * Principal Types
 */
exports.PrincipalTypes = {
    All: 15,
    DistributionList: 2,
    None: 0,
    SecurityGroup: 4,
    SharePointGroup: 8,
    User: 1
};
/**
 * Reordering Rule Match Types
 */
exports.ReorderingRuleMatchType = {
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
exports.RoleType = {
    Administrator: 5,
    Contributor: 3,
    Editor: 6,
    Guest: 1,
    None: 0,
    Reader: 2,
    WebDesigner: 4
};
/**
 * URL Zones
 */
exports.URLZones = { Default: 0, Intranet: 1, Internet: 2, Custom: 3, Extranet: 4 };
/**
 * User Custom Action Registration Types
 */
exports.UserCustomActionRegistrationType = { None: 0, List: 1, ContentType: 2, ProgId: 3, FileType: 4 };
/**
 * View Types
 */
exports.ViewType = {
    Calendar: 524288,
    Chart: 131072,
    Gantt: 67108864,
    Grid: 2048,
    Html: 1,
    Recurrence: 8193
};
//# sourceMappingURL=sptypes.js.map