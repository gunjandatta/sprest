import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IMicroServiceManager
**********************************************/
export interface IMicroServiceManager extends MicroServiceManagerCollections, MicroServiceManagerMethods, Base.IBaseQuery<MicroServiceManager, IMicroServiceManagerQuery> {

}

/*********************************************
* IMicroServiceManagerCollection
**********************************************/
export interface IMicroServiceManagerCollection extends Base.IBaseResults<MicroServiceManager> {
	done?: (resolve: (value?: Array<MicroServiceManager>) => void) => void;
}

/*********************************************
* IMicroServiceManagerQueryCollection
**********************************************/
export interface IMicroServiceManagerQueryCollection extends Base.IBaseResults<MicroServiceManagerOData> {
	done?: (resolve: (value?: Array<MicroServiceManagerOData>) => void) => void;
}

/*********************************************
* IMicroServiceManagerQuery
**********************************************/
export interface IMicroServiceManagerQuery extends MicroServiceManagerOData, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManager
**********************************************/
export interface MicroServiceManager extends Base.IBaseResult, MicroServiceManagerProps, MicroServiceManagerCollections, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManagerProps
**********************************************/
export interface MicroServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceManagerPropMethods
**********************************************/
export interface MicroServiceManagerPropMethods {

}

/*********************************************
* MicroServiceManagerCollections
**********************************************/
export interface MicroServiceManagerCollections extends MicroServiceManagerPropMethods {

}

/*********************************************
* MicroServiceManagerOData
**********************************************/
export interface MicroServiceManagerOData extends Base.IBaseResult, MicroServiceManagerProps, MicroServiceManagerMethods {

}

/*********************************************
* MicroServiceManagerMethods
**********************************************/
export interface MicroServiceManagerMethods {
	addMicroserviceWorkItem(payLoad?: any, minutes?: number, properties?: SP.MicroService.MicroServiceWorkItemProperties): Base.IBaseExecution<any>;
	deleteMicroserviceWorkItem(workItemId?: any): Base.IBaseExecution<boolean>;
	deleteMicroserviceWorkItemByContentDbId(contentDatabaseId?: any, siteId?: any, workItemId?: any): Base.IBaseExecution<boolean>;
	getServiceInternalUrls(service?: string): Base.IBaseCollection<string>;
	getServiceUrls(service?: string): Base.IBaseCollection<string>;
}

/*********************************************
* MicroServiceUtilities
**********************************************/
export interface MicroServiceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicroServiceUtilitiesCollections
**********************************************/
export interface MicroServiceUtilitiesCollections {

}
