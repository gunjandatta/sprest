import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* SharePointHomeDataCacheCollection
**********************************************/
export interface SharePointHomeDataCacheCollection {
	Items?: Array<Microsoft.SharePoint.Portal.Home.SharePointHomeDataCache>;
}

/*********************************************
* SharePointHomeDataCacheCollectionCollections
**********************************************/
export interface SharePointHomeDataCacheCollectionCollections {

}

/*********************************************
* SharePointHomeDataCache
**********************************************/
export interface SharePointHomeDataCache {
	Key?: string;
	Value?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheEntry;
}

/*********************************************
* SharePointHomeDataCacheCollections
**********************************************/
export interface SharePointHomeDataCacheCollections {

}

/*********************************************
* SharePointHomeDataCacheEntry
**********************************************/
export interface SharePointHomeDataCacheEntry {
	CacheContext?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheContext;
	CacheValue?: string;
}

/*********************************************
* SharePointHomeDataCacheEntryCollections
**********************************************/
export interface SharePointHomeDataCacheEntryCollections {

}

/*********************************************
* SharePointHomeDataCacheContext
**********************************************/
export interface SharePointHomeDataCacheContext {
	Hash?: string;
	ListItemId?: number;
	MySiteUrl?: string;
	Time?: string;
	Version?: string;
}

/*********************************************
* SharePointHomeDataCacheContextCollections
**********************************************/
export interface SharePointHomeDataCacheContextCollections {

}

/*********************************************
* SharePointHomePageContext
**********************************************/
export interface SharePointHomePageContext {
	ActiveFlights?: Array<string>;
	AlternateWebAppHost?: string;
	ExperienceState?: number;
	IsGraphEnabled?: boolean;
	IsGroupCreationNewUXEnabled?: boolean;
	IsLoggingUploadEnabled?: boolean;
	IsMobile?: boolean;
	IsModernSearchEnabled?: boolean;
	IsOrgLinksProvisioned?: boolean;
	IsRtl?: boolean;
	IsSelfServiceSiteCreationEnabled?: boolean;
	IsUserVoiceEnabled?: boolean;
	LoadSuiteNav?: boolean;
	MicroserviceFlights?: Array<string>;
	MicroserviceUrl?: string;
	MySiteUrl?: string;
	SearchCenterUrl?: string;
	ShowCreateNewsTeachingBubble?: boolean;
	ShowFirstRunExperience?: boolean;
	ShowMobileUpsell?: boolean;
	UserAcronym?: string;
	UserBannerColor?: string;
	UserPhotoCdnBaseUrl?: string;
	VideoChannelUrlTemplate?: string;
	VideoPlayerUrlTemplate?: string;
}

/*********************************************
* SharePointHomePageContextCollections
**********************************************/
export interface SharePointHomePageContextCollections {

}
