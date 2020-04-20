import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISubscription
**********************************************/
export interface ISubscription extends SubscriptionCollections, SubscriptionMethods, Base.IBaseQuery<Subscription, ISubscriptionQuery> {

}

/*********************************************
* ISubscriptionCollection
**********************************************/
export interface ISubscriptionCollection extends Base.IBaseResults<Subscription>, SubscriptionCollectionMethods {
	done?: (resolve: (value?: Array<Subscription>) => void) => void;
}

/*********************************************
* ISubscriptionQueryCollection
**********************************************/
export interface ISubscriptionQueryCollection extends Base.IBaseResults<SubscriptionOData>, SubscriptionCollectionMethods {
	done?: (resolve: (value?: Array<SubscriptionOData>) => void) => void;
}

/*********************************************
* ISubscriptionQuery
**********************************************/
export interface ISubscriptionQuery extends SubscriptionOData, SubscriptionMethods {

}

/*********************************************
* Subscription
**********************************************/
export interface Subscription extends Base.IBaseResult, SubscriptionProps, SubscriptionCollections, SubscriptionMethods {

}

/*********************************************
* SubscriptionProps
**********************************************/
export interface SubscriptionProps {
	clientState?: string;
	expirationDateTime?: any;
	id?: any;
	notificationUrl?: string;
	resource?: string;
	resourceData?: string;
}

/*********************************************
* SubscriptionPropMethods
**********************************************/
export interface SubscriptionPropMethods {

}

/*********************************************
* SubscriptionCollections
**********************************************/
export interface SubscriptionCollections extends SubscriptionPropMethods {

}

/*********************************************
* SubscriptionCollectionMethods
**********************************************/
export interface SubscriptionCollectionMethods {
	add(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): Base.IBaseExecution<Microsoft.SharePoint.Webhooks.Subscription>;
	getById(id?: any): Base.IBaseQuery<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollections & Microsoft.SharePoint.Webhooks.SubscriptionMethods;
	remove(subscriptionId?: any): Base.IBaseExecution<any>;
}

/*********************************************
* SubscriptionOData
**********************************************/
export interface SubscriptionOData extends Base.IBaseResult, SubscriptionProps, SubscriptionMethods {

}

/*********************************************
* SubscriptionMethods
**********************************************/
export interface SubscriptionMethods {
	delete(): Base.IBaseExecution<any>;
	update(parameters?: Microsoft.SharePoint.Webhooks.SubscriptionInformation): Base.IBaseExecution<any>;
}
