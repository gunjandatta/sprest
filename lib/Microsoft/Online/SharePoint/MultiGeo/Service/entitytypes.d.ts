import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* AllowedDataLocationEntityData
**********************************************/
export interface AllowedDataLocationEntityData {
	appId?: string;
	domain?: string;
	isDefault?: boolean;
	location?: string;
}

/*********************************************
* AllowedDataLocationEntityDataCollections
**********************************************/
export interface AllowedDataLocationEntityDataCollections {

}

/*********************************************
* IAllowedDataLocation
**********************************************/
export interface IAllowedDataLocation extends AllowedDataLocationCollections, AllowedDataLocationMethods, Base.IBaseQuery<AllowedDataLocation, IAllowedDataLocationQuery> {

}

/*********************************************
* IAllowedDataLocationCollection
**********************************************/
export interface IAllowedDataLocationCollection extends Base.IBaseResults<AllowedDataLocation>, AllowedDataLocationCollectionMethods {
	done?: (resolve: (value?: Array<AllowedDataLocation>) => void) => void;
}

/*********************************************
* IAllowedDataLocationQueryCollection
**********************************************/
export interface IAllowedDataLocationQueryCollection extends Base.IBaseResults<AllowedDataLocationOData>, AllowedDataLocationCollectionMethods {
	done?: (resolve: (value?: Array<AllowedDataLocationOData>) => void) => void;
}

/*********************************************
* IAllowedDataLocationQuery
**********************************************/
export interface IAllowedDataLocationQuery extends AllowedDataLocationOData, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData, Base.IBaseResult, AllowedDataLocationProps, AllowedDataLocationCollections, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationProps
**********************************************/
export interface AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationPropMethods
**********************************************/
export interface AllowedDataLocationPropMethods {

}

/*********************************************
* AllowedDataLocationCollections
**********************************************/
export interface AllowedDataLocationCollections extends AllowedDataLocationPropMethods {

}

/*********************************************
* AllowedDataLocationCollectionMethods
**********************************************/
export interface AllowedDataLocationCollectionMethods {
	getByLocation(location?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollections & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationMethods;
}

/*********************************************
* AllowedDataLocationOData
**********************************************/
export interface AllowedDataLocationOData extends Base.IBaseResult, AllowedDataLocationProps, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationMethods
**********************************************/
export interface AllowedDataLocationMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ContentDbSchemaVersion
**********************************************/
export interface ContentDbSchemaVersion {
	Version?: string;
}

/*********************************************
* ContentDbSchemaVersionCollections
**********************************************/
export interface ContentDbSchemaVersionCollections {

}

/*********************************************
* MoveJobEntityData
**********************************************/
export interface MoveJobEntityData {
	ApiVersion?: string;
	CancelTriggeredBy?: string;
	DestinationDataLocation?: string;
	Direction?: number;
	ErrorMessage?: string;
	FinishedDateInUtc?: any;
	Id?: any;
	JobPhase?: number;
	Notify?: string;
	Option?: number;
	PreferredMoveBeginDateInUtc?: any;
	PreferredMoveEndDateInUtc?: any;
	Reserve?: string;
	SiteId?: any;
	SourceDataLocation?: string;
	State?: number;
	TriggeredBy?: string;
	Type?: number;
}

/*********************************************
* MoveJobEntityDataCollections
**********************************************/
export interface MoveJobEntityDataCollections {

}

/*********************************************
* GroupMoveJobEntityData
**********************************************/
export interface GroupMoveJobEntityData {
	GroupName?: string;
}

/*********************************************
* GroupMoveJobEntityDataCollections
**********************************************/
export interface GroupMoveJobEntityDataCollections {

}

/*********************************************
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmGroupMoveJobCollections
**********************************************/
export interface CrossFarmGroupMoveJobCollections extends CrossFarmGroupMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionMethods
**********************************************/
export interface CrossFarmGroupMoveJobCollectionMethods {
	getByMoveId(moveId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollections;
}

/*********************************************
* SiteMoveJobEntityData
**********************************************/
export interface SiteMoveJobEntityData {
	SourceSiteUrl?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteMoveJobEntityDataCollections
**********************************************/
export interface SiteMoveJobEntityDataCollections {

}

/*********************************************
* CrossFarmSiteMoveJobEntityData
**********************************************/
export interface CrossFarmSiteMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmSiteMoveJobEntityDataCollections
**********************************************/
export interface CrossFarmSiteMoveJobEntityDataCollections {

}

/*********************************************
* ICrossFarmSiteMoveJob
**********************************************/
export interface ICrossFarmSiteMoveJob extends CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods, Base.IBaseQuery<CrossFarmSiteMoveJob, ICrossFarmSiteMoveJobQuery> {

}

/*********************************************
* ICrossFarmSiteMoveJobCollection
**********************************************/
export interface ICrossFarmSiteMoveJobCollection extends Base.IBaseResults<CrossFarmSiteMoveJob>, CrossFarmSiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmSiteMoveJob>) => void) => void;
}

