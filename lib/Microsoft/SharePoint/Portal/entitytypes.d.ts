import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* CollaborationMailbox
**********************************************/
export interface CollaborationMailbox {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CollaborationMailboxCollections
**********************************************/
export interface CollaborationMailboxCollections {

}

/*********************************************
* IGroupService
**********************************************/
export interface IGroupService extends GroupServiceCollections, GroupServiceMethods, Base.IBaseQuery<GroupService, IGroupServiceQuery> {

}

/*********************************************
* IGroupServiceCollection
**********************************************/
export interface IGroupServiceCollection extends Base.IBaseResults<GroupService> {
	done?: (resolve: (value?: Array<GroupService>) => void) => void;
}

/*********************************************
* IGroupServiceQueryCollection
**********************************************/
export interface IGroupServiceQueryCollection extends Base.IBaseResults<GroupServiceOData> {
	done?: (resolve: (value?: Array<GroupServiceOData>) => void) => void;
}

/*********************************************
* IGroupServiceQuery
**********************************************/
export interface IGroupServiceQuery extends GroupServiceOData, GroupServiceMethods {

}

/*********************************************
* GroupService
**********************************************/
export interface GroupService extends Base.IBaseResult, GroupServiceProps, GroupServiceCollections, GroupServiceMethods {

}

/*********************************************
* GroupServiceProps
**********************************************/
export interface GroupServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupServicePropMethods
**********************************************/
export interface GroupServicePropMethods {

}

/*********************************************
* GroupServiceCollections
**********************************************/
export interface GroupServiceCollections extends GroupServicePropMethods {

}

/*********************************************
* GroupServiceOData
**********************************************/
export interface GroupServiceOData extends Base.IBaseResult, GroupServiceProps, GroupServiceMethods {

}

/*********************************************
* GroupServiceMethods
**********************************************/
export interface GroupServiceMethods {
	getGroupImage(id?: string, hash?: string, color?: string): Base.IBaseExecution<any>;
	setGroupImage(imageStream?: any): Base.IBaseExecution<any>;
	syncGroupProperties(): Base.IBaseExecution<any>;
}

/*********************************************
* IGroupSiteManager
**********************************************/
export interface IGroupSiteManager extends GroupSiteManagerCollections, GroupSiteManagerMethods, Base.IBaseQuery<GroupSiteManager, IGroupSiteManagerQuery> {

}

/*********************************************
* IGroupSiteManagerCollection
**********************************************/
export interface IGroupSiteManagerCollection extends Base.IBaseResults<GroupSiteManager> {
	done?: (resolve: (value?: Array<GroupSiteManager>) => void) => void;
}

/*********************************************
* IGroupSiteManagerQueryCollection
**********************************************/
export interface IGroupSiteManagerQueryCollection extends Base.IBaseResults<GroupSiteManagerOData> {
	done?: (resolve: (value?: Array<GroupSiteManagerOData>) => void) => void;
}

/*********************************************
* IGroupSiteManagerQuery
**********************************************/
export interface IGroupSiteManagerQuery extends GroupSiteManagerOData, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManager
**********************************************/
export interface GroupSiteManager extends Base.IBaseResult, GroupSiteManagerProps, GroupSiteManagerCollections, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManagerProps
**********************************************/
export interface GroupSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* GroupSiteManagerPropMethods
**********************************************/
export interface GroupSiteManagerPropMethods {

}

/*********************************************
* GroupSiteManagerCollections
**********************************************/
export interface GroupSiteManagerCollections extends GroupSiteManagerPropMethods {

}

/*********************************************
* GroupSiteManagerOData
**********************************************/
export interface GroupSiteManagerOData extends Base.IBaseResult, GroupSiteManagerProps, GroupSiteManagerMethods {

}

/*********************************************
* GroupSiteManagerMethods
**********************************************/
export interface GroupSiteManagerMethods {
	canUserCreateGroup(): Base.IBaseExecution<boolean>;
	create(groupId?: any): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroup(displayName?: string, alias?: string, isPublic?: boolean, ownerPrincipalNames?: Array<string>, description?: string, creationOptions?: Array<string>): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroupEx(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	createGroupForSite(displayName?: string, alias?: string, isPublic?: boolean, optionalParams?: Microsoft.SharePoint.Portal.GroupCreationParams): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	delete(siteUrl?: string): Base.IBaseExecution<any>;
	ensureTeamForGroup(): Base.IBaseExecution<string>;
	getGroupCreationContext(): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupCreationContext>;
	getGroupSiteConversionData(): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteConversionInfo>;
	getSiteStatus(groupId?: any): Base.IBaseExecution<Microsoft.SharePoint.Portal.GroupSiteInfo>;
	getValidSiteUrlFromAlias(alias?: string, managedPath?: string, isTeamSite?: boolean): Base.IBaseExecution<string>;
	hideTeamifyPrompt(siteUrl?: string): Base.IBaseExecution<any>;
	isTeamifyPromptHidden(siteUrl?: string): Base.IBaseExecution<boolean>;
	notebook(groupId?: any): Base.IBaseExecution<string>;
}

/*********************************************
* CommunityModeration
**********************************************/
export interface CommunityModeration {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunityModerationCollections
**********************************************/
export interface CommunityModerationCollections {

}

/*********************************************
* SuiteNavData
**********************************************/
export interface SuiteNavData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SuiteNavDataCollections
**********************************************/
export interface SuiteNavDataCollections {

}

/*********************************************
* ISharePointHomeServiceContextBuilder
**********************************************/
export interface ISharePointHomeServiceContextBuilder extends SharePointHomeServiceContextBuilderCollections, SharePointHomeServiceContextBuilderMethods, Base.IBaseQuery<SharePointHomeServiceContextBuilder, ISharePointHomeServiceContextBuilderQuery> {

}

/*********************************************
* ISharePointHomeServiceContextBuilderCollection
**********************************************/
export interface ISharePointHomeServiceContextBuilderCollection extends Base.IBaseResults<SharePointHomeServiceContextBuilder> {
	done?: (resolve: (value?: Array<SharePointHomeServiceContextBuilder>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceContextBuilderQueryCollection
**********************************************/
export interface ISharePointHomeServiceContextBuilderQueryCollection extends Base.IBaseResults<SharePointHomeServiceContextBuilderOData> {
	done?: (resolve: (value?: Array<SharePointHomeServiceContextBuilderOData>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceContextBuilderQuery
**********************************************/
export interface ISharePointHomeServiceContextBuilderQuery extends SharePointHomeServiceContextBuilderOData, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilder
**********************************************/
export interface SharePointHomeServiceContextBuilder extends Base.IBaseResult, SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderCollections, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderProps
**********************************************/
export interface SharePointHomeServiceContextBuilderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceContextBuilderPropMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderPropMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderCollections
**********************************************/
export interface SharePointHomeServiceContextBuilderCollections extends SharePointHomeServiceContextBuilderPropMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderOData
**********************************************/
export interface SharePointHomeServiceContextBuilderOData extends Base.IBaseResult, SharePointHomeServiceContextBuilderProps, SharePointHomeServiceContextBuilderMethods {

}

/*********************************************
* SharePointHomeServiceContextBuilderMethods
**********************************************/
export interface SharePointHomeServiceContextBuilderMethods {
	context(): Base.IBaseQuery<Microsoft.SharePoint.Portal.SharePointHomeServiceContext, Microsoft.SharePoint.Portal.SharePointHomeServiceContextOData> & Microsoft.SharePoint.Portal.SharePointHomeServiceContextCollections;
}

/*********************************************
* SharePointHomeServiceContext
**********************************************/
export interface SharePointHomeServiceContext {
	CompanyPortalContext?: string;
	HomePageCache?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheCollection;
	HomePageContext?: Microsoft.SharePoint.Portal.Home.SharePointHomePageContext;
	Payload?: string;
	Urls?: { results: Array<string> };
}

/*********************************************
* SharePointHomeServiceContextCollections
**********************************************/
export interface SharePointHomeServiceContextCollections {

}

/*********************************************
* SharePointHomeServiceContextOData
**********************************************/
export interface SharePointHomeServiceContextOData extends Base.IBaseResult, SharePointHomeServiceContext {
	Token: SP.OAuth.TokenResponse & SP.OAuth.TokenResponseCollections;
}

/*********************************************
* ISPHubSitesUtility
**********************************************/
export interface ISPHubSitesUtility extends SPHubSitesUtilityCollections, SPHubSitesUtilityMethods, Base.IBaseQuery<SPHubSitesUtility, ISPHubSitesUtilityQuery> {

}

/*********************************************
* ISPHubSitesUtilityCollection
**********************************************/
export interface ISPHubSitesUtilityCollection extends Base.IBaseResults<SPHubSitesUtility> {
	done?: (resolve: (value?: Array<SPHubSitesUtility>) => void) => void;
}

/*********************************************
* ISPHubSitesUtilityQueryCollection
**********************************************/
export interface ISPHubSitesUtilityQueryCollection extends Base.IBaseResults<SPHubSitesUtilityOData> {
	done?: (resolve: (value?: Array<SPHubSitesUtilityOData>) => void) => void;
}

/*********************************************
* ISPHubSitesUtilityQuery
**********************************************/
export interface ISPHubSitesUtilityQuery extends SPHubSitesUtilityOData, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtility
**********************************************/
export interface SPHubSitesUtility extends Base.IBaseResult, SPHubSitesUtilityProps, SPHubSitesUtilityCollections, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtilityProps
**********************************************/
export interface SPHubSitesUtilityProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPHubSitesUtilityPropMethods
**********************************************/
export interface SPHubSitesUtilityPropMethods {

}

/*********************************************
* SPHubSitesUtilityCollections
**********************************************/
export interface SPHubSitesUtilityCollections extends SPHubSitesUtilityPropMethods {

}

/*********************************************
* SPHubSitesUtilityOData
**********************************************/
export interface SPHubSitesUtilityOData extends Base.IBaseResult, SPHubSitesUtilityProps, SPHubSitesUtilityMethods {

}

/*********************************************
* SPHubSitesUtilityMethods
**********************************************/
export interface SPHubSitesUtilityMethods {
	getHubSites(): Base.IBaseCollection<SP.HubSite> & SP.HubSiteCollectionMethods;
}

/*********************************************
* ISPSiteManager
**********************************************/
export interface ISPSiteManager extends SPSiteManagerCollections, SPSiteManagerMethods, Base.IBaseQuery<SPSiteManager, ISPSiteManagerQuery> {

}

/*********************************************
* ISPSiteManagerCollection
**********************************************/
export interface ISPSiteManagerCollection extends Base.IBaseResults<SPSiteManager> {
	done?: (resolve: (value?: Array<SPSiteManager>) => void) => void;
}

/*********************************************
* ISPSiteManagerQueryCollection
**********************************************/
export interface ISPSiteManagerQueryCollection extends Base.IBaseResults<SPSiteManagerOData> {
	done?: (resolve: (value?: Array<SPSiteManagerOData>) => void) => void;
}

/*********************************************
* ISPSiteManagerQuery
**********************************************/
export interface ISPSiteManagerQuery extends SPSiteManagerOData, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManager
**********************************************/
export interface SPSiteManager extends Base.IBaseResult, SPSiteManagerProps, SPSiteManagerCollections, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManagerProps
**********************************************/
export interface SPSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSiteManagerPropMethods
**********************************************/
export interface SPSiteManagerPropMethods {

}

/*********************************************
* SPSiteManagerCollections
**********************************************/
export interface SPSiteManagerCollections extends SPSiteManagerPropMethods {

}

/*********************************************
* SPSiteManagerOData
**********************************************/
export interface SPSiteManagerOData extends Base.IBaseResult, SPSiteManagerProps, SPSiteManagerMethods {

}

/*********************************************
* SPSiteManagerMethods
**********************************************/
export interface SPSiteManagerMethods {
	archiveTeamChannelSite(siteId?: any, archive?: boolean): Base.IBaseExecution<any>;
	canCreateHubJoinedSite(hubSiteId?: any): Base.IBaseExecution<boolean>;
	create(request?: Microsoft.SharePoint.Portal.SPSiteCreationRequest): Base.IBaseExecution<Microsoft.SharePoint.Portal.SPSiteCreationResponse>;
	delete(siteId?: any): Base.IBaseExecution<any>;
	getIBSegmentLabels(IBSegments?: Array<any>): Base.IBaseCollection<Microsoft.SharePoint.Portal.IBSegmentInfo>;
	getTeamChannelSiteOwner(siteId?: any): Base.IBaseExecution<Microsoft.SharePoint.Portal.GetTeamChannelSiteOwnerResponse>;
	restoreTeamsChannelSite(siteId?: any, relatedGroupId?: any): Base.IBaseExecution<any>;
	setTeamChannelSiteOwner(siteId?: any, logonName?: string, secondaryLogonName?: string): Base.IBaseExecution<any>;
	siteUrl(siteId?: any): Base.IBaseExecution<string>;
	status(url?: string): Base.IBaseExecution<Microsoft.SharePoint.Portal.SPSiteCreationResponse>;
	updateWorkflow2013Endpoint(workflowServiceAddress?: string, workflowHostname?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ISiteIconManager
**********************************************/
export interface ISiteIconManager extends SiteIconManagerCollections, SiteIconManagerMethods, Base.IBaseQuery<SiteIconManager, ISiteIconManagerQuery> {

}

/*********************************************
* ISiteIconManagerCollection
**********************************************/
export interface ISiteIconManagerCollection extends Base.IBaseResults<SiteIconManager> {
	done?: (resolve: (value?: Array<SiteIconManager>) => void) => void;
}

/*********************************************
* ISiteIconManagerQueryCollection
**********************************************/
export interface ISiteIconManagerQueryCollection extends Base.IBaseResults<SiteIconManagerOData> {
	done?: (resolve: (value?: Array<SiteIconManagerOData>) => void) => void;
}

/*********************************************
* ISiteIconManagerQuery
**********************************************/
export interface ISiteIconManagerQuery extends SiteIconManagerOData, SiteIconManagerMethods {

}

/*********************************************
* SiteIconManager
**********************************************/
export interface SiteIconManager extends Base.IBaseResult, SiteIconManagerProps, SiteIconManagerCollections, SiteIconManagerMethods {

}

/*********************************************
* SiteIconManagerProps
**********************************************/
export interface SiteIconManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteIconManagerPropMethods
**********************************************/
export interface SiteIconManagerPropMethods {

}

/*********************************************
* SiteIconManagerCollections
**********************************************/
export interface SiteIconManagerCollections extends SiteIconManagerPropMethods {

}

/*********************************************
* SiteIconManagerOData
**********************************************/
export interface SiteIconManagerOData extends Base.IBaseResult, SiteIconManagerProps, SiteIconManagerMethods {

}

/*********************************************
* SiteIconManagerMethods
**********************************************/
export interface SiteIconManagerMethods {
	getSiteLogo(siteUrl?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ISiteLinkingManager
**********************************************/
export interface ISiteLinkingManager extends SiteLinkingManagerCollections, SiteLinkingManagerMethods, Base.IBaseQuery<SiteLinkingManager, ISiteLinkingManagerQuery> {

}

/*********************************************
* ISiteLinkingManagerCollection
**********************************************/
export interface ISiteLinkingManagerCollection extends Base.IBaseResults<SiteLinkingManager> {
	done?: (resolve: (value?: Array<SiteLinkingManager>) => void) => void;
}

/*********************************************
* ISiteLinkingManagerQueryCollection
**********************************************/
export interface ISiteLinkingManagerQueryCollection extends Base.IBaseResults<SiteLinkingManagerOData> {
	done?: (resolve: (value?: Array<SiteLinkingManagerOData>) => void) => void;
}

/*********************************************
* ISiteLinkingManagerQuery
**********************************************/
export interface ISiteLinkingManagerQuery extends SiteLinkingManagerOData, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManager
**********************************************/
export interface SiteLinkingManager extends Base.IBaseResult, SiteLinkingManagerProps, SiteLinkingManagerCollections, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManagerProps
**********************************************/
export interface SiteLinkingManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteLinkingManagerPropMethods
**********************************************/
export interface SiteLinkingManagerPropMethods {

}

/*********************************************
* SiteLinkingManagerCollections
**********************************************/
export interface SiteLinkingManagerCollections extends SiteLinkingManagerPropMethods {

}

/*********************************************
* SiteLinkingManagerOData
**********************************************/
export interface SiteLinkingManagerOData extends Base.IBaseResult, SiteLinkingManagerProps, SiteLinkingManagerMethods {

}

/*********************************************
* SiteLinkingManagerMethods
**********************************************/
export interface SiteLinkingManagerMethods {
	getSiteLinks(): Base.IBaseExecution<Microsoft.SharePoint.Portal.LinkedSitesListContract>;
	linkGroup(groupId?: any): Base.IBaseExecution<boolean>;
	unlinkGroup(groupId?: any): Base.IBaseExecution<boolean>;
}

/*********************************************
* MySiteRecommendations
**********************************************/
export interface MySiteRecommendations {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MySiteRecommendationsCollections
**********************************************/
export interface MySiteRecommendationsCollections {

}
