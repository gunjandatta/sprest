import { IAttachment, IAttachmentFiles, IBase, IBasePermissions, IContentTypeMethods, IFileMethods, IFolderMethods, IListMethods, IListItemMethods, IPropertyValues, IRoleAssignmentMethods, IRoleAssignments } from "..";
/**
 * List Item
 */
export interface IListItem extends IListItemMethods {
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
    ContentType(): IContentTypeMethods;
    /**
     * Gets a value that specifies the display name of the list item.
     */
    DisplayName: string;
    /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
    EffectiveBasePermissions: IBasePermissions;
    /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
    EffectiveBasePermissionsForUI: IBasePermissions;
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
    File(): IFileMethods;
    /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
    FileSystemObjectType: number;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): IBase<string>;
    /**
     * Gets a folder object that is associated with a folder item.
     */
    Folder(): IFolderMethods;
    GetDlpPolicyTip(): IBase;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments(): IBase<string>;
    IconOverlay: string;
    /** Gets a value that specifies the list item identifier. */
    Id: number;
    /**
     * Gets the parent list that contains the list item.
     */
    ParentList(): IListMethods;
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
    RoleAssignments(id: string): IRoleAssignmentMethods;
    ServerRedirectedEmbedUrl: string;
}
