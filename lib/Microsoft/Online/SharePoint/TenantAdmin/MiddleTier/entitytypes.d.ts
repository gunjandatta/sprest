import { Base } from "../../../../../";

/*********************************************
* IDDIAdapter
**********************************************/
export interface IDDIAdapter extends DDIAdapterCollections, DDIAdapterMethods, Base.IBaseQuery<DDIAdapter, IDDIAdapterQuery> {

}

/*********************************************
* IDDIAdapterCollection
**********************************************/
export interface IDDIAdapterCollection extends Base.IBaseResults<DDIAdapter> {
	done?: (resolve: (value?: Array<DDIAdapter>) => void) => void;
}

/*********************************************
* IDDIAdapterQueryCollection
**********************************************/
export interface IDDIAdapterQueryCollection extends Base.IBaseResults<DDIAdapterOData> {
	done?: (resolve: (value?: Array<DDIAdapterOData>) => void) => void;
}

/*********************************************
* IDDIAdapterQuery
**********************************************/
export interface IDDIAdapterQuery extends DDIAdapterOData, DDIAdapterMethods {

}

/*********************************************
* DDIAdapter
**********************************************/
export interface DDIAdapter extends Base.IBaseResult, DDIAdapterProps, DDIAdapterCollections, DDIAdapterMethods {

}

/*********************************************
* DDIAdapterProps
**********************************************/
export interface DDIAdapterProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DDIAdapterPropMethods
**********************************************/
export interface DDIAdapterPropMethods {

}

/*********************************************
* DDIAdapterCollections
**********************************************/
export interface DDIAdapterCollections extends DDIAdapterPropMethods {

}

/*********************************************
* DDIAdapterOData
**********************************************/
export interface DDIAdapterOData extends Base.IBaseResult, DDIAdapterProps, DDIAdapterMethods {

}

/*********************************************
* DDIAdapterMethods
**********************************************/
export interface DDIAdapterMethods {
	getList(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
	getObject(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
	multiObjectExecute(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
	newObject(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
	removeObjects(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
	setObject(schema?: string, workflow?: string, stream?: any): Base.IBaseExecution<string>;
}
