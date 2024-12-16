import * as GraphTypes from "gd-sprest-def/lib/Microsoft/Graph/enumTypes";

/** customTaskExtensionOperationStatus types */
export const customTaskExtensionOperationStatus: GraphTypes.customTaskExtensionOperationStatus = {
	completed: 0,
	failed: 1,
	unknownFutureValue: 2,
}

/** lifecycleTaskCategory types */
export const lifecycleTaskCategory: GraphTypes.lifecycleTaskCategory = {
	joiner: 1,
	leaver: 2,
	unknownFutureValue: 4,
	mover: 8,
}

/** lifecycleWorkflowCategory types */
export const lifecycleWorkflowCategory: GraphTypes.lifecycleWorkflowCategory = {
	joiner: 0,
	leaver: 1,
	unknownFutureValue: 2,
	mover: 3,
}

/** lifecycleWorkflowProcessingStatus types */
export const lifecycleWorkflowProcessingStatus: GraphTypes.lifecycleWorkflowProcessingStatus = {
	queued: 0,
	inProgress: 1,
	completed: 2,
	completedWithErrors: 3,
	canceled: 4,
	failed: 5,
	unknownFutureValue: 6,
}

/** membershipChangeType types */
export const membershipChangeType: GraphTypes.membershipChangeType = {
	add: 1,
	remove: 2,
	unknownFutureValue: 3,
}

/** valueType types */
export const valueType: GraphTypes.valueType = {
	enum: 0,
	string: 1,
	int: 2,
	bool: 3,
	unknownFutureValue: 4,
}

/** workflowExecutionType types */
export const workflowExecutionType: GraphTypes.workflowExecutionType = {
	scheduled: 0,
	onDemand: 1,
	unknownFutureValue: 2,
}

/** workflowTriggerTimeBasedAttribute types */
export const workflowTriggerTimeBasedAttribute: GraphTypes.workflowTriggerTimeBasedAttribute = {
	employeeHireDate: 0,
	employeeLeaveDateTime: 1,
	unknownFutureValue: 2,
	createdDateTime: 3,
}

/** appliedConditionalAccessPolicyResult types */
export const appliedConditionalAccessPolicyResult: GraphTypes.appliedConditionalAccessPolicyResult = {
	success: 0,
	failure: 1,
	notApplied: 2,
	notEnabled: 3,
	unknown: 4,
	unknownFutureValue: 5,
	reportOnlySuccess: 6,
	reportOnlyFailure: 7,
	reportOnlyNotApplied: 8,
	reportOnlyInterrupted: 9,
}

/** authenticationMethodFeature types */
export const authenticationMethodFeature: GraphTypes.authenticationMethodFeature = {
	ssprRegistered: 0,
	ssprEnabled: 1,
	ssprCapable: 2,
	passwordlessCapable: 3,
	mfaCapable: 4,
	unknownFutureValue: 5,
}

/** conditionalAccessStatus types */
export const conditionalAccessStatus: GraphTypes.conditionalAccessStatus = {
	success: 0,
	failure: 1,
	notApplied: 2,
	unknownFutureValue: 3,
}

/** featureType types */
export const featureType: GraphTypes.featureType = {
	registration: 0,
	reset: 1,
	unknownFutureValue: 2,
}

/** groupType types */
export const groupType: GraphTypes.groupType = {
	unifiedGroups: 0,
	azureAD: 1,
	unknownFutureValue: 2,
}

/** includedUserRoles types */
export const includedUserRoles: GraphTypes.includedUserRoles = {
	all: 0,
	privilegedAdmin: 1,
	admin: 2,
	user: 3,
	unknownFutureValue: 4,
}

/** includedUserTypes types */
export const includedUserTypes: GraphTypes.includedUserTypes = {
	all: 0,
	member: 1,
	guest: 2,
	unknownFutureValue: 3,
}

/** initiatorType types */
export const initiatorType: GraphTypes.initiatorType = {
	user: 0,
	application: 1,
	system: 2,
	unknownFutureValue: 3,
}

/** migrationStatus types */
export const migrationStatus: GraphTypes.migrationStatus = {
	ready: 0,
	needsReview: 1,
	additionalStepsRequired: 2,
	unknownFutureValue: 3,
}

/** operationResult types */
export const operationResult: GraphTypes.operationResult = {
	success: 0,
	failure: 1,
	timeout: 2,
	unknownFutureValue: 3,
}

/** outlierContainerType types */
export const outlierContainerType: GraphTypes.outlierContainerType = {
	group: 0,
	unknownFutureValue: 1,
}

/** outlierMemberType types */
export const outlierMemberType: GraphTypes.outlierMemberType = {
	user: 0,
	unknownFutureValue: 1,
}

/** provisioningAction types */
export const provisioningAction: GraphTypes.provisioningAction = {
	other: 0,
	create: 1,
	delete: 2,
	disable: 3,
	update: 4,
	stagedDelete: 5,
	unknownFutureValue: 6,
}

/** provisioningResult types */
export const provisioningResult: GraphTypes.provisioningResult = {
	success: 0,
	failure: 1,
	skipped: 2,
	warning: 3,
	unknownFutureValue: 4,
}

/** provisioningStatusErrorCategory types */
export const provisioningStatusErrorCategory: GraphTypes.provisioningStatusErrorCategory = {
	failure: 0,
	nonServiceFailure: 1,
	success: 2,
	unknownFutureValue: 3,
}

/** provisioningStepType types */
export const provisioningStepType: GraphTypes.provisioningStepType = {
	import: 0,
	scoping: 1,
	matching: 2,
	processing: 3,
	referenceResolution: 4,
	export: 5,
	unknownFutureValue: 6,
}

/** riskDetail types */
export const riskDetail: GraphTypes.riskDetail = {
	none: 0,
	adminGeneratedTemporaryPassword: 1,
	userPerformedSecuredPasswordChange: 2,
	userPerformedSecuredPasswordReset: 3,
	adminConfirmedSigninSafe: 4,
	aiConfirmedSigninSafe: 5,
	userPassedMFADrivenByRiskBasedPolicy: 6,
	adminDismissedAllRiskForUser: 7,
	adminConfirmedSigninCompromised: 8,
	hidden: 9,
	adminConfirmedUserCompromised: 10,
	unknownFutureValue: 11,
	adminConfirmedServicePrincipalCompromised: 13,
	adminDismissedAllRiskForServicePrincipal: 14,
	m365DAdminDismissedDetection: 12,
	userChangedPasswordOnPremises: 15,
	adminDismissedRiskForSignIn: 16,
	adminConfirmedAccountSafe: 17,
}

/** riskEventType types */
export const riskEventType: GraphTypes.riskEventType = {
	unlikelyTravel: 0,
	anonymizedIPAddress: 1,
	maliciousIPAddress: 2,
	unfamiliarFeatures: 3,
	malwareInfectedIPAddress: 4,
	suspiciousIPAddress: 5,
	leakedCredentials: 6,
	investigationsThreatIntelligence: 7,
	generic: 8,
	adminConfirmedUserCompromised: 9,
	mcasImpossibleTravel: 10,
	mcasSuspiciousInboxManipulationRules: 11,
	investigationsThreatIntelligenceSigninLinked: 12,
	maliciousIPAddressValidCredentialsBlockedIP: 13,
	unknownFutureValue: 14,
}

/** riskLevel types */
export const riskLevel: GraphTypes.riskLevel = {
	low: 0,
	medium: 1,
	high: 2,
	hidden: 3,
	none: 4,
	unknownFutureValue: 5,
}

/** riskState types */
export const riskState: GraphTypes.riskState = {
	none: 0,
	confirmedSafe: 1,
	remediated: 2,
	dismissed: 3,
	atRisk: 4,
	confirmedCompromised: 5,
	unknownFutureValue: 6,
}

/** signInUserType types */
export const signInUserType: GraphTypes.signInUserType = {
	member: 0,
	guest: 1,
	unknownFutureValue: 3,
}

/** userDefaultAuthenticationMethod types */
export const userDefaultAuthenticationMethod: GraphTypes.userDefaultAuthenticationMethod = {
	push: 0,
	oath: 1,
	voiceMobile: 2,
	voiceAlternateMobile: 3,
	voiceOffice: 4,
	sms: 5,
	none: 6,
	unknownFutureValue: 7,
}

/** advancedConfigState types */
export const advancedConfigState: GraphTypes.advancedConfigState = {
	default: 0,
	enabled: 1,
	disabled: 2,
	unknownFutureValue: 3,
}

/** authenticationMethodModes types */
export const authenticationMethodModes: GraphTypes.authenticationMethodModes = {
	password: 1,
	voice: 2,
	hardwareOath: 4,
	softwareOath: 8,
	sms: 16,
	fido2: 32,
	windowsHelloForBusiness: 64,
	microsoftAuthenticatorPush: 128,
	deviceBasedPush: 256,
	temporaryAccessPassOneTime: 512,
	temporaryAccessPassMultiUse: 1024,
	email: 2048,
	x509CertificateSingleFactor: 4096,
	x509CertificateMultiFactor: 8192,
	federatedSingleFactor: 16384,
	federatedMultiFactor: 32768,
	unknownFutureValue: 65536,
}

/** authenticationMethodsPolicyMigrationState types */
export const authenticationMethodsPolicyMigrationState: GraphTypes.authenticationMethodsPolicyMigrationState = {
	preMigration: 0,
	migrationInProgress: 1,
	migrationComplete: 2,
	unknownFutureValue: 3,
}

/** authenticationMethodState types */
export const authenticationMethodState: GraphTypes.authenticationMethodState = {
	enabled: 0,
	disabled: 1,
}

/** authenticationMethodTargetType types */
export const authenticationMethodTargetType: GraphTypes.authenticationMethodTargetType = {
	user: 0,
	group: 1,
	unknownFutureValue: 2,
}

/** authenticationStrengthPolicyType types */
export const authenticationStrengthPolicyType: GraphTypes.authenticationStrengthPolicyType = {
	builtIn: 0,
	custom: 1,
	unknownFutureValue: 2,
}

/** authenticationStrengthRequirements types */
export const authenticationStrengthRequirements: GraphTypes.authenticationStrengthRequirements = {
	none: 0,
	mfa: 1,
	unknownFutureValue: 2,
}

/** baseAuthenticationMethod types */
export const baseAuthenticationMethod: GraphTypes.baseAuthenticationMethod = {
	password: 1,
	voice: 2,
	hardwareOath: 3,
	softwareOath: 4,
	sms: 5,
	fido2: 6,
	windowsHelloForBusiness: 7,
	microsoftAuthenticator: 8,
	temporaryAccessPass: 9,
	email: 10,
	x509Certificate: 11,
	federation: 12,
	unknownFutureValue: 13,
}

/** externalEmailOtpState types */
export const externalEmailOtpState: GraphTypes.externalEmailOtpState = {
	default: 0,
	enabled: 1,
	disabled: 2,
	unknownFutureValue: 3,
}

/** featureTargetType types */
export const featureTargetType: GraphTypes.featureTargetType = {
	group: 0,
	administrativeUnit: 1,
	role: 2,
	unknownFutureValue: 3,
}

/** fido2RestrictionEnforcementType types */
export const fido2RestrictionEnforcementType: GraphTypes.fido2RestrictionEnforcementType = {
	allow: 0,
	block: 1,
	unknownFutureValue: 2,
}

/** microsoftAuthenticatorAuthenticationMode types */
export const microsoftAuthenticatorAuthenticationMode: GraphTypes.microsoftAuthenticatorAuthenticationMode = {
	deviceBasedPush: 0,
	push: 1,
	any: 2,
}

/** x509CertificateAffinityLevel types */
export const x509CertificateAffinityLevel: GraphTypes.x509CertificateAffinityLevel = {
	low: 0,
	high: 1,
	unknownFutureValue: 2,
}

/** x509CertificateAuthenticationMode types */
export const x509CertificateAuthenticationMode: GraphTypes.x509CertificateAuthenticationMode = {
	x509CertificateSingleFactor: 0,
	x509CertificateMultiFactor: 1,
	unknownFutureValue: 2,
}

/** x509CertificateRuleType types */
export const x509CertificateRuleType: GraphTypes.x509CertificateRuleType = {
	issuerSubject: 0,
	policyOID: 1,
	unknownFutureValue: 2,
	issuerSubjectAndPolicyOID: 3,
}

/** volumeType types */
export const volumeType: GraphTypes.volumeType = {
	operatingSystemVolume: 1,
	fixedDataVolume: 2,
	removableDataVolume: 3,
	unknownFutureValue: 4,
}

/** answerInputType types */
export const answerInputType: GraphTypes.answerInputType = {
	text: 0,
	radioButton: 1,
	unknownFutureValue: 2,
}

/** bookingPageAccessControl types */
export const bookingPageAccessControl: GraphTypes.bookingPageAccessControl = {
	unrestricted: 0,
	restrictedToOrganization: 1,
	unknownFutureValue: 2,
}

/** bookingPriceType types */
export const bookingPriceType: GraphTypes.bookingPriceType = {
	undefined: 0,
	fixedPrice: 1,
	startingAt: 2,
	hourly: 3,
	free: 4,
	priceVaries: 5,
	callUs: 6,
	notSet: 7,
	unknownFutureValue: 8,
}

/** bookingReminderRecipients types */
export const bookingReminderRecipients: GraphTypes.bookingReminderRecipients = {
	allAttendees: 0,
	staff: 1,
	customer: 2,
	unknownFutureValue: 3,
}

/** bookingsAvailabilityStatus types */
export const bookingsAvailabilityStatus: GraphTypes.bookingsAvailabilityStatus = {
	available: 0,
	busy: 1,
	slotsAvailable: 2,
	outOfOffice: 3,
	unknownFutureValue: 4,
}

/** bookingsServiceAvailabilityType types */
export const bookingsServiceAvailabilityType: GraphTypes.bookingsServiceAvailabilityType = {
	bookWhenStaffAreFree: 0,
	notBookable: 1,
	customWeeklyHours: 2,
	unknownFutureValue: 3,
}

/** bookingStaffMembershipStatus types */
export const bookingStaffMembershipStatus: GraphTypes.bookingStaffMembershipStatus = {
	active: 0,
	pendingAcceptance: 1,
	rejectedByStaff: 2,
	unknownFutureValue: 3,
}

/** bookingStaffRole types */
export const bookingStaffRole: GraphTypes.bookingStaffRole = {
	guest: 0,
	administrator: 1,
	viewer: 2,
	externalGuest: 3,
	unknownFutureValue: 4,
	scheduler: 5,
	teamMember: 6,
}

/** dayOfWeek types */
export const dayOfWeek: GraphTypes.dayOfWeek = {
	sunday: 0,
	monday: 1,
	tuesday: 2,
	wednesday: 3,
	thursday: 4,
	friday: 5,
	saturday: 6,
}

/** locationType types */
export const locationType: GraphTypes.locationType = {
	default: 0,
	conferenceRoom: 1,
	homeAddress: 2,
	businessAddress: 3,
	geoCoordinates: 4,
	streetAddress: 5,
	hotel: 6,
	restaurant: 7,
	localBusiness: 8,
	postalAddress: 9,
}

/** locationUniqueIdType types */
export const locationUniqueIdType: GraphTypes.locationUniqueIdType = {
	unknown: 0,
	locationStore: 1,
	directory: 2,
	private: 3,
	bing: 4,
}

/** phoneType types */
export const phoneType: GraphTypes.phoneType = {
	home: 0,
	business: 1,
	mobile: 2,
	other: 3,
	assistant: 4,
	homeFax: 5,
	businessFax: 6,
	otherFax: 7,
	pager: 8,
	radio: 9,
}

/** physicalAddressType types */
export const physicalAddressType: GraphTypes.physicalAddressType = {
	unknown: 0,
	home: 1,
	business: 2,
	other: 3,
}

/** cloudPcAuditActivityOperationType types */
export const cloudPcAuditActivityOperationType: GraphTypes.cloudPcAuditActivityOperationType = {
	create: 0,
	delete: 1,
	patch: 2,
	unknownFutureValue: 3,
}

/** cloudPcAuditActivityResult types */
export const cloudPcAuditActivityResult: GraphTypes.cloudPcAuditActivityResult = {
	success: 0,
	clientError: 1,
	failure: 2,
	timeout: 3,
	unknownFutureValue: 4,
}

/** cloudPcAuditCategory types */
export const cloudPcAuditCategory: GraphTypes.cloudPcAuditCategory = {
	cloudPC: 0,
	unknownFutureValue: 1,
}

/** cloudPcDeviceImageErrorCode types */
export const cloudPcDeviceImageErrorCode: GraphTypes.cloudPcDeviceImageErrorCode = {
	internalServerError: 0,
	sourceImageNotFound: 1,
	osVersionNotSupported: 2,
	sourceImageInvalid: 3,
	sourceImageNotGeneralized: 4,
	unknownFutureValue: 5,
	vmAlreadyAzureAdjoined: 6,
	paidSourceImageNotSupport: 7,
	sourceImageNotSupportCustomizeVMName: 8,
	sourceImageSizeExceedsLimitation: 9,
}

/** cloudPcDeviceImageOsStatus types */
export const cloudPcDeviceImageOsStatus: GraphTypes.cloudPcDeviceImageOsStatus = {
	supported: 0,
	supportedWithWarning: 1,
	unknown: 2,
	unknownFutureValue: 3,
}

/** cloudPcDeviceImageStatus types */
export const cloudPcDeviceImageStatus: GraphTypes.cloudPcDeviceImageStatus = {
	pending: 0,
	ready: 1,
	failed: 2,
	unknownFutureValue: 3,
}

/** cloudPcDomainJoinType types */
export const cloudPcDomainJoinType: GraphTypes.cloudPcDomainJoinType = {
	azureADJoin: 0,
	hybridAzureADJoin: 1,
	unknownFutureValue: 2,
}

/** cloudPcGalleryImageStatus types */
export const cloudPcGalleryImageStatus: GraphTypes.cloudPcGalleryImageStatus = {
	supported: 0,
	supportedWithWarning: 1,
	notSupported: 2,
	unknownFutureValue: 3,
}

/** cloudPcOnPremisesConnectionHealthCheckErrorType types */
export const cloudPcOnPremisesConnectionHealthCheckErrorType: GraphTypes.cloudPcOnPremisesConnectionHealthCheckErrorType = {
	dnsCheckFqdnNotFound: 100,
	dnsCheckNameWithInvalidCharacter: 101,
	dnsCheckUnknownError: 199,
	adJoinCheckFqdnNotFound: 200,
	adJoinCheckIncorrectCredentials: 201,
	adJoinCheckOrganizationalUnitNotFound: 202,
	adJoinCheckOrganizationalUnitIncorrectFormat: 203,
	adJoinCheckComputerObjectAlreadyExists: 204,
	adJoinCheckAccessDenied: 205,
	adJoinCheckCredentialsExpired: 206,
	adJoinCheckAccountLockedOrDisabled: 207,
	adJoinCheckAccountQuotaExceeded: 208,
	adJoinCheckServerNotOperational: 209,
	adJoinCheckUnknownError: 299,
	endpointConnectivityCheckCloudPcUrlNotAllowListed: 300,
	endpointConnectivityCheckWVDUrlNotAllowListed: 301,
	endpointConnectivityCheckIntuneUrlNotAllowListed: 302,
	endpointConnectivityCheckAzureADUrlNotAllowListed: 303,
	endpointConnectivityCheckLocaleUrlNotAllowListed: 304,
	endpointConnectivityCheckUnknownError: 399,
	azureAdDeviceSyncCheckDeviceNotFound: 400,
	azureAdDeviceSyncCheckLongSyncCircle: 401,
	azureAdDeviceSyncCheckConnectDisabled: 402,
	azureAdDeviceSyncCheckDurationExceeded: 403,
	azureAdDeviceSyncCheckScpNotConfigured: 404,
	azureAdDeviceSyncCheckTransientServiceError: 498,
	azureAdDeviceSyncCheckUnknownError: 499,
	resourceAvailabilityCheckNoSubnetIP: 500,
	resourceAvailabilityCheckSubscriptionDisabled: 501,
	resourceAvailabilityCheckAzurePolicyViolation: 502,
	resourceAvailabilityCheckSubscriptionNotFound: 503,
	resourceAvailabilityCheckSubscriptionTransferred: 504,
	resourceAvailabilityCheckGeneralSubscriptionError: 505,
	resourceAvailabilityCheckUnsupportedVNetRegion: 506,
	resourceAvailabilityCheckResourceGroupInvalid: 507,
	resourceAvailabilityCheckVNetInvalid: 508,
	resourceAvailabilityCheckSubnetInvalid: 509,
	resourceAvailabilityCheckResourceGroupBeingDeleted: 510,
	resourceAvailabilityCheckVNetBeingMoved: 511,
	resourceAvailabilityCheckSubnetDelegationFailed: 512,
	resourceAvailabilityCheckSubnetWithExternalResources: 513,
	resourceAvailabilityCheckResourceGroupLockedForReadonly: 514,
	resourceAvailabilityCheckResourceGroupLockedForDelete: 515,
	resourceAvailabilityCheckNoIntuneReaderRoleError: 516,
	resourceAvailabilityCheckIntuneDefaultWindowsRestrictionViolation: 517,
	resourceAvailabilityCheckIntuneCustomWindowsRestrictionViolation: 518,
	resourceAvailabilityCheckDeploymentQuotaLimitReached: 519,
	resourceAvailabilityCheckTransientServiceError: 598,
	resourceAvailabilityCheckUnknownError: 599,
	permissionCheckNoSubscriptionReaderRole: 600,
	permissionCheckNoResourceGroupOwnerRole: 601,
	permissionCheckNoVNetContributorRole: 602,
	permissionCheckNoResourceGroupNetworkContributorRole: 603,
	permissionCheckNoWindows365NetworkUserRole: 604,
	permissionCheckNoWindows365NetworkInterfaceContributorRole: 605,
	permissionCheckTransientServiceError: 698,
	permissionCheckUnknownError: 699,
	udpConnectivityCheckStunUrlNotAllowListed: 800,
	udpConnectivityCheckTurnUrlNotAllowListed: 801,
	udpConnectivityCheckUrlsNotAllowListed: 802,
	udpConnectivityCheckUnknownError: 899,
	internalServerErrorDeploymentCanceled: 900,
	internalServerErrorAllocateResourceFailed: 901,
	internalServerErrorVMDeploymentTimeout: 902,
	internalServerErrorUnableToRunDscScript: 903,
	ssoCheckKerberosConfigurationError: 904,
	internalServerUnknownError: 999,
	unknownFutureValue: 1000,
}

/** cloudPcOnPremisesConnectionStatus types */
export const cloudPcOnPremisesConnectionStatus: GraphTypes.cloudPcOnPremisesConnectionStatus = {
	pending: 0,
	running: 1,
	passed: 2,
	failed: 3,
	warning: 4,
	informational: 5,
	unknownFutureValue: 6,
}

/** cloudPcOnPremisesConnectionType types */
export const cloudPcOnPremisesConnectionType: GraphTypes.cloudPcOnPremisesConnectionType = {
	hybridAzureADJoin: 0,
	azureADJoin: 1,
	unknownFutureValue: 2,
}

/** cloudPcProvisioningPolicyImageType types */
export const cloudPcProvisioningPolicyImageType: GraphTypes.cloudPcProvisioningPolicyImageType = {
	gallery: 0,
	custom: 1,
	unknownFutureValue: 2,
}

/** cloudPcProvisioningType types */
export const cloudPcProvisioningType: GraphTypes.cloudPcProvisioningType = {
	dedicated: 0,
	shared: 1,
	unknownFutureValue: 2,
}

/** cloudPcRegionGroup types */
export const cloudPcRegionGroup: GraphTypes.cloudPcRegionGroup = {
	default: 0,
	australia: 1,
	canada: 2,
	usCentral: 3,
	usEast: 4,
	usWest: 5,
	france: 6,
	germany: 7,
	europeUnion: 8,
	unitedKingdom: 9,
	japan: 10,
	asia: 11,
	india: 12,
	southAmerica: 13,
	euap: 14,
	usGovernment: 15,
	usGovernmentDOD: 16,
	unknownFutureValue: 20,
	norway: 17,
	switzerland: 18,
	southKorea: 19,
}

/** cloudPcRestorePointFrequencyType types */
export const cloudPcRestorePointFrequencyType: GraphTypes.cloudPcRestorePointFrequencyType = {
	default: 0,
	fourHours: 1,
	sixHours: 2,
	twelveHours: 3,
	sixteenHours: 4,
	twentyFourHours: 5,
	unknownFutureValue: 6,
}

/** microsoftManagedDesktopType types */
export const microsoftManagedDesktopType: GraphTypes.microsoftManagedDesktopType = {
	notManaged: 0,
	premiumManaged: 1,
	standardManaged: 2,
	starterManaged: 3,
	unknownFutureValue: 4,
}

/** bodyType types */
export const bodyType: GraphTypes.bodyType = {
	text: 0,
	html: 1,
}

/** dataSubjectType types */
export const dataSubjectType: GraphTypes.dataSubjectType = {
	customer: 0,
	currentEmployee: 1,
	formerEmployee: 2,
	prospectiveEmployee: 3,
	student: 4,
	teacher: 5,
	faculty: 6,
	other: 7,
	unknownFutureValue: 8,
}

/** subjectRightsRequestStage types */
export const subjectRightsRequestStage: GraphTypes.subjectRightsRequestStage = {
	contentRetrieval: 0,
	contentReview: 1,
	generateReport: 2,
	contentDeletion: 3,
	caseResolved: 4,
	contentEstimate: 5,
	unknownFutureValue: 6,
	approval: 7,
}

/** subjectRightsRequestStageStatus types */
export const subjectRightsRequestStageStatus: GraphTypes.subjectRightsRequestStageStatus = {
	notStarted: 0,
	current: 1,
	completed: 3,
	failed: 4,
	unknownFutureValue: 5,
}

/** subjectRightsRequestStatus types */
export const subjectRightsRequestStatus: GraphTypes.subjectRightsRequestStatus = {
	active: 0,
	closed: 1,
	unknownFutureValue: 2,
}

/** subjectRightsRequestType types */
export const subjectRightsRequestType: GraphTypes.subjectRightsRequestType = {
	export: 0,
	delete: 1,
	access: 2,
	tagForAction: 3,
	unknownFutureValue: 4,
}

/** authenticationAttributeCollectionInputType types */
export const authenticationAttributeCollectionInputType: GraphTypes.authenticationAttributeCollectionInputType = {
	text: 1,
	radioSingleSelect: 2,
	checkboxMultiSelect: 3,
	boolean: 4,
	unknownFutureValue: 5,
}

/** identityUserFlowAttributeDataType types */
export const identityUserFlowAttributeDataType: GraphTypes.identityUserFlowAttributeDataType = {
	string: 1,
	boolean: 2,
	int64: 3,
	stringCollection: 4,
	dateTime: 5,
	unknownFutureValue: 6,
}

/** identityUserFlowAttributeInputType types */
export const identityUserFlowAttributeInputType: GraphTypes.identityUserFlowAttributeInputType = {
	textBox: 1,
	dateTimeDropdown: 2,
	radioSingleSelect: 3,
	dropdownSingleSelect: 4,
	emailBox: 5,
	checkboxMultiSelect: 6,
}

/** identityUserFlowAttributeType types */
export const identityUserFlowAttributeType: GraphTypes.identityUserFlowAttributeType = {
	builtIn: 1,
	custom: 2,
	required: 3,
	unknownFutureValue: 4,
}

/** userFlowType types */
export const userFlowType: GraphTypes.userFlowType = {
	signUp: 1,
	signIn: 2,
	signUpOrSignIn: 3,
	passwordReset: 4,
	profileUpdate: 5,
	resourceOwner: 6,
	unknownFutureValue: 7,
}

/** userType types */
export const userType: GraphTypes.userType = {
	member: 0,
	guest: 1,
	unknownFutureValue: 2,
}

/** lobbyBypassScope types */
export const lobbyBypassScope: GraphTypes.lobbyBypassScope = {
	organizer: 0,
	organization: 1,
	organizationAndFederated: 2,
	everyone: 3,
	unknownFutureValue: 4,
	invited: 5,
	organizationExcludingGuests: 6,
}

