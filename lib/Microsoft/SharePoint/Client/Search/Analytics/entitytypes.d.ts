import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISignalStore
**********************************************/
export interface ISignalStore extends SignalStoreCollections, SignalStoreMethods, Base.IBaseQuery<SignalStore, ISignalStoreQuery> {

}

/*********************************************
* ISignalStoreCollection
**********************************************/
export interface ISignalStoreCollection extends Base.IBaseResults<SignalStore> {
	done?: (resolve: (value?: Array<SignalStore>) => void) => void;
}

/*********************************************
* ISignalStoreQueryCollection
**********************************************/
export interface ISignalStoreQueryCollection extends Base.IBaseResults<SignalStoreOData> {
	done?: (resolve: (value?: Array<SignalStoreOData>) => void) => void;
}

/*********************************************
* ISignalStoreQuery
**********************************************/
export interface ISignalStoreQuery extends SignalStoreOData, SignalStoreMethods {

}

/*********************************************
* SignalStore
**********************************************/
export interface SignalStore extends Base.IBaseResult, SignalStoreProps, SignalStoreCollections, SignalStoreMethods {

}

/*********************************************
* SignalStoreProps
**********************************************/
export interface SignalStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SignalStorePropMethods
**********************************************/
export interface SignalStorePropMethods {

}

/*********************************************
* SignalStoreCollections
**********************************************/
export interface SignalStoreCollections extends SignalStorePropMethods {

}

/*********************************************
* SignalStoreOData
**********************************************/
export interface SignalStoreOData extends Base.IBaseResult, SignalStoreProps, SignalStoreMethods {

}

/*********************************************
* SignalStoreMethods
**********************************************/
export interface SignalStoreMethods {
	signals(signals?: Array<Microsoft.SharePoint.Client.Search.Analytics.AnalyticsSignal>): Base.IBaseExecution<any>;
}
