import { IMapper } from "gd-sprest-def/lib/mapperv2.d";
import { RequestType } from "../utils";

/**
 * Mapper for the v2 api.
 */
export const MapperV2: IMapper = {
	_case: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	aadUserConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		user: {
			returnType: "user"
		},
	},
	accessPackage: {
		properties: [
			"accessPackagesIncompatibleWith|accessPackages|/[Name]|accessPackage", "assignmentPolicies|accessPackageAssignmentPolicys|/[Name]|accessPackageAssignmentPolicy", "incompatibleAccessPackages|accessPackages|/[Name]|accessPackage", "incompatibleGroups|groups|/[Name]|group", "resourceRoleScopes|accessPackageResourceRoleScopes|/[Name]|accessPackageResourceRoleScope"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackagesIncompatibleWith: {
			requestType: RequestType.Get,
			returnType: "accessPackages"
		},
		assignmentPolicies: {
			requestType: RequestType.Get,
			returnType: "accessPackageAssignmentPolicys"
		},
		catalog: {
			returnType: "accessPackageCatalog"
		},
		incompatibleAccessPackages: {
			requestType: RequestType.Get,
			returnType: "accessPackages"
		},
		incompatibleGroups: {
			requestType: RequestType.Get,
			returnType: "groups"
		},
		resourceRoleScopes: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceRoleScopes"
		},
		getApplicablePolicyRequirements: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.accessPackageAssignmentRequestRequirements[]"
		},
	},
	accessPackages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackage: {
			returnType: "accessPackage"
		},
		assignmentPolicy: {
			returnType: "accessPackageAssignmentPolicy"
		},
		target: {
			returnType: "accessPackageSubject"
		},
		reprocess: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	accessPackageAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignmentPolicy: {
		properties: [
			"customExtensionStageSettings|customExtensionStageSettings|/[Name]|customExtensionStageSetting", "questions|accessPackageQuestions|/[Name]|accessPackageQuestion"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackage: {
			returnType: "accessPackage"
		},
		catalog: {
			returnType: "accessPackageCatalog"
		},
		customExtensionStageSettings: {
			requestType: RequestType.Get,
			returnType: "customExtensionStageSettings"
		},
		questions: {
			requestType: RequestType.Get,
			returnType: "accessPackageQuestions"
		},
	},
	accessPackageAssignmentPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignmentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackage: {
			returnType: "accessPackage"
		},
		assignment: {
			returnType: "accessPackageAssignment"
		},
		requestor: {
			returnType: "accessPackageSubject"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
		reprocess: {
			requestType: RequestType.PostWithArgsInBody,
		},
		resume: {
			argNames: ["source", "type", "data"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	accessPackageAssignmentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignmentRequestWorkflowExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageAssignmentWorkflowExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageCatalog: {
		properties: [
			"accessPackages|accessPackages|/[Name]|accessPackage", "customWorkflowExtensions|customCalloutExtensions|/[Name]|customCalloutExtension", "resourceRoles|accessPackageResourceRoles|/[Name]|accessPackageResourceRole", "resources|accessPackageResources|/[Name]|accessPackageResource", "resourceScopes|accessPackageResourceScopes|/[Name]|accessPackageResourceScope"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackages: {
			requestType: RequestType.Get,
			returnType: "accessPackages"
		},
		customWorkflowExtensions: {
			requestType: RequestType.Get,
			returnType: "customCalloutExtensions"
		},
		resourceRoles: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceRoles"
		},
		resources: {
			requestType: RequestType.Get,
			returnType: "accessPackageResources"
		},
		resourceScopes: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceScopes"
		},
	},
	accessPackageCatalogs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageMultipleChoiceQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageQuestions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResource: {
		properties: [
			"roles|accessPackageResourceRoles|/[Name]|accessPackageResourceRole", "scopes|accessPackageResourceScopes|/[Name]|accessPackageResourceScope"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		environment: {
			returnType: "accessPackageResourceEnvironment"
		},
		roles: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceRoles"
		},
		scopes: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceScopes"
		},
	},
	accessPackageResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceEnvironment: {
		properties: [
			"resources|accessPackageResources|/[Name]|accessPackageResource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resources: {
			requestType: RequestType.Get,
			returnType: "accessPackageResources"
		},
	},
	accessPackageResourceEnvironments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		catalog: {
			returnType: "accessPackageCatalog"
		},
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceRole: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRoles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceRoleScope: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		role: {
			returnType: "accessPackageResourceRole"
		},
		scope: {
			returnType: "accessPackageResourceScope"
		},
	},
	accessPackageResourceRoleScopes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceScope: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceScopes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageSubject: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connectedOrganization: {
			returnType: "connectedOrganization"
		},
	},
	accessPackageTextInputQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessReviewHistoryDefinition: {
		properties: [
			"instances|accessReviewHistoryInstances|/[Name]|accessReviewHistoryInstance"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		instances: {
			requestType: RequestType.Get,
			returnType: "accessReviewHistoryInstances"
		},
	},
	accessReviewHistoryDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewHistoryInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		generateDownloadUri: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.accessReviewHistoryInstance"
		},
	},
	accessReviewHistoryInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewInstance: {
		properties: [
			"contactedReviewers|accessReviewReviewers|/[Name]|accessReviewReviewer", "decisions|accessReviewInstanceDecisionItems|/[Name]|accessReviewInstanceDecisionItem", "stages|accessReviewStages|/[Name]|accessReviewStage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		contactedReviewers: {
			requestType: RequestType.Get,
			returnType: "accessReviewReviewers"
		},
		decisions: {
			requestType: RequestType.Get,
			returnType: "accessReviewInstanceDecisionItems"
		},
		stages: {
			requestType: RequestType.Get,
			returnType: "accessReviewStages"
		},
		acceptRecommendations: {
			requestType: RequestType.PostWithArgsInBody,
		},
		applyDecisions: {
			requestType: RequestType.PostWithArgsInBody,
		},
		batchRecordDecisions: {
			argNames: ["decision", "justification", "principalId", "resourceId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		resetDecisions: {
			requestType: RequestType.PostWithArgsInBody,
		},
		sendReminder: {
			requestType: RequestType.PostWithArgsInBody,
		},
		stop: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	accessReviewInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewInstanceDecisionItem: {
		properties: [
			"insights|governanceInsights|/[Name]|governanceInsight"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		insights: {
			requestType: RequestType.Get,
			returnType: "governanceInsights"
		},
	},
	accessReviewInstanceDecisionItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewReviewer: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessReviewReviewers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewScheduleDefinition: {
		properties: [
			"instances|accessReviewInstances|/[Name]|accessReviewInstance"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		instances: {
			requestType: RequestType.Get,
			returnType: "accessReviewInstances"
		},
		stop: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	accessReviewScheduleDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewSet: {
		properties: [
			"definitions|accessReviewScheduleDefinitions|/[Name]|accessReviewScheduleDefinition", "historyDefinitions|accessReviewHistoryDefinitions|/[Name]|accessReviewHistoryDefinition"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		definitions: {
			requestType: RequestType.Get,
			returnType: "accessReviewScheduleDefinitions"
		},
		historyDefinitions: {
			requestType: RequestType.Get,
			returnType: "accessReviewHistoryDefinitions"
		},
	},
	accessReviewStage: {
		properties: [
			"decisions|accessReviewInstanceDecisionItems|/[Name]|accessReviewInstanceDecisionItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		decisions: {
			requestType: RequestType.Get,
			returnType: "accessReviewInstanceDecisionItems"
		},
		stop: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	accessReviewStages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	acronym: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	activityBasedTimeoutPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	activityBasedTimeoutPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	activityHistoryItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activity: {
			returnType: "userActivity"
		},
	},
	activityHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	addLargeGalleryViewOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	admin: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		edge: {
			returnType: "edge"
		},
		sharepoint: {
			returnType: "sharepoint"
		},
		microsoft365Apps: {
			returnType: "adminMicrosoft365Apps"
		},
		serviceAnnouncement: {
			returnType: "serviceAnnouncement"
		},
		reportSettings: {
			returnType: "adminReportSettings"
		},
		people: {
			returnType: "peopleAdminSettings"
		},
	},
	adminConsentRequestPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	adminMicrosoft365Apps: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		installationOptions: {
			returnType: "m365AppsInstallationOptions"
		},
	},
	adminReportSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	administrativeUnit: {
		properties: [
			"members|directoryObjects|/[Name]|directoryObject", "scopedRoleMembers|scopedRoleMemberships|/[Name]|scopedRoleMembership", "extensions|extensions|/[Name]|extension"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		members: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		scopedRoleMembers: {
			requestType: RequestType.Get,
			returnType: "scopedRoleMemberships"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
	},
	administrativeUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	agreement: {
		properties: [
			"acceptances|agreementAcceptances|/[Name]|agreementAcceptance", "files|agreementFileLocalizations|/[Name]|agreementFileLocalization"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		acceptances: {
			requestType: RequestType.Get,
			returnType: "agreementAcceptances"
		},
		file: {
			returnType: "agreementFile"
		},
		files: {
			requestType: RequestType.Get,
			returnType: "agreementFileLocalizations"
		},
	},
	agreements: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	agreementAcceptance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementAcceptances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	agreementFile: {
		properties: [
			"localizations|agreementFileLocalizations|/[Name]|agreementFileLocalization"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizations: {
			requestType: RequestType.Get,
			returnType: "agreementFileLocalizations"
		},
	},
	agreementFileLocalization: {
		properties: [
			"versions|agreementFileVersions|/[Name]|agreementFileVersion"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		versions: {
			requestType: RequestType.Get,
			returnType: "agreementFileVersions"
		},
	},
	agreementFileLocalizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	agreementFileProperties: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementFileVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementFileVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	alert: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	alerts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	allowedValue: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	allowedValues: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	androidCompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidCustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidGeneralDeviceConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidLobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidManagedAppProtection: {
		properties: [
			"apps|managedMobileApps|/[Name]|managedMobileApp"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		apps: {
			requestType: RequestType.Get,
			returnType: "managedMobileApps"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	androidManagedAppProtections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	androidManagedAppRegistration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidStoreApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileCompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileCustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileGeneralDeviceConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	anonymousGuestConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appCatalogs: {
		properties: [
			"teamsApps|teamsApps|/[Name]|teamsApp"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApps: {
			requestType: RequestType.Get,
			returnType: "teamsApps"
		},
	},
	appConsentApprovalRoute: {
		properties: [
			"appConsentRequests|appConsentRequests|/[Name]|appConsentRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appConsentRequests: {
			requestType: RequestType.Get,
			returnType: "appConsentRequests"
		},
	},
	appConsentRequest: {
		properties: [
			"userConsentRequests|userConsentRequests|/[Name]|userConsentRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		userConsentRequests: {
			requestType: RequestType.Get,
			returnType: "userConsentRequests"
		},
	},
	appConsentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appLogCollectionRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createDownloadUrl: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.appLogCollectionDownloadDetails"
		},
	},
	appLogCollectionRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appManagementPolicy: {
		properties: [
			"appliesTo|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appliesTo: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	appManagementPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appRoleAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appRoleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appScope: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appleDeviceFeaturesConfigurationBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appleManagedIdentityProvider: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	applePushNotificationCertificate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		downloadApplePushNotificationCertificateSigningRequest: {
			requestType: RequestType.Get,
			returnType: "string"
		},
	},
	application: {
		properties: [
			"appManagementPolicies|appManagementPolicys|/[Name]|appManagementPolicy", "extensionProperties|extensionPropertys|/[Name]|extensionProperty", "federatedIdentityCredentials|federatedIdentityCredentials|/[Name]|federatedIdentityCredential", "homeRealmDiscoveryPolicies|homeRealmDiscoveryPolicys|/[Name]|homeRealmDiscoveryPolicy", "owners|directoryObjects|/[Name]|directoryObject", "tokenIssuancePolicies|tokenIssuancePolicys|/[Name]|tokenIssuancePolicy", "tokenLifetimePolicies|tokenLifetimePolicys|/[Name]|tokenLifetimePolicy"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appManagementPolicies: {
			requestType: RequestType.Get,
			returnType: "appManagementPolicys"
		},
		createdOnBehalfOf: {
			returnType: "directoryObject"
		},
		extensionProperties: {
			requestType: RequestType.Get,
			returnType: "extensionPropertys"
		},
		federatedIdentityCredentials: {
			requestType: RequestType.Get,
			returnType: "federatedIdentityCredentials"
		},
		homeRealmDiscoveryPolicies: {
			requestType: RequestType.Get,
			returnType: "homeRealmDiscoveryPolicys"
		},
		owners: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		tokenIssuancePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenIssuancePolicys"
		},
		tokenLifetimePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenLifetimePolicys"
		},
		synchronization: {
			returnType: "synchronization"
		},
		setVerifiedPublisher: {
			argNames: ["verifiedPublisherId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unsetVerifiedPublisher: {
			requestType: RequestType.PostWithArgsInBody,
		},
		addKey: {
			argNames: ["keyCredential", "passwordCredential", "proof"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.keyCredential"
		},
		addPassword: {
			argNames: ["passwordCredential"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.passwordCredential"
		},
		removeKey: {
			argNames: ["keyId", "proof"],
			requestType: RequestType.PostWithArgsInBody,
		},
		removePassword: {
			argNames: ["keyId"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	applicationTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		instantiate: {
			argNames: ["displayName", "serviceManagementReference"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.applicationServicePrincipal"
		},
	},
	approval: {
		properties: [
			"stages|approvalStages|/[Name]|approvalStage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		stages: {
			requestType: RequestType.Get,
			returnType: "approvalStages"
		},
	},
	approvals: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	approvalStage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	approvalStages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	article: {
		properties: [
			"indicators|articleIndicators|/[Name]|articleIndicator"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		indicators: {
			requestType: RequestType.Get,
			returnType: "articleIndicators"
		},
	},
	articleIndicator: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	artifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	associatedTeamInfo: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	associatedTeamInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachmentBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachmentBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachmentSession: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachmentSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attackSimulationOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attackSimulationOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attackSimulationRoot: {
		properties: [
			"endUserNotifications|endUserNotifications|/[Name]|endUserNotification", "landingPages|landingPages|/[Name]|landingPage", "loginPages|loginPages|/[Name]|loginPage", "operations|attackSimulationOperations|/[Name]|attackSimulationOperation", "payloads|payloads|/[Name]|payload", "simulationAutomations|simulationAutomations|/[Name]|simulationAutomation", "simulations|simulations|/[Name]|simulation", "trainings|trainings|/[Name]|training"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		endUserNotifications: {
			requestType: RequestType.Get,
			returnType: "endUserNotifications"
		},
		landingPages: {
			requestType: RequestType.Get,
			returnType: "landingPages"
		},
		loginPages: {
			requestType: RequestType.Get,
			returnType: "loginPages"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "attackSimulationOperations"
		},
		payloads: {
			requestType: RequestType.Get,
			returnType: "payloads"
		},
		simulationAutomations: {
			requestType: RequestType.Get,
			returnType: "simulationAutomations"
		},
		simulations: {
			requestType: RequestType.Get,
			returnType: "simulations"
		},
		trainings: {
			requestType: RequestType.Get,
			returnType: "trainings"
		},
	},
	attendanceRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attendanceRecords: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attributeMappingFunctionSchema: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attributeSet: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attributeSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	audioRoutingGroup: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	audioRoutingGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	auditEvent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	auditEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	auditLogRoot: {
		properties: [
			"directoryAudits|directoryAudits|/[Name]|directoryAudit", "provisioning|provisioningObjectSummarys|/[Name]|provisioningObjectSummary", "signIns|signIns|/[Name]|signIn"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directoryAudits: {
			requestType: RequestType.Get,
			returnType: "directoryAudits"
		},
		provisioning: {
			requestType: RequestType.Get,
			returnType: "provisioningObjectSummarys"
		},
		signIns: {
			requestType: RequestType.Get,
			returnType: "signIns"
		},
	},
	authentication: {
		properties: [
			"emailMethods|emailAuthenticationMethods|/[Name]|emailAuthenticationMethod", "fido2Methods|fido2AuthenticationMethods|/[Name]|fido2AuthenticationMethod", "methods|authenticationMethods|/[Name]|authenticationMethod", "microsoftAuthenticatorMethods|microsoftAuthenticatorAuthenticationMethods|/[Name]|microsoftAuthenticatorAuthenticationMethod", "operations|longRunningOperations|/[Name]|longRunningOperation", "passwordMethods|passwordAuthenticationMethods|/[Name]|passwordAuthenticationMethod", "phoneMethods|phoneAuthenticationMethods|/[Name]|phoneAuthenticationMethod", "softwareOathMethods|softwareOathAuthenticationMethods|/[Name]|softwareOathAuthenticationMethod", "temporaryAccessPassMethods|temporaryAccessPassAuthenticationMethods|/[Name]|temporaryAccessPassAuthenticationMethod", "windowsHelloForBusinessMethods|windowsHelloForBusinessAuthenticationMethods|/[Name]|windowsHelloForBusinessAuthenticationMethod"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		emailMethods: {
			requestType: RequestType.Get,
			returnType: "emailAuthenticationMethods"
		},
		fido2Methods: {
			requestType: RequestType.Get,
			returnType: "fido2AuthenticationMethods"
		},
		methods: {
			requestType: RequestType.Get,
			returnType: "authenticationMethods"
		},
		microsoftAuthenticatorMethods: {
			requestType: RequestType.Get,
			returnType: "microsoftAuthenticatorAuthenticationMethods"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "longRunningOperations"
		},
		passwordMethods: {
			requestType: RequestType.Get,
			returnType: "passwordAuthenticationMethods"
		},
		phoneMethods: {
			requestType: RequestType.Get,
			returnType: "phoneAuthenticationMethods"
		},
		softwareOathMethods: {
			requestType: RequestType.Get,
			returnType: "softwareOathAuthenticationMethods"
		},
		temporaryAccessPassMethods: {
			requestType: RequestType.Get,
			returnType: "temporaryAccessPassAuthenticationMethods"
		},
		windowsHelloForBusinessMethods: {
			requestType: RequestType.Get,
			returnType: "windowsHelloForBusinessAuthenticationMethods"
		},
	},
	authenticationCombinationConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationCombinationConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationConditionApplication: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationContextClassReference: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationContextClassReferences: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationEventListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationEventListeners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationEventsFlow: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationEventsFlows: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationFlowsPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resetPassword: {
			argNames: ["newPassword"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.passwordResetResponse"
		},
	},
	authenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodModeDetail: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodModeDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodTarget: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodsPolicy: {
		properties: [
			"authenticationMethodConfigurations|authenticationMethodConfigurations|/[Name]|authenticationMethodConfiguration"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationMethodConfigurations: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodConfigurations"
		},
	},
	authenticationMethodsRoot: {
		properties: [
			"userRegistrationDetails|userRegistrationDetailss|/[Name]|userRegistrationDetails"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		userRegistrationDetails: {
			requestType: RequestType.Get,
			returnType: "userRegistrationDetailss"
		},
		usersRegisteredByFeature: {
			argNames: ["includedUserTypes", "includedUserRoles"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.userRegistrationFeatureSummary"
		},
		usersRegisteredByMethod: {
			argNames: ["includedUserTypes", "includedUserRoles"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.userRegistrationMethodSummary"
		},
	},
	authenticationStrengthPolicy: {
		properties: [
			"combinationConfigurations|authenticationCombinationConfigurations|/[Name]|authenticationCombinationConfiguration"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		combinationConfigurations: {
			requestType: RequestType.Get,
			returnType: "authenticationCombinationConfigurations"
		},
		updateAllowedCombinations: {
			argNames: ["allowedCombinations"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.updateAllowedCombinationsResult"
		},
		usage: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.authenticationStrengthUsage"
		},
	},
	authenticationStrengthPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationStrengthRoot: {
		properties: [
			"authenticationMethodModes|authenticationMethodModeDetails|/[Name]|authenticationMethodModeDetail", "policies|authenticationStrengthPolicys|/[Name]|authenticationStrengthPolicy"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationMethodModes: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodModeDetails"
		},
		policies: {
			requestType: RequestType.Get,
			returnType: "authenticationStrengthPolicys"
		},
	},
	authoredNote: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authoredNotes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authorityTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authorizationPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	azureCommunicationServicesUserConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	azureUsage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billed: {
			returnType: "billedUsage"
		},
		unbilled: {
			returnType: "unbilledUsage"
		},
	},
	b2xIdentityUserFlow: {
		properties: [
			"identityProviders|identityProviders|/[Name]|identityProvider", "languages|userFlowLanguageConfigurations|/[Name]|userFlowLanguageConfiguration", "userAttributeAssignments|identityUserFlowAttributeAssignments|/[Name]|identityUserFlowAttributeAssignment", "userFlowIdentityProviders|identityProviderBases|/[Name]|identityProviderBase"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		identityProviders: {
			requestType: RequestType.Get,
			returnType: "identityProviders"
		},
		languages: {
			requestType: RequestType.Get,
			returnType: "userFlowLanguageConfigurations"
		},
		userAttributeAssignments: {
			requestType: RequestType.Get,
			returnType: "identityUserFlowAttributeAssignments"
		},
		userFlowIdentityProviders: {
			requestType: RequestType.Get,
			returnType: "identityProviderBases"
		},
	},
	b2xIdentityUserFlows: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	backupRestoreRoot: {
		properties: [
			"driveInclusionRules|driveProtectionRules|/[Name]|driveProtectionRule", "driveProtectionUnits|driveProtectionUnits|/[Name]|driveProtectionUnit", "exchangeProtectionPolicies|exchangeProtectionPolicys|/[Name]|exchangeProtectionPolicy", "exchangeRestoreSessions|exchangeRestoreSessions|/[Name]|exchangeRestoreSession", "mailboxInclusionRules|mailboxProtectionRules|/[Name]|mailboxProtectionRule", "mailboxProtectionUnits|mailboxProtectionUnits|/[Name]|mailboxProtectionUnit", "oneDriveForBusinessProtectionPolicies|oneDriveForBusinessProtectionPolicys|/[Name]|oneDriveForBusinessProtectionPolicy", "oneDriveForBusinessRestoreSessions|oneDriveForBusinessRestoreSessions|/[Name]|oneDriveForBusinessRestoreSession", "protectionPolicies|protectionPolicyBases|/[Name]|protectionPolicyBase", "protectionUnits|protectionUnitBases|/[Name]|protectionUnitBase", "restorePoints|restorePoints|/[Name]|restorePoint", "restoreSessions|restoreSessionBases|/[Name]|restoreSessionBase", "serviceApps|serviceApps|/[Name]|serviceApp", "sharePointProtectionPolicies|sharePointProtectionPolicys|/[Name]|sharePointProtectionPolicy", "sharePointRestoreSessions|sharePointRestoreSessions|/[Name]|sharePointRestoreSession", "siteInclusionRules|siteProtectionRules|/[Name]|siteProtectionRule", "siteProtectionUnits|siteProtectionUnits|/[Name]|siteProtectionUnit"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveInclusionRules: {
			requestType: RequestType.Get,
			returnType: "driveProtectionRules"
		},
		driveProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "driveProtectionUnits"
		},
		exchangeProtectionPolicies: {
			requestType: RequestType.Get,
			returnType: "exchangeProtectionPolicys"
		},
		exchangeRestoreSessions: {
			requestType: RequestType.Get,
			returnType: "exchangeRestoreSessions"
		},
		mailboxInclusionRules: {
			requestType: RequestType.Get,
			returnType: "mailboxProtectionRules"
		},
		mailboxProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "mailboxProtectionUnits"
		},
		oneDriveForBusinessProtectionPolicies: {
			requestType: RequestType.Get,
			returnType: "oneDriveForBusinessProtectionPolicys"
		},
		oneDriveForBusinessRestoreSessions: {
			requestType: RequestType.Get,
			returnType: "oneDriveForBusinessRestoreSessions"
		},
		protectionPolicies: {
			requestType: RequestType.Get,
			returnType: "protectionPolicyBases"
		},
		protectionUnits: {
			requestType: RequestType.Get,
			returnType: "protectionUnitBases"
		},
		restorePoints: {
			requestType: RequestType.Get,
			returnType: "restorePoints"
		},
		restoreSessions: {
			requestType: RequestType.Get,
			returnType: "restoreSessionBases"
		},
		serviceApps: {
			requestType: RequestType.Get,
			returnType: "serviceApps"
		},
		sharePointProtectionPolicies: {
			requestType: RequestType.Get,
			returnType: "sharePointProtectionPolicys"
		},
		sharePointRestoreSessions: {
			requestType: RequestType.Get,
			returnType: "sharePointRestoreSessions"
		},
		siteInclusionRules: {
			requestType: RequestType.Get,
			returnType: "siteProtectionRules"
		},
		siteProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "siteProtectionUnits"
		},
		enable: {
			argNames: ["appOwnerTenantId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.serviceStatus"
		},
	},
	baseItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createdByUser: {
			returnType: "user"
		},
		lastModifiedByUser: {
			returnType: "user"
		},
	},
	baseItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	baseItemVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	baseSitePage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	baseSitePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	billedReconciliation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	billedUsage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	billing: {
		properties: [
			"manifests|manifests|/[Name]|manifest", "operations|operations|/[Name]|operation"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		manifests: {
			requestType: RequestType.Get,
			returnType: "manifests"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "operations"
		},
		reconciliation: {
			returnType: "billingReconciliation"
		},
		usage: {
			returnType: "azureUsage"
		},
	},
	billingReconciliation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billed: {
			returnType: "billedReconciliation"
		},
	},
	bitlocker: {
		properties: [
			"recoveryKeys|bitlockerRecoveryKeys|/[Name]|bitlockerRecoveryKey"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		recoveryKeys: {
			requestType: RequestType.Get,
			returnType: "bitlockerRecoveryKeys"
		},
	},
	bitlockerRecoveryKey: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bitlockerRecoveryKeys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingAppointment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingAppointments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingBusiness: {
		properties: [
			"appointments|bookingAppointments|/[Name]|bookingAppointment", "calendarView|bookingAppointments|/[Name]|bookingAppointment", "customers|bookingCustomerBases|/[Name]|bookingCustomerBase", "customQuestions|bookingCustomQuestions|/[Name]|bookingCustomQuestion", "services|bookingServices|/[Name]|bookingService", "staffMembers|bookingStaffMemberBases|/[Name]|bookingStaffMemberBase"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appointments: {
			requestType: RequestType.Get,
			returnType: "bookingAppointments"
		},
		calendarView: {
			requestType: RequestType.Get,
			returnType: "bookingAppointments"
		},
		customers: {
			requestType: RequestType.Get,
			returnType: "bookingCustomerBases"
		},
		customQuestions: {
			requestType: RequestType.Get,
			returnType: "bookingCustomQuestions"
		},
		services: {
			requestType: RequestType.Get,
			returnType: "bookingServices"
		},
		staffMembers: {
			requestType: RequestType.Get,
			returnType: "bookingStaffMemberBases"
		},
	},
	bookingBusinesss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingCurrency: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCurrencys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingCustomQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomQuestions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingCustomer: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomerBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomerBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingService: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingServices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingStaffMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingStaffMemberBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingStaffMemberBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookmark: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSharedCookie: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSharedCookies: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	browserSite: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSites: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	browserSiteList: {
		properties: [
			"sharedCookies|browserSharedCookies|/[Name]|browserSharedCookie", "sites|browserSites|/[Name]|browserSite"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sharedCookies: {
			requestType: RequestType.Get,
			returnType: "browserSharedCookies"
		},
		sites: {
			requestType: RequestType.Get,
			returnType: "browserSites"
		},
		publish: {
			argNames: ["revision", "sites", "sharedCookies"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.browserSiteList"
		},
	},
	browserSiteLists: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	builtInIdentityProvider: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bulkUpload: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	calendar: {
		properties: [
			"calendarPermissions|calendarPermissions|/[Name]|calendarPermission", "calendarView|events|/[Name]|event", "events|events|/[Name]|event", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		calendarPermissions: {
			requestType: RequestType.Get,
			returnType: "calendarPermissions"
		},
		calendarView: {
			requestType: RequestType.Get,
			returnType: "events"
		},
		events: {
			requestType: RequestType.Get,
			returnType: "events"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
		getSchedule: {
			argNames: ["Schedules", "EndTime", "StartTime", "AvailabilityViewInterval"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.scheduleInformation[]"
		},
	},
	calendars: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	calendarGroup: {
		properties: [
			"calendars|calendars|/[Name]|calendar"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		calendars: {
			requestType: RequestType.Get,
			returnType: "calendars"
		},
	},
	calendarGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	calendarPermission: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	calendarPermissions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	calendarSharingMessage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accept: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.calendar"
		},
	},
	call: {
		properties: [
			"audioRoutingGroups|audioRoutingGroups|/[Name]|audioRoutingGroup", "contentSharingSessions|contentSharingSessions|/[Name]|contentSharingSession", "operations|commsOperations|/[Name]|commsOperation", "participants|participants|/[Name]|participant"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		audioRoutingGroups: {
			requestType: RequestType.Get,
			returnType: "audioRoutingGroups"
		},
		contentSharingSessions: {
			requestType: RequestType.Get,
			returnType: "contentSharingSessions"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "commsOperations"
		},
		participants: {
			requestType: RequestType.Get,
			returnType: "participants"
		},
		redirect: {
			argNames: ["targets", "timeout", "callbackUri"],
			requestType: RequestType.PostWithArgsInBody,
		},
		addLargeGalleryView: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.addLargeGalleryViewOperation"
		},
		answer: {
			argNames: ["callbackUri", "mediaConfig", "acceptedModalities", "participantCapacity", "callOptions"],
			requestType: RequestType.PostWithArgsInBody,
		},
		cancelMediaProcessing: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.cancelMediaProcessingOperation"
		},
		changeScreenSharingRole: {
			argNames: ["role"],
			requestType: RequestType.PostWithArgsInBody,
		},
		keepAlive: {
			requestType: RequestType.PostWithArgsInBody,
		},
		mute: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.muteParticipantOperation"
		},
		playPrompt: {
			argNames: ["prompts", "clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.playPromptOperation"
		},
		recordResponse: {
			argNames: ["prompts", "bargeInAllowed", "initialSilenceTimeoutInSeconds", "maxSilenceTimeoutInSeconds", "maxRecordDurationInSeconds", "playBeep", "stopTones", "clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.recordOperation"
		},
		reject: {
			argNames: ["reason", "callbackUri"],
			requestType: RequestType.PostWithArgsInBody,
		},
		sendDtmfTones: {
			argNames: ["tones", "delayBetweenTonesMs", "clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.sendDtmfTonesOperation"
		},
		subscribeToTone: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.subscribeToToneOperation"
		},
		transfer: {
			argNames: ["transferTarget", "transferee"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unmute: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.unmuteParticipantOperation"
		},
		updateRecordingStatus: {
			argNames: ["status", "clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.updateRecordingStatusOperation"
		},
	},
	calls: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	callRecord: {
		properties: [
			"participants_v2|participants|/[Name]|participant", "sessions|sessions|/[Name]|session"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		organizer_v2: {
			returnType: "organizer"
		},
		participants_v2: {
			requestType: RequestType.Get,
			returnType: "participants"
		},
		sessions: {
			requestType: RequestType.Get,
			returnType: "sessions"
		},
	},
	callRecording: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	callRecordings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	callTranscript: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	callTranscripts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cancelMediaProcessingOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	canvasLayout: {
		properties: [
			"horizontalSections|horizontalSections|/[Name]|horizontalSection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		horizontalSections: {
			requestType: RequestType.Get,
			returnType: "horizontalSections"
		},
		verticalSection: {
			returnType: "verticalSection"
		},
	},
	caseOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	casesRoot: {
		properties: [
			"ediscoveryCases|ediscoveryCases|/[Name]|ediscoveryCase"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		ediscoveryCases: {
			requestType: RequestType.Get,
			returnType: "ediscoveryCases"
		},
	},
	categoryTemplate: {
		properties: [
			"subcategories|subcategoryTemplates|/[Name]|subcategoryTemplate"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subcategories: {
			requestType: RequestType.Get,
			returnType: "subcategoryTemplates"
		},
	},
	certificateBasedAuthConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	certificateBasedAuthConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	changeTrackedEntity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	channel: {
		properties: [
			"members|conversationMembers|/[Name]|conversationMember", "messages|chatMessages|/[Name]|chatMessage", "sharedWithTeams|sharedWithChannelTeamInfos|/[Name]|sharedWithChannelTeamInfo", "tabs|teamsTabs|/[Name]|teamsTab"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		filesFolder: {
			returnType: "driveItem"
		},
		members: {
			requestType: RequestType.Get,
			returnType: "conversationMembers"
		},
		messages: {
			requestType: RequestType.Get,
			returnType: "chatMessages"
		},
		sharedWithTeams: {
			requestType: RequestType.Get,
			returnType: "sharedWithChannelTeamInfos"
		},
		tabs: {
			requestType: RequestType.Get,
			returnType: "teamsTabs"
		},
		archive: {
			argNames: ["shouldSetSpoSiteReadOnlyForMembers"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unarchive: {
			requestType: RequestType.PostWithArgsInBody,
		},
		completeMigration: {
			requestType: RequestType.PostWithArgsInBody,
		},
		provisionEmail: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.provisionChannelEmailResult"
		},
		removeEmail: {
			requestType: RequestType.PostWithArgsInBody,
		},
		doesUserHaveAccess: {
			argNames: ["userId", "tenantId", "userPrincipalName"],
			requestType: RequestType.Get,
			returnType: "boolean"
		},
	},
	channels: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chat: {
		properties: [
			"installedApps|teamsAppInstallations|/[Name]|teamsAppInstallation", "members|conversationMembers|/[Name]|conversationMember", "messages|chatMessages|/[Name]|chatMessage", "permissionGrants|resourceSpecificPermissionGrants|/[Name]|resourceSpecificPermissionGrant", "pinnedMessages|pinnedChatMessageInfos|/[Name]|pinnedChatMessageInfo", "tabs|teamsTabs|/[Name]|teamsTab"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		installedApps: {
			requestType: RequestType.Get,
			returnType: "teamsAppInstallations"
		},
		lastMessagePreview: {
			returnType: "chatMessageInfo"
		},
		members: {
			requestType: RequestType.Get,
			returnType: "conversationMembers"
		},
		messages: {
			requestType: RequestType.Get,
			returnType: "chatMessages"
		},
		permissionGrants: {
			requestType: RequestType.Get,
			returnType: "resourceSpecificPermissionGrants"
		},
		pinnedMessages: {
			requestType: RequestType.Get,
			returnType: "pinnedChatMessageInfos"
		},
		tabs: {
			requestType: RequestType.Get,
			returnType: "teamsTabs"
		},
		sendActivityNotification: {
			argNames: ["topic", "activityType", "chainId", "previewText", "teamsAppId", "templateParameters", "recipient"],
			requestType: RequestType.PostWithArgsInBody,
		},
		hideForUser: {
			argNames: ["user"],
			requestType: RequestType.PostWithArgsInBody,
		},
		markChatReadForUser: {
			argNames: ["user"],
			requestType: RequestType.PostWithArgsInBody,
		},
		markChatUnreadForUser: {
			argNames: ["user", "lastMessageReadDateTime"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unhideForUser: {
			argNames: ["user"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	chats: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessage: {
		properties: [
			"hostedContents|chatMessageHostedContents|/[Name]|chatMessageHostedContent", "replies|chatMessages|/[Name]|chatMessage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		hostedContents: {
			requestType: RequestType.Get,
			returnType: "chatMessageHostedContents"
		},
		replies: {
			requestType: RequestType.Get,
			returnType: "chatMessages"
		},
		setReaction: {
			argNames: ["reactionType"],
			requestType: RequestType.PostWithArgsInBody,
		},
		softDelete: {
			requestType: RequestType.PostWithArgsInBody,
		},
		undoSoftDelete: {
			requestType: RequestType.PostWithArgsInBody,
		},
		unsetReaction: {
			argNames: ["reactionType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	chatMessages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessageHostedContent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	chatMessageHostedContents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessageInfo: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	checklistItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	checklistItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	citationTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	claimsMappingPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	claimsMappingPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudClipboardItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudClipboardItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudClipboardRoot: {
		properties: [
			"items|cloudClipboardItems|/[Name]|cloudClipboardItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		items: {
			requestType: RequestType.Get,
			returnType: "cloudClipboardItems"
		},
	},
	cloudCommunications: {
		properties: [
			"callRecords|callRecords|/[Name]|callRecord", "calls|calls|/[Name]|call", "onlineMeetings|onlineMeetings|/[Name]|onlineMeeting", "presences|presences|/[Name]|presence"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		callRecords: {
			requestType: RequestType.Get,
			returnType: "callRecords"
		},
		calls: {
			requestType: RequestType.Get,
			returnType: "calls"
		},
		onlineMeetings: {
			requestType: RequestType.Get,
			returnType: "onlineMeetings"
		},
		presences: {
			requestType: RequestType.Get,
			returnType: "presences"
		},
		getPresencesByUserId: {
			argNames: ["ids"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.presence[]"
		},
	},
	cloudPC: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		endGracePeriod: {
			requestType: RequestType.PostWithArgsInBody,
		},
		reboot: {
			requestType: RequestType.PostWithArgsInBody,
		},
		rename: {
			argNames: ["displayName"],
			requestType: RequestType.PostWithArgsInBody,
		},
		restore: {
			argNames: ["cloudPcSnapshotId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		troubleshoot: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	cloudPCs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcAuditEvent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcAuditEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcDeviceImage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcDeviceImages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcGalleryImage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcGalleryImages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcOnPremisesConnection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		runHealthChecks: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	cloudPcOnPremisesConnections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcProvisioningPolicy: {
		properties: [
			"assignments|cloudPcProvisioningPolicyAssignments|/[Name]|cloudPcProvisioningPolicyAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "cloudPcProvisioningPolicyAssignments"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	cloudPcProvisioningPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcProvisioningPolicyAssignment: {
		properties: [
			"assignedUsers|users|/[Name]|user"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignedUsers: {
			requestType: RequestType.Get,
			returnType: "users"
		},
	},
	cloudPcProvisioningPolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcUserSetting: {
		properties: [
			"assignments|cloudPcUserSettingAssignments|/[Name]|cloudPcUserSettingAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "cloudPcUserSettingAssignments"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	cloudPcUserSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcUserSettingAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcUserSettingAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	columnDefinition: {
		properties: [

		],
		delete: { requestType: RequestType.GraphDelete },
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sourceColumn: {
			returnType: "columnDefinition"
		},
		update: {
			argNames: ["values"],
			name: "",
			requestMethod: "PATCH",
			requestType: RequestType.PostBodyNoArgs
		},
	},
	columnDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	columnLink: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	columnLinks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	commsOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	commsOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	community: {
		properties: [
			"owners|users|/[Name]|user"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
		owners: {
			requestType: RequestType.Get,
			returnType: "users"
		},
	},
	communitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	companySubscription: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	companySubscriptions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	compliance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	complianceManagementPartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	complianceManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conditionalAccessPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conditionalAccessPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conditionalAccessRoot: {
		properties: [
			"authenticationContextClassReferences|authenticationContextClassReferences|/[Name]|authenticationContextClassReference", "namedLocations|namedLocations|/[Name]|namedLocation", "policies|conditionalAccessPolicys|/[Name]|conditionalAccessPolicy", "templates|conditionalAccessTemplates|/[Name]|conditionalAccessTemplate"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationStrength: {
			returnType: "authenticationStrengthRoot"
		},
		authenticationContextClassReferences: {
			requestType: RequestType.Get,
			returnType: "authenticationContextClassReferences"
		},
		namedLocations: {
			requestType: RequestType.Get,
			returnType: "namedLocations"
		},
		policies: {
			requestType: RequestType.Get,
			returnType: "conditionalAccessPolicys"
		},
		templates: {
			requestType: RequestType.Get,
			returnType: "conditionalAccessTemplates"
		},
	},
	conditionalAccessTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conditionalAccessTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	connectedOrganization: {
		properties: [
			"externalSponsors|directoryObjects|/[Name]|directoryObject", "internalSponsors|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		externalSponsors: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		internalSponsors: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	connectedOrganizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	connectionOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	contact: {
		properties: [
			"extensions|extensions|/[Name]|extension", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		photo: {
			returnType: "profilePhoto"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
	},
	contacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contactFolder: {
		properties: [
			"childFolders|contactFolders|/[Name]|contactFolder", "contacts|contacts|/[Name]|contact", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childFolders: {
			requestType: RequestType.Get,
			returnType: "contactFolders"
		},
		contacts: {
			requestType: RequestType.Get,
			returnType: "contacts"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
	},
	contactFolders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contentSharingSession: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	contentSharingSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contentType: {
		properties: [
			"baseTypes|contentTypes|/[Name]|contentType", "columnLinks|columnLinks|/[Name]|columnLink", "columnPositions|columnDefinitions|/[Name]|columnDefinition", "columns|columnDefinitions|/[Name]|columnDefinition"
		],
		delete: { requestType: RequestType.GraphDelete },
		query: { argNames: ["oData"], requestType: RequestType.OData },
		base: {
			returnType: "contentType"
		},
		baseTypes: {
			requestType: RequestType.Get,
			returnType: "contentTypes"
		},
		columnLinks: {
			requestType: RequestType.Get,
			returnType: "columnLinks"
		},
		columnPositions: {
			requestType: RequestType.Get,
			returnType: "columnDefinitions"
		},
		columns: {
			requestType: RequestType.Get,
			returnType: "columnDefinitions"
		},
		update: {
			argNames: ["values"],
			name: "",
			requestMethod: "PATCH",
			requestType: RequestType.PostBodyNoArgs
		},
		publish: {
			requestType: RequestType.PostWithArgsInBody,
		},
		unpublish: {
			requestType: RequestType.PostWithArgsInBody,
		},
		associateWithHubSites: {
			argNames: ["hubSiteUrls", "propagateToExistingLists"],
			requestType: RequestType.PostWithArgsInBody,
		},
		copyToDefaultContentLocation: {
			argNames: ["sourceFile", "destinationFileName"],
			requestType: RequestType.PostWithArgsInBody,
		},
		isPublished: {
			requestType: RequestType.Get,
			returnType: "boolean"
		},
	},
	contentTypes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contract: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conversation: {
		properties: [
			"threads|conversationThreads|/[Name]|conversationThread"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		threads: {
			requestType: RequestType.Get,
			returnType: "conversationThreads"
		},
	},
	conversations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conversationMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conversationThread: {
		properties: [
			"posts|posts|/[Name]|post"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		posts: {
			requestType: RequestType.Get,
			returnType: "posts"
		},
		reply: {
			argNames: ["Post"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	conversationThreads: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	countryNamedLocation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	crossTenantAccessPolicy: {
		properties: [
			"partners|crossTenantAccessPolicyConfigurationPartners|/[Name]|crossTenantAccessPolicyConfigurationPartner"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		default: {
			returnType: "crossTenantAccessPolicyConfigurationDefault"
		},
		partners: {
			requestType: RequestType.Get,
			returnType: "crossTenantAccessPolicyConfigurationPartners"
		},
		templates: {
			returnType: "policyTemplate"
		},
	},
	crossTenantAccessPolicyConfigurationDefault: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resetToSystemDefault: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	crossTenantAccessPolicyConfigurationPartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		identitySynchronization: {
			returnType: "crossTenantIdentitySyncPolicyPartner"
		},
	},
	crossTenantIdentitySyncPolicyPartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	customAuthenticationExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		validateAuthenticationConfiguration: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.authenticationConfigurationValidation"
		},
	},
	customAuthenticationExtensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customCalloutExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	customCalloutExtensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customExtensionStageSetting: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		customExtension: {
			returnType: "customCalloutExtension"
		},
	},
	customExtensionStageSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customSecurityAttributeDefinition: {
		properties: [
			"allowedValues|allowedValues|/[Name]|allowedValue"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		allowedValues: {
			requestType: RequestType.Get,
			returnType: "allowedValues"
		},
	},
	customSecurityAttributeDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customTaskExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createdBy: {
			returnType: "user"
		},
		lastModifiedBy: {
			returnType: "user"
		},
	},
	dataPolicyOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSet: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSourceContainer: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	defaultManagedAppProtection: {
		properties: [
			"apps|managedMobileApps|/[Name]|managedMobileApp"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		apps: {
			requestType: RequestType.Get,
			returnType: "managedMobileApps"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	defaultManagedAppProtections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminAccessAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminAccessAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminCustomer: {
		properties: [
			"serviceManagementDetails|delegatedAdminServiceManagementDetails|/[Name]|delegatedAdminServiceManagementDetail"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		serviceManagementDetails: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminServiceManagementDetails"
		},
	},
	delegatedAdminCustomers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminRelationship: {
		properties: [
			"accessAssignments|delegatedAdminAccessAssignments|/[Name]|delegatedAdminAccessAssignment", "operations|delegatedAdminRelationshipOperations|/[Name]|delegatedAdminRelationshipOperation", "requests|delegatedAdminRelationshipRequests|/[Name]|delegatedAdminRelationshipRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessAssignments: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminAccessAssignments"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminRelationshipOperations"
		},
		requests: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminRelationshipRequests"
		},
	},
	delegatedAdminRelationships: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminRelationshipOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminRelationshipOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminRelationshipRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminRelationshipRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminServiceManagementDetail: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminServiceManagementDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedPermissionClassification: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedPermissionClassifications: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deletedChat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		undoDelete: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deletedChats: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deletedItemContainer: {
		properties: [
			"workflows|workflows|/[Name]|workflow"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workflows: {
			requestType: RequestType.Get,
			returnType: "workflows"
		},
	},
	deletedTeam: {
		properties: [
			"channels|channels|/[Name]|channel"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		channels: {
			requestType: RequestType.Get,
			returnType: "channels"
		},
	},
	deletedTeams: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deltaParticipants: {
		properties: [
			"participants|participants|/[Name]|participant"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		participants: {
			requestType: RequestType.Get,
			returnType: "participants"
		},
	},
	departmentTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	detectedApp: {
		properties: [
			"managedDevices|managedDevices|/[Name]|managedDevice"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		managedDevices: {
			requestType: RequestType.Get,
			returnType: "managedDevices"
		},
	},
	detectedApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	device: {
		properties: [
			"memberOf|directoryObjects|/[Name]|directoryObject", "registeredOwners|directoryObjects|/[Name]|directoryObject", "registeredUsers|directoryObjects|/[Name]|directoryObject", "transitiveMemberOf|directoryObjects|/[Name]|directoryObject", "extensions|extensions|/[Name]|extension"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		memberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		registeredOwners: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		registeredUsers: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		transitiveMemberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
	},
	deviceAndAppManagementRoleAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceAndAppManagementRoleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceAndAppManagementRoleDefinition: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceAppManagement: {
		properties: [
			"managedEBooks|managedEBooks|/[Name]|managedEBook", "mobileAppCategories|mobileAppCategorys|/[Name]|mobileAppCategory", "mobileAppConfigurations|managedDeviceMobileAppConfigurations|/[Name]|managedDeviceMobileAppConfiguration", "mobileApps|mobileApps|/[Name]|mobileApp", "vppTokens|vppTokens|/[Name]|vppToken", "androidManagedAppProtections|androidManagedAppProtections|/[Name]|androidManagedAppProtection", "defaultManagedAppProtections|defaultManagedAppProtections|/[Name]|defaultManagedAppProtection", "iosManagedAppProtections|iosManagedAppProtections|/[Name]|iosManagedAppProtection", "managedAppPolicies|managedAppPolicys|/[Name]|managedAppPolicy", "managedAppRegistrations|managedAppRegistrations|/[Name]|managedAppRegistration", "managedAppStatuses|managedAppStatuss|/[Name]|managedAppStatus", "mdmWindowsInformationProtectionPolicies|mdmWindowsInformationProtectionPolicys|/[Name]|mdmWindowsInformationProtectionPolicy", "targetedManagedAppConfigurations|targetedManagedAppConfigurations|/[Name]|targetedManagedAppConfiguration", "windowsInformationProtectionPolicies|windowsInformationProtectionPolicys|/[Name]|windowsInformationProtectionPolicy"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		managedEBooks: {
			requestType: RequestType.Get,
			returnType: "managedEBooks"
		},
		mobileAppCategories: {
			requestType: RequestType.Get,
			returnType: "mobileAppCategorys"
		},
		mobileAppConfigurations: {
			requestType: RequestType.Get,
			returnType: "managedDeviceMobileAppConfigurations"
		},
		mobileApps: {
			requestType: RequestType.Get,
			returnType: "mobileApps"
		},
		vppTokens: {
			requestType: RequestType.Get,
			returnType: "vppTokens"
		},
		androidManagedAppProtections: {
			requestType: RequestType.Get,
			returnType: "androidManagedAppProtections"
		},
		defaultManagedAppProtections: {
			requestType: RequestType.Get,
			returnType: "defaultManagedAppProtections"
		},
		iosManagedAppProtections: {
			requestType: RequestType.Get,
			returnType: "iosManagedAppProtections"
		},
		managedAppPolicies: {
			requestType: RequestType.Get,
			returnType: "managedAppPolicys"
		},
		managedAppRegistrations: {
			requestType: RequestType.Get,
			returnType: "managedAppRegistrations"
		},
		managedAppStatuses: {
			requestType: RequestType.Get,
			returnType: "managedAppStatuss"
		},
		mdmWindowsInformationProtectionPolicies: {
			requestType: RequestType.Get,
			returnType: "mdmWindowsInformationProtectionPolicys"
		},
		targetedManagedAppConfigurations: {
			requestType: RequestType.Get,
			returnType: "targetedManagedAppConfigurations"
		},
		windowsInformationProtectionPolicies: {
			requestType: RequestType.Get,
			returnType: "windowsInformationProtectionPolicys"
		},
		syncMicrosoftStoreForBusinessApps: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deviceCategory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceActionItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceActionItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceDeviceOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceDeviceStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicy: {
		properties: [
			"assignments|deviceCompliancePolicyAssignments|/[Name]|deviceCompliancePolicyAssignment", "deviceSettingStateSummaries|settingStateDeviceSummarys|/[Name]|settingStateDeviceSummary", "deviceStatuses|deviceComplianceDeviceStatuss|/[Name]|deviceComplianceDeviceStatus", "scheduledActionsForRule|deviceComplianceScheduledActionForRules|/[Name]|deviceComplianceScheduledActionForRule", "userStatuses|deviceComplianceUserStatuss|/[Name]|deviceComplianceUserStatus"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "deviceCompliancePolicyAssignments"
		},
		deviceSettingStateSummaries: {
			requestType: RequestType.Get,
			returnType: "settingStateDeviceSummarys"
		},
		deviceStatuses: {
			requestType: RequestType.Get,
			returnType: "deviceComplianceDeviceStatuss"
		},
		deviceStatusOverview: {
			returnType: "deviceComplianceDeviceOverview"
		},
		scheduledActionsForRule: {
			requestType: RequestType.Get,
			returnType: "deviceComplianceScheduledActionForRules"
		},
		userStatuses: {
			requestType: RequestType.Get,
			returnType: "deviceComplianceUserStatuss"
		},
		userStatusOverview: {
			returnType: "deviceComplianceUserOverview"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.deviceCompliancePolicyAssignment[]"
		},
		scheduleActionsForRules: {
			argNames: ["deviceComplianceScheduledActionForRules"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deviceCompliancePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicyAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicyDeviceStateSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicySettingStateSummary: {
		properties: [
			"deviceComplianceSettingStates|deviceComplianceSettingStates|/[Name]|deviceComplianceSettingState"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceComplianceSettingStates: {
			requestType: RequestType.Get,
			returnType: "deviceComplianceSettingStates"
		},
	},
	deviceCompliancePolicySettingStateSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicyState: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicyStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceScheduledActionForRule: {
		properties: [
			"scheduledActionConfigurations|deviceComplianceActionItems|/[Name]|deviceComplianceActionItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		scheduledActionConfigurations: {
			requestType: RequestType.Get,
			returnType: "deviceComplianceActionItems"
		},
	},
	deviceComplianceScheduledActionForRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceSettingState: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceSettingStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceUserOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceUserStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfiguration: {
		properties: [
			"assignments|deviceConfigurationAssignments|/[Name]|deviceConfigurationAssignment", "deviceSettingStateSummaries|settingStateDeviceSummarys|/[Name]|settingStateDeviceSummary", "deviceStatuses|deviceConfigurationDeviceStatuss|/[Name]|deviceConfigurationDeviceStatus", "userStatuses|deviceConfigurationUserStatuss|/[Name]|deviceConfigurationUserStatus"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "deviceConfigurationAssignments"
		},
		deviceSettingStateSummaries: {
			requestType: RequestType.Get,
			returnType: "settingStateDeviceSummarys"
		},
		deviceStatuses: {
			requestType: RequestType.Get,
			returnType: "deviceConfigurationDeviceStatuss"
		},
		deviceStatusOverview: {
			returnType: "deviceConfigurationDeviceOverview"
		},
		userStatuses: {
			requestType: RequestType.Get,
			returnType: "deviceConfigurationUserStatuss"
		},
		userStatusOverview: {
			returnType: "deviceConfigurationUserOverview"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.deviceConfigurationAssignment[]"
		},
		getOmaSettingPlainTextValue: {
			argNames: ["secretReferenceValueId"],
			requestType: RequestType.Get,
			returnType: "string"
		},
	},
	deviceConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationDeviceOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStateSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationState: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationUserOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationUserStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceEnrollmentConfiguration: {
		properties: [
			"assignments|enrollmentConfigurationAssignments|/[Name]|enrollmentConfigurationAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "enrollmentConfigurationAssignments"
		},
		assign: {
			argNames: ["enrollmentConfigurationAssignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
		setPriority: {
			argNames: ["priority"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deviceEnrollmentConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceEnrollmentLimitConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceEnrollmentPlatformRestrictionsConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceEnrollmentWindowsHelloForBusinessConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceInstallState: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceInstallStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceLocalCredentialInfo: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceLocalCredentialInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceLogCollectionResponse: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createDownloadUrl: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "string"
		},
	},
	deviceLogCollectionResponses: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagement: {
		properties: [
			"auditEvents|auditEvents|/[Name]|auditEvent", "termsAndConditions|termsAndConditionss|/[Name]|termsAndConditions", "deviceCompliancePolicies|deviceCompliancePolicys|/[Name]|deviceCompliancePolicy", "deviceCompliancePolicySettingStateSummaries|deviceCompliancePolicySettingStateSummarys|/[Name]|deviceCompliancePolicySettingStateSummary", "deviceConfigurations|deviceConfigurations|/[Name]|deviceConfiguration", "iosUpdateStatuses|iosUpdateDeviceStatuss|/[Name]|iosUpdateDeviceStatus", "complianceManagementPartners|complianceManagementPartners|/[Name]|complianceManagementPartner", "deviceCategories|deviceCategorys|/[Name]|deviceCategory", "deviceEnrollmentConfigurations|deviceEnrollmentConfigurations|/[Name]|deviceEnrollmentConfiguration", "deviceManagementPartners|deviceManagementPartners|/[Name]|deviceManagementPartner", "exchangeConnectors|deviceManagementExchangeConnectors|/[Name]|deviceManagementExchangeConnector", "mobileThreatDefenseConnectors|mobileThreatDefenseConnectors|/[Name]|mobileThreatDefenseConnector", "detectedApps|detectedApps|/[Name]|detectedApp", "managedDevices|managedDevices|/[Name]|managedDevice", "mobileAppTroubleshootingEvents|mobileAppTroubleshootingEvents|/[Name]|mobileAppTroubleshootingEvent", "userExperienceAnalyticsAppHealthApplicationPerformance|userExperienceAnalyticsAppHealthApplicationPerformances|/[Name]|userExperienceAnalyticsAppHealthApplicationPerformance", "userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails|userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailss|/[Name]|userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails", "userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId|userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIds|/[Name]|userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId", "userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion|userExperienceAnalyticsAppHealthAppPerformanceByOSVersions|/[Name]|userExperienceAnalyticsAppHealthAppPerformanceByOSVersion", "userExperienceAnalyticsAppHealthDeviceModelPerformance|userExperienceAnalyticsAppHealthDeviceModelPerformances|/[Name]|userExperienceAnalyticsAppHealthDeviceModelPerformance", "userExperienceAnalyticsAppHealthDevicePerformance|userExperienceAnalyticsAppHealthDevicePerformances|/[Name]|userExperienceAnalyticsAppHealthDevicePerformance", "userExperienceAnalyticsAppHealthDevicePerformanceDetails|userExperienceAnalyticsAppHealthDevicePerformanceDetailss|/[Name]|userExperienceAnalyticsAppHealthDevicePerformanceDetails", "userExperienceAnalyticsAppHealthOSVersionPerformance|userExperienceAnalyticsAppHealthOSVersionPerformances|/[Name]|userExperienceAnalyticsAppHealthOSVersionPerformance", "userExperienceAnalyticsBaselines|userExperienceAnalyticsBaselines|/[Name]|userExperienceAnalyticsBaseline", "userExperienceAnalyticsCategories|userExperienceAnalyticsCategorys|/[Name]|userExperienceAnalyticsCategory", "userExperienceAnalyticsDevicePerformance|userExperienceAnalyticsDevicePerformances|/[Name]|userExperienceAnalyticsDevicePerformance", "userExperienceAnalyticsDeviceScores|userExperienceAnalyticsDeviceScoress|/[Name]|userExperienceAnalyticsDeviceScores", "userExperienceAnalyticsDeviceStartupHistory|userExperienceAnalyticsDeviceStartupHistorys|/[Name]|userExperienceAnalyticsDeviceStartupHistory", "userExperienceAnalyticsDeviceStartupProcesses|userExperienceAnalyticsDeviceStartupProcesss|/[Name]|userExperienceAnalyticsDeviceStartupProcess", "userExperienceAnalyticsDeviceStartupProcessPerformance|userExperienceAnalyticsDeviceStartupProcessPerformances|/[Name]|userExperienceAnalyticsDeviceStartupProcessPerformance", "userExperienceAnalyticsMetricHistory|userExperienceAnalyticsMetricHistorys|/[Name]|userExperienceAnalyticsMetricHistory", "userExperienceAnalyticsModelScores|userExperienceAnalyticsModelScoress|/[Name]|userExperienceAnalyticsModelScores", "userExperienceAnalyticsScoreHistory|userExperienceAnalyticsScoreHistorys|/[Name]|userExperienceAnalyticsScoreHistory", "userExperienceAnalyticsWorkFromAnywhereMetrics|userExperienceAnalyticsWorkFromAnywhereMetrics|/[Name]|userExperienceAnalyticsWorkFromAnywhereMetric", "userExperienceAnalyticsWorkFromAnywhereModelPerformance|userExperienceAnalyticsWorkFromAnywhereModelPerformances|/[Name]|userExperienceAnalyticsWorkFromAnywhereModelPerformance", "windowsMalwareInformation|windowsMalwareInformations|/[Name]|windowsMalwareInformation", "importedWindowsAutopilotDeviceIdentities|importedWindowsAutopilotDeviceIdentitys|/[Name]|importedWindowsAutopilotDeviceIdentity", "windowsAutopilotDeviceIdentities|windowsAutopilotDeviceIdentitys|/[Name]|windowsAutopilotDeviceIdentity", "notificationMessageTemplates|notificationMessageTemplates|/[Name]|notificationMessageTemplate", "resourceOperations|resourceOperations|/[Name]|resourceOperation", "roleAssignments|deviceAndAppManagementRoleAssignments|/[Name]|deviceAndAppManagementRoleAssignment", "roleDefinitions|roleDefinitions|/[Name]|roleDefinition", "remoteAssistancePartners|remoteAssistancePartners|/[Name]|remoteAssistancePartner", "telecomExpenseManagementPartners|telecomExpenseManagementPartners|/[Name]|telecomExpenseManagementPartner", "troubleshootingEvents|deviceManagementTroubleshootingEvents|/[Name]|deviceManagementTroubleshootingEvent", "windowsInformationProtectionAppLearningSummaries|windowsInformationProtectionAppLearningSummarys|/[Name]|windowsInformationProtectionAppLearningSummary", "windowsInformationProtectionNetworkLearningSummaries|windowsInformationProtectionNetworkLearningSummarys|/[Name]|windowsInformationProtectionNetworkLearningSummary"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		auditEvents: {
			requestType: RequestType.Get,
			returnType: "auditEvents"
		},
		virtualEndpoint: {
			returnType: "virtualEndpoint"
		},
		termsAndConditions: {
			requestType: RequestType.Get,
			returnType: "termsAndConditionss"
		},
		deviceCompliancePolicies: {
			requestType: RequestType.Get,
			returnType: "deviceCompliancePolicys"
		},
		deviceCompliancePolicyDeviceStateSummary: {
			returnType: "deviceCompliancePolicyDeviceStateSummary"
		},
		deviceCompliancePolicySettingStateSummaries: {
			requestType: RequestType.Get,
			returnType: "deviceCompliancePolicySettingStateSummarys"
		},
		deviceConfigurationDeviceStateSummaries: {
			returnType: "deviceConfigurationDeviceStateSummary"
		},
		deviceConfigurations: {
			requestType: RequestType.Get,
			returnType: "deviceConfigurations"
		},
		iosUpdateStatuses: {
			requestType: RequestType.Get,
			returnType: "iosUpdateDeviceStatuss"
		},
		softwareUpdateStatusSummary: {
			returnType: "softwareUpdateStatusSummary"
		},
		complianceManagementPartners: {
			requestType: RequestType.Get,
			returnType: "complianceManagementPartners"
		},
		conditionalAccessSettings: {
			returnType: "onPremisesConditionalAccessSettings"
		},
		deviceCategories: {
			requestType: RequestType.Get,
			returnType: "deviceCategorys"
		},
		deviceEnrollmentConfigurations: {
			requestType: RequestType.Get,
			returnType: "deviceEnrollmentConfigurations"
		},
		deviceManagementPartners: {
			requestType: RequestType.Get,
			returnType: "deviceManagementPartners"
		},
		exchangeConnectors: {
			requestType: RequestType.Get,
			returnType: "deviceManagementExchangeConnectors"
		},
		mobileThreatDefenseConnectors: {
			requestType: RequestType.Get,
			returnType: "mobileThreatDefenseConnectors"
		},
		applePushNotificationCertificate: {
			returnType: "applePushNotificationCertificate"
		},
		detectedApps: {
			requestType: RequestType.Get,
			returnType: "detectedApps"
		},
		managedDeviceOverview: {
			returnType: "managedDeviceOverview"
		},
		managedDevices: {
			requestType: RequestType.Get,
			returnType: "managedDevices"
		},
		mobileAppTroubleshootingEvents: {
			requestType: RequestType.Get,
			returnType: "mobileAppTroubleshootingEvents"
		},
		userExperienceAnalyticsAppHealthApplicationPerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthApplicationPerformances"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailss"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIds"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByOSVersions"
		},
		userExperienceAnalyticsAppHealthDeviceModelPerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthDeviceModelPerformances"
		},
		userExperienceAnalyticsAppHealthDevicePerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthDevicePerformances"
		},
		userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthDevicePerformanceDetailss"
		},
		userExperienceAnalyticsAppHealthOSVersionPerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsAppHealthOSVersionPerformances"
		},
		userExperienceAnalyticsAppHealthOverview: {
			returnType: "userExperienceAnalyticsCategory"
		},
		userExperienceAnalyticsBaselines: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsBaselines"
		},
		userExperienceAnalyticsCategories: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsCategorys"
		},
		userExperienceAnalyticsDevicePerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsDevicePerformances"
		},
		userExperienceAnalyticsDeviceScores: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsDeviceScoress"
		},
		userExperienceAnalyticsDeviceStartupHistory: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsDeviceStartupHistorys"
		},
		userExperienceAnalyticsDeviceStartupProcesses: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsDeviceStartupProcesss"
		},
		userExperienceAnalyticsDeviceStartupProcessPerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsDeviceStartupProcessPerformances"
		},
		userExperienceAnalyticsMetricHistory: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsMetricHistorys"
		},
		userExperienceAnalyticsModelScores: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsModelScoress"
		},
		userExperienceAnalyticsOverview: {
			returnType: "userExperienceAnalyticsOverview"
		},
		userExperienceAnalyticsScoreHistory: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsScoreHistorys"
		},
		userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
			returnType: "userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
		},
		userExperienceAnalyticsWorkFromAnywhereMetrics: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsWorkFromAnywhereMetrics"
		},
		userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsWorkFromAnywhereModelPerformances"
		},
		windowsMalwareInformation: {
			requestType: RequestType.Get,
			returnType: "windowsMalwareInformations"
		},
		importedWindowsAutopilotDeviceIdentities: {
			requestType: RequestType.Get,
			returnType: "importedWindowsAutopilotDeviceIdentitys"
		},
		windowsAutopilotDeviceIdentities: {
			requestType: RequestType.Get,
			returnType: "windowsAutopilotDeviceIdentitys"
		},
		notificationMessageTemplates: {
			requestType: RequestType.Get,
			returnType: "notificationMessageTemplates"
		},
		resourceOperations: {
			requestType: RequestType.Get,
			returnType: "resourceOperations"
		},
		roleAssignments: {
			requestType: RequestType.Get,
			returnType: "deviceAndAppManagementRoleAssignments"
		},
		roleDefinitions: {
			requestType: RequestType.Get,
			returnType: "roleDefinitions"
		},
		remoteAssistancePartners: {
			requestType: RequestType.Get,
			returnType: "remoteAssistancePartners"
		},
		reports: {
			returnType: "deviceManagementReports"
		},
		telecomExpenseManagementPartners: {
			requestType: RequestType.Get,
			returnType: "telecomExpenseManagementPartners"
		},
		troubleshootingEvents: {
			requestType: RequestType.Get,
			returnType: "deviceManagementTroubleshootingEvents"
		},
		windowsInformationProtectionAppLearningSummaries: {
			requestType: RequestType.Get,
			returnType: "windowsInformationProtectionAppLearningSummarys"
		},
		windowsInformationProtectionNetworkLearningSummaries: {
			requestType: RequestType.Get,
			returnType: "windowsInformationProtectionNetworkLearningSummarys"
		},
		verifyWindowsEnrollmentAutoDiscovery: {
			argNames: ["domainName"],
			requestType: RequestType.Get,
			returnType: "boolean"
		},
		userExperienceAnalyticsSummarizeWorkFromAnywhereDevices: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.userExperienceAnalyticsWorkFromAnywhereDevicesSummary"
		},
		getEffectivePermissions: {
			argNames: ["scope"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.rolePermission[]"
		},
	},
	deviceManagementCachedReportConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementExchangeConnector: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sync: {
			argNames: ["syncType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deviceManagementExchangeConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementExportJob: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementExportJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementPartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		terminate: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	deviceManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementReports: {
		properties: [
			"exportJobs|deviceManagementExportJobs|/[Name]|deviceManagementExportJob"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		exportJobs: {
			requestType: RequestType.Get,
			returnType: "deviceManagementExportJobs"
		},
		retrieveDeviceAppInstallationStatusReport: {
			argNames: ["name", "select", "search", "groupBy", "orderBy", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getCachedReport: {
			argNames: ["id", "select", "groupBy", "orderBy", "search", "skip", "top"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getCompliancePolicyNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getCompliancePolicyNonComplianceSummaryReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getComplianceSettingNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getConfigurationPolicyNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getConfigurationPolicyNonComplianceSummaryReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getConfigurationSettingNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getDeviceManagementIntentPerSettingContributingProfiles: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getDeviceManagementIntentSettingsReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getDeviceNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getDevicesWithoutCompliancePolicyReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getHistoricalReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getNoncompliantDevicesAndSettingsReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getPolicyNonComplianceMetadata: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getPolicyNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getPolicyNonComplianceSummaryReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getReportFilters: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
		getSettingNonComplianceReport: {
			argNames: ["name", "select", "groupBy", "orderBy", "search", "skip", "top", "sessionId", "filter"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "any"
		},
	},
	deviceManagementTroubleshootingEvent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementTroubleshootingEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceRegistrationPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directory: {
		properties: [
			"deviceLocalCredentials|deviceLocalCredentialInfos|/[Name]|deviceLocalCredentialInfo", "administrativeUnits|administrativeUnits|/[Name]|administrativeUnit", "attributeSets|attributeSets|/[Name]|attributeSet", "customSecurityAttributeDefinitions|customSecurityAttributeDefinitions|/[Name]|customSecurityAttributeDefinition", "deletedItems|directoryObjects|/[Name]|directoryObject", "federationConfigurations|identityProviderBases|/[Name]|identityProviderBase", "onPremisesSynchronization|onPremisesDirectorySynchronizations|/[Name]|onPremisesDirectorySynchronization", "subscriptions|companySubscriptions|/[Name]|companySubscription"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceLocalCredentials: {
			requestType: RequestType.Get,
			returnType: "deviceLocalCredentialInfos"
		},
		administrativeUnits: {
			requestType: RequestType.Get,
			returnType: "administrativeUnits"
		},
		attributeSets: {
			requestType: RequestType.Get,
			returnType: "attributeSets"
		},
		customSecurityAttributeDefinitions: {
			requestType: RequestType.Get,
			returnType: "customSecurityAttributeDefinitions"
		},
		deletedItems: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		federationConfigurations: {
			requestType: RequestType.Get,
			returnType: "identityProviderBases"
		},
		onPremisesSynchronization: {
			requestType: RequestType.Get,
			returnType: "onPremisesDirectorySynchronizations"
		},
		subscriptions: {
			requestType: RequestType.Get,
			returnType: "companySubscriptions"
		},
	},
	directoryAudit: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryAudits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryDefinition: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		discover: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.directoryDefinition"
		},
	},
	directoryDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryObject: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		restore: {
			argNames: ["autoReconcileProxyConflict"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.directoryObject"
		},
		checkMemberGroups: {
			argNames: ["groupIds"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "Array<string>[]"
		},
		checkMemberObjects: {
			argNames: ["ids"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "Array<string>[]"
		},
		getMemberGroups: {
			argNames: ["securityEnabledOnly"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "Array<string>[]"
		},
		getMemberObjects: {
			argNames: ["securityEnabledOnly"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "Array<string>[]"
		},
	},
	directoryObjects: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryObjectPartnerReference: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryRole: {
		properties: [
			"members|directoryObjects|/[Name]|directoryObject", "scopedMembers|scopedRoleMemberships|/[Name]|scopedRoleMembership"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		members: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		scopedMembers: {
			requestType: RequestType.Get,
			returnType: "scopedRoleMemberships"
		},
	},
	directoryRoleTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dispositionReviewStage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	documentSetVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		restore: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	documentSetVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	domain: {
		properties: [
			"domainNameReferences|directoryObjects|/[Name]|directoryObject", "federationConfiguration|internalDomainFederations|/[Name]|internalDomainFederation", "serviceConfigurationRecords|domainDnsRecords|/[Name]|domainDnsRecord", "verificationDnsRecords|domainDnsRecords|/[Name]|domainDnsRecord"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		domainNameReferences: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		federationConfiguration: {
			requestType: RequestType.Get,
			returnType: "internalDomainFederations"
		},
		rootDomain: {
			returnType: "domain"
		},
		serviceConfigurationRecords: {
			requestType: RequestType.Get,
			returnType: "domainDnsRecords"
		},
		verificationDnsRecords: {
			requestType: RequestType.Get,
			returnType: "domainDnsRecords"
		},
		forceDelete: {
			argNames: ["disableUserAccounts"],
			requestType: RequestType.PostWithArgsInBody,
		},
		promote: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "boolean"
		},
		verify: {
			argNames: ["forceTakeover"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.domain"
		},
	},
	domainDnsCnameRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsMxRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsRecords: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	domainDnsSrvRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsTxtRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsUnavailableRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	drive: {
		properties: [
			"bundles|driveItems|/[Name]|driveItem", "following|driveItems|/[Name]|driveItem", "items|driveItems|/[Name]|driveItem", "special|driveItems|/[Name]|driveItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bundles: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		following: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		items: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		list: {
			returnType: "list"
		},
		root: {
			returnType: "driveItem"
		},
		special: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		search: {
			argNames: ["q"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.driveItem[]"
		},
		recent: {
			requestType: RequestType.Get,
			returnType: "EntityTypes.driveItem[]"
		},
		sharedWithMe: {
			requestType: RequestType.Get,
			returnType: "EntityTypes.driveItem[]"
		},
	},
	drives: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveItem: {
		properties: [
			"children|driveItems|/[Name]|driveItem", "permissions|permissions|/[Name]|permission", "subscriptions|subscriptions|/[Name]|subscription", "thumbnails|thumbnailSets|/[Name]|thumbnailSet", "versions|driveItemVersions|/[Name]|driveItemVersion"
		],
		delete: { requestType: RequestType.GraphDelete },
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workbook: {
			returnType: "workbook"
		},
		analytics: {
			returnType: "itemAnalytics"
		},
		children: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		listItem: {
			returnType: "listItem"
		},
		permissions: {
			requestType: RequestType.Get,
			returnType: "permissions"
		},
		retentionLabel: {
			returnType: "itemRetentionLabel"
		},
		subscriptions: {
			requestType: RequestType.Get,
			returnType: "subscriptions"
		},
		thumbnails: {
			requestType: RequestType.Get,
			returnType: "thumbnailSets"
		},
		versions: {
			requestType: RequestType.Get,
			returnType: "driveItemVersions"
		},
		setSensitivityLabel: {
			argNames: ["actionSource", "assignmentMethod", "id", "justificationText"],
			requestType: RequestType.PostWithArgsInBody
		},
		restore: {
			argNames: ["parentReference", "name"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.driveItem"
		},
		copy: {
			argNames: ["name", "parentReference"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.driveItem"
		},
		createUploadSession: {
			argNames: ["item", "deferCommit"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.uploadSession"
		},
		permanentDelete: {
			requestType: RequestType.PostWithArgsInBody,
		},
		assignSensitivityLabel: {
			argNames: ["sensitivityLabelId", "assignmentMethod", "justificationText"],
			requestType: RequestType.PostWithArgsInBody,
		},
		checkin: {
			argNames: ["checkInAs", "comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		checkout: {
			requestType: RequestType.PostWithArgsInBody,
		},
		createLink: {
			argNames: ["type", "scope", "expirationDateTime", "password", "message", "recipients", "retainInheritedPermissions", "sendNotification"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.permission"
		},
		follow: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.driveItem"
		},
		invite: {
			argNames: ["requireSignIn", "roles", "sendInvitation", "message", "recipients", "retainInheritedPermissions", "expirationDateTime", "password"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.permission[]"
		},
		preview: {
			argNames: ["page", "zoom"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.itemPreviewInfo"
		},
		unfollow: {
			requestType: RequestType.PostWithArgsInBody,
		},
		validatePermission: {
			argNames: ["challengeToken", "password"],
			requestType: RequestType.PostWithArgsInBody,
		},
		delta: {
			argNames: ["token"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.driveItem[]"
		},
		search: {
			argNames: ["q"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.driveItem[]"
		},
		getActivitiesByInterval: {
			argNames: ["startDateTime", "endDateTime", "interval"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.itemActivityStat[]"
		},
	},
	driveItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveItemVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		restoreVersion: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	driveItemVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveProtectionRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveProtectionUnit: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveRestoreArtifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	eBookInstallSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	edge: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		internetExplorerMode: {
			returnType: "internetExplorerMode"
		},
	},
	ediscoveryAddToReviewSetOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryCase: {
		properties: [
			"custodians|ediscoveryCustodians|/[Name]|ediscoveryCustodian", "noncustodialDataSources|ediscoveryNoncustodialDataSources|/[Name]|ediscoveryNoncustodialDataSource", "operations|caseOperations|/[Name]|caseOperation", "reviewSets|ediscoveryReviewSets|/[Name]|ediscoveryReviewSet", "searches|ediscoverySearchs|/[Name]|ediscoverySearch", "tags|ediscoveryReviewTags|/[Name]|ediscoveryReviewTag"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		custodians: {
			requestType: RequestType.Get,
			returnType: "ediscoveryCustodians"
		},
		noncustodialDataSources: {
			requestType: RequestType.Get,
			returnType: "ediscoveryNoncustodialDataSources"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "caseOperations"
		},
		reviewSets: {
			requestType: RequestType.Get,
			returnType: "ediscoveryReviewSets"
		},
		searches: {
			requestType: RequestType.Get,
			returnType: "ediscoverySearchs"
		},
		settings: {
			returnType: "ediscoveryCaseSettings"
		},
		tags: {
			requestType: RequestType.Get,
			returnType: "ediscoveryReviewTags"
		},
	},
	ediscoveryCaseSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryCustodian: {
		properties: [
			"siteSources|siteSources|/[Name]|siteSource", "unifiedGroupSources|unifiedGroupSources|/[Name]|unifiedGroupSource", "userSources|userSources|/[Name]|userSource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		lastIndexOperation: {
			returnType: "ediscoveryIndexOperation"
		},
		siteSources: {
			requestType: RequestType.Get,
			returnType: "siteSources"
		},
		unifiedGroupSources: {
			requestType: RequestType.Get,
			returnType: "unifiedGroupSources"
		},
		userSources: {
			requestType: RequestType.Get,
			returnType: "userSources"
		},
	},
	ediscoveryEstimateOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryExportOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		reviewSetQuery: {
			returnType: "ediscoveryReviewSetQuery"
		},
	},
	ediscoveryHoldOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryIndexOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryNoncustodialDataSource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		dataSource: {
			returnType: "dataSource"
		},
		lastIndexOperation: {
			returnType: "ediscoveryIndexOperation"
		},
	},
	ediscoveryPurgeDataOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryReviewSet: {
		properties: [
			"queries|ediscoveryReviewSetQuerys|/[Name]|ediscoveryReviewSetQuery"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		queries: {
			requestType: RequestType.Get,
			returnType: "ediscoveryReviewSetQuerys"
		},
	},
	ediscoveryReviewSetQuery: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryReviewTag: {
		properties: [
			"childTags|ediscoveryReviewTags|/[Name]|ediscoveryReviewTag"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childTags: {
			requestType: RequestType.Get,
			returnType: "ediscoveryReviewTags"
		},
		parent: {
			returnType: "ediscoveryReviewTag"
		},
	},
	ediscoverySearch: {
		properties: [
			"additionalSources|dataSources|/[Name]|dataSource", "custodianSources|dataSources|/[Name]|dataSource", "noncustodialSources|ediscoveryNoncustodialDataSources|/[Name]|ediscoveryNoncustodialDataSource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		additionalSources: {
			requestType: RequestType.Get,
			returnType: "dataSources"
		},
		addToReviewSetOperation: {
			returnType: "ediscoveryAddToReviewSetOperation"
		},
		custodianSources: {
			requestType: RequestType.Get,
			returnType: "dataSources"
		},
		lastEstimateStatisticsOperation: {
			returnType: "ediscoveryEstimateOperation"
		},
		noncustodialSources: {
			requestType: RequestType.Get,
			returnType: "ediscoveryNoncustodialDataSources"
		},
	},
	ediscoverySearchExportOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryTagOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	editionUpgradeConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignment: {
		properties: [
			"categories|educationCategorys|/[Name]|educationCategory", "resources|educationAssignmentResources|/[Name]|educationAssignmentResource", "submissions|educationSubmissions|/[Name]|educationSubmission"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		categories: {
			requestType: RequestType.Get,
			returnType: "educationCategorys"
		},
		gradingCategory: {
			returnType: "educationGradingCategory"
		},
		resources: {
			requestType: RequestType.Get,
			returnType: "educationAssignmentResources"
		},
		rubric: {
			returnType: "educationRubric"
		},
		submissions: {
			requestType: RequestType.Get,
			returnType: "educationSubmissions"
		},
		publish: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationAssignment"
		},
		activate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationAssignment"
		},
		deactivate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationAssignment"
		},
		setUpFeedbackResourcesFolder: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationAssignment"
		},
		setUpResourcesFolder: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationAssignment"
		},
	},
	educationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationAssignmentDefaults: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignmentResource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignmentResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationAssignmentSettings: {
		properties: [
			"gradingCategories|educationGradingCategorys|/[Name]|educationGradingCategory"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		gradingCategories: {
			requestType: RequestType.Get,
			returnType: "educationGradingCategorys"
		},
	},
	educationCategory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationClass: {
		properties: [
			"assignmentCategories|educationCategorys|/[Name]|educationCategory", "assignments|educationAssignments|/[Name]|educationAssignment", "modules|educationModules|/[Name]|educationModule", "members|educationUsers|/[Name]|educationUser", "schools|educationSchools|/[Name]|educationSchool", "teachers|educationUsers|/[Name]|educationUser"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignmentCategories: {
			requestType: RequestType.Get,
			returnType: "educationCategorys"
		},
		assignmentDefaults: {
			returnType: "educationAssignmentDefaults"
		},
		assignments: {
			requestType: RequestType.Get,
			returnType: "educationAssignments"
		},
		assignmentSettings: {
			returnType: "educationAssignmentSettings"
		},
		modules: {
			requestType: RequestType.Get,
			returnType: "educationModules"
		},
		group: {
			returnType: "group"
		},
		members: {
			requestType: RequestType.Get,
			returnType: "educationUsers"
		},
		schools: {
			requestType: RequestType.Get,
			returnType: "educationSchools"
		},
		teachers: {
			requestType: RequestType.Get,
			returnType: "educationUsers"
		},
	},
	educationClasss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationFeedbackOutcome: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationFeedbackResourceOutcome: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationGradingCategory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationGradingCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationModule: {
		properties: [
			"resources|educationModuleResources|/[Name]|educationModuleResource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resources: {
			requestType: RequestType.Get,
			returnType: "educationModuleResources"
		},
		publish: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationModule"
		},
		setUpResourcesFolder: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationModule"
		},
		pin: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationModule"
		},
		unpin: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationModule"
		},
	},
	educationModules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationModuleResource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationModuleResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationOrganization: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationOutcome: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationOutcomes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationPointsOutcome: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationRoot: {
		properties: [
			"classes|educationClasss|/[Name]|educationClass", "schools|educationSchools|/[Name]|educationSchool", "users|educationUsers|/[Name]|educationUser"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		classes: {
			requestType: RequestType.Get,
			returnType: "educationClasss"
		},
		me: {
			returnType: "educationUser"
		},
		schools: {
			requestType: RequestType.Get,
			returnType: "educationSchools"
		},
		users: {
			requestType: RequestType.Get,
			returnType: "educationUsers"
		},
	},
	educationRubric: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationRubrics: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationRubricOutcome: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationSchool: {
		properties: [
			"classes|educationClasss|/[Name]|educationClass", "users|educationUsers|/[Name]|educationUser"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		administrativeUnit: {
			returnType: "administrativeUnit"
		},
		classes: {
			requestType: RequestType.Get,
			returnType: "educationClasss"
		},
		users: {
			requestType: RequestType.Get,
			returnType: "educationUsers"
		},
	},
	educationSchools: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationSubmission: {
		properties: [
			"outcomes|educationOutcomes|/[Name]|educationOutcome", "resources|educationSubmissionResources|/[Name]|educationSubmissionResource", "submittedResources|educationSubmissionResources|/[Name]|educationSubmissionResource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		outcomes: {
			requestType: RequestType.Get,
			returnType: "educationOutcomes"
		},
		resources: {
			requestType: RequestType.Get,
			returnType: "educationSubmissionResources"
		},
		submittedResources: {
			requestType: RequestType.Get,
			returnType: "educationSubmissionResources"
		},
		setUpResourcesFolder: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
		excuse: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
		reassign: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
		_return: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
		submit: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
		unsubmit: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.educationSubmission"
		},
	},
	educationSubmissions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationSubmissionResource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationSubmissionResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationUser: {
		properties: [
			"assignments|educationAssignments|/[Name]|educationAssignment", "rubrics|educationRubrics|/[Name]|educationRubric", "classes|educationClasss|/[Name]|educationClass", "schools|educationSchools|/[Name]|educationSchool", "taughtClasses|educationClasss|/[Name]|educationClass"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "educationAssignments"
		},
		rubrics: {
			requestType: RequestType.Get,
			returnType: "educationRubrics"
		},
		classes: {
			requestType: RequestType.Get,
			returnType: "educationClasss"
		},
		schools: {
			requestType: RequestType.Get,
			returnType: "educationSchools"
		},
		taughtClasses: {
			requestType: RequestType.Get,
			returnType: "educationClasss"
		},
		user: {
			returnType: "user"
		},
	},
	educationUsers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	emailAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	emailAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	emailAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	emailFileAssessmentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	employeeExperience: {
		properties: [
			"communities|communitys|/[Name]|community", "engagementAsyncOperations|engagementAsyncOperations|/[Name]|engagementAsyncOperation", "learningCourseActivities|learningCourseActivitys|/[Name]|learningCourseActivity", "learningProviders|learningProviders|/[Name]|learningProvider"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		communities: {
			requestType: RequestType.Get,
			returnType: "communitys"
		},
		engagementAsyncOperations: {
			requestType: RequestType.Get,
			returnType: "engagementAsyncOperations"
		},
		learningCourseActivities: {
			requestType: RequestType.Get,
			returnType: "learningCourseActivitys"
		},
		learningProviders: {
			requestType: RequestType.Get,
			returnType: "learningProviders"
		},
	},
	employeeExperienceUser: {
		properties: [
			"learningCourseActivities|learningCourseActivitys|/[Name]|learningCourseActivity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		learningCourseActivities: {
			requestType: RequestType.Get,
			returnType: "learningCourseActivitys"
		},
	},
	endUserNotification: {
		properties: [
			"details|endUserNotificationDetails|/[Name]|endUserNotificationDetail"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		details: {
			requestType: RequestType.Get,
			returnType: "endUserNotificationDetails"
		},
	},
	endUserNotifications: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	endUserNotificationDetail: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	endUserNotificationDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	endpoint: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	endpoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	engagementAsyncOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	engagementAsyncOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	enrollmentConfigurationAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	enrollmentConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	enrollmentTroubleshootingEvent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	enterpriseCodeSigningCertificate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	entitlementManagement: {
		properties: [
			"accessPackageAssignmentApprovals|approvals|/[Name]|approval", "accessPackages|accessPackages|/[Name]|accessPackage", "assignmentPolicies|accessPackageAssignmentPolicys|/[Name]|accessPackageAssignmentPolicy", "assignmentRequests|accessPackageAssignmentRequests|/[Name]|accessPackageAssignmentRequest", "assignments|accessPackageAssignments|/[Name]|accessPackageAssignment", "catalogs|accessPackageCatalogs|/[Name]|accessPackageCatalog", "connectedOrganizations|connectedOrganizations|/[Name]|connectedOrganization", "resourceEnvironments|accessPackageResourceEnvironments|/[Name]|accessPackageResourceEnvironment", "resourceRequests|accessPackageResourceRequests|/[Name]|accessPackageResourceRequest", "resourceRoleScopes|accessPackageResourceRoleScopes|/[Name]|accessPackageResourceRoleScope", "resources|accessPackageResources|/[Name]|accessPackageResource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		accessPackageAssignmentApprovals: {
			requestType: RequestType.Get,
			returnType: "approvals"
		},
		accessPackages: {
			requestType: RequestType.Get,
			returnType: "accessPackages"
		},
		assignmentPolicies: {
			requestType: RequestType.Get,
			returnType: "accessPackageAssignmentPolicys"
		},
		assignmentRequests: {
			requestType: RequestType.Get,
			returnType: "accessPackageAssignmentRequests"
		},
		assignments: {
			requestType: RequestType.Get,
			returnType: "accessPackageAssignments"
		},
		catalogs: {
			requestType: RequestType.Get,
			returnType: "accessPackageCatalogs"
		},
		connectedOrganizations: {
			requestType: RequestType.Get,
			returnType: "connectedOrganizations"
		},
		resourceEnvironments: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceEnvironments"
		},
		resourceRequests: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceRequests"
		},
		resourceRoleScopes: {
			requestType: RequestType.Get,
			returnType: "accessPackageResourceRoleScopes"
		},
		resources: {
			requestType: RequestType.Get,
			returnType: "accessPackageResources"
		},
		settings: {
			returnType: "entitlementManagementSettings"
		},
	},
	entitlementManagementSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	entity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	event: {
		properties: [
			"attachments|attachments|/[Name]|attachment", "extensions|extensions|/[Name]|extension", "instances|events|/[Name]|event", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attachments: {
			requestType: RequestType.Get,
			returnType: "attachments"
		},
		calendar: {
			returnType: "calendar"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		instances: {
			requestType: RequestType.Get,
			returnType: "events"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
		cancel: {
			argNames: ["Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		accept: {
			argNames: ["SendResponse", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		decline: {
			argNames: ["ProposedNewTime", "SendResponse", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		dismissReminder: {
			requestType: RequestType.PostWithArgsInBody,
		},
		forward: {
			argNames: ["ToRecipients", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		snoozeReminder: {
			argNames: ["NewReminderTime"],
			requestType: RequestType.PostWithArgsInBody,
		},
		tentativelyAccept: {
			argNames: ["ProposedNewTime", "SendResponse", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	events: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	eventMessage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		event: {
			returnType: "event"
		},
	},
	eventMessageRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	eventMessageResponse: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	exchangeProtectionPolicy: {
		properties: [
			"mailboxInclusionRules|mailboxProtectionRules|/[Name]|mailboxProtectionRule", "mailboxProtectionUnits|mailboxProtectionUnits|/[Name]|mailboxProtectionUnit"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		mailboxInclusionRules: {
			requestType: RequestType.Get,
			returnType: "mailboxProtectionRules"
		},
		mailboxProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "mailboxProtectionUnits"
		},
	},
	exchangeProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	exchangeRestoreSession: {
		properties: [
			"granularMailboxRestoreArtifacts|granularMailboxRestoreArtifacts|/[Name]|granularMailboxRestoreArtifact", "mailboxRestoreArtifacts|mailboxRestoreArtifacts|/[Name]|mailboxRestoreArtifact"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		granularMailboxRestoreArtifacts: {
			requestType: RequestType.Get,
			returnType: "granularMailboxRestoreArtifacts"
		},
		mailboxRestoreArtifacts: {
			requestType: RequestType.Get,
			returnType: "mailboxRestoreArtifacts"
		},
	},
	exchangeRestoreSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	exportSuccessOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resourceLocation: {
			returnType: "manifest"
		},
	},
	extension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	extensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	extensionProperty: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	extensionPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	external: {
		properties: [
			"connections|externalConnections|/[Name]|externalConnection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connections: {
			requestType: RequestType.Get,
			returnType: "externalConnections"
		},
	},
	externalActivity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		performedBy: {
			returnType: "identity"
		},
	},
	externalActivityResult: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	externalConnection: {
		properties: [
			"groups|externalGroups|/[Name]|externalGroup", "items|externalItems|/[Name]|externalItem", "operations|connectionOperations|/[Name]|connectionOperation"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		groups: {
			requestType: RequestType.Get,
			returnType: "externalGroups"
		},
		items: {
			requestType: RequestType.Get,
			returnType: "externalItems"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "connectionOperations"
		},
		schema: {
			returnType: "schema"
		},
	},
	externalDomainName: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	externalDomainNames: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	externalGroup: {
		properties: [
			"members|identitys|/[Name]|identity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		members: {
			requestType: RequestType.Get,
			returnType: "identitys"
		},
	},
	externalItem: {
		properties: [
			"activities|externalActivitys|/[Name]|externalActivity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activities: {
			requestType: RequestType.Get,
			returnType: "externalActivitys"
		},
	},
	externalUsersSelfServiceSignUpEventsFlow: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	failedOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	featureRolloutPolicy: {
		properties: [
			"appliesTo|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appliesTo: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	featureRolloutPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	federatedIdentityCredential: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	federatedIdentityCredentials: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	fido2AuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fido2AuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	fido2AuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	fido2CombinationConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fieldValueSet: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileAssessmentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileAttachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	filePlanDescriptor: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authorityTemplate: {
			returnType: "authorityTemplate"
		},
		categoryTemplate: {
			returnType: "categoryTemplate"
		},
		citationTemplate: {
			returnType: "citationTemplate"
		},
		departmentTemplate: {
			returnType: "departmentTemplate"
		},
		filePlanReferenceTemplate: {
			returnType: "filePlanReferenceTemplate"
		},
	},
	filePlanDescriptorTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	filePlanReferenceTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileStorage: {
		properties: [
			"containers|fileStorageContainers|/[Name]|fileStorageContainer"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		containers: {
			requestType: RequestType.Get,
			returnType: "fileStorageContainers"
		},
	},
	fileStorageContainer: {
		properties: [
			"permissions|permissions|/[Name]|permission"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		drive: {
			returnType: "drive"
		},
		permissions: {
			requestType: RequestType.Get,
			returnType: "permissions"
		},
		permanentDelete: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	fileStorageContainers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	filterOperatorSchema: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	governanceInsight: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	governanceInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	granularMailboxRestoreArtifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	granularMailboxRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	group: {
		properties: [
			"sets|sets|/[Name]|set"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sets: {
			requestType: RequestType.Get,
			returnType: "sets"
		},
		assignLicense: {
			argNames: ["addLicenses", "removeLicenses"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.group"
		},
		retryServiceProvisioning: {
			requestType: RequestType.PostWithArgsInBody,
		},
		checkGrantedPermissionsForApp: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.resourceSpecificPermissionGrant[]"
		},
		validateProperties: {
			argNames: ["displayName", "mailNickname", "onBehalfOfUserId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		addFavorite: {
			requestType: RequestType.PostWithArgsInBody,
		},
		removeFavorite: {
			requestType: RequestType.PostWithArgsInBody,
		},
		resetUnseenCount: {
			requestType: RequestType.PostWithArgsInBody,
		},
		subscribeByMail: {
			requestType: RequestType.PostWithArgsInBody,
		},
		unsubscribeByMail: {
			requestType: RequestType.PostWithArgsInBody,
		},
		renew: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	groups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupLifecyclePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addGroup: {
			argNames: ["groupId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "boolean"
		},
		removeGroup: {
			argNames: ["groupId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "boolean"
		},
	},
	groupLifecyclePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupSetting: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	groupSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupSettingTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	healthIssue: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	homeRealmDiscoveryPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	homeRealmDiscoveryPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	horizontalSection: {
		properties: [
			"columns|horizontalSectionColumns|/[Name]|horizontalSectionColumn"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		columns: {
			requestType: RequestType.Get,
			returnType: "horizontalSectionColumns"
		},
	},
	horizontalSections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	horizontalSectionColumn: {
		properties: [
			"webparts|webParts|/[Name]|webPart"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		webparts: {
			requestType: RequestType.Get,
			returnType: "webParts"
		},
	},
	horizontalSectionColumns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	host: {
		properties: [
			"childHostPairs|hostPairs|/[Name]|hostPair", "components|hostComponents|/[Name]|hostComponent", "cookies|hostCookies|/[Name]|hostCookie", "hostPairs|hostPairs|/[Name]|hostPair", "parentHostPairs|hostPairs|/[Name]|hostPair", "passiveDns|passiveDnsRecords|/[Name]|passiveDnsRecord", "passiveDnsReverse|passiveDnsRecords|/[Name]|passiveDnsRecord", "ports|hostPorts|/[Name]|hostPort", "sslCertificates|hostSslCertificates|/[Name]|hostSslCertificate", "subdomains|subdomains|/[Name]|subdomain", "trackers|hostTrackers|/[Name]|hostTracker"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childHostPairs: {
			requestType: RequestType.Get,
			returnType: "hostPairs"
		},
		components: {
			requestType: RequestType.Get,
			returnType: "hostComponents"
		},
		cookies: {
			requestType: RequestType.Get,
			returnType: "hostCookies"
		},
		hostPairs: {
			requestType: RequestType.Get,
			returnType: "hostPairs"
		},
		parentHostPairs: {
			requestType: RequestType.Get,
			returnType: "hostPairs"
		},
		passiveDns: {
			requestType: RequestType.Get,
			returnType: "passiveDnsRecords"
		},
		passiveDnsReverse: {
			requestType: RequestType.Get,
			returnType: "passiveDnsRecords"
		},
		ports: {
			requestType: RequestType.Get,
			returnType: "hostPorts"
		},
		reputation: {
			returnType: "hostReputation"
		},
		sslCertificates: {
			requestType: RequestType.Get,
			returnType: "hostSslCertificates"
		},
		subdomains: {
			requestType: RequestType.Get,
			returnType: "subdomains"
		},
		trackers: {
			requestType: RequestType.Get,
			returnType: "hostTrackers"
		},
		whois: {
			returnType: "whoisRecord"
		},
	},
	hostComponent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostCookie: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostPair: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childHost: {
			returnType: "host"
		},
		parentHost: {
			returnType: "host"
		},
	},
	hostPort: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
		mostRecentSslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostReputation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	hostSslCertificate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
		sslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostTracker: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostname: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityApiConnector: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		uploadClientCertificate: {
			argNames: ["pkcs12Value", "password"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.identityApiConnector"
		},
	},
	identityApiConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityBuiltInUserFlowAttribute: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityContainer: {
		properties: [
			"healthIssues|healthIssues|/[Name]|healthIssue", "sensors|sensors|/[Name]|sensor"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		healthIssues: {
			requestType: RequestType.Get,
			returnType: "healthIssues"
		},
		sensors: {
			requestType: RequestType.Get,
			returnType: "sensors"
		},
	},
	identityCustomUserFlowAttribute: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityGovernance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		lifecycleWorkflows: {
			returnType: "lifecycleWorkflowsContainer"
		},
		accessReviews: {
			returnType: "accessReviewSet"
		},
		appConsent: {
			returnType: "appConsentApprovalRoute"
		},
		termsOfUse: {
			returnType: "termsOfUseContainer"
		},
		entitlementManagement: {
			returnType: "entitlementManagement"
		},
		privilegedAccess: {
			returnType: "privilegedAccessRoot"
		},
	},
	identityProtectionRoot: {
		properties: [
			"riskDetections|riskDetections|/[Name]|riskDetection", "riskyServicePrincipals|riskyServicePrincipals|/[Name]|riskyServicePrincipal", "riskyUsers|riskyUsers|/[Name]|riskyUser", "servicePrincipalRiskDetections|servicePrincipalRiskDetections|/[Name]|servicePrincipalRiskDetection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		riskDetections: {
			requestType: RequestType.Get,
			returnType: "riskDetections"
		},
		riskyServicePrincipals: {
			requestType: RequestType.Get,
			returnType: "riskyServicePrincipals"
		},
		riskyUsers: {
			requestType: RequestType.Get,
			returnType: "riskyUsers"
		},
		servicePrincipalRiskDetections: {
			requestType: RequestType.Get,
			returnType: "servicePrincipalRiskDetections"
		},
	},
	identityProvider: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityProviders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityProviderBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityProviderBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identitySecurityDefaultsEnforcementPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlow: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlowAttribute: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlowAttributes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityUserFlowAttributeAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		userAttribute: {
			returnType: "identityUserFlowAttribute"
		},
	},
	identityUserFlowAttributeAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	importedWindowsAutopilotDeviceIdentity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	importedWindowsAutopilotDeviceIdentitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	importedWindowsAutopilotDeviceIdentityUpload: {
		properties: [
			"deviceIdentities|importedWindowsAutopilotDeviceIdentitys|/[Name]|importedWindowsAutopilotDeviceIdentity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceIdentities: {
			requestType: RequestType.Get,
			returnType: "importedWindowsAutopilotDeviceIdentitys"
		},
	},
	incident: {
		properties: [
			"alerts|alerts|/[Name]|alert"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		alerts: {
			requestType: RequestType.Get,
			returnType: "alerts"
		},
	},
	indicator: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		artifact: {
			returnType: "artifact"
		},
	},
	inferenceClassification: {
		properties: [
			"overrides|inferenceClassificationOverrides|/[Name]|inferenceClassificationOverride"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		overrides: {
			requestType: RequestType.Get,
			returnType: "inferenceClassificationOverrides"
		},
	},
	inferenceClassificationOverride: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	inferenceClassificationOverrides: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	informationProtection: {
		properties: [
			"threatAssessmentRequests|threatAssessmentRequests|/[Name]|threatAssessmentRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bitlocker: {
			returnType: "bitlocker"
		},
		threatAssessmentRequests: {
			requestType: RequestType.Get,
			returnType: "threatAssessmentRequests"
		},
	},
	insights: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	insightsSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	intelligenceProfile: {
		properties: [
			"indicators|intelligenceProfileIndicators|/[Name]|intelligenceProfileIndicator"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		indicators: {
			requestType: RequestType.Get,
			returnType: "intelligenceProfileIndicators"
		},
	},
	intelligenceProfileIndicator: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	internalDomainFederation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	internalDomainFederations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	internetExplorerMode: {
		properties: [
			"siteLists|browserSiteLists|/[Name]|browserSiteList"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		siteLists: {
			requestType: RequestType.Get,
			returnType: "browserSiteLists"
		},
	},
	invitation: {
		properties: [
			"invitedUserSponsors|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		invitedUser: {
			returnType: "user"
		},
		invitedUserSponsors: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	inviteParticipantsOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCertificateProfile: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosDeviceFeaturesConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosGeneralDeviceConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosLobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosLobAppProvisioningConfigurationAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosManagedAppProtection: {
		properties: [
			"apps|managedMobileApps|/[Name]|managedMobileApp"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		apps: {
			requestType: RequestType.Get,
			returnType: "managedMobileApps"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	iosManagedAppProtections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	iosManagedAppRegistration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosMobileAppConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosStoreApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateDeviceStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	iosVppApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosVppEBook: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosVppEBookAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosiPadOSWebClip: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ipAddress: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ipNamedLocation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	itemActivity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveItem: {
			returnType: "driveItem"
		},
	},
	itemActivitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	itemActivityStat: {
		properties: [
			"activities|itemActivitys|/[Name]|itemActivity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activities: {
			requestType: RequestType.Get,
			returnType: "itemActivitys"
		},
	},
	itemActivityStats: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	itemAnalytics: {
		properties: [
			"itemActivityStats|itemActivityStats|/[Name]|itemActivityStat"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		allTime: {
			returnType: "itemActivityStat"
		},
		itemActivityStats: {
			requestType: RequestType.Get,
			returnType: "itemActivityStats"
		},
		lastSevenDays: {
			returnType: "itemActivityStat"
		},
	},
	itemAttachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		item: {
			returnType: "outlookItem"
		},
	},
	itemInsights: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	itemRetentionLabel: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	labelsRoot: {
		properties: [
			"authorities|authorityTemplates|/[Name]|authorityTemplate", "categories|categoryTemplates|/[Name]|categoryTemplate", "citations|citationTemplates|/[Name]|citationTemplate", "departments|departmentTemplates|/[Name]|departmentTemplate", "filePlanReferences|filePlanReferenceTemplates|/[Name]|filePlanReferenceTemplate", "retentionLabels|retentionLabels|/[Name]|retentionLabel"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authorities: {
			requestType: RequestType.Get,
			returnType: "authorityTemplates"
		},
		categories: {
			requestType: RequestType.Get,
			returnType: "categoryTemplates"
		},
		citations: {
			requestType: RequestType.Get,
			returnType: "citationTemplates"
		},
		departments: {
			requestType: RequestType.Get,
			returnType: "departmentTemplates"
		},
		filePlanReferences: {
			requestType: RequestType.Get,
			returnType: "filePlanReferenceTemplates"
		},
		retentionLabels: {
			requestType: RequestType.Get,
			returnType: "retentionLabels"
		},
	},
	landingPage: {
		properties: [
			"details|landingPageDetails|/[Name]|landingPageDetail"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		details: {
			requestType: RequestType.Get,
			returnType: "landingPageDetails"
		},
	},
	landingPages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	landingPageDetail: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	landingPageDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningContent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningContents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningCourseActivity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningCourseActivitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningProvider: {
		properties: [
			"learningContents|learningContents|/[Name]|learningContent", "learningCourseActivities|learningCourseActivitys|/[Name]|learningCourseActivity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		learningContents: {
			requestType: RequestType.Get,
			returnType: "learningContents"
		},
		learningCourseActivities: {
			requestType: RequestType.Get,
			returnType: "learningCourseActivitys"
		},
	},
	learningProviders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningSelfInitiatedCourse: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	licenseDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	licenseDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	lifecycleManagementSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	lifecycleWorkflowsContainer: {
		properties: [
			"customTaskExtensions|customTaskExtensions|/[Name]|customTaskExtension", "taskDefinitions|taskDefinitions|/[Name]|taskDefinition", "workflows|workflows|/[Name]|workflow", "workflowTemplates|workflowTemplates|/[Name]|workflowTemplate"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		customTaskExtensions: {
			requestType: RequestType.Get,
			returnType: "customTaskExtensions"
		},
		deletedItems: {
			returnType: "deletedItemContainer"
		},
		insights: {
			returnType: "insights"
		},
		settings: {
			returnType: "lifecycleManagementSettings"
		},
		taskDefinitions: {
			requestType: RequestType.Get,
			returnType: "taskDefinitions"
		},
		workflows: {
			requestType: RequestType.Get,
			returnType: "workflows"
		},
		workflowTemplates: {
			requestType: RequestType.Get,
			returnType: "workflowTemplates"
		},
	},
	linkedResource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	linkedResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	list: {
		properties: [
			"columns|columnDefinitions|/[Name]|columnDefinition", "contentTypes|contentTypes|/[Name]|contentType", "items|listItems|/[Name]|listItem", "operations|richLongRunningOperations|/[Name]|richLongRunningOperation", "subscriptions|subscriptions|/[Name]|subscription"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		columns: {
			requestType: RequestType.Get,
			returnType: "columnDefinitions"
		},
		contentTypes: {
			requestType: RequestType.Get,
			returnType: "contentTypes"
		},
		delete: { requestType: RequestType.GraphDelete },
		drive: {
			returnType: "drive"
		},
		items: {
			requestType: RequestType.Get,
			returnType: "listItems"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "richLongRunningOperations"
		},
		subscriptions: {
			requestType: RequestType.Get,
			returnType: "subscriptions"
		},
		update: {
			argNames: ["values"],
			name: "",
			requestMethod: "PATCH",
			requestType: RequestType.PostBodyNoArgs
		},
	},
	lists: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	listItem: {
		properties: [
			"documentSetVersions|documentSetVersions|/[Name]|documentSetVersion", "versions|listItemVersions|/[Name]|listItemVersion"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		analytics: {
			returnType: "itemAnalytics"
		},
		delete: { requestType: RequestType.GraphDelete },
		documentSetVersions: {
			requestType: RequestType.Get,
			returnType: "documentSetVersions"
		},
		driveItem: {
			returnType: "driveItem"
		},
		fields: {
			returnType: "fieldValueSet"
		},
		versions: {
			requestType: RequestType.Get,
			returnType: "listItemVersions"
		},
		update: {
			argNames: ["values"],
			name: "",
			requestMethod: "PATCH",
			requestType: RequestType.PostBodyNoArgs
		},
		createLink: {
			argNames: ["type", "scope", "expirationDateTime", "password", "message", "recipients", "retainInheritedPermissions", "sendNotification"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.permission"
		},
		getActivitiesByInterval: {
			argNames: ["startDateTime", "endDateTime", "interval"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.itemActivityStat[]"
		},
	},
	listItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	listItemVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fields: {
			returnType: "fieldValueSet"
		},
		restoreVersion: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	listItemVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	localizedNotificationMessage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	localizedNotificationMessages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	loginPage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	loginPages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	longRunningOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	longRunningOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	m365AppsInstallationOptions: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSCompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSCustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSDeviceFeaturesConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSDmgApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSGeneralDeviceConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSLobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSMicrosoftDefenderApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSMicrosoftEdgeApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSOfficeSuiteApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailAssessmentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailFolder: {
		properties: [
			"childFolders|mailFolders|/[Name]|mailFolder", "messageRules|messageRules|/[Name]|messageRule", "messages|messages|/[Name]|message", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childFolders: {
			requestType: RequestType.Get,
			returnType: "mailFolders"
		},
		messageRules: {
			requestType: RequestType.Get,
			returnType: "messageRules"
		},
		messages: {
			requestType: RequestType.Get,
			returnType: "messages"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
		copy: {
			argNames: ["DestinationId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.mailFolder"
		},
		move: {
			argNames: ["DestinationId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.mailFolder"
		},
	},
	mailFolders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailSearchFolder: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailboxProtectionUnit: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailboxRestoreArtifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	malwareStateForWindowsDevice: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	malwareStateForWindowsDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAndroidLobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAndroidStoreApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		targetApps: {
			argNames: ["apps", "appGroupType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	managedAppPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppPolicyDeploymentSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppProtection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		targetApps: {
			argNames: ["apps", "appGroupType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	managedAppRegistration: {
		properties: [
			"appliedPolicies|managedAppPolicys|/[Name]|managedAppPolicy", "intendedPolicies|managedAppPolicys|/[Name]|managedAppPolicy", "operations|managedAppOperations|/[Name]|managedAppOperation"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appliedPolicies: {
			requestType: RequestType.Get,
			returnType: "managedAppPolicys"
		},
		intendedPolicies: {
			requestType: RequestType.Get,
			returnType: "managedAppPolicys"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "managedAppOperations"
		},
	},
	managedAppRegistrations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppStatusRaw: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDevice: {
		properties: [
			"deviceCompliancePolicyStates|deviceCompliancePolicyStates|/[Name]|deviceCompliancePolicyState", "deviceConfigurationStates|deviceConfigurationStates|/[Name]|deviceConfigurationState", "logCollectionRequests|deviceLogCollectionResponses|/[Name]|deviceLogCollectionResponse", "users|users|/[Name]|user"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceCompliancePolicyStates: {
			requestType: RequestType.Get,
			returnType: "deviceCompliancePolicyStates"
		},
		deviceConfigurationStates: {
			requestType: RequestType.Get,
			returnType: "deviceConfigurationStates"
		},
		deviceCategory: {
			returnType: "deviceCategory"
		},
		logCollectionRequests: {
			requestType: RequestType.Get,
			returnType: "deviceLogCollectionResponses"
		},
		users: {
			requestType: RequestType.Get,
			returnType: "users"
		},
		windowsProtectionState: {
			returnType: "windowsProtectionState"
		},
		bypassActivationLock: {
			requestType: RequestType.PostWithArgsInBody,
		},
		cleanWindowsDevice: {
			argNames: ["keepUserData"],
			requestType: RequestType.PostWithArgsInBody,
		},
		deleteUserFromSharedAppleDevice: {
			argNames: ["userPrincipalName"],
			requestType: RequestType.PostWithArgsInBody,
		},
		disableLostMode: {
			requestType: RequestType.PostWithArgsInBody,
		},
		locateDevice: {
			requestType: RequestType.PostWithArgsInBody,
		},
		logoutSharedAppleDeviceActiveUser: {
			requestType: RequestType.PostWithArgsInBody,
		},
		rebootNow: {
			requestType: RequestType.PostWithArgsInBody,
		},
		recoverPasscode: {
			requestType: RequestType.PostWithArgsInBody,
		},
		remoteLock: {
			requestType: RequestType.PostWithArgsInBody,
		},
		requestRemoteAssistance: {
			requestType: RequestType.PostWithArgsInBody,
		},
		resetPasscode: {
			requestType: RequestType.PostWithArgsInBody,
		},
		retire: {
			requestType: RequestType.PostWithArgsInBody,
		},
		shutDown: {
			requestType: RequestType.PostWithArgsInBody,
		},
		syncDevice: {
			requestType: RequestType.PostWithArgsInBody,
		},
		updateWindowsDeviceAccount: {
			argNames: ["updateWindowsDeviceAccountActionParameter"],
			requestType: RequestType.PostWithArgsInBody,
		},
		windowsDefenderScan: {
			argNames: ["quickScan"],
			requestType: RequestType.PostWithArgsInBody,
		},
		windowsDefenderUpdateSignatures: {
			requestType: RequestType.PostWithArgsInBody,
		},
		wipe: {
			argNames: ["keepEnrollmentData", "keepUserData", "macOsUnlockCode", "persistEsimDataPlan"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	managedDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfiguration: {
		properties: [
			"assignments|managedDeviceMobileAppConfigurationAssignments|/[Name]|managedDeviceMobileAppConfigurationAssignment", "deviceStatuses|managedDeviceMobileAppConfigurationDeviceStatuss|/[Name]|managedDeviceMobileAppConfigurationDeviceStatus", "userStatuses|managedDeviceMobileAppConfigurationUserStatuss|/[Name]|managedDeviceMobileAppConfigurationUserStatus"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "managedDeviceMobileAppConfigurationAssignments"
		},
		deviceStatuses: {
			requestType: RequestType.Get,
			returnType: "managedDeviceMobileAppConfigurationDeviceStatuss"
		},
		deviceStatusSummary: {
			returnType: "managedDeviceMobileAppConfigurationDeviceSummary"
		},
		userStatuses: {
			requestType: RequestType.Get,
			returnType: "managedDeviceMobileAppConfigurationUserStatuss"
		},
		userStatusSummary: {
			returnType: "managedDeviceMobileAppConfigurationUserSummary"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	managedDeviceMobileAppConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationDeviceStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationDeviceSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationUserStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationUserSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedEBook: {
		properties: [
			"assignments|managedEBookAssignments|/[Name]|managedEBookAssignment", "deviceStates|deviceInstallStates|/[Name]|deviceInstallState", "userStateSummary|userInstallStateSummarys|/[Name]|userInstallStateSummary"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "managedEBookAssignments"
		},
		deviceStates: {
			requestType: RequestType.Get,
			returnType: "deviceInstallStates"
		},
		installSummary: {
			returnType: "eBookInstallSummary"
		},
		userStateSummary: {
			requestType: RequestType.Get,
			returnType: "userInstallStateSummarys"
		},
		assign: {
			argNames: ["managedEBookAssignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	managedEBooks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedEBookAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedEBookAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedIOSLobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedIOSStoreApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedMobileApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedMobileApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedMobileLobApp: {
		properties: [
			"contentVersions|mobileAppContents|/[Name]|mobileAppContent"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		contentVersions: {
			requestType: RequestType.Get,
			returnType: "mobileAppContents"
		},
	},
	manifest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mdmWindowsInformationProtectionPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mdmWindowsInformationProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	meetingAttendanceReport: {
		properties: [
			"attendanceRecords|attendanceRecords|/[Name]|attendanceRecord"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attendanceRecords: {
			requestType: RequestType.Get,
			returnType: "attendanceRecords"
		},
	},
	meetingAttendanceReports: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	membershipOutlierInsight: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		container: {
			returnType: "directoryObject"
		},
		lastModifiedBy: {
			returnType: "user"
		},
		member: {
			returnType: "directoryObject"
		},
	},
	message: {
		properties: [
			"attachments|attachments|/[Name]|attachment", "extensions|extensions|/[Name]|extension", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attachments: {
			requestType: RequestType.Get,
			returnType: "attachments"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
		forward: {
			argNames: ["ToRecipients", "Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		copy: {
			argNames: ["DestinationId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.message"
		},
		move: {
			argNames: ["DestinationId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.message"
		},
		createForward: {
			argNames: ["ToRecipients", "Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.message"
		},
		createReply: {
			argNames: ["Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.message"
		},
		createReplyAll: {
			argNames: ["Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.message"
		},
		reply: {
			argNames: ["Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		replyAll: {
			argNames: ["Message", "Comment"],
			requestType: RequestType.PostWithArgsInBody,
		},
		send: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	messages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	messageRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	messageRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftAccountUserConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	microsoftAuthenticatorAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		device: {
			returnType: "device"
		},
	},
	microsoftAuthenticatorAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftAuthenticatorAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|microsoftAuthenticatorAuthenticationMethodTargets|/[Name]|microsoftAuthenticatorAuthenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "microsoftAuthenticatorAuthenticationMethodTargets"
		},
	},
	microsoftAuthenticatorAuthenticationMethodTarget: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	microsoftAuthenticatorAuthenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftStoreForBusinessApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileApp: {
		properties: [
			"assignments|mobileAppAssignments|/[Name]|mobileAppAssignment", "categories|mobileAppCategorys|/[Name]|mobileAppCategory"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "mobileAppAssignments"
		},
		categories: {
			requestType: RequestType.Get,
			returnType: "mobileAppCategorys"
		},
		assign: {
			argNames: ["mobileAppAssignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	mobileApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileAppAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppCategory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileAppCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppContent: {
		properties: [
			"containedApps|mobileContainedApps|/[Name]|mobileContainedApp", "files|mobileAppContentFiles|/[Name]|mobileAppContentFile"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		containedApps: {
			requestType: RequestType.Get,
			returnType: "mobileContainedApps"
		},
		files: {
			requestType: RequestType.Get,
			returnType: "mobileAppContentFiles"
		},
	},
	mobileAppContents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppContentFile: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		commit: {
			argNames: ["fileEncryptionInfo"],
			requestType: RequestType.PostWithArgsInBody,
		},
		renewUpload: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	mobileAppContentFiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppTroubleshootingEvent: {
		properties: [
			"appLogCollectionRequests|appLogCollectionRequests|/[Name]|appLogCollectionRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appLogCollectionRequests: {
			requestType: RequestType.Get,
			returnType: "appLogCollectionRequests"
		},
	},
	mobileAppTroubleshootingEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileContainedApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileContainedApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileLobApp: {
		properties: [
			"contentVersions|mobileAppContents|/[Name]|mobileAppContent"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		contentVersions: {
			requestType: RequestType.Get,
			returnType: "mobileAppContents"
		},
	},
	mobileThreatDefenseConnector: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileThreatDefenseConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	multiTenantOrganization: {
		properties: [
			"tenants|multiTenantOrganizationMembers|/[Name]|multiTenantOrganizationMember"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		joinRequest: {
			returnType: "multiTenantOrganizationJoinRequestRecord"
		},
		tenants: {
			requestType: RequestType.Get,
			returnType: "multiTenantOrganizationMembers"
		},
	},
	multiTenantOrganizationIdentitySyncPolicyTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationJoinRequestRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	multiTenantOrganizationPartnerConfigurationTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiValueLegacyExtendedProperty: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiValueLegacyExtendedPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	muteParticipantOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	namedLocation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	namedLocations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	networkAdapter: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	notebook: {
		properties: [
			"sectionGroups|sectionGroups|/[Name]|sectionGroup", "sections|onenoteSections|/[Name]|onenoteSection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sectionGroups: {
			requestType: RequestType.Get,
			returnType: "sectionGroups"
		},
		sections: {
			requestType: RequestType.Get,
			returnType: "onenoteSections"
		},
		copyNotebook: {
			argNames: ["groupId", "renameAs", "notebookFolder", "siteCollectionId", "siteId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.onenoteOperation"
		},
	},
	notebooks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	notificationMessageTemplate: {
		properties: [
			"localizedNotificationMessages|localizedNotificationMessages|/[Name]|localizedNotificationMessage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizedNotificationMessages: {
			requestType: RequestType.Get,
			returnType: "localizedNotificationMessages"
		},
		sendTestMessage: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	notificationMessageTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	oAuth2PermissionGrant: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	oAuth2PermissionGrants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	offerShiftRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	offerShiftRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	officeGraphInsights: {
		properties: [
			"shared|sharedInsights|/[Name]|sharedInsight", "trending|trendings|/[Name]|trending", "used|usedInsights|/[Name]|usedInsight"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		shared: {
			requestType: RequestType.Get,
			returnType: "sharedInsights"
		},
		trending: {
			requestType: RequestType.Get,
			returnType: "trendings"
		},
		used: {
			requestType: RequestType.Get,
			returnType: "usedInsights"
		},
	},
	onAttributeCollectionListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onAuthenticationMethodLoadStartListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onInteractiveAuthFlowStartListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesConditionalAccessSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesDirectorySynchronization: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesDirectorySynchronizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onTokenIssuanceStartCustomExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onTokenIssuanceStartListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onUserCreateStartListener: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	oneDriveForBusinessProtectionPolicy: {
		properties: [
			"driveInclusionRules|driveProtectionRules|/[Name]|driveProtectionRule", "driveProtectionUnits|driveProtectionUnits|/[Name]|driveProtectionUnit"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveInclusionRules: {
			requestType: RequestType.Get,
			returnType: "driveProtectionRules"
		},
		driveProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "driveProtectionUnits"
		},
	},
	oneDriveForBusinessProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	oneDriveForBusinessRestoreSession: {
		properties: [
			"driveRestoreArtifacts|driveRestoreArtifacts|/[Name]|driveRestoreArtifact"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveRestoreArtifacts: {
			requestType: RequestType.Get,
			returnType: "driveRestoreArtifacts"
		},
	},
	oneDriveForBusinessRestoreSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenote: {
		properties: [
			"notebooks|notebooks|/[Name]|notebook", "operations|onenoteOperations|/[Name]|onenoteOperation", "pages|onenotePages|/[Name]|onenotePage", "resources|onenoteResources|/[Name]|onenoteResource", "sectionGroups|sectionGroups|/[Name]|sectionGroup", "sections|onenoteSections|/[Name]|onenoteSection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		notebooks: {
			requestType: RequestType.Get,
			returnType: "notebooks"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "onenoteOperations"
		},
		pages: {
			requestType: RequestType.Get,
			returnType: "onenotePages"
		},
		resources: {
			requestType: RequestType.Get,
			returnType: "onenoteResources"
		},
		sectionGroups: {
			requestType: RequestType.Get,
			returnType: "sectionGroups"
		},
		sections: {
			requestType: RequestType.Get,
			returnType: "onenoteSections"
		},
	},
	onenoteEntityBaseModel: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteEntityHierarchyModel: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteEntitySchemaObjectModel: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenotePage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		parentNotebook: {
			returnType: "notebook"
		},
		parentSection: {
			returnType: "onenoteSection"
		},
		copyToSection: {
			argNames: ["id", "groupId", "siteCollectionId", "siteId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.onenoteOperation"
		},
		onenotePatchContent: {
			argNames: ["commands"],
			requestType: RequestType.PostWithArgsInBody,
		},
		preview: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.onenotePagePreview"
		},
	},
	onenotePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenoteResource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenoteSection: {
		properties: [
			"pages|onenotePages|/[Name]|onenotePage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		pages: {
			requestType: RequestType.Get,
			returnType: "onenotePages"
		},
		parentNotebook: {
			returnType: "notebook"
		},
		parentSectionGroup: {
			returnType: "sectionGroup"
		},
		copyToNotebook: {
			argNames: ["id", "groupId", "renameAs", "siteCollectionId", "siteId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.onenoteOperation"
		},
		copyToSectionGroup: {
			argNames: ["id", "groupId", "renameAs", "siteCollectionId", "siteId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.onenoteOperation"
		},
	},
	onenoteSections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onlineMeeting: {
		properties: [
			"recordings|callRecordings|/[Name]|callRecording", "transcripts|callTranscripts|/[Name]|callTranscript"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		recordings: {
			requestType: RequestType.Get,
			returnType: "callRecordings"
		},
		transcripts: {
			requestType: RequestType.Get,
			returnType: "callTranscripts"
		},
		sendVirtualAppointmentReminderSms: {
			argNames: ["remindBeforeTimeInMinutesType", "attendees"],
			requestType: RequestType.PostWithArgsInBody,
		},
		sendVirtualAppointmentSms: {
			argNames: ["messageType", "attendees"],
			requestType: RequestType.PostWithArgsInBody,
		},
		getVirtualAppointmentJoinWebUrl: {
			requestType: RequestType.Get,
			returnType: "string"
		},
	},
	onlineMeetings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onlineMeetingBase: {
		properties: [
			"attendanceReports|meetingAttendanceReports|/[Name]|meetingAttendanceReport"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attendanceReports: {
			requestType: RequestType.Get,
			returnType: "meetingAttendanceReports"
		},
	},
	openShift: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	openShifts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	openShiftChangeRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	openShiftChangeRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	openTypeExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	operation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	orgContact: {
		properties: [
			"directReports|directoryObjects|/[Name]|directoryObject", "memberOf|directoryObjects|/[Name]|directoryObject", "transitiveMemberOf|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directReports: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		manager: {
			returnType: "directoryObject"
		},
		memberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		transitiveMemberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		retryServiceProvisioning: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	organization: {
		properties: [
			"certificateBasedAuthConfiguration|certificateBasedAuthConfigurations|/[Name]|certificateBasedAuthConfiguration", "extensions|extensions|/[Name]|extension"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		branding: {
			returnType: "organizationalBranding"
		},
		certificateBasedAuthConfiguration: {
			requestType: RequestType.Get,
			returnType: "certificateBasedAuthConfigurations"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		setMobileDeviceManagementAuthority: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "number"
		},
	},
	organizationalBranding: {
		properties: [
			"localizations|organizationalBrandingLocalizations|/[Name]|organizationalBrandingLocalization"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizations: {
			requestType: RequestType.Get,
			returnType: "organizationalBrandingLocalizations"
		},
	},
	organizationalBrandingLocalization: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	organizationalBrandingLocalizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	organizationalBrandingProperties: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	organizer: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookCategory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	outlookItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookUser: {
		properties: [
			"masterCategories|outlookCategorys|/[Name]|outlookCategory"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		masterCategories: {
			requestType: RequestType.Get,
			returnType: "outlookCategorys"
		},
	},
	participant: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		mute: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.muteParticipantOperation"
		},
		startHoldMusic: {
			argNames: ["customPrompt", "clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.startHoldMusicOperation"
		},
		stopHoldMusic: {
			argNames: ["clientContext"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.stopHoldMusicOperation"
		},
	},
	participants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	participantBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	participantJoiningNotification: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		call: {
			returnType: "call"
		},
	},
	participantLeftNotification: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		call: {
			returnType: "call"
		},
	},
	partners: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billing: {
			returnType: "billing"
		},
	},
	passiveDnsRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		artifact: {
			returnType: "artifact"
		},
		parentHost: {
			returnType: "host"
		},
	},
	passwordAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	passwordAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	payload: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	payloads: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	peopleAdminSettings: {
		properties: [
			"profileCardProperties|profileCardPropertys|/[Name]|profileCardProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		profileCardProperties: {
			requestType: RequestType.Get,
			returnType: "profileCardPropertys"
		},
		pronouns: {
			returnType: "pronounsSettings"
		},
		itemInsights: {
			returnType: "insightsSettings"
		},
	},
	permission: {
		properties: [

		],
		delete: { requestType: RequestType.GraphDelete },
		query: { argNames: ["oData"], requestType: RequestType.OData },
		update: {
			argNames: ["values"],
			name: "",
			requestMethod: "PATCH",
			requestType: RequestType.PostBodyNoArgs
		},
		grant: {
			argNames: ["roles", "recipients"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.permission[]"
		},
	},
	permissions: {
		add: {
			argNames: ["values"],
			name: "",
			requestType: RequestType.PostBodyNoArgs
		},
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	permissionGrantConditionSet: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	permissionGrantConditionSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	permissionGrantPolicy: {
		properties: [
			"excludes|permissionGrantConditionSets|/[Name]|permissionGrantConditionSet", "includes|permissionGrantConditionSets|/[Name]|permissionGrantConditionSet"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		excludes: {
			requestType: RequestType.Get,
			returnType: "permissionGrantConditionSets"
		},
		includes: {
			requestType: RequestType.Get,
			returnType: "permissionGrantConditionSets"
		},
	},
	permissionGrantPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	person: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	persons: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	phoneAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		disableSmsSignIn: {
			requestType: RequestType.PostWithArgsInBody,
		},
		enableSmsSignIn: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	phoneAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	pinnedChatMessageInfo: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		message: {
			returnType: "chatMessage"
		},
	},
	pinnedChatMessageInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	place: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	planner: {
		properties: [
			"buckets|plannerBuckets|/[Name]|plannerBucket", "plans|plannerPlans|/[Name]|plannerPlan", "tasks|plannerTasks|/[Name]|plannerTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		buckets: {
			requestType: RequestType.Get,
			returnType: "plannerBuckets"
		},
		plans: {
			requestType: RequestType.Get,
			returnType: "plannerPlans"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "plannerTasks"
		},
	},
	plannerAssignedToTaskBoardTaskFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerBucket: {
		properties: [
			"tasks|plannerTasks|/[Name]|plannerTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		tasks: {
			requestType: RequestType.Get,
			returnType: "plannerTasks"
		},
	},
	plannerBuckets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	plannerBucketTaskBoardTaskFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerGroup: {
		properties: [
			"plans|plannerPlans|/[Name]|plannerPlan"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		plans: {
			requestType: RequestType.Get,
			returnType: "plannerPlans"
		},
	},
	plannerPlan: {
		properties: [
			"buckets|plannerBuckets|/[Name]|plannerBucket", "tasks|plannerTasks|/[Name]|plannerTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		buckets: {
			requestType: RequestType.Get,
			returnType: "plannerBuckets"
		},
		details: {
			returnType: "plannerPlanDetails"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "plannerTasks"
		},
	},
	plannerPlans: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	plannerPlanDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerProgressTaskBoardTaskFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerTask: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignedToTaskBoardFormat: {
			returnType: "plannerAssignedToTaskBoardTaskFormat"
		},
		bucketTaskBoardFormat: {
			returnType: "plannerBucketTaskBoardTaskFormat"
		},
		details: {
			returnType: "plannerTaskDetails"
		},
		progressTaskBoardFormat: {
			returnType: "plannerProgressTaskBoardTaskFormat"
		},
	},
	plannerTasks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	plannerTaskDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerUser: {
		properties: [
			"plans|plannerPlans|/[Name]|plannerPlan", "tasks|plannerTasks|/[Name]|plannerTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		plans: {
			requestType: RequestType.Get,
			returnType: "plannerPlans"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "plannerTasks"
		},
	},
	playPromptOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	policyBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	policyRoot: {
		properties: [
			"authenticationStrengthPolicies|authenticationStrengthPolicys|/[Name]|authenticationStrengthPolicy", "activityBasedTimeoutPolicies|activityBasedTimeoutPolicys|/[Name]|activityBasedTimeoutPolicy", "appManagementPolicies|appManagementPolicys|/[Name]|appManagementPolicy", "claimsMappingPolicies|claimsMappingPolicys|/[Name]|claimsMappingPolicy", "homeRealmDiscoveryPolicies|homeRealmDiscoveryPolicys|/[Name]|homeRealmDiscoveryPolicy", "permissionGrantPolicies|permissionGrantPolicys|/[Name]|permissionGrantPolicy", "tokenIssuancePolicies|tokenIssuancePolicys|/[Name]|tokenIssuancePolicy", "tokenLifetimePolicies|tokenLifetimePolicys|/[Name]|tokenLifetimePolicy", "featureRolloutPolicies|featureRolloutPolicys|/[Name]|featureRolloutPolicy", "conditionalAccessPolicies|conditionalAccessPolicys|/[Name]|conditionalAccessPolicy", "roleManagementPolicies|unifiedRoleManagementPolicys|/[Name]|unifiedRoleManagementPolicy", "roleManagementPolicyAssignments|unifiedRoleManagementPolicyAssignments|/[Name]|unifiedRoleManagementPolicyAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationMethodsPolicy: {
			returnType: "authenticationMethodsPolicy"
		},
		authenticationStrengthPolicies: {
			requestType: RequestType.Get,
			returnType: "authenticationStrengthPolicys"
		},
		authenticationFlowsPolicy: {
			returnType: "authenticationFlowsPolicy"
		},
		deviceRegistrationPolicy: {
			returnType: "deviceRegistrationPolicy"
		},
		activityBasedTimeoutPolicies: {
			requestType: RequestType.Get,
			returnType: "activityBasedTimeoutPolicys"
		},
		appManagementPolicies: {
			requestType: RequestType.Get,
			returnType: "appManagementPolicys"
		},
		authorizationPolicy: {
			returnType: "authorizationPolicy"
		},
		claimsMappingPolicies: {
			requestType: RequestType.Get,
			returnType: "claimsMappingPolicys"
		},
		crossTenantAccessPolicy: {
			returnType: "crossTenantAccessPolicy"
		},
		defaultAppManagementPolicy: {
			returnType: "tenantAppManagementPolicy"
		},
		homeRealmDiscoveryPolicies: {
			requestType: RequestType.Get,
			returnType: "homeRealmDiscoveryPolicys"
		},
		permissionGrantPolicies: {
			requestType: RequestType.Get,
			returnType: "permissionGrantPolicys"
		},
		tokenIssuancePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenIssuancePolicys"
		},
		tokenLifetimePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenLifetimePolicys"
		},
		featureRolloutPolicies: {
			requestType: RequestType.Get,
			returnType: "featureRolloutPolicys"
		},
		adminConsentRequestPolicy: {
			returnType: "adminConsentRequestPolicy"
		},
		conditionalAccessPolicies: {
			requestType: RequestType.Get,
			returnType: "conditionalAccessPolicys"
		},
		identitySecurityDefaultsEnforcementPolicy: {
			returnType: "identitySecurityDefaultsEnforcementPolicy"
		},
		roleManagementPolicies: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleManagementPolicys"
		},
		roleManagementPolicyAssignments: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleManagementPolicyAssignments"
		},
	},
	policyTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		multiTenantOrganizationIdentitySynchronization: {
			returnType: "multiTenantOrganizationIdentitySyncPolicyTemplate"
		},
		multiTenantOrganizationPartnerConfiguration: {
			returnType: "multiTenantOrganizationPartnerConfigurationTemplate"
		},
	},
	post: {
		properties: [
			"attachments|attachments|/[Name]|attachment", "extensions|extensions|/[Name]|extension", "multiValueExtendedProperties|multiValueLegacyExtendedPropertys|/[Name]|multiValueLegacyExtendedProperty", "singleValueExtendedProperties|singleValueLegacyExtendedPropertys|/[Name]|singleValueLegacyExtendedProperty"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attachments: {
			requestType: RequestType.Get,
			returnType: "attachments"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		inReplyTo: {
			returnType: "post"
		},
		multiValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "multiValueLegacyExtendedPropertys"
		},
		singleValueExtendedProperties: {
			requestType: RequestType.Get,
			returnType: "singleValueLegacyExtendedPropertys"
		},
		forward: {
			argNames: ["Comment", "ToRecipients"],
			requestType: RequestType.PostWithArgsInBody,
		},
		reply: {
			argNames: ["Post"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	posts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	presence: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		clearPresence: {
			argNames: ["sessionId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		clearUserPreferredPresence: {
			requestType: RequestType.PostWithArgsInBody,
		},
		setPresence: {
			argNames: ["sessionId", "availability", "activity", "expirationDuration"],
			requestType: RequestType.PostWithArgsInBody,
		},
		setStatusMessage: {
			argNames: ["statusMessage"],
			requestType: RequestType.PostWithArgsInBody,
		},
		setUserPreferredPresence: {
			argNames: ["availability", "activity", "expirationDuration"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	presences: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	print: {
		properties: [
			"connectors|printConnectors|/[Name]|printConnector", "operations|printOperations|/[Name]|printOperation", "printers|printers|/[Name]|printer", "services|printServices|/[Name]|printService", "shares|printerShares|/[Name]|printerShare", "taskDefinitions|printTaskDefinitions|/[Name]|printTaskDefinition"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connectors: {
			requestType: RequestType.Get,
			returnType: "printConnectors"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "printOperations"
		},
		printers: {
			requestType: RequestType.Get,
			returnType: "printers"
		},
		services: {
			requestType: RequestType.Get,
			returnType: "printServices"
		},
		shares: {
			requestType: RequestType.Get,
			returnType: "printerShares"
		},
		taskDefinitions: {
			requestType: RequestType.Get,
			returnType: "printTaskDefinitions"
		},
	},
	printConnector: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printDocument: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createUploadSession: {
			argNames: ["properties"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.uploadSession"
		},
	},
	printDocuments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printJob: {
		properties: [
			"documents|printDocuments|/[Name]|printDocument", "tasks|printTasks|/[Name]|printTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		documents: {
			requestType: RequestType.Get,
			returnType: "printDocuments"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "printTasks"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
		start: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.printJobStatus"
		},
		abort: {
			argNames: ["reason"],
			requestType: RequestType.PostWithArgsInBody,
		},
		redirect: {
			argNames: ["destinationPrinterId", "configuration"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.printJob"
		},
	},
	printJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printService: {
		properties: [
			"endpoints|printServiceEndpoints|/[Name]|printServiceEndpoint"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		endpoints: {
			requestType: RequestType.Get,
			returnType: "printServiceEndpoints"
		},
	},
	printServices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printServiceEndpoint: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printServiceEndpoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printTask: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		definition: {
			returnType: "printTaskDefinition"
		},
		trigger: {
			returnType: "printTaskTrigger"
		},
	},
	printTasks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printTaskDefinition: {
		properties: [
			"tasks|printTasks|/[Name]|printTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		tasks: {
			requestType: RequestType.Get,
			returnType: "printTasks"
		},
	},
	printTaskDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printTaskTrigger: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		definition: {
			returnType: "printTaskDefinition"
		},
	},
	printTaskTriggers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printUsage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByPrinter: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByPrinters: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printUsageByUser: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByUsers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printer: {
		properties: [
			"connectors|printConnectors|/[Name]|printConnector", "shares|printerShares|/[Name]|printerShare", "taskTriggers|printTaskTriggers|/[Name]|printTaskTrigger"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connectors: {
			requestType: RequestType.Get,
			returnType: "printConnectors"
		},
		shares: {
			requestType: RequestType.Get,
			returnType: "printerShares"
		},
		taskTriggers: {
			requestType: RequestType.Get,
			returnType: "printTaskTriggers"
		},
		restoreFactoryDefaults: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	printers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printerBase: {
		properties: [
			"jobs|printJobs|/[Name]|printJob"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		jobs: {
			requestType: RequestType.Get,
			returnType: "printJobs"
		},
	},
	printerCreateOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		printer: {
			returnType: "printer"
		},
	},
	printerShare: {
		properties: [
			"allowedGroups|groups|/[Name]|group", "allowedUsers|users|/[Name]|user"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		allowedGroups: {
			requestType: RequestType.Get,
			returnType: "groups"
		},
		allowedUsers: {
			requestType: RequestType.Get,
			returnType: "users"
		},
		printer: {
			returnType: "printer"
		},
	},
	printerShares: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privacy: {
		properties: [
			"subjectRightsRequests|subjectRightsRequests|/[Name]|subjectRightsRequest"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subjectRightsRequests: {
			requestType: RequestType.Get,
			returnType: "subjectRightsRequests"
		},
	},
	privilegedAccessGroup: {
		properties: [
			"assignmentApprovals|approvals|/[Name]|approval", "assignmentScheduleInstances|privilegedAccessGroupAssignmentScheduleInstances|/[Name]|privilegedAccessGroupAssignmentScheduleInstance", "assignmentScheduleRequests|privilegedAccessGroupAssignmentScheduleRequests|/[Name]|privilegedAccessGroupAssignmentScheduleRequest", "assignmentSchedules|privilegedAccessGroupAssignmentSchedules|/[Name]|privilegedAccessGroupAssignmentSchedule", "eligibilityScheduleInstances|privilegedAccessGroupEligibilityScheduleInstances|/[Name]|privilegedAccessGroupEligibilityScheduleInstance", "eligibilityScheduleRequests|privilegedAccessGroupEligibilityScheduleRequests|/[Name]|privilegedAccessGroupEligibilityScheduleRequest", "eligibilitySchedules|privilegedAccessGroupEligibilitySchedules|/[Name]|privilegedAccessGroupEligibilitySchedule"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignmentApprovals: {
			requestType: RequestType.Get,
			returnType: "approvals"
		},
		assignmentScheduleInstances: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupAssignmentScheduleInstances"
		},
		assignmentScheduleRequests: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupAssignmentScheduleRequests"
		},
		assignmentSchedules: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupAssignmentSchedules"
		},
		eligibilityScheduleInstances: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupEligibilityScheduleInstances"
		},
		eligibilityScheduleRequests: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupEligibilityScheduleRequests"
		},
		eligibilitySchedules: {
			requestType: RequestType.Get,
			returnType: "privilegedAccessGroupEligibilitySchedules"
		},
	},
	privilegedAccessGroupAssignmentSchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupAssignmentSchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupAssignmentScheduleInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilityScheduleInstance"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupAssignmentScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupAssignmentScheduleRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
		targetSchedule: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	privilegedAccessGroupAssignmentScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupEligibilitySchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupEligibilitySchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupEligibilityScheduleInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupEligibilityScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupEligibilityScheduleRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
		targetSchedule: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	privilegedAccessGroupEligibilityScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessRoot: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "privilegedAccessGroup"
		},
	},
	privilegedAccessSchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	privilegedAccessScheduleInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	privilegedAccessScheduleRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profileCardProperty: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profileCardPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	profilePhoto: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profilePhotos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	pronounsSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionPolicyBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.protectionPolicyBase"
		},
		deactivate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.protectionPolicyBase"
		},
	},
	protectionPolicyBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	protectionRuleBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		run: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.protectionRuleBase"
		},
	},
	protectionUnitBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionUnitBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	provisioningObjectSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	provisioningObjectSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	qna: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	rbacApplication: {
		properties: [
			"resourceNamespaces|unifiedRbacResourceNamespaces|/[Name]|unifiedRbacResourceNamespace", "roleAssignments|unifiedRoleAssignments|/[Name]|unifiedRoleAssignment", "roleDefinitions|unifiedRoleDefinitions|/[Name]|unifiedRoleDefinition", "roleAssignmentScheduleInstances|unifiedRoleAssignmentScheduleInstances|/[Name]|unifiedRoleAssignmentScheduleInstance", "roleAssignmentScheduleRequests|unifiedRoleAssignmentScheduleRequests|/[Name]|unifiedRoleAssignmentScheduleRequest", "roleAssignmentSchedules|unifiedRoleAssignmentSchedules|/[Name]|unifiedRoleAssignmentSchedule", "roleEligibilityScheduleInstances|unifiedRoleEligibilityScheduleInstances|/[Name]|unifiedRoleEligibilityScheduleInstance", "roleEligibilityScheduleRequests|unifiedRoleEligibilityScheduleRequests|/[Name]|unifiedRoleEligibilityScheduleRequest", "roleEligibilitySchedules|unifiedRoleEligibilitySchedules|/[Name]|unifiedRoleEligibilitySchedule"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resourceNamespaces: {
			requestType: RequestType.Get,
			returnType: "unifiedRbacResourceNamespaces"
		},
		roleAssignments: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleAssignments"
		},
		roleDefinitions: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleDefinitions"
		},
		roleAssignmentScheduleInstances: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleAssignmentScheduleInstances"
		},
		roleAssignmentScheduleRequests: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleAssignmentScheduleRequests"
		},
		roleAssignmentSchedules: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleAssignmentSchedules"
		},
		roleEligibilityScheduleInstances: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleEligibilityScheduleInstances"
		},
		roleEligibilityScheduleRequests: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleEligibilityScheduleRequests"
		},
		roleEligibilitySchedules: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleEligibilitySchedules"
		},
	},
	recordOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	referenceAttachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	relation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fromTerm: {
			returnType: "term"
		},
		set: {
			returnType: "set"
		},
		toTerm: {
			returnType: "term"
		},
	},
	relyingPartyDetailedSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	remoteAssistancePartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		beginOnboarding: {
			requestType: RequestType.PostWithArgsInBody,
		},
		disconnect: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	remoteAssistancePartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	remoteDesktopSecurityConfiguration: {
		properties: [
			"targetDeviceGroups|targetDeviceGroups|/[Name]|targetDeviceGroup"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		targetDeviceGroups: {
			requestType: RequestType.Get,
			returnType: "targetDeviceGroups"
		},
	},
	reportRoot: {
		properties: [
			"dailyPrintUsageByPrinter|printUsageByPrinters|/[Name]|printUsageByPrinter", "dailyPrintUsageByUser|printUsageByUsers|/[Name]|printUsageByUser", "monthlyPrintUsageByPrinter|printUsageByPrinters|/[Name]|printUsageByPrinter", "monthlyPrintUsageByUser|printUsageByUsers|/[Name]|printUsageByUser"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationMethods: {
			returnType: "authenticationMethodsRoot"
		},
		partners: {
			returnType: "partners"
		},
		dailyPrintUsageByPrinter: {
			requestType: RequestType.Get,
			returnType: "printUsageByPrinters"
		},
		dailyPrintUsageByUser: {
			requestType: RequestType.Get,
			returnType: "printUsageByUsers"
		},
		monthlyPrintUsageByPrinter: {
			requestType: RequestType.Get,
			returnType: "printUsageByPrinters"
		},
		monthlyPrintUsageByUser: {
			requestType: RequestType.Get,
			returnType: "printUsageByUsers"
		},
		security: {
			returnType: "securityReportsRoot"
		},
		deviceConfigurationDeviceActivity: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		deviceConfigurationUserActivity: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		managedDeviceEnrollmentFailureDetails: {
			argNames: ["skip", "top", "filter", "skipToken"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		managedDeviceEnrollmentTopFailures: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ActivationCounts: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ActivationsUserCounts: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ActivationsUserDetail: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ActiveUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ActiveUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365GroupsActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365GroupsActivityDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365GroupsActivityFileCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365GroupsActivityGroupCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365GroupsActivityStorage: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOffice365ServicesUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveActivityFileCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveActivityUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveUsageAccountCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveUsageAccountDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveUsageFileCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getOneDriveUsageStorage: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointActivityFileCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointActivityPages: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointActivityUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointSiteUsageDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointSiteUsageFileCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointSiteUsagePages: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointSiteUsageSiteCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSharePointSiteUsageStorage: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessActivityUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessDeviceUsageDistributionUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessDeviceUsageUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessDeviceUsageUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessOrganizerActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessOrganizerActivityMinuteCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessOrganizerActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessParticipantActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessParticipantActivityMinuteCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessParticipantActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessPeerToPeerActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessPeerToPeerActivityMinuteCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getSkypeForBusinessPeerToPeerActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerActivityUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerActivityUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerDeviceUsageDistributionUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerDeviceUsageUserCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerDeviceUsageUserDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerGroupsActivityCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerGroupsActivityDetail: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getYammerGroupsActivityGroupCounts: {
			argNames: ["period"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.report"
		},
		getGroupArchivedPrintJobs: {
			argNames: ["groupId", "startDateTime", "endDateTime"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.archivedPrintJob[]"
		},
		getPrinterArchivedPrintJobs: {
			argNames: ["printerId", "startDateTime", "endDateTime"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.archivedPrintJob[]"
		},
		getUserArchivedPrintJobs: {
			argNames: ["userId", "startDateTime", "endDateTime"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.archivedPrintJob[]"
		},
	},
	request: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resellerDelegatedAdminRelationship: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	resourceSpecificPermissionGrant: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceSpecificPermissionGrants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	restoreArtifactBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		restorePoint: {
			returnType: "restorePoint"
		},
	},
	restorePoint: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		protectionUnit: {
			returnType: "protectionUnitBase"
		},
	},
	restorePoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	restoreSessionBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.restoreSessionBase"
		},
	},
	restoreSessionBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	retentionEvent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEventType: {
			returnType: "retentionEventType"
		},
	},
	retentionEventType: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	retentionLabel: {
		properties: [
			"dispositionReviewStages|dispositionReviewStages|/[Name]|dispositionReviewStage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		descriptors: {
			returnType: "filePlanDescriptor"
		},
		dispositionReviewStages: {
			requestType: RequestType.Get,
			returnType: "dispositionReviewStages"
		},
		retentionEventType: {
			returnType: "retentionEventType"
		},
	},
	richLongRunningOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	richLongRunningOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskDetection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskDetections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyServicePrincipal: {
		properties: [
			"history|riskyServicePrincipalHistoryItems|/[Name]|riskyServicePrincipalHistoryItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		history: {
			requestType: RequestType.Get,
			returnType: "riskyServicePrincipalHistoryItems"
		},
	},
	riskyServicePrincipals: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyServicePrincipalHistoryItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskyServicePrincipalHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyUser: {
		properties: [
			"history|riskyUserHistoryItems|/[Name]|riskyUserHistoryItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		history: {
			requestType: RequestType.Get,
			returnType: "riskyUserHistoryItems"
		},
	},
	riskyUsers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyUserHistoryItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskyUserHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roleAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		roleDefinition: {
			returnType: "roleDefinition"
		},
	},
	roleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roleDefinition: {
		properties: [
			"roleAssignments|roleAssignments|/[Name]|roleAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		roleAssignments: {
			requestType: RequestType.Get,
			returnType: "roleAssignments"
		},
	},
	roleDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roleManagement: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directory: {
			returnType: "rbacApplication"
		},
		entitlementManagement: {
			returnType: "rbacApplication"
		},
	},
	room: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	rooms: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roomList: {
		properties: [
			"rooms|rooms|/[Name]|room"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		rooms: {
			requestType: RequestType.Get,
			returnType: "rooms"
		},
	},
	run: {
		properties: [
			"taskProcessingResults|taskProcessingResults|/[Name]|taskProcessingResult", "userProcessingResults|userProcessingResults|/[Name]|userProcessingResult"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		taskProcessingResults: {
			requestType: RequestType.Get,
			returnType: "taskProcessingResults"
		},
		userProcessingResults: {
			requestType: RequestType.Get,
			returnType: "userProcessingResults"
		},
	},
	runningOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	samlOrWsFedExternalDomainFederation: {
		properties: [
			"domains|externalDomainNames|/[Name]|externalDomainName"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		domains: {
			requestType: RequestType.Get,
			returnType: "externalDomainNames"
		},
	},
	samlOrWsFedProvider: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schedule: {
		properties: [
			"offerShiftRequests|offerShiftRequests|/[Name]|offerShiftRequest", "openShiftChangeRequests|openShiftChangeRequests|/[Name]|openShiftChangeRequest", "openShifts|openShifts|/[Name]|openShift", "schedulingGroups|schedulingGroups|/[Name]|schedulingGroup", "shifts|shifts|/[Name]|shift", "swapShiftsChangeRequests|swapShiftsChangeRequests|/[Name]|swapShiftsChangeRequest", "timeOffReasons|timeOffReasons|/[Name]|timeOffReason", "timeOffRequests|timeOffRequests|/[Name]|timeOffRequest", "timesOff|timeOffs|/[Name]|timeOff"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		offerShiftRequests: {
			requestType: RequestType.Get,
			returnType: "offerShiftRequests"
		},
		openShiftChangeRequests: {
			requestType: RequestType.Get,
			returnType: "openShiftChangeRequests"
		},
		openShifts: {
			requestType: RequestType.Get,
			returnType: "openShifts"
		},
		schedulingGroups: {
			requestType: RequestType.Get,
			returnType: "schedulingGroups"
		},
		shifts: {
			requestType: RequestType.Get,
			returnType: "shifts"
		},
		swapShiftsChangeRequests: {
			requestType: RequestType.Get,
			returnType: "swapShiftsChangeRequests"
		},
		timeOffReasons: {
			requestType: RequestType.Get,
			returnType: "timeOffReasons"
		},
		timeOffRequests: {
			requestType: RequestType.Get,
			returnType: "timeOffRequests"
		},
		timesOff: {
			requestType: RequestType.Get,
			returnType: "timeOffs"
		},
		share: {
			argNames: ["notifyTeam", "startDateTime", "endDateTime"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	scheduleChangeRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		decline: {
			argNames: ["message"],
			requestType: RequestType.PostWithArgsInBody,
		},
		approve: {
			argNames: ["message"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	schedulingGroup: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schedulingGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	schema: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schemaExtension: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	scopedRoleMembership: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	scopedRoleMemberships: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	search: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	searchAnswer: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	searchEntity: {
		properties: [
			"acronyms|acronyms|/[Name]|acronym", "bookmarks|bookmarks|/[Name]|bookmark", "qnas|qnas|/[Name]|qna"
		],

		acronyms: {
			requestType: RequestType.Get,
			returnType: "acronyms"
		},
		bookmarks: {
			requestType: RequestType.Get,
			returnType: "bookmarks"
		},
		qnas: {
			requestType: RequestType.Get,
			returnType: "qnas"
		},
		query: {
			argNames: ["requests"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.searchResponse[]"
		},
	},
	sectionGroup: {
		properties: [
			"sectionGroups|sectionGroups|/[Name]|sectionGroup", "sections|onenoteSections|/[Name]|onenoteSection"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		parentNotebook: {
			returnType: "notebook"
		},
		parentSectionGroup: {
			returnType: "sectionGroup"
		},
		sectionGroups: {
			requestType: RequestType.Get,
			returnType: "sectionGroups"
		},
		sections: {
			requestType: RequestType.Get,
			returnType: "onenoteSections"
		},
	},
	sectionGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	secureScore: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	secureScores: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	secureScoreControlProfile: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	secureScoreControlProfiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	security: {
		properties: [
			"subjectRightsRequests|subjectRightsRequests|/[Name]|subjectRightsRequest", "alerts_v2|alerts|/[Name]|alert", "incidents|incidents|/[Name]|incident", "alerts|alerts|/[Name]|alert", "secureScoreControlProfiles|secureScoreControlProfiles|/[Name]|secureScoreControlProfile", "secureScores|secureScores|/[Name]|secureScore"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subjectRightsRequests: {
			requestType: RequestType.Get,
			returnType: "subjectRightsRequests"
		},
		cases: {
			returnType: "casesRoot"
		},
		identities: {
			returnType: "identityContainer"
		},
		alerts_v2: {
			requestType: RequestType.Get,
			returnType: "alerts"
		},
		incidents: {
			requestType: RequestType.Get,
			returnType: "incidents"
		},
		attackSimulation: {
			returnType: "attackSimulationRoot"
		},
		labels: {
			returnType: "labelsRoot"
		},
		triggers: {
			returnType: "triggersRoot"
		},
		triggerTypes: {
			returnType: "triggerTypesRoot"
		},
		alerts: {
			requestType: RequestType.Get,
			returnType: "alerts"
		},
		secureScoreControlProfiles: {
			requestType: RequestType.Get,
			returnType: "secureScoreControlProfiles"
		},
		secureScores: {
			requestType: RequestType.Get,
			returnType: "secureScores"
		},
		threatIntelligence: {
			returnType: "threatIntelligence"
		},
		runHuntingQuery: {
			argNames: ["query", "timespan"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.huntingQueryResults"
		},
	},
	securityReportsRoot: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getAttackSimulationRepeatOffenders: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.attackSimulationRepeatOffender[]"
		},
		getAttackSimulationSimulationUserCoverage: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.attackSimulationSimulationUserCoverage[]"
		},
		getAttackSimulationTrainingUserCoverage: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.attackSimulationTrainingUserCoverage[]"
		},
	},
	segment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sendDtmfTonesOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sensor: {
		properties: [
			"healthIssues|healthIssues|/[Name]|healthIssue"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		healthIssues: {
			requestType: RequestType.Get,
			returnType: "healthIssues"
		},
	},
	serviceAnnouncement: {
		properties: [
			"healthOverviews|serviceHealths|/[Name]|serviceHealth", "issues|serviceHealthIssues|/[Name]|serviceHealthIssue", "messages|serviceUpdateMessages|/[Name]|serviceUpdateMessage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		healthOverviews: {
			requestType: RequestType.Get,
			returnType: "serviceHealths"
		},
		issues: {
			requestType: RequestType.Get,
			returnType: "serviceHealthIssues"
		},
		messages: {
			requestType: RequestType.Get,
			returnType: "serviceUpdateMessages"
		},
	},
	serviceAnnouncementAttachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceAnnouncementAttachments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceAnnouncementBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activate: {
			argNames: ["effectiveDateTime"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.serviceApp"
		},
		deactivate: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.serviceApp"
		},
	},
	serviceApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceHealth: {
		properties: [
			"issues|serviceHealthIssues|/[Name]|serviceHealthIssue"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		issues: {
			requestType: RequestType.Get,
			returnType: "serviceHealthIssues"
		},
	},
	serviceHealths: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceHealthIssue: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		incidentReport: {
			requestType: RequestType.Get,
			returnType: "any"
		},
	},
	serviceHealthIssues: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	servicePrincipal: {
		properties: [
			"appManagementPolicies|appManagementPolicys|/[Name]|appManagementPolicy", "appRoleAssignedTo|appRoleAssignments|/[Name]|appRoleAssignment", "appRoleAssignments|appRoleAssignments|/[Name]|appRoleAssignment", "claimsMappingPolicies|claimsMappingPolicys|/[Name]|claimsMappingPolicy", "createdObjects|directoryObjects|/[Name]|directoryObject", "delegatedPermissionClassifications|delegatedPermissionClassifications|/[Name]|delegatedPermissionClassification", "endpoints|endpoints|/[Name]|endpoint", "federatedIdentityCredentials|federatedIdentityCredentials|/[Name]|federatedIdentityCredential", "homeRealmDiscoveryPolicies|homeRealmDiscoveryPolicys|/[Name]|homeRealmDiscoveryPolicy", "memberOf|directoryObjects|/[Name]|directoryObject", "oauth2PermissionGrants|oAuth2PermissionGrants|/[Name]|oAuth2PermissionGrant", "ownedObjects|directoryObjects|/[Name]|directoryObject", "owners|directoryObjects|/[Name]|directoryObject", "tokenIssuancePolicies|tokenIssuancePolicys|/[Name]|tokenIssuancePolicy", "tokenLifetimePolicies|tokenLifetimePolicys|/[Name]|tokenLifetimePolicy", "transitiveMemberOf|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appManagementPolicies: {
			requestType: RequestType.Get,
			returnType: "appManagementPolicys"
		},
		appRoleAssignedTo: {
			requestType: RequestType.Get,
			returnType: "appRoleAssignments"
		},
		appRoleAssignments: {
			requestType: RequestType.Get,
			returnType: "appRoleAssignments"
		},
		claimsMappingPolicies: {
			requestType: RequestType.Get,
			returnType: "claimsMappingPolicys"
		},
		createdObjects: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		delegatedPermissionClassifications: {
			requestType: RequestType.Get,
			returnType: "delegatedPermissionClassifications"
		},
		endpoints: {
			requestType: RequestType.Get,
			returnType: "endpoints"
		},
		federatedIdentityCredentials: {
			requestType: RequestType.Get,
			returnType: "federatedIdentityCredentials"
		},
		homeRealmDiscoveryPolicies: {
			requestType: RequestType.Get,
			returnType: "homeRealmDiscoveryPolicys"
		},
		memberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		oauth2PermissionGrants: {
			requestType: RequestType.Get,
			returnType: "oAuth2PermissionGrants"
		},
		ownedObjects: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		owners: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		remoteDesktopSecurityConfiguration: {
			returnType: "remoteDesktopSecurityConfiguration"
		},
		tokenIssuancePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenIssuancePolicys"
		},
		tokenLifetimePolicies: {
			requestType: RequestType.Get,
			returnType: "tokenLifetimePolicys"
		},
		transitiveMemberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		synchronization: {
			returnType: "synchronization"
		},
		addKey: {
			argNames: ["keyCredential", "passwordCredential", "proof"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.keyCredential"
		},
		addPassword: {
			argNames: ["passwordCredential"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.passwordCredential"
		},
		removeKey: {
			argNames: ["keyId", "proof"],
			requestType: RequestType.PostWithArgsInBody,
		},
		removePassword: {
			argNames: ["keyId"],
			requestType: RequestType.PostWithArgsInBody,
		},
		addTokenSigningCertificate: {
			argNames: ["displayName", "endDateTime"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.selfSignedCertificate"
		},
	},
	servicePrincipalRiskDetection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	servicePrincipalRiskDetections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceStorageQuotaBreakdown: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceStorageQuotaBreakdowns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceUpdateMessage: {
		properties: [
			"attachments|serviceAnnouncementAttachments|/[Name]|serviceAnnouncementAttachment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attachments: {
			requestType: RequestType.Get,
			returnType: "serviceAnnouncementAttachments"
		},
	},
	serviceUpdateMessages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	session: {
		properties: [
			"segments|segments|/[Name]|segment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		segments: {
			requestType: RequestType.Get,
			returnType: "segments"
		},
	},
	set: {
		properties: [
			"children|terms|/[Name]|term", "relations|relations|/[Name]|relation", "terms|terms|/[Name]|term"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		children: {
			requestType: RequestType.Get,
			returnType: "terms"
		},
		parentGroup: {
			returnType: "group"
		},
		relations: {
			requestType: RequestType.Get,
			returnType: "relations"
		},
		terms: {
			requestType: RequestType.Get,
			returnType: "terms"
		},
	},
	settingStateDeviceSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	settingStateDeviceSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharePointProtectionPolicy: {
		properties: [
			"siteInclusionRules|siteProtectionRules|/[Name]|siteProtectionRule", "siteProtectionUnits|siteProtectionUnits|/[Name]|siteProtectionUnit"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		siteInclusionRules: {
			requestType: RequestType.Get,
			returnType: "siteProtectionRules"
		},
		siteProtectionUnits: {
			requestType: RequestType.Get,
			returnType: "siteProtectionUnits"
		},
	},
	sharePointProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharePointRestoreSession: {
		properties: [
			"siteRestoreArtifacts|siteRestoreArtifacts|/[Name]|siteRestoreArtifact"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		siteRestoreArtifacts: {
			requestType: RequestType.Get,
			returnType: "siteRestoreArtifacts"
		},
	},
	sharePointRestoreSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharedDriveItem: {
		properties: [
			"items|driveItems|/[Name]|driveItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveItem: {
			returnType: "driveItem"
		},
		items: {
			requestType: RequestType.Get,
			returnType: "driveItems"
		},
		list: {
			returnType: "list"
		},
		listItem: {
			returnType: "listItem"
		},
		permission: {
			returnType: "permission"
		},
		root: {
			returnType: "driveItem"
		},
		site: {
			returnType: "site"
		},
	},
	sharedInsight: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		lastSharedMethod: {
			returnType: "entity"
		},
		resource: {
			returnType: "entity"
		},
	},
	sharedInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharedPCConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sharedWithChannelTeamInfo: {
		properties: [
			"allowedMembers|conversationMembers|/[Name]|conversationMember"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		allowedMembers: {
			requestType: RequestType.Get,
			returnType: "conversationMembers"
		},
	},
	sharedWithChannelTeamInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharepoint: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		settings: {
			returnType: "sharepointSettings"
		},
	},
	sharepointSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	shift: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	shifts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	shiftPreferences: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	signIn: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	signIns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	simulation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		landingPage: {
			returnType: "landingPage"
		},
		loginPage: {
			returnType: "loginPage"
		},
		payload: {
			returnType: "payload"
		},
	},
	simulations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	simulationAutomation: {
		properties: [
			"runs|simulationAutomationRuns|/[Name]|simulationAutomationRun"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		runs: {
			requestType: RequestType.Get,
			returnType: "simulationAutomationRuns"
		},
	},
	simulationAutomations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	simulationAutomationRun: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	simulationAutomationRuns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	singleValueLegacyExtendedProperty: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	singleValueLegacyExtendedPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	site: {
		properties: [
			"columns|columnDefinitions|/[Name]|columnDefinition", "contentTypes|contentTypes|/[Name]|contentType", "drives|drives|/[Name]|drive", "externalColumns|columnDefinitions|/[Name]|columnDefinition", "items|baseItems|/[Name]|baseItem", "lists|lists|/[Name]|list", "operations|richLongRunningOperations|/[Name]|richLongRunningOperation", "pages|baseSitePages|/[Name]|baseSitePage", "permissions|permissions|/[Name]|permission", "sites|sites|/[Name]|site", "termStores|stores|/[Name]|store"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		analytics: {
			returnType: "itemAnalytics"
		},
		columns: {
			requestType: RequestType.Get,
			returnType: "columnDefinitions"
		},
		contentTypes: {
			requestType: RequestType.Get,
			returnType: "contentTypes"
		},
		drive: {
			returnType: "drive"
		},
		drives: {
			requestType: RequestType.Get,
			returnType: "drives"
		},
		externalColumns: {
			requestType: RequestType.Get,
			returnType: "columnDefinitions"
		},
		items: {
			requestType: RequestType.Get,
			returnType: "baseItems"
		},
		lists: {
			requestType: RequestType.Get,
			returnType: "lists"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "richLongRunningOperations"
		},
		pages: {
			requestType: RequestType.Get,
			returnType: "baseSitePages"
		},
		permissions: {
			requestType: RequestType.Get,
			returnType: "permissions"
		},
		sites: {
			requestType: RequestType.Get,
			returnType: "sites"
		},
		termStore: {
			returnType: "store"
		},
		termStores: {
			requestType: RequestType.Get,
			returnType: "stores"
		},
		onenote: {
			returnType: "onenote"
		},
		getActivitiesByInterval: {
			argNames: ["startDateTime", "endDateTime", "interval"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.itemActivityStat[]"
		},
		getApplicableContentTypesForList: {
			argNames: ["listId"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.contentType[]"
		},
		getByPath: {
			argNames: ["path"],
			requestType: RequestType.Get,
			returnType: "EntityTypes.site"
		},
	},
	sitePage: {
		properties: [
			"webParts|webParts|/[Name]|webPart"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		canvasLayout: {
			returnType: "canvasLayout"
		},
		webParts: {
			requestType: RequestType.Get,
			returnType: "webParts"
		},
		publish: {
			requestType: RequestType.PostWithArgsInBody,
		},
		getWebPartsByPosition: {
			argNames: ["webPartIndex", "horizontalSectionId", "isInVerticalSection", "columnId"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.webPart[]"
		},
	},
	siteProtectionRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteProtectionUnit: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteRestoreArtifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteSource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		site: {
			returnType: "site"
		},
	},
	skypeForBusinessUserConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	skypeUserConversationMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	smsAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|smsAuthenticationMethodTargets|/[Name]|smsAuthenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "smsAuthenticationMethodTargets"
		},
	},
	smsAuthenticationMethodTarget: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	smsAuthenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	socialIdentityProvider: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	softwareOathAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	softwareOathAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	softwareOathAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	softwareUpdateStatusSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	solutionsRoot: {
		properties: [
			"bookingBusinesses|bookingBusinesss|/[Name]|bookingBusiness", "bookingCurrencies|bookingCurrencys|/[Name]|bookingCurrency"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bookingBusinesses: {
			requestType: RequestType.Get,
			returnType: "bookingBusinesss"
		},
		bookingCurrencies: {
			requestType: RequestType.Get,
			returnType: "bookingCurrencys"
		},
		backupRestore: {
			returnType: "backupRestoreRoot"
		},
		virtualEvents: {
			returnType: "virtualEventsRoot"
		},
	},
	sslCertificate: {
		properties: [
			"relatedHosts|hosts|/[Name]|host"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		relatedHosts: {
			requestType: RequestType.Get,
			returnType: "hosts"
		},
	},
	standardWebPart: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	startHoldMusicOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	stopHoldMusicOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	storage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fileStorage: {
			returnType: "fileStorage"
		},
		settings: {
			returnType: "storageSettings"
		},
	},
	storageQuotaBreakdown: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	storageSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	store: {
		properties: [
			"groups|groups|/[Name]|group", "sets|sets|/[Name]|set"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		groups: {
			requestType: RequestType.Get,
			returnType: "groups"
		},
		sets: {
			requestType: RequestType.Get,
			returnType: "sets"
		},
	},
	stsPolicy: {
		properties: [
			"appliesTo|directoryObjects|/[Name]|directoryObject"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appliesTo: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	subcategoryTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subdomain: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	subjectRightsRequest: {
		properties: [
			"approvers|users|/[Name]|user", "collaborators|users|/[Name]|user", "notes|authoredNotes|/[Name]|authoredNote"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		approvers: {
			requestType: RequestType.Get,
			returnType: "users"
		},
		collaborators: {
			requestType: RequestType.Get,
			returnType: "users"
		},
		notes: {
			requestType: RequestType.Get,
			returnType: "authoredNotes"
		},
		team: {
			returnType: "team"
		},
		getFinalAttachment: {
			requestType: RequestType.Get,
			returnType: "any"
		},
		getFinalReport: {
			requestType: RequestType.Get,
			returnType: "any"
		},
	},
	subjectRightsRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	subscribeToToneOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subscribedSku: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subscription: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		reauthorize: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	subscriptions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	swapShiftsChangeRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	swapShiftsChangeRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	synchronization: {
		properties: [
			"jobs|synchronizationJobs|/[Name]|synchronizationJob", "templates|synchronizationTemplates|/[Name]|synchronizationTemplate"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		jobs: {
			requestType: RequestType.Get,
			returnType: "synchronizationJobs"
		},
		templates: {
			requestType: RequestType.Get,
			returnType: "synchronizationTemplates"
		},
		acquireAccessToken: {
			argNames: ["credentials"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	synchronizationJob: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bulkUpload: {
			returnType: "bulkUpload"
		},
		schema: {
			returnType: "synchronizationSchema"
		},
		pause: {
			requestType: RequestType.PostWithArgsInBody,
		},
		provisionOnDemand: {
			argNames: ["parameters"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.stringKeyStringValuePair"
		},
		restart: {
			argNames: ["criteria"],
			requestType: RequestType.PostWithArgsInBody,
		},
		start: {
			requestType: RequestType.PostWithArgsInBody,
		},
		validateCredentials: {
			argNames: ["applicationIdentifier", "templateId", "useSavedCredentials", "credentials"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	synchronizationJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	synchronizationSchema: {
		properties: [
			"directories|directoryDefinitions|/[Name]|directoryDefinition"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directories: {
			requestType: RequestType.Get,
			returnType: "directoryDefinitions"
		},
		parseExpression: {
			argNames: ["expression", "testInputObject", "targetAttributeDefinition"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.parseExpressionResponse"
		},
		filterOperators: {
			requestType: RequestType.Get,
			returnType: "EntityTypes.filterOperatorSchema[]"
		},
		functions: {
			requestType: RequestType.Get,
			returnType: "EntityTypes.attributeMappingFunctionSchema[]"
		},
	},
	synchronizationTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		schema: {
			returnType: "synchronizationSchema"
		},
	},
	synchronizationTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	tag: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetDeviceGroup: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetDeviceGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppConfiguration: {
		properties: [
			"apps|managedMobileApps|/[Name]|managedMobileApp", "assignments|targetedManagedAppPolicyAssignments|/[Name]|targetedManagedAppPolicyAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		apps: {
			requestType: RequestType.Get,
			returnType: "managedMobileApps"
		},
		assignments: {
			requestType: RequestType.Get,
			returnType: "targetedManagedAppPolicyAssignments"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
		targetApps: {
			argNames: ["apps", "appGroupType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	targetedManagedAppConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppPolicyAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetedManagedAppPolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppProtection: {
		properties: [
			"assignments|targetedManagedAppPolicyAssignments|/[Name]|targetedManagedAppPolicyAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "targetedManagedAppPolicyAssignments"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
		targetApps: {
			argNames: ["apps", "appGroupType"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	task: {
		properties: [
			"taskProcessingResults|taskProcessingResults|/[Name]|taskProcessingResult"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		taskProcessingResults: {
			requestType: RequestType.Get,
			returnType: "taskProcessingResults"
		},
	},
	taskDefinition: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	taskFileAttachment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	taskProcessingResult: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subject: {
			returnType: "user"
		},
		task: {
			returnType: "task"
		},
	},
	taskReport: {
		properties: [
			"taskProcessingResults|taskProcessingResults|/[Name]|taskProcessingResult"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		task: {
			returnType: "task"
		},
		taskDefinition: {
			returnType: "taskDefinition"
		},
		taskProcessingResults: {
			requestType: RequestType.Get,
			returnType: "taskProcessingResults"
		},
	},
	team: {
		properties: [
			"allChannels|channels|/[Name]|channel", "channels|channels|/[Name]|channel", "incomingChannels|channels|/[Name]|channel", "installedApps|teamsAppInstallations|/[Name]|teamsAppInstallation", "members|conversationMembers|/[Name]|conversationMember", "operations|teamsAsyncOperations|/[Name]|teamsAsyncOperation", "permissionGrants|resourceSpecificPermissionGrants|/[Name]|resourceSpecificPermissionGrant", "tags|teamworkTags|/[Name]|teamworkTag"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		allChannels: {
			requestType: RequestType.Get,
			returnType: "channels"
		},
		channels: {
			requestType: RequestType.Get,
			returnType: "channels"
		},
		group: {
			returnType: "group"
		},
		incomingChannels: {
			requestType: RequestType.Get,
			returnType: "channels"
		},
		installedApps: {
			requestType: RequestType.Get,
			returnType: "teamsAppInstallations"
		},
		members: {
			requestType: RequestType.Get,
			returnType: "conversationMembers"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "teamsAsyncOperations"
		},
		permissionGrants: {
			requestType: RequestType.Get,
			returnType: "resourceSpecificPermissionGrants"
		},
		photo: {
			returnType: "profilePhoto"
		},
		primaryChannel: {
			returnType: "channel"
		},
		tags: {
			requestType: RequestType.Get,
			returnType: "teamworkTags"
		},
		template: {
			returnType: "teamsTemplate"
		},
		schedule: {
			returnType: "schedule"
		},
		archive: {
			argNames: ["shouldSetSpoSiteReadOnlyForMembers"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unarchive: {
			requestType: RequestType.PostWithArgsInBody,
		},
		completeMigration: {
			requestType: RequestType.PostWithArgsInBody,
		},
		clone: {
			argNames: ["displayName", "description", "mailNickname", "classification", "visibility", "partsToClone"],
			requestType: RequestType.PostWithArgsInBody,
		},
		sendActivityNotification: {
			argNames: ["topic", "activityType", "chainId", "previewText", "teamsAppId", "templateParameters", "recipient"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	teams: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamInfo: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		team: {
			returnType: "team"
		},
	},
	teamsApp: {
		properties: [
			"appDefinitions|teamsAppDefinitions|/[Name]|teamsAppDefinition"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appDefinitions: {
			requestType: RequestType.Get,
			returnType: "teamsAppDefinitions"
		},
	},
	teamsApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsAppDefinition: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bot: {
			returnType: "teamworkBot"
		},
	},
	teamsAppDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsAppInstallation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApp: {
			returnType: "teamsApp"
		},
		teamsAppDefinition: {
			returnType: "teamsAppDefinition"
		},
		upgrade: {
			argNames: ["consentedPermissionSet"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	teamsAppInstallations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsAppSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamsAsyncOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamsAsyncOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsTab: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApp: {
			returnType: "teamsApp"
		},
	},
	teamsTabs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsTemplate: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamwork: {
		properties: [
			"workforceIntegrations|workforceIntegrations|/[Name]|workforceIntegration", "deletedChats|deletedChats|/[Name]|deletedChat", "deletedTeams|deletedTeams|/[Name]|deletedTeam"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workforceIntegrations: {
			requestType: RequestType.Get,
			returnType: "workforceIntegrations"
		},
		deletedChats: {
			requestType: RequestType.Get,
			returnType: "deletedChats"
		},
		deletedTeams: {
			requestType: RequestType.Get,
			returnType: "deletedTeams"
		},
		teamsAppSettings: {
			returnType: "teamsAppSettings"
		},
		sendActivityNotificationToRecipients: {
			argNames: ["topic", "activityType", "chainId", "previewText", "teamsAppId", "templateParameters", "recipients"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	teamworkBot: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkHostedContent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkTag: {
		properties: [
			"members|teamworkTagMembers|/[Name]|teamworkTagMember"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		members: {
			requestType: RequestType.Get,
			returnType: "teamworkTagMembers"
		},
	},
	teamworkTags: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamworkTagMember: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkTagMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	telecomExpenseManagementPartner: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	telecomExpenseManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	temporaryAccessPassAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	temporaryAccessPassAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	temporaryAccessPassAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	tenantAppManagementPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tenantRelationship: {
		properties: [
			"delegatedAdminCustomers|delegatedAdminCustomers|/[Name]|delegatedAdminCustomer", "delegatedAdminRelationships|delegatedAdminRelationships|/[Name]|delegatedAdminRelationship"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		multiTenantOrganization: {
			returnType: "multiTenantOrganization"
		},
		delegatedAdminCustomers: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminCustomers"
		},
		delegatedAdminRelationships: {
			requestType: RequestType.Get,
			returnType: "delegatedAdminRelationships"
		},
		findTenantInformationByDomainName: {
			argNames: ["domainName"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.tenantInformation"
		},
		findTenantInformationByTenantId: {
			argNames: ["tenantId"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.tenantInformation"
		},
	},
	term: {
		properties: [
			"children|terms|/[Name]|term", "relations|relations|/[Name]|relation"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		children: {
			requestType: RequestType.Get,
			returnType: "terms"
		},
		relations: {
			requestType: RequestType.Get,
			returnType: "relations"
		},
		set: {
			returnType: "set"
		},
	},
	termsAndConditions: {
		properties: [
			"acceptanceStatuses|termsAndConditionsAcceptanceStatuss|/[Name]|termsAndConditionsAcceptanceStatus", "assignments|termsAndConditionsAssignments|/[Name]|termsAndConditionsAssignment"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		acceptanceStatuses: {
			requestType: RequestType.Get,
			returnType: "termsAndConditionsAcceptanceStatuss"
		},
		assignments: {
			requestType: RequestType.Get,
			returnType: "termsAndConditionsAssignments"
		},
	},
	termsAndConditionss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	termsAndConditionsAcceptanceStatus: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		termsAndConditions: {
			returnType: "termsAndConditions"
		},
	},
	termsAndConditionsAcceptanceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	termsAndConditionsAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	termsAndConditionsAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	termsOfUseContainer: {
		properties: [
			"agreementAcceptances|agreementAcceptances|/[Name]|agreementAcceptance", "agreements|agreements|/[Name]|agreement"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		agreementAcceptances: {
			requestType: RequestType.Get,
			returnType: "agreementAcceptances"
		},
		agreements: {
			requestType: RequestType.Get,
			returnType: "agreements"
		},
	},
	textWebPart: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	threatAssessmentRequest: {
		properties: [
			"results|threatAssessmentResults|/[Name]|threatAssessmentResult"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		results: {
			requestType: RequestType.Get,
			returnType: "threatAssessmentResults"
		},
	},
	threatAssessmentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	threatAssessmentResult: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	threatAssessmentResults: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	threatIntelligence: {
		properties: [
			"articleIndicators|articleIndicators|/[Name]|articleIndicator", "articles|articles|/[Name]|article", "hostComponents|hostComponents|/[Name]|hostComponent", "hostCookies|hostCookies|/[Name]|hostCookie", "hostPairs|hostPairs|/[Name]|hostPair", "hostPorts|hostPorts|/[Name]|hostPort", "hosts|hosts|/[Name]|host", "hostSslCertificates|hostSslCertificates|/[Name]|hostSslCertificate", "hostTrackers|hostTrackers|/[Name]|hostTracker", "intelligenceProfileIndicators|intelligenceProfileIndicators|/[Name]|intelligenceProfileIndicator", "intelProfiles|intelligenceProfiles|/[Name]|intelligenceProfile", "passiveDnsRecords|passiveDnsRecords|/[Name]|passiveDnsRecord", "sslCertificates|sslCertificates|/[Name]|sslCertificate", "subdomains|subdomains|/[Name]|subdomain", "vulnerabilities|vulnerabilitys|/[Name]|vulnerability", "whoisHistoryRecords|whoisHistoryRecords|/[Name]|whoisHistoryRecord", "whoisRecords|whoisRecords|/[Name]|whoisRecord"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		articleIndicators: {
			requestType: RequestType.Get,
			returnType: "articleIndicators"
		},
		articles: {
			requestType: RequestType.Get,
			returnType: "articles"
		},
		hostComponents: {
			requestType: RequestType.Get,
			returnType: "hostComponents"
		},
		hostCookies: {
			requestType: RequestType.Get,
			returnType: "hostCookies"
		},
		hostPairs: {
			requestType: RequestType.Get,
			returnType: "hostPairs"
		},
		hostPorts: {
			requestType: RequestType.Get,
			returnType: "hostPorts"
		},
		hosts: {
			requestType: RequestType.Get,
			returnType: "hosts"
		},
		hostSslCertificates: {
			requestType: RequestType.Get,
			returnType: "hostSslCertificates"
		},
		hostTrackers: {
			requestType: RequestType.Get,
			returnType: "hostTrackers"
		},
		intelligenceProfileIndicators: {
			requestType: RequestType.Get,
			returnType: "intelligenceProfileIndicators"
		},
		intelProfiles: {
			requestType: RequestType.Get,
			returnType: "intelligenceProfiles"
		},
		passiveDnsRecords: {
			requestType: RequestType.Get,
			returnType: "passiveDnsRecords"
		},
		sslCertificates: {
			requestType: RequestType.Get,
			returnType: "sslCertificates"
		},
		subdomains: {
			requestType: RequestType.Get,
			returnType: "subdomains"
		},
		vulnerabilities: {
			requestType: RequestType.Get,
			returnType: "vulnerabilitys"
		},
		whoisHistoryRecords: {
			requestType: RequestType.Get,
			returnType: "whoisHistoryRecords"
		},
		whoisRecords: {
			requestType: RequestType.Get,
			returnType: "whoisRecords"
		},
	},
	thumbnailSet: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	thumbnailSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOff: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOffReason: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffReasons: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOffRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	todo: {
		properties: [
			"lists|todoTaskLists|/[Name]|todoTaskList"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		lists: {
			requestType: RequestType.Get,
			returnType: "todoTaskLists"
		},
	},
	todoTask: {
		properties: [
			"attachments|attachmentBases|/[Name]|attachmentBase", "attachmentSessions|attachmentSessions|/[Name]|attachmentSession", "checklistItems|checklistItems|/[Name]|checklistItem", "extensions|extensions|/[Name]|extension", "linkedResources|linkedResources|/[Name]|linkedResource"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attachments: {
			requestType: RequestType.Get,
			returnType: "attachmentBases"
		},
		attachmentSessions: {
			requestType: RequestType.Get,
			returnType: "attachmentSessions"
		},
		checklistItems: {
			requestType: RequestType.Get,
			returnType: "checklistItems"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		linkedResources: {
			requestType: RequestType.Get,
			returnType: "linkedResources"
		},
	},
	todoTasks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	todoTaskList: {
		properties: [
			"extensions|extensions|/[Name]|extension", "tasks|todoTasks|/[Name]|todoTask"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "todoTasks"
		},
	},
	todoTaskLists: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	tokenIssuancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tokenIssuancePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	tokenLifetimePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tokenLifetimePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	training: {
		properties: [
			"languageDetails|trainingLanguageDetails|/[Name]|trainingLanguageDetail"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		languageDetails: {
			requestType: RequestType.Get,
			returnType: "trainingLanguageDetails"
		},
	},
	trainings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	trainingLanguageDetail: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	trainingLanguageDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	trending: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "entity"
		},
	},
	trendings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	triggerTypesRoot: {
		properties: [
			"retentionEventTypes|retentionEventTypes|/[Name]|retentionEventType"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEventTypes: {
			requestType: RequestType.Get,
			returnType: "retentionEventTypes"
		},
	},
	triggersRoot: {
		properties: [
			"retentionEvents|retentionEvents|/[Name]|retentionEvent"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEvents: {
			requestType: RequestType.Get,
			returnType: "retentionEvents"
		},
	},
	unbilledUsage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unclassifiedArtifact: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedGroupSource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
	},
	unifiedRbacResourceAction: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRbacResourceActions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRbacResourceNamespace: {
		properties: [
			"resourceActions|unifiedRbacResourceActions|/[Name]|unifiedRbacResourceAction"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resourceActions: {
			requestType: RequestType.Get,
			returnType: "unifiedRbacResourceActions"
		},
	},
	unifiedRbacResourceNamespaces: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedRoleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignmentSchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
	},
	unifiedRoleAssignmentSchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignmentScheduleInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "unifiedRoleEligibilityScheduleInstance"
		},
	},
	unifiedRoleAssignmentScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignmentScheduleRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
		targetSchedule: {
			returnType: "unifiedRoleAssignmentSchedule"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	unifiedRoleAssignmentScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleDefinition: {
		properties: [
			"inheritsPermissionsFrom|unifiedRoleDefinitions|/[Name]|unifiedRoleDefinition"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		inheritsPermissionsFrom: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleDefinitions"
		},
	},
	unifiedRoleDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleEligibilitySchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleEligibilitySchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleEligibilityScheduleInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleEligibilityScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleEligibilityScheduleRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
		targetSchedule: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	unifiedRoleEligibilityScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleManagementPolicy: {
		properties: [
			"effectiveRules|unifiedRoleManagementPolicyRules|/[Name]|unifiedRoleManagementPolicyRule", "rules|unifiedRoleManagementPolicyRules|/[Name]|unifiedRoleManagementPolicyRule"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		effectiveRules: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleManagementPolicyRules"
		},
		rules: {
			requestType: RequestType.Get,
			returnType: "unifiedRoleManagementPolicyRules"
		},
	},
	unifiedRoleManagementPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleManagementPolicyApprovalRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		policy: {
			returnType: "unifiedRoleManagementPolicy"
		},
	},
	unifiedRoleManagementPolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleManagementPolicyAuthenticationContextRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyEnablementRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyExpirationRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyNotificationRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyRule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleScheduleBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedRoleScheduleInstanceBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedStorageQuota: {
		properties: [
			"services|serviceStorageQuotaBreakdowns|/[Name]|serviceStorageQuotaBreakdown"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		services: {
			requestType: RequestType.Get,
			returnType: "serviceStorageQuotaBreakdowns"
		},
	},
	unmuteParticipantOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	updateRecordingStatusOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	urlAssessmentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	usedInsight: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "entity"
		},
	},
	usedInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	user: {
		properties: [
			"appRoleAssignments|appRoleAssignments|/[Name]|appRoleAssignment", "createdObjects|directoryObjects|/[Name]|directoryObject", "directReports|directoryObjects|/[Name]|directoryObject", "licenseDetails|licenseDetailss|/[Name]|licenseDetails", "memberOf|directoryObjects|/[Name]|directoryObject", "oauth2PermissionGrants|oAuth2PermissionGrants|/[Name]|oAuth2PermissionGrant", "ownedDevices|directoryObjects|/[Name]|directoryObject", "ownedObjects|directoryObjects|/[Name]|directoryObject", "registeredDevices|directoryObjects|/[Name]|directoryObject", "scopedRoleMemberOf|scopedRoleMemberships|/[Name]|scopedRoleMembership", "sponsors|directoryObjects|/[Name]|directoryObject", "transitiveMemberOf|directoryObjects|/[Name]|directoryObject", "calendarGroups|calendarGroups|/[Name]|calendarGroup", "calendars|calendars|/[Name]|calendar", "calendarView|events|/[Name]|event", "contactFolders|contactFolders|/[Name]|contactFolder", "contacts|contacts|/[Name]|contact", "events|events|/[Name]|event", "mailFolders|mailFolders|/[Name]|mailFolder", "messages|messages|/[Name]|message", "people|persons|/[Name]|person", "drives|drives|/[Name]|drive", "followedSites|sites|/[Name]|site", "extensions|extensions|/[Name]|extension", "agreementAcceptances|agreementAcceptances|/[Name]|agreementAcceptance", "managedDevices|managedDevices|/[Name]|managedDevice", "managedAppRegistrations|managedAppRegistrations|/[Name]|managedAppRegistration", "deviceManagementTroubleshootingEvents|deviceManagementTroubleshootingEvents|/[Name]|deviceManagementTroubleshootingEvent", "photos|profilePhotos|/[Name]|profilePhoto", "activities|userActivitys|/[Name]|userActivity", "onlineMeetings|onlineMeetings|/[Name]|onlineMeeting", "chats|chats|/[Name]|chat", "joinedTeams|teams|/[Name]|team", "permissionGrants|resourceSpecificPermissionGrants|/[Name]|resourceSpecificPermissionGrant"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appRoleAssignments: {
			requestType: RequestType.Get,
			returnType: "appRoleAssignments"
		},
		createdObjects: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		directReports: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		licenseDetails: {
			requestType: RequestType.Get,
			returnType: "licenseDetailss"
		},
		manager: {
			returnType: "directoryObject"
		},
		memberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		oauth2PermissionGrants: {
			requestType: RequestType.Get,
			returnType: "oAuth2PermissionGrants"
		},
		ownedDevices: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		ownedObjects: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		registeredDevices: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		scopedRoleMemberOf: {
			requestType: RequestType.Get,
			returnType: "scopedRoleMemberships"
		},
		sponsors: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		transitiveMemberOf: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
		calendar: {
			returnType: "calendar"
		},
		calendarGroups: {
			requestType: RequestType.Get,
			returnType: "calendarGroups"
		},
		calendars: {
			requestType: RequestType.Get,
			returnType: "calendars"
		},
		calendarView: {
			requestType: RequestType.Get,
			returnType: "events"
		},
		contactFolders: {
			requestType: RequestType.Get,
			returnType: "contactFolders"
		},
		contacts: {
			requestType: RequestType.Get,
			returnType: "contacts"
		},
		events: {
			requestType: RequestType.Get,
			returnType: "events"
		},
		inferenceClassification: {
			returnType: "inferenceClassification"
		},
		mailFolders: {
			requestType: RequestType.Get,
			returnType: "mailFolders"
		},
		messages: {
			requestType: RequestType.Get,
			returnType: "messages"
		},
		outlook: {
			returnType: "outlookUser"
		},
		people: {
			requestType: RequestType.Get,
			returnType: "persons"
		},
		drive: {
			returnType: "drive"
		},
		drives: {
			requestType: RequestType.Get,
			returnType: "drives"
		},
		followedSites: {
			requestType: RequestType.Get,
			returnType: "sites"
		},
		extensions: {
			requestType: RequestType.Get,
			returnType: "extensions"
		},
		agreementAcceptances: {
			requestType: RequestType.Get,
			returnType: "agreementAcceptances"
		},
		managedDevices: {
			requestType: RequestType.Get,
			returnType: "managedDevices"
		},
		managedAppRegistrations: {
			requestType: RequestType.Get,
			returnType: "managedAppRegistrations"
		},
		deviceManagementTroubleshootingEvents: {
			requestType: RequestType.Get,
			returnType: "deviceManagementTroubleshootingEvents"
		},
		planner: {
			returnType: "plannerUser"
		},
		insights: {
			returnType: "itemInsights"
		},
		settings: {
			returnType: "userSettings"
		},
		onenote: {
			returnType: "onenote"
		},
		cloudClipboard: {
			returnType: "cloudClipboardRoot"
		},
		photo: {
			returnType: "profilePhoto"
		},
		photos: {
			requestType: RequestType.Get,
			returnType: "profilePhotos"
		},
		activities: {
			requestType: RequestType.Get,
			returnType: "userActivitys"
		},
		onlineMeetings: {
			requestType: RequestType.Get,
			returnType: "onlineMeetings"
		},
		presence: {
			returnType: "presence"
		},
		authentication: {
			returnType: "authentication"
		},
		chats: {
			requestType: RequestType.Get,
			returnType: "chats"
		},
		joinedTeams: {
			requestType: RequestType.Get,
			returnType: "teams"
		},
		permissionGrants: {
			requestType: RequestType.Get,
			returnType: "resourceSpecificPermissionGrants"
		},
		teamwork: {
			returnType: "userTeamwork"
		},
		solutions: {
			returnType: "userSolutionRoot"
		},
		todo: {
			returnType: "todo"
		},
		employeeExperience: {
			returnType: "employeeExperienceUser"
		},
		assignLicense: {
			argNames: ["addLicenses", "removeLicenses"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.user"
		},
		changePassword: {
			argNames: ["currentPassword", "newPassword"],
			requestType: RequestType.PostWithArgsInBody,
		},
		reprocessLicenseAssignment: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.user"
		},
		retryServiceProvisioning: {
			requestType: RequestType.PostWithArgsInBody,
		},
		revokeSignInSessions: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "boolean"
		},
		findMeetingTimes: {
			argNames: ["attendees", "locationConstraint", "timeConstraint", "meetingDuration", "maxCandidates", "isOrganizerOptional", "returnSuggestionReasons", "minimumAttendeePercentage"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.meetingTimeSuggestionsResult"
		},
		getMailTips: {
			argNames: ["EmailAddresses", "MailTipsOptions"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.mailTips[]"
		},
		sendMail: {
			argNames: ["Message", "SaveToSentItems"],
			requestType: RequestType.PostWithArgsInBody,
		},
		translateExchangeIds: {
			argNames: ["InputIds", "TargetIdType", "SourceIdType"],
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.convertIdResult[]"
		},
		removeAllDevicesFromManagement: {
			requestType: RequestType.PostWithArgsInBody,
		},
		wipeManagedAppRegistrationsByDeviceTag: {
			argNames: ["deviceTag"],
			requestType: RequestType.PostWithArgsInBody,
		},
		exportPersonalData: {
			argNames: ["storageLocation"],
			requestType: RequestType.PostWithArgsInBody,
		},
		exportDeviceAndAppManagementData: {
			argNames: ["skip", "top"],
			requestType: RequestType.Get,
			returnType: "ComplexTypes.deviceAndAppManagementData"
		},
		getManagedAppDiagnosticStatuses: {
			requestType: RequestType.Get,
			returnType: "ComplexTypes.managedAppDiagnosticStatus[]"
		},
		getManagedAppPolicies: {
			requestType: RequestType.Get,
			returnType: "EntityTypes.managedAppPolicy[]"
		},
		getManagedDevicesWithAppFailures: {
			requestType: RequestType.Get,
			returnType: "Array<string>[]"
		},
	},
	users: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userActivity: {
		properties: [
			"historyItems|activityHistoryItems|/[Name]|activityHistoryItem"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		historyItems: {
			requestType: RequestType.Get,
			returnType: "activityHistoryItems"
		},
	},
	userActivitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userConsentRequest: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		approval: {
			returnType: "approval"
		},
	},
	userConsentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIds: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthApplicationPerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthApplicationPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDeviceModelPerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDeviceModelPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDevicePerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDevicePerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthOSVersionPerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthOSVersionPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsBaseline: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appHealthMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		batteryHealthMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		bestPracticesMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		deviceBootPerformanceMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		rebootAnalyticsMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		resourcePerformanceMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		workFromAnywhereMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
	},
	userExperienceAnalyticsBaselines: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsCategory: {
		properties: [
			"metricValues|userExperienceAnalyticsMetrics|/[Name]|userExperienceAnalyticsMetric"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		metricValues: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsMetrics"
		},
	},
	userExperienceAnalyticsCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDevicePerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDevicePerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceScores: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceScoress: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupHistory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupProcess: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupProcesss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupProcessPerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupProcessPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsMetric: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsMetrics: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsMetricHistory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsMetricHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsModelScores: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsModelScoress: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsOverview: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsScoreHistory: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsScoreHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsWorkFromAnywhereDevice: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereMetric: {
		properties: [
			"metricDevices|userExperienceAnalyticsWorkFromAnywhereDevices|/[Name]|userExperienceAnalyticsWorkFromAnywhereDevice"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		metricDevices: {
			requestType: RequestType.Get,
			returnType: "userExperienceAnalyticsWorkFromAnywhereDevices"
		},
	},
	userExperienceAnalyticsWorkFromAnywhereMetrics: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userFlowLanguageConfiguration: {
		properties: [
			"defaultPages|userFlowLanguagePages|/[Name]|userFlowLanguagePage", "overridesPages|userFlowLanguagePages|/[Name]|userFlowLanguagePage"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		defaultPages: {
			requestType: RequestType.Get,
			returnType: "userFlowLanguagePages"
		},
		overridesPages: {
			requestType: RequestType.Get,
			returnType: "userFlowLanguagePages"
		},
	},
	userFlowLanguageConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userFlowLanguagePage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userFlowLanguagePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userInsightsSettings: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userInstallStateSummary: {
		properties: [
			"deviceStates|deviceInstallStates|/[Name]|deviceInstallState"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceStates: {
			requestType: RequestType.Get,
			returnType: "deviceInstallStates"
		},
	},
	userInstallStateSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userProcessingResult: {
		properties: [
			"taskProcessingResults|taskProcessingResults|/[Name]|taskProcessingResult"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subject: {
			returnType: "user"
		},
		taskProcessingResults: {
			requestType: RequestType.Get,
			returnType: "taskProcessingResults"
		},
	},
	userRegistrationDetails: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userRegistrationDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userScopeTeamsAppInstallation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		chat: {
			returnType: "chat"
		},
	},
	userScopeTeamsAppInstallations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userSettings: {
		properties: [
			"windows|windowsSettings|/[Name]|windowsSetting"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		itemInsights: {
			returnType: "userInsightsSettings"
		},
		windows: {
			requestType: RequestType.Get,
			returnType: "windowsSettings"
		},
		shiftPreferences: {
			returnType: "shiftPreferences"
		},
		storage: {
			returnType: "userStorage"
		},
	},
	userSignInInsight: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userSolutionRoot: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workingTimeSchedule: {
			returnType: "workingTimeSchedule"
		},
	},
	userSource: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userStorage: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	userTeamwork: {
		properties: [
			"associatedTeams|associatedTeamInfos|/[Name]|associatedTeamInfo", "installedApps|userScopeTeamsAppInstallations|/[Name]|userScopeTeamsAppInstallation"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		associatedTeams: {
			requestType: RequestType.Get,
			returnType: "associatedTeamInfos"
		},
		installedApps: {
			requestType: RequestType.Get,
			returnType: "userScopeTeamsAppInstallations"
		},
		sendActivityNotification: {
			argNames: ["topic", "activityType", "chainId", "previewText", "teamsAppId", "templateParameters"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	verticalSection: {
		properties: [
			"webparts|webParts|/[Name]|webPart"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		webparts: {
			requestType: RequestType.Get,
			returnType: "webParts"
		},
	},
	virtualEndpoint: {
		properties: [
			"auditEvents|cloudPcAuditEvents|/[Name]|cloudPcAuditEvent", "cloudPCs|cloudPCs|/[Name]|cloudPC", "deviceImages|cloudPcDeviceImages|/[Name]|cloudPcDeviceImage", "galleryImages|cloudPcGalleryImages|/[Name]|cloudPcGalleryImage", "onPremisesConnections|cloudPcOnPremisesConnections|/[Name]|cloudPcOnPremisesConnection", "provisioningPolicies|cloudPcProvisioningPolicys|/[Name]|cloudPcProvisioningPolicy", "userSettings|cloudPcUserSettings|/[Name]|cloudPcUserSetting"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		auditEvents: {
			requestType: RequestType.Get,
			returnType: "cloudPcAuditEvents"
		},
		cloudPCs: {
			requestType: RequestType.Get,
			returnType: "cloudPCs"
		},
		deviceImages: {
			requestType: RequestType.Get,
			returnType: "cloudPcDeviceImages"
		},
		galleryImages: {
			requestType: RequestType.Get,
			returnType: "cloudPcGalleryImages"
		},
		onPremisesConnections: {
			requestType: RequestType.Get,
			returnType: "cloudPcOnPremisesConnections"
		},
		provisioningPolicies: {
			requestType: RequestType.Get,
			returnType: "cloudPcProvisioningPolicys"
		},
		userSettings: {
			requestType: RequestType.Get,
			returnType: "cloudPcUserSettings"
		},
	},
	virtualEvent: {
		properties: [
			"presenters|virtualEventPresenters|/[Name]|virtualEventPresenter", "sessions|virtualEventSessions|/[Name]|virtualEventSession"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		presenters: {
			requestType: RequestType.Get,
			returnType: "virtualEventPresenters"
		},
		sessions: {
			requestType: RequestType.Get,
			returnType: "virtualEventSessions"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
		publish: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	virtualEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventPresenter: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventPresenters: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventRegistration: {
		properties: [
			"sessions|virtualEventSessions|/[Name]|virtualEventSession"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sessions: {
			requestType: RequestType.Get,
			returnType: "virtualEventSessions"
		},
		cancel: {
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	virtualEventRegistrations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventRegistrationConfiguration: {
		properties: [
			"questions|virtualEventRegistrationQuestionBases|/[Name]|virtualEventRegistrationQuestionBase"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		questions: {
			requestType: RequestType.Get,
			returnType: "virtualEventRegistrationQuestionBases"
		},
	},
	virtualEventRegistrationCustomQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationPredefinedQuestion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationQuestionBase: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationQuestionBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventSession: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventTownhall: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventTownhalls: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventWebinar: {
		properties: [
			"registrations|virtualEventRegistrations|/[Name]|virtualEventRegistration"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		registrationConfiguration: {
			returnType: "virtualEventWebinarRegistrationConfiguration"
		},
		registrations: {
			requestType: RequestType.Get,
			returnType: "virtualEventRegistrations"
		},
	},
	virtualEventWebinars: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventWebinarRegistrationConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventsRoot: {
		properties: [
			"events|virtualEvents|/[Name]|virtualEvent", "townhalls|virtualEventTownhalls|/[Name]|virtualEventTownhall", "webinars|virtualEventWebinars|/[Name]|virtualEventWebinar"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		events: {
			requestType: RequestType.Get,
			returnType: "virtualEvents"
		},
		townhalls: {
			requestType: RequestType.Get,
			returnType: "virtualEventTownhalls"
		},
		webinars: {
			requestType: RequestType.Get,
			returnType: "virtualEventWebinars"
		},
	},
	voiceAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	vppToken: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		syncLicenses: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "EntityTypes.vppToken"
		},
	},
	vppTokens: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	vulnerability: {
		properties: [
			"articles|articles|/[Name]|article", "components|vulnerabilityComponents|/[Name]|vulnerabilityComponent"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		articles: {
			requestType: RequestType.Get,
			returnType: "articles"
		},
		components: {
			requestType: RequestType.Get,
			returnType: "vulnerabilityComponents"
		},
	},
	vulnerabilityComponent: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	webApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	webPart: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getPositionOfWebPart: {
			requestType: RequestType.PostWithArgsInBody,
			returnType: "ComplexTypes.webPartPosition"
		},
	},
	webParts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	whoisBaseRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	whoisHistoryRecord: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	whoisRecord: {
		properties: [
			"history|whoisHistoryRecords|/[Name]|whoisHistoryRecord"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		history: {
			requestType: RequestType.Get,
			returnType: "whoisHistoryRecords"
		},
	},
	win32LobApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10CompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10CustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EndpointProtectionConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EnrollmentCompletionPageConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EnterpriseModernAppManagementConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10GeneralConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10MobileCompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10SecureAssessmentConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10TeamGeneralConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows81CompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows81GeneralConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAppX: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAutopilotDeploymentProfile: {
		properties: [
			"assignedDevices|windowsAutopilotDeviceIdentitys|/[Name]|windowsAutopilotDeviceIdentity"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignedDevices: {
			requestType: RequestType.Get,
			returnType: "windowsAutopilotDeviceIdentitys"
		},
	},
	windowsAutopilotDeploymentProfileAssignment: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAutopilotDeviceIdentity: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignUserToDevice: {
			argNames: ["userPrincipalName", "addressableUserName"],
			requestType: RequestType.PostWithArgsInBody,
		},
		unassignUserFromDevice: {
			requestType: RequestType.PostWithArgsInBody,
		},
		updateDeviceProperties: {
			argNames: ["userPrincipalName", "addressableUserName", "groupTag", "displayName"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	windowsAutopilotDeviceIdentitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsDefenderAdvancedThreatProtectionConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsDeviceMalwareState: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsDeviceMalwareStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsHelloForBusinessAuthenticationMethod: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		device: {
			returnType: "device"
		},
	},
	windowsHelloForBusinessAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtection: {
		properties: [
			"assignments|targetedManagedAppPolicyAssignments|/[Name]|targetedManagedAppPolicyAssignment", "exemptAppLockerFiles|windowsInformationProtectionAppLockerFiles|/[Name]|windowsInformationProtectionAppLockerFile", "protectedAppLockerFiles|windowsInformationProtectionAppLockerFiles|/[Name]|windowsInformationProtectionAppLockerFile"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "targetedManagedAppPolicyAssignments"
		},
		exemptAppLockerFiles: {
			requestType: RequestType.Get,
			returnType: "windowsInformationProtectionAppLockerFiles"
		},
		protectedAppLockerFiles: {
			requestType: RequestType.Get,
			returnType: "windowsInformationProtectionAppLockerFiles"
		},
		assign: {
			argNames: ["assignments"],
			requestType: RequestType.PostWithArgsInBody,
		},
	},
	windowsInformationProtectionAppLearningSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionAppLearningSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionAppLockerFile: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionAppLockerFiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionNetworkLearningSummary: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionNetworkLearningSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionPolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsMalwareInformation: {
		properties: [
			"deviceMalwareStates|malwareStateForWindowsDevices|/[Name]|malwareStateForWindowsDevice"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceMalwareStates: {
			requestType: RequestType.Get,
			returnType: "malwareStateForWindowsDevices"
		},
	},
	windowsMalwareInformations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsMicrosoftEdgeApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsMobileMSI: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81CompliancePolicy: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81CustomConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81GeneralConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsProtectionState: {
		properties: [
			"detectedMalwareState|windowsDeviceMalwareStates|/[Name]|windowsDeviceMalwareState"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		detectedMalwareState: {
			requestType: RequestType.Get,
			returnType: "windowsDeviceMalwareStates"
		},
	},
	windowsSetting: {
		properties: [
			"instances|windowsSettingInstances|/[Name]|windowsSettingInstance"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		instances: {
			requestType: RequestType.Get,
			returnType: "windowsSettingInstances"
		},
	},
	windowsSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsSettingInstance: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsSettingInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsUniversalAppX: {
		properties: [
			"committedContainedApps|mobileContainedApps|/[Name]|mobileContainedApp"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		committedContainedApps: {
			requestType: RequestType.Get,
			returnType: "mobileContainedApps"
		},
	},
	windowsUniversalAppXContainedApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsUpdateForBusinessConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsWebApp: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbook: {
		properties: [
			"comments|workbookComments|/[Name]|workbookComment", "names|workbookNamedItems|/[Name]|workbookNamedItem", "operations|workbookOperations|/[Name]|workbookOperation", "tables|workbookTables|/[Name]|workbookTable", "worksheets|workbookWorksheets|/[Name]|workbookWorksheet"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		application: {
			returnType: "workbookApplication"
		},
		comments: {
			requestType: RequestType.Get,
			returnType: "workbookComments"
		},
		functions: {
			returnType: "workbookFunctions"
		},
		names: {
			requestType: RequestType.Get,
			returnType: "workbookNamedItems"
		},
		operations: {
			requestType: RequestType.Get,
			returnType: "workbookOperations"
		},
		tables: {
			requestType: RequestType.Get,
			returnType: "workbookTables"
		},
		worksheets: {
			requestType: RequestType.Get,
			returnType: "workbookWorksheets"
		},
	},
	workbookApplication: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChart: {
		properties: [
			"series|workbookChartSeriess|/[Name]|workbookChartSeries"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		axes: {
			returnType: "workbookChartAxes"
		},
		dataLabels: {
			returnType: "workbookChartDataLabels"
		},
		format: {
			returnType: "workbookChartAreaFormat"
		},
		legend: {
			returnType: "workbookChartLegend"
		},
		series: {
			requestType: RequestType.Get,
			returnType: "workbookChartSeriess"
		},
		title: {
			returnType: "workbookChartTitle"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookCharts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookChartAreaFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartAxes: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		categoryAxis: {
			returnType: "workbookChartAxis"
		},
		seriesAxis: {
			returnType: "workbookChartAxis"
		},
		valueAxis: {
			returnType: "workbookChartAxis"
		},
	},
	workbookChartAxis: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartAxisFormat"
		},
		majorGridlines: {
			returnType: "workbookChartGridlines"
		},
		minorGridlines: {
			returnType: "workbookChartGridlines"
		},
		title: {
			returnType: "workbookChartAxisTitle"
		},
	},
	workbookChartAxisFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		font: {
			returnType: "workbookChartFont"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartAxisTitle: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartAxisTitleFormat"
		},
	},
	workbookChartAxisTitleFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabelFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabels: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartDataLabelFormat"
		},
	},
	workbookChartFill: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartFont: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartGridlines: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartGridlinesFormat"
		},
	},
	workbookChartGridlinesFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartLegend: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartLegendFormat"
		},
	},
	workbookChartLegendFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartLineFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartPoint: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartPointFormat"
		},
	},
	workbookChartPoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookChartPointFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
	},
	workbookChartSeries: {
		properties: [
			"points|workbookChartPoints|/[Name]|workbookChartPoint"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartSeriesFormat"
		},
		points: {
			requestType: RequestType.Get,
			returnType: "workbookChartPoints"
		},
	},
	workbookChartSeriess: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookChartSeriesFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartTitle: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartTitleFormat"
		},
	},
	workbookChartTitleFormat: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookComment: {
		properties: [
			"replies|workbookCommentReplys|/[Name]|workbookCommentReply"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		replies: {
			requestType: RequestType.Get,
			returnType: "workbookCommentReplys"
		},
	},
	workbookComments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookCommentReply: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookCommentReplys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookFilter: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFormatProtection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFunctionResult: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFunctions: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookNamedItem: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookNamedItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookOperation: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookPivotTable: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookPivotTables: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookRange: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookRangeFormat"
		},
		sort: {
			returnType: "workbookRangeSort"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookRangeBorder: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeBorders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookRangeFill: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeFont: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeFormat: {
		properties: [
			"borders|workbookRangeBorders|/[Name]|workbookRangeBorder"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		borders: {
			requestType: RequestType.Get,
			returnType: "workbookRangeBorders"
		},
		fill: {
			returnType: "workbookRangeFill"
		},
		font: {
			returnType: "workbookRangeFont"
		},
		protection: {
			returnType: "workbookFormatProtection"
		},
	},
	workbookRangeSort: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeView: {
		properties: [
			"rows|workbookRangeViews|/[Name]|workbookRangeView"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		rows: {
			requestType: RequestType.Get,
			returnType: "workbookRangeViews"
		},
	},
	workbookRangeViews: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTable: {
		properties: [
			"columns|workbookTableColumns|/[Name]|workbookTableColumn", "rows|workbookTableRows|/[Name]|workbookTableRow"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		columns: {
			requestType: RequestType.Get,
			returnType: "workbookTableColumns"
		},
		rows: {
			requestType: RequestType.Get,
			returnType: "workbookTableRows"
		},
		sort: {
			returnType: "workbookTableSort"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookTables: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTableColumn: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		filter: {
			returnType: "workbookFilter"
		},
	},
	workbookTableColumns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTableRow: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookTableRows: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTableSort: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookWorksheet: {
		properties: [
			"charts|workbookCharts|/[Name]|workbookChart", "names|workbookNamedItems|/[Name]|workbookNamedItem", "pivotTables|workbookPivotTables|/[Name]|workbookPivotTable", "tables|workbookTables|/[Name]|workbookTable"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		charts: {
			requestType: RequestType.Get,
			returnType: "workbookCharts"
		},
		names: {
			requestType: RequestType.Get,
			returnType: "workbookNamedItems"
		},
		pivotTables: {
			requestType: RequestType.Get,
			returnType: "workbookPivotTables"
		},
		protection: {
			returnType: "workbookWorksheetProtection"
		},
		tables: {
			requestType: RequestType.Get,
			returnType: "workbookTables"
		},
	},
	workbookWorksheets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookWorksheetProtection: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workflow: {
		properties: [
			"executionScope|userProcessingResults|/[Name]|userProcessingResult", "runs|runs|/[Name]|run", "taskReports|taskReports|/[Name]|taskReport", "userProcessingResults|userProcessingResults|/[Name]|userProcessingResult", "versions|workflowVersions|/[Name]|workflowVersion"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		executionScope: {
			requestType: RequestType.Get,
			returnType: "userProcessingResults"
		},
		runs: {
			requestType: RequestType.Get,
			returnType: "runs"
		},
		taskReports: {
			requestType: RequestType.Get,
			returnType: "taskReports"
		},
		userProcessingResults: {
			requestType: RequestType.Get,
			returnType: "userProcessingResults"
		},
		versions: {
			requestType: RequestType.Get,
			returnType: "workflowVersions"
		},
	},
	workflowBase: {
		properties: [
			"tasks|tasks|/[Name]|task"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createdBy: {
			returnType: "user"
		},
		lastModifiedBy: {
			returnType: "user"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "tasks"
		},
	},
	workflowTemplate: {
		properties: [
			"tasks|tasks|/[Name]|task"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		tasks: {
			requestType: RequestType.Get,
			returnType: "tasks"
		},
	},
	workflowVersion: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workforceIntegration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workforceIntegrations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workingTimeSchedule: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	x509CertificateAuthenticationMethodConfiguration: {
		properties: [
			"includeTargets|authenticationMethodTargets|/[Name]|authenticationMethodTarget"
		],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	x509CertificateCombinationConfiguration: {
		properties: [

		],
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
}