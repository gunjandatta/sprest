import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* CommentInformation
**********************************************/
export interface CommentInformation {
	mentions?: Array<Microsoft.SharePoint.Comments.Client.Identity>;
	text?: string;
}

/*********************************************
* CommentInformationCollections
**********************************************/
export interface CommentInformationCollections {

}
