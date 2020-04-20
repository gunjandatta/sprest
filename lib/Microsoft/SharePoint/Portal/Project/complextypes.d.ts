import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* MyRecsCacheBlob
**********************************************/
export interface MyRecsCacheBlob {
	DateCached?: any;
	FillInQuery?: string;
	FillInSortBy?: string;
	Query?: string;
	QueryInfo?: Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo;
	Result?: string;
	SortBy?: string;
}

/*********************************************
* MyRecsCacheBlobCollections
**********************************************/
export interface MyRecsCacheBlobCollections {

}

/*********************************************
* MyRecsQueryInfo
**********************************************/
export interface MyRecsQueryInfo {
	Category?: number;
	ExpertiseTags?: Array<string>;
	FollowedUrls?: Array<string>;
	InterestTags?: Array<string>;
	QueryInfoExists?: boolean;
	SuggestedTags?: Array<string>;
}

/*********************************************
* MyRecsQueryInfoCollections
**********************************************/
export interface MyRecsQueryInfoCollections {

}
