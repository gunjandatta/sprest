import { IMapper } from "gd-sprest-def/lib/mapperv2.d";
import { RequestType } from "../utils";

/**
 * Mapper for the v2 api.
 */
export const MapperV2: IMapper = {
	_case: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	aadUserConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		user: {
			returnType: "user"
		},
	},
	accessPackage: {
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
	},
	accessPackages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignment: {
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
	},
	accessPackageAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignmentPolicy: {
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
	},
	accessPackageAssignmentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageAssignmentRequestWorkflowExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageAssignmentWorkflowExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageCatalog: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageQuestion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessPackageQuestions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResource: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRoles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageResourceRoleScope: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceScopes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessPackageSubject: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connectedOrganization: {
			returnType: "connectedOrganization"
		},
	},
	accessPackageTextInputQuestion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessReviewHistoryDefinition: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessReviewHistoryInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewInstance: {
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
	},
	accessReviewInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewInstanceDecisionItem: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	accessReviewReviewers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewScheduleDefinition: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		instances: {
			requestType: RequestType.Get,
			returnType: "accessReviewInstances"
		},
	},
	accessReviewScheduleDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	accessReviewSet: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		decisions: {
			requestType: RequestType.Get,
			returnType: "accessReviewInstanceDecisionItems"
		},
	},
	accessReviewStages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	acronym: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	activityBasedTimeoutPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	activityBasedTimeoutPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	activityHistoryItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activity: {
			returnType: "userActivity"
		},
	},
	activityHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	addLargeGalleryViewOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	admin: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	adminMicrosoft365Apps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		installationOptions: {
			returnType: "m365AppsInstallationOptions"
		},
	},
	adminReportSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	administrativeUnit: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementAcceptances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	agreementFile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizations: {
			requestType: RequestType.Get,
			returnType: "agreementFileLocalizations"
		},
	},
	agreementFileLocalization: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementFileVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	agreementFileVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	alert: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	alerts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	allowedValue: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	allowedValues: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	androidCompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidCustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidGeneralDeviceConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidManagedAppProtection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidStoreApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileCompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileCustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	androidWorkProfileGeneralDeviceConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	anonymousGuestConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appCatalogs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApps: {
			requestType: RequestType.Get,
			returnType: "teamsApps"
		},
	},
	appConsentApprovalRoute: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appConsentRequests: {
			requestType: RequestType.Get,
			returnType: "appConsentRequests"
		},
	},
	appConsentRequest: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appLogCollectionRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appManagementPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appRoleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	appScope: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appleDeviceFeaturesConfigurationBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	appleManagedIdentityProvider: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	applePushNotificationCertificate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	application: {
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
	},
	applicationTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	approval: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	approvalStages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	article: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		indicators: {
			requestType: RequestType.Get,
			returnType: "articleIndicators"
		},
	},
	articleIndicator: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	artifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	associatedTeamInfo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	associatedTeamInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachmentBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachmentBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attachmentSession: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attachmentSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attackSimulationOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attackSimulationOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attackSimulationRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attendanceRecords: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	attributeMappingFunctionSchema: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attributeSet: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	attributeSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	audioRoutingGroup: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	audioRoutingGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	auditEvent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	auditEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	auditLogRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationCombinationConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationConditionApplication: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationContextClassReference: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationContextClassReferences: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationEventListener: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationEventListeners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationEventsFlow: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationEventsFlows: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationFlowsPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodModeDetail: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodModeDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodTarget: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationMethodsPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		authenticationMethodConfigurations: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodConfigurations"
		},
	},
	authenticationMethodsRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		userRegistrationDetails: {
			requestType: RequestType.Get,
			returnType: "userRegistrationDetailss"
		},
	},
	authenticationStrengthPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		combinationConfigurations: {
			requestType: RequestType.Get,
			returnType: "authenticationCombinationConfigurations"
		},
	},
	authenticationStrengthPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authenticationStrengthRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authoredNotes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	authorityTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	authorizationPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	azureCommunicationServicesUserConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	azureUsage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billed: {
			returnType: "billedUsage"
		},
		unbilled: {
			returnType: "unbilledUsage"
		},
	},
	b2xIdentityUserFlow: {
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
	},
	baseItem: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	baseSitePage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	baseSitePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	billedReconciliation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	billedUsage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	billing: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billed: {
			returnType: "billedReconciliation"
		},
	},
	bitlocker: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		recoveryKeys: {
			requestType: RequestType.Get,
			returnType: "bitlockerRecoveryKeys"
		},
	},
	bitlockerRecoveryKey: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bitlockerRecoveryKeys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingAppointment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingAppointments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingBusiness: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCurrencys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingCustomQuestion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomQuestions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingCustomer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomerBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingCustomerBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingService: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingServices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookingStaffMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingStaffMemberBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bookingStaffMemberBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	bookmark: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSharedCookie: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSharedCookies: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	browserSite: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	browserSites: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	browserSiteList: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sharedCookies: {
			requestType: RequestType.Get,
			returnType: "browserSharedCookies"
		},
		sites: {
			requestType: RequestType.Get,
			returnType: "browserSites"
		},
	},
	browserSiteLists: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	builtInIdentityProvider: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	bulkUpload: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	calendar: {
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
	},
	calendars: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	calendarGroup: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	calendarPermissions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	calendarSharingMessage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	call: {
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
	},
	calls: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	callRecord: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	callRecordings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	callTranscript: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	callTranscripts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cancelMediaProcessingOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	canvasLayout: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	casesRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		ediscoveryCases: {
			requestType: RequestType.Get,
			returnType: "ediscoveryCases"
		},
	},
	categoryTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subcategories: {
			requestType: RequestType.Get,
			returnType: "subcategoryTemplates"
		},
	},
	certificateBasedAuthConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	certificateBasedAuthConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	changeTrackedEntity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	channel: {
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
	},
	channels: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chat: {
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
	},
	chats: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		hostedContents: {
			requestType: RequestType.Get,
			returnType: "chatMessageHostedContents"
		},
		replies: {
			requestType: RequestType.Get,
			returnType: "chatMessages"
		},
	},
	chatMessages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessageHostedContent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	chatMessageHostedContents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	chatMessageInfo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	checklistItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	checklistItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	citationTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	claimsMappingPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	claimsMappingPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudClipboardItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudClipboardItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudClipboardRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		items: {
			requestType: RequestType.Get,
			returnType: "cloudClipboardItems"
		},
	},
	cloudCommunications: {
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
	},
	cloudPC: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPCs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcAuditEvent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcAuditEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcDeviceImage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcDeviceImages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcGalleryImage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcGalleryImages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcOnPremisesConnection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcOnPremisesConnections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcProvisioningPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "cloudPcProvisioningPolicyAssignments"
		},
	},
	cloudPcProvisioningPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcProvisioningPolicyAssignment: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "cloudPcUserSettingAssignments"
		},
	},
	cloudPcUserSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	cloudPcUserSettingAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	cloudPcUserSettingAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	columnDefinition: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sourceColumn: {
			returnType: "columnDefinition"
		},
		update: {
			argNames: ["values"],
		},
	},
	columnDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	columnLink: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	columnLinks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	commsOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	commsOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	community: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	companySubscriptions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	compliance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	complianceManagementPartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	complianceManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conditionalAccessPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conditionalAccessPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conditionalAccessRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conditionalAccessTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	connectedOrganization: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	contact: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	contentSharingSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contentType: {
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
		},
	},
	contentTypes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	contract: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conversation: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	conversationMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	conversationThread: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		posts: {
			requestType: RequestType.Get,
			returnType: "posts"
		},
	},
	conversationThreads: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	countryNamedLocation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	crossTenantAccessPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	crossTenantAccessPolicyConfigurationPartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		identitySynchronization: {
			returnType: "crossTenantIdentitySyncPolicyPartner"
		},
	},
	crossTenantIdentitySyncPolicyPartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	customAuthenticationExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	customAuthenticationExtensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customCalloutExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	customCalloutExtensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customExtensionStageSetting: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		customExtension: {
			returnType: "customCalloutExtension"
		},
	},
	customExtensionStageSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	customSecurityAttributeDefinition: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createdBy: {
			returnType: "user"
		},
		lastModifiedBy: {
			returnType: "user"
		},
	},
	dataPolicyOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSet: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dataSourceContainer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	defaultManagedAppProtection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminAccessAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminCustomer: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminRelationshipOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminRelationshipRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminRelationshipRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedAdminServiceManagementDetail: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedAdminServiceManagementDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	delegatedPermissionClassification: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	delegatedPermissionClassifications: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deletedChat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deletedChats: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deletedItemContainer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workflows: {
			requestType: RequestType.Get,
			returnType: "workflows"
		},
	},
	deletedTeam: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		participants: {
			requestType: RequestType.Get,
			returnType: "participants"
		},
	},
	departmentTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	detectedApp: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceAndAppManagementRoleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceAndAppManagementRoleDefinition: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceAppManagement: {
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
	},
	deviceCategory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceActionItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceActionItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceDeviceOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceDeviceStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicy: {
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
	},
	deviceCompliancePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicyAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceCompliancePolicyDeviceStateSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicySettingStateSummary: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceCompliancePolicyStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceScheduledActionForRule: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceSettingStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceComplianceUserOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceUserStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceComplianceUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfiguration: {
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
	},
	deviceConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationDeviceOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStateSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationState: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceConfigurationUserOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationUserStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceConfigurationUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceEnrollmentConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "enrollmentConfigurationAssignments"
		},
	},
	deviceEnrollmentConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceEnrollmentLimitConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceEnrollmentPlatformRestrictionsConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceEnrollmentWindowsHelloForBusinessConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceInstallState: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceInstallStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceLocalCredentialInfo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceLocalCredentialInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceLogCollectionResponse: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceLogCollectionResponses: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagement: {
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
	},
	deviceManagementCachedReportConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementExchangeConnector: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementExchangeConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementExportJob: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementExportJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementPartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceManagementReports: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		exportJobs: {
			requestType: RequestType.Get,
			returnType: "deviceManagementExportJobs"
		},
	},
	deviceManagementTroubleshootingEvent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	deviceManagementTroubleshootingEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	deviceRegistrationPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directory: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryAudits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryDefinition: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryObject: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryObjects: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	directoryObjectPartnerReference: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	directoryRole: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	dispositionReviewStage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	documentSetVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	documentSetVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	domain: {
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
	},
	domainDnsCnameRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsMxRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsRecords: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	domainDnsSrvRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsTxtRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	domainDnsUnavailableRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	drive: {
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
	},
	drives: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveItem: {
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
	},
	driveItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveItemVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveItemVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveProtectionRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveProtectionUnit: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	driveRestoreArtifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	driveRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	eBookInstallSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	edge: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		internetExplorerMode: {
			returnType: "internetExplorerMode"
		},
	},
	ediscoveryAddToReviewSetOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryCase: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryCustodian: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryExportOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		reviewSetQuery: {
			returnType: "ediscoveryReviewSetQuery"
		},
	},
	ediscoveryHoldOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryIndexOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryNoncustodialDataSource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		dataSource: {
			returnType: "dataSource"
		},
		lastIndexOperation: {
			returnType: "ediscoveryIndexOperation"
		},
	},
	ediscoveryPurgeDataOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryReviewSet: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		queries: {
			requestType: RequestType.Get,
			returnType: "ediscoveryReviewSetQuerys"
		},
	},
	ediscoveryReviewSetQuery: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ediscoveryReviewTag: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryTagOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	editionUpgradeConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignment: {
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
	},
	educationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationAssignmentDefaults: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignmentResource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationAssignmentResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationAssignmentSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		gradingCategories: {
			requestType: RequestType.Get,
			returnType: "educationGradingCategorys"
		},
	},
	educationCategory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationClass: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationFeedbackResourceOutcome: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationGradingCategory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationGradingCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationModule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resources: {
			requestType: RequestType.Get,
			returnType: "educationModuleResources"
		},
	},
	educationModules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationModuleResource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationModuleResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationOrganization: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationOutcome: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationOutcomes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationPointsOutcome: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationRubrics: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationRubricOutcome: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationSchool: {
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
	},
	educationSubmissions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationSubmissionResource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	educationSubmissionResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	educationUser: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	emailAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	emailAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	emailFileAssessmentRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	employeeExperience: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		learningCourseActivities: {
			requestType: RequestType.Get,
			returnType: "learningCourseActivitys"
		},
	},
	endUserNotification: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	endUserNotificationDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	endpoint: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	endpoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	engagementAsyncOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	engagementAsyncOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	enrollmentConfigurationAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	enrollmentConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	enrollmentTroubleshootingEvent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	enterpriseCodeSigningCertificate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	entitlementManagement: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	entity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	event: {
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
	},
	events: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	eventMessage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		event: {
			returnType: "event"
		},
	},
	eventMessageRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	eventMessageResponse: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	exchangeProtectionPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resourceLocation: {
			returnType: "manifest"
		},
	},
	extension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	extensions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	extensionProperty: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	extensionPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	external: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		connections: {
			requestType: RequestType.Get,
			returnType: "externalConnections"
		},
	},
	externalActivity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		performedBy: {
			returnType: "identity"
		},
	},
	externalActivityResult: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	externalConnection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	externalDomainNames: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	externalGroup: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		members: {
			requestType: RequestType.Get,
			returnType: "identitys"
		},
	},
	externalItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activities: {
			requestType: RequestType.Get,
			returnType: "externalActivitys"
		},
	},
	externalUsersSelfServiceSignUpEventsFlow: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	failedOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	featureRolloutPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	federatedIdentityCredentials: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	fido2AuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fido2AuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	fido2AuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	fido2CombinationConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fieldValueSet: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileAssessmentRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileAttachment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	filePlanDescriptor: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	filePlanReferenceTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	fileStorage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		containers: {
			requestType: RequestType.Get,
			returnType: "fileStorageContainers"
		},
	},
	fileStorageContainer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		drive: {
			returnType: "drive"
		},
		permissions: {
			requestType: RequestType.Get,
			returnType: "permissions"
		},
	},
	fileStorageContainers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	filterOperatorSchema: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	governanceInsight: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	governanceInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	granularMailboxRestoreArtifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	granularMailboxRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	group: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sets: {
			requestType: RequestType.Get,
			returnType: "sets"
		},
	},
	groups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupLifecyclePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	groupLifecyclePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupSetting: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	groupSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	groupSettingTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	healthIssue: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	homeRealmDiscoveryPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	homeRealmDiscoveryPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	horizontalSection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostCookie: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostPair: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		childHost: {
			returnType: "host"
		},
		parentHost: {
			returnType: "host"
		},
	},
	hostPort: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
		mostRecentSslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostReputation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	hostSslCertificate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
		sslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostTracker: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	hostname: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityApiConnector: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityApiConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityBuiltInUserFlowAttribute: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityContainer: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityGovernance: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityProviders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityProviderBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityProviderBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identitySecurityDefaultsEnforcementPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlow: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlowAttribute: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	identityUserFlowAttributes: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	identityUserFlowAttributeAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		userAttribute: {
			returnType: "identityUserFlowAttribute"
		},
	},
	identityUserFlowAttributeAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	importedWindowsAutopilotDeviceIdentity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	importedWindowsAutopilotDeviceIdentitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	importedWindowsAutopilotDeviceIdentityUpload: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		deviceIdentities: {
			requestType: RequestType.Get,
			returnType: "importedWindowsAutopilotDeviceIdentitys"
		},
	},
	incident: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		alerts: {
			requestType: RequestType.Get,
			returnType: "alerts"
		},
	},
	indicator: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		artifact: {
			returnType: "artifact"
		},
	},
	inferenceClassification: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		overrides: {
			requestType: RequestType.Get,
			returnType: "inferenceClassificationOverrides"
		},
	},
	inferenceClassificationOverride: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	inferenceClassificationOverrides: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	informationProtection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	insightsSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	intelligenceProfile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		indicators: {
			requestType: RequestType.Get,
			returnType: "intelligenceProfileIndicators"
		},
	},
	intelligenceProfileIndicator: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	internalDomainFederation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	internalDomainFederations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	internetExplorerMode: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		siteLists: {
			requestType: RequestType.Get,
			returnType: "browserSiteLists"
		},
	},
	invitation: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCertificateProfile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosCustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosDeviceFeaturesConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosGeneralDeviceConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosLobAppProvisioningConfigurationAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosManagedAppProtection: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosMobileAppConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosStoreApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateDeviceStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosUpdateDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	iosVppApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosVppEBook: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosVppEBookAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	iosiPadOSWebClip: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ipAddress: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	ipNamedLocation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	itemActivity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		driveItem: {
			returnType: "driveItem"
		},
	},
	itemActivitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	itemActivityStat: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		item: {
			returnType: "outlookItem"
		},
	},
	itemInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	itemRetentionLabel: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	labelsRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	landingPageDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningContent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningContents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningCourseActivity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	learningCourseActivitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	learningProvider: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	licenseDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	licenseDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	lifecycleManagementSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	lifecycleWorkflowsContainer: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	linkedResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	list: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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
		},
	},
	lists: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	listItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		analytics: {
			returnType: "itemAnalytics"
		},
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
		extractSensitivityLabel: {
			argNames: ["values"],
		},
		setSensitivityLabel: {
			argNames: ["values"],
		},
		update: {
			argNames: ["values"],
		},
	},
	listItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	listItemVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fields: {
			returnType: "fieldValueSet"
		},
	},
	listItemVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	localizedNotificationMessage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	localizedNotificationMessages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	loginPage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	loginPages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	longRunningOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	longRunningOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	m365AppsInstallationOptions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSCompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSCustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSDeviceFeaturesConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSDmgApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSGeneralDeviceConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSMicrosoftDefenderApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSMicrosoftEdgeApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	macOSOfficeSuiteApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailAssessmentRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailFolder: {
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
	},
	mailFolders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailSearchFolder: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailboxProtectionUnit: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mailboxRestoreArtifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mailboxRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	malwareStateForWindowsDevice: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	malwareStateForWindowsDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAndroidLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAndroidStoreApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppPolicyDeploymentSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppProtection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppRegistration: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedAppStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedAppStatusRaw: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDevice: {
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
	},
	managedDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfiguration: {
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
	},
	managedDeviceMobileAppConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationDeviceStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationDeviceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationDeviceSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationUserStatus: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceMobileAppConfigurationUserStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedDeviceMobileAppConfigurationUserSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedDeviceOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedEBook: {
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
	},
	managedEBooks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedEBookAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedEBookAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedIOSLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedIOSStoreApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedMobileApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	managedMobileApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	managedMobileLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		contentVersions: {
			requestType: RequestType.Get,
			returnType: "mobileAppContents"
		},
	},
	manifest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mdmWindowsInformationProtectionPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mdmWindowsInformationProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	meetingAttendanceReport: {
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
	},
	messages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	messageRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	messageRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftAccountUserConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	microsoftAuthenticatorAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		device: {
			returnType: "device"
		},
	},
	microsoftAuthenticatorAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftAuthenticatorAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "microsoftAuthenticatorAuthenticationMethodTargets"
		},
	},
	microsoftAuthenticatorAuthenticationMethodTarget: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	microsoftAuthenticatorAuthenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	microsoftStoreForBusinessApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "mobileAppAssignments"
		},
		categories: {
			requestType: RequestType.Get,
			returnType: "mobileAppCategorys"
		},
	},
	mobileApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileAppAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppCategory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileAppCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppContent: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileAppContentFiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileAppTroubleshootingEvent: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileContainedApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	mobileLobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		contentVersions: {
			requestType: RequestType.Get,
			returnType: "mobileAppContents"
		},
	},
	mobileThreatDefenseConnector: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	mobileThreatDefenseConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	multiTenantOrganization: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationJoinRequestRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiTenantOrganizationMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	multiTenantOrganizationPartnerConfigurationTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiValueLegacyExtendedProperty: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	multiValueLegacyExtendedPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	muteParticipantOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	namedLocation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	namedLocations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	networkAdapter: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	notebook: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sectionGroups: {
			requestType: RequestType.Get,
			returnType: "sectionGroups"
		},
		sections: {
			requestType: RequestType.Get,
			returnType: "onenoteSections"
		},
	},
	notebooks: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	notificationMessageTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizedNotificationMessages: {
			requestType: RequestType.Get,
			returnType: "localizedNotificationMessages"
		},
	},
	notificationMessageTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	oAuth2PermissionGrant: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	oAuth2PermissionGrants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	offerShiftRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	offerShiftRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	officeGraphInsights: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onAuthenticationMethodLoadStartListener: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onInteractiveAuthFlowStartListener: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesConditionalAccessSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesDirectorySynchronization: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onPremisesDirectorySynchronizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onTokenIssuanceStartCustomExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onTokenIssuanceStartListener: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onUserCreateStartListener: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	oneDriveForBusinessProtectionPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteEntityHierarchyModel: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteEntitySchemaObjectModel: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenotePage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		parentNotebook: {
			returnType: "notebook"
		},
		parentSection: {
			returnType: "onenoteSection"
		},
	},
	onenotePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenoteResource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	onenoteResources: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onenoteSection: {
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
	},
	onenoteSections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onlineMeeting: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		recordings: {
			requestType: RequestType.Get,
			returnType: "callRecordings"
		},
		transcripts: {
			requestType: RequestType.Get,
			returnType: "callTranscripts"
		},
	},
	onlineMeetings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	onlineMeetingBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		attendanceReports: {
			requestType: RequestType.Get,
			returnType: "meetingAttendanceReports"
		},
	},
	openShift: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	openShifts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	openShiftChangeRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	openShiftChangeRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	openTypeExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	operation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	orgContact: {
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
	},
	organization: {
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
	},
	organizationalBranding: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		localizations: {
			requestType: RequestType.Get,
			returnType: "organizationalBrandingLocalizations"
		},
	},
	organizationalBrandingLocalization: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	organizationalBrandingLocalizations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	organizationalBrandingProperties: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	organizer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookCategory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookCategorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	outlookItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	outlookUser: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		masterCategories: {
			requestType: RequestType.Get,
			returnType: "outlookCategorys"
		},
	},
	participant: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	participants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	participantBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	participantJoiningNotification: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		call: {
			returnType: "call"
		},
	},
	participantLeftNotification: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		call: {
			returnType: "call"
		},
	},
	partners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		billing: {
			returnType: "billing"
		},
	},
	passiveDnsRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		artifact: {
			returnType: "artifact"
		},
		parentHost: {
			returnType: "host"
		},
	},
	passwordAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	passwordAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	payload: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	payloads: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	peopleAdminSettings: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		update: {
			argNames: ["values"],
		},
	},
	permissions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	permissionGrantConditionSet: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	permissionGrantConditionSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	permissionGrantPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	persons: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	phoneAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	phoneAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	pinnedChatMessageInfo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		message: {
			returnType: "chatMessage"
		},
	},
	pinnedChatMessageInfos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	place: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	planner: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerBucket: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerGroup: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		plans: {
			requestType: RequestType.Get,
			returnType: "plannerPlans"
		},
	},
	plannerPlan: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerProgressTaskBoardTaskFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerTask: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	plannerUser: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	policyBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	policyRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		multiTenantOrganizationIdentitySynchronization: {
			returnType: "multiTenantOrganizationIdentitySyncPolicyTemplate"
		},
		multiTenantOrganizationPartnerConfiguration: {
			returnType: "multiTenantOrganizationPartnerConfigurationTemplate"
		},
	},
	post: {
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
	},
	posts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	presence: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	presences: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	print: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printConnectors: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printDocument: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printDocuments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printJob: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		documents: {
			requestType: RequestType.Get,
			returnType: "printDocuments"
		},
		tasks: {
			requestType: RequestType.Get,
			returnType: "printTasks"
		},
	},
	printJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printService: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printServiceEndpoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printTask: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		definition: {
			returnType: "printTaskDefinition"
		},
	},
	printTaskTriggers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printUsage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByPrinter: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByPrinters: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printUsageByUser: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	printUsageByUsers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printer: {
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
	},
	printers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	printerBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		jobs: {
			requestType: RequestType.Get,
			returnType: "printJobs"
		},
	},
	printerCreateOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		printer: {
			returnType: "printer"
		},
	},
	printerShare: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subjectRightsRequests: {
			requestType: RequestType.Get,
			returnType: "subjectRightsRequests"
		},
	},
	privilegedAccessGroup: {
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
	},
	privilegedAccessGroupAssignmentScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessGroupEligibilitySchedule: {
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
	},
	privilegedAccessGroupEligibilityScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	privilegedAccessRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "privilegedAccessGroup"
		},
	},
	privilegedAccessSchedule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	privilegedAccessScheduleInstance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	privilegedAccessScheduleRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profileCardProperty: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profileCardPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	profilePhoto: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	profilePhotos: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	pronounsSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionPolicyBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionPolicyBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	protectionRuleBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionUnitBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	protectionUnitBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	provisioningObjectSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	provisioningObjectSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	qna: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	rbacApplication: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	referenceAttachment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	relation: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	remoteAssistancePartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	remoteAssistancePartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	remoteDesktopSecurityConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		targetDeviceGroups: {
			requestType: RequestType.Get,
			returnType: "targetDeviceGroups"
		},
	},
	reportRoot: {
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
	},
	request: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resellerDelegatedAdminRelationship: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	resourceSpecificPermissionGrant: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	resourceSpecificPermissionGrants: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	restoreArtifactBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		restorePoint: {
			returnType: "restorePoint"
		},
	},
	restorePoint: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		protectionUnit: {
			returnType: "protectionUnitBase"
		},
	},
	restorePoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	restoreSessionBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	restoreSessionBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	retentionEvent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEventType: {
			returnType: "retentionEventType"
		},
	},
	retentionEventType: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	retentionLabel: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	richLongRunningOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskDetection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskDetections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyServicePrincipal: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskyServicePrincipalHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	riskyUser: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	riskyUserHistoryItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roleAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		roleDefinition: {
			returnType: "roleDefinition"
		},
	},
	roleAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roleDefinition: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directory: {
			returnType: "rbacApplication"
		},
		entitlementManagement: {
			returnType: "rbacApplication"
		},
	},
	room: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	rooms: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	roomList: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		rooms: {
			requestType: RequestType.Get,
			returnType: "rooms"
		},
	},
	run: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	samlOrWsFedExternalDomainFederation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		domains: {
			requestType: RequestType.Get,
			returnType: "externalDomainNames"
		},
	},
	samlOrWsFedProvider: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schedule: {
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
	},
	scheduleChangeRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schedulingGroup: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schedulingGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	schema: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	schemaExtension: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	scopedRoleMembership: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	scopedRoleMemberships: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	search: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	searchAnswer: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	searchEntity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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
	},
	sectionGroup: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	secureScores: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	secureScoreControlProfile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	secureScoreControlProfiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	security: {
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
	},
	securityReportsRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	segment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sendDtmfTonesOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sensor: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		healthIssues: {
			requestType: RequestType.Get,
			returnType: "healthIssues"
		},
	},
	serviceAnnouncement: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceAnnouncementAttachments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceAnnouncementBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceApps: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceHealth: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceHealthIssues: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	servicePrincipal: {
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
	},
	servicePrincipalRiskDetection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	servicePrincipalRiskDetections: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceStorageQuotaBreakdown: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	serviceStorageQuotaBreakdowns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	serviceUpdateMessage: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		segments: {
			requestType: RequestType.Get,
			returnType: "segments"
		},
	},
	set: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	settingStateDeviceSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	sharePointProtectionPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	sharedWithChannelTeamInfo: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		settings: {
			returnType: "sharepointSettings"
		},
	},
	sharepointSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	shift: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	shifts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	shiftPreferences: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	signIn: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	signIns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	simulation: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	simulationAutomationRuns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	singleValueLegacyExtendedProperty: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	singleValueLegacyExtendedPropertys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	site: {
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
	},
	sitePage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		canvasLayout: {
			returnType: "canvasLayout"
		},
		webParts: {
			requestType: RequestType.Get,
			returnType: "webParts"
		},
	},
	siteProtectionRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteProtectionRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteProtectionUnit: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteProtectionUnits: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteRestoreArtifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	siteRestoreArtifacts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	siteSource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		site: {
			returnType: "site"
		},
	},
	sites: {
		properties: [
            "drives|drives|/[Name]|drive", "items|listItems|/[Name]|listItem",
            "lists|lists|/[Name]|list"
        ],
		query: { argNames: ["oData"], requestType: RequestType.OData },
		add: {
			argNames: ["values"],
		},
	},
	skypeForBusinessUserConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	skypeUserConversationMember: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	smsAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "smsAuthenticationMethodTargets"
		},
	},
	smsAuthenticationMethodTarget: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	smsAuthenticationMethodTargets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	socialIdentityProvider: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	softwareOathAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	softwareOathAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	softwareOathAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	softwareUpdateStatusSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	solutionsRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		relatedHosts: {
			requestType: RequestType.Get,
			returnType: "hosts"
		},
	},
	standardWebPart: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	startHoldMusicOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	stopHoldMusicOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	storage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fileStorage: {
			returnType: "fileStorage"
		},
		settings: {
			returnType: "storageSettings"
		},
	},
	storageQuotaBreakdown: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	storageSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	store: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		appliesTo: {
			requestType: RequestType.Get,
			returnType: "directoryObjects"
		},
	},
	subcategoryTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subdomain: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	subjectRightsRequest: {
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
	},
	subjectRightsRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	subscribeToToneOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subscribedSku: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subscription: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	subscriptions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	swapShiftsChangeRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	swapShiftsChangeRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	synchronization: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		jobs: {
			requestType: RequestType.Get,
			returnType: "synchronizationJobs"
		},
		templates: {
			requestType: RequestType.Get,
			returnType: "synchronizationTemplates"
		},
	},
	synchronizationJob: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bulkUpload: {
			returnType: "bulkUpload"
		},
		schema: {
			returnType: "synchronizationSchema"
		},
	},
	synchronizationJobs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	synchronizationSchema: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		directories: {
			requestType: RequestType.Get,
			returnType: "directoryDefinitions"
		},
	},
	synchronizationTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		schema: {
			returnType: "synchronizationSchema"
		},
	},
	synchronizationTemplates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	tag: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetDeviceGroup: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetDeviceGroups: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppConfiguration: {
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
	},
	targetedManagedAppConfigurations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppPolicyAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	targetedManagedAppPolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	targetedManagedAppProtection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignments: {
			requestType: RequestType.Get,
			returnType: "targetedManagedAppPolicyAssignments"
		},
	},
	task: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		taskProcessingResults: {
			requestType: RequestType.Get,
			returnType: "taskProcessingResults"
		},
	},
	taskDefinition: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	taskFileAttachment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	taskProcessingResult: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		subject: {
			returnType: "user"
		},
		task: {
			returnType: "task"
		},
	},
	taskReport: {
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
	},
	teams: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamInfo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		team: {
			returnType: "team"
		},
	},
	teamsApp: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		bot: {
			returnType: "teamworkBot"
		},
	},
	teamsAppDefinitions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsAppInstallation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApp: {
			returnType: "teamsApp"
		},
		teamsAppDefinition: {
			returnType: "teamsAppDefinition"
		},
	},
	teamsAppInstallations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsAppSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamsAsyncOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamsAsyncOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsTab: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		teamsApp: {
			returnType: "teamsApp"
		},
	},
	teamsTabs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	teamsTemplate: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamwork: {
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
	},
	teamworkBot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkHostedContent: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkTag: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	teamworkTagMembers: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	telecomExpenseManagementPartner: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	telecomExpenseManagementPartners: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	temporaryAccessPassAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	temporaryAccessPassAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	temporaryAccessPassAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	tenantAppManagementPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tenantRelationship: {
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
	},
	term: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		termsAndConditions: {
			returnType: "termsAndConditions"
		},
	},
	termsAndConditionsAcceptanceStatuss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	termsAndConditionsAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	termsAndConditionsAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	termsOfUseContainer: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	threatAssessmentRequest: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	threatAssessmentResults: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	threatIntelligence: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	thumbnailSets: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOff: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffs: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOffReason: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffReasons: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	timeOffRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	timeOffRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	todo: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		lists: {
			requestType: RequestType.Get,
			returnType: "todoTaskLists"
		},
	},
	todoTask: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tokenIssuancePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	tokenLifetimePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	tokenLifetimePolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	training: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	trainingLanguageDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	trending: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "entity"
		},
	},
	trendings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	triggerTypesRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEventTypes: {
			requestType: RequestType.Get,
			returnType: "retentionEventTypes"
		},
	},
	triggersRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		retentionEvents: {
			requestType: RequestType.Get,
			returnType: "retentionEvents"
		},
	},
	unbilledUsage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unclassifiedArtifact: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedGroupSource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		group: {
			returnType: "group"
		},
	},
	unifiedRbacResourceAction: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRbacResourceActions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRbacResourceNamespace: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
	},
	unifiedRoleAssignmentSchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignmentScheduleInstance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		activatedUsing: {
			returnType: "unifiedRoleEligibilityScheduleInstance"
		},
	},
	unifiedRoleAssignmentScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleAssignmentScheduleRequest: {
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
	},
	unifiedRoleAssignmentScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleDefinition: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleEligibilitySchedules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleEligibilityScheduleInstance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleEligibilityScheduleInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleEligibilityScheduleRequest: {
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
	},
	unifiedRoleEligibilityScheduleRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleManagementPolicy: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		policy: {
			returnType: "unifiedRoleManagementPolicy"
		},
	},
	unifiedRoleManagementPolicyAssignments: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleManagementPolicyAuthenticationContextRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyEnablementRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyExpirationRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyNotificationRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyRule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	unifiedRoleManagementPolicyRules: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	unifiedRoleScheduleBase: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		services: {
			requestType: RequestType.Get,
			returnType: "serviceStorageQuotaBreakdowns"
		},
	},
	unmuteParticipantOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	updateRecordingStatusOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	urlAssessmentRequest: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	usedInsight: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		resource: {
			returnType: "entity"
		},
	},
	usedInsights: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	user: {
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
	},
	users: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userActivity: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		approval: {
			returnType: "approval"
		},
	},
	userConsentRequests: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIds: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthApplicationPerformance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthApplicationPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDeviceModelPerformance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDeviceModelPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDevicePerformance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDevicePerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsAppHealthOSVersionPerformance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsAppHealthOSVersionPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsBaseline: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDevicePerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceScores: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceScoress: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupHistory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupProcess: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupProcesss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsDeviceStartupProcessPerformance: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsDeviceStartupProcessPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsMetric: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsMetrics: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsMetricHistory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsMetricHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsModelScores: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsModelScoress: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsOverview: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsScoreHistory: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsScoreHistorys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsWorkFromAnywhereDevice: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereDevices: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereMetric: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userFlowLanguageConfiguration: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userFlowLanguagePages: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userInsightsSettings: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userInstallStateSummary: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userRegistrationDetailss: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userScopeTeamsAppInstallation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		chat: {
			returnType: "chat"
		},
	},
	userScopeTeamsAppInstallations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	userSettings: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userSolutionRoot: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		workingTimeSchedule: {
			returnType: "workingTimeSchedule"
		},
	},
	userSource: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	userStorage: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	userTeamwork: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		associatedTeams: {
			requestType: RequestType.Get,
			returnType: "associatedTeamInfos"
		},
		installedApps: {
			requestType: RequestType.Get,
			returnType: "userScopeTeamsAppInstallations"
		},
	},
	verticalSection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		webparts: {
			requestType: RequestType.Get,
			returnType: "webParts"
		},
	},
	virtualEndpoint: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		presenters: {
			requestType: RequestType.Get,
			returnType: "virtualEventPresenters"
		},
		sessions: {
			requestType: RequestType.Get,
			returnType: "virtualEventSessions"
		},
	},
	virtualEvents: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventPresenter: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventPresenters: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventRegistration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		sessions: {
			requestType: RequestType.Get,
			returnType: "virtualEventSessions"
		},
	},
	virtualEventRegistrations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventRegistrationConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		questions: {
			requestType: RequestType.Get,
			returnType: "virtualEventRegistrationQuestionBases"
		},
	},
	virtualEventRegistrationCustomQuestion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationPredefinedQuestion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationQuestionBase: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventRegistrationQuestionBases: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventSession: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventSessions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventTownhall: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventTownhalls: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	virtualEventWebinar: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	virtualEventsRoot: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	vppToken: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	vppTokens: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	vulnerability: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	webApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	webPart: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	webParts: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	whoisBaseRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		host: {
			returnType: "host"
		},
	},
	whoisHistoryRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	whoisRecord: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		history: {
			requestType: RequestType.Get,
			returnType: "whoisHistoryRecords"
		},
	},
	win32LobApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10CompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10CustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EndpointProtectionConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EnrollmentCompletionPageConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10EnterpriseModernAppManagementConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10GeneralConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10MobileCompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10SecureAssessmentConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows10TeamGeneralConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows81CompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windows81GeneralConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAppX: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAutopilotDeploymentProfile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		assignedDevices: {
			requestType: RequestType.Get,
			returnType: "windowsAutopilotDeviceIdentitys"
		},
	},
	windowsAutopilotDeploymentProfileAssignment: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAutopilotDeviceIdentity: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsAutopilotDeviceIdentitys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsDefenderAdvancedThreatProtectionConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsDeviceMalwareState: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsDeviceMalwareStates: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsHelloForBusinessAuthenticationMethod: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		device: {
			returnType: "device"
		},
	},
	windowsHelloForBusinessAuthenticationMethods: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtection: {
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
	},
	windowsInformationProtectionAppLearningSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionAppLearningSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionAppLockerFile: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionAppLockerFiles: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionNetworkLearningSummary: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionNetworkLearningSummarys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsInformationProtectionPolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsInformationProtectionPolicys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsMalwareInformation: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsMobileMSI: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81CompliancePolicy: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81CustomConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsPhone81GeneralConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsProtectionState: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		detectedMalwareState: {
			requestType: RequestType.Get,
			returnType: "windowsDeviceMalwareStates"
		},
	},
	windowsSetting: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsSettingInstances: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	windowsUniversalAppX: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		committedContainedApps: {
			requestType: RequestType.Get,
			returnType: "mobileContainedApps"
		},
	},
	windowsUniversalAppXContainedApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsUpdateForBusinessConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	windowsWebApp: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbook: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChart: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartAxes: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		font: {
			returnType: "workbookChartFont"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartAxisTitle: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartAxisTitleFormat"
		},
	},
	workbookChartAxisTitleFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabelFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabels: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartDataLabelFormat"
		},
	},
	workbookChartFill: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartFont: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartGridlines: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartGridlinesFormat"
		},
	},
	workbookChartGridlinesFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartLegend: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartLegendFormat"
		},
	},
	workbookChartLegendFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartLineFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookChartPoint: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartPointFormat"
		},
	},
	workbookChartPoints: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookChartPointFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
	},
	workbookChartSeries: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartTitle: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		format: {
			returnType: "workbookChartTitleFormat"
		},
	},
	workbookChartTitleFormat: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookComment: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookCommentReplys: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookFilter: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFormatProtection: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFunctionResult: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookFunctions: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookNamedItem: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookNamedItems: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookOperation: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookOperations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookPivotTable: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookPivotTables: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookRange: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeBorders: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookRangeFill: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeFont: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeFormat: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookRangeView: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		filter: {
			returnType: "workbookFilter"
		},
	},
	workbookTableColumns: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTableRow: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookTableRows: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workbookTableSort: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workbookWorksheet: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workflow: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		tasks: {
			requestType: RequestType.Get,
			returnType: "tasks"
		},
	},
	workflowVersion: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workforceIntegration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	workforceIntegrations: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
	},
	workingTimeSchedule: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
	x509CertificateAuthenticationMethodConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		includeTargets: {
			requestType: RequestType.Get,
			returnType: "authenticationMethodTargets"
		},
	},
	x509CertificateCombinationConfiguration: {
		query: { argNames: ["oData"], requestType: RequestType.OData },

	},
}