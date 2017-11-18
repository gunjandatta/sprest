System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, web;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Library
            /*********************************************************************************************************************************/
            exports_1("web", web = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "AllProperties|propertyvalues", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group",
                    "AssociatedVisitorGroup|group", "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields",
                    "ClientWebParts", "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
                    "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
                    "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
                    "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
                    "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb",
                    "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
                    "RoleDefinitions|roledefinitions|/getByName('[Name]')|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
                    "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user", "ThemeInfo", "TitleResource",
                    "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos|webinfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
                applyTheme: {
                    argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Applies the specified site definition or site template to the Web site that has no template applied to it.
                applyWebTemplate: {
                    argName: ["name"],
                    requestType: index_1.RequestType.PostWithArgsInQS
                },
                // Creates unique role assignments for the securable object.
                breakRoleInheritance: {
                    argNames: ["copyroleassignments", "clearsubscopes"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
                doesPushNotificationSubscriberExist: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Returns whether the current user has the given set of permissions.
                doesUserHavePermissions: {
                    argNames: ["High", "Low"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
                ensureUser: {
                    argNames: ["logonName"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Sends data to an OData service.
                executeRemoteLOB: {
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets the app BDC catalog.
                getAppBdcCatalog: {
                    requestType: index_1.RequestType.Post
                },
                // Gets the app BDC catalog for the specified app instance.
                getAppBdcCatalogForAppInstance: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Retrieves an AppInstance installed on this Site.
                getAppInstanceById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Retrieves all AppInstances installed on this site that are instances of the specified App.
                getAppInstancesByProductId: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Returns a collection of site templates available for the site.
                getAvailableWebTemplates: {
                    argNames: ["lcid", "doincludecrosslanguage"],
                    requestType: index_1.RequestType.GetWithArgs
                },
                // Returns the list gallery on the site.
                getCatalog: {
                    argNames: ["galleryType"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
                getChanges: {
                    argNames: ["query"],
                    metadataType: "SP.ChangeQuery",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets the context information for the site. Static method.
                getContextWebInformation: {
                    name: "contextInfo",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.Post
                },
                // Gets the custom list templates for the site.
                getCustomListTemplates: {
                    requestType: index_1.RequestType.Get
                },
                // Gets the document libraries on a site. Static method. (SharePoint Online only)
                getDocumentLibraries: {
                    argNames: ["url"],
                    name: "sp.web.getDocumentLibraries",
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                // Gets the specified external content type in a line-of-business (LOB) system application.
                getEntity: {
                    argNames: ["namespace", "name"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Returns the file object located at the specified server-relative URL.
                getFileByServerRelativeUrl: {
                    argNames: ["url"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "file"
                },
                // Returns the folder object located at the specified server-relative URL.
                getFolderByServerRelativeUrl: {
                    argNames: ["url"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "folder"
                },
                // Gets the list at the specified site-relative URL. (SharePoint Online only)
                getList: {
                    argNames: ["url"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "list"
                },
                // Gets the push notification subscriber over the site for the specified device application instance ID.
                getPushNotificationSubscriber: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
                getPushNotificationSubscribersByArgs: {
                    argNames: ["args"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                },
                // Queries for the push notification subscribers over the site for the specified user.
                getPushNotificationSubscribersByUser: {
                    argNames: ["loginName"],
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
                getSubwebsFilteredForCurrentUser: {
                    argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
                    requestType: index_1.RequestType.GetWithArgs,
                    returnType: "webinfos"
                },
                // Returns the user corresponding to the specified member identifier for the current site.
                getUserById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "user"
                },
                // Gets the effective permissions that the specified user has within the current application scope.
                getUserEffectivePermissions: {
                    argNames: ["loginName"],
                    name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
                    requestType: index_1.RequestType.GetReplace
                },
                // Gets the site URL from a page URL. Static method.
                getWebUrlFromPageUrl: {
                    name: "sp.web.getWebUrlFromPageUrl",
                    requestType: index_1.RequestType.GetWithArgsInQS
                },
                // Uploads and installs an app package to this site.
                loadAndInstallApp: {
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Uploads and installs an App package on the site in a specified locale.
                loadAndInstallAppInSpecifiedLocale: {
                    argNames: ["appPackageStream", "installationLocaleLCID"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Uploads an App package and creates an instance from it.
                loadApp: {
                    argNames: ["appPackageStream", "installationLocaleLCID"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Returns the name of the image file for the icon that is used to represent the specified file.
                mapToIcon: {
                    argNames: ["filename", "progid", "size"],
                    requestType: index_1.RequestType.GetWithArgs
                },
                // Processes a notification from an external system.
                processExternalNotification: {
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Queries the object
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
                registerPushNotificationSubscriber: {
                    argNames: ["deviceappinstanceid", "servicetoken"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
                resetRoleInheritance: {
                    requestType: index_1.RequestType.Post
                },
                // Unregisters the subscriber for push notifications from the site.
                unregisterPushNotificationSubscriber: {
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.Web",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=web.js.map