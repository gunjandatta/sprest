import { SPTypes } from "./types";
/**
 * Calendar Types
 */
export declare const CalendarTypes: SPTypes.ICalendarType;
/**
 * Check Out Types
 */
export declare const CheckOutType: SPTypes.ICheckOutType;
/**
 * Choice Format Types
 */
export declare const ChoiceFormatType: SPTypes.IChoiceFormatType;
/**
 * Client Template Utility
 */
export declare const ClientTemplatesUtility: SPTypes.IClientTemplateUtility;
/**
 * Control Modes
 */
export declare const ControlMode: SPTypes.IControlMode;
/**
 * Date Format
 */
export declare const DateFormat: SPTypes.IDateFormat;
/**
 * Draft Visibility Types
 */
export declare const DraftVisibilityType: SPTypes.IDraftVisibilityType;
/**
 * Event Receiver Synchronization Types
 */
export declare const EventReceiverSynchronizationType: SPTypes.IEventReceiverSynchronizationType;
/**
 * Event Receiver Types
 */
export declare const EventReceiverType: SPTypes.IEventReceiverType;
/**
 * Field Note Types
 */
export declare const FieldNoteType: SPTypes.IFieldNoteType;
/**
 * Field Number Type
 */
export declare const FieldNumberType: SPTypes.IFieldNumberType;
/**
 * Field Result Types
 */
export declare const FieldResultType: SPTypes.IFieldResultType;
/**
 * Field Types
 */
export declare const FieldType: SPTypes.IFieldType;
/**
 * Field User Selection Types
 */
export declare const FieldUserSelectionType: SPTypes.IFieldUserSelectionType;
/**
 * File Template Types
*/
export declare const FileTemplateType: SPTypes.IFileTemplateType;
/**
 * Friendly Date Format
 */
export declare const FriendlyDateFormat: SPTypes.IFriendlyDateFormat;
/**
 * List Template Types
*/
export declare const ListTemplateType: SPTypes.IListTemplateType;
/**
 * Locale LCID Types
 */
export declare const LocaleLCIDType: SPTypes.ILocaleLCIDType;
/**
 * Node Types - Need to get this info. Documentation not found online. Ref the MS Publishing DLL and decompile to find the type info.
 */
export declare type NodeType = {
    /** Specifies no node SPTypes.I */
    None: 0;
    /** Specifies any type of SPWeb site. */
    Area: 0;
    /** Specifies a List item in the Pages list. */
    Page: 0;
    /** Specifies a Microsoft SharePoint Foundation list (SPList). */
    List: 0;
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
};
/**
 * Page Types
 */
export declare const PageType: SPTypes.IPageType;
/**
 * Personal Site Capabilities
 */
export declare const PersonalSiteCapabilities: SPTypes.IPersonalSiteCapabilities;
/**
 * Principal Sources
 */
export declare const PrincipalSources: SPTypes.IPrincipalSources;
/**
 * Principal Types
 */
export declare const PrincipalTypes: SPTypes.IPrincipalTypes;
/**
 * Relationship Delete Behavior Types
 */
export declare const RelationshipDeleteBehaviorType: SPTypes.IRelationshipDeleteBehaviorType;
/**
 * Render List Data Options
 */
export declare const RenderListDataOptions: {
    None: number;
    ContextInfo: number;
    ListData: number;
    ListSchema: number;
    MenuView: number;
    ListContentType: number;
    FileSystemItemId: number;
    ClientFormSchema: number;
    QuickLaunch: number;
    Spotlight: number;
    Visualization: number;
    ViewMetadata: number;
    DisableAutoHyperlink: number;
    EnableMediaTAUrls: number;
    ParentInfo: number;
    PageContextInfo: number;
    ClientSideComponentManifest: number;
};
/**
 * Reordering Rule Match Types
 */
export declare const ReorderingRuleMatchType: SPTypes.IReorderingRuleMatchType;
/**
 * Role Types
 */
export declare const RoleType: SPTypes.IRoleType;
/**
 * Status Pri Color
 */
export declare const StatusPriColor: SPTypes.IStatusPriColor;
/**
 * URL Format Types
 */
export declare const UrlFormatType: SPTypes.IUrlFormatType;
/**
 * URL Zones
 */
export declare const URLZones: SPTypes.IURLZones;
/**
 * User Custom Action Registration Types
 */
export declare const UserCustomActionRegistrationType: SPTypes.IUserCustomActionRegistrationType;
/**
 * View Types
 */
export declare const ViewType: SPTypes.IViewType;
/**
 * Web Template Types
 */
export declare const WebTemplateType: {
    AcademicLibrary: string;
    App: string;
    AppCatalog: string;
    BasicSearch: string;
    Blog: string;
    BusinessIntelligenceCenter: string;
    CentralAdmin: string;
    Community: string;
    CommunityPortal: string;
    Dev: string;
    DocumentCenter: string;
    eDiscoveryCenter: string;
    EnterpriseSearch: string;
    EnterpriseWiki: string;
    Global: string;
    GroupWorkSite: string;
    Meetings: string;
    MeetingWorkspace: string;
    PerformancePoint: string;
    ProductCatalog: string;
    Profiles: string;
    ProjectSite: string;
    Publishing: string;
    PublishingSite: string;
    RecordsCenter: string;
    SharedServicesAdminSite: string;
    Site: string;
    TeamCollaborationSite: string;
    TenantAdmin: string;
    Wiki: string;
};
