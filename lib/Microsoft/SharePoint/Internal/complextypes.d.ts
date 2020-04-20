import { Base } from "../../../";

/*********************************************
* MountPointRemoteItemRequest
**********************************************/
export interface MountPointRemoteItemRequest {
	RemoteItemListId?: any;
	RemoteItemSiteId?: any;
	RemoteItemSiteUrl?: string;
	RemoteItemUniqueId?: any;
	RemoteItemWebId?: any;
}

/*********************************************
* MountPointRemoteItemRequestCollections
**********************************************/
export interface MountPointRemoteItemRequestCollections {

}

/*********************************************
* TrackedItemUpdatesRequest
**********************************************/
export interface TrackedItemUpdatesRequest {
	TimeStamp?: any;
	TrackedItemsAsJson?: string;
	UserEmail?: string;
	UserLogin?: string;
}

/*********************************************
* TrackedItemUpdatesRequestCollections
**********************************************/
export interface TrackedItemUpdatesRequestCollections {

}
