import {
    IAttachment, IAttachmentFiles,
    IBase,
    IBasePermissions,
    IContentType,
    IFile,
    IFolder,
    IList,
    IPropertyValues,
    IResults,
    IRoleAssignment, IRoleAssignments
} from "..";

/**
 * List Item Methods
 */
export interface IListItemMethods {
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

/**
 * List Item Properties
 */
export interface IListItemProps {
    /**
     * Gets a value that specifies the display name of the list item.
     */
    DisplayName: string;

    /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
    EffectiveBasePermissions: IBasePermissions;

    /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
    EffectiveBasePermissionsForUI: IBasePermissions;

    /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
    FileSystemObjectType: number;

    IconOverlay: string;

    /** Gets a value that specifies the list item identifier. */
    Id: number;

    ServerRedirectedEmbedUrl: string;
}

/**
 * List Item Query Properties
 */
export interface IListItemQueryProps {
    /**
     * Get the attachment collection.
     */
    AttachmentFiles(): IBase<IAttachmentFiles>;

    /**
     * Gets the specified attachment file.
     * @param fileName - The filename of the attachment.
     */
    AttachmentFiles(fileName: string): IBase<IAttachment>;

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
    File(): IFile;

    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): IBase<string>;

    /**
     * Gets a folder object that is associated with a folder item.
     */
    Folder(): IFolder;

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
    Properties(): IBase<IPropertyValues>;

    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments(): IRoleAssignments;

    /**
     * Gets the role assignment(s) for the securable object.
     * @param id - The role assignment id.
     */
    RoleAssignments(id: string): IRoleAssignment;
}

/**
 * List Item Query Result
 */
export interface IListItemQueryResult extends IListItemMethods, IListItemProps {
    /**
     * Get the attachment collection.
     */
    AttachmentFiles: IResults<IAttachment>;

    /**
     * Gets a value that specifies the content type of the list item.
     */
    ContentType: IContentType;

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
    File: IFile;

    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject: IList;

    /**
     * Gets a folder object that is associated with a folder item.
     */
    Folder: IFolder;

    GetDlpPolicyTip(): IBase;

    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments: boolean;

    /**
     * Gets the parent list that contains the list item.
     */
    ParentList: IList;

    /**
     * Property Bag
     */
    Properties: Array<string>;

    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments: IResults<IRoleAssignment>;
}

/**
 * List Item Result
 */
export interface IListItemResult extends IListItemMethods, IListItemProps, IListItemQueryProps {}

/**
 * List Item
 */
export interface IListItem extends IListItemMethods, IListItemQueryProps, IBase<IListItemResult, IListItemQueryResult> {}