"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Site
 */
exports.site = {
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
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
    extendUpgradeReminderDate: {
        requestType: utils_1.RequestType.Post
    },
    // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Specifies the collection of custom list templates for a given site.
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the collection of site definitions that are available for creating Web sites within the site collection.
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
    invalidate: {
        requestType: utils_1.RequestType.Post
    },
    // Returns true if the object needs to be upgraded; otherwise, false.
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the site at the specified URL.
    openWeb: {
        argNames: ["strUrl"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Returns the site with the specified GUID.
    openWebById: {
        argNames: ["gWebId"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
/**
 * Tenant App
 */
exports.tenantapp = {
    // Deploy solution package in tenant app catalog
    deploy: {
        requestType: utils_1.RequestType.Post
    },
    // Install solution package from tenant app catalog to SharePoint site
    install: {
        requestType: utils_1.RequestType.Post
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Remove solution package from tenant app catalog
    remove: {
        requestType: utils_1.RequestType.Post
    },
    // Retract solution package in the tenant app catalog
    retract: {
        requestType: utils_1.RequestType.Post
    },
    // Upgrade solution package in SharePoint site
    upgrade: {
        requestType: utils_1.RequestType.Post
    },
    // Uninstall solution package from SharePoint site
    uninstall: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Tenant Apps
 */
exports.tenantapps = {
    // Get an app by id
    getById: {
        argNames: ["guid"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Tenant App Catalog
 */
exports.tenantappcatalog = {
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
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get an app by id.
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "tenantapp"
    },
    // Gets the site collection app catalog sites
    SiteCollectionAppCatalogsSites: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Utility
 */
exports.utility = {
    createEmailBodyForInvitation: {
        argNames: ["pageAddress"],
        name: "SP.Utilities.Utility.CreateEmailBodyForInvitation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getAppLicenseDeploymentId: {
        name: "SP.Utilities.Utility.GetAppLicenseDeploymentId",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getAppLicenseInformation: {
        name: "SP.Utilities.Utility.GetAppLicenseInformation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getCurrentUserEmailAddresses: {
        name: "SP.Utilities.Utility.GetCurrentUserEmailAddresses",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getLocalizedString: {
        argNames: ["sourceValue"],
        name: "SP.Utilities.Utility.GetLocalizedString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getLowerCaseString: {
        argNames: ["sourceValue", "lcid"],
        name: "SP.Utilities.Utility.GetLowerCaseString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    importAppLicense: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.ImportAppLicense",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    isUserLicensedForEntityInContext: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.IsUserLicensedForEntityInContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    localizeWebPartGallery: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.LocalizeWebPartGallery",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    markDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.MarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    resolvePrincipal: {
        name: "SP.Utilities.Utility.ResolvePrincipalInCurrentContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    searchPrincipals: {
        name: "SP.Utilities.Utility.SearchPrincipalsUsingContextWeb",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    unmarkDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.UnmarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web
 */
exports.web = {
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
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Applies the specified site definition or site template to the Web site that has no template applied to it.
    applyWebTemplate: {
        argName: ["name"],
        requestType: utils_1.RequestType.PostWithArgsInQSAsVar
    },
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
    doesPushNotificationSubscriberExist: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns whether the current user has the given set of permissions.
    doesUserHavePermissions: {
        argNames: ["High", "Low"],
        requestType: utils_1.RequestType.GetWithArgsInQSAsVar
    },
    // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
    ensureUser: {
        argNames: ["logonName"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sends data to an OData service.
    executeRemoteLOB: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the app BDC catalog.
    getAppBdcCatalog: {
        requestType: utils_1.RequestType.Post
    },
    // Gets the app BDC catalog for the specified app instance.
    getAppBdcCatalogForAppInstance: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Retrieves an AppInstance installed on this Site.
    getAppInstanceById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Retrieves all AppInstances installed on this site that are instances of the specified App.
    getAppInstancesByProductId: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns a collection of site templates available for the site.
    getAvailableWebTemplates: {
        argNames: ["lcid", "doincludecrosslanguage"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Returns the list gallery on the site.
    getCatalog: {
        argNames: ["galleryType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the context information for the site.
    getContextWebInformation: {
        name: "contextInfo",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    // Gets the custom list templates for the site.
    getCustomListTemplates: {
        requestType: utils_1.RequestType.Get
    },
    // Gets the document libraries on a site. (SharePoint Online only)
    getDocumentLibraries: {
        argNames: ["url"],
        name: "sp.web.getDocumentLibraries(@v)?@v='[[url]]'",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetReplace
    },
    // Gets the specified external content type in a line-of-business (LOB) system application.
    getEntity: {
        argNames: ["namespace", "name"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the file object located at the specified server-relative URL.
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    // Returns the folder object located at the specified server-relative URL.
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Gets the list at the specified site-relative URL. (SharePoint Online only)
    getList: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Gets the push notification subscriber over the site for the specified device application instance ID.
    getPushNotificationSubscriber: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
    getPushNotificationSubscribersByArgs: {
        argNames: ["args"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified user.
    getPushNotificationSubscribersByUser: {
        argNames: ["loginName"],
        requestType: utils_1.RequestType.GetWithArgsInQSAsVar
    },
    // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: utils_1.RequestType.GetWithArgs,
        returnType: "webinfos"
    },
    // Returns the user corresponding to the specified member identifier for the current site.
    getUserById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the effective permissions that the specified user has within the current application scope.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Gets the site URL from a page URL.
    getWebUrlFromPageUrl: {
        name: "sp.web.getWebUrlFromPageUrl",
        requestType: utils_1.RequestType.GetWithArgsInQSAsVar
    },
    // Uploads and installs an app package to this site.
    loadAndInstallApp: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads and installs an App package on the site in a specified locale.
    loadAndInstallAppInSpecifiedLocale: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads an App package and creates an instance from it.
    loadApp: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns the name of the image file for the icon that is used to represent the specified file.
    mapToIcon: {
        argNames: ["filename", "progid", "size"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Processes a notification from an external system.
    processExternalNotification: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Unregisters the subscriber for push notifications from the site.
    unregisterPushNotificationSubscriber: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Web",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web Information Collection
 */
exports.webinfos = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Webs
 */
exports.webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
