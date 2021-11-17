import * as Types from "./sptypes";
export * from "./sptypes";

/**
 * SharePoint Types
 */
export const SPTypes: ISPTypes;
export interface ISPTypes {
    BasePermissionTypes: Types.IBasePermissionTypes;
    CalendarType: Types.ICalendarType;
    CheckInType: Types.ICheckInType;
    CheckOutType: Types.ICheckOutType;
    ChoiceFormatType: Types.IChoiceFormatType;
    ClientTemplateUtility: Types.IClientTemplateUtility;
    ControlMode: Types.IControlMode;
    DateFormat: Types.IDateFormat;
    DraftVisibilityType: Types.IDraftVisibilityType;
    EventReceiverType: Types.IEventReceiverType;
    EventReceiverSynchronizationType: Types.IEventReceiverSynchronizationType;
    FieldIndexStatus: Types.IFieldIndexStatus;
    FieldNoteType: Types.IFieldNoteType;
    FieldNumberType: Types.IFieldNumberType;
    FieldResultType: Types.IFieldResultType;
    FieldType: Types.IFieldType;
    FieldUserSelectionType: Types.IFieldUserSelectionType;
    FileLevelType: Types.IFileLevelType;
    FileTemplateType: Types.IFileTemplateType;
    FriendlyDateFormat: Types.IFriendlyDateFormat;
    GetUserEffectivePermissionsResult: Types.IGetUserEffectivePermissionsResult;
    ListExperienceOptions: Types.IListExperienceOptions;
    ListTemplateType: Types.IListTemplateType;
    LocaleLCIDType: Types.ILocaleLCIDType;
    ModalDialogResult: Types.ModalDialogResult,
    NodeType: Types.INodeType;
    PageType: Types.IPageType;
    PersonalizationScope: Types.IPersonalizationScope;
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

