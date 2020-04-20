import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IOrgNewsSiteApi
**********************************************/
export interface IOrgNewsSiteApi extends OrgNewsSiteApiCollections, OrgNewsSiteApiMethods, Base.IBaseQuery<OrgNewsSiteApi, IOrgNewsSiteApiQuery> {

}

/*********************************************
* IOrgNewsSiteApiCollection
**********************************************/
export interface IOrgNewsSiteApiCollection extends Base.IBaseResults<OrgNewsSiteApi> {
	done?: (resolve: (value?: Array<OrgNewsSiteApi>) => void) => void;
}

/*********************************************
* IOrgNewsSiteApiQueryCollection
**********************************************/
export interface IOrgNewsSiteApiQueryCollection extends Base.IBaseResults<OrgNewsSiteApiOData> {
	done?: (resolve: (value?: Array<OrgNewsSiteApiOData>) => void) => void;
}

/*********************************************
* IOrgNewsSiteApiQuery
**********************************************/
export interface IOrgNewsSiteApiQuery extends OrgNewsSiteApiOData, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApi
**********************************************/
export interface OrgNewsSiteApi extends Base.IBaseResult, OrgNewsSiteApiProps, OrgNewsSiteApiCollections, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApiProps
**********************************************/
export interface OrgNewsSiteApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OrgNewsSiteApiPropMethods
**********************************************/
export interface OrgNewsSiteApiPropMethods {

}

/*********************************************
* OrgNewsSiteApiCollections
**********************************************/
export interface OrgNewsSiteApiCollections extends OrgNewsSiteApiPropMethods {

}

/*********************************************
* OrgNewsSiteApiOData
**********************************************/
export interface OrgNewsSiteApiOData extends Base.IBaseResult, OrgNewsSiteApiProps, OrgNewsSiteApiMethods {

}

/*********************************************
* OrgNewsSiteApiMethods
**********************************************/
export interface OrgNewsSiteApiMethods {
	details(): Base.IBaseExecution<Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteInfo>;
}
