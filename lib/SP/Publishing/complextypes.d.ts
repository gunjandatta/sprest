import { Base } from "../../";
import { SP } from "../../";
import { Microsoft } from "../../";

/*********************************************
* AcronymInformation
**********************************************/
export interface AcronymInformation {
	Acronym?: string;
	Color?: string;
	Lcid?: number;
	Text?: string;
}

/*********************************************
* AcronymInformationCollections
**********************************************/
export interface AcronymInformationCollections {

}

/*********************************************
* ProfileDateTime
**********************************************/
export interface ProfileDateTime {
	DateTimeType?: number;
	DateTimeValue?: any;
}

/*********************************************
* ProfileDateTimeCollections
**********************************************/
export interface ProfileDateTimeCollections {

}

/*********************************************
* DateTimeCustomProperty
**********************************************/
export interface DateTimeCustomProperty {
	CustomPropertyName?: string;
}

/*********************************************
* DateTimeCustomPropertyCollections
**********************************************/
export interface DateTimeCustomPropertyCollections {

}

/*********************************************
* ViewData
**********************************************/
export interface ViewData {
	TotalHits?: number;
	TotalUsers?: number;
}

/*********************************************
* ViewDataCollections
**********************************************/
export interface ViewDataCollections {

}

/*********************************************
* ItemViewsAnalyticsData
**********************************************/
export interface ItemViewsAnalyticsData {
	Days?: Array<SP.Publishing.TimeFrameStatistics>;
	Months?: Array<SP.Publishing.TimeFrameStatistics>;
}

/*********************************************
* ItemViewsAnalyticsDataCollections
**********************************************/
export interface ItemViewsAnalyticsDataCollections {

}

/*********************************************
* TimeFrameStatistics
**********************************************/
export interface TimeFrameStatistics {
	Date?: any;
}

/*********************************************
* TimeFrameStatisticsCollections
**********************************************/
export interface TimeFrameStatisticsCollections {

}

/*********************************************
* PersonCore
**********************************************/
export interface PersonCore {
	AadObjectId?: string;
	DisplayName?: string;
	UserName?: string;
}

/*********************************************
* PersonCoreCollections
**********************************************/
export interface PersonCoreCollections {

}

/*********************************************
* PersonCustomProperty
**********************************************/
export interface PersonCustomProperty {
	CustomPropertyName?: string;
}

/*********************************************
* PersonCustomPropertyCollections
**********************************************/
export interface PersonCustomPropertyCollections {

}

/*********************************************
* PersonIdentity
**********************************************/
export interface PersonIdentity {
	AadObjectId?: string;
	DisplayName?: string;
	UserName?: string;
}

/*********************************************
* PersonIdentityCollections
**********************************************/
export interface PersonIdentityCollections {

}

/*********************************************
* PersonMagazineData
**********************************************/
export interface PersonMagazineData {
	AboutMe?: string;
	BackgroundImageUrl?: string;
	BackgroundImageX?: number;
	BackgroundImageY?: number;
	DepartmentName?: string;
	DisplayName?: string;
	Email?: string;
	HasEditPermission?: boolean;
	Office?: string;
	Phone?: string;
	PictureUrl?: string;
	Title?: string;
}

/*********************************************
* PersonMagazineDataCollections
**********************************************/
export interface PersonMagazineDataCollections {

}

/*********************************************
* PersonMagazineUserProfileDirectsData
**********************************************/
export interface PersonMagazineUserProfileDirectsData {
	DirectReports?: Array<SP.Publishing.PersonMagazineUserProfile>;
}

/*********************************************
* PersonMagazineUserProfileDirectsDataCollections
**********************************************/
export interface PersonMagazineUserProfileDirectsDataCollections {

}

/*********************************************
* PersonMagazineUserProfile
**********************************************/
export interface PersonMagazineUserProfile {
	AadObjectId?: string;
	AboutMe?: string;
	AboutMeTruncated?: string;
	Assistant?: SP.Publishing.PersonCore;
	BirthDate?: SP.Publishing.ProfileDateTime;
	Birthday?: string;
	DateTimeCustomProperties?: Array<SP.Publishing.DateTimeCustomProperty>;
	DepartmentName?: string;
	DisplayName?: string;
	Email?: string;
	Fax?: string;
	HasEditPermission?: boolean;
	HireDate?: SP.Publishing.ProfileDateTime;
	HomePhone?: string;
	Interest?: string;
	Lync?: string;
	MobilePhone?: string;
	Office?: string;
	OfficeLocation?: string;
	OneDriveUrl?: string;
	PastProjects?: string;
	PersonTypeCustomProperties?: Array<SP.Publishing.PersonCustomProperty>;
	Phone?: string;
	PictureUrl?: string;
	PointPublishingPersonalSiteUrl?: string;
	Responsibilities?: string;
	Schools?: string;
	Skills?: string;
	SpsDepartment?: string;
	SpsJobTitle?: string;
	StringCustomProperties?: Array<SP.KeyValue>;
	Title?: string;
	UserName?: string;
}

