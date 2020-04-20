import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ActionFacet
**********************************************/
export interface ActionFacet {
	checkin?: Microsoft.SharePoint.Activities.CheckinFacet;
	checkout?: Microsoft.SharePoint.Activities.CheckoutFacet;
	comment?: Microsoft.SharePoint.Activities.GetCommentFacet;
	create?: Microsoft.SharePoint.Activities.CreateFacet;
	delete?: Microsoft.SharePoint.Activities.DeleteFacet;
	discardCheckout?: Microsoft.SharePoint.Activities.DiscardCheckoutFacet;
	edit?: Microsoft.SharePoint.Activities.EditFacet;
	mention?: Microsoft.SharePoint.Activities.GetMentionFacet;
	move?: Microsoft.SharePoint.Activities.MoveFacet;
	pointInTimeRestore?: Microsoft.SharePoint.Activities.PointInTimeRestoreFacet;
	rename?: Microsoft.SharePoint.Activities.RenameFacet;
	restore?: Microsoft.SharePoint.Activities.RestoreFacet;
	restoreVersion?: Microsoft.SharePoint.Activities.RestoreVersionFacet;
	share?: Microsoft.SharePoint.Activities.SharingFacet;
	task?: Microsoft.SharePoint.Activities.TaskFacet;
	version?: Microsoft.SharePoint.Activities.VersionFacet;
}

/*********************************************
* ActionFacetCollections
**********************************************/
export interface ActionFacetCollections {

}

/*********************************************
* CheckinFacet
**********************************************/
export interface CheckinFacet {

}

/*********************************************
* CheckinFacetCollections
**********************************************/
export interface CheckinFacetCollections {

}

/*********************************************
* CheckoutFacet
**********************************************/
export interface CheckoutFacet {

}

/*********************************************
* CheckoutFacetCollections
**********************************************/
export interface CheckoutFacetCollections {

}

/*********************************************
* GetCommentFacet
**********************************************/
export interface GetCommentFacet {
	commentId?: string;
	isReply?: boolean;
	parentAuthor?: Microsoft.SharePoint.Activities.ActivityIdentity;
	parentCommentId?: string;
	participants?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
}

/*********************************************
* GetCommentFacetCollections
**********************************************/
export interface GetCommentFacetCollections {

}

/*********************************************
* ActivityIdentity
**********************************************/
export interface ActivityIdentity {
	email?: string;
	group?: Microsoft.SharePoint.Activities.ActivityIdentityItem;
	name?: string;
	user?: Microsoft.SharePoint.Activities.ActivityIdentityItem;
	userPrincipalName?: string;
}

/*********************************************
* ActivityIdentityCollections
**********************************************/
export interface ActivityIdentityCollections {

}

/*********************************************
* ActivityIdentityItem
**********************************************/
export interface ActivityIdentityItem {
	displayName?: string;
	email?: string;
	userPrincipalName?: string;
}

/*********************************************
* ActivityIdentityItemCollections
**********************************************/
export interface ActivityIdentityItemCollections {

}

/*********************************************
* CreateFacet
**********************************************/
export interface CreateFacet {

}

/*********************************************
* CreateFacetCollections
**********************************************/
export interface CreateFacetCollections {

}

/*********************************************
* DeleteFacet
**********************************************/
export interface DeleteFacet {
	name?: string;
}

/*********************************************
* DeleteFacetCollections
**********************************************/
export interface DeleteFacetCollections {

}

/*********************************************
* DiscardCheckoutFacet
**********************************************/
export interface DiscardCheckoutFacet {

}

/*********************************************
* DiscardCheckoutFacetCollections
**********************************************/
export interface DiscardCheckoutFacetCollections {

}

/*********************************************
* EditFacet
**********************************************/
export interface EditFacet {

}

/*********************************************
* EditFacetCollections
**********************************************/
export interface EditFacetCollections {

}

