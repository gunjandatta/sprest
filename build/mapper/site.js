"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.site = {
    properties: [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ],
    createPreviewSPSite: {
        argNames: ["upgrade", "sendemail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    extendUpgradeReminderDate: {
        requestType: utils_1.RequestType.Post
    },
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    invalidate: {
        requestType: utils_1.RequestType.Post
    },
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    openWeb: {
        argNames: ["strUrl"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    openWebById: {
        argNames: ["gWebId"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
exports.tenantapp = {
    deploy: {
        requestType: utils_1.RequestType.Post
    },
    install: {
        requestType: utils_1.RequestType.Post
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    remove: {
        requestType: utils_1.RequestType.Post
    },
    retract: {
        requestType: utils_1.RequestType.Post
    },
    upgrade: {
        requestType: utils_1.RequestType.Post
    },
    uninstall: {
        requestType: utils_1.RequestType.Post
    }
};
exports.tenantapps = {
    getById: {
        argNames: ["guid"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.tenantappcatalog = {
    properties: [
        "AvailableApps|tenantapps|/getById('[Id]')|tenantapp"
    ],
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "tenantapp"
    },
    SiteCollectionAppCatalogsSites: {
        requestType: utils_1.RequestType.Post
    }
};
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
exports.web = {
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
    applyTheme: {
        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    applyWebTemplate: {
        argName: ["name"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    doesPushNotificationSubscriberExist: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    doesUserHavePermissions: {
        argNames: ["High", "Low"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    ensureUser: {
        argNames: ["logonName"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    executeRemoteLOB: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getAppBdcCatalog: {
        requestType: utils_1.RequestType.Post
    },
    getAppBdcCatalogForAppInstance: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getAppInstanceById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getAppInstancesByProductId: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getAvailableWebTemplates: {
        argNames: ["lcid", "doincludecrosslanguage"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    getCatalog: {
        argNames: ["galleryType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getContextWebInformation: {
        name: "contextInfo",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    getCustomListTemplates: {
        requestType: utils_1.RequestType.Get
    },
    getDocumentLibraries: {
        argNames: ["url"],
        name: "sp.web.getDocumentLibraries",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getEntity: {
        argNames: ["namespace", "name"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    getList: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    getPushNotificationSubscriber: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getPushNotificationSubscribersByArgs: {
        argNames: ["args"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getPushNotificationSubscribersByUser: {
        argNames: ["loginName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: utils_1.RequestType.GetWithArgs,
        returnType: "webinfos"
    },
    getUserById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getWebUrlFromPageUrl: {
        name: "sp.web.getWebUrlFromPageUrl",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    loadAndInstallApp: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    loadAndInstallAppInSpecifiedLocale: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    loadApp: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    mapToIcon: {
        argNames: ["filename", "progid", "size"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    processExternalNotification: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    unregisterPushNotificationSubscriber: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    update: {
        metadataType: "SP.Web",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.webinfos = {
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=site.js.map