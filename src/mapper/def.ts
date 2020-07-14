import { IMapper } from "gd-sprest-def/lib/mapper.d";
import { RequestType } from "../utils";

export const Mapper: IMapper = {
    "MS.FileServices.File": {
        copyTo: {
            argNames: ["target", "overwrite"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        download: {
        },

        moveTo: {
            argNames: ["target", "overwrite"],
        },

        upload: {
            argNames: ["stream"],
        },

    },

    "MS.FileServices.FileSystemItem.Collection": {
        add: {
            argNames: ["name", "overwrite", "content"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "MS.FileServices.Folder": {
        delete: {
            requestType: RequestType.Delete
        },

        moveTo: {
            argNames: ["target"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.AppServices.AppCollection": {
        getAppsFromStore: {
            argNames: ["addInType", "queryString"],
        },

        getByType: {
            argNames: ["type"],
        },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningModel": {
        update: {
        },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningModel.Collection": {
        getByTitle: {
            argNames: ["title"],
        },

        getByUniqueId: {
            argNames: ["uniqueId"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication": {
        delete: {
        },

        update: {
        },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication.Collection": {
        batchDelete: {
            argNames: ["publications"],
        },

        getByModelUniqueId: {
            argNames: ["modelUniqueId"],
        },

        getByUniqueId: {
            argNames: ["uniqueId"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningSample": {
        update: {
        },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningSample.Collection": {
        getByModelId: {
            argNames: ["modelID"],
        },

        getByTitle: {
            argNames: ["title"],
        },

        getByUniqueId: {
            argNames: ["uniqueId"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Office.Server.Search.REST.SearchService": {
        autocompletions: {
            argNames: ["querytext", "sources", "numberOfCompletions", "cursorPosition"],
        },

        export: {
            argNames: ["userName", "startTime"],
        },

        exportmanualsuggestions: {},

        exportpopulartenantqueries: {
            argNames: ["count"]
        },

        postquery: {
            argNames: ["request"],
            metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
            requestType: RequestType.PostWithArgsInBody
        },

        query: {
            argNames: ["querytext", "queryTemplate", "enableInterleaving", "sourceId", "rankingModelId", "startRow", "rowLimit", "rowsPerPage", "selectProperties", "culture", "refinementFilters", "refiners", "hiddenConstraints", "sortList", "enableStemming", "trimDuplicates", "timeout", "enableNicknames", "enablePhonetic", "enableFQL", "hitHighlightedProperties", "propertiesToGenerateAcronyms", "bypassResultTypes", "processBestBets", "clientType", "personalizationData", "resultsUrl", "queryTag", "trimDuplicatesIncludeId", "totalRowsExactMinimum", "impressionId", "properties", "enableQueryRules", "summaryLength", "maxSnippetLength", "desiredSnippetLength", "uiLanguage", "blockDedupeMode", "generateBlockRankLog", "enableSorting", "collapseSpecification", "processPersonalFavorites", "enableOrderingHitHighlightedProperty", "hitHighlightedMultivaluePropertyLimit", "queryTemplatePropertiesUrl", "timeZoneId", "useOLSQuery", "OLSQuerySession"],
        },

        recordPageClick: {
            argNames: ["pageInfo", "clickType", "blockType", "clickedResultId", "subResultIndex", "immediacySourceId", "immediacyQueryString", "immediacyTitle", "immediacyUrl"],
        },

        resultspageaddress: {
        },

        searchcenterurl: {
        },

        searchquery: {
            argNames: ["request"],
        },

        suggest: {
            argNames: ["querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions"],
        },

    },

    "Microsoft.Office.Server.Search.REST.SearchSetting": {
        getpromotedresultqueryrules: {
            argNames: ["siteCollectionLevel", "offset", "numberOfRules"],
        },

        getqueryconfiguration: {
            argNames: ["callLocalSearchFarmsOnly", "skipGroupObjectIdLookup"],
        },

        getxssearchpolicy: {
        },

        pingadminendpoint: {
        },

        setxssearchpolicy: {
            argNames: ["policy"],
        },

    },

    "Microsoft.Online.SharePoint.AppLauncher.AppLauncher": {
        getData: {
            argNames: ["suiteVersion", "isMobileRequest", "locale", "onPremVer"],
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation.Collection": {
        getByLocation: {
            argNames: ["location"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob.Collection": {
        getByMoveId: {
            argNames: ["moveId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob.Collection": {
        getByMoveId: {
            argNames: ["moveId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob.Collection": {
        getByMoveId: {
            argNames: ["moveId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty.Collection": {
        getByPropertyNameAndGeoLocation: {
            argNames: ["propertyName", "geo"],
        },

        getChanges: {
            argNames: ["startTimeInUtc"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator.Collection": {
        create: {
            argNames: ["parameters"],
        },

        getByLoginName: {
            argNames: ["loginName"],
        },

        getByLoginNameAndType: {
            argNames: ["loginName", "memberType"],
        },

        getByObjectId: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience": {
        upgradeAllInstancesToSPOMode: {
        },

        upgradeToSPOMode: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation.Collection": {
        getByGeoLocation: {
            argNames: ["geoLocation"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob": {
        cancel: {
        },

        delete: {
            requestType: RequestType.Delete
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob.Collection": {
        getByGroupName: {
            argNames: ["groupname"],
        },

        getMoveReport: {
            argNames: ["moveState", "moveDirection", "limit", "startTime", "endTime"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta": {
        crossGeoCredentials: {
            argNames: ["siteId"],
        },

        dBSchemaCompatibilityCheck: {
        },

        geoMoveCompatibilityChecks: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        userPersonalSiteId: {
            argNames: ["userPrincipalName"],
        },

        userPersonalSiteLocation: {
            argNames: ["userPrincipalName"],
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob": {
        cancel: {
        },

        delete: {
            requestType: RequestType.Delete
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob.Collection": {
        getByUrl: {
            argNames: ["url"],
        },

        getMoveReport: {
            argNames: ["moveState", "moveDirection", "limit", "startTime", "endTime"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota.Collection": {
        getByLocation: {
            argNames: ["geoLocation"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup.Collection": {
        getByAlias: {
            argNames: ["alias"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob": {
        cancel: {
        },

        delete: {
            requestType: RequestType.Delete
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob.Collection": {
        getByDirection: {
            argNames: ["direction"],
        },

        getByMoveId: {
            argNames: ["odbMoveId"],
        },

        getByUpn: {
            argNames: ["upn"],
        },

        getByValidPdl: {
            argNames: ["validPdl"],
        },

        getMoveReport: {
            argNames: ["moveState", "moveDirection", "limit", "startTime", "endTime"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob.Collection": {
        getBySiteUrl: {
            argNames: ["siteUrl"],
        },

        getJobsByParentId: {
            argNames: ["parentId"],
        },

        getJobsByParentIdAndState: {
            argNames: ["parentId", "state"],
        },

        getJobsBySiteUrl: {
            argNames: ["url"],
        },

        getSiteRenameReport: {
            argNames: ["state"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob.Collection": {
        getJobById: {
            argNames: ["jobId", "loadProgressState"],
        },

        getJobsByState: {
            argNames: ["state"],
        },

        getState: {
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Online.SharePoint.PointPublishing.PointPublishingAdmin": {
        createTopicMagazine: {
            argNames: ["magazineName"],
        },

        deleteTopicMagazine: {
            argNames: ["magazineId"],
        },

        provisionPointPublishingAsync: {
        },

    },

    "Microsoft.Online.SharePoint.SPLogger.LogExport": {
        getFiles: {
            argNames: ["partitionId", "logType"],
        },

        getLogTypes: {
        },

        getPartitions: {
            argNames: ["logType"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdmin.MiddleTier.DDIAdapter": {
        getList: {
            argNames: ["schema", "workflow", "stream"],
        },

        getObject: {
            argNames: ["schema", "workflow", "stream"],
        },

        multiObjectExecute: {
            argNames: ["schema", "workflow", "stream"],
        },

        newObject: {
            argNames: ["schema", "workflow", "stream"],
        },

        removeObjects: {
            argNames: ["schema", "workflow", "stream"],
        },

        setObject: {
            argNames: ["schema", "workflow", "stream"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipal": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant.Collection": {
        getByObjectId: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest": {
        approve: {
        },

        deny: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest.Collection": {
        approve: {
            argNames: ["resource", "scope"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Office365CommsMessagesServiceProxy": {
        messageCenterMessages: {
            argNames: ["messagesFieldsData"],
        },

        serviceHealthMessages: {
            argNames: ["messagesFieldsData"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPOGroup": {
        getGroupInfo: {
            argNames: ["groupId"],
        },

        updateGroupProperties: {
            argNames: ["groupId", "displayName"],
        },

        updateGroupPropertiesBySiteId: {
            argNames: ["groupId", "siteId", "displayName"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SiteCollectionManagementService": {
        exportCSVFile: {
        },

        getSiteDescription: {
            argNames: ["siteId"],
        },

        office365ProvidedSharepointSiteActivityDataReady: {
        },

        resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData: {
        },

        updateOffice365ProvidedSharepointSiteActivityData: {
            argNames: ["oauthToken"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection": {
        getById: {
            argNames: ["siteId"],
        },

        getGroupSiteRelationship: {
            argNames: ["siteId"],
        },

        getLockStateById: {
            argNames: ["siteId"],
        },

        getSiteUserGroups: {
            argNames: ["siteId", "userGroupIds"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Tenant": {
        checkTenantIntuneLicense: {
        },

        checkTenantLicenses: {
            argNames: ["licenses"],
        },

        connectSiteToHubSiteById: {
            argNames: ["siteUrl", "hubSiteId"],
        },

        createSite: {
            argNames: ["siteCreationProperties"],
        },

        getIdleSessionSignOutForUnmanagedDevices: {
        },

        getSPOAllWebTemplates: {
            argNames: ["cultureName", "compatibilityLevel"],
        },

        getSPOTenantAllWebTemplates: {
        },

        getSPOTenantWebTemplates: {
            argNames: ["localeId", "compatibilityLevel"],
        },

        getSitePropertiesByUrl: {
            argNames: ["url", "includeDetail"],
        },

        getSitePropertiesFromSharePointByFilters: {
            argNames: ["speFilter"],
        },

        getSiteSecondaryAdministrators: {
            argNames: ["secondaryAdministratorsFieldsData"],
        },

        grantHubSiteRightsById: {
            argNames: ["hubSiteId", "principals", "grantedRights"],
        },

        hasValidEducationLicense: {},

        query: { argNames: ["oData"], requestType: RequestType.OData },

        registerHubSite: {
            argNames: ["siteUrl"],
        },

        registerHubSiteWithCreationInformation: {
            argNames: ["siteUrl", "creationInformation"],
        },

        removeDeletedSite: {
            argNames: ["siteUrl"],
        },

        removeDeletedSitePreferId: {
            argNames: ["siteUrl", "siteId"],
        },

        removeSite: {
            argNames: ["siteUrl"],
        },

        restoreDeletedSite: {
            argNames: ["siteUrl"],
        },

        restoreDeletedSitePreferId: {
            argNames: ["siteUrl", "siteId"],
        },

        revokeHubSiteRightsById: {
            argNames: ["hubSiteId", "principals"],
        },

        setIdleSessionSignOutForUnmanagedDevices: {
            argNames: ["enabled", "warnAfter", "signOutAfter"],
        },

        setSiteSecondaryAdministrators: {
            argNames: ["secondaryAdministratorsFieldsData"],
        },

        swapSite: {
            argNames: ["sourceUrl", "targetUrl", "archiveUrl"],
        },

        swapSiteWithSmartGestureOption: {
            argNames: ["sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures"],
        },

        unregisterHubSite: {
            argNames: ["siteUrl"],
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.TenantAdminSettingsService": {
        getTenantSharingStatus: {
        },

        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantManagement.ExternalUser.Collection": {
        getById: {
            argNames: ["uniqueId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.TenantManagement.Office365Tenant": {
        addPublicCdnOrigin: {
            argNames: ["origin"],
        },

        addSdnProvider: {
            argNames: ["identifier", "license"],
        },

        addTenantCdnOrigin: {
            argNames: ["cdnType", "originUrl"],
        },

        addTenantTheme: {
            argNames: ["name", "themeJson"],
        },

        addToOrgAssetsLibAndCdn: {
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType"],
        },

        createTenantCdnDefaultOrigins: {
            argNames: ["cdnType"],
        },

        deleteImportProfilePropertiesJob: {
            argNames: ["jobId"],
        },

        deleteTenantTheme: {
            argNames: ["name"],
        },

        disableSharingForNonOwnersOfSite: {
            argNames: ["siteUrl"],
        },

        getAllTenantThemes: {
        },

        getExternalUsers: {
            argNames: ["position", "pageSize", "filter", "sortOrder"],
        },

        getExternalUsersForSite: {
            argNames: ["siteUrl", "position", "pageSize", "filter", "sortOrder"],
        },

        getExternalUsersWithSortBy: {
            argNames: ["position", "pageSize", "filter", "sortPropertyName", "sortOrder"],
        },

        getHideDefaultThemes: {
        },

        getIdleSessionSignOutForUnmanagedDevices: {
        },

        getImportProfilePropertyJob: {
            argNames: ["jobId"],
        },

        getImportProfilePropertyJobs: {
        },

        getTenantCdnEnabled: {
            argNames: ["cdnType"],
        },

        getTenantCdnOrigins: {
            argNames: ["cdnType"],
        },

        getTenantCdnPolicies: {
            argNames: ["cdnType"],
        },

        getTenantTheme: {
            argNames: ["name"],
        },

        isSharingDisabledForNonOwnersOfSite: {
            argNames: ["siteUrl"],
        },

        queueImportProfileProperties: {
            argNames: ["idType", "sourceDataIdProperty", "propertyMap", "sourceUri"],
        },

        removeExternalUsers: {
            argNames: ["uniqueIds"],
        },

        removeFromOrgAssets: {
            argNames: ["libUrl", "listId"],
        },

        removeFromOrgAssetsAndCdn: {
            argNames: ["remove", "cdnType", "libUrl"],
        },

        removePublicCdnOrigin: {
            argNames: ["originId"],
        },

        removeSdnProvider: {
        },

        removeTenantCdnOrigin: {
            argNames: ["cdnType", "originUrl"],
        },

        revokeAllUserSessions: {
            argNames: ["userName"],
        },

        revokeAllUserSessionsByPuid: {
            argNames: ["puidList"],
        },

        setHideDefaultThemes: {
            argNames: ["hideDefaultThemes"],
        },

        setIdleSessionSignOutForUnmanagedDevices: {
            argNames: ["enabled", "warnAfter", "signOutAfter"],
        },

        setOrgAssetsLib: {
            argNames: ["libUrl", "thumbnailUrl", "orgAssetType"],
        },

        setTenantCdnEnabled: {
            argNames: ["cdnType", "isEnabled"],
        },

        setTenantCdnPolicy: {
            argNames: ["cdnType", "policy", "policyValue"],
        },

        updateTenantTheme: {
            argNames: ["name", "themeJson"],
        },

    },

    "Microsoft.SharePoint.Administration.FeatureDefinition.Collection": {
        getFeatureDefinition: {
            argNames: ["featureDisplayName", "compatibilityLevel"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Administration.SPAnalyticsUsageService": {
        logevent: {
            argNames: ["usageEntry"],
        },

    },

    "Microsoft.SharePoint.Administration.SPAppStateQueryJobDefinition": {
        performFastRevokeWithClientIds: {
        },

    },

    "Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog": {
        getCrawledUrls: {
            argNames: ["getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime"],
        },

        getUnsuccesfulCrawledUrls: {
            argNames: ["displayUrl", "startDateTime", "endDateTime"]
        }
    },

    "Microsoft.SharePoint.Client.Search.Analytics.SignalStore": {
        signals: {
            argNames: ["signals"],
        },

    },

    "Microsoft.SharePoint.Client.Search.Query.RankingLabeling": {
        addJudgment: {
            argNames: ["userQuery", "url", "labelId"],
        },

        getJudgementsForQuery: {
            argNames: ["query"],
        },

        normalizeResultUrl: {
            argNames: ["url"],
        },

    },

    "Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection": {
        add: {
            argNames: ["matchType", "matchValue", "boost"],
        },

        clear: {
        },

    },

    "Microsoft.SharePoint.Client.Search.Query.SortCollection": {
        add: {
            argNames: ["strProperty", "direction"],
        },

        clear: {
        },

    },

    "Microsoft.SharePoint.Client.Search.Query.StringCollection": {
        add: {
            argNames: ["property"],
        },

        clear: {
        },

    },

    "Microsoft.SharePoint.ClientSideComponent.HostedApp": {
        delete: {
            requestType: RequestType.Delete
        },

        updateWebPartData: {
            argNames: ["webPartDataAsJson"],
        },

    },

    "Microsoft.SharePoint.ClientSideComponent.HostedAppsManager": {
        add: {
            argNames: ["webPartDataAsJson", "hostType"],
        },

        getById: {
            argNames: ["id"],
        },

    },

    "Microsoft.SharePoint.Comments.comment": {
        like: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        unlike: {
        },

    },

    "Microsoft.SharePoint.Comments.comment.Collection": {
        deleteAll: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Internal.ActivityLogger": {
        feedbackDirect: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json"],
        },

        feedbackIndirect: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json"],
        },

        logActivity: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType"],
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata": {
        deploy: {
            argNames: ["skipFeatureDeployment"],
            requestType: RequestType.Post
        },

        install: {
            requestType: RequestType.Post
        },

        remove: {
            requestType: RequestType.Post
        },

        retract: {
            requestType: RequestType.Post
        },

        uninstall: {
            requestType: RequestType.Post
        },

        upgrade: {
            requestType: RequestType.Post
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem.Collection": {
        add: {
            argNames: ["absolutePath"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["absolutePath"],
        },

        removeById: {
            argNames: ["siteId"],
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor": {
        properties: [
            "AvailableApps|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection|/getById('[Id]')|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata"
        ],

        add: {
            argNames: ["Url", "Overwrite", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": {
        properties: [
            "AvailableApps|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection|/getById('[Id]')|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata"
        ],

        add: {
            argNames: ["Url", "Overwrite", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        syncSolutionToTeams: {
            argNames: ["id"]
        },

        upload: {
            argNames: ["Content", "Overwrite", "Url"],
        }
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.Device": {
        delete: { requestType: RequestType.Delete },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.Device.Collection": {
        getById: {
            argNames: ["id"]
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage": {
        create: {
            argNames: ["config"]
        },

        delete: { requestType: RequestType.Delete },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential": {
        delete: { requestType: RequestType.Delete },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential.Collection": {
        getById: {
            argNames: ["id"]
        },

        getCredentials: {
            argNames: ["AccountName", "Type"]
        },

        query: { argNames: ["oData"], requestType: RequestType.OData }
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask": {
        delete: { requestType: RequestType.Delete },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask.Collection": {
        getById: {
            argNames: ["id"]
        },

        query: { argNames: ["oData"], requestType: RequestType.OData }
    },

    "Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant.Collection": {
        add: {
            argNames: ["servicePrincipalId", "resource", "scope"]
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["servicePrincipalId", "resource", "scope"],
            requestType: RequestType.PostWithArgs
        }
    },

    "Microsoft.SharePoint.Navigation.REST.NavigationServiceRest": {
        properties: [
            "MenuState|menustate|([Name])|menunode"
        ],
        getPublishingNavigationProviderType: {
            argNames: ["mapProviderName"],
        },

        menuNodeKey: {
            argNames: ["currentUrl", "mapProviderName"],
        },

        menuState: {
            argNames: ["menuNodeKey", "mapProviderName", "depth", "customProperties"],
        },

        saveMenuState: {
            argNames: ["menuState", "mapProviderName"],
        },

    },

    "Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi": {
        details: {
        },

    },

    "Microsoft.SharePoint.Portal.GroupService": {
        getGroupImage: {
            argNames: ["id", "hash", "color"],
        },

        setGroupImage: {
            argNames: ["imageStream"],
            requestType: RequestType.PostWithArgsAndData
        },

        syncGroupProperties: {
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "Microsoft.SharePoint.Portal.GroupSiteManager": {
        canUserCreateGroup: {},

        create: {
            argNames: ["groupId"],
            requestType: RequestType.PostWithArgsInBody
        },

        createGroup: {
            argNames: ["displayName", "alias", "isPublic", "ownerPrincipalNames", "description", "creationOptions"],
            requestType: RequestType.PostWithArgsInBody
        },

        createGroupEx: {
            argNames: ["displayName", "alias", "isPublic", "optionalParams"],
            requestType: RequestType.PostWithArgsInBody
        },

        createGroupForSite: {
            argNames: ["displayName", "alias", "isPublic", "optionalParams"],
            requestType: RequestType.PostWithArgsInBody
        },

        delete: {
            argNames: ["siteUrl"],
            requestType: RequestType.PostWithArgsInBody
        },

        ensureTeamForGroup: {},

        getGroupCreationContext: {},

        getGroupSiteConversionData: {},

        getSiteStatus: {
            argNames: ["groupId"],
        },

        getValidSiteUrlFromAlias: {
            argNames: ["alias", "managedPath", "isTeamSite"],
        },

        hideTeamifyPrompt: {
            argNames: ["siteUrl"],
            requestType: RequestType.PostWithArgsInBody
        },

        isTeamifyPromptHidden: {
            argNames: ["siteUrl"]
        },

        notebook: {
            argNames: ["groupId"],
        },

    },

    "Microsoft.SharePoint.Portal.SPHubSitesUtility": {
        getHubSites: {
            requestType: RequestType.Post
        },

    },

    "Microsoft.SharePoint.Portal.SPSiteManager": {
        archiveTeamChannelSite: {
            argNames: ["siteId", "archive"],
            requestType: RequestType.PostWithArgsInBody
        },

        canCreateHubJoinedSite: {
            argNames: ["hubSiteId"],
            requestType: RequestType.PostWithArgsInBody
        },

        create: {
            argNames: ["request"],
            requestType: RequestType.PostWithArgsInBody
        },

        delete: {
            argNames: ["siteId"],
            requestType: RequestType.PostWithArgsInBody
        },

        getIBSegmentLabels: {
            argNames: ["IBSegments"],
            requestType: RequestType.GetWithArgsInQS
        },

        getTeamChannelSiteOwner: {
            argNames: ["siteId"],
            requestType: RequestType.GetWithArgsInQS
        },

        restoreTeamsChannelSite: {
            argNames: ["siteId", "relatedGroupId"],
            requestType: RequestType.PostWithArgsInBody
        },

        setTeamChannelSiteOwner: {
            argNames: ["siteId", "logonName", "secondaryLogonName"],
            requestType: RequestType.PostWithArgsInBody
        },

        siteUrl: {
            argNames: ["siteId"],
            requestType: RequestType.GetWithArgsInQS
        },

        status: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsInQS
        },

        updateWorkflow2013Endpoint: {
            argNames: ["workflowServiceAddress", "workflowHostname"],
            requestType: RequestType.PostWithArgsInBody
        },
    },

    "Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder": {
        context: {
        },

    },

    "Microsoft.SharePoint.Portal.SiteIconManager": {
        getSiteLogo: {
            argNames: ["siteUrl"],
        },

    },

    "Microsoft.SharePoint.Portal.SiteLinkingManager": {
        getSiteLinks: {
        },

        linkGroup: {
            argNames: ["groupId"],
        },

        unlinkGroup: {
            argNames: ["groupId"],
        },

    },

    "Microsoft.SharePoint.TenantCdn.TenantCdnApi": {
        getCdnUrls: {
            argNames: ["items"],
        },

        isFolderUrlsInTenantCdn: {
            argNames: ["urls", "cdnType"],
        },

    },

    "Microsoft.SharePoint.Webhooks.Subscription": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
            argNames: ["parameters"],
        },

    },

    "Microsoft.SharePoint.Webhooks.Subscription.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["subscriptionId"],
        },

    },

    "OBA.Server.ServerWrapper.Diagnostics": {
        status: {
        },

    },

    "OBA.Server.ServerWrapper.Reporting": {
        publishReport: {
            argNames: ["odataPostBodyStm"],
        },

    },

    "OBA.Server.ServerWrapper.Taskflow": {
        processTask: {
            argNames: ["requestBodyStream"],
        },

    },

    "PS.BaseCalendarException": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.Calendar": {
        copyTo: {
            argNames: ["name"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.Calendar.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.CalendarException": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.CalendarException.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.CustomField": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.CustomField.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByAppAlternateId: {
            argNames: ["objectId"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.DraftAssignment.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.DraftProjectResource.Collection": {
        add: {
            argNames: ["parameters"],
        },

        addEnterpriseResourceById: {
            argNames: ["resourceId"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.DraftTask.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.DraftTaskLink.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.EngagementComment.Collection": {
        add: {
            argNames: ["comment"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.EnterpriseProjectType": {
        addDepartment: {
            argNames: ["departmentValueGuid"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeDepartment: {
            argNames: ["departmentValueGuid"],
        },

        updateCreatePDP: {
            argNames: ["pdp"],
        },

    },

    "PS.EnterpriseProjectType.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.EnterpriseResource": {
        delete: {
            requestType: RequestType.Delete
        },

        forceCheckIn: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        updateClaimsAccount: {
            argNames: ["newClaimsAccount"],
        },

    },

    "PS.EnterpriseResource.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.EnterpriseResourceCostRate": {
        rESTfulUpdate: {
        },

        restfulDelete: {
        },

    },

    "PS.EnterpriseResourceCostRate.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByDateUrl: {
            argNames: ["effectiveDate"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.EntityLink": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.EntityLink.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.Event.Collection": {
        getById: {
            argNames: ["objectId"],
        },

        getByInt: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.EventHandler": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.EventHandler.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.LookupCost": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.LookupDate": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.LookupDuration": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.LookupEntry": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.LookupEntry.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByAppAlternateId: {
            argNames: ["objectId"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.LookupNumber": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.LookupTable": {
        addMask: {
            argNames: ["mask"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        updateMask: {
            argNames: ["mask", "level"],
        },

    },

    "PS.LookupTable.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByAppAlternateId: {
            argNames: ["objectId"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.LookupText": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.Phase": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.Phase.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.PlanAssignment": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PlanAssignment.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PlanAssignmentInterval.Collection": {
        getById: {
            argNames: ["id"],
        },

        getByStart: {
            argNames: ["start"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.Project": {
        getResourcePlanByUrl: {
            argNames: ["start", "end", "scale"],
        },

        leaveProjectStage: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        readyToLeaveProjectStage: {
        },

        updateIdeaListItemStatus: {
            argNames: ["status"],
        },

    },

    "PS.ProjectDetailPage.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.ProjectEngagement": {
        delete: {
            requestType: RequestType.Delete
        },

        getTimephasedByUrl: {
            argNames: ["start", "end", "scale", "contourType"],
        },

    },

    "PS.ProjectEngagement.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.ProjectEngagementTimephasedPeriod.Collection": {
        getByStartUrl: {
            argNames: ["start"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.ProjectServer": {
        getDeletedPublishedAssignments: {
            argNames: ["deletedDate"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        stopDelegation: {
        },

    },

    "PS.ProjectWorkflowInstance": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        restartWorkflow: {
        },

        restartWorkflowSkipToStage: {
            argNames: ["stageId"],
        },

    },

    "PS.ProjectWorkflowInstance.Collection": {
        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PublishedAssignment.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PublishedProject": {
        checkOut: {
        },

        createProjectSite: {
            argNames: ["siteName"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        getResourcePlanByUrl: {
            argNames: ["start", "end", "scale"],
        },

        leaveProjectStage: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        readyToLeaveProjectStage: {},

        submitToWorkflow: {},

        unlinkProjectSite: {},

        updateIdeaListItemStatus: {
            argNames: ["status"],
        },

        updateVisibilityCustomFields: {}
    },

    "PS.PublishedProject.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

        validate: {
        },

    },

    "PS.PublishedProjectResource.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PublishedTask": {
        addTaskPlanLink: {
            argNames: ["parameters"],
        },

        deleteTaskPlanLink: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PublishedTask.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.PublishedTaskLink.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.QueueJob": {
        cancel: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.QueueJob.Collection": {
        getAll: {
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.ResourceCalendarException": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.ResourceEngagement": {
        delete: {
            requestType: RequestType.Delete
        },

        getTimephasedByUrl: {
            argNames: ["start", "end", "scale", "contourType"],
        },

    },

    "PS.ResourceEngagement.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.ResourceEngagementTimephasedPeriod.Collection": {
        getByStartUrl: {
            argNames: ["start"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.ResourcePlan": {
        delete: {
            requestType: RequestType.Delete
        },

        forceCheckIn: {
        },

        publish: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.ServiceStatus": {
        stopDelegation: {
        },

    },

    "PS.Stage": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.Stage.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
        },

    },

    "PS.StageCustomField": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.StageCustomField.Collection": {
        add: {
            argNames: ["creationInfo"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.StageDetailPage": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.StageDetailPage.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.StatusAssignment": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        submitStatusUpdates: {
            argNames: ["comment"],
        },

    },

    "PS.StatusAssignment.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        getTimePhaseByUrl: {
            argNames: ["start", "end"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        submitAllStatusUpdates: {
            argNames: ["comment"],
        },

        update: {
        },

    },

    "PS.StatusAssignmentHistoryLine.Collection": {
        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.TaskPlanLink": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.TimeSheet": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recall: {
        },

        submit: {
            argNames: ["comment"],
        },

        update: {
        },

    },

    "PS.TimeSheetLine": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        submit: {
            argNames: ["comment"],
        },

    },

    "PS.TimeSheetLine.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.TimeSheetPeriod": {
        createTimeSheet: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.TimeSheetPeriod.Collection": {
        getByGuid: {
            argNames: ["uid"],
        },

        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.TimeSheetWork": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "PS.TimeSheetWork.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getById: {
            argNames: ["objectId"],
        },

        getByStartDate: {
            argNames: ["start"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "PS.WorkflowActivities": {
        checkInWithJobId: {
            argNames: ["projId", "jobId", "force"],
        },

        createProjectFromListItem: {
            argNames: ["webId", "listId", "itemId", "eptId"],
        },

        enterProjectStage: {
            argNames: ["projectId", "stageId"],
        },

        leaveProjectStage: {
            argNames: ["projectId"],
        },

        publishSummaryWithJobId: {
            argNames: ["projId", "jobId"],
        },

        publishWithJobId: {
            argNames: ["projectId", "jobId"],
        },

        readBooleanProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readCurrencyProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readDateTimeProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readGuidProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readIntegerProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readNumberProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readProjectProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readTextProperty: {
            argNames: ["projectId", "propertyId"],
        },

        readyToLeaveProjectStage: {
            argNames: ["projectId"],
        },

        updateBooleanProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateCurrencyProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateDateTimeProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateGuidProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateIdeaListItemStatus: {
            argNames: ["projectId", "status"],
        },

        updateIntegerProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateNumberProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

        updateProjectStageStatus: {
            argNames: ["projectId", "stageId", "statusInformation", "stageStatusValue", "append"],
        },

        updateTextProperty: {
            argNames: ["projectId", "propertyId", "value"],
        },

    },

    "PS.WorkflowDesignerField.Collection": {
        getById: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Alert": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        updateAlert: {
        },

    },

    "SP.Alert.Collection": {
        add: {
            argNames: ["alertCreationInformation"],
            name: "",
            metadataType: "SP.Alert",
            requestType: RequestType.PostBodyNoArgs
        },

        contains: {
            argNames: ["idAlert"],
        },

        deleteAlert: {
            argNames: ["idAlert"],
        },

        deleteAlertAtIndex: {
            argNames: ["index"],
        },

        getById: {
            argNames: ["idAlert"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.AppInstance": {
        cancelAllJobs: {
        },

        getAppDatabaseConnectionString: {
        },

        getErrorDetails: {
        },

        getPreviousAppVersion: {
        },

        install: {
        },

        recycle: {
        },

        restore: {
        },

        retryAllJobs: {
        },

        uninstall: {
        },

        upgrade: {
            argNames: ["appPackageStream"],
        },

    },

    "SP.Attachment": {
        delete: {
            requestType: RequestType.Delete
        },

        recycleObject: {
            requestType: RequestType.Post
        },

    },

    "SP.Attachment.Collection": {
        add: {
            argNames: ["FileName", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        addUsingPath: {
            argNames: ["DecodedUrl", "contentStream"],
            requestType: RequestType.PostWithArgsAndData
        },

        getByFileName: {
            argNames: ["fileName"]
        },

        getByFileNameAsPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Audit": {
        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },
    },

    "SP.BusinessData.AppBdcCatalog": {
        getConnectionId: {
            argNames: ["lobSystemName", "lobSystemInstanceName"],
        },

        getEntity: {
            argNames: ["namespace", "name"],
        },

        getLobSystemInstanceProperty: {
            argNames: ["lobSystemName", "lobSystemInstanceName", "propertyName"],
        },

        getLobSystemProperty: {
            argNames: ["lobSystemName", "propertyName"],
        },

        getPermissibleConnections: {
        },

        setConnectionId: {
            argNames: ["lobSystemName", "lobSystemInstanceName", "connectionId"],
        },

        setLobSystemInstanceProperty: {
            argNames: ["lobSystemName", "lobSystemInstanceName", "propertyName", "propertyValue"],
        },

        setLobSystemProperty: {
            argNames: ["lobSystemName", "propertyName", "propertyValue"],
        },

    },

    "SP.BusinessData.Entity": {
        getAssociationView: {
            argNames: ["associationName"],
        },

        getCreatorView: {
            argNames: ["methodInstanceName"],
        },

        getDefaultSpecificFinderView: {
        },

        getFilters: {
            argNames: ["methodInstanceName"],
        },

        getFinderView: {
            argNames: ["methodInstanceName"],
        },

        getIdentifierCount: {
        },

        getIdentifiers: {
        },

        getLobSystem: {
        },

        getSpecificFinderView: {
            argNames: ["specificFinderName"],
        },

        getUpdaterView: {
            argNames: ["updaterName"],
        },

    },

    "SP.BusinessData.EntityIdentifier": {
        containsLocalizedDisplayName: {
        },

        getDefaultDisplayName: {
        },

        getLocalizedDisplayName: {
        },

    },

    "SP.BusinessData.EntityView": {
        getDefaultValues: {
        },

        getType: {
            argNames: ["fieldDotNotation"],
        },

        getTypeDescriptor: {
            argNames: ["fieldDotNotation"],
        },

        getXmlSchema: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.BusinessData.Infrastructure.ExternalSubscriptionStore": {
        indexStore: {
        },

    },

    "SP.BusinessData.LobSystem": {
        getLobSystemInstances: {
        },

    },

    "SP.BusinessData.Runtime.EntityFieldValueDictionary": {
        createCollectionInstance: {
            argNames: ["fieldDotNotation", "size"],
        },

        createInstance: {
            argNames: ["fieldInstanceDotNotation", "fieldDotNotation"],
        },

        fromXml: {
            argNames: ["xml"],
        },

        getCollectionSize: {
            argNames: ["fieldDotNotation"],
        },

        toXml: {
        },

    },

    "SP.BusinessData.Runtime.EntityInstance": {
        createCollectionInstance: {
            argNames: ["fieldDotNotation", "size"],
        },

        createInstance: {
            argNames: ["fieldInstanceDotNotation", "fieldDotNotation"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        fromXml: {
            argNames: ["xml"],
        },

        getIdentity: {
        },

        toXml: {
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.BusinessData.TypeDescriptor": {
        containsLocalizedDisplayName: {
        },

        getChildTypeDescriptors: {
        },

        getDefaultDisplayName: {
        },

        getLocalizedDisplayName: {
        },

        getParentTypeDescriptor: {
        },

        isLeaf: {
        },

        isRoot: {
        },

    },

    "SP.CheckedOutFile": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        takeOverCheckOut: {
        },

    },

    "SP.CheckedOutFile.Collection": {
        getByPath: {
            argNames: ["DecodedUrl"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.ClientWebPart": {
        render: {
            argNames: ["properties"],
        },

    },

    "SP.ClientWebPart.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.CompliancePolicy.SPPolicyStoreProxy": {
        addDynamicScopeBinding: {
            argNames: ["identity", "siteId"],
        },

        bulkUpdateDynamicScopeBindings: {
            argNames: ["scopesToAdd", "scopesToRemove", "siteId"],
        },

        deleteDynamicScopeBinding: {
            argNames: ["identity", "siteId"],
        },

        extendReviewItemsRetention: {
            argNames: ["itemIds", "extensionDate"],
        },

        getDynamicScopeBindingBySiteId: {
            argNames: ["siteId"],
        },

        markReviewItemsForDeletion: {
            argNames: ["itemIds"],
        },

        openBinaryStreamForOriginalItem: {
            argNames: ["itemId"],
        },

        removeContainerRetentionPolicy: {
            argNames: ["siteId"],
        },

        removeContainerSettings: {
            argNames: ["externalId"],
        },

        retagReviewItems: {
            argNames: ["itemIds", "newTag", "newTagIsRecord", "newTagBlockDelete", "newTagIsEventBased"],
        },

        retagReviewItemsWithMetas: {
            argNames: ["itemIds", "newTagName", "newTagMetas"],
        },

        setContainerRetentionPolicy: {
            argNames: ["siteId", "defaultContainerLabel"],
        },

        updateContainerSetting: {
            argNames: ["siteId", "externalId", "settingType", "setting"],
        },

    },

    "SP.ContentType": {
        properties: [
            "FieldLinks|SP.FieldLink.Collection|('[Name]')|SP.FieldLink", "Fields|SP.Field.Collection|/getByInternalNameOrTitle('[Name]')|SP.Field", "WorkflowAssociations|SP.Workflow.WorkflowAssociation.Collection"
        ],

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        reorderFields: {
            argNames: ["fieldNames"]
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.ContentType.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.ContentType",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        addAvailableContentType: {
            argNames: ["contentTypeId"],
            requestType: RequestType.PostWithArgsInBody
        },

        getById: {
            argNames: ["contentTypeId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.ContentType"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Directory.DirectorySession": {
        getGraphUser: {
            argNames: ["principalName"],
        },

        getSharePointDataForUser: {
            argNames: ["userId"],
        },

        group: {
            argNames: ["groupId", "alias"],
        },

        joinGroup: {
            argNames: ["groupId"],
        },

        me: {
        },

        user: {
            argNames: ["id", "principalName"],
        },

        validateGroupName: {
            argNames: ["displayName", "alias"],
        },

    },

    "SP.Directory.Group": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Directory.Group.Collection": {
        add: {
            argNames: ["objectId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["objectId"],
        },

    },

    "SP.Directory.Provider.DirectoryNotification": {
        notifyChanges: {
            argNames: ["directoryObjectChanges"],
        },

    },

    "SP.Directory.Provider.SharePointDirectoryProvider": {
        createDirectoryObject: {
            argNames: ["data"],
        },

        deleteDirectoryObject: {
            argNames: ["data"],
        },

        getOrCreateUnifiedGroupTenantInstanceId: {
            argNames: ["groupId", "tenantInstanceId"],
        },

        getOrCreateUnifiedGroupWithPreferredDataLocation: {
            argNames: ["groupId", "preferredDataLocation"],
        },

        notifyDataChanges: {
            argNames: ["data"],
        },

        readDirectoryObject: {
            argNames: ["data"],
        },

        readDirectoryObjectBatch: {
            argNames: ["ids", "objectType"],
        },

        updateCache: {
            argNames: ["data"],
        },

        updateDirectoryObject: {
            argNames: ["data"],
        },

    },

    "SP.Directory.User": {
        getUserLinks: {
            argNames: ["linkName", "groupType"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Directory.User.Collection": {
        add: {
            argNames: ["objectId", "principalName"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["objectId"],
        },

    },

    "SP.DocumentManagement.DocumentId": {
        resetDocIdByServerRelativePath: {
            argNames: ["DecodedUrl"],
        },

        resetDocIdsInLibrary: {
            argNames: ["DecodedUrl", "contentTypeId"],
        },

    },

    "SP.EventReceiverDefinition": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.EventReceiverDefinition.Collection": {
        add: {
            argNames: ["eventReceiverCreationInformation"],
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["eventReceiverId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.EventReceiverDefinition"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Feature.Collection": {
        add: {
            argNames: ["featureId", "force", "featdefScope"],
            requestType: RequestType.PostWithArgs
        },

        getById: {
            argNames: ["featureId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Feature"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["featureId", "force"],
            requestType: RequestType.PostWithArgs
        },

    },

    "SP.Field": {
        add: {
            argNames: ["parameters"],
            name: "",
            metadataType: "SP.Field",
            requestType: RequestType.PostBodyNoArgs
        },

        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.Field",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Field.Collection": {
        addDependentLookupField: {
            argNames: ["displayName", "primaryLookupFieldId", "showField"],
            requestType: RequestType.PostWithArgs
        },

        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        createFieldAsXml: {
            argNames: ["schemaXml"],
            requestType: RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                    __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                    Options: 8,
                    SchemaXml: "[[schemaXml]]"
                }
            }
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly,
            returnType: "SP.Field"
        },

        getByInternalNameOrTitle: {
            argNames: ["strName"],
            requestType: RequestType.PostWithArgsValueOnly,
            returnType: "SP.Field"
        },

        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.PostWithArgsValueOnly,
            returnType: "SP.Field"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.FieldCalculated": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldCalculated",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldChoice": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldChoice",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldComputed": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldComputed",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldCurrency": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldCurrency",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldDateTime": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldDateTime",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldGeolocation": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldGeolocation",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldGuid": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldGuid",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },
    },

    "SP.FieldLink": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldLink",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },
    },

    "SP.FieldLink.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.FieldLink",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.FieldLink"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        reorder: {
            argNames: ["internalNames"]
        },

    },

    "SP.FieldLocation": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldLocation",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldLookup": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldLookup",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldMultiChoice": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldMultiChoice",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldMultiLineText": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldMultiLineText",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldNumber": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldNumber",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldRatingScale": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldRatingScale",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldText": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldText",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldThumbnail": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldThumbnail",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },
    },

    "SP.FieldUrl": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldUrl",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.FieldUser": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInEditForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        setShowInNewForm: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: "SP.FieldUser",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.File": {
        properties: [
            "Author|SP.User", "CheckedOutByUser|SP.User", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
            "ListItemAllFields", "LockedByUser|SP.User", "ModifiedBy|SP.User", "Properties", "VersionEvents", "Versions|SP.FileVersion.Collection"
        ],

        addClientActivities: {
            argNames: ["activitiesStream"],
            requestType: RequestType.PostWithArgs
        },

        approve: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        cancelUpload: {
            argNames: ["uploadId"],
            name: "cancelupload(guid'[[uploadId]]')",
            requestType: RequestType.PostReplace
        },

        checkAccessAndPostViewAuditEvent: {
        },

        checkIn: {
            argNames: ["comment", "checkInType"],
            requestType: RequestType.PostWithArgs
        },

        checkOut: {
            requestType: RequestType.Post
        },

        content: {
            name: "$value",
            requestType: RequestType.GetBuffer
        },

        continueUpload: {
            argNames: ["uploadId", "fileOffset", "stream"],
            name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: RequestType.PostReplaceWithData
        },

        copyTo: {
            argNames: ["strNewUrl", "bOverWrite"],
            requestType: RequestType.PostWithArgs
        },

        copyToUsingPath: {
            argNames: ["DecodedUrl", "bOverWrite"],
            requestType: RequestType.PostWithArgs
        },

        delete: {
            requestType: RequestType.Delete
        },

        deleteWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        deny: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        executeCobaltRequest: {
            argNames: ["inputStream"],
            requestType: RequestType.PostWithArgsAndData
        },

        finishUpload: {
            argNames: ["uploadId", "fileOffset", "stream"],
            name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: RequestType.PostReplaceWithData
        },

        finishUploadWithChecksum: {
            argNames: ["uploadId", "fileOffset", "checksum", "stream"],
            name: "finishUploadWithChecksum(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]], checksum=[[checksum]])",
            requestType: RequestType.PostReplaceWithData
        },

        getFileUserValue: {
            argNames: ["key"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getImagePreviewUri: {
            argNames: ["width", "height", "clientType"],
            requestType: RequestType.GetWithArgs
        },

        getImagePreviewUrl: {
            argNames: ["width", "height", "clientType"],
            requestType: RequestType.GetWithArgs
        },

        getLimitedWebPartManager: {
            argNames: ["scope"],
            name: "getLimitedWebPartManager(scope=[[scope]])",
            requestType: RequestType.GetReplace,
            returnType: "SP.WebParts.LimitedWebPartManager"
        },

        getPreAuthorizedAccessUrl: {
            argNames: ["expirationHours"],
            requestType: RequestType.GetWithArgs
        },

        getPreAuthorizedAccessUrl2: {
            argNames: ["expirationHours", "expirationMinuites"],
            requestType: RequestType.GetWithArgs
        },

        getUploadStatus: {
            argNames: ["uploadId"],
        },

        getWOPIFrameUrl: {
            argNames: ["action"],
            requestType: RequestType.PostWithArgsInQS
        },

        moveTo: {
            argNames: ["newUrl", "flags"],
            name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
            requestType: RequestType.PostReplace
        },

        moveToUsingPath: {
            argNames: ["DecodedUrl", "moveOperations"],
            requestType: RequestType.PostWithArgs
        },

        openBinaryStream: {
            requestType: RequestType.GetBuffer
        },

        openBinaryStreamWithOptions: {
            argNames: ["openOptions"],
            requestType: RequestType.GetBuffer
        },

        publish: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recycle: {
            requestType: RequestType.Post
        },

        recycleWithETag: {
            argNames: ["etagMatch"],
            requestType: RequestType.PostWithArgsInBody
        },

        recycleWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        saveBinaryStream: {
            argNames: ["file"],
            requestType: RequestType.PostWithArgsAndData
        },

        setFileUserValue: {
            argNames: ["key", "value"],
            requestType: RequestType.PostWithArgs
        },

        startUpload: {
            argNames: ["uploadId", "stream"],
            name: "startupload(uploadId=guid'[[uploadId]]')",
            requestType: RequestType.PostReplaceWithData
        },

        unPublish: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        undoCheckOut: {
            requestType: RequestType.Post
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.File",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        updateVirusInfo: {
            argNames: ["virusStatus", "virusMessage", "etagToCheck"],
            requestType: RequestType.PostWithArgs
        },

    },

    "SP.File.Collection": {
        add: {
            argNames: ["Url", "Overwrite", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        addStub: {
            argNames: ["urlOfFile"],
            requestType: RequestType.PostWithArgs
        },

        addStubUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.PostWithArgs
        },

        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: RequestType.PostWithArgs
        },

        addUsingPath: {
            argNames: ["DecodedUrl", "AutoCheckoutOnInvalidData", "Overwrite", "XorHash", "contentStream"],
            requestType: RequestType.PostWithArgsAndData
        },

        getByPathOrAddStub: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getByUrl: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getByUrlOrAddStub: {
            argNames: ["urlOfFile"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.FileVersion": {
        delete: {
            requestType: RequestType.Delete
        },

        openBinaryStream: {
            requestType: RequestType.GetBuffer,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.FileVersion.Collection": {
        deleteAll: {
            requestType: RequestType.Post
        },

        deleteByID: {
            argNames: ["vid"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        deleteByLabel: {
            argNames: ["versionlabel"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getById: {
            argNames: ["versionid"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Version"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recycleByID: {
            argNames: ["vid"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        recycleByLabel: {
            argNames: ["versionlabel"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        restoreByLabel: {
            argNames: ["versionlabel"],
            requestType: RequestType.PostWithArgsValueOnly
        },

    },

    "SP.Folder": {
        properties: [
            "Files|SP.File.Collection|/getByUrl('[Name]')|SP.File", "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder", "ListItemAllFields",
            "ParentFolder|SP.Folder", "Properties", "StorageMetrics"
        ],

        addSubFolder: {
            argNames: ["leafName"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        addSubFolderUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        delete: {
            requestType: RequestType.Delete
        },

        deleteWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getListItemChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        moveTo: {
            argNames: ["newUrl"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        moveToUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recycle: {
            requestType: RequestType.Post
        },

        recycleWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.Folder",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "SP.Folder.Collection": {
        properties: [
            "Files|SP.File.Collection|/getByUrl('[Name]')|SP.File", "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder", "ListItemAllFields",
            "ParentFolder", "StorageMetrics"
        ],

        add: {
            argNames: ["url"],
            requestType: RequestType.PostWithArgs
        },

        addUsingPath: {
            argNames: ["DecodedUrl", "Overwrite"],
            requestType: RequestType.PostWithArgs
        },

        addWithOverwrite: {
            argNames: ["url", "overwrite"],
            requestType: RequestType.PostWithArgs
        },

        getByPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getByUrl: {
            argNames: ["url"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Form.Collection": {
        getById: {
            argNames: ["id"],
        },

        getByPageType: {
            argNames: ["formType"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Group": {
        properties: [
            "Users|SP.User.Collection|/getById([Name])|SP.User"
        ],

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setUserAsOwner: {
            argNames: ["ownerId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            metadataType: "SP.Group",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Group.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.Group",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Group"
        },

        getByName: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Group"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        removeByLoginName: {
            argNames: ["loginName"],
            requestType: RequestType.PostWithArgsValueOnly
        },

    },

    "SP.HubSite": {
        delete: {
            requestType: RequestType.Delete
        }
    },

    "SP.HubSite.Collection": {
        getById: {
            argNames: ["hubSiteId"],
            requestType: RequestType.GetWithArgsInQS
        },

        getConnectedHubs: {
            argNames: ["hubSiteId", "option"],
            requestType: RequestType.GetWithArgsInQS
        },

        getSiteUrlByHubSiteId: {
            argNames: ["hubSiteId"],
            requestType: RequestType.GetWithArgsInQS
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.InformationRightsManagementFileSettings": {
        reset: {
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.InformationRightsManagementSettings": {
        reset: {
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.KnowledgeHub": {
        siteReference: {
        },

    },

    "SP.LanguageCollection": {
        getById: {
            argNames: ["id"],
        },

    },

    "SP.List": {
        properties: [
            "BrowserFileHandling", "ContentTypes|SP.ContentType.Collection|('[Name]')|SP.ContentType", "CreatablesInfo",
            "DefaultDisplayFormUrl", "DefaultEditFormUrl", "DefaultNewFormUrl", "DefaultView|SP.View",
            "DescriptionResource", "EventReceivers|SP.EventReceiverDefinition.Collection|('[Name]')|SP.EventReceiverDefinition", "Fields|SP.Field.Collection|/getByInternalNameOrTitle('[Name]')|SP.Field",
            "FirstUniqueAncestorSecurableObject", "Forms|SP.Form.Collection|('[Name]')|SP.Form", "InformationRightsManagementSettings",
            "Items|SP.ListItem.Collection|([Name])|SP.ListItem", "ParentWeb", "RoleAssignments|SP.RoleAssignment.Collection|([Name])|SP.RoleAssignment",
            "RootFolder|SP.Folder|/getByUrl('[Name]')|SP.File", "Subscriptions", "TitleResource",
            "UserCustomActions|SP.UserCustomAction.Collection|('[Name]')|SP.UserCustomAction", "Views|SP.View.Collection|('[Name]')|SP.View", "WorkflowAssociations"
        ],
        addItem: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        addItemUsingPath: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        addValidateUpdateItem: {
            argNames: ["listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment"],
            requestType: RequestType.PostWithArgsInBody
        },

        addValidateUpdateItemUsingPath: {
            argNames: ["listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment"],
            requestType: RequestType.PostWithArgsInBody
        },

        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
            requestType: RequestType.PostWithArgs
        },

        bulkValidateUpdateListItems: {
            argNames: ["itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentAndGetEditLink: {
            argNames: ["fileName", "folderPath", "documentTemplateType", "templateUrl"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentWithDefaultName: {
            argNames: ["folderPath", "extension"],
            requestType: RequestType.PostWithArgsInBody
        },

        createMappedView: {
            argNames: ["appViewCreationInfo", "visualizationTarget"],
            requestType: RequestType.PostWithArgsInBody
        },

        delete: {
            requestType: RequestType.Delete
        },

        ensureSignoffStatusField: {
        },

        getBloomFilter: {
            argNames: ["startItemId"],
        },

        getBloomFilterWithCustomFields: {
            argNames: ["listItemStartingID", "internalFieldNames"],
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getCheckedOutFiles: {
        },

        getItemById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.ListItem"
        },

        getItemByStringId: {
            argNames: ["sId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getItemByUniqueId: {
            argNames: ["uniqueId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getItems: {
            argNames: ["viewXML"],
            requestType: RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "[[viewXML]]"
                }
            }
        },

        getItemsByQuery: {
            argNames: ["camlQuery"],
            name: "getItems",
            requestType: RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "<View>[[camlQuery]]</View>"
                }
            }
        },

        getListItemChangesSinceToken: {
            argNames: ["query"],
            metadataType: "SP.ChangeLogItemQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getMappedApp: {
            argNames: ["appId", "visualizationAppTarget"],
        },

        getMappedApps: {
            argNames: ["visualizationAppTarget"],
        },

        getRelatedFields: {
        },

        getSpecialFolderUrl: {
            argNames: ["type", "bForceCreate", "existingFolderGuid"],
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
            name: "getUserEffectivePermissions(@user)?@user='[[userName]]'",
            requestType: RequestType.GetReplace
        },

        getView: {
            argNames: ["viewGuid"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.View"
        },

        getWebDavUrl: {
            argNames: ["sourceUrl"],
        },

        publishMappedView: {
            argNames: ["appId", "visualizationTarget"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },
        recycle: {
            requestType: RequestType.Post
        },

        renderExtendedListFormData: {
            argNames: ["itemId", "formId", "mode", "options", "cutoffVersion"],
        },

        renderListContextMenuData: {
            argNames: ["CascDelWarnMessage", "CustomAction", "Field", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsXslView", "ItemId", "ListViewPageUrl", "OverrideScope", "RootFolder", "View", "ViewCount"],
        },

        renderListData: {
            argNames: ["viewXml"],
            name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
            requestType: RequestType.PostReplace
        },

        renderListDataAsStream: {
            argNames: ["parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId"],
            requestType: RequestType.PostWithArgsInBody
        },

        renderListFilterData: {
            argNames: ["ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId"],
            requestType: RequestType.PostWithArgsInBody
        },

        renderListFormData: {
            argNames: ["itemId", "formId", "mode"],
            requestType: RequestType.PostWithArgs
        },

        reserveListItemId: {
            requestType: RequestType.Post
        },

        resetRoleInheritance: {
            requestType: RequestType.Post
        },

        saveAsNewView: {
            argNames: ["oldName", "newName", "privateView", "uri"],
            requestType: RequestType.PostWithArgsInBody
        },

        saveAsTemplate: {
            argNames: ["strFileName", "strName", "strDescription", "bSaveData"],
            requestType: RequestType.PostWithArgsInBody
        },

        setExemptFromBlockDownloadOfNonViewableFiles: {
            argNames: ["value"],
        },

        syncFlowCallbackUrl: {
            argNames: ["flowId"],
        },

        syncFlowInstance: {
            argNames: ["flowID"],
        },

        syncFlowInstances: {
        },

        syncFlowTemplates: {
            argNames: ["category"],
        },

        unpublishMappedView: {
            argNames: ["appId", "visualizationTarget"],
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        validateAppName: {
            argNames: ["appDisplayName"],
        },

    },

    "SP.List.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.List",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        ensureClientRenderedSitePagesLibrary: {
            requestType: RequestType.Post
        },

        ensureEventsList: {
            requestType: RequestType.Post
        },

        ensureSiteAssetsLibrary: {
            requestType: RequestType.Post
        },

        ensureSitePagesLibrary: {
            requestType: RequestType.Post
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.List"
        },

        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.List"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },
    },

    "SP.ListItem": {
        properties: [
            "AttachmentFiles|SP.Attachment.Collection|('[Name]')|SP.Attachment", "ContentType|SP.ContentType", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
            "File|SP.File", "FirstUniqueAncestorSecurableObject", "Folder|SP.Folder", "GetDlpPolicyTip", "ParentList",
            "Properties", "RoleAssignments|SP.RoleAssignment.Collection|roleassignments|([Name])|SP.RoleAssignment"
        ],
        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
            requestType: RequestType.PostWithArgs
        },

        delete: {
            requestType: RequestType.Delete
        },

        deleteWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getHashtags: {
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
            name: "getUserEffectivePermissions(@user)?@user='[[userName]]'",
            requestType: RequestType.GetReplace
        },

        getWOPIFrameUrl: {
            argNames: ["action"],
            requestType: RequestType.PostWithArgsInQS
        },

        mediaServiceUpdate: {
            argNames: ["parameters"],
        },

        mediaServiceUpdateV2: {
            argNames: ["parameters", "eventFiringEnabled"],
        },

        overridePolicyTip: {
            argNames: ["userAction", "justification"],
        },

        parseAndSetFieldValue: {
            argNames: ["fieldName", "value"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },
        recycle: {
            requestType: RequestType.Post
        },

        recycleWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        resetRoleInheritance: {
            requestType: RequestType.Post
        },

        setCommentsDisabled: {
            argNames: ["value"],
        },

        setComplianceTag: {
            argNames: ["complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock"],
        },

        setComplianceTagWithExplicitMetasUpdate: {
            argNames: ["complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress"],
        },

        setComplianceTagWithHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithMetaInfo: {
            argNames: ["complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock"],
        },

        setComplianceTagWithNoHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithRecord: {
            argNames: ["complianceTag"],
        },

        systemUpdate: {
        },

        update: {
            argNames: ["properties"],
            inheritMetadataType: true,
            metadataType: function (obj) {
                return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem"
            },
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        updateEx: {
            argNames: ["parameters"],
        },

        updateHashtags: {
            argNames: ["hashtagsToAdd", "hashtagsToRemove"],
        },

        updateOverwriteVersion: {
        },

        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment"],
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "SP.ListItem.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: function (obj) {
                return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem"
            },
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["itemId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.ListItem"
        },

        getByStringId: {
            argNames: ["sId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.ListItemVersion": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.ListItemVersion.Collection": {
        getById: {
            argNames: ["versionId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.ListTemplate": {
        getGlobalSchemaXml: {
        },

    },

    "SP.ListTemplate.Collection": {
        getByName: {
            argNames: ["name"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.MicroService.MicroServiceManager": {
        addMicroserviceWorkItem: {
            argNames: ["payLoad", "minutes", "properties"],
        },

        deleteMicroserviceWorkItem: {
            argNames: ["workItemId"],
        },

        deleteMicroserviceWorkItemByContentDbId: {
            argNames: ["contentDatabaseId", "siteId", "workItemId"]
        },

        getServiceInternalUrls: {
            argNames: ["service"],
        },

        getServiceUrls: {
            argNames: ["service"],
        },

    },

    "SP.Microfeed.MicrofeedAttachmentStore": {
        deletePreProcessedAttachment: {
            argNames: ["attachmentUri"],
        },

        getImage: {
            argNames: ["imageUrl", "key", "iv"],
        },

        preProcessAttachment: {
            argNames: ["link"],
        },

        putFile: {
            argNames: ["originalFileName", "fileData"],
        },

        putImage: {
            argNames: ["imageData"],
        },

    },

    "SP.Microfeed.MicrofeedData": {
        addAttachment: {
            argNames: ["name", "bytes"],
        },

        systemUpdate: {
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Microfeed.MicrofeedData.Collection": {
        deleteAll: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Microfeed.MicrofeedManager": {
        addUserToPostPeopleList: {
            argNames: ["postIdentifier", "UserLoginName"],
        },

        clearUnreadMentionsCount: {
        },

        deleteById: {
            argNames: ["postIdentifier"],
        },

        deleteUserFromPostPeopleList: {
            argNames: ["postIdentifier", "UserLoginName"],
        },

        getMyCategoricalFeed: {
            argNames: ["feedOptions"],
        },

        getMyConsolidatedFeed: {
            argNames: ["feedOptions"],
        },

        getMyPublishedFeed: {
            argNames: ["feedOptions", "typeOfPubFeed", "ShowPublicView"],
        },

        getPublishedFeed: {
            argNames: ["feedOwner", "feedOptions", "typeOfPubFeed"],
        },

        getThread: {
            argNames: ["postIdentifier"],
        },

        getUnreadMentionsCount: {
        },

        like: {
            argNames: ["postIdentifier"],
        },

        lockThreadById: {
            argNames: ["threadIdentifier"],
        },

        post: {
            argNames: ["postOptions"],
        },

        postReply: {
            argNames: ["postIdentifier", "postReplyOptions"],
        },

        repopulateLMT: {
            argNames: ["timeStamp", "secureHash"],
        },

        unLike: {
            argNames: ["postIdentifier"],
        },

        unLockThreadById: {
            argNames: ["threadIdentifier"],
        },

        unsubscribeFromEMail: {
            argNames: ["postIdentifier"],
        },

    },

    "SP.Microfeed.MicrofeedPostDefinitionManager": {
        deleteMicrofeedPostDefinition: {
            argNames: ["postDefinition"],
        },

        getMicrofeedPostDefinition: {
            argNames: ["definitionName"],
        },

        getMicrofeedPostDefinitions: {
        },

        newMicrofeedPostDefinition: {
            argNames: ["definitionName"],
        },

        updateMicrofeedPostDefinition: {
            argNames: ["postDefinition"],
        },

    },

    "SP.Microfeed.MicrofeedStore": {
        addData: {
            argNames: ["name", "data"],
        },

        addDataAsStream: {
            argNames: ["name", "data"],
        },

        executePendingOperations: {
        },

        getItem: {
            argNames: ["storeIdentifier"],
        },

        getSocialProperties: {
            argNames: ["accountName"],
        },

        incrementUnreadAtMentionCount: {
            argNames: ["accountName"],
        },

        newItem: {
            argNames: ["storeIdentifier"],
        },

        query: {
            argNames: ["storeIdentifier", "query"],
        },

        setPostLikeStatus: {
            argNames: ["accountName", "postId", "like"],
        },

    },

    "SP.MultilingualSettings": {
        query: { argNames: ["oData"] },

        setNotificationRecipients: {
            argNames: ["request"],
        },

    },

    "SP.Navigation": {
        properties: [
            "QuickLaunch|SP.NavigationNode.Collection|/../getNodeById([Name])|SP.NavigationNode",
            "TopNavigationBar|SP.NavigationNode.Collection|/../getNodeById([Name])|SP.NavigationNode"
        ],

        getNodeById: {
            argNames: ["id"],
            returnType: "SP.NavigationNode"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.NavigationNode": {
        properties: [
            "Children|SP.NavigationNode.Collection|/../getNodeById([Name])|SP.NavigationNode"
        ],

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "SP.NavigationNode",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.NavigationNode.Collection": {
        getById: {
            argNames: ["id"],
        },

        getByIndex: {
            argNames: ["index"],
        },

        moveAfter: {
            argNames: ["nodeId", "previousNodeId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.OAuth.NativeClient": {
        authenticate: {
        },

    },

    "SP.OAuth.Token": {
        acquire: {
            argNames: ["resource", "tokenType"],
        },

    },

    "SP.ObjectSharingInformation": {
        getSharedWithUsers: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.OrganizationNews": {
        sitesReference: {}
    },

    "SP.Publishing.CommunicationSite": {
        create: {
            argNames: ["request"],
        },

        enable: {
            argNames: ["designPackageId"]
        },

        status: {
            argNames: ["url"],
        },

    },

    "SP.Publishing.EmbedService": {
        embedData: {
            argNames: ["url", "version"],
        },

    },

    "SP.Publishing.Navigation.PortalNavigationCacheWrapper": {
        disable: {
        },

        enable: {
        },

        refresh: {
        },

    },

    "SP.Publishing.PointPublishingPost": {
        addImageFromUrl: {
            argNames: ["fromImageUrl"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.PointPublishingPost.Collection": {
        getById: {
            argNames: ["id", "publishedOnly"],
        },

        getByName: {
            argNames: ["name", "publishedOnly"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.PointPublishingPostServiceManager": {
        addBannerImageFromUrl: {
            argNames: ["fromImageUrl"],
        },

        deleteMagazine: {
        },

        getDocProps: {
            argNames: ["docUrls"],
        },

        getPostsQuery: {
            argNames: ["top", "itemIdBoundary", "directionAscending", "publishedOnly", "draftsOnly"],
        },

        getTopAuthors: {
            argNames: ["count"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        queryGroupNames: {
            argNames: ["query"],
        },

        setMagazineProperties: {
            argNames: ["title", "description", "bannerImageUrl", "bannerColor", "bannerPattern"],
        },

    },

    "SP.Publishing.PointPublishingSiteManager": {
        create: {
            argNames: ["siteInfo"],
        },

        getSiteStatus: {
            argNames: ["siteInfo"],
        },

    },

    "SP.Publishing.PointPublishingTenantManager": {
        isBlogEnabled: {
        },

    },

    "SP.Publishing.PointPublishingUser": {
        deleteUserFromContainerGroup: {
        },

    },

    "SP.Publishing.PointPublishingUser.Collection": {
        addOrUpdateUser: {
            argNames: ["loginName", "isOwner"],
        },

        getById: {
            argNames: ["userId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.RepostPage": {
        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
        },

        createNewsCopy: {},

        demoteFromNews: {
        },

        discardPage: {
        },

        getVersion: {
            argNames: ["versionId"],
        },

        promoteToNews: {
        },

        publish: {
        },

        saveDraft: {
            argNames: ["sitePage"],
        },

        savePage: {
            argNames: ["pageStream"],
        },

        savePageAsDraft: {
            argNames: ["pageStream"],
        },

        savePageAsTemplate: {
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.RepostPage.Collection": {
        isContentTypeAvailable: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.RichSharing": {
        sharePageByEmail: {
            argNames: ["url", "message", "recipientEmails"],
        },

        shareSiteByEmail: {
            argNames: ["CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails"],
        },

    },

    "SP.Publishing.Search": {
        newest: {
            argNames: ["startItemIndex", "itemLimit"],
        },

        popular: {
            argNames: ["startItemIndex", "itemLimit"],
        },

        query: {
            argNames: ["queryText", "startItemIndex", "itemLimit", "culture"],
        },

        queryChannels: {
            argNames: ["queryText", "startItemIndex", "itemLimit", "culture"],
        },

        related: {
            argNames: ["videoId", "startItemIndex", "itemLimit"],
        },

    },

    "SP.Publishing.SharePointHomeServiceManager": {
        getAcronymsAndColors: {
            argNames: ["labels"],
        },

    },

    "SP.Publishing.SitePage": {
        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
        },

        createNewsCopy: {},

        demoteFromNews: {
        },

        discardPage: {
        },

        getVersion: {
            argNames: ["versionId"],
        },

        promoteToNews: {
        },

        publish: {
        },

        query: { argNames: ["oData"] },

        saveDraft: {
            argNames: ["sitePage"],
        },

        savePage: {
            argNames: ["pageStream"],
        },

        savePageAsDraft: {
            argNames: ["pageStream"],
        },

        savePageAsTemplate: {
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.SitePage.Collection": {
        createAppPage: {
            argNames: ["webPartDataAsJson"]
        },

        createFullPageApp: {
            argNames: ["webPartDataAsJson", "title", "addToQuickLaunch"]
        },

        ensureTitleResource: {
        },

        feed: {
            argNames: ["promotedState", "published", "metadataFilter", "languageOverride"],
        },

        feedTargeted: {
            argNames: ["promotedState", "published", "metadataFilter", "languageOverride"],
        },

        getById: {
            argNames: ["id"],
        },

        getByUniqueId: {
            argNames: ["uniqueId"],
        },

        getByUrl: {
            argNames: ["url"],
        },

        getPageColumnState: {
            argNames: ["url"],
        },

        isSitePage: {
            argNames: ["url"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        templates: {
        },

        updateAppPage: {
            argNames: ["pageId", "webPartDataAsJson", "title", "includeInNavigation"]
        },

        updateFullPageApp: {
            argNames: ["serverRelativeUrl", "webPartDataAsJson"]
        }
    },

    "SP.Publishing.SitePage3D": {
        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
        },

        createNewsCopy: {
        },

        demoteFromNews: {
        },

        discardPage: {
        },

        getVersion: {
            argNames: ["versionId"],
        },

        promoteToNews: {
        },

        publish: {
        },

        saveDraft: {
            argNames: ["sitePage"],
        },

        savePage: {
            argNames: ["pageStream"],
        },

        savePageAsDraft: {
            argNames: ["pageStream"],
        },

        savePageAsTemplate: {
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        update: {
        },

    },

    "SP.Publishing.SitePageMetadata.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.SitePageService": {
        addImage: {
            argNames: ["pageName", "imageFileName", "imageStream"],
        },

        addImageFromExternalUrl: {
            argNames: ["pageName", "imageFileName", "externalUrl", "subFolderName"],
        },

        canCreatePromotedPage: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.SpotlightChannel": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.SpotlightChannel.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.SpotlightVideo": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.SpotlightVideo.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.SubtitleFile.Collection": {
        add: {
            argNames: ["language", "extension", "stream"],
        },

        getSubtitleFile: {
            argNames: ["name"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["name"],
        },

    },

    "SP.Publishing.VideoChannel": {
        getAllVideos: {
            argNames: ["skip", "limit"],
        },

        getChannelPageUrl: {
            argNames: ["viewMode"],
        },

        getMyVideos: {
            argNames: ["skip", "limit"],
        },

        getPermissionGroup: {
            argNames: ["permission"],
        },

        getVideoCount: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.VideoChannel.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.VideoItem": {
        customThumbnail: {
        },

        delete: {
            requestType: RequestType.Delete
        },

        getFile: {
        },

        getPlaybackMetadata: {
            argNames: ["sdnConfiguration"],
        },

        getPlaybackUrl: {
            argNames: ["videoFormat"],
        },

        getStreamingKeyAccessToken: {
        },

        getVideoDetailedViewCount: {
        },

        getVideoEmbedCode: {
            argNames: ["width", "height", "autoplay", "showInfo", "makeResponsive"],
        },

        getVideoViewProgressCount: {
        },

        incrementVideoViewProgressCount: {
            argNames: ["percentageViewed"],
        },

        incrementViewCount: {
            argNames: ["viewOrigin"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setPeopleInMedia: {
            argNames: ["loginNames"],
        },

        setVideoOwner: {
            argNames: ["id"],
        },

        subtitles: {
        },

        thumbnailStream: {
            argNames: ["preferredWidth"],
        },

        thumbnails: {
            argNames: ["preferredWidth"],
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        uploadCustomThumbnail: {
            argNames: ["fileExtension", "customVideoThumbnail"],
        },

    },

    "SP.Publishing.VideoItem.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.VideoPermissionGroup": {
        hasCurrentUser: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.VideoServiceManager": {
        getChannels: {
            argNames: ["startIndex", "limit"],
        },

        getPermissionGroup: {
            argNames: ["permission"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.VideoThumbnail.Collection": {
        getByIndex: {
            argNames: ["choice"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.PushNotificationSubscriber": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.PushNotificationSubscriber.Collection": {
        getByStoreId: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.RecycleBinItem": {
        delete: {
            requestType: RequestType.Delete
        },

        moveToSecondStage: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        restore: {
        },

    },

    "SP.RecycleBinItem.Collection": {
        deleteAll: {
        },

        deleteAllSecondStageItems: {
        },

        deleteByIds: {
            argNames: ["ids"],
        },

        getById: {
            argNames: ["id"],
        },

        moveAllToSecondStage: {
        },

        moveToSecondStageByIds: {
            argNames: ["ids"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        restoreAll: {
        },

        restoreByIds: {
            argNames: ["ids"],
        },

    },

    "SP.RegionalSettings": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.RelatedField.Collection": {
        getByFieldId: {
            argNames: ["fieldId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.RemoteWeb": {
        getFileByServerRelativePath: {
            argNames: ["serverRelatvieFilePath"],
        },

        getFileByServerRelativeUrl: {
            argNames: ["serverRelativeFileUrl"],
        },

        getFileByUrl: {
            argNames: ["fileUrl"],
        },

        getFolderByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
        },

        getGroupById: {
            argNames: ["groupId"],
        },

        getListById: {
            argNames: ["listGuid"],
        },

        getListByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.RequestContext": {
        getRemoteContext: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.RoleAssignment": {
        properties: [
            "Member", "RoleDefinitionBindings|SP.RoleDefinition.Collection"
        ],

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            argNames: ["properties"],
            metadataType: "SP.RoleAssignment",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.RoleAssignment.Collection": {
        addRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: RequestType.PostWithArgs
        },

        getByPrincipalId: {
            argNames: ["principalId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.RoleAssignment"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: RequestType.PostWithArgs
        },

    },

    "SP.RoleDefinition": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.RoleDefinition",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.RoleDefinition.Collection": {
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.RoleDefinition"
        },

        getByName: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.RoleDefinition"
        },

        getByType: {
            argNames: ["roleType"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.RoleDefinition"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recreateMissingDefaultRoleDefinitions: {
        },

        removeAll: {
        },

    },

    "SP.ScriptSafeDomain": {
        delete: {
            requestType: RequestType.Delete
        },

    },

    "SP.ScriptSafeDomain.Collection": {
        create: {
            argNames: ["parameters"],
        },

        getByDomainName: {
            argNames: ["domainName"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.SecurableObject": {
        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        resetRoleInheritance: {
        },

    },

    "SP.Site": {
        properties: [
            "EventReceivers|SP.EventReceiverDefinition.Collection|('[Name]')|SP.EventReceiverDefinition", "Features|SP.Feature.Collection|('[Name]')|SP.Feature", "Owner|SP.User", "RootWeb|SP.Web",
            "UserCustomActions|SP.UserCustomAction.Collection|('[Name]')|SP.UserCustomAction"
        ],

        createCopyJob: {
            argNames: ["exportObjectUris", "destinationUri", "options"],
            requestType: RequestType.PostWithArgs
        },

        createCopyJobs: {
            argNames: ["exportObjectUris", "destinationUri", "options"],
            requestType: RequestType.PostWithArgs
        },

        createMigrationIngestionJob: {
            argNames: ["gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "ingestionTaskKey"],
            requestType: RequestType.PostWithArgs
        },

        createMigrationJob: {
            argNames: ["gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri"],
            requestType: RequestType.PostWithArgs
        },

        createMigrationJobEncrypted: {
            argNames: ["gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "options"],
            requestType: RequestType.PostWithArgs
        },

        createPreviewSPSite: {
            argNames: ["upgrade", "sendemail"],
            requestType: RequestType.PostWithArgs
        },

        createSPAsyncReadJob: {
            argNames: ["url", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri"],
            requestType: RequestType.PostWithArgs
        },

        deleteMigrationJob: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        extendUpgradeReminderDate: {
            requestType: RequestType.Post
        },

        getBringYourOwnKeySiteStatus: {
        },

        getBringYourOwnKeyTenantStatus: {
        },

        getCatalog: {
            argNames: ["typeCatalog"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getCopyJobProgress: {
            argNames: ["copyJobInfo"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getHubSiteJoinApprovalCorrelationId: {
        },

        getMigrationJobStatus: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getMigrationStatus: {
        },

        getRecycleBinItems: {
            argNames: ["pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState"],
            requestType: RequestType.GetWithArgsInBody
        },

        getWebPath: {
            argNames: ["siteId", "webId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getWebTemplates: {
            argNames: ["LCID", "overrideCompatLevel"],
            requestType: RequestType.PostWithArgs
        },

        invalidate: {
            requestType: RequestType.Post
        },

        joinHubSite: {
            argNames: ["hubSiteId", "approvalToken", "approvalCorrelationId"],
            requestType: RequestType.GetWithArgsInBody
        },

        multiGeoCopyJob: {
            argNames: ["jobId", "userId", "binaryPayload"],
        },

        needsUpgradeByType: {
            argNames: ["versionUpgrade", "recursive"],
            requestType: RequestType.PostWithArgs
        },

        onHubSiteJoinRequestApproved: {
            argNames: ["joiningSiteId"],
        },

        onHubSiteJoinRequestCanceled: {
            argNames: ["approvalCorrelationId"],
        },

        onHubSiteJoinRequestStarted: {
            argNames: ["approvalCorrelationId"],
        },

        onboardTenantForBringYourOwnKey: {
            argNames: ["keyInfo"],
        },

        openWeb: {
            argNames: ["strUrl"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        openWebById: {
            argNames: ["gWebId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        openWebUsingPath: {
            argNames: ["path"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        provisionMigrationContainers: {
        },

        provisionMigrationQueue: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recoverTenantForBringYourOwnKey: {
            argNames: ["keyInfo"],
        },

        registerHubSite: {
            argNames: ["creationInformation"],
            requestType: RequestType.PostBodyNoArgs
        },

        rollTenantBringYourOwnKey: {
            argNames: ["keyType", "keyVaultInfo"],
            requestType: RequestType.PostWithArgs
        },

        runHealthCheck: {
            argNames: ["ruleId", "bRepair", "bRunAlways"],
            requestType: RequestType.PostWithArgs
        },

        runUpgradeSiteSession: {
            argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
            requestType: RequestType.PostWithArgs
        },

        unregisterHubSite: {
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.Site",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: ["requireUseRemoteAPIs"],
            requestType: RequestType.PostWithArgs
        },

        validateHubSiteJoinApprovalToken: {
            argNames: ["joiningSiteId", "approvalToken"],
            requestType: RequestType.PostWithArgs
        },

    },

    "SP.Social.SocialFeedManager": {
        createFileAttachment: {
            argNames: ["name", "description", "fileData"],
            requestType: RequestType.PostWithArgsAndData
        },

        createImageAttachment: {
            argNames: ["name", "description", "imageData"],
            requestType: RequestType.PostWithArgsAndData
        },

        createPost: {
            argNames: ["targetId", "creationData"],
            requestType: RequestType.PostWithArgsAndData
        },

        deletePost: {
            argNames: ["postId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getAllLikers: {
            argNames: ["postId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getFeed: {
            argNames: ["type", "options"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getFeedFor: {
            argNames: ["actorId", "options"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getFullThread: {
            argNames: ["threadId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getMentions: {
            argNames: ["clearUnreadMentions", "options"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getPreview: {
            argNames: ["itemUrl"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getPreviewImage: {
            argNames: ["url", "key", "iv"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getUnreadMentionCount: {
            requestType: RequestType.Get
        },

        likePost: {
            argNames: ["postId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        lockThread: {
            argNames: ["threadId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        suppressThreadNotifications: {
            argNames: ["threadId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        unlikePost: {
            argNames: ["postId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        unlockThread: {
            argNames: ["threadId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

    },

    "SP.Social.SocialFollowingManager": {
        follow: {
            argNames: ["actor"],
            name: "follow(actor=@v)?@v='[[actor]]'",
            requestType: RequestType.PostReplace
        },

        getFollowed: {
            argNames: ["types"],
            requestType: RequestType.GetWithArgs
        },

        getFollowedCount: {
            argNames: ["types"],
            requestType: RequestType.GetWithArgs
        },

        getFollowers: {
            requestType: RequestType.Get
        },

        getSuggestions: {
            requestType: RequestType.Get
        },

        isFollowed: {
            argNames: ["actor"],
            requestType: RequestType.GetWithArgs
        },

        stopFollowing: {
            argNames: ["actor"],
            requestType: RequestType.GetWithArgs
        },

    },

    "SP.Social.SocialRestActor": {
        feed: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        likes: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        mentionFeed: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        news: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        organizationFeed: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        timelineFeed: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.GetWithArgs
        },

        unreadMentionCount: {
            requestType: RequestType.Get
        },

    },

    "SP.Social.SocialRestFeed": {
        clearUnReadMentionCount: {
            argNames: ["MaxThreadCount", "NewerThan", "OlderThan", "SortOrder"],
            requestType: RequestType.PostWithArgs
        },

        post: {
            argNames: ["restCreationData"],
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "SP.Social.SocialRestFeedManager": {
        actor: {
            argNames: ["item"],
            name: "actor(item=@v)?@v='[[item]]'",
            requestType: RequestType.GetReplace,
            returnType: "SP.Social.SocialRestActor"
        },

        my: {
            requestType: RequestType.Get,
            returnType: "SP.Social.SocialRestActor"
        },

        post: {
            argNames: ["ID"],
            requestType: RequestType.PostWithArgsValueOnly,
        },

    },

    "SP.Social.SocialRestFollowingManager": {
        follow: {
            argNames: ["AccountName", "ActorType", "ContentUri", "Id", "TagGuid"],
            name: "follow(AccountName=@v, ActorType='[[ActorType]]', ContentUri='[[ContentUri]]', Id='[[Id]]', TagGuid='[[TagGuid]]')?@v='[[AccountName]]'",
            requestType: RequestType.GetReplace
        },

        followed: {
            argNames: ["types"],
            requestType: RequestType.PostBodyNoArgs
        },

        followedCount: {
            argNames: ["types"],
            requestType: RequestType.PostBodyNoArgs
        },

        followers: {
            requestType: RequestType.Get
        },

        isFollowed: {
            argNames: ["AccountName", "ActorType", "ContentUri", "Id", "TagGuid"],
            name: "isFollowed(AccountName=@v, ActorType='[[ActorType]]', ContentUri='[[ContentUri]]', Id='[[Id]]', TagGuid='[[TagGuid]]')?@v='[[AccountName]]'",
            requestType: RequestType.GetReplace
        },

        my: {
            requestType: RequestType.Get
        },

        stopFollowing: {
            argNames: ["AccountName", "ActorType", "ContentUri", "Id", "TagGuid"],
            name: "stopFollowing(AccountName=@v, ActorType='[[ActorType]]', ContentUri='[[ContentUri]]', Id='[[Id]]', TagGuid='[[TagGuid]]')?@v='[[AccountName]]'",
            requestType: RequestType.GetReplace
        },

        suggestions: {
            requestType: RequestType.Get
        },

    },

    "SP.Social.SocialRestThread": {
        delete: {
            argNames: ["ID"],
            requestType: RequestType.Delete
        },

        like: {
            argNames: ["ID"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        likers: {
            argNames: ["ID"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        lock: {
            argNames: ["ID"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        reply: {
            argNames: ["restCreationData"],
            requestType: RequestType.PostBodyNoArgs
        },

        unLike: {
            argNames: ["ID"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        unLock: {
            argNames: ["ID"],
            requestType: RequestType.GetWithArgsValueOnly
        },

    },

    "SP.SPAppLicenseManager": {
        checkLicense: {
            argNames: ["productId"],
        }
    },

    "SP.SPHSite": {
        details: {}
    },

    "SP.Taxonomy.TaxonomyField": {
        delete: {
            requestType: RequestType.Delete
        },

        disableIndex: {
            requestType: RequestType.Post
        },

        enableIndex: {
            requestType: RequestType.Post
        },

        setShowInDisplayForm: {
            argNames: ["value"],
        },

        setShowInEditForm: {
            argNames: ["value"],
        },

        setShowInNewForm: {
            argNames: ["value"],
        },

    },

    "SP.ThemeInfo": {
        getThemeFontByName: {
            argNames: ["name", "lcid"],
        },

        getThemeShadeByName: {
            argNames: ["name"],
        },

    },

    "SP.TimeZone": {
        localTimeToUTC: {
            argNames: ["date"],
        },

        uTCToLocalTime: {
            argNames: ["date"],
        },

    },

    "SP.TimeZone.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Translation.SyncTranslator": {
        translate: {
            argNames: ["inputFile", "outputFile"],
        },

        translateStream: {
            argNames: ["inputFile", "fileExtension"],
        },

    },

    "SP.Translation.TranslationJob": {
        translateFile: {
            argNames: ["inputFile", "outputFile"],
        },

        translateFolder: {
            argNames: ["inputFolder", "outputFolder", "recursion"],
        },

        translateLibrary: {
            argNames: ["inputLibrary", "outputLibrary"],
        },

    },

    "SP.Translation.TranslationJobStatus": {
        getAllItems: {
        },

    },

    "SP.TranslationStatusCollection": {
        create: {
            argNames: ["request"],
        },

        updateTranslationLanguages: {
        },

    },

    "SP.User": {
        properties: [
            "Groups|SP.Group.Collection|([Name])|SP.Group"
        ],

        expire: {
            requestType: RequestType.Post
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            argNames: ["properties"],
            metadataType: "SP.User",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.User.Collection": {
        add: {
            argNames: ["properties"],
            metadataType: "SP.User",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getByEmail: {
            argNames: ["emailAddress"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.User"
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.User"
        },

        getByLoginName: {
            argNames: ["loginName"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.User"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        removeByLoginName: {
            argNames: ["loginName"],
            name: "removeByLoginName(@v)?@v='[[loginName]]'",
            requestType: RequestType.PostReplace
        },

    },

    "SP.UserCustomAction": {
        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        update: {
            argNames: ["properties"],
            metadataType: "SP.UserCustomAction",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.UserCustomAction.Collection": {
        add: {
            argNames: ["properties"],
            metadataType: "SP.UserCustomAction",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        clear: {
            requestType: RequestType.Post
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.UserCustomAction"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.UserProfiles.FollowedContent": {
        findAndUpdateFollowedGroup: {
            argNames: ["groupId"],
        },

        findAndUpdateFollowedItem: {
            argNames: ["url"],
        },

        followItem: {
            argNames: ["item"],
        },

        getFollowedStatus: {
            argNames: ["url"],
        },

        getGroups: {
            argNames: ["rowLimit"],
        },

        getItem: {
            argNames: ["url"],
        },

        getItems: {
            argNames: ["options", "subtype"],
        },

        hasGroupMembershipChangedAndSyncChanges: {
        },

        isFollowed: {
            argNames: ["url"],
        },

        refreshFollowedItem: {
            argNames: ["item"],
        },

        setItemPinState: {
            argNames: ["uri", "groupId", "pinState"],
        },

        stopFollowing: {
            argNames: ["url"],
        },

        updateFollowedGroupForUser: {
            argNames: ["contextUri", "groupId", "loginName"],
        },

    },

    "SP.UserProfiles.PeopleManager": {
        amIFollowedBy: {
            argNames: ["accountName"],
            name: "amIFollowedBy(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        amIFollowing: {
            argNames: ["accountName"],
            name: "amIFollowing(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        follow: {
            argNames: ["accountName"],
            name: "follow(@v)?@v='[[accountName]]'",
            requestType: RequestType.PostReplace
        },

        followTag: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getDefaultDocumentLibrary: {
            argNames: ["accountName", "createSiteIfNotExists", "siteCreationPriority"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getFollowedTags: {
            argNames: ["cTagsToFetch"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getFollowersFor: {
            argNames: ["accountName"],
            name: "getFollowersFor(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        getMyFollowers: {
            requestType: RequestType.Get
        },

        getMyProperties: {
            requestType: RequestType.Get
        },

        getMySuggestions: {
            requestType: RequestType.Get
        },

        getPeopleFollowedBy: {
            argNames: ["accountName"],
            name: "getPeopleFollowedBy(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        getPeopleFollowedByMe: {
            requestType: RequestType.Get
        },

        getPropertiesFor: {
            argNames: ["accountName"],
            name: "getPropertiesFor(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        getSPUserInformation: {
            argNames: ["accountName", "siteId"],
            name: "getSPUserInformation(accountName=@v, siteId='[[siteId]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        getUserProfileProperties: {
            argNames: ["accountName"],
            name: "getUserProfileProperties(@v)?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        getUserProfilePropertyFor: {
            argNames: ["accountName", "propertyName"],
            name: "getUserProfilePropertyFor(accountName=@v, propertyName='[[propertyName]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        hardDeleteUserProfile: {
            argNames: ["accountName", "userId"],
            name: "hardDeleteUserProfile(accountName=@v, userId='[[userId]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        hideSuggestion: {
            argNames: ["accountName"],
            name: "hideSuggestion(@v)?@v='[[accountName]]'",
            requestType: RequestType.PostReplace
        },

        removeSPUserInformation: {
            argNames: ["accountName", "siteId", "redactName"],
            name: "removeSPUserInformation(accountName=@v, siteId='[[siteId]]', redactName='[[redactName]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        setMultiValuedProfileProperty: {
            argNames: ["accountName", "propertyName", "propertyValues"],
            name: "setMultiValuedProfileProperty(accountName=@v, propertyName='[[propertyName]]', propertyValues='[[propertyValues]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        setMyProfilePicture: {
            argNames: ["picture"],
            requestType: RequestType.PostWithArgsInBody
        },

        setSingleValueProfileProperty: {
            argNames: ["accountName", "propertyName", "propertyValue"],
            name: "setSingleValueProfileProperty(accountName=@v, propertyName='[[propertyName]]', propertyValue='[[propertyValue]]')?@v='[[accountName]]'",
            requestType: RequestType.GetReplace
        },

        stopFollowing: {
            argNames: ["accountName"],
            name: "stopFollowing(@v)?@v='[[accountName]]'",
            requestType: RequestType.PostWithArgsInQSAsVar
        },

        stopFollowingTag: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

    },

    "SP.UserProfiles.PersonalCache": {
        deleteCacheItemsAsync: {
            argNames: ["cacheItems"],
            requestType: RequestType.Delete
        },

        deleteCacheItemsAsync2: {
            argNames: ["cacheItems", "mySiteUrl"],
            requestType: RequestType.Delete
        },

        loadUserProfile: {
            argNames: ["email"],
        },

        readCache: {
            argNames: ["folderPath"],
        },

        readCache2: {
            argNames: ["folderPath", "mySiteUrl"],
        },

        readCacheOrCreate: {
            argNames: ["folderPath", "requiredCacheKeys", "createIfMissing"],
        },

        readCacheOrCreate2: {
            argNames: ["folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl"],
        },

        readCacheOrCreateOrderById: {
            argNames: ["folderPath", "requiredCacheKeys", "createIfMissing"],
        },

        readCacheOrCreateOrderById2: {
            argNames: ["folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl"],
        },

        writeCache: {
            argNames: ["cacheItems"],
        },

        writeCache2: {
            argNames: ["cacheItems", "mySiteUrl"],
        },

    },

    "SP.UserProfiles.ProfileImageStore": {
        saveUploadedFile: {
            argNames: ["profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream"],
        },

    },

    "SP.UserProfiles.ProfileLoader": {
        createPersonalSiteEnqueueBulk: {
            argNames: ["emailIDs"],
            requestType: RequestType.PostWithArgsInBody
        },

        getUserProfile: {
            requestType: RequestType.Post,
            returnType: "SP.UserProfiles.UserProfile"
        },

    },

    "SP.UserProfiles.UserProfile": {
        properties: ["PersonalSite|site"],

        createPersonalSite: {
            argNames: ["lcid"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        createPersonalSiteEnque: {
            argNames: ["isInteractive"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        createPersonalSiteFromWorkItem: {
            argNames: ["workItemType"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setMySiteFirstRunExperience: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        shareAllSocialData: {
            argNames: ["shareAll"],
            requestType: RequestType.PostWithArgsValueOnly
        },

    },

    "SP.UserProfiles.UserProfilePropertiesForUser": {
        getPropertyNames: {
        },

    },

    "SP.UserResource": {
        getValueForUICulture: {
            argNames: ["cultureName"],
        },

        setValueForUICulture: {
            argNames: ["cultureName", "value"],
        },

    },

    "SP.UserSolution.Collection": {
        add: {
            argNames: ["solutionGalleryItemId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Utilities.ThemeManager": {
        addTenantTheme: {
            argNames: ["name", "themeJson"],
            requestType: RequestType.PostWithArgsInBody
        },

        applyTheme: {
            argNames: ["name", "themeJson"],
            requestType: RequestType.PostWithArgsInBody
        },

        deleteTenantTheme: {
            argNames: ["name"],
            requestType: RequestType.PostWithArgsInBody
        },

        getAvailableThemes: {},

        getHideDefaultThemes: {},

        getTenantTheme: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsInBody
        },

        getTenantThemingOptions: {},

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setHideDefaultThemes: {
            argNames: ["hideDefaultThemes"],
        },

        updateTenantTheme: {
            argNames: ["name", "themeJson"],
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "SP.View": {
        properties: [
            "ViewFields|SP.ViewFieldCollection"
        ],

        addToSpotlight: {
            argNames: ["itemId", "folderPath", "afterItemId"],
            requestType: RequestType.PostWithArgs
        },

        delete: {
            requestType: RequestType.Delete
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeFromSpotlight: {
            argNames: ["itemId", "folderPath"],
        },

        renderAsHtml: {
        },

        setViewXml: {
            argNames: ["viewXml"],
            requestType: RequestType.PostWithArgsInBody
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.View",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.View.Collection": {
        add: {
            argNames: ["properties"],
            metadataType: "SP.View",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["guidId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.View"
        },

        getByTitle: {
            argNames: ["strTitle"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.View"
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.ViewFieldCollection": {
        addViewField: {
            argNames: ["strField"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        moveViewFieldTo: {
            argNames: ["field", "index"],
            requestType: RequestType.PostWithArgsInBody
        },

        removeAllViewFields: {
            requestType: RequestType.Post
        },

        removeViewField: {
            argNames: ["strField"],
            requestType: RequestType.PostWithArgsValueOnly
        },

    },

    "SP.Web": {
        properties: [
            "AllProperties", "AppTiles", "AssociatedMemberGroup|SP.Group", "AssociatedOwnerGroup|SP.Group",
            "AssociatedVisitorGroup|SP.Group", "Author|SP.User", "AvailableContentTypes|SP.ContentType.Collection", "AvailableFields|SP.Field.Collection",
            "ClientWebParts", "ContentTypes|SP.ContentType.Collection|('[Name]')|SP.ContentType", "CurrentUser|SP.User", "DataLeakagePreventionStatusInfo",
            "DescriptionResource", "EventReceivers|SP.EventReceiverDefinition.Collection|('[Name]')|SP.EventReceiverDefinition", "Features|SP.Feature.Collection|('[Name]')|SP.Feature",
            "Fields|SP.Field.Collection|/getByInternalNameOrTitle('[Name]')|SP.Field", "FirstUniqueAncestorSecurableObject",
            "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder", "Lists|SP.List.Collection|/getByTitle('[Name]')|SP.List",
            "ListTemplates|SP.ListTemplate.Collection|('[Name]')|SP.ListTemplate", "Navigation|SP.Navigation", "ParentWeb",
            "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|SP.RoleAssignment.Collection|([Name])|SP.RoleAssignment",
            "RoleDefinitions|SP.RoleDefinition.Collection|/getByName('[Name]')|SP.RoleDefinition", "RootFolder|SP.Folder|/getByUrl('[Name]')|SP.File",
            "SiteGroups|SP.Group.Collection|/getByName('[Name]')|SP.Group", "SiteUserInfoList", "SiteUsers|SP.User.Collection|/getById([Name])|SP.User",
            "TenantAppCatalog|tenantappcatalog", "ThemeInfo", "TitleResource",
            "UserCustomActions|SP.UserCustomAction.Collection|('[Name]')|SP.UserCustomAction", "WebInfos|SP.WebInformation.Collection", "Webs|SP.Web.Collection", "WorkflowAssociations", "WorkflowTemplates"
        ],

        addCrossFarmMessage: {
            argNames: ["messagePayloadBase64"],
            requestType: RequestType.PostWithArgs
        },

        addSupportedUILanguage: {
            argNames: ["lcid"],
            requestType: RequestType.PostWithArgs
        },

        applyTheme: {
            argNames: ["colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated"],
            requestType: RequestType.PostWithArgs
        },

        applyWebTemplate: {
            argNames: ["webTemplate"],
            requestType: RequestType.PostWithArgsInQSAsVar
        },

        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
            requestType: RequestType.PostWithArgs
        },

        createDefaultAssociatedGroups: {
            argNames: ["userLogin", "userLogin2", "groupNameSeed"],
        },

        defaultDocumentLibrary: {
        },

        delete: {
            requestType: RequestType.Delete
        },

        doesPushNotificationSubscriberExist: {
            argNames: ["deviceAppInstanceId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        doesUserHavePermissions: {
            argNames: ["high", "low"],
            requestType: RequestType.GetWithArgsInQSAsVar
        },

        ensureUser: {
            argNames: ["logonName"],
            requestType: RequestType.PostWithArgsInBody
        },

        executeRemoteLOB: {
            argNames: ["inputStream"],
            requestType: RequestType.PostBodyNoArgs
        },

        getAllClientSideComponents: {
            requestType: RequestType.Post
        },

        getAppBdcCatalog: {
            requestType: RequestType.Post
        },

        getAppBdcCatalogForAppInstance: {
            argNames: ["appInstanceId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        getAppInstanceById: {
            argNames: ["appInstanceId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getAppInstancesByProductId: {
            argNames: ["productId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        getAvailableWebTemplates: {
            argNames: ["lcid", "doIncludeCrossLanguage"],
            requestType: RequestType.GetWithArgs
        },

        getCatalog: {
            argNames: ["typeCatalog"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.List"
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getClientSideComponents: {
            argNames: ["components"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getClientSideComponentsById: {
            argNames: ["componentIds"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getClientSideWebParts: {
            argNames: ["includeErrors"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getCustomListTemplates: {
        },

        getEntity: {
            argNames: ["namespace", "name"],
            requestType: RequestType.PostWithArgs
        },

        getFileByGuestUrl: {
            argNames: ["guestUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByGuestUrlEnsureAccess: {
            argNames: ["guestUrl", "ensureAccess"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByGuestUrlExtended: {
            argNames: ["guestUrl", "requestSettings"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileById: {
            argNames: ["uniqueId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByLinkingUrl: {
            argNames: ["linkingUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByServerRelativePath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByUrl: {
            argNames: ["fileUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFileByWOPIFrameUrl: {
            argNames: ["wopiFrameUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFolderByGuestUrl: {
            argNames: ["guestUrl", "ensureAccess"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFolderByGuestUrlExtended: {
            argNames: ["guestUrl", "requestSettings"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFolderById: {
            argNames: ["uniqueId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFolderByServerRelativePath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getFolderByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getList: {
            argNames: ["strUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.List"
        },

        getListItem: {
            argNames: ["strUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListItemByResourceId: {
            argNames: ["resourceId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListItemUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getNewsList: {
            argNames: ["allowCreate"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getPushNotificationSubscriber: {
            argNames: ["deviceAppInstanceId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getPushNotificationSubscribersByArgs: {
            argNames: ["customArgs"],
            requestType: RequestType.GetWithArgsInQSAsVar
        },

        getPushNotificationSubscribersByUser: {
            argNames: ["userName"],
            requestType: RequestType.GetWithArgsInQSAsVar
        },

        getRecycleBinItems: {
            argNames: ["pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getRecycleBinItemsByQueryInfo: {
            argNames: ["IsAscending", "ItemState", "OrderBy", "PagingInfo", "RowLimit", "ShowOnlyMyItems"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getRegionalDateTimeSchema: {
        },

        getSPAppContextAsStream: {
        },

        getSharingLinkData: {
            argNames: ["linkUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getStorageEntity: {
            argNames: ["key"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getSubwebsFilteredForCurrentUser: {
            argNames: ["nWebTemplateFilter", "nConfigurationFilter"],
            requestType: RequestType.GetWithArgs,
            returnType: "SP.WebInformation.Collection"
        },

        getUserById: {
            argNames: ["userId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.User"
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: RequestType.GetReplace
        },

        getViewFromPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getViewFromUrl: {
            argNames: ["listUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        hubSiteData: {
            argNames: ["forceRefresh"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        hubSiteDataAsStream: {
            argNames: ["forceRefresh"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        incrementSiteClientTag: {
        },

        loadAndInstallApp: {
            argNames: ["appPackageStream"],
            requestType: RequestType.PostBodyNoArgs
        },

        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: RequestType.PostWithArgsInBody
        },

        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: RequestType.PostWithArgsInBody
        },

        mapToIcon: {
            argNames: ["fileName", "progId", "size"],
            requestType: RequestType.GetWithArgs
        },

        pageContextCore: {},

        pageContextInfo: {
            argNames: ["includeODBSettings", "emitNavigationInfo"],
            requestType: RequestType.GetWithArgs
        },

        parseDateTime: {
            argNames: ["value", "displayFormat", "calendarType"],
            requestType: RequestType.GetWithArgs
        },

        processExternalNotification: {
            argNames: ["stream"],
            requestType: RequestType.PostBodyNoArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        registerPushNotificationSubscriber: {
            argNames: ["deviceAppInstanceId", "serviceToken"],
            requestType: RequestType.PostWithArgs
        },

        removeStorageEntity: {
            argNames: ["key"],
            requestType: RequestType.PostWithArgs
        },

        removeSupportedUILanguage: {
            argNames: ["lcid"],
            requestType: RequestType.PostWithArgs
        },

        resetRoleInheritance: {
            requestType: RequestType.Post
        },

        setAccessRequestSiteDescriptionAndUpdate: {
            argNames: ["description"],
            requestType: RequestType.PostWithArgs
        },

        setStorageEntity: {
            argNames: ["key", "value", "description", "comments"],
            requestType: RequestType.PostWithArgs
        },

        setUseAccessRequestDefaultAndUpdate: {
            argNames: ["useAccessRequestDefault"],
            requestType: RequestType.PostWithArgs
        },

        syncFlowInstances: {
            argNames: ["targetWebUrl"],
            requestType: RequestType.PostWithArgs
        },

        syncFlowTemplates: {
            argNames: ["category"],
            requestType: RequestType.PostWithArgs
        },

        syncHubSiteTheme: {
            requestType: RequestType.Post
        },

        unregisterPushNotificationSubscriber: {
            argNames: ["deviceAppInstanceId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        uploadImage: {
            argNames: ["listTitle", "imageName", "contentStream"],
            name: "uploadImage(listTitle=guid'[[listTitle]]', imageName=[[imageName]])",
            requestType: RequestType.PostReplaceWithData
        },

    },

    "SP.Web.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.Web",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebInformation.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebCreationInformation",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebParts.LimitedWebPartManager": {
        properties: [
            "WebParts|SP.WebParts.WebPartDefinition.Collection|/([Id])|SP.WebParts.WebPartDefinition"
        ],

        exportWebPart: {
            argNames: ["webPartId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        importWebPart: {
            argNames: ["webPartXml"],
            requestType: RequestType.PostBodyNoArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebParts.WebPartDefinition": {
        closeWebPart: {
        },

        deleteWebPart: {},

        moveWebPartTo: {
            argNames: ["zoneID", "zoneIndex"],
        },

        openWebPart: {
            requestType: RequestType.Get
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        saveWebPartChanges: {
        },

    },

    "SP.WebParts.WebPartDefinition.Collection": {
        getByControlId: {
            argNames: ["controlId"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebTemplate.Collection": {
        getByName: {
            argNames: ["name"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WorkManagement.OM.BaseSession": {
        addAttributeToTask: {
            argNames: ["taskKey", "attribute"],
        },

        beginCacheRefresh: {
        },

        beginExchangeSync: {
        },

        createPersonalTaskAndPromoteToProviderTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey"],
        },

        createTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl"],
        },

        deleteTask: {
            argNames: ["taskKey"],
        },

        getCalloutInfo: {
            argNames: ["taskKey"],
        },

        getRefreshHealthInfo: {
        },

        getRefreshHistory: {
            argNames: ["since"],
        },

        getRefreshStatus: {
            argNames: ["refreshId"],
        },

        isExchangeJobPending: {
        },

        pinTask: {
            argNames: ["taskKey"],
        },

        promotePersonalTaskToProviderTaskInLocation: {
            argNames: ["taskKey", "locationId"],
        },

        readAllNonTaskData: {
        },

        refreshSingleTask: {
            argNames: ["taskKey"],
        },

        removeAttributeFromTask: {
            argNames: ["taskKey", "attribute"],
        },

        removePinOnTask: {
            argNames: ["taskKey"],
        },

        updateTaskWithLocalizedValue: {
            argNames: ["taskKey", "field", "value"],
        },

    },

    "SP.WorkManagement.OM.LocationOrientedSortableSession": {
        addAttributeToTask: {
            argNames: ["taskKey", "attribute"],
        },

        beginCacheRefresh: {
        },

        beginExchangeSync: {
        },

        createPersonalTaskAndPromoteToProviderTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey"],
        },

        createTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl"],
        },

        deleteTask: {
            argNames: ["taskKey"],
        },

        getCalloutInfo: {
            argNames: ["taskKey"],
        },

        getRefreshHealthInfo: {
        },

        getRefreshHistory: {
            argNames: ["since"],
        },

        getRefreshStatus: {
            argNames: ["refreshId"],
        },

        isExchangeJobPending: {
        },

        movePersonalTaskToLocation: {
            argNames: ["taskKey", "newLocationKey"],
        },

        pinTask: {
            argNames: ["taskKey"],
        },

        promotePersonalTaskToProviderTaskInLocation: {
            argNames: ["taskKey", "locationId"],
        },

        readAllNonTaskData: {
        },

        refreshSingleTask: {
            argNames: ["taskKey"],
        },

        removeAttributeFromTask: {
            argNames: ["taskKey", "attribute"],
        },

        removePinOnTask: {
            argNames: ["taskKey"],
        },

        updateTaskWithLocalizedValue: {
            argNames: ["taskKey", "field", "value"],
        },

    },

    "SP.WorkManagement.OM.LocationOrientedUserOrderedSession": {
        addAttributeToTask: {
            argNames: ["taskKey", "attribute"],
        },

        beginCacheRefresh: {
        },

        beginExchangeSync: {
        },

        createPersonalTaskAndPromoteToProviderTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey"],
        },

        createTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl"],
        },

        deleteTask: {
            argNames: ["taskKey"],
        },

        getCalloutInfo: {
            argNames: ["taskKey"],
        },

        getRefreshHealthInfo: {
        },

        getRefreshHistory: {
            argNames: ["since"],
        },

        getRefreshStatus: {
            argNames: ["refreshId"],
        },

        isExchangeJobPending: {
        },

        movePersonalTaskToLocation: {
            argNames: ["taskKey", "newLocationKey"],
        },

        pinTask: {
            argNames: ["taskKey"],
        },

        promotePersonalTaskToProviderTaskInLocation: {
            argNames: ["taskKey", "locationId"],
        },

        readAllNonTaskData: {
        },

        refreshSingleTask: {
            argNames: ["taskKey"],
        },

        removeAttributeFromTask: {
            argNames: ["taskKey", "attribute"],
        },

        removePinOnTask: {
            argNames: ["taskKey"],
        },

        reorderTask: {
            argNames: ["taskKey", "newAfterTaskKey"],
        },

        updateTaskWithLocalizedValue: {
            argNames: ["taskKey", "field", "value"],
        },

    },

    "SP.WorkManagement.OM.SortableSession": {
        addAttributeToTask: {
            argNames: ["taskKey", "attribute"],
        },

        beginCacheRefresh: {
        },

        beginExchangeSync: {
        },

        createPersonalTaskAndPromoteToProviderTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey"],
        },

        createTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl"],
        },

        deleteTask: {
            argNames: ["taskKey"],
        },

        getCalloutInfo: {
            argNames: ["taskKey"],
        },

        getRefreshHealthInfo: {
        },

        getRefreshHistory: {
            argNames: ["since"],
        },

        getRefreshStatus: {
            argNames: ["refreshId"],
        },

        isExchangeJobPending: {
        },

        pinTask: {
            argNames: ["taskKey"],
        },

        promotePersonalTaskToProviderTaskInLocation: {
            argNames: ["taskKey", "locationId"],
        },

        readAllNonTaskData: {
        },

        refreshSingleTask: {
            argNames: ["taskKey"],
        },

        removeAttributeFromTask: {
            argNames: ["taskKey", "attribute"],
        },

        removePinOnTask: {
            argNames: ["taskKey"],
        },

        updateTaskWithLocalizedValue: {
            argNames: ["taskKey", "field", "value"],
        },

    },

    "SP.WorkManagement.OM.SortableSessionManager": {
        createLocationOrientedSession: {
        },

        createSession: {
        },

    },

    "SP.WorkManagement.OM.UserOrderedSession": {
        addAttributeToTask: {
            argNames: ["taskKey", "attribute"],
        },

        beginCacheRefresh: {
        },

        beginExchangeSync: {
        },

        createPersonalTaskAndPromoteToProviderTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey"],
        },

        createTask: {
            argNames: ["taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl"],
        },

        deleteTask: {
            argNames: ["taskKey"],
        },

        getCalloutInfo: {
            argNames: ["taskKey"],
        },

        getRefreshHealthInfo: {
        },

        getRefreshHistory: {
            argNames: ["since"],
        },

        getRefreshStatus: {
            argNames: ["refreshId"],
        },

        isExchangeJobPending: {
        },

        pinTask: {
            argNames: ["taskKey"],
        },

        promotePersonalTaskToProviderTaskInLocation: {
            argNames: ["taskKey", "locationId"],
        },

        readAllNonTaskData: {
        },

        refreshSingleTask: {
            argNames: ["taskKey"],
        },

        removeAttributeFromTask: {
            argNames: ["taskKey", "attribute"],
        },

        removePinOnTask: {
            argNames: ["taskKey"],
        },

        reorderTask: {
            argNames: ["taskKey", "newAfterTaskKey"],
        },

        updateTaskWithLocalizedValue: {
            argNames: ["taskKey", "field", "value"],
        },

    },

    "SP.WorkManagement.OM.UserOrderedSessionManager": {
        createLocationOrientedSession: {
        },

        createSession: {
        },

    },

    "SP.WorkManagement.OM.UserSettingsManager": {
        getAllLocations: {
        },

        getExchangeSyncInfo: {
        },

        getImportantLocations: {
        },

        getLocations: {
            argNames: ["locationsId"],
        },

        getPersistedProperties: {
        },

        getUserSettings: {
        },

        isExchangeJobPending: {
        },

        optIntoExchangeSync: {
        },

        optOutOfExchangeSync: {
        },

    },

    "SP.Workflow.SPWorkflowTask": {
        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
        },

        delete: {
            requestType: RequestType.Delete
        },

        deleteWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getHashtags: {
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
        },

        getWOPIFrameUrl: {
            argNames: ["action"],
            requestType: RequestType.PostWithArgsInQS
        },

        mediaServiceUpdate: {
            argNames: ["parameters"],
        },

        mediaServiceUpdateV2: {
            argNames: ["parameters", "eventFiringEnabled"],
        },

        overridePolicyTip: {
            argNames: ["userAction", "justification"],
        },

        parseAndSetFieldValue: {
            argNames: ["fieldName", "value"],
        },

        recycle: {
            requestType: RequestType.Post
        },

        recycleWithParameters: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        resetRoleInheritance: {
        },

        setCommentsDisabled: {
            argNames: ["value"],
        },

        setComplianceTag: {
            argNames: ["complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock"],
        },

        setComplianceTagWithExplicitMetasUpdate: {
            argNames: ["complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress"],
        },

        setComplianceTagWithHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithMetaInfo: {
            argNames: ["complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock"],
        },

        setComplianceTagWithNoHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithRecord: {
            argNames: ["complianceTag"],
        },

        systemUpdate: {
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.Workflow.SPWorkflowTask",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        updateEx: {
            argNames: ["parameters"],
        },

        updateHashtags: {
            argNames: ["hashtagsToAdd", "hashtagsToRemove"],
        },

        updateOverwriteVersion: {
        },

        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment"],
        },

    },

    "SP.Workflow.WorkflowAssociation": {
        delete: {
            requestType: RequestType.Delete
        },

        update: {
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Workflow.WorkflowAssociation.Collection": {
        add: {
            argNames: ["parameters"],
        },

        getById: {
            argNames: ["associationId"],
        },

        getByName: {
            argNames: ["name"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Workflow.WorkflowTemplate.Collection": {
        getById: {
            argNames: ["templateId"],
        },

        getByName: {
            argNames: ["name"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WorkflowServices.InteropService": {
        cancelWorkflow: {
            argNames: ["instanceId"],
        },

        disableEvents: {
            argNames: ["listId", "itemGuid"],
        },

        enableEvents: {
            argNames: ["listId", "itemGuid"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        startWorkflow: {
            argNames: ["associationName", "correlationId", "listId", "itemGuid", "workflowParameters"],
        },

    },

    "SP.WorkflowServices.WorkflowDefinition": {
        setProperty: {
            argNames: ["propertyName", "value"],
        },

    },

    "SP.WorkflowServices.WorkflowDefinition.Collection": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        sort: {
        },

    },

    "SP.WorkflowServices.WorkflowDeploymentService": {
        deleteCollateral: {
            argNames: ["workflowDefinitionId", "leafFileName"],
        },

        deleteDefinition: {
            argNames: ["definitionId"],
        },

        deprecateDefinition: {
            argNames: ["definitionId"],
        },

        enumerateDefinitions: {
            argNames: ["publishedOnly"],
        },

        enumerateIntegratedApps: {
        },

        getActivitySignatures: {
            argNames: ["lastChanged"],
        },

        getCollateralUri: {
            argNames: ["workflowDefinitionId", "leafFileName"],
        },

        getDefinition: {
            argNames: ["definitionId"],
        },

        isIntegratedApp: {
        },

        packageDefinition: {
            argNames: ["definitionId", "packageDefaultFilename", "packageTitle", "packageDescription"],
        },

        publishDefinition: {
            argNames: ["definitionId"],
        },

        saveCollateral: {
            argNames: ["workflowDefinitionId", "leafFileName", "fileContent"],
        },

        validateActivity: {
            argNames: ["activityXaml"],
        },

    },

    "SP.WorkflowServices.WorkflowInstanceService": {
        enumerateInstancesForListItem: {
            argNames: ["listId", "itemId"],
            requestType: RequestType.PostWithArgs
        },

        enumerateInstancesForListItemWithOffset: {
            argNames: ["listId", "itemId", "offset"],
            requestType: RequestType.PostWithArgs
        },

        enumerateInstancesForSite: {
            requestType: RequestType.Post
        },

        enumerateInstancesForSiteWithOffset: {
            argNames: ["offset"],
            requestType: RequestType.PostWithArgs
        },

        getInstance: {
            argNames: ["instanceId"],
            requestType: RequestType.Get
        },

        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        },

        startWorkflowOnListItemBySubscriptionId: {
            argNames: ["subscriptionId", "itemId", "payload"],
            requestType: RequestType.PostWithArgs
        }
    },

    "SP.WorkflowServices.WorkflowMessagingService": {
        publishEvent: {
            argNames: ["eventSourceId", "eventName", "payload"],
        },

    },

    "SP.WorkflowServices.WorkflowServicesManager": {
        getWorkflowDeploymentService: {
        },

        getWorkflowInstanceService: {
        },

        getWorkflowInteropService: {
        },

        getWorkflowSubscriptionService: {
        },

        isIntegratedApp: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WorkflowServices.WorkflowSubscription": {
        getExternalVariable: {
            argNames: ["name"],
        },

        setExternalVariable: {
            argNames: ["name", "value"],
        },

        setProperty: {
            argNames: ["name", "value"],
        },

    },

    "SP.WorkflowServices.WorkflowSubscription.Collection": {
        query: { argNames: ["oData"], requestType: RequestType.OData },

        sort: {
        },

    },

    "SP.WorkflowServices.WorkflowSubscriptionService": {
        deleteSubscription: {
            argNames: ["subscriptionId"],
            requestType: RequestType.PostWithArgs
        },

        enumerateSubscriptions: {
            requestType: RequestType.Post
        },

        enumerateSubscriptionsByDefinition: {
            argNames: ["definitionId"],
            requestType: RequestType.PostWithArgs
        },

        enumerateSubscriptionsByEventSource: {
            argNames: ["eventSourceId"],
            requestType: RequestType.PostWithArgs
        },

        enumerateSubscriptionsByList: {
            argNames: ["listId"],
            requestType: RequestType.PostWithArgs
        },

        enumerateSubscriptionsByListAndParentContentType: {
            argNames: ["listId", "parentContentTypeId", "includeNoContentTypeSpecified"],
            requestType: RequestType.PostWithArgs
        },

        enumerateSubscriptionsByListWithContentType: {
            argNames: ["listId", "includeContentTypeSpecified"],
            requestType: RequestType.PostWithArgs
        },

        getSubscription: {
            argNames: ["subscriptionId"],
            requestType: RequestType.PostWithArgs
        },

        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        },

        registerInterestInHostWebList: {
            argNames: ["listId", "eventName"],
            requestType: RequestType.PostWithArgs
        },

        registerInterestInList: {
            argNames: ["listId", "eventName"],
            requestType: RequestType.PostWithArgs
        },

        unregisterInterestInHostWebList: {
            argNames: ["listId", "eventName"],
            requestType: RequestType.PostWithArgs
        },

        unregisterInterestInList: {
            argNames: ["listId", "eventName"],
            requestType: RequestType.PostWithArgs
        }
    },

};