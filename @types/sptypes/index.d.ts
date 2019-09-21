import * as Types from "./sptypes";
export * from "./sptypes";

/**
 * SharePoint Types
 */
export const SPTypes: ISPTypes;
export interface ISPTypes {
    BasePermissionTypes: Types.IBasePermissionTypes;
    CalendarType: Types.ICalendarType;
    CheckOutType: Types.ICheckOutType;
    ChoiceFormatType: Types.IChoiceFormatType;
    ClientTemplateUtility: Types.IClientTemplateUtility;
    ControlMode: Types.IControlMode;
    DateFormat: Types.IDateFormat;
    DraftVisibilityType: Types.IDraftVisibilityType;
    EventReceiverType: Types.IEventReceiverType;
    EventReceiverSynchronizationType: Types.IEventReceiverSynchronizationType;
    FieldNoteType: Types.IFieldNoteType;
    FieldNumberType: Types.IFieldNumberType;
    FieldResultType: Types.IFieldResultType;
    FieldType: Types.IFieldType;
    FieldUserSelectionType: Types.IFieldUserSelectionType;
    FileTemplateType: Types.IFileTemplateType;
    FriendlyDateFormat: Types.IFriendlyDateFormat;
    ListTemplateType: Types.IListTemplateType;
    LocaleLCIDType: Types.ILocaleLCIDType;
    NodeType: Types.INodeType;
    PageType: Types.IPageType;
    PersonalSiteCapabilities: Types.IPersonalSiteCapabilities;
    PrincipalSources: Types.IPrincipalSources;
    PrincipalTypes: Types.IPrincipalTypes;
    RelationshipDeleteBehaviorType: Types.IRelationshipDeleteBehaviorType;
    RenderListDataOptions: Types.IRenderListDataOptions;
    ReorderingRuleMatchType: Types.IReorderingRuleMatchType;
    RoleType: Types.IRoleType;
    StatusPriColor: Types.IStatusPriColor;
    UrlFormatType: Types.IUrlFormatType;
    URLZones: Types.IURLZones;
    UserCustomActionRegistrationType: Types.IUserCustomActionRegistrationType;
    ViewType: Types.IViewType;
    WebTemplateType: Types.IWebTemplateType;
}

