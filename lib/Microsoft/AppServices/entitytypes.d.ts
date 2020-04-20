import { Base } from "../../";

/*********************************************
* IAppCollection
**********************************************/
export interface IAppCollection extends AppCollectionCollections, AppCollectionMethods, Base.IBaseQuery<AppCollection, IAppCollectionQuery> {

}

/*********************************************
* IAppCollectionCollection
**********************************************/
export interface IAppCollectionCollection extends Base.IBaseResults<AppCollection> {
	done?: (resolve: (value?: Array<AppCollection>) => void) => void;
}

/*********************************************
* IAppCollectionQueryCollection
**********************************************/
export interface IAppCollectionQueryCollection extends Base.IBaseResults<AppCollectionOData> {
	done?: (resolve: (value?: Array<AppCollectionOData>) => void) => void;
}

/*********************************************
* IAppCollectionQuery
**********************************************/
export interface IAppCollectionQuery extends AppCollectionOData, AppCollectionMethods {

}

/*********************************************
* AppCollection
**********************************************/
export interface AppCollection extends Base.IBaseResult, AppCollectionProps, AppCollectionCollections, AppCollectionMethods {

}

/*********************************************
* AppCollectionProps
**********************************************/
export interface AppCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCollectionPropMethods
**********************************************/
export interface AppCollectionPropMethods {

}

/*********************************************
* AppCollectionCollections
**********************************************/
export interface AppCollectionCollections extends AppCollectionPropMethods {

}

/*********************************************
* AppCollectionOData
**********************************************/
export interface AppCollectionOData extends Base.IBaseResult, AppCollectionProps, AppCollectionMethods {

}

/*********************************************
* AppCollectionMethods
**********************************************/
export interface AppCollectionMethods {
	getAppsFromStore(addInType?: string, queryString?: string): Base.IBaseExecution<string>;
	getByType(type?: string): Base.IBaseExecution<string>;
}
