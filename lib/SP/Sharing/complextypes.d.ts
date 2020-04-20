import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* Principal
**********************************************/
export interface Principal {
	email?: string;
	expiration?: string;
	id?: number;
	isActive?: boolean;
	isExternal?: boolean;
	jobTitle?: string;
	loginName?: string;
	name?: string;
	principalType?: number;
	userId?: SP.UserIdInfo;
	userPrincipalName?: string;
}

/*********************************************
* PrincipalCollections
**********************************************/
export interface PrincipalCollections {

}

/*********************************************
* LinkInvitation
**********************************************/
export interface LinkInvitation {
	invitedBy?: SP.Sharing.Principal;
	invitedOn?: string;
	invitee?: SP.Sharing.Principal;
}

/*********************************************
* LinkInvitationCollections
**********************************************/
export interface LinkInvitationCollections {

}

/*********************************************
* AccessRequestSettings
**********************************************/
export interface AccessRequestSettings {
	hasPendingAccessRequests?: boolean;
	pendingAccessRequestsLink?: string;
	requiresAccessApproval?: boolean;
}

/*********************************************
* AccessRequestSettingsCollections
**********************************************/
export interface AccessRequestSettingsCollections {

}

/*********************************************
* AddressBarLinkSettings
**********************************************/
export interface AddressBarLinkSettings {
	linkDisabled?: boolean;
	linkPermission?: number;
}

/*********************************************
* AddressBarLinkSettingsCollections
**********************************************/
export interface AddressBarLinkSettingsCollections {

}

