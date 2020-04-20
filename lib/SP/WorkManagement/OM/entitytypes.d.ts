import { Base } from "../../../";
import { SP } from "../../../";

/*********************************************
* IBaseSession
**********************************************/
export interface IBaseSession extends BaseSessionCollections, BaseSessionMethods, Base.IBaseQuery<BaseSession, IBaseSessionQuery> {

}

/*********************************************
* IBaseSessionCollection
**********************************************/
export interface IBaseSessionCollection extends Base.IBaseResults<BaseSession> {
	done?: (resolve: (value?: Array<BaseSession>) => void) => void;
}

/*********************************************
* IBaseSessionQueryCollection
**********************************************/
export interface IBaseSessionQueryCollection extends Base.IBaseResults<BaseSessionOData> {
	done?: (resolve: (value?: Array<BaseSessionOData>) => void) => void;
}

/*********************************************
* IBaseSessionQuery
**********************************************/
export interface IBaseSessionQuery extends BaseSessionOData, BaseSessionMethods {

}

/*********************************************
* BaseSession
**********************************************/
export interface BaseSession extends Base.IBaseResult, BaseSessionProps, BaseSessionCollections, BaseSessionMethods {

}

/*********************************************
* BaseSessionProps
**********************************************/
export interface BaseSessionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* BaseSessionPropMethods
**********************************************/
export interface BaseSessionPropMethods {

}

/*********************************************
* BaseSessionCollections
**********************************************/
export interface BaseSessionCollections extends BaseSessionPropMethods {

}

/*********************************************
* BaseSessionOData
**********************************************/
export interface BaseSessionOData extends Base.IBaseResult, BaseSessionProps, BaseSessionMethods {

}

/*********************************************
* BaseSessionMethods
**********************************************/
export interface BaseSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): Base.IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): Base.IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): Base.IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoOData> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	pinTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): Base.IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultOData> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultOData> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
}

/*********************************************
* BooleanCriterion
**********************************************/
export interface BooleanCriterion {
	CompareType?: number;
}

/*********************************************
* BooleanCriterionCollections
**********************************************/
export interface BooleanCriterionCollections {

}

/*********************************************
* CalloutInfo
**********************************************/
export interface CalloutInfo {
	Contacts?: { results: Array<string> };
	DirectLinkTitle?: string;
	DirectLinkUrl?: string;
	Hierarchy?: { results: Array<string> };
	Predecessors?: { results: Array<string> };
	Successors?: { results: Array<string> };
	Title?: string;
	Url?: string;
}

/*********************************************
* CalloutInfoCollections
**********************************************/
export interface CalloutInfoCollections {

}

/*********************************************
* CreateRefreshJobResult
**********************************************/
export interface CreateRefreshJobResult {
	CreatedJob?: boolean;
	CurrentJobId?: number;
	EncounteredError?: boolean;
}

/*********************************************
* CreateRefreshJobResultCollections
**********************************************/
export interface CreateRefreshJobResultCollections {

}

/*********************************************
* CustomAttributeFilter
**********************************************/
export interface CustomAttributeFilter {
	Attributes?: { results: Array<string> };
	ConcatType?: number;
}

/*********************************************
* CustomAttributeFilterCollections
**********************************************/
export interface CustomAttributeFilterCollections {

}

/*********************************************
* DashboardScriptExtensionInfo
**********************************************/
export interface DashboardScriptExtensionInfo {
	ProviderKey?: string;
	ScriptClass?: string;
	ScriptData?: string;
	ScriptFiles?: { results: Array<string> };
}

/*********************************************
* DashboardScriptExtensionInfoCollections
**********************************************/
export interface DashboardScriptExtensionInfoCollections {

}

/*********************************************
* DateRangeCriterion
**********************************************/
export interface DateRangeCriterion {
	RangeEndValue?: any;
	RangeStartValue?: any;
}

/*********************************************
* DateRangeCriterionCollections
**********************************************/
export interface DateRangeCriterionCollections {

}

/*********************************************
* ExchangeUserSyncState
**********************************************/
export interface ExchangeUserSyncState {
	IsOptedIn?: boolean;
	LastEndTime?: any;
	LastSyncResult?: number;
}

/*********************************************
* ExchangeUserSyncStateCollections
**********************************************/
export interface ExchangeUserSyncStateCollections {

}

/*********************************************
* Location
**********************************************/
export interface Location {
	Color?: string;
	Id?: number;
	Important?: boolean;
	Name?: string;
	ParentId?: number;
	RootProviderKey?: string;
	Url?: string;
}

/*********************************************
* LocationCollections
**********************************************/
export interface LocationCollections {

}

/*********************************************
* LocationDisplaySetting
**********************************************/
export interface LocationDisplaySetting {
	Color?: string;
	Id?: number;
}

/*********************************************
* LocationDisplaySettingCollections
**********************************************/
export interface LocationDisplaySettingCollections {

}

/*********************************************
* LocationFilter
**********************************************/
export interface LocationFilter {
	IncludeUncategorizedTasks?: boolean;
	LocationKeys?: { results: Array<number> };
}

/*********************************************
* LocationFilterCollections
**********************************************/
export interface LocationFilterCollections {

}

/*********************************************
* Task
**********************************************/
export interface Task {
	CustomAttributes?: { results: Array<string> };
	Description?: string;
	DueDate?: any;
	EditUrl?: string;
	Id?: number;
	IsCompleted?: boolean;
	IsPersonal?: boolean;
	IsReadOnly?: boolean;
	LastModified?: any;
	LocationId?: number;
	Name?: string;
	PinAge?: number;
	SerializedCustomDataForClient?: string;
	StartDate?: any;
}

