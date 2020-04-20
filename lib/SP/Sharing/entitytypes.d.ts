import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* SharedDocumentInfo
**********************************************/
export interface SharedDocumentInfo {
	Author?: SP.Sharing.Principal;
	CallerStack?: string;
	ContentTypeId?: SP.ContentTypeId;
	DriveAccessToken?: string;
	DriveAccessTokenV21?: string;
	DriveUrl?: string;
	Editor?: SP.Sharing.Principal;
	Extension?: string;
	FileLeafRef?: string;
	FileRef?: string;
	IsContainer?: boolean;
	LinkingUrl?: string;
	ListId?: any;
	ListItemId?: number;
	MediaBaseUrl?: string;
	Modified?: any;
	OfficeBundleGenerate?: string;
	OfficeBundleGetFragment?: string;
	PdfConversionUrl?: string;
	ProgId?: string;
	ServerRedirectedEmbedUrl?: string;
	ServerRedirectedPreviewUrl?: string;
	ServerRedirectedUrl?: string;
	SiteId?: any;
	SiteUrl?: string;
	SpItemUrl?: string;
	SpResourceUrl?: string;
	ThumbnailUrl?: string;
	Title?: string;
	UniqueId?: any;
	UrlPath?: string;
	VideoManifestUrl?: string;
	WebId?: any;
}

/*********************************************
* SharedDocumentInfoCollections
**********************************************/
export interface SharedDocumentInfoCollections {

}

/*********************************************
* PersonalWeb
**********************************************/
export interface PersonalWeb {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalWebCollections
**********************************************/
export interface PersonalWebCollections {

}

/*********************************************
* SharingInformation
**********************************************/
export interface SharingInformation {
	accessRequestSettings?: SP.Sharing.AccessRequestSettings;
	addressBarLinkSettings?: SP.Sharing.AddressBarLinkSettings;
	anonymousLinkExpirationRestrictionDays?: number;
	blockPeoplePickerAndSharing?: boolean;
	canAddExternalPrincipal?: boolean;
	canAddInternalPrincipal?: boolean;
	canRequestAccessForGrantAccess?: boolean;
	canSendEmail?: boolean;
	canUseSimplifiedRoles?: boolean;
	currentRole?: number;
	customizedExternalSharingServiceUrl?: string;
	defaultLinkKind?: number;
	defaultShareLinkPermission?: number;
	defaultShareLinkScope?: number;
	defaultShareLinkToExistingAccess?: boolean;
	directUrl?: string;
	doesUserHaveIBSegment?: boolean;
	domainRestrictionSettings?: SP.Sharing.DomainRestrictionSettings;
	effectiveLimitedAccessFileType?: number;
	hasUniquePermissions?: boolean;
	itemUniqueId?: any;
	microserviceShareUiUrl?: string;
	permissionsInformation?: SP.Sharing.PermissionCollection;
	sharedObjectType?: number;
	shareUiUrl?: string;
	sharingAbilities?: SP.Sharing.SharingAbilities;
	sharingLinkTemplates?: SP.Sharing.SharingLinkDefaultTemplatesCollection;
	sharingStatus?: number;
	showExternalSharingWarning?: boolean;
	siteIBSegmentIDs?: { results: Array<string> };
	webTemplateId?: number;
	webUrl?: string;
}

/*********************************************
* SharingInformationCollections
**********************************************/
export interface SharingInformationCollections {

}

/*********************************************
* SharingInformationOData
**********************************************/
export interface SharingInformationOData extends Base.IBaseResult, SharingInformation {
	pickerSettings: SP.PickerSettings & SP.PickerSettingsCollections;
}

/*********************************************
* DocumentSharingManager
**********************************************/
export interface DocumentSharingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentSharingManagerCollections
**********************************************/
export interface DocumentSharingManagerCollections {

}

/*********************************************
* SecurableObjectExtensions
**********************************************/
export interface SecurableObjectExtensions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SecurableObjectExtensionsCollections
**********************************************/
export interface SecurableObjectExtensionsCollections {

}

/*********************************************
* SiteSharingReportHelper
**********************************************/
export interface SiteSharingReportHelper {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteSharingReportHelperCollections
**********************************************/
export interface SiteSharingReportHelperCollections {

}

/*********************************************
* WebSharingManager
**********************************************/
export interface WebSharingManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WebSharingManagerCollections
**********************************************/
export interface WebSharingManagerCollections {

}
