import { Base } from "../";
import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* IApiMetadata
**********************************************/
export interface IApiMetadata extends ApiMetadataCollections, ApiMetadataMethods, Base.IBaseQuery<ApiMetadata, IApiMetadataQuery> {

}

/*********************************************
* IApiMetadataCollection
**********************************************/
export interface IApiMetadataCollection extends Base.IBaseResults<ApiMetadata> {
	done?: (resolve: (value?: Array<ApiMetadata>) => void) => void;
}

/*********************************************
* IApiMetadataQueryCollection
**********************************************/
export interface IApiMetadataQueryCollection extends Base.IBaseResults<ApiMetadataOData> {
	done?: (resolve: (value?: Array<ApiMetadataOData>) => void) => void;
}

/*********************************************
* IApiMetadataQuery
**********************************************/
export interface IApiMetadataQuery extends ApiMetadataOData, ApiMetadataMethods {

}

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata extends Base.IBaseResult, ApiMetadataProps, ApiMetadataCollections, ApiMetadataMethods {

}

/*********************************************
* ApiMetadataProps
**********************************************/
export interface ApiMetadataProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataPropMethods
**********************************************/
export interface ApiMetadataPropMethods {
	Current(): Base.IBaseQuery<SP.ApiMetadata, SP.ApiMetadataOData> & SP.ApiMetadataCollections;
}

/*********************************************
* ApiMetadataCollections
**********************************************/
export interface ApiMetadataCollections extends ApiMetadataPropMethods {
	Types(): Base.IBaseCollection<SP.TypeInformation>;
	Types(id: string | number): Base.IBaseQuery<SP.TypeInformation> & SP.TypeInformationCollections;
}

/*********************************************
* ApiMetadataOData
**********************************************/
export interface ApiMetadataOData extends Base.IBaseResult, ApiMetadataProps, ApiMetadataMethods {
	Current: SP.ApiMetadata & SP.ApiMetadataCollections;
	Types: Base.IBaseResults<SP.TypeInformation>;
}

/*********************************************
* ApiMetadataMethods
**********************************************/
export interface ApiMetadataMethods {

}

/*********************************************
* TypeInformation
**********************************************/
export interface TypeInformation {
	BaseTypeFullName?: string;
	FullName?: string;
	IsValueObject?: boolean;
	Methods?: { results: Array<SP.MethodInformation> };
	Properties?: { results: Array<SP.PropertyInformation> };
}

/*********************************************
* TypeInformationCollections
**********************************************/
export interface TypeInformationCollections {

}

/*********************************************
* ISite
**********************************************/
export interface ISite extends SiteCollections, SiteMethods, Base.IBaseQuery<Site, ISiteQuery> {

}

/*********************************************
* ISiteCollection
**********************************************/
export interface ISiteCollection extends Base.IBaseResults<Site> {
	done?: (resolve: (value?: Array<Site>) => void) => void;
}

/*********************************************
* ISiteQueryCollection
**********************************************/
export interface ISiteQueryCollection extends Base.IBaseResults<SiteOData> {
	done?: (resolve: (value?: Array<SiteOData>) => void) => void;
}

/*********************************************
* ISiteQuery
**********************************************/
export interface ISiteQuery extends SiteOData, SiteMethods {

}

/*********************************************
* Site
**********************************************/
export interface Site extends Base.IBaseResult, SiteProps, SiteCollections, SiteMethods {

}

/*********************************************
* SiteProps
**********************************************/
export interface SiteProps {
	AllowCreateDeclarativeWorkflow?: boolean;
	AllowDesigner?: boolean;
	AllowExternalEmbeddingWrapper?: number;
	AllowMasterPageEditing?: boolean;
	AllowRevertFromTemplate?: boolean;
	AllowSaveDeclarativeWorkflowAsTemplate?: boolean;
	AllowSavePublishDeclarativeWorkflow?: boolean;
	AllowSelfServiceUpgrade?: boolean;
	AllowSelfServiceUpgradeEvaluation?: boolean;
	AuditLogTrimmingRetention?: number;
	CanSyncHubSitePermissions?: boolean;
	CanUpgrade?: boolean;
	Classification?: string;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityLevel?: number;
	ComplianceAttribute?: string;
	CurrentChangeToken?: SP.ChangeToken;
	DisableAppViews?: boolean;
	DisableCompanyWideSharingLinks?: boolean;
	DisableFlows?: boolean;
	ExternalSharingTipsEnabled?: boolean;
	ExternalUserExpirationInDays?: number;
	GeoLocation?: string;
	GroupId?: any;
	HubSiteId?: any;
	Id?: any;
	SensitivityLabelId?: string;
	SensitivityLabel?: any;
	IsHubSite?: boolean;
	LockIssue?: string;
	MaxItemsPerThrottledOperation?: number;
	NeedsB2BUpgrade?: boolean;
	ResourcePath?: SP.ResourcePath;
	PrimaryUri?: string;
	ReadOnly?: boolean;
	RelatedGroupId?: any;
	RequiredDesignerVersion?: string;
	SandboxedCodeActivationCapability?: number;
	SearchBoxInNavBar?: number;
	SearchBoxPlaceholderText?: string;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	ShowUrlStructure?: boolean;
	SocialBarOnSitePagesDisabled?: boolean;
	StatusBarLink?: string;
	StatusBarText?: string;
	ThicketSupportDisabled?: boolean;
	TrimAuditLog?: boolean;
	UIVersionConfigurationEnabled?: boolean;
	UpgradeInfo?: SP.UpgradeInfo;
	UpgradeReminderDate?: any;
	UpgradeScheduled?: boolean;
	UpgradeScheduledDate?: any;
	Upgrading?: boolean;
	Url?: string;
	Usage?: SP.UsageInfo;
}

/*********************************************
* SitePropMethods
**********************************************/
export interface SitePropMethods {
	Audit(): Base.IBaseExecution<SP.Audit> & SP.AuditCollections & SP.AuditMethods;
	HubSiteSynchronizableVisitorGroup(): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	Owner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	RootWeb(): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	SecondaryContact(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* SiteCollections
**********************************************/
export interface SiteCollections extends SitePropMethods {
	CustomScriptSafeDomains(): Base.IBaseCollection<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollectionMethods;
	CustomScriptSafeDomains(id: string | number): Base.IBaseQuery<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollections & SP.ScriptSafeDomainMethods;
	EventReceivers(): Base.IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): Base.IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Features(): Base.IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): Base.IBaseQuery<SP.Feature> & SP.FeatureCollections;
	RecycleBin(): Base.IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemOData, Base.IBaseExecution & SP.RecycleBinItemCollectionMethods> & Base.IBaseExecution & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): Base.IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemOData> & SP.RecycleBinItemCollections & SP.RecycleBinItemMethods;
	UserCustomActions(): Base.IBaseCollection<SP.UserCustomAction, SP.UserCustomActionOData, Base.IBaseExecution & SP.UserCustomActionCollectionMethods> & Base.IBaseExecution & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): Base.IBaseQuery<SP.UserCustomAction, SP.UserCustomActionOData> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
}

/*********************************************
* SiteOData
**********************************************/
export interface SiteOData extends Base.IBaseResult, SiteProps, SiteMethods {
	Audit: SP.Audit & SP.AuditCollections;
	CustomScriptSafeDomains: Base.IBaseResults<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollectionMethods;
	EventReceivers: Base.IBaseResults<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	Features: Base.IBaseResults<SP.Feature> & SP.FeatureCollectionMethods;
	HubSiteSynchronizableVisitorGroup: SP.Group & SP.GroupCollections & SP.GroupCollectionMethods;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	RecycleBin: Base.IBaseResults<SP.RecycleBinItem> & SP.RecycleBinItemCollectionMethods;
	RootWeb: SP.Web & SP.WebCollections & SP.WebCollectionMethods;
	SecondaryContact: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	UserCustomActions: Base.IBaseResults<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
}

/*********************************************
* SiteMethods
**********************************************/
export interface SiteMethods {
	createCopyJob(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): Base.IBaseExecution<SP.CopyMigrationInfo>;
	createCopyJobs(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): Base.IBaseCollection<SP.CopyMigrationInfo>;
	createMigrationIngestionJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, ingestionTaskKey?: SP.IngestionTaskKey): Base.IBaseExecution<any>;
	createMigrationJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string): Base.IBaseExecution<any>;
	createMigrationJobEncrypted(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, options?: SP.EncryptionOption): Base.IBaseExecution<any>;
	createPreviewSPSite(upgrade?: boolean, sendemail?: boolean): Base.IBaseExecution<any>;
	createSPAsyncReadJob(url?: string, readOptions?: SP.AsyncReadOptions, encryptionOption?: SP.EncryptionOption, azureContainerManifestUri?: string, azureQueueReportUri?: string): Base.IBaseExecution<SP.AsyncReadJobInfo>;
	deleteMigrationJob(id?: any): Base.IBaseExecution<boolean>;
	extendUpgradeReminderDate(): Base.IBaseExecution<any>;
	getBringYourOwnKeySiteStatus(): Base.IBaseExecution<SP.CustomerKeyStatusInfo>;
	getBringYourOwnKeyTenantStatus(): Base.IBaseExecution<SP.CustomerKeyStatusInfo>;
	getCatalog(typeCatalog?: number): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getCopyJobProgress(copyJobInfo?: SP.CopyMigrationInfo): Base.IBaseExecution<SP.CopyJobProgress>;
	getHubSiteJoinApprovalCorrelationId(): Base.IBaseExecution<string>;
	getMigrationJobStatus(id?: any): Base.IBaseExecution<number>;
	getMigrationStatus(): Base.IBaseCollection<SP.SPMigrationJobStatus>;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): Base.IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemOData, Base.IBaseExecution & SP.RecycleBinItemCollectionMethods> & Base.IBaseExecution & SP.RecycleBinItemCollectionMethods;
	getWebPath(siteId?: any, webId?: any): Base.IBaseExecution<SP.ResourcePath>;
	getWebTemplates(LCID?: number, overrideCompatLevel?: number): Base.IBaseCollection<SP.WebTemplate> & SP.WebTemplateCollectionMethods;
	invalidate(): Base.IBaseExecution<any>;
	joinHubSite(hubSiteId?: any, approvalToken?: string, approvalCorrelationId?: string): Base.IBaseExecution<any>;
	multiGeoCopyJob(jobId?: any, userId?: number, binaryPayload?: any): Base.IBaseExecution<any>;
	needsUpgradeByType(versionUpgrade?: boolean, recursive?: boolean): Base.IBaseExecution<boolean>;
	onboardTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): Base.IBaseExecution<SP.CustomerKeyStatusInfo>;
	onHubSiteJoinRequestApproved(joiningSiteId?: any): Base.IBaseExecution<string>;
	onHubSiteJoinRequestCanceled(approvalCorrelationId?: string): Base.IBaseExecution<any>;
	onHubSiteJoinRequestStarted(approvalCorrelationId?: string): Base.IBaseExecution<any>;
	openWeb(strUrl?: string): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	openWebById(gWebId?: any): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	openWebUsingPath(path?: SP.ResourcePath): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	provisionMigrationContainers(): Base.IBaseExecution<SP.ProvisionedMigrationContainersInfo>;
	provisionMigrationQueue(): Base.IBaseExecution<SP.ProvisionedMigrationQueueInfo>;
	recoverTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): Base.IBaseExecution<SP.CustomerKeyStatusInfo>;
	registerHubSite(creationInformation?: SP.HubSiteCreationInformation): Base.IBaseExecution<SP.HubSite>;
	rollTenantBringYourOwnKey(keyType?: number, keyVaultInfo?: SP.CustomerKeyVaultInfo): Base.IBaseExecution<SP.CustomerKeyStatusInfo>;
	runHealthCheck(ruleId?: any, bRepair?: boolean, bRunAlways?: boolean): Base.IBaseExecution<SP.SiteHealth.SiteHealthSummary>;
	runUpgradeSiteSession(versionUpgrade?: boolean, queueOnly?: boolean, sendEmail?: boolean): Base.IBaseExecution<any>;
	unregisterHubSite(): Base.IBaseExecution<any>;
	updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs?: boolean): Base.IBaseExecution<any>;
	validateHubSiteJoinApprovalToken(joiningSiteId?: any, approvalToken?: string): Base.IBaseExecution<boolean>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IAudit
**********************************************/
export interface IAudit extends AuditCollections, AuditMethods, Base.IBaseQuery<Audit, IAuditQuery> {

}

/*********************************************
* IAuditCollection
**********************************************/
export interface IAuditCollection extends Base.IBaseResults<Audit> {
	done?: (resolve: (value?: Array<Audit>) => void) => void;
}

/*********************************************
* IAuditQueryCollection
**********************************************/
export interface IAuditQueryCollection extends Base.IBaseResults<AuditOData> {
	done?: (resolve: (value?: Array<AuditOData>) => void) => void;
}

/*********************************************
* IAuditQuery
**********************************************/
export interface IAuditQuery extends AuditOData, AuditMethods {

}

/*********************************************
* Audit
**********************************************/
export interface Audit extends Base.IBaseResult, AuditProps, AuditCollections, AuditMethods {

}

/*********************************************
* AuditProps
**********************************************/
export interface AuditProps {
	AuditFlags?: number;
}

/*********************************************
* AuditPropMethods
**********************************************/
export interface AuditPropMethods {

}

/*********************************************
* AuditCollections
**********************************************/
export interface AuditCollections extends AuditPropMethods {

}

/*********************************************
* AuditOData
**********************************************/
export interface AuditOData extends Base.IBaseResult, AuditProps, AuditMethods {

}

/*********************************************
* AuditMethods
**********************************************/
export interface AuditMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IScriptSafeDomain
**********************************************/
export interface IScriptSafeDomain extends ScriptSafeDomainCollections, ScriptSafeDomainMethods, Base.IBaseQuery<ScriptSafeDomain, IScriptSafeDomainQuery> {

}

/*********************************************
* IScriptSafeDomainCollection
**********************************************/
export interface IScriptSafeDomainCollection extends Base.IBaseResults<ScriptSafeDomain>, ScriptSafeDomainCollectionMethods {
	done?: (resolve: (value?: Array<ScriptSafeDomain>) => void) => void;
}

/*********************************************
* IScriptSafeDomainQueryCollection
**********************************************/
export interface IScriptSafeDomainQueryCollection extends Base.IBaseResults<ScriptSafeDomainOData>, ScriptSafeDomainCollectionMethods {
	done?: (resolve: (value?: Array<ScriptSafeDomainOData>) => void) => void;
}

/*********************************************
* IScriptSafeDomainQuery
**********************************************/
export interface IScriptSafeDomainQuery extends ScriptSafeDomainOData, ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain extends Base.IBaseResult, ScriptSafeDomainProps, ScriptSafeDomainCollections, ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomainProps
**********************************************/
export interface ScriptSafeDomainProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainPropMethods
**********************************************/
export interface ScriptSafeDomainPropMethods {

}

/*********************************************
* ScriptSafeDomainCollections
**********************************************/
export interface ScriptSafeDomainCollections extends ScriptSafeDomainPropMethods {

}

/*********************************************
* ScriptSafeDomainCollectionMethods
**********************************************/
export interface ScriptSafeDomainCollectionMethods {
	create(parameters?: SP.ScriptSafeDomainEntityData): Base.IBaseExecution<SP.ScriptSafeDomain>;
	getByDomainName(domainName?: string): Base.IBaseQuery<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollections & SP.ScriptSafeDomainMethods;
}

/*********************************************
* ScriptSafeDomainOData
**********************************************/
export interface ScriptSafeDomainOData extends Base.IBaseResult, ScriptSafeDomainProps, ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomainMethods
**********************************************/
export interface ScriptSafeDomainMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IEventReceiverDefinition
**********************************************/
export interface IEventReceiverDefinition extends EventReceiverDefinitionCollections, EventReceiverDefinitionMethods, Base.IBaseQuery<EventReceiverDefinition, IEventReceiverDefinitionQuery> {

}

/*********************************************
* IEventReceiverDefinitionCollection
**********************************************/
export interface IEventReceiverDefinitionCollection extends Base.IBaseResults<EventReceiverDefinition>, EventReceiverDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<EventReceiverDefinition>) => void) => void;
}

/*********************************************
* IEventReceiverDefinitionQueryCollection
**********************************************/
export interface IEventReceiverDefinitionQueryCollection extends Base.IBaseResults<EventReceiverDefinitionOData>, EventReceiverDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<EventReceiverDefinitionOData>) => void) => void;
}

/*********************************************
* IEventReceiverDefinitionQuery
**********************************************/
export interface IEventReceiverDefinitionQuery extends EventReceiverDefinitionOData, EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinition
**********************************************/
export interface EventReceiverDefinition extends Base.IBaseResult, EventReceiverDefinitionProps, EventReceiverDefinitionCollections, EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinitionProps
**********************************************/
export interface EventReceiverDefinitionProps {
	ReceiverAssembly?: string;
	ReceiverClass?: string;
	ReceiverId?: any;
	ReceiverName?: string;
	SequenceNumber?: number;
	Synchronization?: number;
	EventType?: number;
	ReceiverUrl?: string;
}

/*********************************************
* EventReceiverDefinitionPropMethods
**********************************************/
export interface EventReceiverDefinitionPropMethods {

}

/*********************************************
* EventReceiverDefinitionCollections
**********************************************/
export interface EventReceiverDefinitionCollections extends EventReceiverDefinitionPropMethods {

}

/*********************************************
* EventReceiverDefinitionCollectionMethods
**********************************************/
export interface EventReceiverDefinitionCollectionMethods {
	add(eventReceiverCreationInformation?: SP.EventReceiverDefinitionCreationInformation): Base.IBaseExecution<SP.EventReceiverDefinition>;
	getById(eventReceiverId?: any): Base.IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
}

/*********************************************
* EventReceiverDefinitionOData
**********************************************/
export interface EventReceiverDefinitionOData extends Base.IBaseResult, EventReceiverDefinitionProps, EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinitionMethods
**********************************************/
export interface EventReceiverDefinitionMethods {
	delete(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* Feature
**********************************************/
export interface Feature {
	DefinitionId?: any;
	DisplayName?: string;
}

/*********************************************
* FeatureCollections
**********************************************/
export interface FeatureCollections extends FeatureCollectionMethods {

}

/*********************************************
* FeatureCollectionMethods
**********************************************/
export interface FeatureCollectionMethods {
	add(featureId?: any, force?: boolean, featdefScope?: number): Base.IBaseExecution<SP.Feature>;
	getById(featureId?: any): Base.IBaseQuery<SP.Feature> & SP.FeatureCollections;
	remove(featureId?: any, force?: boolean): Base.IBaseExecution<any>;
}

/*********************************************
* Principal
**********************************************/
export interface Principal {
	Id?: number;
	IsHiddenInUI?: boolean;
	LoginName?: string;
	Title?: string;
	PrincipalType?: number;
}

/*********************************************
* PrincipalCollections
**********************************************/
export interface PrincipalCollections {

}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupCollections, GroupMethods, Base.IBaseQuery<Group, IGroupQuery> {

}

/*********************************************
* IGroupCollection
**********************************************/
export interface IGroupCollection extends Base.IBaseResults<Group>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<Group>) => void) => void;
}

/*********************************************
* IGroupQueryCollection
**********************************************/
export interface IGroupQueryCollection extends Base.IBaseResults<GroupOData>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<GroupOData>) => void) => void;
}

/*********************************************
* IGroupQuery
**********************************************/
export interface IGroupQuery extends GroupOData, GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends SP.Principal, Base.IBaseResult, GroupProps, GroupCollections, GroupMethods {

}

/*********************************************
* GroupProps
**********************************************/
export interface GroupProps {
	AllowMembersEditMembership?: boolean;
	AllowRequestToJoinLeave?: boolean;
	AutoAcceptRequestToJoinLeave?: boolean;
	CanCurrentUserEditMembership?: boolean;
	CanCurrentUserManageGroup?: boolean;
	CanCurrentUserViewMembership?: boolean;
	Description?: string;
	Id?: number;
	IsHiddenInUI?: boolean;
	OnlyAllowMembersViewMembership?: boolean;
	OwnerTitle?: string;
	RequestToJoinLeaveEmailSetting?: string;
	Title?: string;
}