/*********************************************
* TaskCollections
**********************************************/
export interface TaskCollections {

}

/*********************************************
* ILocationOrientedSortableSession
**********************************************/
export interface ILocationOrientedSortableSession extends LocationOrientedSortableSessionCollections, LocationOrientedSortableSessionMethods, Base.IBaseQuery<LocationOrientedSortableSession, ILocationOrientedSortableSessionQuery> {

}

/*********************************************
* ILocationOrientedSortableSessionCollection
**********************************************/
export interface ILocationOrientedSortableSessionCollection extends Base.IBaseResults<LocationOrientedSortableSession> {
	done?: (resolve: (value?: Array<LocationOrientedSortableSession>) => void) => void;
}

/*********************************************
* ILocationOrientedSortableSessionQueryCollection
**********************************************/
export interface ILocationOrientedSortableSessionQueryCollection extends Base.IBaseResults<LocationOrientedSortableSessionOData> {
	done?: (resolve: (value?: Array<LocationOrientedSortableSessionOData>) => void) => void;
}

/*********************************************
* ILocationOrientedSortableSessionQuery
**********************************************/
export interface ILocationOrientedSortableSessionQuery extends LocationOrientedSortableSessionOData, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSession
**********************************************/
export interface LocationOrientedSortableSession extends SP.WorkManagement.OM.BaseSession, Base.IBaseResult, LocationOrientedSortableSessionProps, LocationOrientedSortableSessionCollections, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionProps
**********************************************/
export interface LocationOrientedSortableSessionProps {

}

/*********************************************
* LocationOrientedSortableSessionPropMethods
**********************************************/
export interface LocationOrientedSortableSessionPropMethods {

}

/*********************************************
* LocationOrientedSortableSessionCollections
**********************************************/
export interface LocationOrientedSortableSessionCollections extends LocationOrientedSortableSessionPropMethods {

}

/*********************************************
* LocationOrientedSortableSessionOData
**********************************************/
export interface LocationOrientedSortableSessionOData extends Base.IBaseResult, LocationOrientedSortableSessionProps, LocationOrientedSortableSessionMethods {

}

/*********************************************
* LocationOrientedSortableSessionMethods
**********************************************/
export interface LocationOrientedSortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): Base.IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): Base.IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): Base.IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoOData> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	pinTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): Base.IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultOData> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultOData> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): Base.IBaseExecution<boolean>;
}

/*********************************************
* ILocationOrientedUserOrderedSession
**********************************************/
export interface ILocationOrientedUserOrderedSession extends LocationOrientedUserOrderedSessionCollections, LocationOrientedUserOrderedSessionMethods, Base.IBaseQuery<LocationOrientedUserOrderedSession, ILocationOrientedUserOrderedSessionQuery> {

}

/*********************************************
* ILocationOrientedUserOrderedSessionCollection
**********************************************/
export interface ILocationOrientedUserOrderedSessionCollection extends Base.IBaseResults<LocationOrientedUserOrderedSession> {
	done?: (resolve: (value?: Array<LocationOrientedUserOrderedSession>) => void) => void;
}

/*********************************************
* ILocationOrientedUserOrderedSessionQueryCollection
**********************************************/
export interface ILocationOrientedUserOrderedSessionQueryCollection extends Base.IBaseResults<LocationOrientedUserOrderedSessionOData> {
	done?: (resolve: (value?: Array<LocationOrientedUserOrderedSessionOData>) => void) => void;
}

/*********************************************
* ILocationOrientedUserOrderedSessionQuery
**********************************************/
export interface ILocationOrientedUserOrderedSessionQuery extends LocationOrientedUserOrderedSessionOData, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSession
**********************************************/
export interface LocationOrientedUserOrderedSession extends SP.WorkManagement.OM.BaseSession, Base.IBaseResult, LocationOrientedUserOrderedSessionProps, LocationOrientedUserOrderedSessionCollections, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionProps
**********************************************/
export interface LocationOrientedUserOrderedSessionProps {

}

/*********************************************
* LocationOrientedUserOrderedSessionPropMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionPropMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionCollections
**********************************************/
export interface LocationOrientedUserOrderedSessionCollections extends LocationOrientedUserOrderedSessionPropMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionOData
**********************************************/
export interface LocationOrientedUserOrderedSessionOData extends Base.IBaseResult, LocationOrientedUserOrderedSessionProps, LocationOrientedUserOrderedSessionMethods {

}

/*********************************************
* LocationOrientedUserOrderedSessionMethods
**********************************************/
export interface LocationOrientedUserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): Base.IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): Base.IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): Base.IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoOData> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	pinTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): Base.IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultOData> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultOData> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	movePersonalTaskToLocation(taskKey?: number, newLocationKey?: number): Base.IBaseExecution<boolean>;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): Base.IBaseExecution<any>;
}

/*********************************************
* LocationUpdateResult
**********************************************/
export interface LocationUpdateResult {
	ActiveAddedCount?: number;
	AddedCount?: number;
	RemovedCount?: number;
	RootLocationId?: number;
	UpdatedCount?: number;
}

/*********************************************
* LocationUpdateResultCollections
**********************************************/
export interface LocationUpdateResultCollections {

}

/*********************************************
* NameCriterion
**********************************************/
export interface NameCriterion {
	CompareType?: number;
	CompareValue?: string;
}

/*********************************************
* NameCriterionCollections
**********************************************/
export interface NameCriterionCollections {

}

