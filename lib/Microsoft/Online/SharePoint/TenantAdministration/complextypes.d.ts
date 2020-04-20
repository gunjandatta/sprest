import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* AutoQuotaEnabled
**********************************************/
export interface AutoQuotaEnabled {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* AutoQuotaEnabledCollections
**********************************************/
export interface AutoQuotaEnabledCollections {

}

/*********************************************
* CustomFormUrl
**********************************************/
export interface CustomFormUrl {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* CustomFormUrlCollections
**********************************************/
export interface CustomFormUrlCollections {

}

/*********************************************
* DisableGroupify
**********************************************/
export interface DisableGroupify {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* DisableGroupifyCollections
**********************************************/
export interface DisableGroupifyCollections {

}

/*********************************************
* GroupInfo
**********************************************/
export interface GroupInfo {
	GroupStatusInAAD?: number;
	SiteUrl?: string;
}

/*********************************************
* GroupInfoCollections
**********************************************/
export interface GroupInfoCollections {

}

/*********************************************
* HubSitePermission
**********************************************/
export interface HubSitePermission {
	DisplayName?: string;
	PrincipalName?: string;
	Rights?: number;
}

/*********************************************
* HubSitePermissionCollections
**********************************************/
export interface HubSitePermissionCollections {

}

/*********************************************
* MailFromAddress
**********************************************/
export interface MailFromAddress {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* MailFromAddressCollections
**********************************************/
export interface MailFromAddressCollections {

}

/*********************************************
* MessagesFieldsData
**********************************************/
export interface MessagesFieldsData {
	bearToken?: string;
	environment?: string;
}

/*********************************************
* MessagesFieldsDataCollections
**********************************************/
export interface MessagesFieldsDataCollections {

}

/*********************************************
* MobileNotificationIsEnabledForSharepoint
**********************************************/
export interface MobileNotificationIsEnabledForSharepoint {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* MobileNotificationIsEnabledForSharepointCollections
**********************************************/
export interface MobileNotificationIsEnabledForSharepointCollections {

}

/*********************************************
* NewPortalAsDefault
**********************************************/
export interface NewPortalAsDefault {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewPortalAsDefaultCollections
**********************************************/
export interface NewPortalAsDefaultCollections {

}

/*********************************************
* NewSiteManagedPath
**********************************************/
export interface NewSiteManagedPath {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* NewSiteManagedPathCollections
**********************************************/
export interface NewSiteManagedPathCollections {

}

/*********************************************
* NewSubsiteInModernOffForAll
**********************************************/
export interface NewSubsiteInModernOffForAll {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewSubsiteInModernOffForAllCollections
**********************************************/
export interface NewSubsiteInModernOffForAllCollections {

}

/*********************************************
* NewSubsiteInModernOffForModernTemplates
**********************************************/
export interface NewSubsiteInModernOffForModernTemplates {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* NewSubsiteInModernOffForModernTemplatesCollections
**********************************************/
export interface NewSubsiteInModernOffForModernTemplatesCollections {

}

/*********************************************
* NewTeamSiteManagedPath
**********************************************/
export interface NewTeamSiteManagedPath {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* NewTeamSiteManagedPathCollections
**********************************************/
export interface NewTeamSiteManagedPathCollections {

}

/*********************************************
* ParentSiteUrl
**********************************************/
export interface ParentSiteUrl {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* ParentSiteUrlCollections
**********************************************/
export interface ParentSiteUrlCollections {

}

/*********************************************
* PolicyOption
**********************************************/
export interface PolicyOption {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* PolicyOptionCollections
**********************************************/
export interface PolicyOptionCollections {

}

/*********************************************
* RequireSecondaryContact
**********************************************/
export interface RequireSecondaryContact {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* RequireSecondaryContactCollections
**********************************************/
export interface RequireSecondaryContactCollections {

}

/*********************************************
* SecondaryAdministratorsFieldsData
**********************************************/
export interface SecondaryAdministratorsFieldsData {
	secondaryAdministratorEmails?: Array<string>;
	secondaryAdministratorLoginNames?: Array<string>;
	siteId?: any;
}

/*********************************************
* SecondaryAdministratorsFieldsDataCollections
**********************************************/
export interface SecondaryAdministratorsFieldsDataCollections {

}

/*********************************************
* SecondaryAdministratorsInfo
**********************************************/
export interface SecondaryAdministratorsInfo {
	email?: string;
	loginName?: string;
	name?: string;
	userPrincipalName?: string;
}

/*********************************************
* SecondaryAdministratorsInfoCollections
**********************************************/
export interface SecondaryAdministratorsInfoCollections {

}

/*********************************************
* ShowNextGenerationSyncClientOnTeamSite
**********************************************/
export interface ShowNextGenerationSyncClientOnTeamSite {
	IsHidden?: boolean;
	IsReadOnly?: boolean;
	ReadOnlyReasonCode?: number;
	Value?: boolean;
}

/*********************************************
* ShowNextGenerationSyncClientOnTeamSiteCollections
**********************************************/
export interface ShowNextGenerationSyncClientOnTeamSiteCollections {

}

/*********************************************
* ShowSelfServiceSiteCreation
**********************************************/
export interface ShowSelfServiceSiteCreation {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* ShowSelfServiceSiteCreationCollections
**********************************************/
export interface ShowSelfServiceSiteCreationCollections {

}

/*********************************************
* SiteCreationDefaultStorageQuota
**********************************************/
export interface SiteCreationDefaultStorageQuota {
	IsReadOnly?: boolean;
	Value?: number;
}

/*********************************************
* SiteCreationDefaultStorageQuotaCollections
**********************************************/
export interface SiteCreationDefaultStorageQuotaCollections {

}

/*********************************************
* SiteCreationNewUX
**********************************************/
export interface SiteCreationNewUX {
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* SiteCreationNewUXCollections
**********************************************/
export interface SiteCreationNewUXCollections {

}

/*********************************************
* SiteCreationProperties
**********************************************/
export interface SiteCreationProperties {
	CompatibilityLevel?: number;
	Lcid?: number;
	Owner?: string;
	StorageMaximumLevel?: number;
	StorageWarningLevel?: number;
	Template?: string;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	UserCodeMaximumLevel?: number;
	UserCodeWarningLevel?: number;
}

/*********************************************
* SiteCreationPropertiesCollections
**********************************************/
export interface SiteCreationPropertiesCollections {

}

/*********************************************
* SPOSitePropertiesEnumerableFilter
**********************************************/
export interface SPOSitePropertiesEnumerableFilter {
	Filter?: string;
	GroupIdDefined?: number;
	IncludeDetail?: boolean;
	IncludePersonalSite?: number;
	StartIndex?: string;
	Template?: string;
}

/*********************************************
* SPOSitePropertiesEnumerableFilterCollections
**********************************************/
export interface SPOSitePropertiesEnumerableFilterCollections {

}

/*********************************************
* SiteUserGroupInfo
**********************************************/
export interface SiteUserGroupInfo {
	userGroup?: Array<Microsoft.Online.SharePoint.TenantAdministration.UserInfo>;
}

/*********************************************
* SiteUserGroupInfoCollections
**********************************************/
export interface SiteUserGroupInfoCollections {

}

/*********************************************
* UserInfo
**********************************************/
export interface UserInfo {
	email?: string;
	loginName?: string;
	name?: string;
	userPrincipalName?: string;
}

/*********************************************
* UserInfoCollections
**********************************************/
export interface UserInfoCollections {

}

/*********************************************
* SmtpServer
**********************************************/
export interface SmtpServer {
	IsReadOnly?: boolean;
	Value?: string;
}

/*********************************************
* SmtpServerCollections
**********************************************/
export interface SmtpServerCollections {

}

/*********************************************
* SPListModernUXOff
**********************************************/
export interface SPListModernUXOff {
	IsHidden?: boolean;
	IsReadOnly?: boolean;
	Value?: boolean;
}

/*********************************************
* SPListModernUXOffCollections
**********************************************/
export interface SPListModernUXOffCollections {

}

/*********************************************
* TenantDefaultTimeZoneId
**********************************************/
export interface TenantDefaultTimeZoneId {
	IsReadOnly?: boolean;
	Value?: number;
}

/*********************************************
* TenantDefaultTimeZoneIdCollections
**********************************************/
export interface TenantDefaultTimeZoneIdCollections {

}

/*********************************************
* SPOTenantWebTemplate
**********************************************/
export interface SPOTenantWebTemplate {
	CompatibilityLevel?: number;
	Description?: string;
	DisplayCategory?: string;
	Id?: number;
	Lcid?: number;
	Name?: string;
	Title?: string;
}

/*********************************************
* SPOTenantWebTemplateCollections
**********************************************/
export interface SPOTenantWebTemplateCollections {

}
