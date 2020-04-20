import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IDirectorySession
**********************************************/
export interface IDirectorySession extends DirectorySessionCollections, DirectorySessionMethods, Base.IBaseQuery<DirectorySession, IDirectorySessionQuery> {

}

/*********************************************
* IDirectorySessionCollection
**********************************************/
export interface IDirectorySessionCollection extends Base.IBaseResults<DirectorySession> {
	done?: (resolve: (value?: Array<DirectorySession>) => void) => void;
}

/*********************************************
* IDirectorySessionQueryCollection
**********************************************/
export interface IDirectorySessionQueryCollection extends Base.IBaseResults<DirectorySessionOData> {
	done?: (resolve: (value?: Array<DirectorySessionOData>) => void) => void;
}

/*********************************************
* IDirectorySessionQuery
**********************************************/
export interface IDirectorySessionQuery extends DirectorySessionOData, DirectorySessionMethods {

}

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession extends Base.IBaseResult, DirectorySessionProps, DirectorySessionCollections, DirectorySessionMethods {

}

/*********************************************
* DirectorySessionProps
**********************************************/
export interface DirectorySessionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectorySessionPropMethods
**********************************************/
export interface DirectorySessionPropMethods {

}

/*********************************************
* DirectorySessionCollections
**********************************************/
export interface DirectorySessionCollections extends DirectorySessionPropMethods {

}

/*********************************************
* DirectorySessionOData
**********************************************/
export interface DirectorySessionOData extends Base.IBaseResult, DirectorySessionProps, DirectorySessionMethods {

}

/*********************************************
* DirectorySessionMethods
**********************************************/
export interface DirectorySessionMethods {
	getGraphUser(principalName?: string): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	getSharePointDataForUser(userId?: any): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	group(groupId?: any, alias?: string): Base.IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	joinGroup(groupId?: any): Base.IBaseExecution<number>;
	me(): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	user(id?: any, principalName?: string): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	validateGroupName(displayName?: string, alias?: string): Base.IBaseExecution<SP.Directory.GroupNameValidationResult>;
}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupCollections, GroupMethods, Base.IBaseQuery<Group, IGroupQuery> {

}

/*********************************************
* IGroupCollection
**********************************************/
export interface IGroupCollection extends Base.IBaseResults<Group>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<Group>) => void) => void;
}

/*********************************************
* IGroupQueryCollection
**********************************************/
export interface IGroupQueryCollection extends Base.IBaseResults<GroupOData>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<GroupOData>) => void) => void;
}

/*********************************************
* IGroupQuery
**********************************************/
export interface IGroupQuery extends GroupOData, GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends Base.IBaseResult, GroupProps, GroupCollections, GroupMethods {

}

/*********************************************
* GroupProps
**********************************************/
export interface GroupProps {
	alias?: string;
	allowToAddGuests?: boolean;
	assignedLabels?: string;
	calendarUrl?: string;
	classification?: string;
	description?: string;
	displayName?: string;
	documentsUrl?: string;
	editGroupUrl?: string;
	id?: any;
	inboxUrl?: string;
	isDynamic?: boolean;
	isPublic?: boolean;
	mail?: string;
	notebookUrl?: string;
	peopleUrl?: string;
	pictureUrl?: string;
	principalName?: string;
	siteUrl?: string;
	teamsResources?: { results: Array<SP.KeyValue> };
	yammerResources?: { results: Array<SP.KeyValue> };
}

/*********************************************
* GroupPropMethods
**********************************************/
export interface GroupPropMethods {

}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupPropMethods {
	members(): Base.IBaseCollection<SP.Directory.User, SP.Directory.UserOData, Base.IBaseExecution & SP.Directory.UserCollectionMethods> & Base.IBaseExecution & SP.Directory.UserCollectionMethods;
	members(id: string | number): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	owners(): Base.IBaseCollection<SP.Directory.User, SP.Directory.UserOData, Base.IBaseExecution & SP.Directory.UserCollectionMethods> & Base.IBaseExecution & SP.Directory.UserCollectionMethods;
	owners(id: string | number): Base.IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	add(objectId?: any): Base.IBaseExecution<any>;
	remove(objectId?: any): Base.IBaseExecution<any>;
}