/*********************************************
* INonTaskDataReadResult
**********************************************/
export interface INonTaskDataReadResult extends NonTaskDataReadResultCollections, NonTaskDataReadResultMethods, Base.IBaseQuery<NonTaskDataReadResult, INonTaskDataReadResultQuery> {

}

/*********************************************
* INonTaskDataReadResultCollection
**********************************************/
export interface INonTaskDataReadResultCollection extends Base.IBaseResults<NonTaskDataReadResult> {
	done?: (resolve: (value?: Array<NonTaskDataReadResult>) => void) => void;
}

/*********************************************
* INonTaskDataReadResultQueryCollection
**********************************************/
export interface INonTaskDataReadResultQueryCollection extends Base.IBaseResults<NonTaskDataReadResultOData> {
	done?: (resolve: (value?: Array<NonTaskDataReadResultOData>) => void) => void;
}

/*********************************************
* INonTaskDataReadResultQuery
**********************************************/
export interface INonTaskDataReadResultQuery extends NonTaskDataReadResultOData, NonTaskDataReadResultMethods {

}

/*********************************************
* NonTaskDataReadResult
**********************************************/
export interface NonTaskDataReadResult extends Base.IBaseResult, NonTaskDataReadResultProps, NonTaskDataReadResultCollections, NonTaskDataReadResultMethods {

}

