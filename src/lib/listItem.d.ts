declare module $REST.Types {
    /**
     * List Item
     */
    interface IListItem extends IBase {
        /**
         * Properties
         */

        /**
         * Specifies the collection of attachments that are associated with the list item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        AttachmentFiles(executeRequestFl?:boolean): IAttachmentFiles;

        /**
         * Gets a value that specifies the content type of the list item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ContentType(executeRequestFl?:boolean): IContentType;

        /**
         * Gets a value that specifies the display name of the list item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DisplayName(executeRequestFl?:boolean): string;

        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
        EffectiveBasePermissions: string;

        /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
        EffectiveBasePermissionsForUI: string;

        /**
         * Gets the values for the list item as HTML.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        FieldValuesAsHtml(executeRequestFl?:boolean): string;

        /**
         * Gets the list item's field values as a collection of string values.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        FieldValuesAsText(executeRequestFl?:boolean): string;

        /**
         * Gets the formatted values to be displayed in an edit form.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        FieldValuesForEdit(executeRequestFl?:boolean): string;

        /**
         * Gets the file that is represented by the item from a document library.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        File(executeRequestFl?:boolean): IFile;

        /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
        FileSystemObjectType: string;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        FirstUniqueAncestorSecurableObject(executeRequestFl?:boolean): string;

        /**
         * Gets a folder object that is associated with a folder item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Folder(): IFolder;

        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        HasUniqueRoleAssignments(executeRequestFl?:boolean): string;

        /** Gets a value that specifies the list item identifier. */
        Id: string;

        /**
         * Gets the parent list that contains the list item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ParentList(executeRequestFl?:boolean): IList;

        /**
         * Gets the role assignment(s) for the securable object.
         * @param id - (Optional) The role assignment id.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        RoleAssignments(id?:string, executeRequestFl?:boolean): IRoleAssignment | IRoleAssignments;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the attachment.
         * @param content - The contents of the file. Pass the content parameter in the request body. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addAttachment(name, content): any;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): any;

        /**
         * Deletes the list item.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IListItem) => void): IListItem;

        /**
         * Gets the effective permissions that a specified user has on the list item.
         * @param loginName - The login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;

        /**
         * Validates and sets the values of the specified collection of fields for the list item.
         * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
         * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
         */
        validateUpdateListItem(formValues, bNewDocumentUpdate);
    }
}
