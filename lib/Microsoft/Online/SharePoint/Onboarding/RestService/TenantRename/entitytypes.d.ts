import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* TenantRenameJobEntityData
**********************************************/
export interface TenantRenameJobEntityData {
	IncludeGestures?: string;
	JobId?: any;
	SkipDomainCheck?: boolean;
	SourceAdminSiteUrl?: string;
	SourceMySiteHostUrl?: string;
	SourceRootSiteUrl?: string;
	TargetAdminSiteUrl?: string;
	TargetDomainPrefix?: string;
	TargetMySiteHostUrl?: string;
	TargetRootSiteUrl?: string;
	UseV2TenantRename?: boolean;
}

/*********************************************
* TenantRenameJobEntityDataCollections
**********************************************/
export interface TenantRenameJobEntityDataCollections {

}

/*********************************************
* TenantRenameJob
**********************************************/
export interface TenantRenameJob {
	FailedSitesCount?: number;
	InprogressSitesCount?: number;
	JobState?: string;
	QueuedSitesCount?: number;
	SuccessSitesCount?: number;
	SuspendedSitesCount?: number;
	TriggeredBy?: string;
}

/*********************************************
* TenantRenameJobCollections
**********************************************/
export interface TenantRenameJobCollections extends TenantRenameJobCollectionMethods {

}

/*********************************************
* TenantRenameJobCollectionMethods
**********************************************/
export interface TenantRenameJobCollectionMethods {
	getJobById(jobId?: any, loadProgressState?: boolean): Base.IBaseExecution<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob>;
	getJobsByState(state?: number): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob>>;
	getState(): Base.IBaseExecution<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob>;
}
