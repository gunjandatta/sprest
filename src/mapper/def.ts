import { IMapper } from "gd-sprest-def/lib/mapper.d";
import { RequestType } from "../utils";

export const Mapper: IMapper = {
    "MS.FileServices.File": {
        copyTo: {
            argNames: ["target", "overwrite"],
            requestType: RequestType.PostWithArgs
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

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningHub": {
        checkAIBuilderAccess: {
            argNames: ["environmentName", "isTestEnvironment", "userId"],
        },

        getByContentTypeId: {
            argNames: ["contentTypeId"],
        },

        getCDSMetadata: {
            argNames: ["environmentName", "isTestEnvironment"],
        },

        getColumnLLMInfo: {
            argNames: ["docLibId", "columnId"],
        },

        getLibraryLLMInfo: {
            argNames: ["docLibId"],
        },

        getMachineLearningFlags: {
            argNames: ["docLibId"],
        },

        getModelIdForContentType: {
            argNames: ["contentTypeName"],
        },

        getModels: {
            argNames: ["listId", "modelTypes", "publicationTypes", "includeManagementNotAllowedModels"],
        },

        getRetentionLabel: {
            argNames: ["retentionLabelId"],
        },

        getRetentionLabels: {
        },

        getSyntexPoweredColumnPrompts: {
            argNames: ["docLibId"],
        },

        invokeDataverseQuery: {
        },

        query: { argNames: ["oData"] },

        setColumnLLMInfo: {
            argNames: ["docLibId", "columnId", "autofillPrompt", "isEnabled"],
        },

        setMachineLearningFlags: {
            argNames: ["docLibId", "machineLearningFlags"],
        },

        setSyntexPoweredColumnPrompts: {
            argNames: ["docLibId", "syntexPoweredColumnPrompts"],
        },

        verifyModelUrls: {
            argNames: ["urls"],
        },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningModel": {
        addModelDependency: {
            argNames: ["modelId", "updateExisting"],
        },

        copy: {
            argNames: ["copyTo"],
            requestType: RequestType.PostWithArgs
        },

        delete: {},

        importMeta: {},

        invokeConnectorQuery: {
        },

        removeModelDependency: {
            argNames: ["modelId"],
        },

        rename: {
            argNames: ["renameTo"],
        },

        renameExtractor: {
            argNames: ["fromExtractorName", "toExtractorName", "toColumnType"],
        },

        setAsModelAuthor: {},

        update: {},

        updateModelSettings: {
            argNames: ["ModelSettings"],
        },

        updateModelTypeSpecificSettings: {
            argNames: ["Settings"],
        },
    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningModel.Collection": {
        getByTitle: {
            argNames: ["title"],
        },

        getByUniqueId: {
            argNames: ["uniqueId"],
        },

        getExtractorNames: {
            argNames: ["packageName"],
        },

        import: {
            argNames: ["packageName"],
        },

        query: { argNames: ["oData"] },

        setupPrimedLibrary: {
            argNames: ["primedLibraryName", "packageName", "isTileViewEnabled", "serverRelativeLibraryPath"],
        },

        unbindModelFromContentType: {
            argNames: ["contentTypeId"],
        },

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

        batchRemove: {
            argNames: ["modelSiteUrl", "modelWebServerRelativeUrl", "publications"],
        },

        batchUnpromote: {
            argNames: ["promotions"],
        },

        checkTenantPublishPermissions: {},

        getByModelUniqueId: {
            argNames: ["modelUniqueId"],
        },

        getByModelUniqueIdAndPublicationType: {
            argNames: ["modelUniqueId", "publicationType"],
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

        getByUniqueIdWithTokenization: {
            argNames: ["uniqueId"],
        },

        getTemplateByModelId: {
            argNames: ["modelID"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem.Collection": {
        getByIdentifier: {
            argNames: ["identifier"],
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
        exportSearchReports: {
            argNames: ["TenantId", "ReportType", "Interval", "StartDate", "EndDate", "SiteCollectionId"],
        },

        getpromotedresultqueryrules: {
            argNames: ["siteCollectionLevel", "offset", "numberOfRules"],
        },

        getqueryconfiguration: {
            argNames: ["callLocalSearchFarmsOnly", "skipGroupObjectIdLookup", "throwOnRemoteApiCheck"],
        },

        getxssearchpolicy: {},

        pingadminendpoint: {},

        scspartialupdateendpointinfo: {},

        setxssearchpolicy: {
            argNames: ["policy"],
        },

    },

    "Microsoft.Online.SharePoint.AppLauncher.AppLauncher": {
        getData: {
            argNames: ["suiteVersion", "isMobileRequest", "locale", "onPremVer"],
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationUrlParser": {
        parseUrl: {
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Common.UrlParseResult": {
        setDisplayUrl: {
            argNames: ["displayUrl"],
        },

        setSPListInformation: {
            argNames: ["spListInformationList"],
        },

        updateSiteProvisionInformation: {
            argNames: ["spListInformation", "uri", "originalUrl", "errorCode", "message", "freeSiteStorageBytes", "isCurrentUserSiteAdmin"],
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup": {
        delete: {
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup.Collection": {
        createByName: {
            argNames: ["Name"],
        },

        deleteByName: {
            argNames: ["Name"],
        },

        getByName: {
            argNames: ["Name"],
        },

        getGroupList: {
        },

        query: { argNames: ["oData"] },

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

    "Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState": {
        updateSiteROState: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState.Collection": {
        getBySiteId: {
            argNames: ["siteId"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta": {
        compatibleDB: {
            argNames: ["dbSchemaVersion", "siteSubscriptionId", "siteUrl"],
        },

        dBSchemaCompatibilityCheck: {
        },

        geoMoveCompatibilityChecks: {
        },

        hasMnALicense: {
            argNames: ["mnALicenseType"],
        },

        mnAGroupMoveValidationResult: {
            argNames: ["encodedQuery"],
        },

        orgRelationGroupManagedPath: {
            argNames: ["encodedNotificationQuery"],
        },

        orgRelationNotification: {
            argNames: ["encodedNotificationQuery"],
        },

        orgRelationVerification: {
            argNames: ["encodedVerificationQuery"],
        },

        restoreWorkflowCount: {
            argNames: ["isCrossTenant"],
        },

        userMnAODMoveValidationResult: {
            argNames: ["encodedQuery"],
        },

        userPersonalSiteId: {
            argNames: ["userPrincipalName"],
        },

        userPersonalSiteLocation: {
            argNames: ["userPrincipalName"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        xTenantMoveCompatibilityCheck: {
            argNames: ["targetTenantHostUrl"],
        }
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

        getMoveJobByUrl: {
            argNames: ["SourceSiteUrl", "SubscriptionId", "SourceDataLocation", "EnableSiteToMoveDatastore"],
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

    "Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob.Collection": {
        cancel: {
            argNames: ["url"],
        },

        get: {
        },

        query: { argNames: ["oData"] },

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
        cancel: {},

        get: {},

        getWarningMessages: {},

        query: { argNames: ["oData"] },

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
        getIsolatedAppDomainsByAppId: {
            argNames: ["appIds"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        removeAppsToDelete: {
            argNames: ["domainsToDelete"],
        },

        update: {
        },

        updateSpfxClientSecret: {
            argNames: ["secretValue"],
        },

        updateSpfxThirdPartyAppId: {
            argNames: ["appId"],
        },

        updateSpfxThirdPartyIsolatedComponentFields: {
            argNames: ["catalogItemId", "apAppObjectId", "spObjectId", "appId"],
        },

        updateSpfxThirdPartyIsolatedSecret: {
            argNames: ["servicePrincipalId", "secretValue"],
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

    "Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceInsightRestApiClient": {
        createDataAccessGovernanceReport: {
            argNames: ["reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan"],
        },

        exportSPODataAccessGovernanceInsight: {
            argNames: ["reportId"],
        },

        getSPODataAccessGovernanceInsight: {
            argNames: ["reportEntity", "workLoad"],
        },

        getSPODataAccessGovernanceInsightById: {
            argNames: ["reportId"],
        },

        getSPODataAccessGovernanceInsightV2: {
            argNames: ["reportEntity"],
        },

        removeDataAccessGovernanceReport: {
            argNames: ["reportId"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceSARRestApiClient": {
        getSPOSiteReview: {
            argNames: ["reportEntity", "siteReviewtatus", "siteReviewID", "siteID"],
        },

        startSPOSiteReview: {
            argNames: ["detailedSourceReportId", "siteId", "adminComment"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPOContentSecurityPolicyConfiguration": {
        add: {
            argNames: ["source"],
        },

        remove: {
            argNames: ["source"],
        },

        updateScriptSources: {
            argNames: ["added", "removed"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPOGroup": {
        addAsGroupOwnerAndMember: {
            argNames: ["groupId", "userId", "userPrincipalName"],
        },

        addGroupMember: {
            argNames: ["groupId", "memberId", "memberPrincipalName"],
        },

        addGroupOwner: {
            argNames: ["groupId", "ownerId", "ownerPrincipalName"],
        },

        getGroupInfo: {
            argNames: ["groupId"],
        },

        removeAsGroupOwnerAndMember: {
            argNames: ["groupId", "userId"],
        },

        removeGroupMember: {
            argNames: ["groupId", "memberId"],
        },

        removeGroupOwner: {
            argNames: ["groupId", "ownerId"],
        },

        updateGroupProperties: {
            argNames: ["groupId", "displayName"],
        },

        updateGroupPropertiesBySiteId: {
            argNames: ["groupId", "siteId", "displayName"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPOMalwareFile": {
        getMalwareFileStream: {
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPORestrictedContentDiscoverabilityClient": {
        createRestrictedContentDiscoverabilityReport: {
        },

        getAllRestrictedContentDiscoverabilityReports: {
        },

        getRestrictContentOrgWideSearchUsageInsightsReportContent: {
            argNames: ["reportId"],
        },

        getSPODataAccessGovernanceInsightById: {
            argNames: ["reportId"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SPOWebAppServicePrincipalPublic": {
        addCustomSpfx3rdPartyAppPrincipal: {
            argNames: ["appId", "appUri", "clientSecret"],
        },

        getCustomSpfx3rdPartyAppPrincipal: {
        },

        removeCustomSpfx3rdPartyAppPrincipal: {
        },

        updateCustomSpfx3rdPartyAppPrincipalClientSecret: {
            argNames: ["clientSecret"],
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties": {
        update: {
        },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection": {
        checkSiteIsArchivedById: {
            argNames: ["siteId"],
        },

        getById: {
            argNames: ["siteId"],
        },

        getGroupSiteRelationship: {
            argNames: ["siteId"],
        },

        getLockStateById: {
            argNames: ["siteId"],
        },

        getSiteStateProperties: {
            argNames: ["siteId"],
        },

        getSiteUserGroups: {
            argNames: ["siteId", "userGroupIds"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.Online.SharePoint.TenantAdministration.Tenant": {
        acceptSyntexRepositoryTermsOfService: {
        },

        activateApplicationBillingPolicy: {
            argNames: ["billingPolicyId"],
        },

        addBrandFontPackage: {
            argNames: ["creationInformation"],
        },

        addHomeSite: {
            argNames: ["homeSiteUrl", "order", "audiences"],
        },

        addRecentAdminAction: {
            argNames: ["payload"],
        },

        addRecentAdminActionReport: {
            argNames: ["payload"],
        },

        addRecentAdminActions: {
            argNames: ["payload"],
        },

        addSPOContainerUserRole: {
            argNames: ["ContainerId", "loginName", "role"],
        },

        addSPORestrictedSearchAllowedList: {
            argNames: ["siteUrls"],
        },

        addTenantAdminListItem: {
            argNames: ["columnValues", "listName"],
        },

        addTenantAdminListView: {
            argNames: ["parameters"],
        },

        addToOrgAssetsLibAndCdnV2: {
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded"],
        },

        addToOrgAssetsLibAndCdnWithType: {
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType"],
        },

        addToOrgAssetsLibWithConfig: {
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam"],
        },

        archiveSiteById: {
            argNames: ["siteId"],
        },

        bootstrapPolicyAutomationResources: {
        },

        checkTenantIntuneLicense: {
        },

        checkTenantLicenses: {
            argNames: ["licenses"],
        },

        clearRestrictedAccessControlOneDrive: {
        },

        clearRestrictedAccessControlSharePoint: {
        },

        connectSiteToHubSiteById: {
            argNames: ["siteUrl", "hubSiteId"],
        },

        createApplicationBillingPolicyValidation: {
            argNames: ["applicationId"],
        },

        createPolicyDefinition: {
            argNames: ["policyInputParameters"],
        },

        createSite: {
            argNames: ["siteCreationProperties"],
        },

        deletePolicyDefinition: {
            argNames: ["itemId"],
        },

        deleteRecentAdminActionReport: {
            argNames: ["reportId"],
        },

        disableCollaborationInsightsDataCollection: {
        },

        downloadRansomwareImpactedAssetsReport: {
            argNames: ["driveId", "fileName", "reportNameType"],
        },

        downloadSPOContainers: {
            argNames: ["active"],
        },

        downloadSharingInsights: {
            argNames: ["queryMode", "insightsType"],
        },

        enableCollaborationInsightsDataCollection: {
        },

        ensureBrandCenterFeature: {
        },

        exportAdminListToCSV: {
            argNames: ["viewXml", "listName"],
        },

        exportCSVFile: {
            argNames: ["timeZoneId"],
        },

        exportToCSV: {
            argNames: ["viewXml", "timeZoneId", "columnsInfo", "listName"],
        },

        exportUnlicensedOneDriveForBusinessListToCSV: {
        },

        getAdminListViews: {},

        getBillingPolicyIdForApp: {
            argNames: ["applicationId"],
        },

        getBrandCenterConfiguration: {
        },

        getBrandFontPackages: {
        },

        getCollaborationInsightsData: {
        },

        getCollaborationInsightsOverview: {
        },

        getFileVersionBatchDeleteJobProgress: {
            argNames: ["siteUrl"],
        },

        getFileVersionBatchDeleteJobProgressForLibrary: {
            argNames: ["siteUrl", "listParams"],
        },

        getFileVersionExpirationReportJobProgress: {
            argNames: ["siteUrl", "reportUrl"],
        },

        getFileVersionExpirationReportJobProgressForLibrary: {
            argNames: ["siteUrl", "listParams", "reportUrl"],
        },

        getFileVersionPolicyForLibrary: {
            argNames: ["siteUrl", "listParams"],
        },

        getFilteredSPListItems: {
            argNames: ["columnName", "columnValue", "columnType", "listName"],
        },

        getHomeSites: {
        },

        getHomeSitesDetails: {},

        getIBVersionForTenant: {
        },

        getIdleSessionSignOutForUnmanagedDevices: {
        },

        getInsightsSummary: {
            argNames: ["insightsScenario", "dataFileName", "pageIndex", "modelName", "maxTokenSize", "maxContentSize", "timeoutMS"],
        },

        getOneDriveSiteSharingInsights: {
            argNames: ["queryMode"],
        },

        getOrgAssets: {
        },

        getPowerAppsEnvironments: {
        },

        getRansomwareActivities: {
            argNames: ["parameters"],
        },

        getRansomwareActivitiesOverview: {
            argNames: ["eventId"],
        },

        getRansomwareEvents: {
            argNames: ["parameters"],
        },

        getRansomwareEventsOverview: {
        },

        getSPHSiteUrl: {
        },

        getSPListItemCount: {
            argNames: ["listName"],
        },

        getSPListRootFolderProperties: {
            argNames: ["listName"],
        },

        getSPOAllWebTemplates: {
            argNames: ["cultureName", "compatibilityLevel"],
        },

        getSPOAppBillingPolicies: {
        },

        getSPOContainerByContainerId: {
            argNames: ["containerId"],
        },

        getSPOContainerByContainerSiteUrl: {
            argNames: ["containerSiteUrl"],
        },

        getSPOContainerTypeById: {
            argNames: ["containerTypeId", "containerTenantType"],
        },

        getSPOContainerTypeConfigurationByContainerTypeId: {
            argNames: ["containerTypeId"],
        },

        getSPOContainerTypes: {
            argNames: ["containerTenantType"],
        },

        getSPOContainersByApplicationId: {
            argNames: ["owningApplicationId", "paged", "pagingToken"],
        },

        getSPODeletedContainers: {
        },

        getSPORestrictedSearchAllowedList: {
        },

        getSPORestrictedSearchMode: {
        },

        getSPOSiteCreationSources: {
        },

        getSPOSyntexApplications: {
        },

        getSPOSyntexConsumingApplications: {
            argNames: ["owningApplicationId", "applicationId"],
        },

        getSPOTenantAllWebTemplates: {
        },

        getSPOTenantWebTemplates: {
            argNames: ["localeId", "compatibilityLevel"],
        },

        getSPOWebTemplatesAllowedForArchiving: {
        },

        getSharePointSettingData: {
        },

        getSharePointSiteSharingInsights: {
            argNames: ["queryMode"],
        },

        getSiteCohortsSummary: {
            argNames: ["view"],
        },

        getSiteAdministrators: {
            argNames: ["siteId"],
        },

        getSiteHealthStatus: {
            argNames: ["sourceUrl"],
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

        getSiteSubscriptionId: {
        },

        getSiteThumbnailLogo: {
            argNames: ["siteUrl"],
        },

        getSitesByState: {
            argNames: ["states"],
        },

        getSitesFromSubstrate: {
            argNames: ["searchText"],
        },

        getSortedSPOContainersByApplicationId: {
            argNames: ["owningApplicationId", "ascending", "paged", "pagingToken"],
        },

        getTargetedSitesDetails: {
        },

        getTargetedSitesDetailsByUserId: {
            argNames: ["userId"],
        },

        getTenantAllOrCompatibleIBSegments: {
            argNames: ["segments"],
        },

        getTenantSendFromAddress: {
        },

        getTenantSiteCreationSource: {
        },

        getTopFilesSharingInsights: {
            argNames: ["queryMode"],
        },

        getTrackViewFeatureAlwaysVisible: {
        },

        getVersionPolicyForDocLibsJobProgress: {
            argNames: ["siteUrl"],
        },

        getViewByDisplayName: {
            argNames: ["viewName", "listName"],
        },

        getVivaConnectionsLicense: {
        },

        grantHubSiteRightsById: {
            argNames: ["hubSiteId", "principals", "grantedRights"],
        },

        hasValidEducationLicense: {
        },

        isSyntexRepositoryTermsOfServiceAccepted: {
        },

        newFileVersionBatchDeleteJob: {
            argNames: ["siteUrl", "batchDeleteParams"],
        },

        newFileVersionBatchDeleteJobForLibrary: {
            argNames: ["siteUrl", "listParams", "batchDeleteParams"],
        },

        newFileVersionExpirationReportJob: {
            argNames: ["siteUrl", "reportUrl"],
        },

        newFileVersionExpirationReportJobForLibrary: {
            argNames: ["siteUrl", "listParams", "reportUrl"],
        },

        newSPOContainerType: {
            argNames: ["containerTypeProperties"],
        },

        purgeContainer: {
            argNames: ["containerId"],
        },

        purgeSPODeletedContainerByContainerId: {
            argNames: ["containerId"],
        },

        purgeSPODeletedContainerByContainerSiteUrl: {
            argNames: ["containerSiteUrl"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recentAdminActionReportIsAuditEnabled: {
        },

        registerHubSite: {
            argNames: ["siteUrl"],
        },

        registerHubSiteWithCreationInformation: {
            argNames: ["siteUrl", "creationInformation"],
        },

        removeContainer: {
            argNames: ["containerId"],
        },

        removeDeletedSite: {
            argNames: ["siteUrl"],
        },

        removeDeletedSitePreferId: {
            argNames: ["siteUrl", "siteId"],
        },

        removeFileVersionBatchDeleteJob: {
            argNames: ["siteUrl"],
        },

        removeFileVersionBatchDeleteJobForLibrary: {
            argNames: ["siteUrl", "listParams"],
        },

        removeFromOrgAssets: {
            argNames: ["libUrl", "listId"],
        },

        removeHomeSite: {
            argNames: ["homeSiteUrl"],
        },

        removeSPHSite: {
        },

        removeSPListItem: {
            argNames: ["listItemId", "listName"],
        },

        removeSPOContainerByContainerId: {
            argNames: ["containerId"],
        },

        removeSPOContainerByContainerSiteUrl: {
            argNames: ["containerSiteUrl"],
        },

        removeSPOContainerType: {
            argNames: ["spDeletedContainerTypeProperties"],
        },

        removeSPOContainerUserRole: {
            argNames: ["ContainerId", "loginName", "role"],
        },

        removeSPORestrictedSearchAllowedList: {
            argNames: ["siteUrls"],
        },

        removeSite: {
            argNames: ["siteUrl"],
        },

        removeTargetedSite: {
            argNames: ["siteId"],
        },

        removeTenantAdminListView: {
            argNames: ["viewId"],
        },

        removeVersionPolicyForDocLibsJob: {
            argNames: ["siteUrl"],
        },

        renderActiveContainers: {
            argNames: ["containerId", "viewXml"],
        },

        renderAdminListData: {
            argNames: ["parameters", "overrideParameters", "listName"],
        },

        renderContainersAdminApplicationsData: {
        },

        renderContainersAdminListData: {
            argNames: ["orderByColumnsList", "filterByColumnsList", "pageSize", "pagingToken", "containerStatus", "searchParameters"],
        },

        renderDeletedContainers: {
            argNames: ["viewXml"],
        },

        renderFilteredAdminListData: {
            argNames: ["parameters", "listName"],
        },

        renderFilteredAdminListDataByGroupId: {
            argNames: ["groupId"],
        },

        renderIBSegmentListDataAsStream: {
            argNames: ["parameters", "segments", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId", "FilterIBSegmentsBasedOnAndCondition"],
        },

        renderIBSegmentListFilterData: {
            argNames: ["parameters"],
        },

        renderOwnershipPolicyStorageSPList: {
            argNames: ["parameters", "overrideParameters"],
        },

        renderPolicyDefinitionList: {
            argNames: ["parameters", "overrideParameters"],
        },

        renderPolicyExecutionsHistory: {
            argNames: ["parameters", "overrideParameters"],
        },

        renderPolicyReport: {
            argNames: ["parameters", "overrideParameters"],
        },

        renderRecentAdminActionReport: {
            argNames: ["parameters", "overrideParameters"],
        },

        renderRecentAdminActions: {
            argNames: ["parameters", "overrideParameters", "isAutoRefresh"],
        },

        reorderTargetedSites: {
            argNames: ["siteIds"],
        },

        restoreContainer: {
            argNames: ["containerId"],
        },

        restoreDeletedSite: {
            argNames: ["siteUrl"],
        },

        restoreDeletedSiteById: {
            argNames: ["siteId"],
        },

        restoreDeletedSitePreferId: {
            argNames: ["siteUrl", "siteId"],
        },

        restoreSPODeletedContainerByContainerId: {
            argNames: ["containerId"],
        },

        restoreSPODeletedContainerByContainerSiteUrl: {
            argNames: ["containerSiteUrl"],
        },

        revokeHubSiteRightsById: {
            argNames: ["hubSiteId", "principals"],
        },

        sendEmail: {
            argNames: ["siteUrl", "activityEventJson"],
        },

        setDefaultView: {
            argNames: ["viewId", "listName"],
        },

        setFileVersionPolicy: {
            argNames: ["isAutoTrimEnabled", "majorVersionLimit", "expireVersionsAfterDays"],
        },

        setFileVersionPolicyForLibrary: {
            argNames: ["siteUrl", "listParams", "versionPolicyParams"],
        },

        setIBSegmentsOnSite: {
            argNames: ["siteId", "segments", "ibMode"],
        },

        setIdleSessionSignOutForUnmanagedDevices: {
            argNames: ["enabled", "warnAfter", "signOutAfter"],
        },

        setJitDlpPolicyData: {
            argNames: ["markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode"],
        },

        setOrgAssetsWithConfig: {
            argNames: ["libUrl", "thumbnailUrl", "orgAssetType", "configParam"],
        },

        setOrgAssetsWithType: {
            argNames: ["libUrl", "thumbnailUrl", "orgAssetType"],
        },

        setSPEmbeddedApplicationPermissions: {
            argNames: ["spSyntexApplicationProperties"],
        },

        setSPHSite: {
            argNames: ["sphSiteUrl"],
        },

        setSPHSiteWithConfiguration: {
            argNames: ["sphSiteUrl", "configuration"],
        },

        setSPOContainerProperties: {
            argNames: ["spContainerProperties"],
        },

        setSPOContainerType: {
            argNames: ["containerTypeProperties"],
        },

        setSPOContainerTypeConfiguration: {
            argNames: ["spContainerTypeConfigurationProperties"],
        },

        setSPORestrictedSearchMode: {
            argNames: ["mode"],
        },

        setSPOSyntexApplicationsClearOverrideSharingCapability: {
            argNames: ["owningApplicationId"],
        },

        setSPOSyntexApplicationsSharingCapability: {
            argNames: ["owningApplicationId", "sharingCapability", "overrideTenantSharingCapability"],
        },

        setSensitivityLabelContainer: {
            argNames: ["containerId", "sensitivityLabel"],
        },

        setSiteAdministrators: {
            argNames: ["siteAdministratorsFieldsData"],
        },

        setSiteSecondaryAdministrators: {
            argNames: ["secondaryAdministratorsFieldsData"],
        },

        setSiteUserGroups: {
            argNames: ["siteUserGroupsData"],
        },

        setSyntexPaygFeatureActivation: {
            argNames: ["featureName", "activationStatus"],
        },

        setTrackViewFeatureAlwaysVisible: {
        },

        swapSite: {
            argNames: ["sourceUrl", "targetUrl", "archiveUrl"],
        },

        swapSiteWithSmartGestureOption: {
            argNames: ["sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures"],
        },

        swapSiteWithSmartGestureOptionForce: {
            argNames: ["sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures", "force"],
        },

        unarchiveSiteById: {
            argNames: ["siteId"],
        },

        unregisterHubSite: {
            argNames: ["siteUrl"],
        },

        update: {
        },

        updateFileSearchVisibility: {
            argNames: ["url", "isHidden"],
        },

        updateGroupSiteProperties: {
            argNames: ["groupId", "siteId", "updateType", "parameters"],
        },

        updatePolicyDefinition: {
            argNames: ["itemId", "policyInputParameters", "policyOperation"],
        },

        updateRansomwareActivity: {
            argNames: ["listItemId", "columnValues", "category"],
        },

        updateRansomwareEvent: {
            argNames: ["listItemId", "columnValues", "forceResolveActivity", "category"],
        },

        updateSPOContainerUserRole: {
            argNames: ["ContainerId", "loginName", "role"],
        },

        updateSiteActivityData: {
        },

        updateTargetedSite: {
            argNames: ["siteUrl", "configurationParam"],
        },

        updateTenantAdminListItem: {
            argNames: ["listItemId", "columnValues", "listName"],
        },

        updateTenantAdminListView: {
            argNames: ["viewId", "viewXml"],
        },

        validateHomeSite: {
            argNames: ["validationActionType", "siteUrl"],
        },

        validateMultipleHomeSitesParameterExists: {
            argNames: ["hasParameters"],
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
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded"],
        },

        addToOrgAssetsWithConfig: {
            argNames: ["cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam"],
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

        getCustomFontsMinorVersion: {
            argNames: ["libUrl"],
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

        incrementCustomFontsMinorVersion: {
            argNames: ["libUrl"],
        },

        isSharingDisabledForNonOwnersOfSite: {
            argNames: ["siteUrl"],
        },

        logCustomFontsLargeUpload: {
            argNames: ["numCatalogs", "numFonts", "totalExpectedFiles"],
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

        removePreviousCustomFontUpload: {
            argNames: ["majVersions", "libUrl"],
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

        setBlockDownloadFileTypePolicyData: {
            argNames: ["blockDownloadFileTypePolicy", "fileTypeIds", "excludedBlockDownloadGroupIds"],
        },

        setBlockDownloadFileTypePolicyExclusionList: {
            argNames: ["excludedBlockDownloadGroupIds"],
        },

        setHideDefaultThemes: {
            argNames: ["hideDefaultThemes"],
        },

        setIdleSessionSignOutForUnmanagedDevices: {
            argNames: ["enabled", "warnAfter", "signOutAfter"],
        },

        setJitDlpPolicyData: {
            argNames: ["markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode"],
        },

        setOrgAssetsLib: {
            argNames: ["libUrl", "thumbnailUrl", "orgAssetType"],
        },

        setOrgAssetsLibWithConfig: {
            argNames: ["libUrl", "thumbnailUrl", "orgAssetType", "configParam"],
        },

        setTenantCdnEnabled: {
            argNames: ["cdnType", "isEnabled"],
        },

        setTenantCdnPolicy: {
            argNames: ["cdnType", "policy", "policyValue"],
        },

        syncAadB2BManagementPolicy: {
        },

        updateTenantTheme: {
            argNames: ["name", "themeJson"],
        },

        uploadCustomFontsAndCatalogLib: {
            argNames: ["customFontFiles", "libUrl"],
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

    "Microsoft.SharePoint.Administration.SiteMove.Service.SiteMoveService": {
        acquireSystemSiteLock: {
            argNames: ["lockRequestor", "lockType", "leaseDurationInMinutes"],
        },

        clearSiteRelocationMarker: {
        },

        extendSystemSiteLockExpiration: {
            argNames: ["leaseDurationInMinute"],
        },

        getCPSChangeToken: {
        },

        getCPSSiteDeleteReason: {
        },

        getDataChunks: {
        },

        getDataReader: {
            argNames: ["sqlCommandText"],
        },

        getDatabaseProperties: {
        },

        getMarker: {
        },

        getEventCacheDataChunk: {
            argNames: ["lastCopiedId", "searchChangeToken"],
        },

        getEventCacheExColumns: {
        },

        getEventCacheExDataChunk: {
            argNames: ["lastCopiedId"],
        },

        getEventCacheIds: {
            argNames: ["lastCopiedId"],
        },

        getScalarValue: {
            argNames: ["sqlCommandText"],
        },

        getServiceInfo: {
        },

        getSiteProperties: {
        },

        getTenantWorkflows: {
        },

        getValidationChunks: {
        },

        isDbReadOnly: {
        },

        isSystemSiteLocked: {
            argNames: ["lockRequestor"],
        },

        lockSite: {
        },

        pauseCrawling: {
            argNames: ["originalCPSDeleteReason"],
        },

        processStorageMetricsChanges: {
        },

        releaseSystemSiteLock: {
            argNames: ["lockRequestor"],
        },

        resumeCrawling: {
            argNames: ["originalCPSDeleteReason"],
        },

        sourceCleanupAfterMove: {
            argNames: ["isDeleted"],
        },

        unlockSiteOnFailure: {
            argNames: ["originalLockFlags"],
        },

    },

    "Microsoft.SharePoint.Administration.SiteMove.Service.SiteRelocationJobManagementService": {
        enqueueSiteRelocationJob: {
            argNames: ["siteId", "siteSubscriptionId", "siteUrl", "sourceDatabaseId", "targetDatabaseId", "siteMoveFlags", "preferredStartTimeInUtc"],
        },

        getServiceInfo: {
        },

    },

    "Microsoft.SharePoint.AuthPolicy.Events.SPAuthEvent.Collection": {
        query: { argNames: ["oData"] },

        roleAssignmentMSGraphNotify: {
            argNames: ["tenant", "action", "type", "resourcePayload", "id", "containerId"],
        },

    },

    "Microsoft.SharePoint.AuthPolicy.SPTenantIBPolicyComplianceReport.Collection": {
        getAllReportStates: {
        },

        getReportById: {
            argNames: ["ReportId", "ShowIncompatibleSegmentsPairsAndInvalidSegmentsFilesContents"],
        },

        query: { argNames: ["oData"] },

        removeFinalizedReport: {
            argNames: ["ReportId"],
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

    "Microsoft.SharePoint.Client.Search.Administration.SiteContentProcessingInfoProvider": {
        getAzureContainerToken: {
        },

        notifyContentProcessingStatus: {
            argNames: ["webId", "listId", "uniqueId", "properties"],
        },

        reportContentProcessingStatus: {
            argNames: ["webId", "listId", "uniqueId", "azureContainerTokenUri", "encryptionKey", "priority", "errorCode", "errorDescription"],
        },

    },

    "Microsoft.SharePoint.Client.Search.Administration.TenantCrawlVersionsInfoProvider": {
        disableCrawlVersions: {
            argNames: ["siteId"],
        },

        disableCrawlVersionsForTenant: {
        },

        enableCrawlVersions: {
            argNames: ["siteId"],
        },

        enableCrawlVersionsForTenant: {
        },

        getSiteCrawlVersionStatus: {
            argNames: ["siteId"],
        },

        isCrawlVersionsEnabled: {
            argNames: ["siteId"],
        },

        isCrawlVersionsEnabledForTenant: {
        },

    },

    "Microsoft.SharePoint.Client.Search.Administration.TenantRecycleBinInfoProvider": {
        disableRecycleBinDiscoverabilityForTenant: {
        },

        enableRecycleBinDiscoverabilityForTenant: {
        },

        isRecycleBinDiscoverabilityEnabledForTenant: {
        },

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
            requestType: RequestType.PostWithArgsInBody
        },

    },

    "Microsoft.SharePoint.ClientSideComponent.HostedAppsManager": {
        add: {
            argNames: ["webPartDataAsJson", "hostType"],
            requestType: RequestType.PostWithArgsInBody
        },

        addEx: {
            argNames: ["webPartDataAsJson", "hostType"],
            requestType: RequestType.PostWithArgsInBody
        },

        getById: {
            argNames: ["id"],
        },

    },

    "Microsoft.SharePoint.Comments.comment": {
        delete: {
            name: "",
            requestMethod: "DELETE"
        },

        like: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        unlike: {
        },

    },

    "Microsoft.SharePoint.Comments.comment.Collection": {
        add: {
            argNames: ["text"],
            metadataType: "Microsoft.SharePoint.Comments.comment",
            name: "",
            requestType: RequestType.PostWithArgsInBody
        },

        deleteAll: {
            requestType: RequestType.Post
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Convergence.ConsumerPermissions": {
        grantConsumerSitePermissions: {
        },

        revokeConsumerSitePermissions: {
        },

    },

    "Microsoft.SharePoint.Convergence.MigrationCompleteStateApi": {
        addState: {
        },

        isDoclibContributorOwnerEnabled: {
        },

        isSuspended: {
        },
    },

    "Microsoft.SharePoint.Convergence.OdcMetadataCleanedUpApi": {
        addState: {
        },

    },

    "Microsoft.SharePoint.EmployeeEngagement.VivaConnectionsPage": {
        getData: {
        },

        setSpotlightConfiguration: {
            argNames: ["configuration"],
        },

    },

    "Microsoft.SharePoint.EmployeeEngagement.VivaHome": {
        addImage: {
            argNames: ["fileName", "imageStream"],
        },

        addImageFromExternalUrl: {
            argNames: ["fileName", "externalUrl"],
        },

        titleRegion: {
            argNames: ["vivaHomeTitleRegion"],
        },

        updateGoToVCButtonFlag: {
            argNames: ["isGoBackToConnectionsButtonDisabled"],
        },

    },

    "Microsoft.SharePoint.EmployeeEngagement.VivaResources": {
        addLink: {
            argNames: ["newLink"],
        },

        getLinks: {
        },

        removeLink: {
            argNames: ["id"],
        },

        reorderLink: {
            argNames: ["linkId", "prevLinkId"],
        },

        updateLink: {
            argNames: ["updatedLink"],
        },

        updateLinks: {
            argNames: ["links"],
        },

    },

    "Microsoft.SharePoint.IR.IRMigration": {
        deleteAndRecreateIRList: {
        },

    },

    "Microsoft.SharePoint.IdentityModel.SPAllOrgSGManager": {
        createAllOrgSecurityGroup: {
        },

    },

    "Microsoft.SharePoint.Insights.SPTenantIBInsightsReportManager": {
        createReport: {
        },

        getAllReportsMetadata: {
        },

        getReport: {
            argNames: ["reportId", "siteType"],
        },

        getReportData: {
            argNames: ["reportId", "siteType", "section"],
        },

    },

    "Microsoft.SharePoint.Internal.ActivityLogger": {
        feedbackDirect: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json"],
        },

        feedbackIndirect: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json"],
        },

        logActivity: {
            argNames: ["Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "ExtraProperties", "AuditCreationTime", "IsOffline"],
        },

        logActivityBulk: {
            argNames: ["Operation", "SiteId", "WebId", "ListId", "Requests"],
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CardDesigns": {
        add: {
            argNames: ["description", "id", "serializedProperties", "showInToolbox", "title"],
        },

        update: {
            argNames: ["description", "id", "serializedProperties", "showInToolbox", "title"],
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata": {
        deploy: {
            argNames: ["skipFeatureDeployment", "isUpdatingApp"],
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

        getById: {
            argNames: ["siteId"],
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
            "AvailableApps|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection|/getById('[Name]')|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata"
        ],

        add: {
            argNames: ["Title", "Url", "Description"] as any,
            requestType: RequestType.PostWithArgsInBody
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TeamsPackageDownload": {
        downloadTeams: {
        },

    },

    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": {
        properties: [
            "AvailableApps|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection|/getById('[Name]')|Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata"
        ],

        add: {
            argNames: ["Url", "Overwrite", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        addAndDeployStoreAppById: {
            argNames: ["CallerId", "CMU", "isUpdatingApp", "Overwrite", "SkipFeatureDeployment", "StoreAssetId"],
            requestType: RequestType.PostWithArgs
        },

        addStoreApp: {
            argNames: ["Url", "Overwrite", "IconUrl", "Publisher", "ShortDescription", "StoreAssetId", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },

        appRequests: {
            argNames: ["AppRequestInfo"],
            requestType: RequestType.PostWithArgs
        },

        downloadTeamsSolution: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        downloadTeamsSolutionByUniqueId: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        getAppById: {
            argNames: ["itemUniqueId"],
        },

        isAppUpgradeAvailable: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        sendAppRequestStatusNotificationEmail: {
            argNames: ["RequestGuid"],
        },

        solutionContainsTeamsComponent: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        syncSolutionToTeams: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        syncSolutionToTeamsByUniqueId: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        updateMyRequestStatus: {
            argNames: ["RequestId", "Status"],
            requestType: RequestType.PostWithArgs
        },

        upload: {
            argNames: ["Url", "Overwrite", "Content"],
            requestType: RequestType.PostWithArgsAndData
        },
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

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatus": {
        isChangeDeployed: {
            argNames: ["changeName"],
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage": {
        create: {
            argNames: ["config"]
        },

        delete: { requestType: RequestType.Delete },

        file: {
            argNames: ["folderName", "fileName", "file", "overwrite"],
        },

        parseUrl: {
            argNames: ["destinationUrl", "retrieveAllLists", "retrieveFoldersForAllLists", "forceMySiteDefaultList", "migrationType"],
        },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeams": {
        teamChannels: {
            argNames: ["teamId", "membershipType"],
        },

        teamChannelsExperiment: {
            argNames: ["teamId", "membershipType"],
        },

        teams: {
            argNames: ["startsWith", "limit", "withLogo"],
        },

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

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperties": {
        delete: {
            argNames: ["key"],
        },

        getProperty: {
            argNames: ["key"],
        },

        setProperty: {
            argNames: ["key", "value", "throwIfExists"],
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlight": {
        isFlightEnabled: {
            argNames: ["flightName"],
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask": {
        delete: { requestType: RequestType.Delete },

        update: {}
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask.Collection": {
        batchCreate: {
            argNames: ["taskDefinitions", "taskSettings", "mmTaskSettings"],
        },

        batchDelete: {
            argNames: ["taskIdList", "deleteInProgressTask"],
        },

        batchUpdate: {
            argNames: ["tasks"],
        },

        createDuplicateTasks: {
            argNames: ["taskDefinition", "taskSettings", "mmTaskSettings", "taskCount"],
        },

        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData }
    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData": {
        delete: {
        },

    },

    "Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData.Collection": {
        addPerfDataTest: {
            argNames: ["Count", "Bottleneck", "MaxDuration", "MaxTaskFiles"],
        },

        getById: {
            argNames: ["id"],
        },

        getData: {
            argNames: ["StartTime", "EndTime", "AgentId", "TimeUnit"],
        },

        getPerfDataTest: {
            argNames: ["StartTime", "EndTime", "AgentId"],
        },

        getRawData: {
            argNames: ["StartTime", "EndTime", "AgentId"],
        },

        query: { argNames: ["oData"] },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob": {
        delete: {
        },

    },

    "Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob.Collection": {
        getBySiteUrl: {
            argNames: ["sourceSiteUrl", "targetSiteUrl"],
        },

        query: { argNames: ["oData"] },

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

    "Microsoft.SharePoint.MultiGeo.SPMultiGeoProxy": {
        remoteThumbnail: {
            argNames: ["url"],
        },

    },

    "Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettings": {
        enableGlobalNavigation: {
            argNames: ["isEnabled"],
        },
    },

    "Microsoft.SharePoint.Navigation.REST.NavigationServiceRest": {
        properties: [
            "MenuState|menustate|([Name])|menunode"
        ],

        currentResourcesNav: {
            argNames: ["source", "includeVivaResources"],
        },

        getPublishingNavigationProviderType: {
            argNames: ["mapProviderName"],
        },

        globalNav: {
            argNames: ["source", "includeVivaResources"],
        },

        globalNavEnabled: {
        },

        homeSiteNavigation: {
            argNames: ["source"],
        },

        menuNodeKey: {
            argNames: ["currentUrl", "mapProviderName"],
        },

        menuState: {
            argNames: ["menuNodeKey", "mapProviderName", "depth", "customProperties"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        saveMenuState: {
            argNames: ["menuState", "mapProviderName"],
        },

        setGlobalNavEnabled: {
            argNames: ["isEnabled"],
        },

    },

    "Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi": {
        details: {
        },

    },

    "Microsoft.SharePoint.Photos.PhotosMigration": {
        migratePhotosData: {
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
        cacheCurrentUserJoinedTeamsResult: {
            argNames: ["joinedTeams"],
        },

        canUserCreateGroup: {},

        clearCurrentUserTeamsCache: {
        },

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

        ensureTeamForGroup: {
            argNames: ["siteUrl", "teamTemplate"],
        },

        ensureTeamForGroupEx: {
            argNames: ["siteUrl", "teamTemplate"],
        },

        getAllOrgLabels: {
            argNames: ["pageNumber"],
        },

        getCurrentUserJoinedTeams: {
            argNames: ["getLogoData", "forceCacheUpdate"],
        },

        getCurrentUserSharedChannelMemberGroups: {
        },

        getCurrentUserTeamConnectedMemberGroups: {
        },

        getGroupCreationContext: {},

        getGroupSiteConversionData: {},

        getParentGroupForChannel: {
            argNames: ["siteUrl"],
        },

        getSharedChannelSharePointUrl: {
            argNames: ["tenantId", "groupId"],
        },

        getSiteStatus: {
            argNames: ["groupId"],
        },

        getTeamChannelFilesUrl: {
            argNames: ["teamId", "channelId"],
        },

        getTeamChannels: {
            argNames: ["teamId", "useStagingEndpoint"],
        },

        getTeamChannelsDirect: {
            argNames: ["teamId"],
        },

        getTeamChannelsEx: {
            argNames: ["teamId"],
        },

        getTeamChannelsWithSiteUrl: {
            argNames: ["siteUrl"],
        },

        getUserSharedChannelMemberGroups: {
            argNames: ["userName"],
        },

        getUserTeamConnectedMemberGroups: {
            argNames: ["userName"],
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

        pinToTeam: {
            argNames: ["requestParams"],
        },

        recentAndJoinedTeams: {
            argNames: ["includeRecent", "includeTeams", "includePinned", "existingJoinedTeamsData"],
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

        areSegmentsCompatible: {
            argNames: ["segments"],
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

        getCompatibleSegments: {
            argNames: ["segments"],
        },

        getIBSegmentLabels: {
            argNames: ["IBSegments"],
            requestType: RequestType.GetWithArgsInQS
        },

        getTeamChannelSiteOwner: {
            argNames: ["siteId"],
            requestType: RequestType.GetWithArgsInQS
        },

        landingSiteUrlFromName: {
            argNames: ["siteName"],
        },

        restoreTeamsChannelSite: {
            argNames: ["siteId", "relatedGroupId"],
            requestType: RequestType.PostWithArgsInBody
        },

        setIBSegments: {
            argNames: ["IBSegments"],
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

        vivaBackendSiteUrlFromName: {
            argNames: ["siteName"],
        },
    },

    "Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder": {
        context: {
        },

    },

    "Microsoft.SharePoint.Portal.SiteIconManager": {
        getSiteLogo: {
            argNames: ["siteUrl", "target", "type", "hash"],
        },

        setSiteLogo: {
            argNames: ["relativeLogoUrl", "type", "aspect", "focalx", "focaly", "isFocalPatch"],
            requestType: RequestType.PostWithArgsInBody
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

    "Microsoft.SharePoint.Portal.VivaSiteManager": {
        ensureVivaSite: {
        },

    },

    "Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaBackfillApi": {
        backfillNonQuota: {
            argNames: ["backfillUserfacts"],
        },

    },

    "Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaMigrationApi": {
        migrateNonQuota: {
        },

    },

    "Microsoft.SharePoint.QuotaManagement.Consumer.QuotaMigrationApi": {
        migrateQuota: {
            argNames: ["IsMaxQuotaCall"],
        },

    },

    "Microsoft.SharePoint.SectionDesignIdeas.SectionDesignIdeasApi": {
        getSectionDesignIdeas: {
            argNames: ["title", "subTitle"],
        },

        ping: {
        },

    },

    "Microsoft.SharePoint.Sharing.Internal.SharingRestrictions": {
        update: {
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
            requestType: RequestType.PostWithArgs
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

    "SP.AppConfiguration": {
        update: {
        },

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

    "SP.BrandCenter": {
        addSiteTheme: {
            argNames: ["themeData"],
        },

        addTenantTheme: {
            argNames: ["themeData"],
        },

        configuration: {
        },

        currentBrandingConfiguration: {
        },

        deleteSiteTheme: {
            argNames: ["themeId"],
        },

        ensureBrandColorsListFeature: {
        },

        ensureBrandFontsLibraryFeature: {
        },

        getFontStream: {
            argNames: ["fontFileUrl"],
        },

        getSiteThemes: {
        },

        getTenantThemeById: {
            argNames: ["id"],
        },

        getTenantThemes: {
        },

        getTenantThemesXgeoUtil: {
        },

        orgAssets: {
        },

        orgAssetsWithCacheFlag: {
            argNames: ["shouldUseCache"],
        },

        updateSiteTheme: {
            argNames: ["themeData"],
        },

        updateTenantTheme: {
            argNames: ["themeData"],
        },

        validateSiteThemeName: {
            argNames: ["name"],
        },

        validateTenantThemeName: {
            argNames: ["name"],
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
        bulkUpdateDynamicScopeBindings: {
            argNames: ["scopesToAdd", "scopesToRemove", "siteId"],
        },

        extendReviewItemsRetention: {
            argNames: ["itemIds", "extensionDate"],
        },

        getDynamicScopeBindingBySiteId: {
            argNames: ["siteId"],
        },

        getSiteAdaptivePolicies: {
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

        retagUnifiedReviewItemsWithMetas: {
            argNames: ["itemIds", "originalTagName", "newTagName", "newTagMetas"],
        },

        setContainerRetentionPolicy: {
            argNames: ["siteId", "defaultContainerLabel"],
        },

        updateContainerSetting: {
            argNames: ["siteId", "externalId", "settingType", "setting"],
        },

        updateSiteAdaptivePolicies: {
            argNames: ["policiesToAdd", "policiesToRemove", "siteId"],
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

        create: {
            argNames: ["parameters"],
            metadataType: "SP.ContentType",
            name: "",
            requestType: RequestType.PostBodyNoArgs
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

        setDocIdSitePrefix: {
            argNames: ["prefix", "scheduleAssignment", "overwriteExistingIds"],
        },

    },

    "SP.EmployeeEngagement": {
        configuration: {
        },

        dashboardContent: {
            argNames: ["overrideLanguageCode"],
        },

        dashboardOOBContent: {
            argNames: ["oobContentChoice"],
        },

        fullDashboardContent: {
            argNames: ["canvasAsJson", "includePersonalizationData"],
        },

        getDashboardPersonalization: {
        },

        getTargetedSitesAsEditor: {
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setDashboardPersonalization: {
            argNames: ["isEnabled"],
        },

        vivaConnections: {
            argNames: ["adminConfiguredUrl"],
        },

        vivaHome: {
        },

        vivaHomeConfiguration: {
            argNames: ["shouldByPassCache"],
        },


    },

    "SP.EmployeeExperienceController": {
        dashboard: {
            argNames: ["formFactor", "dashboardId", "mySiteUrl"],
        },

        getAnnouncementsState: {
            argNames: ["mySiteUrl"],
        },

        saveDashboard: {
            argNames: ["employeeExperienceDashboardData", "mySiteUrl"],
        },

        setAnnouncementState: {
            argNames: ["announcementStates", "mySiteUrl"],
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
            "ListItemAllFields|odata", "LockedByUser|SP.User", "ModifiedBy|SP.User", "Properties", "VersionEvents", "Versions|SP.FileVersion.Collection"
        ],

        addClientActivities: {
            argNames: ["activitiesStream"],
            requestType: RequestType.PostWithArgs
        },

        addFileScannerWorkItem: {
            argNames: ["dispatchType", "jobType", "jobSubType"],
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

        changeContentStorageSchema: {
            argNames: ["desiredSchema"],
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
            argNames: ["uploadId", "fileOffset", "checksum", "stream", "sandboxId"],
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

        getMediaServiceMetadata: {
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
            requestType: RequestType.GetWithArgs
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

        setExpirationDate: {
            argNames: ["expirationDate"],
        },

        setFileUserValue: {
            argNames: ["key", "value"],
            requestType: RequestType.PostWithArgs
        },

        setMediaServiceMetadata: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        startUpload: {
            argNames: ["uploadId", "stream"],
            name: "startupload(uploadId=guid'[[uploadId]]')",
            requestType: RequestType.PostReplaceWithData
        },

        startUploadFile: {
            argNames: ["uploadId", "stream"],
            name: "startUploadFile(uploadId=guid'[[uploadId]]')",
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

        upload: {
            argNames: ["uploadId", "stream"],
            requestType: RequestType.PostWithArgs
        },

        uploadWithChecksum: {
            argNames: ["uploadId", "checksum", "stream"],
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
            argNames: ["DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash"],
            requestType: RequestType.PostWithArgs
        },

        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: RequestType.PostWithArgs
        },

        addUsingPath: {
            argNames: ["DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash", "contentStream"],
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

        openBinaryStreamWithOptions: {
            argNames: ["openOptions"],
            requestType: RequestType.GetBuffer,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setExpirationDate: {
            argNames: ["expirationDate"],
        },
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
            "Files|SP.File.Collection|/getByUrl('[Name]')|SP.File", "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder", "ListItemAllFields|odata",
            "ParentFolder|SP.Folder", "Properties", "StorageMetrics"
        ],

        addSubFolder: {
            argNames: ["leafName", "updateParams"],
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

        startDelete: {
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
            "Files|SP.File.Collection|/getByUrl('[Name]')|SP.File", "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder",
            "ParentFolder", "StorageMetrics"
        ],

        add: {
            argNames: ["url"],
            requestType: RequestType.PostWithArgs
        },

        addUsingPath: {
            argNames: ["DecodedUrl", "EnsureUniqueFileName", "Overwrite"],
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

    "SP.FolderColoring": {
        createFolder: {
            argNames: ["DecodedUrl", "EnsureUniqueFileName", "Overwrite", "coloringInformation"],
        },

        renameFolder: {
            argNames: ["DecodedUrl", "newName", "coloringInformation"],
        },

        stampColor: {
            argNames: ["DecodedUrl", "coloringInformation"],
        },

    },

    "SP.FontPackage": {
        apply: {
        },

        delete: {
        },

        fontStream: {
            argNames: ["fontFamily"],
        },

        update: {
        },

    },

    "SP.FontPackage.Collection": {
        getById: {
            argNames: ["id"],
        },

        getByTitle: {
            argNames: ["title"],
        },

        query: { argNames: ["oData"] },

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
        addOrUpdateSiteReference: {
            argNames: ["knowledgeHubSiteUrl"],
        },

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
            "DefaultDisplayFormUrl", "DefaultEditFormUrl", "DefaultNewFormUrl", "DefaultView|SP.View", "DescriptionResource",
            "EffectiveBasePermissions", "EventReceivers|SP.EventReceiverDefinition.Collection|('[Name]')|SP.EventReceiverDefinition",
            "Fields|SP.Field.Collection|/getByInternalNameOrTitle('[Name]')|SP.Field", "FirstUniqueAncestorSecurableObject", "Forms|SP.Form.Collection|('[Name]')|SP.Form",
            "InformationRightsManagementSettings", "Items|SP.ListItem.Collection|([Name])|SP.ListItem", "ParentWeb",
            "RoleAssignments|SP.RoleAssignment.Collection|([Name])|SP.RoleAssignment", "RootFolder|SP.Folder|/getByUrl('[Name]')|SP.File", "Subscriptions", "TitleResource",
            "UserCustomActions|SP.UserCustomAction.Collection|('[Name]')|SP.UserCustomAction", "Views|SP.View.Collection|('[Name]')|SP.View", "WorkflowAssociations"
        ],

        addItem: {
            name: "Items",
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        addItemUsingPath: {
            argNames: ["parameters"],
            requestType: RequestType.PostWithArgsInBody
        },

        addValidateUpdateItem: {
            argNames: ["listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture"],
            requestType: RequestType.PostWithArgsInBody
        },

        addValidateUpdateItemUsingPath: {
            argNames: ["listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture"],
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

        cAAECreateTempFolder: {
        },

        cAAERenameFileInTemporaryFolder: {
            argNames: ["Path", "UpdatedName"],
        },

        cancelDeleteFileVersions: {
        },

        clearBusinessAppMigrationInteractiveData: {
        },

        copyTemplateAndGetMetadata: {
            argNames: ["Id"],
        },

        createDocumentAndGetEditLink: {
            argNames: ["fileName", "folderPath", "documentTemplateType", "templateUrl"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentFromCAAETemplate: {
            argNames: ["ContentTypeName", "documentGenerationInfo"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentFromCAAETemplateV2: {
            argNames: ["Id", "documentGenerationInfo"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentFromContentAssemblyTemplate: {
            argNames: ["TemplateUrl", "documentGenerationInfo"],
            requestType: RequestType.PostWithArgsInBody
        },

        createDocumentWithDefaultName: {
            argNames: ["folderPath", "extension"],
            requestType: RequestType.PostWithArgsInBody
        },

        createHVCSItemApprovalRequest: {
            argNames: ["createItemRequestPayload"],
            requestType: RequestType.PostWithArgsInBody
        },

        createMappedView: {
            argNames: ["appViewCreationInfo", "visualizationTarget"],
            requestType: RequestType.PostWithArgsInBody
        },

        createRuleEx: {
            argNames: ["condition", "title", "triggerType", "action", "ruleTemplateId"],
            requestType: RequestType.PostWithArgsInBody
        },

        createSmartTemplateContentTypeAndAddToList: {
            argNames: ["Name", "Description"],
            requestType: RequestType.PostWithArgsInBody
        },

        createSmartTemplateContentTypeAndAddToListV2: {
            argNames: ["Name", "Description", "TemplatePath", "Status"],
            requestType: RequestType.PostWithArgsInBody
        },

        delete: {
            requestType: RequestType.Delete
        },

        deleteRule: {
            argNames: ["ruleId", "triggerType"],
            requestType: RequestType.Delete
        },

        enableQueryableColumns: {
        },

        enqueueAsyncActionTaskById: {
            argNames: ["id", "parameters"],
        },

        ensureSignoffStatusField: {
        },

        getAllRules: {
        },

        getAsyncActionConfig: {
            argNames: ["id"],
        },

        getAsyncActionTaskIds: {
        },

        getBloomFilter: {
            argNames: ["startItemId"],
        },

        getBloomFilterWithCustomFields: {
            argNames: ["listItemStartingID", "internalFieldNames"],
        },

        getBusinessAppMigrationInteractiveData: {
        },

        getBusinessAppOperationStatus: {
        },

        getCAAETemplateMetadata: {
            argNames: ["Name", "Published"],
        },

        getCAAETemplateMetadataV2: {
            argNames: ["Id"],
        },

        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: RequestType.PostWithArgsInBody
        },

        getCheckedOutFiles: {
        },

        getContentAssemblyDocumentFieldValues: {
            argNames: ["DocumentUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getContentAssemblyTemplateFields: {
            argNames: ["TemplateUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
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

        getLookupFieldChoices: {
            argNames: ["targetFieldName", "pagingInfo"],
        },

        getMappedApp: {
            argNames: ["appId", "visualizationAppTarget"],
        },

        getMappedApps: {
            argNames: ["visualizationAppTarget"],
        },

        getProgressForDeleteFileVersions: {
        },

        getProgressForFileVersionExpirationReport: {
            argNames: ["reportFileUrl"],
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

        isSyntexAIFeaturesFlightEnabled: {
        },

        lockSmartTemplate: {
            argNames: ["Id"],
        },

        mapFieldsToColumnsForModernTemlate: {
            argNames: ["payload"],
        },

        mapFieldsToColumnsForModernTemplate: {
            argNames: ["templatePayload"],
        },

        parseDocumentTemplate: {
            argNames: ["Name"],
        },

        publishMappedView: {
            argNames: ["appId", "visualizationTarget"],
        },

        publishSnippet: {
            argNames: ["publishSnippetPayload"],
        },

        publishTemplateV2: {
            argNames: ["payload"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recycle: {
            requestType: RequestType.Post
        },

        refreshLockSmartTemplate: {
            argNames: ["Id", "LockId"],
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
            argNames: ["parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId"],
            requestType: RequestType.PostWithArgsInBody
        },

        renderListFilterData: {
            argNames: ["ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId", "ViewXml"],
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

        searchLookupFieldChoices: {
            argNames: ["targetFieldName", "beginsWithSearchString", "pagingInfo"],
            requestType: RequestType.PostWithArgsInBody
        },

        setContentAssemblyTemplateReadOnly: {
            argNames: ["Id"],
            requestType: RequestType.PostWithArgsInBody
        },

        setExemptFromBlockDownloadOfNonViewableFiles: {
            argNames: ["value"],
            requestType: RequestType.PostWithArgsInBody
        },

        setItemsOrder: {
            argNames: ["itemIds", "lowerOrderItemId", "higherOrderItemId"],
        },

        setListCustomOrderFlag: {
            argNames: ["value"],
        },

        startDeleteFileVersions: {
            argNames: ["deleteOlderThanDays"],
        },

        startDeleteFileVersionsByMode: {
            argNames: ["batchDeleteParameters"],
        },

        startFileVersionExpirationReport: {
            argNames: ["reportFileUrl"],
        },

        startRecycle: {
        },

        syncFlowCallbackUrl: {
            argNames: ["flowId"],
            requestType: RequestType.PostWithArgsInBody
        },

        syncFlowInstance: {
            argNames: ["flowID"],
            requestType: RequestType.PostWithArgsInBody
        },

        syncFlowInstances: {
            argNames: ["retrieveGroupFlows"],
            requestType: RequestType.PostWithArgsInBody
        },

        syncFlowTemplates: {
            argNames: ["category"],
            requestType: RequestType.PostWithArgsInBody
        },

        unlockSmartTemplate: {
            argNames: ["Id", "LockId"],
        },

        unpublishMappedView: {
            argNames: ["appId", "visualizationTarget"],
            requestType: RequestType.Post
        },

        unsetContentAssemblyTemplateReadOnly: {
            argNames: ["Id"],
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        updateCAAETemplate: {
            argNames: ["Name", "updateTemplateInfo"],
        },

        updateCAAETemplateV2: {
            argNames: ["Id", "updateTemplateInfo"],
        },

        updateContentAssemblyDocument: {
            argNames: ["TemplateUrl", "contentAssemblyFormAnswers"],
        },

        updateFormProcessingModelRetentionLabel: {
            argNames: ["retentionLabel"],
        },

        updateFormProcessingModelSettings: {
            argNames: ["retentionLabel", "linkedList"],
        },

        updateRuleEx: {
            argNames: ["ruleId", "condition", "title", "status", "action", "triggerType"],
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
            "AttachmentFiles|SP.Attachment.Collection|('[Name]')|SP.Attachment", "Comments|Microsoft.SharePoint.Comments.comment.Collection|('[Name]')|Microsoft.SharePoint.Comments.comment",
            "ContentType|SP.ContentType", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit", "File|SP.File", "FirstUniqueAncestorSecurableObject",
            "Folder|SP.Folder", "GetDlpPolicyTip", "ParentList", "Properties", "RoleAssignments|SP.RoleAssignment.Collection|roleassignments|([Name])|SP.RoleAssignment",
            "Versions|SP.ListItemVersion.Collection|([Name])|SP.ListItemVersion"
        ],

        addThumbnailFieldData: {
            argNames: ["imageStream", "imageName", "fieldInternalName", "lockId"],
            requestType: RequestType.PostWithArgs
        },

        archive: {
            requestType: RequestType.Post
        },

        attachImage: {
            argNames: ["imageStream", "imageName", "fieldInternalName"],
            requestType: RequestType.PostWithArgs
        },

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

        getComments: {
            returnType: "Microsoft.SharePoint.Comments.comment.Collection"
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
            name: "getUserEffectivePermissions(@user)?@user='[[userName]]'",
            requestType: RequestType.GetReplace
        },

        getVersions: {
            argNames: ["getVersionsParams"],
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
            requestType: RequestType.PostWithArgsInBody
        },

        setComplianceTag: {
            argNames: ["complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault"],
        },

        setComplianceTagWithExplicitMetasUpdate: {
            argNames: ["complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress"],
        },

        setComplianceTagWithHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithMetaInfo: {
            argNames: ["complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault"],
        },

        setComplianceTagWithNoHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithRecord: {
            argNames: ["complianceTag"],
        },

        systemUpdate: {
        },

        unarchive: {
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

        updateOverwriteVersion: {
        },

        validateUpdateFetchListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder"],
        },

        validateUpdateFetchListItemInFolder: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder"],
        },

        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId"],
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

        recycle: {
        },
    },

    "SP.ListItemVersion.Collection": {
        deleteAll: {
            requestType: RequestType.Post
        },

        getById: {
            argNames: ["versionId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        recycleAll: {
        },

        restoreByID: {
            argNames: ["versionId"],
        },
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

        setFollowLangPreference: {
            argNames: ["request"],
        },

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
        add: {
            argNames: ["properties"],
            metadataType: "SP.NavigationNode",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

        getById: {
            argNames: ["id"],
        },

        getByIndex: {
            argNames: ["index"],
        },

        moveAfter: {
            argNames: ["nodeId", "previousNodeId"],
            requestType: RequestType.PostWithArgs
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.OAuth.Authentication": {
        getRenewalUrl: {
            argNames: ["redirectUrl"],
        },

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

    "SP.PropertyValues.Collection": {
        add: {
            argNames: ["key", "value"],
            name: "_vti_bin/client.svc/ProcessQuery",
            replaceEndpointFl: true,
            requestType: RequestType.PostReplace,
            data: `<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library">
                <Actions>
                    <ObjectPath Id="1" ObjectPathId="0" />
                    <ObjectPath Id="3" ObjectPathId="2" />
                    <ObjectPath Id="5" ObjectPathId="4" />
                    <Method Name="SetFieldValue" Id="6" ObjectPathId="4">
                    <Parameters>
                        <Parameter Type="String">[[key]]</Parameter>
                        <Parameter Type="String">[[value]]</Parameter>
                    </Parameters>
                    </Method>
                    <Query Id="7" ObjectPathId="2">
                        <Query SelectAllProperties="true">
                            <Properties />
                        </Query>
                    </Query>
                    <Method Name="Update" Id="8" ObjectPathId="2" />
                </Actions>
                <ObjectPaths>
                    <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
                    <Property Id="2" ParentId="0" Name="Web" />
                    <Property Id="4" ParentId="2" Name="AllProperties" />
                </ObjectPaths>
            </Request>`
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        remove: {
            argNames: ["key"],
            name: "_vti_bin/client.svc/ProcessQuery",
            replaceEndpointFl: true,
            requestType: RequestType.PostReplace,
            data: `<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library">
                <Actions>
                    <ObjectPath Id="1" ObjectPathId="0" />
                    <ObjectPath Id="3" ObjectPathId="2" />
                    <ObjectPath Id="5" ObjectPathId="4" />
                    <Method Name="SetFieldValue" Id="6" ObjectPathId="4">
                    <Parameters>
                        <Parameter Type="String">[[key]]</Parameter>
                        <Parameter Type="Null" />
                    </Parameters>
                    </Method>
                    <Query Id="7" ObjectPathId="2">
                        <Query SelectAllProperties="true">
                            <Properties />
                        </Query>
                    </Query>
                    <Method Name="Update" Id="8" ObjectPathId="2" />
                </Actions>
                <ObjectPaths>
                    <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
                    <Property Id="2" ParentId="0" Name="Web" />
                    <Property Id="4" ParentId="2" Name="AllProperties" />
                </ObjectPaths>
            </Request>`
        },
    },

    "SP.Publishing.AnnouncementsController": {
        active: {
        },

        channel: {
        },

        flwPropertyFilteringMapping: {
            argNames: ["flwPropertyFilteringMapping"],
        },

    },

    "SP.Publishing.CampaignPublication": {
        approveApprovalRequest: {
            argNames: ["comment"],
        },

        boostNews: {
            argNames: ["SitePageBoost"],
        },

        cancelApprovalRequest: {
        },

        cancelSchedulePublication: {
        },

        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
        },

        createApprovalRequest: {
            argNames: ["creationInfo"],
        },

        createNewsCopy: {
        },

        delete: {
        },

        deletePublication: {
        },

        demoteFromNews: {
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getPrePublishValidationStatus: {
        },

        getPublishingStatus: {
        },

        getVersion: {
            argNames: ["versionId"],
        },

        loadMailDraft: {
            argNames: ["requestParam"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
        },

        publish: {
        },

        publishAsBot: {
            argNames: ["tenantId", "channelIds", "message"],
        },

        publishCoAuth: {
            argNames: ["pageStream"],
        },

        publishPublication: {
        },

        rejectApprovalRequest: {
            argNames: ["comment"],
        },

        resetEndpoint: {
            argNames: ["requestParam"],
        },

        sPSiteValidator: {
            argNames: ["siteUrl"],
        },

        saveDraft: {
            argNames: ["sitePage"],
        },

        saveMailDraft: {
            argNames: ["requestParam"],
        },

        savePage: {
            argNames: ["pageStream"],
        },

        savePageAsDraft: {
            argNames: ["pageStream"],
        },

        savePageAsTemplate: {
        },

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublication: {
            argNames: ["publishStartDate"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sendTestEmail: {
            argNames: ["transpileContent"],
        },

        sendTestTeamsMessage: {
            argNames: ["audienceId", "transpileContent"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        startCoAuth: {
            argNames: ["paramsStream"],
        },

        startExclusiveAuthoring: {
        },

        syncApprovalRequest: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
        },

        update: {
        },

        updateSharePointPublishingStatus: {
            argNames: ["destinationSiteId", "destinationUrl", "sharePointPublishingStatus", "sharePointPublishingErrorCode"],
        },

        validate: {
        },

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

    "SP.Publishing.FeedVideoPage": {
        boostNews: {
            argNames: ["SitePageBoost"],
        },

        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
            requestType: RequestType.Post
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
            requestType: RequestType.Post
        },

        createNewsCopy: {
        },

        demoteFromNews: {
            requestType: RequestType.Post
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getVersion: {
            argNames: ["versionId"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
            requestType: RequestType.Post
        },

        publish: {
        },

        publishCoAuth: {
            argNames: ["pageStream"],
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

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        startCoAuth: {
            argNames: ["paramsStream"],
        },

        startExclusiveAuthoring: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
        },

        update: {
        },

    },

    "SP.Publishing.FeedVideoPage.Collection": {
        isContentTypeAvailable: {
        },

        query: { argNames: ["oData"] },

    },

    "SP.Publishing.Navigation.PortalNavigationCacheWrapper": {
        disable: {
        },

        enable: {
        },

        refresh: {
        },

    },

    "SP.Publishing.Navigation.StructuralNavigationCacheWrapper": {
        setSiteState: {
            argNames: ["state"],
        },

        setWebState: {
            argNames: ["state"],
        },

        siteState: {
        },

        webState: {
        },

    },

    "SP.Publishing.PageDiagnosticsController": {
        byPage: {
            argNames: ["pageRelativeFilePath"],
        },

        save: {
            argNames: ["pageDiagnosticsResult"],
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

    "SP.Publishing.PortalLaunch.PortalLaunchWavesManager": {
        get: {
            argNames: ["siteUrl"],
        },

        getAll: {
        },

        remove: {
            argNames: ["siteUrl"],
        },

        saveWaveSetup: {
            argNames: ["portalLaunchSetup"],
        },

    },

    "SP.Publishing.RepostPage": {
        boostNews: {
            argNames: ["SitePageBoost"],
        },

        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
            requestType: RequestType.Post
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
            requestType: RequestType.Post
        },

        createNewsCopy: {},

        demoteFromNews: {
            requestType: RequestType.Post
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getVersion: {
            argNames: ["versionId"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
            requestType: RequestType.Post
        },

        publish: {
        },

        publishCoAuth: {
            argNames: ["pageStream"],
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

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        startCoAuth: {
            argNames: ["paramsStream"],
        },

        startExclusiveAuthoring: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
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
            argNames: ["url", "message", "recipientEmails", "pageContent", "subject", "ccEmails", "bccEmails"],
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
        boostNews: {
            argNames: ["SitePageBoost"],
        },

        checkOut: {
            requestType: RequestType.Post
        },

        checkoutPage: {
            requestType: RequestType.Post
        },

        copy: {
            requestType: RequestType.PostWithArgs
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
            requestType: RequestType.Post
        },

        createNewsCopy: {
            requestType: RequestType.Post
        },

        demoteFromNews: {
            requestType: RequestType.Post
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
            requestType: RequestType.Post
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getVersion: {
            argNames: ["versionId"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
            requestType: RequestType.Post
        },

        publish: {
            requestType: RequestType.Post
        },

        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        },

        publishCoAuth: {
            argNames: ["pageStream"],
        },

        saveDraft: {
            argNames: ["sitePage"],
            requestType: RequestType.Post
        },

        savePage: {
            argNames: ["pageStream"],
            requestType: RequestType.Post
        },

        savePageAsDraft: {
            argNames: ["pageStream"],
            requestType: RequestType.Post
        },

        savePageAsTemplate: {
            requestType: RequestType.Post
        },

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
            requestType: RequestType.Post
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
            requestType: RequestType.Post
        },

        startCoAuth: {
            argNames: ["paramsStream"],
            requestType: RequestType.Post
        },

        startExclusiveAuthoring: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
        },

        update: {
            argNames: ["properties"],
            metadataType: "",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

    },

    "SP.Publishing.SitePage.Collection": {
        copyToStatus: {
            argNames: ["workItemId"],
        },

        createAppPage: {
            argNames: ["webPartDataAsJson"],
            metadataType: "SP.Publishing.SitePage",
            name: "",
            requestType: RequestType.PostBodyNoArgs
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

        getTranslations: {
            argNames: ["sourceItemId"],
        },

        isSitePage: {
            argNames: ["url"],
        },

        pageMoveStatus: {
            argNames: ["workItemId"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

        setMultilingual: {
            argNames: ["enabled"],
        },

        setScheduling: {
            argNames: ["enabled"],
        },

        templates: {
        },

        updateAppPage: {
            argNames: ["pageId", "webPartDataAsJson", "title", "includeInNavigation"],
            requestType: RequestType.PostWithArgsInBody
        },

        updateFullPageApp: {
            argNames: ["serverRelativeUrl", "webPartDataAsJson"],
            requestType: RequestType.PostWithArgsInBody
        }
    },

    "SP.Publishing.SitePage3D": {
        boostNews: {
            argNames: ["SitePageBoost"],
        },

        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
            requestType: RequestType.Post
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
        },

        createNewsCopy: {
        },

        demoteFromNews: {
            requestType: RequestType.Post
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getVersion: {
            argNames: ["versionId"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
            requestType: RequestType.Post
        },

        publish: {
        },

        publishCoAuth: {
            argNames: ["pageStream"],
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

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        startCoAuth: {
            argNames: ["paramsStream"],
        },

        startExclusiveAuthoring: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
        },

        update: {
        },

    },

    "SP.Publishing.SitePage3D.Collection": {
        activate: {
        },

        query: { argNames: ["oData"] },

    },

    "SP.Publishing.SitePageMetadata.Collection": {
        getById: {
            argNames: ["id"],
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.Publishing.SitePageService": {
        properties: [
            "CommunicationSite|SP.Publishing.CommunicationSite",
            "Pages|SP.Publishing.SitePage.Collection|('[Name]')|SP.Publishing.SitePage"
        ],

        addImage: {
            argNames: ["pageName", "imageFileName", "imageStream", "pageId"],
            requestType: RequestType.PostWithArgs
        },

        addImageFromExternalUrl: {
            argNames: ["pageName", "imageFileName", "externalUrl", "subFolderName", "pageId"],
            requestType: RequestType.PostWithArgs
        },

        canCreatePage: {
        },

        canCreatePromotedPage: {
        },

        enableAmplifyFromAnywhere: {
        },

        enableAnnouncements: {
        },

        enableCategories: {
        },

        pagesInLib: {
            argNames: ["id"],
        },

        pagesInLibByName: {
            argNames: ["name"],
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

    "SP.Publishing.TopicSitePage": {
        boostNews: {
            argNames: ["SitePageBoost"],
        },

        checkOut: {
        },

        checkoutPage: {
        },

        copy: {
            requestType: RequestType.Post
        },

        copyTo: {
            argNames: ["copyToParams"],
        },

        copyWithConfiguration: {
            argNames: ["sitePageFlags", "isNews", "creationMode"],
        },

        createNewsCopy: {
        },

        demoteFromNews: {
            requestType: RequestType.Post
        },

        discardCoAuth: {
            argNames: ["lockId"],
        },

        discardPage: {
        },

        extendSessionCoAuth: {
        },

        getDependencyMetadata: {
        },

        getHighlightsInfo: {
        },

        getLatestVersionsInDescendingOrder: {
            argNames: ["numVersions"],
        },

        getVersion: {
            argNames: ["versionId"],
        },

        move: {
            argNames: ["pageMoveParams"],
        },

        promoteToNews: {
            requestType: RequestType.Post
        },

        publish: {
        },

        publishCoAuth: {
            argNames: ["pageStream"],
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

        savePageAsTemplate2: {
            argNames: ["creationMode"],
        },

        savePageAsTemplateOnMySite: {
        },

        savePageCoAuth: {
            argNames: ["pageStream"],
        },

        saveStreams: {
            argNames: ["contentStream", "sharedLockId"],
        },

        schedulePublish: {
            argNames: ["sitePage"],
        },

        sharePagePreviewByEmail: {
            argNames: ["message", "recipientEmails"],
        },

        startCoAuth: {
            argNames: ["paramsStream"],
        },

        startExclusiveAuthoring: {
        },

        tryProcessSourcePageAfterPageMovePublish: {
        },

        tryProcessSourcePageBeforePageMovePublish: {
        },

        update: {
        },

    },

    "SP.Publishing.TopicSitePage.Collection": {
        getByEntityId: {
            argNames: ["entityId"],
        },

        getPagesByEntityId: {
            argNames: ["entityId"],
        },

        getByEntityIdAndCulture: {
            argNames: ["id", "culture"],
        },

        isContentTypeAvailable: {
        },

        query: { argNames: ["oData"] },

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
            argNames: ["ids", "bRenameExistingItems"],
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
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByServerRelativeUrl: {
            argNames: ["serverRelativeFileUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByUrl: {
            argNames: ["fileUrl"],
            name: "getFileByUrl(@url)?@url='[[fileUrl]]'",
            requestType: RequestType.GetReplace,
            returnType: "SP.File"
        },

        getFolderByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
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
        add: {
            argNames: ["properties"],
            metadataType: "SP.RoleDefinition",
            name: "",
            requestType: RequestType.PostBodyNoArgs
        },

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

        cancelDeleteFileVersions: {
            requestType: RequestType.Post
        },

        cancelSetVersionPolicyForDocLibs: {
            requestType: RequestType.Post
        },

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

        createSPAsyncReadJobWithMultiUrl: {
            argNames: ["urls", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri"],
            requestType: RequestType.PostWithArgs
        },

        deleteMigrationJob: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgs
        },

        enqueueApplySensitivityLabelWork: {
            argNames: ["workItemInformation"],
        },

        extendUpgradeReminderDate: {
            requestType: RequestType.Post
        },

        getBlockDownloadPolicyForFilesData: {
        },

        getBringYourOwnKeyRecoveryKeyMode: {
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

        getProgressForDeleteFileVersions: {
        },

        getProgressForExpireFileVersionsBySchedule: {
            argNames: ["scheduleFilePath"],
        },

        getProgressForFileVersionExpirationReport: {
            argNames: ["reportFileUrl"],
        },

        getProgressForSetVersionPolicyForDocLibs: {
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

        needsUpgradeByTypeFromSpoShell: {
            argNames: ["versionUpgrade", "recursive"],
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

        processStorageMetricsChanges: {
        },

        provisionMigrationContainers: {
        },

        provisionMigrationQueue: {
        },

        provisionTemporaryAzureContainer: {
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

        setBlockDownloadPolicyForFiles: {
            argNames: ["blockDownloadPolicyFileTypeIds"],
        },

        setIsContributorOwnerEnabledPropertyForDefaultDocLib: {
            argNames: ["propertyValue", "forceDocLibActivation", "deleteIfDocLibAlreadyExists"],
        },

        startDeleteFileVersions: {
            argNames: ["deleteOlderThanDays"],
        },

        startDeleteFileVersionsByMode: {
            argNames: ["batchDeleteParameters"],
        },

        startExpireFileVersionsBySchedule: {
            argNames: ["scheduleFilePath"],
        },

        startFileVersionExpirationReport: {
            argNames: ["reportFileUrl"],
        },

        startSetVersionPolicyForDocLibs: {
            argNames: ["enableAutoTrim", "majorVersionLimit", "majorWithMinorVersionsLimit", "expireAfterDays"],
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

        updateInactiveSiteProperties: {
            argNames: ["operation", "executionId"],
            requestType: RequestType.PostWithArgs
        },

        validateHubSiteJoinApprovalToken: {
            argNames: ["joiningSiteId", "approvalToken"],
            requestType: RequestType.PostWithArgs
        },

    },

    "SP.SiteVersionPolicyManager": {
        inheritTenantSettings: {
        },

        query: { argNames: ["oData"] },

        setAutoExpiration: {
        },

        setExpireAfter: {
            argNames: ["majorVersionLimit", "expireAfterDays"],
        },

        setNoExpiration: {
            argNames: ["majorVersionLimit"],
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

        mergeFollowedSites: {
            argNames: ["followedSites"],
            requestType: RequestType.PostWithArgs
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
            argNames: ["types", "count"],
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

        mergeFollowedSites: {
            argNames: ["followedSites"],
            requestType: RequestType.PostBodyNoArgs
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
        addHomeSite: {
            argNames: ["siteUrl", "order", "audiences", "vivaConnectionsDefaultStart", "isInDraftMode"],
        },

        details: {
            argNames: ["includeVivaSites"],
        },

        setSPHSite: {
            argNames: ["siteUrl", "vivaConnectionsDefaultStart", "isInDraftMode"],
        },
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

    "SP.TenantSettings": {
        clearCorporateCatalog: {
        },

        getDataAccessGovernanceReportConfig: {
        },

        query: { argNames: ["oData"] },

        setCorporateCatalog: {
            argNames: ["url"],
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

        setId: {
            argNames: ["id"],
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

        set: {
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

        addUserById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
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

        getByObjectId: {
            argNames: ["objectId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.User"
        },

        getByPuid: {
            argNames: ["puid"],
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

    "SP.UserExperienceState": {
        setFlag: {
            argNames: ["flag", "reset"],
        },
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

        getUserOneDriveQuotaMax: {
            argNames: ["accountName"],
            name: "getUserOneDriveQuotaMax(accountName=@v)?@v='[[accountName]]'",
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

        resetUserOneDriveQuotaToDefault: {
            argNames: ["accountName"],
            name: "resetUserOneDriveQuotaToDefault(@v)?@v='[[accountName]]'",
            requestType: RequestType.PostReplace
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

        setUserOneDriveQuota: {
            argNames: ["accountName", "newQuota", "newQuotaWarning"],
            name: "setUserOneDriveQuota(accountName=@v, newQuota='[[newQuota]]', newQuotaWarning='[[newQuotaWarning]]')?@v='[[accountName]]'",
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

        dispose: {
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
        getResourceEntries: {
        },

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
            "AllProperties|SP.PropertyValues.Collection", "AppTiles", "AssociatedMemberGroup|SP.Group", "AssociatedOwnerGroup|SP.Group",
            "AssociatedVisitorGroup|SP.Group", "Author|SP.User", "AvailableContentTypes|SP.ContentType.Collection", "AvailableFields|SP.Field.Collection",
            "ClientWebParts", "ContentTypes|SP.ContentType.Collection|('[Name]')|SP.ContentType", "CurrentUser|SP.User", "DataLeakagePreventionStatusInfo",
            "DescriptionResource", "EffectiveBasePermissions", "EventReceivers|SP.EventReceiverDefinition.Collection|('[Name]')|SP.EventReceiverDefinition",
            "Features|SP.Feature.Collection|('[Name]')|SP.Feature", "Fields|SP.Field.Collection|/getByInternalNameOrTitle('[Name]')|SP.Field",
            "FirstUniqueAncestorSecurableObject", "Folders|SP.Folder.Collection|/getByUrl('[Name]')|SP.Folder", "Lists|SP.List.Collection|/getByTitle('[Name]')|SP.List",
            "ListTemplates|SP.ListTemplate.Collection|('[Name]')|SP.ListTemplate", "Navigation|SP.Navigation", "ParentWeb",
            "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|SP.RoleAssignment.Collection|([Name])|SP.RoleAssignment",
            "RoleDefinitions|SP.RoleDefinition.Collection|/getByName('[Name]')|SP.RoleDefinition", "RootFolder|SP.Folder|/getByUrl('[Name]')|SP.File",
            "SiteCollectionAppCatalog|sitecollectionappcatalog", "SiteGroups|SP.Group.Collection|/getByName('[Name]')|SP.Group", "SiteUserInfoList",
            "SiteUsers|SP.User.Collection|/getById([Name])|SP.User", "TenantAppCatalog|tenantappcatalog", "ThemeInfo", "TitleResource",
            "UserCustomActions|SP.UserCustomAction.Collection|('[Name]')|SP.UserCustomAction", "WebInfos|SP.WebInformation.Collection",
            "Webs|SP.Web.Collection", "WorkflowAssociations", "WorkflowTemplates"
        ],

        addCrossFarmMessage: {
            argNames: ["messagePayloadBase64"],
            requestType: RequestType.PostWithArgs
        },

        addPlaceholderUser: {
            argNames: ["listId", "placeholderText"],
        },

        addSupportedUILanguage: {
            argNames: ["lcid"],
            requestType: RequestType.PostWithArgs
        },

        addinPermissions: {
            argNames: ["addins"],
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

        availableAddins: {
            argNames: ["serverRelativeUrls", "urls"],
        },

        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
            requestType: RequestType.PostWithArgs
        },

        consentToPowerPlatform: {},

        createDefaultAssociatedGroups: {
            argNames: ["userLogin", "userLogin2", "groupNameSeed"],
            requestType: RequestType.PostWithArgs
        },

        createGroupBasedEnvironment: {
        },

        createSitePage: {
            argNames: ["pageMetaData"],
            requestType: RequestType.PostWithArgs
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

        ensureEduClassSetup: {
            argNames: ["byPassForAutomation"],
        },

        ensureSolutioningEnvironment: {
            argNames: ["ensureCdsInstance"],
        },

        ensureTenantAppCatalog: {
            argNames: ["callerId"],
        },

        ensureUser: {
            argNames: ["logonName"],
            requestType: RequestType.PostWithArgsInBody
        },

        ensureUserByObjectId: {
            argNames: ["objectId", "tenantId", "principalType"],
        },

        executeRemoteLOB: {
            argNames: ["inputStream"],
            requestType: RequestType.PostBodyNoArgs
        },

        getACSServicePrincipals: {
            argNames: ["appIds"],
        },

        getAdaptiveCardExtensions: {
            argNames: ["includeErrors", "project"],
        },

        getAddinPrincipalsHavingPermissionsInSites: {
            argNames: ["serverRelativeUrls", "urls"],
        },

        getAddinUninstallJobDetail: {
            argNames: ["jobId", "serverRelativeUrl", "url"],
        },

        getAllClientSideComponents: {
            argNames: ["languages"],
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
            argNames: ["components", "project"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getClientSideComponentsByComponentType: {
            argNames: ["componentTypesString", "supportedHostTypeValue", "includeErrors", "project", "includeManifestActivatedTime"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getClientSideComponentsById: {
            argNames: ["componentIds", "project"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getClientSideWebParts: {
            argNames: ["includeErrors", "project"],
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
            returnType: "SP.File"
        },

        getFileByGuestUrlEnsureAccess: {
            argNames: ["guestUrl", "ensureAccess"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByGuestUrlExtended: {
            argNames: ["guestUrl", "requestSettings"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileById: {
            argNames: ["uniqueId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByLinkingUrl: {
            argNames: ["linkingUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByServerRelativePath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByStreamFrameUrl: {
            argNames: ["streamFrameUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFileByUrl: {
            argNames: ["fileUrl"],
            name: "getFileByUrl(@url)?@url='[[fileUrl]]'",
            requestType: RequestType.GetReplace,
            returnType: "SP.File"
        },

        getFileByWOPIFrameUrl: {
            argNames: ["wopiFrameUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.File"
        },

        getFolderByGuestUrl: {
            argNames: ["guestUrl", "ensureAccess"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getFolderByGuestUrlExtended: {
            argNames: ["guestUrl", "requestSettings"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getFolderById: {
            argNames: ["uniqueId"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getFolderByServerRelativePath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getFolderByServerRelativeUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.Folder"
        },

        getGroupBasedEnvironment: {
        },

        getList: {
            argNames: ["strUrl"],
            name: "getList(@l)?@l='[[strUrl]]'",
            requestType: RequestType.GetReplace,
            returnType: "SP.List"
        },

        getListByTitle: {
            argNames: ["title"],
            requestType: RequestType.GetWithArgsValueOnly,
            returnType: "SP.List"
        },

        getListItem: {
            argNames: ["strUrl"],
            name: "getListItem(@l)?@l='[[strUrl]]'",
            requestType: RequestType.GetReplace,
        },

        getListItemByResourceId: {
            argNames: ["resourceId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListItemUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListOperation: {
            argNames: ["listId", "operationId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getListUsingPath: {
            argNames: ["DecodedUrl"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getLists: {
            argNames: ["getListsParams"],
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

        getSitePageCopyToStatus: {
            argNames: ["workItemId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getSitePageMoveStatus: {
            argNames: ["workItemId"],
            requestType: RequestType.GetWithArgsValueOnly,
        },

        getSiteUserIncludingDeletedByPuid: {
            argNames: ["puid"],
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
            name: "getUserEffectivePermissions(@user)?@user='[[userName]]'",
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

        listPowerPlatformUserDetails: {},

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

        markReplyUrisUpdated: {
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

        setChromeOptions: {
            argNames: ["headerLayout", "headerEmphasis", "megaMenuEnabled", "footerEnabled", "footerLayout", "footerEmphasis", "hideTitleInHeader", "logoAlignment", "horizontalQuickLaunch", "headerColorIndexInLightMode", "headerColorIndexInDarkMode", "footerColorIndexInLightMode", "footerColorIndexInDarkMode"],
            requestType: RequestType.PostWithArgs
        },

        setDefaultNewPageTemplateId: {
            argNames: ["defaultNewPageTemplateId"],
            requestType: RequestType.PostWithArgs
        },

        setGlobalNavSettings: {
            argNames: ["title", "source"],
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

        syncTeamsComponent: {
            argNames: ["teamsComponent"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        uninstallAddins: {
            argNames: ["uninstallAddins"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        unregisterPushNotificationSubscriber: {
            argNames: ["deviceAppInstanceId"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        unsetIsEduClassProvisionPending: {
        },

        update: {
            argNames: ["properties"],
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostBodyNoArgs
        },

        uploadImage: {
            argNames: ["listTitle", "imageName", "contentStream", "listId", "itemId", "fieldId", "overwrite"],
            name: "uploadImage(listTitle=guid'[[listTitle]]', imageName=[[imageName]], listId=[[listId]], itemId=[[itemId]], fieldId=[[fieldId]], overwrite=[[overwrite]])",
            requestType: RequestType.PostReplaceWithData
        },

    },

    "SP.Web.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebCreationInformation",
            requestType: RequestType.PostWithArgsInBody
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebInformation.Collection": {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebInfoCreationInformation",
            requestType: RequestType.PostWithArgsInBody
        },

        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        query: { argNames: ["oData"], requestType: RequestType.OData },

    },

    "SP.WebParts.LimitedWebPartManager": {
        properties: [
            "WebParts|SP.WebParts.WebPartDefinition.Collection|/([Name])|SP.WebParts.WebPartDefinition"
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
        addThumbnailFieldData: {
            argNames: ["imageStream", "imageName", "fieldInternalName", "lockId"],
            requestType: RequestType.PostWithArgsInBody
        },

        archive: {
        },

        attachImage: {
            argNames: ["imageStream", "imageName", "fieldInternalName"],
            requestType: RequestType.PostWithArgsInBody
        },

        breakRoleInheritance: {
            argNames: ["copyRoleAssignments", "clearSubscopes"],
            requestType: RequestType.PostWithArgsInBody
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

        getComments: {
            returnType: "Microsoft.SharePoint.Comments.comment.Collection"
        },

        getUserEffectivePermissions: {
            argNames: ["userName"],
            name: "getUserEffectivePermissions(@user)?@user='[[userName]]'",
            requestType: RequestType.GetReplace
        },

        getVersions: {
            argNames: ["getVersionsParams"],
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
            requestType: RequestType.PostWithArgsInBody
        },

        setComplianceTag: {
            argNames: ["complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault"],
        },

        setComplianceTagWithExplicitMetasUpdate: {
            argNames: ["complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress"],
        },

        setComplianceTagWithHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithMetaInfo: {
            argNames: ["complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault"],
        },

        setComplianceTagWithNoHold: {
            argNames: ["complianceTag"],
        },

        setComplianceTagWithRecord: {
            argNames: ["complianceTag"],
        },

        systemUpdate: {
        },

        unarchive: {
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

        updateOverwriteVersion: {
        },

        validateUpdateFetchListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder"],
        },

        validateUpdateFetchListItemInFolder: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder"],
        },

        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId"],
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