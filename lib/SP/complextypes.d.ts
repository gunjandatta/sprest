import { Base } from "../";
import { SP } from "../";

/*********************************************
* KeyValue
**********************************************/
export interface KeyValue {
	Key?: string;
	Value?: string;
	ValueType?: string;
}

/*********************************************
* KeyValueCollections
**********************************************/
export interface KeyValueCollections {

}

/*********************************************
* SimpleDataRow
**********************************************/
export interface SimpleDataRow {
	Cells?: Array<SP.KeyValue>;
}

/*********************************************
* SimpleDataRowCollections
**********************************************/
export interface SimpleDataRowCollections {

}

/*********************************************
* SimpleDataTable
**********************************************/
export interface SimpleDataTable {
	Rows?: Array<SP.SimpleDataRow>;
}

/*********************************************
* SimpleDataTableCollections
**********************************************/
export interface SimpleDataTableCollections {

}

/*********************************************
* MethodInformation
**********************************************/
export interface MethodInformation {
	IsBeta?: boolean;
	Name?: string;
	Parameters?: Array<SP.ParameterInformation>;
	ReturnTypeFullName?: string;
}

/*********************************************
* MethodInformationCollections
**********************************************/
export interface MethodInformationCollections {

}

/*********************************************
* ParameterInformation
**********************************************/
export interface ParameterInformation {
	Name?: string;
	ParameterTypeFullName?: string;
}

/*********************************************
* ParameterInformationCollections
**********************************************/
export interface ParameterInformationCollections {

}

/*********************************************
* PropertyInformation
**********************************************/
export interface PropertyInformation {
	ExcludeFromDefaultRetrieval?: boolean;
	IsBeta?: boolean;
	Name?: string;
	PropertyTypeFullName?: string;
	ReadOnly?: boolean;
}

/*********************************************
* PropertyInformationCollections
**********************************************/
export interface PropertyInformationCollections {

}

