import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* SocialAnnouncementManager
**********************************************/
export interface SocialAnnouncementManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialAnnouncementManagerCollections
**********************************************/
export interface SocialAnnouncementManagerCollections {

}

/*********************************************
* ISocialFeedManager
**********************************************/
export interface ISocialFeedManager extends SocialFeedManagerCollections, SocialFeedManagerMethods, Base.IBaseQuery<SocialFeedManager, ISocialFeedManagerQuery> {

}

/*********************************************
* ISocialFeedManagerCollection
**********************************************/
export interface ISocialFeedManagerCollection extends Base.IBaseResults<SocialFeedManager> {
	done?: (resolve: (value?: Array<SocialFeedManager>) => void) => void;
}

/*********************************************
* ISocialFeedManagerQueryCollection
**********************************************/
export interface ISocialFeedManagerQueryCollection extends Base.IBaseResults<SocialFeedManagerOData> {
	done?: (resolve: (value?: Array<SocialFeedManagerOData>) => void) => void;
}

/*********************************************
* ISocialFeedManagerQuery
**********************************************/
export interface ISocialFeedManagerQuery extends SocialFeedManagerOData, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManager
**********************************************/
export interface SocialFeedManager extends Base.IBaseResult, SocialFeedManagerProps, SocialFeedManagerCollections, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManagerProps
**********************************************/
export interface SocialFeedManagerProps {
	Owner?: SP.Social.SocialActor;
	PersonalSitePortalUri?: string;
}

/*********************************************
* SocialFeedManagerPropMethods
**********************************************/
export interface SocialFeedManagerPropMethods {

}

/*********************************************
* SocialFeedManagerCollections
**********************************************/
export interface SocialFeedManagerCollections extends SocialFeedManagerPropMethods {

}

