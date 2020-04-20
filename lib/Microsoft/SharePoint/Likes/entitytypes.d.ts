import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IlikedByInformation
**********************************************/
export interface IlikedByInformation extends likedByInformationCollections, likedByInformationMethods, Base.IBaseQuery<likedByInformation, IlikedByInformationQuery> {

}

/*********************************************
* IlikedByInformationCollection
**********************************************/
export interface IlikedByInformationCollection extends Base.IBaseResults<likedByInformation> {
	done?: (resolve: (value?: Array<likedByInformation>) => void) => void;
}

/*********************************************
* IlikedByInformationQueryCollection
**********************************************/
export interface IlikedByInformationQueryCollection extends Base.IBaseResults<likedByInformationOData> {
	done?: (resolve: (value?: Array<likedByInformationOData>) => void) => void;
}

/*********************************************
* IlikedByInformationQuery
**********************************************/
export interface IlikedByInformationQuery extends likedByInformationOData, likedByInformationMethods {

}

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation extends Base.IBaseResult, likedByInformationProps, likedByInformationCollections, likedByInformationMethods {

}

/*********************************************
* likedByInformationProps
**********************************************/
export interface likedByInformationProps {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationPropMethods
**********************************************/
export interface likedByInformationPropMethods {

}

/*********************************************
* likedByInformationCollections
**********************************************/
export interface likedByInformationCollections extends likedByInformationPropMethods {
	likedBy(): Base.IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Likes.userEntity> & Microsoft.SharePoint.Likes.userEntityCollections;
}

/*********************************************
* likedByInformationOData
**********************************************/
export interface likedByInformationOData extends Base.IBaseResult, likedByInformationProps, likedByInformationMethods {
	likedBy: Base.IBaseResults<Microsoft.SharePoint.Likes.userEntity>;
}

/*********************************************
* likedByInformationMethods
**********************************************/
export interface likedByInformationMethods {

}

/*********************************************
* userEntity
**********************************************/
export interface userEntity {
	creationDate?: any;
	email?: string;
	id?: number;
	loginName?: string;
	name?: string;
}

/*********************************************
* userEntityCollections
**********************************************/
export interface userEntityCollections {

}

/*********************************************
* LikesAPI
**********************************************/
export interface LikesAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LikesAPICollections
**********************************************/
export interface LikesAPICollections {

}