/** meetingChatMode types */
export const meetingChatMode: GraphTypes.meetingChatMode = {
	enabled: 0,
	disabled: 1,
	limited: 2,
	unknownFutureValue: 3,
}

/** onlineMeetingPresenters types */
export const onlineMeetingPresenters: GraphTypes.onlineMeetingPresenters = {
	everyone: 0,
	organization: 1,
	roleIsPresenter: 2,
	organizer: 3,
	unknownFutureValue: 4,
}

/** multiFactorAuthConfiguration types */
export const multiFactorAuthConfiguration: GraphTypes.multiFactorAuthConfiguration = {
	notRequired: 0,
	required: 1,
	unknownFutureValue: 2,
}

/** allowInvitesFrom types */
export const allowInvitesFrom: GraphTypes.allowInvitesFrom = {
	none: 0,
	adminsAndGuestInviters: 1,
	adminsGuestInvitersAndAllMembers: 2,
	everyone: 3,
	unknownFutureValue: 4,
}

/** appCredentialRestrictionType types */
export const appCredentialRestrictionType: GraphTypes.appCredentialRestrictionType = {
	passwordAddition: 0,
	passwordLifetime: 1,
	symmetricKeyAddition: 2,
	symmetricKeyLifetime: 3,
	customPasswordAddition: 4,
	unknownFutureValue: 99,
}

/** appKeyCredentialRestrictionType types */
export const appKeyCredentialRestrictionType: GraphTypes.appKeyCredentialRestrictionType = {
	asymmetricKeyLifetime: 0,
	unknownFutureValue: 99,
}

/** appManagementRestrictionState types */
export const appManagementRestrictionState: GraphTypes.appManagementRestrictionState = {
	enabled: 1,
	disabled: 2,
	unknownFutureValue: 3,
}

/** authenticationProtocol types */
export const authenticationProtocol: GraphTypes.authenticationProtocol = {
	wsFed: 0,
	saml: 1,
	unknownFutureValue: 2,
}

/** b2bIdentityProvidersType types */
export const b2bIdentityProvidersType: GraphTypes.b2bIdentityProvidersType = {
	azureActiveDirectory: 1,
	externalFederation: 2,
	socialIdentityProviders: 3,
	emailOneTimePasscode: 4,
	microsoftAccount: 5,
	defaultConfiguredIdp: 6,
	unknownFutureValue: 7,
}

/** crossTenantAccessPolicyTargetConfigurationAccessType types */
export const crossTenantAccessPolicyTargetConfigurationAccessType: GraphTypes.crossTenantAccessPolicyTargetConfigurationAccessType = {
	allowed: 1,
	blocked: 2,
	unknownFutureValue: 3,
}

/** crossTenantAccessPolicyTargetType types */
export const crossTenantAccessPolicyTargetType: GraphTypes.crossTenantAccessPolicyTargetType = {
	user: 1,
	group: 2,
	application: 3,
	unknownFutureValue: 4,
}

/** federatedIdpMfaBehavior types */
export const federatedIdpMfaBehavior: GraphTypes.federatedIdpMfaBehavior = {
	acceptIfMfaDoneByFederatedIdp: 0,
	enforceMfaByFederatedIdp: 1,
	rejectMfaByFederatedIdp: 2,
	unknownFutureValue: 3,
}

/** layoutTemplateType types */
export const layoutTemplateType: GraphTypes.layoutTemplateType = {
	default: 0,
	verticalSplit: 1,
	unknownFutureValue: 10,
}

