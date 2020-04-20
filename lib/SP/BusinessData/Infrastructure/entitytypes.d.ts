import { Base } from "../../../";

/*********************************************
* IExternalSubscriptionStore
**********************************************/
export interface IExternalSubscriptionStore extends ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods, Base.IBaseQuery<ExternalSubscriptionStore, IExternalSubscriptionStoreQuery> {

}

/*********************************************
* IExternalSubscriptionStoreCollection
**********************************************/
export interface IExternalSubscriptionStoreCollection extends Base.IBaseResults<ExternalSubscriptionStore> {
	done?: (resolve: (value?: Array<ExternalSubscriptionStore>) => void) => void;
}

/*********************************************
* IExternalSubscriptionStoreQueryCollection
**********************************************/
export interface IExternalSubscriptionStoreQueryCollection extends Base.IBaseResults<ExternalSubscriptionStoreOData> {
	done?: (resolve: (value?: Array<ExternalSubscriptionStoreOData>) => void) => void;
}

/*********************************************
* IExternalSubscriptionStoreQuery
**********************************************/
export interface IExternalSubscriptionStoreQuery extends ExternalSubscriptionStoreOData, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStore
**********************************************/
export interface ExternalSubscriptionStore extends Base.IBaseResult, ExternalSubscriptionStoreProps, ExternalSubscriptionStoreCollections, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreProps
**********************************************/
export interface ExternalSubscriptionStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ExternalSubscriptionStorePropMethods
**********************************************/
export interface ExternalSubscriptionStorePropMethods {

}

/*********************************************
* ExternalSubscriptionStoreCollections
**********************************************/
export interface ExternalSubscriptionStoreCollections extends ExternalSubscriptionStorePropMethods {

}

/*********************************************
* ExternalSubscriptionStoreOData
**********************************************/
export interface ExternalSubscriptionStoreOData extends Base.IBaseResult, ExternalSubscriptionStoreProps, ExternalSubscriptionStoreMethods {

}

/*********************************************
* ExternalSubscriptionStoreMethods
**********************************************/
export interface ExternalSubscriptionStoreMethods {
	indexStore(): Base.IBaseExecution<any>;
}
