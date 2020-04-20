import { Base } from "../../../../";

/*********************************************
* IPointPublishingAdmin
**********************************************/
export interface IPointPublishingAdmin extends PointPublishingAdminCollections, PointPublishingAdminMethods, Base.IBaseQuery<PointPublishingAdmin, IPointPublishingAdminQuery> {

}

/*********************************************
* IPointPublishingAdminCollection
**********************************************/
export interface IPointPublishingAdminCollection extends Base.IBaseResults<PointPublishingAdmin> {
	done?: (resolve: (value?: Array<PointPublishingAdmin>) => void) => void;
}

/*********************************************
* IPointPublishingAdminQueryCollection
**********************************************/
export interface IPointPublishingAdminQueryCollection extends Base.IBaseResults<PointPublishingAdminOData> {
	done?: (resolve: (value?: Array<PointPublishingAdminOData>) => void) => void;
}

/*********************************************
* IPointPublishingAdminQuery
**********************************************/
export interface IPointPublishingAdminQuery extends PointPublishingAdminOData, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdmin
**********************************************/
export interface PointPublishingAdmin extends Base.IBaseResult, PointPublishingAdminProps, PointPublishingAdminCollections, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdminProps
**********************************************/
export interface PointPublishingAdminProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingAdminPropMethods
**********************************************/
export interface PointPublishingAdminPropMethods {

}

/*********************************************
* PointPublishingAdminCollections
**********************************************/
export interface PointPublishingAdminCollections extends PointPublishingAdminPropMethods {

}

/*********************************************
* PointPublishingAdminOData
**********************************************/
export interface PointPublishingAdminOData extends Base.IBaseResult, PointPublishingAdminProps, PointPublishingAdminMethods {

}

/*********************************************
* PointPublishingAdminMethods
**********************************************/
export interface PointPublishingAdminMethods {
	createTopicMagazine(magazineName?: string): Base.IBaseExecution<any>;
	deleteTopicMagazine(magazineId?: any): Base.IBaseExecution<any>;
	provisionPointPublishingAsync(): Base.IBaseExecution<any>;
}
