import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData {
	OperationId?: any;
	SkipGestures?: string;
	SourceSiteUrl?: string;
	TargetSiteTitle?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteRenameJobEntityDataCollections
**********************************************/
export interface SiteRenameJobEntityDataCollections {

}

/*********************************************
* SiteRenameJob
**********************************************/
export interface SiteRenameJob {
	ErrorCode?: number;
	ErrorDescription?: string;
	JobId?: any;
	JobState?: string;
	ParentId?: any;
	SiteId?: any;
	TriggeredBy?: string;
}

/*********************************************
* SiteRenameJobCollections
**********************************************/
export interface SiteRenameJobCollections extends SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollectionMethods
**********************************************/
export interface SiteRenameJobCollectionMethods {
	getBySiteUrl(siteUrl?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJobCollections;
	getJobsByParentId(parentId?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
	getJobsByParentIdAndState(parentId?: any, state?: number): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
	getJobsBySiteUrl(url?: string): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
	getSiteRenameReport(state?: number): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
}
