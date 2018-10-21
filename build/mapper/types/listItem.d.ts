import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IContentType, IContentTypeResult, IList, IListResult } from ".";
/**
 * List Item Methods
 */
export interface IListItemMethods {
    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): IBase;
    /**
     * Deletes the list item.
     */
    delete(): IBase;
    /**
     * Gets the effective permissions that a specified user has on the list item.
     * @param loginName - The login name.
     */
    getUserEffectivePermissions(loginName: any): IBase;
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
    update(data: any): IBase;
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
     * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
     */
    validateUpdateListItem(formValues: any, bNewDocumentUpdate: any): any;
}
/**
 * List Item Query Properties
 */
export interface IListItemQueryProps {
    /**
     * Get the attachment collection.
     */
    AttachmentFiles(): Types.SP.IAttachmentFiles;
    /**
     * Gets the specified attachment file.
     * @param fileName - The filename of the attachment.
     */
    AttachmentFiles(fileName: string): IBase<SP.Attachment>;
    /**
     * Gets a value that specifies the content type of the list item.
     */
    ContentType(): IContentType;
    /**
     * Gets the values for the list item as HTML.
     */
    FieldValuesAsHtml(): IBase;
    /**
     * Gets the list item's field values as a collection of string values.
     */
    FieldValuesAsText(): IBase;
    /**
     * Gets the formatted values to be displayed in an edit form.
     */
    FieldValuesForEdit(): IBase;
    /**
     * Gets the file that is represented by the item from a document library.
     */
    File(): Types.SP.IFile;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): IBase<string>;
    /**
     * Gets a folder object that is associated with a folder item.
     */
    Folder(): Types.SP.IFolder;
    GetDlpPolicyTip(): IBase;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments(): IBase<string>;
    /**
     * Gets the parent list that contains the list item.
     */
    ParentList(): IList;
    /**
     * Property Bag
     */
    Properties(): IBase<Types.SP.IPropertyValues>;
    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments(): Types.SP.IRoleAssignments;
    /**
     * Gets the role assignment(s) for the securable object.
     * @param id - The role assignment id.
     */
    RoleAssignments(id: string): Types.SP.IRoleAssignment;
}
/**
 * List Item Query Result
 */
export interface IListItemQueryResult extends IListItemMethods, SP.ListItem {
    /**
     * Get the attachment collection.
     */
    AttachmentFiles: Types.SP.IAttachmentFilesMethods & Types.SP.Results.IResults<SP.Attachment>;
    /**
     * Gets a value that specifies the content type of the list item.
     */
    ContentType: IContentTypeResult;
    /**
     * Gets the values for the list item as HTML.
     */
    FieldValuesAsHtml: Array<string>;
    /**
     * Gets the list item's field values as a collection of string values.
     */
    FieldValuesAsText: Array<string>;
    /**
     * Gets the formatted values to be displayed in an edit form.
     */
    FieldValuesForEdit: Array<string>;
    /**
     * Gets the file that is represented by the item from a document library.
     */
    File: Types.SP.IFileResult;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject: IListResult;
    /**
     * Gets a folder object that is associated with a folder item.
     */
    Folder: Types.SP.IFolderResult;
    GetDlpPolicyTip(): IBase;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments: boolean;
    /**
     * Gets the parent list that contains the list item.
     */
    ParentList: IListResult;
    /**
     * Property Bag
     */
    Properties: Array<string>;
    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments: Types.SP.IRoleAssignmentResults;
}
/**
 * List Item Result
 */
export interface IListItemResult extends IListItemMethods, SP.ListItem, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
}
/**
 * List Item
 */
export interface IListItem extends IListItemMethods, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
}
