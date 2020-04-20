import { Base } from "../../../";
import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CollaborationMailboxResponse
**********************************************/
export interface CollaborationMailboxResponse {
	AlternateUrl?: string;
	CorrelationId?: string;
	ErrorCode?: number;
	Status?: number;
	Url?: string;
}

/*********************************************
* CollaborationMailboxResponseCollections
**********************************************/
export interface CollaborationMailboxResponseCollections {

}

/*********************************************
* GroupCreationContext
**********************************************/
export interface GroupCreationContext {
	ClassificationDescriptions?: Array<SP.KeyValue>;
	ClassificationDescriptionsNew?: Array<SP.KeyValue>;
	ClassificationPrivacy?: Array<SP.KeyValue>;
	CustomFormUrl?: string;
	DataClassificationOptions?: Array<string>;
	DataClassificationOptionsNew?: Array<SP.KeyValue>;
	DefaultClassification?: string;
	ExternalInvitationEnabled?: boolean;
	PreferredLanguage?: number;
	RequireSecondaryContact?: boolean;
	SitePath?: string;
	UsageGuidelineUrl?: string;
}

/*********************************************
* GroupCreationContextCollections
**********************************************/
export interface GroupCreationContextCollections {

}

/*********************************************
* GroupCreationParams
**********************************************/
export interface GroupCreationParams {
	Classification?: string;
	CreationOptions?: Array<string>;
	Description?: string;
	Owners?: Array<string>;
	PreferredDataLocation?: string;
}

/*********************************************
* GroupCreationParamsCollections
**********************************************/
export interface GroupCreationParamsCollections {

}

/*********************************************
* GroupSiteConversionInfo
**********************************************/
export interface GroupSiteConversionInfo {
	GroupType?: number;
	IsGroupifyDisabled?: boolean;
	IsRegionRestricted?: boolean;
	IsWrongPdl?: boolean;
	SuggestedMembers?: Array<string>;
	SuggestedOwners?: Array<string>;
	UnsuggestablePrincipals?: Array<string>;
}

/*********************************************
* GroupSiteConversionInfoCollections
**********************************************/
export interface GroupSiteConversionInfoCollections {

}

/*********************************************
* GroupSiteInfo
**********************************************/
export interface GroupSiteInfo {
	DocumentsUrl?: string;
	ErrorMessage?: string;
	GroupId?: any;
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* GroupSiteInfoCollections
**********************************************/
export interface GroupSiteInfoCollections {

}

/*********************************************
* LinkedSiteContract
**********************************************/
export interface LinkedSiteContract {
	DisplayName?: string;
	GroupId?: string;
	PictureUrl?: string;
	SiteId?: string;
	Url?: string;
	WebId?: string;
}

/*********************************************
* LinkedSiteContractCollections
**********************************************/
export interface LinkedSiteContractCollections {

}

/*********************************************
* LinkedSitesListContract
**********************************************/
export interface LinkedSitesListContract {
	LinkedSites?: Array<Microsoft.SharePoint.Portal.LinkedSiteContract>;
}

/*********************************************
* LinkedSitesListContractCollections
**********************************************/
export interface LinkedSitesListContractCollections {

}

/*********************************************
* SPSiteCreationResponse
**********************************************/
export interface SPSiteCreationResponse {
	SiteId?: string;
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* SPSiteCreationResponseCollections
**********************************************/
export interface SPSiteCreationResponseCollections {

}

/*********************************************
* SPSiteCreationRequest
**********************************************/
export interface SPSiteCreationRequest {
	Classification?: string;
	Description?: string;
	HubSiteId?: any;
	Lcid?: number;
	Owner?: string;
	RelatedGroupId?: any;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
	ShareByEmailEnabled?: boolean;
	SiteDesignId?: any;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	WebTemplate?: string;
	WebTemplateExtensionId?: any;
}

/*********************************************
* SPSiteCreationRequestCollections
**********************************************/
export interface SPSiteCreationRequestCollections {

}

/*********************************************
* IBSegmentInfo
**********************************************/
export interface IBSegmentInfo {
	DisplayName?: string;
	ObjectId?: any;
}

/*********************************************
* IBSegmentInfoCollections
**********************************************/
export interface IBSegmentInfoCollections {

}

/*********************************************
* GetTeamChannelSiteOwnerResponse
**********************************************/
export interface GetTeamChannelSiteOwnerResponse {
	Owner?: string;
	SecondaryContact?: string;
}

/*********************************************
* GetTeamChannelSiteOwnerResponseCollections
**********************************************/
export interface GetTeamChannelSiteOwnerResponseCollections {

}
