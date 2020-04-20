import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* MicroBlogEntityCollection
**********************************************/
export interface MicroBlogEntityCollection {
	Items?: Array<SP.Microfeed.MicroBlogEntity>;
}

/*********************************************
* MicroBlogEntityCollectionCollections
**********************************************/
export interface MicroBlogEntityCollectionCollections {

}

/*********************************************
* MicroBlogEntity
**********************************************/
export interface MicroBlogEntity {
	AccountName?: string;
	CanFollow?: boolean;
	Description?: string;
	DisplayName?: string;
	Email?: string;
	EntityType?: number;
	EntityURI?: string;
	FollowedContentURI?: string;
	Identifier?: string;
	IsFollowedByMe?: boolean;
	LatestPost?: string;
	LibraryName?: string;
	LibraryUri?: string;
	PersonalURI?: string;
	PictureURI?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* MicroBlogEntityCollections
**********************************************/
export interface MicroBlogEntityCollections {

}

/*********************************************
* MicrofeedPostDefinition
**********************************************/
export interface MicrofeedPostDefinition {
	CanDelete?: boolean;
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanLock?: boolean;
	CanReply?: boolean;
	CreationTime?: any;
	DefinitionId?: number;
	DefinitionName?: string;
	DefinitionVersion?: number;
	EnablePeopleList?: boolean;
	IsDefault?: boolean;
	IsEnabled?: boolean;
	IsNotification?: boolean;
	IsPrivate?: boolean;
	IsUserPost?: boolean;
	LastUpdateTime?: any;
	PartitionId?: any;
	PersistToCache?: boolean;
	PersistToPrivateFolder?: boolean;
	PersistToPublishedFeed?: boolean;
	ReferenceLikePostName?: string;
	ReferenceMentionPostName?: string;
	ReferenceReplyPostName?: string;
	RenderPostAuthorImage?: boolean;
	ResourceFileName?: string;
	SecurityTrimContentUrl?: boolean;
	SmallImageSizePreferred?: boolean;
}

/*********************************************
* MicrofeedPostDefinitionCollections
**********************************************/
export interface MicrofeedPostDefinitionCollections {

}

/*********************************************
* MicrofeedDataLinkCollection
**********************************************/
export interface MicrofeedDataLinkCollection {
	Items?: Array<SP.Microfeed.MicrofeedDataLink>;
}

/*********************************************
* MicrofeedDataLinkCollectionCollections
**********************************************/
export interface MicrofeedDataLinkCollectionCollections {

}

/*********************************************
* MicrofeedDataLink
**********************************************/
export interface MicrofeedDataLink {
	DataLinkType?: number;
	DateTimeValue?: any;
	Name?: string;
	PlaceHolderName?: string;
	StringValue?: string;
	UniqueId?: any;
	UriValue?: string;
}

/*********************************************
* MicrofeedDataLinkCollections
**********************************************/
export interface MicrofeedDataLinkCollections {

}

/*********************************************
* MicrofeedDataQuery
**********************************************/
export interface MicrofeedDataQuery {
	ItemLimit?: number;
	Query?: string;
	ViewFields?: Array<string>;
	ViewFieldsOnly?: boolean;
}

/*********************************************
* MicrofeedDataQueryCollections
**********************************************/
export interface MicrofeedDataQueryCollections {

}

/*********************************************
* MicrofeedLinkAction
**********************************************/
export interface MicrofeedLinkAction {
	ActionUri?: string;
	Height?: number;
	Kind?: number;
	Width?: number;
}

/*********************************************
* MicrofeedLinkActionCollections
**********************************************/
export interface MicrofeedLinkActionCollections {

}

/*********************************************
* MicrofeedLink
**********************************************/
export interface MicrofeedLink {
	ClickAction?: SP.Microfeed.MicrofeedLinkAction;
	ContentUri?: string;
	Description?: string;
	Height?: number;
	Href?: string;
	Length?: number;
	LinkType?: number;
	Name?: string;
	PreviewHeight?: number;
	PreviewPictureUrl?: string;
	PreviewWidth?: number;
	Status?: number;
	Width?: number;
}

/*********************************************
* MicrofeedLinkCollections
**********************************************/
export interface MicrofeedLinkCollections {

}

/*********************************************
* MicrofeedPostCollection
**********************************************/
export interface MicrofeedPostCollection {
	Items?: Array<SP.Microfeed.MicrofeedPost>;
}

/*********************************************
* MicrofeedPostCollectionCollections
**********************************************/
export interface MicrofeedPostCollectionCollections {

}

/*********************************************
* MicrofeedPost
**********************************************/
export interface MicrofeedPost {
	AuthorIndex?: number;
	BreadCrumb?: string;
	CanDelete?: boolean;
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanLock?: boolean;
	CanReply?: boolean;
	Content?: string;
	Created?: any;
	Footer?: string;
	ID?: string;
	ILikeIt?: boolean;
	LikersList?: Array<number>;
	Locked?: boolean;
	MediaLink?: SP.Microfeed.MicrofeedLink;
	MicroBlogType?: number;
	Modified?: any;
	PeopleCount?: number;
	PostImageUri?: string;
	PostSource?: string;
	PostSourceUri?: string;
	ReferenceID?: string;
	RenderPostAuthorImage?: boolean;
	ReplyCount?: number;
	SmallImageSizePreferred?: boolean;
	Title?: string;
}

/*********************************************
* MicrofeedPostCollections
**********************************************/
export interface MicrofeedPostCollections {

}

/*********************************************
* MicrofeedPostDefinitionNames
**********************************************/
export interface MicrofeedPostDefinitionNames {

}

/*********************************************
* MicrofeedPostDefinitionNamesCollections
**********************************************/
export interface MicrofeedPostDefinitionNamesCollections {

}

/*********************************************
* MicrofeedPostDefinitionNameCollection
**********************************************/
export interface MicrofeedPostDefinitionNameCollection {
	Items?: Array<string>;
}

/*********************************************
* MicrofeedPostDefinitionNameCollectionCollections
**********************************************/
export interface MicrofeedPostDefinitionNameCollectionCollections {

}

/*********************************************
* MicrofeedPostOptions
**********************************************/
export interface MicrofeedPostOptions {
	Content?: string;
	ContentFormattingOption?: number;
	DataLinks?: SP.Microfeed.MicrofeedDataLinkCollection;
	DefinitionName?: string;
	MediaLink?: SP.Microfeed.MicrofeedLink;
	PeopleList?: Array<string>;
	PostSource?: string;
	PostSourceUri?: string;
	RefThread_ReferenceID?: string;
	RefThread_RefReply?: string;
	RefThread_RefRoot?: string;
	TargetActor?: string;
	UpdateStatusText?: boolean;
}

/*********************************************
* MicrofeedPostOptionsCollections
**********************************************/
export interface MicrofeedPostOptionsCollections {

}

/*********************************************
* MicrofeedRetrievalOptions
**********************************************/
export interface MicrofeedRetrievalOptions {
	ContentFormattingOption?: number;
	ContentOnly?: boolean;
	DropAllSecurityTrimmablePosts?: boolean;
	GatherUnreadMentionCountForUser?: boolean;
	IncludedTypes?: number;
	NewerThan?: any;
	OlderThan?: any;
	PostDefinitionFilter?: Array<string>;
	ResultSortOrder?: number;
	ThreadCount?: number;
}

/*********************************************
* MicrofeedRetrievalOptionsCollections
**********************************************/
export interface MicrofeedRetrievalOptionsCollections {

}

/*********************************************
* MicrofeedThreadCollection
**********************************************/
export interface MicrofeedThreadCollection {
	CurrentUserUnreadMentionCount?: number;
	NewestProcessed?: any;
	OldestProcessed?: any;
	Items?: Array<SP.Microfeed.MicrofeedThread>;
}

/*********************************************
* MicrofeedThreadCollectionCollections
**********************************************/
export interface MicrofeedThreadCollectionCollections {

}

/*********************************************
* MicrofeedThread
**********************************************/
export interface MicrofeedThread {
	CanFollowUp?: boolean;
	CanHaveAttachments?: boolean;
	CanLike?: boolean;
	CanReply?: boolean;
	DataLinks?: Array<SP.Microfeed.MicrofeedDataLink>;
	DefinitionId?: number;
	DefinitionName?: string;
	Identifier?: string;
	Locked?: boolean;
	MicrofeedEntities?: Array<SP.Microfeed.MicroBlogEntity>;
	OwnerIndex?: number;
	RefReply?: SP.Microfeed.MicrofeedPost;
	RefRoot?: SP.Microfeed.MicrofeedPost;
	RenderPostAuthorImage?: boolean;
	Replies?: SP.Microfeed.MicrofeedPostCollection;
	ReplyCount?: number;
	RootPost?: SP.Microfeed.MicrofeedPost;
	SmallImageSizePreferred?: boolean;
	Status?: number;
}

/*********************************************
* MicrofeedThreadCollections
**********************************************/
export interface MicrofeedThreadCollections {

}

/*********************************************
* MicrofeedUserPostCollection
**********************************************/
export interface MicrofeedUserPostCollection {
	Items?: Array<SP.Microfeed.MicrofeedUserPosts>;
}

/*********************************************
* MicrofeedUserPostCollectionCollections
**********************************************/
export interface MicrofeedUserPostCollectionCollections {

}

/*********************************************
* MicrofeedUserPosts
**********************************************/
export interface MicrofeedUserPosts {
	AccountName?: string;
}

/*********************************************
* MicrofeedUserPostsCollections
**********************************************/
export interface MicrofeedUserPostsCollections {

}