/*********************************************
* NonTaskDataReadResultProps
**********************************************/
export interface NonTaskDataReadResultProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NonTaskDataReadResultPropMethods
**********************************************/
export interface NonTaskDataReadResultPropMethods {
	PersistedProperties(): Base.IBaseExecution<SP.WorkManagement.OM.PersistedProperties> & SP.WorkManagement.OM.PersistedPropertiesCollections;
	RefreshHistory(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	UserSettings(): Base.IBaseExecution<SP.WorkManagement.OM.UserSettings> & SP.WorkManagement.OM.UserSettingsCollections;
}

/*********************************************
* NonTaskDataReadResultCollections
**********************************************/
export interface NonTaskDataReadResultCollections extends NonTaskDataReadResultPropMethods {
	AllLocatons(): Base.IBaseCollection<SP.WorkManagement.OM.Location>;
	AllLocatons(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.Location> & SP.WorkManagement.OM.LocationCollections;
	ScriptExtensions(): Base.IBaseCollection<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	ScriptExtensions(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.DashboardScriptExtensionInfo> & SP.WorkManagement.OM.DashboardScriptExtensionInfoCollections;
}

/*********************************************
* NonTaskDataReadResultOData
**********************************************/
export interface NonTaskDataReadResultOData extends Base.IBaseResult, NonTaskDataReadResultProps, NonTaskDataReadResultMethods {
	AllLocatons: Base.IBaseResults<SP.WorkManagement.OM.Location>;
	PersistedProperties: SP.WorkManagement.OM.PersistedProperties & SP.WorkManagement.OM.PersistedPropertiesCollections;
	RefreshHistory: SP.WorkManagement.OM.RefreshHistory & SP.WorkManagement.OM.RefreshHistoryCollections;
	ScriptExtensions: Base.IBaseResults<SP.WorkManagement.OM.DashboardScriptExtensionInfo>;
	UserSettings: SP.WorkManagement.OM.UserSettings & SP.WorkManagement.OM.UserSettingsCollections;
}

/*********************************************
* NonTaskDataReadResultMethods
**********************************************/
export interface NonTaskDataReadResultMethods {

}

/*********************************************
* PersistedProperties
**********************************************/
export interface PersistedProperties {
	FilteredLocationIds?: { results: Array<number> };
	GroupByProjects?: boolean;
	HasShownMarkAsImportantCallout?: boolean;
	HasShownTaskListTooLongNotification?: boolean;
	QuickLaunchLandingPage?: string;
}

/*********************************************
* PersistedPropertiesCollections
**********************************************/
export interface PersistedPropertiesCollections {

}

/*********************************************
* IRefreshHistory
**********************************************/
export interface IRefreshHistory extends RefreshHistoryCollections, RefreshHistoryMethods, Base.IBaseQuery<RefreshHistory, IRefreshHistoryQuery> {

}

/*********************************************
* IRefreshHistoryCollection
**********************************************/
export interface IRefreshHistoryCollection extends Base.IBaseResults<RefreshHistory> {
	done?: (resolve: (value?: Array<RefreshHistory>) => void) => void;
}

/*********************************************
* IRefreshHistoryQueryCollection
**********************************************/
export interface IRefreshHistoryQueryCollection extends Base.IBaseResults<RefreshHistoryOData> {
	done?: (resolve: (value?: Array<RefreshHistoryOData>) => void) => void;
}

/*********************************************
* IRefreshHistoryQuery
**********************************************/
export interface IRefreshHistoryQuery extends RefreshHistoryOData, RefreshHistoryMethods {

}

/*********************************************
* RefreshHistory
**********************************************/
export interface RefreshHistory extends Base.IBaseResult, RefreshHistoryProps, RefreshHistoryCollections, RefreshHistoryMethods {

}

/*********************************************
* RefreshHistoryProps
**********************************************/
export interface RefreshHistoryProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RefreshHistoryPropMethods
**********************************************/
export interface RefreshHistoryPropMethods {

}

/*********************************************
* RefreshHistoryCollections
**********************************************/
export interface RefreshHistoryCollections extends RefreshHistoryPropMethods {
	Refreshes(): Base.IBaseCollection<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData>;
	Refreshes(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
}

/*********************************************
* RefreshHistoryOData
**********************************************/
export interface RefreshHistoryOData extends Base.IBaseResult, RefreshHistoryProps, RefreshHistoryMethods {
	Refreshes: Base.IBaseResults<SP.WorkManagement.OM.RefreshResult>;
}

/*********************************************
* RefreshHistoryMethods
**********************************************/
export interface RefreshHistoryMethods {

}

/*********************************************
* IRefreshResult
**********************************************/
export interface IRefreshResult extends RefreshResultCollections, RefreshResultMethods, Base.IBaseQuery<RefreshResult, IRefreshResultQuery> {

}

/*********************************************
* IRefreshResultCollection
**********************************************/
export interface IRefreshResultCollection extends Base.IBaseResults<RefreshResult> {
	done?: (resolve: (value?: Array<RefreshResult>) => void) => void;
}

/*********************************************
* IRefreshResultQueryCollection
**********************************************/
export interface IRefreshResultQueryCollection extends Base.IBaseResults<RefreshResultOData> {
	done?: (resolve: (value?: Array<RefreshResultOData>) => void) => void;
}

/*********************************************
* IRefreshResultQuery
**********************************************/
export interface IRefreshResultQuery extends RefreshResultOData, RefreshResultMethods {

}

/*********************************************
* RefreshResult
**********************************************/
export interface RefreshResult extends Base.IBaseResult, RefreshResultProps, RefreshResultCollections, RefreshResultMethods {

}

/*********************************************
* RefreshResultProps
**********************************************/
export interface RefreshResultProps {
	AggregatorRefreshState?: number;
	CorrelationId?: string;
	RefreshFinished?: any;
	RefreshId?: number;
}

/*********************************************
* RefreshResultPropMethods
**********************************************/
export interface RefreshResultPropMethods {

}

/*********************************************
* RefreshResultCollections
**********************************************/
export interface RefreshResultCollections extends RefreshResultPropMethods {
	ProviderStatuses(): Base.IBaseCollection<SP.WorkManagement.OM.ProviderRefreshStatus>;
	ProviderStatuses(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.ProviderRefreshStatus> & SP.WorkManagement.OM.ProviderRefreshStatusCollections;
	TaskChangesByLocation(): Base.IBaseCollection<SP.WorkManagement.OM.LocationUpdateResult>;
	TaskChangesByLocation(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.LocationUpdateResult> & SP.WorkManagement.OM.LocationUpdateResultCollections;
}

/*********************************************
* RefreshResultOData
**********************************************/
export interface RefreshResultOData extends Base.IBaseResult, RefreshResultProps, RefreshResultMethods {
	ProviderStatuses: Base.IBaseResults<SP.WorkManagement.OM.ProviderRefreshStatus>;
	TaskChangesByLocation: Base.IBaseResults<SP.WorkManagement.OM.LocationUpdateResult>;
}

/*********************************************
* RefreshResultMethods
**********************************************/
export interface RefreshResultMethods {

}

/*********************************************
* ProviderRefreshStatus
**********************************************/
export interface ProviderRefreshStatus {
	ProviderKey?: string;
	ProviderLocalizedName?: string;
	RefreshFinished?: any;
	RefreshStarted?: any;
	RootLocationId?: number;
}

/*********************************************
* ProviderRefreshStatusCollections
**********************************************/
export interface ProviderRefreshStatusCollections {

}

/*********************************************
* UserSettings
**********************************************/
export interface UserSettings {
	DaysAfterCurrentDateTimelineEnds?: number;
	DaysATaskIsConsideredNewTask?: number;
	DaysBeforeCurrentDateTimelineStarts?: number;
	ImportantLocationIds?: { results: Array<number> };
	ImportantTasksLimit?: number;
	InactiveMonthsBeforeLocationExpiration?: number;
	LateTasksLimit?: number;
	OldTasksLimit?: number;
	UpcomingTasksLimit?: number;
}

/*********************************************
* UserSettingsCollections
**********************************************/
export interface UserSettingsCollections {

}

/*********************************************
* OrderInfo
**********************************************/
export interface OrderInfo {
	Field?: number;
	IsDescending?: boolean;
}

/*********************************************
* OrderInfoCollections
**********************************************/
export interface OrderInfoCollections {

}

/*********************************************
* ProviderErrorInfo
**********************************************/
export interface ProviderErrorInfo {
	CorrelationId?: string;
	LastSuccessfulRefresh?: any;
	LocalizedName?: string;
}

/*********************************************
* ProviderErrorInfoCollections
**********************************************/
export interface ProviderErrorInfoCollections {

}

/*********************************************
* IRefreshHealthInfo
**********************************************/
export interface IRefreshHealthInfo extends RefreshHealthInfoCollections, RefreshHealthInfoMethods, Base.IBaseQuery<RefreshHealthInfo, IRefreshHealthInfoQuery> {

}

/*********************************************
* IRefreshHealthInfoCollection
**********************************************/
export interface IRefreshHealthInfoCollection extends Base.IBaseResults<RefreshHealthInfo> {
	done?: (resolve: (value?: Array<RefreshHealthInfo>) => void) => void;
}

/*********************************************
* IRefreshHealthInfoQueryCollection
**********************************************/
export interface IRefreshHealthInfoQueryCollection extends Base.IBaseResults<RefreshHealthInfoOData> {
	done?: (resolve: (value?: Array<RefreshHealthInfoOData>) => void) => void;
}

/*********************************************
* IRefreshHealthInfoQuery
**********************************************/
export interface IRefreshHealthInfoQuery extends RefreshHealthInfoOData, RefreshHealthInfoMethods {

}

/*********************************************
* RefreshHealthInfo
**********************************************/
export interface RefreshHealthInfo extends Base.IBaseResult, RefreshHealthInfoProps, RefreshHealthInfoCollections, RefreshHealthInfoMethods {

}

/*********************************************
* RefreshHealthInfoProps
**********************************************/
export interface RefreshHealthInfoProps {
	LatestRefreshTime?: any;
	NewTasks?: number;
	Succeeded?: boolean;
}

/*********************************************
* RefreshHealthInfoPropMethods
**********************************************/
export interface RefreshHealthInfoPropMethods {

}

/*********************************************
* RefreshHealthInfoCollections
**********************************************/
export interface RefreshHealthInfoCollections extends RefreshHealthInfoPropMethods {
	ProviderErrors(): Base.IBaseCollection<SP.WorkManagement.OM.ProviderErrorInfo>;
	ProviderErrors(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.ProviderErrorInfo> & SP.WorkManagement.OM.ProviderErrorInfoCollections;
}

/*********************************************
* RefreshHealthInfoOData
**********************************************/
export interface RefreshHealthInfoOData extends Base.IBaseResult, RefreshHealthInfoProps, RefreshHealthInfoMethods {
	ProviderErrors: Base.IBaseResults<SP.WorkManagement.OM.ProviderErrorInfo>;
}

/*********************************************
* RefreshHealthInfoMethods
**********************************************/
export interface RefreshHealthInfoMethods {

}

/*********************************************
* ISortableSessionManager
**********************************************/
export interface ISortableSessionManager extends SortableSessionManagerCollections, SortableSessionManagerMethods, Base.IBaseQuery<SortableSessionManager, ISortableSessionManagerQuery> {

}

/*********************************************
* ISortableSessionManagerCollection
**********************************************/
export interface ISortableSessionManagerCollection extends Base.IBaseResults<SortableSessionManager> {
	done?: (resolve: (value?: Array<SortableSessionManager>) => void) => void;
}

/*********************************************
* ISortableSessionManagerQueryCollection
**********************************************/
export interface ISortableSessionManagerQueryCollection extends Base.IBaseResults<SortableSessionManagerOData> {
	done?: (resolve: (value?: Array<SortableSessionManagerOData>) => void) => void;
}

/*********************************************
* ISortableSessionManagerQuery
**********************************************/
export interface ISortableSessionManagerQuery extends SortableSessionManagerOData, SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManager
**********************************************/
export interface SortableSessionManager extends Base.IBaseResult, SortableSessionManagerProps, SortableSessionManagerCollections, SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManagerProps
**********************************************/
export interface SortableSessionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableSessionManagerPropMethods
**********************************************/
export interface SortableSessionManagerPropMethods {

}

/*********************************************
* SortableSessionManagerCollections
**********************************************/
export interface SortableSessionManagerCollections extends SortableSessionManagerPropMethods {

}

/*********************************************
* SortableSessionManagerOData
**********************************************/
export interface SortableSessionManagerOData extends Base.IBaseResult, SortableSessionManagerProps, SortableSessionManagerMethods {

}

/*********************************************
* SortableSessionManagerMethods
**********************************************/
export interface SortableSessionManagerMethods {
	createLocationOrientedSession(): Base.IBaseExecution<SP.WorkManagement.OM.LocationOrientedSortableSession>;
	createSession(): Base.IBaseExecution<SP.WorkManagement.OM.SortableSession>;
}

/*********************************************
* ISortableSession
**********************************************/
export interface ISortableSession extends SortableSessionCollections, SortableSessionMethods, Base.IBaseQuery<SortableSession, ISortableSessionQuery> {

}

/*********************************************
* ISortableSessionCollection
**********************************************/
export interface ISortableSessionCollection extends Base.IBaseResults<SortableSession> {
	done?: (resolve: (value?: Array<SortableSession>) => void) => void;
}

/*********************************************
* ISortableSessionQueryCollection
**********************************************/
export interface ISortableSessionQueryCollection extends Base.IBaseResults<SortableSessionOData> {
	done?: (resolve: (value?: Array<SortableSessionOData>) => void) => void;
}

/*********************************************
* ISortableSessionQuery
**********************************************/
export interface ISortableSessionQuery extends SortableSessionOData, SortableSessionMethods {

}

/*********************************************
* SortableSession
**********************************************/
export interface SortableSession extends SP.WorkManagement.OM.BaseSession, Base.IBaseResult, SortableSessionProps, SortableSessionCollections, SortableSessionMethods {

}

/*********************************************
* SortableSessionProps
**********************************************/
export interface SortableSessionProps {

}

/*********************************************
* SortableSessionPropMethods
**********************************************/
export interface SortableSessionPropMethods {

}

/*********************************************
* SortableSessionCollections
**********************************************/
export interface SortableSessionCollections extends SortableSessionPropMethods {

}

/*********************************************
* SortableSessionOData
**********************************************/
export interface SortableSessionOData extends Base.IBaseResult, SortableSessionProps, SortableSessionMethods {

}

/*********************************************
* SortableSessionMethods
**********************************************/
export interface SortableSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): Base.IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): Base.IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): Base.IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoOData> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	pinTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): Base.IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultOData> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultOData> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
}

/*********************************************
* SortableTaskQuery
**********************************************/
export interface SortableTaskQuery {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SortableTaskQueryCollections
**********************************************/
export interface SortableTaskQueryCollections {

}

/*********************************************
* SortableTaskQueryOData
**********************************************/
export interface SortableTaskQueryOData extends Base.IBaseResult, SortableTaskQuery {
	CoreQuery: SP.WorkManagement.OM.TaskQuery & SP.WorkManagement.OM.TaskQueryCollections;
	Order: SP.WorkManagement.OM.OrderInfo & SP.WorkManagement.OM.OrderInfoCollections;
}

/*********************************************
* TaskQuery
**********************************************/
export interface TaskQuery {
	KeywordFilter?: string;
	LastQueryTime?: any;
	PinnedFilter?: number;
}

/*********************************************
* TaskQueryCollections
**********************************************/
export interface TaskQueryCollections {

}

/*********************************************
* TaskQueryOData
**********************************************/
export interface TaskQueryOData extends Base.IBaseResult, TaskQuery {
	CustomAttributeFilter: SP.WorkManagement.OM.CustomAttributeFilter & SP.WorkManagement.OM.CustomAttributeFilterCollections;
	FieldFilter: SP.WorkManagement.OM.TaskFilter & SP.WorkManagement.OM.TaskFilterCollections;
	LastModifiedDateRangeFilter: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
	LocationFilter: SP.WorkManagement.OM.LocationFilter & SP.WorkManagement.OM.LocationFilterCollections;
}

/*********************************************
* TaskFilter
**********************************************/
export interface TaskFilter {
	CriterionConcatType?: number;
	IdsToFilterBy?: { results: Array<number> };
}

/*********************************************
* TaskFilterCollections
**********************************************/
export interface TaskFilterCollections {

}

/*********************************************
* TaskFilterOData
**********************************************/
export interface TaskFilterOData extends Base.IBaseResult, TaskFilter {
	CompletedCriterion: SP.WorkManagement.OM.BooleanCriterion & SP.WorkManagement.OM.BooleanCriterionCollections;
	DueDateRangeCriterion: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
	IsNewCriterion: SP.WorkManagement.OM.BooleanCriterion & SP.WorkManagement.OM.BooleanCriterionCollections;
	NameCriterion: SP.WorkManagement.OM.NameCriterion & SP.WorkManagement.OM.NameCriterionCollections;
	StartDateRangeCriterion: SP.WorkManagement.OM.DateRangeCriterion & SP.WorkManagement.OM.DateRangeCriterionCollections;
}

/*********************************************
* ITaskQueryByLocationResult
**********************************************/
export interface ITaskQueryByLocationResult extends TaskQueryByLocationResultCollections, TaskQueryByLocationResultMethods, Base.IBaseQuery<TaskQueryByLocationResult, ITaskQueryByLocationResultQuery> {

}

/*********************************************
* ITaskQueryByLocationResultCollection
**********************************************/
export interface ITaskQueryByLocationResultCollection extends Base.IBaseResults<TaskQueryByLocationResult> {
	done?: (resolve: (value?: Array<TaskQueryByLocationResult>) => void) => void;
}

/*********************************************
* ITaskQueryByLocationResultQueryCollection
**********************************************/
export interface ITaskQueryByLocationResultQueryCollection extends Base.IBaseResults<TaskQueryByLocationResultOData> {
	done?: (resolve: (value?: Array<TaskQueryByLocationResultOData>) => void) => void;
}

/*********************************************
* ITaskQueryByLocationResultQuery
**********************************************/
export interface ITaskQueryByLocationResultQuery extends TaskQueryByLocationResultOData, TaskQueryByLocationResultMethods {

}

/*********************************************
* TaskQueryByLocationResult
**********************************************/
export interface TaskQueryByLocationResult extends Base.IBaseResult, TaskQueryByLocationResultProps, TaskQueryByLocationResultCollections, TaskQueryByLocationResultMethods {

}

/*********************************************
* TaskQueryByLocationResultProps
**********************************************/
export interface TaskQueryByLocationResultProps {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryByLocationResultPropMethods
**********************************************/
export interface TaskQueryByLocationResultPropMethods {

}

/*********************************************
* TaskQueryByLocationResultCollections
**********************************************/
export interface TaskQueryByLocationResultCollections extends TaskQueryByLocationResultPropMethods {
	Results(): Base.IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.Task> & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* TaskQueryByLocationResultOData
**********************************************/
export interface TaskQueryByLocationResultOData extends Base.IBaseResult, TaskQueryByLocationResultProps, TaskQueryByLocationResultMethods {
	Results: Base.IBaseResults<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryByLocationResultMethods
**********************************************/
export interface TaskQueryByLocationResultMethods {

}

/*********************************************
* ITaskQueryResult
**********************************************/
export interface ITaskQueryResult extends TaskQueryResultCollections, TaskQueryResultMethods, Base.IBaseQuery<TaskQueryResult, ITaskQueryResultQuery> {

}

/*********************************************
* ITaskQueryResultCollection
**********************************************/
export interface ITaskQueryResultCollection extends Base.IBaseResults<TaskQueryResult> {
	done?: (resolve: (value?: Array<TaskQueryResult>) => void) => void;
}

/*********************************************
* ITaskQueryResultQueryCollection
**********************************************/
export interface ITaskQueryResultQueryCollection extends Base.IBaseResults<TaskQueryResultOData> {
	done?: (resolve: (value?: Array<TaskQueryResultOData>) => void) => void;
}

/*********************************************
* ITaskQueryResultQuery
**********************************************/
export interface ITaskQueryResultQuery extends TaskQueryResultOData, TaskQueryResultMethods {

}

/*********************************************
* TaskQueryResult
**********************************************/
export interface TaskQueryResult extends Base.IBaseResult, TaskQueryResultProps, TaskQueryResultCollections, TaskQueryResultMethods {

}

/*********************************************
* TaskQueryResultProps
**********************************************/
export interface TaskQueryResultProps {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskQueryResultPropMethods
**********************************************/
export interface TaskQueryResultPropMethods {

}

/*********************************************
* TaskQueryResultCollections
**********************************************/
export interface TaskQueryResultCollections extends TaskQueryResultPropMethods {
	Results(): Base.IBaseCollection<SP.WorkManagement.OM.Task>;
	Results(id: string | number): Base.IBaseQuery<SP.WorkManagement.OM.Task> & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* TaskQueryResultOData
**********************************************/
export interface TaskQueryResultOData extends Base.IBaseResult, TaskQueryResultProps, TaskQueryResultMethods {
	Results: Base.IBaseResults<SP.WorkManagement.OM.Task>;
}

/*********************************************
* TaskQueryResultMethods
**********************************************/
export interface TaskQueryResultMethods {

}

/*********************************************
* TaskRefreshResult
**********************************************/
export interface TaskRefreshResult {
	ErrorCorrelationId?: string;
	RefreshState?: number;
}

/*********************************************
* TaskRefreshResultCollections
**********************************************/
export interface TaskRefreshResultCollections {

}

/*********************************************
* TaskRefreshResultOData
**********************************************/
export interface TaskRefreshResultOData extends Base.IBaseResult, TaskRefreshResult {
	Result: SP.WorkManagement.OM.Task & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* TaskWriteResult
**********************************************/
export interface TaskWriteResult {
	Error?: number;
	ErrorMessage?: string;
}

/*********************************************
* TaskWriteResultCollections
**********************************************/
export interface TaskWriteResultCollections {

}

/*********************************************
* TaskWriteResultOData
**********************************************/
export interface TaskWriteResultOData extends Base.IBaseResult, TaskWriteResult {
	Result: SP.WorkManagement.OM.Task & SP.WorkManagement.OM.TaskCollections;
}

/*********************************************
* IUserOrderedSessionManager
**********************************************/
export interface IUserOrderedSessionManager extends UserOrderedSessionManagerCollections, UserOrderedSessionManagerMethods, Base.IBaseQuery<UserOrderedSessionManager, IUserOrderedSessionManagerQuery> {

}

/*********************************************
* IUserOrderedSessionManagerCollection
**********************************************/
export interface IUserOrderedSessionManagerCollection extends Base.IBaseResults<UserOrderedSessionManager> {
	done?: (resolve: (value?: Array<UserOrderedSessionManager>) => void) => void;
}

/*********************************************
* IUserOrderedSessionManagerQueryCollection
**********************************************/
export interface IUserOrderedSessionManagerQueryCollection extends Base.IBaseResults<UserOrderedSessionManagerOData> {
	done?: (resolve: (value?: Array<UserOrderedSessionManagerOData>) => void) => void;
}

/*********************************************
* IUserOrderedSessionManagerQuery
**********************************************/
export interface IUserOrderedSessionManagerQuery extends UserOrderedSessionManagerOData, UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManager
**********************************************/
export interface UserOrderedSessionManager extends Base.IBaseResult, UserOrderedSessionManagerProps, UserOrderedSessionManagerCollections, UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManagerProps
**********************************************/
export interface UserOrderedSessionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserOrderedSessionManagerPropMethods
**********************************************/
export interface UserOrderedSessionManagerPropMethods {

}

/*********************************************
* UserOrderedSessionManagerCollections
**********************************************/
export interface UserOrderedSessionManagerCollections extends UserOrderedSessionManagerPropMethods {

}

/*********************************************
* UserOrderedSessionManagerOData
**********************************************/
export interface UserOrderedSessionManagerOData extends Base.IBaseResult, UserOrderedSessionManagerProps, UserOrderedSessionManagerMethods {

}

/*********************************************
* UserOrderedSessionManagerMethods
**********************************************/
export interface UserOrderedSessionManagerMethods {
	createLocationOrientedSession(): Base.IBaseExecution<SP.WorkManagement.OM.LocationOrientedUserOrderedSession>;
	createSession(): Base.IBaseExecution<SP.WorkManagement.OM.UserOrderedSession>;
}

/*********************************************
* IUserOrderedSession
**********************************************/
export interface IUserOrderedSession extends UserOrderedSessionCollections, UserOrderedSessionMethods, Base.IBaseQuery<UserOrderedSession, IUserOrderedSessionQuery> {

}

/*********************************************
* IUserOrderedSessionCollection
**********************************************/
export interface IUserOrderedSessionCollection extends Base.IBaseResults<UserOrderedSession> {
	done?: (resolve: (value?: Array<UserOrderedSession>) => void) => void;
}

/*********************************************
* IUserOrderedSessionQueryCollection
**********************************************/
export interface IUserOrderedSessionQueryCollection extends Base.IBaseResults<UserOrderedSessionOData> {
	done?: (resolve: (value?: Array<UserOrderedSessionOData>) => void) => void;
}

/*********************************************
* IUserOrderedSessionQuery
**********************************************/
export interface IUserOrderedSessionQuery extends UserOrderedSessionOData, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSession
**********************************************/
export interface UserOrderedSession extends SP.WorkManagement.OM.BaseSession, Base.IBaseResult, UserOrderedSessionProps, UserOrderedSessionCollections, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionProps
**********************************************/
export interface UserOrderedSessionProps {

}

/*********************************************
* UserOrderedSessionPropMethods
**********************************************/
export interface UserOrderedSessionPropMethods {

}

/*********************************************
* UserOrderedSessionCollections
**********************************************/
export interface UserOrderedSessionCollections extends UserOrderedSessionPropMethods {

}

/*********************************************
* UserOrderedSessionOData
**********************************************/
export interface UserOrderedSessionOData extends Base.IBaseResult, UserOrderedSessionProps, UserOrderedSessionMethods {

}

/*********************************************
* UserOrderedSessionMethods
**********************************************/
export interface UserOrderedSessionMethods {
	addAttributeToTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	beginCacheRefresh(): Base.IBaseExecution<SP.WorkManagement.OM.CreateRefreshJobResult>;
	beginExchangeSync(): Base.IBaseExecution<boolean>;
	createPersonalTaskAndPromoteToProviderTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	createTask(taskName?: string, description?: string, localizedStartDate?: string, localizedDueDate?: string, completed?: boolean, pinned?: boolean, locationKey?: number, editUrl?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	deleteTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	getCalloutInfo(taskKey?: number): Base.IBaseExecution<SP.WorkManagement.OM.CalloutInfo>;
	getRefreshHealthInfo(): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHealthInfo, SP.WorkManagement.OM.RefreshHealthInfoOData> & SP.WorkManagement.OM.RefreshHealthInfoCollections;
	getRefreshHistory(since?: any): Base.IBaseQuery<SP.WorkManagement.OM.RefreshHistory, SP.WorkManagement.OM.RefreshHistoryOData> & SP.WorkManagement.OM.RefreshHistoryCollections;
	getRefreshStatus(refreshId?: number): Base.IBaseQuery<SP.WorkManagement.OM.RefreshResult, SP.WorkManagement.OM.RefreshResultOData> & SP.WorkManagement.OM.RefreshResultCollections;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	pinTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	promotePersonalTaskToProviderTaskInLocation(taskKey?: number, locationId?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	readAllNonTaskData(): Base.IBaseQuery<SP.WorkManagement.OM.NonTaskDataReadResult, SP.WorkManagement.OM.NonTaskDataReadResultOData> & SP.WorkManagement.OM.NonTaskDataReadResultCollections;
	refreshSingleTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskRefreshResult, SP.WorkManagement.OM.TaskRefreshResultOData> & SP.WorkManagement.OM.TaskRefreshResultCollections;
	removeAttributeFromTask(taskKey?: number, attribute?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	removePinOnTask(taskKey?: number): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	updateTaskWithLocalizedValue(taskKey?: number, field?: number, value?: string): Base.IBaseQuery<SP.WorkManagement.OM.TaskWriteResult, SP.WorkManagement.OM.TaskWriteResultOData> & SP.WorkManagement.OM.TaskWriteResultCollections;
	reorderTask(taskKey?: number, newAfterTaskKey?: number): Base.IBaseExecution<any>;
}

/*********************************************
* IUserSettingsManager
**********************************************/
export interface IUserSettingsManager extends UserSettingsManagerCollections, UserSettingsManagerMethods, Base.IBaseQuery<UserSettingsManager, IUserSettingsManagerQuery> {

}

/*********************************************
* IUserSettingsManagerCollection
**********************************************/
export interface IUserSettingsManagerCollection extends Base.IBaseResults<UserSettingsManager> {
	done?: (resolve: (value?: Array<UserSettingsManager>) => void) => void;
}

/*********************************************
* IUserSettingsManagerQueryCollection
**********************************************/
export interface IUserSettingsManagerQueryCollection extends Base.IBaseResults<UserSettingsManagerOData> {
	done?: (resolve: (value?: Array<UserSettingsManagerOData>) => void) => void;
}

/*********************************************
* IUserSettingsManagerQuery
**********************************************/
export interface IUserSettingsManagerQuery extends UserSettingsManagerOData, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManager
**********************************************/
export interface UserSettingsManager extends Base.IBaseResult, UserSettingsManagerProps, UserSettingsManagerCollections, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManagerProps
**********************************************/
export interface UserSettingsManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSettingsManagerPropMethods
**********************************************/
export interface UserSettingsManagerPropMethods {

}

/*********************************************
* UserSettingsManagerCollections
**********************************************/
export interface UserSettingsManagerCollections extends UserSettingsManagerPropMethods {

}

/*********************************************
* UserSettingsManagerOData
**********************************************/
export interface UserSettingsManagerOData extends Base.IBaseResult, UserSettingsManagerProps, UserSettingsManagerMethods {

}

/*********************************************
* UserSettingsManagerMethods
**********************************************/
export interface UserSettingsManagerMethods {
	getAllLocations(): Base.IBaseCollection<SP.WorkManagement.OM.Location>;
	getExchangeSyncInfo(): Base.IBaseExecution<SP.WorkManagement.OM.ExchangeUserSyncState>;
	getImportantLocations(): Base.IBaseCollection<SP.WorkManagement.OM.Location>;
	getLocations(locationsId?: Array<number>): Base.IBaseCollection<SP.WorkManagement.OM.Location>;
	getPersistedProperties(): Base.IBaseExecution<SP.WorkManagement.OM.PersistedProperties>;
	getUserSettings(): Base.IBaseExecution<SP.WorkManagement.OM.UserSettings>;
	isExchangeJobPending(): Base.IBaseExecution<boolean>;
	optIntoExchangeSync(): Base.IBaseExecution<number>;
	optOutOfExchangeSync(): Base.IBaseExecution<boolean>;
}

/*********************************************
* ViewSelectionInfo
**********************************************/
export interface ViewSelectionInfo {
	Id?: number;
	Image?: string;
	Name?: string;
}

/*********************************************
* ViewSelectionInfoCollections
**********************************************/
export interface ViewSelectionInfoCollections {

}
