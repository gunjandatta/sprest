import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* Icomment
**********************************************/
export interface Icomment extends commentCollections, commentMethods, Base.IBaseQuery<comment, IcommentQuery> {

}

/*********************************************
* IcommentCollection
**********************************************/
export interface IcommentCollection extends Base.IBaseResults<comment>, commentCollectionMethods {
	done?: (resolve: (value?: Array<comment>) => void) => void;
}

/*********************************************
* IcommentQueryCollection
**********************************************/
export interface IcommentQueryCollection extends Base.IBaseResults<commentOData>, commentCollectionMethods {
	done?: (resolve: (value?: Array<commentOData>) => void) => void;
}

/*********************************************
* IcommentQuery
**********************************************/
export interface IcommentQuery extends commentOData, commentMethods {

}

/*********************************************
* comment
**********************************************/
export interface comment extends Base.IBaseResult, commentProps, commentCollections, commentMethods {

}

/*********************************************
* commentProps
**********************************************/
export interface commentProps {
	author?: SP.Sharing.Principal;
	createdDate?: any;
	id?: string;
	isLikedByUser?: boolean;
	isReply?: boolean;
	itemId?: number;
	likeCount?: number;
	listId?: any;
	mentions?: { results: Array<Microsoft.SharePoint.Comments.Client.Identity> };
	parentId?: string;
	relativeCreatedDate?: string;
	replyCount?: number;
	text?: string;
}

/*********************************************
* commentPropMethods
**********************************************/
export interface commentPropMethods {

}

/*********************************************
* commentCollections
**********************************************/
export interface commentCollections extends commentPropMethods {
	likedBy(): Base.IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Likes.userEntity> & Microsoft.SharePoint.Likes.userEntityCollections;
	replies(): Base.IBaseCollection<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentOData, Base.IBaseExecution & Microsoft.SharePoint.Comments.commentCollectionMethods> & Base.IBaseExecution & Microsoft.SharePoint.Comments.commentCollectionMethods;
	replies(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentOData> & Microsoft.SharePoint.Comments.commentCollections & Microsoft.SharePoint.Comments.commentMethods;
}

/*********************************************
* commentCollectionMethods
**********************************************/
export interface commentCollectionMethods {
	deleteAll(): Base.IBaseExecution<boolean>;
}

/*********************************************
* commentOData
**********************************************/
export interface commentOData extends Base.IBaseResult, commentProps, commentMethods {
	likedBy: Base.IBaseResults<Microsoft.SharePoint.Likes.userEntity>;
	replies: Base.IBaseResults<Microsoft.SharePoint.Comments.comment> & Microsoft.SharePoint.Comments.commentCollectionMethods;
}

/*********************************************
* commentMethods
**********************************************/
export interface commentMethods {
	like(): Base.IBaseExecution<any>;
	unlike(): Base.IBaseExecution<any>;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommentsAPICollections
**********************************************/
export interface CommentsAPICollections {

}