/*********************************************
* PortalAndOrgNewsSiteReference
**********************************************/
export interface PortalAndOrgNewsSiteReference {
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* PortalAndOrgNewsSiteReferenceCollections
**********************************************/
export interface PortalAndOrgNewsSiteReferenceCollections {

}

/*********************************************
* OrganizationNewsSiteReference
**********************************************/
export interface OrganizationNewsSiteReference {

}

/*********************************************
* OrganizationNewsSiteReferenceCollections
**********************************************/
export interface OrganizationNewsSiteReferenceCollections {

}

/*********************************************
* SPHSiteReference
**********************************************/
export interface SPHSiteReference {
	LogoUrl?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* SPHSiteReferenceCollections
**********************************************/
export interface SPHSiteReferenceCollections {

}

/*********************************************
* KnowledgeHubSiteReference
**********************************************/
export interface KnowledgeHubSiteReference {
	SiteId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* KnowledgeHubSiteReferenceCollections
**********************************************/
export interface KnowledgeHubSiteReferenceCollections {

}

/*********************************************
* ResourcePath
**********************************************/
export interface ResourcePath {
	DecodedUrl?: string;
}

/*********************************************
* ResourcePathCollections
**********************************************/
export interface ResourcePathCollections {

}

/*********************************************
* ContentTypeId
**********************************************/
export interface ContentTypeId {
	StringValue?: string;
}

/*********************************************
* ContentTypeIdCollections
**********************************************/
export interface ContentTypeIdCollections {

}

/*********************************************
* FieldLookupValue
**********************************************/
export interface FieldLookupValue {
	LookupId?: number;
	LookupValue?: string;
}

/*********************************************
* FieldLookupValueCollections
**********************************************/
export interface FieldLookupValueCollections {

}

/*********************************************
* FieldUserValue
**********************************************/
export interface FieldUserValue {
	Email?: string;
}

/*********************************************
* FieldUserValueCollections
**********************************************/
export interface FieldUserValueCollections {

}

/*********************************************
* CountByDate
**********************************************/
export interface CountByDate {
	count?: number;
	date?: number;
}

/*********************************************
* CountByDateCollections
**********************************************/
export interface CountByDateCollections {

}

/*********************************************
* CreatableItemInfoCollection
**********************************************/
export interface CreatableItemInfoCollection {
	Items?: Array<SP.CreatableItemInfo>;
}

/*********************************************
* CreatableItemInfoCollectionCollections
**********************************************/
export interface CreatableItemInfoCollectionCollections {

}

/*********************************************
* CreatableItemInfo
**********************************************/
export interface CreatableItemInfo {
	DocumentTemplate?: number;
	FileExtension?: string;
	ItemType?: string;
}

/*********************************************
* CreatableItemInfoCollections
**********************************************/
export interface CreatableItemInfoCollections {

}

/*********************************************
* CurrencyInformationCollection
**********************************************/
export interface CurrencyInformationCollection {
	Items?: Array<SP.CurrencyInformation>;
}

/*********************************************
* CurrencyInformationCollectionCollections
**********************************************/
export interface CurrencyInformationCollectionCollections {

}

/*********************************************
* CurrencyInformation
**********************************************/
export interface CurrencyInformation {
	DisplayString?: string;
	LCID?: string;
}

/*********************************************
* CurrencyInformationCollections
**********************************************/
export interface CurrencyInformationCollections {

}

/*********************************************
* EncryptionOption
**********************************************/
export interface EncryptionOption {
	AES256CBCKey?: any;
}

/*********************************************
* EncryptionOptionCollections
**********************************************/
export interface EncryptionOptionCollections {

}

/*********************************************
* IngestionTaskKey
**********************************************/
export interface IngestionTaskKey {
	IngestionTableAccountKey?: string;
	IngestionTableAccountName?: string;
	JobId?: string;
	TaskId?: string;
	TenantName?: string;
}

/*********************************************
* IngestionTaskKeyCollections
**********************************************/
export interface IngestionTaskKeyCollections {

}

/*********************************************
* MultiGeoCopyParameters
**********************************************/
export interface MultiGeoCopyParameters {
	binaryPayload?: any;
	jobId?: any;
	userId?: number;
}

/*********************************************
* MultiGeoCopyParametersCollections
**********************************************/
export interface MultiGeoCopyParametersCollections {

}

/*********************************************
* RelatedItem
**********************************************/
export interface RelatedItem {
	IconUrl?: string;
	ItemId?: number;
	ListId?: string;
	Title?: string;
	Url?: string;
	WebId?: string;
}

/*********************************************
* RelatedItemCollections
**********************************************/
export interface RelatedItemCollections {

}

/*********************************************
* ScriptSafeDomainEntityData
**********************************************/
export interface ScriptSafeDomainEntityData {
	DomainName?: string;
}

/*********************************************
* ScriptSafeDomainEntityDataCollections
**********************************************/
export interface ScriptSafeDomainEntityDataCollections {

}

/*********************************************
* SharedWithUserCollection
**********************************************/
export interface SharedWithUserCollection {
	Items?: Array<SP.SharedWithUser>;
}

/*********************************************
* SharedWithUserCollectionCollections
**********************************************/
export interface SharedWithUserCollectionCollections {

}

/*********************************************
* SharedWithUser
**********************************************/
export interface SharedWithUser {
	Email?: string;
	Name?: string;
}

/*********************************************
* SharedWithUserCollections
**********************************************/
export interface SharedWithUserCollections {

}

/*********************************************
* SharingLinkData
**********************************************/
export interface SharingLinkData {
	BlocksDownload?: boolean;
	Description?: string;
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	IsAnonymous?: boolean;
	IsCreateOnlyLink?: boolean;
	IsFormsLink?: boolean;
	IsOriginatedFromSharingFlow?: boolean;
	IsReviewLink?: boolean;
	IsSharingLink?: boolean;
	IsWritable?: boolean;
	LinkKind?: number;
	ObjectType?: number;
	ObjectUniqueId?: any;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	ShareId?: any;
}

/*********************************************
* SharingLinkDataCollections
**********************************************/
export interface SharingLinkDataCollections {

}

/*********************************************
* SharingLinkInfo
**********************************************/
export interface SharingLinkInfo {
	AllowsAnonymousAccess?: boolean;
	ApplicationId?: string;
	BlocksDownload?: boolean;
	Created?: string;
	CreatedBy?: SP.Sharing.Principal;
	Description?: string;
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	Invitations?: Array<SP.Sharing.LinkInvitation>;
	IsActive?: boolean;
	IsAddressBarLink?: boolean;
	IsCreateOnlyLink?: boolean;
	IsDefault?: boolean;
	IsEditLink?: boolean;
	IsFormsLink?: boolean;
	IsReviewLink?: boolean;
	IsUnhealthy?: boolean;
	LastModified?: string;
	LastModifiedBy?: SP.Sharing.Principal;
	LimitUseToApplication?: boolean;
	LinkKind?: number;
	PasswordLastModified?: string;
	PasswordLastModifiedBy?: SP.Sharing.Principal;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	ShareId?: any;
	ShareTokenString?: string;
	Url?: string;
}

/*********************************************
* SharingLinkInfoCollections
**********************************************/
export interface SharingLinkInfoCollections {

}

/*********************************************
* UserIdInfo
**********************************************/
export interface UserIdInfo {
	NameId?: string;
	NameIdIssuer?: string;
}

/*********************************************
* UserIdInfoCollections
**********************************************/
export interface UserIdInfoCollections {

}

/*********************************************
* AlertCreationInformation
**********************************************/
export interface AlertCreationInformation {
	AlertFrequency?: number;
	AlertTemplateName?: string;
	AlertTime?: any;
	AlertType?: number;
	AlwaysNotify?: boolean;
	DeliveryChannels?: number;
	EventType?: number;
	EventTypeBitmask?: number;
	Filter?: string;
	Properties?: Array<SP.KeyValue>;
	Status?: number;
	Title?: string;
}

/*********************************************
* AlertCreationInformationCollections
**********************************************/
export interface AlertCreationInformationCollections {

}

/*********************************************
* AppLicenseCollection
**********************************************/
export interface AppLicenseCollection {
	Items?: Array<SP.AppLicense>;
}

/*********************************************
* AppLicenseCollectionCollections
**********************************************/
export interface AppLicenseCollectionCollections {

}

/*********************************************
* AppLicense
**********************************************/
export interface AppLicense {
	RawXMLLicenseToken?: string;
}

/*********************************************
* AppLicenseCollections
**********************************************/
export interface AppLicenseCollections {

}

/*********************************************
* AppProperties
**********************************************/
export interface AppProperties {
	AppSettingsEnabled?: boolean;
	Description?: string;
	EulaUrl?: string;
	IsAnonymous?: boolean;
	IsDisabled?: boolean;
	ManagedDeploymentEnabled?: boolean;
	ManagePermissionsEnabled?: boolean;
	ManageSeatsEnabled?: boolean;
	MonitoringEnabled?: boolean;
	Publisher?: string;
	RemoveEnabled?: boolean;
	SideLoadEnabled?: boolean;
	SupportUrl?: string;
	ViewInMarketPlaceEnabled?: boolean;
}

/*********************************************
* AppPropertiesCollections
**********************************************/
export interface AppPropertiesCollections {

}

/*********************************************
* AppSiteContext
**********************************************/
export interface AppSiteContext {
	SiteUrl?: string;
}

/*********************************************
* AppSiteContextCollections
**********************************************/
export interface AppSiteContextCollections {

}

/*********************************************
* AppViewCreationInfo
**********************************************/
export interface AppViewCreationInfo {
	AppId?: any;
	IsPrivate?: boolean;
	Title?: string;
}

/*********************************************
* AppViewCreationInfoCollections
**********************************************/
export interface AppViewCreationInfoCollections {

}

/*********************************************
* AsyncReadJobInfo
**********************************************/
export interface AsyncReadJobInfo {
	CurrentChangeToken?: string;
	JobId?: any;
}

/*********************************************
* AsyncReadJobInfoCollections
**********************************************/
export interface AsyncReadJobInfoCollections {

}

/*********************************************
* AsyncReadOptions
**********************************************/
export interface AsyncReadOptions {
	IncludeDirectDescendantsOnly?: boolean;
	IncludeExtendedMetadata?: boolean;
	IncludeSecurity?: boolean;
	IncludeVersions?: boolean;
	StartChangeToken?: string;
}

/*********************************************
* AsyncReadOptionsCollections
**********************************************/
export interface AsyncReadOptionsCollections {

}

/*********************************************
* AttachmentCreationInformation
**********************************************/
export interface AttachmentCreationInformation {
	FileName?: string;
}

/*********************************************
* AttachmentCreationInformationCollections
**********************************************/
export interface AttachmentCreationInformationCollections {

}

/*********************************************
* BasePermissions
**********************************************/
export interface BasePermissions {
	High?: number;
	Low?: number;
}

/*********************************************
* BasePermissionsCollections
**********************************************/
export interface BasePermissionsCollections {

}

/*********************************************
* ChangeLogItemQuery
**********************************************/
export interface ChangeLogItemQuery {
	ChangeToken?: string;
	Contains?: string;
	Query?: string;
	QueryOptions?: string;
	RowLimit?: string;
	ViewFields?: string;
	ViewName?: string;
}

/*********************************************
* ChangeLogItemQueryCollections
**********************************************/
export interface ChangeLogItemQueryCollections {

}

/*********************************************
* ChangeQuery
**********************************************/
export interface ChangeQuery {
	Activity?: boolean;
	Add?: boolean;
	Alert?: boolean;
	ChangeTokenEnd?: SP.ChangeToken;
	ChangeTokenStart?: SP.ChangeToken;
	ContentType?: boolean;
	DeleteObject?: boolean;
	FetchLimit?: number;
	Field?: boolean;
	File?: boolean;
	Folder?: boolean;
	Group?: boolean;
	GroupMembershipAdd?: boolean;
	GroupMembershipDelete?: boolean;
	Item?: boolean;
	LatestFirst?: boolean;
	List?: boolean;
	Move?: boolean;
	Navigation?: boolean;
	RecursiveAll?: boolean;
	Rename?: boolean;
	RequireSecurityTrim?: boolean;
	Restore?: boolean;
	RoleAssignmentAdd?: boolean;
	RoleAssignmentDelete?: boolean;
	RoleDefinitionAdd?: boolean;
	RoleDefinitionDelete?: boolean;
	RoleDefinitionUpdate?: boolean;
	SecurityPolicy?: boolean;
	Site?: boolean;
	SystemUpdate?: boolean;
	Update?: boolean;
	User?: boolean;
	View?: boolean;
	Web?: boolean;
}

/*********************************************
* ChangeQueryCollections
**********************************************/
export interface ChangeQueryCollections {

}

/*********************************************
* ChangeToken
**********************************************/
export interface ChangeToken {
	StringValue?: string;
}

/*********************************************
* ChangeTokenCollections
**********************************************/
export interface ChangeTokenCollections {

}

/*********************************************
* ClassificationResult
**********************************************/
export interface ClassificationResult {
	ConfidenceScore?: number;
	ContentTypeId?: string;
	Metas?: Array<SP.KeyValue>;
	ModelId?: string;
	ModelVersion?: string;
}

/*********************************************
* ClassificationResultCollections
**********************************************/
export interface ClassificationResultCollections {

}

/*********************************************
* ListItemComplianceInfo
**********************************************/
export interface ListItemComplianceInfo {
	ComplianceTag?: string;
	TagPolicyEventBased?: boolean;
	TagPolicyHold?: boolean;
	TagPolicyRecord?: boolean;
}

/*********************************************
* ListItemComplianceInfoCollections
**********************************************/
export interface ListItemComplianceInfoCollections {

}

/*********************************************
* ContentTypeCreationInformation
**********************************************/
export interface ContentTypeCreationInformation {
	Description?: string;
	Group?: string;
	Id?: string;
	Name?: string;
}

/*********************************************
* ContentTypeCreationInformationCollections
**********************************************/
export interface ContentTypeCreationInformationCollections {

}

/*********************************************
* ContextWebInformation
**********************************************/
export interface ContextWebInformation {
	FormDigestTimeoutSeconds?: number;
	FormDigestValue?: string;
	LibraryVersion?: string;
	SiteFullUrl?: string;
	SupportedSchemaVersions?: Array<string>;
	WebFullUrl?: string;
}

/*********************************************
* ContextWebInformationCollections
**********************************************/
export interface ContextWebInformationCollections {

}

/*********************************************
* CopyJobProgress
**********************************************/
export interface CopyJobProgress {
	JobState?: number;
	Logs?: Array<string>;
}

/*********************************************
* CopyJobProgressCollections
**********************************************/
export interface CopyJobProgressCollections {

}

/*********************************************
* CopyMigrationInfo
**********************************************/
export interface CopyMigrationInfo {
	EncryptionKey?: any;
	JobId?: any;
	JobQueueUri?: string;
	SourceListItemUniqueIds?: Array<any>;
}

/*********************************************
* CopyMigrationInfoCollections
**********************************************/
export interface CopyMigrationInfoCollections {

}

/*********************************************
* CopyMigrationOptions
**********************************************/
export interface CopyMigrationOptions {
	AllowSchemaMismatch?: boolean;
	AllowSmallerVersionLimitOnDestination?: boolean;
	IgnoreVersionHistory?: boolean;
	IncludeItemPermissions?: boolean;
	IsMoveMode?: boolean;
	MoveAndShareFileInfo?: SP.SPMoveAndShareFileInfo;
	NameConflictBehavior?: number;
}

/*********************************************
* CopyMigrationOptionsCollections
**********************************************/
export interface CopyMigrationOptionsCollections {

}

/*********************************************
* SPMoveAndShareFileInfo
**********************************************/
export interface SPMoveAndShareFileInfo {
	ItemPermissionableUserIds?: Array<number>;
}

/*********************************************
* SPMoveAndShareFileInfoCollections
**********************************************/
export interface SPMoveAndShareFileInfoCollections {

}

/*********************************************
* CustomActionElementCollection
**********************************************/
export interface CustomActionElementCollection {
	Items?: Array<SP.CustomActionElement>;
}

/*********************************************
* CustomActionElementCollectionCollections
**********************************************/
export interface CustomActionElementCollectionCollections {

}

/*********************************************
* CustomActionElement
**********************************************/
export interface CustomActionElement {
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CommandUIExtension?: string;
	Id?: string;
	EnabledScript?: string;
	HostProperties?: string;
	ImageUrl?: string;
	Location?: string;
	RegistrationId?: string;
	RegistrationType?: number;
	RequireSiteAdministrator?: boolean;
	Rights?: SP.BasePermissions;
	Title?: string;
	UrlAction?: string;
}

/*********************************************
* CustomActionElementCollections
**********************************************/
export interface CustomActionElementCollections {

}

/*********************************************
* CustomerKeyInfo
**********************************************/
export interface CustomerKeyInfo {
	PrimaryKeyVault?: SP.CustomerKeyVaultInfo;
	SecondaryKeyVault?: SP.CustomerKeyVaultInfo;
}

/*********************************************
* CustomerKeyInfoCollections
**********************************************/
export interface CustomerKeyInfoCollections {

}

/*********************************************
* CustomerKeyVaultInfo
**********************************************/
export interface CustomerKeyVaultInfo {
	KeyName?: string;
	KeyVersion?: any;
	VaultName?: string;
}

/*********************************************
* CustomerKeyVaultInfoCollections
**********************************************/
export interface CustomerKeyVaultInfoCollections {

}

/*********************************************
* CustomerKeyStatusInfo
**********************************************/
export interface CustomerKeyStatusInfo {
	PrimaryKeyVaultUri?: string;
	RecoveryEnabled?: boolean;
	SecondaryKeyVaultUri?: string;
	Status?: number;
}

/*********************************************
* CustomerKeyStatusInfoCollections
**********************************************/
export interface CustomerKeyStatusInfoCollections {

}

/*********************************************
* DocumentLibraryInformation
**********************************************/
export interface DocumentLibraryInformation {
	AbsoluteUrl?: string;
	FromCrossFarm?: boolean;
	Modified?: any;
	ModifiedFriendlyDisplay?: string;
	ServerRelativeUrl?: string;
	Title?: string;
}

/*********************************************
* DocumentLibraryInformationCollections
**********************************************/
export interface DocumentLibraryInformationCollections {

}

/*********************************************
* EventReceiverDefinitionCreationInformation
**********************************************/
export interface EventReceiverDefinitionCreationInformation {
	ReceiverAssembly?: string;
	ReceiverClass?: string;
	ReceiverName?: string;
	SequenceNumber?: number;
	Synchronization?: number;
	EventType?: number;
	ReceiverUrl?: string;
}

/*********************************************
* EventReceiverDefinitionCreationInformationCollections
**********************************************/
export interface EventReceiverDefinitionCreationInformationCollections {

}

/*********************************************
* ListDataValidationFailure
**********************************************/
export interface ListDataValidationFailure {
	DisplayName?: string;
	Message?: string;
	Name?: string;
	Reason?: number;
	ValidationType?: number;
}

/*********************************************
* ListDataValidationFailureCollections
**********************************************/
export interface ListDataValidationFailureCollections {

}

/*********************************************
* FieldCalculatedErrorValue
**********************************************/
export interface FieldCalculatedErrorValue {
	ErrorMessage?: string;
}

/*********************************************
* FieldCalculatedErrorValueCollections
**********************************************/
export interface FieldCalculatedErrorValueCollections {

}

/*********************************************
* FieldCreationInformation
**********************************************/
export interface FieldCreationInformation {
	Choices?: Array<string>;
	IsCompactName?: boolean;
	LookupFieldName?: string;
	LookupListId?: any;
	LookupWebId?: any;
	Required?: boolean;
	Title?: string;
	FieldTypeKind?: number;
}

/*********************************************
* FieldCreationInformationCollections
**********************************************/
export interface FieldCreationInformationCollections {

}

/*********************************************
* FieldGeolocationValue
**********************************************/
export interface FieldGeolocationValue {
	Altitude?: number;
	Latitude?: number;
	Longitude?: number;
	Measure?: number;
}

/*********************************************
* FieldGeolocationValueCollections
**********************************************/
export interface FieldGeolocationValueCollections {

}

/*********************************************
* FieldRatingScaleQuestionAnswer
**********************************************/
export interface FieldRatingScaleQuestionAnswer {
	Answer?: number;
	Question?: string;
}

/*********************************************
* FieldRatingScaleQuestionAnswerCollections
**********************************************/
export interface FieldRatingScaleQuestionAnswerCollections {

}

/*********************************************
* FieldUrlValue
**********************************************/
export interface FieldUrlValue {
	Description?: string;
	Url?: string;
}

/*********************************************
* FieldUrlValueCollections
**********************************************/
export interface FieldUrlValueCollections {

}

/*********************************************
* FileCollectionAddParameters
**********************************************/
export interface FileCollectionAddParameters {
	AutoCheckoutOnInvalidData?: boolean;
	Overwrite?: boolean;
	XorHash?: string;
}

/*********************************************
* FileCollectionAddParametersCollections
**********************************************/
export interface FileCollectionAddParametersCollections {

}

/*********************************************
* FileCreationInformation
**********************************************/
export interface FileCreationInformation {
	Content?: any;
	Overwrite?: boolean;
	Url?: string;
}

/*********************************************
* FileCreationInformationCollections
**********************************************/
export interface FileCreationInformationCollections {

}

/*********************************************
* FileDeleteParameters
**********************************************/
export interface FileDeleteParameters {
	BypassSharedLock?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FileDeleteParametersCollections
**********************************************/
export interface FileDeleteParametersCollections {

}

/*********************************************
* FolderCollectionAddParameters
**********************************************/
export interface FolderCollectionAddParameters {
	Overwrite?: boolean;
}

/*********************************************
* FolderCollectionAddParametersCollections
**********************************************/
export interface FolderCollectionAddParametersCollections {

}

/*********************************************
* FolderDeleteParameters
**********************************************/
export interface FolderDeleteParameters {
	BypassSharedLock?: boolean;
	DeleteIfEmpty?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FolderDeleteParametersCollections
**********************************************/
export interface FolderDeleteParametersCollections {

}

/*********************************************
* GroupCreationInformation
**********************************************/
export interface GroupCreationInformation {
	Description?: string;
	Title?: string;
}

/*********************************************
* GroupCreationInformationCollections
**********************************************/
export interface GroupCreationInformationCollections {

}

/*********************************************
* Hashtag
**********************************************/
export interface Hashtag {
	Actor?: string;
	Application?: string;
	Label?: string;
	Timestamp?: any;
}

/*********************************************
* HashtagCollections
**********************************************/
export interface HashtagCollections {

}

/*********************************************
* HubSiteCreationInformation
**********************************************/
export interface HubSiteCreationInformation {
	Description?: string;
	EnablePermissionsSync?: boolean;
	HideNameInNavigation?: boolean;
	LogoUrl?: string;
	ParentHubSiteId?: any;
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Targets?: string;
	TenantInstanceId?: any;
	Title?: string;
}

/*********************************************
* HubSiteCreationInformationCollections
**********************************************/
export interface HubSiteCreationInformationCollections {

}

/*********************************************
* SPInvitationCreationResult
**********************************************/
export interface SPInvitationCreationResult {
	Email?: string;
	InvitationLink?: string;
	Succeeded?: boolean;
}

/*********************************************
* SPInvitationCreationResultCollections
**********************************************/
export interface SPInvitationCreationResultCollections {

}

/*********************************************
* Language
**********************************************/
export interface Language {
	DisplayName?: string;
	LanguageTag?: string;
	Lcid?: number;
}

/*********************************************
* LanguageCollections
**********************************************/
export interface LanguageCollections {

}

/*********************************************
* ListCreationInformation
**********************************************/
export interface ListCreationInformation {
	CustomSchemaXml?: string;
	DataSourceProperties?: Array<SP.KeyValue>;
	Description?: string;
	DocumentTemplateType?: number;
	QuickLaunchOption?: number;
	TemplateFeatureId?: any;
	TemplateType?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* ListCreationInformationCollections
**********************************************/
export interface ListCreationInformationCollections {

}

/*********************************************
* ListDataSource
**********************************************/
export interface ListDataSource {
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* ListDataSourceCollections
**********************************************/
export interface ListDataSourceCollections {

}

/*********************************************
* ListDataValidationExceptionValue
**********************************************/
export interface ListDataValidationExceptionValue {
	FieldFailures?: Array<SP.ListDataValidationFailure>;
	ItemFailure?: SP.ListDataValidationFailure;
}

/*********************************************
* ListDataValidationExceptionValueCollections
**********************************************/
export interface ListDataValidationExceptionValueCollections {

}

/*********************************************
* ListItemCollectionPosition
**********************************************/
export interface ListItemCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListItemCollectionPositionCollections
**********************************************/
export interface ListItemCollectionPositionCollections {

}

/*********************************************
* ListItemCreationInformationUsingPath
**********************************************/
export interface ListItemCreationInformationUsingPath {
	FolderPath?: SP.ResourcePath;
	LeafName?: SP.ResourcePath;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemCreationInformationUsingPathCollections
**********************************************/
export interface ListItemCreationInformationUsingPathCollections {

}

/*********************************************
* ListItemCreationInformation
**********************************************/
export interface ListItemCreationInformation {
	FolderUrl?: string;
	LeafName?: string;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemCreationInformationCollections
**********************************************/
export interface ListItemCreationInformationCollections {

}

/*********************************************
* ListItemDeleteParameters
**********************************************/
export interface ListItemDeleteParameters {
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemDeleteParametersCollections
**********************************************/
export interface ListItemDeleteParametersCollections {

}

/*********************************************
* ListItemFormUpdateValue
**********************************************/
export interface ListItemFormUpdateValue {
	ErrorMessage?: string;
	FieldName?: string;
	FieldValue?: string;
	HasException?: boolean;
	ItemId?: number;
}

/*********************************************
* ListItemFormUpdateValueCollections
**********************************************/
export interface ListItemFormUpdateValueCollections {

}

/*********************************************
* ListItemUpdateParameters
**********************************************/
export interface ListItemUpdateParameters {
	BypassQuotaCheck?: boolean;
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemUpdateParametersCollections
**********************************************/
export interface ListItemUpdateParametersCollections {

}

/*********************************************
* MediaServiceUpdateParameters
**********************************************/
export interface MediaServiceUpdateParameters {
	ClassificationResult?: SP.ClassificationResult;
	ContentVersion?: number;
	MediaServiceAutoKeyPoints?: string;
	MediaServiceAutoTags?: string;
	MediaServiceDateTaken?: string;
	MediaServiceEventHashCode?: string;
	MediaServiceFastMetadata?: string;
	MediaServiceGenerationTime?: string;
	MediaServiceKeyPoints?: string;
	MediaServiceLocation?: string;
	MediaServiceMetadata?: string;
	MediaServiceOCR?: string;
	MediaServiceTranscript?: string;
	SensitivityLabel?: string;
	SensitivityLabelAssignmentMethod?: number;
}

/*********************************************
* MediaServiceUpdateParametersCollections
**********************************************/
export interface MediaServiceUpdateParametersCollections {

}

/*********************************************
* MoveCopyOptions
**********************************************/
export interface MoveCopyOptions {
	KeepBoth?: boolean;
	ResetAuthorAndCreatedOnCopy?: boolean;
	ShouldBypassSharedLocks?: boolean;
}

/*********************************************
* MoveCopyOptionsCollections
**********************************************/
export interface MoveCopyOptionsCollections {

}

/*********************************************
* ProvisionedMigrationContainersInfo
**********************************************/
export interface ProvisionedMigrationContainersInfo {
	DataContainerUri?: string;
	EncryptionKey?: any;
	MetadataContainerUri?: string;
}

/*********************************************
* ProvisionedMigrationContainersInfoCollections
**********************************************/
export interface ProvisionedMigrationContainersInfoCollections {

}

/*********************************************
* ProvisionedMigrationQueueInfo
**********************************************/
export interface ProvisionedMigrationQueueInfo {
	JobQueueUri?: string;
}

/*********************************************
* ProvisionedMigrationQueueInfoCollections
**********************************************/
export interface ProvisionedMigrationQueueInfoCollections {

}

/*********************************************
* CamlQuery
**********************************************/
export interface CamlQuery {
	AllowIncrementalResults?: boolean;
	DatesInUtc?: boolean;
	FolderServerRelativePath?: SP.ResourcePath;
	FolderServerRelativeUrl?: string;
	ListItemCollectionPosition?: SP.ListItemCollectionPosition;
	ViewXml?: string;
}

/*********************************************
* CamlQueryCollections
**********************************************/
export interface CamlQueryCollections {

}

/*********************************************
* RecycleBinQueryInformation
**********************************************/
export interface RecycleBinQueryInformation {
	IsAscending?: boolean;
	ItemState?: number;
	OrderBy?: number;
	PagingInfo?: string;
	RowLimit?: number;
	ShowOnlyMyItems?: boolean;
}

/*********************************************
* RecycleBinQueryInformationCollections
**********************************************/
export interface RecycleBinQueryInformationCollections {

}

/*********************************************
* RenderListContextMenuDataParameters
**********************************************/
export interface RenderListContextMenuDataParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	Field?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsXslView?: string;
	ItemId?: string;
	ListViewPageUrl?: string;
	OverrideScope?: string;
	RootFolder?: string;
	View?: string;
	ViewCount?: string;
}

/*********************************************
* RenderListContextMenuDataParametersCollections
**********************************************/
export interface RenderListContextMenuDataParametersCollections {

}

/*********************************************
* RenderListDataOverrideParameters
**********************************************/
export interface RenderListDataOverrideParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	DrillDown?: string;
	Field?: string;
	FieldInternalName?: string;
	Filter?: string;
	FilterData?: string;
	FilterData1?: string;
	FilterData10?: string;
	FilterData2?: string;
	FilterData3?: string;
	FilterData4?: string;
	FilterData5?: string;
	FilterData6?: string;
	FilterData7?: string;
	FilterData8?: string;
	FilterData9?: string;
	FilterField?: string;
	FilterField1?: string;
	FilterField10?: string;
	FilterField2?: string;
	FilterField3?: string;
	FilterField4?: string;
	FilterField5?: string;
	FilterField6?: string;
	FilterField7?: string;
	FilterField8?: string;
	FilterField9?: string;
	FilterFields?: string;
	FilterFields1?: string;
	FilterFields10?: string;
	FilterFields2?: string;
	FilterFields3?: string;
	FilterFields4?: string;
	FilterFields5?: string;
	FilterFields6?: string;
	FilterFields7?: string;
	FilterFields8?: string;
	FilterFields9?: string;
	FilterLookupId?: string;
	FilterLookupId1?: string;
	FilterLookupId10?: string;
	FilterLookupId2?: string;
	FilterLookupId3?: string;
	FilterLookupId4?: string;
	FilterLookupId5?: string;
	FilterLookupId6?: string;
	FilterLookupId7?: string;
	FilterLookupId8?: string;
	FilterLookupId9?: string;
	FilterOp?: string;
	FilterOp1?: string;
	FilterOp10?: string;
	FilterOp2?: string;
	FilterOp3?: string;
	FilterOp4?: string;
	FilterOp5?: string;
	FilterOp6?: string;
	FilterOp7?: string;
	FilterOp8?: string;
	FilterOp9?: string;
	FilterValue?: string;
	FilterValue1?: string;
	FilterValue10?: string;
	FilterValue2?: string;
	FilterValue3?: string;
	FilterValue4?: string;
	FilterValue5?: string;
	FilterValue6?: string;
	FilterValue7?: string;
	FilterValue8?: string;
	FilterValue9?: string;
	FilterValues?: string;
	FilterValues1?: string;
	FilterValues10?: string;
	FilterValues2?: string;
	FilterValues3?: string;
	FilterValues4?: string;
	FilterValues5?: string;
	FilterValues6?: string;
	FilterValues7?: string;
	FilterValues8?: string;
	FilterValues9?: string;
	GroupString?: string;
	HasOverrideSelectCommand?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsGroupRender?: string;
	IsXslView?: string;
	ListViewPageUrl?: string;
	OverrideScope?: string;
	OverrideSelectCommand?: string;
	PageFirstRow?: string;
	PageLastRow?: string;
	RootFolder?: string;
	RootFolderUniqueId?: string;
	SortDir?: string;
	SortDir1?: string;
	SortDir10?: string;
	SortDir2?: string;
	SortDir3?: string;
	SortDir4?: string;
	SortDir5?: string;
	SortDir6?: string;
	SortDir7?: string;
	SortDir8?: string;
	SortDir9?: string;
	SortField?: string;
	SortField1?: string;
	SortField10?: string;
	SortField2?: string;
	SortField3?: string;
	SortField4?: string;
	SortField5?: string;
	SortField6?: string;
	SortField7?: string;
	SortField8?: string;
	SortField9?: string;
	SortFields?: string;
	SortFieldValues?: string;
	View?: string;
	ViewCount?: string;
	ViewId?: string;
	ViewPath?: string;
	WebPartId?: string;
}

/*********************************************
* RenderListDataOverrideParametersCollections
**********************************************/
export interface RenderListDataOverrideParametersCollections {

}

/*********************************************
* RenderListDataParameters
**********************************************/
export interface RenderListDataParameters {
	AddRequiredFields?: boolean;
	AllowMultipleValueFilterForTaxonomyFields?: boolean;
	AudienceTarget?: boolean;
	DatesInUtc?: boolean;
	ExpandGroups?: boolean;
	FirstGroupOnly?: boolean;
	FolderServerRelativeUrl?: string;
	ImageFieldsToTryRewriteToCdnUrls?: string;
	MergeDefaultView?: boolean;
	OriginalDate?: boolean;
	OverrideViewXml?: string;
	Paging?: string;
	RenderOptions?: number;
	ReplaceGroup?: boolean;
	ViewXml?: string;
}

/*********************************************
* RenderListDataParametersCollections
**********************************************/
export interface RenderListDataParametersCollections {

}

/*********************************************
* RenderListFilterDataParameters
**********************************************/
export interface RenderListFilterDataParameters {
	ExcludeFieldFilteringHtml?: boolean;
	FieldInternalName?: string;
	OverrideScope?: string;
	ProcessQStringToCAML?: string;
	ViewId?: string;
}

/*********************************************
* RenderListFilterDataParametersCollections
**********************************************/
export interface RenderListFilterDataParametersCollections {

}

/*********************************************
* RoleDefinitionCreationInformation
**********************************************/
export interface RoleDefinitionCreationInformation {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Name?: string;
	Order?: number;
}

/*********************************************
* RoleDefinitionCreationInformationCollections
**********************************************/
export interface RoleDefinitionCreationInformationCollections {

}

/*********************************************
* UpgradeInfo
**********************************************/
export interface UpgradeInfo {
	ErrorFile?: string;
	Errors?: number;
	LastUpdated?: any;
	LogFile?: string;
	RequestDate?: any;
	RetryCount?: number;
	StartTime?: any;
	Status?: number;
	UpgradeType?: number;
	Warnings?: number;
}

/*********************************************
* UpgradeInfoCollections
**********************************************/
export interface UpgradeInfoCollections {

}

/*********************************************
* SubwebQuery
**********************************************/
export interface SubwebQuery {
	ConfigurationFilter?: number;
	WebTemplateFilter?: number;
}

/*********************************************
* SubwebQueryCollections
**********************************************/
export interface SubwebQueryCollections {

}

/*********************************************
* TenantAppInformation
**********************************************/
export interface TenantAppInformation {
	AppPrincipalId?: string;
	AppWebFullUrl?: string;
	CreationTime?: any;
	IconAbsoluteUrl?: string;
	IconFallbackAbsoluteUrl?: string;
	Id?: any;
	LaunchUrl?: string;
	PackageFingerprint?: any;
	ProductId?: any;
	RemoteAppUrl?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* TenantAppInformationCollections
**********************************************/
export interface TenantAppInformationCollections {

}

/*********************************************
* TimeZoneInformation
**********************************************/
export interface TimeZoneInformation {
	Bias?: number;
	DaylightBias?: number;
	StandardBias?: number;
}

/*********************************************
* TimeZoneInformationCollections
**********************************************/
export interface TimeZoneInformationCollections {

}

/*********************************************
* UsageInfo
**********************************************/
export interface UsageInfo {
	Bandwidth?: number;
	DiscussionStorage?: number;
	Hits?: number;
	Storage?: number;
	StoragePercentageUsed?: number;
	Visits?: number;
}

/*********************************************
* UsageInfoCollections
**********************************************/
export interface UsageInfoCollections {

}

/*********************************************
* UserCreationInformation
**********************************************/
export interface UserCreationInformation {
	Email?: string;
	LoginName?: string;
	Title?: string;
}

/*********************************************
* UserCreationInformationCollections
**********************************************/
export interface UserCreationInformationCollections {

}

/*********************************************
* ViewCreationInformation
**********************************************/
export interface ViewCreationInformation {
	baseViewId?: number;
	Paged?: boolean;
	PersonalView?: boolean;
	Query?: string;
	RowLimit?: number;
	SetAsDefaultView?: boolean;
	Title?: string;
	ViewFields?: Array<string>;
	ViewTypeKind?: number;
}

/*********************************************
* ViewCreationInformationCollections
**********************************************/
export interface ViewCreationInformationCollections {

}

/*********************************************
* VisualizationAppInfo
**********************************************/
export interface VisualizationAppInfo {
	DesignUri?: string;
	Id?: any;
	RuntimeUri?: string;
}

/*********************************************
* VisualizationAppInfoCollections
**********************************************/
export interface VisualizationAppInfoCollections {

}

/*********************************************
* VisualizationField
**********************************************/
export interface VisualizationField {
	InternalName?: string;
	Style?: string;
}

/*********************************************
* VisualizationFieldCollections
**********************************************/
export interface VisualizationFieldCollections {

}

/*********************************************
* VisualizationStyleSet
**********************************************/
export interface VisualizationStyleSet {
	AspectRatio?: string;
	BackgroundColor?: string;
	Fields?: Array<SP.VisualizationField>;
	MinHeight?: string;
}

/*********************************************
* VisualizationStyleSetCollections
**********************************************/
export interface VisualizationStyleSetCollections {

}

/*********************************************
* Visualization
**********************************************/
export interface Visualization {
	DefaultScreen?: SP.VisualizationStyleSet;
	DetailView?: SP.VisualizationStyleSet;
	MediumScreen?: SP.VisualizationStyleSet;
	SmallScreen?: SP.VisualizationStyleSet;
	VisualizationAppInfo?: SP.VisualizationAppInfo;
	VisualizationType?: number;
}

/*********************************************
* VisualizationCollections
**********************************************/
export interface VisualizationCollections {

}

/*********************************************
* WebCreationInformation
**********************************************/
export interface WebCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseSamePermissionsAsParentSite?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebCreationInformationCollections
**********************************************/
export interface WebCreationInformationCollections {

}

/*********************************************
* WebInfoCreationInformation
**********************************************/
export interface WebInfoCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseUniquePermissions?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebInfoCreationInformationCollections
**********************************************/
export interface WebInfoCreationInformationCollections {

}

/*********************************************
* WebRequestInfo
**********************************************/
export interface WebRequestInfo {
	Body?: string;
	Headers?: Array<SP.KeyValue>;
	Method?: string;
	Url?: string;
}

/*********************************************
* WebRequestInfoCollections
**********************************************/
export interface WebRequestInfoCollections {

}

/*********************************************
* WebResponseInfo
**********************************************/
export interface WebResponseInfo {
	Body?: string;
	Headers?: Array<SP.KeyValue>;
	StatusCode?: number;
}

/*********************************************
* WebResponseInfoCollections
**********************************************/
export interface WebResponseInfoCollections {

}

/*********************************************
* XmlSchemaFieldCreationInformation
**********************************************/
export interface XmlSchemaFieldCreationInformation {
	Options?: number;
	SchemaXml?: string;
}

/*********************************************
* XmlSchemaFieldCreationInformationCollections
**********************************************/
export interface XmlSchemaFieldCreationInformationCollections {

}

/*********************************************
* TranslationNotificationRecipientCollection
**********************************************/
export interface TranslationNotificationRecipientCollection {
	LanguageCode?: string;
	Recipients?: Array<SP.TranslationNotificationRecipient>;
}

/*********************************************
* TranslationNotificationRecipientCollectionCollections
**********************************************/
export interface TranslationNotificationRecipientCollectionCollections {

}

/*********************************************
* TranslationNotificationRecipient
**********************************************/
export interface TranslationNotificationRecipient {
	LoginName?: string;
}

/*********************************************
* TranslationNotificationRecipientCollections
**********************************************/
export interface TranslationNotificationRecipientCollections {

}

/*********************************************
* TranslationNotificationRecipientSetRequest
**********************************************/
export interface TranslationNotificationRecipientSetRequest {
	NotificationRecipients?: Array<SP.TranslationNotificationRecipientCollection>;
}

/*********************************************
* TranslationNotificationRecipientSetRequestCollections
**********************************************/
export interface TranslationNotificationRecipientSetRequestCollections {

}

/*********************************************
* TranslationStatusCreationRequest
**********************************************/
export interface TranslationStatusCreationRequest {
	LanguageCodes?: Array<string>;
}

/*********************************************
* TranslationStatusCreationRequestCollections
**********************************************/
export interface TranslationStatusCreationRequestCollections {

}

/*********************************************
* TranslationStatus
**********************************************/
export interface TranslationStatus {
	Culture?: string;
	FileStatus?: any;
	HasPublishedVersion?: boolean;
	LastModified?: any;
	Path?: SP.ResourcePath;
}

/*********************************************
* TranslationStatusCollections
**********************************************/
export interface TranslationStatusCollections {

}

/*********************************************
* MenuNode
**********************************************/
export interface MenuNode {
	AudienceIds?: Array<any>;
	CustomProperties?: Array<SP.KeyValue>;
	FriendlyUrlSegment?: string;
	IsDeleted?: boolean;
	IsHidden?: boolean;
	Key?: string;
	Nodes?: Array<SP.MenuNode>;
	NodeType?: number;
	SimpleUrl?: string;
	Title?: string;
}

/*********************************************
* MenuNodeCollections
**********************************************/
export interface MenuNodeCollections {

}

/*********************************************
* MenuState
**********************************************/
export interface MenuState {
	AudienceIds?: Array<any>;
	FriendlyUrlPrefix?: string;
	Nodes?: Array<SP.MenuNode>;
	SimpleUrl?: string;
	SPSitePrefix?: string;
	SPWebPrefix?: string;
	StartingNodeKey?: string;
	StartingNodeTitle?: string;
	Version?: string;
}

/*********************************************
* MenuStateCollections
**********************************************/
export interface MenuStateCollections {

}

/*********************************************
* NavigationNodeCreationInformation
**********************************************/
export interface NavigationNodeCreationInformation {
	AsLastNode?: boolean;
	IsExternal?: boolean;
	Title?: string;
	Url?: string;
}

/*********************************************
* NavigationNodeCreationInformationCollections
**********************************************/
export interface NavigationNodeCreationInformationCollections {

}
