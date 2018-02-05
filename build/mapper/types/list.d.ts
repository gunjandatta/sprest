import { IBase, ITargetInfo } from "../../utils/types";
import { Types } from "../..";
import { IContentType, IContentTypeResults, IContentTypes, IListItem, IListItemQueryResult, IListItemResult, IListItemResults, IListItems, IView, IViewQueryResult, IViewResult, IViewResults, IViews } from ".";
export interface IListCreationInformation {
    BaseTemplate: number;
    CustomSchemaXml?: string;
    DataSourceProperties?: Array<string>;
    Description?: string;
    DocumentTemplateType?: number;
    QuickLaunchOption?: number;
    TemplateFeatureId?: string;
    Title: string;
}
export interface IListDataSource {
    Properties: Array<string>;
}
export interface IListTemplate {
    AllowsFolderCreation: boolean;
    Description: string;
    FeatureId: string;
    Hidden: boolean;
    ImageUrl: string;
    InternalName: string;
    IsCustomTemplate: boolean;
    ListTemplateTypeKind: number;
    Name: string;
    OnQuickLaunch: boolean;
    Unique: boolean;
}
export interface IListMethods {
    breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): any;
    delete(): IBase;
    getByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?: any): IBase<IList, IListResult, IListQueryResult>;
    getChanges(query: any): IBase;
    getItemById(id: any): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;
    getItems(viewXml: any): IBase<IListItems, IListItemResults>;
    getItemsByQuery(camlQuery: any): IBase<IListItems, IListItemResults>;
    getListItemChangesSinceToken(query: Types.SP.ComplexTypes.ChangeLogItemQuery): IBase<IListItems, IListItemResults>;
    getRelatedFields(): IBase;
    getUserEffectivePermissions(loginName: any): IBase;
    getViewById(viewId: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
    recycle(): IBase;
    renderListData(viewXml: any): IBase;
    renderListFormData(itemId: any, formId: any, mode: number): IBase;
    reserveListItemId(): IBase;
    resetRoleInheritance(): IBase;
    update(data: any): IBase;
}
export interface IListProps {
    AllowContentTypes: boolean;
    AllowDeletion: boolean;
    BaseTemplate: number;
    BaseType: number;
    BrowserFileHandling: number;
    ContentTypesEnabled: boolean;
    Created: string;
    CurrentChangeToken: Types.SP.IStringValue;
    DefaultContentApprovalWorkflowId: string;
    Description: string;
    Direction: string;
    DocumentTemplateUrl: string;
    DraftVersionVisibility: number;
    EnableAssignToEmail: boolean;
    EnableAttachments: boolean;
    EnableFolderCreation: boolean;
    EnableMinorVersions: boolean;
    EnableModeration: boolean;
    EnableVersioning: boolean;
    EntityTypeName: string;
    ExcludeFromOfflineClient: boolean;
    FileSavePostProcessingEnabled: boolean;
    ForceCheckout: boolean;
    HasExternalDataSource: boolean;
    Hidden: boolean;
    Id: string;
    ImageUrl: string;
    IrmEnabled: boolean;
    IrmExpire: boolean;
    IrmReject: boolean;
    IsApplicationList: boolean;
    IsCatalog: boolean;
    IsPrivate: boolean;
    ItemCount: number;
    LastItemDeletedDate: string;
    LastItemModifiedDate: string;
    ListExperienceOptions: number;
    ListItemEntityTypeFullName: string;
    MajorVersionLimit: number;
    MajorWithMinorVersionsLimit: number;
    MultipleDataList: boolean;
    NoCrawl: boolean;
    ParentWebUrl: string;
    ParserDisabled: boolean;
    ReadSecurity: number;
    ServerTemplateCanCreateFolders: boolean;
    TemplateFeatureId: string;
    Title: string;
}
export interface IListQueryProps {
    ContentTypes(): IContentTypes;
    ContentTypes(id: string): IContentType;
    DataSource(): IBase<Array<string>>;
    DefaultDisplayFormUrl(): IBase<string>;
    DefaultEditFormUrl(): IBase<string>;
    DefaultNewFormUrl(): IBase<string>;
    DefaultView(): IView;
    DescriptionResouce(): IBase<Types.SP.IResourcePath>;
    EffectiveBasePermissions(): IBase<Types.SP.IBasePermissions>;
    EffectiveBasePermissionsForUI(): IBase<Types.SP.IBasePermissions>;
    EventReceivers(): Types.SP.IEventReceivers;
    EventReceivers(id: string): Types.SP.IEventReceiver;
    Fields(): Types.SP.IFields;
    Fields(internalNameOrTitle: string): Types.SP.IField;
    FirstUniqueAncestorSecurableObject(): IBase<string>;
    Forms(): IBase;
    Forms(id: string): IBase;
    HasUniqueRoleAssignments(): IBase;
    InformationRightsManagementSettings(): IBase;
    IsSiteAssetsLibrary(): IBase<boolean>;
    Items(): IListItems;
    Items(id: number): IListItem;
    OnQuickLaunch(): IBase<boolean>;
    ParentWeb(): Types.SP.IWeb;
    RoleAssignments(): Types.SP.IRoleAssignments;
    RoleAssignments(id: string): Types.SP.IRoleAssignment;
    RootFolder(): Types.SP.IFolder;
    RootFolder(url: string): Types.SP.IFile;
    SchemaXml(): IBase<string>;
    Subscriptions(): IBase<IBase>;
    TitleResource(): IBase<Types.SP.IResourcePath>;
    UserCustomActions(): Types.SP.IUserCustomActions;
    UserCustomActions(id: string): Types.SP.IUserCustomAction;
    ValidationFormula(): IBase<string>;
    ValidationMessage(): IBase<string>;
    Views(): IViews;
    Views(id: string): IView;
    WorkflowAssociations(): IBase<string>;
    WriteSecurity(): IBase<number>;
}
export interface IListQueryResult extends IListMethods, IListProps {
    ContentTypes: IContentTypeResults;
    DataSource: IListDataSource;
    DefaultDisplayFormUrl: string;
    DefaultEditFormUrl: string;
    DefaultNewFormUrl: string;
    DefaultView: IViewResult;
    DefaultViewUrl: string;
    DescriptionResouce: Types.SP.IResourcePath;
    EffectiveBasePermissions: Types.SP.IBasePermissions;
    EffectiveBasePermissionsForUI: Types.SP.IBasePermissions;
    EventReceivers: Types.SP.IEventReceiverResults;
    Fields: Types.SP.IFieldResults;
    FirstUniqueAncestorSecurableObject: Types.SP.IWebResult;
    Forms: Types.SP.IResults<Types.SP.IForm>;
    HasUniqueRoleAssignments: boolean;
    InformationRightsManagementSettings: Types.SP.IInformationRightsManagementSettings;
    IsSiteAssetsLibrary: boolean;
    Items: IListItemResults;
    OnQuickLaunch: boolean;
    ParentWeb: Types.SP.IWebResult;
    RoleAssignments: Types.SP.IRoleAssignmentResults;
    RootFolder: Types.SP.IFolderResult;
    SchemaXml: string;
    Subscriptions: Types.SP.IResults<Types.SP.ISubscription>;
    TitleResource: Types.SP.IResourcePath;
    UserCustomActions: Types.SP.IUserCustomActionResults;
    ValidationFormula: string;
    ValidationMessage: string;
    Views: IViewResults;
    WorkflowAssociations: Types.SP.IResults<string>;
    WriteSecurity: number;
}
export interface IListResult extends IListMethods, IListProps, IListQueryProps, IBase<IList, IListResult, IListQueryResult> {
}
export interface IList extends IListMethods, IListQueryProps, IBase<IList, IListResult, IListQueryResult> {
    new (listName: string, targetInfo?: ITargetInfo): IList;
}
