import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* SPO3rdPartyAADPermissionGrant
**********************************************/
export interface SPO3rdPartyAADPermissionGrant {
	ClientId?: string;
	ConsentType?: string;
	IsDomainIsolated?: boolean;
	ObjectId?: string;
	PackageName?: string;
	Resource?: string;
	Scope?: string;
}

/*********************************************
* SPO3rdPartyAADPermissionGrantCollections
**********************************************/
export interface SPO3rdPartyAADPermissionGrantCollections extends SPO3rdPartyAADPermissionGrantCollectionMethods {

}

/*********************************************
* SPO3rdPartyAADPermissionGrantCollectionMethods
**********************************************/
export interface SPO3rdPartyAADPermissionGrantCollectionMethods {
	add(servicePrincipalId?: string, resource?: string, scope?: string): Base.IBaseExecution<any>;
	remove(servicePrincipalId?: string, resource?: string, scope?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods, Base.IBaseQuery<SPOWebAppServicePrincipalPermissionGrant, ISPOWebAppServicePrincipalPermissionGrantQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPermissionGrant>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionGrant>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQueryCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPermissionGrantOData>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionGrantOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantOData, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant extends Base.IBaseResult, SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantProps {
	ClientId?: string;
	ConsentType?: string;
	IsDomainIsolated?: boolean;
	ObjectId?: string;
	PackageName?: string;
	Resource?: string;
	ResourceId?: string;
	Scope?: string;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantCollections extends SPOWebAppServicePrincipalPermissionGrantPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantCollectionMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	getByObjectId(objectId?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantMethods;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantOData
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantOData extends Base.IBaseResult, SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods, Base.IBaseQuery<SPOWebAppServicePrincipalPermissionRequest, ISPOWebAppServicePrincipalPermissionRequestQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPermissionRequest>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionRequest>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQueryCollection extends Base.IBaseResults<SPOWebAppServicePrincipalPermissionRequestOData>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionRequestOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestOData, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest extends Base.IBaseResult, SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestProps {
	Id?: any;
	IsDomainIsolated?: boolean;
	PackageApproverName?: string;
	PackageName?: string;
	PackageVersion?: string;
	Resource?: string;
	ResourceId?: string;
	Scope?: string;
	TimeRequested?: any;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestCollections extends SPOWebAppServicePrincipalPermissionRequestPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestCollectionMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	approve(resource?: string, scope?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	getById(id?: any): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestMethods;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestOData
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestOData extends Base.IBaseResult, SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestMethods {
	approve(): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	deny(): Base.IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipal
**********************************************/
export interface ISPOWebAppServicePrincipal extends SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods, Base.IBaseQuery<SPOWebAppServicePrincipal, ISPOWebAppServicePrincipalQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalCollection
**********************************************/
export interface ISPOWebAppServicePrincipalCollection extends Base.IBaseResults<SPOWebAppServicePrincipal> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipal>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalQueryCollection extends Base.IBaseResults<SPOWebAppServicePrincipalOData> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalQuery
**********************************************/
export interface ISPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalOData, SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal extends Base.IBaseResult, SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipalProps
**********************************************/
export interface SPOWebAppServicePrincipalProps {
	AccountEnabled?: boolean;
	AppHelperId?: string;
	AppId?: string;
	ReplyUrls?: { results: Array<string> };
	ServicePrincipalObjectIds?: { results: Array<any> };
}

/*********************************************
* SPOWebAppServicePrincipalPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalCollections
**********************************************/
export interface SPOWebAppServicePrincipalCollections extends SPOWebAppServicePrincipalPropMethods {
	GrantManager(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrantCollectionMethods;
	GrantManager(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrantCollections;
	PermissionGrants(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollectionMethods;
	PermissionGrants(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantMethods;
	PermissionRequests(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollectionMethods;
	PermissionRequests(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestMethods;
}

/*********************************************
* SPOWebAppServicePrincipalOData
**********************************************/
export interface SPOWebAppServicePrincipalOData extends Base.IBaseResult, SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalMethods {
	GrantManager: Base.IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrantCollectionMethods;
	PermissionGrants: Base.IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollectionMethods;
	PermissionRequests: Base.IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollectionMethods;
}

/*********************************************
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods {
	update(): Base.IBaseExecution<any>;
}
