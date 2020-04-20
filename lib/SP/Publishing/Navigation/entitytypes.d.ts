import { Base } from "../../../";

/*********************************************
* IPortalNavigationCacheWrapper
**********************************************/
export interface IPortalNavigationCacheWrapper extends PortalNavigationCacheWrapperCollections, PortalNavigationCacheWrapperMethods, Base.IBaseQuery<PortalNavigationCacheWrapper, IPortalNavigationCacheWrapperQuery> {

}

/*********************************************
* IPortalNavigationCacheWrapperCollection
**********************************************/
export interface IPortalNavigationCacheWrapperCollection extends Base.IBaseResults<PortalNavigationCacheWrapper> {
	done?: (resolve: (value?: Array<PortalNavigationCacheWrapper>) => void) => void;
}

/*********************************************
* IPortalNavigationCacheWrapperQueryCollection
**********************************************/
export interface IPortalNavigationCacheWrapperQueryCollection extends Base.IBaseResults<PortalNavigationCacheWrapperOData> {
	done?: (resolve: (value?: Array<PortalNavigationCacheWrapperOData>) => void) => void;
}

/*********************************************
* IPortalNavigationCacheWrapperQuery
**********************************************/
export interface IPortalNavigationCacheWrapperQuery extends PortalNavigationCacheWrapperOData, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapper
**********************************************/
export interface PortalNavigationCacheWrapper extends Base.IBaseResult, PortalNavigationCacheWrapperProps, PortalNavigationCacheWrapperCollections, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapperProps
**********************************************/
export interface PortalNavigationCacheWrapperProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PortalNavigationCacheWrapperPropMethods
**********************************************/
export interface PortalNavigationCacheWrapperPropMethods {

}

/*********************************************
* PortalNavigationCacheWrapperCollections
**********************************************/
export interface PortalNavigationCacheWrapperCollections extends PortalNavigationCacheWrapperPropMethods {

}

/*********************************************
* PortalNavigationCacheWrapperOData
**********************************************/
export interface PortalNavigationCacheWrapperOData extends Base.IBaseResult, PortalNavigationCacheWrapperProps, PortalNavigationCacheWrapperMethods {

}

/*********************************************
* PortalNavigationCacheWrapperMethods
**********************************************/
export interface PortalNavigationCacheWrapperMethods {
	disable(): Base.IBaseExecution<any>;
	enable(): Base.IBaseExecution<any>;
	refresh(): Base.IBaseExecution<any>;
}
