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
        constructor(settings:ITargetInfoType, executeRequestFl?:boolean) {
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
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.web = {
        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: RequestType.PostWithArgs
        },

        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            requestType: RequestType.PostWithArgsAsQS
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
            requestType: RequestType.GetWithArgsAsQS
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
            requestType: RequestType.PostWithArgsValueOnly
        },
        
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            requestType: RequestType.GetWithArgsValueOnly
        },
        
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: RequestType.GetWithArgs
        },
        
        // Returns the list gallery on the site.
        getCatalog: {
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
        
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: RequestType.Get
        },
        
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: RequestType.GetWithArgsAsQS
        },

        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: RequestType.PostWithArgs
        },

        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
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
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            requestType: RequestType.GetWithArgsAsQS
        },

        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: RequestType.GetWithArgs
        },

        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            requestType: RequestType.GetWithArgsAsQS
        },

        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: RequestType.GetWithArgsAsQS
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

        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: RequestType.PostWithArgsValueOnly
        }
    };
    Library.web[RequestType.Custom] = [
        { name: "addContentType", "function": function (data) { return this.executePost("contenttypes", null, data, true, "SP.ContentType"); } },
        { name: "addCustomAction", "function": function (data) { return this.executePost("usercustomactions", null, data, true, "SP.UserCustomAction"); } },
        { name: "addExistingContentType", "function": function (data) { return this.executePost("contenttypes/addAvailableContentType", data); } },
        { name: "addField", "function": function (data) { return this.executePost("fields/add", null, data, true, "SP.Field"); } },
        { name: "addFieldAsXml", "function": function (data) { return this.executePost("fields/createFieldAsXml", null, { parameters: { __metadata: { type: "SP.XmlSchemaFieldCreationInformation" }, Options: window["SP"].AddFieldOptions.addFieldInternalNameHint, SchemaXml: data } }, true); } },
        { name: "addFile", "function": function (data, content) { return this.executePost("rootfolder/files/add", data, content, true); } },
        { name: "addList", "function": function (data) { return this.executePost("lists", null, data, true, "SP.List"); } },
        { name: "addPermission", "function": function (data) { data.__metadata = { type: "SP.RoleDefinition" }; return this.executePost("roledefinitions", null, data, true, "SP.RoleDefinition"); } },
        { name: "addSiteGroup", "function": function (name) { return this.executePost("sitegroups", null, { Title: name }, true, "SP.Group"); } },
        { name: "addSubFolder", "function": function (name) { return this.executePost("rootfolder/folders/add", name); } },
        { name: "addWeb", "function": function (data) { return this.get_Webs().add(data); } },
        { name: "getContentType", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("contenttypes?$filter=Name eq '" + title + "'"); } },
        { name: "getContentTypeById", "function": function (id) { return this.executeGet("contenttypes/getById", id); } },
        { name: "getCustomAction", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("usercustomactions?$filter=Name eq '" + title + "' or Title eq '" + title + "'"); } },
        { name: "getField", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "' or InternalName eq '" + title + "' or StaticName eq '" + title + "'"); } },
        { name: "getFieldById", "function": function (id) { return this.executeGet("fields/getById", id); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getFile", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/files?$filter=Name eq '" + name + "'"); } },
        { name: "getListById", "function": function (id) { return this.executeGet("lists/getById", id); } },
        { name: "getSiteGroupById", "function": function (id) { return this.executeGet("sitegroups/getById", id); } },
        { name: "getSiteGroupByName", "function": function (name) { return this.executeGet("sitegroups/getByName", name); } },
        { name: "getSubFolder", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/folders?$filter=Name eq '" + name + "'"); } },
        { name: "getUserById", "function": function (id) { return this.executeGet("siteusers?$filter=Id eq " + id); } },
        { name: "getUserByLogin", "function": function (login) { return this.executeGet("siteusers/getByLoginName", null, login); } },
        { name: "hasAccess", "function": function (permissions) { return /*hasAccess(this, permissions);*/ } },
        { name: "sendEmail", "function": function (data) { data = { properties: data }; data.properties.__metadata = { type: "SP.Utilities.EmailProperties" }; return this.executePost("_api/SP.Utilities.Utility.SendEmail", null, data, true); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Web", "MERGE"); } }
    ];
}
