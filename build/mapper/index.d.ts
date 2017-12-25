export declare const Mapper: {
    attachment: {};
    attachmentfiles: {
        add: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    audit: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    contenttype: {
        properties: string[];
        delete: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    contenttypes: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        addAvailableContentType: {
            argNames: string[];
            requestType: number;
        };
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
    eventreceiver: {
        delete: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    eventreceivers: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
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
    field: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        setShowInDisplayForm: {
            argNames: string[];
            requestType: number;
        };
        setShowInEditForm: {
            argNames: string[];
            requestType: number;
        };
        setShowInNewForm: {
            argNames: string[];
            requestType: number;
        };
        update: {
            inheritMetadataType: boolean;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    fields: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        addField: {
            argNames: string[];
            metadataType: string;
            name: string;
            requestType: number;
        };
        addDependentLookupField: {
            argNames: string[];
            requestType: number;
        };
        createFieldAsXml: {
            argNames: string[];
            requestType: number;
            data: {
                parameters: {
                    __metadata: {
                        type: string;
                    };
                    Options: number;
                    SchemaXml: string;
                };
            };
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByInternalNameOrTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    fieldlinks: {
        add: {
            argNames: string[];
            metadataType: string;
            name: string;
            requestType: number;
        };
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
    file: {
        properties: string[];
        approve: {
            argNames: string[];
            requestType: number;
        };
        cancelupload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        checkin: {
            argNames: string[];
            requestType: number;
        };
        checkout: {
            requestType: number;
        };
        content: {
            name: string;
            requestType: number;
        };
        continueUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        copyTo: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        deny: {
            argNames: string[];
            requestType: number;
        };
        finishUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getlimitedwebpartmanager: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        moveTo: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        openBinaryStream: {
            requestType: number;
        };
        publish: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        saveBinaryStream: {
            requestType: number;
        };
        startUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        undoCheckOut: {
            requestType: number;
        };
        unpublish: {
            argNames: string[];
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    files: {
        add: {
            argNames: string[];
            requestType: number;
        };
        addTemplateFile: {
            argNames: string[];
            requestType: number;
        };
        getByUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    fileversion: {
        properties: any[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    fileversions: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    folder: {
        properties: string[];
        delete: {
            requestType: number;
        };
        getByUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    folders: {
        properties: string[];
        add: {
            argNames: string[];
            requestType: number;
        };
        getbyurl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    group: {
        properties: string[];
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    sitegroups: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByName: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeById: {
            argNames: string[];
            requestType: number;
        };
        removeByLoginName: {
            argNames: string[];
            requestType: number;
        };
    };
    limitedwebpartmanager: {
        get_WebParts: {
            argNames: string[];
            name: string;
            requestType: number;
        };
    };
    list: {
        properties: string[];
        breakRoleInheritance: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        getChanges: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getItemById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getItems: {
            argNames: string[];
            requestType: number;
            data: {
                query: {
                    __metadata: {
                        type: string;
                    };
                    ViewXml: string;
                };
            };
        };
        getItemsByQuery: {
            argNames: string[];
            name: string;
            requestType: number;
            data: {
                query: {
                    __metadata: {
                        type: string;
                    };
                    ViewXml: string;
                };
            };
        };
        getListItemChangesSinceToken: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getRelatedFields: {
            requestType: number;
        };
        getUserEffectivePermissions: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getViewById: {
            argNames: string[];
            name: string;
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        renderListData: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        renderListFormData: {
            argNames: string[];
            requestType: number;
        };
        reserveListItemId: {
            requestType: number;
        };
        resetRoleInheritance: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    lists: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        ensureSiteAssetsLibrary: {
            requestType: number;
        };
        ensureSitePagesLibrary: {
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    listitem: {
        properties: string[];
        breakRoleInheritance: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        getUserEffectivePermissions: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        resetRoleInheritance: {
            requestType: number;
        };
        update: {
            inheritMetadataType: boolean;
            name: string;
            requestMethod: string;
            requestType: number;
        };
        validateUpdateListItem: {
            argNames: string[];
            requestType: number;
        };
    };
    items: {
        add: {
            metadataType: (obj: any) => any;
            name: string;
            requestType: number;
        };
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
    navigationservicerest: {
        properties: string[];
        getMenuState: {
            argNames: string[];
            name: string;
            RequestType: number;
        };
    };
    peoplemanager: {
        amIFollowedBy: {
            argNames: string[];
            requestType: number;
        };
        amIFollowing: {
            argNames: string[];
            requestType: number;
        };
        follow: {
            argNames: string[];
            requestType: number;
        };
        followTag: {
            argNames: string[];
            requestType: number;
        };
        getFollowedTags: {
            argNames: string[];
            requestType: number;
        };
        getFollowersFor: {
            argNames: string[];
            requestType: number;
        };
        getMyFollowers: {
            requestType: number;
        };
        getMyProperties: {
            requestType: number;
        };
        getMySuggestions: {
            requestType: number;
        };
        getPeopleFollowedBy: {
            argNames: string[];
            requestType: number;
        };
        getPeopleFollowedByMe: {
            requestType: number;
        };
        getPropertiesFor: {
            argNames: string[];
            requestType: number;
        };
        getTrendingTags: {
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        getUserProfilePropertyFor: {
            argNames: string[];
            requestType: number;
        };
        hideSuggestion: {
            argNames: string[];
            requestType: number;
        };
        isFollowing: {
            argNames: string[];
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        setMyProfilePicture: {
            requestType: number;
        };
        stopFollowing: {
            argNames: string[];
            requestType: number;
        };
        stopFollowingTag: {
            argNames: string[];
            requestType: number;
        };
    };
    peoplepicker: {
        clientPeoplePickerResolveUser: {
            argNames: string[];
            metadataType: string;
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        clientPeoplePickerSearchUser: {
            argNames: string[];
            metadataType: string;
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
    };
    profileloader: {
        createPersonalSiteEnqueueBulk: {
            argNames: string[];
            requestType: number;
        };
        getOwnerUserProfile: {
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
            returnType: string;
        };
        getUserProfile: {
            requestType: number;
            returnType: string;
        };
    };
    propertyvalues: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    roleassignment: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    roleassignments: {
        addRoleAssignment: {
            argNames: string[];
            requestType: number;
        };
        getByPrincipalId: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeRoleAssignment: {
            argNames: string[];
            requestType: number;
        };
    };
    roledefinition: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    roledefinitions: {
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByName: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByType: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    search: {
        postquery: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
    };
    site: {
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
    socialfeed: {
        actor: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        actorFeed: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        clearMyUnreadMentionCount: {
            name: string;
            requestType: number;
        };
        my: {
            name: string;
            requestType: number;
        };
        myFeed: {
            name: string;
            requestType: number;
        };
        myLikes: {
            name: string;
            requestType: number;
        };
        myMentionFeed: {
            name: string;
            requestType: number;
        };
        myNews: {
            name: string;
            requestType: number;
        };
        myTimelineFeed: {
            name: string;
            requestType: number;
        };
        myUnreadMentionCount: {
            name: string;
            requestType: number;
        };
    };
    tenantapp: {
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
    tenantappcatalog: {
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
    tenantapps: {
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
    user: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    users: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getByEmail: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByLoginName: {
            argNames: string[];
            name: string;
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeById: {
            argNames: string[];
            requestType: number;
        };
        removeByLoginName: {
            argNames: string[];
            name: string;
            requestType: number;
        };
    };
    usercustomaction: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    usercustomactions: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        clear: {
            requestType: number;
        };
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
    userprofile: {
        properties: string[];
        createPersonalSiteEnque: {
            requestType: number;
        };
        shareAllSocialData: {
            requestType: number;
        };
    };
    utility: {
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
    version: {
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        deleteAll: {
            requestType: number;
        };
        deleteById: {
            argNames: string[];
            requestType: number;
        };
        deleteByLabel: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        restoreByLabel: {
            argNames: string[];
            requestType: number;
        };
    };
    view: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        renderAsHtml: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
    views: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    viewfieldcollection: {
        addViewField: {
            argNames: string[];
            requestType: number;
        };
        moveViewFieldTo: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeAllViewFields: {
            requestType: number;
        };
        removeViewField: {
            argNames: string[];
            requestType: number;
        };
    };
    web: {
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
    webinfos: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
    webs: {
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
};
/**
 * Types
 */
import * as Types from "./types";
export { Types };
