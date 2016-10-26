module $REST {
    /*********************************************************************************************************************************/
    // Web
    // The SPWeb object.
    /*********************************************************************************************************************************/
    export class Web extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web";

            // See if the web url exists
            if(url) {
                // Set the settings
                this.targetInfo.url = url;
            }

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
    }

    export class Web_Async extends Web {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, ...args) {
            // Call the base constructor
            super(url, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    Library.web = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "AllProperties", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group", "AssociatedVisitorGroup|group",
            "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields", "ClientWebParts", "ContentTypes|contenttypes",
            "CurrentUser|user", "DataLeakagePreventionStatusInfo", "DescriptionResource", "EventReceivers|eventreceivers", "Features",
            "Fields|fields", "FirstUniqueAncestorSecurableObject", "Folders|folders", "Lists|lists", "ListTemplates", "Navigation",
            "ParentWeb", "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments",
            "RoleDefinitions|roledefinitions", "RootFolder|folder", "SiteGroups|sitegroups", "SiteUserInfoList", "SiteUsers|users",
            "ThemeInfo", "TitleResource", "UserCustomActions|usercustomactions", "WebInfos", "Webs|webs", "WorkflowAssociations",
            "WorkflowTemplates"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds a content type content type collection.
        addContentType: {
            metadataType: "SP.ContentType",
            name: "contenttypes",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds an existing content type to content type collection.
        addExistingContentType: {
            argNames: ["contentTypeId"],
            name: "contenttypes/addAvailableContentType",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a field to it's collection.
        addField: {
            metadataType: "SP.Field",
            name: "fields/add",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a field, using it's Schema XML, to the field collection.
        // Set the option to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: Types.RequestType.PostWithArgsInBody,
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
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds a list to the list collection.
        addList: {
            metadataType: "SP.List",
            name: "lists",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a permission to the role definitions.
        addPermission: {
            metadataType: "SP.RoleDefinition",
            name: "roledefinitions",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a site group to the site group collection.
        addSiteGroup: {
            argNames: ["Title"],
            metadataType: "SP.Group",
            name: "sitegroups",
            requestType: Types.RequestType.PostWithArgsInBody,
        },

        // Adds a sub-folder to the root folder.
        addSubFolder: {
            argNames: ["url"],
            name: "rootfolder/folders/add",
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            argName: ["name"],
            requestType: Types.RequestType.PostWithArgsInQS
        },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        doesPushNotificationSubscriberExist: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Returns whether the current user has the given set of permissions.
        doesUserHavePermissions: {
            argNames: ["High", "Low"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        ensureUser: {
            argNames: ["logonName"],
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Sends data to an OData service.
        executeRemoteLOB: {
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Gets the app BDC catalog.
        getAppBdcCatalog: {
            requestType: Types.RequestType.Post
        },
        
        // Gets the app BDC catalog for the specified app instance.
        getAppBdcCatalogForAppInstance: {
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
        
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: Types.RequestType.GetWithArgs
        },
        
        // Returns the list gallery on the site.
        getCatalog: {
            argNames: ["galleryType"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Gets the context information for the site. Static method.
        getContextWebInformation: {
            name: "contextInfo",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post
        },

        // Gets a custom action by it's name or title.
        getCustomAction: {
            argNames: ["title"],
            name: "usercustomactions?$filter=Name eq '[[title]]' or Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },
        
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: Types.RequestType.Get
        },
        
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Gets a field by it's title, internal name or static name.
        getField: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]' or InternalName eq '[[title]]' or StaticName eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's id.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getById",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a file by it's name, in the root folder.
        getFile: {
            argNames: ["name"],
            name: "rootfolder/files?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },
        
        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a list by it's id.
        getListById: {
            argNames: ["id"],
            name: "lists/getById",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the list for the specified title
        getListByTitle: {
            argNames: ["title"],
            name: "lists/getByTitle",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the push notification subscriber over the site for the specified device application instance ID.
        getPushNotificationSubscriber: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            argNames: ["args"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            argNames: ["loginName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Gets a sub-folder by it's name, from the root folder.
        getSubFolder: {
            argNames: ["name"],
            name: "rootfolder/folders?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets a site group by it's id.
        getSiteGroupById: {
            argNames: ["id"],
            name: "sitegroups/getById",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a site group by it's name.
        getSiteGroupByName: {
            argNames: ["name"],
            name: "sitegroups/getByName",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: Types.RequestType.GetWithArgs
        },

        // Gets a user by login name.
        getUserByEmail: {
            argNames: ["email"],
            name: "siteusers/getByEmail",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a user by login name.
        getUserByLogin: {
            argNames: ["loginName"],
            name: "siteusers/getByLoginName",
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Uploads and installs an app package to this site.
        loadAndInstallApp: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Uploads and installs an App package on the site in a specified locale.
        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Uploads an App package and creates an instance from it.
        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Returns the name of the image file for the icon that is used to represent the specified file.
        mapToIcon: {
            argNames: ["filename", "progid", "size"],
            requestType: Types.RequestType.GetWithArgs
        },

        // Processes a notification from an external system.
        processExternalNotification: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        registerPushNotificationSubscriber: {
            argNames: ["deviceappinstanceid", "servicetoken"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: Types.RequestType.Post
        },

        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
