import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ITenantCdnApi
**********************************************/
export interface ITenantCdnApi extends TenantCdnApiCollections, TenantCdnApiMethods, Base.IBaseQuery<TenantCdnApi, ITenantCdnApiQuery> {

}

/*********************************************
* ITenantCdnApiCollection
**********************************************/
export interface ITenantCdnApiCollection extends Base.IBaseResults<TenantCdnApi> {
	done?: (resolve: (value?: Array<TenantCdnApi>) => void) => void;
}

/*********************************************
* ITenantCdnApiQueryCollection
**********************************************/
export interface ITenantCdnApiQueryCollection extends Base.IBaseResults<TenantCdnApiOData> {
	done?: (resolve: (value?: Array<TenantCdnApiOData>) => void) => void;
}

/*********************************************
* ITenantCdnApiQuery
**********************************************/
export interface ITenantCdnApiQuery extends TenantCdnApiOData, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApi
**********************************************/
export interface TenantCdnApi extends Base.IBaseResult, TenantCdnApiProps, TenantCdnApiCollections, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApiProps
**********************************************/
export interface TenantCdnApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCdnApiPropMethods
**********************************************/
export interface TenantCdnApiPropMethods {

}

/*********************************************
* TenantCdnApiCollections
**********************************************/
export interface TenantCdnApiCollections extends TenantCdnApiPropMethods {

}

/*********************************************
* TenantCdnApiOData
**********************************************/
export interface TenantCdnApiOData extends Base.IBaseResult, TenantCdnApiProps, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApiMethods
**********************************************/
export interface TenantCdnApiMethods {
	getCdnUrls(items?: Array<string>): Base.IBaseCollection<Microsoft.SharePoint.TenantCdn.TenantCdnUrl>;
	isFolderUrlsInTenantCdn(urls?: Array<string>, cdnType?: number): Base.IBaseCollection<boolean>;
}