/** multiTenantOrganizationMemberProcessingStatus types */
export const multiTenantOrganizationMemberProcessingStatus: GraphTypes.multiTenantOrganizationMemberProcessingStatus = {
	notStarted: 0,
	running: 1,
	succeeded: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** multiTenantOrganizationMemberRole types */
export const multiTenantOrganizationMemberRole: GraphTypes.multiTenantOrganizationMemberRole = {
	owner: 0,
	member: 1,
	unknownFutureValue: 2,
}

/** multiTenantOrganizationMemberState types */
export const multiTenantOrganizationMemberState: GraphTypes.multiTenantOrganizationMemberState = {
	pending: 0,
	active: 1,
	removed: 2,
	unknownFutureValue: 3,
}

/** multiTenantOrganizationState types */
export const multiTenantOrganizationState: GraphTypes.multiTenantOrganizationState = {
	active: 0,
	inactive: 1,
	unknownFutureValue: 2,
}

/** nativeAuthenticationApisEnabled types */
export const nativeAuthenticationApisEnabled: GraphTypes.nativeAuthenticationApisEnabled = {
	none: 0,
	all: 1,
	unknownFutureValue: 2,
}

/** onPremisesDirectorySynchronizationDeletionPreventionType types */
export const onPremisesDirectorySynchronizationDeletionPreventionType: GraphTypes.onPremisesDirectorySynchronizationDeletionPreventionType = {
	disabled: 0,
	enabledForCount: 1,
	enabledForPercentage: 2,
	unknownFutureValue: 3,
}

/** partnerTenantType types */
export const partnerTenantType: GraphTypes.partnerTenantType = {
	microsoftSupport: 1,
	syndicatePartner: 2,
	breadthPartner: 3,
	breadthPartnerDelegatedAdmin: 4,
	resellerPartnerDelegatedAdmin: 5,
	valueAddedResellerPartnerDelegatedAdmin: 6,
	unknownFutureValue: 7,
}

/** permissionClassificationType types */
export const permissionClassificationType: GraphTypes.permissionClassificationType = {
	low: 1,
	medium: 2,
	high: 3,
	unknownFutureValue: 4,
}

/** permissionType types */
export const permissionType: GraphTypes.permissionType = {
	application: 3,
	delegated: 2,
	delegatedUserConsentable: 1,
}

/** promptLoginBehavior types */
export const promptLoginBehavior: GraphTypes.promptLoginBehavior = {
	translateToFreshPasswordAuthentication: 0,
	nativeSupport: 1,
	disabled: 2,
	unknownFutureValue: 3,
}

/** templateApplicationLevel types */
export const templateApplicationLevel: GraphTypes.templateApplicationLevel = {
	none: 0,
	newPartners: 1,
	existingPartners: 2,
	unknownFutureValue: 4,
}

/** weakAlgorithms types */
export const weakAlgorithms: GraphTypes.weakAlgorithms = {
	rsaSha1: 1,
	unknownFutureValue: 2,
}

/** browserSharedCookieSourceEnvironment types */
export const browserSharedCookieSourceEnvironment: GraphTypes.browserSharedCookieSourceEnvironment = {
	microsoftEdge: 0,
	internetExplorer11: 1,
	both: 2,
	unknownFutureValue: 3,
}

/** browserSharedCookieStatus types */
export const browserSharedCookieStatus: GraphTypes.browserSharedCookieStatus = {
	published: 0,
	pendingAdd: 1,
	pendingEdit: 2,
	pendingDelete: 3,
	unknownFutureValue: 4,
}

/** browserSiteCompatibilityMode types */
export const browserSiteCompatibilityMode: GraphTypes.browserSiteCompatibilityMode = {
	default: 0,
	internetExplorer8Enterprise: 1,
	internetExplorer7Enterprise: 2,
	internetExplorer11: 3,
	internetExplorer10: 4,
	internetExplorer9: 5,
	internetExplorer8: 6,
	internetExplorer7: 7,
	internetExplorer5: 8,
	unknownFutureValue: 9,
}

/** browserSiteListStatus types */
export const browserSiteListStatus: GraphTypes.browserSiteListStatus = {
	draft: 0,
	published: 1,
	pending: 2,
	unknownFutureValue: 3,
}

/** browserSiteMergeType types */
export const browserSiteMergeType: GraphTypes.browserSiteMergeType = {
	noMerge: 0,
	default: 1,
	unknownFutureValue: 2,
}

/** browserSiteStatus types */
export const browserSiteStatus: GraphTypes.browserSiteStatus = {
	published: 0,
	pendingAdd: 1,
	pendingEdit: 2,
	pendingDelete: 3,
	unknownFutureValue: 4,
}

/** browserSiteTargetEnvironment types */
export const browserSiteTargetEnvironment: GraphTypes.browserSiteTargetEnvironment = {
	internetExplorerMode: 0,
	internetExplorer11: 1,
	microsoftEdge: 2,
	configurable: 3,
	none: 4,
	unknownFutureValue: 5,
}

/** educationAddedStudentAction types */
export const educationAddedStudentAction: GraphTypes.educationAddedStudentAction = {
	none: 0,
	assignIfOpen: 1,
	unknownFutureValue: 2,
}

/** educationAddToCalendarOptions types */
export const educationAddToCalendarOptions: GraphTypes.educationAddToCalendarOptions = {
	none: 0,
	studentsAndPublisher: 1,
	studentsAndTeamOwners: 2,
	unknownFutureValue: 3,
	studentsOnly: 4,
}

/** educationAssignmentStatus types */
export const educationAssignmentStatus: GraphTypes.educationAssignmentStatus = {
	draft: 0,
	published: 1,
	assigned: 2,
	unknownFutureValue: 3,
	inactive: 4,
}

/** educationFeedbackResourceOutcomeStatus types */
export const educationFeedbackResourceOutcomeStatus: GraphTypes.educationFeedbackResourceOutcomeStatus = {
	notPublished: 0,
	pendingPublish: 1,
	published: 2,
	failedPublish: 3,
	unknownFutureValue: 4,
}

/** educationModuleStatus types */
export const educationModuleStatus: GraphTypes.educationModuleStatus = {
	draft: 0,
	published: 1,
	unknownFutureValue: 2,
}

/** educationSubmissionStatus types */
export const educationSubmissionStatus: GraphTypes.educationSubmissionStatus = {
	working: 0,
	submitted: 1,
	released: 2,
	returned: 3,
	unknownFutureValue: 4,
	reassigned: 5,
	excused: 6,
}

/** contactRelationship types */
export const contactRelationship: GraphTypes.contactRelationship = {
	parent: 0,
	relative: 1,
	aide: 2,
	doctor: 3,
	guardian: 4,
	child: 5,
	other: 6,
	unknownFutureValue: 7,
}

/** educationExternalSource types */
export const educationExternalSource: GraphTypes.educationExternalSource = {
	sis: 0,
	manual: 1,
	unknownFutureValue: 2,
}

/** educationGender types */
export const educationGender: GraphTypes.educationGender = {
	female: 0,
	male: 1,
	other: 2,
	unknownFutureValue: 3,
}

/** educationUserRole types */
export const educationUserRole: GraphTypes.educationUserRole = {
	student: 0,
	teacher: 1,
	none: 2,
	unknownFutureValue: 3,
}

/** artifactRestoreStatus types */
export const artifactRestoreStatus: GraphTypes.artifactRestoreStatus = {
	added: 0,
	scheduling: 1,
	scheduled: 2,
	inProgress: 3,
	succeeded: 4,
	failed: 5,
	unknownFutureValue: 6,
}

/** backupServiceConsumer types */
export const backupServiceConsumer: GraphTypes.backupServiceConsumer = {
	unknown: 0,
	firstparty: 1,
	thirdparty: 2,
	unknownFutureValue: 3,
}

/** backupServiceStatus types */
export const backupServiceStatus: GraphTypes.backupServiceStatus = {
	disabled: 0,
	enabled: 1,
	protectionChangeLocked: 2,
	restoreLocked: 3,
	unknownFutureValue: 4,
}

/** destinationType types */
export const destinationType: GraphTypes.destinationType = {
	new: 0,
	inPlace: 1,
	unknownFutureValue: 2,
}

/** disableReason types */
export const disableReason: GraphTypes.disableReason = {
	none: 0,
	invalidBillingProfile: 1,
	userRequested: 2,
	unknownFutureValue: 3,
}

/** protectionPolicyStatus types */
export const protectionPolicyStatus: GraphTypes.protectionPolicyStatus = {
	inactive: 0,
	activeWithErrors: 1,
	updating: 2,
	active: 3,
	unknownFutureValue: 4,
}

/** protectionRuleStatus types */
export const protectionRuleStatus: GraphTypes.protectionRuleStatus = {
	draft: 0,
	active: 1,
	completed: 2,
	completedWithErrors: 3,
	unknownFutureValue: 4,
}

/** protectionUnitStatus types */
export const protectionUnitStatus: GraphTypes.protectionUnitStatus = {
	protectRequested: 0,
	protected: 1,
	unprotectRequested: 2,
	unprotected: 3,
	removeRequested: 4,
	unknownFutureValue: 5,
}

/** restorableArtifact types */
export const restorableArtifact: GraphTypes.restorableArtifact = {
	message: 0,
	unknownFutureValue: 1,
}

/** restorePointPreference types */
export const restorePointPreference: GraphTypes.restorePointPreference = {
	latest: 0,
	oldest: 1,
	unknownFutureValue: 2,
}

/** restorePointTags types */
export const restorePointTags: GraphTypes.restorePointTags = {
	none: 0,
	fastRestore: 1,
	unknownFutureValue: 2,
}

/** restoreSessionStatus types */
export const restoreSessionStatus: GraphTypes.restoreSessionStatus = {
	draft: 0,
	activating: 1,
	active: 2,
	completedWithError: 3,
	completed: 4,
	unknownFutureValue: 5,
	failed: 6,
}

/** serviceAppStatus types */
export const serviceAppStatus: GraphTypes.serviceAppStatus = {
	inactive: 0,
	active: 1,
	pendingActive: 2,
	pendingInactive: 3,
	unknownFutureValue: 4,
}

/** workbookOperationStatus types */
export const workbookOperationStatus: GraphTypes.workbookOperationStatus = {
	notStarted: 0,
	running: 1,
	succeeded: 2,
	failed: 3,
}

/** activityDomain types */
export const activityDomain: GraphTypes.activityDomain = {
	unknown: 0,
	work: 1,
	personal: 2,
	unrestricted: 3,
}

/** attendeeType types */
export const attendeeType: GraphTypes.attendeeType = {
	required: 0,
	optional: 1,
	resource: 2,
}

/** freeBusyStatus types */
export const freeBusyStatus: GraphTypes.freeBusyStatus = {
	unknown: -1,
	free: 0,
	tentative: 1,
	busy: 2,
	oof: 3,
	workingElsewhere: 4,
}

/** bookingType types */
export const bookingType: GraphTypes.bookingType = {
	unknown: 0,
	standard: 1,
	reserved: 2,
}

/** attachmentType types */
export const attachmentType: GraphTypes.attachmentType = {
	file: 0,
	item: 1,
	reference: 2,
}

/** automaticRepliesStatus types */
export const automaticRepliesStatus: GraphTypes.automaticRepliesStatus = {
	disabled: 0,
	alwaysEnabled: 1,
	scheduled: 2,
}

/** calendarColor types */
export const calendarColor: GraphTypes.calendarColor = {
	auto: -1,
	lightBlue: 0,
	lightGreen: 1,
	lightOrange: 2,
	lightGray: 3,
	lightYellow: 4,
	lightTeal: 5,
	lightPink: 6,
	lightBrown: 7,
	lightRed: 8,
	maxColor: 9,
}

/** calendarRoleType types */
export const calendarRoleType: GraphTypes.calendarRoleType = {
	none: 0,
	freeBusyRead: 1,
	limitedRead: 2,
	read: 3,
	write: 4,
	delegateWithoutPrivateEventAccess: 5,
	delegateWithPrivateEventAccess: 6,
	custom: 7,
}

/** calendarSharingAction types */
export const calendarSharingAction: GraphTypes.calendarSharingAction = {
	accept: 0,
	acceptAndViewCalendar: 1,
	viewCalendar: 2,
	addThisCalendar: 3,
}

/** calendarSharingActionImportance types */
export const calendarSharingActionImportance: GraphTypes.calendarSharingActionImportance = {
	primary: 0,
	secondary: 1,
}

/** calendarSharingActionType types */
export const calendarSharingActionType: GraphTypes.calendarSharingActionType = {
	accept: 0,
}

/** categoryColor types */
export const categoryColor: GraphTypes.categoryColor = {
	none: -1,
	preset0: 0,
	preset1: 1,
	preset2: 2,
	preset3: 3,
	preset4: 4,
	preset5: 5,
	preset6: 6,
	preset7: 7,
	preset8: 8,
	preset9: 9,
	preset10: 10,
	preset11: 11,
	preset12: 12,
	preset13: 13,
	preset14: 14,
	preset15: 15,
	preset16: 16,
	preset17: 17,
	preset18: 18,
	preset19: 19,
	preset20: 20,
	preset21: 21,
	preset22: 22,
	preset23: 23,
	preset24: 24,
}

/** delegateMeetingMessageDeliveryOptions types */
export const delegateMeetingMessageDeliveryOptions: GraphTypes.delegateMeetingMessageDeliveryOptions = {
	sendToDelegateAndInformationToPrincipal: 0,
	sendToDelegateAndPrincipal: 1,
	sendToDelegateOnly: 2,
}

/** eventType types */
export const eventType: GraphTypes.eventType = {
	singleInstance: 0,
	occurrence: 1,
	exception: 2,
	seriesMaster: 3,
}

/** exchangeIdFormat types */
export const exchangeIdFormat: GraphTypes.exchangeIdFormat = {
	entryId: 0,
	ewsId: 1,
	immutableEntryId: 2,
	restId: 3,
	restImmutableEntryId: 4,
}

/** externalAudienceScope types */
export const externalAudienceScope: GraphTypes.externalAudienceScope = {
	none: 0,
	contactsOnly: 1,
	all: 2,
}

/** followupFlagStatus types */
export const followupFlagStatus: GraphTypes.followupFlagStatus = {
	notFlagged: 0,
	complete: 1,
	flagged: 2,
}

/** importance types */
export const importance: GraphTypes.importance = {
	low: 0,
	normal: 1,
	high: 2,
}

/** inferenceClassificationType types */
export const inferenceClassificationType: GraphTypes.inferenceClassificationType = {
	focused: 0,
	other: 1,
}

/** mailTipsType types */
export const mailTipsType: GraphTypes.mailTipsType = {
	automaticReplies: 1,
	mailboxFullStatus: 2,
	customMailTip: 4,
	externalMemberCount: 8,
	totalMemberCount: 16,
	maxMessageSize: 32,
	deliveryRestriction: 64,
	moderationStatus: 128,
	recipientScope: 256,
	recipientSuggestions: 512,
}

/** meetingMessageType types */
export const meetingMessageType: GraphTypes.meetingMessageType = {
	none: 0,
	meetingRequest: 1,
	meetingCancelled: 2,
	meetingAccepted: 3,
	meetingTenativelyAccepted: 4,
	meetingDeclined: 5,
}

/** meetingRequestType types */
export const meetingRequestType: GraphTypes.meetingRequestType = {
	none: 0,
	newMeetingRequest: 1,
	fullUpdate: 65536,
	informationalUpdate: 131072,
	silentUpdate: 262144,
	outdated: 524288,
	principalWantsCopy: 1048576,
}

/** messageActionFlag types */
export const messageActionFlag: GraphTypes.messageActionFlag = {
	any: 0,
	call: 1,
	doNotForward: 2,
	followUp: 3,
	fyi: 4,
	forward: 5,
	noResponseNecessary: 6,
	read: 7,
	reply: 8,
	replyToAll: 9,
	review: 10,
}

/** onlineMeetingProviderType types */
export const onlineMeetingProviderType: GraphTypes.onlineMeetingProviderType = {
	unknown: 0,
	skypeForBusiness: 1,
	skypeForConsumer: 2,
	teamsForBusiness: 3,
}

/** recipientScopeType types */
export const recipientScopeType: GraphTypes.recipientScopeType = {
	none: 0,
	internal: 1,
	external: 2,
	externalPartner: 4,
	externalNonPartner: 8,
}

/** recurrencePatternType types */
export const recurrencePatternType: GraphTypes.recurrencePatternType = {
	daily: 0,
	weekly: 1,
	absoluteMonthly: 2,
	relativeMonthly: 3,
	absoluteYearly: 4,
	relativeYearly: 5,
}

/** recurrenceRangeType types */
export const recurrenceRangeType: GraphTypes.recurrenceRangeType = {
	endDate: 0,
	noEnd: 1,
	numbered: 2,
}

/** responseType types */
export const responseType: GraphTypes.responseType = {
	none: 0,
	organizer: 1,
	tentativelyAccepted: 2,
	accepted: 3,
	declined: 4,
	notResponded: 5,
}

/** selectionLikelihoodInfo types */
export const selectionLikelihoodInfo: GraphTypes.selectionLikelihoodInfo = {
	notSpecified: 0,
	high: 1,
}

/** sensitivity types */
export const sensitivity: GraphTypes.sensitivity = {
	normal: 0,
	personal: 1,
	private: 2,
	confidential: 3,
}

/** timeZoneStandard types */
export const timeZoneStandard: GraphTypes.timeZoneStandard = {
	windows: 0,
	iana: 1,
}

/** userPurpose types */
export const userPurpose: GraphTypes.userPurpose = {
	user: 1,
	linked: 2,
	shared: 3,
	room: 4,
	equipment: 5,
	others: 6,
	unknownFutureValue: 7,
}

/** websiteType types */
export const websiteType: GraphTypes.websiteType = {
	other: 0,
	home: 1,
	work: 2,
	blog: 3,
	profile: 4,
}

/** weekIndex types */
export const weekIndex: GraphTypes.weekIndex = {
	first: 0,
	second: 1,
	third: 2,
	fourth: 3,
	last: 4,
}

/** fileStorageContainerStatus types */
export const fileStorageContainerStatus: GraphTypes.fileStorageContainerStatus = {
	inactive: 0,
	active: 1,
	unknownFutureValue: 2,
}

/** imageTaggingChoice types */
export const imageTaggingChoice: GraphTypes.imageTaggingChoice = {
	disabled: 0,
	basic: 1,
	enhanced: 2,
	unknownFutureValue: 3,
}

/** sharingCapabilities types */
export const sharingCapabilities: GraphTypes.sharingCapabilities = {
	disabled: 0,
	externalUserSharingOnly: 1,
	externalUserAndGuestSharing: 2,
	existingExternalUserSharingOnly: 3,
	unknownFutureValue: 4,
}

/** sharingDomainRestrictionMode types */
export const sharingDomainRestrictionMode: GraphTypes.sharingDomainRestrictionMode = {
	none: 0,
	allowList: 1,
	blockList: 2,
	unknownFutureValue: 3,
}

/** columnTypes types */
export const columnTypes: GraphTypes.columnTypes = {
	note: 0,
	text: 1,
	choice: 2,
	multichoice: 3,
	number: 4,
	currency: 5,
	dateTime: 6,
	lookup: 7,
	boolean: 8,
	user: 9,
	url: 10,
	calculated: 11,
	location: 12,
	geolocation: 13,
	term: 14,
	multiterm: 15,
	thumbnail: 16,
	approvalStatus: 17,
	unknownFutureValue: 18,
}

/** driveItemSourceApplication types */
export const driveItemSourceApplication: GraphTypes.driveItemSourceApplication = {
	teams: 0,
	yammer: 1,
	sharePoint: 2,
	oneDrive: 3,
	stream: 4,
	powerPoint: 5,
	office: 6,
	loki: 7,
	loop: 8,
	other: 9,
	unknownFutureValue: 10,
}

/** horizontalSectionLayoutType types */
export const horizontalSectionLayoutType: GraphTypes.horizontalSectionLayoutType = {
	none: 0,
	oneColumn: 1,
	twoColumns: 2,
	threeColumns: 3,
	oneThirdLeftColumn: 4,
	oneThirdRightColumn: 5,
	fullWidth: 6,
	unknownFutureValue: 7,
}

/** longRunningOperationStatus types */
export const longRunningOperationStatus: GraphTypes.longRunningOperationStatus = {
	notStarted: 0,
	running: 1,
	succeeded: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** mediaSourceContentCategory types */
export const mediaSourceContentCategory: GraphTypes.mediaSourceContentCategory = {
	meeting: 0,
	liveStream: 1,
	presentation: 2,
	screenRecording: 3,
	story: 4,
	profile: 5,
	chat: 6,
	note: 7,
	comment: 8,
	unknownFutureValue: 9,
}

/** pageLayoutType types */
export const pageLayoutType: GraphTypes.pageLayoutType = {
	microsoftReserved: 0,
	article: 1,
	home: 2,
	unknownFutureValue: 3,
}

/** pagePromotionType types */
export const pagePromotionType: GraphTypes.pagePromotionType = {
	microsoftReserved: 0,
	page: 1,
	newsPost: 2,
	unknownFutureValue: 3,
}

/** sectionEmphasisType types */
export const sectionEmphasisType: GraphTypes.sectionEmphasisType = {
	none: 0,
	neutral: 1,
	soft: 2,
	strong: 3,
	unknownFutureValue: 4,
}

/** sensitivityLabelAssignmentMethod types */
export const sensitivityLabelAssignmentMethod: GraphTypes.sensitivityLabelAssignmentMethod = {
	standard: 0,
	privileged: 1,
	auto: 2,
	unknownFutureValue: 3,
}

/** siteArchiveStatus types */
export const siteArchiveStatus: GraphTypes.siteArchiveStatus = {
	recentlyArchived: 0,
	fullyArchived: 1,
	reactivating: 2,
	unknownFutureValue: 3,
}

/** titleAreaLayoutType types */
export const titleAreaLayoutType: GraphTypes.titleAreaLayoutType = {
	imageAndTitle: 0,
	plain: 1,
	colorBlock: 2,
	overlap: 3,
	unknownFutureValue: 4,
}

/** titleAreaTextAlignmentType types */
export const titleAreaTextAlignmentType: GraphTypes.titleAreaTextAlignmentType = {
	left: 0,
	center: 1,
	unknownFutureValue: 2,
}

/** remindBeforeTimeInMinutesType types */
export const remindBeforeTimeInMinutesType: GraphTypes.remindBeforeTimeInMinutesType = {
	mins15: 0,
	unknownFutureValue: 100,
}

/** virtualAppointmentMessageType types */
export const virtualAppointmentMessageType: GraphTypes.virtualAppointmentMessageType = {
	confirmation: 0,
	reschedule: 1,
	cancellation: 2,
	unknownFutureValue: 10,
}

/** stagedFeatureName types */
export const stagedFeatureName: GraphTypes.stagedFeatureName = {
	passthroughAuthentication: 0,
	seamlessSso: 1,
	passwordHashSync: 2,
	emailAsAlternateId: 3,
	unknownFutureValue: 4,
	certificateBasedAuthentication: 5,
	multiFactorAuthentication: 6,
}

/** attributeDefinitionMetadata types */
export const attributeDefinitionMetadata: GraphTypes.attributeDefinitionMetadata = {
	BaseAttributeName: 0,
	ComplexObjectDefinition: 1,
	IsContainer: 2,
	IsCustomerDefined: 3,
	IsDomainQualified: 4,
	LinkPropertyNames: 5,
	LinkTypeName: 6,
	MaximumLength: 7,
	ReferencedProperty: 8,
}

/** attributeFlowBehavior types */
export const attributeFlowBehavior: GraphTypes.attributeFlowBehavior = {
	FlowWhenChanged: 0,
	FlowAlways: 1,
}

/** attributeFlowType types */
export const attributeFlowType: GraphTypes.attributeFlowType = {
	Always: 0,
	ObjectAddOnly: 1,
	MultiValueAddOnly: 2,
	ValueAddOnly: 3,
	AttributeAddOnly: 4,
}

/** attributeMappingSourceType types */
export const attributeMappingSourceType: GraphTypes.attributeMappingSourceType = {
	Attribute: 0,
	Constant: 1,
	Function: 2,
}

/** attributeType types */
export const attributeType: GraphTypes.attributeType = {
	String: 0,
	Integer: 1,
	Reference: 2,
	Binary: 3,
	Boolean: 4,
	DateTime: 5,
}

/** directoryDefinitionDiscoverabilities types */
export const directoryDefinitionDiscoverabilities: GraphTypes.directoryDefinitionDiscoverabilities = {
	None: 0,
	AttributeNames: 1,
	AttributeDataTypes: 2,
	AttributeReadOnly: 4,
	ReferenceAttributes: 8,
	UnknownFutureValue: 16,
}

/** entryExportStatus types */
export const entryExportStatus: GraphTypes.entryExportStatus = {
	Noop: 0,
	Success: 1,
	RetryableError: 2,
	PermanentError: 3,
	Error: 4,
}

/** entrySyncOperation types */
export const entrySyncOperation: GraphTypes.entrySyncOperation = {
	None: 0,
	Add: 1,
	Delete: 2,
	Update: 3,
}

/** escrowBehavior types */
export const escrowBehavior: GraphTypes.escrowBehavior = {
	Default: 1,
	IgnoreLookupReferenceResolutionFailure: 2,
}

/** mutability types */
export const mutability: GraphTypes.mutability = {
	ReadWrite: 0,
	ReadOnly: 1,
	Immutable: 2,
	WriteOnly: 3,
}

/** objectDefinitionMetadata types */
export const objectDefinitionMetadata: GraphTypes.objectDefinitionMetadata = {
	PropertyNameAccountEnabled: 0,
	PropertyNameSoftDeleted: 1,
	IsSoftDeletionSupported: 2,
	IsSynchronizeAllSupported: 3,
	ConnectorDataStorageRequired: 4,
	Extensions: 5,
	BaseObjectName: 6,
}

/** objectFlowTypes types */
export const objectFlowTypes: GraphTypes.objectFlowTypes = {
	None: 0,
	Add: 1,
	Update: 2,
	Delete: 4,
}

/** objectMappingMetadata types */
export const objectMappingMetadata: GraphTypes.objectMappingMetadata = {
	EscrowBehavior: 0,
	DisableMonitoringForChanges: 1,
	OriginalJoiningProperty: 2,
	Disposition: 3,
	IsCustomerDefined: 4,
	ExcludeFromReporting: 5,
	Unsynchronized: 6,
}

/** quarantineReason types */
export const quarantineReason: GraphTypes.quarantineReason = {
	EncounteredBaseEscrowThreshold: 0,
	EncounteredTotalEscrowThreshold: 1,
	EncounteredEscrowProportionThreshold: 2,
	EncounteredQuarantineException: 4,
	Unknown: 8,
	QuarantinedOnDemand: 16,
	TooManyDeletes: 32,
	IngestionInterrupted: 64,
}

/** scopeOperatorMultiValuedComparisonType types */
export const scopeOperatorMultiValuedComparisonType: GraphTypes.scopeOperatorMultiValuedComparisonType = {
	All: 0,
	Any: 1,
}

/** scopeOperatorType types */
export const scopeOperatorType: GraphTypes.scopeOperatorType = {
	Binary: 0,
	Unary: 1,
}

/** synchronizationDisposition types */
export const synchronizationDisposition: GraphTypes.synchronizationDisposition = {
	Normal: 0,
	Discard: 1,
	Escrow: 2,
}

/** synchronizationJobRestartScope types */
export const synchronizationJobRestartScope: GraphTypes.synchronizationJobRestartScope = {
	None: 0,
	ConnectorDataStore: 1,
	Escrows: 2,
	Watermark: 4,
	QuarantineState: 8,
	Full: 15,
	ForceDeletes: 32,
}

/** synchronizationMetadata types */
export const synchronizationMetadata: GraphTypes.synchronizationMetadata = {
	GalleryApplicationIdentifier: 0,
	GalleryApplicationKey: 1,
	IsOAuthEnabled: 2,
	IsSynchronizationAgentAssignmentRequired: 3,
	IsSynchronizationAgentRequired: 4,
	IsSynchronizationInPreview: 5,
	OAuthSettings: 6,
	SynchronizationLearnMoreIbizaFwLink: 7,
	ConfigurationFields: 8,
}

/** synchronizationScheduleState types */
export const synchronizationScheduleState: GraphTypes.synchronizationScheduleState = {
	Active: 0,
	Disabled: 1,
	Paused: 2,
}

/** synchronizationSecret types */
export const synchronizationSecret: GraphTypes.synchronizationSecret = {
	None: 0,
	UserName: 1,
	Password: 2,
	SecretToken: 3,
	AppKey: 4,
	BaseAddress: 5,
	ClientIdentifier: 6,
	ClientSecret: 7,
	SingleSignOnType: 11,
	Sandbox: 12,
	Url: 13,
	Domain: 14,
	ConsumerKey: 15,
	ConsumerSecret: 16,
	TokenKey: 17,
	TokenExpiration: 18,
	Oauth2AccessToken: 19,
	Oauth2AccessTokenCreationTime: 20,
	Oauth2RefreshToken: 21,
	SyncAll: 22,
	InstanceName: 24,
	Oauth2ClientId: 27,
	Oauth2ClientSecret: 28,
	CompanyId: 29,
	UpdateKeyOnSoftDelete: 30,
	SynchronizationSchedule: 33,
	SystemOfRecord: 34,
	SandboxName: 35,
	EnforceDomain: 36,
	SyncNotificationSettings: 37,
	SkipOutOfScopeDeletions: 40,
	Oauth2AuthorizationCode: 62,
	Oauth2RedirectUri: 63,
	ApplicationTemplateIdentifier: 64,
	Oauth2TokenExchangeUri: 65,
	Oauth2AuthorizationUri: 66,
	AuthenticationType: 67,
	Server: 70,
	PerformInboundEntitlementGrants: 100,
	HardDeletesEnabled: 101,
	SyncAgentCompatibilityKey: 102,
	SyncAgentADContainer: 103,
	ValidateDomain: 206,
	TestReferences: 207,
	ConnectionString: 250,
}

/** synchronizationStatusCode types */
export const synchronizationStatusCode: GraphTypes.synchronizationStatusCode = {
	NotConfigured: 0,
	NotRun: 1,
	Active: 2,
	Paused: 3,
	Quarantine: 4,
}

/** synchronizationTaskExecutionResult types */
export const synchronizationTaskExecutionResult: GraphTypes.synchronizationTaskExecutionResult = {
	Succeeded: 0,
	Failed: 1,
	EntryLevelErrors: 2,
}

/** endpointType types */
export const endpointType: GraphTypes.endpointType = {
	default: 0,
	voicemail: 1,
	skypeForBusiness: 2,
	skypeForBusinessVoipPhone: 3,
	unknownFutureValue: 4,
}

/** accessReviewHistoryDecisionFilter types */
export const accessReviewHistoryDecisionFilter: GraphTypes.accessReviewHistoryDecisionFilter = {
	approve: 0,
	deny: 1,
	notReviewed: 2,
	dontKnow: 3,
	notNotified: 4,
	unknownFutureValue: 5,
}

/** accessReviewHistoryStatus types */
export const accessReviewHistoryStatus: GraphTypes.accessReviewHistoryStatus = {
	done: 0,
	inprogress: 1,
	error: 2,
	requested: 3,
	unknownFutureValue: 4,
}

/** accessReviewInstanceDecisionItemFilterByCurrentUserOptions types */
export const accessReviewInstanceDecisionItemFilterByCurrentUserOptions: GraphTypes.accessReviewInstanceDecisionItemFilterByCurrentUserOptions = {
	reviewer: 1,
	unknownFutureValue: 2,
}

/** accessReviewInstanceFilterByCurrentUserOptions types */
export const accessReviewInstanceFilterByCurrentUserOptions: GraphTypes.accessReviewInstanceFilterByCurrentUserOptions = {
	reviewer: 1,
	unknownFutureValue: 2,
}

/** accessReviewScheduleDefinitionFilterByCurrentUserOptions types */
export const accessReviewScheduleDefinitionFilterByCurrentUserOptions: GraphTypes.accessReviewScheduleDefinitionFilterByCurrentUserOptions = {
	reviewer: 1,
	unknownFutureValue: 2,
}

/** accessReviewStageFilterByCurrentUserOptions types */
export const accessReviewStageFilterByCurrentUserOptions: GraphTypes.accessReviewStageFilterByCurrentUserOptions = {
	reviewer: 1,
	unknownFutureValue: 2,
}

/** approvalFilterByCurrentUserOptions types */
export const approvalFilterByCurrentUserOptions: GraphTypes.approvalFilterByCurrentUserOptions = {
	target: 0,
	createdBy: 1,
	approver: 2,
	unknownFutureValue: 3,
}

/** consentRequestFilterByCurrentUserOptions types */
export const consentRequestFilterByCurrentUserOptions: GraphTypes.consentRequestFilterByCurrentUserOptions = {
	reviewer: 0,
	unknownFutureValue: 1,
}

/** userSignInRecommendationScope types */
export const userSignInRecommendationScope: GraphTypes.userSignInRecommendationScope = {
	tenant: 0,
	application: 1,
	unknownFutureValue: 2,
}

/** agreementAcceptanceState types */
export const agreementAcceptanceState: GraphTypes.agreementAcceptanceState = {
	accepted: 2,
	declined: 3,
	unknownFutureValue: 5,
}

/** activityType types */
export const activityType: GraphTypes.activityType = {
	signin: 0,
	user: 1,
	unknownFutureValue: 2,
	servicePrincipal: 3,
}

/** cloudAppSecuritySessionControlType types */
export const cloudAppSecuritySessionControlType: GraphTypes.cloudAppSecuritySessionControlType = {
	mcasConfigured: 0,
	monitorOnly: 1,
	blockDownloads: 2,
	unknownFutureValue: 3,
}

/** conditionalAccessClientApp types */
export const conditionalAccessClientApp: GraphTypes.conditionalAccessClientApp = {
	all: 0,
	browser: 1,
	mobileAppsAndDesktopClients: 2,
	exchangeActiveSync: 3,
	easSupported: 4,
	other: 5,
	unknownFutureValue: 6,
}

/** conditionalAccessDevicePlatform types */
export const conditionalAccessDevicePlatform: GraphTypes.conditionalAccessDevicePlatform = {
	android: 0,
	iOS: 1,
	windows: 2,
	windowsPhone: 3,
	macOS: 4,
	all: 5,
	unknownFutureValue: 6,
	linux: 7,
}

/** conditionalAccessExternalTenantsMembershipKind types */
export const conditionalAccessExternalTenantsMembershipKind: GraphTypes.conditionalAccessExternalTenantsMembershipKind = {
	all: 0,
	enumerated: 1,
	unknownFutureValue: 2,
}

/** conditionalAccessGrantControl types */
export const conditionalAccessGrantControl: GraphTypes.conditionalAccessGrantControl = {
	block: 0,
	mfa: 1,
	compliantDevice: 2,
	domainJoinedDevice: 3,
	approvedApplication: 4,
	compliantApplication: 5,
	passwordChange: 6,
	unknownFutureValue: 7,
}

/** conditionalAccessGuestOrExternalUserTypes types */
export const conditionalAccessGuestOrExternalUserTypes: GraphTypes.conditionalAccessGuestOrExternalUserTypes = {
	none: 0,
	internalGuest: 1,
	b2bCollaborationGuest: 2,
	b2bCollaborationMember: 4,
	b2bDirectConnectUser: 8,
	otherExternalUser: 16,
	serviceProvider: 32,
	unknownFutureValue: 64,
}

/** conditionalAccessInsiderRiskLevels types */
export const conditionalAccessInsiderRiskLevels: GraphTypes.conditionalAccessInsiderRiskLevels = {
	minor: 1,
	moderate: 2,
	elevated: 4,
	unknownFutureValue: 8,
}

/** conditionalAccessPolicyState types */
export const conditionalAccessPolicyState: GraphTypes.conditionalAccessPolicyState = {
	enabled: 0,
	disabled: 1,
	enabledForReportingButNotEnforced: 2,
}

/** conditionalAccessTransferMethods types */
export const conditionalAccessTransferMethods: GraphTypes.conditionalAccessTransferMethods = {
	none: 0,
	deviceCodeFlow: 1,
	authenticationTransfer: 2,
	unknownFutureValue: 4,
}

/** countryLookupMethodType types */
export const countryLookupMethodType: GraphTypes.countryLookupMethodType = {
	clientIpAddress: 0,
	authenticatorAppGps: 1,
	unknownFutureValue: 2,
}

/** filterMode types */
export const filterMode: GraphTypes.filterMode = {
	include: 0,
	exclude: 1,
}

/** persistentBrowserSessionMode types */
export const persistentBrowserSessionMode: GraphTypes.persistentBrowserSessionMode = {
	always: 0,
	never: 1,
}

/** riskDetectionTimingType types */
export const riskDetectionTimingType: GraphTypes.riskDetectionTimingType = {
	notDefined: 0,
	realtime: 1,
	nearRealtime: 2,
	offline: 3,
	unknownFutureValue: 4,
}

/** signInFrequencyAuthenticationType types */
export const signInFrequencyAuthenticationType: GraphTypes.signInFrequencyAuthenticationType = {
	primaryAndSecondaryAuthentication: 0,
	secondaryAuthentication: 1,
	unknownFutureValue: 2,
}

/** signInFrequencyInterval types */
export const signInFrequencyInterval: GraphTypes.signInFrequencyInterval = {
	timeBased: 0,
	everyTime: 1,
	unknownFutureValue: 2,
}

/** signinFrequencyType types */
export const signinFrequencyType: GraphTypes.signinFrequencyType = {
	days: 0,
	hours: 1,
}

/** templateScenarios types */
export const templateScenarios: GraphTypes.templateScenarios = {
	new: 0,
	secureFoundation: 1,
	zeroTrust: 2,
	remoteWork: 4,
	protectAdmins: 8,
	emergingThreats: 16,
	unknownFutureValue: 32,
}

/** tokenIssuerType types */
export const tokenIssuerType: GraphTypes.tokenIssuerType = {
	AzureAD: 0,
	ADFederationServices: 1,
	UnknownFutureValue: 2,
	AzureADBackupAuth: 3,
	ADFederationServicesMFAAdapter: 4,
	NPSExtension: 5,
}

/** accessPackageAssignmentFilterByCurrentUserOptions types */
export const accessPackageAssignmentFilterByCurrentUserOptions: GraphTypes.accessPackageAssignmentFilterByCurrentUserOptions = {
	target: 1,
	createdBy: 2,
	unknownFutureValue: 99,
}

/** accessPackageAssignmentRequestFilterByCurrentUserOptions types */
export const accessPackageAssignmentRequestFilterByCurrentUserOptions: GraphTypes.accessPackageAssignmentRequestFilterByCurrentUserOptions = {
	target: 1,
	createdBy: 2,
	approver: 3,
	unknownFutureValue: 99,
}

/** accessPackageAssignmentState types */
export const accessPackageAssignmentState: GraphTypes.accessPackageAssignmentState = {
	delivering: 0,
	partiallyDelivered: 1,
	delivered: 2,
	expired: 3,
	deliveryFailed: 4,
	unknownFutureValue: 5,
}

/** accessPackageCatalogState types */
export const accessPackageCatalogState: GraphTypes.accessPackageCatalogState = {
	unpublished: 1,
	published: 2,
	unknownFutureValue: 3,
}

/** accessPackageCatalogType types */
export const accessPackageCatalogType: GraphTypes.accessPackageCatalogType = {
	userManaged: 1,
	serviceDefault: 2,
	serviceManaged: 3,
	unknownFutureValue: 4,
}

/** accessPackageCustomExtensionStage types */
export const accessPackageCustomExtensionStage: GraphTypes.accessPackageCustomExtensionStage = {
	assignmentRequestCreated: 1,
	assignmentRequestApproved: 2,
	assignmentRequestGranted: 3,
	assignmentRequestRemoved: 4,
	assignmentFourteenDaysBeforeExpiration: 5,
	assignmentOneDayBeforeExpiration: 6,
	unknownFutureValue: 7,
}

/** accessPackageExternalUserLifecycleAction types */
export const accessPackageExternalUserLifecycleAction: GraphTypes.accessPackageExternalUserLifecycleAction = {
	none: 0,
	blockSignIn: 1,
	blockSignInAndDelete: 2,
	unknownFutureValue: 3,
}

/** accessPackageFilterByCurrentUserOptions types */
export const accessPackageFilterByCurrentUserOptions: GraphTypes.accessPackageFilterByCurrentUserOptions = {
	allowedRequestor: 1,
	unknownFutureValue: 99,
}

/** accessPackageRequestState types */
export const accessPackageRequestState: GraphTypes.accessPackageRequestState = {
	submitted: 0,
	pendingApproval: 1,
	delivering: 2,
	delivered: 3,
	deliveryFailed: 4,
	denied: 5,
	scheduled: 6,
	canceled: 7,
	partiallyDelivered: 8,
	unknownFutureValue: 9,
}

/** accessPackageRequestType types */
export const accessPackageRequestType: GraphTypes.accessPackageRequestType = {
	notSpecified: 0,
	userAdd: 1,
	userUpdate: 2,
	userRemove: 3,
	adminAdd: 4,
	adminUpdate: 5,
	adminRemove: 6,
	systemAdd: 7,
	systemUpdate: 8,
	systemRemove: 9,
	onBehalfAdd: 10,
	unknownFutureValue: 11,
}

/** accessPackageSubjectType types */
export const accessPackageSubjectType: GraphTypes.accessPackageSubjectType = {
	notSpecified: 0,
	user: 1,
	servicePrincipal: 2,
	unknownFutureValue: 3,
}

/** accessReviewExpirationBehavior types */
export const accessReviewExpirationBehavior: GraphTypes.accessReviewExpirationBehavior = {
	keepAccess: 0,
	removeAccess: 1,
	acceptAccessRecommendation: 2,
	unknownFutureValue: 99,
}

/** allowedTargetScope types */
export const allowedTargetScope: GraphTypes.allowedTargetScope = {
	notSpecified: 0,
	specificDirectoryUsers: 1,
	specificConnectedOrganizationUsers: 2,
	specificDirectoryServicePrincipals: 3,
	allMemberUsers: 4,
	allDirectoryUsers: 5,
	allDirectoryServicePrincipals: 6,
	allConfiguredConnectedOrganizationUsers: 7,
	allExternalUsers: 8,
	unknownFutureValue: 10,
}

/** customExtensionCalloutInstanceStatus types */
export const customExtensionCalloutInstanceStatus: GraphTypes.customExtensionCalloutInstanceStatus = {
	calloutSent: 1,
	callbackReceived: 2,
	calloutFailed: 3,
	callbackTimedOut: 4,
	waitingForCallback: 5,
	unknownFutureValue: 6,
}

/** expirationPatternType types */
export const expirationPatternType: GraphTypes.expirationPatternType = {
	notSpecified: 0,
	noExpiration: 1,
	afterDateTime: 2,
	afterDuration: 3,
}

/** connectedOrganizationState types */
export const connectedOrganizationState: GraphTypes.connectedOrganizationState = {
	configured: 0,
	proposed: 1,
	unknownFutureValue: 2,
}

/** socialIdentitySourceType types */
export const socialIdentitySourceType: GraphTypes.socialIdentitySourceType = {
	facebook: 1,
	unknownFutureValue: 2,
}

/** certificateStatus types */
export const certificateStatus: GraphTypes.certificateStatus = {
	notProvisioned: 0,
	provisioned: 1,
}

/** complianceStatus types */
export const complianceStatus: GraphTypes.complianceStatus = {
	unknown: 0,
	notApplicable: 1,
	compliant: 2,
	remediated: 3,
	nonCompliant: 4,
	error: 5,
	conflict: 6,
	notAssigned: 7,
}

/** installIntent types */
export const installIntent: GraphTypes.installIntent = {
	available: 0,
	required: 1,
	uninstall: 2,
	availableWithoutEnrollment: 3,
}

/** managedAppAvailability types */
export const managedAppAvailability: GraphTypes.managedAppAvailability = {
	global: 0,
	lineOfBusiness: 1,
}

/** mdmAppConfigKeyType types */
export const mdmAppConfigKeyType: GraphTypes.mdmAppConfigKeyType = {
	stringType: 0,
	integerType: 1,
	realType: 2,
	booleanType: 3,
	tokenType: 4,
}

/** microsoftEdgeChannel types */
export const microsoftEdgeChannel: GraphTypes.microsoftEdgeChannel = {
	dev: 0,
	beta: 1,
	stable: 2,
	unknownFutureValue: 3,
}

/** microsoftStoreForBusinessLicenseType types */
export const microsoftStoreForBusinessLicenseType: GraphTypes.microsoftStoreForBusinessLicenseType = {
	offline: 0,
	online: 1,
}

/** mobileAppContentFileUploadState types */
export const mobileAppContentFileUploadState: GraphTypes.mobileAppContentFileUploadState = {
	success: 0,
	transientError: 1,
	error: 2,
	unknown: 3,
	azureStorageUriRequestSuccess: 100,
	azureStorageUriRequestPending: 101,
	azureStorageUriRequestFailed: 102,
	azureStorageUriRequestTimedOut: 103,
	azureStorageUriRenewalSuccess: 200,
	azureStorageUriRenewalPending: 201,
	azureStorageUriRenewalFailed: 202,
	azureStorageUriRenewalTimedOut: 203,
	commitFileSuccess: 300,
	commitFilePending: 301,
	commitFileFailed: 302,
	commitFileTimedOut: 303,
}

/** mobileAppPublishingState types */
export const mobileAppPublishingState: GraphTypes.mobileAppPublishingState = {
	notPublished: 0,
	processing: 1,
	published: 2,
}

/** runAsAccountType types */
export const runAsAccountType: GraphTypes.runAsAccountType = {
	system: 0,
	user: 1,
}

/** vppTokenAccountType types */
export const vppTokenAccountType: GraphTypes.vppTokenAccountType = {
	business: 0,
	education: 1,
}

/** win32LobAppDeliveryOptimizationPriority types */
export const win32LobAppDeliveryOptimizationPriority: GraphTypes.win32LobAppDeliveryOptimizationPriority = {
	notConfigured: 0,
	foreground: 1,
}

/** win32LobAppFileSystemOperationType types */
export const win32LobAppFileSystemOperationType: GraphTypes.win32LobAppFileSystemOperationType = {
	notConfigured: 0,
	exists: 1,
	modifiedDate: 2,
	createdDate: 3,
	version: 4,
	sizeInMB: 5,
}

/** win32LobAppMsiPackageType types */
export const win32LobAppMsiPackageType: GraphTypes.win32LobAppMsiPackageType = {
	perMachine: 0,
	perUser: 1,
	dualPurpose: 2,
}

/** win32LobAppNotification types */
export const win32LobAppNotification: GraphTypes.win32LobAppNotification = {
	showAll: 0,
	showReboot: 1,
	hideAll: 2,
}

/** win32LobAppPowerShellScriptRuleOperationType types */
export const win32LobAppPowerShellScriptRuleOperationType: GraphTypes.win32LobAppPowerShellScriptRuleOperationType = {
	notConfigured: 0,
	string: 1,
	dateTime: 2,
	integer: 3,
	float: 4,
	version: 5,
	boolean: 6,
}

/** win32LobAppRegistryRuleOperationType types */
export const win32LobAppRegistryRuleOperationType: GraphTypes.win32LobAppRegistryRuleOperationType = {
	notConfigured: 0,
	exists: 1,
	doesNotExist: 2,
	string: 3,
	integer: 4,
	version: 5,
}

/** win32LobAppRestartBehavior types */
export const win32LobAppRestartBehavior: GraphTypes.win32LobAppRestartBehavior = {
	basedOnReturnCode: 0,
	allow: 1,
	suppress: 2,
	force: 3,
}

/** win32LobAppReturnCodeType types */
export const win32LobAppReturnCodeType: GraphTypes.win32LobAppReturnCodeType = {
	failed: 0,
	success: 1,
	softReboot: 2,
	hardReboot: 3,
	retry: 4,
}

/** win32LobAppRuleOperator types */
export const win32LobAppRuleOperator: GraphTypes.win32LobAppRuleOperator = {
	notConfigured: 0,
	equal: 1,
	notEqual: 2,
	greaterThan: 4,
	greaterThanOrEqual: 5,
	lessThan: 8,
	lessThanOrEqual: 9,
}

/** win32LobAppRuleType types */
export const win32LobAppRuleType: GraphTypes.win32LobAppRuleType = {
	detection: 0,
	requirement: 1,
}

/** win32LobAutoUpdateSupersededAppsState types */
export const win32LobAutoUpdateSupersededAppsState: GraphTypes.win32LobAutoUpdateSupersededAppsState = {
	notConfigured: 0,
	enabled: 1,
	unknownFutureValue: 2,
}

/** windowsArchitecture types */
export const windowsArchitecture: GraphTypes.windowsArchitecture = {
	none: 0,
	x86: 1,
	x64: 2,
	arm: 4,
	neutral: 8,
}

/** windowsDeviceType types */
export const windowsDeviceType: GraphTypes.windowsDeviceType = {
	none: 0,
	desktop: 1,
	mobile: 2,
	holographic: 4,
	team: 8,
	unknownFutureValue: 16,
}

/** installState types */
export const installState: GraphTypes.installState = {
	notApplicable: 0,
	installed: 1,
	failed: 2,
	notInstalled: 3,
	uninstallFailed: 4,
	unknown: 5,
}

/** androidRequiredPasswordType types */
export const androidRequiredPasswordType: GraphTypes.androidRequiredPasswordType = {
	deviceDefault: 0,
	alphabetic: 1,
	alphanumeric: 2,
	alphanumericWithSymbols: 3,
	lowSecurityBiometric: 4,
	numeric: 5,
	numericComplex: 6,
	any: 7,
}

/** androidWorkProfileCrossProfileDataSharingType types */
export const androidWorkProfileCrossProfileDataSharingType: GraphTypes.androidWorkProfileCrossProfileDataSharingType = {
	deviceDefault: 0,
	preventAny: 1,
	allowPersonalToWork: 2,
	noRestrictions: 3,
}

/** androidWorkProfileDefaultAppPermissionPolicyType types */
export const androidWorkProfileDefaultAppPermissionPolicyType: GraphTypes.androidWorkProfileDefaultAppPermissionPolicyType = {
	deviceDefault: 0,
	prompt: 1,
	autoGrant: 2,
	autoDeny: 3,
}

/** androidWorkProfileRequiredPasswordType types */
export const androidWorkProfileRequiredPasswordType: GraphTypes.androidWorkProfileRequiredPasswordType = {
	deviceDefault: 0,
	lowSecurityBiometric: 1,
	required: 2,
	atLeastNumeric: 3,
	numericComplex: 4,
	atLeastAlphabetic: 5,
	atLeastAlphanumeric: 6,
	alphanumericWithSymbols: 7,
}

/** applicationGuardBlockClipboardSharingType types */
export const applicationGuardBlockClipboardSharingType: GraphTypes.applicationGuardBlockClipboardSharingType = {
	notConfigured: 0,
	blockBoth: 1,
	blockHostToContainer: 2,
	blockContainerToHost: 3,
	blockNone: 4,
}

/** applicationGuardBlockFileTransferType types */
export const applicationGuardBlockFileTransferType: GraphTypes.applicationGuardBlockFileTransferType = {
	notConfigured: 0,
	blockImageAndTextFile: 1,
	blockImageFile: 2,
	blockNone: 3,
	blockTextFile: 4,
}

/** appListType types */
export const appListType: GraphTypes.appListType = {
	none: 0,
	appsInListCompliant: 1,
	appsNotInListCompliant: 2,
}

/** appLockerApplicationControlType types */
export const appLockerApplicationControlType: GraphTypes.appLockerApplicationControlType = {
	notConfigured: 0,
	enforceComponentsAndStoreApps: 1,
	auditComponentsAndStoreApps: 2,
	enforceComponentsStoreAppsAndSmartlocker: 3,
	auditComponentsStoreAppsAndSmartlocker: 4,
}

/** automaticUpdateMode types */
export const automaticUpdateMode: GraphTypes.automaticUpdateMode = {
	userDefined: 0,
	notifyDownload: 1,
	autoInstallAtMaintenanceTime: 2,
	autoInstallAndRebootAtMaintenanceTime: 3,
	autoInstallAndRebootAtScheduledTime: 4,
	autoInstallAndRebootWithoutEndUserControl: 5,
}

/** autoRestartNotificationDismissalMethod types */
export const autoRestartNotificationDismissalMethod: GraphTypes.autoRestartNotificationDismissalMethod = {
	notConfigured: 0,
	automatic: 1,
	user: 2,
	unknownFutureValue: 3,
}

/** bitLockerEncryptionMethod types */
export const bitLockerEncryptionMethod: GraphTypes.bitLockerEncryptionMethod = {
	aesCbc128: 3,
	aesCbc256: 4,
	xtsAes128: 6,
	xtsAes256: 7,
}

/** defenderCloudBlockLevelType types */
export const defenderCloudBlockLevelType: GraphTypes.defenderCloudBlockLevelType = {
	notConfigured: 0,
	high: 1,
	highPlus: 2,
	zeroTolerance: 3,
}

/** defenderMonitorFileActivity types */
export const defenderMonitorFileActivity: GraphTypes.defenderMonitorFileActivity = {
	userDefined: 0,
	disable: 1,
	monitorAllFiles: 2,
	monitorIncomingFilesOnly: 3,
	monitorOutgoingFilesOnly: 4,
}

/** defenderPromptForSampleSubmission types */
export const defenderPromptForSampleSubmission: GraphTypes.defenderPromptForSampleSubmission = {
	userDefined: 0,
	alwaysPrompt: 1,
	promptBeforeSendingPersonalData: 2,
	neverSendData: 3,
	sendAllDataWithoutPrompting: 4,
}

/** defenderScanType types */
export const defenderScanType: GraphTypes.defenderScanType = {
	userDefined: 0,
	disabled: 1,
	quick: 2,
	full: 3,
}

/** defenderThreatAction types */
export const defenderThreatAction: GraphTypes.defenderThreatAction = {
	deviceDefault: 0,
	clean: 1,
	quarantine: 2,
	remove: 3,
	allow: 4,
	userDefined: 5,
	block: 6,
}

/** deviceComplianceActionType types */
export const deviceComplianceActionType: GraphTypes.deviceComplianceActionType = {
	noAction: 0,
	notification: 1,
	block: 2,
	retire: 3,
	wipe: 4,
	removeResourceAccessProfiles: 5,
	pushNotification: 9,
}

/** deviceThreatProtectionLevel types */
export const deviceThreatProtectionLevel: GraphTypes.deviceThreatProtectionLevel = {
	unavailable: 0,
	secured: 1,
	low: 2,
	medium: 3,
	high: 4,
	notSet: 10,
}

/** diagnosticDataSubmissionMode types */
export const diagnosticDataSubmissionMode: GraphTypes.diagnosticDataSubmissionMode = {
	userDefined: 0,
	none: 1,
	basic: 2,
	enhanced: 3,
	full: 4,
}

/** edgeCookiePolicy types */
export const edgeCookiePolicy: GraphTypes.edgeCookiePolicy = {
	userDefined: 0,
	allow: 1,
	blockThirdParty: 2,
	blockAll: 3,
}

/** edgeSearchEngineType types */
export const edgeSearchEngineType: GraphTypes.edgeSearchEngineType = {
	default: 0,
	bing: 1,
}

/** editionUpgradeLicenseType types */
export const editionUpgradeLicenseType: GraphTypes.editionUpgradeLicenseType = {
	productKey: 0,
	licenseFile: 1,
}

/** enablement types */
export const enablement: GraphTypes.enablement = {
	notConfigured: 0,
	enabled: 1,
	disabled: 2,
}

/** firewallCertificateRevocationListCheckMethodType types */
export const firewallCertificateRevocationListCheckMethodType: GraphTypes.firewallCertificateRevocationListCheckMethodType = {
	deviceDefault: 0,
	none: 1,
	attempt: 2,
	require: 3,
}

/** firewallPacketQueueingMethodType types */
export const firewallPacketQueueingMethodType: GraphTypes.firewallPacketQueueingMethodType = {
	deviceDefault: 0,
	disabled: 1,
	queueInbound: 2,
	queueOutbound: 3,
	queueBoth: 4,
}

/** firewallPreSharedKeyEncodingMethodType types */
export const firewallPreSharedKeyEncodingMethodType: GraphTypes.firewallPreSharedKeyEncodingMethodType = {
	deviceDefault: 0,
	none: 1,
	utF8: 2,
}

/** internetSiteSecurityLevel types */
export const internetSiteSecurityLevel: GraphTypes.internetSiteSecurityLevel = {
	userDefined: 0,
	medium: 1,
	mediumHigh: 2,
	high: 3,
}

/** iosNotificationAlertType types */
export const iosNotificationAlertType: GraphTypes.iosNotificationAlertType = {
	deviceDefault: 0,
	banner: 1,
	modal: 2,
	none: 3,
}

/** iosUpdatesInstallStatus types */
export const iosUpdatesInstallStatus: GraphTypes.iosUpdatesInstallStatus = {
	deviceOsHigherThanDesiredOsVersion: -2016330696,
	sharedDeviceUserLoggedInError: -2016330699,
	notSupportedOperation: -2016330701,
	installFailed: -2016330702,
	installPhoneCallInProgress: -2016330703,
	installInsufficientPower: -2016330704,
	installInsufficientSpace: -2016330705,
	installing: -2016330706,
	downloadInsufficientNetwork: -2016330707,
	downloadInsufficientPower: -2016330708,
	downloadInsufficientSpace: -2016330709,
	downloadRequiresComputer: -2016330710,
	downloadFailed: -2016330711,
	downloading: -2016330712,
	success: 0,
	available: 1,
	idle: 2,
	unknown: 3,
}

/** miracastChannel types */
export const miracastChannel: GraphTypes.miracastChannel = {
	userDefined: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	thirtySix: 36,
	forty: 40,
	fortyFour: 44,
	fortyEight: 48,
	oneHundredFortyNine: 149,
	oneHundredFiftyThree: 153,
	oneHundredFiftySeven: 157,
	oneHundredSixtyOne: 161,
	oneHundredSixtyFive: 165,
}

/** policyPlatformType types */
export const policyPlatformType: GraphTypes.policyPlatformType = {
	android: 0,
	androidForWork: 1,
	iOS: 2,
	macOS: 3,
	windowsPhone81: 4,
	windows81AndLater: 5,
	windows10AndLater: 6,
	all: 100,
}

/** prereleaseFeatures types */
export const prereleaseFeatures: GraphTypes.prereleaseFeatures = {
	userDefined: 0,
	settingsOnly: 1,
	settingsAndExperimentations: 2,
	notAllowed: 3,
}

/** ratingAppsType types */
export const ratingAppsType: GraphTypes.ratingAppsType = {
	allAllowed: 0,
	allBlocked: 1,
	agesAbove4: 2,
	agesAbove9: 3,
	agesAbove12: 4,
	agesAbove17: 5,
}

/** ratingAustraliaMoviesType types */
export const ratingAustraliaMoviesType: GraphTypes.ratingAustraliaMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	mature: 4,
	agesAbove15: 5,
	agesAbove18: 6,
}

/** ratingAustraliaTelevisionType types */
export const ratingAustraliaTelevisionType: GraphTypes.ratingAustraliaTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	preschoolers: 2,
	children: 3,
	general: 4,
	parentalGuidance: 5,
	mature: 6,
	agesAbove15: 7,
	agesAbove15AdultViolence: 8,
}

