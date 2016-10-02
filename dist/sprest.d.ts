// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/

declare module $REST {
    /**
     * Attachment Files
     */
    class AttachmentFiles {
        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the file to add.
         * @param contents - The file contents as an array buffer.
        **/
        add(name): any;
    }

    /**
     * Content Type
     */
    class ContentType {
        /**
         * Constructor
         * @param contentTypeName - The content type name to get.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(contentTypeName:string, listName?:string, ...args);

        /**
         * Adds a field link to the content type.
         * @param fieldLink - The field link.
         */
        addFieldLink(fieldLink): any;

        /**
         * Deletes the content type.
         */
        delete(): any;

        /**
         * Gets a field by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldByInternalName(name): any;

        /**
         * Gets a field by it's static name.
         * @param name - The static name of the field.
         */
        getFieldByStaticName(name): any;

        /**
         * Gets a field by it's title.
         * @param title - The title of the field.
         */
        getFieldByTitle(title): any;

        /**
         * Gets a field link by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldLinkByName(name): any;

        /**
         * Updates it's properties.
         * @param data - The content type properties to update.
         */
        update(data): any;
    }

    /**
     * Content Type (Asynchronous)
     */
    class ContentType_Async extends ContentType { }

    /**
     * Content Types
     */
    class ContentTypes {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Adds a content type to the collection.
         * @param data - The content type creation information.
         */
        add(data): ContentType;

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId): ContentType;

        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id): ContentType;

        /**
         * Gets a content type by name.
         * @param name - The name of the content type.
         */
        getByName(name);
    }

    /**
     * Content Types (Async)
     */
    class ContentTypes_Async extends ContentTypes { }

    /**
     * Field
     */
    class Field {
        /**
         * Constructor
         * @param internalNameOrTitle - The internal name or title of the field.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(internalNameOrTitle:string, listName?:string, ...args);

        /**
         * Deletes the field.
         */
        delete(): any;

        /**
         * Sets the value of the ShowInDisplayForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInDisplayForm(showInForm): any;

        /**
         * Sets the value of the ShowInEditForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInEditForm(showInForm): any;

        /**
         * Sets the value of the ShowInNewForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInNewForm(showInForm): any;

        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data): any;
    }

    /**
     * Field (Async)
     */
    class Field_Async extends Field { }

    /**
     * Field Links
     */
    class FieldLinks {
        /**
         * Adds a content type to the collection.
         * @param data - The field link properties.
         */
        add(data): any;

        /**
         * Gets the field link by its id.
         * @param id - The id of the field.
         */
        getById(id);

        /**
         * Gets a field by it's internal name.
         * @param name - The internal name of the field.
         */
        getFieldLinkByName(name): any;
    }

    /**
     * Fields
     */
    class Fields {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        add(parameters): Field;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookup(displayName, primaryLookupField, showField): Field;

        /**
         * Creates a field based on the specified schema, Boolean value, and field options.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        createFieldAsXml(schemaXml): Field;

        /**
         * Gets the field with the specified ID.
         * @param id - The field id.
         */
        getById(id): Field;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        getByInternalNameOrTitle(internalNameOrTitle): Field;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The title of the field.
         */
        getByTitle(title): Field;
    }

    /**
     * Fields (Async)
     */
    class Fields_Async extends Fields { }

    /**
     * File
     */
    class File {
        /**
         * Constructor
         * @param serverRelativeUrl - The server relative url of the file.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(serverRelativeUrl:string, listName?:string, ...args);

        /**
         * Approves the file submitted for content approval with the specified comment.
         * @param comment - The comment for the approval. It's length must be <= 1023.
         */
        approve(comment): any;

        /**
         * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         */
        cancelupload(uploadId): any;

        /**
         * Checks the file in to a document library based on the check-in type.
         * @param comment - The comment for the check-in. Its length must be <= 1023.
         * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
         */
        checkin(comment, checkInType): any;

        /**
         * Checks out the file from a document library based on the check-out type.
         */
        checkout(): any;

        /**
         * Returns the file content.
         */
        content(): any;

        /**
         * Continues the chunk upload session with an additional fragment. The current file content is not changed.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */
        continueUpload(uploadId, fileOffset): any;

        /**
         * Copies the file to the destination URL.
         * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
         * @param bOverWrite - True to overwrite a file with the same name in the location.
         */
        copyTo(strNewUrl, bOverWrite): any;

        /**
         * Deletes the File.
         */
        delete(): any;

        /**
         * Denies approval for a file that was submitted for content approval.
         * Only documents in lists that are enabled for content approval can be denied.
         * @param comment - The comment for the denial. It's length must be <= 1023.
         */
        deny(comment): any;

        /**
         * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */        
        finishUpload(uploadId, fileOffset): any;

        /**
         * Gets a value that specifies the user who added the file.
         */
        get_Author(): User;

        /**
         * Gets a value that returns the user who has checked out the file.
         */
        get_CheckedOutByUser(): any;

        /**
         * 
         */
        get_EffectiveInformationRightsManagementSettings(): any;

        /**
         * 
         */
        get_InformationRightsManagementSettings(): any;

        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         */
        get_ListItemAllFields(): any;

        /**
         * Gets a value that returns the user that owns the current lock on the file.
         */
        get_LockedByUser(): any;

        /**
         * Gets a value that returns the user who last modified the file.
         */
        get_ModifiedBy(): any;

        /**
         * 
         */
        get_Properties(): any;

        /**
         * 
         */
        get_VersionEvents(): any;

        /**
         * Gets a value that returns a collection of file version objects that represent the versions of the file.
         */
        get_Versions(): any;

        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         * @param scope - The webpart personalization scope: User - 0; Shared - 1
         */
        getlimitedwebpartmanager(scope): any;

        /**
         * Moves the file to the specified destination URL.
         * @param newUrl - The absolute url or server relative url of the destination file path to move to.
         * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
         */
        moveTo(newUrl, flags): any;

        /**
         * Opens the file as a stream.
         */
        openBinaryStream(): any;

        /**
         * Submits the file for content approval with the specified comment.
         * @param comment - The comment for the published file. It's length must be <= 1023.
         */
        publish(comment): any;

        /**
         * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Saves the file as a stream.
         * @param stream - The binary stream of the file.
         */
        saveBinaryStream(stream): any;

        /**
         * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
         * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
         * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
         * @param uploadId - The unique id of the upload session.
         */
        startUpload(uploadId): any;

        /**
         * Reverts an existing checkout for the file.
         */
        undoCheckOut(): any;

        /**
         * Removes the file from content approval or unpublish a major version.
         * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
         */
        unpublish(comment);

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }

    /**
     * File (Async)
     */
    class File_Async extends File { }

    /**
     * Files
     */
    class Files {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Adds a file to this collection.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(overwrite, url, content): File;

        /**
         * Adds a ghosted file to an existing list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file: StandardPage = 0; WikiPage = 1; FormPage = 2.
         */
        addTemplateFile(urlOfFile, templateFileType): any;

        /**
         * Gets the file for the specified name
         * @param name - The file name.
         */
        getByName(name): File;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The name or server relative url of the file.
         */
        getByUrl(serverRelativeUrl): File;
    }

    /**
     * File Version
     */
    class FileVersion {
        /**
         * Deletes the file version.
         */
        delete():any;
    }

    /**
     * Files (Async)
     */
    class Files_Async extends Files { }

    /**
     * File Versions
     */
    class FileVersions {
    }

    /**
     * Folder
     */
    class Folder {
        /**
         * Constructor
         * @param serverRelativeUrl - The server relative url of the folder.
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(serverRelativeUrl:string, listName?:string, ...args);

        /**
         * Adds a file to this folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addFile(url, overwrite, content): File;

        /**
         * Adds a ghosted file to this list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file: StandardPage = 0; WikiPage = 1; FormPage = 2.
         */
        addTemplateFile(urlOfFile, templateFileType): any;

        /**
         * Adds the sub-folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Deletes the folder.
         */
        delete(): any;

        /**
         * Gets the collection of all files contained in the list folder. You can add a file to a folder by using the Add method on the folder’s FileCollection resource.
         */
        get_Files(): Files;

        /**
         * Gets the collection of list folders contained in the list folder.
         */
        get_Folders(): Folders;

        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        get_ListItemAllFields(): any;

        /**
         * Gets the parent list folder of the folder.
         */
        get_ParentFolder(): Folder;

        /**
         * Gets the collection of all files contained in the folder.
         */
        get_Properties(): any;

        /**
         * 
         */
        get_StorageMetrics(): any;

        /**
         * Gets the file for the specified name.
         * @param name - The file name.
         */
        getFile(name): File;

        /**
         * Gets the folder for the specified name.
         * @param name - The folder name.
         */
        getSubFolder(name): Folder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl): Folder;

        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }

    /**
     * Folder (Async)
     */
    class Folder_Async extends Folder { }

    /**
     * Folders
     */
    class Folders {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        add(url): Folder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getbyurl(serverRelativeUrl);
    }

    /**
     * Folders (Async)
     */
    class Folders_Async extends Folders { }

    /**
     * Group
     */
    class Group {
        /**
         * Gets the user by the specified user id.
         * @param userId - The user id.
         */
        getUserById(userId);
    }

    /**
     * Limited Web Part Manager
     */
    class LimitedWebPartManager {
        /**
         * Gets a webpart by its id.
         */
        get_WebParts(id);
    }

    /**
     * List
     */
    class List {
        /**
         * Constructor
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, ...args);

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id.
         */        
        addAvailableContentType(contentTypeId): ContentType;

        /**
         * Adds a content type to the collection.
         * @param data - The content type creation information.
         */
        addContentType(data): ContentType;

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        addField(parameters): Field;

        /**
         * Adds a field, using it's Schema XML, to the field collection.
         * Defaulting the 'Options' to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemXml - The field schmea xml definition.
         */
        addFieldAsXml(schemaXml): Field;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookup(displayName, primaryLookupField, showField): Field;

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        addItem(data): ListItem;

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The principal id.
         * @param roleDefId - The role definition id.
         */
        addSiteGroup(principalId, roleDefId): Group;

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Adds an item to the list item collection.
         * @data - The view properties.
         */
        addView(data): View;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes);

        /**
         * Deletes the list.
         */
        delete(): any;

        /**
         * Gets the content types that are associated with the list.
         */
        get_ContentTypes(): ContentTypes;

        /**
         * 
         */
        get_CreatablesInfo(): any;

        /**
         * Gets the default view for the list.
         */
        get_DefaultView(): View;

        /**
         * 
         */
        get_DescriptionResource(): any;

        /**
         * Gets the collection of event receiver definitions associated with the list.
         */
        get_EventReceivers(): any;

        /**
         * Gets the collection of field objects associated with the list.
         */
        get_Fields(): Fields;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        get_FirstUniqueAncestorSecurableObject(): any;

        /**
         * Gets the collection of forms associated with the list.
         */
        get_Forms(): any;

        /**
         *
         */
        get_InformationRightsManagementSettings(): any;

        /**
         * Gets all the items in the list.
         */
        get_Items(): ListItems;

        /**
         * Gets a value that specifies the site that contains the list.
         */
        get_ParentWeb(): any;

        /**
         * Gets the collection of role assignments associated with the list.
         */
        get_RoleAssignments(): RoleAssignments;

        /**
         * Gets the root folder for the list.
         */
        get_RootFolder(): Folder;

        /**
         * 
         */
        get_Subscriptions(): any;

        /**
         * 
         */
        get_TitleResource(): any;

        /**
         * Gets a value that specifies the collection of user custom actions associate with the list.
         */
        get_UserCustomActions(): UserCustomActions;

        /**
         * Gets a value that specifies the collection of all views associated with the list.
         */
        get_Views(): Views;

        /**
         * Gets a value that specifies the collection of all workflow associations for the list.
         */
        get_WorkflowAssociations(): any;

        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Gets a content type by the specified name.
         * @param name - The content type name.
         */
        getContentType(name): ContentType;

        /**
         * Gets a content type by the specified id.
         * @param contentTypeId - The content type id.
         */
        getContentTypeById(contentTypeId): ContentType;

        /**
         * Returns the list's default display form.
         */
        getDefaultDisplayForm(): File;

        /**
         * Returns the list's default edit form.
         */
        getDefaultEditForm(): File;

        /**
         * Returns the list's default new form.
         */
        getDefaultNewForm(): File;
        
        /**
         * Returns the list form based on the form type.
         * @formType - The form type.
         */
        getForm(formType): File;
        
        /**
         * Gets the field with the specified field id.
         * @param fieldId - The field id.
         */
        getFieldById(fieldId): Field;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The field's internal name or title.
         */
        getFieldByInternalNameOrTitle(internalNameOrTitle): Field;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The field title.
         */
        getFieldByTitle(title);

        /**
         * Get the folder at the specified URL.
         * @param serverRelativeUrl - The server relative url of the folder.
         */
        getSubFolder(serverRelativeUrl): Folder;
        
        /**
         * Returns the list item with the specified list item identifier.
         * @param id - The list item id.
         */
        getItemById(id): ListItem;

        /**
         * Returns an item based on the title.
         * @title - The item title;
         */
        getItemByTitle(title): ListItem;

        /**
         * Returns a collection of items from the list based on the view xml.
         * @param viewXml - The view xml CAML query.
         */
        getItems(viewXml): ListItems;

        /**
         * Returns a collection of items based on the filter.
         * @filter - The OData REST filter query.
         */
        getItemsByFilter(filter): ListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @camlQuery - The caml query.
         */
        getItemsByQuery(camlQuery): ListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @query - The query that contains the change token.
         */
        getListItemChangesSinceToken(query): any;

        /**
         * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
         */
        getRelatedFields(): any;

        /**
         * Gets the effective user permissions for the current user.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Returns the list view with the specified view identifier.
         * @param viewId - The view id.
         */
        getViewById(viewId): View;

        /**
         * Returns the list view with the specified view identifier.
         * @param title - The view title.
         */
        getViewByTitle(title): View;

        /**
         * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Renders the list data.
         * @param viewXml - A CAML query that defines the items and fields that you want returned.
         */
        renderListData(viewXml): any;

        // 
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        /**
         * Renders the list form data.
         * @param itemId - The item id.
         * @param formId - The identifier of the form.
         * @param mode - The SP.ControlMode of the control used to display the item: 1 = Display; 2 = Edit; 3 = New.
         */
        renderListFormData(itemId, formId, mode): any;

        /**
         * Reserves a list item ID for idempotent list item creation.
         */
        reserveListItemId(): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * List (Async)
     */
    class List_Async extends List { }

    /**
     * List Item
     */
    class ListItem {
        /**
         * Constructor
         * @param itemId - The item id.
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(itemId:number, listName:string, ...args);

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
         * Specifies the collection of attachments that are associated with the list item.
         */
        get_AttachmentFiles(): AttachmentFiles;

        /**
         * Gets a value that specifies the content type of the list item.
         */
        get_ContentType(): ContentType;

        /**
         * Gets the values for the list item as HTML.
         */
        get_FieldValuesAsHtml(): any;

        /**
         * Gets the list item's field values as a collection of string values.
         */
        get_FieldValuesAsText(): any;

        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        get_FieldValuesForEdit(): any;

        /**
         * Gets the file that is represented by the item from a document library.
         */
        get_File(): File;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        get_FirstUniqueAncestorSecurableObject(): any;

        /**
         * Gets a folder object that is associated with a folder item.
         */
        get_Folder(): Folder;

        /**
         * 
         */
        get_GetDlpPolicyTip(): any;

        /**
         * Gets the parent list that contains the list item.
         */
        get_ParentList(): List;

        /**
         * Gets the role assignments for the securable object.
         */
        get_RoleAssignments(): RoleAssignment;

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

    /**
     * List Item (Async)
     */
    class ListItem_Async extends ListItem { }

    /**
     * List Items
     */
    class ListItems {
        /**
         * Constructor
         * @param listName - The list name.
         * @param camlQuery - (Optional) The caml query.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, camlQuery?:string, ...args);
        
        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        add(data): ListItem;

        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id): ListItem;
    }

    /**
     * List Items (Async)
     */
    class ListItems_Async extends ListItems { }

    /**
     * Lists
     */
    class Lists {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Adds a list to the list collection.
         * @param data - The list creation information.
         */
        add(data): List;

        /**
         * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
         */
        ensureSiteAssetsLibrary(): any;

        /**
         * Gets a list that is the default location for wiki pages.
         */
        ensureSitePagesLibrary(): any;

        /**
         * Returns the list with the specified list identifier.
         * @param id - The list id.
         */
        getById(id): List;

        /**
         * Returns the list with the specified title from the collection.
         * @param title - The list title.
         */
        getByTitle(title): List;
    }

    /**
     * Lists (Async)
     */
    class Lists_Async extends Lists { }

    /**
     * Role Assignment
     */
    class RoleAssignment {
        /**
         * Deletes the role assignment.
         */
        delete(): any;
    }

    /**
     * RoleAssignments
     */
    class RoleAssignments {
        /**
         * Constructor
         * @param listName - (Optional) The list name to search.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName?:string, ...args);

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        addRoleAssignment(principalId, roleDefId): RoleAssignment;

        /**
         * Gets the role assignment associated with the specified principal ID from the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         */
        getByPrincipalId(principalId): RoleAssignment;

        /**
         * Gets the role definition with the specified role type.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        removeRoleAssignment(principalId, roleDefId): any;
    }

    /**
     * Role Assignments (Async)
     */
    class RoleAssignments_Async extends RoleAssignments { }

    /**
     * Role Definition
     */
    class RoleDefinition {
        /**
         * Deletes the role definition.
         */
        delete(): any;
    }

    /**
     * Role Definitions
     */
    class RoleDefinitions {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId): RoleDefinition;

        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name): RoleDefinition;

        /**
         * Gets the role definition with the specified role type.
         * @param type - The RoleTypeKind of the role definition.
         * Role Definition Types:
         * 0 - None
         * 1 - Gues
         * 2 - Reader
         * 3 - Contributor
         * 4 - Web Designer
         * 5 - Administrator
         * 6 - Editor
         */
        getByType(type): RoleDefinition;
    }

    /**
     * Role Definitions (Async)
     */
    class RoleDefinitions_Async extends RoleDefinitions { }

    /**
     * Site
     */
    class Site {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Adds a custom action to the user custom action collection.
         * data - The user custom action information.
         */
        addCustomAction(data): UserCustomAction;

        /**
         * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
         * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
         * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
         */
        createPreviewSPSite(upgrade, sendEmail): any;
        
        /**
         * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
         */
        extendUpgradeReminderDate(): any;
        
        /**
         * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
         * @param typeCatalog - Specifies the list template type for the gallery.
         */
        getCatalog(typeCatalog): any;
        
        /**
         * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Gets a custom action by it's name or title.
         * @param title - THe user custom action title.
         */
        getCustomAction(title): UserCustomAction;
        
        /**
         * Specifies the collection of custom list templates for a given site.
         * @param web - Specifies the site that contains the custom list templates to be returned.
         */
        getCustomListTemplates(web): any;
        
        /**
         * Returns the collection of site definitions that are available for creating Web sites within the site collection.
         * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
         * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
         */
        getWebTemplates(LCID, overrideCompatLevel): any;
        
        /**
         * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
         */
        invalidate(): any;
        
        /**
         * Returns true if the object needs to be upgraded; otherwise, false.
         * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
         * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
         */
        needsUpgradeByType(versionUpgrade, recursive): any;
        
        /**
         * Returns the site at the specified URL.
         * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
         */
        openWeb(strUrl): Web;
        
        /**
         * Returns the site with the specified GUID.
         * @param gWebId - A GUID that specifies which site to return.
         */
        openWebById(gWebId): Web;
        
        /**
         * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
         * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
         * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
         * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
         */
        runHealthCheck(ruleId, bRepair, bRunAlways): any;
        
        /**
         * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
         * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
         * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
         * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
         */
        runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail): any;

        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        sendEmail(properties): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
        
        /**
         * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         */
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs): any;
    }

    /**
     * Site (Async)
     */
    class Site_Async extends Site { }

    /**
     * Site Groups
     */
    class SiteGroups {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Returns a group from the collection based on the member ID of the group.
         * @param id - The site group id.
         */
        getById(id): Group;

        /**
         * Returns a cross-site group from the collection based on the name of the group.
         * @param name - The name of the group. The group name is specified in its LoginName property.
         */
        getByName(name): Group;

        /**
         * Removes the group with the specified member ID from the collection.
         * @param id - The ID of the group to remove.
         */
        removeById(id): any;

        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name): any;
    }

    /**
     * Site Groups (Async)
     */
    class SiteGroups_Async extends SiteGroups { }

    /**
     * User
     */
    class User {
        /**
         * Constructor
         * @param userId - The user id.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(userId:number, ...args);

        /**
         * Deletes the user custom action.
         */
        delete(): any;
    }

    /**
     * User (Async)
     */
    class User_Async extends User { }

    /**
     * User Custom Action
     */
    class UserCustomAction {
        /**
         * Deletes the user custom action.
         */
        delete(): any;
    }

    /**
     * User Custom Actions
     */
    class UserCustomActions {
        /**
         * Constructor
         * @param webFl - True to search the web, false to search the site.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(webFl?:boolean, ...args);

        /**
         * Adds a custom actino to the user custom action collection. 
         * @param data - The user custom action information.
         */
        add(data): UserCustomAction;

        /**
         * Deletes all custom actions in the collection.
         */
        clear(): any;

        /**
         * Returns the custom action with the specified identifier.
         * @param id - The ID of the user custom action to get.
         */
        getById(id): UserCustomAction;

        /**
         * Returns the user custom action based on the name of the specified user custom action.
         * @param name - The user custom action name.
         */
        getByName(name): UserCustomAction;

        /**
         * Returns the user custom action based on the title of the specified user custom action.
         * @param title - The user custom action title.
         */
        getByTitle(title): UserCustomAction;
    }

    /**
     * User Custom Actions (Async)
     */
    class UserCustomActions_Async extends UserCustomActions { }

    /**
     * Users
     */
    class Users {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Gets the user with the specified email address.
         * @param email - The email of the user to get.
         */
        getByEmail(email): User;

        /**
         * Gets the user with the specified member identifier (ID).
         * @param id - The ID of the user to get.
         */
        getById(id): User;

        /**
         * Gets the user with the specified login name.
         * @param loginName - The login name of the user to get, passed as an alias in the query string.
         */
        getByLoginName(loginName): User;

        /**
         * Removes the user with the specified ID.
         * @param id - The ID of the user to remove.
         */
        removeById(id): any;

        /**
         * Removes the user with the specified login name.
         * @param loginName - The login name of the user to remove.
         */
        removeByLoginName(loginName): any;
    }

    /**
     * Users (Async)
     */
    class Users_Async extends Users { }

    /**
     * Versions
     */
    class Version {
        /**
         * Gets the version with the specified ID.
         * @param id - The version id to get.
         */
        getById(id): any;

        /**
         * Deletes all versions in the collection.
         */
        deleteAll(): any;

        /**
         * Deletes a version, by the specified id.
         * @param id - The version id to delete.
         */
        deleteById(id): any;

        /**
         * Deletes a version, by the specified label.
         * @param label - The version label to delete.
         */
        deleteByLabel(label): any;

        /**
         * Restores a version, by the specified label.
         * @param label - The version label to restore.
         */
        restoreByLabel(label): any;
    }

    /**
     * View
     */
    class View {
        /**
         * Constructor
         * @param viewName - The view name.
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(viewName:string, listName:string, ...args);

        /**
         * Deletes the view.
         */
        delete(): any;

        /**
         * Returns the list view as HTML.
         */
        renderAsHtml(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * View (Async)
     */
    class View_Async extends View { }

    /**
     * View Fields
     */
    class ViewFields {
        /**
         * Adds the field with the specified field internal name or display name to the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        addViewField(fieldName): any;

        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         * @param field - The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example.
         * @param index - The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example.
         */
        moveViewFieldTo(field, index): any;

        /**
         * Removes all the fields from the collection.
         */
        removeAllViewFields(): any;

        /**
         * Removes the field with the specified field internal name from the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        removeViewField(fieldName): any;
    }

    /**
     * Views
     */
    class Views {
        /**
         * Constructor
         * @param listName - The list name.
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(listName:string, ...args);

        /**
         * Gets the list view with the specified ID.
         * @param id - The ID of the view.
         */
        getById(id): View;

        /**
         * Gets the list view with the specified title.
         * @param title - The case-sensitive title of the view.
         */
        getByTitle(title): View;
    }

    /**
     * Views (Async)
     */
    class Views_Async extends Views { }

    /**
     * Web
     */
    class Web {
        /**
         * Constructor
         * @param args - (Optional) executeRequestFl and/or targetInfo.
         */
        constructor(...args);

        /**
         * Adds a content type content type collection.
         * @param data - The content type creation information.
         */
        addContentType(data): ContentType;

        /**
         * Adds a custom action to the user custom action collection.
         * @param data - The content type creation information.
         */
        addCustomAction(data): UserCustomAction;

        /**
         * Adds an existing content type to content type collection.
         * @param contentTypeId - The content type id to add.
         */
        addExistingContentType(contentTypeId): ContentType;

        /**
         * Adds a field to it's collection.
         * @param parameters - The field creation information.
         */
        addField(parameters): Field;

        /**
         * Adds a field, using it's Schema XML, to the field collection.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        addFieldAsXml(schemaXml): Field;

        /**
         * Adds a file to the root folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addFile(overwrite, url, content): File;

        /**
         * Adds a list to the list collection.
         * @param data - The list creation information.
         */
        addList(data): List;

        /**
         * Adds a permission to the role definitions.
         * @param data - The role definition information.
         */
        addPermission(data);

        /**
         * Adds a site group to the site group collection.
         * @param title - The site group title.
         */
        addSiteGroup(title): Group;

        /**
         * Adds a sub-folder to the root folder.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): Folder;

        /**
         * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
         * @param colorpaletteurl - The server-relative URL of the color palette file.
         * @param fontschemeurl - The server-relative URL of the font scheme.
         * @param backgroundimageurl - The server-relative URL of the background image.
         * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
         */
        applyTheme(colorpaletteurl, fontschemeurl, backgroundimageurl, sharegenerated): any;

        /**
         * Applies the specified site definition or site template to the Web site that has no template applied to it.
         * @param name - The site definition or web template name to apply.
         */
        applyWebTemplate(name): any;

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes): any;

        /**
         * Deletes the web.
         */
        delete(): any;

        /**
         * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
         * @param id - The ID of the device app instance.
         */
        doesPushNotificationSubscriberExist(id): any;
        
        /**
         * Returns whether the current user has the given set of permissions.
         * @param high - The highest permission range value.
         * @param low - The lowest permission range value.
         */
        doesUserHavePermissions(high, low): any;

        /**
         * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
         * @param logonName - The login name of the user. Pass the logonName parameter in the request body, as shown in the request example.
         */
        ensureUser(logonName): any;
        
        /**
         * Sends data to an OData service.
         * @param inputStream - The OData input object. Used for create or update operations only.
         */
        executeRemoteLOB(inputStream): any;

        /**
         * Gets a collection of metadata for the Web site.
         */
        get_AllProperties(): any;

        /**
         * 
         */
        get_AppTiles(): any;

        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        get_AssociatedMemberGroup(): any;

        /**
         * Gets or sets the associated owner group of the Web site.
         */
        get_AssociatedOwnerGroup(): any;

        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        get_AssociatedVisitorGroup(): any;

        /**
         * 
         */
        get_Author(): any;

        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        get_AvailableContentTypes(): any;

        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        get_AvailableFields(): any;

        /**
         * 
         */
        get_ClientWebParts(): any;

        /**
         * Gets the collection of content types for the Web site.
         */
        get_ContentTypes(): ContentTypes;

        /**
         * Gets the current user of the site.
         */
        get_CurrentUser(): User;

        /**
         * 
         */
        get_DataLeakagePreventionStatusInfo(): any;

        /**
         * 
         */
        get_DescriptionResource(): any;

        /**
         * Gets the collection of event receiver definitions that are currently available on the website.
         */
        get_EventReceivers(): any;

        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        get_Features(): any;

        /**
         * Gets the collection of field objects that represents all the fields in the Web site.
         */
        get_Fields(): Fields;

        /**
         * Gets the collection of all first-level files in the Web site.
         */
        get_Files(): Files;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        get_FirstUniqueAncestorSecurableObject(): any;

        /**
         * Gets the collection of all first-level folders in the Web site.
         */
        get_Folders(): Folders;

        /**
         * Gets the collection of all lists that are contained in the Web site available to the current user based on the permissions of the current user.
         */
        get_Lists(): Lists;

        /**
         * Gets a value that specifies the collection of list definitions and list templates available for creating lists on the site.
         */
        get_ListTemplates(): any;

        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        get_Navigation(): any;

        /**
         * Gets the parent website of the specified website.
         */
        get_ParentWeb(): any;

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        get_PushNotificationSubscribers(): any;

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        get_RecycleBin(): any;

        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        get_RegionalSettings(): any;

        /**
         * Gets the collection of role assignments for the Web site.
         */
        get_RoleAssignments(): RoleAssignments;

        /**
         * Gets the collection of role definitions for the Web site.
         */
        get_RoleDefinitions(): RoleDefinitions;

        /**
         * Gets the root folder for the Web site.
         */
        get_RootFolder(): Folder;

        /**
         * Gets the collection of groups for the site collection.
         */
        get_SiteGroups(): SiteGroups;

        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        get_SiteUserInfoList() : any;

        /**
         * Gets the collection of all users that belong to the site collection.
         */
        get_SiteUsers(): Users;

        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        get_ThemeInfo(): any;

        /**
         * 
         */
        get_TitleResource(): any;

        /**
         * Gets a value that specifies the collection of user custom actions for the site.
         */
        get_UserCustomActions(): UserCustomActions;

        /**
         * Represents key properties of the subsites of a site.
         */
        get_WebInfos(): any;

        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        get_Webs(): Webs;

        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        get_WorkflowAssociations(): any;

        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        get_WorkflowTemplates(): any;
        
        /**
         * Gets the app BDC catalog.
         */
        getAppBdcCatalog(): any;
        
        /**
         * Gets the app BDC catalog for the specified app instance.
         * @param id - The ID of the app instance.
         */
        getAppBdcCatalogForAppInstance(id): any;
        
        /**
         * Retrieves an AppInstance installed on this Site.
         * @param id - The ID of the app instance.
         */
        getAppInstanceById(id): any;
        
        /**
         * Retrieves all AppInstances installed on this site that are instances of the specified App.
         * @param id - The product ID of the app.
         */
        getAppInstancesByProductId(id): any;
        
        /**
         * Returns a collection of site templates available for the site.
         * @param lcid - The LCID of the site templates to get.
         * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
         */
        getAvailableWebTemplates(lcid, doIncludeCrossLanguage): any;
        
        /**
         * Returns the list gallery on the site.
         * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
         */
        getCatalog(galleryType): any;

        /**
         * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;
        
        /**
         * Gets the context information for the site. Static method.
         */
        getContextWebInformation(): any;

        /**
         * Gets a custom action by it's name or title.
         * @param title - The user custom action title.
         */
        getCustomAction(title): UserCustomAction;
        
        /**
         * Gets the custom list templates for the site.
         */
        getCustomListTemplates(): any;
        
        /**
         * Gets the document libraries on a site. Static method. (SharePoint Online only)
         * @param url - The full URL of the site.
         */
        getDocumentLibraries(url): any;

        /**
         * Gets the specified external content type in a line-of-business (LOB) system application.
         * @param namespace - The namespace of the external content type.
         * @param name - The name of the external content type.
         */
        getEntity(namespace, name): any;

        /**
         * Gets a field by it's title, internal name or static name.
         * @param title - The field title.
         */
        getField(title): Field;

        /**
         * Gets a field by it's id.
         * @param id - The field id.
         */
        getFieldById(id): Field;

        /**
         * Gets a field by it's internal name.
         * @param name - The internal field name.
         */
        getFieldByInternalName(name): Field;

        /**
         * Gets a field by it's static name.
         * @param staticName - The static field name.
         */
        getFieldByStaticName(name): Field;

        /**
         * Gets a field by it's title.
         * @param title - The field title.
         */
        getFieldByTitle(title): Field;

        /**
         * Gets a file by it's name, in the root folder.
         * @param name - The file name.
         */
        getFile(name): File;
        
        /**
         * Returns the file object located at the specified server-relative URL.
         * @param url - The server relative url of the file.
         */
        getFileByServerRelativeUrl(url): File;

        /**
         * Returns the folder object located at the specified server-relative URL.
         * @param url - The server relative url of the folder.
         */
        getFolderByServerRelativeUrl(url): Folder;

        /**
         * Gets the list at the specified site-relative URL. (SharePoint Online only)
         * @param url - The server relative url of the list.
         */
        getList(url): List;

        /**
         * Gets a list by it's id.
         * @param id - The list id.
         */
        getListById(id): List;

        /**
         * Gets the list for the specified title.
         * @param title - The list title.
         */
        getListByTitle(title): List;

        /**
         * Gets the push notification subscriber over the site for the specified device application instance ID.
         * @param id - The ID of the device app instance.
         */
        getPushNotificationSubscriber(id): any;

        /**
         * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
         * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
         */
        getPushNotificationSubscribersByArgs(args): any;

        /**
         * Queries for the push notification subscribers over the site for the specified user.
         * @param loginName - The login name of the user.
         */
        getPushNotificationSubscribersByUser(loginName): any;

        /**
         * Gets a sub-folder by it's name, from the root folder.
         * @param name - The folder name.
         */
        getSubFolder(name): Folder;

        /**
         * Gets a site group by it's id.
         * @param id - The site group id.
         */
        getSiteGroupById(id): Group;

        /**
         * Gets a site group by it's name.
         * @param name - The site group name.
         */
        getSiteGroupByName(name): Group;

        /**
         * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
         * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
         * @param nConfigurationFilter - The ID of the site template used to provision the sites.
         */
        getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter): any;

        /**
         * Gets a user by login name.
         * @param email - The user email.
         */
        getUserByEmail(email): User;

        /**
         * Returns the user corresponding to the specified member identifier for the current site.
         * @param id - The user id.
         */
        getUserById(id): User;

        /**
         * Gets a user by login name.
         * @param loginName - The user login name.
         */
        getUserByLogin(loginName): User;

        /**
         * Gets the effective permissions that the specified user has within the current application scope.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Gets the site URL from a page URL. Static method.
         * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
         */
        getWebUrlFromPageUrl(url);

        /**
         * Uploads and installs an app package to this site.
         * @param appPackageStream - The app package stream.
         */
        loadAndInstallApp(appPackageStream): any;

        /**
         * Uploads and installs an App package on the site in a specified locale.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID): any;

        /**
         * Uploads an App package and creates an instance from it.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadApp(appPackageStream, installationLocaleLCID): any;

        /**
         * Returns the name of the image file for the icon that is used to represent the specified file.
         * @param filename - The file name. If this parameter is empty, the server returns an empty string.
         * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
         * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
         */
        mapToIcon(filename, progid, size): any;

        /**
         * Processes a notification from an external system.
         * @param stream - The notification message from the external system.
         */
        processExternalNotification(stream): any;

        /**
         * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
         * @param deviceAppInstanceId - The ID of the device app instance.
         * @param serviceToken - The token provided by the notification service to the device to receive notifications.
         */
        registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        sendEmail(properties): any;

        /**
         * Unregisters the subscriber for push notifications from the site.
         * @param id - The ID of the device app instance.
         */
        unregisterPushNotificationSubscriber(id): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }

    /**
     * Web (Async)
     */
    class Web_Async extends Web { }

    /**
     * Webs
     */
    class Webs {
        /**
         * Adds a site to the site collection.
         * @param parameters - The web creation information.
         */
        add(parameters);
    }
}
