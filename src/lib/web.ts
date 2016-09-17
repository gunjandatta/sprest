/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Web
    // The SPWeb object.
    /*********************************************************************************************************************************/
    export class Web extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "web" } } );
            }
        }

        // Method to determine if the current user has access, based on the permissions.
        public hasAccess(permissions) {
            // TO DO
            return true;
        };

        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        /**
         * Gets a collection of metadata for the Web site.
         */
        public get_AllProperties() { return this.getProperty("AllProperties"); }

        /**
         * 
         */
        public get_AppTiles() { return this.getProperty("AppTiles"); }

        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        public get_AssociatedMemberGroup() { return this.getProperty("AssociatedMemberGroup"); }

        /**
         * Gets or sets the associated owner group of the Web site.
         */
        public get_AssociatedOwnerGroup() { return this.getProperty("AssociatedOwnerGroup"); }

        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        public get_AssociatedVisitorGroup() { return this.getProperty("AssociatedVisitorGroup"); }

        /**
         * 
         */
        public get_Author() { return this.getProperty("Author"); }

        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        public get_AvailableContentTypes() { return this.getProperty("AvailableContentTypes"); }

        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        public get_AvailableFields() { return this.getProperty("AvailableFields"); }

        /**
         * 
         */
        public get_ClientWebParts() { return this.getProperty("ClientWebParts"); }

        /**
         * Gets the collection of content types for the Web site.
         */
        public get_ContentTypes() { return this.getProperty("ContentTypes"); }

        /**
         * Gets the current user of the site.
         */
        public get_CurrentUser() { return this.getProperty("CurrentUser"); }

        /**
         * 
         */
        public get_DataLeakagePreventionStatusInfo() { return this.getProperty("DataLeakagePreventionStatusInfo"); }

        /**
         * 
         */
        public get_DescriptionResource() { return this.getProperty("DescriptionResource"); }

        /**
         * Gets the collection of event receiver definitions that are currently available on the website.
         */
        public get_EventReceivers() { return this.getProperty("EventReceivers"); }

        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        public get_Features() { return this.getProperty("Features"); }

        /**
         * Gets the collection of field objects that represents all the fields in the Web site.
         */
        public get_Fields() { return this.getProperty("Fields"); }

        /**
         * Gets the collection of all first-level files in the Web site.
         */
        public get_Files() { return this.getProperty("rootfolder/files"); }

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        public get_FirstUniqueAncestorSecurableObject() { return this.getProperty("FirstUniqueAncestorSecurableObject"); }

        /**
         * Gets the collection of all first-level folders in the Web site.
         */
        public get_Folders() { return this.getProperty("Folders"); }

        /**
         * Gets the collection of all lists that are contained in the Web site available to the current user based on the permissions of the current user.
         */
        public get_Lists() { return this.getProperty("Lists"); }

        /**
         * Gets a value that specifies the collection of list definitions and list templates available for creating lists on the site.
         */
        public get_ListTemplates() { return this.getProperty("ListTemplates"); }

        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        public get_Navigation() { return this.getProperty("Navigation"); }

        /**
         * Gets the parent website of the specified website.
         */
        public get_ParentWeb() { return this.getProperty("ParentWeb"); }

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        public get_PushNotificationSubscribers() { return this.getProperty("PushNotificationSubscribers"); }

        /**
         * Gets the collection of push notification subscribers over the site.
         */
        public get_RecycleBin() { return this.getProperty("RecycleBin"); }

        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        public get_RegionalSettings() { return this.getProperty("RegionalSettings"); }

        /**
         * Gets the collection of role assignments for the Web site.
         */
        public get_RoleAssignments() { return this.getProperty("RoleAssignments"); }

        /**
         * Gets the collection of role definitions for the Web site.
         */
        public get_RoleDefinitions() { return this.getProperty("RoleDefinitions"); }

        /**
         * Gets the root folder for the Web site.
         */
        public get_RootFolder() { return this.getProperty("RootFolder"); }

        /**
         * Gets the collection of groups for the site collection.
         */
        public get_SiteGroups() { return this.getProperty("SiteGroups"); }

        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        public get_SiteUserInfoList() { return this.getProperty("SiteUserInfoList"); }

        /**
         * Gets the collection of all users that belong to the site collection.
         */
        public get_SiteUsers() { return this.getProperty("SiteUsers"); }

        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        public get_ThemeInfo() { return this.getProperty("ThemeInfo"); }

        /**
         * 
         */
        public get_TitleResource() { return this.getProperty("TitleResource"); }

        /**
         * Gets a value that specifies the collection of user custom actions for the site.
         */
        public get_UserCustomActions() { return this.getProperty("UserCustomActions"); }

        /**
         * Represents key properties of the subsites of a site.
         */
        public get_WebInfos() { return this.getProperty("WebInfos"); }

        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        public get_Webs() { return this.getProperty("Webs"); }

        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        public get_WorkflowAssociations() { return this.getProperty("WorkflowAssociations"); }

        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        public get_WorkflowTemplates() { return this.getProperty("WorkflowTemplates"); }

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
    }

    export class Web_Async extends Web {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.web = {
        // Adds a content type content type collection.
        addContentType: {
            metadataType: "SP.ContentType",
            name: "contenttypes",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds an existing content type to content type collection.
        addExistingContentType: {
            name: "contenttypes/addAvailableContentType",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a field to it's collection.
        addField: {
            metadataType: "SP.Field",
            name: "fields/add",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a field, using it's Schema XML, to the field collection.
        // Set the option to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                     __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                     Options: 8,
                     SchemaXml: "[[schemaXml]]"
                }
            }
        },

        // Adds a file to the root folder.
        addFile: {
            argNames: ["url", "overwrite"],
            name: "rootfolder/files/add",
            requestType: RequestType.PostWithArgs
        },

        // Adds a list to the list collection.
        addList: {
            metadataType: "SP.List",
            name: "lists",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a permission to the role definitions.
        addPermission: {
            metadataType: "SP.RoleDefinition",
            name: "roledefinitions",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a site group to the site group collection.
        addSiteGroup: {
            argNames: ["Title"],
            metadataType: "SP.Group",
            name: "sitegroups",
            requestType: RequestType.PostWithArgsInBody,
        },

        // Adds a sub-folder to the root folder.
        addSubFolder: {
            name: "rootfolder/folders/add",
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: RequestType.PostWithArgs
        },

        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            requestType: RequestType.PostWithArgsInQS
        },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        doesPushNotificationSubscriberExist: {
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Returns whether the current user has the given set of permissions.
        doesUserHavePermissions: {
            argNames: ["High", "Low"],
            requestType: RequestType.GetWithArgsInQS
        },

        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        ensureUser: {
            argNames: ["logonName"],
            requestType: RequestType.PostWithArgsInBody
        },
        
        // Sends data to an OData service.
        executeRemoteLOB: {
            requestType: RequestType.PostWithArgsInBody
        },
        
        // Gets the app BDC catalog.
        getAppBdcCatalog: {
            requestType: RequestType.Post
        },
        
        // Gets the app BDC catalog for the specified app instance.
        getAppBdcCatalogForAppInstance: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },
        
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: RequestType.GetWithArgs
        },
        
        // Returns the list gallery on the site.
        getCatalog: {
            argNames: ["galleryType"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },
        
        // Gets the context information for the site. Static method.
        getContextWebInformation: {
            name: "contextInfo",
            replaceEndpointFl: true,
            requestType: RequestType.Post
        },

        // Gets a custom action by it's name or title.
        getCustomAction: {
            argNames: ["title"],
            name: "usercustomactions?$filter=Name eq '[[title]]' or Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },
        
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: RequestType.Get
        },
        
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: RequestType.GetWithArgsInQS
        },

        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: RequestType.PostWithArgs
        },

        // Gets a field by it's title, internal name or static name.
        getField: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]' or InternalName eq '[[title]]' or StaticName eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's id.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getById",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a file by it's name, in the root folder.
        getFile: {
            argNames: ["name"],
            name: "rootfolder/files?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },
        
        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a list by it's id.
        getListById: {
            argNames: ["id"],
            name: "lists/getById",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the list for the specified title
        getListByTitle: {
            argNames: ["title"],
            name: "lists/getByTitle",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the push notification subscriber over the site for the specified device application instance ID.
        getPushNotificationSubscriber: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            argNames: ["args"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            argNames: ["loginName"],
            requestType: RequestType.GetWithArgsInQS
        },

        // Gets a sub-folder by it's name, from the root folder.
        getSubFolder: {
            argNames: ["name"],
            name: "rootfolder/folders?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a site group by it's id.
        getSiteGroupById: {
            argNames: ["id"],
            name: "sitegroups/getById",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a site group by it's name.
        getSiteGroupByName: {
            argNames: ["name"],
            name: "sitegroups/getByName",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: RequestType.GetWithArgs
        },

        // Gets a user by login name.
        getUserByEmail: {
            argNames: ["email"],
            name: "siteusers/getByEmail",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a user by login name.
        getUserByLogin: {
            argNames: ["loginName"],
            name: "siteusers/getByLoginName",
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: RequestType.GetReplace
        },

        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: RequestType.GetWithArgsInQS
        },

        // Uploads and installs an app package to this site.
        loadAndInstallApp: {
            requestType: RequestType.PostWithArgsInBody
        },

        // Uploads and installs an App package on the site in a specified locale.
        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: RequestType.PostWithArgsInBody
        },

        // Uploads an App package and creates an instance from it.
        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: RequestType.PostWithArgsInBody
        },

        // Returns the name of the image file for the icon that is used to represent the specified file.
        mapToIcon: {
            argNames: ["filename", "progid", "size"],
            requestType: RequestType.GetWithArgs
        },

        // Processes a notification from an external system.
        processExternalNotification: {
            requestType: RequestType.PostWithArgsInBody
        },

        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        registerPushNotificationSubscriber: {
            argNames: ["deviceappinstanceid", "servicetoken"],
            requestType: RequestType.PostWithArgs
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            argNames: [],
            requestType: RequestType.Post
        },

        // Method to send an email.
        sendEmail: {
            argNames: ["properties"],
            name: "SP.Utilities.Utility.SendEmail",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: RequestType.PostWithArgsInBody
        },

        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
