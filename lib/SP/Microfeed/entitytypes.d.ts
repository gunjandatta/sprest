import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IMicrofeedPostDefinitionManager
**********************************************/
export interface IMicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods, Base.IBaseQuery<MicrofeedPostDefinitionManager, IMicrofeedPostDefinitionManagerQuery> {

}

/*********************************************
* IMicrofeedPostDefinitionManagerCollection
**********************************************/
export interface IMicrofeedPostDefinitionManagerCollection extends Base.IBaseResults<MicrofeedPostDefinitionManager> {
	done?: (resolve: (value?: Array<MicrofeedPostDefinitionManager>) => void) => void;
}

/*********************************************
* IMicrofeedPostDefinitionManagerQueryCollection
**********************************************/
export interface IMicrofeedPostDefinitionManagerQueryCollection extends Base.IBaseResults<MicrofeedPostDefinitionManagerOData> {
	done?: (resolve: (value?: Array<MicrofeedPostDefinitionManagerOData>) => void) => void;
}

/*********************************************
* IMicrofeedPostDefinitionManagerQuery
**********************************************/
export interface IMicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerOData, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager extends Base.IBaseResult, MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerProps
**********************************************/
export interface MicrofeedPostDefinitionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerPropMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerPropMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerCollections
**********************************************/
export interface MicrofeedPostDefinitionManagerCollections extends MicrofeedPostDefinitionManagerPropMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerOData
**********************************************/
export interface MicrofeedPostDefinitionManagerOData extends Base.IBaseResult, MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods {
	deleteMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): Base.IBaseExecution<boolean>;
	getMicrofeedPostDefinition(definitionName?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	getMicrofeedPostDefinitions(): Base.IBaseCollection<SP.Microfeed.MicrofeedPostDefinition>;
	newMicrofeedPostDefinition(definitionName?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	updateMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): Base.IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
}

/*********************************************
* IMicrofeedAttachmentStore
**********************************************/
export interface IMicrofeedAttachmentStore extends MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods, Base.IBaseQuery<MicrofeedAttachmentStore, IMicrofeedAttachmentStoreQuery> {

}

/*********************************************
* IMicrofeedAttachmentStoreCollection
**********************************************/
export interface IMicrofeedAttachmentStoreCollection extends Base.IBaseResults<MicrofeedAttachmentStore> {
	done?: (resolve: (value?: Array<MicrofeedAttachmentStore>) => void) => void;
}

/*********************************************
* IMicrofeedAttachmentStoreQueryCollection
**********************************************/
export interface IMicrofeedAttachmentStoreQueryCollection extends Base.IBaseResults<MicrofeedAttachmentStoreOData> {
	done?: (resolve: (value?: Array<MicrofeedAttachmentStoreOData>) => void) => void;
}

/*********************************************
* IMicrofeedAttachmentStoreQuery
**********************************************/
export interface IMicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreOData, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore extends Base.IBaseResult, MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStoreProps
**********************************************/
export interface MicrofeedAttachmentStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStorePropMethods
**********************************************/
export interface MicrofeedAttachmentStorePropMethods {

}

/*********************************************
* MicrofeedAttachmentStoreCollections
**********************************************/
export interface MicrofeedAttachmentStoreCollections extends MicrofeedAttachmentStorePropMethods {

}

/*********************************************
* MicrofeedAttachmentStoreOData
**********************************************/
export interface MicrofeedAttachmentStoreOData extends Base.IBaseResult, MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStoreMethods
**********************************************/
export interface MicrofeedAttachmentStoreMethods {
	deletePreProcessedAttachment(attachmentUri?: string): Base.IBaseExecution<any>;
	getImage(imageUrl?: string, key?: string, iv?: string): Base.IBaseExecution<any>;
	preProcessAttachment(link?: SP.Microfeed.MicrofeedLink): Base.IBaseExecution<SP.Microfeed.MicrofeedLink>;
	putFile(originalFileName?: string, fileData?: any): Base.IBaseCollection<string>;
	putImage(imageData?: any): Base.IBaseCollection<string>;
}