/*********************************************
* DirectSharingAbilities
**********************************************/
export interface DirectSharingAbilities {
	canAddExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canAddInternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccess?: SP.Sharing.SharingAbilityStatus;
	supportsReviewPermission?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* DirectSharingAbilitiesCollections
**********************************************/
export interface DirectSharingAbilitiesCollections {

}

/*********************************************
* SharingAbilityStatus
**********************************************/
export interface SharingAbilityStatus {
	disabledReason?: number;
	enabled?: boolean;
}

/*********************************************
* SharingAbilityStatusCollections
**********************************************/
export interface SharingAbilityStatusCollections {

}

/*********************************************
* DomainRestrictionSettings
**********************************************/
export interface DomainRestrictionSettings {
	domainRestrictionMode?: number;
	domainRestrictionModeAtSite?: number;
	restrictedDomains?: string;
	restrictedDomainsAtSite?: string;
}

/*********************************************
* DomainRestrictionSettingsCollections
**********************************************/
export interface DomainRestrictionSettingsCollections {

}

/*********************************************
* EmailData
**********************************************/
export interface EmailData {
	body?: string;
	subject?: string;
}

/*********************************************
* EmailDataCollections
**********************************************/
export interface EmailDataCollections {

}

/*********************************************
* EntityPermission
**********************************************/
export interface EntityPermission {
	canHaveAccess?: boolean;
	existingAccessType?: number;
	hasAccess?: boolean;
	inputEntity?: string;
	isPending?: boolean;
	recipientDeniedReason?: number;
	resolvedEntity?: string;
	role?: number;
}

/*********************************************
* EntityPermissionCollections
**********************************************/
export interface EntityPermissionCollections {

}

/*********************************************
* LinkInfo
**********************************************/
export interface LinkInfo {
	isInherited?: boolean;
	linkDetails?: SP.SharingLinkInfo;
	linkMembers?: Array<SP.Sharing.Principal>;
}

/*********************************************
* LinkInfoCollections
**********************************************/
export interface LinkInfoCollections {

}

/*********************************************
* OversharedWebInfo
**********************************************/
export interface OversharedWebInfo {
	hasUniqueRoleAssignmentsForList?: boolean;
	principals?: Array<SP.Sharing.Principal>;
}

/*********************************************
* OversharedWebInfoCollections
**********************************************/
export interface OversharedWebInfoCollections {

}

/*********************************************
* PermissionCollection
**********************************************/
export interface PermissionCollection {
	hasInheritedLinks?: boolean;
	links?: Array<SP.Sharing.LinkInfo>;
	principals?: Array<SP.Sharing.PrincipalInfo>;
	siteAdmins?: Array<SP.Sharing.PrincipalInfo>;
}

/*********************************************
* PermissionCollectionCollections
**********************************************/
export interface PermissionCollectionCollections {

}

/*********************************************
* PrincipalInfo
**********************************************/
export interface PrincipalInfo {
	principal?: SP.Sharing.Principal;
	role?: number;
}

/*********************************************
* PrincipalInfoCollections
**********************************************/
export interface PrincipalInfoCollections {

}

/*********************************************
* Recipient
**********************************************/
export interface Recipient {
	alias?: string;
	email?: string;
	objectId?: string;
}

/*********************************************
* RecipientCollections
**********************************************/
export interface RecipientCollections {

}

/*********************************************
* SharedWithMeViewItemRemovalResult
**********************************************/
export interface SharedWithMeViewItemRemovalResult {
	ErrorCode?: number;
	ErrorMessage?: string;
	Success?: boolean;
}

/*********************************************
* SharedWithMeViewItemRemovalResultCollections
**********************************************/
export interface SharedWithMeViewItemRemovalResultCollections {

}

/*********************************************
* ShareLinkRequest
**********************************************/
export interface ShareLinkRequest {
	createLink?: boolean;
	emailData?: SP.Sharing.EmailData;
	expiration?: string;
	linkKind?: number;
	peoplePickerInput?: string;
	settings?: SP.Sharing.ShareLinkSettings;
}

/*********************************************
* ShareLinkRequestCollections
**********************************************/
export interface ShareLinkRequestCollections {

}

/*********************************************
* ShareLinkSettings
**********************************************/
export interface ShareLinkSettings {
	allowAnonymousAccess?: boolean;
	applicationLink?: boolean;
	description?: string;
	embeddable?: boolean;
	expiration?: string;
	inviteesToRemove?: Array<SP.Sharing.Principal>;
	limitUseToApplication?: boolean;
	linkKind?: number;
	nonDefaultLink?: boolean;
	password?: string;
	passwordProtected?: boolean;
	restrictShareMembership?: boolean;
	role?: number;
	shareId?: any;
	updatePassword?: boolean;
}

/*********************************************
* ShareLinkSettingsCollections
**********************************************/
export interface ShareLinkSettingsCollections {

}

/*********************************************
* ShareLinkResponse
**********************************************/
export interface ShareLinkResponse {
	sharingLinkInfo?: SP.SharingLinkInfo;
}

/*********************************************
* ShareLinkResponseCollections
**********************************************/
export interface ShareLinkResponseCollections {

}

/*********************************************
* SharingAbilities
**********************************************/
export interface SharingAbilities {
	anonymousLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	directSharingAbilities?: SP.Sharing.DirectSharingAbilities;
	organizationLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	peopleSharingLinkAbilities?: SP.Sharing.SharingLinkAbilities;
}

/*********************************************
* SharingAbilitiesCollections
**********************************************/
export interface SharingAbilitiesCollections {

}

/*********************************************
* SharingLinkAbilities
**********************************************/
export interface SharingLinkAbilities {
	canAddNewExternalPrincipals?: SP.Sharing.SharingAbilityStatus;
	canGetEditLink?: SP.Sharing.SharingAbilityStatus;
	canGetReadLink?: SP.Sharing.SharingAbilityStatus;
	canGetReviewLink?: SP.Sharing.SharingAbilityStatus;
	canHaveExternalUsers?: SP.Sharing.SharingAbilityStatus;
	canManageEditLink?: SP.Sharing.SharingAbilityStatus;
	canManageReadLink?: SP.Sharing.SharingAbilityStatus;
	canManageReviewLink?: SP.Sharing.SharingAbilityStatus;
	linkExpiration?: SP.Sharing.SharingLinkExpirationAbilityStatus;
	passwordProtected?: SP.Sharing.SharingLinkPasswordAbilityStatus;
	supportsRestrictedView?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* SharingLinkAbilitiesCollections
**********************************************/
export interface SharingLinkAbilitiesCollections {

}

/*********************************************
* SharingLinkExpirationAbilityStatus
**********************************************/
export interface SharingLinkExpirationAbilityStatus {
	defaultExpirationInDays?: number;
}

/*********************************************
* SharingLinkExpirationAbilityStatusCollections
**********************************************/
export interface SharingLinkExpirationAbilityStatusCollections {

}

/*********************************************
* SharingLinkPasswordAbilityStatus
**********************************************/
export interface SharingLinkPasswordAbilityStatus {

}

/*********************************************
* SharingLinkPasswordAbilityStatusCollections
**********************************************/
export interface SharingLinkPasswordAbilityStatusCollections {

}

/*********************************************
* SharingInformationRequest
**********************************************/
export interface SharingInformationRequest {
	clientSupportedFeatures?: string;
	maxPrincipalsToReturn?: number;
	populateInheritedLinks?: boolean;
}

/*********************************************
* SharingInformationRequestCollections
**********************************************/
export interface SharingInformationRequestCollections {

}

/*********************************************
* SharingLinkAccessRequest
**********************************************/
export interface SharingLinkAccessRequest {
	ensureAccess?: boolean;
	password?: string;
}

/*********************************************
* SharingLinkAccessRequestCollections
**********************************************/
export interface SharingLinkAccessRequestCollections {

}

/*********************************************
* SharingLinkDefaultTemplatesCollection
**********************************************/
export interface SharingLinkDefaultTemplatesCollection {
	templates?: Array<SP.Sharing.SharingLinkDefaultTemplate>;
}

/*********************************************
* SharingLinkDefaultTemplatesCollectionCollections
**********************************************/
export interface SharingLinkDefaultTemplatesCollectionCollections {

}

/*********************************************
* SharingLinkDefaultTemplate
**********************************************/
export interface SharingLinkDefaultTemplate {
	linkDetails?: SP.SharingLinkInfo;
	passwordProtected?: boolean;
	role?: number;
	scope?: number;
	shareKind?: number;
}

/*********************************************
* SharingLinkDefaultTemplateCollections
**********************************************/
export interface SharingLinkDefaultTemplateCollections {

}

/*********************************************
* SharingLinkTemplate
**********************************************/
export interface SharingLinkTemplate {
	passwordProtected?: boolean;
	role?: number;
	scope?: number;
}

/*********************************************
* SharingLinkTemplateCollections
**********************************************/
export interface SharingLinkTemplateCollections {

}

/*********************************************
* SiteSharingReportCapabilities
**********************************************/
export interface SiteSharingReportCapabilities {
	canCancelSharingReport?: boolean;
	canCreateSharingReport?: boolean;
	createSharingReportNotAllowedReason?: string;
	jobData?: SP.Sharing.SiteSharingReportJobData;
	stopSharingReportNotAllowedReason?: string;
}

/*********************************************
* SiteSharingReportCapabilitiesCollections
**********************************************/
export interface SiteSharingReportCapabilitiesCollections {

}

/*********************************************
* SiteSharingReportJobData
**********************************************/
export interface SiteSharingReportJobData {
	folderUrl?: string;
	webUrl?: string;
}

/*********************************************
* SiteSharingReportJobDataCollections
**********************************************/
export interface SiteSharingReportJobDataCollections {

}

/*********************************************
* SiteSharingReportStatus
**********************************************/
export interface SiteSharingReportStatus {
	errorCode?: number;
	jobData?: SP.Sharing.SiteSharingReportJobData;
	message?: string;
	success?: boolean;
}

/*********************************************
* SiteSharingReportStatusCollections
**********************************************/
export interface SiteSharingReportStatusCollections {

}

/*********************************************
* UserDirectoryInfo
**********************************************/
export interface UserDirectoryInfo {
	Name?: string;
	NetId?: string;
	PrimaryEmail?: string;
	PrincipalName?: string;
}

/*********************************************
* UserDirectoryInfoCollections
**********************************************/
export interface UserDirectoryInfoCollections {

}

/*********************************************
* UserRoleAssignment
**********************************************/
export interface UserRoleAssignment {
	Role?: number;
	UserId?: string;
}

/*********************************************
* UserRoleAssignmentCollections
**********************************************/
export interface UserRoleAssignmentCollections {

}

/*********************************************
* UserSharingResult
**********************************************/
export interface UserSharingResult {
	AllowedRoles?: Array<number>;
	CurrentRole?: number;
	DisplayName?: string;
	Email?: string;
	InvitationLink?: string;
	IsUserKnown?: boolean;
	Message?: string;
	Status?: boolean;
	User?: string;
}

/*********************************************
* UserSharingResultCollections
**********************************************/
export interface UserSharingResultCollections {

}