/*********************************************
* GetMentionFacet
**********************************************/
export interface GetMentionFacet {
	mentionees?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
}

/*********************************************
* GetMentionFacetCollections
**********************************************/
export interface GetMentionFacetCollections {

}

/*********************************************
* MoveFacet
**********************************************/
export interface MoveFacet {
	from?: SP.ResourcePath;
	to?: SP.ResourcePath;
}

/*********************************************
* MoveFacetCollections
**********************************************/
export interface MoveFacetCollections {

}

/*********************************************
* PointInTimeRestoreFacet
**********************************************/
export interface PointInTimeRestoreFacet {
	restoreToDateTime?: string;
}

/*********************************************
* PointInTimeRestoreFacetCollections
**********************************************/
export interface PointInTimeRestoreFacetCollections {

}

/*********************************************
* RenameFacet
**********************************************/
export interface RenameFacet {
	oldName?: string;
}

/*********************************************
* RenameFacetCollections
**********************************************/
export interface RenameFacetCollections {

}

/*********************************************
* RestoreFacet
**********************************************/
export interface RestoreFacet {

}

/*********************************************
* RestoreFacetCollections
**********************************************/
export interface RestoreFacetCollections {

}

/*********************************************
* RestoreVersionFacet
**********************************************/
export interface RestoreVersionFacet {
	fromVersion?: string;
}

/*********************************************
* RestoreVersionFacetCollections
**********************************************/
export interface RestoreVersionFacetCollections {

}

/*********************************************
* SharingFacet
**********************************************/
export interface SharingFacet {
	recipients?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
	sharingType?: string;
}

/*********************************************
* SharingFacetCollections
**********************************************/
export interface SharingFacetCollections {

}

/*********************************************
* TaskFacet
**********************************************/
export interface TaskFacet {
	assignee?: Microsoft.SharePoint.Activities.ActivityIdentity;
	complete?: Microsoft.SharePoint.Activities.TaskCompleteFacet;
	create?: Microsoft.SharePoint.Activities.TaskCreateFacet;
	reassign?: Microsoft.SharePoint.Activities.TaskReassignFacet;
	reopen?: Microsoft.SharePoint.Activities.TaskReopenFacet;
	taskCreator?: Microsoft.SharePoint.Activities.ActivityIdentity;
}

/*********************************************
* TaskFacetCollections
**********************************************/
export interface TaskFacetCollections {

}

/*********************************************
* TaskCompleteFacet
**********************************************/
export interface TaskCompleteFacet {

}

/*********************************************
* TaskCompleteFacetCollections
**********************************************/
export interface TaskCompleteFacetCollections {

}

/*********************************************
* TaskCreateFacet
**********************************************/
export interface TaskCreateFacet {

}

/*********************************************
* TaskCreateFacetCollections
**********************************************/
export interface TaskCreateFacetCollections {

}

/*********************************************
* TaskReassignFacet
**********************************************/
export interface TaskReassignFacet {
	lastAssignee?: Microsoft.SharePoint.Activities.ActivityIdentity;
}

/*********************************************
* TaskReassignFacetCollections
**********************************************/
export interface TaskReassignFacetCollections {

}

/*********************************************
* TaskReopenFacet
**********************************************/
export interface TaskReopenFacet {

}

/*********************************************
* TaskReopenFacetCollections
**********************************************/
export interface TaskReopenFacetCollections {

}

/*********************************************
* VersionFacet
**********************************************/
export interface VersionFacet {
	newVersion?: string;
}

/*********************************************
* VersionFacetCollections
**********************************************/
export interface VersionFacetCollections {

}

/*********************************************
* ActivityClientIdentity
**********************************************/
export interface ActivityClientIdentity {
	email?: string;
	name?: string;
	id?: string;
	provider?: string;
}

/*********************************************
* ActivityClientIdentityCollections
**********************************************/
export interface ActivityClientIdentityCollections {

}

