import { RequestType } from "../../types";

/**
 * Site
 */
export const site = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
    createPreviewSPSite: {
        argNames: ["upgrade", "sendemail"],
        requestType: RequestType.PostWithArgs
    },

    // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
    extendUpgradeReminderDate: {
        requestType: RequestType.Post
    },

    // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: RequestType.PostWithArgsInBody
    },

    // Specifies the collection of custom list templates for a given site.
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: RequestType.PostWithArgs
    },

    // Returns the collection of site definitions that are available for creating Web sites within the site collection.
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: RequestType.PostWithArgs
    },

    // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
    invalidate: {
        requestType: RequestType.Post
    },

    // Returns true if the object needs to be upgraded; otherwise, false.
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: RequestType.PostWithArgs
    },

    // Returns the site at the specified URL.
    openWeb: {
        argNames: ["strUrl"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Returns the site with the specified GUID.
    openWebById: {
        argNames: ["gWebId"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: RequestType.PostWithArgs
    },

    // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: RequestType.PostWithArgs
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    },

    // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: RequestType.PostWithArgs
    }
};

/**
 * Tenant App
 */
export const tenantapp = {
    // Deploy solution package in tenant app catalog
    deploy: {
        requestType: RequestType.Post
    },

    // Install solution package from tenant app catalog to SharePoint site
    install: {
        requestType: RequestType.Post
    },

    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Remove solution package from tenant app catalog
    remove: {
        requestType: RequestType.Post
    },

    // Retract solution package in the tenant app catalog
    retract: {
        requestType: RequestType.Post
    },

    // Upgrade solution package in SharePoint site
    upgrade: {
        requestType: RequestType.Post
    },

    // Uninstall solution package from SharePoint site
    uninstall: {
        requestType: RequestType.Post
    }
}

/**
 * Tenant Apps
 */
export const tenantapps = {
    // Get an app by id
    getById: {
        argNames: ["guid"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
}

/**
 * Tenant App Catalog
 */
export const tenantappcatalog = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AvailableApps|tenantapps|/getById('[Id]')|tenantapp"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: RequestType.PostWithArgs
    },

    // Get an app by id.
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: RequestType.GetReplace,
        returnType: "tenantapp"
    },

    // Gets the site collection app catalog sites
    SiteCollectionAppCatalogsSites: {
        requestType: RequestType.Post
    }
}

/**
 * Utility
 */
export const utility = {
    createEmailBodyForInvitation: {
        argNames: ["pageAddress"],
        name: "SP.Utilities.Utility.CreateEmailBodyForInvitation",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    getAppLicenseDeploymentId: {
        name: "SP.Utilities.Utility.GetAppLicenseDeploymentId",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getAppLicenseInformation: {
        name: "SP.Utilities.Utility.GetAppLicenseInformation",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getCurrentUserEmailAddresses: {
        name: "SP.Utilities.Utility.GetCurrentUserEmailAddresses",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getLocalizedString: {
        argNames: ["value"],
        name: "SP.Utilities.Utility.GetLocalizedString",
        replaceEndpointFl: true,
        requestType: RequestType.GetWithArgsValueOnly
    },

    getLowerCaseString: {
        argNames: ["value"],
        name: "SP.Utilities.Utility.GetLowerCaseString",
        replaceEndpointFl: true,
        requestType: RequestType.GetWithArgsValueOnly
    },

    importAppLicense: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.ImportAppLicense",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    isUserLicensedForEntityInContext: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.IsUserLicensedForEntityInContext",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    localizeWebPartGallery: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.LocalizeWebPartGallery",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    markDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.MarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    resolvePrincipal: {
        name: "SP.Utilities.Utility.ResolvePrincipalInCurrentContext",
        replaceEndpointFl: true,
        requestType: RequestType.Post
    },

    searchPrincipals: {
        name: "SP.Utilities.Utility.SearchPrincipalsUsingContextWeb",
        replaceEndpointFl: true,
        requestType: RequestType.Post
    },

    unmarkDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.UnmarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    }
}

/**
 * Web
 */
export const web = {
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
        "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user",
        "TenantAppCatalog|tenantappcatalog", "ThemeInfo", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos|webinfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
    applyTheme: {
        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
        requestType: RequestType.PostWithArgs
    },

    // Applies the specified site definition or site template to the Web site that has no template applied to it.
    applyWebTemplate: {
        argName: ["name"],
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
        argNames: ["id"],
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

    // Returns the file object located at the specified server-relative URL.
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },

    // Returns the folder object located at the specified server-relative URL.
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },

    // Gets the list at the specified site-relative URL. (SharePoint Online only)
    getList: {
        argNames: ["url"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "list"
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

    // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: RequestType.GetWithArgs,
        returnType: "webinfos"
    },

    // Returns the user corresponding to the specified member identifier for the current site.
    getUserById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "user"
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

    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: RequestType.PostWithArgs
    },

    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: RequestType.Post
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

/**
 * Web Information Collection
 */
export const webinfos = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * Webs
 */
export const webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: RequestType.PostWithArgsInBody
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};