/**
 * Site
 */
export declare const site: {
    properties: string[];
    createPreviewSPSite: {
        argNames: string[];
        requestType: number;
    };
    extendUpgradeReminderDate: {
        requestType: number;
    };
    getCatalog: {
        argNames: string[];
        requestType: number;
    };
    getChanges: {
        argNames: string[];
        metadataType: string;
        requestType: number;
    };
    getCustomListTemplates: {
        argNames: string[];
        requestType: number;
    };
    getWebTemplates: {
        argNames: string[];
        requestType: number;
    };
    invalidate: {
        requestType: number;
    };
    needsUpgradeByType: {
        argNames: string[];
        requestType: number;
    };
    openWeb: {
        argNames: string[];
        requestType: number;
    };
    openWebById: {
        argNames: string[];
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    runHealthCheck: {
        argNames: string[];
        requestType: number;
    };
    runUpgradeSiteSession: {
        argNames: string[];
        requestType: number;
    };
    update: {
        metadataType: string;
        name: string;
        requestMethod: string;
        requestType: number;
    };
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Tenant App
 */
export declare const tenantapp: {
    deploy: {
        requestType: number;
    };
    install: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    remove: {
        requestType: number;
    };
    retract: {
        requestType: number;
    };
    upgrade: {
        requestType: number;
    };
    uninstall: {
        requestType: number;
    };
};
/**
 * Tenant Apps
 */
export declare const tenantapps: {
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Tenant App Catalog
 */
export declare const tenantappcatalog: {
    properties: string[];
    add: {
        argNames: string[];
        requestType: number;
    };
    getById: {
        argNames: string[];
        name: string;
        requestType: number;
        returnType: string;
    };
    SiteCollectionAppCatalogsSites: {
        requestType: number;
    };
};
/**
 * Utility
 */
export declare const utility: {
    createEmailBodyForInvitation: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getAppLicenseDeploymentId: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getAppLicenseInformation: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getCurrentUserEmailAddresses: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getLocalizedString: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getLowerCaseString: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    importAppLicense: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    isUserLicensedForEntityInContext: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    localizeWebPartGallery: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    markDiscussionAsFeatured: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    resolvePrincipal: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    searchPrincipals: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    unmarkDiscussionAsFeatured: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
};
/**
 * Web
 */
export declare const web: {
    properties: string[];
    applyTheme: {
        argNames: string[];
        requestType: number;
    };
    applyWebTemplate: {
        argName: string[];
        requestType: number;
    };
    breakRoleInheritance: {
        argNames: string[];
        requestType: number;
    };
    delete: {
        requestType: number;
    };
    doesPushNotificationSubscriberExist: {
        argNames: string[];
        requestType: number;
    };
    doesUserHavePermissions: {
        argNames: string[];
        requestType: number;
    };
    ensureUser: {
        argNames: string[];
        requestType: number;
    };
    executeRemoteLOB: {
        requestType: number;
    };
    getAppBdcCatalog: {
        requestType: number;
    };
    getAppBdcCatalogForAppInstance: {
        argNames: string[];
        requestType: number;
    };
    getAppInstanceById: {
        argNames: string[];
        requestType: number;
    };
    getAppInstancesByProductId: {
        argNames: string[];
        requestType: number;
    };
    getAvailableWebTemplates: {
        argNames: string[];
        requestType: number;
    };
    getCatalog: {
        argNames: string[];
        requestType: number;
    };
    getChanges: {
        argNames: string[];
        metadataType: string;
        requestType: number;
    };
    getContextWebInformation: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getCustomListTemplates: {
        requestType: number;
    };
    getDocumentLibraries: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getEntity: {
        argNames: string[];
        requestType: number;
    };
    getFileByServerRelativeUrl: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getFolderByServerRelativeUrl: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getList: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getPushNotificationSubscriber: {
        argNames: string[];
        requestType: number;
    };
    getPushNotificationSubscribersByArgs: {
        argNames: string[];
        requestType: number;
    };
    getPushNotificationSubscribersByUser: {
        argNames: string[];
        requestType: number;
    };
    getSubwebsFilteredForCurrentUser: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getUserById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getUserEffectivePermissions: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getWebUrlFromPageUrl: {
        name: string;
        requestType: number;
    };
    loadAndInstallApp: {
        requestType: number;
    };
    loadAndInstallAppInSpecifiedLocale: {
        argNames: string[];
        requestType: number;
    };
    loadApp: {
        argNames: string[];
        requestType: number;
    };
    mapToIcon: {
        argNames: string[];
        requestType: number;
    };
    processExternalNotification: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    registerPushNotificationSubscriber: {
        argNames: string[];
        requestType: number;
    };
    resetRoleInheritance: {
        requestType: number;
    };
    unregisterPushNotificationSubscriber: {
        requestType: number;
    };
    update: {
        metadataType: string;
        name: string;
        requestMethod: string;
        requestType: number;
    };
};
/**
 * Web Information Collection
 */
export declare const webinfos: {
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Webs
 */
export declare const webs: {
    add: {
        argNames: string[];
        metadataType: string;
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