/*********************************************
* GroupOData
**********************************************/
export interface GroupOData extends Base.IBaseResult, GroupProps, GroupMethods {
	members: Base.IBaseResults<SP.Directory.User> & SP.Directory.UserCollectionMethods;
	owners: Base.IBaseResults<SP.Directory.User> & SP.Directory.UserCollectionMethods;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IUser
**********************************************/
export interface IUser extends UserCollections, UserMethods, Base.IBaseQuery<User, IUserQuery> {

}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends Base.IBaseResults<User>, UserCollectionMethods {
	done?: (resolve: (value?: Array<User>) => void) => void;
}

/*********************************************
* IUserQueryCollection
**********************************************/
export interface IUserQueryCollection extends Base.IBaseResults<UserOData>, UserCollectionMethods {
	done?: (resolve: (value?: Array<UserOData>) => void) => void;
}

/*********************************************
* IUserQuery
**********************************************/
export interface IUserQuery extends UserOData, UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends Base.IBaseResult, UserProps, UserCollections, UserMethods {

}

/*********************************************
* UserProps
**********************************************/
export interface UserProps {
	aboutMe?: string;
	accountEnabled?: boolean;
	alias?: string;
	birthday?: any;
	displayName?: string;
	hireDate?: any;
	id?: any;
	interests?: { results: Array<string> };
	mail?: string;
	mySite?: string;
	netId?: string;
	officeGraphEnabled?: boolean;
	pastProjects?: { results: Array<string> };
	pointPublishingPersonalSiteUrl?: string;
	preferredName?: string;
	principalName?: string;
	responsibilities?: { results: Array<string> };
	schools?: { results: Array<string> };
	sharePointContentBarViewsTeachingBubble?: boolean;
	sharePointConversationsLinkFirstRun?: boolean;
	sharePointFiltersPaneFirstRun?: boolean;
	sharePointFollowedDocumentsMigrated?: boolean;
	sharePointFollowedSitesMigrated?: boolean;
	sharePointHomeCreateNewsTeachingBubble?: boolean;
	sharePointHomeFirstRun?: boolean;
	sharePointHomeMobileUpsell?: boolean;
	sharePointHomeRefreshFirstRun?: boolean;
	sharePointLibrariesFirstRun?: boolean;
	sharePointListsFirstRun?: boolean;
	sharePointModernDocSetsFirstRun?: boolean;
	sharePointModernHomepageFirstRun?: boolean;
	sharePointNewsDigestTeachingBubble?: boolean;
	sharePointNewsDigestTeachingBubbleHomePage?: boolean;
	sharePointOneDriveBusinessFirstRun?: boolean;
	sharePointPageAuthoringFirstRun?: boolean;
	sharePointPictureUrl?: string;
	sharePointProfileId?: any;
	sharePointSaveForLaterTeachingBubble?: boolean;
	sharePointTeamsTeachingBubble?: boolean;
	skills?: { results: Array<string> };
	tags?: { results: Array<string> };
	tenantInstanceId?: any;
	userType?: string;
}

/*********************************************
* UserPropMethods
**********************************************/
export interface UserPropMethods {

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserPropMethods {
	membership(): Base.IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, Base.IBaseExecution & SP.Directory.GroupCollectionMethods> & Base.IBaseExecution & SP.Directory.GroupCollectionMethods;
	membership(id: string | number): Base.IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	ownership(): Base.IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, Base.IBaseExecution & SP.Directory.GroupCollectionMethods> & Base.IBaseExecution & SP.Directory.GroupCollectionMethods;
	ownership(id: string | number): Base.IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	rankedMembership(): Base.IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, Base.IBaseExecution & SP.Directory.GroupCollectionMethods> & Base.IBaseExecution & SP.Directory.GroupCollectionMethods;
	rankedMembership(id: string | number): Base.IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	add(objectId?: any, principalName?: string): Base.IBaseExecution<any>;
	remove(objectId?: any): Base.IBaseExecution<any>;
}

/*********************************************
* UserOData
**********************************************/
export interface UserOData extends Base.IBaseResult, UserProps, UserMethods {
	membership: Base.IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
	ownership: Base.IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
	rankedMembership: Base.IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	getUserLinks(linkName?: string, groupType?: number): Base.IBaseCollection<SP.Directory.Link>;
}

/*********************************************
* Link
**********************************************/
export interface Link {
	id?: any;
	objectSubtype?: number;
	objectType?: string;
}

/*********************************************
* LinkCollections
**********************************************/
export interface LinkCollections {

}

/*********************************************
* GroupAndUserStatus
**********************************************/
export interface GroupAndUserStatus {
	Status?: number;
}

/*********************************************
* GroupAndUserStatusCollections
**********************************************/
export interface GroupAndUserStatusCollections {

}

/*********************************************
* GroupAndUserStatusOData
**********************************************/
export interface GroupAndUserStatusOData extends Base.IBaseResult, GroupAndUserStatus {
	Group: SP.Directory.Group & SP.Directory.GroupCollections & SP.Directory.GroupCollectionMethods;
}

/*********************************************
* MembershipResult
**********************************************/
export interface MembershipResult {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	GroupsList?: { results: Array<any> };
}

/*********************************************
* MembershipResultCollections
**********************************************/
export interface MembershipResultCollections {

}

/*********************************************
* MembersInfo
**********************************************/
export interface MembersInfo {
	MemberNames?: { results: Array<string> };
	TotalCount?: number;
}

/*********************************************
* MembersInfoCollections
**********************************************/
export interface MembersInfoCollections {

}

/*********************************************
* MyGroupsResult
**********************************************/
export interface MyGroupsResult {
	HasNext?: boolean;
	HasPrev?: boolean;
}

/*********************************************
* MyGroupsResultCollections
**********************************************/
export interface MyGroupsResultCollections {

}
