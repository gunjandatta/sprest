import { Base } from "../../../";

/*********************************************
* IActivityLogger
**********************************************/
export interface IActivityLogger extends ActivityLoggerCollections, ActivityLoggerMethods, Base.IBaseQuery<ActivityLogger, IActivityLoggerQuery> {

}

/*********************************************
* IActivityLoggerCollection
**********************************************/
export interface IActivityLoggerCollection extends Base.IBaseResults<ActivityLogger> {
	done?: (resolve: (value?: Array<ActivityLogger>) => void) => void;
}

/*********************************************
* IActivityLoggerQueryCollection
**********************************************/
export interface IActivityLoggerQueryCollection extends Base.IBaseResults<ActivityLoggerOData> {
	done?: (resolve: (value?: Array<ActivityLoggerOData>) => void) => void;
}

/*********************************************
* IActivityLoggerQuery
**********************************************/
export interface IActivityLoggerQuery extends ActivityLoggerOData, ActivityLoggerMethods {

}

/*********************************************
* ActivityLogger
**********************************************/
export interface ActivityLogger extends Base.IBaseResult, ActivityLoggerProps, ActivityLoggerCollections, ActivityLoggerMethods {

}

/*********************************************
* ActivityLoggerProps
**********************************************/
export interface ActivityLoggerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ActivityLoggerPropMethods
**********************************************/
export interface ActivityLoggerPropMethods {

}

/*********************************************
* ActivityLoggerCollections
**********************************************/
export interface ActivityLoggerCollections extends ActivityLoggerPropMethods {

}

/*********************************************
* ActivityLoggerOData
**********************************************/
export interface ActivityLoggerOData extends Base.IBaseResult, ActivityLoggerProps, ActivityLoggerMethods {

}

/*********************************************
* ActivityLoggerMethods
**********************************************/
export interface ActivityLoggerMethods {
	feedbackDirect(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): Base.IBaseExecution<any>;
	feedbackIndirect(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string, json?: string): Base.IBaseExecution<any>;
	logActivity(Operation?: string, ListId?: any, ListItemUniqueId?: any, AffectedResourceUrl?: string, ItemType?: string): Base.IBaseExecution<any>;
}

/*********************************************
* MountService
**********************************************/
export interface MountService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MountServiceCollections
**********************************************/
export interface MountServiceCollections {

}

/*********************************************
* TrackedItemService
**********************************************/
export interface TrackedItemService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TrackedItemServiceCollections
**********************************************/
export interface TrackedItemServiceCollections {

}
