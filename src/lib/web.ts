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
        constructor(settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

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
    }

    export class Web_Async extends Web {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;

            // Call the base constructor
            super(settings, executeRequestFl);
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.web = {
        // Adds a content type content type collection.
        addContentType: {
            argNames: ["data"],
            metadataType: "SP.ContentType",
            name: "contenttypes",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            argNames: ["data"],
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds an existing content type to content type collection.
        addExistingContentType: {
            argNames: ["data"],
            name: "contenttypes/addAvailableContentType",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a field to it's collection.
        addField: {
            argNames: ["data"],
            metadataType: "SP.Field",
            name: "fields/add",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a field, using it's Schema XML, to the field collection.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: RequestType.PostWithArgsInBody,
            data: `{
                parameters: {
                     __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                     Options: SP.AddFieldOptions.addFieldInternalNameHint,
                     SchemaXml: [[schemaXml]]
                }
            }`
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
            requestType: RequestType.GetWithArgsInQS
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