/*********************************************
* PersonMagazineUserProfileCollections
**********************************************/
export interface PersonMagazineUserProfileCollections {

}

/*********************************************
* PersonMagazineUserProfileData
**********************************************/
export interface PersonMagazineUserProfileData {
	ManagerChain?: Array<SP.Publishing.PersonMagazineUserProfile>;
	Primary?: SP.Publishing.PersonMagazineUserProfile;
}

/*********************************************
* PersonMagazineUserProfileDataCollections
**********************************************/
export interface PersonMagazineUserProfileDataCollections {

}

/*********************************************
* ProfileCoreProperties
**********************************************/
export interface ProfileCoreProperties {
	PictureUrl?: string;
	Title?: string;
}

/*********************************************
* ProfileCorePropertiesCollections
**********************************************/
export interface ProfileCorePropertiesCollections {

}

/*********************************************
* ProfileDirectsData
**********************************************/
export interface ProfileDirectsData {
	DirectReports?: Array<SP.Publishing.ProfileCoreProperties>;
}

/*********************************************
* ProfileDirectsDataCollections
**********************************************/
export interface ProfileDirectsDataCollections {

}

/*********************************************
* ProfileData
**********************************************/
export interface ProfileData {
	ManagerChain?: Array<SP.Publishing.ProfileCoreProperties>;
	Primary?: SP.Publishing.PersonMagazineUserProfile;
}

/*********************************************
* ProfileDataCollections
**********************************************/
export interface ProfileDataCollections {

}

/*********************************************
* ProfileFullProperties
**********************************************/
export interface ProfileFullProperties {
	AboutMe?: string;
	AboutMeTruncated?: string;
	Assistant?: SP.Publishing.PersonIdentity;
	BirthDate?: SP.Publishing.ProfileDateTime;
	DepartmentName?: string;
	Email?: string;
	Fax?: string;
	HasEditPermission?: boolean;
	HireDate?: SP.Publishing.ProfileDateTime;
	HomePhone?: string;
	Interest?: string;
	Lync?: string;
	MobilePhone?: string;
	Office?: string;
	OfficeLocation?: string;
	OneDriveUrl?: string;
	PastProjects?: string;
	Phone?: string;
	PointPublishingPersonalSiteUrl?: string;
	Responsibilities?: string;
	Schools?: string;
	Skills?: string;
	SpsDepartment?: string;
	SpsJobTitle?: string;
}

/*********************************************
* ProfileFullPropertiesCollections
**********************************************/
export interface ProfileFullPropertiesCollections {

}

/*********************************************
* ProfilePropertyViewEditPolicy
**********************************************/
export interface ProfilePropertyViewEditPolicy {
	IsDisabled?: boolean;
	IsRequired?: boolean;
	IsTaxonomic?: boolean;
	IsUserEditable?: boolean;
	IsVisibleOnEditor?: boolean;
	Privacy?: number;
	UserOverridePrivacy?: boolean;
}

/*********************************************
* ProfilePropertyViewEditPolicyCollections
**********************************************/
export interface ProfilePropertyViewEditPolicyCollections {

}

/*********************************************
* ProfileViewEditPolicies
**********************************************/
export interface ProfileViewEditPolicies {
	AboutMe?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Assistant?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Birthday?: SP.Publishing.ProfilePropertyViewEditPolicy;
	CellPhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Department?: SP.Publishing.ProfilePropertyViewEditPolicy;
	DisplayName?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Fax?: SP.Publishing.ProfilePropertyViewEditPolicy;
	HireDate?: SP.Publishing.ProfilePropertyViewEditPolicy;
	HomePhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Interests?: SP.Publishing.ProfilePropertyViewEditPolicy;
	JobTitle?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Location?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Office?: SP.Publishing.ProfilePropertyViewEditPolicy;
	PersonalSiteUrl?: SP.Publishing.ProfilePropertyViewEditPolicy;
	PictureUrl?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Projects?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Responsibilities?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Schools?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SipAddress?: SP.Publishing.ProfilePropertyViewEditPolicy;
	Skills?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SpsDepartment?: SP.Publishing.ProfilePropertyViewEditPolicy;
	SpsJobTitle?: SP.Publishing.ProfilePropertyViewEditPolicy;
	WorkEmail?: SP.Publishing.ProfilePropertyViewEditPolicy;
	WorkPhone?: SP.Publishing.ProfilePropertyViewEditPolicy;
}

/*********************************************
* ProfileViewEditPoliciesCollections
**********************************************/
export interface ProfileViewEditPoliciesCollections {

}

/*********************************************
* PropertyValue
**********************************************/
export interface PropertyValue {
	TermId?: string;
	Value?: string;
}

/*********************************************
* PropertyValueCollections
**********************************************/
export interface PropertyValueCollections {

}

/*********************************************
* SitePageFieldsData
**********************************************/
export interface SitePageFieldsData {
	AuthorByline?: Array<string>;
	BannerImageUrl?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	Description?: string;
	LayoutWebpartsContent?: string;
	Modified?: any;
	PublishStartDate?: any;
	Title?: string;
	TopicHeader?: string;
}