/** ratingCanadaMoviesType types */
export const ratingCanadaMoviesType: GraphTypes.ratingCanadaMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	agesAbove14: 4,
	agesAbove18: 5,
	restricted: 6,
}

/** ratingCanadaTelevisionType types */
export const ratingCanadaTelevisionType: GraphTypes.ratingCanadaTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	children: 2,
	childrenAbove8: 3,
	general: 4,
	parentalGuidance: 5,
	agesAbove14: 6,
	agesAbove18: 7,
}

/** ratingFranceMoviesType types */
export const ratingFranceMoviesType: GraphTypes.ratingFranceMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	agesAbove10: 2,
	agesAbove12: 3,
	agesAbove16: 4,
	agesAbove18: 5,
}

/** ratingFranceTelevisionType types */
export const ratingFranceTelevisionType: GraphTypes.ratingFranceTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	agesAbove10: 2,
	agesAbove12: 3,
	agesAbove16: 4,
	agesAbove18: 5,
}

/** ratingGermanyMoviesType types */
export const ratingGermanyMoviesType: GraphTypes.ratingGermanyMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	agesAbove6: 3,
	agesAbove12: 4,
	agesAbove16: 5,
	adults: 6,
}

/** ratingGermanyTelevisionType types */
export const ratingGermanyTelevisionType: GraphTypes.ratingGermanyTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	agesAbove6: 3,
	agesAbove12: 4,
	agesAbove16: 5,
	adults: 6,
}

/** ratingIrelandMoviesType types */
export const ratingIrelandMoviesType: GraphTypes.ratingIrelandMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	agesAbove12: 4,
	agesAbove15: 5,
	agesAbove16: 6,
	adults: 7,
}

/** ratingIrelandTelevisionType types */
export const ratingIrelandTelevisionType: GraphTypes.ratingIrelandTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	children: 3,
	youngAdults: 4,
	parentalSupervision: 5,
	mature: 6,
}

/** ratingJapanMoviesType types */
export const ratingJapanMoviesType: GraphTypes.ratingJapanMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	agesAbove15: 4,
	agesAbove18: 5,
}

/** ratingJapanTelevisionType types */
export const ratingJapanTelevisionType: GraphTypes.ratingJapanTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	explicitAllowed: 2,
}

/** ratingNewZealandMoviesType types */
export const ratingNewZealandMoviesType: GraphTypes.ratingNewZealandMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	mature: 4,
	agesAbove13: 5,
	agesAbove15: 6,
	agesAbove16: 7,
	agesAbove18: 8,
	restricted: 9,
	agesAbove16Restricted: 10,
}

/** ratingNewZealandTelevisionType types */
export const ratingNewZealandTelevisionType: GraphTypes.ratingNewZealandTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	adults: 4,
}

/** ratingUnitedKingdomMoviesType types */
export const ratingUnitedKingdomMoviesType: GraphTypes.ratingUnitedKingdomMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	universalChildren: 3,
	parentalGuidance: 4,
	agesAbove12Video: 5,
	agesAbove12Cinema: 6,
	agesAbove15: 7,
	adults: 8,
}

/** ratingUnitedKingdomTelevisionType types */
export const ratingUnitedKingdomTelevisionType: GraphTypes.ratingUnitedKingdomTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	caution: 2,
}

/** ratingUnitedStatesMoviesType types */
export const ratingUnitedStatesMoviesType: GraphTypes.ratingUnitedStatesMoviesType = {
	allAllowed: 0,
	allBlocked: 1,
	general: 2,
	parentalGuidance: 3,
	parentalGuidance13: 4,
	restricted: 5,
	adults: 6,
}

/** ratingUnitedStatesTelevisionType types */
export const ratingUnitedStatesTelevisionType: GraphTypes.ratingUnitedStatesTelevisionType = {
	allAllowed: 0,
	allBlocked: 1,
	childrenAll: 2,
	childrenAbove7: 3,
	general: 4,
	parentalGuidance: 5,
	childrenAbove14: 6,
	adults: 7,
}

/** requiredPasswordType types */
export const requiredPasswordType: GraphTypes.requiredPasswordType = {
	deviceDefault: 0,
	alphanumeric: 1,
	numeric: 2,
}

/** safeSearchFilterType types */
export const safeSearchFilterType: GraphTypes.safeSearchFilterType = {
	userDefined: 0,
	strict: 1,
	moderate: 2,
}

/** settingSourceType types */
export const settingSourceType: GraphTypes.settingSourceType = {
	deviceConfiguration: 0,
	deviceIntent: 1,
}

/** sharedPCAccountDeletionPolicyType types */
export const sharedPCAccountDeletionPolicyType: GraphTypes.sharedPCAccountDeletionPolicyType = {
	immediate: 0,
	diskSpaceThreshold: 1,
	diskSpaceThresholdOrInactiveThreshold: 2,
}

/** sharedPCAllowedAccountType types */
export const sharedPCAllowedAccountType: GraphTypes.sharedPCAllowedAccountType = {
	guest: 1,
	domain: 2,
}

/** siteSecurityLevel types */
export const siteSecurityLevel: GraphTypes.siteSecurityLevel = {
	userDefined: 0,
	low: 1,
	mediumLow: 2,
	medium: 3,
	mediumHigh: 4,
	high: 5,
}

/** stateManagementSetting types */
export const stateManagementSetting: GraphTypes.stateManagementSetting = {
	notConfigured: 0,
	blocked: 1,
	allowed: 2,
}

/** visibilitySetting types */
export const visibilitySetting: GraphTypes.visibilitySetting = {
	notConfigured: 0,
	hide: 1,
	show: 2,
}

/** webBrowserCookieSettings types */
export const webBrowserCookieSettings: GraphTypes.webBrowserCookieSettings = {
	browserDefault: 0,
	blockAlways: 1,
	allowCurrentWebSite: 2,
	allowFromWebsitesVisited: 3,
	allowAlways: 4,
}

/** weeklySchedule types */
export const weeklySchedule: GraphTypes.weeklySchedule = {
	userDefined: 0,
	everyday: 1,
	sunday: 2,
	monday: 3,
	tuesday: 4,
	wednesday: 5,
	thursday: 6,
	friday: 7,
	saturday: 8,
}

/** welcomeScreenMeetingInformation types */
export const welcomeScreenMeetingInformation: GraphTypes.welcomeScreenMeetingInformation = {
	userDefined: 0,
	showOrganizerAndTimeOnly: 1,
	showOrganizerAndTimeAndSubject: 2,
}

/** windows10EditionType types */
export const windows10EditionType: GraphTypes.windows10EditionType = {
	windows10Enterprise: 0,
	windows10EnterpriseN: 1,
	windows10Education: 2,
	windows10EducationN: 3,
	windows10MobileEnterprise: 4,
	windows10HolographicEnterprise: 5,
	windows10Professional: 6,
	windows10ProfessionalN: 7,
	windows10ProfessionalEducation: 8,
	windows10ProfessionalEducationN: 9,
	windows10ProfessionalWorkstation: 10,
	windows10ProfessionalWorkstationN: 11,
}

/** windowsDeliveryOptimizationMode types */
export const windowsDeliveryOptimizationMode: GraphTypes.windowsDeliveryOptimizationMode = {
	userDefined: 0,
	httpOnly: 1,
	httpWithPeeringNat: 2,
	httpWithPeeringPrivateGroup: 3,
	httpWithInternetPeering: 4,
	simpleDownload: 99,
	bypassMode: 100,
}

/** windowsSpotlightEnablementSettings types */
export const windowsSpotlightEnablementSettings: GraphTypes.windowsSpotlightEnablementSettings = {
	notConfigured: 0,
	disabled: 1,
	enabled: 2,
}

/** windowsStartMenuAppListVisibilityType types */
export const windowsStartMenuAppListVisibilityType: GraphTypes.windowsStartMenuAppListVisibilityType = {
	userDefined: 0,
	collapse: 1,
	remove: 2,
	disableSettingsApp: 4,
}

/** windowsStartMenuModeType types */
export const windowsStartMenuModeType: GraphTypes.windowsStartMenuModeType = {
	userDefined: 0,
	fullScreen: 1,
	nonFullScreen: 2,
}

/** windowsUpdateForBusinessUpdateWeeks types */
export const windowsUpdateForBusinessUpdateWeeks: GraphTypes.windowsUpdateForBusinessUpdateWeeks = {
	userDefined: 0,
	firstWeek: 1,
	secondWeek: 2,
	thirdWeek: 4,
	fourthWeek: 8,
	everyWeek: 15,
	unknownFutureValue: 22,
}

/** windowsUpdateNotificationDisplayOption types */
export const windowsUpdateNotificationDisplayOption: GraphTypes.windowsUpdateNotificationDisplayOption = {
	notConfigured: 0,
	defaultNotifications: 1,
	restartWarningsOnly: 2,
	disableAllNotifications: 3,
	unknownFutureValue: 4,
}

/** windowsUpdateType types */
export const windowsUpdateType: GraphTypes.windowsUpdateType = {
	userDefined: 0,
	all: 1,
	businessReadyOnly: 2,
	windowsInsiderBuildFast: 3,
	windowsInsiderBuildSlow: 4,
	windowsInsiderBuildRelease: 5,
}

/** windowsUserAccountControlSettings types */
export const windowsUserAccountControlSettings: GraphTypes.windowsUserAccountControlSettings = {
	userDefined: 0,
	alwaysNotify: 1,
	notifyOnAppChanges: 2,
	notifyOnAppChangesWithoutDimming: 3,
	neverNotify: 4,
}

/** deviceManagementExchangeConnectorStatus types */
export const deviceManagementExchangeConnectorStatus: GraphTypes.deviceManagementExchangeConnectorStatus = {
	none: 0,
	connectionPending: 1,
	connected: 2,
	disconnected: 3,
	unknownFutureValue: 4,
}

/** deviceManagementExchangeConnectorSyncType types */
export const deviceManagementExchangeConnectorSyncType: GraphTypes.deviceManagementExchangeConnectorSyncType = {
	fullSync: 0,
	deltaSync: 1,
}

/** deviceManagementExchangeConnectorType types */
export const deviceManagementExchangeConnectorType: GraphTypes.deviceManagementExchangeConnectorType = {
	onPremises: 0,
	hosted: 1,
	serviceToService: 2,
	dedicated: 3,
	unknownFutureValue: 4,
}

/** deviceManagementPartnerAppType types */
export const deviceManagementPartnerAppType: GraphTypes.deviceManagementPartnerAppType = {
	unknown: 0,
	singleTenantApp: 1,
	multiTenantApp: 2,
}

/** deviceManagementPartnerTenantState types */
export const deviceManagementPartnerTenantState: GraphTypes.deviceManagementPartnerTenantState = {
	unknown: 0,
	unavailable: 1,
	enabled: 2,
	terminated: 3,
	rejected: 4,
	unresponsive: 5,
}

/** mdmAuthority types */
export const mdmAuthority: GraphTypes.mdmAuthority = {
	unknown: 0,
	intune: 1,
	sccm: 2,
	office365: 3,
}

/** mobileThreatPartnerTenantState types */
export const mobileThreatPartnerTenantState: GraphTypes.mobileThreatPartnerTenantState = {
	unavailable: 0,
	available: 1,
	enabled: 2,
	unresponsive: 3,
	unknownFutureValue: 6,
}

/** vppTokenState types */
export const vppTokenState: GraphTypes.vppTokenState = {
	unknown: 0,
	valid: 1,
	expired: 2,
	invalid: 3,
	assignedToExternalMDM: 4,
}

/** vppTokenSyncStatus types */
export const vppTokenSyncStatus: GraphTypes.vppTokenSyncStatus = {
	none: 0,
	inProgress: 1,
	completed: 2,
	failed: 3,
}

/** windowsHelloForBusinessPinUsage types */
export const windowsHelloForBusinessPinUsage: GraphTypes.windowsHelloForBusinessPinUsage = {
	allowed: 0,
	required: 1,
	disallowed: 2,
}

/** actionState types */
export const actionState: GraphTypes.actionState = {
	none: 0,
	pending: 1,
	canceled: 2,
	active: 3,
	done: 4,
	failed: 5,
	notSupported: 6,
}

/** appLogDecryptionAlgorithm types */
export const appLogDecryptionAlgorithm: GraphTypes.appLogDecryptionAlgorithm = {
	aes256: 0,
	unknownFutureValue: 1,
}

/** appLogUploadState types */
export const appLogUploadState: GraphTypes.appLogUploadState = {
	pending: 0,
	completed: 1,
	failed: 2,
	unknownFutureValue: 3,
}

/** complianceState types */
export const complianceState: GraphTypes.complianceState = {
	unknown: 0,
	compliant: 1,
	noncompliant: 2,
	conflict: 3,
	error: 4,
	inGracePeriod: 254,
	configManager: 255,
}

/** detectedAppPlatformType types */
export const detectedAppPlatformType: GraphTypes.detectedAppPlatformType = {
	unknown: 0,
	windows: 1,
	windowsMobile: 2,
	windowsHolographic: 3,
	ios: 4,
	macOS: 5,
	chromeOS: 6,
	androidOSP: 7,
	androidDeviceAdministrator: 8,
	androidWorkProfile: 9,
	androidDedicatedAndFullyManaged: 10,
	unknownFutureValue: 11,
}

/** deviceEnrollmentType types */
export const deviceEnrollmentType: GraphTypes.deviceEnrollmentType = {
	unknown: 0,
	userEnrollment: 1,
	deviceEnrollmentManager: 2,
	appleBulkWithUser: 3,
	appleBulkWithoutUser: 4,
	windowsAzureADJoin: 5,
	windowsBulkUserless: 6,
	windowsAutoEnrollment: 7,
	windowsBulkAzureDomainJoin: 8,
	windowsCoManagement: 9,
	windowsAzureADJoinUsingDeviceAuth: 10,
	appleUserEnrollment: 11,
	appleUserEnrollmentWithServiceAccount: 12,
}

/** deviceLogCollectionTemplateType types */
export const deviceLogCollectionTemplateType: GraphTypes.deviceLogCollectionTemplateType = {
	predefined: 0,
	unknownFutureValue: 1,
}

/** deviceManagementExchangeAccessState types */
export const deviceManagementExchangeAccessState: GraphTypes.deviceManagementExchangeAccessState = {
	none: 0,
	unknown: 1,
	allowed: 2,
	blocked: 3,
	quarantined: 4,
}

/** deviceManagementExchangeAccessStateReason types */
export const deviceManagementExchangeAccessStateReason: GraphTypes.deviceManagementExchangeAccessStateReason = {
	none: 0,
	unknown: 1,
	exchangeGlobalRule: 2,
	exchangeIndividualRule: 3,
	exchangeDeviceRule: 4,
	exchangeUpgrade: 5,
	exchangeMailboxPolicy: 6,
	other: 7,
	compliant: 8,
	notCompliant: 9,
	notEnrolled: 10,
	unknownLocation: 12,
	mfaRequired: 13,
	azureADBlockDueToAccessPolicy: 14,
	compromisedPassword: 15,
	deviceNotKnownWithManagedApp: 16,
}

/** deviceManagementSubscriptionState types */
export const deviceManagementSubscriptionState: GraphTypes.deviceManagementSubscriptionState = {
	pending: 0,
	active: 1,
	warning: 2,
	disabled: 3,
	deleted: 4,
	blocked: 5,
	lockedOut: 8,
}

/** deviceRegistrationState types */
export const deviceRegistrationState: GraphTypes.deviceRegistrationState = {
	notRegistered: 0,
	registered: 2,
	revoked: 3,
	keyConflict: 4,
	approvalPending: 5,
	certificateReset: 6,
	notRegisteredPendingEnrollment: 7,
	unknown: 8,
}

/** diskType types */
export const diskType: GraphTypes.diskType = {
	unknown: 0,
	hdd: 1,
	ssd: 2,
	unknownFutureValue: 3,
}

/** managedDeviceOwnerType types */
export const managedDeviceOwnerType: GraphTypes.managedDeviceOwnerType = {
	unknown: 0,
	company: 1,
	personal: 2,
}

/** managedDevicePartnerReportedHealthState types */
export const managedDevicePartnerReportedHealthState: GraphTypes.managedDevicePartnerReportedHealthState = {
	unknown: 0,
	activated: 1,
	deactivated: 2,
	secured: 3,
	lowSeverity: 4,
	mediumSeverity: 5,
	highSeverity: 6,
	unresponsive: 7,
	compromised: 8,
	misconfigured: 9,
}

/** managementAgentType types */
export const managementAgentType: GraphTypes.managementAgentType = {
	eas: 1,
	mdm: 2,
	easMdm: 3,
	intuneClient: 4,
	easIntuneClient: 5,
	configurationManagerClient: 8,
	configurationManagerClientMdm: 10,
	configurationManagerClientMdmEas: 11,
	unknown: 16,
	jamf: 32,
	googleCloudDevicePolicyController: 64,
	microsoft365ManagedMdm: 258,
	msSense: 1024,
}

/** obliterationBehavior types */
export const obliterationBehavior: GraphTypes.obliterationBehavior = {
	default: 0,
	doNotObliterate: 1,
	obliterateWithWarning: 2,
	always: 3,
	unknownFutureValue: 999,
}

/** operatingSystemUpgradeEligibility types */
export const operatingSystemUpgradeEligibility: GraphTypes.operatingSystemUpgradeEligibility = {
	upgraded: 0,
	unknown: 1,
	notCapable: 2,
	capable: 3,
	unknownFutureValue: 4,
}

/** userExperienceAnalyticsHealthState types */
export const userExperienceAnalyticsHealthState: GraphTypes.userExperienceAnalyticsHealthState = {
	unknown: 0,
	insufficientData: 1,
	needsAttention: 2,
	meetingGoals: 3,
	unknownFutureValue: 4,
}

/** userExperienceAnalyticsInsightSeverity types */
export const userExperienceAnalyticsInsightSeverity: GraphTypes.userExperienceAnalyticsInsightSeverity = {
	none: 0,
	informational: 1,
	warning: 2,
	error: 3,
	unknownFutureValue: 4,
}

/** userExperienceAnalyticsOperatingSystemRestartCategory types */
export const userExperienceAnalyticsOperatingSystemRestartCategory: GraphTypes.userExperienceAnalyticsOperatingSystemRestartCategory = {
	unknown: 0,
	restartWithUpdate: 1,
	restartWithoutUpdate: 2,
	blueScreen: 3,
	shutdownWithUpdate: 4,
	shutdownWithoutUpdate: 5,
	longPowerButtonPress: 6,
	bootError: 7,
	update: 8,
	unknownFutureValue: 9,
}

/** userExperienceAnalyticsSummarizedBy types */
export const userExperienceAnalyticsSummarizedBy: GraphTypes.userExperienceAnalyticsSummarizedBy = {
	none: 0,
	model: 1,
	allRegressions: 3,
	modelRegression: 4,
	manufacturerRegression: 5,
	operatingSystemVersionRegression: 6,
	unknownFutureValue: 7,
}

/** windowsDefenderProductStatus types */
export const windowsDefenderProductStatus: GraphTypes.windowsDefenderProductStatus = {
	noStatus: 0,
	serviceNotRunning: 1,
	serviceStartedWithoutMalwareProtection: 2,
	pendingFullScanDueToThreatAction: 4,
	pendingRebootDueToThreatAction: 8,
	pendingManualStepsDueToThreatAction: 16,
	avSignaturesOutOfDate: 32,
	asSignaturesOutOfDate: 64,
	noQuickScanHappenedForSpecifiedPeriod: 128,
	noFullScanHappenedForSpecifiedPeriod: 256,
	systemInitiatedScanInProgress: 512,
	systemInitiatedCleanInProgress: 1024,
	samplesPendingSubmission: 2048,
	productRunningInEvaluationMode: 4096,
	productRunningInNonGenuineMode: 8192,
	productExpired: 16384,
	offlineScanRequired: 32768,
	serviceShutdownAsPartOfSystemShutdown: 65536,
	threatRemediationFailedCritically: 131072,
	threatRemediationFailedNonCritically: 262144,
	noStatusFlagsSet: 524288,
	platformOutOfDate: 1048576,
	platformUpdateInProgress: 2097152,
	platformAboutToBeOutdated: 4194304,
	signatureOrPlatformEndOfLifeIsPastOrIsImpending: 8388608,
	windowsSModeSignaturesInUseOnNonWin10SInstall: 16777216,
}

/** windowsDeviceHealthState types */
export const windowsDeviceHealthState: GraphTypes.windowsDeviceHealthState = {
	clean: 0,
	fullScanPending: 1,
	rebootPending: 2,
	manualStepsPending: 4,
	offlineScanPending: 8,
	critical: 16,
}

