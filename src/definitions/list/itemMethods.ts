import {
    IAttachment,
    IBase,
    IContentType,
    IFile,
    IFolder,
    IList,
    IListItem, IListItemQueryResults,
    IPropertyValues,
    IRoleAssignment
} from "..";

/**
 * List Item Methods
 */
export interface IListItemMethods extends IBase<IListItem, IListItemQueryResults> {
    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments, clearSubScopes): IBase;

    /**
     * Deletes the list item.
     */
    delete(): IBase;

    /**
     * Gets the effective permissions that a specified user has on the list item.
     * @param loginName - The login name.
     */
    getUserEffectivePermissions(loginName): IBase;

    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;

    /**
     * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
     */
    resetRoleInheritance(): IBase;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBase;

    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
     * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate);
}