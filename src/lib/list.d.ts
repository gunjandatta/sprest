declare module $REST.Types {
    /**
     * List
     */
    interface IList extends IBase {
        /**
         * Constructor
         * @param listName - The name of the list.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         * @param targetInfo - (Optional) The target information.
         */
        new(listName:string, executeRequestFl?:boolean, targetInfo?:Settings.TargetInfoSettings): IList;

        /**
         * Properties
         */

        /** Gets a value that specifies whether the list supports content types. */
        AllowContentTypes: string;

        /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
        BaseTemplate: string;

        /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
        BaseType: string;

        /**
         * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        BrowserFileHandling(executeRequestFl?:boolean): string;

        /**
         * Gets the content type(s) that are associated with the list.
         * @param id - (Optional) The id of the content type.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ContentTypes(id?:string, executeRequestFl?:boolean): IContentType | IContentTypes;

        /** Gets or sets a value that specifies whether content types are enabled for the list. */
        ContentTypesEnabled: string;

        /** Gets a value that specifies when the list was created. */
        Created: string;

        /**
         * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DataSource(executeRequestFl?:boolean): string;

        /** Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId: string;

        /**
         * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DefaultDisplayFormUrl(executeRequestFl?:boolean): string;

        /**
         * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DefaultEditFormUrl(executeRequestFl?:boolean): string;

        /**
         * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DefaultNewFormUrl(executeRequestFl?:boolean): string;

        /**
         * Gets the default list view.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
        */
        DefaultView(executeRequestFl?:boolean): IView;

        /**
         * Gets the URL of the default view for the list.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        DefaultViewUrl(executeRequestFl?:boolean): string;

        /** Gets or sets a value that specifies the description of the list. */
        Description: string;

        /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
        Direction: string;

        /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
        DocumentTemplateUrl: string;

        /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
        DraftVersionVisibility: string;

        /**
         * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        EffectiveBasePermissions(executeRequestFl?:boolean): any;

        /**
         * Gets a value that specifies the effective permissions on the list that are for the user interface.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
        */
        EffectiveBasePermissionsForUI(executeRequestFl?:boolean): any;

        /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments: string;

        /** Gets or sets a value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation: string;

        /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions: string;

        /** Gets or sets a value that specifies whether content approval is enabled for the list. */
        EnableModeration: string;

        /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning: string;

        /**  */
        EntityTypeName: string;

        /**
         * Gets the event receiver(s) associated with the list.
         * @param id - (Optional) The id of the event receiver.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
        */
        EventReceivers(id?:string, executeRequestFl?:boolean): IEventReceiver | IEventReceivers;

        /**
         * Gets the field(s) in the list.
         * @param internalNameOrTitle - (Optional) The internal name or title of the field.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Fields(internalNameOrTitle?:string, executeRequestFl?:boolean): IField | IFields;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        FirstUniqueAncestorSecurableObject(executeRequestFl?:boolean): string;

        /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout: string;

        /**
         * Gets the list form(s) in the list.
         * @param id - (Optional) The id of the form.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Forms(id?:string, executeRequestFl?:boolean): any;

        /** Gets a value that specifies whether the list is an external list. */
        HasExternalDataSource: string;

        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        HasUniqueRoleAssignments(executeRequestFl?:boolean): any;

        /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden: string;

        /** Gets the GUID that identifies the list in the database. */
        Id: string;

        /** Gets a value that specifies the URI for the icon of the list. */
        ImageUrl: string;

        /**
         * Gets a value that specifies the information rights management settings.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
        */
        InformationRightsManagementSettings(executeRequestFl?:boolean): any;

        /**  */
        IrmEnabled: string;

        /**  */
        IrmExpire: string;

        /**  */
        IrmReject: string;

        /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList: string;

        /** Gets a value that specifies whether the list is a gallery. */
        IsCatalog: string;

        /**  */
        IsPrivate: string;

        /**
         * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        IsSiteAssetsLibrary(executeRequestFl?:boolean): string;

        /** Gets a value that specifies the number of list items in the list. */
        ItemCount: string;

        /**
         * Gets the list item(s) in the list.
         * @param id - (Optional) The id of the list item.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Items(id?:number, executeRequestFl?:boolean): IListItem | IListItems;

        /** Gets a value that specifies the last time a list item was deleted from the list. */
        LastItemDeletedDate: string;

        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        LastItemModifiedDate: string;

        /**  */
        ListItemEntityTypeFullName: string;

        /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList: string;

        /** Gets or sets a value that specifies that the crawler must not crawl the list. */
        NoCrawl: string;

        /**
         * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        OnQuickLaunch(executeRequestFl?:boolean): string;

        /**
         * Gets a value that specifies the site that contains the list.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ParentWeb(executeRequestFl?:boolean): any;

        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        ParentWebUrl: string;

        /**
         * Gets the role assignment(s) for the securable object.
         * @param id - (Optional) The role assignment id.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        RoleAssignments(id?:string, executeRequestFl?:boolean): IRoleAssignment | IRoleAssignments;

        /**
         * Gets the root folder or file in the list.
         * @param url - (Optional) The url of the file within the root folder.
         * @param targetInfo - (Optional) The target information.
         */
        RootFolder(url?:string, executeRequestFl?:boolean): IFile | IFolder;

        /**
         * Gets a value that specifies the list schema of the list.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        SchemaXml(executeRequestFl?:boolean): string;

        /** Gets a value that indicates whether folders can be created within the list. */
        ServerTemplateCanCreateFolders: string;

        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
        TemplateFeatureId: string;

        /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        /**
         * Gets the user custom action(s) for the list.
         * @param id - (Optional) The id of the user custom action.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        UserCustomActions(id?:string, executeRequestFl?:boolean): IUserCustomAction | IUserCustomActions;

        /**
         * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ValidationFormula(executeRequestFl?:boolean): string;

        /**
         * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ValidationMessage(executeRequestFl?:boolean): string;

        /**
         * Gets the view(s) in the list.
         * @param id - (Optional) The id of the view.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Views(id?:string, executeRequestFl?:boolean): IView | IViews;

        /**
         * Gets a value that specifies the collection of all workflow associations for the list.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        WorkflowAssociations(executeRequestFl?:boolean): string;

        /**
         * Methods
         */

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id.
         */        
        addAvailableContentType(contentTypeId): IContentType;

        /**
         * Adds a content type to the collection.
         * @param parameters - The content type creation information.
         */
        addContentType(parameters:Settings.ContentTypeCreationInformation): IContentType;

        /**
         * Adds an event receiver to the collection.
         * @param parameters - The event receiver creation information.
         */
        addEventReceiver(parameters:Settings.EventReceiverDefinitionCreationInformation): IEventReceiver;

        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        addField(parameters:Settings.FieldCreationInformation): IField;

        /**
         * Adds a field, using it's Schema XML, to the field collection.
         * Defaulting the 'Options' to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemXml - The field schmea xml definition.
         */
        addFieldAsXml(schemaXml): IField;

        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookup(displayName, primaryLookupField, showField): IField;

        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        addItem(data): IListItem;

        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The principal id.
         * @param roleDefId - The role definition id.
         */
        addSiteGroup(principalId, roleDefId): IGroup;

        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): IFolder;

        /**
         * Adds an item to the list item collection.
         * @data - The view properties.
         */
        addView(data): IView;

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
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IList) => void): IList;

        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Gets a content type by the specified name.
         * @param name - The content type name.
         */
        getContentType(name): IContentType;

        /**
         * Gets a content type by the specified id.
         * @param contentTypeId - The content type id.
         */
        getContentTypeById(contentTypeId): IContentType;

        /**
         * Returns the list's default display form.
         */
        getDefaultDisplayForm(): IFile;

        /**
         * Returns the list's default edit form.
         */
        getDefaultEditForm(): IFile;

        /**
         * Returns the list's default new form.
         */
        getDefaultNewForm(): IFile;
        
        /**
         * Returns the list form based on the form type.
         * @formType - The form type.
         */
        getForm(formType:Types.PageType): IFile;
        
        /**
         * Gets the field with the specified field id.
         * @param fieldId - The field id.
         */
        getFieldById(fieldId): IField;

        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The field's internal name or title.
         */
        getFieldByInternalNameOrTitle(internalNameOrTitle): IField;

        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The field title.
         */
        getFieldByTitle(title);

        /**
         * Get the folder at the specified URL.
         * @param serverRelativeUrl - The server relative url of the folder.
         */
        getSubFolder(serverRelativeUrl): IFolder;
        
        /**
         * Returns the list item with the specified list item identifier.
         * @param id - The list item id.
         */
        getItemById(id): IListItem;

        /**
         * Returns an item based on the title.
         * @title - The item title;
         */
        getItemByTitle(title): IListItem;

        /**
         * Returns a collection of items from the list based on the view xml.
         * @param viewXml - The view xml CAML query.
         */
        getItems(viewXml): IListItems;

        /**
         * Returns a collection of items based on the filter.
         * @filter - The OData REST filter query.
         */
        getItemsByFilter(filter): IListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @camlQuery - The caml query.
         */
        getItemsByQuery(camlQuery): IListItems;

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
        getViewById(viewId): IView;

        /**
         * Returns the list view with the specified view identifier.
         * @param title - The view title.
         */
        getViewByTitle(title): IView;

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
         * @param mode - The SP.ControlMode of the control used to display the item.
         */
        renderListFormData(itemId, formId, mode:Types.ControlMode): any;

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
}
