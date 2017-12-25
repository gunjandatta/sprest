import { Types } from "../mapper";
/**
 * Calendar Types
 */
export declare const CalendarTypes: Types.SPTypes.CalendarType;
/**
 * Check Out Types
 */
export declare const CheckOutType: Types.SPTypes.CheckOutType;
/**
 * Choice Format Types
 */
export declare const ChoiceFormatType: Types.SPTypes.ChoiceFormatType;
/**
 * Client Template Utility
 */
export declare const ClientTemplatesUtility: Types.SPTypes.ClientTemplateUtility;
/**
 * Control Modes
 */
export declare const ControlMode: Types.SPTypes.ControlMode;
/**
 * Date Format
 */
export declare const DateFormat: Types.SPTypes.DateFormat;
/**
 * Draft Visibility Types
 */
export declare const DraftVisibilityType: Types.SPTypes.DraftVisibilityType;
/**
 * Event Receiver Synchronization Types
 */
export declare const EventReceiverSynchronizationType: Types.SPTypes.EventReceiverSynchronizationType;
/**
 * Event Receiver Types
 */
export declare const EventReceiverType: Types.SPTypes.EventReceiverType;
/**
 * Field Types
 */
export declare const FieldType: Types.SPTypes.FieldType;
/**
 * Field User Selection Types
 */
export declare const FieldUserSelectionType: Types.SPTypes.FieldUserSelectionType;
/**
 * File Template Types
*/
export declare const FileTemplateType: Types.SPTypes.FileTemplateType;
/**
 * Friendly Date Format
 */
export declare const FriendlyDateFormat: Types.SPTypes.FriendlyDateFormat;
/**
 * List Template Types
*/
export declare const ListTemplateType: Types.SPTypes.ListTemplateType;
/**
 * Locale LCID Types
 */
export declare const LocaleLCIDType: Types.SPTypes.LocaleLCIDType;
/**
 * Node Types - Need to get this info. Documentation not found online. Ref the MS Publishing DLL and decompile to find the type info.
 */
export declare type NodeType = {
    /** Specifies no node types. */
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
    /** Represents an error specific to node types. */
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
export declare const PageType: Types.SPTypes.PageType;
/**
 * Personal Site Capabilities
 */
export declare const PersonalSiteCapabilities: Types.SPTypes.PersonalSiteCapabilities;
/**
 * Principal Sources
 */
export declare const PrincipalSources: Types.SPTypes.PrincipalSources;
/**
 * Principal Types
 */
export declare const PrincipalTypes: Types.SPTypes.PrincipalTypes;
/**
 * Relationship Delete Behavior Types
 */
export declare const RelationshipDeleteBehaviorType: Types.SPTypes.RelationshipDeleteBehaviorType;
/**
 * Reordering Rule Match Types
 */
export declare const ReorderingRuleMatchType: Types.SPTypes.ReorderingRuleMatchType;
/**
 * Role Types
 */
export declare const RoleType: Types.SPTypes.RoleType;
/**
 * URL Format Types
 */
export declare const UrlFormatType: Types.SPTypes.UrlFormatType;
/**
 * URL Zones
 */
export declare const URLZones: Types.SPTypes.URLZones;
/**
 * User Custom Action Registration Types
 */
export declare const UserCustomActionRegistrationType: Types.SPTypes.UserCustomActionRegistrationType;
/**
 * View Types
 */
export declare const ViewType: Types.SPTypes.ViewType;