/*********************************************
* SocialFeedManagerOData
**********************************************/
export interface SocialFeedManagerOData extends Base.IBaseResult, SocialFeedManagerProps, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManagerMethods
**********************************************/
export interface SocialFeedManagerMethods {
	createFileAttachment(name?: string, description?: string, fileData?: any): Base.IBaseExecution<SP.Social.SocialAttachment>;
	createImageAttachment(name?: string, description?: string, imageData?: any): Base.IBaseExecution<SP.Social.SocialAttachment>;
	createPost(targetId?: string, creationData?: SP.Social.SocialPostCreationData): Base.IBaseExecution<SP.Social.SocialThread>;
	deletePost(postId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
	getAllLikers(postId?: string): Base.IBaseCollection<SP.Social.SocialActor>;
	getFeed(type?: number, options?: SP.Social.SocialFeedOptions): Base.IBaseExecution<SP.Social.SocialFeed>;
	getFeedFor(actorId?: string, options?: SP.Social.SocialFeedOptions): Base.IBaseExecution<SP.Social.SocialFeed>;
	getFullThread(threadId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
	getMentions(clearUnreadMentions?: boolean, options?: SP.Social.SocialFeedOptions): Base.IBaseExecution<SP.Social.SocialFeed>;
	getPreview(itemUrl?: string): Base.IBaseExecution<SP.Social.SocialAttachment>;
	getPreviewImage(url?: string, key?: string, iv?: string): Base.IBaseExecution<any>;
	getUnreadMentionCount(): Base.IBaseExecution<number>;
	likePost(postId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
	lockThread(threadId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
	suppressThreadNotifications(threadId?: string): Base.IBaseExecution<any>;
	unlikePost(postId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
	unlockThread(threadId?: string): Base.IBaseExecution<SP.Social.SocialThread>;
}

/*********************************************
* ISocialFollowingManager
**********************************************/
export interface ISocialFollowingManager extends SocialFollowingManagerCollections, SocialFollowingManagerMethods, Base.IBaseQuery<SocialFollowingManager, ISocialFollowingManagerQuery> {

}

/*********************************************
* ISocialFollowingManagerCollection
**********************************************/
export interface ISocialFollowingManagerCollection extends Base.IBaseResults<SocialFollowingManager> {
	done?: (resolve: (value?: Array<SocialFollowingManager>) => void) => void;
}

/*********************************************
* ISocialFollowingManagerQueryCollection
**********************************************/
export interface ISocialFollowingManagerQueryCollection extends Base.IBaseResults<SocialFollowingManagerOData> {
	done?: (resolve: (value?: Array<SocialFollowingManagerOData>) => void) => void;
}

/*********************************************
* ISocialFollowingManagerQuery
**********************************************/
export interface ISocialFollowingManagerQuery extends SocialFollowingManagerOData, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager extends Base.IBaseResult, SocialFollowingManagerProps, SocialFollowingManagerCollections, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManagerProps
**********************************************/
export interface SocialFollowingManagerProps {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerPropMethods
**********************************************/
export interface SocialFollowingManagerPropMethods {

}

/*********************************************
* SocialFollowingManagerCollections
**********************************************/
export interface SocialFollowingManagerCollections extends SocialFollowingManagerPropMethods {

}

/*********************************************
* SocialFollowingManagerOData
**********************************************/
export interface SocialFollowingManagerOData extends Base.IBaseResult, SocialFollowingManagerProps, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManagerMethods
**********************************************/
export interface SocialFollowingManagerMethods {
	follow(actor?: SP.Social.SocialActorInfo): Base.IBaseExecution<number>;
	getFollowed(types?: number): Base.IBaseCollection<SP.Social.SocialActor>;
	getFollowedCount(types?: number): Base.IBaseExecution<number>;
	getFollowers(): Base.IBaseCollection<SP.Social.SocialActor>;
	getSuggestions(): Base.IBaseCollection<SP.Social.SocialActor>;
	isFollowed(actor?: SP.Social.SocialActorInfo): Base.IBaseExecution<boolean>;
	stopFollowing(actor?: SP.Social.SocialActorInfo): Base.IBaseExecution<boolean>;
}

/*********************************************
* ISocialRestActor
**********************************************/
export interface ISocialRestActor extends SocialRestActorCollections, SocialRestActorMethods, Base.IBaseQuery<SocialRestActor, ISocialRestActorQuery> {

}

/*********************************************
* ISocialRestActorCollection
**********************************************/
export interface ISocialRestActorCollection extends Base.IBaseResults<SocialRestActor> {
	done?: (resolve: (value?: Array<SocialRestActor>) => void) => void;
}

/*********************************************
* ISocialRestActorQueryCollection
**********************************************/
export interface ISocialRestActorQueryCollection extends Base.IBaseResults<SocialRestActorOData> {
	done?: (resolve: (value?: Array<SocialRestActorOData>) => void) => void;
}

/*********************************************
* ISocialRestActorQuery
**********************************************/
export interface ISocialRestActorQuery extends SocialRestActorOData, SocialRestActorMethods {

}

/*********************************************
* SocialRestActor
**********************************************/
export interface SocialRestActor extends Base.IBaseResult, SocialRestActorProps, SocialRestActorCollections, SocialRestActorMethods {

}

/*********************************************
* SocialRestActorProps
**********************************************/
export interface SocialRestActorProps {
	FollowableItem?: string;
	FollowableItemActor?: SP.Social.SocialActor;
	Me?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestActorPropMethods
**********************************************/
export interface SocialRestActorPropMethods {

}

/*********************************************
* SocialRestActorCollections
**********************************************/
export interface SocialRestActorCollections extends SocialRestActorPropMethods {

}

/*********************************************
* SocialRestActorOData
**********************************************/
export interface SocialRestActorOData extends Base.IBaseResult, SocialRestActorProps, SocialRestActorMethods {

}

/*********************************************
* SocialRestActorMethods
**********************************************/
export interface SocialRestActorMethods {
	feed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	likes(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	mentionFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	news(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	organizationFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	timelineFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	unreadMentionCount(): Base.IBaseExecution<number>;
}

/*********************************************
* ISocialRestFeedManager
**********************************************/
export interface ISocialRestFeedManager extends SocialRestFeedManagerCollections, SocialRestFeedManagerMethods, Base.IBaseQuery<SocialRestFeedManager, ISocialRestFeedManagerQuery> {

}

/*********************************************
* ISocialRestFeedManagerCollection
**********************************************/
export interface ISocialRestFeedManagerCollection extends Base.IBaseResults<SocialRestFeedManager> {
	done?: (resolve: (value?: Array<SocialRestFeedManager>) => void) => void;
}

/*********************************************
* ISocialRestFeedManagerQueryCollection
**********************************************/
export interface ISocialRestFeedManagerQueryCollection extends Base.IBaseResults<SocialRestFeedManagerOData> {
	done?: (resolve: (value?: Array<SocialRestFeedManagerOData>) => void) => void;
}

/*********************************************
* ISocialRestFeedManagerQuery
**********************************************/
export interface ISocialRestFeedManagerQuery extends SocialRestFeedManagerOData, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager extends Base.IBaseResult, SocialRestFeedManagerProps, SocialRestFeedManagerCollections, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManagerProps
**********************************************/
export interface SocialRestFeedManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerPropMethods
**********************************************/
export interface SocialRestFeedManagerPropMethods {

}

/*********************************************
* SocialRestFeedManagerCollections
**********************************************/
export interface SocialRestFeedManagerCollections extends SocialRestFeedManagerPropMethods {

}

/*********************************************
* SocialRestFeedManagerOData
**********************************************/
export interface SocialRestFeedManagerOData extends Base.IBaseResult, SocialRestFeedManagerProps, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManagerMethods
**********************************************/
export interface SocialRestFeedManagerMethods {
	actor(item?: string): Base.IBaseExecution<SP.Social.SocialRestActor>;
	my(): Base.IBaseExecution<SP.Social.SocialRestActor>;
	post(ID?: string): Base.IBaseExecution<SP.Social.SocialRestThread>;
}

/*********************************************
* ISocialRestFeed
**********************************************/
export interface ISocialRestFeed extends SocialRestFeedCollections, SocialRestFeedMethods, Base.IBaseQuery<SocialRestFeed, ISocialRestFeedQuery> {

}

/*********************************************
* ISocialRestFeedCollection
**********************************************/
export interface ISocialRestFeedCollection extends Base.IBaseResults<SocialRestFeed> {
	done?: (resolve: (value?: Array<SocialRestFeed>) => void) => void;
}

/*********************************************
* ISocialRestFeedQueryCollection
**********************************************/
export interface ISocialRestFeedQueryCollection extends Base.IBaseResults<SocialRestFeedOData> {
	done?: (resolve: (value?: Array<SocialRestFeedOData>) => void) => void;
}

/*********************************************
* ISocialRestFeedQuery
**********************************************/
export interface ISocialRestFeedQuery extends SocialRestFeedOData, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed extends Base.IBaseResult, SocialRestFeedProps, SocialRestFeedCollections, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeedProps
**********************************************/
export interface SocialRestFeedProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedPropMethods
**********************************************/
export interface SocialRestFeedPropMethods {

}

/*********************************************
* SocialRestFeedCollections
**********************************************/
export interface SocialRestFeedCollections extends SocialRestFeedPropMethods {

}

/*********************************************
* SocialRestFeedOData
**********************************************/
export interface SocialRestFeedOData extends Base.IBaseResult, SocialRestFeedProps, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeedMethods
**********************************************/
export interface SocialRestFeedMethods {
	clearUnReadMentionCount(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): Base.IBaseExecution<SP.Social.SocialRestFeed>;
	post(restCreationData?: SP.Social.SocialRestPostCreationData): Base.IBaseExecution<SP.Social.SocialRestThread>;
}

/*********************************************
* ISocialRestFollowingManager
**********************************************/
export interface ISocialRestFollowingManager extends SocialRestFollowingManagerCollections, SocialRestFollowingManagerMethods, Base.IBaseQuery<SocialRestFollowingManager, ISocialRestFollowingManagerQuery> {

}

/*********************************************
* ISocialRestFollowingManagerCollection
**********************************************/
export interface ISocialRestFollowingManagerCollection extends Base.IBaseResults<SocialRestFollowingManager> {
	done?: (resolve: (value?: Array<SocialRestFollowingManager>) => void) => void;
}

/*********************************************
* ISocialRestFollowingManagerQueryCollection
**********************************************/
export interface ISocialRestFollowingManagerQueryCollection extends Base.IBaseResults<SocialRestFollowingManagerOData> {
	done?: (resolve: (value?: Array<SocialRestFollowingManagerOData>) => void) => void;
}

/*********************************************
* ISocialRestFollowingManagerQuery
**********************************************/
export interface ISocialRestFollowingManagerQuery extends SocialRestFollowingManagerOData, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManager
**********************************************/
export interface SocialRestFollowingManager extends Base.IBaseResult, SocialRestFollowingManagerProps, SocialRestFollowingManagerCollections, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManagerProps
**********************************************/
export interface SocialRestFollowingManagerProps {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
	MyFollowedDocumentsUri?: string;
	MyFollowedSitesUri?: string;
	SocialActor?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestFollowingManagerPropMethods
**********************************************/
export interface SocialRestFollowingManagerPropMethods {

}

/*********************************************
* SocialRestFollowingManagerCollections
**********************************************/
export interface SocialRestFollowingManagerCollections extends SocialRestFollowingManagerPropMethods {

}

/*********************************************
* SocialRestFollowingManagerOData
**********************************************/
export interface SocialRestFollowingManagerOData extends Base.IBaseResult, SocialRestFollowingManagerProps, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManagerMethods
**********************************************/
export interface SocialRestFollowingManagerMethods {
	follow(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): Base.IBaseExecution<number>;
	followed(types?: number): Base.IBaseCollection<SP.Social.SocialActor>;
	followedCount(types?: number): Base.IBaseExecution<number>;
	followers(): Base.IBaseCollection<SP.Social.SocialActor>;
	isFollowed(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): Base.IBaseExecution<boolean>;
	my(): Base.IBaseExecution<SP.Social.SocialRestFollowingManager>;
	stopFollowing(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): Base.IBaseExecution<any>;
	suggestions(): Base.IBaseCollection<SP.Social.SocialActor>;
}

/*********************************************
* ISocialRestThread
**********************************************/
export interface ISocialRestThread extends SocialRestThreadCollections, SocialRestThreadMethods, Base.IBaseQuery<SocialRestThread, ISocialRestThreadQuery> {

}

/*********************************************
* ISocialRestThreadCollection
**********************************************/
export interface ISocialRestThreadCollection extends Base.IBaseResults<SocialRestThread> {
	done?: (resolve: (value?: Array<SocialRestThread>) => void) => void;
}

/*********************************************
* ISocialRestThreadQueryCollection
**********************************************/
export interface ISocialRestThreadQueryCollection extends Base.IBaseResults<SocialRestThreadOData> {
	done?: (resolve: (value?: Array<SocialRestThreadOData>) => void) => void;
}

/*********************************************
* ISocialRestThreadQuery
**********************************************/
export interface ISocialRestThreadQuery extends SocialRestThreadOData, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread extends Base.IBaseResult, SocialRestThreadProps, SocialRestThreadCollections, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThreadProps
**********************************************/
export interface SocialRestThreadProps {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadPropMethods
**********************************************/
export interface SocialRestThreadPropMethods {

}

/*********************************************
* SocialRestThreadCollections
**********************************************/
export interface SocialRestThreadCollections extends SocialRestThreadPropMethods {

}

/*********************************************
* SocialRestThreadOData
**********************************************/
export interface SocialRestThreadOData extends Base.IBaseResult, SocialRestThreadProps, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThreadMethods
**********************************************/
export interface SocialRestThreadMethods {
	delete(ID?: string): Base.IBaseExecution<any>;
	like(ID?: string): Base.IBaseExecution<SP.Social.SocialRestThread>;
	likers(ID?: string): Base.IBaseCollection<SP.Social.SocialActor>;
	lock(ID?: string): Base.IBaseExecution<SP.Social.SocialRestThread>;
	reply(restCreationData?: SP.Social.SocialRestPostCreationData): Base.IBaseExecution<SP.Social.SocialRestThread>;
	unLike(ID?: string): Base.IBaseExecution<SP.Social.SocialRestThread>;
	unLock(ID?: string): Base.IBaseExecution<SP.Social.SocialRestThread>;
}