/** windowsMalwareCategory types */
export const windowsMalwareCategory: GraphTypes.windowsMalwareCategory = {
	invalid: 0,
	adware: 1,
	spyware: 2,
	passwordStealer: 3,
	trojanDownloader: 4,
	worm: 5,
	backdoor: 6,
	remoteAccessTrojan: 7,
	trojan: 8,
	emailFlooder: 9,
	keylogger: 10,
	dialer: 11,
	monitoringSoftware: 12,
	browserModifier: 13,
	cookie: 14,
	browserPlugin: 15,
	aolExploit: 16,
	nuker: 17,
	securityDisabler: 18,
	jokeProgram: 19,
	hostileActiveXControl: 20,
	softwareBundler: 21,
	stealthNotifier: 22,
	settingsModifier: 23,
	toolBar: 24,
	remoteControlSoftware: 25,
	trojanFtp: 26,
	potentialUnwantedSoftware: 27,
	icqExploit: 28,
	trojanTelnet: 29,
	exploit: 30,
	filesharingProgram: 31,
	malwareCreationTool: 32,
	remote_Control_Software: 33,
	tool: 34,
	trojanDenialOfService: 36,
	trojanDropper: 37,
	trojanMassMailer: 38,
	trojanMonitoringSoftware: 39,
	trojanProxyServer: 40,
	virus: 42,
	known: 43,
	unknown: 44,
	spp: 45,
	behavior: 46,
	vulnerability: 47,
	policy: 48,
	enterpriseUnwantedSoftware: 49,
	ransom: 50,
	hipsRule: 51,
}

/** windowsMalwareExecutionState types */
export const windowsMalwareExecutionState: GraphTypes.windowsMalwareExecutionState = {
	unknown: 0,
	blocked: 1,
	allowed: 2,
	running: 3,
	notRunning: 4,
}

/** windowsMalwareSeverity types */
export const windowsMalwareSeverity: GraphTypes.windowsMalwareSeverity = {
	unknown: 0,
	low: 1,
	moderate: 2,
	high: 4,
	severe: 5,
}

/** windowsMalwareState types */
export const windowsMalwareState: GraphTypes.windowsMalwareState = {
	unknown: 0,
	detected: 1,
	cleaned: 2,
	quarantined: 3,
	removed: 4,
	allowed: 5,
	blocked: 6,
	cleanFailed: 102,
	quarantineFailed: 103,
	removeFailed: 104,
	allowFailed: 105,
	abandoned: 106,
	blockFailed: 107,
}

/** windowsMalwareThreatState types */
export const windowsMalwareThreatState: GraphTypes.windowsMalwareThreatState = {
	active: 0,
	actionFailed: 1,
	manualStepsRequired: 2,
	fullScanRequired: 3,
	rebootRequired: 4,
	remediatedWithNonCriticalFailures: 5,
	quarantined: 6,
	removed: 7,
	cleaned: 8,
	allowed: 9,
	noStatusCleared: 10,
}

/** enrollmentState types */
export const enrollmentState: GraphTypes.enrollmentState = {
	unknown: 0,
	enrolled: 1,
	pendingReset: 2,
	failed: 3,
	notContacted: 4,
}

/** importedWindowsAutopilotDeviceIdentityImportStatus types */
export const importedWindowsAutopilotDeviceIdentityImportStatus: GraphTypes.importedWindowsAutopilotDeviceIdentityImportStatus = {
	unknown: 0,
	pending: 1,
	partial: 2,
	complete: 3,
	error: 4,
}

/** importedWindowsAutopilotDeviceIdentityUploadStatus types */
export const importedWindowsAutopilotDeviceIdentityUploadStatus: GraphTypes.importedWindowsAutopilotDeviceIdentityUploadStatus = {
	noUpload: 0,
	pending: 1,
	complete: 2,
	error: 3,
}

/** windowsAutopilotDeviceType types */
export const windowsAutopilotDeviceType: GraphTypes.windowsAutopilotDeviceType = {
	windowsPc: 0,
	holoLens: 1,
	unknownFutureValue: 99,
}

/** windowsDeviceUsageType types */
export const windowsDeviceUsageType: GraphTypes.windowsDeviceUsageType = {
	singleUser: 0,
	shared: 1,
	unknownFutureValue: 2,
}

/** windowsUserType types */
export const windowsUserType: GraphTypes.windowsUserType = {
	administrator: 0,
	standard: 1,
	unknownFutureValue: 2,
}

/** managedAppClipboardSharingLevel types */
export const managedAppClipboardSharingLevel: GraphTypes.managedAppClipboardSharingLevel = {
	allApps: 0,
	managedAppsWithPasteIn: 1,
	managedApps: 2,
	blocked: 3,
}

/** managedAppDataEncryptionType types */
export const managedAppDataEncryptionType: GraphTypes.managedAppDataEncryptionType = {
	useDeviceSettings: 0,
	afterDeviceRestart: 1,
	whenDeviceLockedExceptOpenFiles: 2,
	whenDeviceLocked: 3,
}

/** managedAppDataStorageLocation types */
export const managedAppDataStorageLocation: GraphTypes.managedAppDataStorageLocation = {
	oneDriveForBusiness: 1,
	sharePoint: 2,
	box: 3,
	localStorage: 6,
}

/** managedAppDataTransferLevel types */
export const managedAppDataTransferLevel: GraphTypes.managedAppDataTransferLevel = {
	allApps: 0,
	managedApps: 1,
	none: 2,
}

/** managedAppFlaggedReason types */
export const managedAppFlaggedReason: GraphTypes.managedAppFlaggedReason = {
	none: 0,
	rootedDevice: 1,
}

/** managedAppPinCharacterSet types */
export const managedAppPinCharacterSet: GraphTypes.managedAppPinCharacterSet = {
	numeric: 0,
	alphanumericAndSymbol: 1,
}

/** managedBrowserType types */
export const managedBrowserType: GraphTypes.managedBrowserType = {
	notConfigured: 0,
	microsoftEdge: 1,
}

/** targetedManagedAppGroupType types */
export const targetedManagedAppGroupType: GraphTypes.targetedManagedAppGroupType = {
	selectedPublicApps: 0,
	allCoreMicrosoftApps: 1,
	allMicrosoftApps: 2,
	allApps: 4,
}

/** windowsInformationProtectionEnforcementLevel types */
export const windowsInformationProtectionEnforcementLevel: GraphTypes.windowsInformationProtectionEnforcementLevel = {
	noProtection: 0,
	encryptAndAuditOnly: 1,
	encryptAuditAndPrompt: 2,
	encryptAuditAndBlock: 3,
}

/** windowsInformationProtectionPinCharacterRequirements types */
export const windowsInformationProtectionPinCharacterRequirements: GraphTypes.windowsInformationProtectionPinCharacterRequirements = {
	notAllow: 0,
	requireAtLeastOne: 1,
	allow: 2,
}

/** notificationTemplateBrandingOptions types */
export const notificationTemplateBrandingOptions: GraphTypes.notificationTemplateBrandingOptions = {
	none: 0,
	includeCompanyLogo: 1,
	includeCompanyName: 2,
	includeContactInformation: 4,
	includeCompanyPortalLink: 8,
	includeDeviceDetails: 16,
	unknownFutureValue: 32,
}

/** remoteAssistanceOnboardingStatus types */
export const remoteAssistanceOnboardingStatus: GraphTypes.remoteAssistanceOnboardingStatus = {
	notOnboarded: 0,
	onboarding: 1,
	onboarded: 2,
}

/** deviceManagementExportJobLocalizationType types */
export const deviceManagementExportJobLocalizationType: GraphTypes.deviceManagementExportJobLocalizationType = {
	localizedValuesAsAdditionalColumn: 0,
	replaceLocalizableValues: 1,
}

/** deviceManagementReportFileFormat types */
export const deviceManagementReportFileFormat: GraphTypes.deviceManagementReportFileFormat = {
	csv: 0,
	pdf: 1,
	json: 2,
	unknownFutureValue: 3,
}

/** deviceManagementReportStatus types */
export const deviceManagementReportStatus: GraphTypes.deviceManagementReportStatus = {
	unknown: 0,
	notStarted: 1,
	inProgress: 2,
	completed: 3,
	failed: 4,
}

/** deviceEnrollmentFailureReason types */
export const deviceEnrollmentFailureReason: GraphTypes.deviceEnrollmentFailureReason = {
	unknown: 0,
	authentication: 1,
	authorization: 2,
	accountValidation: 3,
	userValidation: 4,
	deviceNotSupported: 5,
	inMaintenance: 6,
	badRequest: 7,
	featureNotSupported: 8,
	enrollmentRestrictionsEnforced: 9,
	clientDisconnected: 10,
	userAbandonment: 11,
}

/** applicationType types */
export const applicationType: GraphTypes.applicationType = {
	universal: 1,
	desktop: 2,
}

/** appsUpdateChannelType types */
export const appsUpdateChannelType: GraphTypes.appsUpdateChannelType = {
	current: 0,
	monthlyEnterprise: 1,
	semiAnnual: 2,
	unknownFutureValue: 3,
}

/** postType types */
export const postType: GraphTypes.postType = {
	regular: 0,
	quick: 1,
	strategic: 2,
	unknownFutureValue: 3,
}

/** serviceHealthClassificationType types */
export const serviceHealthClassificationType: GraphTypes.serviceHealthClassificationType = {
	advisory: 1,
	incident: 2,
	unknownFutureValue: 3,
}

/** serviceHealthOrigin types */
export const serviceHealthOrigin: GraphTypes.serviceHealthOrigin = {
	microsoft: 1,
	thirdParty: 2,
	customer: 3,
	unknownFutureValue: 4,
}

/** serviceHealthStatus types */
export const serviceHealthStatus: GraphTypes.serviceHealthStatus = {
	serviceOperational: 0,
	investigating: 1,
	restoringService: 2,
	verifyingService: 3,
	serviceRestored: 4,
	postIncidentReviewPublished: 5,
	serviceDegradation: 6,
	serviceInterruption: 7,
	extendedRecovery: 8,
	falsePositive: 9,
	investigationSuspended: 10,
	resolved: 11,
	mitigatedExternal: 12,
	mitigated: 13,
	resolvedExternal: 14,
	confirmed: 15,
	reported: 16,
	unknownFutureValue: 17,
}

/** serviceUpdateCategory types */
export const serviceUpdateCategory: GraphTypes.serviceUpdateCategory = {
	preventOrFixIssue: 1,
	planForChange: 2,
	stayInformed: 3,
	unknownFutureValue: 4,
}

/** serviceUpdateSeverity types */
export const serviceUpdateSeverity: GraphTypes.serviceUpdateSeverity = {
	normal: 1,
	high: 2,
	critical: 3,
	unknownFutureValue: 4,
}

/** bucketAggregationSortProperty types */
export const bucketAggregationSortProperty: GraphTypes.bucketAggregationSortProperty = {
	count: 0,
	keyAsString: 1,
	keyAsNumber: 2,
	unknownFutureValue: 3,
}

/** entityType types */
export const entityType: GraphTypes.entityType = {
	event: 0,
	message: 1,
	driveItem: 2,
	externalItem: 4,
	site: 5,
	list: 6,
	listItem: 7,
	drive: 8,
	unknownFutureValue: 9,
	acronym: 12,
	bookmark: 13,
	chatMessage: 10,
	person: 11,
}

/** searchAlterationType types */
export const searchAlterationType: GraphTypes.searchAlterationType = {
	suggestion: 0,
	modification: 1,
	unknownFutureValue: 2,
}

/** searchContent types */
export const searchContent: GraphTypes.searchContent = {
	sharedContent: 1,
	privateContent: 2,
	unknownFutureValue: 4,
}

/** plannerContainerType types */
export const plannerContainerType: GraphTypes.plannerContainerType = {
	group: 1,
	unknownFutureValue: 2,
	roster: 3,
}

/** plannerPreviewType types */
export const plannerPreviewType: GraphTypes.plannerPreviewType = {
	automatic: 0,
	noPreview: 1,
	checklist: 2,
	description: 3,
	reference: 4,
}

/** onenotePatchActionType types */
export const onenotePatchActionType: GraphTypes.onenotePatchActionType = {
	Replace: 0,
	Append: 1,
	Delete: 2,
	Insert: 3,
	Prepend: 4,
}

/** onenotePatchInsertPosition types */
export const onenotePatchInsertPosition: GraphTypes.onenotePatchInsertPosition = {
	After: 0,
	Before: 1,
}

/** onenoteSourceService types */
export const onenoteSourceService: GraphTypes.onenoteSourceService = {
	Unknown: 0,
	OneDrive: 1,
	OneDriveForBusiness: 2,
	OnPremOneDriveForBusiness: 3,
}

/** onenoteUserRole types */
export const onenoteUserRole: GraphTypes.onenoteUserRole = {
	None: -1,
	Owner: 0,
	Contributor: 1,
	Reader: 2,
}

/** operationStatus types */
export const operationStatus: GraphTypes.operationStatus = {
	NotStarted: 0,
	Running: 1,
	Completed: 2,
	Failed: 3,
}

/** delegatedAdminAccessAssignmentStatus types */
export const delegatedAdminAccessAssignmentStatus: GraphTypes.delegatedAdminAccessAssignmentStatus = {
	pending: 0,
	active: 1,
	deleting: 2,
	deleted: 3,
	error: 4,
	unknownFutureValue: 5,
}

/** delegatedAdminAccessContainerType types */
export const delegatedAdminAccessContainerType: GraphTypes.delegatedAdminAccessContainerType = {
	securityGroup: 0,
	unknownFutureValue: 1,
}

/** delegatedAdminRelationshipOperationType types */
export const delegatedAdminRelationshipOperationType: GraphTypes.delegatedAdminRelationshipOperationType = {
	delegatedAdminAccessAssignmentUpdate: 0,
	unknownFutureValue: 1,
	delegatedAdminRelationshipUpdate: 2,
}

/** delegatedAdminRelationshipRequestAction types */
export const delegatedAdminRelationshipRequestAction: GraphTypes.delegatedAdminRelationshipRequestAction = {
	lockForApproval: 0,
	approve: 1,
	terminate: 2,
	unknownFutureValue: 3,
	reject: 4,
}