/*********************************************
* IMicrofeedData
**********************************************/
export interface IMicrofeedData extends MicrofeedDataCollections, MicrofeedDataMethods, Base.IBaseQuery<MicrofeedData, IMicrofeedDataQuery> {

}

/*********************************************
* IMicrofeedDataCollection
**********************************************/
export interface IMicrofeedDataCollection extends Base.IBaseResults<MicrofeedData>, MicrofeedDataCollectionMethods {
	done?: (resolve: (value?: Array<MicrofeedData>) => void) => void;
}

/*********************************************
* IMicrofeedDataQueryCollection
**********************************************/
export interface IMicrofeedDataQueryCollection extends Base.IBaseResults<MicrofeedDataOData>, MicrofeedDataCollectionMethods {
	done?: (resolve: (value?: Array<MicrofeedDataOData>) => void) => void;
}

/*********************************************
* IMicrofeedDataQuery
**********************************************/
export interface IMicrofeedDataQuery extends MicrofeedDataOData, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData extends Base.IBaseResult, MicrofeedDataProps, MicrofeedDataCollections, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedDataProps
**********************************************/
export interface MicrofeedDataProps {
	Created?: any;
	Data?: { results: Array<SP.KeyValue> };
	DefinitionId?: number;
	ItemType?: number;
	Modified?: any;
	TargetIdentifier?: string;
	Version?: string;
}

/*********************************************
* MicrofeedDataPropMethods
**********************************************/
export interface MicrofeedDataPropMethods {

}

/*********************************************
* MicrofeedDataCollections
**********************************************/
export interface MicrofeedDataCollections extends MicrofeedDataPropMethods {

}

/*********************************************
* MicrofeedDataCollectionMethods
**********************************************/
export interface MicrofeedDataCollectionMethods {
	deleteAll(): Base.IBaseExecution<any>;
}

