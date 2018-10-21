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

    /**
     * Renders the list form data.
     * @param itemId - The item id.
     * @param formId - The identifier of the form.
     * @param mode - The SP.ControlMode of the control used to display the item.
     * Types of modes: 1 - Display, 2 - Edit, 3 - New
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
     * Gets the default list view.
    */
    DefaultView(): IView;

    DescriptionResouce(): IBase<SP.ResourcePath>;

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
     * Gets the list items in the list.
     */
    Items(): IListItems;

    /**
     * Gets the list item in the list.
     * @param id - The id of the list item.
     */
    Items(id: number | string): IListItem;

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

    Subscriptions(): IBase<IBase>;

    TitleResource(): IBase<SP.ResourcePath>;

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
     * Gets the views in the list.
     */
    Views(): IViews;

    /**
     * Gets the view in the list.
     * @param id - The id of the view.
     */
    Views(id: string): IView;
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
     * Gets the default list view.
    */
    DefaultView: IViewResult;

    DescriptionResouce: SP.ResourcePath;

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
    Forms: Types.SP.Results.IResults<SP.Form>;

    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings: SP.InformationRightsManagementSettings;

    /**
     * Gets the list items in the list.
     */
    Items: IListItemResults;

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

    Subscriptions: Types.SP.Results.IResults<SP.WorkflowServices.WorkflowSubscription>;

    TitleResource: SP.ResourcePath;

    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions: Types.SP.IUserCustomActionResults;

    /**
     * Gets the views in the list.
     */
    Views: IViewResults;

    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    WorkflowAssociations: Types.SP.Results.IResults<string>;

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