/*********************************************
* ICrossFarmSiteMoveJobQueryCollection
**********************************************/
export interface ICrossFarmSiteMoveJobQueryCollection extends Base.IBaseResults<CrossFarmSiteMoveJobOData>, CrossFarmSiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmSiteMoveJobOData>) => void) => void;
}

/*********************************************
* ICrossFarmSiteMoveJobQuery
**********************************************/
export interface ICrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobOData, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData, Base.IBaseResult, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJobProps
**********************************************/
export interface CrossFarmSiteMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmSiteMoveJobPropMethods
**********************************************/
export interface CrossFarmSiteMoveJobPropMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollections
**********************************************/
export interface CrossFarmSiteMoveJobCollections extends CrossFarmSiteMoveJobPropMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionMethods
**********************************************/
export interface CrossFarmSiteMoveJobCollectionMethods {
	getByMoveId(moveId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobMethods;
}

/*********************************************
* CrossFarmSiteMoveJobOData
**********************************************/
export interface CrossFarmSiteMoveJobOData extends Base.IBaseResult, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJobMethods
**********************************************/
export interface CrossFarmSiteMoveJobMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* UserMoveJobEntityData
**********************************************/
export interface UserMoveJobEntityData {
	HasOdbInSourceDataLocation?: boolean;
	UserPrincipalName?: string;
	ValidationResult?: number;
}

/*********************************************
* UserMoveJobEntityDataCollections
**********************************************/
export interface UserMoveJobEntityDataCollections {

}

/*********************************************
* CrossFarmUserMoveJobEntityData
**********************************************/
export interface CrossFarmUserMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmUserMoveJobEntityDataCollections
**********************************************/
export interface CrossFarmUserMoveJobEntityDataCollections {

}

/*********************************************
* ICrossFarmUserMoveJob
**********************************************/
export interface ICrossFarmUserMoveJob extends CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods, Base.IBaseQuery<CrossFarmUserMoveJob, ICrossFarmUserMoveJobQuery> {

}

/*********************************************
* ICrossFarmUserMoveJobCollection
**********************************************/
export interface ICrossFarmUserMoveJobCollection extends Base.IBaseResults<CrossFarmUserMoveJob>, CrossFarmUserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmUserMoveJob>) => void) => void;
}

/*********************************************
* ICrossFarmUserMoveJobQueryCollection
**********************************************/
export interface ICrossFarmUserMoveJobQueryCollection extends Base.IBaseResults<CrossFarmUserMoveJobOData>, CrossFarmUserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmUserMoveJobOData>) => void) => void;
}