/*********************************************
* MicrofeedDataOData
**********************************************/
export interface MicrofeedDataOData extends Base.IBaseResult, MicrofeedDataProps, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedDataMethods
**********************************************/
export interface MicrofeedDataMethods {
	addAttachment(name?: string, bytes?: any): Base.IBaseExecution<any>;
	systemUpdate(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IMicrofeedManager
**********************************************/
export interface IMicrofeedManager extends MicrofeedManagerCollections, MicrofeedManagerMethods, Base.IBaseQuery<MicrofeedManager, IMicrofeedManagerQuery> {

}

/*********************************************
* IMicrofeedManagerCollection
**********************************************/
export interface IMicrofeedManagerCollection extends Base.IBaseResults<MicrofeedManager> {
	done?: (resolve: (value?: Array<MicrofeedManager>) => void) => void;
}

/*********************************************
* IMicrofeedManagerQueryCollection
**********************************************/
export interface IMicrofeedManagerQueryCollection extends Base.IBaseResults<MicrofeedManagerOData> {
	done?: (resolve: (value?: Array<MicrofeedManagerOData>) => void) => void;
}

/*********************************************
* IMicrofeedManagerQuery
**********************************************/
export interface IMicrofeedManagerQuery extends MicrofeedManagerOData, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager extends Base.IBaseResult, MicrofeedManagerProps, MicrofeedManagerCollections, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManagerProps
**********************************************/
export interface MicrofeedManagerProps {
	CurrentUser?: SP.Microfeed.MicroBlogEntity;
	IsFeedActivityPublic?: boolean;
	StaticThreadLink?: string;
}

/*********************************************
* MicrofeedManagerPropMethods
**********************************************/
export interface MicrofeedManagerPropMethods {

}

/*********************************************
* MicrofeedManagerCollections
**********************************************/
export interface MicrofeedManagerCollections extends MicrofeedManagerPropMethods {

}

/*********************************************
* MicrofeedManagerOData
**********************************************/
export interface MicrofeedManagerOData extends Base.IBaseResult, MicrofeedManagerProps, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManagerMethods
**********************************************/
export interface MicrofeedManagerMethods {
	addUserToPostPeopleList(postIdentifier?: string, UserLoginName?: string): Base.IBaseExecution<number>;
	clearUnreadMentionsCount(): Base.IBaseExecution<number>;
	deleteById(postIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	deleteUserFromPostPeopleList(postIdentifier?: string, UserLoginName?: string): Base.IBaseExecution<number>;
	getMyCategoricalFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): Base.IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getMyConsolidatedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): Base.IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getMyPublishedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number, ShowPublicView?: boolean): Base.IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getPublishedFeed(feedOwner?: string, feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number): Base.IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getThread(postIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	getUnreadMentionsCount(): Base.IBaseExecution<number>;
	like(postIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	lockThreadById(threadIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	post(postOptions?: SP.Microfeed.MicrofeedPostOptions): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	postReply(postIdentifier?: string, postReplyOptions?: SP.Microfeed.MicrofeedPostOptions): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	repopulateLMT(timeStamp?: any, secureHash?: string): Base.IBaseExecution<number>;
	unLike(postIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	unLockThreadById(threadIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedThread>;
	unsubscribeFromEMail(postIdentifier?: string): Base.IBaseExecution<any>;
}

/*********************************************
* MicrofeedPostOptionCollection
**********************************************/
export interface MicrofeedPostOptionCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<SP.Microfeed.MicrofeedPostOptions> };
}

/*********************************************
* MicrofeedPostOptionCollectionCollections
**********************************************/
export interface MicrofeedPostOptionCollectionCollections {

}

/*********************************************
* IMicrofeedStore
**********************************************/
export interface IMicrofeedStore extends MicrofeedStoreCollections, MicrofeedStoreMethods, Base.IBaseExecution<IMicrofeedStore> {

}

/*********************************************
* IMicrofeedStoreCollection
**********************************************/
export interface IMicrofeedStoreCollection extends Base.IBaseResults<MicrofeedStore> {
	done?: (resolve: (value?: Array<MicrofeedStore>) => void) => void;
}

/*********************************************
* IMicrofeedStoreQueryCollection
**********************************************/
export interface IMicrofeedStoreQueryCollection extends Base.IBaseResults<MicrofeedStoreOData> {
	done?: (resolve: (value?: Array<MicrofeedStoreOData>) => void) => void;
}

/*********************************************
* IMicrofeedStoreQuery
**********************************************/
export interface IMicrofeedStoreQuery extends MicrofeedStoreOData, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore extends Base.IBaseResult, MicrofeedStoreProps, MicrofeedStoreCollections, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStoreProps
**********************************************/
export interface MicrofeedStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedStorePropMethods
**********************************************/
export interface MicrofeedStorePropMethods {

}

/*********************************************
* MicrofeedStoreCollections
**********************************************/
export interface MicrofeedStoreCollections extends MicrofeedStorePropMethods {

}

/*********************************************
* MicrofeedStoreOData
**********************************************/
export interface MicrofeedStoreOData extends Base.IBaseResult, MicrofeedStoreProps, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStoreMethods
**********************************************/
export interface MicrofeedStoreMethods {
	addData(name?: string, data?: any): Base.IBaseExecution<any>;
	addDataAsStream(name?: string, data?: any): Base.IBaseExecution<any>;
	executePendingOperations(): Base.IBaseExecution<any>;
	getItem(storeIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedData>;
	getSocialProperties(accountName?: string): Base.IBaseExecution<string>;
	incrementUnreadAtMentionCount(accountName?: string): Base.IBaseExecution<any>;
	newItem(storeIdentifier?: string): Base.IBaseExecution<SP.Microfeed.MicrofeedData>;
	query(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): Base.IBaseCollection<SP.Microfeed.MicrofeedData> & SP.Microfeed.MicrofeedDataCollectionMethods;
	setPostLikeStatus(accountName?: string, postId?: string, like?: boolean): Base.IBaseExecution<any>;
}
