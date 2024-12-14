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
            returnType: "accessPackage"
        },
        assignmentPolicies: {
            returnType: "accessPackageAssignmentPolicy"
        },
        catalog: {
            returnType: "accessPackageCatalog"
        },
        incompatibleAccessPackages: {
            returnType: "accessPackage"
        },
        incompatibleGroups: {
            returnType: "group"
        },
        resourceRoleScopes: {
            returnType: "accessPackageResourceRoleScope"
        },
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
    accessPackageAssignmentPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        accessPackage: {
            returnType: "accessPackage"
        },
        catalog: {
            returnType: "accessPackageCatalog"
        },
        customExtensionStageSettings: {
            returnType: "customExtensionStageSetting"
        },
        questions: {
            returnType: "accessPackageQuestion"
        },
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
    accessPackageAssignmentRequestWorkflowExtension: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessPackageAssignmentWorkflowExtension: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessPackageCatalog: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        accessPackages: {
            returnType: "accessPackage"
        },
        customWorkflowExtensions: {
            returnType: "customCalloutExtension"
        },
        resourceRoles: {
            returnType: "accessPackageResourceRole"
        },
        resources: {
            returnType: "accessPackageResource"
        },
        resourceScopes: {
            returnType: "accessPackageResourceScope"
        },
    },
    accessPackageMultipleChoiceQuestion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessPackageQuestion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessPackageResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        environment: {
            returnType: "accessPackageResourceEnvironment"
        },
        roles: {
            returnType: "accessPackageResourceRole"
        },
        scopes: {
            returnType: "accessPackageResourceScope"
        },
    },
    accessPackageResourceEnvironment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resources: {
            returnType: "accessPackageResource"
        },
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
    accessPackageResourceRole: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resource: {
            returnType: "accessPackageResource"
        },
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
    accessPackageResourceScope: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resource: {
            returnType: "accessPackageResource"
        },
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
            returnType: "accessReviewHistoryInstance"
        },
    },
    accessReviewHistoryInstance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessReviewInstance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        contactedReviewers: {
            returnType: "accessReviewReviewer"
        },
        decisions: {
            returnType: "accessReviewInstanceDecisionItem"
        },
        stages: {
            returnType: "accessReviewStage"
        },
    },
    accessReviewInstanceDecisionItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        insights: {
            returnType: "governanceInsight"
        },
    },
    accessReviewReviewer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    accessReviewScheduleDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        instances: {
            returnType: "accessReviewInstance"
        },
    },
    accessReviewSet: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        definitions: {
            returnType: "accessReviewScheduleDefinition"
        },
        historyDefinitions: {
            returnType: "accessReviewHistoryDefinition"
        },
    },
    accessReviewStage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        decisions: {
            returnType: "accessReviewInstanceDecisionItem"
        },
    },
    acronym: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    activityBasedTimeoutPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    activityHistoryItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        activity: {
            returnType: "userActivity"
        },
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
            returnType: "directoryObject"
        },
        scopedRoleMembers: {
            returnType: "scopedRoleMembership"
        },
        extensions: {
            returnType: "extension"
        },
    },
    agreement: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        acceptances: {
            returnType: "agreementAcceptance"
        },
        file: {
            returnType: "agreementFile"
        },
        files: {
            returnType: "agreementFileLocalization"
        },
    },
    agreementAcceptance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    agreementFile: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        localizations: {
            returnType: "agreementFileLocalization"
        },
    },
    agreementFileLocalization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        versions: {
            returnType: "agreementFileVersion"
        },
    },
    agreementFileProperties: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    agreementFileVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    alert: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    allowedValue: {
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
            returnType: "managedMobileApp"
        },
        deploymentSummary: {
            returnType: "managedAppPolicyDeploymentSummary"
        },
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
            returnType: "teamsApp"
        },
    },
    appConsentApprovalRoute: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appConsentRequests: {
            returnType: "appConsentRequest"
        },
    },
    appConsentRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        userConsentRequests: {
            returnType: "userConsentRequest"
        },
    },
    appLogCollectionRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    appManagementPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appliesTo: {
            returnType: "directoryObject"
        },
    },
    appRoleAssignment: {
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
            returnType: "appManagementPolicy"
        },
        createdOnBehalfOf: {
            returnType: "directoryObject"
        },
        extensionProperties: {
            returnType: "extensionProperty"
        },
        federatedIdentityCredentials: {
            returnType: "federatedIdentityCredential"
        },
        homeRealmDiscoveryPolicies: {
            returnType: "homeRealmDiscoveryPolicy"
        },
        owners: {
            returnType: "directoryObject"
        },
        tokenIssuancePolicies: {
            returnType: "tokenIssuancePolicy"
        },
        tokenLifetimePolicies: {
            returnType: "tokenLifetimePolicy"
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
            returnType: "approvalStage"
        },
    },
    approvalStage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    article: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        indicators: {
            returnType: "articleIndicator"
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
    attachment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attachmentBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attachmentSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attackSimulationOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attackSimulationRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        endUserNotifications: {
            returnType: "endUserNotification"
        },
        landingPages: {
            returnType: "landingPage"
        },
        loginPages: {
            returnType: "loginPage"
        },
        operations: {
            returnType: "attackSimulationOperation"
        },
        payloads: {
            returnType: "payload"
        },
        simulationAutomations: {
            returnType: "simulationAutomation"
        },
        simulations: {
            returnType: "simulation"
        },
        trainings: {
            returnType: "training"
        },
    },
    attendanceRecord: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attributeMappingFunctionSchema: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    attributeSet: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    audioRoutingGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    auditEvent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    auditLogRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        directoryAudits: {
            returnType: "directoryAudit"
        },
        provisioning: {
            returnType: "provisioningObjectSummary"
        },
        signIns: {
            returnType: "signIn"
        },
    },
    authentication: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        emailMethods: {
            returnType: "emailAuthenticationMethod"
        },
        fido2Methods: {
            returnType: "fido2AuthenticationMethod"
        },
        methods: {
            returnType: "authenticationMethod"
        },
        microsoftAuthenticatorMethods: {
            returnType: "microsoftAuthenticatorAuthenticationMethod"
        },
        operations: {
            returnType: "longRunningOperation"
        },
        passwordMethods: {
            returnType: "passwordAuthenticationMethod"
        },
        phoneMethods: {
            returnType: "phoneAuthenticationMethod"
        },
        softwareOathMethods: {
            returnType: "softwareOathAuthenticationMethod"
        },
        temporaryAccessPassMethods: {
            returnType: "temporaryAccessPassAuthenticationMethod"
        },
        windowsHelloForBusinessMethods: {
            returnType: "windowsHelloForBusinessAuthenticationMethod"
        },
    },
    authenticationCombinationConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationConditionApplication: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationContextClassReference: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationEventListener: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationEventsFlow: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationFlowsPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationMethodModeDetail: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationMethodTarget: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    authenticationMethodsPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        authenticationMethodConfigurations: {
            returnType: "authenticationMethodConfiguration"
        },
    },
    authenticationMethodsRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        userRegistrationDetails: {
            returnType: "userRegistrationDetails"
        },
    },
    authenticationStrengthPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        combinationConfigurations: {
            returnType: "authenticationCombinationConfiguration"
        },
    },
    authenticationStrengthRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        authenticationMethodModes: {
            returnType: "authenticationMethodModeDetail"
        },
        policies: {
            returnType: "authenticationStrengthPolicy"
        },
    },
    authoredNote: {
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
            returnType: "identityProvider"
        },
        languages: {
            returnType: "userFlowLanguageConfiguration"
        },
        userAttributeAssignments: {
            returnType: "identityUserFlowAttributeAssignment"
        },
        userFlowIdentityProviders: {
            returnType: "identityProviderBase"
        },
    },
    backupRestoreRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        driveInclusionRules: {
            returnType: "driveProtectionRule"
        },
        driveProtectionUnits: {
            returnType: "driveProtectionUnit"
        },
        exchangeProtectionPolicies: {
            returnType: "exchangeProtectionPolicy"
        },
        exchangeRestoreSessions: {
            returnType: "exchangeRestoreSession"
        },
        mailboxInclusionRules: {
            returnType: "mailboxProtectionRule"
        },
        mailboxProtectionUnits: {
            returnType: "mailboxProtectionUnit"
        },
        oneDriveForBusinessProtectionPolicies: {
            returnType: "oneDriveForBusinessProtectionPolicy"
        },
        oneDriveForBusinessRestoreSessions: {
            returnType: "oneDriveForBusinessRestoreSession"
        },
        protectionPolicies: {
            returnType: "protectionPolicyBase"
        },
        protectionUnits: {
            returnType: "protectionUnitBase"
        },
        restorePoints: {
            returnType: "restorePoint"
        },
        restoreSessions: {
            returnType: "restoreSessionBase"
        },
        serviceApps: {
            returnType: "serviceApp"
        },
        sharePointProtectionPolicies: {
            returnType: "sharePointProtectionPolicy"
        },
        sharePointRestoreSessions: {
            returnType: "sharePointRestoreSession"
        },
        siteInclusionRules: {
            returnType: "siteProtectionRule"
        },
        siteProtectionUnits: {
            returnType: "siteProtectionUnit"
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
    baseItemVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    baseSitePage: {
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
            returnType: "manifest"
        },
        operations: {
            returnType: "operation"
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
            returnType: "bitlockerRecoveryKey"
        },
    },
    bitlockerRecoveryKey: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingAppointment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingBusiness: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appointments: {
            returnType: "bookingAppointment"
        },
        calendarView: {
            returnType: "bookingAppointment"
        },
        customers: {
            returnType: "bookingCustomerBase"
        },
        customQuestions: {
            returnType: "bookingCustomQuestion"
        },
        services: {
            returnType: "bookingService"
        },
        staffMembers: {
            returnType: "bookingStaffMemberBase"
        },
    },
    bookingCurrency: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingCustomQuestion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingCustomer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingCustomerBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingService: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingStaffMember: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookingStaffMemberBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    bookmark: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    browserSharedCookie: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    browserSite: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    browserSiteList: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        sharedCookies: {
            returnType: "browserSharedCookie"
        },
        sites: {
            returnType: "browserSite"
        },
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
            returnType: "calendarPermission"
        },
        calendarView: {
            returnType: "event"
        },
        events: {
            returnType: "event"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    calendarGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        calendars: {
            returnType: "calendar"
        },
    },
    calendarPermission: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    calendarSharingMessage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    call: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        audioRoutingGroups: {
            returnType: "audioRoutingGroup"
        },
        contentSharingSessions: {
            returnType: "contentSharingSession"
        },
        operations: {
            returnType: "commsOperation"
        },
        participants: {
            returnType: "participant"
        },
    },
    callRecord: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        organizer_v2: {
            returnType: "organizer"
        },
        participants_v2: {
            returnType: "participant"
        },
        sessions: {
            returnType: "session"
        },
    },
    callRecording: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    callTranscript: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cancelMediaProcessingOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    canvasLayout: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        horizontalSections: {
            returnType: "horizontalSection"
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
            returnType: "ediscoveryCase"
        },
    },
    categoryTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        subcategories: {
            returnType: "subcategoryTemplate"
        },
    },
    certificateBasedAuthConfiguration: {
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
            returnType: "conversationMember"
        },
        messages: {
            returnType: "chatMessage"
        },
        sharedWithTeams: {
            returnType: "sharedWithChannelTeamInfo"
        },
        tabs: {
            returnType: "teamsTab"
        },
    },
    chat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        installedApps: {
            returnType: "teamsAppInstallation"
        },
        lastMessagePreview: {
            returnType: "chatMessageInfo"
        },
        members: {
            returnType: "conversationMember"
        },
        messages: {
            returnType: "chatMessage"
        },
        permissionGrants: {
            returnType: "resourceSpecificPermissionGrant"
        },
        pinnedMessages: {
            returnType: "pinnedChatMessageInfo"
        },
        tabs: {
            returnType: "teamsTab"
        },
    },
    chatMessage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        hostedContents: {
            returnType: "chatMessageHostedContent"
        },
        replies: {
            returnType: "chatMessage"
        },
    },
    chatMessageHostedContent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    chatMessageInfo: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    checklistItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    citationTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    claimsMappingPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudClipboardItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudClipboardRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        items: {
            returnType: "cloudClipboardItem"
        },
    },
    cloudCommunications: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        callRecords: {
            returnType: "callRecord"
        },
        calls: {
            returnType: "call"
        },
        onlineMeetings: {
            returnType: "onlineMeeting"
        },
        presences: {
            returnType: "presence"
        },
    },
    cloudPC: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudPcAuditEvent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudPcDeviceImage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudPcGalleryImage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudPcOnPremisesConnection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    cloudPcProvisioningPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "cloudPcProvisioningPolicyAssignment"
        },
    },
    cloudPcProvisioningPolicyAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignedUsers: {
            returnType: "user"
        },
    },
    cloudPcUserSetting: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "cloudPcUserSettingAssignment"
        },
    },
    cloudPcUserSettingAssignment: {
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
    columnLink: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    commsOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    community: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        group: {
            returnType: "group"
        },
        owners: {
            returnType: "user"
        },
    },
    companySubscription: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    compliance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    complianceManagementPartner: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    conditionalAccessPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    conditionalAccessRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        authenticationStrength: {
            returnType: "authenticationStrengthRoot"
        },
        authenticationContextClassReferences: {
            returnType: "authenticationContextClassReference"
        },
        namedLocations: {
            returnType: "namedLocation"
        },
        policies: {
            returnType: "conditionalAccessPolicy"
        },
        templates: {
            returnType: "conditionalAccessTemplate"
        },
    },
    conditionalAccessTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    connectedOrganization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        externalSponsors: {
            returnType: "directoryObject"
        },
        internalSponsors: {
            returnType: "directoryObject"
        },
    },
    connectionOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    contact: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        extensions: {
            returnType: "extension"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        photo: {
            returnType: "profilePhoto"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    contactFolder: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        childFolders: {
            returnType: "contactFolder"
        },
        contacts: {
            returnType: "contact"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    contentSharingSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    contentType: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        base: {
            returnType: "contentType"
        },
        baseTypes: {
            returnType: "contentType"
        },
        columnLinks: {
            returnType: "columnLink"
        },
        columnPositions: {
            returnType: "columnDefinition"
        },
        columns: {
            returnType: "columnDefinition"
        },
        update: {
            argNames: ["values"],
        },
    },
    contract: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    conversation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        threads: {
            returnType: "conversationThread"
        },
    },
    conversationMember: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    conversationThread: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        posts: {
            returnType: "post"
        },
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
            returnType: "crossTenantAccessPolicyConfigurationPartner"
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
    customCalloutExtension: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    customExtensionStageSetting: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        customExtension: {
            returnType: "customCalloutExtension"
        },
    },
    customSecurityAttributeDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        allowedValues: {
            returnType: "allowedValue"
        },
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
            returnType: "managedMobileApp"
        },
        deploymentSummary: {
            returnType: "managedAppPolicyDeploymentSummary"
        },
    },
    delegatedAdminAccessAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    delegatedAdminCustomer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        serviceManagementDetails: {
            returnType: "delegatedAdminServiceManagementDetail"
        },
    },
    delegatedAdminRelationship: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        accessAssignments: {
            returnType: "delegatedAdminAccessAssignment"
        },
        operations: {
            returnType: "delegatedAdminRelationshipOperation"
        },
        requests: {
            returnType: "delegatedAdminRelationshipRequest"
        },
    },
    delegatedAdminRelationshipOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    delegatedAdminRelationshipRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    delegatedAdminServiceManagementDetail: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    delegatedPermissionClassification: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deletedChat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deletedItemContainer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        workflows: {
            returnType: "workflow"
        },
    },
    deletedTeam: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        channels: {
            returnType: "channel"
        },
    },
    deltaParticipants: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        participants: {
            returnType: "participant"
        },
    },
    departmentTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    detectedApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        managedDevices: {
            returnType: "managedDevice"
        },
    },
    device: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        memberOf: {
            returnType: "directoryObject"
        },
        registeredOwners: {
            returnType: "directoryObject"
        },
        registeredUsers: {
            returnType: "directoryObject"
        },
        transitiveMemberOf: {
            returnType: "directoryObject"
        },
        extensions: {
            returnType: "extension"
        },
    },
    deviceAndAppManagementRoleAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceAndAppManagementRoleDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceAppManagement: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        managedEBooks: {
            returnType: "managedEBook"
        },
        mobileAppCategories: {
            returnType: "mobileAppCategory"
        },
        mobileAppConfigurations: {
            returnType: "managedDeviceMobileAppConfiguration"
        },
        mobileApps: {
            returnType: "mobileApp"
        },
        vppTokens: {
            returnType: "vppToken"
        },
        androidManagedAppProtections: {
            returnType: "androidManagedAppProtection"
        },
        defaultManagedAppProtections: {
            returnType: "defaultManagedAppProtection"
        },
        iosManagedAppProtections: {
            returnType: "iosManagedAppProtection"
        },
        managedAppPolicies: {
            returnType: "managedAppPolicy"
        },
        managedAppRegistrations: {
            returnType: "managedAppRegistration"
        },
        managedAppStatuses: {
            returnType: "managedAppStatus"
        },
        mdmWindowsInformationProtectionPolicies: {
            returnType: "mdmWindowsInformationProtectionPolicy"
        },
        targetedManagedAppConfigurations: {
            returnType: "targetedManagedAppConfiguration"
        },
        windowsInformationProtectionPolicies: {
            returnType: "windowsInformationProtectionPolicy"
        },
    },
    deviceCategory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceActionItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceDeviceOverview: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceDeviceStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceCompliancePolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "deviceCompliancePolicyAssignment"
        },
        deviceSettingStateSummaries: {
            returnType: "settingStateDeviceSummary"
        },
        deviceStatuses: {
            returnType: "deviceComplianceDeviceStatus"
        },
        deviceStatusOverview: {
            returnType: "deviceComplianceDeviceOverview"
        },
        scheduledActionsForRule: {
            returnType: "deviceComplianceScheduledActionForRule"
        },
        userStatuses: {
            returnType: "deviceComplianceUserStatus"
        },
        userStatusOverview: {
            returnType: "deviceComplianceUserOverview"
        },
    },
    deviceCompliancePolicyAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceCompliancePolicyDeviceStateSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceCompliancePolicySettingStateSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceComplianceSettingStates: {
            returnType: "deviceComplianceSettingState"
        },
    },
    deviceCompliancePolicyState: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceScheduledActionForRule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        scheduledActionConfigurations: {
            returnType: "deviceComplianceActionItem"
        },
    },
    deviceComplianceSettingState: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceUserOverview: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceComplianceUserStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "deviceConfigurationAssignment"
        },
        deviceSettingStateSummaries: {
            returnType: "settingStateDeviceSummary"
        },
        deviceStatuses: {
            returnType: "deviceConfigurationDeviceStatus"
        },
        deviceStatusOverview: {
            returnType: "deviceConfigurationDeviceOverview"
        },
        userStatuses: {
            returnType: "deviceConfigurationUserStatus"
        },
        userStatusOverview: {
            returnType: "deviceConfigurationUserOverview"
        },
    },
    deviceConfigurationAssignment: {
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
    deviceConfigurationState: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceConfigurationUserOverview: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceConfigurationUserStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceEnrollmentConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "enrollmentConfigurationAssignment"
        },
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
    deviceLocalCredentialInfo: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceLogCollectionResponse: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceManagement: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        auditEvents: {
            returnType: "auditEvent"
        },
        virtualEndpoint: {
            returnType: "virtualEndpoint"
        },
        termsAndConditions: {
            returnType: "termsAndConditions"
        },
        deviceCompliancePolicies: {
            returnType: "deviceCompliancePolicy"
        },
        deviceCompliancePolicyDeviceStateSummary: {
            returnType: "deviceCompliancePolicyDeviceStateSummary"
        },
        deviceCompliancePolicySettingStateSummaries: {
            returnType: "deviceCompliancePolicySettingStateSummary"
        },
        deviceConfigurationDeviceStateSummaries: {
            returnType: "deviceConfigurationDeviceStateSummary"
        },
        deviceConfigurations: {
            returnType: "deviceConfiguration"
        },
        iosUpdateStatuses: {
            returnType: "iosUpdateDeviceStatus"
        },
        softwareUpdateStatusSummary: {
            returnType: "softwareUpdateStatusSummary"
        },
        complianceManagementPartners: {
            returnType: "complianceManagementPartner"
        },
        conditionalAccessSettings: {
            returnType: "onPremisesConditionalAccessSettings"
        },
        deviceCategories: {
            returnType: "deviceCategory"
        },
        deviceEnrollmentConfigurations: {
            returnType: "deviceEnrollmentConfiguration"
        },
        deviceManagementPartners: {
            returnType: "deviceManagementPartner"
        },
        exchangeConnectors: {
            returnType: "deviceManagementExchangeConnector"
        },
        mobileThreatDefenseConnectors: {
            returnType: "mobileThreatDefenseConnector"
        },
        applePushNotificationCertificate: {
            returnType: "applePushNotificationCertificate"
        },
        detectedApps: {
            returnType: "detectedApp"
        },
        managedDeviceOverview: {
            returnType: "managedDeviceOverview"
        },
        managedDevices: {
            returnType: "managedDevice"
        },
        mobileAppTroubleshootingEvents: {
            returnType: "mobileAppTroubleshootingEvent"
        },
        userExperienceAnalyticsAppHealthApplicationPerformance: {
            returnType: "userExperienceAnalyticsAppHealthApplicationPerformance"
        },
        userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: {
            returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails"
        },
        userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: {
            returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId"
        },
        userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: {
            returnType: "userExperienceAnalyticsAppHealthAppPerformanceByOSVersion"
        },
        userExperienceAnalyticsAppHealthDeviceModelPerformance: {
            returnType: "userExperienceAnalyticsAppHealthDeviceModelPerformance"
        },
        userExperienceAnalyticsAppHealthDevicePerformance: {
            returnType: "userExperienceAnalyticsAppHealthDevicePerformance"
        },
        userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
            returnType: "userExperienceAnalyticsAppHealthDevicePerformanceDetails"
        },
        userExperienceAnalyticsAppHealthOSVersionPerformance: {
            returnType: "userExperienceAnalyticsAppHealthOSVersionPerformance"
        },
        userExperienceAnalyticsAppHealthOverview: {
            returnType: "userExperienceAnalyticsCategory"
        },
        userExperienceAnalyticsBaselines: {
            returnType: "userExperienceAnalyticsBaseline"
        },
        userExperienceAnalyticsCategories: {
            returnType: "userExperienceAnalyticsCategory"
        },
        userExperienceAnalyticsDevicePerformance: {
            returnType: "userExperienceAnalyticsDevicePerformance"
        },
        userExperienceAnalyticsDeviceScores: {
            returnType: "userExperienceAnalyticsDeviceScores"
        },
        userExperienceAnalyticsDeviceStartupHistory: {
            returnType: "userExperienceAnalyticsDeviceStartupHistory"
        },
        userExperienceAnalyticsDeviceStartupProcesses: {
            returnType: "userExperienceAnalyticsDeviceStartupProcess"
        },
        userExperienceAnalyticsDeviceStartupProcessPerformance: {
            returnType: "userExperienceAnalyticsDeviceStartupProcessPerformance"
        },
        userExperienceAnalyticsMetricHistory: {
            returnType: "userExperienceAnalyticsMetricHistory"
        },
        userExperienceAnalyticsModelScores: {
            returnType: "userExperienceAnalyticsModelScores"
        },
        userExperienceAnalyticsOverview: {
            returnType: "userExperienceAnalyticsOverview"
        },
        userExperienceAnalyticsScoreHistory: {
            returnType: "userExperienceAnalyticsScoreHistory"
        },
        userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
            returnType: "userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
        },
        userExperienceAnalyticsWorkFromAnywhereMetrics: {
            returnType: "userExperienceAnalyticsWorkFromAnywhereMetric"
        },
        userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
            returnType: "userExperienceAnalyticsWorkFromAnywhereModelPerformance"
        },
        windowsMalwareInformation: {
            returnType: "windowsMalwareInformation"
        },
        importedWindowsAutopilotDeviceIdentities: {
            returnType: "importedWindowsAutopilotDeviceIdentity"
        },
        windowsAutopilotDeviceIdentities: {
            returnType: "windowsAutopilotDeviceIdentity"
        },
        notificationMessageTemplates: {
            returnType: "notificationMessageTemplate"
        },
        resourceOperations: {
            returnType: "resourceOperation"
        },
        roleAssignments: {
            returnType: "deviceAndAppManagementRoleAssignment"
        },
        roleDefinitions: {
            returnType: "roleDefinition"
        },
        remoteAssistancePartners: {
            returnType: "remoteAssistancePartner"
        },
        reports: {
            returnType: "deviceManagementReports"
        },
        telecomExpenseManagementPartners: {
            returnType: "telecomExpenseManagementPartner"
        },
        troubleshootingEvents: {
            returnType: "deviceManagementTroubleshootingEvent"
        },
        windowsInformationProtectionAppLearningSummaries: {
            returnType: "windowsInformationProtectionAppLearningSummary"
        },
        windowsInformationProtectionNetworkLearningSummaries: {
            returnType: "windowsInformationProtectionNetworkLearningSummary"
        },
    },
    deviceManagementCachedReportConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceManagementExchangeConnector: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceManagementExportJob: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceManagementPartner: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceManagementReports: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        exportJobs: {
            returnType: "deviceManagementExportJob"
        },
    },
    deviceManagementTroubleshootingEvent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    deviceRegistrationPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    directory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceLocalCredentials: {
            returnType: "deviceLocalCredentialInfo"
        },
        administrativeUnits: {
            returnType: "administrativeUnit"
        },
        attributeSets: {
            returnType: "attributeSet"
        },
        customSecurityAttributeDefinitions: {
            returnType: "customSecurityAttributeDefinition"
        },
        deletedItems: {
            returnType: "directoryObject"
        },
        federationConfigurations: {
            returnType: "identityProviderBase"
        },
        onPremisesSynchronization: {
            returnType: "onPremisesDirectorySynchronization"
        },
        subscriptions: {
            returnType: "companySubscription"
        },
    },
    directoryAudit: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    directoryDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    directoryObject: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    directoryObjectPartnerReference: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    directoryRole: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        members: {
            returnType: "directoryObject"
        },
        scopedMembers: {
            returnType: "scopedRoleMembership"
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
    domain: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        domainNameReferences: {
            returnType: "directoryObject"
        },
        federationConfiguration: {
            returnType: "internalDomainFederation"
        },
        rootDomain: {
            returnType: "domain"
        },
        serviceConfigurationRecords: {
            returnType: "domainDnsRecord"
        },
        verificationDnsRecords: {
            returnType: "domainDnsRecord"
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
            returnType: "driveItem"
        },
        following: {
            returnType: "driveItem"
        },
        items: {
            returnType: "driveItem"
        },
        list: {
            returnType: "list"
        },
        root: {
            returnType: "driveItem"
        },
        special: {
            returnType: "driveItem"
        },
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
            returnType: "driveItem"
        },
        listItem: {
            returnType: "listItem"
        },
        permissions: {
            returnType: "permission"
        },
        retentionLabel: {
            returnType: "itemRetentionLabel"
        },
        subscriptions: {
            returnType: "subscription"
        },
        thumbnails: {
            returnType: "thumbnailSet"
        },
        versions: {
            returnType: "driveItemVersion"
        },
    },
    driveItemVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    driveProtectionRule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    driveProtectionUnit: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    driveRestoreArtifact: {
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
            returnType: "ediscoveryCustodian"
        },
        noncustodialDataSources: {
            returnType: "ediscoveryNoncustodialDataSource"
        },
        operations: {
            returnType: "caseOperation"
        },
        reviewSets: {
            returnType: "ediscoveryReviewSet"
        },
        searches: {
            returnType: "ediscoverySearch"
        },
        settings: {
            returnType: "ediscoveryCaseSettings"
        },
        tags: {
            returnType: "ediscoveryReviewTag"
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
            returnType: "siteSource"
        },
        unifiedGroupSources: {
            returnType: "unifiedGroupSource"
        },
        userSources: {
            returnType: "userSource"
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
            returnType: "ediscoveryReviewSetQuery"
        },
    },
    ediscoveryReviewSetQuery: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    ediscoveryReviewTag: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        childTags: {
            returnType: "ediscoveryReviewTag"
        },
        parent: {
            returnType: "ediscoveryReviewTag"
        },
    },
    ediscoverySearch: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        additionalSources: {
            returnType: "dataSource"
        },
        addToReviewSetOperation: {
            returnType: "ediscoveryAddToReviewSetOperation"
        },
        custodianSources: {
            returnType: "dataSource"
        },
        lastEstimateStatisticsOperation: {
            returnType: "ediscoveryEstimateOperation"
        },
        noncustodialSources: {
            returnType: "ediscoveryNoncustodialDataSource"
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
            returnType: "educationCategory"
        },
        gradingCategory: {
            returnType: "educationGradingCategory"
        },
        resources: {
            returnType: "educationAssignmentResource"
        },
        rubric: {
            returnType: "educationRubric"
        },
        submissions: {
            returnType: "educationSubmission"
        },
    },
    educationAssignmentDefaults: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationAssignmentResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationAssignmentSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        gradingCategories: {
            returnType: "educationGradingCategory"
        },
    },
    educationCategory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationClass: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignmentCategories: {
            returnType: "educationCategory"
        },
        assignmentDefaults: {
            returnType: "educationAssignmentDefaults"
        },
        assignments: {
            returnType: "educationAssignment"
        },
        assignmentSettings: {
            returnType: "educationAssignmentSettings"
        },
        modules: {
            returnType: "educationModule"
        },
        group: {
            returnType: "group"
        },
        members: {
            returnType: "educationUser"
        },
        schools: {
            returnType: "educationSchool"
        },
        teachers: {
            returnType: "educationUser"
        },
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
    educationModule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resources: {
            returnType: "educationModuleResource"
        },
    },
    educationModuleResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationOrganization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationOutcome: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationPointsOutcome: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        classes: {
            returnType: "educationClass"
        },
        me: {
            returnType: "educationUser"
        },
        schools: {
            returnType: "educationSchool"
        },
        users: {
            returnType: "educationUser"
        },
    },
    educationRubric: {
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
            returnType: "educationClass"
        },
        users: {
            returnType: "educationUser"
        },
    },
    educationSubmission: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        outcomes: {
            returnType: "educationOutcome"
        },
        resources: {
            returnType: "educationSubmissionResource"
        },
        submittedResources: {
            returnType: "educationSubmissionResource"
        },
    },
    educationSubmissionResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    educationUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "educationAssignment"
        },
        rubrics: {
            returnType: "educationRubric"
        },
        classes: {
            returnType: "educationClass"
        },
        schools: {
            returnType: "educationSchool"
        },
        taughtClasses: {
            returnType: "educationClass"
        },
        user: {
            returnType: "user"
        },
    },
    emailAuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    emailAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
        },
    },
    emailFileAssessmentRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    employeeExperience: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        communities: {
            returnType: "community"
        },
        engagementAsyncOperations: {
            returnType: "engagementAsyncOperation"
        },
        learningCourseActivities: {
            returnType: "learningCourseActivity"
        },
        learningProviders: {
            returnType: "learningProvider"
        },
    },
    employeeExperienceUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        learningCourseActivities: {
            returnType: "learningCourseActivity"
        },
    },
    endUserNotification: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        details: {
            returnType: "endUserNotificationDetail"
        },
    },
    endUserNotificationDetail: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    endpoint: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    engagementAsyncOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    enrollmentConfigurationAssignment: {
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
            returnType: "approval"
        },
        accessPackages: {
            returnType: "accessPackage"
        },
        assignmentPolicies: {
            returnType: "accessPackageAssignmentPolicy"
        },
        assignmentRequests: {
            returnType: "accessPackageAssignmentRequest"
        },
        assignments: {
            returnType: "accessPackageAssignment"
        },
        catalogs: {
            returnType: "accessPackageCatalog"
        },
        connectedOrganizations: {
            returnType: "connectedOrganization"
        },
        resourceEnvironments: {
            returnType: "accessPackageResourceEnvironment"
        },
        resourceRequests: {
            returnType: "accessPackageResourceRequest"
        },
        resourceRoleScopes: {
            returnType: "accessPackageResourceRoleScope"
        },
        resources: {
            returnType: "accessPackageResource"
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
            returnType: "attachment"
        },
        calendar: {
            returnType: "calendar"
        },
        extensions: {
            returnType: "extension"
        },
        instances: {
            returnType: "event"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
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
            returnType: "mailboxProtectionRule"
        },
        mailboxProtectionUnits: {
            returnType: "mailboxProtectionUnit"
        },
    },
    exchangeRestoreSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        granularMailboxRestoreArtifacts: {
            returnType: "granularMailboxRestoreArtifact"
        },
        mailboxRestoreArtifacts: {
            returnType: "mailboxRestoreArtifact"
        },
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
    extensionProperty: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    external: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        connections: {
            returnType: "externalConnection"
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
            returnType: "externalGroup"
        },
        items: {
            returnType: "externalItem"
        },
        operations: {
            returnType: "connectionOperation"
        },
        schema: {
            returnType: "schema"
        },
    },
    externalDomainName: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    externalGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        members: {
            returnType: "identity"
        },
    },
    externalItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        activities: {
            returnType: "externalActivity"
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
            returnType: "directoryObject"
        },
    },
    federatedIdentityCredential: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    fido2AuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    fido2AuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
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
            returnType: "fileStorageContainer"
        },
    },
    fileStorageContainer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        drive: {
            returnType: "drive"
        },
        permissions: {
            returnType: "permission"
        },
    },
    filterOperatorSchema: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    governanceInsight: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    granularMailboxRestoreArtifact: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    group: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        sets: {
            returnType: "set"
        },
    },
    groupLifecyclePolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    groupSetting: {
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
    horizontalSection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        columns: {
            returnType: "horizontalSectionColumn"
        },
    },
    horizontalSectionColumn: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        webparts: {
            returnType: "webPart"
        },
    },
    host: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        childHostPairs: {
            returnType: "hostPair"
        },
        components: {
            returnType: "hostComponent"
        },
        cookies: {
            returnType: "hostCookie"
        },
        hostPairs: {
            returnType: "hostPair"
        },
        parentHostPairs: {
            returnType: "hostPair"
        },
        passiveDns: {
            returnType: "passiveDnsRecord"
        },
        passiveDnsReverse: {
            returnType: "passiveDnsRecord"
        },
        ports: {
            returnType: "hostPort"
        },
        reputation: {
            returnType: "hostReputation"
        },
        sslCertificates: {
            returnType: "hostSslCertificate"
        },
        subdomains: {
            returnType: "subdomain"
        },
        trackers: {
            returnType: "hostTracker"
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
    identityBuiltInUserFlowAttribute: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    identityContainer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        healthIssues: {
            returnType: "healthIssue"
        },
        sensors: {
            returnType: "sensor"
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
            returnType: "riskDetection"
        },
        riskyServicePrincipals: {
            returnType: "riskyServicePrincipal"
        },
        riskyUsers: {
            returnType: "riskyUser"
        },
        servicePrincipalRiskDetections: {
            returnType: "servicePrincipalRiskDetection"
        },
    },
    identityProvider: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    identityProviderBase: {
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
    identityUserFlowAttributeAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        userAttribute: {
            returnType: "identityUserFlowAttribute"
        },
    },
    importedWindowsAutopilotDeviceIdentity: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    importedWindowsAutopilotDeviceIdentityUpload: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceIdentities: {
            returnType: "importedWindowsAutopilotDeviceIdentity"
        },
    },
    incident: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        alerts: {
            returnType: "alert"
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
            returnType: "inferenceClassificationOverride"
        },
    },
    inferenceClassificationOverride: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    informationProtection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        bitlocker: {
            returnType: "bitlocker"
        },
        threatAssessmentRequests: {
            returnType: "threatAssessmentRequest"
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
            returnType: "intelligenceProfileIndicator"
        },
    },
    intelligenceProfileIndicator: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    internalDomainFederation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    internetExplorerMode: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        siteLists: {
            returnType: "browserSiteList"
        },
    },
    invitation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        invitedUser: {
            returnType: "user"
        },
        invitedUserSponsors: {
            returnType: "directoryObject"
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
            returnType: "managedMobileApp"
        },
        deploymentSummary: {
            returnType: "managedAppPolicyDeploymentSummary"
        },
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
    itemActivityStat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        activities: {
            returnType: "itemActivity"
        },
    },
    itemAnalytics: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        allTime: {
            returnType: "itemActivityStat"
        },
        itemActivityStats: {
            returnType: "itemActivityStat"
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
            returnType: "authorityTemplate"
        },
        categories: {
            returnType: "categoryTemplate"
        },
        citations: {
            returnType: "citationTemplate"
        },
        departments: {
            returnType: "departmentTemplate"
        },
        filePlanReferences: {
            returnType: "filePlanReferenceTemplate"
        },
        retentionLabels: {
            returnType: "retentionLabel"
        },
    },
    landingPage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        details: {
            returnType: "landingPageDetail"
        },
    },
    landingPageDetail: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    learningAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    learningContent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    learningCourseActivity: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    learningProvider: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        learningContents: {
            returnType: "learningContent"
        },
        learningCourseActivities: {
            returnType: "learningCourseActivity"
        },
    },
    learningSelfInitiatedCourse: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    licenseDetails: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    lifecycleManagementSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    lifecycleWorkflowsContainer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        customTaskExtensions: {
            returnType: "customTaskExtension"
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
            returnType: "taskDefinition"
        },
        workflows: {
            returnType: "workflow"
        },
        workflowTemplates: {
            returnType: "workflowTemplate"
        },
    },
    linkedResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    list: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        columns: {
            returnType: "columnDefinition"
        },
        contentTypes: {
            returnType: "contentType"
        },
        drive: {
            returnType: "drive"
        },
        items: {
            returnType: "listItem"
        },
        operations: {
            returnType: "richLongRunningOperation"
        },
        subscriptions: {
            returnType: "subscription"
        },
        update: {
            argNames: ["values"],
        },
    },
    listItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        analytics: {
            returnType: "itemAnalytics"
        },
        documentSetVersions: {
            returnType: "documentSetVersion"
        },
        driveItem: {
            returnType: "driveItem"
        },
        fields: {
            returnType: "fieldValueSet"
        },
        versions: {
            returnType: "listItemVersion"
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
    listItemVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        fields: {
            returnType: "fieldValueSet"
        },
    },
    localizedNotificationMessage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    loginPage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    longRunningOperation: {
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
            returnType: "mailFolder"
        },
        messageRules: {
            returnType: "messageRule"
        },
        messages: {
            returnType: "message"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    mailSearchFolder: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mailboxProtectionRule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mailboxProtectionUnit: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mailboxRestoreArtifact: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    malwareStateForWindowsDevice: {
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
    managedAppPolicy: {
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
            returnType: "managedAppPolicy"
        },
        intendedPolicies: {
            returnType: "managedAppPolicy"
        },
        operations: {
            returnType: "managedAppOperation"
        },
    },
    managedAppStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    managedAppStatusRaw: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    managedDevice: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceCompliancePolicyStates: {
            returnType: "deviceCompliancePolicyState"
        },
        deviceConfigurationStates: {
            returnType: "deviceConfigurationState"
        },
        deviceCategory: {
            returnType: "deviceCategory"
        },
        logCollectionRequests: {
            returnType: "deviceLogCollectionResponse"
        },
        users: {
            returnType: "user"
        },
        windowsProtectionState: {
            returnType: "windowsProtectionState"
        },
    },
    managedDeviceMobileAppConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "managedDeviceMobileAppConfigurationAssignment"
        },
        deviceStatuses: {
            returnType: "managedDeviceMobileAppConfigurationDeviceStatus"
        },
        deviceStatusSummary: {
            returnType: "managedDeviceMobileAppConfigurationDeviceSummary"
        },
        userStatuses: {
            returnType: "managedDeviceMobileAppConfigurationUserStatus"
        },
        userStatusSummary: {
            returnType: "managedDeviceMobileAppConfigurationUserSummary"
        },
    },
    managedDeviceMobileAppConfigurationAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    managedDeviceMobileAppConfigurationDeviceStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    managedDeviceMobileAppConfigurationDeviceSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    managedDeviceMobileAppConfigurationUserStatus: {
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
            returnType: "managedEBookAssignment"
        },
        deviceStates: {
            returnType: "deviceInstallState"
        },
        installSummary: {
            returnType: "eBookInstallSummary"
        },
        userStateSummary: {
            returnType: "userInstallStateSummary"
        },
    },
    managedEBookAssignment: {
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
    managedMobileLobApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        contentVersions: {
            returnType: "mobileAppContent"
        },
    },
    manifest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mdmWindowsInformationProtectionPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    meetingAttendanceReport: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        attendanceRecords: {
            returnType: "attendanceRecord"
        },
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
            returnType: "attachment"
        },
        extensions: {
            returnType: "extension"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    messageRule: {
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
    microsoftAuthenticatorAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "microsoftAuthenticatorAuthenticationMethodTarget"
        },
    },
    microsoftAuthenticatorAuthenticationMethodTarget: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    microsoftStoreForBusinessApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mobileApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "mobileAppAssignment"
        },
        categories: {
            returnType: "mobileAppCategory"
        },
    },
    mobileAppAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mobileAppCategory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mobileAppContent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        containedApps: {
            returnType: "mobileContainedApp"
        },
        files: {
            returnType: "mobileAppContentFile"
        },
    },
    mobileAppContentFile: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mobileAppTroubleshootingEvent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appLogCollectionRequests: {
            returnType: "appLogCollectionRequest"
        },
    },
    mobileContainedApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    mobileLobApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        contentVersions: {
            returnType: "mobileAppContent"
        },
    },
    mobileThreatDefenseConnector: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    multiTenantOrganization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        joinRequest: {
            returnType: "multiTenantOrganizationJoinRequestRecord"
        },
        tenants: {
            returnType: "multiTenantOrganizationMember"
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
    multiTenantOrganizationPartnerConfigurationTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    multiValueLegacyExtendedProperty: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    muteParticipantOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    namedLocation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    networkAdapter: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    notebook: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        sectionGroups: {
            returnType: "sectionGroup"
        },
        sections: {
            returnType: "onenoteSection"
        },
    },
    notificationMessageTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        localizedNotificationMessages: {
            returnType: "localizedNotificationMessage"
        },
    },
    oAuth2PermissionGrant: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    offerShiftRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    officeGraphInsights: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        shared: {
            returnType: "sharedInsight"
        },
        trending: {
            returnType: "trending"
        },
        used: {
            returnType: "usedInsight"
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
            returnType: "driveProtectionRule"
        },
        driveProtectionUnits: {
            returnType: "driveProtectionUnit"
        },
    },
    oneDriveForBusinessRestoreSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        driveRestoreArtifacts: {
            returnType: "driveRestoreArtifact"
        },
    },
    onenote: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        notebooks: {
            returnType: "notebook"
        },
        operations: {
            returnType: "onenoteOperation"
        },
        pages: {
            returnType: "onenotePage"
        },
        resources: {
            returnType: "onenoteResource"
        },
        sectionGroups: {
            returnType: "sectionGroup"
        },
        sections: {
            returnType: "onenoteSection"
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
    onenotePage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        parentNotebook: {
            returnType: "notebook"
        },
        parentSection: {
            returnType: "onenoteSection"
        },
    },
    onenoteResource: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    onenoteSection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        pages: {
            returnType: "onenotePage"
        },
        parentNotebook: {
            returnType: "notebook"
        },
        parentSectionGroup: {
            returnType: "sectionGroup"
        },
    },
    onlineMeeting: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        recordings: {
            returnType: "callRecording"
        },
        transcripts: {
            returnType: "callTranscript"
        },
    },
    onlineMeetingBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        attendanceReports: {
            returnType: "meetingAttendanceReport"
        },
    },
    openShift: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    openShiftChangeRequest: {
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
            returnType: "directoryObject"
        },
        manager: {
            returnType: "directoryObject"
        },
        memberOf: {
            returnType: "directoryObject"
        },
        transitiveMemberOf: {
            returnType: "directoryObject"
        },
    },
    organization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        branding: {
            returnType: "organizationalBranding"
        },
        certificateBasedAuthConfiguration: {
            returnType: "certificateBasedAuthConfiguration"
        },
        extensions: {
            returnType: "extension"
        },
    },
    organizationalBranding: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        localizations: {
            returnType: "organizationalBrandingLocalization"
        },
    },
    organizationalBrandingLocalization: {
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
    outlookItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    outlookUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        masterCategories: {
            returnType: "outlookCategory"
        },
    },
    participant: {
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
    payload: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    peopleAdminSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        profileCardProperties: {
            returnType: "profileCardProperty"
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
    permissionGrantConditionSet: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    permissionGrantPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        excludes: {
            returnType: "permissionGrantConditionSet"
        },
        includes: {
            returnType: "permissionGrantConditionSet"
        },
    },
    person: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    phoneAuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    pinnedChatMessageInfo: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        message: {
            returnType: "chatMessage"
        },
    },
    place: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    planner: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        buckets: {
            returnType: "plannerBucket"
        },
        plans: {
            returnType: "plannerPlan"
        },
        tasks: {
            returnType: "plannerTask"
        },
    },
    plannerAssignedToTaskBoardTaskFormat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    plannerBucket: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        tasks: {
            returnType: "plannerTask"
        },
    },
    plannerBucketTaskBoardTaskFormat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    plannerGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        plans: {
            returnType: "plannerPlan"
        },
    },
    plannerPlan: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        buckets: {
            returnType: "plannerBucket"
        },
        details: {
            returnType: "plannerPlanDetails"
        },
        tasks: {
            returnType: "plannerTask"
        },
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
    plannerTaskDetails: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    plannerUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        plans: {
            returnType: "plannerPlan"
        },
        tasks: {
            returnType: "plannerTask"
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
            returnType: "authenticationStrengthPolicy"
        },
        authenticationFlowsPolicy: {
            returnType: "authenticationFlowsPolicy"
        },
        deviceRegistrationPolicy: {
            returnType: "deviceRegistrationPolicy"
        },
        activityBasedTimeoutPolicies: {
            returnType: "activityBasedTimeoutPolicy"
        },
        appManagementPolicies: {
            returnType: "appManagementPolicy"
        },
        authorizationPolicy: {
            returnType: "authorizationPolicy"
        },
        claimsMappingPolicies: {
            returnType: "claimsMappingPolicy"
        },
        crossTenantAccessPolicy: {
            returnType: "crossTenantAccessPolicy"
        },
        defaultAppManagementPolicy: {
            returnType: "tenantAppManagementPolicy"
        },
        homeRealmDiscoveryPolicies: {
            returnType: "homeRealmDiscoveryPolicy"
        },
        permissionGrantPolicies: {
            returnType: "permissionGrantPolicy"
        },
        tokenIssuancePolicies: {
            returnType: "tokenIssuancePolicy"
        },
        tokenLifetimePolicies: {
            returnType: "tokenLifetimePolicy"
        },
        featureRolloutPolicies: {
            returnType: "featureRolloutPolicy"
        },
        adminConsentRequestPolicy: {
            returnType: "adminConsentRequestPolicy"
        },
        conditionalAccessPolicies: {
            returnType: "conditionalAccessPolicy"
        },
        identitySecurityDefaultsEnforcementPolicy: {
            returnType: "identitySecurityDefaultsEnforcementPolicy"
        },
        roleManagementPolicies: {
            returnType: "unifiedRoleManagementPolicy"
        },
        roleManagementPolicyAssignments: {
            returnType: "unifiedRoleManagementPolicyAssignment"
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
            returnType: "attachment"
        },
        extensions: {
            returnType: "extension"
        },
        inReplyTo: {
            returnType: "post"
        },
        multiValueExtendedProperties: {
            returnType: "multiValueLegacyExtendedProperty"
        },
        singleValueExtendedProperties: {
            returnType: "singleValueLegacyExtendedProperty"
        },
    },
    presence: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    print: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        connectors: {
            returnType: "printConnector"
        },
        operations: {
            returnType: "printOperation"
        },
        printers: {
            returnType: "printer"
        },
        services: {
            returnType: "printService"
        },
        shares: {
            returnType: "printerShare"
        },
        taskDefinitions: {
            returnType: "printTaskDefinition"
        },
    },
    printConnector: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printDocument: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printJob: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        documents: {
            returnType: "printDocument"
        },
        tasks: {
            returnType: "printTask"
        },
    },
    printOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printService: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        endpoints: {
            returnType: "printServiceEndpoint"
        },
    },
    printServiceEndpoint: {
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
    printTaskDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        tasks: {
            returnType: "printTask"
        },
    },
    printTaskTrigger: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        definition: {
            returnType: "printTaskDefinition"
        },
    },
    printUsage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printUsageByPrinter: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printUsageByUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    printer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        connectors: {
            returnType: "printConnector"
        },
        shares: {
            returnType: "printerShare"
        },
        taskTriggers: {
            returnType: "printTaskTrigger"
        },
    },
    printerBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        jobs: {
            returnType: "printJob"
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
            returnType: "group"
        },
        allowedUsers: {
            returnType: "user"
        },
        printer: {
            returnType: "printer"
        },
    },
    privacy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        subjectRightsRequests: {
            returnType: "subjectRightsRequest"
        },
    },
    privilegedAccessGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignmentApprovals: {
            returnType: "approval"
        },
        assignmentScheduleInstances: {
            returnType: "privilegedAccessGroupAssignmentScheduleInstance"
        },
        assignmentScheduleRequests: {
            returnType: "privilegedAccessGroupAssignmentScheduleRequest"
        },
        assignmentSchedules: {
            returnType: "privilegedAccessGroupAssignmentSchedule"
        },
        eligibilityScheduleInstances: {
            returnType: "privilegedAccessGroupEligibilityScheduleInstance"
        },
        eligibilityScheduleRequests: {
            returnType: "privilegedAccessGroupEligibilityScheduleRequest"
        },
        eligibilitySchedules: {
            returnType: "privilegedAccessGroupEligibilitySchedule"
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
    privilegedAccessGroupEligibilitySchedule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        group: {
            returnType: "group"
        },
        principal: {
            returnType: "directoryObject"
        },
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
    profilePhoto: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    pronounsSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    protectionPolicyBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    protectionRuleBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    protectionUnitBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    provisioningObjectSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    qna: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    rbacApplication: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resourceNamespaces: {
            returnType: "unifiedRbacResourceNamespace"
        },
        roleAssignments: {
            returnType: "unifiedRoleAssignment"
        },
        roleDefinitions: {
            returnType: "unifiedRoleDefinition"
        },
        roleAssignmentScheduleInstances: {
            returnType: "unifiedRoleAssignmentScheduleInstance"
        },
        roleAssignmentScheduleRequests: {
            returnType: "unifiedRoleAssignmentScheduleRequest"
        },
        roleAssignmentSchedules: {
            returnType: "unifiedRoleAssignmentSchedule"
        },
        roleEligibilityScheduleInstances: {
            returnType: "unifiedRoleEligibilityScheduleInstance"
        },
        roleEligibilityScheduleRequests: {
            returnType: "unifiedRoleEligibilityScheduleRequest"
        },
        roleEligibilitySchedules: {
            returnType: "unifiedRoleEligibilitySchedule"
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
    remoteDesktopSecurityConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        targetDeviceGroups: {
            returnType: "targetDeviceGroup"
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
            returnType: "printUsageByPrinter"
        },
        dailyPrintUsageByUser: {
            returnType: "printUsageByUser"
        },
        monthlyPrintUsageByPrinter: {
            returnType: "printUsageByPrinter"
        },
        monthlyPrintUsageByUser: {
            returnType: "printUsageByUser"
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
    resourceSpecificPermissionGrant: {
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
    restoreSessionBase: {
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
            returnType: "dispositionReviewStage"
        },
        retentionEventType: {
            returnType: "retentionEventType"
        },
    },
    richLongRunningOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    riskDetection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    riskyServicePrincipal: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        history: {
            returnType: "riskyServicePrincipalHistoryItem"
        },
    },
    riskyServicePrincipalHistoryItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    riskyUser: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        history: {
            returnType: "riskyUserHistoryItem"
        },
    },
    riskyUserHistoryItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    roleAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        roleDefinition: {
            returnType: "roleDefinition"
        },
    },
    roleDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        roleAssignments: {
            returnType: "roleAssignment"
        },
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
    roomList: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        rooms: {
            returnType: "room"
        },
    },
    run: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        taskProcessingResults: {
            returnType: "taskProcessingResult"
        },
        userProcessingResults: {
            returnType: "userProcessingResult"
        },
    },
    runningOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    samlOrWsFedExternalDomainFederation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        domains: {
            returnType: "externalDomainName"
        },
    },
    samlOrWsFedProvider: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    schedule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        offerShiftRequests: {
            returnType: "offerShiftRequest"
        },
        openShiftChangeRequests: {
            returnType: "openShiftChangeRequest"
        },
        openShifts: {
            returnType: "openShift"
        },
        schedulingGroups: {
            returnType: "schedulingGroup"
        },
        shifts: {
            returnType: "shift"
        },
        swapShiftsChangeRequests: {
            returnType: "swapShiftsChangeRequest"
        },
        timeOffReasons: {
            returnType: "timeOffReason"
        },
        timeOffRequests: {
            returnType: "timeOffRequest"
        },
        timesOff: {
            returnType: "timeOff"
        },
    },
    scheduleChangeRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    schedulingGroup: {
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
    search: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    searchAnswer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    searchEntity: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        acronyms: {
            returnType: "acronym"
        },
        bookmarks: {
            returnType: "bookmark"
        },
        qnas: {
            returnType: "qna"
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
            returnType: "sectionGroup"
        },
        sections: {
            returnType: "onenoteSection"
        },
    },
    secureScore: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    secureScoreControlProfile: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    security: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        subjectRightsRequests: {
            returnType: "subjectRightsRequest"
        },
        cases: {
            returnType: "casesRoot"
        },
        identities: {
            returnType: "identityContainer"
        },
        alerts_v2: {
            returnType: "alert"
        },
        incidents: {
            returnType: "incident"
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
            returnType: "alert"
        },
        secureScoreControlProfiles: {
            returnType: "secureScoreControlProfile"
        },
        secureScores: {
            returnType: "secureScore"
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
            returnType: "healthIssue"
        },
    },
    serviceAnnouncement: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        healthOverviews: {
            returnType: "serviceHealth"
        },
        issues: {
            returnType: "serviceHealthIssue"
        },
        messages: {
            returnType: "serviceUpdateMessage"
        },
    },
    serviceAnnouncementAttachment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    serviceAnnouncementBase: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    serviceApp: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    serviceHealth: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        issues: {
            returnType: "serviceHealthIssue"
        },
    },
    serviceHealthIssue: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    servicePrincipal: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appManagementPolicies: {
            returnType: "appManagementPolicy"
        },
        appRoleAssignedTo: {
            returnType: "appRoleAssignment"
        },
        appRoleAssignments: {
            returnType: "appRoleAssignment"
        },
        claimsMappingPolicies: {
            returnType: "claimsMappingPolicy"
        },
        createdObjects: {
            returnType: "directoryObject"
        },
        delegatedPermissionClassifications: {
            returnType: "delegatedPermissionClassification"
        },
        endpoints: {
            returnType: "endpoint"
        },
        federatedIdentityCredentials: {
            returnType: "federatedIdentityCredential"
        },
        homeRealmDiscoveryPolicies: {
            returnType: "homeRealmDiscoveryPolicy"
        },
        memberOf: {
            returnType: "directoryObject"
        },
        oauth2PermissionGrants: {
            returnType: "oAuth2PermissionGrant"
        },
        ownedObjects: {
            returnType: "directoryObject"
        },
        owners: {
            returnType: "directoryObject"
        },
        remoteDesktopSecurityConfiguration: {
            returnType: "remoteDesktopSecurityConfiguration"
        },
        tokenIssuancePolicies: {
            returnType: "tokenIssuancePolicy"
        },
        tokenLifetimePolicies: {
            returnType: "tokenLifetimePolicy"
        },
        transitiveMemberOf: {
            returnType: "directoryObject"
        },
        synchronization: {
            returnType: "synchronization"
        },
    },
    servicePrincipalRiskDetection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    serviceStorageQuotaBreakdown: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    serviceUpdateMessage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        attachments: {
            returnType: "serviceAnnouncementAttachment"
        },
    },
    session: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        segments: {
            returnType: "segment"
        },
    },
    set: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        children: {
            returnType: "term"
        },
        parentGroup: {
            returnType: "group"
        },
        relations: {
            returnType: "relation"
        },
        terms: {
            returnType: "term"
        },
    },
    settingStateDeviceSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    sharePointProtectionPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        siteInclusionRules: {
            returnType: "siteProtectionRule"
        },
        siteProtectionUnits: {
            returnType: "siteProtectionUnit"
        },
    },
    sharePointRestoreSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        siteRestoreArtifacts: {
            returnType: "siteRestoreArtifact"
        },
    },
    sharedDriveItem: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        driveItem: {
            returnType: "driveItem"
        },
        items: {
            returnType: "driveItem"
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
    sharedPCConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    sharedWithChannelTeamInfo: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        allowedMembers: {
            returnType: "conversationMember"
        },
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
    shiftPreferences: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    signIn: {
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
    simulationAutomation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        runs: {
            returnType: "simulationAutomationRun"
        },
    },
    simulationAutomationRun: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    singleValueLegacyExtendedProperty: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    site: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        analytics: {
            returnType: "itemAnalytics"
        },
        columns: {
            returnType: "columnDefinition"
        },
        contentTypes: {
            returnType: "contentType"
        },
        drive: {
            returnType: "drive"
        },
        drives: {
            returnType: "drive"
        },
        externalColumns: {
            returnType: "columnDefinition"
        },
        items: {
            returnType: "baseItem"
        },
        lists: {
            returnType: "list"
        },
        operations: {
            returnType: "richLongRunningOperation"
        },
        pages: {
            returnType: "baseSitePage"
        },
        permissions: {
            returnType: "permission"
        },
        sites: {
            returnType: "site"
        },
        termStore: {
            returnType: "store"
        },
        termStores: {
            returnType: "store"
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
            returnType: "webPart"
        },
    },
    siteProtectionRule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    siteProtectionUnit: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    siteRestoreArtifact: {
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
            "lists|lists|('[Name]')|list"
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
            returnType: "smsAuthenticationMethodTarget"
        },
    },
    smsAuthenticationMethodTarget: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    socialIdentityProvider: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    softwareOathAuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    softwareOathAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
        },
    },
    softwareUpdateStatusSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    solutionsRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        bookingBusinesses: {
            returnType: "bookingBusiness"
        },
        bookingCurrencies: {
            returnType: "bookingCurrency"
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
            returnType: "host"
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
            returnType: "group"
        },
        sets: {
            returnType: "set"
        },
    },
    stsPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appliesTo: {
            returnType: "directoryObject"
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
            returnType: "user"
        },
        collaborators: {
            returnType: "user"
        },
        notes: {
            returnType: "authoredNote"
        },
        team: {
            returnType: "team"
        },
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
    swapShiftsChangeRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    synchronization: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        jobs: {
            returnType: "synchronizationJob"
        },
        templates: {
            returnType: "synchronizationTemplate"
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
    synchronizationSchema: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        directories: {
            returnType: "directoryDefinition"
        },
    },
    synchronizationTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        schema: {
            returnType: "synchronizationSchema"
        },
    },
    tag: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    targetDeviceGroup: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    targetedManagedAppConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        apps: {
            returnType: "managedMobileApp"
        },
        assignments: {
            returnType: "targetedManagedAppPolicyAssignment"
        },
        deploymentSummary: {
            returnType: "managedAppPolicyDeploymentSummary"
        },
    },
    targetedManagedAppPolicyAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    targetedManagedAppProtection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "targetedManagedAppPolicyAssignment"
        },
    },
    task: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        taskProcessingResults: {
            returnType: "taskProcessingResult"
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
            returnType: "taskProcessingResult"
        },
    },
    team: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        allChannels: {
            returnType: "channel"
        },
        channels: {
            returnType: "channel"
        },
        group: {
            returnType: "group"
        },
        incomingChannels: {
            returnType: "channel"
        },
        installedApps: {
            returnType: "teamsAppInstallation"
        },
        members: {
            returnType: "conversationMember"
        },
        operations: {
            returnType: "teamsAsyncOperation"
        },
        permissionGrants: {
            returnType: "resourceSpecificPermissionGrant"
        },
        photo: {
            returnType: "profilePhoto"
        },
        primaryChannel: {
            returnType: "channel"
        },
        tags: {
            returnType: "teamworkTag"
        },
        template: {
            returnType: "teamsTemplate"
        },
        schedule: {
            returnType: "schedule"
        },
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
            returnType: "teamsAppDefinition"
        },
    },
    teamsAppDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        bot: {
            returnType: "teamworkBot"
        },
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
    teamsAppSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    teamsAsyncOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    teamsTab: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        teamsApp: {
            returnType: "teamsApp"
        },
    },
    teamsTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    teamwork: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        workforceIntegrations: {
            returnType: "workforceIntegration"
        },
        deletedChats: {
            returnType: "deletedChat"
        },
        deletedTeams: {
            returnType: "deletedTeam"
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
            returnType: "teamworkTagMember"
        },
    },
    teamworkTagMember: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    telecomExpenseManagementPartner: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    temporaryAccessPassAuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    temporaryAccessPassAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
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
            returnType: "delegatedAdminCustomer"
        },
        delegatedAdminRelationships: {
            returnType: "delegatedAdminRelationship"
        },
    },
    term: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        children: {
            returnType: "term"
        },
        relations: {
            returnType: "relation"
        },
        set: {
            returnType: "set"
        },
    },
    termsAndConditions: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        acceptanceStatuses: {
            returnType: "termsAndConditionsAcceptanceStatus"
        },
        assignments: {
            returnType: "termsAndConditionsAssignment"
        },
    },
    termsAndConditionsAcceptanceStatus: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        termsAndConditions: {
            returnType: "termsAndConditions"
        },
    },
    termsAndConditionsAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    termsOfUseContainer: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        agreementAcceptances: {
            returnType: "agreementAcceptance"
        },
        agreements: {
            returnType: "agreement"
        },
    },
    textWebPart: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    threatAssessmentRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        results: {
            returnType: "threatAssessmentResult"
        },
    },
    threatAssessmentResult: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    threatIntelligence: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        articleIndicators: {
            returnType: "articleIndicator"
        },
        articles: {
            returnType: "article"
        },
        hostComponents: {
            returnType: "hostComponent"
        },
        hostCookies: {
            returnType: "hostCookie"
        },
        hostPairs: {
            returnType: "hostPair"
        },
        hostPorts: {
            returnType: "hostPort"
        },
        hosts: {
            returnType: "host"
        },
        hostSslCertificates: {
            returnType: "hostSslCertificate"
        },
        hostTrackers: {
            returnType: "hostTracker"
        },
        intelligenceProfileIndicators: {
            returnType: "intelligenceProfileIndicator"
        },
        intelProfiles: {
            returnType: "intelligenceProfile"
        },
        passiveDnsRecords: {
            returnType: "passiveDnsRecord"
        },
        sslCertificates: {
            returnType: "sslCertificate"
        },
        subdomains: {
            returnType: "subdomain"
        },
        vulnerabilities: {
            returnType: "vulnerability"
        },
        whoisHistoryRecords: {
            returnType: "whoisHistoryRecord"
        },
        whoisRecords: {
            returnType: "whoisRecord"
        },
    },
    thumbnailSet: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    timeOff: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    timeOffReason: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    timeOffRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    todo: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        lists: {
            returnType: "todoTaskList"
        },
    },
    todoTask: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        attachments: {
            returnType: "attachmentBase"
        },
        attachmentSessions: {
            returnType: "attachmentSession"
        },
        checklistItems: {
            returnType: "checklistItem"
        },
        extensions: {
            returnType: "extension"
        },
        linkedResources: {
            returnType: "linkedResource"
        },
    },
    todoTaskList: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        extensions: {
            returnType: "extension"
        },
        tasks: {
            returnType: "todoTask"
        },
    },
    tokenIssuancePolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    tokenLifetimePolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    training: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        languageDetails: {
            returnType: "trainingLanguageDetail"
        },
    },
    trainingLanguageDetail: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    trending: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resource: {
            returnType: "entity"
        },
    },
    triggerTypesRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        retentionEventTypes: {
            returnType: "retentionEventType"
        },
    },
    triggersRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        retentionEvents: {
            returnType: "retentionEvent"
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
    unifiedRbacResourceNamespace: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        resourceActions: {
            returnType: "unifiedRbacResourceAction"
        },
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
    unifiedRoleAssignmentSchedule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        activatedUsing: {
            returnType: "unifiedRoleEligibilitySchedule"
        },
    },
    unifiedRoleAssignmentScheduleInstance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        activatedUsing: {
            returnType: "unifiedRoleEligibilityScheduleInstance"
        },
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
    unifiedRoleDefinition: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        inheritsPermissionsFrom: {
            returnType: "unifiedRoleDefinition"
        },
    },
    unifiedRoleEligibilitySchedule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    unifiedRoleEligibilityScheduleInstance: {
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
    unifiedRoleManagementPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        effectiveRules: {
            returnType: "unifiedRoleManagementPolicyRule"
        },
        rules: {
            returnType: "unifiedRoleManagementPolicyRule"
        },
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
            returnType: "serviceStorageQuotaBreakdown"
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
    user: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        appRoleAssignments: {
            returnType: "appRoleAssignment"
        },
        createdObjects: {
            returnType: "directoryObject"
        },
        directReports: {
            returnType: "directoryObject"
        },
        licenseDetails: {
            returnType: "licenseDetails"
        },
        manager: {
            returnType: "directoryObject"
        },
        memberOf: {
            returnType: "directoryObject"
        },
        oauth2PermissionGrants: {
            returnType: "oAuth2PermissionGrant"
        },
        ownedDevices: {
            returnType: "directoryObject"
        },
        ownedObjects: {
            returnType: "directoryObject"
        },
        registeredDevices: {
            returnType: "directoryObject"
        },
        scopedRoleMemberOf: {
            returnType: "scopedRoleMembership"
        },
        sponsors: {
            returnType: "directoryObject"
        },
        transitiveMemberOf: {
            returnType: "directoryObject"
        },
        calendar: {
            returnType: "calendar"
        },
        calendarGroups: {
            returnType: "calendarGroup"
        },
        calendars: {
            returnType: "calendar"
        },
        calendarView: {
            returnType: "event"
        },
        contactFolders: {
            returnType: "contactFolder"
        },
        contacts: {
            returnType: "contact"
        },
        events: {
            returnType: "event"
        },
        inferenceClassification: {
            returnType: "inferenceClassification"
        },
        mailFolders: {
            returnType: "mailFolder"
        },
        messages: {
            returnType: "message"
        },
        outlook: {
            returnType: "outlookUser"
        },
        people: {
            returnType: "person"
        },
        drive: {
            returnType: "drive"
        },
        drives: {
            returnType: "drive"
        },
        followedSites: {
            returnType: "site"
        },
        extensions: {
            returnType: "extension"
        },
        agreementAcceptances: {
            returnType: "agreementAcceptance"
        },
        managedDevices: {
            returnType: "managedDevice"
        },
        managedAppRegistrations: {
            returnType: "managedAppRegistration"
        },
        deviceManagementTroubleshootingEvents: {
            returnType: "deviceManagementTroubleshootingEvent"
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
            returnType: "profilePhoto"
        },
        activities: {
            returnType: "userActivity"
        },
        onlineMeetings: {
            returnType: "onlineMeeting"
        },
        presence: {
            returnType: "presence"
        },
        authentication: {
            returnType: "authentication"
        },
        chats: {
            returnType: "chat"
        },
        joinedTeams: {
            returnType: "team"
        },
        permissionGrants: {
            returnType: "resourceSpecificPermissionGrant"
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
    userActivity: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        historyItems: {
            returnType: "activityHistoryItem"
        },
    },
    userConsentRequest: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        approval: {
            returnType: "approval"
        },
    },
    userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthApplicationPerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthDeviceModelPerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthDevicePerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsAppHealthOSVersionPerformance: {
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
    userExperienceAnalyticsCategory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        metricValues: {
            returnType: "userExperienceAnalyticsMetric"
        },
    },
    userExperienceAnalyticsDevicePerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsDeviceScores: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsDeviceStartupHistory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsDeviceStartupProcess: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsDeviceStartupProcessPerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsMetric: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsMetricHistory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsModelScores: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsOverview: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsScoreHistory: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsWorkFromAnywhereDevice: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userExperienceAnalyticsWorkFromAnywhereMetric: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        metricDevices: {
            returnType: "userExperienceAnalyticsWorkFromAnywhereDevice"
        },
    },
    userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userFlowLanguageConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        defaultPages: {
            returnType: "userFlowLanguagePage"
        },
        overridesPages: {
            returnType: "userFlowLanguagePage"
        },
    },
    userFlowLanguagePage: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userInsightsSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userInstallStateSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceStates: {
            returnType: "deviceInstallState"
        },
    },
    userProcessingResult: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        subject: {
            returnType: "user"
        },
        taskProcessingResults: {
            returnType: "taskProcessingResult"
        },
    },
    userRegistrationDetails: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    userScopeTeamsAppInstallation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        chat: {
            returnType: "chat"
        },
    },
    userSettings: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        itemInsights: {
            returnType: "userInsightsSettings"
        },
        windows: {
            returnType: "windowsSetting"
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
            returnType: "associatedTeamInfo"
        },
        installedApps: {
            returnType: "userScopeTeamsAppInstallation"
        },
    },
    verticalSection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        webparts: {
            returnType: "webPart"
        },
    },
    virtualEndpoint: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        auditEvents: {
            returnType: "cloudPcAuditEvent"
        },
        cloudPCs: {
            returnType: "cloudPC"
        },
        deviceImages: {
            returnType: "cloudPcDeviceImage"
        },
        galleryImages: {
            returnType: "cloudPcGalleryImage"
        },
        onPremisesConnections: {
            returnType: "cloudPcOnPremisesConnection"
        },
        provisioningPolicies: {
            returnType: "cloudPcProvisioningPolicy"
        },
        userSettings: {
            returnType: "cloudPcUserSetting"
        },
    },
    virtualEvent: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        presenters: {
            returnType: "virtualEventPresenter"
        },
        sessions: {
            returnType: "virtualEventSession"
        },
    },
    virtualEventPresenter: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    virtualEventRegistration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        sessions: {
            returnType: "virtualEventSession"
        },
    },
    virtualEventRegistrationConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        questions: {
            returnType: "virtualEventRegistrationQuestionBase"
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
    virtualEventSession: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    virtualEventTownhall: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    virtualEventWebinar: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        registrationConfiguration: {
            returnType: "virtualEventWebinarRegistrationConfiguration"
        },
        registrations: {
            returnType: "virtualEventRegistration"
        },
    },
    virtualEventWebinarRegistrationConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    virtualEventsRoot: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        events: {
            returnType: "virtualEvent"
        },
        townhalls: {
            returnType: "virtualEventTownhall"
        },
        webinars: {
            returnType: "virtualEventWebinar"
        },
    },
    voiceAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
        },
    },
    vppToken: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    vulnerability: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        articles: {
            returnType: "article"
        },
        components: {
            returnType: "vulnerabilityComponent"
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
            returnType: "whoisHistoryRecord"
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
            returnType: "windowsAutopilotDeviceIdentity"
        },
    },
    windowsAutopilotDeploymentProfileAssignment: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsAutopilotDeviceIdentity: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsDefenderAdvancedThreatProtectionConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsDeviceMalwareState: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsHelloForBusinessAuthenticationMethod: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        device: {
            returnType: "device"
        },
    },
    windowsInformationProtection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        assignments: {
            returnType: "targetedManagedAppPolicyAssignment"
        },
        exemptAppLockerFiles: {
            returnType: "windowsInformationProtectionAppLockerFile"
        },
        protectedAppLockerFiles: {
            returnType: "windowsInformationProtectionAppLockerFile"
        },
    },
    windowsInformationProtectionAppLearningSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsInformationProtectionAppLockerFile: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsInformationProtectionNetworkLearningSummary: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsInformationProtectionPolicy: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsMalwareInformation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        deviceMalwareStates: {
            returnType: "malwareStateForWindowsDevice"
        },
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
            returnType: "windowsDeviceMalwareState"
        },
    },
    windowsSetting: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        instances: {
            returnType: "windowsSettingInstance"
        },
    },
    windowsSettingInstance: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    windowsUniversalAppX: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        committedContainedApps: {
            returnType: "mobileContainedApp"
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
            returnType: "workbookComment"
        },
        functions: {
            returnType: "workbookFunctions"
        },
        names: {
            returnType: "workbookNamedItem"
        },
        operations: {
            returnType: "workbookOperation"
        },
        tables: {
            returnType: "workbookTable"
        },
        worksheets: {
            returnType: "workbookWorksheet"
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
            returnType: "workbookChartSeries"
        },
        title: {
            returnType: "workbookChartTitle"
        },
        worksheet: {
            returnType: "workbookWorksheet"
        },
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
            returnType: "workbookChartPoint"
        },
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
            returnType: "workbookCommentReply"
        },
    },
    workbookCommentReply: {
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
    workbookOperation: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workbookPivotTable: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        worksheet: {
            returnType: "workbookWorksheet"
        },
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
    workbookRangeFill: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workbookRangeFont: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workbookRangeFormat: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        borders: {
            returnType: "workbookRangeBorder"
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
            returnType: "workbookRangeView"
        },
    },
    workbookTable: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        columns: {
            returnType: "workbookTableColumn"
        },
        rows: {
            returnType: "workbookTableRow"
        },
        sort: {
            returnType: "workbookTableSort"
        },
        worksheet: {
            returnType: "workbookWorksheet"
        },
    },
    workbookTableColumn: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        filter: {
            returnType: "workbookFilter"
        },
    },
    workbookTableRow: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workbookTableSort: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workbookWorksheet: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        charts: {
            returnType: "workbookChart"
        },
        names: {
            returnType: "workbookNamedItem"
        },
        pivotTables: {
            returnType: "workbookPivotTable"
        },
        protection: {
            returnType: "workbookWorksheetProtection"
        },
        tables: {
            returnType: "workbookTable"
        },
    },
    workbookWorksheetProtection: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workflow: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        executionScope: {
            returnType: "userProcessingResult"
        },
        runs: {
            returnType: "run"
        },
        taskReports: {
            returnType: "taskReport"
        },
        userProcessingResults: {
            returnType: "userProcessingResult"
        },
        versions: {
            returnType: "workflowVersion"
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
            returnType: "task"
        },
    },
    workflowTemplate: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        tasks: {
            returnType: "task"
        },
    },
    workflowVersion: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workforceIntegration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    workingTimeSchedule: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
    x509CertificateAuthenticationMethodConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },
        includeTargets: {
            returnType: "authenticationMethodTarget"
        },
    },
    x509CertificateCombinationConfiguration: {
        query: { argNames: ["oData"], requestType: RequestType.OData },

    },
}