/*********************************************
* ICrossFarmUserMoveJobQuery
**********************************************/
export interface ICrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobOData, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData, Base.IBaseResult, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJobProps
**********************************************/
export interface CrossFarmUserMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmUserMoveJobPropMethods
**********************************************/
export interface CrossFarmUserMoveJobPropMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollections
**********************************************/
export interface CrossFarmUserMoveJobCollections extends CrossFarmUserMoveJobPropMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollectionMethods
**********************************************/
export interface CrossFarmUserMoveJobCollectionMethods {
	getByMoveId(moveId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobMethods;
}

/*********************************************
* CrossFarmUserMoveJobOData
**********************************************/
export interface CrossFarmUserMoveJobOData extends Base.IBaseResult, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJobMethods
**********************************************/
export interface CrossFarmUserMoveJobMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* CrossGeoTenantBYOK
**********************************************/
export interface CrossGeoTenantBYOK {
	BYOKEnabled?: boolean;
}

/*********************************************
* CrossGeoTenantBYOKCollections
**********************************************/
export interface CrossGeoTenantBYOKCollections {

}

/*********************************************
* CrossGeoTenantCompatibility
**********************************************/
export interface CrossGeoTenantCompatibility {
	AbsCredentialsCount?: number;
	DbExtensionSchemaNames?: { results: Array<string> };
	DbExtensionSchemaVersions?: { results: Array<string> };
	DbSchemaVersion?: string;
}

/*********************************************
* CrossGeoTenantCompatibilityCollections
**********************************************/
export interface CrossGeoTenantCompatibilityCollections {

}

/*********************************************
* CrossGeoTenantPropertyEntityData
**********************************************/
export interface CrossGeoTenantPropertyEntityData {
	GeoLocation?: string;
	IsDeleted?: boolean;
	Name?: string;
	Value?: string;
}

/*********************************************
* CrossGeoTenantPropertyEntityDataCollections
**********************************************/
export interface CrossGeoTenantPropertyEntityDataCollections {

}

/*********************************************
* ICrossGeoTenantProperty
**********************************************/
export interface ICrossGeoTenantProperty extends CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods, Base.IBaseQuery<CrossGeoTenantProperty, ICrossGeoTenantPropertyQuery> {

}

/*********************************************
* ICrossGeoTenantPropertyCollection
**********************************************/
export interface ICrossGeoTenantPropertyCollection extends Base.IBaseResults<CrossGeoTenantProperty>, CrossGeoTenantPropertyCollectionMethods {
	done?: (resolve: (value?: Array<CrossGeoTenantProperty>) => void) => void;
}

/*********************************************
* ICrossGeoTenantPropertyQueryCollection
**********************************************/
export interface ICrossGeoTenantPropertyQueryCollection extends Base.IBaseResults<CrossGeoTenantPropertyOData>, CrossGeoTenantPropertyCollectionMethods {
	done?: (resolve: (value?: Array<CrossGeoTenantPropertyOData>) => void) => void;
}

/*********************************************
* ICrossGeoTenantPropertyQuery
**********************************************/
export interface ICrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyOData, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData, Base.IBaseResult, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantPropertyProps
**********************************************/
export interface CrossGeoTenantPropertyProps {
	LastModifiedTimeInUtc?: any;
}

/*********************************************
* CrossGeoTenantPropertyPropMethods
**********************************************/
export interface CrossGeoTenantPropertyPropMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollections
**********************************************/
export interface CrossGeoTenantPropertyCollections extends CrossGeoTenantPropertyPropMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollectionMethods
**********************************************/
export interface CrossGeoTenantPropertyCollectionMethods {
	getByPropertyNameAndGeoLocation(propertyName?: string, geo?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyMethods;
	getChanges(startTimeInUtc?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>;
}

/*********************************************
* CrossGeoTenantPropertyOData
**********************************************/
export interface CrossGeoTenantPropertyOData extends Base.IBaseResult, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantPropertyMethods
**********************************************/
export interface CrossGeoTenantPropertyMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* DBSchemaCompatibilityCheck
**********************************************/
export interface DBSchemaCompatibilityCheck {
	CompatibilityResult?: string;
}

/*********************************************
* DBSchemaCompatibilityCheckCollections
**********************************************/
export interface DBSchemaCompatibilityCheckCollections {

}

/*********************************************
* IGeoAdministrator
**********************************************/
export interface IGeoAdministrator extends GeoAdministratorCollections, GeoAdministratorMethods, Base.IBaseQuery<GeoAdministrator, IGeoAdministratorQuery> {

}

/*********************************************
* IGeoAdministratorCollection
**********************************************/
export interface IGeoAdministratorCollection extends Base.IBaseResults<GeoAdministrator>, GeoAdministratorCollectionMethods {
	done?: (resolve: (value?: Array<GeoAdministrator>) => void) => void;
}

/*********************************************
* IGeoAdministratorQueryCollection
**********************************************/
export interface IGeoAdministratorQueryCollection extends Base.IBaseResults<GeoAdministratorOData>, GeoAdministratorCollectionMethods {
	done?: (resolve: (value?: Array<GeoAdministratorOData>) => void) => void;
}

/*********************************************
* IGeoAdministratorQuery
**********************************************/
export interface IGeoAdministratorQuery extends GeoAdministratorOData, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator extends Base.IBaseResult, GeoAdministratorProps, GeoAdministratorCollections, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministratorProps
**********************************************/
export interface GeoAdministratorProps {
	DisplayName?: string;
	GeoLocation?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoAdministratorPropMethods
**********************************************/
export interface GeoAdministratorPropMethods {

}

/*********************************************
* GeoAdministratorCollections
**********************************************/
export interface GeoAdministratorCollections extends GeoAdministratorPropMethods {

}

/*********************************************
* GeoAdministratorCollectionMethods
**********************************************/
export interface GeoAdministratorCollectionMethods {
	create(parameters?: Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorEntityData): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	getByLoginName(loginName?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByLoginNameAndType(loginName?: string, memberType?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByObjectId(objectId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
}

/*********************************************
* GeoAdministratorOData
**********************************************/
export interface GeoAdministratorOData extends Base.IBaseResult, GeoAdministratorProps, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministratorMethods
**********************************************/
export interface GeoAdministratorMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IGeoExperience
**********************************************/
export interface IGeoExperience extends GeoExperienceCollections, GeoExperienceMethods, Base.IBaseQuery<GeoExperience, IGeoExperienceQuery> {

}

/*********************************************
* IGeoExperienceCollection
**********************************************/
export interface IGeoExperienceCollection extends Base.IBaseResults<GeoExperience> {
	done?: (resolve: (value?: Array<GeoExperience>) => void) => void;
}

/*********************************************
* IGeoExperienceQueryCollection
**********************************************/
export interface IGeoExperienceQueryCollection extends Base.IBaseResults<GeoExperienceOData> {
	done?: (resolve: (value?: Array<GeoExperienceOData>) => void) => void;
}

/*********************************************
* IGeoExperienceQuery
**********************************************/
export interface IGeoExperienceQuery extends GeoExperienceOData, GeoExperienceMethods {

}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience extends Base.IBaseResult, GeoExperienceProps, GeoExperienceCollections, GeoExperienceMethods {

}

/*********************************************
* GeoExperienceProps
**********************************************/
export interface GeoExperienceProps {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
}

/*********************************************
* GeoExperiencePropMethods
**********************************************/
export interface GeoExperiencePropMethods {

}

/*********************************************
* GeoExperienceCollections
**********************************************/
export interface GeoExperienceCollections extends GeoExperiencePropMethods {

}

/*********************************************
* GeoExperienceOData
**********************************************/
export interface GeoExperienceOData extends Base.IBaseResult, GeoExperienceProps, GeoExperienceMethods {

}

/*********************************************
* GeoExperienceMethods
**********************************************/
export interface GeoExperienceMethods {
	upgradeAllInstancesToSPOMode(): Base.IBaseExecution<any>;
	upgradeToSPOMode(): Base.IBaseExecution<any>;
}

/*********************************************
* GeoMoveTenantCompatibilityCheck
**********************************************/
export interface GeoMoveTenantCompatibilityCheck {
	DestinationDataLocation?: string;
	GeoMoveTenantCompatibilityResult?: number;
	GeoMoveTenantPropertyCompatibilityChecks?: { results: Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantPropertyCompatibilityCheck> };
	SourceDataLocation?: string;
}

/*********************************************
* GeoMoveTenantCompatibilityCheckCollections
**********************************************/
export interface GeoMoveTenantCompatibilityCheckCollections {

}

/*********************************************
* GeoTenantInstanceInformationEntityData
**********************************************/
export interface GeoTenantInstanceInformationEntityData {
	GeoLocation?: string;
	InstanceId?: any;
	InstanceState?: number;
	IsCurrentUserGeoAdministrator?: boolean;
	IsDefaultGeoLocation?: boolean;
	MySiteHostDomain?: string;
	OdbCount?: number;
	PortalDomain?: string;
	RegularSiteCount?: number;
	RootSiteDomain?: string;
	TenantAdminDomain?: string;
}

/*********************************************
* GeoTenantInstanceInformationEntityDataCollections
**********************************************/
export interface GeoTenantInstanceInformationEntityDataCollections {

}

/*********************************************
* GeoTenantInstanceInformation
**********************************************/
export interface GeoTenantInstanceInformation {

}

/*********************************************
* GeoTenantInstanceInformationCollections
**********************************************/
export interface GeoTenantInstanceInformationCollections extends GeoTenantInstanceInformationCollectionMethods {

}

/*********************************************
* GeoTenantInstanceInformationCollectionMethods
**********************************************/
export interface GeoTenantInstanceInformationCollectionMethods {
	getByGeoLocation(geoLocation?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollections;
}

/*********************************************
* GlobalAdminCheck
**********************************************/
export interface GlobalAdminCheck {
	IsGlobalAdministrator?: boolean;
}

/*********************************************
* GlobalAdminCheckCollections
**********************************************/
export interface GlobalAdminCheckCollections {

}

/*********************************************
* IGroupMoveJob
**********************************************/
export interface IGroupMoveJob extends GroupMoveJobCollections, GroupMoveJobMethods, Base.IBaseQuery<GroupMoveJob, IGroupMoveJobQuery> {

}

/*********************************************
* IGroupMoveJobCollection
**********************************************/
export interface IGroupMoveJobCollection extends Base.IBaseResults<GroupMoveJob>, GroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<GroupMoveJob>) => void) => void;
}

/*********************************************
* IGroupMoveJobQueryCollection
**********************************************/
export interface IGroupMoveJobQueryCollection extends Base.IBaseResults<GroupMoveJobOData>, GroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<GroupMoveJobOData>) => void) => void;
}

/*********************************************
* IGroupMoveJobQuery
**********************************************/
export interface IGroupMoveJobQuery extends GroupMoveJobOData, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData, Base.IBaseResult, GroupMoveJobProps, GroupMoveJobCollections, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJobProps
**********************************************/
export interface GroupMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* GroupMoveJobPropMethods
**********************************************/
export interface GroupMoveJobPropMethods {

}

/*********************************************
* GroupMoveJobCollections
**********************************************/
export interface GroupMoveJobCollections extends GroupMoveJobPropMethods {

}

/*********************************************
* GroupMoveJobCollectionMethods
**********************************************/
export interface GroupMoveJobCollectionMethods {
	getByGroupName(groupname?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>;
}

/*********************************************
* GroupMoveJobOData
**********************************************/
export interface GroupMoveJobOData extends Base.IBaseResult, GroupMoveJobProps, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJobMethods
**********************************************/
export interface GroupMoveJobMethods {
	cancel(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* JobEntityData
**********************************************/
export interface JobEntityData {
	Option?: number;
	Reserve?: string;
}

/*********************************************
* JobEntityDataCollections
**********************************************/
export interface JobEntityDataCollections {

}

/*********************************************
* MoveJob
**********************************************/
export interface MoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* MoveJobCollections
**********************************************/
export interface MoveJobCollections {

}

/*********************************************
* MultiGeoApiVersions
**********************************************/
export interface MultiGeoApiVersions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SupportedVersions?: { results: Array<string> };
}

/*********************************************
* MultiGeoApiVersionsCollections
**********************************************/
export interface MultiGeoApiVersionsCollections {

}

/*********************************************
* IMultiGeoServicesBeta
**********************************************/
export interface IMultiGeoServicesBeta extends MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods, Base.IBaseQuery<MultiGeoServicesBeta, IMultiGeoServicesBetaQuery> {

}

/*********************************************
* IMultiGeoServicesBetaCollection
**********************************************/
export interface IMultiGeoServicesBetaCollection extends Base.IBaseResults<MultiGeoServicesBeta> {
	done?: (resolve: (value?: Array<MultiGeoServicesBeta>) => void) => void;
}

/*********************************************
* IMultiGeoServicesBetaQueryCollection
**********************************************/
export interface IMultiGeoServicesBetaQueryCollection extends Base.IBaseResults<MultiGeoServicesBetaOData> {
	done?: (resolve: (value?: Array<MultiGeoServicesBetaOData>) => void) => void;
}

/*********************************************
* IMultiGeoServicesBetaQuery
**********************************************/
export interface IMultiGeoServicesBetaQuery extends MultiGeoServicesBetaOData, MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta extends Base.IBaseResult, MultiGeoServicesBetaProps, MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBetaProps
**********************************************/
export interface MultiGeoServicesBetaProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultiGeoServicesBetaPropMethods
**********************************************/
export interface MultiGeoServicesBetaPropMethods {
	ContentDbSchemaVersion(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion> & Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersionCollections;
	CrossGeoTenantBYOK(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOKCollections;
	CrossGeoTenantCompatibility(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibilityCollections;
	GeoExperience(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceMethods;
	GlobalAdminCheck(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck> & Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheckCollections;
	TaxonomyReplicationParameters(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters> & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersCollections & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersMethods;
}

/*********************************************
* MultiGeoServicesBetaCollections
**********************************************/
export interface MultiGeoServicesBetaCollections extends MultiGeoServicesBetaPropMethods {
	AllowedDataLocations(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollectionMethods;
	AllowedDataLocations(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollections & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationMethods;
	CrossFarmGroupMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollectionMethods;
	CrossFarmGroupMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollections;
	CrossFarmSiteMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollectionMethods;
	CrossFarmSiteMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobMethods;
	CrossFarmUserMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollectionMethods;
	CrossFarmUserMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobMethods;
	CrossGeoTenantProperties(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollectionMethods;
	CrossGeoTenantProperties(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyMethods;
	GeoAdministrators(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollectionMethods;
	GeoAdministrators(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	GeoTenantInstanceInformationCollection(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollectionMethods;
	GeoTenantInstanceInformationCollection(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollections;
	GroupMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollectionMethods;
	GroupMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobMethods;
	SiteMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollectionMethods;
	SiteMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobMethods;
	StorageQuotas(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollectionMethods;
	StorageQuotas(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollections & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaMethods;
	TenantInformationCollection(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	TenantInformationCollection(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformationCollections;
	UnifiedGroups(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollectionMethods;
	UnifiedGroups(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollections;
	UserMoveJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollectionMethods;
	UserMoveJobs(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
}

/*********************************************
* MultiGeoServicesBetaOData
**********************************************/
export interface MultiGeoServicesBetaOData extends Base.IBaseResult, MultiGeoServicesBetaProps, MultiGeoServicesBetaMethods {
	AllowedDataLocations: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollectionMethods;
	ContentDbSchemaVersion: Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion & Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersionCollections;
	CrossFarmGroupMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollectionMethods;
	CrossFarmSiteMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollectionMethods;
	CrossFarmUserMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollectionMethods;
	CrossGeoTenantBYOK: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOKCollections;
	CrossGeoTenantCompatibility: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibilityCollections;
	CrossGeoTenantProperties: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollectionMethods;
	GeoAdministrators: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollectionMethods;
	GeoExperience: Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceCollections;
	GeoTenantInstanceInformationCollection: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollectionMethods;
	GlobalAdminCheck: Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck & Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheckCollections;
	GroupMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollectionMethods;
	SiteMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollectionMethods;
	StorageQuotas: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollectionMethods;
	TaxonomyReplicationParameters: Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersCollections;
	TenantInformationCollection: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	UnifiedGroups: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollectionMethods;
	UserMoveJobs: Base.IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollectionMethods;
}

/*********************************************
* MultiGeoServicesBetaMethods
**********************************************/
export interface MultiGeoServicesBetaMethods {
	crossGeoCredentials(siteId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoCredentials>;
	dBSchemaCompatibilityCheck(): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.DBSchemaCompatibilityCheck>;
	geoMoveCompatibilityChecks(): Base.IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantCompatibilityCheck>;
	userPersonalSiteId(userPrincipalName?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteId>;
	userPersonalSiteLocation(userPrincipalName?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteLocation>;
}

/*********************************************
* ISiteMoveJob
**********************************************/
export interface ISiteMoveJob extends SiteMoveJobCollections, SiteMoveJobMethods, Base.IBaseQuery<SiteMoveJob, ISiteMoveJobQuery> {

}

/*********************************************
* ISiteMoveJobCollection
**********************************************/
export interface ISiteMoveJobCollection extends Base.IBaseResults<SiteMoveJob>, SiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<SiteMoveJob>) => void) => void;
}

/*********************************************
* ISiteMoveJobQueryCollection
**********************************************/
export interface ISiteMoveJobQueryCollection extends Base.IBaseResults<SiteMoveJobOData>, SiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<SiteMoveJobOData>) => void) => void;
}

/*********************************************
* ISiteMoveJobQuery
**********************************************/
export interface ISiteMoveJobQuery extends SiteMoveJobOData, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData, Base.IBaseResult, SiteMoveJobProps, SiteMoveJobCollections, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJobProps
**********************************************/
export interface SiteMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* SiteMoveJobPropMethods
**********************************************/
export interface SiteMoveJobPropMethods {

}

/*********************************************
* SiteMoveJobCollections
**********************************************/
export interface SiteMoveJobCollections extends SiteMoveJobPropMethods {

}

/*********************************************
* SiteMoveJobCollectionMethods
**********************************************/
export interface SiteMoveJobCollectionMethods {
	getByUrl(url?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>;
}

/*********************************************
* SiteMoveJobOData
**********************************************/
export interface SiteMoveJobOData extends Base.IBaseResult, SiteMoveJobProps, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJobMethods
**********************************************/
export interface SiteMoveJobMethods {
	cancel(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IStorageQuota
**********************************************/
export interface IStorageQuota extends StorageQuotaCollections, StorageQuotaMethods, Base.IBaseQuery<StorageQuota, IStorageQuotaQuery> {

}

/*********************************************
* IStorageQuotaCollection
**********************************************/
export interface IStorageQuotaCollection extends Base.IBaseResults<StorageQuota>, StorageQuotaCollectionMethods {
	done?: (resolve: (value?: Array<StorageQuota>) => void) => void;
}

/*********************************************
* IStorageQuotaQueryCollection
**********************************************/
export interface IStorageQuotaQueryCollection extends Base.IBaseResults<StorageQuotaOData>, StorageQuotaCollectionMethods {
	done?: (resolve: (value?: Array<StorageQuotaOData>) => void) => void;
}

/*********************************************
* IStorageQuotaQuery
**********************************************/
export interface IStorageQuotaQuery extends StorageQuotaOData, StorageQuotaMethods {

}

/*********************************************
* StorageQuota
**********************************************/
export interface StorageQuota extends Base.IBaseResult, StorageQuotaProps, StorageQuotaCollections, StorageQuotaMethods {

}

/*********************************************
* StorageQuotaProps
**********************************************/
export interface StorageQuotaProps {
	GeoAllocatedStorageMB?: number;
	GeoAvailableStorageMB?: number;
	GeoLocation?: string;
	GeoUsedStorageMB?: number;
	QuotaType?: number;
	TenantStorageMB?: number;
}

/*********************************************
* StorageQuotaPropMethods
**********************************************/
export interface StorageQuotaPropMethods {

}

/*********************************************
* StorageQuotaCollections
**********************************************/
export interface StorageQuotaCollections extends StorageQuotaPropMethods {

}

/*********************************************
* StorageQuotaCollectionMethods
**********************************************/
export interface StorageQuotaCollectionMethods {
	getByLocation(geoLocation?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollections & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaMethods;
}

/*********************************************
* StorageQuotaOData
**********************************************/
export interface StorageQuotaOData extends Base.IBaseResult, StorageQuotaProps, StorageQuotaMethods {

}

/*********************************************
* StorageQuotaMethods
**********************************************/
export interface StorageQuotaMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ITaxonomyReplicationParameters
**********************************************/
export interface ITaxonomyReplicationParameters extends TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods, Base.IBaseQuery<TaxonomyReplicationParameters, ITaxonomyReplicationParametersQuery> {

}

/*********************************************
* ITaxonomyReplicationParametersCollection
**********************************************/
export interface ITaxonomyReplicationParametersCollection extends Base.IBaseResults<TaxonomyReplicationParameters> {
	done?: (resolve: (value?: Array<TaxonomyReplicationParameters>) => void) => void;
}

/*********************************************
* ITaxonomyReplicationParametersQueryCollection
**********************************************/
export interface ITaxonomyReplicationParametersQueryCollection extends Base.IBaseResults<TaxonomyReplicationParametersOData> {
	done?: (resolve: (value?: Array<TaxonomyReplicationParametersOData>) => void) => void;
}

/*********************************************
* ITaxonomyReplicationParametersQuery
**********************************************/
export interface ITaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersOData, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters extends Base.IBaseResult, TaxonomyReplicationParametersProps, TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParametersProps
**********************************************/
export interface TaxonomyReplicationParametersProps {
	IsReplicateAllContentTypes?: boolean;
	IsReplicateAllGroups?: boolean;
	ReplicatedContentTypes?: { results: Array<string> };
	ReplicatedGroups?: { results: Array<string> };
}

/*********************************************
* TaxonomyReplicationParametersPropMethods
**********************************************/
export interface TaxonomyReplicationParametersPropMethods {

}

/*********************************************
* TaxonomyReplicationParametersCollections
**********************************************/
export interface TaxonomyReplicationParametersCollections extends TaxonomyReplicationParametersPropMethods {

}

/*********************************************
* TaxonomyReplicationParametersOData
**********************************************/
export interface TaxonomyReplicationParametersOData extends Base.IBaseResult, TaxonomyReplicationParametersProps, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParametersMethods
**********************************************/
export interface TaxonomyReplicationParametersMethods {
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* TenantInformation
**********************************************/
export interface TenantInformation {
	GeoLocation?: string;
	MySiteHostDomain?: string;
	PortalDomain?: string;
	RootSiteDomain?: string;
	TenantAdminDomain?: string;
	VanityDomains?: { results: Array<string> };
}

/*********************************************
* TenantInformationCollections
**********************************************/
export interface TenantInformationCollections {

}

/*********************************************
* UnifiedGroup
**********************************************/
export interface UnifiedGroup {
	DisplayName?: string;
	GroupAlias?: string;
	Mail?: string;
	ObjectId?: any;
	PreferredDataLocation?: string;
	SiteUrl?: string;
}

/*********************************************
* UnifiedGroupCollections
**********************************************/
export interface UnifiedGroupCollections extends UnifiedGroupCollectionMethods {

}

/*********************************************
* UnifiedGroupCollectionMethods
**********************************************/
export interface UnifiedGroupCollectionMethods {
	getByAlias(alias?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollections;
}

/*********************************************
* IUserMoveJob
**********************************************/
export interface IUserMoveJob extends UserMoveJobCollections, UserMoveJobMethods, Base.IBaseQuery<UserMoveJob, IUserMoveJobQuery> {

}

/*********************************************
* IUserMoveJobCollection
**********************************************/
export interface IUserMoveJobCollection extends Base.IBaseResults<UserMoveJob>, UserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<UserMoveJob>) => void) => void;
}

/*********************************************
* IUserMoveJobQueryCollection
**********************************************/
export interface IUserMoveJobQueryCollection extends Base.IBaseResults<UserMoveJobOData>, UserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<UserMoveJobOData>) => void) => void;
}

/*********************************************
* IUserMoveJobQuery
**********************************************/
export interface IUserMoveJobQuery extends UserMoveJobOData, UserMoveJobMethods {

}

/*********************************************
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData, Base.IBaseResult, UserMoveJobProps, UserMoveJobCollections, UserMoveJobMethods {

}

/*********************************************
* UserMoveJobProps
**********************************************/
export interface UserMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* UserMoveJobPropMethods
**********************************************/
export interface UserMoveJobPropMethods {

}

/*********************************************
* UserMoveJobCollections
**********************************************/
export interface UserMoveJobCollections extends UserMoveJobPropMethods {

}

/*********************************************
* UserMoveJobCollectionMethods
**********************************************/
export interface UserMoveJobCollectionMethods {
	getByDirection(direction?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByMoveId(odbMoveId?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByUpn(upn?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByValidPdl(validPdl?: boolean): Base.IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
}

/*********************************************
* UserMoveJobOData
**********************************************/
export interface UserMoveJobOData extends Base.IBaseResult, UserMoveJobProps, UserMoveJobMethods {

}

/*********************************************
* UserMoveJobMethods
**********************************************/
export interface UserMoveJobMethods {
	cancel(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* StorageQuotaEntityData
**********************************************/
export interface StorageQuotaEntityData {
	GeoAllocatedStorageMB?: string;
	GeoAvailableStorageMB?: string;
	GeoLocation?: string;
	GeoUsedStorageMB?: string;
	QuotaType?: number;
	TenantStorageMB?: string;
}

/*********************************************
* StorageQuotaEntityDataCollections
**********************************************/
export interface StorageQuotaEntityDataCollections {

}

/*********************************************
* UserPersonalSiteId
**********************************************/
export interface UserPersonalSiteId {
	MySiteUrl?: string;
	SiteId?: any;
	UserPrincipalName?: string;
}

/*********************************************
* UserPersonalSiteIdCollections
**********************************************/
export interface UserPersonalSiteIdCollections {

}

/*********************************************
* UserPersonalSiteLocation
**********************************************/
export interface UserPersonalSiteLocation {
	Location?: string;
	MySiteUrl?: string;
	SiteId?: any;
	UserPrincipalName?: string;
}

/*********************************************
* UserPersonalSiteLocationCollections
**********************************************/
export interface UserPersonalSiteLocationCollections {

}
