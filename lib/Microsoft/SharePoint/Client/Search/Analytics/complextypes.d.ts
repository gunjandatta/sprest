import { Base } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* AnalyticsAction
**********************************************/
export interface AnalyticsAction {
	ActionType?: string;
	ExpireTime?: any;
	Properties?: Array<SP.KeyValue>;
	UserTime?: any;
}

/*********************************************
* AnalyticsActionCollections
**********************************************/
export interface AnalyticsActionCollections {

}

/*********************************************
* AnalyticsActor
**********************************************/
export interface AnalyticsActor {
	Id?: string;
	Properties?: Array<SP.KeyValue>;
	TenantId?: any;
}

/*********************************************
* AnalyticsActorCollections
**********************************************/
export interface AnalyticsActorCollections {

}

/*********************************************
* AnalyticsItem
**********************************************/
export interface AnalyticsItem {
	Id?: string;
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* AnalyticsItemCollections
**********************************************/
export interface AnalyticsItemCollections {

}

/*********************************************
* AnalyticsSignal
**********************************************/
export interface AnalyticsSignal {
	Action?: Microsoft.SharePoint.Client.Search.Analytics.AnalyticsAction;
	Actor?: Microsoft.SharePoint.Client.Search.Analytics.AnalyticsActor;
	Item?: Microsoft.SharePoint.Client.Search.Analytics.AnalyticsItem;
	Source?: string;
}

/*********************************************
* AnalyticsSignalCollections
**********************************************/
export interface AnalyticsSignalCollections {

}
