import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* CrossGeoSyncUserDataBatch
**********************************************/
export interface CrossGeoSyncUserDataBatch {
	LastEventId?: number;
	LastRecordId?: number;
	Properties?: Array<SP.UserProfiles.CrossGeoSyncUserProperty>;
}

/*********************************************
* CrossGeoSyncUserDataBatchCollections
**********************************************/
export interface CrossGeoSyncUserDataBatchCollections {

}

/*********************************************
* CrossGeoSyncUserProperty
**********************************************/
export interface CrossGeoSyncUserProperty {
	DsGuid?: any;
	IsMultivalue?: boolean;
	Privacy?: number;
	PropertyId?: number;
	PropertyVal?: string;
	SecondaryVal?: string;
}

/*********************************************
* CrossGeoSyncUserPropertyCollections
**********************************************/
export interface CrossGeoSyncUserPropertyCollections {

}

/*********************************************
* FollowedItem
**********************************************/
export interface FollowedItem {
	Data?: Array<SP.KeyValue>;
	FileType?: string;
	FileTypeProgid?: string;
	Flags?: string;
	GroupId?: any;
	HasFeed?: boolean;
	Hidden?: boolean;
	IconUrl?: string;
	ItemId?: number;
	ItemType?: number;
	ListId?: any;
	ParentUrl?: string;
	Pinned?: number;
	ServerUrlProgid?: string;
	SiteId?: any;
	Subtype?: number;
	Title?: string;
	UniqueId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* FollowedItemCollections
**********************************************/
export interface FollowedItemCollections {

}

/*********************************************
* FollowResult
**********************************************/
export interface FollowResult {
	Item?: SP.UserProfiles.FollowedItem;
	ResultType?: number;
}

/*********************************************
* FollowResultCollections
**********************************************/
export interface FollowResultCollections {

}

/*********************************************
* HashTag
**********************************************/
export interface HashTag {
	Name?: string;
	UseCount?: number;
}

/*********************************************
* HashTagCollections
**********************************************/
export interface HashTagCollections {

}

/*********************************************
* PersonalCacheItem
**********************************************/
export interface PersonalCacheItem {
	AltTitle?: string;
	CacheKey?: string;
	CacheValue?: string;
	CacheValueHash?: string;
	CacheVersion?: string;
	ListItemId?: number;
	ListItemUniqueId?: string;
	ModifiedTimeUtc?: any;
}

/*********************************************
* PersonalCacheItemCollections
**********************************************/
export interface PersonalCacheItemCollections {

}
