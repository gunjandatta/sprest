declare module $REST.Types {
    /**
     * Web
     */
    interface IWeb extends IBase {
        /**
         * Constructor
         * @param url - (Optional) The web url.
         * @param targetInfo - (Optional) The target information.
         */
        new(url?:string, targetInfo?:Settings.TargetInfoSettings): IWeb;

        /**
         * Properties
         */

        /**
         * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
         */
        AllowCreateDeclarativeWorkflowForCurrentUser(): any;

        /**
         * Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.
         */
        AllowDesignerForCurrentUser(): any;

        /**
         * Gets a value that specifies whether the current user is allowed to edit the master page.
         */
        AllowMasterPageEditingForCurrentUser(): any;

        /**
         * Gets a value that specifies whether the current user is allowed to revert the site to a default site template.
         */
        AllowRevertFromTemplateForCurrentUser(): any;

        /** Gets a value that specifies whether the site allows RSS feeds. */
        AllowRssFeeds: string;

        /**
         * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
         */
        AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser(): any;

        /**
         * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
         */
        AllowSavePublishDeclarativeWorkflowForCurrentUser(): any;

        /**
         * Gets a collection of metadata for the Web site.
         */
        AllProperties(): any;

        /** The instance Id of the App Instance that this web represents. */
        AppInstanceId: string;

        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        AssociatedMemberGroup(): IGroup;

        /**
         * Gets or sets the associated owner group of the Web site.
         */
        AssociatedOwnerGroup(): IGroup;

        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        AssociatedVisitorGroup(): IGroup;

        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        AvailableContentTypes(): any;

        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        AvailableFields(): any;

        /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
        Configuration: string;

        /**
         * Gets the content types that are associated with the web.
         */
        ContentTypes(): IContentTypes;

        /**
         * Gets the content type that are associated with the web.
         * @param id - The id of the content type.
         */
        ContentTypes(id:string): IContentType;

        /** Gets a value that specifies when the site was created. */
        Created: string;

        /**
         * Gets the current user of the site.
         */
        CurrentUser(): IUser;

        /** Gets or sets the URL for a custom master page file to apply to the website. */
        CustomMasterUrl: string;

        /** Gets or sets the description for the site. */
        Description: string;

        /**
         * Gets the URL where the current user can download SharePoint Designer.
         */
        DesignerDownloadUrlForCurrentUser(): any;

        /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
        DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: string;

        /**
         * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
         */
        EffectiveBasePermissions(): string;

        /** Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
        EnableMinimalDownload: string;

        /**
         * Gets the event receivers associated with the web.
        */
        EventReceivers(): IEventReceivers;

        /**
         * Gets the event receiver associated with the web.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id:string): IEventReceiver;

        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        Features(): any;

        /**
         * Gets the fields in the web.
         */
        Fields(): IFields;

        /**
         * Gets the field in the web.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle:string): IField;

        /**
         * Gets the folders contained in the root folder.
         */
        Folders(): IFolders;

        /**
         * Gets the folder contained in the root folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url:string): IFolder;

        /** Gets a value that specifies the site identifier for the site. */
        Id: string;

        /** Gets a value that specifies the LCID for the language that is used on the site. */
        Language: string;

        /** Gets a value that specifies when an item was last modified in the site. */
        LastItemModifiedDate: string;

        /**
         * Gets the lists in the Web.
         */
        Lists(): ILists;

        /**
         * Gets the list in the Web.
         * @param name - The list name.
         */
        Lists(name:string): IList;

        /**
         * Gets the list definitions and list templates available for creating lists on the site.
         */
        ListTemplates(): any;

        /**
         * Gets the list definition or list template available for creating lists on the site.
         * @param name - The list template form name.
         */
        ListTemplates(name:string): any;

        /** Gets or sets the URL of the master page that is used for the website. */
        MasterUrl: string;

        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        Navigation(): any;

        /**
         * Gets the parent website of the specified website.
         */
        ParentWeb(): any;

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        PushNotificationSubscribers(): any;

        /** Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. */
        QuickLaunchEnabled: string;

        /**
         * Specifies the collection of recycle bin items of the recycle bin of the site.
         */
        RecycleBin(): any;

        /** Gets or sets a value that determines whether the recycle bin is enabled for the website. */
        RecycleBinEnabled: string;

        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        RegionalSettings(): any;

        /**
         * Gets the role definitions for the web.
         */
        RoleDefinitions(): IRoleDefinitions;

        /**
         * Gets the role definitions for the web.
         * @param name - The role definition name.
         */
        RoleDefinitions(name:string): IRoleDefinition;

        /**
         * Gets the root folder in the web.
         */
        RootFolder(): IFolder;

        /**
         * Gets the file in the web's root folder.
         * @param url - (Optional) The url of the file within the root folder.
         */
        RootFolder(url:string): IFile;

        /**
         * Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.
         */
        SaveSiteAsTemplateEnabled(): any;

        /** Gets or sets the server-relative URL for the Web site. */
        ServerRelativeUrl: string;

        /**
         * Gets a value that specifies whether the current user is able to view the file system structure of this site.
         */
        ShowUrlStructureForCurrentUser(): any;

        /**
         * Gets the site groups for the web.
         */
        SiteGroups(): ISiteGroups;

        /**
         * Gets the site groups for the web.
         * @param name - The group name.
         */
        SiteGroups(name:string): IGroup;

        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        SiteUserInfoList(): any;

        /**
         * Gets the collection of all users that belong to the site collection.
         */
        SiteUsers(): IUsers;

        /**
         * Gets the collection of all users that belong to the site collection.
         * @param id - The user id.
         */
        SiteUsers(id): IUser;

        /**
         * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
         */
        SupportedUILanguageIds(): any;

        /** Gets or sets a value that specifies whether the RSS feeds are enabled on the site. */
        SyndicationEnabled: string;

        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        ThemeInfo(): any;

        /** Gets or sets the title for the Web site. */
        Title: string;

        /** Gets or sets value that specifies whether the tree view is enabled on the site. */
        TreeViewEnabled: string;

        /** Gets or sets the user interface (UI) version of the Web site. */
        UIVersion: string;

        /** Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. */
        UIVersionConfigurationEnabled: string;

        /** Gets the absolute URL for the website. */
        Url: string;

        /**
         * Gets the user custom actions for the web.
         */
        UserCustomActions(): IUserCustomActions;

        /**
         * Gets the user custom action for the web.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id:string): IUserCustomAction;

        /**
         * Represents key properties of the subsites of a site.
         */
        WebInfos(): any;

        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        Webs(): IWebs;

        /** Gets the name of the site definition or site template that was used to create the site. */
        WebTemplate: string;

        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        WorkflowAssociations(): any;

        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        WorkflowTemplates(): any;

        /**
         * Methods
         */

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
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IWeb;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IWeb;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IWeb;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IWeb;
        
        /**
         * Sends data to an OData service.
         * @param inputStream - The OData input object. Used for create or update operations only.
         */
        executeRemoteLOB(inputStream): any;
        
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
         * Returns the file object located at the specified server-relative URL.
         * @param url - The server relative url of the file.
         */
        getFileByServerRelativeUrl(url): IFile;

        /**
         * Returns the folder object located at the specified server-relative URL.
         * @param url - The server relative url of the folder.
         */
        getFolderByServerRelativeUrl(url): IFolder;

        /**
         * Gets the list at the specified site-relative URL. (SharePoint Online only)
         * @param url - The server relative url of the list.
         */
        getList(url): IList;

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
         * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
         * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
         * @param nConfigurationFilter - The ID of the site template used to provision the sites.
         */
        getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter): any;

        /**
         * Returns the user corresponding to the specified member identifier for the current site.
         * @param id - The user id.
         */
        getUserById(id): IUser;

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
}
    