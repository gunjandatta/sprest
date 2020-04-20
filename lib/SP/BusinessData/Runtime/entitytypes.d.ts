import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* IEntityInstance
**********************************************/
export interface IEntityInstance extends EntityInstanceCollections, EntityInstanceMethods, Base.IBaseQuery<EntityInstance, IEntityInstanceQuery> {

}

/*********************************************
* IEntityInstanceCollection
**********************************************/
export interface IEntityInstanceCollection extends Base.IBaseResults<EntityInstance> {
	done?: (resolve: (value?: Array<EntityInstance>) => void) => void;
}

/*********************************************
* IEntityInstanceQueryCollection
**********************************************/
export interface IEntityInstanceQueryCollection extends Base.IBaseResults<EntityInstanceOData> {
	done?: (resolve: (value?: Array<EntityInstanceOData>) => void) => void;
}

/*********************************************
* IEntityInstanceQuery
**********************************************/
export interface IEntityInstanceQuery extends EntityInstanceOData, EntityInstanceMethods {

}

/*********************************************
* EntityInstance
**********************************************/
export interface EntityInstance extends Base.IBaseResult, EntityInstanceProps, EntityInstanceCollections, EntityInstanceMethods {

}

/*********************************************
* EntityInstanceProps
**********************************************/
export interface EntityInstanceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityInstancePropMethods
**********************************************/
export interface EntityInstancePropMethods {

}

/*********************************************
* EntityInstanceCollections
**********************************************/
export interface EntityInstanceCollections extends EntityInstancePropMethods {

}

/*********************************************
* EntityInstanceOData
**********************************************/
export interface EntityInstanceOData extends Base.IBaseResult, EntityInstanceProps, EntityInstanceMethods {

}

/*********************************************
* EntityInstanceMethods
**********************************************/
export interface EntityInstanceMethods {
	createCollectionInstance(fieldDotNotation?: string, size?: number): Base.IBaseExecution<any>;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	fromXml(xml?: string): Base.IBaseExecution<any>;
	getIdentity(): Base.IBaseExecution<SP.BusinessData.Runtime.EntityIdentity>;
	toXml(): Base.IBaseExecution<string>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IEntityFieldValueDictionary
**********************************************/
export interface IEntityFieldValueDictionary extends EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods, Base.IBaseQuery<EntityFieldValueDictionary, IEntityFieldValueDictionaryQuery> {

}

/*********************************************
* IEntityFieldValueDictionaryCollection
**********************************************/
export interface IEntityFieldValueDictionaryCollection extends Base.IBaseResults<EntityFieldValueDictionary> {
	done?: (resolve: (value?: Array<EntityFieldValueDictionary>) => void) => void;
}

/*********************************************
* IEntityFieldValueDictionaryQueryCollection
**********************************************/
export interface IEntityFieldValueDictionaryQueryCollection extends Base.IBaseResults<EntityFieldValueDictionaryOData> {
	done?: (resolve: (value?: Array<EntityFieldValueDictionaryOData>) => void) => void;
}

/*********************************************
* IEntityFieldValueDictionaryQuery
**********************************************/
export interface IEntityFieldValueDictionaryQuery extends EntityFieldValueDictionaryOData, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionary
**********************************************/
export interface EntityFieldValueDictionary extends Base.IBaseResult, EntityFieldValueDictionaryProps, EntityFieldValueDictionaryCollections, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionaryProps
**********************************************/
export interface EntityFieldValueDictionaryProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityFieldValueDictionaryPropMethods
**********************************************/
export interface EntityFieldValueDictionaryPropMethods {

}

/*********************************************
* EntityFieldValueDictionaryCollections
**********************************************/
export interface EntityFieldValueDictionaryCollections extends EntityFieldValueDictionaryPropMethods {

}

/*********************************************
* EntityFieldValueDictionaryOData
**********************************************/
export interface EntityFieldValueDictionaryOData extends Base.IBaseResult, EntityFieldValueDictionaryProps, EntityFieldValueDictionaryMethods {

}

/*********************************************
* EntityFieldValueDictionaryMethods
**********************************************/
export interface EntityFieldValueDictionaryMethods {
	createCollectionInstance(fieldDotNotation?: string, size?: number): Base.IBaseExecution<any>;
	createInstance(fieldInstanceDotNotation?: string, fieldDotNotation?: string): Base.IBaseExecution<any>;
	fromXml(xml?: string): Base.IBaseExecution<any>;
	getCollectionSize(fieldDotNotation?: string): Base.IBaseExecution<number>;
	toXml(): Base.IBaseExecution<string>;
}

/*********************************************
* EntityIdentity
**********************************************/
export interface EntityIdentity {
	IdentifierCount?: number;
}

/*********************************************
* EntityIdentityCollections
**********************************************/
export interface EntityIdentityCollections {

}

/*********************************************
* NotificationCallback
**********************************************/
export interface NotificationCallback {
	NotificationContext?: string;
	NotificationEndpoint?: string;
	NotificationForwarderType?: string;
}

/*********************************************
* NotificationCallbackCollections
**********************************************/
export interface NotificationCallbackCollections {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription {
	Hash?: string;
	ID?: { results: Array<SP.KeyValue> };
}

/*********************************************
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections {

}
