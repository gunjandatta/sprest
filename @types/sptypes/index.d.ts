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
    ClientSidePageLayout: Types.IClientSidePageLayout;
    ClientTemplateUtility: Types.IClientTemplateUtility;
    CloudEnvironment: Types.ICloudEnvironment;
    ControlMode: Types.IControlMode;
    DateFormat: Types.IDateFormat;
    DisplayMode: Types.IDisplayMode;
    DraftVisibilityType: Types.IDraftVisibilityType;
    EventReceiverSynchronizationType: Types.IEventReceiverSynchronizationType;
    EventReceiverType: Types.IEventReceiverType;
    EnvironmentType: Types.IEnvironmentType;
    FieldIndexStatus: Types.IFieldIndexStatus;
    FieldNoteType: Types.IFieldNoteType;
    FieldNumberType: Types.IFieldNumberType;
    FieldResultType: Types.IFieldResultType;
    FieldType: Types.IFieldType;
    FieldUserSelectionType: Types.IFieldUserSelectionType;
    FileLevelType: Types.IFileLevelType;
    FileTemplateType: Types.IFileTemplateType;
    FormDisplayMode: Types.IFormDisplayMode;
    FriendlyDateFormat: Types.IFriendlyDateFormat;
    //GetUserEffectivePermissionsResult: Types.IGetUserEffectivePermissionsResult;
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
    PropertyPaneType: Types.IPropertyPaneType;
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