/*********************************************
* GroupPropMethods
**********************************************/
export interface GroupPropMethods {
	Owner(): Base.IBaseExecution<SP.Principal> & SP.PrincipalCollections;
}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupPropMethods {
	Users(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	Users(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	getByName(name?: string): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	removeById(id?: number): Base.IBaseExecution<any>;
	removeByLoginName(loginName?: string): Base.IBaseExecution<any>;
	add(parameters?: SP.GroupCreationInformation): Base.IBaseExecution<SP.Group>;
}

/*********************************************
* GroupOData
**********************************************/
export interface GroupOData extends Base.IBaseResult, GroupProps, GroupMethods {
	Owner: SP.Principal & SP.PrincipalCollections;
	Users: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	setUserAsOwner(ownerId?: number): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IUser
**********************************************/
export interface IUser extends UserCollections, UserMethods, Base.IBaseQuery<User, IUserQuery> {

}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends Base.IBaseResults<User>, UserCollectionMethods {
	done?: (resolve: (value?: Array<User>) => void) => void;
}

/*********************************************
* IUserQueryCollection
**********************************************/
export interface IUserQueryCollection extends Base.IBaseResults<UserOData>, UserCollectionMethods {
	done?: (resolve: (value?: Array<UserOData>) => void) => void;
}

/*********************************************
* IUserQuery
**********************************************/
export interface IUserQuery extends UserOData, UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends SP.Principal, Base.IBaseResult, UserProps, UserCollections, UserMethods {

}

/*********************************************
* UserProps
**********************************************/
export interface UserProps {
	AadObjectId?: SP.UserIdInfo;
	Email?: string;
	Expiration?: string;
	IsEmailAuthenticationGuestUser?: boolean;
	IsShareByEmailGuestUser?: boolean;
	IsSiteAdmin?: boolean;
	UserId?: SP.UserIdInfo;
	UserPrincipalName?: string;
}

/*********************************************
* UserPropMethods
**********************************************/
export interface UserPropMethods {

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserPropMethods {
	Alerts(): Base.IBaseCollection<SP.Alert, SP.AlertOData, Base.IBaseExecution & SP.AlertCollectionMethods> & Base.IBaseExecution & SP.AlertCollectionMethods;
	Alerts(id: string | number): Base.IBaseQuery<SP.Alert, SP.AlertOData> & SP.AlertCollections & SP.AlertMethods;
	Groups(): Base.IBaseCollection<SP.Group, SP.GroupOData, Base.IBaseExecution & SP.GroupCollectionMethods> & Base.IBaseExecution & SP.GroupCollectionMethods;
	Groups(id: string | number): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	getByEmail(emailAddress?: string): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	getById(id?: number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	getByLoginName(loginName?: string): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	removeById(id?: number): Base.IBaseExecution<any>;
	removeByLoginName(loginName?: string): Base.IBaseExecution<any>;
	add(properties?: SP.UserCreationInformation): Base.IBaseExecution<any>;
}

/*********************************************
* UserOData
**********************************************/
export interface UserOData extends Base.IBaseResult, UserProps, UserMethods {
	Alerts: Base.IBaseResults<SP.Alert> & SP.AlertCollectionMethods;
	Groups: Base.IBaseResults<SP.Group> & SP.GroupCollectionMethods;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	expire(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IAlert
**********************************************/
export interface IAlert extends AlertCollections, AlertMethods, Base.IBaseQuery<Alert, IAlertQuery> {

}

/*********************************************
* IAlertCollection
**********************************************/
export interface IAlertCollection extends Base.IBaseResults<Alert>, AlertCollectionMethods {
	done?: (resolve: (value?: Array<Alert>) => void) => void;
}

/*********************************************
* IAlertQueryCollection
**********************************************/
export interface IAlertQueryCollection extends Base.IBaseResults<AlertOData>, AlertCollectionMethods {
	done?: (resolve: (value?: Array<AlertOData>) => void) => void;
}

/*********************************************
* IAlertQuery
**********************************************/
export interface IAlertQuery extends AlertOData, AlertMethods {

}

/*********************************************
* Alert
**********************************************/
export interface Alert extends Base.IBaseResult, AlertProps, AlertCollections, AlertMethods {

}

/*********************************************
* AlertProps
**********************************************/
export interface AlertProps {
	AlertFrequency?: number;
	AlertTemplateName?: string;
	AlertTime?: any;
	AlertType?: number;
	AlwaysNotify?: boolean;
	DeliveryChannels?: number;
	EventType?: number;
	Filter?: string;
	ID?: any;
	ItemID?: number;
	ListID?: any;
	ListUrl?: string;
	Properties?: { results: Array<SP.KeyValue> };
	Status?: number;
	Title?: string;
	UserId?: number;
}

/*********************************************
* AlertPropMethods
**********************************************/
export interface AlertPropMethods {
	AllProperties(): Base.IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	Item(): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	List(): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	User(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* AlertCollections
**********************************************/
export interface AlertCollections extends AlertPropMethods {

}

/*********************************************
* AlertCollectionMethods
**********************************************/
export interface AlertCollectionMethods {
	add(alertCreationInformation?: SP.AlertCreationInformation): Base.IBaseExecution<any>;
	contains(idAlert?: any): Base.IBaseExecution<boolean>;
	deleteAlert(idAlert?: any): Base.IBaseExecution<any>;
	deleteAlertAtIndex(index?: number): Base.IBaseExecution<any>;
	getById(idAlert?: any): Base.IBaseQuery<SP.Alert, SP.AlertOData> & SP.AlertCollections & SP.AlertMethods;
}

/*********************************************
* AlertOData
**********************************************/
export interface AlertOData extends Base.IBaseResult, AlertProps, AlertMethods {
	AllProperties: SP.PropertyValues & SP.PropertyValuesCollections;
	Item: SP.ListItem & SP.ListItemCollections & SP.ListItemCollectionMethods;
	List: SP.List & SP.ListCollections & SP.ListCollectionMethods;
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* AlertMethods
**********************************************/
export interface AlertMethods {
	updateAlert(): Base.IBaseExecution<any>;
}

/*********************************************
* PropertyValues
**********************************************/
export interface PropertyValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PropertyValuesCollections
**********************************************/
export interface PropertyValuesCollections {

}

/*********************************************
* ISecurableObject
**********************************************/
export interface ISecurableObject extends SecurableObjectCollections, SecurableObjectMethods, Base.IBaseQuery<SecurableObject, ISecurableObjectQuery> {

}

/*********************************************
* ISecurableObjectCollection
**********************************************/
export interface ISecurableObjectCollection extends Base.IBaseResults<SecurableObject> {
	done?: (resolve: (value?: Array<SecurableObject>) => void) => void;
}

/*********************************************
* ISecurableObjectQueryCollection
**********************************************/
export interface ISecurableObjectQueryCollection extends Base.IBaseResults<SecurableObjectOData> {
	done?: (resolve: (value?: Array<SecurableObjectOData>) => void) => void;
}

/*********************************************
* ISecurableObjectQuery
**********************************************/
export interface ISecurableObjectQuery extends SecurableObjectOData, SecurableObjectMethods {

}

/*********************************************
* SecurableObject
**********************************************/
export interface SecurableObject extends Base.IBaseResult, SecurableObjectProps, SecurableObjectCollections, SecurableObjectMethods {

}

/*********************************************
* SecurableObjectProps
**********************************************/
export interface SecurableObjectProps {
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* SecurableObjectPropMethods
**********************************************/
export interface SecurableObjectPropMethods {
	FirstUniqueAncestorSecurableObject(): Base.IBaseQuery<SP.SecurableObject, SP.SecurableObjectOData> & SP.SecurableObjectCollections & SP.SecurableObjectMethods;
}

/*********************************************
* SecurableObjectCollections
**********************************************/
export interface SecurableObjectCollections extends SecurableObjectPropMethods {
	RoleAssignments(): Base.IBaseCollection<SP.RoleAssignment, SP.RoleAssignmentOData, Base.IBaseExecution & SP.RoleAssignmentCollectionMethods> & Base.IBaseExecution & SP.RoleAssignmentCollectionMethods;
	RoleAssignments(id: string | number): Base.IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentOData> & SP.RoleAssignmentCollections & SP.RoleAssignmentMethods;
}

/*********************************************
* SecurableObjectOData
**********************************************/
export interface SecurableObjectOData extends Base.IBaseResult, SecurableObjectProps, SecurableObjectMethods {
	FirstUniqueAncestorSecurableObject: SP.SecurableObject & SP.SecurableObjectCollections;
	RoleAssignments: Base.IBaseResults<SP.RoleAssignment> & SP.RoleAssignmentCollectionMethods;
}

/*********************************************
* SecurableObjectMethods
**********************************************/
export interface SecurableObjectMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Base.IBaseExecution<any>;
	resetRoleInheritance(): Base.IBaseExecution<any>;
}

/*********************************************
* IRoleAssignment
**********************************************/
export interface IRoleAssignment extends RoleAssignmentCollections, RoleAssignmentMethods, Base.IBaseQuery<RoleAssignment, IRoleAssignmentQuery> {

}

/*********************************************
* IRoleAssignmentCollection
**********************************************/
export interface IRoleAssignmentCollection extends Base.IBaseResults<RoleAssignment>, RoleAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<RoleAssignment>) => void) => void;
}

/*********************************************
* IRoleAssignmentQueryCollection
**********************************************/
export interface IRoleAssignmentQueryCollection extends Base.IBaseResults<RoleAssignmentOData>, RoleAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<RoleAssignmentOData>) => void) => void;
}

/*********************************************
* IRoleAssignmentQuery
**********************************************/
export interface IRoleAssignmentQuery extends RoleAssignmentOData, RoleAssignmentMethods {

}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment extends Base.IBaseResult, RoleAssignmentProps, RoleAssignmentCollections, RoleAssignmentMethods {

}

/*********************************************
* RoleAssignmentProps
**********************************************/
export interface RoleAssignmentProps {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentPropMethods
**********************************************/
export interface RoleAssignmentPropMethods {
	Member(): Base.IBaseExecution<SP.Principal> & SP.PrincipalCollections;
}

/*********************************************
* RoleAssignmentCollections
**********************************************/
export interface RoleAssignmentCollections extends RoleAssignmentPropMethods {
	RoleDefinitionBindings(): Base.IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitionBindings(id: string | number): Base.IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
}

/*********************************************
* RoleAssignmentCollectionMethods
**********************************************/
export interface RoleAssignmentCollectionMethods {
	addRoleAssignment(principalId?: number, roleDefId?: number): Base.IBaseExecution<any>;
	getByPrincipalId(principalId?: number): Base.IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentOData> & SP.RoleAssignmentCollections & SP.RoleAssignmentMethods;
	removeRoleAssignment(principalId?: number, roleDefId?: number): Base.IBaseExecution<any>;
}

/*********************************************
* RoleAssignmentOData
**********************************************/
export interface RoleAssignmentOData extends Base.IBaseResult, RoleAssignmentProps, RoleAssignmentMethods {
	Member: SP.Principal & SP.PrincipalCollections;
	RoleDefinitionBindings: Base.IBaseResults<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
}

/*********************************************
* RoleAssignmentMethods
**********************************************/
export interface RoleAssignmentMethods {
	delete(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IRoleDefinition
**********************************************/
export interface IRoleDefinition extends RoleDefinitionCollections, RoleDefinitionMethods, Base.IBaseQuery<RoleDefinition, IRoleDefinitionQuery> {

}

/*********************************************
* IRoleDefinitionCollection
**********************************************/
export interface IRoleDefinitionCollection extends Base.IBaseResults<RoleDefinition>, RoleDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<RoleDefinition>) => void) => void;
}

/*********************************************
* IRoleDefinitionQueryCollection
**********************************************/
export interface IRoleDefinitionQueryCollection extends Base.IBaseResults<RoleDefinitionOData>, RoleDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<RoleDefinitionOData>) => void) => void;
}

/*********************************************
* IRoleDefinitionQuery
**********************************************/
export interface IRoleDefinitionQuery extends RoleDefinitionOData, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinition
**********************************************/
export interface RoleDefinition extends Base.IBaseResult, RoleDefinitionProps, RoleDefinitionCollections, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinitionProps
**********************************************/
export interface RoleDefinitionProps {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Hidden?: boolean;
	Id?: number;
	Name?: string;
	Order?: number;
	RoleTypeKind?: number;
}

/*********************************************
* RoleDefinitionPropMethods
**********************************************/
export interface RoleDefinitionPropMethods {

}

/*********************************************
* RoleDefinitionCollections
**********************************************/
export interface RoleDefinitionCollections extends RoleDefinitionPropMethods {

}

/*********************************************
* RoleDefinitionCollectionMethods
**********************************************/
export interface RoleDefinitionCollectionMethods {
	// getById(id?: number): Base.IBaseExecution<SP.RoleDefinition>;
	removeAll(): Base.IBaseExecution<any>;
	// getById(id?: number): Base.IBaseExecution<SP.RoleDefinition>;
	getByName(name?: string): Base.IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
	getByType(roleType?: number): Base.IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
	recreateMissingDefaultRoleDefinitions(): Base.IBaseExecution<any>;
	getById(id?: number): Base.IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
}

/*********************************************
* RoleDefinitionOData
**********************************************/
export interface RoleDefinitionOData extends Base.IBaseResult, RoleDefinitionProps, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinitionMethods
**********************************************/
export interface RoleDefinitionMethods {
	delete(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IListItem
**********************************************/
export interface IListItem extends ListItemCollections, ListItemMethods, Base.IBaseQuery<ListItem, IListItemQuery> {

}

/*********************************************
* IListItemCollection
**********************************************/
export interface IListItemCollection extends Base.IBaseResults<ListItem>, ListItemCollectionMethods {
	done?: (resolve: (value?: Array<ListItem>) => void) => void;
}

/*********************************************
* IListItemQueryCollection
**********************************************/
export interface IListItemQueryCollection extends Base.IBaseResults<ListItemOData>, ListItemCollectionMethods {
	done?: (resolve: (value?: Array<ListItemOData>) => void) => void;
}

/*********************************************
* IListItemQuery
**********************************************/
export interface IListItemQuery extends ListItemOData, ListItemMethods {

}

/*********************************************
* ListItem
**********************************************/
export interface ListItem extends SP.SecurableObject, Base.IBaseResult, ListItemProps, ListItemCollections, ListItemMethods {

}

/*********************************************
* ListItemProps
**********************************************/
export interface ListItemProps {
	CommentsDisabled?: boolean;
	CommentsDisabledScope?: number;
	ComplianceInfo?: SP.ListItemComplianceInfo;
	DisplayName?: string;
	EffectiveBasePermissions?: SP.BasePermissions;
	EffectiveBasePermissionsForUI?: SP.BasePermissions;
	FileSystemObjectType?: number;
	IconOverlay?: string;
	Id?: number;
	ServerRedirectedEmbedUri?: string;
	ServerRedirectedEmbedUrl?: string;
	Title?: string;
	Client_Title?: string;
}

/*********************************************
* ListItemPropMethods
**********************************************/
export interface ListItemPropMethods {
	ContentType(): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	GetDlpPolicyTip(): Base.IBaseExecution<SP.DlpPolicyTip> & SP.DlpPolicyTipCollections;
	FieldValuesAsHtml(): Base.IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	FieldValuesAsText(): Base.IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	FieldValuesForEdit(): Base.IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	File(): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	Folder(): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	LikedByInformation(): Base.IBaseQuery<Microsoft.SharePoint.Likes.likedByInformation, Microsoft.SharePoint.Likes.likedByInformationOData> & Microsoft.SharePoint.Likes.likedByInformationCollections;
	ParentList(): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	Properties(): Base.IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
}

/*********************************************
* ListItemCollections
**********************************************/
export interface ListItemCollections extends ListItemPropMethods {
	AttachmentFiles(): Base.IBaseCollection<SP.Attachment> & SP.AttachmentCollectionMethods;
	AttachmentFiles(id: string | number): Base.IBaseQuery<SP.Attachment> & SP.AttachmentCollections & SP.AttachmentMethods;
	Versions(): Base.IBaseCollection<SP.ListItemVersion, SP.ListItemVersionOData, Base.IBaseExecution & SP.ListItemVersionCollectionMethods> & Base.IBaseExecution & SP.ListItemVersionCollectionMethods;
	Versions(id: string | number): Base.IBaseQuery<SP.ListItemVersion, SP.ListItemVersionOData> & SP.ListItemVersionCollections & SP.ListItemVersionMethods;
}

/*********************************************
* ListItemCollectionMethods
**********************************************/
export interface ListItemCollectionMethods {
	getById(itemId?: number): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getByStringId(sId?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	add(parameters?: any): Base.IBaseExecution<SP.ListItem>;
}

/*********************************************
* ListItemOData
**********************************************/
export interface ListItemOData extends Base.IBaseResult, ListItemProps, ListItemMethods {
	AttachmentFiles: Base.IBaseResults<SP.Attachment> & SP.AttachmentCollectionMethods;
	ContentType: SP.ContentType & SP.ContentTypeCollections & SP.ContentTypeCollectionMethods;
	GetDlpPolicyTip: SP.DlpPolicyTip & SP.DlpPolicyTipCollections;
	FieldValuesAsHtml: SP.FieldStringValues & SP.FieldStringValuesCollections;
	FieldValuesAsText: SP.FieldStringValues & SP.FieldStringValuesCollections;
	FieldValuesForEdit: SP.FieldStringValues & SP.FieldStringValuesCollections;
	File: SP.File & SP.FileCollections & SP.FileCollectionMethods;
	Folder: SP.Folder & SP.FolderCollections & SP.FolderCollectionMethods;
	LikedByInformation: Microsoft.SharePoint.Likes.likedByInformation & Microsoft.SharePoint.Likes.likedByInformationCollections;
	ParentList: SP.List & SP.ListCollections & SP.ListCollectionMethods;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
	Versions: Base.IBaseResults<SP.ListItemVersion> & SP.ListItemVersionCollectionMethods;
}

/*********************************************
* ListItemMethods
**********************************************/
export interface ListItemMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Base.IBaseExecution<any>;
	resetRoleInheritance(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	deleteWithParameters(parameters?: SP.ListItemDeleteParameters): Base.IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getHashtags(): Base.IBaseCollection<SP.Hashtag>;
	getUserEffectivePermissions(userName?: string): Base.IBaseExecution<SP.BasePermissions>;
	getWOPIFrameUrl(action?: number): Base.IBaseExecution<string>;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): Base.IBaseExecution<any>;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): Base.IBaseExecution<any>;
	overridePolicyTip(userAction?: number, justification?: string): Base.IBaseExecution<number>;
	parseAndSetFieldValue(fieldName?: string, value?: string): Base.IBaseExecution<any>;
	recycle(): Base.IBaseExecution<any>;
	recycleWithParameters(parameters?: SP.ListItemDeleteParameters): Base.IBaseExecution<any>;
	setCommentsDisabled(value?: boolean): Base.IBaseExecution<any>;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): Base.IBaseExecution<any>;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): Base.IBaseExecution<any>;
	setComplianceTagWithHold(complianceTag?: string): Base.IBaseExecution<any>;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): Base.IBaseExecution<any>;
	setComplianceTagWithNoHold(complianceTag?: string): Base.IBaseExecution<any>;
	setComplianceTagWithRecord(complianceTag?: string): Base.IBaseExecution<any>;
	systemUpdate(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	updateEx(parameters?: SP.ListItemUpdateParameters): Base.IBaseExecution<any>;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): Base.IBaseCollection<SP.Hashtag>;
	updateOverwriteVersion(): Base.IBaseExecution<any>;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): Base.IBaseCollection<SP.ListItemFormUpdateValue>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IAttachment
**********************************************/
export interface IAttachment extends AttachmentCollections, AttachmentMethods, Base.IBaseQuery<Attachment, IAttachmentQuery> {

}

/*********************************************
* IAttachmentCollection
**********************************************/
export interface IAttachmentCollection extends Base.IBaseResults<Attachment>, AttachmentCollectionMethods {
	done?: (resolve: (value?: Array<Attachment>) => void) => void;
}

/*********************************************
* IAttachmentQueryCollection
**********************************************/
export interface IAttachmentQueryCollection extends Base.IBaseResults<AttachmentOData>, AttachmentCollectionMethods {
	done?: (resolve: (value?: Array<AttachmentOData>) => void) => void;
}

/*********************************************
* IAttachmentQuery
**********************************************/
export interface IAttachmentQuery extends AttachmentOData, AttachmentMethods {

}

/*********************************************
* Attachment
**********************************************/
export interface Attachment extends Base.IBaseResult, AttachmentProps, AttachmentCollections, AttachmentMethods {

}

/*********************************************
* AttachmentProps
**********************************************/
export interface AttachmentProps {
	FileName?: string;
	FileNameAsPath?: SP.ResourcePath;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
}

/*********************************************
* AttachmentPropMethods
**********************************************/
export interface AttachmentPropMethods {

}

/*********************************************
* AttachmentCollections
**********************************************/
export interface AttachmentCollections extends AttachmentPropMethods {

}

/*********************************************
* AttachmentCollectionMethods
**********************************************/
export interface AttachmentCollectionMethods {
	// add(FileName?: string): Base.IBaseExecution<SP.Attachment>;
	addUsingPath(DecodedUrl?: string, contentStream?: any): Base.IBaseExecution<SP.Attachment>;
	getByFileName(fileName?: string): Base.IBaseQuery<SP.Attachment> & SP.AttachmentCollections & SP.AttachmentMethods;
	getByFileNameAsPath(DecodedUrl?: string): Base.IBaseQuery<SP.Attachment> & SP.AttachmentCollections & SP.AttachmentMethods;
	add(FileName?: string, Content?: any): Base.IBaseExecution<SP.Attachment>;
}

/*********************************************
* AttachmentOData
**********************************************/
export interface AttachmentOData extends Base.IBaseResult, AttachmentProps, AttachmentMethods {

}

/*********************************************
* AttachmentMethods
**********************************************/
export interface AttachmentMethods {
	delete(): Base.IBaseExecution<any>;
	recycleObject(): Base.IBaseExecution<any>;
}

/*********************************************
* IContentType
**********************************************/
export interface IContentType extends ContentTypeCollections, ContentTypeMethods, Base.IBaseQuery<ContentType, IContentTypeQuery> {

}

/*********************************************
* IContentTypeCollection
**********************************************/
export interface IContentTypeCollection extends Base.IBaseResults<ContentType>, ContentTypeCollectionMethods {
	done?: (resolve: (value?: Array<ContentType>) => void) => void;
}

/*********************************************
* IContentTypeQueryCollection
**********************************************/
export interface IContentTypeQueryCollection extends Base.IBaseResults<ContentTypeOData>, ContentTypeCollectionMethods {
	done?: (resolve: (value?: Array<ContentTypeOData>) => void) => void;
}

/*********************************************
* IContentTypeQuery
**********************************************/
export interface IContentTypeQuery extends ContentTypeOData, ContentTypeMethods {

}

/*********************************************
* ContentType
**********************************************/
export interface ContentType extends Base.IBaseResult, ContentTypeProps, ContentTypeCollections, ContentTypeMethods {

}

/*********************************************
* ContentTypeProps
**********************************************/
export interface ContentTypeProps {
	Description?: string;
	DisplayFormTemplateName?: string;
	DisplayFormUrl?: string;
	DocumentTemplate?: string;
	DocumentTemplateUrl?: string;
	EditFormTemplateName?: string;
	EditFormUrl?: string;
	Group?: string;
	Hidden?: boolean;
	Id?: SP.ContentTypeId;
	JSLink?: string;
	MobileDisplayFormUrl?: string;
	MobileEditFormUrl?: string;
	MobileNewFormUrl?: string;
	Name?: string;
	NewFormTemplateName?: string;
	NewFormUrl?: string;
	ReadOnly?: boolean;
	SchemaXml?: string;
	SchemaXmlWithResourceTokens?: string;
	Scope?: string;
	Sealed?: boolean;
	StringId?: string;
}

/*********************************************
* ContentTypePropMethods
**********************************************/
export interface ContentTypePropMethods {
	DescriptionResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	NameResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	Parent(): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
}

/*********************************************
* ContentTypeCollections
**********************************************/
export interface ContentTypeCollections extends ContentTypePropMethods {
	FieldLinks(): Base.IBaseCollection<SP.FieldLink> & SP.FieldLinkCollectionMethods;
	FieldLinks(id: string | number): Base.IBaseQuery<SP.FieldLink> & SP.FieldLinkCollections & SP.FieldLinkMethods;
	Fields(): Base.IBaseCollection<SP.Field, SP.FieldOData, Base.IBaseExecution & SP.FieldCollectionMethods> & Base.IBaseExecution & SP.FieldCollectionMethods;
	Fields(id: string | number): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	WorkflowAssociations(): Base.IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): Base.IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* ContentTypeCollectionMethods
**********************************************/
export interface ContentTypeCollectionMethods {
	addAvailableContentType(contentTypeId?: string): Base.IBaseExecution<SP.ContentType>;
	getById(contentTypeId?: string): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	add(parameters?: SP.ContentTypeCreationInformation): Base.IBaseExecution<SP.ContentType>;
}

/*********************************************
* ContentTypeOData
**********************************************/
export interface ContentTypeOData extends Base.IBaseResult, ContentTypeProps, ContentTypeMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	FieldLinks: Base.IBaseResults<SP.FieldLink> & SP.FieldLinkCollectionMethods;
	Fields: Base.IBaseResults<SP.Field> & SP.FieldCollectionMethods;
	NameResource: SP.UserResource & SP.UserResourceCollections;
	Parent: SP.ContentType & SP.ContentTypeCollections & SP.ContentTypeCollectionMethods;
	WorkflowAssociations: Base.IBaseResults<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
}

