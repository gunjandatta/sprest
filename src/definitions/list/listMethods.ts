import { IListQueryResults } from "./listResults";
import {
    IBase,
    IContentType,
    IEventReceiver,
    IField,
    IFile,
    IFolder,
    IList,
    ILists,
    IListItem, IListItems,
    IRoleAssignment,
    ITargetInfo,
    IUserCustomAction,
    IView,
    SPTypes
} from "..";

/**
 * List Methods
 */
export interface IListMethods extends IBase<IList, IListQueryResults> {
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
     * A static method to get the list by the entity name.
     * @param entityTypeName - The entity type name of the list.
     * @param callback - The method to be executed after the request completes.
     */
    getByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?): IList;

    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query): IBase;

    /**
     * Returns the list item with the specified list item identifier.
     * @param id - The list item id.
     */
    getItemById(id): IListItem;

    /**
     * Returns a collection of items from the list based on the view xml.
     * @param viewXml - The view xml CAML query.
     */
    getItems(viewXml): IListItems;

    /**
     * Returns a collection of items from the list based on the specified query.
     * @camlQuery - The caml query.
     */
    getItemsByQuery(camlQuery): IListItems;

    /**
     * Returns a collection of items from the list based on the specified query.
     * @query - The query that contains the change token.
     */
    getListItemChangesSinceToken(query): IBase;

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
    getViewById(viewId): IView;

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
    renderListFormData(itemId, formId, mode: SPTypes.ControlMode): IBase;

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