/** delegatedAdminRelationshipRequestStatus types */
export const delegatedAdminRelationshipRequestStatus: GraphTypes.delegatedAdminRelationshipRequestStatus = {
	created: 0,
	pending: 1,
	succeeded: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** delegatedAdminRelationshipStatus types */
export const delegatedAdminRelationshipStatus: GraphTypes.delegatedAdminRelationshipStatus = {
	activating: 0,
	active: 1,
	approvalPending: 2,
	approved: 3,
	created: 4,
	expired: 5,
	expiring: 6,
	terminated: 7,
	terminating: 8,
	terminationRequested: 9,
	unknownFutureValue: 10,
}

/** windowsSettingType types */
export const windowsSettingType: GraphTypes.windowsSettingType = {
	roaming: 0,
	backup: 1,
	unknownFutureValue: 2,
}

/** assignmentScheduleFilterByCurrentUserOptions types */
export const assignmentScheduleFilterByCurrentUserOptions: GraphTypes.assignmentScheduleFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** assignmentScheduleInstanceFilterByCurrentUserOptions types */
export const assignmentScheduleInstanceFilterByCurrentUserOptions: GraphTypes.assignmentScheduleInstanceFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** assignmentScheduleRequestFilterByCurrentUserOptions types */
export const assignmentScheduleRequestFilterByCurrentUserOptions: GraphTypes.assignmentScheduleRequestFilterByCurrentUserOptions = {
	principal: 1,
	createdBy: 2,
	approver: 3,
	unknownFutureValue: 4,
}

/** eligibilityScheduleFilterByCurrentUserOptions types */
export const eligibilityScheduleFilterByCurrentUserOptions: GraphTypes.eligibilityScheduleFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** eligibilityScheduleInstanceFilterByCurrentUserOptions types */
export const eligibilityScheduleInstanceFilterByCurrentUserOptions: GraphTypes.eligibilityScheduleInstanceFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** eligibilityScheduleRequestFilterByCurrentUserOptions types */
export const eligibilityScheduleRequestFilterByCurrentUserOptions: GraphTypes.eligibilityScheduleRequestFilterByCurrentUserOptions = {
	principal: 1,
	createdBy: 2,
	approver: 3,
	unknownFutureValue: 4,
}

/** privilegedAccessGroupAssignmentType types */
export const privilegedAccessGroupAssignmentType: GraphTypes.privilegedAccessGroupAssignmentType = {
	assigned: 1,
	activated: 2,
	unknownFutureValue: 3,
}

/** privilegedAccessGroupMemberType types */
export const privilegedAccessGroupMemberType: GraphTypes.privilegedAccessGroupMemberType = {
	direct: 1,
	group: 2,
	unknownFutureValue: 3,
}

/** privilegedAccessGroupRelationships types */
export const privilegedAccessGroupRelationships: GraphTypes.privilegedAccessGroupRelationships = {
	owner: 1,
	member: 2,
	unknownFutureValue: 3,
}

/** roleAssignmentScheduleFilterByCurrentUserOptions types */
export const roleAssignmentScheduleFilterByCurrentUserOptions: GraphTypes.roleAssignmentScheduleFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** roleAssignmentScheduleInstanceFilterByCurrentUserOptions types */
export const roleAssignmentScheduleInstanceFilterByCurrentUserOptions: GraphTypes.roleAssignmentScheduleInstanceFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** roleAssignmentScheduleRequestFilterByCurrentUserOptions types */
export const roleAssignmentScheduleRequestFilterByCurrentUserOptions: GraphTypes.roleAssignmentScheduleRequestFilterByCurrentUserOptions = {
	principal: 1,
	createdBy: 2,
	approver: 3,
	unknownFutureValue: 4,
}

/** roleEligibilityScheduleFilterByCurrentUserOptions types */
export const roleEligibilityScheduleFilterByCurrentUserOptions: GraphTypes.roleEligibilityScheduleFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** roleEligibilityScheduleInstanceFilterByCurrentUserOptions types */
export const roleEligibilityScheduleInstanceFilterByCurrentUserOptions: GraphTypes.roleEligibilityScheduleInstanceFilterByCurrentUserOptions = {
	principal: 1,
	unknownFutureValue: 2,
}

/** roleEligibilityScheduleRequestFilterByCurrentUserOptions types */
export const roleEligibilityScheduleRequestFilterByCurrentUserOptions: GraphTypes.roleEligibilityScheduleRequestFilterByCurrentUserOptions = {
	principal: 1,
	createdBy: 2,
	approver: 3,
	unknownFutureValue: 4,
}

/** scheduleRequestActions types */
export const scheduleRequestActions: GraphTypes.scheduleRequestActions = {
	adminAssign: 1,
	adminUpdate: 2,
	adminRemove: 3,
	selfActivate: 4,
	selfDeactivate: 5,
	adminExtend: 6,
	adminRenew: 7,
	selfExtend: 8,
	selfRenew: 9,
	unknownFutureValue: 10,
}

/** unifiedRoleManagementPolicyRuleTargetOperations types */
export const unifiedRoleManagementPolicyRuleTargetOperations: GraphTypes.unifiedRoleManagementPolicyRuleTargetOperations = {
	all: 0,
	activate: 1,
	deactivate: 2,
	assign: 3,
	update: 4,
	remove: 5,
	extend: 6,
	renew: 7,
	unknownFutureValue: 8,
}

/** unifiedRoleScheduleRequestActions types */
export const unifiedRoleScheduleRequestActions: GraphTypes.unifiedRoleScheduleRequestActions = {
	adminAssign: 1,
	adminUpdate: 2,
	adminRemove: 3,
	selfActivate: 4,
	selfDeactivate: 5,
	adminExtend: 6,
	adminRenew: 7,
	selfExtend: 8,
	selfRenew: 9,
	unknownFutureValue: 10,
}

/** printColorMode types */
export const printColorMode: GraphTypes.printColorMode = {
	blackAndWhite: 0,
	grayscale: 1,
	color: 2,
	auto: 3,
	unknownFutureValue: 4,
}

/** printDuplexMode types */
export const printDuplexMode: GraphTypes.printDuplexMode = {
	flipOnLongEdge: 0,
	flipOnShortEdge: 1,
	oneSided: 2,
	unknownFutureValue: 3,
}

/** printerFeedOrientation types */
export const printerFeedOrientation: GraphTypes.printerFeedOrientation = {
	longEdgeFirst: 0,
	shortEdgeFirst: 1,
	unknownFutureValue: 2,
}

/** printerProcessingState types */
export const printerProcessingState: GraphTypes.printerProcessingState = {
	unknown: 0,
	idle: 1,
	processing: 2,
	stopped: 3,
	unknownFutureValue: 4,
}

/** printerProcessingStateDetail types */
export const printerProcessingStateDetail: GraphTypes.printerProcessingStateDetail = {
	paused: 0,
	mediaJam: 2,
	mediaNeeded: 3,
	mediaLow: 4,
	mediaEmpty: 5,
	coverOpen: 6,
	interlockOpen: 7,
	outputTrayMissing: 9,
	outputAreaFull: 10,
	markerSupplyLow: 11,
	markerSupplyEmpty: 12,
	inputTrayMissing: 13,
	outputAreaAlmostFull: 14,
	markerWasteAlmostFull: 15,
	markerWasteFull: 16,
	fuserOverTemp: 17,
	fuserUnderTemp: 18,
	other: 19,
	none: 20,
	movingToPaused: 21,
	shutdown: 22,
	connectingToDevice: 23,
	timedOut: 24,
	stopping: 25,
	stoppedPartially: 26,
	tonerLow: 27,
	tonerEmpty: 28,
	spoolAreaFull: 29,
	doorOpen: 30,
	opticalPhotoConductorNearEndOfLife: 31,
	opticalPhotoConductorLifeOver: 32,
	developerLow: 33,
	developerEmpty: 34,
	interpreterResourceUnavailable: 35,
	unknownFutureValue: 36,
	alertRemovalOfBinaryChangeEntry: 37,
	banderAdded: 38,
	banderAlmostEmpty: 39,
	banderAlmostFull: 40,
	banderAtLimit: 41,
	banderClosed: 42,
	banderConfigurationChange: 43,
	banderCoverClosed: 44,
	banderCoverOpen: 45,
	banderEmpty: 46,
	banderFull: 47,
	banderInterlockClosed: 48,
	banderInterlockOpen: 49,
	banderJam: 50,
	banderLifeAlmostOver: 51,
	banderLifeOver: 52,
	banderMemoryExhausted: 53,
	banderMissing: 54,
	banderMotorFailure: 55,
	banderNearLimit: 56,
	banderOffline: 57,
	banderOpened: 58,
	banderOverTemperature: 59,
	banderPowerSaver: 60,
	banderRecoverableFailure: 61,
	banderRecoverableStorage: 62,
	banderRemoved: 63,
	banderResourceAdded: 64,
	banderResourceRemoved: 65,
	banderThermistorFailure: 66,
	banderTimingFailure: 67,
	banderTurnedOff: 68,
	banderTurnedOn: 69,
	banderUnderTemperature: 70,
	banderUnrecoverableFailure: 71,
	banderUnrecoverableStorageError: 72,
	banderWarmingUp: 73,
	binderAdded: 74,
	binderAlmostEmpty: 75,
	binderAlmostFull: 76,
	binderAtLimit: 77,
	binderClosed: 78,
	binderConfigurationChange: 79,
	binderCoverClosed: 80,
	binderCoverOpen: 81,
	binderEmpty: 82,
	binderFull: 83,
	binderInterlockClosed: 84,
	binderInterlockOpen: 85,
	binderJam: 86,
	binderLifeAlmostOver: 87,
	binderLifeOver: 88,
	binderMemoryExhausted: 89,
	binderMissing: 90,
	binderMotorFailure: 91,
	binderNearLimit: 92,
	binderOffline: 93,
	binderOpened: 94,
	binderOverTemperature: 95,
	binderPowerSaver: 96,
	binderRecoverableFailure: 97,
	binderRecoverableStorage: 98,
	binderRemoved: 99,
	binderResourceAdded: 100,
	binderResourceRemoved: 101,
	binderThermistorFailure: 102,
	binderTimingFailure: 103,
	binderTurnedOff: 104,
	binderTurnedOn: 105,
	binderUnderTemperature: 106,
	binderUnrecoverableFailure: 107,
	binderUnrecoverableStorageError: 108,
	binderWarmingUp: 109,
	cameraFailure: 110,
	chamberCooling: 111,
	chamberFailure: 112,
	chamberHeating: 113,
	chamberTemperatureHigh: 114,
	chamberTemperatureLow: 115,
	cleanerLifeAlmostOver: 116,
	cleanerLifeOver: 117,
	configurationChange: 118,
	deactivated: 119,
	deleted: 120,
	dieCutterAdded: 121,
	dieCutterAlmostEmpty: 122,
	dieCutterAlmostFull: 123,
	dieCutterAtLimit: 124,
	dieCutterClosed: 125,
	dieCutterConfigurationChange: 126,
	dieCutterCoverClosed: 127,
	dieCutterCoverOpen: 128,
	dieCutterEmpty: 129,
	dieCutterFull: 130,
	dieCutterInterlockClosed: 131,
	dieCutterInterlockOpen: 132,
	dieCutterJam: 133,
	dieCutterLifeAlmostOver: 134,
	dieCutterLifeOver: 135,
	dieCutterMemoryExhausted: 136,
	dieCutterMissing: 137,
	dieCutterMotorFailure: 138,
	dieCutterNearLimit: 139,
	dieCutterOffline: 140,
	dieCutterOpened: 141,
	dieCutterOverTemperature: 142,
	dieCutterPowerSaver: 143,
	dieCutterRecoverableFailure: 144,
	dieCutterRecoverableStorage: 145,
	dieCutterRemoved: 146,
	dieCutterResourceAdded: 147,
	dieCutterResourceRemoved: 148,
	dieCutterThermistorFailure: 149,
	dieCutterTimingFailure: 150,
	dieCutterTurnedOff: 151,
	dieCutterTurnedOn: 152,
	dieCutterUnderTemperature: 153,
	dieCutterUnrecoverableFailure: 154,
	dieCutterUnrecoverableStorageError: 155,
	dieCutterWarmingUp: 156,
	extruderCooling: 157,
	extruderFailure: 158,
	extruderHeating: 159,
	extruderJam: 160,
	extruderTemperatureHigh: 161,
	extruderTemperatureLow: 162,
	fanFailure: 163,
	faxModemLifeAlmostOver: 164,
	faxModemLifeOver: 165,
	faxModemMissing: 166,
	faxModemTurnedOff: 167,
	faxModemTurnedOn: 168,
	folderAdded: 169,
	folderAlmostEmpty: 170,
	folderAlmostFull: 171,
	folderAtLimit: 172,
	folderClosed: 173,
	folderConfigurationChange: 174,
	folderCoverClosed: 175,
	folderCoverOpen: 176,
	folderEmpty: 177,
	folderFull: 178,
	folderInterlockClosed: 179,
	folderInterlockOpen: 180,
	folderJam: 181,
	folderLifeAlmostOver: 182,
	folderLifeOver: 183,
	folderMemoryExhausted: 184,
	folderMissing: 185,
	folderMotorFailure: 186,
	folderNearLimit: 187,
	folderOffline: 188,
	folderOpened: 189,
	folderOverTemperature: 190,
	folderPowerSaver: 191,
	folderRecoverableFailure: 192,
	folderRecoverableStorage: 193,
	folderRemoved: 194,
	folderResourceAdded: 195,
	folderResourceRemoved: 196,
	folderThermistorFailure: 197,
	folderTimingFailure: 198,
	folderTurnedOff: 199,
	folderTurnedOn: 200,
	folderUnderTemperature: 201,
	folderUnrecoverableFailure: 202,
	folderUnrecoverableStorageError: 203,
	folderWarmingUp: 204,
	hibernate: 205,
	holdNewJobs: 206,
	identifyPrinterRequested: 207,
	imprinterAdded: 208,
	imprinterAlmostEmpty: 209,
	imprinterAlmostFull: 210,
	imprinterAtLimit: 211,
	imprinterClosed: 212,
	imprinterConfigurationChange: 213,
	imprinterCoverClosed: 214,
	imprinterCoverOpen: 215,
	imprinterEmpty: 216,
	imprinterFull: 217,
	imprinterInterlockClosed: 218,
	imprinterInterlockOpen: 219,
	imprinterJam: 220,
	imprinterLifeAlmostOver: 221,
	imprinterLifeOver: 222,
	imprinterMemoryExhausted: 223,
	imprinterMissing: 224,
	imprinterMotorFailure: 225,
	imprinterNearLimit: 226,
	imprinterOffline: 227,
	imprinterOpened: 228,
	imprinterOverTemperature: 229,
	imprinterPowerSaver: 230,
	imprinterRecoverableFailure: 231,
	imprinterRecoverableStorage: 232,
	imprinterRemoved: 233,
	imprinterResourceAdded: 234,
	imprinterResourceRemoved: 235,
	imprinterThermistorFailure: 236,
	imprinterTimingFailure: 237,
	imprinterTurnedOff: 238,
	imprinterTurnedOn: 239,
	imprinterUnderTemperature: 240,
	imprinterUnrecoverableFailure: 241,
	imprinterUnrecoverableStorageError: 242,
	imprinterWarmingUp: 243,
	inputCannotFeedSizeSelected: 244,
	inputManualInputRequest: 245,
	inputMediaColorChange: 246,
	inputMediaFormPartsChange: 247,
	inputMediaSizeChange: 248,
	inputMediaTrayFailure: 249,
	inputMediaTrayFeedError: 250,
	inputMediaTrayJam: 251,
	inputMediaTypeChange: 252,
	inputMediaWeightChange: 253,
	inputPickRollerFailure: 254,
	inputPickRollerLifeOver: 255,
	inputPickRollerLifeWarn: 256,
	inputPickRollerMissing: 257,
	inputTrayElevationFailure: 258,
	inputTrayPositionFailure: 259,
	inserterAdded: 260,
	inserterAlmostEmpty: 261,
	inserterAlmostFull: 262,
	inserterAtLimit: 263,
	inserterClosed: 264,
	inserterConfigurationChange: 265,
	inserterCoverClosed: 266,
	inserterCoverOpen: 267,
	inserterEmpty: 268,
	inserterFull: 269,
	inserterInterlockClosed: 270,
	inserterInterlockOpen: 271,
	inserterJam: 272,
	inserterLifeAlmostOver: 273,
	inserterLifeOver: 274,
	inserterMemoryExhausted: 275,
	inserterMissing: 276,
	inserterMotorFailure: 277,
	inserterNearLimit: 278,
	inserterOffline: 279,
	inserterOpened: 280,
	inserterOverTemperature: 281,
	inserterPowerSaver: 282,
	inserterRecoverableFailure: 283,
	inserterRecoverableStorage: 284,
	inserterRemoved: 285,
	inserterResourceAdded: 286,
	inserterResourceRemoved: 287,
	inserterThermistorFailure: 288,
	inserterTimingFailure: 289,
	inserterTurnedOff: 290,
	inserterTurnedOn: 291,
	inserterUnderTemperature: 292,
	inserterUnrecoverableFailure: 293,
	inserterUnrecoverableStorageError: 294,
	inserterWarmingUp: 295,
	interlockClosed: 296,
	interpreterCartridgeAdded: 297,
	interpreterCartridgeDeleted: 298,
	interpreterComplexPageEncountered: 299,
	interpreterMemoryDecrease: 300,
	interpreterMemoryIncrease: 301,
	interpreterResourceAdded: 302,
	interpreterResourceDeleted: 303,
	lampAtEol: 304,
	lampFailure: 305,
	lampNearEol: 306,
	laserAtEol: 307,
	laserFailure: 308,
	laserNearEol: 309,
	makeEnvelopeAdded: 310,
	makeEnvelopeAlmostEmpty: 311,
	makeEnvelopeAlmostFull: 312,
	makeEnvelopeAtLimit: 313,
	makeEnvelopeClosed: 314,
	makeEnvelopeConfigurationChange: 315,
	makeEnvelopeCoverClosed: 316,
	makeEnvelopeCoverOpen: 317,
	makeEnvelopeEmpty: 318,
	makeEnvelopeFull: 319,
	makeEnvelopeInterlockClosed: 320,
	makeEnvelopeInterlockOpen: 321,
	makeEnvelopeJam: 322,
	makeEnvelopeLifeAlmostOver: 323,
	makeEnvelopeLifeOver: 324,
	makeEnvelopeMemoryExhausted: 325,
	makeEnvelopeMissing: 326,
	makeEnvelopeMotorFailure: 327,
	makeEnvelopeNearLimit: 328,
	makeEnvelopeOffline: 329,
	makeEnvelopeOpened: 330,
	makeEnvelopeOverTemperature: 331,
	makeEnvelopePowerSaver: 332,
	makeEnvelopeRecoverableFailure: 333,
	makeEnvelopeRecoverableStorage: 334,
	makeEnvelopeRemoved: 335,
	makeEnvelopeResourceAdded: 336,
	makeEnvelopeResourceRemoved: 337,
	makeEnvelopeThermistorFailure: 338,
	makeEnvelopeTimingFailure: 339,
	makeEnvelopeTurnedOff: 340,
	makeEnvelopeTurnedOn: 341,
	makeEnvelopeUnderTemperature: 342,
	makeEnvelopeUnrecoverableFailure: 343,
	makeEnvelopeUnrecoverableStorageError: 344,
	makeEnvelopeWarmingUp: 345,
	markerAdjustingPrintQuality: 346,
	markerCleanerMissing: 347,
	markerDeveloperAlmostEmpty: 348,
	markerDeveloperEmpty: 349,
	markerDeveloperMissing: 350,
	markerFuserMissing: 351,
	markerFuserThermistorFailure: 352,
	markerFuserTimingFailure: 353,
	markerInkAlmostEmpty: 354,
	markerInkEmpty: 355,
	markerInkMissing: 356,
	markerOpcMissing: 357,
	markerPrintRibbonAlmostEmpty: 358,
	markerPrintRibbonEmpty: 359,
	markerPrintRibbonMissing: 360,
	markerSupplyAlmostEmpty: 361,
	markerSupplyMissing: 362,
	markerTonerCartridgeMissing: 363,
	markerTonerMissing: 364,
	markerWasteInkReceptacleAlmostFull: 365,
	markerWasteInkReceptacleFull: 366,
	markerWasteInkReceptacleMissing: 367,
	markerWasteMissing: 368,
	markerWasteTonerReceptacleAlmostFull: 369,
	markerWasteTonerReceptacleFull: 370,
	markerWasteTonerReceptacleMissing: 371,
	materialEmpty: 372,
	materialLow: 373,
	materialNeeded: 374,
	mediaDrying: 375,
	mediaPathCannotDuplexMediaSelected: 376,
	mediaPathFailure: 377,
	mediaPathInputEmpty: 378,
	mediaPathInputFeedError: 379,
	mediaPathInputJam: 380,
	mediaPathInputRequest: 381,
	mediaPathJam: 382,
	mediaPathMediaTrayAlmostFull: 383,
	mediaPathMediaTrayFull: 384,
	mediaPathMediaTrayMissing: 385,
	mediaPathOutputFeedError: 386,
	mediaPathOutputFull: 387,
	mediaPathOutputJam: 388,
	mediaPathPickRollerFailure: 389,
	mediaPathPickRollerLifeOver: 390,
	mediaPathPickRollerLifeWarn: 391,
	mediaPathPickRollerMissing: 392,
	motorFailure: 393,
	outputMailboxSelectFailure: 394,
	outputMediaTrayFailure: 395,
	outputMediaTrayFeedError: 396,
	outputMediaTrayJam: 397,
	perforaterAdded: 398,
	perforaterAlmostEmpty: 399,
	perforaterAlmostFull: 400,
	perforaterAtLimit: 401,
	perforaterClosed: 402,
	perforaterConfigurationChange: 403,
	perforaterCoverClosed: 404,
	perforaterCoverOpen: 405,
	perforaterEmpty: 406,
	perforaterFull: 407,
	perforaterInterlockClosed: 408,
	perforaterInterlockOpen: 409,
	perforaterJam: 410,
	perforaterLifeAlmostOver: 411,
	perforaterLifeOver: 412,
	perforaterMemoryExhausted: 413,
	perforaterMissing: 414,
	perforaterMotorFailure: 415,
	perforaterNearLimit: 416,
	perforaterOffline: 417,
	perforaterOpened: 418,
	perforaterOverTemperature: 419,
	perforaterPowerSaver: 420,
	perforaterRecoverableFailure: 421,
	perforaterRecoverableStorage: 422,
	perforaterRemoved: 423,
	perforaterResourceAdded: 424,
	perforaterResourceRemoved: 425,
	perforaterThermistorFailure: 426,
	perforaterTimingFailure: 427,
	perforaterTurnedOff: 428,
	perforaterTurnedOn: 429,
	perforaterUnderTemperature: 430,
	perforaterUnrecoverableFailure: 431,
	perforaterUnrecoverableStorageError: 432,
	perforaterWarmingUp: 433,
	platformCooling: 434,
	platformFailure: 435,
	platformHeating: 436,
	platformTemperatureHigh: 437,
	platformTemperatureLow: 438,
	powerDown: 439,
	powerUp: 440,
	printerManualReset: 441,
	printerNmsReset: 442,
	printerReadyToPrint: 443,
	puncherAdded: 444,
	puncherAlmostEmpty: 445,
	puncherAlmostFull: 446,
	puncherAtLimit: 447,
	puncherClosed: 448,
	puncherConfigurationChange: 449,
	puncherCoverClosed: 450,
	puncherCoverOpen: 451,
	puncherEmpty: 452,
	puncherFull: 453,
	puncherInterlockClosed: 454,
	puncherInterlockOpen: 455,
	puncherJam: 456,
	puncherLifeAlmostOver: 457,
	puncherLifeOver: 458,
	puncherMemoryExhausted: 459,
	puncherMissing: 460,
	puncherMotorFailure: 461,
	puncherNearLimit: 462,
	puncherOffline: 463,
	puncherOpened: 464,
	puncherOverTemperature: 465,
	puncherPowerSaver: 466,
	puncherRecoverableFailure: 467,
	puncherRecoverableStorage: 468,
	puncherRemoved: 469,
	puncherResourceAdded: 470,
	puncherResourceRemoved: 471,
	puncherThermistorFailure: 472,
	puncherTimingFailure: 473,
	puncherTurnedOff: 474,
	puncherTurnedOn: 475,
	puncherUnderTemperature: 476,
	puncherUnrecoverableFailure: 477,
	puncherUnrecoverableStorageError: 478,
	puncherWarmingUp: 479,
	resuming: 480,
	scanMediaPathFailure: 481,
	scanMediaPathInputEmpty: 482,
	scanMediaPathInputFeedError: 483,
	scanMediaPathInputJam: 484,
	scanMediaPathInputRequest: 485,
	scanMediaPathJam: 486,
	scanMediaPathOutputFeedError: 487,
	scanMediaPathOutputFull: 488,
	scanMediaPathOutputJam: 489,
	scanMediaPathPickRollerFailure: 490,
	scanMediaPathPickRollerLifeOver: 491,
	scanMediaPathPickRollerLifeWarn: 492,
	scanMediaPathPickRollerMissing: 493,
	scanMediaPathTrayAlmostFull: 494,
	scanMediaPathTrayFull: 495,
	scanMediaPathTrayMissing: 496,
	scannerLightFailure: 497,
	scannerLightLifeAlmostOver: 498,
	scannerLightLifeOver: 499,
	scannerLightMissing: 500,
	scannerSensorFailure: 501,
	scannerSensorLifeAlmostOver: 502,
	scannerSensorLifeOver: 503,
	scannerSensorMissing: 504,
	separationCutterAdded: 505,
	separationCutterAlmostEmpty: 506,
	separationCutterAlmostFull: 507,
	separationCutterAtLimit: 508,
	separationCutterClosed: 509,
	separationCutterConfigurationChange: 510,
	separationCutterCoverClosed: 511,
	separationCutterCoverOpen: 512,
	separationCutterEmpty: 513,
	separationCutterFull: 514,
	separationCutterInterlockClosed: 515,
	separationCutterInterlockOpen: 516,
	separationCutterJam: 517,
	separationCutterLifeAlmostOver: 518,
	separationCutterLifeOver: 519,
	separationCutterMemoryExhausted: 520,
	separationCutterMissing: 521,
	separationCutterMotorFailure: 522,
	separationCutterNearLimit: 523,
	separationCutterOffline: 524,
	separationCutterOpened: 525,
	separationCutterOverTemperature: 526,
	separationCutterPowerSaver: 527,
	separationCutterRecoverableFailure: 528,
	separationCutterRecoverableStorage: 529,
	separationCutterRemoved: 530,
	separationCutterResourceAdded: 531,
	separationCutterResourceRemoved: 532,
	separationCutterThermistorFailure: 533,
	separationCutterTimingFailure: 534,
	separationCutterTurnedOff: 535,
	separationCutterTurnedOn: 536,
	separationCutterUnderTemperature: 537,
	separationCutterUnrecoverableFailure: 538,
	separationCutterUnrecoverableStorageError: 539,
	separationCutterWarmingUp: 540,
	sheetRotatorAdded: 541,
	sheetRotatorAlmostEmpty: 542,
	sheetRotatorAlmostFull: 543,
	sheetRotatorAtLimit: 544,
	sheetRotatorClosed: 545,
	sheetRotatorConfigurationChange: 546,
	sheetRotatorCoverClosed: 547,
	sheetRotatorCoverOpen: 548,
	sheetRotatorEmpty: 549,
	sheetRotatorFull: 550,
	sheetRotatorInterlockClosed: 551,
	sheetRotatorInterlockOpen: 552,
	sheetRotatorJam: 553,
	sheetRotatorLifeAlmostOver: 554,
	sheetRotatorLifeOver: 555,
	sheetRotatorMemoryExhausted: 556,
	sheetRotatorMissing: 557,
	sheetRotatorMotorFailure: 558,
	sheetRotatorNearLimit: 559,
	sheetRotatorOffline: 560,
	sheetRotatorOpened: 561,
	sheetRotatorOverTemperature: 562,
	sheetRotatorPowerSaver: 563,
	sheetRotatorRecoverableFailure: 564,
	sheetRotatorRecoverableStorage: 565,
	sheetRotatorRemoved: 566,
	sheetRotatorResourceAdded: 567,
	sheetRotatorResourceRemoved: 568,
	sheetRotatorThermistorFailure: 569,
	sheetRotatorTimingFailure: 570,
	sheetRotatorTurnedOff: 571,
	sheetRotatorTurnedOn: 572,
	sheetRotatorUnderTemperature: 573,
	sheetRotatorUnrecoverableFailure: 574,
	sheetRotatorUnrecoverableStorageError: 575,
	sheetRotatorWarmingUp: 576,
	slitterAdded: 577,
	slitterAlmostEmpty: 578,
	slitterAlmostFull: 579,
	slitterAtLimit: 580,
	slitterClosed: 581,
	slitterConfigurationChange: 582,
	slitterCoverClosed: 583,
	slitterCoverOpen: 584,
	slitterEmpty: 585,
	slitterFull: 586,
	slitterInterlockClosed: 587,
	slitterInterlockOpen: 588,
	slitterJam: 589,
	slitterLifeAlmostOver: 590,
	slitterLifeOver: 591,
	slitterMemoryExhausted: 592,
	slitterMissing: 593,
	slitterMotorFailure: 594,
	slitterNearLimit: 595,
	slitterOffline: 596,
	slitterOpened: 597,
	slitterOverTemperature: 598,
	slitterPowerSaver: 599,
	slitterRecoverableFailure: 600,
	slitterRecoverableStorage: 601,
	slitterRemoved: 602,
	slitterResourceAdded: 603,
	slitterResourceRemoved: 604,
	slitterThermistorFailure: 605,
	slitterTimingFailure: 606,
	slitterTurnedOff: 607,
	slitterTurnedOn: 608,
	slitterUnderTemperature: 609,
	slitterUnrecoverableFailure: 610,
	slitterUnrecoverableStorageError: 611,
	slitterWarmingUp: 612,
	stackerAdded: 613,
	stackerAlmostEmpty: 614,
	stackerAlmostFull: 615,
	stackerAtLimit: 616,
	stackerClosed: 617,
	stackerConfigurationChange: 618,
	stackerCoverClosed: 619,
	stackerCoverOpen: 620,
	stackerEmpty: 621,
	stackerFull: 622,
	stackerInterlockClosed: 623,
	stackerInterlockOpen: 624,
	stackerJam: 625,
	stackerLifeAlmostOver: 626,
	stackerLifeOver: 627,
	stackerMemoryExhausted: 628,
	stackerMissing: 629,
	stackerMotorFailure: 630,
	stackerNearLimit: 631,
	stackerOffline: 632,
	stackerOpened: 633,
	stackerOverTemperature: 634,
	stackerPowerSaver: 635,
	stackerRecoverableFailure: 636,
	stackerRecoverableStorage: 637,
	stackerRemoved: 638,
	stackerResourceAdded: 639,
	stackerResourceRemoved: 640,
	stackerThermistorFailure: 641,
	stackerTimingFailure: 642,
	stackerTurnedOff: 643,
	stackerTurnedOn: 644,
	stackerUnderTemperature: 645,
	stackerUnrecoverableFailure: 646,
	stackerUnrecoverableStorageError: 647,
	stackerWarmingUp: 648,
	standby: 649,
	staplerAdded: 650,
	staplerAlmostEmpty: 651,
	staplerAlmostFull: 652,
	staplerAtLimit: 653,
	staplerClosed: 654,
	staplerConfigurationChange: 655,
	staplerCoverClosed: 656,
	staplerCoverOpen: 657,
	staplerEmpty: 658,
	staplerFull: 659,
	staplerInterlockClosed: 660,
	staplerInterlockOpen: 661,
	staplerJam: 662,
	staplerLifeAlmostOver: 663,
	staplerLifeOver: 664,
	staplerMemoryExhausted: 665,
	staplerMissing: 666,
	staplerMotorFailure: 667,
	staplerNearLimit: 668,
	staplerOffline: 669,
	staplerOpened: 670,
	staplerOverTemperature: 671,
	staplerPowerSaver: 672,
	staplerRecoverableFailure: 673,
	staplerRecoverableStorage: 674,
	staplerRemoved: 675,
	staplerResourceAdded: 676,
	staplerResourceRemoved: 677,
	staplerThermistorFailure: 678,
	staplerTimingFailure: 679,
	staplerTurnedOff: 680,
	staplerTurnedOn: 681,
	staplerUnderTemperature: 682,
	staplerUnrecoverableFailure: 683,
	staplerUnrecoverableStorageError: 684,
	staplerWarmingUp: 685,
	stitcherAdded: 686,
	stitcherAlmostEmpty: 687,
	stitcherAlmostFull: 688,
	stitcherAtLimit: 689,
	stitcherClosed: 690,
	stitcherConfigurationChange: 691,
	stitcherCoverClosed: 692,
	stitcherCoverOpen: 693,
	stitcherEmpty: 694,
	stitcherFull: 695,
	stitcherInterlockClosed: 696,
	stitcherInterlockOpen: 697,
	stitcherJam: 698,
	stitcherLifeAlmostOver: 699,
	stitcherLifeOver: 700,
	stitcherMemoryExhausted: 701,
	stitcherMissing: 702,
	stitcherMotorFailure: 703,
	stitcherNearLimit: 704,
	stitcherOffline: 705,
	stitcherOpened: 706,
	stitcherOverTemperature: 707,
	stitcherPowerSaver: 708,
	stitcherRecoverableFailure: 709,
	stitcherRecoverableStorage: 710,
	stitcherRemoved: 711,
	stitcherResourceAdded: 712,
	stitcherResourceRemoved: 713,
	stitcherThermistorFailure: 714,
	stitcherTimingFailure: 715,
	stitcherTurnedOff: 716,
	stitcherTurnedOn: 717,
	stitcherUnderTemperature: 718,
	stitcherUnrecoverableFailure: 719,
	stitcherUnrecoverableStorageError: 720,
	stitcherWarmingUp: 721,
	subunitAdded: 722,
	subunitAlmostEmpty: 723,
	subunitAlmostFull: 724,
	subunitAtLimit: 725,
	subunitClosed: 726,
	subunitCoolingDown: 727,
	subunitEmpty: 728,
	subunitFull: 729,
	subunitLifeAlmostOver: 730,
	subunitLifeOver: 731,
	subunitMemoryExhausted: 732,
	subunitMissing: 733,
	subunitMotorFailure: 734,
	subunitNearLimit: 735,
	subunitOffline: 736,
	subunitOpened: 737,
	subunitOverTemperature: 738,
	subunitPowerSaver: 739,
	subunitRecoverableFailure: 740,
	subunitRecoverableStorage: 741,
	subunitRemoved: 742,
	subunitResourceAdded: 743,
	subunitResourceRemoved: 744,
	subunitThermistorFailure: 745,
	subunitTimingFailure: 746,
	subunitTurnedOff: 747,
	subunitTurnedOn: 748,
	subunitUnderTemperature: 749,
	subunitUnrecoverableFailure: 750,
	subunitUnrecoverableStorage: 751,
	subunitWarmingUp: 752,
	suspend: 753,
	testing: 754,
	trimmerAdded: 755,
	trimmerAlmostEmpty: 756,
	trimmerAlmostFull: 757,
	trimmerAtLimit: 758,
	trimmerClosed: 759,
	trimmerConfigurationChange: 760,
	trimmerCoverClosed: 761,
	trimmerCoverOpen: 762,
	trimmerEmpty: 763,
	trimmerFull: 764,
	trimmerInterlockClosed: 765,
	trimmerInterlockOpen: 766,
	trimmerJam: 767,
	trimmerLifeAlmostOver: 768,
	trimmerLifeOver: 769,
	trimmerMemoryExhausted: 770,
	trimmerMissing: 771,
	trimmerMotorFailure: 772,
	trimmerNearLimit: 773,
	trimmerOffline: 774,
	trimmerOpened: 775,
	trimmerOverTemperature: 776,
	trimmerPowerSaver: 777,
	trimmerRecoverableFailure: 778,
	trimmerRecoverableStorage: 779,
	trimmerRemoved: 780,
	trimmerResourceAdded: 781,
	trimmerResourceRemoved: 782,
	trimmerThermistorFailure: 783,
	trimmerTimingFailure: 784,
	trimmerTurnedOff: 785,
	trimmerTurnedOn: 786,
	trimmerUnderTemperature: 787,
	trimmerUnrecoverableFailure: 788,
	trimmerUnrecoverableStorageError: 789,
	trimmerWarmingUp: 790,
	unknown: 791,
	wrapperAdded: 792,
	wrapperAlmostEmpty: 793,
	wrapperAlmostFull: 794,
	wrapperAtLimit: 795,
	wrapperClosed: 796,
	wrapperConfigurationChange: 797,
	wrapperCoverClosed: 798,
	wrapperCoverOpen: 799,
	wrapperEmpty: 800,
	wrapperFull: 801,
	wrapperInterlockClosed: 802,
	wrapperInterlockOpen: 803,
	wrapperJam: 804,
	wrapperLifeAlmostOver: 805,
	wrapperLifeOver: 806,
	wrapperMemoryExhausted: 807,
	wrapperMissing: 808,
	wrapperMotorFailure: 809,
	wrapperNearLimit: 810,
	wrapperOffline: 811,
	wrapperOpened: 812,
	wrapperOverTemperature: 813,
	wrapperPowerSaver: 814,
	wrapperRecoverableFailure: 815,
	wrapperRecoverableStorage: 816,
	wrapperRemoved: 817,
	wrapperResourceAdded: 818,
	wrapperResourceRemoved: 819,
	wrapperThermistorFailure: 820,
	wrapperTimingFailure: 821,
	wrapperTurnedOff: 822,
	wrapperTurnedOn: 823,
	wrapperUnderTemperature: 824,
	wrapperUnrecoverableFailure: 825,
	wrapperUnrecoverableStorageError: 826,
	wrapperWarmingUp: 827,
}

/** printEvent types */
export const printEvent: GraphTypes.printEvent = {
	jobStarted: 0,
	unknownFutureValue: 1,
}

/** printFinishing types */
export const printFinishing: GraphTypes.printFinishing = {
	none: 3,
	staple: 4,
	punch: 5,
	cover: 6,
	bind: 7,
	saddleStitch: 8,
	stitchEdge: 9,
	stapleTopLeft: 20,
	stapleBottomLeft: 21,
	stapleTopRight: 22,
	stapleBottomRight: 23,
	stitchLeftEdge: 24,
	stitchTopEdge: 25,
	stitchRightEdge: 26,
	stitchBottomEdge: 27,
	stapleDualLeft: 28,
	stapleDualTop: 29,
	stapleDualRight: 30,
	stapleDualBottom: 31,
	unknownFutureValue: 32,
	stapleTripleLeft: 33,
	stapleTripleTop: 34,
	stapleTripleRight: 35,
	stapleTripleBottom: 36,
	bindLeft: 37,
	bindTop: 38,
	bindRight: 39,
	bindBottom: 40,
	foldAccordion: 41,
	foldDoubleGate: 42,
	foldGate: 43,
	foldHalf: 44,
	foldHalfZ: 45,
	foldLeftGate: 46,
	foldLetter: 47,
	foldParallel: 48,
	foldPoster: 49,
	foldRightGate: 50,
	foldZ: 51,
	foldEngineeringZ: 52,
	punchTopLeft: 53,
	punchBottomLeft: 54,
	punchTopRight: 55,
	punchBottomRight: 56,
	punchDualLeft: 57,
	punchDualTop: 58,
	punchDualRight: 59,
	punchDualBottom: 60,
	punchTripleLeft: 61,
	punchTripleTop: 62,
	punchTripleRight: 63,
	punchTripleBottom: 64,
	punchQuadLeft: 65,
	punchQuadTop: 66,
	punchQuadRight: 67,
	punchQuadBottom: 68,
	fold: 69,
	trim: 70,
	bale: 71,
	bookletMaker: 72,
	coat: 73,
	laminate: 74,
	trimAfterPages: 75,
	trimAfterDocuments: 76,
	trimAfterCopies: 77,
	trimAfterJob: 78,
}

/** printJobProcessingState types */
export const printJobProcessingState: GraphTypes.printJobProcessingState = {
	unknown: 0,
	pending: 1,
	processing: 2,
	paused: 3,
	stopped: 4,
	completed: 5,
	canceled: 6,
	aborted: 7,
	unknownFutureValue: 8,
}

/** printJobStateDetail types */
export const printJobStateDetail: GraphTypes.printJobStateDetail = {
	uploadPending: 0,
	transforming: 1,
	completedSuccessfully: 2,
	completedWithWarnings: 3,
	completedWithErrors: 4,
	releaseWait: 5,
	interpreting: 6,
	unknownFutureValue: 7,
}

/** printMultipageLayout types */
export const printMultipageLayout: GraphTypes.printMultipageLayout = {
	clockwiseFromTopLeft: 0,
	counterclockwiseFromTopLeft: 1,
	counterclockwiseFromTopRight: 2,
	clockwiseFromTopRight: 3,
	counterclockwiseFromBottomLeft: 4,
	clockwiseFromBottomLeft: 5,
	counterclockwiseFromBottomRight: 6,
	clockwiseFromBottomRight: 7,
	unknownFutureValue: 8,
}

/** printOperationProcessingState types */
export const printOperationProcessingState: GraphTypes.printOperationProcessingState = {
	notStarted: 0,
	running: 1,
	succeeded: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** printOrientation types */
export const printOrientation: GraphTypes.printOrientation = {
	portrait: 3,
	landscape: 4,
	reverseLandscape: 5,
	reversePortrait: 6,
	unknownFutureValue: 7,
}

/** printQuality types */
export const printQuality: GraphTypes.printQuality = {
	low: 0,
	medium: 1,
	high: 2,
	unknownFutureValue: 3,
}

/** printScaling types */
export const printScaling: GraphTypes.printScaling = {
	auto: 0,
	shrinkToFit: 1,
	fill: 2,
	fit: 3,
	none: 4,
	unknownFutureValue: 5,
}

/** printTaskProcessingState types */
export const printTaskProcessingState: GraphTypes.printTaskProcessingState = {
	pending: 0,
	processing: 1,
	completed: 2,
	aborted: 3,
	unknownFutureValue: 4,
}

/** status types */
export const status: GraphTypes.status = {
	active: 0,
	updated: 1,
	deleted: 2,
	ignored: 3,
	unknownFutureValue: 4,
}

/** dataPolicyOperationStatus types */
export const dataPolicyOperationStatus: GraphTypes.dataPolicyOperationStatus = {
	notStarted: 0,
	running: 1,
	complete: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** devicePlatformType types */
export const devicePlatformType: GraphTypes.devicePlatformType = {
	android: 0,
	androidForWork: 1,
	iOS: 2,
	macOS: 3,
	windowsPhone81: 4,
	windows81AndLater: 5,
	windows10AndLater: 6,
	androidWorkProfile: 7,
	unknown: 8,
	androidAOSP: 9,
	androidMobileApplicationManagement: 10,
	iOSMobileApplicationManagement: 11,
	unknownFutureValue: 12,
}

/** accountTargetContentType types */
export const accountTargetContentType: GraphTypes.accountTargetContentType = {
	unknown: 0,
	includeAll: 1,
	addressBook: 2,
	unknownFutureValue: 3,
}

/** attackSimulationOperationType types */
export const attackSimulationOperationType: GraphTypes.attackSimulationOperationType = {
	createSimualation: 0,
	updateSimulation: 1,
	unknownFutureValue: 2,
}

/** clickSource types */
export const clickSource: GraphTypes.clickSource = {
	unknown: 0,
	qrCode: 1,
	phishingUrl: 2,
	unknownFutureValue: 3,
}

/** coachmarkLocationType types */
export const coachmarkLocationType: GraphTypes.coachmarkLocationType = {
	unknown: 0,
	fromEmail: 1,
	subject: 2,
	externalTag: 3,
	displayName: 4,
	messageBody: 5,
	unknownFutureValue: 6,
}

/** endUserNotificationPreference types */
export const endUserNotificationPreference: GraphTypes.endUserNotificationPreference = {
	unknown: 0,
	microsoft: 1,
	custom: 2,
	unknownFutureValue: 3,
}

/** endUserNotificationSettingType types */
export const endUserNotificationSettingType: GraphTypes.endUserNotificationSettingType = {
	unknown: 0,
	noTraining: 1,
	trainingSelected: 2,
	noNotification: 3,
	unknownFutureValue: 4,
}

/** endUserNotificationType types */
export const endUserNotificationType: GraphTypes.endUserNotificationType = {
	unknown: 0,
	positiveReinforcement: 1,
	noTraining: 2,
	trainingAssignment: 3,
	trainingReminder: 4,
	unknownFutureValue: 5,
}

/** notificationDeliveryFrequency types */
export const notificationDeliveryFrequency: GraphTypes.notificationDeliveryFrequency = {
	unknown: 0,
	weekly: 1,
	biWeekly: 2,
	unknownFutureValue: 3,
}

/** notificationDeliveryPreference types */
export const notificationDeliveryPreference: GraphTypes.notificationDeliveryPreference = {
	unknown: 0,
	deliverImmedietly: 1,
	deliverAfterCampaignEnd: 2,
	unknownFutureValue: 3,
}

/** oAuthAppScope types */
export const oAuthAppScope: GraphTypes.oAuthAppScope = {
	unknown: 0,
	readCalendar: 1,
	readContact: 2,
	readMail: 3,
	readAllChat: 4,
	readAllFile: 5,
	readAndWriteMail: 6,
	sendMail: 7,
	unknownFutureValue: 8,
}

/** payloadBrand types */
export const payloadBrand: GraphTypes.payloadBrand = {
	unknown: 0,
	other: 1,
	americanExpress: 2,
	capitalOne: 3,
	dhl: 4,
	docuSign: 5,
	dropbox: 6,
	facebook: 7,
	firstAmerican: 8,
	microsoft: 9,
	netflix: 10,
	scotiabank: 11,
	sendGrid: 12,
	stewartTitle: 13,
	tesco: 14,
	wellsFargo: 15,
	syrinxCloud: 16,
	adobe: 17,
	teams: 18,
	zoom: 19,
	unknownFutureValue: 20,
}

/** payloadComplexity types */
export const payloadComplexity: GraphTypes.payloadComplexity = {
	unknown: 0,
	low: 1,
	medium: 2,
	high: 3,
	unknownFutureValue: 4,
}

/** payloadDeliveryPlatform types */
export const payloadDeliveryPlatform: GraphTypes.payloadDeliveryPlatform = {
	unknown: 0,
	sms: 1,
	email: 2,
	teams: 3,
	unknownFutureValue: 4,
}

/** payloadIndustry types */
export const payloadIndustry: GraphTypes.payloadIndustry = {
	unknown: 0,
	other: 1,
	banking: 2,
	businessServices: 3,
	consumerServices: 4,
	education: 5,
	energy: 6,
	construction: 7,
	consulting: 8,
	financialServices: 9,
	government: 10,
	hospitality: 11,
	insurance: 12,
	legal: 13,
	courierServices: 14,
	IT: 15,
	healthcare: 16,
	manufacturing: 17,
	retail: 18,
	telecom: 19,
	realEstate: 20,
	unknownFutureValue: 21,
}

/** payloadTheme types */
export const payloadTheme: GraphTypes.payloadTheme = {
	unknown: 0,
	other: 1,
	accountActivation: 2,
	accountVerification: 3,
	billing: 4,
	cleanUpMail: 5,
	controversial: 6,
	documentReceived: 7,
	expense: 8,
	fax: 9,
	financeReport: 10,
	incomingMessages: 11,
	invoice: 12,
	itemReceived: 13,
	loginAlert: 14,
	mailReceived: 15,
	password: 16,
	payment: 17,
	payroll: 18,
	personalizedOffer: 19,
	quarantine: 20,
	remoteWork: 21,
	reviewMessage: 22,
	securityUpdate: 23,
	serviceSuspended: 24,
	signatureRequired: 25,
	upgradeMailboxStorage: 26,
	verifyMailbox: 27,
	voicemail: 28,
	advertisement: 29,
	employeeEngagement: 30,
	unknownFutureValue: 31,
}

/** simulationAttackTechnique types */
export const simulationAttackTechnique: GraphTypes.simulationAttackTechnique = {
	unknown: 0,
	credentialHarvesting: 1,
	attachmentMalware: 2,
	driveByUrl: 3,
	linkInAttachment: 4,
	linkToMalwareFile: 5,
	unknownFutureValue: 6,
}

/** simulationAttackType types */
export const simulationAttackType: GraphTypes.simulationAttackType = {
	unknown: 0,
	social: 1,
	cloud: 2,
	endpoint: 3,
	unknownFutureValue: 4,
}

/** simulationAutomationRunStatus types */
export const simulationAutomationRunStatus: GraphTypes.simulationAutomationRunStatus = {
	unknown: 0,
	running: 1,
	succeeded: 2,
	failed: 3,
	skipped: 4,
	unknownFutureValue: 5,
}

/** simulationAutomationStatus types */
export const simulationAutomationStatus: GraphTypes.simulationAutomationStatus = {
	unknown: 0,
	draft: 1,
	notRunning: 2,
	running: 3,
	completed: 4,
	unknownFutureValue: 5,
}

/** simulationContentSource types */
export const simulationContentSource: GraphTypes.simulationContentSource = {
	unknown: 0,
	global: 1,
	tenant: 2,
	unknownFutureValue: 3,
}

/** simulationContentStatus types */
export const simulationContentStatus: GraphTypes.simulationContentStatus = {
	unknown: 0,
	draft: 1,
	ready: 2,
	archive: 3,
	delete: 4,
	unknownFutureValue: 5,
}

/** simulationStatus types */
export const simulationStatus: GraphTypes.simulationStatus = {
	unknown: 0,
	draft: 1,
	running: 2,
	scheduled: 3,
	succeeded: 4,
	failed: 5,
	cancelled: 6,
	excluded: 7,
	unknownFutureValue: 8,
}

/** targettedUserType types */
export const targettedUserType: GraphTypes.targettedUserType = {
	unknown: 0,
	clicked: 1,
	compromised: 2,
	allUsers: 3,
	unknownFutureValue: 4,
}

/** trainingAssignedTo types */
export const trainingAssignedTo: GraphTypes.trainingAssignedTo = {
	none: 0,
	allUsers: 1,
	clickedPayload: 2,
	compromised: 3,
	reportedPhish: 4,
	readButNotClicked: 5,
	didNothing: 6,
	unknownFutureValue: 7,
}

/** trainingAvailabilityStatus types */
export const trainingAvailabilityStatus: GraphTypes.trainingAvailabilityStatus = {
	unknown: 0,
	notAvailable: 1,
	available: 2,
	archive: 3,
	delete: 4,
	unknownFutureValue: 5,
}

/** trainingCompletionDuration types */
export const trainingCompletionDuration: GraphTypes.trainingCompletionDuration = {
	week: 7,
	fortnite: 14,
	month: 30,
	unknownFutureValue: 100,
}

/** trainingSettingType types */
export const trainingSettingType: GraphTypes.trainingSettingType = {
	microsoftCustom: 0,
	microsoftManaged: 1,
	noTraining: 2,
	custom: 3,
	unknownFutureValue: 4,
}

/** trainingStatus types */
export const trainingStatus: GraphTypes.trainingStatus = {
	unknown: 0,
	assigned: 1,
	inProgress: 2,
	completed: 3,
	overdue: 4,
	unknownFutureValue: 5,
}

/** trainingType types */
export const trainingType: GraphTypes.trainingType = {
	unknown: 0,
	phishing: 1,
	unknownFutureValue: 2,
}

/** alertFeedback types */
export const alertFeedback: GraphTypes.alertFeedback = {
	unknown: 0,
	truePositive: 1,
	falsePositive: 2,
	benignPositive: 3,
	unknownFutureValue: 127,
}

/** alertSeverity types */
export const alertSeverity: GraphTypes.alertSeverity = {
	unknown: 0,
	informational: 32,
	low: 64,
	medium: 128,
	high: 256,
	unknownFutureValue: 511,
}

/** alertStatus types */
export const alertStatus: GraphTypes.alertStatus = {
	unknown: 0,
	new: 2,
	inProgress: 4,
	resolved: 8,
	unknownFutureValue: 31,
}

/** connectionDirection types */
export const connectionDirection: GraphTypes.connectionDirection = {
	unknown: 0,
	inbound: 1,
	outbound: 2,
	unknownFutureValue: 127,
}

/** connectionStatus types */
export const connectionStatus: GraphTypes.connectionStatus = {
	unknown: 0,
	attempted: 1,
	succeeded: 2,
	blocked: 3,
	failed: 4,
	unknownFutureValue: 127,
}

/** emailRole types */
export const emailRole: GraphTypes.emailRole = {
	unknown: 0,
	sender: 1,
	recipient: 2,
	unknownFutureValue: 127,
}

/** fileHashType types */
export const fileHashType: GraphTypes.fileHashType = {
	unknown: 0,
	sha1: 1,
	sha256: 2,
	md5: 3,
	authenticodeHash256: 4,
	lsHash: 5,
	ctph: 6,
	unknownFutureValue: 127,
}

/** logonType types */
export const logonType: GraphTypes.logonType = {
	unknown: 0,
	interactive: 1,
	remoteInteractive: 2,
	network: 3,
	batch: 4,
	service: 5,
	unknownFutureValue: 127,
}

/** processIntegrityLevel types */
export const processIntegrityLevel: GraphTypes.processIntegrityLevel = {
	unknown: 0,
	untrusted: 1,
	low: 2,
	medium: 3,
	high: 4,
	system: 5,
	unknownFutureValue: 127,
}

/** registryHive types */
export const registryHive: GraphTypes.registryHive = {
	unknown: 0,
	currentConfig: 1,
	currentUser: 2,
	localMachineSam: 3,
	localMachineSecurity: 4,
	localMachineSoftware: 5,
	localMachineSystem: 6,
	usersDefault: 7,
	unknownFutureValue: 127,
}

/** registryOperation types */
export const registryOperation: GraphTypes.registryOperation = {
	unknown: 0,
	create: 1,
	modify: 2,
	delete: 3,
	unknownFutureValue: 127,
}

/** registryValueType types */
export const registryValueType: GraphTypes.registryValueType = {
	unknown: 0,
	binary: 1,
	dword: 2,
	dwordLittleEndian: 3,
	dwordBigEndian: 4,
	expandSz: 5,
	link: 6,
	multiSz: 7,
	none: 8,
	qword: 9,
	qwordlittleEndian: 10,
	sz: 11,
	unknownFutureValue: 127,
}

/** securityNetworkProtocol types */
export const securityNetworkProtocol: GraphTypes.securityNetworkProtocol = {
	unknown: -1,
	ip: 0,
	icmp: 1,
	igmp: 2,
	ggp: 3,
	ipv4: 4,
	tcp: 6,
	pup: 12,
	udp: 17,
	idp: 22,
	ipv6: 41,
	ipv6RoutingHeader: 43,
	ipv6FragmentHeader: 44,
	ipSecEncapsulatingSecurityPayload: 50,
	ipSecAuthenticationHeader: 51,
	icmpV6: 58,
	ipv6NoNextHeader: 59,
	ipv6DestinationOptions: 60,
	nd: 77,
	raw: 255,
	ipx: 1000,
	spx: 1256,
	spxII: 1257,
	unknownFutureValue: 32767,
}

/** securityResourceType types */
export const securityResourceType: GraphTypes.securityResourceType = {
	unknown: 0,
	attacked: 1,
	related: 2,
	unknownFutureValue: 3,
}

/** userAccountSecurityType types */
export const userAccountSecurityType: GraphTypes.userAccountSecurityType = {
	unknown: 0,
	standard: 1,
	power: 2,
	administrator: 3,
	unknownFutureValue: 127,
}

/** broadcastMeetingAudience types */
export const broadcastMeetingAudience: GraphTypes.broadcastMeetingAudience = {
	roleIsAttendee: 0,
	organization: 1,
	everyone: 2,
	unknownFutureValue: 3,
}

/** callDirection types */
export const callDirection: GraphTypes.callDirection = {
	incoming: 0,
	outgoing: 1,
}

/** callState types */
export const callState: GraphTypes.callState = {
	incoming: 0,
	establishing: 1,
	established: 3,
	hold: 4,
	transferring: 5,
	transferAccepted: 6,
	redirecting: 7,
	terminating: 8,
	terminated: 9,
	unknownFutureValue: 10,
}

/** callTranscriptionState types */
export const callTranscriptionState: GraphTypes.callTranscriptionState = {
	notStarted: 0,
	active: 1,
	inactive: 2,
	unknownFutureValue: 3,
}

/** changeType types */
export const changeType: GraphTypes.changeType = {
	created: 0,
	updated: 1,
	deleted: 2,
}

/** mediaDirection types */
export const mediaDirection: GraphTypes.mediaDirection = {
	inactive: 0,
	sendOnly: 1,
	receiveOnly: 2,
	sendReceive: 3,
}

/** mediaState types */
export const mediaState: GraphTypes.mediaState = {
	active: 0,
	inactive: 1,
	unknownFutureValue: 2,
}

/** meetingAudience types */
export const meetingAudience: GraphTypes.meetingAudience = {
	everyone: 0,
	organization: 1,
	unknownFutureValue: 2,
}

/** meetingChatHistoryDefaultMode types */
export const meetingChatHistoryDefaultMode: GraphTypes.meetingChatHistoryDefaultMode = {
	none: 0,
	all: 1,
	unknownFutureValue: 2,
}

/** modality types */
export const modality: GraphTypes.modality = {
	audio: 0,
	video: 1,
	videoBasedScreenSharing: 2,
	data: 3,
	screenSharing: 4,
	unknownFutureValue: 5,
}

/** onlineMeetingContentSharingDisabledReason types */
export const onlineMeetingContentSharingDisabledReason: GraphTypes.onlineMeetingContentSharingDisabledReason = {
	watermarkProtection: 1,
	unknownFutureValue: 2,
}

/** onlineMeetingRole types */
export const onlineMeetingRole: GraphTypes.onlineMeetingRole = {
	attendee: 0,
	presenter: 1,
	unknownFutureValue: 2,
	producer: 3,
	coorganizer: 4,
}

/** onlineMeetingVideoDisabledReason types */
export const onlineMeetingVideoDisabledReason: GraphTypes.onlineMeetingVideoDisabledReason = {
	watermarkProtection: 1,
	unknownFutureValue: 2,
}

/** recordingStatus types */
export const recordingStatus: GraphTypes.recordingStatus = {
	unknown: 0,
	notRecording: 1,
	recording: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** rejectReason types */
export const rejectReason: GraphTypes.rejectReason = {
	none: 0,
	busy: 1,
	forbidden: 2,
	unknownFutureValue: 3,
}

/** routingMode types */
export const routingMode: GraphTypes.routingMode = {
	oneToOne: 0,
	multicast: 1,
	unknownFutureValue: 2,
}

/** routingType types */
export const routingType: GraphTypes.routingType = {
	forwarded: 0,
	lookup: 1,
	selfFork: 2,
	unknownFutureValue: 3,
}

/** screenSharingRole types */
export const screenSharingRole: GraphTypes.screenSharingRole = {
	viewer: 0,
	sharer: 1,
}

/** sendDtmfCompletionReason types */
export const sendDtmfCompletionReason: GraphTypes.sendDtmfCompletionReason = {
	unknown: 0,
	completedSuccessfully: 1,
	mediaOperationCanceled: 2,
	unknownFutureValue: 3,
}

/** tone types */
export const tone: GraphTypes.tone = {
	tone0: 0,
	tone1: 1,
	tone2: 2,
	tone3: 3,
	tone4: 4,
	tone5: 5,
	tone6: 6,
	tone7: 7,
	tone8: 8,
	tone9: 9,
	star: 10,
	pound: 11,
	a: 12,
	b: 13,
	c: 14,
	d: 15,
	flash: 16,
}

/** virtualEventAttendeeRegistrationStatus types */
export const virtualEventAttendeeRegistrationStatus: GraphTypes.virtualEventAttendeeRegistrationStatus = {
	registered: 0,
	canceled: 1,
	waitlisted: 2,
	pendingApproval: 3,
	rejectedByOrganizer: 4,
	unknownFutureValue: 11,
}

/** virtualEventRegistrationPredefinedQuestionLabel types */
export const virtualEventRegistrationPredefinedQuestionLabel: GraphTypes.virtualEventRegistrationPredefinedQuestionLabel = {
	street: 0,
	city: 1,
	state: 2,
	postalCode: 3,
	countryOrRegion: 4,
	industry: 5,
	jobTitle: 6,
	organization: 7,
	unknownFutureValue: 8,
}

/** virtualEventRegistrationQuestionAnswerInputType types */
export const virtualEventRegistrationQuestionAnswerInputType: GraphTypes.virtualEventRegistrationQuestionAnswerInputType = {
	text: 0,
	multilineText: 1,
	singleChoice: 2,
	multiChoice: 3,
	boolean: 4,
	unknownFutureValue: 5,
}

/** virtualEventStatus types */
export const virtualEventStatus: GraphTypes.virtualEventStatus = {
	draft: 0,
	published: 1,
	canceled: 2,
	unknownFutureValue: 3,
}

/** attestationLevel types */
export const attestationLevel: GraphTypes.attestationLevel = {
	attested: 0,
	notAttested: 1,
	unknownFutureValue: 2,
}

/** authenticationMethodKeyStrength types */
export const authenticationMethodKeyStrength: GraphTypes.authenticationMethodKeyStrength = {
	normal: 0,
	weak: 1,
	unknown: 2,
}

/** authenticationMethodSignInState types */
export const authenticationMethodSignInState: GraphTypes.authenticationMethodSignInState = {
	notSupported: 0,
	notAllowedByPolicy: 1,
	notEnabled: 2,
	phoneNumberNotUnique: 3,
	ready: 4,
	notConfigured: 5,
	unknownFutureValue: 6,
}

/** authenticationPhoneType types */
export const authenticationPhoneType: GraphTypes.authenticationPhoneType = {
	mobile: 0,
	alternateMobile: 1,
	office: 2,
	unknownFutureValue: 3,
}

/** lifecycleEventType types */
export const lifecycleEventType: GraphTypes.lifecycleEventType = {
	missed: 0,
	subscriptionRemoved: 1,
	reauthorizationRequired: 2,
}

/** binaryOperator types */
export const binaryOperator: GraphTypes.binaryOperator = {
	or: 0,
	and: 1,
}

/** callRecordingStatus types */
export const callRecordingStatus: GraphTypes.callRecordingStatus = {
	success: 0,
	failure: 1,
	initial: 2,
	chunkFinished: 3,
	unknownFutureValue: 4,
}

/** channelMembershipType types */
export const channelMembershipType: GraphTypes.channelMembershipType = {
	standard: 0,
	private: 1,
	unknownFutureValue: 2,
	shared: 3,
}

/** chatMessageActions types */
export const chatMessageActions: GraphTypes.chatMessageActions = {
	reactionAdded: 1,
	reactionRemoved: 2,
	actionUndefined: 4,
	unknownFutureValue: 8,
}

/** chatMessageImportance types */
export const chatMessageImportance: GraphTypes.chatMessageImportance = {
	normal: 0,
	high: 1,
	urgent: 2,
	unknownFutureValue: 3,
}

/** chatMessagePolicyViolationDlpActionTypes types */
export const chatMessagePolicyViolationDlpActionTypes: GraphTypes.chatMessagePolicyViolationDlpActionTypes = {
	none: 0,
	notifySender: 1,
	blockAccess: 2,
	blockAccessExternal: 4,
}

/** chatMessagePolicyViolationUserActionTypes types */
export const chatMessagePolicyViolationUserActionTypes: GraphTypes.chatMessagePolicyViolationUserActionTypes = {
	none: 0,
	override: 1,
	reportFalsePositive: 2,
}

/** chatMessagePolicyViolationVerdictDetailsTypes types */
export const chatMessagePolicyViolationVerdictDetailsTypes: GraphTypes.chatMessagePolicyViolationVerdictDetailsTypes = {
	none: 0,
	allowFalsePositiveOverride: 1,
	allowOverrideWithoutJustification: 2,
	allowOverrideWithJustification: 4,
}

/** chatMessageType types */
export const chatMessageType: GraphTypes.chatMessageType = {
	message: 0,
	chatEvent: 1,
	typing: 2,
	unknownFutureValue: 3,
	systemEventMessage: 4,
}

/** chatType types */
export const chatType: GraphTypes.chatType = {
	oneOnOne: 0,
	group: 1,
	meeting: 2,
	unknownFutureValue: 3,
}

/** clonableTeamParts types */
export const clonableTeamParts: GraphTypes.clonableTeamParts = {
	apps: 1,
	tabs: 2,
	settings: 4,
	channels: 8,
	members: 16,
}

/** giphyRatingType types */
export const giphyRatingType: GraphTypes.giphyRatingType = {
	strict: 0,
	moderate: 1,
	unknownFutureValue: 2,
}

/** teamsAppDistributionMethod types */
export const teamsAppDistributionMethod: GraphTypes.teamsAppDistributionMethod = {
	store: 0,
	organization: 1,
	sideloaded: 2,
	unknownFutureValue: 3,
}

/** teamsAppPublishingState types */
export const teamsAppPublishingState: GraphTypes.teamsAppPublishingState = {
	submitted: 0,
	rejected: 1,
	published: 2,
	unknownFutureValue: 3,
}

/** teamsAppResourceSpecificPermissionType types */
export const teamsAppResourceSpecificPermissionType: GraphTypes.teamsAppResourceSpecificPermissionType = {
	delegated: 0,
	application: 1,
	unknownFutureValue: 2,
}

/** teamsAsyncOperationStatus types */
export const teamsAsyncOperationStatus: GraphTypes.teamsAsyncOperationStatus = {
	invalid: 0,
	notStarted: 1,
	inProgress: 2,
	succeeded: 3,
	failed: 4,
	unknownFutureValue: 5,
}

/** teamsAsyncOperationType types */
export const teamsAsyncOperationType: GraphTypes.teamsAsyncOperationType = {
	invalid: 0,
	cloneTeam: 1,
	archiveTeam: 2,
	unarchiveTeam: 3,
	createTeam: 4,
	unknownFutureValue: 5,
	teamifyGroup: 6,
	createChannel: 7,
	archiveChannel: 8,
	unarchiveChannel: 9,
}

/** teamSpecialization types */
export const teamSpecialization: GraphTypes.teamSpecialization = {
	none: 0,
	educationStandard: 1,
	educationClass: 2,
	educationProfessionalLearningCommunity: 3,
	educationStaff: 4,
	healthcareStandard: 5,
	healthcareCareCoordination: 6,
	unknownFutureValue: 7,
}

/** teamVisibilityType types */
export const teamVisibilityType: GraphTypes.teamVisibilityType = {
	private: 0,
	public: 1,
	hiddenMembership: 2,
	unknownFutureValue: 3,
}

/** teamworkActivityTopicSource types */
export const teamworkActivityTopicSource: GraphTypes.teamworkActivityTopicSource = {
	entityUrl: 0,
	text: 1,
}

/** teamworkApplicationIdentityType types */
export const teamworkApplicationIdentityType: GraphTypes.teamworkApplicationIdentityType = {
	aadApplication: 0,
	bot: 1,
	tenantBot: 2,
	office365Connector: 3,
	outgoingWebhook: 4,
	unknownFutureValue: 5,
}

/** teamworkCallEventType types */
export const teamworkCallEventType: GraphTypes.teamworkCallEventType = {
	call: 0,
	meeting: 1,
	screenShare: 2,
	unknownFutureValue: 3,
}

/** teamworkConversationIdentityType types */
export const teamworkConversationIdentityType: GraphTypes.teamworkConversationIdentityType = {
	team: 0,
	channel: 1,
	chat: 2,
	unknownFutureValue: 3,
}

/** teamworkTagType types */
export const teamworkTagType: GraphTypes.teamworkTagType = {
	standard: 0,
	unknownFutureValue: 1,
}

/** teamworkUserIdentityType types */
export const teamworkUserIdentityType: GraphTypes.teamworkUserIdentityType = {
	aadUser: 0,
	onPremiseAadUser: 1,
	anonymousGuest: 2,
	federatedUser: 3,
	personalMicrosoftAccountUser: 4,
	skypeUser: 5,
	phoneUser: 6,
	unknownFutureValue: 7,
	emailUser: 8,
}

/** scheduleChangeRequestActor types */
export const scheduleChangeRequestActor: GraphTypes.scheduleChangeRequestActor = {
	sender: 0,
	recipient: 1,
	manager: 2,
	system: 3,
	unknownFutureValue: 4,
}

/** scheduleChangeState types */
export const scheduleChangeState: GraphTypes.scheduleChangeState = {
	pending: 0,
	approved: 1,
	declined: 2,
	unknownFutureValue: 3,
}

/** scheduleEntityTheme types */
export const scheduleEntityTheme: GraphTypes.scheduleEntityTheme = {
	white: 0,
	blue: 1,
	green: 2,
	purple: 3,
	pink: 4,
	yellow: 5,
	gray: 6,
	darkBlue: 7,
	darkGreen: 8,
	darkPurple: 9,
	darkPink: 10,
	darkYellow: 11,
	unknownFutureValue: 12,
}

/** timeOffReasonIconType types */
export const timeOffReasonIconType: GraphTypes.timeOffReasonIconType = {
	none: 0,
	car: 1,
	calendar: 2,
	running: 3,
	plane: 4,
	firstAid: 5,
	doctor: 6,
	notWorking: 7,
	clock: 8,
	juryDuty: 9,
	globe: 10,
	cup: 11,
	phone: 12,
	weather: 13,
	umbrella: 14,
	piggyBank: 15,
	dog: 16,
	cake: 17,
	trafficCone: 18,
	pin: 19,
	sunny: 20,
	unknownFutureValue: 21,
}

/** workforceIntegrationEncryptionProtocol types */
export const workforceIntegrationEncryptionProtocol: GraphTypes.workforceIntegrationEncryptionProtocol = {
	sharedSecret: 0,
	unknownFutureValue: 1,
}

/** workforceIntegrationSupportedEntities types */
export const workforceIntegrationSupportedEntities: GraphTypes.workforceIntegrationSupportedEntities = {
	none: 0,
	shift: 1,
	swapRequest: 2,
	userShiftPreferences: 8,
	openShift: 16,
	openShiftRequest: 32,
	offerShiftRequest: 64,
	unknownFutureValue: 1024,
}

/** mailDestinationRoutingReason types */
export const mailDestinationRoutingReason: GraphTypes.mailDestinationRoutingReason = {
	none: 0,
	mailFlowRule: 1,
	safeSender: 2,
	blockedSender: 3,
	advancedSpamFiltering: 4,
	domainAllowList: 5,
	domainBlockList: 6,
	notInAddressBook: 7,
	firstTimeSender: 8,
	autoPurgeToInbox: 9,
	autoPurgeToJunk: 10,
	autoPurgeToDeleted: 11,
	outbound: 12,
	notJunk: 13,
	junk: 14,
	unknownFutureValue: 15,
}

/** threatAssessmentContentType types */
export const threatAssessmentContentType: GraphTypes.threatAssessmentContentType = {
	mail: 1,
	url: 2,
	file: 3,
}

/** threatAssessmentRequestSource types */
export const threatAssessmentRequestSource: GraphTypes.threatAssessmentRequestSource = {
	undefined: 0,
	user: 1,
	administrator: 2,
}

/** threatAssessmentResultType types */
export const threatAssessmentResultType: GraphTypes.threatAssessmentResultType = {
	checkPolicy: 1,
	rescan: 2,
	unknownFutureValue: 3,
}

/** threatAssessmentStatus types */
export const threatAssessmentStatus: GraphTypes.threatAssessmentStatus = {
	pending: 1,
	completed: 2,
}

/** threatCategory types */
export const threatCategory: GraphTypes.threatCategory = {
	undefined: 0,
	spam: 1,
	phishing: 2,
	malware: 3,
	unknownFutureValue: 4,
}

/** threatExpectedAssessment types */
export const threatExpectedAssessment: GraphTypes.threatExpectedAssessment = {
	block: 1,
	unblock: 2,
}

/** taskStatus types */
export const taskStatus: GraphTypes.taskStatus = {
	notStarted: 0,
	inProgress: 1,
	completed: 2,
	waitingOnOthers: 3,
	deferred: 4,
}

/** wellknownListName types */
export const wellknownListName: GraphTypes.wellknownListName = {
	none: 0,
	defaultList: 1,
	flaggedEmails: 2,
	unknownFutureValue: 3,
}

/** communityPrivacy types */
export const communityPrivacy: GraphTypes.communityPrivacy = {
	public: 0,
	private: 1,
	unknownFutureValue: 2,
}

/** engagementAsyncOperationType types */
export const engagementAsyncOperationType: GraphTypes.engagementAsyncOperationType = {
	createCommunity: 0,
	unknownFutureValue: 1,
}

/** assignmentType types */
export const assignmentType: GraphTypes.assignmentType = {
	required: 0,
	recommended: 1,
	unknownFutureValue: 2,
	peerRecommended: 3,
}

/** courseStatus types */
export const courseStatus: GraphTypes.courseStatus = {
	notStarted: 0,
	inProgress: 1,
	completed: 2,
	unknownFutureValue: 3,
}

/** level types */
export const level: GraphTypes.level = {
	beginner: 0,
	intermediate: 1,
	advanced: 2,
	unknownFutureValue: 3,
}

/** additionalDataOptions types */
export const additionalDataOptions: GraphTypes.additionalDataOptions = {
	allVersions: 1,
	linkedFiles: 2,
	unknownFutureValue: 4,
}

/** additionalOptions types */
export const additionalOptions: GraphTypes.additionalOptions = {
	none: 0,
	teamsAndYammerConversations: 1,
	cloudAttachments: 2,
	allDocumentVersions: 4,
	subfolderContents: 8,
	listAttachments: 16,
	unknownFutureValue: 32,
}

/** caseAction types */
export const caseAction: GraphTypes.caseAction = {
	contentExport: 0,
	applyTags: 1,
	convertToPdf: 2,
	index: 3,
	estimateStatistics: 4,
	addToReviewSet: 5,
	holdUpdate: 6,
	unknownFutureValue: 7,
	purgeData: 8,
	exportReport: 9,
	exportResult: 10,
}

/** caseOperationStatus types */
export const caseOperationStatus: GraphTypes.caseOperationStatus = {
	notStarted: 0,
	submissionFailed: 1,
	running: 2,
	succeeded: 3,
	partiallySucceeded: 4,
	failed: 5,
	unknownFutureValue: 6,
}

/** caseStatus types */
export const caseStatus: GraphTypes.caseStatus = {
	unknown: 0,
	active: 1,
	pendingDelete: 2,
	closing: 3,
	closed: 4,
	closedWithError: 5,
	unknownFutureValue: 6,
}

/** childSelectability types */
export const childSelectability: GraphTypes.childSelectability = {
	One: 0,
	Many: 1,
	unknownFutureValue: 2,
}

/** dataSourceContainerStatus types */
export const dataSourceContainerStatus: GraphTypes.dataSourceContainerStatus = {
	active: 1,
	released: 2,
	unknownFutureValue: 3,
}

/** dataSourceHoldStatus types */
export const dataSourceHoldStatus: GraphTypes.dataSourceHoldStatus = {
	notApplied: 1,
	applied: 2,
	applying: 3,
	removing: 4,
	partial: 5,
	unknownFutureValue: 6,
}

/** dataSourceScopes types */
export const dataSourceScopes: GraphTypes.dataSourceScopes = {
	none: 0,
	allTenantMailboxes: 1,
	allTenantSites: 2,
	allCaseCustodians: 4,
	allCaseNoncustodialDataSources: 8,
	unknownFutureValue: 16,
}

/** exportCriteria types */
export const exportCriteria: GraphTypes.exportCriteria = {
	searchHits: 1,
	partiallyIndexed: 2,
	unknownFutureValue: 4,
}

/** exportFileStructure types */
export const exportFileStructure: GraphTypes.exportFileStructure = {
	none: 0,
	directory: 1,
	pst: 2,
	unknownFutureValue: 3,
}

/** exportFormat types */
export const exportFormat: GraphTypes.exportFormat = {
	pst: 0,
	msg: 1,
	eml: 2,
	unknownFutureValue: 3,
}

/** exportLocation types */
export const exportLocation: GraphTypes.exportLocation = {
	responsiveLocations: 1,
	nonresponsiveLocations: 2,
	unknownFutureValue: 4,
}

/** exportOptions types */
export const exportOptions: GraphTypes.exportOptions = {
	originalFiles: 1,
	text: 2,
	pdfReplacement: 4,
	tags: 16,
	unknownFutureValue: 32,
}

/** purgeAreas types */
export const purgeAreas: GraphTypes.purgeAreas = {
	mailboxes: 1,
	teamsMessages: 2,
	unknownFutureValue: 4,
}

/** purgeType types */
export const purgeType: GraphTypes.purgeType = {
	recoverable: 0,
	unknownFutureValue: 1,
	permanentlyDelete: 2,
}

/** sourceType types */
export const sourceType: GraphTypes.sourceType = {
	mailbox: 1,
	site: 2,
	unknownFutureValue: 4,
}

/** deploymentStatus types */
export const deploymentStatus: GraphTypes.deploymentStatus = {
	upToDate: 1,
	outdated: 2,
	updating: 3,
	updateFailed: 4,
	notConfigured: 5,
	unreachable: 6,
	disconnected: 7,
	startFailure: 8,
	syncing: 9,
	unknownFutureValue: 10,
}

/** healthIssueSeverity types */
export const healthIssueSeverity: GraphTypes.healthIssueSeverity = {
	low: 1,
	medium: 2,
	high: 3,
	unknownFutureValue: 4,
}

/** healthIssueStatus types */
export const healthIssueStatus: GraphTypes.healthIssueStatus = {
	open: 1,
	closed: 2,
	suppressed: 3,
	unknownFutureValue: 4,
}

/** healthIssueType types */
export const healthIssueType: GraphTypes.healthIssueType = {
	sensor: 1,
	global: 2,
	unknownFutureValue: 3,
}

/** sensorHealthStatus types */
export const sensorHealthStatus: GraphTypes.sensorHealthStatus = {
	healthy: 1,
	notHealthyLow: 2,
	notHealthyMedium: 3,
	notHealthyHigh: 4,
	unknownFutureValue: 5,
}

/** sensorType types */
export const sensorType: GraphTypes.sensorType = {
	adConnectIntegrated: 1,
	adcsIntegrated: 2,
	adfsIntegrated: 3,
	domainControllerIntegrated: 4,
	domainControllerStandalone: 5,
	unknownFutureValue: 6,
}

/** behaviorDuringRetentionPeriod types */
export const behaviorDuringRetentionPeriod: GraphTypes.behaviorDuringRetentionPeriod = {
	doNotRetain: 0,
	retain: 1,
	retainAsRecord: 2,
	retainAsRegulatoryRecord: 3,
	unknownFutureValue: 4,
}

/** alertClassification types */
export const alertClassification: GraphTypes.alertClassification = {
	unknown: 0,
	falsePositive: 10,
	truePositive: 20,
	informationalExpectedActivity: 30,
	unknownFutureValue: 39,
}

/** alertDetermination types */
export const alertDetermination: GraphTypes.alertDetermination = {
	unknown: 0,
	apt: 10,
	malware: 20,
	securityPersonnel: 30,
	securityTesting: 40,
	unwantedSoftware: 50,
	other: 60,
	multiStagedAttack: 70,
	compromisedAccount: 80,
	phishing: 90,
	maliciousUserActivity: 100,
	notMalicious: 110,
	notEnoughDataToValidate: 120,
	confirmedActivity: 130,
	lineOfBusinessApplication: 140,
	unknownFutureValue: 149,
}

/** containerPortProtocol types */
export const containerPortProtocol: GraphTypes.containerPortProtocol = {
	udp: 0,
	tcp: 1,
	sctp: 2,
	unknownFutureValue: 3,
}

/** defenderAvStatus types */
export const defenderAvStatus: GraphTypes.defenderAvStatus = {
	notReporting: 0,
	disabled: 1,
	notUpdated: 2,
	updated: 3,
	unknown: 4,
	notSupported: 1000,
	unknownFutureValue: 1023,
}

/** detectionSource types */
export const detectionSource: GraphTypes.detectionSource = {
	unknown: 0,
	microsoftDefenderForEndpoint: 1,
	antivirus: 2,
	smartScreen: 4,
	customTi: 8,
	microsoftDefenderForOffice365: 512,
	automatedInvestigation: 1024,
	microsoftThreatExperts: 2048,
	customDetection: 4096,
	microsoftDefenderForIdentity: 8192,
	cloudAppSecurity: 16384,
	microsoft365Defender: 32768,
	azureAdIdentityProtection: 65536,
	manual: 262144,
	microsoftDataLossPrevention: 524288,
	appGovernancePolicy: 1048576,
	appGovernanceDetection: 2097152,
	unknownFutureValue: 4194303,
	microsoftDefenderForCloud: 4194304,
	microsoftDefenderForIoT: 1073741833,
	microsoftDefenderForServers: 1073741834,
	microsoftDefenderForStorage: 1073741835,
	microsoftDefenderForDNS: 1073741836,
	microsoftDefenderForDatabases: 1073741837,
	microsoftDefenderForContainers: 1073741838,
	microsoftDefenderForNetwork: 1073741839,
	microsoftDefenderForAppService: 1073741840,
	microsoftDefenderForKeyVault: 1073741841,
	microsoftDefenderForResourceManager: 1073741842,
	microsoftDefenderForApiManagement: 1073741843,
	nrtAlerts: 1073741844,
	scheduledAlerts: 1073741845,
	microsoftDefenderThreatIntelligenceAnalytics: 1073741846,
	builtInMl: 1073741847,
	microsoftInsiderRiskManagement: 1073741848,
	microsoftSentinel: 268435456,
}

/** detectionStatus types */
export const detectionStatus: GraphTypes.detectionStatus = {
	detected: 0,
	blocked: 1,
	prevented: 2,
	unknownFutureValue: 31,
}

/** deviceHealthStatus types */
export const deviceHealthStatus: GraphTypes.deviceHealthStatus = {
	active: 0,
	inactive: 1,
	impairedCommunication: 2,
	noSensorData: 3,
	noSensorDataImpairedCommunication: 4,
	unknown: 5,
	unknownFutureValue: 31,
}

/** deviceRiskScore types */
export const deviceRiskScore: GraphTypes.deviceRiskScore = {
	none: 0,
	informational: 5,
	low: 10,
	medium: 20,
	high: 30,
	unknownFutureValue: 31,
}

/** evidenceRemediationStatus types */
export const evidenceRemediationStatus: GraphTypes.evidenceRemediationStatus = {
	none: 0,
	remediated: 1,
	prevented: 2,
	blocked: 3,
	notFound: 4,
	unknownFutureValue: 5,
	active: 6,
	pendingApproval: 7,
	declined: 8,
	unremediated: 9,
	running: 10,
	partiallyRemediated: 11,
}

/** evidenceRole types */
export const evidenceRole: GraphTypes.evidenceRole = {
	unknown: 0,
	contextual: 1,
	scanned: 2,
	source: 3,
	destination: 4,
	created: 5,
	added: 6,
	compromised: 7,
	edited: 8,
	attacked: 9,
	attacker: 10,
	commandAndControl: 11,
	loaded: 12,
	suspicious: 13,
	policyViolator: 14,
	unknownFutureValue: 31,
}

/** evidenceVerdict types */
export const evidenceVerdict: GraphTypes.evidenceVerdict = {
	unknown: 0,
	suspicious: 1,
	malicious: 2,
	noThreatsFound: 3,
	unknownFutureValue: 4,
}

/** fileHashAlgorithm types */
export const fileHashAlgorithm: GraphTypes.fileHashAlgorithm = {
	unknown: 0,
	md5: 1,
	sha1: 2,
	sha256: 3,
	sha256ac: 4,
	unknownFutureValue: 5,
}

/** googleCloudLocationType types */
export const googleCloudLocationType: GraphTypes.googleCloudLocationType = {
	unknown: 0,
	regional: 1,
	zonal: 2,
	global: 3,
	unknownFutureValue: 31,
}

/** incidentStatus types */
export const incidentStatus: GraphTypes.incidentStatus = {
	active: 1,
	resolved: 2,
	inProgress: 4,
	redirected: 64,
	unknownFutureValue: 127,
	awaitingAction: 128,
}

/** ioTDeviceImportanceType types */
export const ioTDeviceImportanceType: GraphTypes.ioTDeviceImportanceType = {
	unknown: 0,
	low: 1,
	normal: 2,
	high: 3,
	unknownFutureValue: 4,
}

/** kubernetesPlatform types */
export const kubernetesPlatform: GraphTypes.kubernetesPlatform = {
	unknown: 0,
	aks: 1,
	eks: 2,
	gke: 3,
	arc: 4,
	unknownFutureValue: 5,
}

/** kubernetesServiceType types */
export const kubernetesServiceType: GraphTypes.kubernetesServiceType = {
	unknown: 0,
	clusterIP: 1,
	externalName: 2,
	nodePort: 3,
	loadBalancer: 4,
	unknownFutureValue: 31,
}

/** mailboxConfigurationType types */
export const mailboxConfigurationType: GraphTypes.mailboxConfigurationType = {
	mailForwardingRule: 0,
	owaSettings: 1,
	ewsSettings: 2,
	mailDelegation: 3,
	userInboxRule: 4,
	unknownFutureValue: 31,
}

/** onboardingStatus types */
export const onboardingStatus: GraphTypes.onboardingStatus = {
	insufficientInfo: 0,
	onboarded: 1,
	canBeOnboarded: 2,
	unsupported: 3,
	unknownFutureValue: 31,
}

/** protocolType types */
export const protocolType: GraphTypes.protocolType = {
	tcp: 0,
	udp: 1,
	unknownFutureValue: 2,
}

/** servicePrincipalType types */
export const servicePrincipalType: GraphTypes.servicePrincipalType = {
	unknown: 0,
	application: 1,
	managedIdentity: 2,
	legacy: 3,
	unknownFutureValue: 4,
}

/** serviceSource types */
export const serviceSource: GraphTypes.serviceSource = {
	unknown: 0,
	microsoftDefenderForEndpoint: 1,
	microsoftDefenderForIdentity: 2,
	microsoftDefenderForCloudApps: 4,
	microsoftDefenderForOffice365: 8,
	microsoft365Defender: 16,
	azureAdIdentityProtection: 32,
	microsoftAppGovernance: 64,
	dataLossPrevention: 128,
	unknownFutureValue: 255,
	microsoftDefenderForCloud: 256,
	microsoftSentinel: 512,
	microsoftInsiderRiskManagement: 1024,
}

/** vmCloudProvider types */
export const vmCloudProvider: GraphTypes.vmCloudProvider = {
	unknown: 0,
	azure: 1,
	unknownFutureValue: 15,
}

/** actionAfterRetentionPeriod types */
export const actionAfterRetentionPeriod: GraphTypes.actionAfterRetentionPeriod = {
	none: 0,
	delete: 1,
	startDispositionReview: 2,
	relabel: 3,
	unknownFutureValue: 4,
}

/** defaultRecordBehavior types */
export const defaultRecordBehavior: GraphTypes.defaultRecordBehavior = {
	startLocked: 0,
	startUnlocked: 1,
	unknownFutureValue: 2,
}

/** eventPropagationStatus types */
export const eventPropagationStatus: GraphTypes.eventPropagationStatus = {
	none: 0,
	inProcessing: 1,
	failed: 2,
	success: 3,
	unknownFutureValue: 4,
}

/** eventStatusType types */
export const eventStatusType: GraphTypes.eventStatusType = {
	pending: 0,
	error: 1,
	success: 2,
	notAvaliable: 3,
	unknownFutureValue: 4,
}

/** queryType types */
export const queryType: GraphTypes.queryType = {
	files: 0,
	messages: 1,
	unknownFutureValue: 2,
}

/** retentionTrigger types */
export const retentionTrigger: GraphTypes.retentionTrigger = {
	dateLabeled: 0,
	dateCreated: 1,
	dateModified: 2,
	dateOfEvent: 3,
	unknownFutureValue: 4,
}

/** contentFormat types */
export const contentFormat: GraphTypes.contentFormat = {
	text: 0,
	html: 1,
	markdown: 2,
	unknownFutureValue: 3,
}

/** hostPortProtocol types */
export const hostPortProtocol: GraphTypes.hostPortProtocol = {
	tcp: 0,
	udp: 1,
	unknownFutureValue: 2,
}

/** hostPortStatus types */
export const hostPortStatus: GraphTypes.hostPortStatus = {
	open: 0,
	filtered: 1,
	closed: 2,
	unknownFutureValue: 3,
}

/** hostReputationClassification types */
export const hostReputationClassification: GraphTypes.hostReputationClassification = {
	unknown: 0,
	neutral: 1,
	suspicious: 2,
	malicious: 3,
	unknownFutureValue: 4,
}

/** hostReputationRuleSeverity types */
export const hostReputationRuleSeverity: GraphTypes.hostReputationRuleSeverity = {
	unknown: 0,
	low: 1,
	medium: 2,
	high: 3,
	unknownFutureValue: 4,
}

/** indicatorSource types */
export const indicatorSource: GraphTypes.indicatorSource = {
	microsoft: 0,
	osint: 1,
	public: 2,
	unknownFutureValue: 3,
}

/** intelligenceProfileKind types */
export const intelligenceProfileKind: GraphTypes.intelligenceProfileKind = {
	actor: 0,
	tool: 1,
	unknownFutureValue: 2,
}

/** vulnerabilitySeverity types */
export const vulnerabilitySeverity: GraphTypes.vulnerabilitySeverity = {
	none: 0,
	low: 1,
	medium: 2,
	high: 3,
	critical: 4,
	unknownFutureValue: 5,
}

/** whoisDomainStatus types */
export const whoisDomainStatus: GraphTypes.whoisDomainStatus = {
	clientDeleteProhibited: 0,
	clientHold: 1,
	clientRenewProhibited: 2,
	clientTransferProhibited: 3,
	clientUpdateProhibited: 4,
	unknownFutureValue: 5,
}

/** relationType types */
export const relationType: GraphTypes.relationType = {
	pin: 0,
	reuse: 1,
	unknownFutureValue: 2,
}

/** termGroupScope types */
export const termGroupScope: GraphTypes.termGroupScope = {
	global: 0,
	system: 1,
	siteCollection: 2,
	unknownFutureValue: 3,
}

/** audioCodec types */
export const audioCodec: GraphTypes.audioCodec = {
	unknown: 0,
	invalid: 1,
	cn: 2,
	pcma: 3,
	pcmu: 4,
	amrWide: 5,
	g722: 6,
	g7221: 7,
	g7221c: 8,
	g729: 9,
	multiChannelAudio: 10,
	muchv2: 11,
	opus: 12,
	satin: 13,
	satinFullband: 14,
	rtAudio8: 15,
	rtAudio16: 16,
	silk: 17,
	silkNarrow: 18,
	silkWide: 19,
	siren: 20,
	xmsRta: 21,
	unknownFutureValue: 22,
}

/** callType types */
export const callType: GraphTypes.callType = {
	unknown: 0,
	groupCall: 1,
	peerToPeer: 2,
	unknownFutureValue: 3,
}

/** clientPlatform types */
export const clientPlatform: GraphTypes.clientPlatform = {
	unknown: 0,
	windows: 1,
	macOS: 2,
	iOS: 3,
	android: 4,
	web: 5,
	ipPhone: 6,
	roomSystem: 7,
	surfaceHub: 8,
	holoLens: 9,
	unknownFutureValue: 10,
}

/** failureStage types */
export const failureStage: GraphTypes.failureStage = {
	unknown: 0,
	callSetup: 1,
	midcall: 2,
	unknownFutureValue: 3,
}

/** mediaStreamDirection types */
export const mediaStreamDirection: GraphTypes.mediaStreamDirection = {
	callerToCallee: 0,
	calleeToCaller: 1,
}

/** networkConnectionType types */
export const networkConnectionType: GraphTypes.networkConnectionType = {
	unknown: 0,
	wired: 1,
	wifi: 2,
	mobile: 3,
	tunnel: 4,
	unknownFutureValue: 5,
}

/** networkTransportProtocol types */
export const networkTransportProtocol: GraphTypes.networkTransportProtocol = {
	unknown: 0,
	udp: 1,
	tcp: 2,
	unknownFutureValue: 3,
}

/** productFamily types */
export const productFamily: GraphTypes.productFamily = {
	unknown: 0,
	teams: 1,
	skypeForBusiness: 2,
	lync: 3,
	unknownFutureValue: 4,
	azureCommunicationServices: 5,
}

/** pstnCallDurationSource types */
export const pstnCallDurationSource: GraphTypes.pstnCallDurationSource = {
	microsoft: 0,
	operator: 1,
}

/** serviceRole types */
export const serviceRole: GraphTypes.serviceRole = {
	unknown: 0,
	customBot: 1,
	skypeForBusinessMicrosoftTeamsGateway: 2,
	skypeForBusinessAudioVideoMcu: 3,
	skypeForBusinessApplicationSharingMcu: 4,
	skypeForBusinessCallQueues: 5,
	skypeForBusinessAutoAttendant: 6,
	mediationServer: 7,
	mediationServerCloudConnectorEdition: 8,
	exchangeUnifiedMessagingService: 9,
	mediaController: 10,
	conferencingAnnouncementService: 11,
	conferencingAttendant: 12,
	audioTeleconferencerController: 13,
	skypeForBusinessUnifiedCommunicationApplicationPlatform: 14,
	responseGroupServiceAnnouncementService: 15,
	gateway: 16,
	skypeTranslator: 17,
	skypeForBusinessAttendant: 18,
	responseGroupService: 19,
	voicemail: 20,
	unknownFutureValue: 21,
}

/** userFeedbackRating types */
export const userFeedbackRating: GraphTypes.userFeedbackRating = {
	notRated: 0,
	bad: 1,
	poor: 2,
	fair: 3,
	good: 4,
	excellent: 5,
	unknownFutureValue: 6,
}

/** videoCodec types */
export const videoCodec: GraphTypes.videoCodec = {
	unknown: 0,
	invalid: 1,
	av1: 2,
	h263: 3,
	h264: 4,
	h264s: 5,
	h264uc: 6,
	h265: 7,
	rtvc1: 8,
	rtVideo: 9,
	xrtvc1: 10,
	unknownFutureValue: 11,
}

/** wifiBand types */
export const wifiBand: GraphTypes.wifiBand = {
	unknown: 0,
	frequency24GHz: 1,
	frequency50GHz: 2,
	frequency60GHz: 3,
	unknownFutureValue: 4,
}

/** wifiRadioType types */
export const wifiRadioType: GraphTypes.wifiRadioType = {
	unknown: 0,
	wifi80211a: 1,
	wifi80211b: 2,
	wifi80211g: 3,
	wifi80211n: 4,
	wifi80211ac: 5,
	wifi80211ax: 6,
	unknownFutureValue: 7,
}

/** attributeSet types */
export const attributeSet: GraphTypes.attributeSet = {
	full: 1,
	basic: 2,
	unknownFutureValue: 3,
}

/** billingPeriod types */
export const billingPeriod: GraphTypes.billingPeriod = {
	current: 1,
	last: 2,
	unknownFutureValue: 3,
}

/** answerState types */
export const answerState: GraphTypes.answerState = {
	published: 0,
	draft: 1,
	excluded: 2,
	unknownFutureValue: 3,
}

/** accessType types */
export const accessType: GraphTypes.accessType = {
	grant: 1,
	deny: 2,
	unknownFutureValue: 3,
}

/** aclType types */
export const aclType: GraphTypes.aclType = {
	user: 1,
	group: 2,
	everyone: 3,
	everyoneExceptGuests: 4,
	externalGroup: 5,
	unknownFutureValue: 6,
}

/** connectionOperationStatus types */
export const connectionOperationStatus: GraphTypes.connectionOperationStatus = {
	unspecified: 0,
	inprogress: 1,
	completed: 2,
	failed: 3,
	unknownFutureValue: 4,
}

/** connectionState types */
export const connectionState: GraphTypes.connectionState = {
	draft: 1,
	ready: 2,
	obsolete: 3,
	limitExceeded: 4,
	unknownFutureValue: 5,
}

/** externalActivityType types */
export const externalActivityType: GraphTypes.externalActivityType = {
	viewed: 1,
	modified: 2,
	created: 3,
	commented: 4,
	unknownFutureValue: 5,
}

/** externalItemContentType types */
export const externalItemContentType: GraphTypes.externalItemContentType = {
	text: 1,
	html: 2,
	unknownFutureValue: 3,
}

/** identityType types */
export const identityType: GraphTypes.identityType = {
	user: 1,
	group: 2,
	externalGroup: 3,
	unknownFutureValue: 4,
}

/** label types */
export const label: GraphTypes.label = {
	title: 0,
	url: 1,
	createdBy: 2,
	lastModifiedBy: 3,
	authors: 4,
	createdDateTime: 5,
	lastModifiedDateTime: 6,
	fileName: 7,
	fileExtension: 8,
	unknownFutureValue: 12,
	iconUrl: 15,
}

/** propertyType types */
export const propertyType: GraphTypes.propertyType = {
	string: 0,
	int64: 1,
	double: 2,
	dateTime: 3,
	boolean: 4,
	stringCollection: 5,
	int64Collection: 6,
	doubleCollection: 7,
	dateTimeCollection: 8,
	unknownFutureValue: 9,
}

/** ruleOperation types */
export const ruleOperation: GraphTypes.ruleOperation = {
	null: 0,
	equals: 1,
	notEquals: 2,
	contains: 3,
	notContains: 4,
	lessThan: 5,
	greaterThan: 6,
	startsWith: 7,
	unknownFutureValue: 8,
}
