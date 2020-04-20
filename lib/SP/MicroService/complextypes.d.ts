import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* MicroServiceWorkItemProperties
**********************************************/
export interface MicroServiceWorkItemProperties {
	ApiPath?: string;
	CustomProperties?: Array<SP.KeyValue>;
	HttpHeaders?: Array<SP.KeyValue>;
	MicroServiceName?: string;
	RequestType?: number;
}

/*********************************************
* MicroServiceWorkItemPropertiesCollections
**********************************************/
export interface MicroServiceWorkItemPropertiesCollections {

}