/*********************************************
* ActivityTimeFacet
**********************************************/
export interface ActivityTimeFacet {
	lastRecordedTime?: string;
	observedTime?: string;
	recordedTime?: string;
}

/*********************************************
* ActivityTimeFacetCollections
**********************************************/
export interface ActivityTimeFacetCollections {

}

/*********************************************
* CoalescedFacet
**********************************************/
export interface CoalescedFacet {

}

/*********************************************
* CoalescedFacetCollections
**********************************************/
export interface CoalescedFacetCollections {

}

/*********************************************
* CommentFacet
**********************************************/
export interface CommentFacet {
	commentText?: string;
	parentAuthor?: Microsoft.SharePoint.Activities.ActivityClientIdentity;
	participants?: Array<Microsoft.SharePoint.Activities.ActivityClientIdentity>;
}

/*********************************************
* CommentFacetCollections
**********************************************/
export interface CommentFacetCollections {

}

/*********************************************
* InDocFacet
**********************************************/
export interface InDocFacet {
	contentId?: string;
	navigationId?: string;
}

/*********************************************
* InDocFacetCollections
**********************************************/
export interface InDocFacetCollections {

}

/*********************************************
* MentionFacet
**********************************************/
export interface MentionFacet {
	commentContentId?: string;
	mentionees?: Array<Microsoft.SharePoint.Activities.ActivityClientIdentity>;
}

/*********************************************
* MentionFacetCollections
**********************************************/
export interface MentionFacetCollections {

}

/*********************************************
* ResourceFacet
**********************************************/
export interface ResourceFacet {
	contentTypeId?: string;
	fileSystemObjectType?: number;
	fileType?: string;
	itemId?: string;
	itemUniqueId?: string;
	listId?: string;
	orgId?: string;
	serverRelativePath?: SP.ResourcePath;
	siteId?: string;
	title?: string;
	webId?: string;
}

/*********************************************
* ResourceFacetCollections
**********************************************/
export interface ResourceFacetCollections {

}

/*********************************************
* RevisionInfo
**********************************************/
export interface RevisionInfo {
	id?: string;
}

/*********************************************
* RevisionInfoCollections
**********************************************/
export interface RevisionInfoCollections {

}

/*********************************************
* RevisionSetFacet
**********************************************/
export interface RevisionSetFacet {
	author?: Microsoft.SharePoint.Activities.ActivityClientIdentity;
	revisions?: Array<Microsoft.SharePoint.Activities.RevisionInfo>;
}

/*********************************************
* RevisionSetFacetCollections
**********************************************/
export interface RevisionSetFacetCollections {

}

/*********************************************
* ActivityCapabilities
**********************************************/
export interface ActivityCapabilities {
	clientActivitiesEnabled?: boolean;
	clientActivitiesNotificationEnabled?: boolean;
	enabled?: boolean;
}

/*********************************************
* ActivityCapabilitiesCollections
**********************************************/
export interface ActivityCapabilitiesCollections {

}

/*********************************************
* ActivityClientRequest
**********************************************/
export interface ActivityClientRequest {
	comment?: Microsoft.SharePoint.Activities.CommentFacet;
	contentAction?: string;
	contentId?: string;
	contentOrigin?: string;
	created?: string;
	id?: any;
	mention?: Microsoft.SharePoint.Activities.MentionFacet;
	navigationId?: string;
	revisionSet?: Microsoft.SharePoint.Activities.RevisionSetFacet;
}

/*********************************************
* ActivityClientRequestCollections
**********************************************/
export interface ActivityClientRequestCollections {

}

/*********************************************
* ActivityClientResponse
**********************************************/
export interface ActivityClientResponse {
	id?: any;
	message?: string;
	serverId?: string;
	status?: number;
}

/*********************************************
* ActivityClientResponseCollections
**********************************************/
export interface ActivityClientResponseCollections {

}