/*********************************************
* SitePageFieldsDataCollections
**********************************************/
export interface SitePageFieldsDataCollections {

}

/*********************************************
* RepostPageFieldsData
**********************************************/
export interface RepostPageFieldsData {

}

/*********************************************
* RepostPageFieldsDataCollections
**********************************************/
export interface RepostPageFieldsDataCollections {

}

/*********************************************
* SharePagePreviewByEmailFieldsData
**********************************************/
export interface SharePagePreviewByEmailFieldsData {
	message?: string;
	recipientEmails?: Array<string>;
}

/*********************************************
* SharePagePreviewByEmailFieldsDataCollections
**********************************************/
export interface SharePagePreviewByEmailFieldsDataCollections {

}

/*********************************************
* SitePage3DFieldsData
**********************************************/
export interface SitePage3DFieldsData {
	SpaceContent?: string;
}

/*********************************************
* SitePage3DFieldsDataCollections
**********************************************/
export interface SitePage3DFieldsDataCollections {

}

/*********************************************
* SitePageVersionInfo
**********************************************/
export interface SitePageVersionInfo {
	LastVersionCreated?: any;
	LastVersionCreatedBy?: string;
}

/*********************************************
* SitePageVersionInfoCollections
**********************************************/
export interface SitePageVersionInfoCollections {

}

/*********************************************
* SiteSharingEmailContext
**********************************************/
export interface SiteSharingEmailContext {
	CustomDescription?: string;
	CustomTitle?: string;
	Message?: string;
	Url?: string;
}

/*********************************************
* SiteSharingEmailContextCollections
**********************************************/
export interface SiteSharingEmailContextCollections {

}

/*********************************************
* TaxonomicProperties
**********************************************/
export interface TaxonomicProperties {
	Interest?: Array<SP.Publishing.PropertyValue>;
	PastProjects?: Array<SP.Publishing.PropertyValue>;
	Responsibilities?: Array<SP.Publishing.PropertyValue>;
	Schools?: Array<SP.Publishing.PropertyValue>;
	Skills?: Array<SP.Publishing.PropertyValue>;
}

/*********************************************
* TaxonomicPropertiesCollections
**********************************************/
export interface TaxonomicPropertiesCollections {

}

/*********************************************
* TaxonomyMetadata
**********************************************/
export interface TaxonomyMetadata {
	anchorId?: any;
	excludedTermset?: any;
	excludeKeyword?: boolean;
	isAddTerms?: boolean;
	isIncludeDeprecated?: boolean;
	isIncludePathData?: boolean;
	isIncludeUnavailable?: boolean;
	isSpanTermSets?: boolean;
	isSpanTermStores?: boolean;
	lcid?: number;
	sspList?: string;
	termSetList?: string;
}

/*********************************************
* TaxonomyMetadataCollections
**********************************************/
export interface TaxonomyMetadataCollections {

}

/*********************************************
* TextValueWithLanguage
**********************************************/
export interface TextValueWithLanguage {
	ColorSeed?: string;
	Lcid?: number;
	Text?: string;
}

/*********************************************
* TextValueWithLanguageCollections
**********************************************/
export interface TextValueWithLanguageCollections {

}

/*********************************************
* ViewProgressAnalyticsData
**********************************************/
export interface ViewProgressAnalyticsData {
	PercentageViewed?: number;
}

/*********************************************
* ViewProgressAnalyticsDataCollections
**********************************************/
export interface ViewProgressAnalyticsDataCollections {

}

/*********************************************
* CommunicationSiteCreationResponse
**********************************************/
export interface CommunicationSiteCreationResponse {
	SiteStatus?: number;
	SiteUrl?: string;
}

/*********************************************
* CommunicationSiteCreationResponseCollections
**********************************************/
export interface CommunicationSiteCreationResponseCollections {

}

/*********************************************
* CommunicationSiteCreationRequest
**********************************************/
export interface CommunicationSiteCreationRequest {
	AllowFileSharingForGuestUsers?: boolean;
	Classification?: string;
	Description?: string;
	lcid?: number;
	SensitivityLabel?: any;
	SensitivityLabel2?: string;
	SiteDesignId?: any;
	Title?: string;
	Url?: string;
	WebTemplateExtensionId?: any;
}

/*********************************************
* CommunicationSiteCreationRequestCollections
**********************************************/
export interface CommunicationSiteCreationRequestCollections {

}

/*********************************************
* PublishSiteInformation
**********************************************/
export interface PublishSiteInformation {
	SiteType?: number;
	SiteUrl?: string;
	Title?: string;
}

/*********************************************
* PublishSiteInformationCollections
**********************************************/
export interface PublishSiteInformationCollections {

}

/*********************************************
* FilePickerOptions
**********************************************/
export interface FilePickerOptions {
	BingSearchEnabled?: boolean;
	CentralAssetRepository?: Microsoft.SharePoint.Administration.OrgAssets;
	OrgAssets?: Microsoft.SharePoint.Administration.OrgAssets;
}

/*********************************************
* FilePickerOptionsCollections
**********************************************/
export interface FilePickerOptionsCollections {

}
