import { IBaseCollection } from "gd-sprest-def/lib/base";
import { ISensitivityLabelCollection } from "gd-sprest-def/lib/SP/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/sp.sensitivitylabelcollection
 */
export const SensitivityLabels: ISensitivityLabels;

/**
 * Sensitivity Label Collection
 * @category Sensitivity Label Collection
 */
export interface ISensitivityLabels {
    /**
     * Creates an instance of the navigation library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): ISensitivityLabelCollection;

    // Gets the sensitivity labels for this user.
    getLabelsForUser(): IBaseCollection<ISensitivityLabelResult>;
}

/**
 * Sensitivity Label Result
 */
export interface ISensitivityLabel {
    apiLabelVersion: string;
    applicableTo: string;
    applicationMode: string;
    assignedPolicies: [{
        id: string;
        name: string;
    }]
    autoLabeling: boolean;
    color: string;
    customSettings: [{
        name: string;
        value: string;
    }]
    defaultSubLabelId: string;
    description: string;
    displayName: string;
    id: string;
    isDefault: boolean;
    isEnabled: boolean;
    isEndpointProtectionEnabled: boolean;
    isParent: boolean;
    isSmimeEncryptEnabled: boolean;
    isSmimeSignEnabled: boolean;
    labelActions: [any];
    name: string;
    priority: number;
    tooltip: string;
}

/**
 * Sensitivity Label Result
 */
export interface ISensitivityLabelResult extends ISensitivityLabel {
    defaultContentLabel: string;
    "defaultContentLabel@data.context": string;
    sensitivityPolicySettings: {
        analyticsSettings: {
            isAuditEnabled: boolean;
            isLogMatchedContentEnabled: boolean;
        }
        applicableTo: string;
        attachmentActionSettings: {
            attachmentAction: string;
            attachmentActionTip: string;
        }
        containerSettings: {
            isSiteAndGroupMandatory: boolean;
        }
        customSettings: [any];
        downgradeSensitivityRequiresJustification: boolean;
        fileExplorerSettings: {
            isCustomPermissionsEnabled: boolean;
            isCustomPermissionsForCustomProtectedFilesEnabled: boolean;
        }
        generalSettings: {
            isContainerSupportEnabled: boolean;
            isHideBarByDefaultEnabled: boolean;
            isLabelByEmailHeaderEnabled: boolean;
            isPostponeMandatoryBeforeSaveEnabled: boolean;
            isPowerbiMandatory: boolean;
            isRevokeGuiSupportEnabled: boolean;
            isRunPolicyInBackgroundEnabled: boolean;
            isTrackAndRevokeEnabled: boolean;
            isUseCopyAndPreserveFileSystemOwnerEnabled: boolean;
            justificationTextForUserText: string;
            pfileReformatExtensions: string[];
            pfileSupportedExtensions: string[];
            reportAnIssueLink: string;
        }
        helpWebUrl: string;
        id: string;
        inheritanceLabelSettings: {
            applyLabelToArtifacts: boolean;
            inheritLabelFromFile: string;
        }
        isMandatory: boolean;
        outlookEmailSettings: {
            defaultLabel: string;
            isDistributionListExpansionEnabled: boolean;
            isMandatoryDisabled: boolean;
            isRecommendationEnabled: boolean;
            isSkipSmimeOnReadingPaneEnabled: boolean;
            outlookGetEmailAddressesTimeOutMSProperty: string;
            overrideUnlabledCollaborationExtenstions: string[];
            unlabeledCollaborationActionOverrideMailBodyBehavior: string;
        }
        outlookPopupMessageSettings: {
            blockTrustedDomains: string[];
            blockUntrustedCollaborationLabels: string[];
            justifyTrustedDomains: string[];
            justifyUntrustedCollaborationLabels: string[];
            warnTrustedDomains: string[];
            warnUntrustedCollaborationLabels: string[];
        }
        performanceSettings: {
            officeContentExtractionTimeout: number;
            scannerMaxCPU: number;
            scannerMaxThreadCount: number;
            scannerMinCPU: number;
            sharepointFileWebRequestTimeout: number;
            sharepointWebRequestTimeout: number;
            skippedScannerFileSystemAttributes: string[];
        }
        powerpointSettings: {
            isRemoveExternalMarkingFromCustomLayoutsEnabled: boolean;
            removeAllShapesByShapeName: boolean;
            shapeNameToRemove: string;
        }
        siteAndGroupDefaultLabel: ISensitivityLabel;
        unifiedPolicySettings: {
            classificationScheme: string;
            isLabelCoauthEnabled: boolean;
            isPurviewLabelConsentAvailable: boolean;
        }
    }
    "sensitivityPolicySettings@data.context": string;
    sublabels: ISensitivityLabelResult[];
    "sublabels@data.context": string;
}