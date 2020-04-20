import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* MySiteLinks
**********************************************/
export interface MySiteLinks {
	AllDocumentsLink?: string;
	AllDocumentsLinkHref?: string;
	AllDocumentsLinkTarget?: string;
	AllSitesLink?: string;
	AllSitesLinkHref?: string;
	AllSitesLinkTarget?: string;
}

/*********************************************
* MySiteLinksCollections
**********************************************/
export interface MySiteLinksCollections {

}

/*********************************************
* MySiteDismissStatusText
**********************************************/
export interface MySiteDismissStatusText {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MySiteDismissStatusTextCollections
**********************************************/
export interface MySiteDismissStatusTextCollections {

}

/*********************************************
* MySiteDocumentMoveUtility
**********************************************/
export interface MySiteDocumentMoveUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MySiteDocumentMoveUtilityCollections
**********************************************/
export interface MySiteDocumentMoveUtilityCollections {

}

/*********************************************
* SharedWithMeDocument
**********************************************/
export interface SharedWithMeDocument {
	Authors?: { results: Array<Microsoft.SharePoint.Portal.UserProfiles.SharedWithMeDocumentUser> };
	CallerStack?: string;
	ChildCount?: number;
	ClickThroughId?: string;
	ContentTypeId?: SP.ContentTypeId;
	CreatedDateTime?: any;
	CreatedDateTimeUTC?: any;
	DocId?: string;
	Editors?: { results: Array<Microsoft.SharePoint.Portal.UserProfiles.SharedWithMeDocumentUser> };
	Extension?: string;
	FileLeafRef?: string;
	FileRef?: string;
	Id?: number;
	IsContainer?: boolean;
	IsMyDocument?: boolean;
	ItemSize?: number;
	LinkingUrl?: string;
	ListId?: string;
	ListItemId?: string;
	LocalItemUniqueId?: string;
	MediaBaseUrl?: string;
	Modified?: any;
	ModifiedDateTimeUTC?: any;
	OfficeBundleGenerate?: string;
	OfficeBundleGetFragment?: string;
	ParentId?: string;
	ParentLink?: string;
	PdfConversionUrl?: string;
	ProgId?: string;
	ServerRedirectedEmbedUrl?: string;
	ServerRedirectedPreviewUrl?: string;
	ServerRedirectedUrl?: string;
	SharedDateTimeUTC?: any;
	SharedWithInternal?: { results: Array<Microsoft.SharePoint.Portal.UserProfiles.SharedWithMeDocumentUser> };
	SiteId?: string;
	SiteUrl?: string;
	SpResourceUrl?: string;
	SWMSourceFlag?: number;
	TenantId?: string;
	TenantName?: string;
	ThumbnailUrl?: string;
	Title?: string;
	UniqueId?: string;
	UrlPath?: string;
	VideoManifestUrl?: string;
	WebId?: string;
	WebTemplateId?: number;
}

/*********************************************
* SharedWithMeDocumentCollections
**********************************************/
export interface SharedWithMeDocumentCollections {

}

/*********************************************
* DocumentsSharedWithMe
**********************************************/
export interface DocumentsSharedWithMe {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentsSharedWithMeCollections
**********************************************/
export interface DocumentsSharedWithMeCollections {

}

/*********************************************
* DocumentsSharedWithGroup
**********************************************/
export interface DocumentsSharedWithGroup {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentsSharedWithGroupCollections
**********************************************/
export interface DocumentsSharedWithGroupCollections {

}

/*********************************************
* DocumentsSharedWithPerson
**********************************************/
export interface DocumentsSharedWithPerson {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentsSharedWithPersonCollections
**********************************************/
export interface DocumentsSharedWithPersonCollections {

}

/*********************************************
* PromotedSites
**********************************************/
export interface PromotedSites {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PromotedSitesCollections
**********************************************/
export interface PromotedSitesCollections {

}
