import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { Types } from "../..";
import {
    IContentType, IContentTypeResults, IContentTypes,
    IListItem, IListItemQueryResult, IListItemResult, IListItemResults, IListItems,
    IView, IViewQueryResult, IViewResult, IViewResults, IViews
} from ".";

/**
 * List Data Stream
 */
export interface IListDataStream<RowProps = SP.ListItem> {
    FilterFields?: string;
    FilterLink: string;
    FirstRow: number;
    FolderPermissions: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
    LastRow: number;
    Row: Array<RowProps>;
    RowLimit: number;
}

/**
 * List Methods
 */
export interface IListMethods {
    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments, clearSubScopes);

    /**
     * Deletes the list.
     */
    delete(): IBase;

    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query): IBase;

    /**
     * Returns the list item with the specified list item identifier.
     * @param id - The list item id.
     */
    getItemById(id): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;

    /**
     * Returns a collection of items from the list based on the view xml.
     * @param viewXml - The view xml CAML query.
     */
    getItems(viewXml): IBase<IListItems, IListItemResults>;

    /**
     * Returns a collection of items from the list based on the specified query.
     * @camlQuery - The caml query.
     */
    getItemsByQuery(camlQuery): IBase<IListItems, IListItemResults>;

    /**
     * Returns a collection of items from the list based on the specified query.
     * @query - The query that contains the change token.
     */
    getListItemChangesSinceToken(query: SP.ChangeLogItemQuery): IBase<IListItems, IListItemResults>;

    /**
     * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
     */
    getRelatedFields(): IBase;

    /**
     * Gets the effective user permissions for the current user.
     * @param loginName - The user login name.
     */
    getUserEffectivePermissions(loginName): IBase;

    /**
     * Returns the list view with the specified view identifier.
     * @param viewId - The view id.
     */
    getViewById(viewId): IView & IBase<IView, IViewResult, IViewQueryResult>;

    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;

    /**
     * Renders the list data.
     * @param viewXml - A CAML query that defines the items and fields that you want returned.
     */
    renderListData(viewXml): IBase;

    // 
    // Types of modes: 1 - Display, 2 - Edit, 3 - New
    /**
     * Renders the list form data.
     * @param itemId - The item id.
     * @param formId - The identifier of the form.
     * @param mode - The SP.ControlMode of the control used to display the item.
     */
    renderListFormData(itemId, formId, mode: number): IBase;

    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId(): IBase;

    /**
     * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
     */
    resetRoleInheritance(): IBase;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBase;
}

/**
 * List Query Properties
 */
export interface IListQueryProps {
    /**
     * Gets the content types that are associated with the list.
     */
    ContentTypes(): IContentTypes;

    /**
     * Gets the content types that are associated with the list.
     * @param id - The id of the content type.
     */
    ContentTypes(id: string): IContentType;

    /**
     * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
     */
    //DataSource(): IBase<Array<string>>;

    /**
     * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
     */
    //DefaultDisplayFormUrl(): IBase<{ DefaultDisplayFormUrl: string }>;

    /**
     * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    //DefaultEditFormUrl(): IBase<{ DefaultEditFormUrl: string }>;

    /**
     * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    //DefaultNewFormUrl(): IBase<{ DefaultNewFormUrl: string }>;

    /**
     * Gets the default list view.
    */
    DefaultView(): IView;

    DescriptionResouce(): IBase<Types.SP.IResourcePath>;

    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    //EffectiveBasePermissions(): IBase<Types.SP.IBasePermissions>;

    /**
     * Gets a value that specifies the effective permissions on the list that are for the user export interface.
    */
    //EffectiveBasePermissionsForUI(): IBase<Types.SP.IBasePermissions>;

    /**
     * Gets the event receivers associated with the list.
    */
    EventReceivers(): Types.SP.IEventReceivers;

    /**
     * Gets the event receiver associated with the list.
     * @param id - The id of the event receiver.
    */
    EventReceivers(id: string): Types.SP.IEventReceiver;

    /**
     * Gets the fields in the list.
     */
    Fields(): Types.SP.IFields;

    /**
     * Gets the field in the list.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): Types.SP.IField;

    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): IBase<string>;

    /**
     * Gets the list forms in the list.
     */
    Forms(): IBase;

    /**
     * Gets the list form in the list.
     * @param id - The id of the form.
     */
    Forms(id: string): IBase;

    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments(): IBase;

    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings(): IBase;

    /**
     * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
     */
    //IsSiteAssetsLibrary(): IBase<boolean>;

    /**
     * Gets the list items in the list.
     */
    Items(): IListItems;

