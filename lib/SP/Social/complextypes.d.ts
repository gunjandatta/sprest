import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* SocialActorInfo
**********************************************/
export interface SocialActorInfo {
	AccountName?: string;
	ActorType?: number;
	ContentUri?: string;
	Id?: string;
	TagGuid?: any;
}

/*********************************************
* SocialActorInfoCollections
**********************************************/
export interface SocialActorInfoCollections {

}

/*********************************************
* SocialActor
**********************************************/
export interface SocialActor {
	AccountName?: string;
	ActorType?: number;
	CanFollow?: boolean;
	ContentUri?: string;
	EmailAddress?: string;
	FollowedContentUri?: string;
	Id?: string;
	ImageUri?: string;
	IsFollowed?: boolean;
	LibraryUri?: string;
	Name?: string;
	PersonalSiteUri?: string;
	Status?: number;
	StatusText?: string;
	TagGuid?: any;
	Title?: string;
	Uri?: string;
}

/*********************************************
* SocialActorCollections
**********************************************/
export interface SocialActorCollections {

}

/*********************************************
* SocialAttachmentAction
**********************************************/
export interface SocialAttachmentAction {
	ActionKind?: number;
	ActionUri?: string;
	Height?: number;
	Width?: number;
}

/*********************************************
* SocialAttachmentActionCollections
**********************************************/
export interface SocialAttachmentActionCollections {

}

/*********************************************
* SocialAttachment
**********************************************/
export interface SocialAttachment {
	AttachmentKind?: number;
	ClickAction?: SP.Social.SocialAttachmentAction;
	ContentUri?: string;
	Description?: string;
	Height?: number;
	Length?: number;
	Name?: string;
	PreviewHeight?: number;
	PreviewUri?: string;
	PreviewWidth?: number;
	Uri?: string;
	Width?: number;
}

/*********************************************
* SocialAttachmentCollections
**********************************************/
export interface SocialAttachmentCollections {

}

/*********************************************
* SocialDataItem
**********************************************/
export interface SocialDataItem {
	AccountName?: string;
	ItemType?: number;
	TagGuid?: any;
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialDataItemCollections
**********************************************/
export interface SocialDataItemCollections {

}

/*********************************************
* SocialDataOverlay
**********************************************/
export interface SocialDataOverlay {
	ActorIndexes?: Array<number>;
	Index?: number;
	Length?: number;
	LinkUri?: string;
	OverlayType?: number;
}

/*********************************************
* SocialDataOverlayCollections
**********************************************/
export interface SocialDataOverlayCollections {

}

/*********************************************
* SocialExceptionDetails
**********************************************/
export interface SocialExceptionDetails {
	InternalErrorCode?: number;
	InternalMessage?: string;
	InternalStackTrace?: string;
	InternalTypeName?: string;
	Status?: number;
}

/*********************************************
* SocialExceptionDetailsCollections
**********************************************/
export interface SocialExceptionDetailsCollections {

}

/*********************************************
* SocialFeedOptions
**********************************************/
export interface SocialFeedOptions {
	MaxThreadCount?: number;
	NewerThan?: any;
	OlderThan?: any;
	SortOrder?: number;
}

/*********************************************
* SocialFeedOptionsCollections
**********************************************/
export interface SocialFeedOptionsCollections {

}

/*********************************************
* SocialFeed
**********************************************/
export interface SocialFeed {
	Attributes?: number;
	NewestProcessed?: any;
	OldestProcessed?: any;
	Threads?: Array<SP.Social.SocialThread>;
	UnreadMentionCount?: number;
}

/*********************************************
* SocialFeedCollections
**********************************************/
export interface SocialFeedCollections {

}

/*********************************************
* SocialThread
**********************************************/
export interface SocialThread {
	Actors?: Array<SP.Social.SocialActor>;
	Attributes?: number;
	Id?: string;
	OwnerIndex?: number;
	Permalink?: string;
	PostReference?: SP.Social.SocialPostReference;
	Replies?: Array<SP.Social.SocialPost>;
	RootPost?: SP.Social.SocialPost;
	Status?: number;
	ThreadType?: number;
	TotalReplyCount?: number;
}

/*********************************************
* SocialThreadCollections
**********************************************/
export interface SocialThreadCollections {

}

/*********************************************
* SocialPostReference
**********************************************/
export interface SocialPostReference {
	Digest?: SP.Social.SocialThread;
	Post?: SP.Social.SocialPost;
	ThreadId?: string;
	ThreadOwnerIndex?: number;
}

/*********************************************
* SocialPostReferenceCollections
**********************************************/
export interface SocialPostReferenceCollections {

}

/*********************************************
* SocialPost
**********************************************/
export interface SocialPost {
	Attachment?: SP.Social.SocialAttachment;
	Attributes?: number;
	AuthorIndex?: number;
	CreatedTime?: any;
	Id?: string;
	LikerInfo?: SP.Social.SocialPostActorInfo;
	ModifiedTime?: any;
	Overlays?: Array<SP.Social.SocialDataOverlay>;
	PostType?: number;
	PreferredImageUri?: string;
	Source?: SP.Social.SocialLink;
	Text?: string;
}

/*********************************************
* SocialPostCollections
**********************************************/
export interface SocialPostCollections {

}

/*********************************************
* SocialPostActorInfo
**********************************************/
export interface SocialPostActorInfo {
	IncludesCurrentUser?: boolean;
	Indexes?: Array<number>;
	TotalCount?: number;
}

/*********************************************
* SocialPostActorInfoCollections
**********************************************/
export interface SocialPostActorInfoCollections {

}

/*********************************************
* SocialLink
**********************************************/
export interface SocialLink {
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialLinkCollections
**********************************************/
export interface SocialLinkCollections {

}

/*********************************************
* SocialPostCreationData
**********************************************/
export interface SocialPostCreationData {
	Attachment?: SP.Social.SocialAttachment;
	ContentItems?: Array<SP.Social.SocialDataItem>;
	ContentText?: string;
	DefinitionData?: SP.Social.SocialPostDefinitionData;
	SecurityUris?: Array<string>;
	Source?: SP.Social.SocialLink;
	UpdateStatusText?: boolean;
}

/*********************************************
* SocialPostCreationDataCollections
**********************************************/
export interface SocialPostCreationDataCollections {

}

/*********************************************
* SocialPostDefinitionData
**********************************************/
export interface SocialPostDefinitionData {
	Items?: Array<SP.Social.SocialPostDefinitionDataItem>;
	Name?: string;
}

/*********************************************
* SocialPostDefinitionDataCollections
**********************************************/
export interface SocialPostDefinitionDataCollections {

}

/*********************************************
* SocialPostDefinitionDataItem
**********************************************/
export interface SocialPostDefinitionDataItem {
	AccountName?: string;
	ItemType?: number;
	PlaceholderName?: string;
	TagGuid?: any;
	Text?: string;
	Uri?: string;
}

/*********************************************
* SocialPostDefinitionDataItemCollections
**********************************************/
export interface SocialPostDefinitionDataItemCollections {

}

/*********************************************
* SocialRestPostCreationData
**********************************************/
export interface SocialRestPostCreationData {
	ID?: string;
	creationData?: SP.Social.SocialPostCreationData;
}

/*********************************************
* SocialRestPostCreationDataCollections
**********************************************/
export interface SocialRestPostCreationDataCollections {

}
