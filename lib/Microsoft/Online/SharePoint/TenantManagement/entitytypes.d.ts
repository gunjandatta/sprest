import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* ExternalUser
**********************************************/
export interface ExternalUser {
	AcceptedAs?: string;
	DisplayName?: string;
	InvitedAs?: string;
	InvitedBy?: string;
	UniqueId?: string;
	UserId?: number;
	WhenCreated?: any;
}

/*********************************************
* ExternalUserCollections
**********************************************/
export interface ExternalUserCollections extends ExternalUserCollectionMethods {

}

/*********************************************
* ExternalUserCollectionMethods
**********************************************/
export interface ExternalUserCollectionMethods {
	getById(uniqueId?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* IGetExternalUsersResults
**********************************************/
export interface IGetExternalUsersResults extends GetExternalUsersResultsCollections, GetExternalUsersResultsMethods, Base.IBaseQuery<GetExternalUsersResults, IGetExternalUsersResultsQuery> {

}

/*********************************************
* IGetExternalUsersResultsCollection
**********************************************/
export interface IGetExternalUsersResultsCollection extends Base.IBaseResults<GetExternalUsersResults> {
	done?: (resolve: (value?: Array<GetExternalUsersResults>) => void) => void;
}

/*********************************************
* IGetExternalUsersResultsQueryCollection
**********************************************/
export interface IGetExternalUsersResultsQueryCollection extends Base.IBaseResults<GetExternalUsersResultsOData> {
	done?: (resolve: (value?: Array<GetExternalUsersResultsOData>) => void) => void;
}

/*********************************************
* IGetExternalUsersResultsQuery
**********************************************/
export interface IGetExternalUsersResultsQuery extends GetExternalUsersResultsOData, GetExternalUsersResultsMethods {

}

/*********************************************
* GetExternalUsersResults
**********************************************/
export interface GetExternalUsersResults extends Base.IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsCollections, GetExternalUsersResultsMethods {

}

/*********************************************
* GetExternalUsersResultsProps
**********************************************/
export interface GetExternalUsersResultsProps {
	TotalUserCount?: number;
	UserCollectionPosition?: number;
}

/*********************************************
* GetExternalUsersResultsPropMethods
**********************************************/
export interface GetExternalUsersResultsPropMethods {

}

/*********************************************
* GetExternalUsersResultsCollections
**********************************************/
export interface GetExternalUsersResultsCollections extends GetExternalUsersResultsPropMethods {
	ExternalUserCollection(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
	ExternalUserCollection(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* GetExternalUsersResultsOData
**********************************************/
export interface GetExternalUsersResultsOData extends Base.IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsMethods {
	ExternalUserCollection: Base.IBaseResults<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
}

/*********************************************
* GetExternalUsersResultsMethods
**********************************************/
export interface GetExternalUsersResultsMethods {

}

/*********************************************
* GroupCreationParams
**********************************************/
export interface GroupCreationParams {
	Classification?: string;
	CreationOptions?: { results: Array<string> };
	Description?: string;
	Owners?: { results: Array<string> };
}

/*********************************************
* GroupCreationParamsCollections
**********************************************/
export interface GroupCreationParamsCollections {

}

/*********************************************
* ImportProfilePropertiesJobInfo
**********************************************/
export interface ImportProfilePropertiesJobInfo {
	Error?: number;
	ErrorMessage?: string;
	JobId?: any;
	LogFolderUri?: string;
	SourceUri?: string;
	State?: number;
}

/*********************************************
* ImportProfilePropertiesJobInfoCollections
**********************************************/
export interface ImportProfilePropertiesJobInfoCollections {

}

/*********************************************
* IOffice365Tenant
**********************************************/
export interface IOffice365Tenant extends Office365TenantCollections, Office365TenantMethods, Base.IBaseQuery<Office365Tenant, IOffice365TenantQuery> {

}

/*********************************************
* IOffice365TenantCollection
**********************************************/
export interface IOffice365TenantCollection extends Base.IBaseResults<Office365Tenant> {
	done?: (resolve: (value?: Array<Office365Tenant>) => void) => void;
}

/*********************************************
* IOffice365TenantQueryCollection
**********************************************/
export interface IOffice365TenantQueryCollection extends Base.IBaseResults<Office365TenantOData> {
	done?: (resolve: (value?: Array<Office365TenantOData>) => void) => void;
}

/*********************************************
* IOffice365TenantQuery
**********************************************/
export interface IOffice365TenantQuery extends Office365TenantOData, Office365TenantMethods {

}

/*********************************************
* Office365Tenant
**********************************************/
export interface Office365Tenant extends Base.IBaseResult, Office365TenantProps, Office365TenantCollections, Office365TenantMethods {

}

/*********************************************
* Office365TenantProps
**********************************************/
export interface Office365TenantProps {
	AddressbarLinkPermission?: number;
	AllowCommentsTextOnEmailEnabled?: boolean;
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowedDomainListForSyncClient?: { results: Array<any> };
	AllowEditing?: boolean;
	AllowGuestUserShareToUsersNotInSiteCollection?: boolean;
	AllowLimitedAccessOnUnmanagedDevices?: boolean;
	AllowSelectSGsInODBList?: { results: Array<string> };
	ApplyAppEnforcedRestrictionsToAdHocRecipients?: boolean;
	BccExternalSharingInvitations?: boolean;
	BccExternalSharingInvitationsList?: string;
	BlockAccessOnUnmanagedDevices?: boolean;
	BlockDownloadOfAllFilesForGuests?: boolean;
	BlockDownloadOfAllFilesOnUnmanagedDevices?: boolean;
	BlockDownloadOfViewableFilesForGuests?: boolean;
	BlockDownloadOfViewableFilesOnUnmanagedDevices?: boolean;
	BlockMacSync?: boolean;
	CommentsOnFilesDisabled?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	ConditionalAccessPolicy?: number;
	ConditionalAccessPolicyErrorHelpLink?: string;
	ContentTypeSyncSiteTemplatesList?: { results: Array<string> };
	CustomizedExternalSharingServiceUrl?: string;
	DefaultLinkPermission?: number;
	DefaultSharingLinkType?: number;
	DisplayStartASiteOption?: boolean;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableAzureADB2BIntegration?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	EnablePromotedFileHandlers?: boolean;
	ExcludedFileExtensionsForSyncClient?: { results: Array<string> };
	ExternalServicesEnabled?: boolean;
	ExternalUserExpirationRequired?: boolean;
	ExternalUserExpireInDays?: number;
	FileAnonymousLinkType?: number;
	FilePickerExternalImageSearchEnabled?: boolean;
	FolderAnonymousLinkType?: number;
	GetOrgAssets?: Microsoft.SharePoint.Administration.OrgAssets;
	GuestSharingGroupAllowList?: string;
	HideSyncButtonOnODB?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	LegacyAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	MobileFriendlyUrlEnabled?: boolean;
	MySitesPublicEnabled?: boolean;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	NotifyOwnersWhenInvitationsAccepted?: boolean;
	NotifyOwnersWhenItemsReshared?: boolean;
	ODBAccessRequests?: number;
	ODBMembersCanShare?: number;
	ODBSharingCapability?: number;
	OfficeClientADALDisabled?: boolean;
	OneDriveForGuestsEnabled?: boolean;
	OwnerAnonymousNotification?: boolean;
	PreventExternalUsersFromResharing?: boolean;
	ProvisionSharedWithEveryoneFolder?: boolean;
	PublicCdnAllowedFileTypes?: string;
	PublicCdnEnabled?: boolean;
	PublicCdnOrigins?: { results: Array<string> };
	RequireAcceptingAccountMatchInvitedAccount?: boolean;
	RequireAnonymousLinksExpireInDays?: number;
	SearchResolveExactEmailOrUPN?: boolean;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingCapability?: number;
	SharingDomainRestrictionMode?: number;
	ShowAllUsersClaim?: boolean;
	ShowEveryoneClaim?: boolean;
	ShowEveryoneExceptExternalUsersClaim?: boolean;
	ShowNGSCDialogForSyncOnODB?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	SignInAccelerationDomain?: string;
	SocialBarOnSitePagesDisabled?: boolean;
	StartASiteFormUrl?: string;
	SyncAadB2BManagementPolicy?: boolean;
	SyncPrivacyProfileProperties?: boolean;
	UseFindPeopleInPeoplePicker?: boolean;
	UsePersistentCookiesForExplorerView?: boolean;
	UserVoiceForFeedbackEnabled?: boolean;
	WhoCanShareAllowList?: string;
}

/*********************************************
* Office365TenantPropMethods
**********************************************/
export interface Office365TenantPropMethods {

}

/*********************************************
* Office365TenantCollections
**********************************************/
export interface Office365TenantCollections extends Office365TenantPropMethods {

}

/*********************************************
* Office365TenantOData
**********************************************/
export interface Office365TenantOData extends Base.IBaseResult, Office365TenantProps, Office365TenantMethods {

}

/*********************************************
* Office365TenantMethods
**********************************************/
export interface Office365TenantMethods {
	addPublicCdnOrigin(origin?: string): Base.IBaseExecution<any>;
	addSdnProvider(identifier?: string, license?: string): Base.IBaseExecution<any>;
	addTenantCdnOrigin(cdnType?: number, originUrl?: string): Base.IBaseExecution<any>;
	addTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
	addToOrgAssetsLibAndCdn(cdnType?: number, libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number): Base.IBaseExecution<any>;
	createTenantCdnDefaultOrigins(cdnType?: number): Base.IBaseExecution<any>;
	deleteImportProfilePropertiesJob(jobId?: any): Base.IBaseExecution<boolean>;
	deleteTenantTheme(name?: string): Base.IBaseExecution<any>;
	disableSharingForNonOwnersOfSite(siteUrl?: string): Base.IBaseExecution<any>;
	getAllTenantThemes(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	getExternalUsers(position?: number, pageSize?: number, filter?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersForSite(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersWithSortBy(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getHideDefaultThemes(): Base.IBaseExecution<boolean>;
	getIdleSessionSignOutForUnmanagedDevices(): Base.IBaseExecution<string>;
	getImportProfilePropertyJob(jobId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getImportProfilePropertyJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getTenantCdnEnabled(cdnType?: number): Base.IBaseExecution<boolean>;
	getTenantCdnOrigins(cdnType?: number): Base.IBaseCollection<string>;
	getTenantCdnPolicies(cdnType?: number): Base.IBaseCollection<string>;
	getTenantTheme(name?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	isSharingDisabledForNonOwnersOfSite(siteUrl?: string): Base.IBaseExecution<boolean>;
	queueImportProfileProperties(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): Base.IBaseExecution<any>;
	removeExternalUsers(uniqueIds?: Array<string>): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.RemoveExternalUsersResults>;
	removeFromOrgAssets(libUrl?: SP.ResourcePath, listId?: any): Base.IBaseExecution<any>;
	removeFromOrgAssetsAndCdn(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): Base.IBaseExecution<any>;
	removePublicCdnOrigin(originId?: string): Base.IBaseExecution<any>;
	removeSdnProvider(): Base.IBaseExecution<any>;
	removeTenantCdnOrigin(cdnType?: number, originUrl?: string): Base.IBaseExecution<any>;
	revokeAllUserSessions(userName?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	revokeAllUserSessionsByPuid(puidList?: Array<string>): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	setHideDefaultThemes(hideDefaultThemes?: boolean): Base.IBaseExecution<boolean>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): Base.IBaseExecution<boolean>;
	setOrgAssetsLib(libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number): Base.IBaseExecution<any>;
	setTenantCdnEnabled(cdnType?: number, isEnabled?: boolean): Base.IBaseExecution<any>;
	setTenantCdnPolicy(cdnType?: number, policy?: number, policyValue?: string): Base.IBaseExecution<any>;
	updateTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
}

/*********************************************
* RemoveExternalUsersResults
**********************************************/
export interface RemoveExternalUsersResults {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	RemoveFailed?: { results: Array<string> };
	RemoveSucceeded?: { results: Array<string> };
}

/*********************************************
* RemoveExternalUsersResultsCollections
**********************************************/
export interface RemoveExternalUsersResultsCollections {

}

/*********************************************
* SPOUserSessionRevocationResult
**********************************************/
export interface SPOUserSessionRevocationResult {
	State?: number;
}

/*********************************************
* SPOUserSessionRevocationResultCollections
**********************************************/
export interface SPOUserSessionRevocationResultCollections {

}

/*********************************************
* ThemeProperties
**********************************************/
export interface ThemeProperties {
	IsInverted?: boolean;
	Name?: string;
	Palette?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ThemePropertiesCollections
**********************************************/
export interface ThemePropertiesCollections {

}