/*********************************************
* ContentTypeMethods
**********************************************/
export interface ContentTypeMethods {
	delete(): Base.IBaseExecution<any>;
	reorderFields(fieldNames?: Array<string>): Base.IBaseExecution<any>;
	// update(updateChildren?: boolean): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IUserResource
**********************************************/
export interface IUserResource extends UserResourceCollections, UserResourceMethods, Base.IBaseQuery<UserResource, IUserResourceQuery> {

}

/*********************************************
* IUserResourceCollection
**********************************************/
export interface IUserResourceCollection extends Base.IBaseResults<UserResource> {
	done?: (resolve: (value?: Array<UserResource>) => void) => void;
}

/*********************************************
* IUserResourceQueryCollection
**********************************************/
export interface IUserResourceQueryCollection extends Base.IBaseResults<UserResourceOData> {
	done?: (resolve: (value?: Array<UserResourceOData>) => void) => void;
}

/*********************************************
* IUserResourceQuery
**********************************************/
export interface IUserResourceQuery extends UserResourceOData, UserResourceMethods {

}

/*********************************************
* UserResource
**********************************************/
export interface UserResource extends Base.IBaseResult, UserResourceProps, UserResourceCollections, UserResourceMethods {

}

/*********************************************
* UserResourceProps
**********************************************/
export interface UserResourceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourcePropMethods
**********************************************/
export interface UserResourcePropMethods {

}

/*********************************************
* UserResourceCollections
**********************************************/
export interface UserResourceCollections extends UserResourcePropMethods {

}

/*********************************************
* UserResourceOData
**********************************************/
export interface UserResourceOData extends Base.IBaseResult, UserResourceProps, UserResourceMethods {

}

/*********************************************
* UserResourceMethods
**********************************************/
export interface UserResourceMethods {
	getValueForUICulture(cultureName?: string): Base.IBaseExecution<string>;
	setValueForUICulture(cultureName?: string, value?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldLink
**********************************************/
export interface IFieldLink extends FieldLinkCollections, FieldLinkMethods, Base.IBaseQuery<FieldLink, IFieldLinkQuery> {

}

/*********************************************
* IFieldLinkCollection
**********************************************/
export interface IFieldLinkCollection extends Base.IBaseResults<FieldLink>, FieldLinkCollectionMethods {
	done?: (resolve: (value?: Array<FieldLink>) => void) => void;
}

/*********************************************
* IFieldLinkQueryCollection
**********************************************/
export interface IFieldLinkQueryCollection extends Base.IBaseResults<FieldLinkOData>, FieldLinkCollectionMethods {
	done?: (resolve: (value?: Array<FieldLinkOData>) => void) => void;
}

/*********************************************
* IFieldLinkQuery
**********************************************/
export interface IFieldLinkQuery extends FieldLinkOData, FieldLinkMethods {

}

/*********************************************
* FieldLink
**********************************************/
export interface FieldLink extends Base.IBaseResult, FieldLinkProps, FieldLinkCollections, FieldLinkMethods {

}

/*********************************************
* FieldLinkProps
**********************************************/
export interface FieldLinkProps {
	DisplayName?: string;
	FieldInternalName?: string;
	Hidden?: boolean;
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
	ShowInDisplayForm?: boolean;
}

/*********************************************
* FieldLinkPropMethods
**********************************************/
export interface FieldLinkPropMethods {

}

/*********************************************
* FieldLinkCollections
**********************************************/
export interface FieldLinkCollections extends FieldLinkPropMethods {

}

/*********************************************
* FieldLinkCollectionMethods
**********************************************/
export interface FieldLinkCollectionMethods {
	getById(id?: any): Base.IBaseQuery<SP.FieldLink> & SP.FieldLinkCollections & SP.FieldLinkMethods;
	reorder(internalNames?: Array<string>): Base.IBaseExecution<any>;
	add(parameters?: any): Base.IBaseExecution<SP.FieldLink>;
}

/*********************************************
* FieldLinkOData
**********************************************/
export interface FieldLinkOData extends Base.IBaseResult, FieldLinkProps, FieldLinkMethods {

}

/*********************************************
* FieldLinkMethods
**********************************************/
export interface FieldLinkMethods {
	delete(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IField
**********************************************/
export interface IField extends FieldCollections, FieldMethods, Base.IBaseQuery<Field, IFieldQuery> {

}

/*********************************************
* IFieldCollection
**********************************************/
export interface IFieldCollection extends Base.IBaseResults<Field>, FieldCollectionMethods {
	done?: (resolve: (value?: Array<Field>) => void) => void;
}

/*********************************************
* IFieldQueryCollection
**********************************************/
export interface IFieldQueryCollection extends Base.IBaseResults<FieldOData>, FieldCollectionMethods {
	done?: (resolve: (value?: Array<FieldOData>) => void) => void;
}

/*********************************************
* IFieldQuery
**********************************************/
export interface IFieldQuery extends FieldOData, FieldMethods {

}

/*********************************************
* Field
**********************************************/
export interface Field extends Base.IBaseResult, FieldProps, FieldCollections, FieldMethods {

}

/*********************************************
* FieldProps
**********************************************/
export interface FieldProps {
	AutoIndexed?: boolean;
	CanBeDeleted?: boolean;
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	ClientValidationFormula?: string;
	ClientValidationMessage?: string;
	CustomFormatter?: string;
	DefaultFormula?: string;
	DefaultValue?: string;
	Description?: string;
	Direction?: string;
	EnforceUniqueValues?: boolean;
	EntityPropertyName?: string;
	Filterable?: boolean;
	FromBaseType?: boolean;
	Group?: string;
	Hidden?: boolean;
	Id?: any;
	Indexed?: boolean;
	IndexStatus?: number;
	InternalName?: string;
	JSLink?: string;
	NoCrawl?: boolean;
	PinnedToFiltersPane?: boolean;
	ReadOnlyField?: boolean;
	Required?: boolean;
	SchemaXml?: string;
	SchemaXmlWithResourceTokens?: string;
	Scope?: string;
	Sealed?: boolean;
	ShowInFiltersPane?: number;
	Sortable?: boolean;
	StaticName?: string;
	Title?: string;
	FieldTypeKind?: number;
	TypeAsString?: string;
	TypeDisplayName?: string;
	TypeShortDescription?: string;
	ValidationFormula?: string;
	ValidationMessage?: string;
}

/*********************************************
* FieldPropMethods
**********************************************/
export interface FieldPropMethods {
	DescriptionResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	TitleResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* FieldCollections
**********************************************/
export interface FieldCollections extends FieldPropMethods {

}

/*********************************************
* FieldCollectionMethods
**********************************************/
export interface FieldCollectionMethods {
	addDependentLookupField(displayName?: string, primaryLookupFieldId?: any, showField?: string): Base.IBaseExecution<SP.Field>;
	addField(parameters?: SP.FieldCreationInformation): Base.IBaseExecution<SP.Field>;
	// createFieldAsXml(parameters?: SP.XmlSchemaFieldCreationInformation): Base.IBaseExecution<SP.Field>;
	getById(id?: any): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	getByInternalNameOrTitle(strName?: string): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	getByTitle(title?: string): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	createFieldAsXml(schemaXml?: string): Base.IBaseExecution<SP.Field>;
}

/*********************************************
* FieldOData
**********************************************/
export interface FieldOData extends Base.IBaseResult, FieldProps, FieldMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
}

/*********************************************
* FieldMethods
**********************************************/
export interface FieldMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	add(parameters?: SP.FieldCreationInformation): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* DlpPolicyTip
**********************************************/
export interface DlpPolicyTip {
	AppliedActionsText?: string;
	ComplianceUrl?: string;
	GeneralText?: string;
	LastProcessedTime?: any;
	MatchedConditionDescriptions?: { results: Array<string> };
	OverrideOptions?: number;
	TwoLetterISOLanguageName?: string;
}

/*********************************************
* DlpPolicyTipCollections
**********************************************/
export interface DlpPolicyTipCollections {

}

/*********************************************
* FieldStringValues
**********************************************/
export interface FieldStringValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FieldStringValuesCollections
**********************************************/
export interface FieldStringValuesCollections {

}

/*********************************************
* IFile
**********************************************/
export interface IFile extends FileCollections, FileMethods, Base.IBaseQuery<File, IFileQuery> {

}

/*********************************************
* IFileCollection
**********************************************/
export interface IFileCollection extends Base.IBaseResults<File>, FileCollectionMethods {
	done?: (resolve: (value?: Array<File>) => void) => void;
}

/*********************************************
* IFileQueryCollection
**********************************************/
export interface IFileQueryCollection extends Base.IBaseResults<FileOData>, FileCollectionMethods {
	done?: (resolve: (value?: Array<FileOData>) => void) => void;
}

/*********************************************
* IFileQuery
**********************************************/
export interface IFileQuery extends FileOData, FileMethods {

}

/*********************************************
* File
**********************************************/
export interface File extends Base.IBaseResult, FileProps, FileCollections, FileMethods {

}

/*********************************************
* FileProps
**********************************************/
export interface FileProps {
	ActivityCapabilities?: Microsoft.SharePoint.Activities.ActivityCapabilities;
	CheckInComment?: string;
	CheckOutType?: number;
	ContentTag?: string;
	CustomizedPageStatus?: number;
	ListId?: any;
	ETag?: string;
	Exists?: boolean;
	IrmEnabled?: boolean;
	Length?: number;
	Level?: any;
	LinkingUri?: string;
	LinkingUrl?: string;
	MajorVersion?: number;
	MinorVersion?: number;
	Name?: string;
	PageRenderType?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	SiteId?: any;
	TimeCreated?: any;
	TimeLastModified?: any;
	Title?: string;
	UIVersion?: number;
	UIVersionLabel?: string;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* FilePropMethods
**********************************************/
export interface FilePropMethods {
	Author(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	CheckedOutByUser(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	EffectiveInformationRightsManagementSettings(): Base.IBaseExecution<SP.EffectiveInformationRightsManagementSettings> & SP.EffectiveInformationRightsManagementSettingsCollections;
	InformationRightsManagementSettings(): Base.IBaseExecution<SP.InformationRightsManagementFileSettings> & SP.InformationRightsManagementFileSettingsCollections & SP.InformationRightsManagementFileSettingsMethods;
	ListItemAllFields(): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	LockedByUser(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	ModifiedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Properties(): Base.IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
}

/*********************************************
* FileCollections
**********************************************/
export interface FileCollections extends FilePropMethods {
	VersionEvents(): Base.IBaseCollection<SP.FileVersionEvent>;
	VersionEvents(id: string | number): Base.IBaseQuery<SP.FileVersionEvent> & SP.FileVersionEventCollections;
	Versions(): Base.IBaseCollection<SP.FileVersion, SP.FileVersionOData, Base.IBaseExecution & SP.FileVersionCollectionMethods> & Base.IBaseExecution & SP.FileVersionCollectionMethods;
	Versions(id: string | number): Base.IBaseQuery<SP.FileVersion, SP.FileVersionOData> & SP.FileVersionCollections & SP.FileVersionMethods;
}

/*********************************************
* FileCollectionMethods
**********************************************/
export interface FileCollectionMethods {
	// add(Content?: any, Overwrite?: boolean, Url?: string): Base.IBaseExecution<SP.File>;
	addStub(urlOfFile?: string): Base.IBaseExecution<SP.File>;
	addStubUsingPath(DecodedUrl?: string): Base.IBaseExecution<SP.File>;
	addTemplateFile(urlOfFile?: string, templateFileType?: number): Base.IBaseExecution<SP.File>;
	addUsingPath(DecodedUrl?: string, AutoCheckoutOnInvalidData?: boolean, Overwrite?: boolean, XorHash?: string, contentStream?: any): Base.IBaseExecution<SP.File>;
	getByPathOrAddStub(DecodedUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getByUrl(url?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getByUrlOrAddStub(urlOfFile?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	add(Url?: string, Overwrite?: boolean, Content?: any): Base.IBaseExecution<SP.File>;
}

/*********************************************
* FileOData
**********************************************/
export interface FileOData extends Base.IBaseResult, FileProps, FileMethods {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	CheckedOutByUser: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	EffectiveInformationRightsManagementSettings: SP.EffectiveInformationRightsManagementSettings & SP.EffectiveInformationRightsManagementSettingsCollections;
	InformationRightsManagementSettings: SP.InformationRightsManagementFileSettings & SP.InformationRightsManagementFileSettingsCollections;
	ListItemAllFields: SP.ListItem & SP.ListItemCollections & SP.ListItemCollectionMethods;
	LockedByUser: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	ModifiedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
	VersionEvents: Base.IBaseResults<SP.FileVersionEvent>;
	Versions: Base.IBaseResults<SP.FileVersion> & SP.FileVersionCollectionMethods;
}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	addClientActivities(activitiesStream?: any): Base.IBaseCollection<Microsoft.SharePoint.Activities.ActivityClientResponse>;
	approve(comment?: string): Base.IBaseExecution<any>;
	cancelUpload(uploadId?: any): Base.IBaseExecution<any>;
	checkAccessAndPostViewAuditEvent(): Base.IBaseExecution<boolean>;
	checkIn(comment?: string, checkInType?: number): Base.IBaseExecution<any>;
	checkOut(): Base.IBaseExecution<any>;
	continueUpload(uploadId?: any, fileOffset?: number, stream?: any): Base.IBaseExecution<number>;
	copyTo(strNewUrl?: string, bOverWrite?: boolean): Base.IBaseExecution<any>;
	copyToUsingPath(DecodedUrl?: string, bOverWrite?: boolean): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	deleteWithParameters(parameters?: SP.FileDeleteParameters): Base.IBaseExecution<any>;
	deny(comment?: string): Base.IBaseExecution<any>;
	executeCobaltRequest(inputStream?: any): Base.IBaseExecution<any>;
	finishUpload(uploadId?: any, fileOffset?: number, stream?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	finishUploadWithChecksum(uploadId?: any, fileOffset?: number, checksum?: string, stream?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileUserValue(key?: string): Base.IBaseExecution<Microsoft.SharePoint.UserActions.officeFileUserValueResponse>;
	getImagePreviewUri(width?: number, height?: number, clientType?: string): Base.IBaseExecution<string>;
	getImagePreviewUrl(width?: number, height?: number, clientType?: string): Base.IBaseExecution<string>;
	getLimitedWebPartManager(scope?: number): Base.IBaseQuery<SP.WebParts.LimitedWebPartManager, SP.WebParts.LimitedWebPartManagerOData> & SP.WebParts.LimitedWebPartManagerCollections & SP.WebParts.LimitedWebPartManagerMethods;
	getPreAuthorizedAccessUrl(expirationHours?: number): Base.IBaseExecution<string>;
	getPreAuthorizedAccessUrl2(expirationHours?: number, expirationMinuites?: number): Base.IBaseExecution<string>;
	getUploadStatus(uploadId?: any): Base.IBaseExecution<SP.Utilities.UploadStatus>;
	getWOPIFrameUrl(action?: number): Base.IBaseExecution<string>;
	moveTo(newUrl?: string, flags?: number): Base.IBaseExecution<any>;
	moveToUsingPath(DecodedUrl?: string, moveOperations?: number): Base.IBaseExecution<any>;
	openBinaryStream(): Base.IBaseExecution<any>;
	openBinaryStreamWithOptions(openOptions?: number): Base.IBaseExecution<any>;
	publish(comment?: string): Base.IBaseExecution<any>;
	recycle(): Base.IBaseExecution<any>;
	recycleWithETag(etagMatch?: string): Base.IBaseExecution<any>;
	recycleWithParameters(parameters?: SP.FileDeleteParameters): Base.IBaseExecution<any>;
	saveBinaryStream(file?: any): Base.IBaseExecution<any>;
	setFileUserValue(key?: string, value?: string): Base.IBaseExecution<Microsoft.SharePoint.UserActions.officeFileUserValueResponse>;
	startUpload(uploadId?: any, stream?: any): Base.IBaseExecution<number>;
	undoCheckOut(): Base.IBaseExecution<any>;
	unPublish(comment?: string): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	updateVirusInfo(virusStatus?: any, virusMessage?: string, etagToCheck?: string): Base.IBaseExecution<any>;
	content(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* EffectiveInformationRightsManagementSettings
**********************************************/
export interface EffectiveInformationRightsManagementSettings {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	DocumentLibraryProtectionExpireDate?: any;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	IrmEnabled?: boolean;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	SettingSource?: number;
	TemplateId?: string;
}

/*********************************************
* EffectiveInformationRightsManagementSettingsCollections
**********************************************/
export interface EffectiveInformationRightsManagementSettingsCollections {

}

/*********************************************
* IInformationRightsManagementFileSettings
**********************************************/
export interface IInformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsCollections, InformationRightsManagementFileSettingsMethods, Base.IBaseQuery<InformationRightsManagementFileSettings, IInformationRightsManagementFileSettingsQuery> {

}

/*********************************************
* IInformationRightsManagementFileSettingsCollection
**********************************************/
export interface IInformationRightsManagementFileSettingsCollection extends Base.IBaseResults<InformationRightsManagementFileSettings> {
	done?: (resolve: (value?: Array<InformationRightsManagementFileSettings>) => void) => void;
}

/*********************************************
* IInformationRightsManagementFileSettingsQueryCollection
**********************************************/
export interface IInformationRightsManagementFileSettingsQueryCollection extends Base.IBaseResults<InformationRightsManagementFileSettingsOData> {
	done?: (resolve: (value?: Array<InformationRightsManagementFileSettingsOData>) => void) => void;
}

/*********************************************
* IInformationRightsManagementFileSettingsQuery
**********************************************/
export interface IInformationRightsManagementFileSettingsQuery extends InformationRightsManagementFileSettingsOData, InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettings
**********************************************/
export interface InformationRightsManagementFileSettings extends Base.IBaseResult, InformationRightsManagementFileSettingsProps, InformationRightsManagementFileSettingsCollections, InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsProps
**********************************************/
export interface InformationRightsManagementFileSettingsProps {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	IrmEnabled?: boolean;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	TemplateId?: string;
}

/*********************************************
* InformationRightsManagementFileSettingsPropMethods
**********************************************/
export interface InformationRightsManagementFileSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsCollections
**********************************************/
export interface InformationRightsManagementFileSettingsCollections extends InformationRightsManagementFileSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsOData
**********************************************/
export interface InformationRightsManagementFileSettingsOData extends Base.IBaseResult, InformationRightsManagementFileSettingsProps, InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsMethods
**********************************************/
export interface InformationRightsManagementFileSettingsMethods {
	reset(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* FileVersionEvent
**********************************************/
export interface FileVersionEvent {
	Editor?: string;
	EditorEmail?: string;
	SharedByUser?: SP.SharedWithUser;
	SharedWithUsers?: SP.SharedWithUserCollection;
	Time?: any;
	EventType?: number;
}

/*********************************************
* FileVersionEventCollections
**********************************************/
export interface FileVersionEventCollections {

}

/*********************************************
* IFileVersion
**********************************************/
export interface IFileVersion extends FileVersionCollections, FileVersionMethods, Base.IBaseQuery<FileVersion, IFileVersionQuery> {

}

/*********************************************
* IFileVersionCollection
**********************************************/
export interface IFileVersionCollection extends Base.IBaseResults<FileVersion>, FileVersionCollectionMethods {
	done?: (resolve: (value?: Array<FileVersion>) => void) => void;
}

/*********************************************
* IFileVersionQueryCollection
**********************************************/
export interface IFileVersionQueryCollection extends Base.IBaseResults<FileVersionOData>, FileVersionCollectionMethods {
	done?: (resolve: (value?: Array<FileVersionOData>) => void) => void;
}

/*********************************************
* IFileVersionQuery
**********************************************/
export interface IFileVersionQuery extends FileVersionOData, FileVersionMethods {

}

/*********************************************
* FileVersion
**********************************************/
export interface FileVersion extends Base.IBaseResult, FileVersionProps, FileVersionCollections, FileVersionMethods {

}

/*********************************************
* FileVersionProps
**********************************************/
export interface FileVersionProps {
	CheckInComment?: string;
	Created?: any;
	ID?: number;
	IsCurrentVersion?: boolean;
	Length?: number;
	Size?: number;
	Url?: string;
	VersionLabel?: string;
}

/*********************************************
* FileVersionPropMethods
**********************************************/
export interface FileVersionPropMethods {
	CreatedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* FileVersionCollections
**********************************************/
export interface FileVersionCollections extends FileVersionPropMethods {

}

/*********************************************
* FileVersionCollectionMethods
**********************************************/
export interface FileVersionCollectionMethods {
	deleteAll(): Base.IBaseExecution<any>;
	deleteByID(vid?: number): Base.IBaseExecution<any>;
	deleteByLabel(versionlabel?: string): Base.IBaseExecution<any>;
	getById(versionid?: number): Base.IBaseQuery<SP.FileVersion, SP.FileVersionOData> & SP.FileVersionCollections & SP.FileVersionMethods;
	recycleByID(vid?: number): Base.IBaseExecution<any>;
	recycleByLabel(versionlabel?: string): Base.IBaseExecution<any>;
	restoreByLabel(versionlabel?: string): Base.IBaseExecution<any>;
}

/*********************************************
* FileVersionOData
**********************************************/
export interface FileVersionOData extends Base.IBaseResult, FileVersionProps, FileVersionMethods {
	CreatedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* FileVersionMethods
**********************************************/
export interface FileVersionMethods {
	delete(): Base.IBaseExecution<any>;
	openBinaryStream(): Base.IBaseExecution<any>;
}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderCollections, FolderMethods, Base.IBaseQuery<Folder, IFolderQuery> {

}

/*********************************************
* IFolderCollection
**********************************************/
export interface IFolderCollection extends Base.IBaseResults<Folder>, FolderCollectionMethods {
	done?: (resolve: (value?: Array<Folder>) => void) => void;
}

/*********************************************
* IFolderQueryCollection
**********************************************/
export interface IFolderQueryCollection extends Base.IBaseResults<FolderOData>, FolderCollectionMethods {
	done?: (resolve: (value?: Array<FolderOData>) => void) => void;
}

/*********************************************
* IFolderQuery
**********************************************/
export interface IFolderQuery extends FolderOData, FolderMethods {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends Base.IBaseResult, FolderProps, FolderCollections, FolderMethods {

}

/*********************************************
* FolderProps
**********************************************/
export interface FolderProps {
	ContentTypeOrder?: { results: Array<SP.ContentTypeId> };
	Exists?: boolean;
	IsWOPIEnabled?: boolean;
	ItemCount?: number;
	Name?: string;
	ProgID?: string;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	TimeCreated?: any;
	TimeLastModified?: any;
	UniqueContentTypeOrder?: { results: Array<SP.ContentTypeId> };
	UniqueId?: any;
	WelcomePage?: string;
}

/*********************************************
* FolderPropMethods
**********************************************/
export interface FolderPropMethods {
	ListItemAllFields(): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	ParentFolder(): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	Properties(): Base.IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	StorageMetrics(): Base.IBaseExecution<SP.StorageMetrics> & SP.StorageMetricsCollections;
}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections extends FolderPropMethods {
	Files(): Base.IBaseCollection<SP.File, SP.FileOData, Base.IBaseExecution & SP.FileCollectionMethods> & Base.IBaseExecution & SP.FileCollectionMethods;
	Files(id: string | number): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	Folders(): Base.IBaseCollection<SP.Folder, SP.FolderOData, Base.IBaseExecution & SP.FolderCollectionMethods> & Base.IBaseExecution & SP.FolderCollectionMethods;
	Folders(id: string | number): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
}

/*********************************************
* FolderCollectionMethods
**********************************************/
export interface FolderCollectionMethods {
	add(url?: string): Base.IBaseExecution<SP.Folder>;
	addUsingPath(DecodedUrl?: string, Overwrite?: boolean): Base.IBaseExecution<SP.Folder>;
	addWithOverwrite(url?: string, overwrite?: boolean): Base.IBaseExecution<SP.Folder>;
	getByPath(DecodedUrl?: string): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getByUrl(url?: string): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
}

/*********************************************
* FolderOData
**********************************************/
export interface FolderOData extends Base.IBaseResult, FolderProps, FolderMethods {
	Files: Base.IBaseResults<SP.File> & SP.FileCollectionMethods;
	ListItemAllFields: SP.ListItem & SP.ListItemCollections & SP.ListItemCollectionMethods;
	ParentFolder: SP.Folder & SP.FolderCollections & SP.FolderCollectionMethods;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
	StorageMetrics: SP.StorageMetrics & SP.StorageMetricsCollections;
	Folders: Base.IBaseResults<SP.Folder> & SP.FolderCollectionMethods;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	addSubFolder(leafName?: string): Base.IBaseExecution<any>;
	addSubFolderUsingPath(DecodedUrl?: string): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	deleteWithParameters(parameters?: SP.FolderDeleteParameters): Base.IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getListItemChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	moveTo(newUrl?: string): Base.IBaseExecution<any>;
	moveToUsingPath(DecodedUrl?: string): Base.IBaseExecution<any>;
	recycle(): Base.IBaseExecution<any>;
	recycleWithParameters(parameters?: SP.FolderDeleteParameters): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* StorageMetrics
**********************************************/
export interface StorageMetrics {
	LastModified?: any;
	TotalFileCount?: number;
	TotalFileStreamSize?: number;
	TotalSize?: number;
}

/*********************************************
* StorageMetricsCollections
**********************************************/
export interface StorageMetricsCollections {

}

/*********************************************
* IList
**********************************************/
export interface IList extends ListCollections, ListMethods, Base.IBaseQuery<List, IListQuery> {

}

/*********************************************
* IListCollection
**********************************************/
export interface IListCollection extends Base.IBaseResults<List>, ListCollectionMethods {
	done?: (resolve: (value?: Array<List>) => void) => void;
}

/*********************************************
* IListQueryCollection
**********************************************/
export interface IListQueryCollection extends Base.IBaseResults<ListOData>, ListCollectionMethods {
	done?: (resolve: (value?: Array<ListOData>) => void) => void;
}

/*********************************************
* IListQuery
**********************************************/
export interface IListQuery extends ListOData, ListMethods {

}

/*********************************************
* List
**********************************************/
export interface List extends SP.SecurableObject, Base.IBaseResult, ListProps, ListCollections, ListMethods {

}

/*********************************************
* ListProps
**********************************************/
export interface ListProps {
	AllowContentTypes?: boolean;
	AllowDeletion?: boolean;
	BaseTemplate?: number;
	BaseType?: number;
	BrowserFileHandling?: number;
	ContentTypesEnabled?: boolean;
	CrawlNonDefaultViews?: boolean;
	Created?: any;
	CurrentChangeToken?: SP.ChangeToken;
	CustomActionElements?: SP.CustomActionElementCollection;
	DataSource?: SP.ListDataSource;
	DefaultContentApprovalWorkflowId?: any;
	DefaultDisplayFormUrl?: string;
	DefaultEditFormUrl?: string;
	DefaultItemOpenUseListSetting?: boolean;
	DefaultNewFormUrl?: string;
	DefaultViewPath?: SP.ResourcePath;
	DefaultViewUrl?: string;
	Description?: string;
	Direction?: string;
	DisableGridEditing?: boolean;
	DocumentTemplateUrl?: string;
	DraftVersionVisibility?: number;
	EffectiveBasePermissions?: SP.BasePermissions;
	EffectiveBasePermissionsForUI?: SP.BasePermissions;
	EnableAssignToEmail?: boolean;
	EnableAttachments?: boolean;
	EnableFolderCreation?: boolean;
	EnableMinorVersions?: boolean;
	EnableModeration?: boolean;
	EnableRequestSignOff?: boolean;
	EnableVersioning?: boolean;
	EntityTypeName?: string;
	ExcludeFromOfflineClient?: boolean;
	ExemptFromBlockDownloadOfNonViewableFiles?: boolean;
	FileSavePostProcessingEnabled?: boolean;
	ForceCheckout?: boolean;
	HasExternalDataSource?: boolean;
	Hidden?: boolean;
	Id?: any;
	ImagePath?: SP.ResourcePath;
	ImageUrl?: string;
	IrmEnabled?: boolean;
	IrmExpire?: boolean;
	IrmReject?: boolean;
	IsApplicationList?: boolean;
	IsCatalog?: boolean;
	IsEnterpriseGalleryLibrary?: boolean;
	IsPrivate?: boolean;
	IsSiteAssetsLibrary?: boolean;
	IsSystemList?: boolean;
	ItemCount?: number;
	LastItemDeletedDate?: any;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	ListExperienceOptions?: number;
	ListItemEntityTypeFullName?: string;
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
	MultipleDataList?: boolean;
	NoCrawl?: boolean;
	OnQuickLaunch?: boolean;
	PageRenderType?: number;
	ParentWebPath?: SP.ResourcePath;
	ParentWebUrl?: string;
	ParserDisabled?: boolean;
	ReadSecurity?: number;
	SchemaXml?: string;
	ServerTemplateCanCreateFolders?: boolean;
	TemplateFeatureId?: any;
	Title?: string;
	ValidationFormula?: string;
	ValidationMessage?: string;
	WriteSecurity?: number;
}

/*********************************************
* ListPropMethods
**********************************************/
export interface ListPropMethods {
	CreatablesInfo(): Base.IBaseExecution<SP.CreatablesInfo> & SP.CreatablesInfoCollections;
	DefaultView(): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	DescriptionResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	InformationRightsManagementSettings(): Base.IBaseExecution<SP.InformationRightsManagementSettings> & SP.InformationRightsManagementSettingsCollections & SP.InformationRightsManagementSettingsMethods;
	ParentWeb(): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	RootFolder(): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	TitleResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* ListCollections
**********************************************/
export interface ListCollections extends ListPropMethods {
	ContentTypes(): Base.IBaseCollection<SP.ContentType, SP.ContentTypeOData, Base.IBaseExecution & SP.ContentTypeCollectionMethods> & Base.IBaseExecution & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	EventReceivers(): Base.IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): Base.IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Fields(): Base.IBaseCollection<SP.Field, SP.FieldOData, Base.IBaseExecution & SP.FieldCollectionMethods> & Base.IBaseExecution & SP.FieldCollectionMethods;
	Fields(id: string | number): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	Forms(): Base.IBaseCollection<SP.Form> & SP.FormCollectionMethods;
	Forms(id: string | number): Base.IBaseQuery<SP.Form> & SP.FormCollections;
	Items(): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	Items(id: string | number): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	RoleAssignments(): Base.IBaseCollection<SP.RoleAssignment, SP.RoleAssignmentOData, Base.IBaseExecution & SP.RoleAssignmentCollectionMethods> & Base.IBaseExecution & SP.RoleAssignmentCollectionMethods;
	RoleAssignments(id: string | number): Base.IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentOData> & SP.RoleAssignmentCollections & SP.RoleAssignmentMethods;
	Subscriptions(): Base.IBaseCollection<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollectionMethods;
	Subscriptions(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollections & Microsoft.SharePoint.Webhooks.SubscriptionMethods;
	UserCustomActions(): Base.IBaseCollection<SP.UserCustomAction, SP.UserCustomActionOData, Base.IBaseExecution & SP.UserCustomActionCollectionMethods> & Base.IBaseExecution & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): Base.IBaseQuery<SP.UserCustomAction, SP.UserCustomActionOData> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
	Views(): Base.IBaseCollection<SP.View, SP.ViewOData, Base.IBaseExecution & SP.ViewCollectionMethods> & Base.IBaseExecution & SP.ViewCollectionMethods;
	Views(id: string | number): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	WorkflowAssociations(): Base.IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): Base.IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* ListCollectionMethods
**********************************************/
export interface ListCollectionMethods {
	// add(parameters?: SP.ListCreationInformation): Base.IBaseExecution<SP.List>;
	ensureClientRenderedSitePagesLibrary(): Base.IBaseExecution<SP.List>;
	ensureEventsList(): Base.IBaseExecution<SP.List>;
	ensureSiteAssetsLibrary(): Base.IBaseExecution<SP.List>;
	ensureSitePagesLibrary(): Base.IBaseExecution<SP.List>;
	getById(id?: any): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getByTitle(title?: string): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	add(parameters?: SP.ListProps): Base.IBaseExecution<SP.List>;
}

/*********************************************
* ListOData
**********************************************/
export interface ListOData extends Base.IBaseResult, ListProps, ListMethods {
	ContentTypes: Base.IBaseResults<SP.ContentType> & SP.ContentTypeCollectionMethods;
	CreatablesInfo: SP.CreatablesInfo & SP.CreatablesInfoCollections;
	DefaultView: SP.View & SP.ViewCollections & SP.ViewCollectionMethods;
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	EventReceivers: Base.IBaseResults<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	Fields: Base.IBaseResults<SP.Field> & SP.FieldCollectionMethods;
	Forms: Base.IBaseResults<SP.Form> & SP.FormCollectionMethods;
	InformationRightsManagementSettings: SP.InformationRightsManagementSettings & SP.InformationRightsManagementSettingsCollections;
	Items: Base.IBaseResults<SP.ListItem> & SP.ListItemCollectionMethods;
	ParentWeb: SP.Web & SP.WebCollections & SP.WebCollectionMethods;
	RoleAssignments: Base.IBaseResults<SP.RoleAssignment> & SP.RoleAssignmentCollectionMethods;
	RootFolder: SP.Folder & SP.FolderCollections & SP.FolderCollectionMethods;
	Subscriptions: Base.IBaseResults<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollectionMethods;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
	UserCustomActions: Base.IBaseResults<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
	Views: Base.IBaseResults<SP.View> & SP.ViewCollectionMethods;
	WorkflowAssociations: Base.IBaseResults<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
}

/*********************************************
* ListMethods
**********************************************/
export interface ListMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Base.IBaseExecution<any>;
	resetRoleInheritance(): Base.IBaseExecution<any>;
	addItem(parameters?: SP.ListItemCreationInformation): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	addItemUsingPath(parameters?: SP.ListItemCreationInformationUsingPath): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	addValidateUpdateItem(listItemCreateInfo?: SP.ListItemCreationInformation, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): Base.IBaseCollection<SP.ListItemFormUpdateValue>;
	addValidateUpdateItemUsingPath(listItemCreateInfo?: SP.ListItemCreationInformationUsingPath, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): Base.IBaseCollection<SP.ListItemFormUpdateValue>;
	bulkValidateUpdateListItems(itemIds?: Array<number>, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string, folderPath?: string): Base.IBaseCollection<SP.ListItemFormUpdateValue>;
	createDocumentAndGetEditLink(fileName?: string, folderPath?: string, documentTemplateType?: number, templateUrl?: string): Base.IBaseExecution<string>;
	createDocumentWithDefaultName(folderPath?: string, extension?: string): Base.IBaseExecution<string>;
	createMappedView(appViewCreationInfo?: SP.AppViewCreationInfo, visualizationTarget?: number): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	delete(): Base.IBaseExecution<any>;
	ensureSignoffStatusField(): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	getBloomFilter(startItemId?: number): Base.IBaseExecution<SP.ListBloomFilter>;
	getBloomFilterWithCustomFields(listItemStartingID?: number, internalFieldNames?: Array<string>): Base.IBaseExecution<SP.ListBloomFilter>;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getCheckedOutFiles(): Base.IBaseCollection<SP.CheckedOutFile, SP.CheckedOutFileOData, Base.IBaseExecution & SP.CheckedOutFileCollectionMethods> & Base.IBaseExecution & SP.CheckedOutFileCollectionMethods;
	getItemById(id?: number): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getItemByStringId(sId?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getItemByUniqueId(uniqueId?: any): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	// getItems(query?: SP.CamlQuery): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getListItemChangesSinceToken(query?: SP.ChangeLogItemQuery): Base.IBaseExecution<any>;
	getMappedApp(appId?: any, visualizationAppTarget?: number): Base.IBaseQuery<SP.VisualizationAppSynchronizationResult, SP.VisualizationAppSynchronizationResultOData> & SP.VisualizationAppSynchronizationResultCollections;
	getMappedApps(visualizationAppTarget?: number): Base.IBaseQuery<SP.VisualizationAppSynchronizationResult, SP.VisualizationAppSynchronizationResultOData> & SP.VisualizationAppSynchronizationResultCollections;
	getRelatedFields(): Base.IBaseCollection<SP.RelatedField, SP.RelatedFieldOData, Base.IBaseExecution & SP.RelatedFieldCollectionMethods> & Base.IBaseExecution & SP.RelatedFieldCollectionMethods;
	getSpecialFolderUrl(type?: number, bForceCreate?: boolean, existingFolderGuid?: any): Base.IBaseExecution<string>;
	getUserEffectivePermissions(userName?: string): Base.IBaseExecution<SP.BasePermissions>;
	getView(viewGuid?: any): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	getWebDavUrl(sourceUrl?: string): Base.IBaseExecution<string>;
	publishMappedView(appId?: any, visualizationTarget?: number): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	recycle(): Base.IBaseExecution<any>;
	renderExtendedListFormData(itemId?: number, formId?: string, mode?: number, options?: number, cutoffVersion?: number): Base.IBaseExecution<string>;
	renderListContextMenuData(CascDelWarnMessage?: string, CustomAction?: string, Field?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsXslView?: string, ItemId?: string, ListViewPageUrl?: string, OverrideScope?: string, RootFolder?: string, View?: string, ViewCount?: string): Base.IBaseExecution<any>;
	renderListData(viewXml?: string): Base.IBaseExecution<string>;
	renderListDataAsStream(parameters?: SP.RenderListDataParameters, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, RootFolder?: string, RootFolderUniqueId?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): Base.IBaseExecution<any>;
	renderListFilterData(ExcludeFieldFilteringHtml?: boolean, FieldInternalName?: string, OverrideScope?: string, ProcessQStringToCAML?: string, ViewId?: string): Base.IBaseExecution<any>;
	renderListFormData(itemId?: number, formId?: string, mode?: number): Base.IBaseExecution<string>;
	reserveListItemId(): Base.IBaseExecution<number>;
	saveAsNewView(oldName?: string, newName?: string, privateView?: boolean, uri?: string): Base.IBaseExecution<string>;
	saveAsTemplate(strFileName?: string, strName?: string, strDescription?: string, bSaveData?: boolean): Base.IBaseExecution<any>;
	setExemptFromBlockDownloadOfNonViewableFiles(value?: boolean): Base.IBaseExecution<any>;
	syncFlowCallbackUrl(flowId?: string): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowInstance(flowID?: any): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowInstances(): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowTemplates(category?: string): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	unpublishMappedView(appId?: any, visualizationTarget?: number): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	// update(): Base.IBaseExecution<any>;
	validateAppName(appDisplayName?: string): Base.IBaseQuery<SP.VisualizationAppSynchronizationResult, SP.VisualizationAppSynchronizationResultOData> & SP.VisualizationAppSynchronizationResultCollections;
	getItems(viewXML?: string): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	getItemsByQuery(camlQuery?: string): Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* CreatablesInfo
**********************************************/
export interface CreatablesInfo {
	CanCreateFolders?: boolean;
	CanCreateItems?: boolean;
	CanUploadFiles?: boolean;
	CreatablesCollection?: SP.CreatableItemInfoCollection;
}

/*********************************************
* CreatablesInfoCollections
**********************************************/
export interface CreatablesInfoCollections {

}

/*********************************************
* IView
**********************************************/
export interface IView extends ViewCollections, ViewMethods, Base.IBaseQuery<View, IViewQuery> {

}

/*********************************************
* IViewCollection
**********************************************/
export interface IViewCollection extends Base.IBaseResults<View>, ViewCollectionMethods {
	done?: (resolve: (value?: Array<View>) => void) => void;
}

/*********************************************
* IViewQueryCollection
**********************************************/
export interface IViewQueryCollection extends Base.IBaseResults<ViewOData>, ViewCollectionMethods {
	done?: (resolve: (value?: Array<ViewOData>) => void) => void;
}

/*********************************************
* IViewQuery
**********************************************/
export interface IViewQuery extends ViewOData, ViewMethods {

}

/*********************************************
* View
**********************************************/
export interface View extends Base.IBaseResult, ViewProps, ViewCollections, ViewMethods {

}

/*********************************************
* ViewProps
**********************************************/
export interface ViewProps {
	Aggregations?: string;
	AggregationsStatus?: string;
	BaseViewId?: string;
	ColumnWidth?: string;
	ContentTypeId?: SP.ContentTypeId;
	CustomFormatter?: string;
	DefaultView?: boolean;
	DefaultViewForContentType?: boolean;
	EditorModified?: boolean;
	Formats?: string;
	Hidden?: boolean;
	HtmlSchemaXml?: string;
	Id?: any;
	ImageUrl?: string;
	IncludeRootFolder?: boolean;
	ViewJoins?: string;
	JSLink?: string;
	ListViewXml?: string;
	Method?: string;
	MobileDefaultView?: boolean;
	MobileView?: boolean;
	ModerationType?: string;
	NewDocumentTemplates?: string;
	OrderedView?: boolean;
	Paged?: boolean;
	PageRenderType?: number;
	PersonalView?: boolean;
	ViewProjectedFields?: string;
	ViewQuery?: string;
	ReadOnlyView?: boolean;
	RequiresClientIntegration?: boolean;
	RowLimit?: number;
	Scope?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	StyleId?: string;
	TabularView?: boolean;
	Threaded?: boolean;
	Title?: string;
	Toolbar?: string;
	ToolbarTemplateName?: string;
	ViewType?: string;
	ViewData?: string;
	VisualizationInfo?: SP.Visualization;
}

/*********************************************
* ViewPropMethods
**********************************************/
export interface ViewPropMethods {
	ViewFields(): Base.IBaseExecution<SP.ViewFieldCollection> & SP.ViewFieldCollectionCollections & SP.ViewFieldCollectionMethods;
}

/*********************************************
* ViewCollections
**********************************************/
export interface ViewCollections extends ViewPropMethods {

}

/*********************************************
* ViewCollectionMethods
**********************************************/
export interface ViewCollectionMethods {
	// add(parameters?: SP.ViewCreationInformation): Base.IBaseExecution<SP.View>;
	getById(guidId?: any): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	getByTitle(strTitle?: string): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	add(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* ViewOData
**********************************************/
export interface ViewOData extends Base.IBaseResult, ViewProps, ViewMethods {
	ViewFields: SP.ViewFieldCollection & SP.ViewFieldCollectionCollections;
}

/*********************************************
* ViewMethods
**********************************************/
export interface ViewMethods {
	addToSpotlight(itemId?: number, folderPath?: string, afterItemId?: number): Base.IBaseExecution<SP.Utilities.SpotlightResult>;
	delete(): Base.IBaseExecution<any>;
	removeFromSpotlight(itemId?: number, folderPath?: string): Base.IBaseExecution<SP.Utilities.SpotlightResult>;
	renderAsHtml(): Base.IBaseExecution<string>;
	setViewXml(viewXml?: string): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IViewFieldCollection
**********************************************/
export interface IViewFieldCollection extends ViewFieldCollectionCollections, ViewFieldCollectionMethods, Base.IBaseQuery<ViewFieldCollection, IViewFieldCollectionQuery> {

}

/*********************************************
* IViewFieldCollectionCollection
**********************************************/
export interface IViewFieldCollectionCollection extends Base.IBaseResults<ViewFieldCollection> {
	done?: (resolve: (value?: Array<ViewFieldCollection>) => void) => void;
}

/*********************************************
* IViewFieldCollectionQueryCollection
**********************************************/
export interface IViewFieldCollectionQueryCollection extends Base.IBaseResults<ViewFieldCollectionOData> {
	done?: (resolve: (value?: Array<ViewFieldCollectionOData>) => void) => void;
}

/*********************************************
* IViewFieldCollectionQuery
**********************************************/
export interface IViewFieldCollectionQuery extends ViewFieldCollectionOData, ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection extends Base.IBaseResult, ViewFieldCollectionProps, ViewFieldCollectionCollections, ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollectionProps
**********************************************/
export interface ViewFieldCollectionProps {
	SchemaXml?: string;
	Items?: { results: Array<string> };
}

/*********************************************
* ViewFieldCollectionPropMethods
**********************************************/
export interface ViewFieldCollectionPropMethods {

}

/*********************************************
* ViewFieldCollectionCollections
**********************************************/
export interface ViewFieldCollectionCollections extends ViewFieldCollectionPropMethods {

}

/*********************************************
* ViewFieldCollectionOData
**********************************************/
export interface ViewFieldCollectionOData extends Base.IBaseResult, ViewFieldCollectionProps, ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollectionMethods
**********************************************/
export interface ViewFieldCollectionMethods {
	addViewField(strField?: string): Base.IBaseExecution<any>;
	moveViewFieldTo(field?: string, index?: number): Base.IBaseExecution<any>;
	removeAllViewFields(): Base.IBaseExecution<any>;
	removeViewField(strField?: string): Base.IBaseExecution<any>;
}

/*********************************************
* Form
**********************************************/
export interface Form {
	Id?: any;
	ResourcePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	FormType?: number;
}

/*********************************************
* FormCollections
**********************************************/
export interface FormCollections extends FormCollectionMethods {

}

/*********************************************
* FormCollectionMethods
**********************************************/
export interface FormCollectionMethods {
	getById(id?: any): Base.IBaseQuery<SP.Form> & SP.FormCollections;
	getByPageType(formType?: number): Base.IBaseQuery<SP.Form> & SP.FormCollections;
}

/*********************************************
* IInformationRightsManagementSettings
**********************************************/
export interface IInformationRightsManagementSettings extends InformationRightsManagementSettingsCollections, InformationRightsManagementSettingsMethods, Base.IBaseQuery<InformationRightsManagementSettings, IInformationRightsManagementSettingsQuery> {

}

/*********************************************
* IInformationRightsManagementSettingsCollection
**********************************************/
export interface IInformationRightsManagementSettingsCollection extends Base.IBaseResults<InformationRightsManagementSettings> {
	done?: (resolve: (value?: Array<InformationRightsManagementSettings>) => void) => void;
}

/*********************************************
* IInformationRightsManagementSettingsQueryCollection
**********************************************/
export interface IInformationRightsManagementSettingsQueryCollection extends Base.IBaseResults<InformationRightsManagementSettingsOData> {
	done?: (resolve: (value?: Array<InformationRightsManagementSettingsOData>) => void) => void;
}

/*********************************************
* IInformationRightsManagementSettingsQuery
**********************************************/
export interface IInformationRightsManagementSettingsQuery extends InformationRightsManagementSettingsOData, InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettings
**********************************************/
export interface InformationRightsManagementSettings extends Base.IBaseResult, InformationRightsManagementSettingsProps, InformationRightsManagementSettingsCollections, InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettingsProps
**********************************************/
export interface InformationRightsManagementSettingsProps {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	DocumentLibraryProtectionExpireDate?: any;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	TemplateId?: string;
}

/*********************************************
* InformationRightsManagementSettingsPropMethods
**********************************************/
export interface InformationRightsManagementSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementSettingsCollections
**********************************************/
export interface InformationRightsManagementSettingsCollections extends InformationRightsManagementSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementSettingsOData
**********************************************/
export interface InformationRightsManagementSettingsOData extends Base.IBaseResult, InformationRightsManagementSettingsProps, InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettingsMethods
**********************************************/
export interface InformationRightsManagementSettingsMethods {
	reset(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IWeb
**********************************************/
export interface IWeb extends WebCollections, WebMethods, Base.IBaseQuery<Web, IWebQuery> {

}

/*********************************************
* IWebCollection
**********************************************/
export interface IWebCollection extends Base.IBaseResults<Web>, WebCollectionMethods {
	done?: (resolve: (value?: Array<Web>) => void) => void;
}

/*********************************************
* IWebQueryCollection
**********************************************/
export interface IWebQueryCollection extends Base.IBaseResults<WebOData>, WebCollectionMethods {
	done?: (resolve: (value?: Array<WebOData>) => void) => void;
}

/*********************************************
* IWebQuery
**********************************************/
export interface IWebQuery extends WebOData, WebMethods {

}

/*********************************************
* Web
**********************************************/
export interface Web extends SP.SecurableObject, Base.IBaseResult, WebProps, WebCollections, WebMethods {

}

/*********************************************
* WebProps
**********************************************/
export interface WebProps {
	AccessRequestListUrl?: string;
	AccessRequestSiteDescription?: string;
	AllowAutomaticASPXPageIndexing?: boolean;
	AllowCreateDeclarativeWorkflowForCurrentUser?: boolean;
	AllowDesignerForCurrentUser?: boolean;
	AllowMasterPageEditingForCurrentUser?: boolean;
	AllowRevertFromTemplateForCurrentUser?: boolean;
	AllowRssFeeds?: boolean;
	AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser?: boolean;
	AllowSavePublishDeclarativeWorkflowForCurrentUser?: boolean;
	AlternateCssUrl?: string;
	AppInstanceId?: any;
	ClassicWelcomePage?: string;
	CommentsOnSitePagesDisabled?: boolean;
	Configuration?: number;
	ContainsConfidentialInfo?: boolean;
	Created?: any;
	CurrentChangeToken?: SP.ChangeToken;
	CustomMasterUrl?: string;
	CustomSiteActionsDisabled?: boolean;
	Description?: string;
	DesignerDownloadUrlForCurrentUser?: string;
	DesignPackageId?: any;
	DisableAppViews?: boolean;
	DisableFlows?: boolean;
	DisableRecommendedItems?: boolean;
	DocumentLibraryCalloutOfficeWebAppPreviewersDisabled?: boolean;
	EffectiveBasePermissions?: SP.BasePermissions;
	EnableMinimalDownload?: boolean;
	ExcludeFromOfflineClient?: boolean;
	FooterEmphasis?: number;
	FooterEnabled?: boolean;
	FooterLayout?: number;
	HeaderEmphasis?: number;
	HeaderLayout?: number;
	HorizontalQuickLaunch?: boolean;
	Id?: any;
	IsHomepageModernized?: boolean;
	IsMultilingual?: boolean;
	IsProvisioningComplete?: boolean;
	IsRevertHomepageLinkHidden?: boolean;
	Language?: number;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	MasterUrl?: string;
	MegaMenuEnabled?: boolean;
	MembersCanShare?: boolean;
	NavAudienceTargetingEnabled?: boolean;
	NoCrawl?: boolean;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	ObjectCacheEnabled?: boolean;
	OverwriteTranslationsOnChange?: boolean;
	ResourcePath?: SP.ResourcePath;
	PreviewFeaturesEnabled?: boolean;
	PrimaryColor?: string;
	QuickLaunchEnabled?: boolean;
	RecycleBinEnabled?: boolean;
	RequestAccessEmail?: string;
	SaveSiteAsTemplateEnabled?: boolean;
	SearchBoxInNavBar?: number;
	SearchBoxPlaceholderText?: string;
	SearchScope?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	ShowUrlStructureForCurrentUser?: boolean;
	SiteLogoDescription?: string;
	SiteLogoUrl?: string;
	SupportedUILanguageIds?: { results: Array<number> };
	SyndicationEnabled?: boolean;
	TenantAdminMembersCanShare?: number;
	TenantTagPolicyEnabled?: boolean;
	ThemeData?: string;
	ThemedCssFolderUrl?: string;
	ThirdPartyMdmEnabled?: boolean;
	Title?: string;
	TreeViewEnabled?: boolean;
	UIVersion?: number;
	UIVersionConfigurationEnabled?: boolean;
	Url?: string;
	UseAccessRequestDefault?: boolean;
	WebTemplate?: string;
	WelcomePage?: string;
}

/*********************************************
* WebPropMethods
**********************************************/
export interface WebPropMethods {
	ActivityLogger(): Base.IBaseExecution<Microsoft.SharePoint.Internal.ActivityLogger> & Microsoft.SharePoint.Internal.ActivityLoggerCollections & Microsoft.SharePoint.Internal.ActivityLoggerMethods;
	AllProperties(): Base.IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	AssociatedMemberGroup(): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	AssociatedOwnerGroup(): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	AssociatedVisitorGroup(): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	Author(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	CurrentUser(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	DataLeakagePreventionStatusInfo(): Base.IBaseExecution<SP.SPDataLeakagePreventionStatusInfo> & SP.SPDataLeakagePreventionStatusInfoCollections;
	DescriptionResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	HostedApps(): Base.IBaseExecution<Microsoft.SharePoint.ClientSideComponent.HostedAppsManager> & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerCollections & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerMethods;
	MultilingualSettings(): Base.IBaseQuery<SP.MultilingualSettings, SP.MultilingualSettingsOData> & SP.MultilingualSettingsCollections & SP.MultilingualSettingsMethods;
	Navigation(): Base.IBaseQuery<SP.Navigation, SP.NavigationOData> & SP.NavigationCollections & SP.NavigationMethods;
	ParentWeb(): Base.IBaseExecution<SP.WebInformation> & SP.WebInformationCollections;
	RegionalSettings(): Base.IBaseQuery<SP.RegionalSettings, SP.RegionalSettingsOData> & SP.RegionalSettingsCollections & SP.RegionalSettingsMethods;
	RootFolder(): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	SiteCollectionAppCatalog(): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor, Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorOData> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorMethods;
	SiteUserInfoList(): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	TenantAppCatalog(): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor, Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorOData> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorMethods;
	ThemeInfo(): Base.IBaseExecution<SP.ThemeInfo> & SP.ThemeInfoCollections & SP.ThemeInfoMethods;
	TitleResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* WebCollections
**********************************************/
export interface WebCollections extends WebPropMethods {
	Activities(): Base.IBaseCollection<Microsoft.SharePoint.Activities.SPActivityEntity>;
	Activities(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Activities.SPActivityEntity> & Microsoft.SharePoint.Activities.SPActivityEntityCollections;
	Alerts(): Base.IBaseCollection<SP.Alert, SP.AlertOData, Base.IBaseExecution & SP.AlertCollectionMethods> & Base.IBaseExecution & SP.AlertCollectionMethods;
	Alerts(id: string | number): Base.IBaseQuery<SP.Alert, SP.AlertOData> & SP.AlertCollections & SP.AlertMethods;
	AppTiles(): Base.IBaseCollection<SP.AppTile>;
	AppTiles(id: string | number): Base.IBaseQuery<SP.AppTile> & SP.AppTileCollections;
	AvailableContentTypes(): Base.IBaseCollection<SP.ContentType, SP.ContentTypeOData, Base.IBaseExecution & SP.ContentTypeCollectionMethods> & Base.IBaseExecution & SP.ContentTypeCollectionMethods;
	AvailableContentTypes(id: string | number): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	AvailableFields(): Base.IBaseCollection<SP.Field, SP.FieldOData, Base.IBaseExecution & SP.FieldCollectionMethods> & Base.IBaseExecution & SP.FieldCollectionMethods;
	AvailableFields(id: string | number): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	ClientWebParts(): Base.IBaseCollection<SP.ClientWebPart> & SP.ClientWebPartCollectionMethods;
	ClientWebParts(id: string | number): Base.IBaseQuery<SP.ClientWebPart> & SP.ClientWebPartCollections & SP.ClientWebPartMethods;
	ContentTypes(): Base.IBaseCollection<SP.ContentType, SP.ContentTypeOData, Base.IBaseExecution & SP.ContentTypeCollectionMethods> & Base.IBaseExecution & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): Base.IBaseQuery<SP.ContentType, SP.ContentTypeOData> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	EventReceivers(): Base.IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): Base.IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Features(): Base.IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): Base.IBaseQuery<SP.Feature> & SP.FeatureCollections;
	Fields(): Base.IBaseCollection<SP.Field, SP.FieldOData, Base.IBaseExecution & SP.FieldCollectionMethods> & Base.IBaseExecution & SP.FieldCollectionMethods;
	Fields(id: string | number): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
	Folders(): Base.IBaseCollection<SP.Folder, SP.FolderOData, Base.IBaseExecution & SP.FolderCollectionMethods> & Base.IBaseExecution & SP.FolderCollectionMethods;
	Folders(id: string | number): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	Lists(): Base.IBaseCollection<SP.List, SP.ListOData, Base.IBaseExecution & SP.ListCollectionMethods> & Base.IBaseExecution & SP.ListCollectionMethods;
	Lists(id: string | number): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	ListTemplates(): Base.IBaseCollection<SP.ListTemplate> & SP.ListTemplateCollectionMethods;
	ListTemplates(id: string | number): Base.IBaseQuery<SP.ListTemplate> & SP.ListTemplateCollections & SP.ListTemplateMethods;
	OneDriveSharedItems(): Base.IBaseCollection<SP.Sharing.SharedDocumentInfo>;
	OneDriveSharedItems(id: string | number): Base.IBaseQuery<SP.Sharing.SharedDocumentInfo> & SP.Sharing.SharedDocumentInfoCollections;
	PushNotificationSubscribers(): Base.IBaseCollection<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData, Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods> & Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods;
	PushNotificationSubscribers(id: string | number): Base.IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData> & SP.PushNotificationSubscriberCollections & SP.PushNotificationSubscriberMethods;
	RecycleBin(): Base.IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemOData, Base.IBaseExecution & SP.RecycleBinItemCollectionMethods> & Base.IBaseExecution & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): Base.IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemOData> & SP.RecycleBinItemCollections & SP.RecycleBinItemMethods;
	RoleAssignments(): Base.IBaseCollection<SP.RoleAssignment, SP.RoleAssignmentOData, Base.IBaseExecution & SP.RoleAssignmentCollectionMethods> & Base.IBaseExecution & SP.RoleAssignmentCollectionMethods;
	RoleAssignments(id: string | number): Base.IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentOData> & SP.RoleAssignmentCollections & SP.RoleAssignmentMethods;
	RoleDefinitions(): Base.IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitions(id: string | number): Base.IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
	SiteGroups(): Base.IBaseCollection<SP.Group, SP.GroupOData, Base.IBaseExecution & SP.GroupCollectionMethods> & Base.IBaseExecution & SP.GroupCollectionMethods;
	SiteGroups(id: string | number): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	SiteUsers(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	SiteUsers(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	UserCustomActions(): Base.IBaseCollection<SP.UserCustomAction, SP.UserCustomActionOData, Base.IBaseExecution & SP.UserCustomActionCollectionMethods> & Base.IBaseExecution & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): Base.IBaseQuery<SP.UserCustomAction, SP.UserCustomActionOData> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
	Webs(): Base.IBaseCollection<SP.Web, SP.WebOData, Base.IBaseExecution & SP.WebCollectionMethods> & Base.IBaseExecution & SP.WebCollectionMethods;
	Webs(id: string | number): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
	WebInfos(): Base.IBaseCollection<SP.WebInformation> & SP.WebInformationCollectionMethods;
	WebInfos(id: string | number): Base.IBaseQuery<SP.WebInformation> & SP.WebInformationCollections;
	WorkflowAssociations(): Base.IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): Base.IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
	WorkflowTemplates(): Base.IBaseCollection<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollectionMethods;
	WorkflowTemplates(id: string | number): Base.IBaseQuery<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollections;
}

/*********************************************
* WebCollectionMethods
**********************************************/
export interface WebCollectionMethods {
	add(parameters?: SP.WebCreationInformation): Base.IBaseExecution<SP.Web>;
}

/*********************************************
* WebOData
**********************************************/
export interface WebOData extends Base.IBaseResult, WebProps, WebMethods {
	Activities: Base.IBaseResults<Microsoft.SharePoint.Activities.SPActivityEntity>;
	ActivityLogger: Microsoft.SharePoint.Internal.ActivityLogger & Microsoft.SharePoint.Internal.ActivityLoggerCollections;
	Alerts: Base.IBaseResults<SP.Alert> & SP.AlertCollectionMethods;
	AllProperties: SP.PropertyValues & SP.PropertyValuesCollections;
	AppTiles: Base.IBaseResults<SP.AppTile>;
	AssociatedMemberGroup: SP.Group & SP.GroupCollections & SP.GroupCollectionMethods;
	AssociatedOwnerGroup: SP.Group & SP.GroupCollections & SP.GroupCollectionMethods;
	AssociatedVisitorGroup: SP.Group & SP.GroupCollections & SP.GroupCollectionMethods;
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	AvailableContentTypes: Base.IBaseResults<SP.ContentType> & SP.ContentTypeCollectionMethods;
	AvailableFields: Base.IBaseResults<SP.Field> & SP.FieldCollectionMethods;
	ClientWebParts: Base.IBaseResults<SP.ClientWebPart> & SP.ClientWebPartCollectionMethods;
	ContentTypes: Base.IBaseResults<SP.ContentType> & SP.ContentTypeCollectionMethods;
	CurrentUser: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	DataLeakagePreventionStatusInfo: SP.SPDataLeakagePreventionStatusInfo & SP.SPDataLeakagePreventionStatusInfoCollections;
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	EventReceivers: Base.IBaseResults<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	Features: Base.IBaseResults<SP.Feature> & SP.FeatureCollectionMethods;
	Fields: Base.IBaseResults<SP.Field> & SP.FieldCollectionMethods;
	Folders: Base.IBaseResults<SP.Folder> & SP.FolderCollectionMethods;
	HostedApps: Microsoft.SharePoint.ClientSideComponent.HostedAppsManager & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerCollections;
	Lists: Base.IBaseResults<SP.List> & SP.ListCollectionMethods;
	ListTemplates: Base.IBaseResults<SP.ListTemplate> & SP.ListTemplateCollectionMethods;
	MultilingualSettings: SP.MultilingualSettings & SP.MultilingualSettingsCollections;
	Navigation: SP.Navigation & SP.NavigationCollections;
	OneDriveSharedItems: Base.IBaseResults<SP.Sharing.SharedDocumentInfo>;
	ParentWeb: SP.WebInformation & SP.WebInformationCollections & SP.WebInformationCollectionMethods;
	PushNotificationSubscribers: Base.IBaseResults<SP.PushNotificationSubscriber> & SP.PushNotificationSubscriberCollectionMethods;
	RecycleBin: Base.IBaseResults<SP.RecycleBinItem> & SP.RecycleBinItemCollectionMethods;
	RegionalSettings: SP.RegionalSettings & SP.RegionalSettingsCollections;
	RoleAssignments: Base.IBaseResults<SP.RoleAssignment> & SP.RoleAssignmentCollectionMethods;
	RoleDefinitions: Base.IBaseResults<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RootFolder: SP.Folder & SP.FolderCollections & SP.FolderCollectionMethods;
	SiteCollectionAppCatalog: Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorCollections;
	SiteGroups: Base.IBaseResults<SP.Group> & SP.GroupCollectionMethods;
	SiteUserInfoList: SP.List & SP.ListCollections & SP.ListCollectionMethods;
	SiteUsers: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
	TenantAppCatalog: Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorCollections;
	ThemeInfo: SP.ThemeInfo & SP.ThemeInfoCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
	UserCustomActions: Base.IBaseResults<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
	Webs: Base.IBaseResults<SP.Web> & SP.WebCollectionMethods;
	WebInfos: Base.IBaseResults<SP.WebInformation> & SP.WebInformationCollectionMethods;
	WorkflowAssociations: Base.IBaseResults<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowTemplates: Base.IBaseResults<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollectionMethods;
}

/*********************************************
* WebMethods
**********************************************/
export interface WebMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Base.IBaseExecution<any>;
	resetRoleInheritance(): Base.IBaseExecution<any>;
	addCrossFarmMessage(messagePayloadBase64?: string): Base.IBaseExecution<boolean>;
	addSupportedUILanguage(lcid?: number): Base.IBaseExecution<any>;
	applyTheme(colorPaletteUrl?: string, fontSchemeUrl?: string, backgroundImageUrl?: string, shareGenerated?: boolean): Base.IBaseExecution<any>;
	applyWebTemplate(webTemplate?: string): Base.IBaseExecution<any>;
	createDefaultAssociatedGroups(userLogin?: string, userLogin2?: string, groupNameSeed?: string): Base.IBaseExecution<any>;
	defaultDocumentLibrary(): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	delete(): Base.IBaseExecution<any>;
	doesPushNotificationSubscriberExist(deviceAppInstanceId?: any): Base.IBaseExecution<boolean>;
	// doesUserHavePermissions(permissionMask?: SP.BasePermissions): Base.IBaseExecution<boolean>;
	ensureUser(logonName?: string): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	executeRemoteLOB(inputStream?: any): Base.IBaseExecution<any>;
	getAllClientSideComponents(): Base.IBaseExecution<string>;
	getAppBdcCatalog(): Base.IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppBdcCatalogForAppInstance(appInstanceId?: any): Base.IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppInstanceById(appInstanceId?: any): Base.IBaseExecution<SP.AppInstance>;
	getAppInstancesByProductId(productId?: any): Base.IBaseCollection<SP.AppInstance>;
	getAvailableWebTemplates(lcid?: number, doIncludeCrossLanguage?: boolean): Base.IBaseCollection<SP.WebTemplate> & SP.WebTemplateCollectionMethods;
	getCatalog(typeCatalog?: number): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getClientSideComponents(components?: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentIdentifier>): Base.IBaseCollection<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>;
	getClientSideComponentsById(componentIds?: Array<any>): Base.IBaseCollection<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>;
	getClientSideWebParts(includeErrors?: boolean): Base.IBaseCollection<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>;
	getCustomListTemplates(): Base.IBaseCollection<SP.ListTemplate> & SP.ListTemplateCollectionMethods;
	getEntity(namespace?: string, name?: string): Base.IBaseExecution<SP.BusinessData.Entity>;
	getFileByGuestUrl(guestUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByGuestUrlEnsureAccess(guestUrl?: string, ensureAccess?: boolean): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileById(uniqueId?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByLinkingUrl(linkingUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByServerRelativePath(DecodedUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByServerRelativeUrl(serverRelativeUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByUrl(fileUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByWOPIFrameUrl(wopiFrameUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFolderByGuestUrl(guestUrl?: string, ensureAccess?: boolean): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getFolderByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getFolderById(uniqueId?: any): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getFolderByServerRelativePath(DecodedUrl?: string): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getList(strUrl?: string): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getListItem(strUrl?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getListItemByResourceId(resourceId?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getListItemUsingPath(DecodedUrl?: string): Base.IBaseQuery<SP.ListItem, SP.ListItemOData> & SP.ListItemCollections & SP.ListItemMethods;
	getListUsingPath(DecodedUrl?: string): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getNewsList(allowCreate?: boolean): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getPushNotificationSubscriber(deviceAppInstanceId?: any): Base.IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData> & SP.PushNotificationSubscriberCollections & SP.PushNotificationSubscriberMethods;
	getPushNotificationSubscribersByArgs(customArgs?: string): Base.IBaseCollection<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData, Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods> & Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods;
	getPushNotificationSubscribersByUser(userName?: string): Base.IBaseCollection<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData, Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods> & Base.IBaseExecution & SP.PushNotificationSubscriberCollectionMethods;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): Base.IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemOData, Base.IBaseExecution & SP.RecycleBinItemCollectionMethods> & Base.IBaseExecution & SP.RecycleBinItemCollectionMethods;
	getRecycleBinItemsByQueryInfo(IsAscending?: boolean, ItemState?: number, OrderBy?: number, PagingInfo?: string, RowLimit?: number, ShowOnlyMyItems?: boolean): Base.IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemOData, Base.IBaseExecution & SP.RecycleBinItemCollectionMethods> & Base.IBaseExecution & SP.RecycleBinItemCollectionMethods;
	getRegionalDateTimeSchema(): Base.IBaseExecution<string>;
	getSharingLinkData(linkUrl?: string): Base.IBaseExecution<SP.SharingLinkData>;
	getSPAppContextAsStream(): Base.IBaseExecution<any>;
	getStorageEntity(key?: string): Base.IBaseExecution<Microsoft.SharePoint.ClientSideComponent.StorageEntity>;
	getSubwebsFilteredForCurrentUser(nWebTemplateFilter?: number, nConfigurationFilter?: number): Base.IBaseCollection<SP.WebInformation> & SP.WebInformationCollectionMethods;
	getUserById(userId?: number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	getUserEffectivePermissions(userName?: string): Base.IBaseExecution<SP.BasePermissions>;
	getViewFromPath(DecodedUrl?: string): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	getViewFromUrl(listUrl?: string): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
	hubSiteData(forceRefresh?: boolean): Base.IBaseExecution<string>;
	hubSiteDataAsStream(forceRefresh?: boolean): Base.IBaseExecution<any>;
	incrementSiteClientTag(): Base.IBaseExecution<any>;
	loadAndInstallApp(appPackageStream?: any): Base.IBaseExecution<SP.AppInstance>;
	loadAndInstallAppInSpecifiedLocale(appPackageStream?: any, installationLocaleLCID?: number): Base.IBaseExecution<SP.AppInstance>;
	loadApp(appPackageStream?: any, installationLocaleLCID?: number): Base.IBaseExecution<SP.AppInstance>;
	mapToIcon(fileName?: string, progId?: string, size?: number): Base.IBaseExecution<string>;
	pageContextCore(): Base.IBaseExecution<any>;
	pageContextInfo(includeODBSettings?: boolean, emitNavigationInfo?: boolean): Base.IBaseExecution<any>;
	parseDateTime(value?: string, displayFormat?: number, calendarType?: number): Base.IBaseExecution<string>;
	processExternalNotification(stream?: any): Base.IBaseExecution<string>;
	registerPushNotificationSubscriber(deviceAppInstanceId?: any, serviceToken?: string): Base.IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData> & SP.PushNotificationSubscriberCollections & SP.PushNotificationSubscriberMethods;
	removeStorageEntity(key?: string): Base.IBaseExecution<any>;
	removeSupportedUILanguage(lcid?: number): Base.IBaseExecution<any>;
	setAccessRequestSiteDescriptionAndUpdate(description?: string): Base.IBaseExecution<any>;
	setStorageEntity(key?: string, value?: string, description?: string, comments?: string): Base.IBaseExecution<any>;
	setUseAccessRequestDefaultAndUpdate(useAccessRequestDefault?: boolean): Base.IBaseExecution<any>;
	syncFlowInstances(targetWebUrl?: string): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowTemplates(category?: string): Base.IBaseExecution<SP.FlowSynchronizationResult>;
	syncHubSiteTheme(): Base.IBaseExecution<any>;
	unregisterPushNotificationSubscriber(deviceAppInstanceId?: any): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	uploadImage(listTitle?: string, imageName?: string, contentStream?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	doesUserHavePermissions(high?: number, low?: number): Base.IBaseExecution<boolean>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* AppTile
**********************************************/
export interface AppTile {
	AppId?: any;
	AppPrincipalId?: string;
	AppSource?: number;
	AppStatus?: number;
	AppType?: number;
	AssetId?: string;
	BaseTemplate?: number;
	ChildCount?: number;
	ContentMarket?: string;
	CustomSettingsUrl?: string;
	Description?: string;
	IsCorporateCatalogSite?: boolean;
	LastModified?: string;
	LastModifiedDate?: any;
	ProductId?: any;
	Target?: string;
	Thumbnail?: string;
	Title?: string;
	Version?: string;
}

/*********************************************
* AppTileCollections
**********************************************/
export interface AppTileCollections {

}

/*********************************************
* IClientWebPart
**********************************************/
export interface IClientWebPart extends ClientWebPartCollections, ClientWebPartMethods, Base.IBaseQuery<ClientWebPart, IClientWebPartQuery> {

}

/*********************************************
* IClientWebPartCollection
**********************************************/
export interface IClientWebPartCollection extends Base.IBaseResults<ClientWebPart>, ClientWebPartCollectionMethods {
	done?: (resolve: (value?: Array<ClientWebPart>) => void) => void;
}

/*********************************************
* IClientWebPartQueryCollection
**********************************************/
export interface IClientWebPartQueryCollection extends Base.IBaseResults<ClientWebPartOData>, ClientWebPartCollectionMethods {
	done?: (resolve: (value?: Array<ClientWebPartOData>) => void) => void;
}

/*********************************************
* IClientWebPartQuery
**********************************************/
export interface IClientWebPartQuery extends ClientWebPartOData, ClientWebPartMethods {

}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart extends Base.IBaseResult, ClientWebPartProps, ClientWebPartCollections, ClientWebPartMethods {

}

/*********************************************
* ClientWebPartProps
**********************************************/
export interface ClientWebPartProps {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartPropMethods
**********************************************/
export interface ClientWebPartPropMethods {

}

/*********************************************
* ClientWebPartCollections
**********************************************/
export interface ClientWebPartCollections extends ClientWebPartPropMethods {

}

/*********************************************
* ClientWebPartCollectionMethods
**********************************************/
export interface ClientWebPartCollectionMethods {
	getById(id?: any): Base.IBaseQuery<SP.ClientWebPart> & SP.ClientWebPartCollections & SP.ClientWebPartMethods;
}

/*********************************************
* ClientWebPartOData
**********************************************/
export interface ClientWebPartOData extends Base.IBaseResult, ClientWebPartProps, ClientWebPartMethods {

}

/*********************************************
* ClientWebPartMethods
**********************************************/
export interface ClientWebPartMethods {
	render(properties?: Array<SP.KeyValue>): Base.IBaseExecution<string>;
}

/*********************************************
* SPDataLeakagePreventionStatusInfo
**********************************************/
export interface SPDataLeakagePreventionStatusInfo {
	ContainsConfidentialInfo?: boolean;
	ContainsConfidentialInfoLearnMoreUrl?: string;
	ExternalSharingTipsEnabled?: boolean;
	ExternalSharingTipsLearnMoreUrl?: string;
}

/*********************************************
* SPDataLeakagePreventionStatusInfoCollections
**********************************************/
export interface SPDataLeakagePreventionStatusInfoCollections {

}

/*********************************************
* IListTemplate
**********************************************/
export interface IListTemplate extends ListTemplateCollections, ListTemplateMethods, Base.IBaseQuery<ListTemplate, IListTemplateQuery> {

}

/*********************************************
* IListTemplateCollection
**********************************************/
export interface IListTemplateCollection extends Base.IBaseResults<ListTemplate>, ListTemplateCollectionMethods {
	done?: (resolve: (value?: Array<ListTemplate>) => void) => void;
}

/*********************************************
* IListTemplateQueryCollection
**********************************************/
export interface IListTemplateQueryCollection extends Base.IBaseResults<ListTemplateOData>, ListTemplateCollectionMethods {
	done?: (resolve: (value?: Array<ListTemplateOData>) => void) => void;
}

/*********************************************
* IListTemplateQuery
**********************************************/
export interface IListTemplateQuery extends ListTemplateOData, ListTemplateMethods {

}

/*********************************************
* ListTemplate
**********************************************/
export interface ListTemplate extends Base.IBaseResult, ListTemplateProps, ListTemplateCollections, ListTemplateMethods {

}

/*********************************************
* ListTemplateProps
**********************************************/
export interface ListTemplateProps {
	AllowsFolderCreation?: boolean;
	BaseType?: number;
	Description?: string;
	FeatureId?: any;
	Hidden?: boolean;
	ImageUrl?: string;
	InternalName?: string;
	IsCustomTemplate?: boolean;
	Name?: string;
	OnQuickLaunch?: boolean;
	ListTemplateTypeKind?: number;
	Unique?: boolean;
}

/*********************************************
* ListTemplatePropMethods
**********************************************/
export interface ListTemplatePropMethods {

}

/*********************************************
* ListTemplateCollections
**********************************************/
export interface ListTemplateCollections extends ListTemplatePropMethods {

}

/*********************************************
* ListTemplateCollectionMethods
**********************************************/
export interface ListTemplateCollectionMethods {
	getByName(name?: string): Base.IBaseQuery<SP.ListTemplate> & SP.ListTemplateCollections & SP.ListTemplateMethods;
}

/*********************************************
* ListTemplateOData
**********************************************/
export interface ListTemplateOData extends Base.IBaseResult, ListTemplateProps, ListTemplateMethods {

}

/*********************************************
* ListTemplateMethods
**********************************************/
export interface ListTemplateMethods {
	getGlobalSchemaXml(): Base.IBaseExecution<any>;
}

/*********************************************
* IMultilingualSettings
**********************************************/
export interface IMultilingualSettings extends MultilingualSettingsCollections, MultilingualSettingsMethods, Base.IBaseQuery<MultilingualSettings, IMultilingualSettingsQuery> {

}

/*********************************************
* IMultilingualSettingsCollection
**********************************************/
export interface IMultilingualSettingsCollection extends Base.IBaseResults<MultilingualSettings> {
	done?: (resolve: (value?: Array<MultilingualSettings>) => void) => void;
}

/*********************************************
* IMultilingualSettingsQueryCollection
**********************************************/
export interface IMultilingualSettingsQueryCollection extends Base.IBaseResults<MultilingualSettingsOData> {
	done?: (resolve: (value?: Array<MultilingualSettingsOData>) => void) => void;
}

/*********************************************
* IMultilingualSettingsQuery
**********************************************/
export interface IMultilingualSettingsQuery extends MultilingualSettingsOData, MultilingualSettingsMethods {

}

/*********************************************
* MultilingualSettings
**********************************************/
export interface MultilingualSettings extends Base.IBaseResult, MultilingualSettingsProps, MultilingualSettingsCollections, MultilingualSettingsMethods {

}

/*********************************************
* MultilingualSettingsProps
**********************************************/
export interface MultilingualSettingsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultilingualSettingsPropMethods
**********************************************/
export interface MultilingualSettingsPropMethods {

}

/*********************************************
* MultilingualSettingsCollections
**********************************************/
export interface MultilingualSettingsCollections extends MultilingualSettingsPropMethods {
	Recipients(): Base.IBaseCollection<SP.TranslationNotificationRecipientUsers, SP.TranslationNotificationRecipientUsersOData>;
	Recipients(id: string | number): Base.IBaseQuery<SP.TranslationNotificationRecipientUsers, SP.TranslationNotificationRecipientUsersOData> & SP.TranslationNotificationRecipientUsersCollections;
}

/*********************************************
* MultilingualSettingsOData
**********************************************/
export interface MultilingualSettingsOData extends Base.IBaseResult, MultilingualSettingsProps, MultilingualSettingsMethods {
	Recipients: Base.IBaseResults<SP.TranslationNotificationRecipientUsers>;
}

/*********************************************
* MultilingualSettingsMethods
**********************************************/
export interface MultilingualSettingsMethods {
	setNotificationRecipients(request?: SP.TranslationNotificationRecipientSetRequest): Base.IBaseExecution<any>;
}

/*********************************************
* ITranslationNotificationRecipientUsers
**********************************************/
export interface ITranslationNotificationRecipientUsers extends TranslationNotificationRecipientUsersCollections, TranslationNotificationRecipientUsersMethods, Base.IBaseQuery<TranslationNotificationRecipientUsers, ITranslationNotificationRecipientUsersQuery> {

}

/*********************************************
* ITranslationNotificationRecipientUsersCollection
**********************************************/
export interface ITranslationNotificationRecipientUsersCollection extends Base.IBaseResults<TranslationNotificationRecipientUsers> {
	done?: (resolve: (value?: Array<TranslationNotificationRecipientUsers>) => void) => void;
}

/*********************************************
* ITranslationNotificationRecipientUsersQueryCollection
**********************************************/
export interface ITranslationNotificationRecipientUsersQueryCollection extends Base.IBaseResults<TranslationNotificationRecipientUsersOData> {
	done?: (resolve: (value?: Array<TranslationNotificationRecipientUsersOData>) => void) => void;
}

/*********************************************
* ITranslationNotificationRecipientUsersQuery
**********************************************/
export interface ITranslationNotificationRecipientUsersQuery extends TranslationNotificationRecipientUsersOData, TranslationNotificationRecipientUsersMethods {

}

/*********************************************
* TranslationNotificationRecipientUsers
**********************************************/
export interface TranslationNotificationRecipientUsers extends Base.IBaseResult, TranslationNotificationRecipientUsersProps, TranslationNotificationRecipientUsersCollections, TranslationNotificationRecipientUsersMethods {

}

/*********************************************
* TranslationNotificationRecipientUsersProps
**********************************************/
export interface TranslationNotificationRecipientUsersProps {
	LanguageCode?: string;
}

/*********************************************
* TranslationNotificationRecipientUsersPropMethods
**********************************************/
export interface TranslationNotificationRecipientUsersPropMethods {

}

/*********************************************
* TranslationNotificationRecipientUsersCollections
**********************************************/
export interface TranslationNotificationRecipientUsersCollections extends TranslationNotificationRecipientUsersPropMethods {
	Recipients(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	Recipients(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* TranslationNotificationRecipientUsersOData
**********************************************/
export interface TranslationNotificationRecipientUsersOData extends Base.IBaseResult, TranslationNotificationRecipientUsersProps, TranslationNotificationRecipientUsersMethods {
	Recipients: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
}

/*********************************************
* TranslationNotificationRecipientUsersMethods
**********************************************/
export interface TranslationNotificationRecipientUsersMethods {

}

/*********************************************
* INavigation
**********************************************/
export interface INavigation extends NavigationCollections, NavigationMethods, Base.IBaseQuery<Navigation, INavigationQuery> {

}

/*********************************************
* INavigationCollection
**********************************************/
export interface INavigationCollection extends Base.IBaseResults<Navigation> {
	done?: (resolve: (value?: Array<Navigation>) => void) => void;
}

/*********************************************
* INavigationQueryCollection
**********************************************/
export interface INavigationQueryCollection extends Base.IBaseResults<NavigationOData> {
	done?: (resolve: (value?: Array<NavigationOData>) => void) => void;
}

/*********************************************
* INavigationQuery
**********************************************/
export interface INavigationQuery extends NavigationOData, NavigationMethods {

}

/*********************************************
* Navigation
**********************************************/
export interface Navigation extends Base.IBaseResult, NavigationProps, NavigationCollections, NavigationMethods {

}

/*********************************************
* NavigationProps
**********************************************/
export interface NavigationProps {
	UseShared?: boolean;
}

/*********************************************
* NavigationPropMethods
**********************************************/
export interface NavigationPropMethods {

}

/*********************************************
* NavigationCollections
**********************************************/
export interface NavigationCollections extends NavigationPropMethods {
	QuickLaunch(): Base.IBaseCollection<SP.NavigationNode, SP.NavigationNodeOData, Base.IBaseExecution & SP.NavigationNodeCollectionMethods> & Base.IBaseExecution & SP.NavigationNodeCollectionMethods;
	QuickLaunch(id: string | number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
	TopNavigationBar(): Base.IBaseCollection<SP.NavigationNode, SP.NavigationNodeOData, Base.IBaseExecution & SP.NavigationNodeCollectionMethods> & Base.IBaseExecution & SP.NavigationNodeCollectionMethods;
	TopNavigationBar(id: string | number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
}

/*********************************************
* NavigationOData
**********************************************/
export interface NavigationOData extends Base.IBaseResult, NavigationProps, NavigationMethods {
	QuickLaunch: Base.IBaseResults<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
	TopNavigationBar: Base.IBaseResults<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
}

/*********************************************
* NavigationMethods
**********************************************/
export interface NavigationMethods {
	getNodeById(id?: number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
}

/*********************************************
* INavigationNode
**********************************************/
export interface INavigationNode extends NavigationNodeCollections, NavigationNodeMethods, Base.IBaseQuery<NavigationNode, INavigationNodeQuery> {

}

/*********************************************
* INavigationNodeCollection
**********************************************/
export interface INavigationNodeCollection extends Base.IBaseResults<NavigationNode>, NavigationNodeCollectionMethods {
	done?: (resolve: (value?: Array<NavigationNode>) => void) => void;
}

/*********************************************
* INavigationNodeQueryCollection
**********************************************/
export interface INavigationNodeQueryCollection extends Base.IBaseResults<NavigationNodeOData>, NavigationNodeCollectionMethods {
	done?: (resolve: (value?: Array<NavigationNodeOData>) => void) => void;
}

/*********************************************
* INavigationNodeQuery
**********************************************/
export interface INavigationNodeQuery extends NavigationNodeOData, NavigationNodeMethods {

}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode extends Base.IBaseResult, NavigationNodeProps, NavigationNodeCollections, NavigationNodeMethods {

}

/*********************************************
* NavigationNodeProps
**********************************************/
export interface NavigationNodeProps {
	AudienceIds?: { results: Array<any> };
	Id?: number;
	IsDocLib?: boolean;
	IsExternal?: boolean;
	IsVisible?: boolean;
	ListTemplateType?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* NavigationNodePropMethods
**********************************************/
export interface NavigationNodePropMethods {

}

/*********************************************
* NavigationNodeCollections
**********************************************/
export interface NavigationNodeCollections extends NavigationNodePropMethods {
	Children(): Base.IBaseCollection<SP.NavigationNode, SP.NavigationNodeOData, Base.IBaseExecution & SP.NavigationNodeCollectionMethods> & Base.IBaseExecution & SP.NavigationNodeCollectionMethods;
	Children(id: string | number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
}

/*********************************************
* NavigationNodeCollectionMethods
**********************************************/
export interface NavigationNodeCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
	getByIndex(index?: number): Base.IBaseQuery<SP.NavigationNode, SP.NavigationNodeOData> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
	moveAfter(nodeId?: number, previousNodeId?: number): Base.IBaseExecution<any>;
}

/*********************************************
* NavigationNodeOData
**********************************************/
export interface NavigationNodeOData extends Base.IBaseResult, NavigationNodeProps, NavigationNodeMethods {
	Children: Base.IBaseResults<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
}

/*********************************************
* NavigationNodeMethods
**********************************************/
export interface NavigationNodeMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* WebInformation
**********************************************/
export interface WebInformation {
	Configuration?: number;
	Created?: any;
	Description?: string;
	Id?: any;
	Language?: number;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	ServerRelativeUrl?: string;
	Title?: string;
	WebTemplate?: string;
	WebTemplateId?: number;
}

/*********************************************
* WebInformationCollections
**********************************************/
export interface WebInformationCollections extends WebInformationCollectionMethods {

}

/*********************************************
* WebInformationCollectionMethods
**********************************************/
export interface WebInformationCollectionMethods {
	add(parameters?: SP.WebInfoCreationInformation): Base.IBaseExecution<SP.WebInformation>;
	getById(id?: any): Base.IBaseQuery<SP.WebInformation> & SP.WebInformationCollections;
}

/*********************************************
* IPushNotificationSubscriber
**********************************************/
export interface IPushNotificationSubscriber extends PushNotificationSubscriberCollections, PushNotificationSubscriberMethods, Base.IBaseQuery<PushNotificationSubscriber, IPushNotificationSubscriberQuery> {

}

/*********************************************
* IPushNotificationSubscriberCollection
**********************************************/
export interface IPushNotificationSubscriberCollection extends Base.IBaseResults<PushNotificationSubscriber>, PushNotificationSubscriberCollectionMethods {
	done?: (resolve: (value?: Array<PushNotificationSubscriber>) => void) => void;
}

/*********************************************
* IPushNotificationSubscriberQueryCollection
**********************************************/
export interface IPushNotificationSubscriberQueryCollection extends Base.IBaseResults<PushNotificationSubscriberOData>, PushNotificationSubscriberCollectionMethods {
	done?: (resolve: (value?: Array<PushNotificationSubscriberOData>) => void) => void;
}

/*********************************************
* IPushNotificationSubscriberQuery
**********************************************/
export interface IPushNotificationSubscriberQuery extends PushNotificationSubscriberOData, PushNotificationSubscriberMethods {

}

/*********************************************
* PushNotificationSubscriber
**********************************************/
export interface PushNotificationSubscriber extends Base.IBaseResult, PushNotificationSubscriberProps, PushNotificationSubscriberCollections, PushNotificationSubscriberMethods {

}

/*********************************************
* PushNotificationSubscriberProps
**********************************************/
export interface PushNotificationSubscriberProps {
	CustomArgs?: string;
	DeviceAppInstanceId?: any;
	LastModifiedTimeStamp?: any;
	RegistrationTimeStamp?: any;
	ServiceToken?: string;
	SubscriberType?: string;
}

/*********************************************
* PushNotificationSubscriberPropMethods
**********************************************/
export interface PushNotificationSubscriberPropMethods {
	User(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* PushNotificationSubscriberCollections
**********************************************/
export interface PushNotificationSubscriberCollections extends PushNotificationSubscriberPropMethods {

}

/*********************************************
* PushNotificationSubscriberCollectionMethods
**********************************************/
export interface PushNotificationSubscriberCollectionMethods {
	getByStoreId(id?: string): Base.IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberOData> & SP.PushNotificationSubscriberCollections & SP.PushNotificationSubscriberMethods;
}

/*********************************************
* PushNotificationSubscriberOData
**********************************************/
export interface PushNotificationSubscriberOData extends Base.IBaseResult, PushNotificationSubscriberProps, PushNotificationSubscriberMethods {
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* PushNotificationSubscriberMethods
**********************************************/
export interface PushNotificationSubscriberMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IRecycleBinItem
**********************************************/
export interface IRecycleBinItem extends RecycleBinItemCollections, RecycleBinItemMethods, Base.IBaseQuery<RecycleBinItem, IRecycleBinItemQuery> {

}

/*********************************************
* IRecycleBinItemCollection
**********************************************/
export interface IRecycleBinItemCollection extends Base.IBaseResults<RecycleBinItem>, RecycleBinItemCollectionMethods {
	done?: (resolve: (value?: Array<RecycleBinItem>) => void) => void;
}

/*********************************************
* IRecycleBinItemQueryCollection
**********************************************/
export interface IRecycleBinItemQueryCollection extends Base.IBaseResults<RecycleBinItemOData>, RecycleBinItemCollectionMethods {
	done?: (resolve: (value?: Array<RecycleBinItemOData>) => void) => void;
}

/*********************************************
* IRecycleBinItemQuery
**********************************************/
export interface IRecycleBinItemQuery extends RecycleBinItemOData, RecycleBinItemMethods {

}

/*********************************************
* RecycleBinItem
**********************************************/
export interface RecycleBinItem extends Base.IBaseResult, RecycleBinItemProps, RecycleBinItemCollections, RecycleBinItemMethods {

}

/*********************************************
* RecycleBinItemProps
**********************************************/
export interface RecycleBinItemProps {
	AuthorEmail?: string;
	AuthorName?: string;
	DeletedByEmail?: string;
	DeletedByName?: string;
	DeletedDate?: any;
	DeletedDateLocalFormatted?: string;
	DirName?: string;
	DirNamePath?: SP.ResourcePath;
	Id?: any;
	ItemState?: number;
	ItemType?: number;
	LeafName?: string;
	LeafNamePath?: SP.ResourcePath;
	Size?: number;
	Title?: string;
}

/*********************************************
* RecycleBinItemPropMethods
**********************************************/
export interface RecycleBinItemPropMethods {
	Author(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	DeletedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* RecycleBinItemCollections
**********************************************/
export interface RecycleBinItemCollections extends RecycleBinItemPropMethods {

}

/*********************************************
* RecycleBinItemCollectionMethods
**********************************************/
export interface RecycleBinItemCollectionMethods {
	deleteAll(): Base.IBaseExecution<any>;
	deleteAllSecondStageItems(): Base.IBaseExecution<any>;
	deleteByIds(ids?: Array<string>): Base.IBaseExecution<any>;
	getById(id?: any): Base.IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemOData> & SP.RecycleBinItemCollections & SP.RecycleBinItemMethods;
	moveAllToSecondStage(): Base.IBaseExecution<any>;
	moveToSecondStageByIds(ids?: Array<string>): Base.IBaseExecution<any>;
	restoreAll(): Base.IBaseExecution<any>;
	restoreByIds(ids?: Array<string>): Base.IBaseExecution<any>;
}

/*********************************************
* RecycleBinItemOData
**********************************************/
export interface RecycleBinItemOData extends Base.IBaseResult, RecycleBinItemProps, RecycleBinItemMethods {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	DeletedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* RecycleBinItemMethods
**********************************************/
export interface RecycleBinItemMethods {
	delete(): Base.IBaseExecution<any>;
	moveToSecondStage(): Base.IBaseExecution<any>;
	restore(): Base.IBaseExecution<any>;
}

/*********************************************
* IRegionalSettings
**********************************************/
export interface IRegionalSettings extends RegionalSettingsCollections, RegionalSettingsMethods, Base.IBaseQuery<RegionalSettings, IRegionalSettingsQuery> {

}

/*********************************************
* IRegionalSettingsCollection
**********************************************/
export interface IRegionalSettingsCollection extends Base.IBaseResults<RegionalSettings> {
	done?: (resolve: (value?: Array<RegionalSettings>) => void) => void;
}

/*********************************************
* IRegionalSettingsQueryCollection
**********************************************/
export interface IRegionalSettingsQueryCollection extends Base.IBaseResults<RegionalSettingsOData> {
	done?: (resolve: (value?: Array<RegionalSettingsOData>) => void) => void;
}

/*********************************************
* IRegionalSettingsQuery
**********************************************/
export interface IRegionalSettingsQuery extends RegionalSettingsOData, RegionalSettingsMethods {

}

/*********************************************
* RegionalSettings
**********************************************/
export interface RegionalSettings extends Base.IBaseResult, RegionalSettingsProps, RegionalSettingsCollections, RegionalSettingsMethods {

}

/*********************************************
* RegionalSettingsProps
**********************************************/
export interface RegionalSettingsProps {
	AdjustHijriDays?: number;
	AlternateCalendarType?: number;
	AM?: string;
	CalendarType?: number;
	Collation?: number;
	CollationLCID?: number;
	DateFormat?: number;
	DateSeparator?: string;
	DecimalSeparator?: string;
	DigitGrouping?: string;
	FirstDayOfWeek?: number;
	FirstWeekOfYear?: number;
	IsEastAsia?: boolean;
	IsRightToLeft?: boolean;
	IsUIRightToLeft?: boolean;
	ListSeparator?: string;
	LocaleId?: number;
	NegativeSign?: string;
	NegNumberMode?: number;
	PM?: string;
	PositiveSign?: string;
	ShowWeeks?: boolean;
	ThousandSeparator?: string;
	Time24?: boolean;
	TimeMarkerPosition?: number;
	TimeSeparator?: string;
	WorkDayEndHour?: number;
	WorkDays?: number;
	WorkDayStartHour?: number;
}

/*********************************************
* RegionalSettingsPropMethods
**********************************************/
export interface RegionalSettingsPropMethods {
	InstalledLanguages(): Base.IBaseExecution<SP.LanguageCollection> & SP.LanguageCollectionCollections & SP.LanguageCollectionMethods;
	TimeZone(): Base.IBaseExecution<SP.TimeZone> & SP.TimeZoneCollections & SP.TimeZoneMethods;
}

/*********************************************
* RegionalSettingsCollections
**********************************************/
export interface RegionalSettingsCollections extends RegionalSettingsPropMethods {
	TimeZones(): Base.IBaseCollection<SP.TimeZone> & SP.TimeZoneCollectionMethods;
	TimeZones(id: string | number): Base.IBaseQuery<SP.TimeZone> & SP.TimeZoneCollections & SP.TimeZoneMethods;
}

/*********************************************
* RegionalSettingsOData
**********************************************/
export interface RegionalSettingsOData extends Base.IBaseResult, RegionalSettingsProps, RegionalSettingsMethods {
	InstalledLanguages: SP.LanguageCollection & SP.LanguageCollectionCollections;
	TimeZone: SP.TimeZone & SP.TimeZoneCollections & SP.TimeZoneCollectionMethods;
	TimeZones: Base.IBaseResults<SP.TimeZone> & SP.TimeZoneCollectionMethods;
}

/*********************************************
* RegionalSettingsMethods
**********************************************/
export interface RegionalSettingsMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ILanguageCollection
**********************************************/
export interface ILanguageCollection extends LanguageCollectionCollections, LanguageCollectionMethods, Base.IBaseQuery<LanguageCollection, ILanguageCollectionQuery> {

}

/*********************************************
* ILanguageCollectionCollection
**********************************************/
export interface ILanguageCollectionCollection extends Base.IBaseResults<LanguageCollection> {
	done?: (resolve: (value?: Array<LanguageCollection>) => void) => void;
}

/*********************************************
* ILanguageCollectionQueryCollection
**********************************************/
export interface ILanguageCollectionQueryCollection extends Base.IBaseResults<LanguageCollectionOData> {
	done?: (resolve: (value?: Array<LanguageCollectionOData>) => void) => void;
}

/*********************************************
* ILanguageCollectionQuery
**********************************************/
export interface ILanguageCollectionQuery extends LanguageCollectionOData, LanguageCollectionMethods {

}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection extends Base.IBaseResult, LanguageCollectionProps, LanguageCollectionCollections, LanguageCollectionMethods {

}

/*********************************************
* LanguageCollectionProps
**********************************************/
export interface LanguageCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<SP.Language> };
}

/*********************************************
* LanguageCollectionPropMethods
**********************************************/
export interface LanguageCollectionPropMethods {

}

/*********************************************
* LanguageCollectionCollections
**********************************************/
export interface LanguageCollectionCollections extends LanguageCollectionPropMethods {

}

/*********************************************
* LanguageCollectionOData
**********************************************/
export interface LanguageCollectionOData extends Base.IBaseResult, LanguageCollectionProps, LanguageCollectionMethods {

}

/*********************************************
* LanguageCollectionMethods
**********************************************/
export interface LanguageCollectionMethods {
	getById(id?: number): Base.IBaseExecution<SP.Language>;
}

/*********************************************
* ITimeZone
**********************************************/
export interface ITimeZone extends TimeZoneCollections, TimeZoneMethods, Base.IBaseQuery<TimeZone, ITimeZoneQuery> {

}

/*********************************************
* ITimeZoneCollection
**********************************************/
export interface ITimeZoneCollection extends Base.IBaseResults<TimeZone>, TimeZoneCollectionMethods {
	done?: (resolve: (value?: Array<TimeZone>) => void) => void;
}

/*********************************************
* ITimeZoneQueryCollection
**********************************************/
export interface ITimeZoneQueryCollection extends Base.IBaseResults<TimeZoneOData>, TimeZoneCollectionMethods {
	done?: (resolve: (value?: Array<TimeZoneOData>) => void) => void;
}

/*********************************************
* ITimeZoneQuery
**********************************************/
export interface ITimeZoneQuery extends TimeZoneOData, TimeZoneMethods {

}

/*********************************************
* TimeZone
**********************************************/
export interface TimeZone extends Base.IBaseResult, TimeZoneProps, TimeZoneCollections, TimeZoneMethods {

}

/*********************************************
* TimeZoneProps
**********************************************/
export interface TimeZoneProps {
	Description?: string;
	Id?: number;
	Information?: SP.TimeZoneInformation;
}

/*********************************************
* TimeZonePropMethods
**********************************************/
export interface TimeZonePropMethods {

}

/*********************************************
* TimeZoneCollections
**********************************************/
export interface TimeZoneCollections extends TimeZonePropMethods {

}

/*********************************************
* TimeZoneCollectionMethods
**********************************************/
export interface TimeZoneCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.TimeZone> & SP.TimeZoneCollections & SP.TimeZoneMethods;
}

/*********************************************
* TimeZoneOData
**********************************************/
export interface TimeZoneOData extends Base.IBaseResult, TimeZoneProps, TimeZoneMethods {

}

/*********************************************
* TimeZoneMethods
**********************************************/
export interface TimeZoneMethods {
	localTimeToUTC(date?: any): Base.IBaseExecution<any>;
	uTCToLocalTime(date?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IThemeInfo
**********************************************/
export interface IThemeInfo extends ThemeInfoCollections, ThemeInfoMethods, Base.IBaseQuery<ThemeInfo, IThemeInfoQuery> {

}

/*********************************************
* IThemeInfoCollection
**********************************************/
export interface IThemeInfoCollection extends Base.IBaseResults<ThemeInfo> {
	done?: (resolve: (value?: Array<ThemeInfo>) => void) => void;
}

/*********************************************
* IThemeInfoQueryCollection
**********************************************/
export interface IThemeInfoQueryCollection extends Base.IBaseResults<ThemeInfoOData> {
	done?: (resolve: (value?: Array<ThemeInfoOData>) => void) => void;
}

/*********************************************
* IThemeInfoQuery
**********************************************/
export interface IThemeInfoQuery extends ThemeInfoOData, ThemeInfoMethods {

}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo extends Base.IBaseResult, ThemeInfoProps, ThemeInfoCollections, ThemeInfoMethods {

}

/*********************************************
* ThemeInfoProps
**********************************************/
export interface ThemeInfoProps {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoPropMethods
**********************************************/
export interface ThemeInfoPropMethods {

}

/*********************************************
* ThemeInfoCollections
**********************************************/
export interface ThemeInfoCollections extends ThemeInfoPropMethods {

}

/*********************************************
* ThemeInfoOData
**********************************************/
export interface ThemeInfoOData extends Base.IBaseResult, ThemeInfoProps, ThemeInfoMethods {

}

/*********************************************
* ThemeInfoMethods
**********************************************/
export interface ThemeInfoMethods {
	getThemeFontByName(name?: string, lcid?: number): Base.IBaseExecution<string>;
	getThemeShadeByName(name?: string): Base.IBaseExecution<string>;
}

/*********************************************
* IUserCustomAction
**********************************************/
export interface IUserCustomAction extends UserCustomActionCollections, UserCustomActionMethods, Base.IBaseQuery<UserCustomAction, IUserCustomActionQuery> {

}

/*********************************************
* IUserCustomActionCollection
**********************************************/
export interface IUserCustomActionCollection extends Base.IBaseResults<UserCustomAction>, UserCustomActionCollectionMethods {
	done?: (resolve: (value?: Array<UserCustomAction>) => void) => void;
}

/*********************************************
* IUserCustomActionQueryCollection
**********************************************/
export interface IUserCustomActionQueryCollection extends Base.IBaseResults<UserCustomActionOData>, UserCustomActionCollectionMethods {
	done?: (resolve: (value?: Array<UserCustomActionOData>) => void) => void;
}

/*********************************************
* IUserCustomActionQuery
**********************************************/
export interface IUserCustomActionQuery extends UserCustomActionOData, UserCustomActionMethods {

}

/*********************************************
* UserCustomAction
**********************************************/
export interface UserCustomAction extends Base.IBaseResult, UserCustomActionProps, UserCustomActionCollections, UserCustomActionMethods {

}

/*********************************************
* UserCustomActionProps
**********************************************/
export interface UserCustomActionProps {
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CommandUIExtension?: string;
	Description?: string;
	Group?: string;
	HostProperties?: string;
	Id?: any;
	ImageUrl?: string;
	Location?: string;
	Name?: string;
	RegistrationId?: string;
	RegistrationType?: number;
	Rights?: SP.BasePermissions;
	Scope?: number;
	ScriptBlock?: string;
	ScriptSrc?: string;
	Sequence?: number;
	Title?: string;
	Url?: string;
	VersionOfUserCustomAction?: string;
}

/*********************************************
* UserCustomActionPropMethods
**********************************************/
export interface UserCustomActionPropMethods {
	DescriptionResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	TitleResource(): Base.IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* UserCustomActionCollections
**********************************************/
export interface UserCustomActionCollections extends UserCustomActionPropMethods {

}

/*********************************************
* UserCustomActionCollectionMethods
**********************************************/
export interface UserCustomActionCollectionMethods {
	clear(): Base.IBaseExecution<any>;
	getById(id?: any): Base.IBaseQuery<SP.UserCustomAction, SP.UserCustomActionOData> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
	add(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* UserCustomActionOData
**********************************************/
export interface UserCustomActionOData extends Base.IBaseResult, UserCustomActionProps, UserCustomActionMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
}

/*********************************************
* UserCustomActionMethods
**********************************************/
export interface UserCustomActionMethods {
	delete(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IListItemVersion
**********************************************/
export interface IListItemVersion extends ListItemVersionCollections, ListItemVersionMethods, Base.IBaseQuery<ListItemVersion, IListItemVersionQuery> {

}

/*********************************************
* IListItemVersionCollection
**********************************************/
export interface IListItemVersionCollection extends Base.IBaseResults<ListItemVersion>, ListItemVersionCollectionMethods {
	done?: (resolve: (value?: Array<ListItemVersion>) => void) => void;
}

/*********************************************
* IListItemVersionQueryCollection
**********************************************/
export interface IListItemVersionQueryCollection extends Base.IBaseResults<ListItemVersionOData>, ListItemVersionCollectionMethods {
	done?: (resolve: (value?: Array<ListItemVersionOData>) => void) => void;
}

/*********************************************
* IListItemVersionQuery
**********************************************/
export interface IListItemVersionQuery extends ListItemVersionOData, ListItemVersionMethods {

}

/*********************************************
* ListItemVersion
**********************************************/
export interface ListItemVersion extends Base.IBaseResult, ListItemVersionProps, ListItemVersionCollections, ListItemVersionMethods {

}

/*********************************************
* ListItemVersionProps
**********************************************/
export interface ListItemVersionProps {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
}

/*********************************************
* ListItemVersionPropMethods
**********************************************/
export interface ListItemVersionPropMethods {
	CreatedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	FileVersion(): Base.IBaseQuery<SP.FileVersion, SP.FileVersionOData> & SP.FileVersionCollections & SP.FileVersionMethods;
}

/*********************************************
* ListItemVersionCollections
**********************************************/
export interface ListItemVersionCollections extends ListItemVersionPropMethods {
	Fields(): Base.IBaseCollection<SP.Field, SP.FieldOData, Base.IBaseExecution & SP.FieldCollectionMethods> & Base.IBaseExecution & SP.FieldCollectionMethods;
	Fields(id: string | number): Base.IBaseQuery<SP.Field, SP.FieldOData> & SP.FieldCollections & SP.FieldMethods;
}

/*********************************************
* ListItemVersionCollectionMethods
**********************************************/
export interface ListItemVersionCollectionMethods {
	getById(versionId?: number): Base.IBaseQuery<SP.ListItemVersion, SP.ListItemVersionOData> & SP.ListItemVersionCollections & SP.ListItemVersionMethods;
}

/*********************************************
* ListItemVersionOData
**********************************************/
export interface ListItemVersionOData extends Base.IBaseResult, ListItemVersionProps, ListItemVersionMethods {
	CreatedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Fields: Base.IBaseResults<SP.Field> & SP.FieldCollectionMethods;
	FileVersion: SP.FileVersion & SP.FileVersionCollections & SP.FileVersionCollectionMethods;
}

/*********************************************
* ListItemVersionMethods
**********************************************/
export interface ListItemVersionMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ITranslationStatusCollection
**********************************************/
export interface ITranslationStatusCollection extends TranslationStatusCollectionCollections, TranslationStatusCollectionMethods, Base.IBaseQuery<TranslationStatusCollection, ITranslationStatusCollectionQuery> {

}

/*********************************************
* ITranslationStatusCollectionCollection
**********************************************/
export interface ITranslationStatusCollectionCollection extends Base.IBaseResults<TranslationStatusCollection> {
	done?: (resolve: (value?: Array<TranslationStatusCollection>) => void) => void;
}

/*********************************************
* ITranslationStatusCollectionQueryCollection
**********************************************/
export interface ITranslationStatusCollectionQueryCollection extends Base.IBaseResults<TranslationStatusCollectionOData> {
	done?: (resolve: (value?: Array<TranslationStatusCollectionOData>) => void) => void;
}

/*********************************************
* ITranslationStatusCollectionQuery
**********************************************/
export interface ITranslationStatusCollectionQuery extends TranslationStatusCollectionOData, TranslationStatusCollectionMethods {

}

/*********************************************
* TranslationStatusCollection
**********************************************/
export interface TranslationStatusCollection extends Base.IBaseResult, TranslationStatusCollectionProps, TranslationStatusCollectionCollections, TranslationStatusCollectionMethods {

}

/*********************************************
* TranslationStatusCollectionProps
**********************************************/
export interface TranslationStatusCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	UntranslatedLanguages?: { results: Array<string> };
	Items?: { results: Array<SP.TranslationStatus> };
}

/*********************************************
* TranslationStatusCollectionPropMethods
**********************************************/
export interface TranslationStatusCollectionPropMethods {

}

/*********************************************
* TranslationStatusCollectionCollections
**********************************************/
export interface TranslationStatusCollectionCollections extends TranslationStatusCollectionPropMethods {

}

/*********************************************
* TranslationStatusCollectionOData
**********************************************/
export interface TranslationStatusCollectionOData extends Base.IBaseResult, TranslationStatusCollectionProps, TranslationStatusCollectionMethods {

}

/*********************************************
* TranslationStatusCollectionMethods
**********************************************/
export interface TranslationStatusCollectionMethods {
	create(request?: SP.TranslationStatusCreationRequest): Base.IBaseExecution<SP.TranslationStatusCollection>;
	updateTranslationLanguages(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPAppLicenseManager
**********************************************/
export interface ISPAppLicenseManager extends SPAppLicenseManagerCollections, SPAppLicenseManagerMethods, Base.IBaseQuery<SPAppLicenseManager, ISPAppLicenseManagerQuery> {

}

/*********************************************
* ISPAppLicenseManagerCollection
**********************************************/
export interface ISPAppLicenseManagerCollection extends Base.IBaseResults<SPAppLicenseManager> {
	done?: (resolve: (value?: Array<SPAppLicenseManager>) => void) => void;
}

/*********************************************
* ISPAppLicenseManagerQueryCollection
**********************************************/
export interface ISPAppLicenseManagerQueryCollection extends Base.IBaseResults<SPAppLicenseManagerOData> {
	done?: (resolve: (value?: Array<SPAppLicenseManagerOData>) => void) => void;
}

/*********************************************
* ISPAppLicenseManagerQuery
**********************************************/
export interface ISPAppLicenseManagerQuery extends SPAppLicenseManagerOData, SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager extends Base.IBaseResult, SPAppLicenseManagerProps, SPAppLicenseManagerCollections, SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManagerProps
**********************************************/
export interface SPAppLicenseManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerPropMethods
**********************************************/
export interface SPAppLicenseManagerPropMethods {

}

/*********************************************
* SPAppLicenseManagerCollections
**********************************************/
export interface SPAppLicenseManagerCollections extends SPAppLicenseManagerPropMethods {

}

/*********************************************
* SPAppLicenseManagerOData
**********************************************/
export interface SPAppLicenseManagerOData extends Base.IBaseResult, SPAppLicenseManagerProps, SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManagerMethods
**********************************************/
export interface SPAppLicenseManagerMethods {
	checkLicense(productId?: any): Base.IBaseExecution<SP.AppLicenseCollection>;
}

/*********************************************
* SolutionExporter
**********************************************/
export interface SolutionExporter {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SolutionExporterCollections
**********************************************/
export interface SolutionExporterCollections {

}

/*********************************************
* UserSolution
**********************************************/
export interface UserSolution {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSolutionCollections
**********************************************/
export interface UserSolutionCollections extends UserSolutionCollectionMethods {

}

/*********************************************
* UserSolutionCollectionMethods
**********************************************/
export interface UserSolutionCollectionMethods {
	add(solutionGalleryItemId?: number): Base.IBaseExecution<SP.UserSolution>;
}

/*********************************************
* ISPHSite
**********************************************/
export interface ISPHSite extends SPHSiteCollections, SPHSiteMethods, Base.IBaseQuery<SPHSite, ISPHSiteQuery> {

}

/*********************************************
* ISPHSiteCollection
**********************************************/
export interface ISPHSiteCollection extends Base.IBaseResults<SPHSite> {
	done?: (resolve: (value?: Array<SPHSite>) => void) => void;
}

/*********************************************
* ISPHSiteQueryCollection
**********************************************/
export interface ISPHSiteQueryCollection extends Base.IBaseResults<SPHSiteOData> {
	done?: (resolve: (value?: Array<SPHSiteOData>) => void) => void;
}

/*********************************************
* ISPHSiteQuery
**********************************************/
export interface ISPHSiteQuery extends SPHSiteOData, SPHSiteMethods {

}

/*********************************************
* SPHSite
**********************************************/
export interface SPHSite extends Base.IBaseResult, SPHSiteProps, SPHSiteCollections, SPHSiteMethods {

}

/*********************************************
* SPHSiteProps
**********************************************/
export interface SPHSiteProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHSitePropMethods
**********************************************/
export interface SPHSitePropMethods {

}

/*********************************************
* SPHSiteCollections
**********************************************/
export interface SPHSiteCollections extends SPHSitePropMethods {

}

/*********************************************
* SPHSiteOData
**********************************************/
export interface SPHSiteOData extends Base.IBaseResult, SPHSiteProps, SPHSiteMethods {

}

/*********************************************
* SPHSiteMethods
**********************************************/
export interface SPHSiteMethods {
	details(): Base.IBaseExecution<SP.SPHSiteReference>;
}

/*********************************************
* IOrganizationNews
**********************************************/
export interface IOrganizationNews extends OrganizationNewsCollections, OrganizationNewsMethods, Base.IBaseQuery<OrganizationNews, IOrganizationNewsQuery> {

}

/*********************************************
* IOrganizationNewsCollection
**********************************************/
export interface IOrganizationNewsCollection extends Base.IBaseResults<OrganizationNews> {
	done?: (resolve: (value?: Array<OrganizationNews>) => void) => void;
}

/*********************************************
* IOrganizationNewsQueryCollection
**********************************************/
export interface IOrganizationNewsQueryCollection extends Base.IBaseResults<OrganizationNewsOData> {
	done?: (resolve: (value?: Array<OrganizationNewsOData>) => void) => void;
}

/*********************************************
* IOrganizationNewsQuery
**********************************************/
export interface IOrganizationNewsQuery extends OrganizationNewsOData, OrganizationNewsMethods {

}

/*********************************************
* OrganizationNews
**********************************************/
export interface OrganizationNews extends Base.IBaseResult, OrganizationNewsProps, OrganizationNewsCollections, OrganizationNewsMethods {

}

/*********************************************
* OrganizationNewsProps
**********************************************/
export interface OrganizationNewsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OrganizationNewsPropMethods
**********************************************/
export interface OrganizationNewsPropMethods {

}

/*********************************************
* OrganizationNewsCollections
**********************************************/
export interface OrganizationNewsCollections extends OrganizationNewsPropMethods {

}

/*********************************************
* OrganizationNewsOData
**********************************************/
export interface OrganizationNewsOData extends Base.IBaseResult, OrganizationNewsProps, OrganizationNewsMethods {

}

/*********************************************
* OrganizationNewsMethods
**********************************************/
export interface OrganizationNewsMethods {
	sitesReference(): Base.IBaseCollection<SP.OrganizationNewsSiteReference>;
}

/*********************************************
* IKnowledgeHub
**********************************************/
export interface IKnowledgeHub extends KnowledgeHubCollections, KnowledgeHubMethods, Base.IBaseQuery<KnowledgeHub, IKnowledgeHubQuery> {

}

/*********************************************
* IKnowledgeHubCollection
**********************************************/
export interface IKnowledgeHubCollection extends Base.IBaseResults<KnowledgeHub> {
	done?: (resolve: (value?: Array<KnowledgeHub>) => void) => void;
}

/*********************************************
* IKnowledgeHubQueryCollection
**********************************************/
export interface IKnowledgeHubQueryCollection extends Base.IBaseResults<KnowledgeHubOData> {
	done?: (resolve: (value?: Array<KnowledgeHubOData>) => void) => void;
}

/*********************************************
* IKnowledgeHubQuery
**********************************************/
export interface IKnowledgeHubQuery extends KnowledgeHubOData, KnowledgeHubMethods {

}

/*********************************************
* KnowledgeHub
**********************************************/
export interface KnowledgeHub extends Base.IBaseResult, KnowledgeHubProps, KnowledgeHubCollections, KnowledgeHubMethods {

}

/*********************************************
* KnowledgeHubProps
**********************************************/
export interface KnowledgeHubProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* KnowledgeHubPropMethods
**********************************************/
export interface KnowledgeHubPropMethods {

}

/*********************************************
* KnowledgeHubCollections
**********************************************/
export interface KnowledgeHubCollections extends KnowledgeHubPropMethods {

}

/*********************************************
* KnowledgeHubOData
**********************************************/
export interface KnowledgeHubOData extends Base.IBaseResult, KnowledgeHubProps, KnowledgeHubMethods {

}

/*********************************************
* KnowledgeHubMethods
**********************************************/
export interface KnowledgeHubMethods {
	siteReference(): Base.IBaseExecution<SP.KnowledgeHubSiteReference>;
}

/*********************************************
* AppCatalog
**********************************************/
export interface AppCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCatalogCollections
**********************************************/
export interface AppCatalogCollections {

}

/*********************************************
* AppInstanceErrorDetails
**********************************************/
export interface AppInstanceErrorDetails {
	CorrelationId?: any;
	ErrorDetail?: string;
	ErrorType?: number;
	ErrorTypeName?: string;
	ExceptionMessage?: string;
	Source?: number;
	SourceName?: string;
}

/*********************************************
* AppInstanceErrorDetailsCollections
**********************************************/
export interface AppInstanceErrorDetailsCollections {

}

/*********************************************
* IAppInstance
**********************************************/
export interface IAppInstance extends AppInstanceCollections, AppInstanceMethods, Base.IBaseQuery<AppInstance, IAppInstanceQuery> {

}

/*********************************************
* IAppInstanceCollection
**********************************************/
export interface IAppInstanceCollection extends Base.IBaseResults<AppInstance> {
	done?: (resolve: (value?: Array<AppInstance>) => void) => void;
}

/*********************************************
* IAppInstanceQueryCollection
**********************************************/
export interface IAppInstanceQueryCollection extends Base.IBaseResults<AppInstanceOData> {
	done?: (resolve: (value?: Array<AppInstanceOData>) => void) => void;
}

/*********************************************
* IAppInstanceQuery
**********************************************/
export interface IAppInstanceQuery extends AppInstanceOData, AppInstanceMethods {

}

/*********************************************
* AppInstance
**********************************************/
export interface AppInstance extends Base.IBaseResult, AppInstanceProps, AppInstanceCollections, AppInstanceMethods {

}

/*********************************************
* AppInstanceProps
**********************************************/
export interface AppInstanceProps {
	AppPrincipalId?: string;
	AppWebFullUrl?: string;
	Id?: any;
	ImageFallbackUrl?: string;
	ImageUrl?: string;
	InError?: boolean;
	StartPage?: string;
	PackageFingerprint?: any;
	ProductId?: any;
	RemoteAppUrl?: string;
	SettingsPageUrl?: string;
	SiteId?: any;
	Status?: number;
	Title?: string;
	WebId?: any;
}

/*********************************************
* AppInstancePropMethods
**********************************************/
export interface AppInstancePropMethods {

}

/*********************************************
* AppInstanceCollections
**********************************************/
export interface AppInstanceCollections extends AppInstancePropMethods {

}

/*********************************************
* AppInstanceOData
**********************************************/
export interface AppInstanceOData extends Base.IBaseResult, AppInstanceProps, AppInstanceMethods {

}

/*********************************************
* AppInstanceMethods
**********************************************/
export interface AppInstanceMethods {
	cancelAllJobs(): Base.IBaseExecution<boolean>;
	getAppDatabaseConnectionString(): Base.IBaseExecution<string>;
	getErrorDetails(): Base.IBaseCollection<SP.AppInstanceErrorDetails>;
	getPreviousAppVersion(): Base.IBaseExecution<SP.App>;
	install(): Base.IBaseExecution<any>;
	recycle(): Base.IBaseExecution<any>;
	restore(): Base.IBaseExecution<any>;
	retryAllJobs(): Base.IBaseExecution<any>;
	uninstall(): Base.IBaseExecution<any>;
	upgrade(appPackageStream?: any): Base.IBaseExecution<any>;
}

/*********************************************
* App
**********************************************/
export interface App {
	AssetId?: string;
	ContentMarket?: string;
	VersionString?: string;
}

/*********************************************
* AppCollections
**********************************************/
export interface AppCollections {

}

/*********************************************
* AlternateUrl
**********************************************/
export interface AlternateUrl {
	Uri?: string;
	UrlZone?: number;
}

/*********************************************
* AlternateUrlCollections
**********************************************/
export interface AlternateUrlCollections {

}

/*********************************************
* IObjectSharingSettings
**********************************************/
export interface IObjectSharingSettings extends ObjectSharingSettingsCollections, ObjectSharingSettingsMethods, Base.IBaseQuery<ObjectSharingSettings, IObjectSharingSettingsQuery> {

}

/*********************************************
* IObjectSharingSettingsCollection
**********************************************/
export interface IObjectSharingSettingsCollection extends Base.IBaseResults<ObjectSharingSettings> {
	done?: (resolve: (value?: Array<ObjectSharingSettings>) => void) => void;
}

/*********************************************
* IObjectSharingSettingsQueryCollection
**********************************************/
export interface IObjectSharingSettingsQueryCollection extends Base.IBaseResults<ObjectSharingSettingsOData> {
	done?: (resolve: (value?: Array<ObjectSharingSettingsOData>) => void) => void;
}

/*********************************************
* IObjectSharingSettingsQuery
**********************************************/
export interface IObjectSharingSettingsQuery extends ObjectSharingSettingsOData, ObjectSharingSettingsMethods {

}

/*********************************************
* ObjectSharingSettings
**********************************************/
export interface ObjectSharingSettings extends Base.IBaseResult, ObjectSharingSettingsProps, ObjectSharingSettingsCollections, ObjectSharingSettingsMethods {

}

/*********************************************
* ObjectSharingSettingsProps
**********************************************/
export interface ObjectSharingSettingsProps {
	AccessRequestMode?: boolean;
	BlockPeoplePickerAndSharing?: boolean;
	CanCurrentUserManageOrganizationReadonlyLink?: boolean;
	CanCurrentUserManageOrganizationReadWriteLink?: boolean;
	CanCurrentUserManageReadonlyLink?: boolean;
	CanCurrentUserManageReadWriteLink?: boolean;
	CanCurrentUserRetrieveOrganizationReadonlyLink?: boolean;
	CanCurrentUserRetrieveOrganizationReadWriteLink?: boolean;
	CanCurrentUserRetrieveReadonlyLink?: boolean;
	CanCurrentUserRetrieveReadWriteLink?: boolean;
	CanCurrentUserShareExternally?: boolean;
	CanCurrentUserShareInternally?: boolean;
	CanSendEmail?: boolean;
	CanSendLink?: boolean;
	CanShareFolder?: boolean;
	DefaultShareLinkPermission?: number;
	DefaultShareLinkType?: number;
	GroupsList?: { results: Array<SP.KeyValue> };
	HasEditRole?: boolean;
	HasReadRole?: boolean;
	InheritingWebLink?: string;
	IsGuestUser?: boolean;
	IsPictureLibrary?: boolean;
	IsUserSiteAdmin?: boolean;
	ItemId?: string;
	ItemName?: string;
	ItemUrl?: string;
	ListId?: any;
	PermissionsOnlyMode?: boolean;
	RequiredAnonymousLinkExpirationInDays?: number;
	Roles?: { results: Array<SP.KeyValue> };
	ShareByEmailEnabled?: boolean;
	ShowExternalSharingWarning?: boolean;
	SimplifiedRoles?: { results: Array<SP.KeyValue> };
	SupportsAclPropagation?: boolean;
	WebUrl?: string;
}

/*********************************************
* ObjectSharingSettingsPropMethods
**********************************************/
export interface ObjectSharingSettingsPropMethods {
	ObjectSharingInformation(): Base.IBaseQuery<SP.ObjectSharingInformation, SP.ObjectSharingInformationOData> & SP.ObjectSharingInformationCollections & SP.ObjectSharingInformationMethods;
	SharePointSettings(): Base.IBaseQuery<SP.SharePointSharingSettings, SP.SharePointSharingSettingsOData> & SP.SharePointSharingSettingsCollections;
}

/*********************************************
* ObjectSharingSettingsCollections
**********************************************/
export interface ObjectSharingSettingsCollections extends ObjectSharingSettingsPropMethods {
	SharingPermissions(): Base.IBaseCollection<SP.SharingPermissionInformation>;
	SharingPermissions(id: string | number): Base.IBaseQuery<SP.SharingPermissionInformation> & SP.SharingPermissionInformationCollections;
}

/*********************************************
* ObjectSharingSettingsOData
**********************************************/
export interface ObjectSharingSettingsOData extends Base.IBaseResult, ObjectSharingSettingsProps, ObjectSharingSettingsMethods {
	ObjectSharingInformation: SP.ObjectSharingInformation & SP.ObjectSharingInformationCollections;
	SharePointSettings: SP.SharePointSharingSettings & SP.SharePointSharingSettingsCollections;
	SharingPermissions: Base.IBaseResults<SP.SharingPermissionInformation>;
}

/*********************************************
* ObjectSharingSettingsMethods
**********************************************/
export interface ObjectSharingSettingsMethods {

}

/*********************************************
* IObjectSharingInformation
**********************************************/
export interface IObjectSharingInformation extends ObjectSharingInformationCollections, ObjectSharingInformationMethods, Base.IBaseQuery<ObjectSharingInformation, IObjectSharingInformationQuery> {

}

/*********************************************
* IObjectSharingInformationCollection
**********************************************/
export interface IObjectSharingInformationCollection extends Base.IBaseResults<ObjectSharingInformation> {
	done?: (resolve: (value?: Array<ObjectSharingInformation>) => void) => void;
}

/*********************************************
* IObjectSharingInformationQueryCollection
**********************************************/
export interface IObjectSharingInformationQueryCollection extends Base.IBaseResults<ObjectSharingInformationOData> {
	done?: (resolve: (value?: Array<ObjectSharingInformationOData>) => void) => void;
}

/*********************************************
* IObjectSharingInformationQuery
**********************************************/
export interface IObjectSharingInformationQuery extends ObjectSharingInformationOData, ObjectSharingInformationMethods {

}

/*********************************************
* ObjectSharingInformation
**********************************************/
export interface ObjectSharingInformation extends Base.IBaseResult, ObjectSharingInformationProps, ObjectSharingInformationCollections, ObjectSharingInformationMethods {

}

/*********************************************
* ObjectSharingInformationProps
**********************************************/
export interface ObjectSharingInformationProps {
	AnonymousEditLink?: string;
	AnonymousViewLink?: string;
	CanBeShared?: boolean;
	CanBeUnshared?: boolean;
	CanManagePermissions?: boolean;
	HasPendingAccessRequests?: boolean;
	HasPermissionLevels?: boolean;
	IsFolder?: boolean;
	IsSharedWithCurrentUser?: boolean;
	IsSharedWithGuest?: boolean;
	IsSharedWithMany?: boolean;
	IsSharedWithSecurityGroup?: boolean;
	PendingAccessRequestsLink?: string;
	SharingLinks?: { results: Array<SP.SharingLinkInfo> };
	TotalFileCount?: number;
}

/*********************************************
* ObjectSharingInformationPropMethods
**********************************************/
export interface ObjectSharingInformationPropMethods {

}

/*********************************************
* ObjectSharingInformationCollections
**********************************************/
export interface ObjectSharingInformationCollections extends ObjectSharingInformationPropMethods {
	SharedWithUsersCollection(): Base.IBaseCollection<SP.ObjectSharingInformationUser, SP.ObjectSharingInformationUserOData>;
	SharedWithUsersCollection(id: string | number): Base.IBaseQuery<SP.ObjectSharingInformationUser, SP.ObjectSharingInformationUserOData> & SP.ObjectSharingInformationUserCollections;
}

/*********************************************
* ObjectSharingInformationOData
**********************************************/
export interface ObjectSharingInformationOData extends Base.IBaseResult, ObjectSharingInformationProps, ObjectSharingInformationMethods {
	SharedWithUsersCollection: Base.IBaseResults<SP.ObjectSharingInformationUser>;
}

/*********************************************
* ObjectSharingInformationMethods
**********************************************/
export interface ObjectSharingInformationMethods {
	getSharedWithUsers(): Base.IBaseCollection<SP.ObjectSharingInformationUser, SP.ObjectSharingInformationUserOData>;
}

/*********************************************
* ObjectSharingInformationUser
**********************************************/
export interface ObjectSharingInformationUser {
	CustomRoleNames?: string;
	Department?: string;
	Email?: string;
	HasEditPermission?: boolean;
	HasReviewPermission?: boolean;
	HasViewPermission?: boolean;
	Id?: number;
	IsDomainGroup?: boolean;
	IsExternalUser?: boolean;
	IsMemberOfGroup?: boolean;
	IsSiteAdmin?: boolean;
	JobTitle?: string;
	LoginName?: string;
	Name?: string;
	Picture?: string;
	SipAddress?: string;
}

/*********************************************
* ObjectSharingInformationUserCollections
**********************************************/
export interface ObjectSharingInformationUserCollections {

}

/*********************************************
* ObjectSharingInformationUserOData
**********************************************/
export interface ObjectSharingInformationUserOData extends Base.IBaseResult, ObjectSharingInformationUser {
	Principal: SP.Principal & SP.PrincipalCollections;
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* SharePointSharingSettings
**********************************************/
export interface SharePointSharingSettings {
	AddToGroupModeName?: string;
	GroupNameLines?: { results: Array<string> };
	GroupRoleDefinitionNamesLines?: { results: Array<string> };
	IsMobileView?: boolean;
	PanelGivePermissionsVisible?: boolean;
	PanelShowHideMoreOptionsVisible?: boolean;
	PanelSimplifiedRoleSelectorVisible?: boolean;
	RequiredScriptFileLinks?: { results: Array<string> };
	RoleDefinitionNameLines?: { results: Array<string> };
	SelectedGroup?: string;
	SharedWithEnabled?: boolean;
	SharingCssLink?: string;
	TabbedDialogEnabled?: boolean;
	TabToShow?: number;
	txtEmailSubjectText?: string;
	UserDisplayUrl?: string;
}

/*********************************************
* SharePointSharingSettingsCollections
**********************************************/
export interface SharePointSharingSettingsCollections {

}

/*********************************************
* SharePointSharingSettingsOData
**********************************************/
export interface SharePointSharingSettingsOData extends Base.IBaseResult, SharePointSharingSettings {
	PickerProperties: SP.PickerSettings & SP.PickerSettingsCollections;
}

/*********************************************
* PickerSettings
**********************************************/
export interface PickerSettings {
	AllowEmailAddresses?: boolean;
	AllowOnlyEmailAddresses?: boolean;
	PrincipalAccountType?: string;
	PrincipalSource?: number;
	QuerySettings?: SP.UI.ApplicationPages.PeoplePickerQuerySettings;
	VisibleSuggestions?: number;
}

/*********************************************
* PickerSettingsCollections
**********************************************/
export interface PickerSettingsCollections {

}

/*********************************************
* SharingPermissionInformation
**********************************************/
export interface SharingPermissionInformation {
	IsDefaultPermission?: boolean;
	PermissionDescription?: string;
	PermissionId?: string;
	PermissionKind?: number;
	PermissionName?: string;
	PermissionRoleType?: number;
}

/*********************************************
* SharingPermissionInformationCollections
**********************************************/
export interface SharingPermissionInformationCollections {

}

/*********************************************
* RecentListCollection
**********************************************/
export interface RecentListCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RecentListCollectionCollections
**********************************************/
export interface RecentListCollectionCollections {

}

/*********************************************
* RecentList
**********************************************/
export interface RecentList {
	lastViewDate?: number;
	listId?: string;
	listTitle?: string;
	listUrl?: string;
	listViewCounts?: { results: Array<SP.CountByDate> };
}

/*********************************************
* RecentListCollections
**********************************************/
export interface RecentListCollections {

}

/*********************************************
* RelatedItemManager
**********************************************/
export interface RelatedItemManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RelatedItemManagerCollections
**********************************************/
export interface RelatedItemManagerCollections {

}

/*********************************************
* ServerSettings
**********************************************/
export interface ServerSettings {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ServerSettingsCollections
**********************************************/
export interface ServerSettingsCollections {

}

/*********************************************
* ISharingResult
**********************************************/
export interface ISharingResult extends SharingResultCollections, SharingResultMethods, Base.IBaseQuery<SharingResult, ISharingResultQuery> {

}

/*********************************************
* ISharingResultCollection
**********************************************/
export interface ISharingResultCollection extends Base.IBaseResults<SharingResult> {
	done?: (resolve: (value?: Array<SharingResult>) => void) => void;
}

/*********************************************
* ISharingResultQueryCollection
**********************************************/
export interface ISharingResultQueryCollection extends Base.IBaseResults<SharingResultOData> {
	done?: (resolve: (value?: Array<SharingResultOData>) => void) => void;
}

/*********************************************
* ISharingResultQuery
**********************************************/
export interface ISharingResultQuery extends SharingResultOData, SharingResultMethods {

}

/*********************************************
* SharingResult
**********************************************/
export interface SharingResult extends Base.IBaseResult, SharingResultProps, SharingResultCollections, SharingResultMethods {

}

/*********************************************
* SharingResultProps
**********************************************/
export interface SharingResultProps {
	ErrorMessage?: string;
	IconUrl?: string;
	InvitedUsers?: { results: Array<SP.SPInvitationCreationResult> };
	Name?: string;
	PermissionsPageRelativeUrl?: string;
	StatusCode?: number;
	UniquelyPermissionedUsers?: { results: Array<SP.Sharing.UserSharingResult> };
	Url?: string;
	UsersAddedToGroup?: { results: Array<SP.Sharing.UserSharingResult> };
}

/*********************************************
* SharingResultPropMethods
**********************************************/
export interface SharingResultPropMethods {
	GroupUsersAddedTo(): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
}

/*********************************************
* SharingResultCollections
**********************************************/
export interface SharingResultCollections extends SharingResultPropMethods {
	GroupsSharedWith(): Base.IBaseCollection<SP.Group, SP.GroupOData, Base.IBaseExecution & SP.GroupCollectionMethods> & Base.IBaseExecution & SP.GroupCollectionMethods;
	GroupsSharedWith(id: string | number): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	UsersWithAccessRequests(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	UsersWithAccessRequests(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* SharingResultOData
**********************************************/
export interface SharingResultOData extends Base.IBaseResult, SharingResultProps, SharingResultMethods {
	GroupsSharedWith: Base.IBaseResults<SP.Group> & SP.GroupCollectionMethods;
	GroupUsersAddedTo: SP.Group & SP.GroupCollections & SP.GroupCollectionMethods;
	UsersWithAccessRequests: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
}

/*********************************************
* SharingResultMethods
**********************************************/
export interface SharingResultMethods {

}

/*********************************************
* AccessRequests
**********************************************/
export interface AccessRequests {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AccessRequestsCollections
**********************************************/
export interface AccessRequestsCollections {

}

/*********************************************
* AppContextSite
**********************************************/
export interface AppContextSite {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppContextSiteCollections
**********************************************/
export interface AppContextSiteCollections {

}

/*********************************************
* AppContextSiteOData
**********************************************/
export interface AppContextSiteOData extends Base.IBaseResult, AppContextSite {
	Site: SP.Site & SP.SiteCollections;
	Web: SP.Web & SP.WebCollections & SP.WebCollectionMethods;
}

/*********************************************
* AppSiteContextUtility
**********************************************/
export interface AppSiteContextUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppSiteContextUtilityCollections
**********************************************/
export interface AppSiteContextUtilityCollections {

}

/*********************************************
* AppTileProperties
**********************************************/
export interface AppTileProperties {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppTilePropertiesCollections
**********************************************/
export interface AppTilePropertiesCollections {

}

/*********************************************
* Change
**********************************************/
export interface Change {
	ChangeToken?: SP.ChangeToken;
	ChangeType?: number;
	RelativeTime?: string;
	SiteId?: any;
	Time?: any;
}

/*********************************************
* ChangeCollections
**********************************************/
export interface ChangeCollections {

}

/*********************************************
* ChangeAlert
**********************************************/
export interface ChangeAlert {
	AlertId?: any;
	WebId?: any;
}

/*********************************************
* ChangeAlertCollections
**********************************************/
export interface ChangeAlertCollections {

}

/*********************************************
* ChangeContentType
**********************************************/
export interface ChangeContentType {
	ContentTypeId?: SP.ContentTypeId;
	WebId?: any;
}

/*********************************************
* ChangeContentTypeCollections
**********************************************/
export interface ChangeContentTypeCollections {

}

/*********************************************
* ChangeField
**********************************************/
export interface ChangeField {
	FieldId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFieldCollections
**********************************************/
export interface ChangeFieldCollections {

}

/*********************************************
* ChangeFile
**********************************************/
export interface ChangeFile {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFileCollections
**********************************************/
export interface ChangeFileCollections {

}

/*********************************************
* ChangeFolder
**********************************************/
export interface ChangeFolder {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFolderCollections
**********************************************/
export interface ChangeFolderCollections {

}

/*********************************************
* ChangeGroup
**********************************************/
export interface ChangeGroup {
	GroupId?: number;
}

/*********************************************
* ChangeGroupCollections
**********************************************/
export interface ChangeGroupCollections {

}

/*********************************************
* ChangeItem
**********************************************/
export interface ChangeItem {
	ActivityType?: number;
	ContentTypeId?: SP.ContentTypeId;
	Editor?: string;
	EditorEmailHint?: string;
	EditorLoginName?: string;
	FileSystemObjectType?: number;
	FileType?: string;
	Hashtag?: string;
	Hidden?: boolean;
	ItemId?: number;
	ListId?: any;
	ListTemplate?: number;
	ListTitle?: string;
	ServerRelativeUrl?: string;
	SharedByUser?: SP.SharedWithUser;
	SharedWithUsers?: SP.SharedWithUserCollection;
	Title?: string;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeItemCollections
**********************************************/
export interface ChangeItemCollections {

}

/*********************************************
* ChangeList
**********************************************/
export interface ChangeList {
	BaseTemplate?: number;
	Editor?: string;
	Hidden?: boolean;
	ListId?: any;
	RootFolderUrl?: string;
	Title?: string;
	WebId?: any;
}

/*********************************************
* ChangeListCollections
**********************************************/
export interface ChangeListCollections {

}

/*********************************************
* ChangeListOData
**********************************************/
export interface ChangeListOData extends Base.IBaseResult, ChangeList {
	Creator: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* ChangeSite
**********************************************/
export interface ChangeSite {

}

/*********************************************
* ChangeSiteCollections
**********************************************/
export interface ChangeSiteCollections {

}

/*********************************************
* ChangeUser
**********************************************/
export interface ChangeUser {
	Activate?: boolean;
	UserId?: number;
}

/*********************************************
* ChangeUserCollections
**********************************************/
export interface ChangeUserCollections {

}

/*********************************************
* ChangeView
**********************************************/
export interface ChangeView {
	ViewId?: any;
	ListId?: any;
	WebId?: any;
}

/*********************************************
* ChangeViewCollections
**********************************************/
export interface ChangeViewCollections {

}

/*********************************************
* ChangeWeb
**********************************************/
export interface ChangeWeb {
	WebId?: any;
}

/*********************************************
* ChangeWebCollections
**********************************************/
export interface ChangeWebCollections {

}

/*********************************************
* ICheckedOutFile
**********************************************/
export interface ICheckedOutFile extends CheckedOutFileCollections, CheckedOutFileMethods, Base.IBaseQuery<CheckedOutFile, ICheckedOutFileQuery> {

}

/*********************************************
* ICheckedOutFileCollection
**********************************************/
export interface ICheckedOutFileCollection extends Base.IBaseResults<CheckedOutFile>, CheckedOutFileCollectionMethods {
	done?: (resolve: (value?: Array<CheckedOutFile>) => void) => void;
}

/*********************************************
* ICheckedOutFileQueryCollection
**********************************************/
export interface ICheckedOutFileQueryCollection extends Base.IBaseResults<CheckedOutFileOData>, CheckedOutFileCollectionMethods {
	done?: (resolve: (value?: Array<CheckedOutFileOData>) => void) => void;
}

/*********************************************
* ICheckedOutFileQuery
**********************************************/
export interface ICheckedOutFileQuery extends CheckedOutFileOData, CheckedOutFileMethods {

}

/*********************************************
* CheckedOutFile
**********************************************/
export interface CheckedOutFile extends Base.IBaseResult, CheckedOutFileProps, CheckedOutFileCollections, CheckedOutFileMethods {

}

/*********************************************
* CheckedOutFileProps
**********************************************/
export interface CheckedOutFileProps {
	CheckedOutById?: number;
	ServerRelativePath?: SP.ResourcePath;
}

/*********************************************
* CheckedOutFilePropMethods
**********************************************/
export interface CheckedOutFilePropMethods {
	CheckedOutBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* CheckedOutFileCollections
**********************************************/
export interface CheckedOutFileCollections extends CheckedOutFilePropMethods {

}

/*********************************************
* CheckedOutFileCollectionMethods
**********************************************/
export interface CheckedOutFileCollectionMethods {
	getByPath(DecodedUrl?: string): Base.IBaseQuery<SP.CheckedOutFile, SP.CheckedOutFileOData> & SP.CheckedOutFileCollections & SP.CheckedOutFileMethods;
}

/*********************************************
* CheckedOutFileOData
**********************************************/
export interface CheckedOutFileOData extends Base.IBaseResult, CheckedOutFileProps, CheckedOutFileMethods {
	CheckedOutBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* CheckedOutFileMethods
**********************************************/
export interface CheckedOutFileMethods {
	takeOverCheckOut(): Base.IBaseExecution<any>;
}

/*********************************************
* CompatibilityRange
**********************************************/
export interface CompatibilityRange {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CompatibilityRangeCollections
**********************************************/
export interface CompatibilityRangeCollections {

}

/*********************************************
* ConnectorResult
**********************************************/
export interface ConnectorResult {
	ContextData?: string;
	Value?: string;
}

/*********************************************
* ConnectorResultCollections
**********************************************/
export interface ConnectorResultCollections {

}

/*********************************************
* APIHubConnector
**********************************************/
export interface APIHubConnector {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* APIHubConnectorCollections
**********************************************/
export interface APIHubConnectorCollections {

}

/*********************************************
* IRequestContext
**********************************************/
export interface IRequestContext extends RequestContextCollections, RequestContextMethods, Base.IBaseQuery<RequestContext, IRequestContextQuery> {

}

/*********************************************
* IRequestContextCollection
**********************************************/
export interface IRequestContextCollection extends Base.IBaseResults<RequestContext> {
	done?: (resolve: (value?: Array<RequestContext>) => void) => void;
}

/*********************************************
* IRequestContextQueryCollection
**********************************************/
export interface IRequestContextQueryCollection extends Base.IBaseResults<RequestContextOData> {
	done?: (resolve: (value?: Array<RequestContextOData>) => void) => void;
}

/*********************************************
* IRequestContextQuery
**********************************************/
export interface IRequestContextQuery extends RequestContextOData, RequestContextMethods {

}

/*********************************************
* RequestContext
**********************************************/
export interface RequestContext extends Base.IBaseResult, RequestContextProps, RequestContextCollections, RequestContextMethods {

}

/*********************************************
* RequestContextProps
**********************************************/
export interface RequestContextProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContextPropMethods
**********************************************/
export interface RequestContextPropMethods {
	Current(): Base.IBaseQuery<SP.RequestContext, SP.RequestContextOData> & SP.RequestContextCollections & SP.RequestContextMethods;
	List(): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	Site(): Base.IBaseQuery<SP.Site, SP.SiteOData> & SP.SiteCollections & SP.SiteMethods;
	Web(): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
}

/*********************************************
* RequestContextCollections
**********************************************/
export interface RequestContextCollections extends RequestContextPropMethods {

}

/*********************************************
* RequestContextOData
**********************************************/
export interface RequestContextOData extends Base.IBaseResult, RequestContextProps, RequestContextMethods {
	Current: SP.RequestContext & SP.RequestContextCollections;
	List: SP.List & SP.ListCollections & SP.ListCollectionMethods;
	Site: SP.Site & SP.SiteCollections;
	Web: SP.Web & SP.WebCollections & SP.WebCollectionMethods;
}

/*********************************************
* RequestContextMethods
**********************************************/
export interface RequestContextMethods {
	getRemoteContext(): Base.IBaseQuery<SP.RequestContext, SP.RequestContextOData> & SP.RequestContextCollections & SP.RequestContextMethods;
}

/*********************************************
* CurrencyList
**********************************************/
export interface CurrencyList {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CurrencyListCollections
**********************************************/
export interface CurrencyListCollections {

}

/*********************************************
* IFieldCalculated
**********************************************/
export interface IFieldCalculated extends FieldCalculatedCollections, FieldCalculatedMethods, Base.IBaseQuery<FieldCalculated, IFieldCalculatedQuery> {

}

/*********************************************
* IFieldCalculatedCollection
**********************************************/
export interface IFieldCalculatedCollection extends Base.IBaseResults<FieldCalculated> {
	done?: (resolve: (value?: Array<FieldCalculated>) => void) => void;
}

/*********************************************
* IFieldCalculatedQueryCollection
**********************************************/
export interface IFieldCalculatedQueryCollection extends Base.IBaseResults<FieldCalculatedOData> {
	done?: (resolve: (value?: Array<FieldCalculatedOData>) => void) => void;
}

/*********************************************
* IFieldCalculatedQuery
**********************************************/
export interface IFieldCalculatedQuery extends FieldCalculatedOData, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated extends SP.Field, Base.IBaseResult, FieldCalculatedProps, FieldCalculatedCollections, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculatedProps
**********************************************/
export interface FieldCalculatedProps {
	CurrencyLocaleId?: number;
	DateFormat?: number;
	DisplayFormat?: number;
	Formula?: string;
	OutputType?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldCalculatedPropMethods
**********************************************/
export interface FieldCalculatedPropMethods {

}

/*********************************************
* FieldCalculatedCollections
**********************************************/
export interface FieldCalculatedCollections extends FieldCalculatedPropMethods {

}

/*********************************************
* FieldCalculatedOData
**********************************************/
export interface FieldCalculatedOData extends Base.IBaseResult, FieldCalculatedProps, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculatedMethods
**********************************************/
export interface FieldCalculatedMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldMultiChoice
**********************************************/
export interface IFieldMultiChoice extends FieldMultiChoiceCollections, FieldMultiChoiceMethods, Base.IBaseQuery<FieldMultiChoice, IFieldMultiChoiceQuery> {

}

/*********************************************
* IFieldMultiChoiceCollection
**********************************************/
export interface IFieldMultiChoiceCollection extends Base.IBaseResults<FieldMultiChoice> {
	done?: (resolve: (value?: Array<FieldMultiChoice>) => void) => void;
}

/*********************************************
* IFieldMultiChoiceQueryCollection
**********************************************/
export interface IFieldMultiChoiceQueryCollection extends Base.IBaseResults<FieldMultiChoiceOData> {
	done?: (resolve: (value?: Array<FieldMultiChoiceOData>) => void) => void;
}

/*********************************************
* IFieldMultiChoiceQuery
**********************************************/
export interface IFieldMultiChoiceQuery extends FieldMultiChoiceOData, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field, Base.IBaseResult, FieldMultiChoiceProps, FieldMultiChoiceCollections, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoiceProps
**********************************************/
export interface FieldMultiChoiceProps {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: { results: Array<string> };
}

/*********************************************
* FieldMultiChoicePropMethods
**********************************************/
export interface FieldMultiChoicePropMethods {

}

/*********************************************
* FieldMultiChoiceCollections
**********************************************/
export interface FieldMultiChoiceCollections extends FieldMultiChoicePropMethods {

}

/*********************************************
* FieldMultiChoiceOData
**********************************************/
export interface FieldMultiChoiceOData extends Base.IBaseResult, FieldMultiChoiceProps, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoiceMethods
**********************************************/
export interface FieldMultiChoiceMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldChoice
**********************************************/
export interface IFieldChoice extends FieldChoiceCollections, FieldChoiceMethods, Base.IBaseQuery<FieldChoice, IFieldChoiceQuery> {

}

/*********************************************
* IFieldChoiceCollection
**********************************************/
export interface IFieldChoiceCollection extends Base.IBaseResults<FieldChoice> {
	done?: (resolve: (value?: Array<FieldChoice>) => void) => void;
}

/*********************************************
* IFieldChoiceQueryCollection
**********************************************/
export interface IFieldChoiceQueryCollection extends Base.IBaseResults<FieldChoiceOData> {
	done?: (resolve: (value?: Array<FieldChoiceOData>) => void) => void;
}

/*********************************************
* IFieldChoiceQuery
**********************************************/
export interface IFieldChoiceQuery extends FieldChoiceOData, FieldChoiceMethods {

}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice, Base.IBaseResult, FieldChoiceProps, FieldChoiceCollections, FieldChoiceMethods {

}

/*********************************************
* FieldChoiceProps
**********************************************/
export interface FieldChoiceProps {
	EditFormat?: number;
}

/*********************************************
* FieldChoicePropMethods
**********************************************/
export interface FieldChoicePropMethods {

}

/*********************************************
* FieldChoiceCollections
**********************************************/
export interface FieldChoiceCollections extends FieldChoicePropMethods {

}

/*********************************************
* FieldChoiceOData
**********************************************/
export interface FieldChoiceOData extends Base.IBaseResult, FieldChoiceProps, FieldChoiceMethods {

}

/*********************************************
* FieldChoiceMethods
**********************************************/
export interface FieldChoiceMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldComputed
**********************************************/
export interface IFieldComputed extends FieldComputedCollections, FieldComputedMethods, Base.IBaseQuery<FieldComputed, IFieldComputedQuery> {

}

/*********************************************
* IFieldComputedCollection
**********************************************/
export interface IFieldComputedCollection extends Base.IBaseResults<FieldComputed> {
	done?: (resolve: (value?: Array<FieldComputed>) => void) => void;
}

/*********************************************
* IFieldComputedQueryCollection
**********************************************/
export interface IFieldComputedQueryCollection extends Base.IBaseResults<FieldComputedOData> {
	done?: (resolve: (value?: Array<FieldComputedOData>) => void) => void;
}

/*********************************************
* IFieldComputedQuery
**********************************************/
export interface IFieldComputedQuery extends FieldComputedOData, FieldComputedMethods {

}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field, Base.IBaseResult, FieldComputedProps, FieldComputedCollections, FieldComputedMethods {

}

/*********************************************
* FieldComputedProps
**********************************************/
export interface FieldComputedProps {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedPropMethods
**********************************************/
export interface FieldComputedPropMethods {

}

/*********************************************
* FieldComputedCollections
**********************************************/
export interface FieldComputedCollections extends FieldComputedPropMethods {

}

/*********************************************
* FieldComputedOData
**********************************************/
export interface FieldComputedOData extends Base.IBaseResult, FieldComputedProps, FieldComputedMethods {

}

/*********************************************
* FieldComputedMethods
**********************************************/
export interface FieldComputedMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldNumber
**********************************************/
export interface IFieldNumber extends FieldNumberCollections, FieldNumberMethods, Base.IBaseQuery<FieldNumber, IFieldNumberQuery> {

}

/*********************************************
* IFieldNumberCollection
**********************************************/
export interface IFieldNumberCollection extends Base.IBaseResults<FieldNumber> {
	done?: (resolve: (value?: Array<FieldNumber>) => void) => void;
}

/*********************************************
* IFieldNumberQueryCollection
**********************************************/
export interface IFieldNumberQueryCollection extends Base.IBaseResults<FieldNumberOData> {
	done?: (resolve: (value?: Array<FieldNumberOData>) => void) => void;
}

/*********************************************
* IFieldNumberQuery
**********************************************/
export interface IFieldNumberQuery extends FieldNumberOData, FieldNumberMethods {

}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber extends SP.Field, Base.IBaseResult, FieldNumberProps, FieldNumberCollections, FieldNumberMethods {

}

/*********************************************
* FieldNumberProps
**********************************************/
export interface FieldNumberProps {
	DisplayFormat?: number;
	MaximumValue?: number;
	MinimumValue?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldNumberPropMethods
**********************************************/
export interface FieldNumberPropMethods {

}

/*********************************************
* FieldNumberCollections
**********************************************/
export interface FieldNumberCollections extends FieldNumberPropMethods {

}

/*********************************************
* FieldNumberOData
**********************************************/
export interface FieldNumberOData extends Base.IBaseResult, FieldNumberProps, FieldNumberMethods {

}

/*********************************************
* FieldNumberMethods
**********************************************/
export interface FieldNumberMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldCurrency
**********************************************/
export interface IFieldCurrency extends FieldCurrencyCollections, FieldCurrencyMethods, Base.IBaseQuery<FieldCurrency, IFieldCurrencyQuery> {

}

/*********************************************
* IFieldCurrencyCollection
**********************************************/
export interface IFieldCurrencyCollection extends Base.IBaseResults<FieldCurrency> {
	done?: (resolve: (value?: Array<FieldCurrency>) => void) => void;
}

/*********************************************
* IFieldCurrencyQueryCollection
**********************************************/
export interface IFieldCurrencyQueryCollection extends Base.IBaseResults<FieldCurrencyOData> {
	done?: (resolve: (value?: Array<FieldCurrencyOData>) => void) => void;
}

/*********************************************
* IFieldCurrencyQuery
**********************************************/
export interface IFieldCurrencyQuery extends FieldCurrencyOData, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber, Base.IBaseResult, FieldCurrencyProps, FieldCurrencyCollections, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrencyProps
**********************************************/
export interface FieldCurrencyProps {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyPropMethods
**********************************************/
export interface FieldCurrencyPropMethods {

}

/*********************************************
* FieldCurrencyCollections
**********************************************/
export interface FieldCurrencyCollections extends FieldCurrencyPropMethods {

}

/*********************************************
* FieldCurrencyOData
**********************************************/
export interface FieldCurrencyOData extends Base.IBaseResult, FieldCurrencyProps, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrencyMethods
**********************************************/
export interface FieldCurrencyMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldDateTime
**********************************************/
export interface IFieldDateTime extends FieldDateTimeCollections, FieldDateTimeMethods, Base.IBaseQuery<FieldDateTime, IFieldDateTimeQuery> {

}

/*********************************************
* IFieldDateTimeCollection
**********************************************/
export interface IFieldDateTimeCollection extends Base.IBaseResults<FieldDateTime> {
	done?: (resolve: (value?: Array<FieldDateTime>) => void) => void;
}

/*********************************************
* IFieldDateTimeQueryCollection
**********************************************/
export interface IFieldDateTimeQueryCollection extends Base.IBaseResults<FieldDateTimeOData> {
	done?: (resolve: (value?: Array<FieldDateTimeOData>) => void) => void;
}

/*********************************************
* IFieldDateTimeQuery
**********************************************/
export interface IFieldDateTimeQuery extends FieldDateTimeOData, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime extends SP.Field, Base.IBaseResult, FieldDateTimeProps, FieldDateTimeCollections, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTimeProps
**********************************************/
export interface FieldDateTimeProps {
	DateTimeCalendarType?: number;
	DisplayFormat?: number;
	FriendlyDisplayFormat?: number;
}

/*********************************************
* FieldDateTimePropMethods
**********************************************/
export interface FieldDateTimePropMethods {

}

/*********************************************
* FieldDateTimeCollections
**********************************************/
export interface FieldDateTimeCollections extends FieldDateTimePropMethods {

}

/*********************************************
* FieldDateTimeOData
**********************************************/
export interface FieldDateTimeOData extends Base.IBaseResult, FieldDateTimeProps, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTimeMethods
**********************************************/
export interface FieldDateTimeMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldGeolocation
**********************************************/
export interface IFieldGeolocation extends FieldGeolocationCollections, FieldGeolocationMethods, Base.IBaseQuery<FieldGeolocation, IFieldGeolocationQuery> {

}

/*********************************************
* IFieldGeolocationCollection
**********************************************/
export interface IFieldGeolocationCollection extends Base.IBaseResults<FieldGeolocation> {
	done?: (resolve: (value?: Array<FieldGeolocation>) => void) => void;
}

/*********************************************
* IFieldGeolocationQueryCollection
**********************************************/
export interface IFieldGeolocationQueryCollection extends Base.IBaseResults<FieldGeolocationOData> {
	done?: (resolve: (value?: Array<FieldGeolocationOData>) => void) => void;
}

/*********************************************
* IFieldGeolocationQuery
**********************************************/
export interface IFieldGeolocationQuery extends FieldGeolocationOData, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field, Base.IBaseResult, FieldGeolocationProps, FieldGeolocationCollections, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationProps
**********************************************/
export interface FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationPropMethods
**********************************************/
export interface FieldGeolocationPropMethods {

}

/*********************************************
* FieldGeolocationCollections
**********************************************/
export interface FieldGeolocationCollections extends FieldGeolocationPropMethods {

}

/*********************************************
* FieldGeolocationOData
**********************************************/
export interface FieldGeolocationOData extends Base.IBaseResult, FieldGeolocationProps, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationMethods
**********************************************/
export interface FieldGeolocationMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldGuid
**********************************************/
export interface IFieldGuid extends FieldGuidCollections, FieldGuidMethods, Base.IBaseQuery<FieldGuid, IFieldGuidQuery> {

}

/*********************************************
* IFieldGuidCollection
**********************************************/
export interface IFieldGuidCollection extends Base.IBaseResults<FieldGuid> {
	done?: (resolve: (value?: Array<FieldGuid>) => void) => void;
}

/*********************************************
* IFieldGuidQueryCollection
**********************************************/
export interface IFieldGuidQueryCollection extends Base.IBaseResults<FieldGuidOData> {
	done?: (resolve: (value?: Array<FieldGuidOData>) => void) => void;
}

/*********************************************
* IFieldGuidQuery
**********************************************/
export interface IFieldGuidQuery extends FieldGuidOData, FieldGuidMethods {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field, Base.IBaseResult, FieldGuidProps, FieldGuidCollections, FieldGuidMethods {

}

/*********************************************
* FieldGuidProps
**********************************************/
export interface FieldGuidProps {

}

/*********************************************
* FieldGuidPropMethods
**********************************************/
export interface FieldGuidPropMethods {

}

/*********************************************
* FieldGuidCollections
**********************************************/
export interface FieldGuidCollections extends FieldGuidPropMethods {

}

/*********************************************
* FieldGuidOData
**********************************************/
export interface FieldGuidOData extends Base.IBaseResult, FieldGuidProps, FieldGuidMethods {

}

/*********************************************
* FieldGuidMethods
**********************************************/
export interface FieldGuidMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldMultiLineText
**********************************************/
export interface IFieldMultiLineText extends FieldMultiLineTextCollections, FieldMultiLineTextMethods, Base.IBaseQuery<FieldMultiLineText, IFieldMultiLineTextQuery> {

}

/*********************************************
* IFieldMultiLineTextCollection
**********************************************/
export interface IFieldMultiLineTextCollection extends Base.IBaseResults<FieldMultiLineText> {
	done?: (resolve: (value?: Array<FieldMultiLineText>) => void) => void;
}

/*********************************************
* IFieldMultiLineTextQueryCollection
**********************************************/
export interface IFieldMultiLineTextQueryCollection extends Base.IBaseResults<FieldMultiLineTextOData> {
	done?: (resolve: (value?: Array<FieldMultiLineTextOData>) => void) => void;
}

/*********************************************
* IFieldMultiLineTextQuery
**********************************************/
export interface IFieldMultiLineTextQuery extends FieldMultiLineTextOData, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText extends SP.Field, Base.IBaseResult, FieldMultiLineTextProps, FieldMultiLineTextCollections, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineTextProps
**********************************************/
export interface FieldMultiLineTextProps {
	AllowHyperlink?: boolean;
	AppendOnly?: boolean;
	NumberOfLines?: number;
	RestrictedMode?: boolean;
	RichText?: boolean;
	UnlimitedLengthInDocumentLibrary?: boolean;
	WikiLinking?: boolean;
}

/*********************************************
* FieldMultiLineTextPropMethods
**********************************************/
export interface FieldMultiLineTextPropMethods {

}

/*********************************************
* FieldMultiLineTextCollections
**********************************************/
export interface FieldMultiLineTextCollections extends FieldMultiLineTextPropMethods {

}

/*********************************************
* FieldMultiLineTextOData
**********************************************/
export interface FieldMultiLineTextOData extends Base.IBaseResult, FieldMultiLineTextProps, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineTextMethods
**********************************************/
export interface FieldMultiLineTextMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldLocation
**********************************************/
export interface IFieldLocation extends FieldLocationCollections, FieldLocationMethods, Base.IBaseQuery<FieldLocation, IFieldLocationQuery> {

}

/*********************************************
* IFieldLocationCollection
**********************************************/
export interface IFieldLocationCollection extends Base.IBaseResults<FieldLocation> {
	done?: (resolve: (value?: Array<FieldLocation>) => void) => void;
}

/*********************************************
* IFieldLocationQueryCollection
**********************************************/
export interface IFieldLocationQueryCollection extends Base.IBaseResults<FieldLocationOData> {
	done?: (resolve: (value?: Array<FieldLocationOData>) => void) => void;
}

/*********************************************
* IFieldLocationQuery
**********************************************/
export interface IFieldLocationQuery extends FieldLocationOData, FieldLocationMethods {

}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText, Base.IBaseResult, FieldLocationProps, FieldLocationCollections, FieldLocationMethods {

}

/*********************************************
* FieldLocationProps
**********************************************/
export interface FieldLocationProps {

}

/*********************************************
* FieldLocationPropMethods
**********************************************/
export interface FieldLocationPropMethods {

}

/*********************************************
* FieldLocationCollections
**********************************************/
export interface FieldLocationCollections extends FieldLocationPropMethods {

}

/*********************************************
* FieldLocationOData
**********************************************/
export interface FieldLocationOData extends Base.IBaseResult, FieldLocationProps, FieldLocationMethods {

}

/*********************************************
* FieldLocationMethods
**********************************************/
export interface FieldLocationMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldLookup
**********************************************/
export interface IFieldLookup extends FieldLookupCollections, FieldLookupMethods, Base.IBaseQuery<FieldLookup, IFieldLookupQuery> {

}

/*********************************************
* IFieldLookupCollection
**********************************************/
export interface IFieldLookupCollection extends Base.IBaseResults<FieldLookup> {
	done?: (resolve: (value?: Array<FieldLookup>) => void) => void;
}

/*********************************************
* IFieldLookupQueryCollection
**********************************************/
export interface IFieldLookupQueryCollection extends Base.IBaseResults<FieldLookupOData> {
	done?: (resolve: (value?: Array<FieldLookupOData>) => void) => void;
}

/*********************************************
* IFieldLookupQuery
**********************************************/
export interface IFieldLookupQuery extends FieldLookupOData, FieldLookupMethods {

}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup extends SP.Field, Base.IBaseResult, FieldLookupProps, FieldLookupCollections, FieldLookupMethods {

}

/*********************************************
* FieldLookupProps
**********************************************/
export interface FieldLookupProps {
	AllowMultipleValues?: boolean;
	DependentLookupInternalNames?: { results: Array<string> };
	IsDependentLookup?: boolean;
	IsRelationship?: boolean;
	LookupField?: string;
	LookupList?: string;
	LookupWebId?: any;
	PrimaryFieldId?: string;
	RelationshipDeleteBehavior?: number;
	UnlimitedLengthInDocumentLibrary?: boolean;
}

/*********************************************
* FieldLookupPropMethods
**********************************************/
export interface FieldLookupPropMethods {

}

/*********************************************
* FieldLookupCollections
**********************************************/
export interface FieldLookupCollections extends FieldLookupPropMethods {

}

/*********************************************
* FieldLookupOData
**********************************************/
export interface FieldLookupOData extends Base.IBaseResult, FieldLookupProps, FieldLookupMethods {

}

/*********************************************
* FieldLookupMethods
**********************************************/
export interface FieldLookupMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldRatingScale
**********************************************/
export interface IFieldRatingScale extends FieldRatingScaleCollections, FieldRatingScaleMethods, Base.IBaseQuery<FieldRatingScale, IFieldRatingScaleQuery> {

}

/*********************************************
* IFieldRatingScaleCollection
**********************************************/
export interface IFieldRatingScaleCollection extends Base.IBaseResults<FieldRatingScale> {
	done?: (resolve: (value?: Array<FieldRatingScale>) => void) => void;
}

/*********************************************
* IFieldRatingScaleQueryCollection
**********************************************/
export interface IFieldRatingScaleQueryCollection extends Base.IBaseResults<FieldRatingScaleOData> {
	done?: (resolve: (value?: Array<FieldRatingScaleOData>) => void) => void;
}

/*********************************************
* IFieldRatingScaleQuery
**********************************************/
export interface IFieldRatingScaleQuery extends FieldRatingScaleOData, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScale
**********************************************/
export interface FieldRatingScale extends SP.FieldMultiChoice, Base.IBaseResult, FieldRatingScaleProps, FieldRatingScaleCollections, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScaleProps
**********************************************/
export interface FieldRatingScaleProps {
	GridEndNumber?: number;
	GridNAOptionText?: string;
	GridStartNumber?: number;
	GridTextRangeAverage?: string;
	GridTextRangeHigh?: string;
	GridTextRangeLow?: string;
	RangeCount?: number;
}

/*********************************************
* FieldRatingScalePropMethods
**********************************************/
export interface FieldRatingScalePropMethods {

}

/*********************************************
* FieldRatingScaleCollections
**********************************************/
export interface FieldRatingScaleCollections extends FieldRatingScalePropMethods {

}

/*********************************************
* FieldRatingScaleOData
**********************************************/
export interface FieldRatingScaleOData extends Base.IBaseResult, FieldRatingScaleProps, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScaleMethods
**********************************************/
export interface FieldRatingScaleMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldText
**********************************************/
export interface IFieldText extends FieldTextCollections, FieldTextMethods, Base.IBaseQuery<FieldText, IFieldTextQuery> {

}

/*********************************************
* IFieldTextCollection
**********************************************/
export interface IFieldTextCollection extends Base.IBaseResults<FieldText> {
	done?: (resolve: (value?: Array<FieldText>) => void) => void;
}

/*********************************************
* IFieldTextQueryCollection
**********************************************/
export interface IFieldTextQueryCollection extends Base.IBaseResults<FieldTextOData> {
	done?: (resolve: (value?: Array<FieldTextOData>) => void) => void;
}

/*********************************************
* IFieldTextQuery
**********************************************/
export interface IFieldTextQuery extends FieldTextOData, FieldTextMethods {

}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field, Base.IBaseResult, FieldTextProps, FieldTextCollections, FieldTextMethods {

}

/*********************************************
* FieldTextProps
**********************************************/
export interface FieldTextProps {
	MaxLength?: number;
}

/*********************************************
* FieldTextPropMethods
**********************************************/
export interface FieldTextPropMethods {

}

/*********************************************
* FieldTextCollections
**********************************************/
export interface FieldTextCollections extends FieldTextPropMethods {

}

/*********************************************
* FieldTextOData
**********************************************/
export interface FieldTextOData extends Base.IBaseResult, FieldTextProps, FieldTextMethods {

}

/*********************************************
* FieldTextMethods
**********************************************/
export interface FieldTextMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldThumbnail
**********************************************/
export interface IFieldThumbnail extends FieldThumbnailCollections, FieldThumbnailMethods, Base.IBaseQuery<FieldThumbnail, IFieldThumbnailQuery> {

}

/*********************************************
* IFieldThumbnailCollection
**********************************************/
export interface IFieldThumbnailCollection extends Base.IBaseResults<FieldThumbnail> {
	done?: (resolve: (value?: Array<FieldThumbnail>) => void) => void;
}

/*********************************************
* IFieldThumbnailQueryCollection
**********************************************/
export interface IFieldThumbnailQueryCollection extends Base.IBaseResults<FieldThumbnailOData> {
	done?: (resolve: (value?: Array<FieldThumbnailOData>) => void) => void;
}

/*********************************************
* IFieldThumbnailQuery
**********************************************/
export interface IFieldThumbnailQuery extends FieldThumbnailOData, FieldThumbnailMethods {

}

/*********************************************
* FieldThumbnail
**********************************************/
export interface FieldThumbnail extends SP.FieldMultiLineText, Base.IBaseResult, FieldThumbnailProps, FieldThumbnailCollections, FieldThumbnailMethods {

}

/*********************************************
* FieldThumbnailProps
**********************************************/
export interface FieldThumbnailProps {

}

/*********************************************
* FieldThumbnailPropMethods
**********************************************/
export interface FieldThumbnailPropMethods {

}

/*********************************************
* FieldThumbnailCollections
**********************************************/
export interface FieldThumbnailCollections extends FieldThumbnailPropMethods {

}

/*********************************************
* FieldThumbnailOData
**********************************************/
export interface FieldThumbnailOData extends Base.IBaseResult, FieldThumbnailProps, FieldThumbnailMethods {

}

/*********************************************
* FieldThumbnailMethods
**********************************************/
export interface FieldThumbnailMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldUrl
**********************************************/
export interface IFieldUrl extends FieldUrlCollections, FieldUrlMethods, Base.IBaseQuery<FieldUrl, IFieldUrlQuery> {

}

/*********************************************
* IFieldUrlCollection
**********************************************/
export interface IFieldUrlCollection extends Base.IBaseResults<FieldUrl> {
	done?: (resolve: (value?: Array<FieldUrl>) => void) => void;
}

/*********************************************
* IFieldUrlQueryCollection
**********************************************/
export interface IFieldUrlQueryCollection extends Base.IBaseResults<FieldUrlOData> {
	done?: (resolve: (value?: Array<FieldUrlOData>) => void) => void;
}

/*********************************************
* IFieldUrlQuery
**********************************************/
export interface IFieldUrlQuery extends FieldUrlOData, FieldUrlMethods {

}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field, Base.IBaseResult, FieldUrlProps, FieldUrlCollections, FieldUrlMethods {

}

/*********************************************
* FieldUrlProps
**********************************************/
export interface FieldUrlProps {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlPropMethods
**********************************************/
export interface FieldUrlPropMethods {

}

/*********************************************
* FieldUrlCollections
**********************************************/
export interface FieldUrlCollections extends FieldUrlPropMethods {

}

/*********************************************
* FieldUrlOData
**********************************************/
export interface FieldUrlOData extends Base.IBaseResult, FieldUrlProps, FieldUrlMethods {

}

/*********************************************
* FieldUrlMethods
**********************************************/
export interface FieldUrlMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IFieldUser
**********************************************/
export interface IFieldUser extends FieldUserCollections, FieldUserMethods, Base.IBaseQuery<FieldUser, IFieldUserQuery> {

}

/*********************************************
* IFieldUserCollection
**********************************************/
export interface IFieldUserCollection extends Base.IBaseResults<FieldUser> {
	done?: (resolve: (value?: Array<FieldUser>) => void) => void;
}

/*********************************************
* IFieldUserQueryCollection
**********************************************/
export interface IFieldUserQueryCollection extends Base.IBaseResults<FieldUserOData> {
	done?: (resolve: (value?: Array<FieldUserOData>) => void) => void;
}

/*********************************************
* IFieldUserQuery
**********************************************/
export interface IFieldUserQuery extends FieldUserOData, FieldUserMethods {

}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser extends SP.FieldLookup, Base.IBaseResult, FieldUserProps, FieldUserCollections, FieldUserMethods {

}

/*********************************************
* FieldUserProps
**********************************************/
export interface FieldUserProps {
	AllowDisplay?: boolean;
	Presence?: boolean;
	SelectionGroup?: number;
	SelectionMode?: number;
}

/*********************************************
* FieldUserPropMethods
**********************************************/
export interface FieldUserPropMethods {

}

/*********************************************
* FieldUserCollections
**********************************************/
export interface FieldUserCollections extends FieldUserPropMethods {

}

/*********************************************
* FieldUserOData
**********************************************/
export interface FieldUserOData extends Base.IBaseResult, FieldUserProps, FieldUserMethods {

}

/*********************************************
* FieldUserMethods
**********************************************/
export interface FieldUserMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	update(properties?: any): Base.IBaseExecution<any>;
}

/*********************************************
* FlowSynchronizationResult
**********************************************/
export interface FlowSynchronizationResult {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* FlowSynchronizationResultCollections
**********************************************/
export interface FlowSynchronizationResultCollections {

}

/*********************************************
* HashtagStoreManager
**********************************************/
export interface HashtagStoreManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HashtagStoreManagerCollections
**********************************************/
export interface HashtagStoreManagerCollections {

}

/*********************************************
* IHubSite
**********************************************/
export interface IHubSite extends HubSiteCollections, HubSiteMethods, Base.IBaseQuery<HubSite, IHubSiteQuery> {

}

/*********************************************
* IHubSiteCollection
**********************************************/
export interface IHubSiteCollection extends Base.IBaseResults<HubSite>, HubSiteCollectionMethods {
	done?: (resolve: (value?: Array<HubSite>) => void) => void;
}

/*********************************************
* IHubSiteQueryCollection
**********************************************/
export interface IHubSiteQueryCollection extends Base.IBaseResults<HubSiteOData>, HubSiteCollectionMethods {
	done?: (resolve: (value?: Array<HubSiteOData>) => void) => void;
}

/*********************************************
* IHubSiteQuery
**********************************************/
export interface IHubSiteQuery extends HubSiteOData, HubSiteMethods {

}

/*********************************************
* HubSite
**********************************************/
export interface HubSite extends Base.IBaseResult, HubSiteProps, HubSiteCollections, HubSiteMethods {

}

/*********************************************
* HubSiteProps
**********************************************/
export interface HubSiteProps {
	Description?: string;
	EnablePermissionsSync?: boolean;
	HideNameInNavigation?: boolean;
	ID?: any;
	LogoUrl?: string;
	ParentHubSiteId?: any;
	RelatedHubSiteIds?: { results: Array<any> };
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Targets?: string;
	TenantInstanceId?: any;
	Title?: string;
}

/*********************************************
* HubSitePropMethods
**********************************************/
export interface HubSitePropMethods {

}

/*********************************************
* HubSiteCollections
**********************************************/
export interface HubSiteCollections extends HubSitePropMethods {

}

/*********************************************
* HubSiteCollectionMethods
**********************************************/
export interface HubSiteCollectionMethods {
	getById(hubSiteId?: any): Base.IBaseQuery<SP.HubSite> & SP.HubSiteCollections & SP.HubSiteMethods;
	getConnectedHubs(hubSiteId?: any, option?: number): Base.IBaseExecution<Array<SP.HubSite>>;
	getSiteUrlByHubSiteId(hubSiteId?: any): Base.IBaseExecution<string>;
}

/*********************************************
* HubSiteOData
**********************************************/
export interface HubSiteOData extends Base.IBaseResult, HubSiteProps, HubSiteMethods {

}

/*********************************************
* HubSiteMethods
**********************************************/
export interface HubSiteMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ListBloomFilter
**********************************************/
export interface ListBloomFilter {
	BloomFilterSize?: number;
	FalsePositiveRate?: number;
	HashedValueSet?: { results: Array<string> };
	IndexMap?: { results: Array<number> };
	ItemProcessedCount?: number;
	K?: number;
	LastListItemIdProcessed?: number;
	MaxItemCount?: number;
}

/*********************************************
* ListBloomFilterCollections
**********************************************/
export interface ListBloomFilterCollections {

}

/*********************************************
* SPMigrationJobStatus
**********************************************/
export interface SPMigrationJobStatus {
	JobId?: any;
	JobState?: number;
}

/*********************************************
* SPMigrationJobStatusCollections
**********************************************/
export interface SPMigrationJobStatusCollections {

}

/*********************************************
* MountedFolderInfo
**********************************************/
export interface MountedFolderInfo {
	FolderUrl?: string;
	HasEditPermission?: boolean;
	ItemId?: number;
	ListTemplateType?: number;
	ListViewUrl?: string;
	WebUrl?: string;
}

/*********************************************
* MountedFolderInfoCollections
**********************************************/
export interface MountedFolderInfoCollections {

}

/*********************************************
* MountPoint
**********************************************/
export interface MountPoint {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MountPointCollections
**********************************************/
export interface MountPointCollections {

}

/*********************************************
* MountPointInfo
**********************************************/
export interface MountPointInfo {
	Name?: string;
	RedirectUrl?: string;
}

/*********************************************
* MountPointInfoCollections
**********************************************/
export interface MountPointInfoCollections {

}

/*********************************************
* MoveCopyUtil
**********************************************/
export interface MoveCopyUtil {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MoveCopyUtilCollections
**********************************************/
export interface MoveCopyUtilCollections {

}

/*********************************************
* RelatedField
**********************************************/
export interface RelatedField {
	FieldId?: any;
	ListId?: any;
	RelationshipDeleteBehavior?: number;
	WebId?: any;
}

/*********************************************
* RelatedFieldCollections
**********************************************/
export interface RelatedFieldCollections extends RelatedFieldCollectionMethods {

}

/*********************************************
* RelatedFieldOData
**********************************************/
export interface RelatedFieldOData extends Base.IBaseResult, RelatedField {
	LookupList: SP.List & SP.ListCollections & SP.ListCollectionMethods;
}

/*********************************************
* RelatedFieldCollectionMethods
**********************************************/
export interface RelatedFieldCollectionMethods {
	getByFieldId(fieldId?: any): Base.IBaseQuery<SP.RelatedField, SP.RelatedFieldOData> & SP.RelatedFieldCollections;
}

/*********************************************
* IRemoteWeb
**********************************************/
export interface IRemoteWeb extends RemoteWebCollections, RemoteWebMethods, Base.IBaseQuery<RemoteWeb, IRemoteWebQuery> {

}

/*********************************************
* IRemoteWebCollection
**********************************************/
export interface IRemoteWebCollection extends Base.IBaseResults<RemoteWeb> {
	done?: (resolve: (value?: Array<RemoteWeb>) => void) => void;
}

/*********************************************
* IRemoteWebQueryCollection
**********************************************/
export interface IRemoteWebQueryCollection extends Base.IBaseResults<RemoteWebOData> {
	done?: (resolve: (value?: Array<RemoteWebOData>) => void) => void;
}

/*********************************************
* IRemoteWebQuery
**********************************************/
export interface IRemoteWebQuery extends RemoteWebOData, RemoteWebMethods {

}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb extends Base.IBaseResult, RemoteWebProps, RemoteWebCollections, RemoteWebMethods {

}

/*********************************************
* RemoteWebProps
**********************************************/
export interface RemoteWebProps {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RemoteWebPropMethods
**********************************************/
export interface RemoteWebPropMethods {
	Web(): Base.IBaseQuery<SP.Web, SP.WebOData> & SP.WebCollections & SP.WebMethods;
}

/*********************************************
* RemoteWebCollections
**********************************************/
export interface RemoteWebCollections extends RemoteWebPropMethods {

}

/*********************************************
* RemoteWebOData
**********************************************/
export interface RemoteWebOData extends Base.IBaseResult, RemoteWebProps, RemoteWebMethods {
	Web: SP.Web & SP.WebCollections & SP.WebCollectionMethods;
}

/*********************************************
* RemoteWebMethods
**********************************************/
export interface RemoteWebMethods {
	getFileByServerRelativePath(serverRelatvieFilePath?: SP.ResourcePath): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByServerRelativeUrl(serverRelativeFileUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFileByUrl(fileUrl?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): Base.IBaseQuery<SP.Folder, SP.FolderOData> & SP.FolderCollections & SP.FolderMethods;
	getGroupById(groupId?: number): Base.IBaseQuery<SP.Group, SP.GroupOData> & SP.GroupCollections & SP.GroupMethods;
	getListById(listGuid?: any): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
	getListByServerRelativeUrl(serverRelativeUrl?: string): Base.IBaseQuery<SP.List, SP.ListOData> & SP.ListCollections & SP.ListMethods;
}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestUserContextCollections
**********************************************/
export interface RequestUserContextCollections {

}

/*********************************************
* RequestUserContextOData
**********************************************/
export interface RequestUserContextOData extends Base.IBaseResult, RequestUserContext {
	Current: SP.RequestUserContext & SP.RequestUserContextCollections;
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* SharingUtility
**********************************************/
export interface SharingUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharingUtilityCollections
**********************************************/
export interface SharingUtilityCollections {

}

/*********************************************
* OpenWebParameters
**********************************************/
export interface OpenWebParameters {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OpenWebParametersCollections
**********************************************/
export interface OpenWebParametersCollections {

}

/*********************************************
* SiteUrl
**********************************************/
export interface SiteUrl {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteUrlCollections
**********************************************/
export interface SiteUrlCollections {

}

/*********************************************
* TeamChannelManager
**********************************************/
export interface TeamChannelManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TeamChannelManagerCollections
**********************************************/
export interface TeamChannelManagerCollections {

}

/*********************************************
* TenantAppInstance
**********************************************/
export interface TenantAppInstance {
	Id?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* TenantAppInstanceCollections
**********************************************/
export interface TenantAppInstanceCollections {

}

/*********************************************
* IVisualizationAppSynchronizationResult
**********************************************/
export interface IVisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultCollections, VisualizationAppSynchronizationResultMethods, Base.IBaseQuery<VisualizationAppSynchronizationResult, IVisualizationAppSynchronizationResultQuery> {

}

/*********************************************
* IVisualizationAppSynchronizationResultCollection
**********************************************/
export interface IVisualizationAppSynchronizationResultCollection extends Base.IBaseResults<VisualizationAppSynchronizationResult> {
	done?: (resolve: (value?: Array<VisualizationAppSynchronizationResult>) => void) => void;
}

/*********************************************
* IVisualizationAppSynchronizationResultQueryCollection
**********************************************/
export interface IVisualizationAppSynchronizationResultQueryCollection extends Base.IBaseResults<VisualizationAppSynchronizationResultOData> {
	done?: (resolve: (value?: Array<VisualizationAppSynchronizationResultOData>) => void) => void;
}

/*********************************************
* IVisualizationAppSynchronizationResultQuery
**********************************************/
export interface IVisualizationAppSynchronizationResultQuery extends VisualizationAppSynchronizationResultOData, VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* VisualizationAppSynchronizationResult
**********************************************/
export interface VisualizationAppSynchronizationResult extends Base.IBaseResult, VisualizationAppSynchronizationResultProps, VisualizationAppSynchronizationResultCollections, VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* VisualizationAppSynchronizationResultProps
**********************************************/
export interface VisualizationAppSynchronizationResultProps {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* VisualizationAppSynchronizationResultPropMethods
**********************************************/
export interface VisualizationAppSynchronizationResultPropMethods {

}

/*********************************************
* VisualizationAppSynchronizationResultCollections
**********************************************/
export interface VisualizationAppSynchronizationResultCollections extends VisualizationAppSynchronizationResultPropMethods {
	AppMappedViews(): Base.IBaseCollection<SP.View, SP.ViewOData, Base.IBaseExecution & SP.ViewCollectionMethods> & Base.IBaseExecution & SP.ViewCollectionMethods;
	AppMappedViews(id: string | number): Base.IBaseQuery<SP.View, SP.ViewOData> & SP.ViewCollections & SP.ViewMethods;
}

/*********************************************
* VisualizationAppSynchronizationResultOData
**********************************************/
export interface VisualizationAppSynchronizationResultOData extends Base.IBaseResult, VisualizationAppSynchronizationResultProps, VisualizationAppSynchronizationResultMethods {
	AppMappedViews: Base.IBaseResults<SP.View> & SP.ViewCollectionMethods;
}

/*********************************************
* VisualizationAppSynchronizationResultMethods
**********************************************/
export interface VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* WebProxy
**********************************************/
export interface WebProxy {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WebProxyCollections
**********************************************/
export interface WebProxyCollections {

}

/*********************************************
* WebTemplate
**********************************************/
export interface WebTemplate {
	Description?: string;
	DisplayCategory?: string;
	Id?: number;
	ImageUrl?: string;
	IsHidden?: boolean;
	IsRootWebOnly?: boolean;
	IsSubWebOnly?: boolean;
	Lcid?: number;
	Name?: string;
	Title?: string;
}

/*********************************************
* WebTemplateCollections
**********************************************/
export interface WebTemplateCollections extends WebTemplateCollectionMethods {

}

/*********************************************
* WebTemplateCollectionMethods
**********************************************/
export interface WebTemplateCollectionMethods {
	getByName(name?: string): Base.IBaseQuery<SP.WebTemplate> & SP.WebTemplateCollections;
}

/*********************************************
* TeamChannel
**********************************************/
export interface TeamChannel {
	folderId?: any;
	groupId?: number;
}

/*********************************************
* TeamChannelCollections
**********************************************/
export interface TeamChannelCollections {

}

/*********************************************
* TenantAppUtility
**********************************************/
export interface TenantAppUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantAppUtilityCollections
**********************************************/
export interface TenantAppUtilityCollections {

}

/*********************************************
* TenantSettings
**********************************************/
export interface TenantSettings {
	CorporateCatalogUrl?: string;
}

/*********************************************
* TenantSettingsCollections
**********************************************/
export interface TenantSettingsCollections {

}

/*********************************************
* TenantSettingsOData
**********************************************/
export interface TenantSettingsOData extends Base.IBaseResult, TenantSettings {
	Current: SP.TenantSettings & SP.TenantSettingsCollections;
}

/*********************************************
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalIdentityProviderCollections
**********************************************/
export interface AppPrincipalIdentityProviderCollections {

}

/*********************************************
* AppPrincipalIdentityProviderOData
**********************************************/
export interface AppPrincipalIdentityProviderOData extends Base.IBaseResult, AppPrincipalIdentityProvider {
	External: SP.AppPrincipalIdentityProvider & SP.AppPrincipalIdentityProviderCollections;
}

/*********************************************
* AppPrincipalManager
**********************************************/
export interface AppPrincipalManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalManagerCollections
**********************************************/
export interface AppPrincipalManagerCollections {

}

/*********************************************
* CompanyPortalContext
**********************************************/
export interface CompanyPortalContext {
	FooterEmphasis?: number;
	FooterLayout?: number;
	FooterNavigation?: string;
	HeaderEmphasis?: number;
	HeaderLayout?: number;
	HubSiteData?: string;
	HubSiteId?: string;
	IsAudienceTargeted?: boolean;
	IsFooterEnabled?: boolean;
	IsHubSite?: boolean;
	IsMegaMenuEnabled?: boolean;
	Language?: number;
	NavigationInfo?: string;
	SiteAcronym?: string;
	SiteId?: string;
	siteUrl?: string;
	ThemedCssFolderUrl?: string;
	ThemeInfo?: string;
	WebAbsoluteUrl?: string;
	WebLogoBackgroundColor?: string;
	WebLogoUrl?: string;
	WebServerRelativeUrl?: string;
	WebTitle?: string;
}

/*********************************************
* CompanyPortalContextCollections
**********************************************/
export interface CompanyPortalContextCollections {

}

/*********************************************
* AppPrincipalCredential
**********************************************/
export interface AppPrincipalCredential {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalCredentialCollections
**********************************************/
export interface AppPrincipalCredentialCollections {

}

/*********************************************
* AppPrincipalName
**********************************************/
export interface AppPrincipalName {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalNameCollections
**********************************************/
export interface AppPrincipalNameCollections {

}
