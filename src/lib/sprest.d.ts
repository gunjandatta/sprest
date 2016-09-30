// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: TBD

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
    interface AttachmentFiles {
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
    interface ContentType {
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
     * Content Types
     */
    interface ContentTypes {
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
     * Field
     */
    interface Field {
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
     * Field Links
     */
    interface FieldLinks {
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
    interface Fields {
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
     * File
     */
    interface File {
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
     * Files
     */
    interface Files {
        /**
         * Adds a file to this collection.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. Pass the content parameter in the request body. The maximum size of a binary file that you can add by using the REST API is 2 GB.
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
    interface FileVersion {
        /**
         * Deletes the file version.
         */
        delete():any;
    }

    /**
     * File Versions
     */
    interface FileVersions {
    }

    /**
     * Folder
     */
    interface Folder {
        /**
         * Adds a file to this folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. Pass the content parameter in the request body. The maximum size of a binary file that you can add by using the REST API is 2 GB.
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
     * Folders
     */
    interface Folders {
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
     * Group
     */
    interface Group {
        /**
         * Gets the user by the specified user id.
         * @param userId - The user id.
         */
        getUserById(userId);
    }

    /**
     * Limited Web Part Manager
     */
    interface LimitedWebPartManager {
        /**
         * Gets a webpart by its id.
         */
        get_WebParts(id);
    }

    /**
     * List
     */
    interface List {
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
     * Lists
     */
    interface Lists {

    }

    /**
     * List Item
     */
    interface ListItem {
    }

    /**
     * List Items
     */
    interface ListItems {
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
     * View
     */
    interface View {

    }
}