    /**
     * Gets the list item in the list.
     * @param id - The id of the list item.
     */
    Items(id: number | string): IListItem;

    /**
     * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
     */
    //OnQuickLaunch(): IBase<boolean>;

    /**
     * Gets a value that specifies the site that contains the list.
     */
    ParentWeb(): IBase<Types.SP.IWeb>;

    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments(): Types.SP.IRoleAssignments;

    /**
     * Gets the role assignments for the securable object.
     * @param id - The role assignment id.
     */
    RoleAssignments(id: string): Types.SP.IRoleAssignment;

    /**
     * Gets the root folder of the list.
     */
    RootFolder(): Types.SP.IFolder;

    /**
     * Gets the file in the root folder of the list.
     * @param url - The url of the file within the root folder.
     */
    RootFolder(url: string): Types.SP.IFile;

    /**
     * Gets a value that specifies the list schema of the list.
     */
    //SchemaXml(): IBase<string>;

    Subscriptions(): IBase<IBase>;

    TitleResource(): IBase<Types.SP.IResourcePath>;

    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions(): Types.SP.IUserCustomActions;

    /**
     * Gets the user custom action(s) for the list.
     * @param id - The id of the user custom action.
     */
    UserCustomActions(id: string): Types.SP.IUserCustomAction;

    /**
     * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
     */
    //ValidationFormula(): IBase<string>;

    /**
     * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
     */
    //ValidationMessage(): IBase<string>;

    /**
     * Gets the views in the list.
     */
    Views(): IViews;

    /**
     * Gets the view in the list.
     * @param id - The id of the view.
     */
    Views(id: string): IView;

    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    //WorkflowAssociations(): IBase<string>;

    //WriteSecurity(): IBase<number>;
}

/**
 * List Query Result
 */
export interface IListQueryResult extends IListMethods, SP.List {
    /**
     * Gets the content types that are associated with the list.
     */
    ContentTypes: IContentTypeResults;

    /**
     * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
     */
    //DataSource: SP.ListDataSource;

    /**
     * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
     */
    //DefaultDisplayFormUrl: string;

    /**
     * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    //DefaultEditFormUrl: string;

    /**
     * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    //DefaultNewFormUrl: string;

    /**
     * Gets the default list view.
    */
    DefaultView: IViewResult;

    /**
     * Gets the URL of the default view for the list.
     */
    //DefaultViewUrl: string;

    DescriptionResouce: Types.SP.IResourcePath;

    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    //EffectiveBasePermissions: Types.SP.IBasePermissions;

    /**
     * Gets a value that specifies the effective permissions on the list that are for the user export interface.
    */
    //EffectiveBasePermissionsForUI: Types.SP.IBasePermissions;

    /**
     * Gets the event receivers associated with the list.
    */
    EventReceivers: Types.SP.IEventReceiverResults;

    /**
     * Gets the fields in the list.
     */
    Fields: Types.SP.IFieldResults;

    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject: Types.SP.IWebResult;

    /**
     * Gets the list forms in the list.
     */
    Forms: Types.SP.IResults<Types.SP.IForm>;

    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    //HasUniqueRoleAssignments: boolean;

    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings: Types.SP.IInformationRightsManagementSettings;

    /**
     * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
     */
    //IsSiteAssetsLibrary: boolean;

    /**
     * Gets the list items in the list.
     */
    Items: IListItemResults;

    /**
     * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
     */
    //OnQuickLaunch: boolean;

    /**
     * Gets a value that specifies the site that contains the list.
     */
    ParentWeb: Types.SP.IWebResult;

    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments: Types.SP.IRoleAssignmentResults;

    /**
     * Gets the root folder of the list.
     */
    RootFolder: Types.SP.IFolderResult;

    /**
     * Gets a value that specifies the list schema of the list.
     */
    //SchemaXml: string;

    Subscriptions: Types.SP.IResults<Types.SP.ISubscription>;

    TitleResource: Types.SP.IResourcePath;

    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions: Types.SP.IUserCustomActionResults;

    /**
     * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
     */
    //ValidationFormula: string;

    /**
     * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
     */
    //ValidationMessage: string;

    /**
     * Gets the views in the list.
     */
    Views: IViewResults;

    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    WorkflowAssociations: Types.SP.IResults<string>;

    WriteSecurity: number;
}

/**
 * List Result
 */
export interface IListResult extends IListMethods, SP.List, IListQueryProps, IBase<IList, IListResult, IListQueryResult> { }

/**
 * List
 */
export interface IList extends IListMethods, IListQueryProps, IBase<IList, IListResult, IListQueryResult> { }