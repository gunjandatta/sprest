import { Base } from "../";
import { PS } from "../";
import { SP } from "../";

/*********************************************
* EntityType
**********************************************/
export interface EntityType {
	Name?: string;
	ID?: any;
}

/*********************************************
* EntityTypeCollections
**********************************************/
export interface EntityTypeCollections {

}

/*********************************************
* LookupTables
**********************************************/
export interface LookupTables {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LookupTablesCollections
**********************************************/
export interface LookupTablesCollections {

}

/*********************************************
* IAssignment
**********************************************/
export interface IAssignment extends AssignmentCollections, AssignmentMethods, Base.IBaseQuery<Assignment, IAssignmentQuery> {

}

/*********************************************
* IAssignmentCollection
**********************************************/
export interface IAssignmentCollection extends Base.IBaseResults<Assignment> {
	done?: (resolve: (value?: Array<Assignment>) => void) => void;
}

/*********************************************
* IAssignmentQueryCollection
**********************************************/
export interface IAssignmentQueryCollection extends Base.IBaseResults<AssignmentOData> {
	done?: (resolve: (value?: Array<AssignmentOData>) => void) => void;
}

/*********************************************
* IAssignmentQuery
**********************************************/
export interface IAssignmentQuery extends AssignmentOData, AssignmentMethods {

}

/*********************************************
* Assignment
**********************************************/
export interface Assignment extends Base.IBaseResult, AssignmentProps, AssignmentCollections, AssignmentMethods {

}

/*********************************************
* AssignmentProps
**********************************************/
export interface AssignmentProps {
	ActualCostWorkPerformed?: number;
	ActualOvertimeCost?: number;
	BaselineCost?: number;
	BaselineCostPerUse?: number;
	BaselineFinish?: any;
	BaselineStart?: any;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudgetedCostWorkPerformed?: number;
	BudgetedCostWorkScheduled?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	Created?: any;
	CurrentCostVariance?: number;
	Finish?: any;
	FinishVariance?: string;
	FinishVarianceMilliseconds?: number;
	FinishVarianceTimeSpan?: any;
	Id?: any;
	IsConfirmed?: boolean;
	IsOverAllocated?: boolean;
	IsPublished?: boolean;
	IsResponsePending?: boolean;
	IsUpdateNeeded?: boolean;
	LevelingDelay?: string;
	LevelingDelayMilliseconds?: number;
	LevelingDelayTimeSpan?: any;
	Modified?: any;
	Notes?: string;
	OvertimeCost?: number;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	Resume?: any;
	ScheduleCostVariance?: number;
	Start?: any;
	StartVariance?: string;
	StartVarianceMilliseconds?: number;
	StartVarianceTimeSpan?: any;
	Stop?: any;
	WorkContourType?: number;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* AssignmentPropMethods
**********************************************/
export interface AssignmentPropMethods {

}

/*********************************************
* AssignmentCollections
**********************************************/
export interface AssignmentCollections extends AssignmentPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* AssignmentOData
**********************************************/
export interface AssignmentOData extends Base.IBaseResult, AssignmentProps, AssignmentMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
}

/*********************************************
* AssignmentMethods
**********************************************/
export interface AssignmentMethods {

}

/*********************************************
* ICustomField
**********************************************/
export interface ICustomField extends CustomFieldCollections, CustomFieldMethods, Base.IBaseQuery<CustomField, ICustomFieldQuery> {

}

/*********************************************
* ICustomFieldCollection
**********************************************/
export interface ICustomFieldCollection extends Base.IBaseResults<CustomField>, CustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<CustomField>) => void) => void;
}

/*********************************************
* ICustomFieldQueryCollection
**********************************************/
export interface ICustomFieldQueryCollection extends Base.IBaseResults<CustomFieldOData>, CustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<CustomFieldOData>) => void) => void;
}

/*********************************************
* ICustomFieldQuery
**********************************************/
export interface ICustomFieldQuery extends CustomFieldOData, CustomFieldMethods {

}

/*********************************************
* CustomField
**********************************************/
export interface CustomField extends Base.IBaseResult, CustomFieldProps, CustomFieldCollections, CustomFieldMethods {

}

/*********************************************
* CustomFieldProps
**********************************************/
export interface CustomFieldProps {
	AppAlternateId?: any;
	DepartmentId?: any;
	Description?: string;
	EntityTypeId?: any;
	FieldType?: number;
	Formula?: string;
	GraphicalIndicatorNonSummary?: string;
	GraphicalIndicatorProjectSummary?: string;
	GraphicalIndicatorSummary?: string;
	Id?: any;
	InternalName?: string;
	IsEditableInVisibility?: boolean;
	IsLeafOnly?: boolean;
	IsMultilineText?: boolean;
	IsRequired?: boolean;
	IsWorkflowControlled?: boolean;
	LookupAllowMultiSelect?: boolean;
	LookupDefaultValue?: any;
	LookupTableId?: any;
	Name?: string;
	RollsDownToAssignments?: boolean;
	RollupType?: number;
	ShowToolTip?: boolean;
	UseFieldForMatching?: boolean;
}

/*********************************************
* CustomFieldPropMethods
**********************************************/
export interface CustomFieldPropMethods {
	EntityType(): Base.IBaseExecution<PS.EntityType> & PS.EntityTypeCollections;
	LookupTable(): Base.IBaseQuery<PS.LookupTable, PS.LookupTableOData> & PS.LookupTableCollections & PS.LookupTableMethods;
}

/*********************************************
* CustomFieldCollections
**********************************************/
export interface CustomFieldCollections extends CustomFieldPropMethods {
	LookupEntries(): Base.IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* CustomFieldCollectionMethods
**********************************************/
export interface CustomFieldCollectionMethods {
	add(parameters?: PS.CustomFieldCreationInformation): Base.IBaseExecution<PS.CustomField>;
	getByAppAlternateId(objectId?: string): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	getByGuid(uid?: any): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* CustomFieldOData
**********************************************/
export interface CustomFieldOData extends Base.IBaseResult, CustomFieldProps, CustomFieldMethods {
	EntityType: PS.EntityType & PS.EntityTypeCollections;
	LookupEntries: Base.IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupTable: PS.LookupTable & PS.LookupTableCollections & PS.LookupTableCollectionMethods;
}

/*********************************************
* CustomFieldMethods
**********************************************/
export interface CustomFieldMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupEntry
**********************************************/
export interface ILookupEntry extends LookupEntryCollections, LookupEntryMethods, Base.IBaseQuery<LookupEntry, ILookupEntryQuery> {

}

/*********************************************
* ILookupEntryCollection
**********************************************/
export interface ILookupEntryCollection extends Base.IBaseResults<LookupEntry>, LookupEntryCollectionMethods {
	done?: (resolve: (value?: Array<LookupEntry>) => void) => void;
}

/*********************************************
* ILookupEntryQueryCollection
**********************************************/
export interface ILookupEntryQueryCollection extends Base.IBaseResults<LookupEntryOData>, LookupEntryCollectionMethods {
	done?: (resolve: (value?: Array<LookupEntryOData>) => void) => void;
}

/*********************************************
* ILookupEntryQuery
**********************************************/
export interface ILookupEntryQuery extends LookupEntryOData, LookupEntryMethods {

}

/*********************************************
* LookupEntry
**********************************************/
export interface LookupEntry extends Base.IBaseResult, LookupEntryProps, LookupEntryCollections, LookupEntryMethods {

}

/*********************************************
* LookupEntryProps
**********************************************/
export interface LookupEntryProps {
	AppAlternateId?: any;
	Description?: string;
	FullValue?: string;
	Id?: any;
	InternalName?: string;
	SortIndex?: number;
}

/*********************************************
* LookupEntryPropMethods
**********************************************/
export interface LookupEntryPropMethods {

}

/*********************************************
* LookupEntryCollections
**********************************************/
export interface LookupEntryCollections extends LookupEntryPropMethods {

}

/*********************************************
* LookupEntryCollectionMethods
**********************************************/
export interface LookupEntryCollectionMethods {
	add(parameters?: PS.LookupEntryCreationInformation): Base.IBaseExecution<PS.LookupEntry>;
	getByAppAlternateId(objectId?: string): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
	getByGuid(uid?: any): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* LookupEntryOData
**********************************************/
export interface LookupEntryOData extends Base.IBaseResult, LookupEntryProps, LookupEntryMethods {

}

/*********************************************
* LookupEntryMethods
**********************************************/
export interface LookupEntryMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupTable
**********************************************/
export interface ILookupTable extends LookupTableCollections, LookupTableMethods, Base.IBaseQuery<LookupTable, ILookupTableQuery> {

}

/*********************************************
* ILookupTableCollection
**********************************************/
export interface ILookupTableCollection extends Base.IBaseResults<LookupTable>, LookupTableCollectionMethods {
	done?: (resolve: (value?: Array<LookupTable>) => void) => void;
}

/*********************************************
* ILookupTableQueryCollection
**********************************************/
export interface ILookupTableQueryCollection extends Base.IBaseResults<LookupTableOData>, LookupTableCollectionMethods {
	done?: (resolve: (value?: Array<LookupTableOData>) => void) => void;
}

/*********************************************
* ILookupTableQuery
**********************************************/
export interface ILookupTableQuery extends LookupTableOData, LookupTableMethods {

}

/*********************************************
* LookupTable
**********************************************/
export interface LookupTable extends Base.IBaseResult, LookupTableProps, LookupTableCollections, LookupTableMethods {

}

/*********************************************
* LookupTableProps
**********************************************/
export interface LookupTableProps {
	AppAlternateId?: any;
	FieldType?: number;
	Id?: any;
	Masks?: { results: Array<PS.LookupMask> };
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* LookupTablePropMethods
**********************************************/
export interface LookupTablePropMethods {

}

/*********************************************
* LookupTableCollections
**********************************************/
export interface LookupTableCollections extends LookupTablePropMethods {
	Entries(): Base.IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	Entries(id: string | number): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* LookupTableCollectionMethods
**********************************************/
export interface LookupTableCollectionMethods {
	add(parameters?: PS.LookupTableCreationInformation): Base.IBaseExecution<PS.LookupTable>;
	getByAppAlternateId(objectId?: string): Base.IBaseQuery<PS.LookupTable, PS.LookupTableOData> & PS.LookupTableCollections & PS.LookupTableMethods;
	getByGuid(uid?: any): Base.IBaseQuery<PS.LookupTable, PS.LookupTableOData> & PS.LookupTableCollections & PS.LookupTableMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.LookupTable, PS.LookupTableOData> & PS.LookupTableCollections & PS.LookupTableMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* LookupTableOData
**********************************************/
export interface LookupTableOData extends Base.IBaseResult, LookupTableProps, LookupTableMethods {
	Entries: Base.IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
}

/*********************************************
* LookupTableMethods
**********************************************/
export interface LookupTableMethods {
	addMask(mask?: PS.LookupMask): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	updateMask(mask?: PS.LookupMask, level?: number): Base.IBaseExecution<any>;
}

/*********************************************
* ICalendarException
**********************************************/
export interface ICalendarException extends CalendarExceptionCollections, CalendarExceptionMethods, Base.IBaseQuery<CalendarException, ICalendarExceptionQuery> {

}

/*********************************************
* ICalendarExceptionCollection
**********************************************/
export interface ICalendarExceptionCollection extends Base.IBaseResults<CalendarException>, CalendarExceptionCollectionMethods {
	done?: (resolve: (value?: Array<CalendarException>) => void) => void;
}

/*********************************************
* ICalendarExceptionQueryCollection
**********************************************/
export interface ICalendarExceptionQueryCollection extends Base.IBaseResults<CalendarExceptionOData>, CalendarExceptionCollectionMethods {
	done?: (resolve: (value?: Array<CalendarExceptionOData>) => void) => void;
}

/*********************************************
* ICalendarExceptionQuery
**********************************************/
export interface ICalendarExceptionQuery extends CalendarExceptionOData, CalendarExceptionMethods {

}

/*********************************************
* CalendarException
**********************************************/
export interface CalendarException extends Base.IBaseResult, CalendarExceptionProps, CalendarExceptionCollections, CalendarExceptionMethods {

}

/*********************************************
* CalendarExceptionProps
**********************************************/
export interface CalendarExceptionProps {
	Finish?: any;
	Id?: number;
	Name?: string;
	RecurrenceDays?: number;
	RecurrenceFrequency?: number;
	RecurrenceMonth?: number;
	RecurrenceMonthDay?: number;
	RecurrenceType?: number;
	RecurrenceWeek?: number;
	Shift1Finish?: number;
	Shift1Start?: number;
	Shift2Finish?: number;
	Shift2Start?: number;
	Shift3Finish?: number;
	Shift3Start?: number;
	Shift4Finish?: number;
	Shift4Start?: number;
	Shift5Finish?: number;
	Shift5Start?: number;
	Start?: any;
}

/*********************************************
* CalendarExceptionPropMethods
**********************************************/
export interface CalendarExceptionPropMethods {
	Calendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
}

/*********************************************
* CalendarExceptionCollections
**********************************************/
export interface CalendarExceptionCollections extends CalendarExceptionPropMethods {

}

/*********************************************
* CalendarExceptionCollectionMethods
**********************************************/
export interface CalendarExceptionCollectionMethods {
	add(parameters?: PS.CalendarExceptionCreationInformation): Base.IBaseExecution<PS.CalendarException>;
	getById(id?: number): Base.IBaseQuery<PS.CalendarException, PS.CalendarExceptionOData> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* CalendarExceptionOData
**********************************************/
export interface CalendarExceptionOData extends Base.IBaseResult, CalendarExceptionProps, CalendarExceptionMethods {
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
}

/*********************************************
* CalendarExceptionMethods
**********************************************/
export interface CalendarExceptionMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ICalendar
**********************************************/
export interface ICalendar extends CalendarCollections, CalendarMethods, Base.IBaseQuery<Calendar, ICalendarQuery> {

}

/*********************************************
* ICalendarCollection
**********************************************/
export interface ICalendarCollection extends Base.IBaseResults<Calendar>, CalendarCollectionMethods {
	done?: (resolve: (value?: Array<Calendar>) => void) => void;
}

/*********************************************
* ICalendarQueryCollection
**********************************************/
export interface ICalendarQueryCollection extends Base.IBaseResults<CalendarOData>, CalendarCollectionMethods {
	done?: (resolve: (value?: Array<CalendarOData>) => void) => void;
}

/*********************************************
* ICalendarQuery
**********************************************/
export interface ICalendarQuery extends CalendarOData, CalendarMethods {

}

/*********************************************
* Calendar
**********************************************/
export interface Calendar extends Base.IBaseResult, CalendarProps, CalendarCollections, CalendarMethods {

}

/*********************************************
* CalendarProps
**********************************************/
export interface CalendarProps {
	Created?: any;
	Id?: any;
	IsStandardCalendar?: boolean;
	Modified?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarPropMethods
**********************************************/
export interface CalendarPropMethods {

}

/*********************************************
* CalendarCollections
**********************************************/
export interface CalendarCollections extends CalendarPropMethods {
	BaseCalendarExceptions(): Base.IBaseCollection<PS.CalendarException, PS.CalendarExceptionOData, Base.IBaseExecution & PS.CalendarExceptionCollectionMethods> & Base.IBaseExecution & PS.CalendarExceptionCollectionMethods;
	BaseCalendarExceptions(id: string | number): Base.IBaseQuery<PS.CalendarException, PS.CalendarExceptionOData> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* CalendarCollectionMethods
**********************************************/
export interface CalendarCollectionMethods {
	add(parameters?: PS.CalendarCreationInformation): Base.IBaseExecution<PS.Calendar>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* CalendarOData
**********************************************/
export interface CalendarOData extends Base.IBaseResult, CalendarProps, CalendarMethods {
	BaseCalendarExceptions: Base.IBaseResults<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
}

/*********************************************
* CalendarMethods
**********************************************/
export interface CalendarMethods {
	copyTo(name?: string): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IBaseCalendarException
**********************************************/
export interface IBaseCalendarException extends BaseCalendarExceptionCollections, BaseCalendarExceptionMethods, Base.IBaseQuery<BaseCalendarException, IBaseCalendarExceptionQuery> {

}

/*********************************************
* IBaseCalendarExceptionCollection
**********************************************/
export interface IBaseCalendarExceptionCollection extends Base.IBaseResults<BaseCalendarException> {
	done?: (resolve: (value?: Array<BaseCalendarException>) => void) => void;
}

/*********************************************
* IBaseCalendarExceptionQueryCollection
**********************************************/
export interface IBaseCalendarExceptionQueryCollection extends Base.IBaseResults<BaseCalendarExceptionOData> {
	done?: (resolve: (value?: Array<BaseCalendarExceptionOData>) => void) => void;
}

/*********************************************
* IBaseCalendarExceptionQuery
**********************************************/
export interface IBaseCalendarExceptionQuery extends BaseCalendarExceptionOData, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarException
**********************************************/
export interface BaseCalendarException extends PS.CalendarException, Base.IBaseResult, BaseCalendarExceptionProps, BaseCalendarExceptionCollections, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionProps
**********************************************/
export interface BaseCalendarExceptionProps {

}

/*********************************************
* BaseCalendarExceptionPropMethods
**********************************************/
export interface BaseCalendarExceptionPropMethods {

}

/*********************************************
* BaseCalendarExceptionCollections
**********************************************/
export interface BaseCalendarExceptionCollections extends BaseCalendarExceptionPropMethods {

}

/*********************************************
* BaseCalendarExceptionOData
**********************************************/
export interface BaseCalendarExceptionOData extends Base.IBaseResult, BaseCalendarExceptionProps, BaseCalendarExceptionMethods {

}

/*********************************************
* BaseCalendarExceptionMethods
**********************************************/
export interface BaseCalendarExceptionMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* DeletedPublishedAssignment
**********************************************/
export interface DeletedPublishedAssignment {
	DeletedDate?: any;
	Id?: any;
	ProjectId?: any;
}

/*********************************************
* DeletedPublishedAssignmentCollections
**********************************************/
export interface DeletedPublishedAssignmentCollections {

}

/*********************************************
* DraftAssignment
**********************************************/
export interface DraftAssignment {
	ActualCost?: number;
	ActualFinish?: any;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetedCost?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostRateTable?: number;
	DefaultBookingType?: number;
	Delay?: string;
	DelayMilliseconds?: number;
	DelayTimeSpan?: any;
	IsLockedByManager?: boolean;
	IsWorkResource?: boolean;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ResourceCapacity?: number;
	ResourceId?: any;
	TaskId?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* DraftAssignmentCollections
**********************************************/
export interface DraftAssignmentCollections extends DraftAssignmentCollectionMethods {

}

/*********************************************
* DraftAssignmentOData
**********************************************/
export interface DraftAssignmentOData extends Base.IBaseResult, DraftAssignment {
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Parent: PS.DraftAssignment & PS.DraftAssignmentCollections & PS.DraftAssignmentCollectionMethods;
	Resource: PS.DraftProjectResource & PS.DraftProjectResourceCollections & PS.DraftProjectResourceCollectionMethods;
	Task: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
}

/*********************************************
* DraftAssignmentCollectionMethods
**********************************************/
export interface DraftAssignmentCollectionMethods {
	add(parameters?: PS.AssignmentCreationInformation): Base.IBaseExecution<PS.DraftAssignment>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentOData> & PS.DraftAssignmentCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentOData> & PS.DraftAssignmentCollections;
}

/*********************************************
* IProjectResource
**********************************************/
export interface IProjectResource extends ProjectResourceCollections, ProjectResourceMethods, Base.IBaseQuery<ProjectResource, IProjectResourceQuery> {

}

/*********************************************
* IProjectResourceCollection
**********************************************/
export interface IProjectResourceCollection extends Base.IBaseResults<ProjectResource> {
	done?: (resolve: (value?: Array<ProjectResource>) => void) => void;
}

/*********************************************
* IProjectResourceQueryCollection
**********************************************/
export interface IProjectResourceQueryCollection extends Base.IBaseResults<ProjectResourceOData> {
	done?: (resolve: (value?: Array<ProjectResourceOData>) => void) => void;
}

/*********************************************
* IProjectResourceQuery
**********************************************/
export interface IProjectResourceQuery extends ProjectResourceOData, ProjectResourceMethods {

}

/*********************************************
* ProjectResource
**********************************************/
export interface ProjectResource extends Base.IBaseResult, ProjectResourceProps, ProjectResourceCollections, ProjectResourceMethods {

}

/*********************************************
* ProjectResourceProps
**********************************************/
export interface ProjectResourceProps {
	ActualCost?: number;
	ActualCostWorkPerformed?: string;
	ActualCostWorkPerformedMilliseconds?: number;
	ActualCostWorkPerformedTimeSpan?: any;
	ActualOvertimeCost?: number;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	AvailableFrom?: any;
	AvailableTo?: any;
	BaselineCost?: number;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudetCostWorkPerformed?: number;
	BudgetedCost?: number;
	BudgetedCostWorkScheduled?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	Created?: any;
	CurrentCostVariance?: number;
	Finish?: any;
	Id?: any;
	IsBudgeted?: boolean;
	IsGenericResource?: boolean;
	IsOverAllocated?: boolean;
	Modified?: any;
	Notes?: string;
	OvertimeCost?: number;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PeakWork?: string;
	PeakWorkMilliseconds?: number;
	PeakWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ScheduleCostVariance?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* ProjectResourcePropMethods
**********************************************/
export interface ProjectResourcePropMethods {
	EnterpriseResource(): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
}

/*********************************************
* ProjectResourceCollections
**********************************************/
export interface ProjectResourceCollections extends ProjectResourcePropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* ProjectResourceOData
**********************************************/
export interface ProjectResourceOData extends Base.IBaseResult, ProjectResourceProps, ProjectResourceMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	EnterpriseResource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
}

/*********************************************
* ProjectResourceMethods
**********************************************/
export interface ProjectResourceMethods {

}

/*********************************************
* IEnterpriseResource
**********************************************/
export interface IEnterpriseResource extends EnterpriseResourceCollections, EnterpriseResourceMethods, Base.IBaseQuery<EnterpriseResource, IEnterpriseResourceQuery> {

}

/*********************************************
* IEnterpriseResourceCollection
**********************************************/
export interface IEnterpriseResourceCollection extends Base.IBaseResults<EnterpriseResource>, EnterpriseResourceCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResource>) => void) => void;
}

/*********************************************
* IEnterpriseResourceQueryCollection
**********************************************/
export interface IEnterpriseResourceQueryCollection extends Base.IBaseResults<EnterpriseResourceOData>, EnterpriseResourceCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceOData>) => void) => void;
}

/*********************************************
* IEnterpriseResourceQuery
**********************************************/
export interface IEnterpriseResourceQuery extends EnterpriseResourceOData, EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResource
**********************************************/
export interface EnterpriseResource extends Base.IBaseResult, EnterpriseResourceProps, EnterpriseResourceCollections, EnterpriseResourceMethods {

}

/*********************************************
* EnterpriseResourceProps
**********************************************/
export interface EnterpriseResourceProps {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	Created?: any;
	DefaultBookingType?: number;
	Email?: string;
	ExternalId?: string;
	Group?: string;
	HireDate?: any;
	HyperlinkName?: string;
	HyperlinkUrl?: string;
	Id?: any;
	Initials?: string;
	IsActive?: boolean;
	IsBudget?: boolean;
	IsCheckedOut?: boolean;
	IsGeneric?: boolean;
	IsTeam?: boolean;
	MaterialLabel?: string;
	Modified?: any;
	Name?: string;
	Phonetics?: string;
	RequiresEngagements?: boolean;
	ResourceIdentifier?: number;
	ResourceType?: number;
	TerminationDate?: any;
}

/*********************************************
* EnterpriseResourcePropMethods
**********************************************/
export interface EnterpriseResourcePropMethods {
	BaseCalendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	DefaultAssignmentOwner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Self(): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	TimesheetManager(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	User(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* EnterpriseResourceCollections
**********************************************/
export interface EnterpriseResourceCollections extends EnterpriseResourcePropMethods {
	Assignments(): Base.IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentOData, Base.IBaseExecution & PS.StatusAssignmentCollectionMethods> & Base.IBaseExecution & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentOData> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	CostRateTables(): Base.IBaseCollection<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableOData>;
	CostRateTables(id: string | number): Base.IBaseQuery<PS.EnterpriseResourceCostRateTable, PS.EnterpriseResourceCostRateTableOData> & PS.EnterpriseResourceCostRateTableCollections;
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): Base.IBaseCollection<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	Engagements(id: string | number): Base.IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	UserPermissions(): Base.IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): Base.IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	ResourceCalendarExceptions(): Base.IBaseCollection<PS.CalendarException, PS.CalendarExceptionOData, Base.IBaseExecution & PS.CalendarExceptionCollectionMethods> & Base.IBaseExecution & PS.CalendarExceptionCollectionMethods;
	ResourceCalendarExceptions(id: string | number): Base.IBaseQuery<PS.CalendarException, PS.CalendarExceptionOData> & PS.CalendarExceptionCollections & PS.CalendarExceptionMethods;
}

/*********************************************
* EnterpriseResourceCollectionMethods
**********************************************/
export interface EnterpriseResourceCollectionMethods {
	add(parameters?: PS.EnterpriseResourceCreationInformation): Base.IBaseExecution<PS.EnterpriseResource>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* EnterpriseResourceOData
**********************************************/
export interface EnterpriseResourceOData extends Base.IBaseResult, EnterpriseResourceProps, EnterpriseResourceMethods {
	Assignments: Base.IBaseResults<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
	BaseCalendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	CostRateTables: Base.IBaseResults<PS.EnterpriseResourceCostRateTable>;
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Engagements: Base.IBaseResults<PS.ResourceEngagement> & PS.ResourceEngagementCollectionMethods;
	UserPermissions: Base.IBaseResults<PS.UserPermission>;
	ResourceCalendarExceptions: Base.IBaseResults<PS.CalendarException> & PS.CalendarExceptionCollectionMethods;
	Self: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
	TimesheetManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	User: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* EnterpriseResourceMethods
**********************************************/
export interface EnterpriseResourceMethods {
	delete(): Base.IBaseExecution<any>;
	forceCheckIn(): Base.IBaseExecution<any>;
	updateClaimsAccount(newClaimsAccount?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IStatusAssignment
**********************************************/
export interface IStatusAssignment extends StatusAssignmentCollections, StatusAssignmentMethods, Base.IBaseQuery<StatusAssignment, IStatusAssignmentQuery> {

}

/*********************************************
* IStatusAssignmentCollection
**********************************************/
export interface IStatusAssignmentCollection extends Base.IBaseResults<StatusAssignment>, StatusAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<StatusAssignment>) => void) => void;
}

/*********************************************
* IStatusAssignmentQueryCollection
**********************************************/
export interface IStatusAssignmentQueryCollection extends Base.IBaseResults<StatusAssignmentOData>, StatusAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<StatusAssignmentOData>) => void) => void;
}

/*********************************************
* IStatusAssignmentQuery
**********************************************/
export interface IStatusAssignmentQuery extends StatusAssignmentOData, StatusAssignmentMethods {

}

/*********************************************
* StatusAssignment
**********************************************/
export interface StatusAssignment extends Base.IBaseResult, StatusAssignmentProps, StatusAssignmentCollections, StatusAssignmentMethods {

}

/*********************************************
* StatusAssignmentProps
**********************************************/
export interface StatusAssignmentProps {
	ActualFinish?: any;
	ActualOvertime?: string;
	ActualOvertimeMilliseconds?: number;
	ActualOvertimeTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	ApprovalStatus?: number;
	Comments?: string;
	Finish?: any;
	Id?: any;
	IsConfirmed?: boolean;
	Modified?: any;
	Name?: string;
	Overtime?: string;
	OvertimeMilliseconds?: number;
	OvertimeTimeSpan?: any;
	PercentComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertime?: string;
	RemainingOvertimeMilliseconds?: number;
	RemainingOvertimeTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* StatusAssignmentPropMethods
**********************************************/
export interface StatusAssignmentPropMethods {
	Project(): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	Resource(): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	Task(): Base.IBaseQuery<PS.StatusTask, PS.StatusTaskOData> & PS.StatusTaskCollections;
}

/*********************************************
* StatusAssignmentCollections
**********************************************/
export interface StatusAssignmentCollections extends StatusAssignmentPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	History(): Base.IBaseCollection<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineOData, Base.IBaseExecution & PS.StatusAssignmentHistoryLineCollectionMethods> & Base.IBaseExecution & PS.StatusAssignmentHistoryLineCollectionMethods;
	History(id: string | number): Base.IBaseQuery<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineOData> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* StatusAssignmentCollectionMethods
**********************************************/
export interface StatusAssignmentCollectionMethods {
	add(parameters?: PS.StatusAssignmentCreationInformation): Base.IBaseExecution<PS.StatusAssignment>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentOData> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentOData> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
	getTimePhaseByUrl(start?: string, end?: string): Base.IBaseExecution<PS.TimePhase>;
	submitAllStatusUpdates(comment?: string): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* StatusAssignmentOData
**********************************************/
export interface StatusAssignmentOData extends Base.IBaseResult, StatusAssignmentProps, StatusAssignmentMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	History: Base.IBaseResults<PS.StatusAssignmentHistoryLine> & PS.StatusAssignmentHistoryLineCollectionMethods;
	Project: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
	Task: PS.StatusTask & PS.StatusTaskCollections;
}

/*********************************************
* StatusAssignmentMethods
**********************************************/
export interface StatusAssignmentMethods {
	delete(): Base.IBaseExecution<any>;
	submitStatusUpdates(comment?: string): Base.IBaseExecution<any>;
}

/*********************************************
* StatusAssignmentHistoryLine
**********************************************/
export interface StatusAssignmentHistoryLine {
	ApproverId?: any;
	Comment?: string;
	Decision?: number;
	DecisionDate?: any;
	Id?: any;
	ReassignedResourceId?: any;
	ReassignmentDate?: any;
	State?: number;
	Submitted?: any;
	SubmitterId?: any;
	UpdateType?: number;
}

/*********************************************
* StatusAssignmentHistoryLineCollections
**********************************************/
export interface StatusAssignmentHistoryLineCollections extends StatusAssignmentHistoryLineCollectionMethods {

}

/*********************************************
* StatusAssignmentHistoryLineOData
**********************************************/
export interface StatusAssignmentHistoryLineOData extends Base.IBaseResult, StatusAssignmentHistoryLine {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* StatusAssignmentHistoryLineCollectionMethods
**********************************************/
export interface StatusAssignmentHistoryLineCollectionMethods {
	getById(objectId?: string): Base.IBaseQuery<PS.StatusAssignmentHistoryLine, PS.StatusAssignmentHistoryLineOData> & PS.StatusAssignmentHistoryLineCollections;
}

/*********************************************
* IProject
**********************************************/
export interface IProject extends ProjectCollections, ProjectMethods, Base.IBaseQuery<Project, IProjectQuery> {

}

/*********************************************
* IProjectCollection
**********************************************/
export interface IProjectCollection extends Base.IBaseResults<Project> {
	done?: (resolve: (value?: Array<Project>) => void) => void;
}

/*********************************************
* IProjectQueryCollection
**********************************************/
export interface IProjectQueryCollection extends Base.IBaseResults<ProjectOData> {
	done?: (resolve: (value?: Array<ProjectOData>) => void) => void;
}

/*********************************************
* IProjectQuery
**********************************************/
export interface IProjectQuery extends ProjectOData, ProjectMethods {

}

/*********************************************
* Project
**********************************************/
export interface Project extends Base.IBaseResult, ProjectProps, ProjectCollections, ProjectMethods {

}

/*********************************************
* ProjectProps
**********************************************/
export interface ProjectProps {
	ApprovedEnd?: any;
	ApprovedStart?: any;
	CalculateActualCosts?: boolean;
	CalculatesActualCosts?: boolean;
	CheckedOutDate?: any;
	CheckOutDescription?: string;
	CheckOutId?: any;
	CreatedDate?: any;
	CriticalSlackLimit?: number;
	DefaultFinishTime?: any;
	DefaultOvertimeRateUnits?: number;
	DefaultStandardRateUnits?: number;
	DefaultStartTime?: any;
	HasMppPendingImport?: boolean;
	HonorConstraints?: boolean;
	Id?: any;
	IsCheckedOut?: boolean;
	LastPublishedDate?: any;
	LastSavedDate?: any;
	ListId?: any;
	MoveActualIfLater?: boolean;
	MoveActualToStatus?: boolean;
	MoveRemainingIfEarlier?: boolean;
	MoveRemainingToStatus?: boolean;
	MultipleCriticalPaths?: boolean;
	OptimizerDecision?: number;
	PercentComplete?: number;
	PlannerDecision?: number;
	ProjectSiteUrl?: string;
	ProjectType?: number;
	SplitInProgress?: boolean;
	SpreadActualCostsToStatus?: boolean;
	SpreadPercentCompleteToStatus?: boolean;
	SummaryTaskId?: any;
	TaskListId?: any;
	WebId?: any;
}

/*********************************************
* ProjectPropMethods
**********************************************/
export interface ProjectPropMethods {
	CheckedOutBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	EnterpriseProjectType(): Base.IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeOData> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	Phase(): Base.IBaseQuery<PS.Phase, PS.PhaseOData> & PS.PhaseCollections & PS.PhaseMethods;
	ProjectSummaryTask(): Base.IBaseExecution<PS.ProjectSummaryTask> & PS.ProjectSummaryTaskCollections;
	Stage(): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* ProjectCollections
**********************************************/
export interface ProjectCollections extends ProjectPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Engagements(): Base.IBaseCollection<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	Engagements(id: string | number): Base.IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	UserPermissions(): Base.IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): Base.IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
	QueueJobs(): Base.IBaseCollection<PS.QueueJob, PS.QueueJobOData, Base.IBaseExecution & PS.QueueJobCollectionMethods> & Base.IBaseExecution & PS.QueueJobCollectionMethods;
	QueueJobs(id: string | number): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* ProjectOData
**********************************************/
export interface ProjectOData extends Base.IBaseResult, ProjectProps, ProjectMethods {
	CheckedOutBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	Engagements: Base.IBaseResults<PS.ProjectEngagement> & PS.ProjectEngagementCollectionMethods;
	EnterpriseProjectType: PS.EnterpriseProjectType & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeCollectionMethods;
	UserPermissions: Base.IBaseResults<PS.UserPermission>;
	Phase: PS.Phase & PS.PhaseCollections & PS.PhaseCollectionMethods;
	ProjectSummaryTask: PS.ProjectSummaryTask & PS.ProjectSummaryTaskCollections;
	QueueJobs: Base.IBaseResults<PS.QueueJob> & PS.QueueJobCollectionMethods;
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
}

/*********************************************
* ProjectMethods
**********************************************/
export interface ProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): Base.IBaseQuery<PS.ResourcePlan, PS.ResourcePlanOData> & PS.ResourcePlanCollections & PS.ResourcePlanMethods;
	leaveProjectStage(): Base.IBaseExecution<any>;
	readyToLeaveProjectStage(): Base.IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IEngagement
**********************************************/
export interface IEngagement extends EngagementCollections, EngagementMethods, Base.IBaseQuery<Engagement, IEngagementQuery> {

}

/*********************************************
* IEngagementCollection
**********************************************/
export interface IEngagementCollection extends Base.IBaseResults<Engagement> {
	done?: (resolve: (value?: Array<Engagement>) => void) => void;
}

/*********************************************
* IEngagementQueryCollection
**********************************************/
export interface IEngagementQueryCollection extends Base.IBaseResults<EngagementOData> {
	done?: (resolve: (value?: Array<EngagementOData>) => void) => void;
}

/*********************************************
* IEngagementQuery
**********************************************/
export interface IEngagementQuery extends EngagementOData, EngagementMethods {

}

/*********************************************
* Engagement
**********************************************/
export interface Engagement extends Base.IBaseResult, EngagementProps, EngagementCollections, EngagementMethods {

}

/*********************************************
* EngagementProps
**********************************************/
export interface EngagementProps {
	CreatedDate?: any;
	Description?: string;
	Id?: any;
	Modified?: any;
	ReviewedDate?: any;
	Status?: number;
	SubmittedDate?: any;
	TimephasedEditsOnly?: boolean;
}

/*********************************************
* EngagementPropMethods
**********************************************/
export interface EngagementPropMethods {
	ModifiedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Project(): Base.IBaseQuery<PS.Project, PS.ProjectOData> & PS.ProjectCollections & PS.ProjectMethods;
	Resource(): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	ReviewedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	SubmittedBy(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* EngagementCollections
**********************************************/
export interface EngagementCollections extends EngagementPropMethods {
	Comments(): Base.IBaseCollection<PS.EngagementComment, PS.EngagementCommentOData, Base.IBaseExecution & PS.EngagementCommentCollectionMethods> & Base.IBaseExecution & PS.EngagementCommentCollectionMethods;
	Comments(id: string | number): Base.IBaseQuery<PS.EngagementComment, PS.EngagementCommentOData> & PS.EngagementCommentCollections;
}

/*********************************************
* EngagementOData
**********************************************/
export interface EngagementOData extends Base.IBaseResult, EngagementProps, EngagementMethods {
	Comments: Base.IBaseResults<PS.EngagementComment> & PS.EngagementCommentCollectionMethods;
	ModifiedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Project: PS.Project & PS.ProjectCollections;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
	ReviewedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	SubmittedBy: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* EngagementMethods
**********************************************/
export interface EngagementMethods {

}

/*********************************************
* EngagementComment
**********************************************/
export interface EngagementComment {
	Created?: any;
	Id?: any;
	Message?: string;
}

/*********************************************
* EngagementCommentCollections
**********************************************/
export interface EngagementCommentCollections extends EngagementCommentCollectionMethods {

}

/*********************************************
* EngagementCommentOData
**********************************************/
export interface EngagementCommentOData extends Base.IBaseResult, EngagementComment {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* EngagementCommentCollectionMethods
**********************************************/
export interface EngagementCommentCollectionMethods {
	add(comment?: string): Base.IBaseExecution<PS.EngagementComment>;
}

/*********************************************
* IProjectEngagement
**********************************************/
export interface IProjectEngagement extends ProjectEngagementCollections, ProjectEngagementMethods, Base.IBaseQuery<ProjectEngagement, IProjectEngagementQuery> {

}

/*********************************************
* IProjectEngagementCollection
**********************************************/
export interface IProjectEngagementCollection extends Base.IBaseResults<ProjectEngagement>, ProjectEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ProjectEngagement>) => void) => void;
}

/*********************************************
* IProjectEngagementQueryCollection
**********************************************/
export interface IProjectEngagementQueryCollection extends Base.IBaseResults<ProjectEngagementOData>, ProjectEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ProjectEngagementOData>) => void) => void;
}

/*********************************************
* IProjectEngagementQuery
**********************************************/
export interface IProjectEngagementQuery extends ProjectEngagementOData, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagement
**********************************************/
export interface ProjectEngagement extends PS.Engagement, Base.IBaseResult, ProjectEngagementProps, ProjectEngagementCollections, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagementProps
**********************************************/
export interface ProjectEngagementProps {
	ApprovedFinish?: any;
	ApprovedMaxUnits?: number;
	ApprovedStart?: any;
	ApprovedWork?: string;
	ApprovedWorkMilliseconds?: number;
	ApprovedWorkTimeSpan?: any;
	HasUnsubmittedChanges?: boolean;
	RequestedFinish?: any;
	RequestedMaxUnits?: number;
	RequestedStart?: any;
	RequestedWork?: string;
	RequestedWorkMilliseconds?: number;
	RequestedWorkTimeSpan?: any;
}

/*********************************************
* ProjectEngagementPropMethods
**********************************************/
export interface ProjectEngagementPropMethods {

}

/*********************************************
* ProjectEngagementCollections
**********************************************/
export interface ProjectEngagementCollections extends ProjectEngagementPropMethods {

}

/*********************************************
* ProjectEngagementCollectionMethods
**********************************************/
export interface ProjectEngagementCollectionMethods {
	add(parameters?: PS.ProjectEngagementCreationInformation): Base.IBaseExecution<PS.ProjectEngagement>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.ProjectEngagement> & PS.ProjectEngagementCollections & PS.ProjectEngagementMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ProjectEngagementOData
**********************************************/
export interface ProjectEngagementOData extends Base.IBaseResult, ProjectEngagementProps, ProjectEngagementMethods {

}

/*********************************************
* ProjectEngagementMethods
**********************************************/
export interface ProjectEngagementMethods {
	delete(): Base.IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): Base.IBaseCollection<PS.ProjectEngagementTimephasedPeriod> & PS.ProjectEngagementTimephasedPeriodCollectionMethods;
}

/*********************************************
* IEnterpriseProjectType
**********************************************/
export interface IEnterpriseProjectType extends EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods, Base.IBaseQuery<EnterpriseProjectType, IEnterpriseProjectTypeQuery> {

}

/*********************************************
* IEnterpriseProjectTypeCollection
**********************************************/
export interface IEnterpriseProjectTypeCollection extends Base.IBaseResults<EnterpriseProjectType>, EnterpriseProjectTypeCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseProjectType>) => void) => void;
}

/*********************************************
* IEnterpriseProjectTypeQueryCollection
**********************************************/
export interface IEnterpriseProjectTypeQueryCollection extends Base.IBaseResults<EnterpriseProjectTypeOData>, EnterpriseProjectTypeCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseProjectTypeOData>) => void) => void;
}

/*********************************************
* IEnterpriseProjectTypeQuery
**********************************************/
export interface IEnterpriseProjectTypeQuery extends EnterpriseProjectTypeOData, EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectType
**********************************************/
export interface EnterpriseProjectType extends Base.IBaseResult, EnterpriseProjectTypeProps, EnterpriseProjectTypeCollections, EnterpriseProjectTypeMethods {

}

/*********************************************
* EnterpriseProjectTypeProps
**********************************************/
export interface EnterpriseProjectTypeProps {
	Departments?: { results: Array<any> };
	Description?: string;
	Id?: any;
	ImageUrl?: string;
	IsDefault?: boolean;
	IsManaged?: boolean;
	Name?: string;
	Order?: number;
	PermissionSyncEnable?: boolean;
	ProjectPlanTemplateId?: any;
	SiteCreationOption?: number;
	SiteCreationURL?: string;
	TaskListSyncEnable?: boolean;
	WorkflowAssociationId?: any;
	WorkflowAssociationName?: string;
	WorkspaceTemplateLCID?: number;
	WorkspaceTemplateName?: string;
}

/*********************************************
* EnterpriseProjectTypePropMethods
**********************************************/
export interface EnterpriseProjectTypePropMethods {

}

/*********************************************
* EnterpriseProjectTypeCollections
**********************************************/
export interface EnterpriseProjectTypeCollections extends EnterpriseProjectTypePropMethods {
	ProjectDetailPages(): Base.IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageOData, Base.IBaseExecution & PS.ProjectDetailPageCollectionMethods> & Base.IBaseExecution & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
}

/*********************************************
* EnterpriseProjectTypeCollectionMethods
**********************************************/
export interface EnterpriseProjectTypeCollectionMethods {
	add(parameters?: PS.EnterpriseProjectTypeCreationInformation): Base.IBaseExecution<PS.EnterpriseProjectType>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeOData> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeOData> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* EnterpriseProjectTypeOData
**********************************************/
export interface EnterpriseProjectTypeOData extends Base.IBaseResult, EnterpriseProjectTypeProps, EnterpriseProjectTypeMethods {
	ProjectDetailPages: Base.IBaseResults<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
}

/*********************************************
* EnterpriseProjectTypeMethods
**********************************************/
export interface EnterpriseProjectTypeMethods {
	addDepartment(departmentValueGuid?: any): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	removeDepartment(departmentValueGuid?: any): Base.IBaseExecution<any>;
	updateCreatePDP(pdp?: PS.ProjectDetailPageCreationInformation): Base.IBaseExecution<any>;
}

/*********************************************
* ProjectDetailPage
**********************************************/
export interface ProjectDetailPage {
	Id?: any;
	Name?: string;
	PageType?: number;
}

/*********************************************
* ProjectDetailPageCollections
**********************************************/
export interface ProjectDetailPageCollections extends ProjectDetailPageCollectionMethods {

}

/*********************************************
* ProjectDetailPageOData
**********************************************/
export interface ProjectDetailPageOData extends Base.IBaseResult, ProjectDetailPage {
	Item: SP.ListItem & SP.ListItemCollections & SP.ListItemCollectionMethods;
}

/*********************************************
* ProjectDetailPageCollectionMethods
**********************************************/
export interface ProjectDetailPageCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
}

/*********************************************
* UserPermission
**********************************************/
export interface UserPermission {
	HasPermission?: boolean;
	Permission?: string;
}

/*********************************************
* UserPermissionCollections
**********************************************/
export interface UserPermissionCollections {

}

/*********************************************
* IPhase
**********************************************/
export interface IPhase extends PhaseCollections, PhaseMethods, Base.IBaseQuery<Phase, IPhaseQuery> {

}

/*********************************************
* IPhaseCollection
**********************************************/
export interface IPhaseCollection extends Base.IBaseResults<Phase>, PhaseCollectionMethods {
	done?: (resolve: (value?: Array<Phase>) => void) => void;
}

/*********************************************
* IPhaseQueryCollection
**********************************************/
export interface IPhaseQueryCollection extends Base.IBaseResults<PhaseOData>, PhaseCollectionMethods {
	done?: (resolve: (value?: Array<PhaseOData>) => void) => void;
}

/*********************************************
* IPhaseQuery
**********************************************/
export interface IPhaseQuery extends PhaseOData, PhaseMethods {

}

/*********************************************
* Phase
**********************************************/
export interface Phase extends Base.IBaseResult, PhaseProps, PhaseCollections, PhaseMethods {

}

/*********************************************
* PhaseProps
**********************************************/
export interface PhaseProps {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhasePropMethods
**********************************************/
export interface PhasePropMethods {

}

/*********************************************
* PhaseCollections
**********************************************/
export interface PhaseCollections extends PhasePropMethods {
	Stages(): Base.IBaseCollection<PS.Stage, PS.StageOData, Base.IBaseExecution & PS.StageCollectionMethods> & Base.IBaseExecution & PS.StageCollectionMethods;
	Stages(id: string | number): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* PhaseCollectionMethods
**********************************************/
export interface PhaseCollectionMethods {
	add(parameters?: PS.PhaseCreationInformation): Base.IBaseExecution<PS.Phase>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.Phase, PS.PhaseOData> & PS.PhaseCollections & PS.PhaseMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.Phase, PS.PhaseOData> & PS.PhaseCollections & PS.PhaseMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* PhaseOData
**********************************************/
export interface PhaseOData extends Base.IBaseResult, PhaseProps, PhaseMethods {
	Stages: Base.IBaseResults<PS.Stage> & PS.StageCollectionMethods;
}

/*********************************************
* PhaseMethods
**********************************************/
export interface PhaseMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IStage
**********************************************/
export interface IStage extends StageCollections, StageMethods, Base.IBaseQuery<Stage, IStageQuery> {

}

/*********************************************
* IStageCollection
**********************************************/
export interface IStageCollection extends Base.IBaseResults<Stage>, StageCollectionMethods {
	done?: (resolve: (value?: Array<Stage>) => void) => void;
}

/*********************************************
* IStageQueryCollection
**********************************************/
export interface IStageQueryCollection extends Base.IBaseResults<StageOData>, StageCollectionMethods {
	done?: (resolve: (value?: Array<StageOData>) => void) => void;
}

/*********************************************
* IStageQuery
**********************************************/
export interface IStageQuery extends StageOData, StageMethods {

}

/*********************************************
* Stage
**********************************************/
export interface Stage extends Base.IBaseResult, StageProps, StageCollections, StageMethods {

}

/*********************************************
* StageProps
**********************************************/
export interface StageProps {
	Behavior?: number;
	CheckInRequired?: boolean;
	Description?: string;
	Id?: any;
	Name?: string;
	SubmitDescription?: string;
}

/*********************************************
* StagePropMethods
**********************************************/
export interface StagePropMethods {
	Phase(): Base.IBaseQuery<PS.Phase, PS.PhaseOData> & PS.PhaseCollections & PS.PhaseMethods;
	WorkflowStatusPage(): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
}

/*********************************************
* StageCollections
**********************************************/
export interface StageCollections extends StagePropMethods {
	CustomFields(): Base.IBaseCollection<PS.StageCustomField, PS.StageCustomFieldOData, Base.IBaseExecution & PS.StageCustomFieldCollectionMethods> & Base.IBaseExecution & PS.StageCustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.StageCustomField, PS.StageCustomFieldOData> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
	ProjectDetailPages(): Base.IBaseCollection<PS.StageDetailPage, PS.StageDetailPageOData, Base.IBaseExecution & PS.StageDetailPageCollectionMethods> & Base.IBaseExecution & PS.StageDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): Base.IBaseQuery<PS.StageDetailPage, PS.StageDetailPageOData> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
}

/*********************************************
* StageCollectionMethods
**********************************************/
export interface StageCollectionMethods {
	add(parameters?: PS.StageCreationInformation): Base.IBaseExecution<PS.Stage>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* StageOData
**********************************************/
export interface StageOData extends Base.IBaseResult, StageProps, StageMethods {
	CustomFields: Base.IBaseResults<PS.StageCustomField> & PS.StageCustomFieldCollectionMethods;
	Phase: PS.Phase & PS.PhaseCollections & PS.PhaseCollectionMethods;
	ProjectDetailPages: Base.IBaseResults<PS.StageDetailPage> & PS.StageDetailPageCollectionMethods;
	WorkflowStatusPage: PS.ProjectDetailPage & PS.ProjectDetailPageCollections & PS.ProjectDetailPageCollectionMethods;
}

/*********************************************
* StageMethods
**********************************************/
export interface StageMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IStageCustomField
**********************************************/
export interface IStageCustomField extends StageCustomFieldCollections, StageCustomFieldMethods, Base.IBaseQuery<StageCustomField, IStageCustomFieldQuery> {

}

/*********************************************
* IStageCustomFieldCollection
**********************************************/
export interface IStageCustomFieldCollection extends Base.IBaseResults<StageCustomField>, StageCustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<StageCustomField>) => void) => void;
}

/*********************************************
* IStageCustomFieldQueryCollection
**********************************************/
export interface IStageCustomFieldQueryCollection extends Base.IBaseResults<StageCustomFieldOData>, StageCustomFieldCollectionMethods {
	done?: (resolve: (value?: Array<StageCustomFieldOData>) => void) => void;
}

/*********************************************
* IStageCustomFieldQuery
**********************************************/
export interface IStageCustomFieldQuery extends StageCustomFieldOData, StageCustomFieldMethods {

}

/*********************************************
* StageCustomField
**********************************************/
export interface StageCustomField extends Base.IBaseResult, StageCustomFieldProps, StageCustomFieldCollections, StageCustomFieldMethods {

}

/*********************************************
* StageCustomFieldProps
**********************************************/
export interface StageCustomFieldProps {
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldPropMethods
**********************************************/
export interface StageCustomFieldPropMethods {
	Stage(): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* StageCustomFieldCollections
**********************************************/
export interface StageCustomFieldCollections extends StageCustomFieldPropMethods {

}

/*********************************************
* StageCustomFieldCollectionMethods
**********************************************/
export interface StageCustomFieldCollectionMethods {
	add(creationInfo?: PS.StageCustomFieldCreationInformation): Base.IBaseExecution<PS.StageCustomField>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.StageCustomField, PS.StageCustomFieldOData> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.StageCustomField, PS.StageCustomFieldOData> & PS.StageCustomFieldCollections & PS.StageCustomFieldMethods;
}

/*********************************************
* StageCustomFieldOData
**********************************************/
export interface StageCustomFieldOData extends Base.IBaseResult, StageCustomFieldProps, StageCustomFieldMethods {
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
}

/*********************************************
* StageCustomFieldMethods
**********************************************/
export interface StageCustomFieldMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IStageDetailPage
**********************************************/
export interface IStageDetailPage extends StageDetailPageCollections, StageDetailPageMethods, Base.IBaseQuery<StageDetailPage, IStageDetailPageQuery> {

}

/*********************************************
* IStageDetailPageCollection
**********************************************/
export interface IStageDetailPageCollection extends Base.IBaseResults<StageDetailPage>, StageDetailPageCollectionMethods {
	done?: (resolve: (value?: Array<StageDetailPage>) => void) => void;
}

/*********************************************
* IStageDetailPageQueryCollection
**********************************************/
export interface IStageDetailPageQueryCollection extends Base.IBaseResults<StageDetailPageOData>, StageDetailPageCollectionMethods {
	done?: (resolve: (value?: Array<StageDetailPageOData>) => void) => void;
}

/*********************************************
* IStageDetailPageQuery
**********************************************/
export interface IStageDetailPageQuery extends StageDetailPageOData, StageDetailPageMethods {

}

/*********************************************
* StageDetailPage
**********************************************/
export interface StageDetailPage extends Base.IBaseResult, StageDetailPageProps, StageDetailPageCollections, StageDetailPageMethods {

}

/*********************************************
* StageDetailPageProps
**********************************************/
export interface StageDetailPageProps {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPagePropMethods
**********************************************/
export interface StageDetailPagePropMethods {
	Page(): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
	Stage(): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
}

/*********************************************
* StageDetailPageCollections
**********************************************/
export interface StageDetailPageCollections extends StageDetailPagePropMethods {

}

/*********************************************
* StageDetailPageCollectionMethods
**********************************************/
export interface StageDetailPageCollectionMethods {
	add(parameters?: PS.StageDetailPageCreationInformation): Base.IBaseExecution<PS.StageDetailPage>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.StageDetailPage, PS.StageDetailPageOData> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.StageDetailPage, PS.StageDetailPageOData> & PS.StageDetailPageCollections & PS.StageDetailPageMethods;
}

/*********************************************
* StageDetailPageOData
**********************************************/
export interface StageDetailPageOData extends Base.IBaseResult, StageDetailPageProps, StageDetailPageMethods {
	Page: PS.ProjectDetailPage & PS.ProjectDetailPageCollections & PS.ProjectDetailPageCollectionMethods;
	Stage: PS.Stage & PS.StageCollections & PS.StageCollectionMethods;
}

/*********************************************
* StageDetailPageMethods
**********************************************/
export interface StageDetailPageMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ITask
**********************************************/
export interface ITask extends TaskCollections, TaskMethods, Base.IBaseQuery<Task, ITaskQuery> {

}

/*********************************************
* ITaskCollection
**********************************************/
export interface ITaskCollection extends Base.IBaseResults<Task> {
	done?: (resolve: (value?: Array<Task>) => void) => void;
}

/*********************************************
* ITaskQueryCollection
**********************************************/
export interface ITaskQueryCollection extends Base.IBaseResults<TaskOData> {
	done?: (resolve: (value?: Array<TaskOData>) => void) => void;
}

/*********************************************
* ITaskQuery
**********************************************/
export interface ITaskQuery extends TaskOData, TaskMethods {

}

/*********************************************
* Task
**********************************************/
export interface Task extends Base.IBaseResult, TaskProps, TaskCollections, TaskMethods {

}

/*********************************************
* TaskProps
**********************************************/
export interface TaskProps {
	ActualCostWorkPerformed?: number;
	ActualDuration?: string;
	ActualDurationMilliseconds?: number;
	ActualDurationTimeSpan?: any;
	ActualOvertimeCost?: number;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	BaselineCost?: number;
	BaselineDuration?: string;
	BaselineDurationMilliseconds?: number;
	BaselineDurationTimeSpan?: any;
	BaselineFinish?: any;
	BaselineStart?: any;
	BaselineWork?: string;
	BaselineWorkMilliseconds?: number;
	BaselineWorkTimeSpan?: any;
	BudgetCost?: number;
	BudgetedCostWorkPerformed?: number;
	BudgetedCostWorkScheduled?: number;
	Contact?: string;
	CostPerformanceIndex?: number;
	CostVariance?: number;
	CostVarianceAtCompletion?: number;
	CostVariancePercentage?: number;
	Created?: any;
	CurrentCostVariance?: number;
	DurationVariance?: string;
	DurationVarianceMilliseconds?: number;
	DurationVarianceTimeSpan?: any;
	EarliestFinish?: any;
	EarliestStart?: any;
	EstimateAtCompletion?: number;
	ExternalProjectUid?: any;
	ExternalTaskUid?: any;
	FinishSlack?: string;
	FinishSlackMilliseconds?: number;
	FinishSlackTimeSpan?: any;
	FinishVariance?: string;
	FinishVarianceMilliseconds?: number;
	FinishVarianceTimeSpan?: any;
	FixedCostAccrual?: number;
	FreeSlack?: string;
	FreeSlackMilliseconds?: number;
	FreeSlackTimeSpan?: any;
	Id?: any;
	IgnoreResourceCalendar?: boolean;
	IsCritical?: boolean;
	IsDurationEstimate?: boolean;
	IsExternalTask?: boolean;
	IsOverAllocated?: boolean;
	IsRecurring?: boolean;
	IsRecurringSummary?: boolean;
	IsRolledUp?: boolean;
	IsSubProject?: boolean;
	IsSubProjectReadOnly?: boolean;
	IsSubProjectScheduledFromFinish?: boolean;
	IsSummary?: boolean;
	LatestFinish?: any;
	LatestStart?: any;
	LevelingDelay?: string;
	LevelingDelayMilliseconds?: number;
	LevelingDelayTimeSpan?: any;
	Modified?: any;
	Notes?: string;
	OutlinePosition?: string;
	OvertimeCost?: number;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	PreLevelingFinish?: any;
	PreLevelingStart?: any;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingCost?: number;
	RemainingOvertimeCost?: number;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Resume?: any;
	ScheduleCostVariance?: number;
	ScheduledDuration?: string;
	ScheduledDurationMilliseconds?: number;
	ScheduledDurationTimeSpan?: any;
	ScheduledFinish?: any;
	ScheduledStart?: any;
	SchedulePerformanceIndex?: number;
	ScheduleVariancePercentage?: number;
	StartSlack?: string;
	StartSlackMilliseconds?: number;
	StartSlackTimeSpan?: any;
	StartVariance?: string;
	StartVarianceMilliseconds?: number;
	StartVarianceTimeSpan?: any;
	Stop?: any;
	ToCompletePerformanceIndex?: number;
	TotalSlack?: string;
	TotalSlackMilliseconds?: number;
	TotalSlackTimeSpan?: any;
	WorkBreakdownStructure?: string;
	WorkVariance?: string;
	WorkVarianceMilliseconds?: number;
	WorkVarianceTimeSpan?: any;
}

/*********************************************
* TaskPropMethods
**********************************************/
export interface TaskPropMethods {
	SubProject(): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
}

/*********************************************
* TaskCollections
**********************************************/
export interface TaskCollections extends TaskPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* TaskOData
**********************************************/
export interface TaskOData extends Base.IBaseResult, TaskProps, TaskMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	SubProject: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
}

/*********************************************
* TaskMethods
**********************************************/
export interface TaskMethods {

}

/*********************************************
* IPublishedProject
**********************************************/
export interface IPublishedProject extends PublishedProjectCollections, PublishedProjectMethods, Base.IBaseQuery<PublishedProject, IPublishedProjectQuery> {

}

/*********************************************
* IPublishedProjectCollection
**********************************************/
export interface IPublishedProjectCollection extends Base.IBaseResults<PublishedProject>, PublishedProjectCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProject>) => void) => void;
}

/*********************************************
* IPublishedProjectQueryCollection
**********************************************/
export interface IPublishedProjectQueryCollection extends Base.IBaseResults<PublishedProjectOData>, PublishedProjectCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectOData>) => void) => void;
}

/*********************************************
* IPublishedProjectQuery
**********************************************/
export interface IPublishedProjectQuery extends PublishedProjectOData, PublishedProjectMethods {

}

/*********************************************
* PublishedProject
**********************************************/
export interface PublishedProject extends PS.Project, Base.IBaseResult, PublishedProjectProps, PublishedProjectCollections, PublishedProjectMethods {

}

/*********************************************
* PublishedProjectProps
**********************************************/
export interface PublishedProjectProps {
	CurrencyCode?: string;
	CurrencyDigits?: number;
	CurrencyPosition?: number;
	CurrencySymbol?: string;
	CurrentDate?: any;
	DaysPerMonth?: number;
	DefaultEffortDriven?: boolean;
	DefaultEstimatedDuration?: boolean;
	DefaultFixedCostAccrual?: number;
	DefaultOvertimeRate?: number;
	DefaultStandardRate?: number;
	DefaultTaskType?: number;
	DefaultWorkFormat?: number;
	Description?: string;
	EnterpriseProjectTypeId?: any;
	FinishDate?: any;
	FiscalYearStartMonth?: number;
	IsEnterpriseProject?: boolean;
	MinutesPerDay?: number;
	MinutesPerWeek?: number;
	Name?: string;
	NewTasksAreManual?: boolean;
	NumberFiscalYearFromStart?: boolean;
	OwnerId?: string;
	ProjectIdentifier?: string;
	ProtectedActualsSynch?: boolean;
	ScheduledFromStart?: boolean;
	ShowEstimatedDurations?: boolean;
	StartDate?: any;
	StatusDate?: any;
	TrackingMode?: number;
	UtilizationDate?: any;
	UtilizationType?: number;
	WeekStartDay?: number;
	WinprojVersion?: number;
}

/*********************************************
* PublishedProjectPropMethods
**********************************************/
export interface PublishedProjectPropMethods {
	Calendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	Draft(): Base.IBaseQuery<PS.DraftProject, PS.DraftProjectOData> & PS.DraftProjectCollections;
	IncludeCustomFields(): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	Owner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	ProjectWorkflowInstance(): Base.IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceOData> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
}

/*********************************************
* PublishedProjectCollections
**********************************************/
export interface PublishedProjectCollections extends PublishedProjectPropMethods {
	Assignments(): Base.IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentOData, Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods> & Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
	EntityLinks(): Base.IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): Base.IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	ProjectResources(): Base.IBaseCollection<PS.PublishedProjectResource, PS.PublishedProjectResourceOData, Base.IBaseExecution & PS.PublishedProjectResourceCollectionMethods> & Base.IBaseExecution & PS.PublishedProjectResourceCollectionMethods;
	ProjectResources(id: string | number): Base.IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceOData> & PS.PublishedProjectResourceCollections;
	TaskLinks(): Base.IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkOData, Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	TaskLinks(id: string | number): Base.IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkOData> & PS.PublishedTaskLinkCollections;
	Tasks(): Base.IBaseCollection<PS.PublishedTask, PS.PublishedTaskOData, Base.IBaseExecution & PS.PublishedTaskCollectionMethods> & Base.IBaseExecution & PS.PublishedTaskCollectionMethods;
	Tasks(id: string | number): Base.IBaseQuery<PS.PublishedTask, PS.PublishedTaskOData> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
}

/*********************************************
* PublishedProjectCollectionMethods
**********************************************/
export interface PublishedProjectCollectionMethods {
	add(parameters?: PS.ProjectCreationInformation): Base.IBaseExecution<PS.PublishedProject>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	update(): Base.IBaseExecution<PS.QueueJob>;
	validate(): Base.IBaseExecution<any>;
}

/*********************************************
* PublishedProjectOData
**********************************************/
export interface PublishedProjectOData extends Base.IBaseResult, PublishedProjectProps, PublishedProjectMethods {
	Assignments: Base.IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	Draft: PS.DraftProject & PS.DraftProjectCollections;
	EntityLinks: Base.IBaseResults<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	IncludeCustomFields: PS.PublishedProject & PS.PublishedProjectCollections & PS.PublishedProjectCollectionMethods;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	ProjectResources: Base.IBaseResults<PS.PublishedProjectResource> & PS.PublishedProjectResourceCollectionMethods;
	ProjectWorkflowInstance: PS.ProjectWorkflowInstance & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceCollectionMethods;
	TaskLinks: Base.IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	Tasks: Base.IBaseResults<PS.PublishedTask> & PS.PublishedTaskCollectionMethods;
}

/*********************************************
* PublishedProjectMethods
**********************************************/
export interface PublishedProjectMethods {
	getResourcePlanByUrl(start?: string, end?: string, scale?: string): Base.IBaseQuery<PS.ResourcePlan, PS.ResourcePlanOData> & PS.ResourcePlanCollections & PS.ResourcePlanMethods;
	leaveProjectStage(): Base.IBaseExecution<any>;
	readyToLeaveProjectStage(): Base.IBaseExecution<number>;
	updateIdeaListItemStatus(status?: string): Base.IBaseExecution<any>;
	checkOut(): Base.IBaseQuery<PS.DraftProject, PS.DraftProjectOData> & PS.DraftProjectCollections;
	createProjectSite(siteName?: string): Base.IBaseExecution<any>;
	delete(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
	submitToWorkflow(): Base.IBaseExecution<any>;
	unlinkProjectSite(): Base.IBaseExecution<any>;
	updateVisibilityCustomFields(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* PublishedAssignment
**********************************************/
export interface PublishedAssignment {
	ActualCost?: number;
	ActualFinish?: any;
	ActualOvertimeWork?: string;
	ActualOvertimeWorkMilliseconds?: number;
	ActualOvertimeWorkTimeSpan?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetedCost?: number;
	BudgetedWork?: string;
	BudgetedWorkMilliseconds?: number;
	BudgetedWorkTimeSpan?: any;
	Cost?: number;
	CostRateTable?: number;
	DefaultBookingType?: number;
	Delay?: string;
	DelayMilliseconds?: number;
	DelayTimeSpan?: any;
	IsLockedByManager?: boolean;
	IsWorkResource?: boolean;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PercentWorkComplete?: number;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingOvertimeWork?: string;
	RemainingOvertimeWorkMilliseconds?: number;
	RemainingOvertimeWorkTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	ResourceCapacity?: number;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* PublishedAssignmentCollections
**********************************************/
export interface PublishedAssignmentCollections extends PublishedAssignmentCollectionMethods {

}

/*********************************************
* PublishedAssignmentOData
**********************************************/
export interface PublishedAssignmentOData extends Base.IBaseResult, PublishedAssignment {
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Parent: PS.PublishedAssignment & PS.PublishedAssignmentCollections & PS.PublishedAssignmentCollectionMethods;
	Resource: PS.PublishedProjectResource & PS.PublishedProjectResourceCollections & PS.PublishedProjectResourceCollectionMethods;
	Task: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
}

/*********************************************
* PublishedAssignmentCollectionMethods
**********************************************/
export interface PublishedAssignmentCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
}

/*********************************************
* IPublishedProjectResource
**********************************************/
export interface IPublishedProjectResource extends PublishedProjectResourceCollections, PublishedProjectResourceMethods, Base.IBaseQuery<PublishedProjectResource, IPublishedProjectResourceQuery> {

}

/*********************************************
* IPublishedProjectResourceCollection
**********************************************/
export interface IPublishedProjectResourceCollection extends Base.IBaseResults<PublishedProjectResource>, PublishedProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectResource>) => void) => void;
}

/*********************************************
* IPublishedProjectResourceQueryCollection
**********************************************/
export interface IPublishedProjectResourceQueryCollection extends Base.IBaseResults<PublishedProjectResourceOData>, PublishedProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<PublishedProjectResourceOData>) => void) => void;
}

/*********************************************
* IPublishedProjectResourceQuery
**********************************************/
export interface IPublishedProjectResourceQuery extends PublishedProjectResourceOData, PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResource
**********************************************/
export interface PublishedProjectResource extends PS.ProjectResource, Base.IBaseResult, PublishedProjectResourceProps, PublishedProjectResourceCollections, PublishedProjectResourceMethods {

}

/*********************************************
* PublishedProjectResourceProps
**********************************************/
export interface PublishedProjectResourceProps {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	CostPerUse?: number;
	DefaultBookingType?: number;
	Email?: string;
	Group?: string;
	Initials?: string;
	MaterialLabel?: string;
	MaximumCapacity?: number;
	Name?: string;
	OvertimeRate?: number;
	OvertimeRateUnits?: number;
	Phonetics?: string;
	StandardRate?: number;
	StandardRateUnits?: number;
}

/*********************************************
* PublishedProjectResourcePropMethods
**********************************************/
export interface PublishedProjectResourcePropMethods {
	DefaultAssignmentOwner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* PublishedProjectResourceCollections
**********************************************/
export interface PublishedProjectResourceCollections extends PublishedProjectResourcePropMethods {
	Assignments(): Base.IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentOData, Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods> & Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
}

/*********************************************
* PublishedProjectResourceCollectionMethods
**********************************************/
export interface PublishedProjectResourceCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceOData> & PS.PublishedProjectResourceCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.PublishedProjectResource, PS.PublishedProjectResourceOData> & PS.PublishedProjectResourceCollections;
}

/*********************************************
* PublishedProjectResourceOData
**********************************************/
export interface PublishedProjectResourceOData extends Base.IBaseResult, PublishedProjectResourceProps, PublishedProjectResourceMethods {
	Assignments: Base.IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* PublishedProjectResourceMethods
**********************************************/
export interface PublishedProjectResourceMethods {

}

/*********************************************
* IPublishedTask
**********************************************/
export interface IPublishedTask extends PublishedTaskCollections, PublishedTaskMethods, Base.IBaseQuery<PublishedTask, IPublishedTaskQuery> {

}

/*********************************************
* IPublishedTaskCollection
**********************************************/
export interface IPublishedTaskCollection extends Base.IBaseResults<PublishedTask>, PublishedTaskCollectionMethods {
	done?: (resolve: (value?: Array<PublishedTask>) => void) => void;
}

/*********************************************
* IPublishedTaskQueryCollection
**********************************************/
export interface IPublishedTaskQueryCollection extends Base.IBaseResults<PublishedTaskOData>, PublishedTaskCollectionMethods {
	done?: (resolve: (value?: Array<PublishedTaskOData>) => void) => void;
}

/*********************************************
* IPublishedTaskQuery
**********************************************/
export interface IPublishedTaskQuery extends PublishedTaskOData, PublishedTaskMethods {

}

/*********************************************
* PublishedTask
**********************************************/
export interface PublishedTask extends PS.Task, Base.IBaseResult, PublishedTaskProps, PublishedTaskCollections, PublishedTaskMethods {

}

/*********************************************
* PublishedTaskProps
**********************************************/
export interface PublishedTaskProps {
	ActualCost?: number;
	ActualFinish?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Completion?: any;
	ConstraintStartEnd?: any;
	ConstraintType?: number;
	Cost?: number;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	FixedCost?: number;
	IsActive?: boolean;
	IsEffortDriven?: boolean;
	IsLockedByManager?: boolean;
	IsManual?: boolean;
	IsMarked?: boolean;
	IsMilestone?: boolean;
	LevelingAdjustsAssignments?: boolean;
	LevelingCanSplit?: boolean;
	Name?: string;
	OutlineLevel?: number;
	PercentComplete?: number;
	PercentPhysicalWorkComplete?: number;
	Priority?: number;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	Start?: any;
	StartText?: string;
	TaskType?: number;
	UsePercentPhysicalWorkComplete?: boolean;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* PublishedTaskPropMethods
**********************************************/
export interface PublishedTaskPropMethods {
	Calendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	Parent(): Base.IBaseQuery<PS.PublishedTask, PS.PublishedTaskOData> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
	StatusManager(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	TaskPlanLink(): Base.IBaseExecution<PS.TaskPlanLink> & PS.TaskPlanLinkCollections & PS.TaskPlanLinkMethods;
}

/*********************************************
* PublishedTaskCollections
**********************************************/
export interface PublishedTaskCollections extends PublishedTaskPropMethods {
	Assignments(): Base.IBaseCollection<PS.PublishedAssignment, PS.PublishedAssignmentOData, Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods> & Base.IBaseExecution & PS.PublishedAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
	EntityLinks(): Base.IBaseCollection<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	EntityLinks(id: string | number): Base.IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	Predecessors(): Base.IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkOData, Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	Predecessors(id: string | number): Base.IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkOData> & PS.PublishedTaskLinkCollections;
	Successors(): Base.IBaseCollection<PS.PublishedTaskLink, PS.PublishedTaskLinkOData, Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods> & Base.IBaseExecution & PS.PublishedTaskLinkCollectionMethods;
	Successors(id: string | number): Base.IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkOData> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* PublishedTaskCollectionMethods
**********************************************/
export interface PublishedTaskCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.PublishedTask, PS.PublishedTaskOData> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.PublishedTask, PS.PublishedTaskOData> & PS.PublishedTaskCollections & PS.PublishedTaskMethods;
}

/*********************************************
* PublishedTaskOData
**********************************************/
export interface PublishedTaskOData extends Base.IBaseResult, PublishedTaskProps, PublishedTaskMethods {
	Assignments: Base.IBaseResults<PS.PublishedAssignment> & PS.PublishedAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	EntityLinks: Base.IBaseResults<PS.EntityLink> & PS.EntityLinkCollectionMethods;
	Parent: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
	Predecessors: Base.IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Successors: Base.IBaseResults<PS.PublishedTaskLink> & PS.PublishedTaskLinkCollectionMethods;
	TaskPlanLink: PS.TaskPlanLink & PS.TaskPlanLinkCollections;
}

/*********************************************
* PublishedTaskMethods
**********************************************/
export interface PublishedTaskMethods {
	addTaskPlanLink(parameters?: PS.TaskPlanLinksCreationInformation): Base.IBaseExecution<PS.TaskPlanLink>;
	deleteTaskPlanLink(): Base.IBaseExecution<any>;
}

/*********************************************
* IEntityLink
**********************************************/
export interface IEntityLink extends EntityLinkCollections, EntityLinkMethods, Base.IBaseQuery<EntityLink, IEntityLinkQuery> {

}

/*********************************************
* IEntityLinkCollection
**********************************************/
export interface IEntityLinkCollection extends Base.IBaseResults<EntityLink>, EntityLinkCollectionMethods {
	done?: (resolve: (value?: Array<EntityLink>) => void) => void;
}

/*********************************************
* IEntityLinkQueryCollection
**********************************************/
export interface IEntityLinkQueryCollection extends Base.IBaseResults<EntityLinkOData>, EntityLinkCollectionMethods {
	done?: (resolve: (value?: Array<EntityLinkOData>) => void) => void;
}

/*********************************************
* IEntityLinkQuery
**********************************************/
export interface IEntityLinkQuery extends EntityLinkOData, EntityLinkMethods {

}

/*********************************************
* EntityLink
**********************************************/
export interface EntityLink extends Base.IBaseResult, EntityLinkProps, EntityLinkCollections, EntityLinkMethods {

}

/*********************************************
* EntityLinkProps
**********************************************/
export interface EntityLinkProps {
	Created?: any;
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EntityLinkPropMethods
**********************************************/
export interface EntityLinkPropMethods {

}

/*********************************************
* EntityLinkCollections
**********************************************/
export interface EntityLinkCollections extends EntityLinkPropMethods {

}

/*********************************************
* EntityLinkCollectionMethods
**********************************************/
export interface EntityLinkCollectionMethods {
	add(parameters?: PS.EntityLinkCreationInformation): Base.IBaseExecution<PS.EntityLink>;
	getByGuid(id?: any): Base.IBaseQuery<PS.EntityLink> & PS.EntityLinkCollections & PS.EntityLinkMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* EntityLinkOData
**********************************************/
export interface EntityLinkOData extends Base.IBaseResult, EntityLinkProps, EntityLinkMethods {

}

/*********************************************
* EntityLinkMethods
**********************************************/
export interface EntityLinkMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* TaskLink
**********************************************/
export interface TaskLink {
	Id?: any;
}

/*********************************************
* TaskLinkCollections
**********************************************/
export interface TaskLinkCollections {

}

/*********************************************
* PublishedTaskLink
**********************************************/
export interface PublishedTaskLink {
	DependencyType?: number;
	LinkLag?: number;
	LinkLagDuration?: string;
	LinkLagFmt?: number;
	ProjUid?: any;
}

/*********************************************
* PublishedTaskLinkCollections
**********************************************/
export interface PublishedTaskLinkCollections extends PublishedTaskLinkCollectionMethods {

}

/*********************************************
* PublishedTaskLinkOData
**********************************************/
export interface PublishedTaskLinkOData extends Base.IBaseResult, PublishedTaskLink {
	End: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
	Start: PS.PublishedTask & PS.PublishedTaskCollections & PS.PublishedTaskCollectionMethods;
}

/*********************************************
* PublishedTaskLinkCollectionMethods
**********************************************/
export interface PublishedTaskLinkCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkOData> & PS.PublishedTaskLinkCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.PublishedTaskLink, PS.PublishedTaskLinkOData> & PS.PublishedTaskLinkCollections;
}

/*********************************************
* ITaskPlanLink
**********************************************/
export interface ITaskPlanLink extends TaskPlanLinkCollections, TaskPlanLinkMethods, Base.IBaseQuery<TaskPlanLink, ITaskPlanLinkQuery> {

}

/*********************************************
* ITaskPlanLinkCollection
**********************************************/
export interface ITaskPlanLinkCollection extends Base.IBaseResults<TaskPlanLink> {
	done?: (resolve: (value?: Array<TaskPlanLink>) => void) => void;
}

/*********************************************
* ITaskPlanLinkQueryCollection
**********************************************/
export interface ITaskPlanLinkQueryCollection extends Base.IBaseResults<TaskPlanLinkOData> {
	done?: (resolve: (value?: Array<TaskPlanLinkOData>) => void) => void;
}

/*********************************************
* ITaskPlanLinkQuery
**********************************************/
export interface ITaskPlanLinkQuery extends TaskPlanLinkOData, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLink
**********************************************/
export interface TaskPlanLink extends Base.IBaseResult, TaskPlanLinkProps, TaskPlanLinkCollections, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLinkProps
**********************************************/
export interface TaskPlanLinkProps {
	Created?: any;
	GroupId?: any;
	Id?: string;
	PlanId?: string;
	ProjectId?: any;
	TaskId?: any;
}

/*********************************************
* TaskPlanLinkPropMethods
**********************************************/
export interface TaskPlanLinkPropMethods {

}

/*********************************************
* TaskPlanLinkCollections
**********************************************/
export interface TaskPlanLinkCollections extends TaskPlanLinkPropMethods {

}

/*********************************************
* TaskPlanLinkOData
**********************************************/
export interface TaskPlanLinkOData extends Base.IBaseResult, TaskPlanLinkProps, TaskPlanLinkMethods {

}

/*********************************************
* TaskPlanLinkMethods
**********************************************/
export interface TaskPlanLinkMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IDraftProject
**********************************************/
export interface IDraftProject extends DraftProjectCollections, DraftProjectMethods, Base.IBaseQuery<DraftProject, IDraftProjectQuery> {

}

/*********************************************
* IDraftProjectCollection
**********************************************/
export interface IDraftProjectCollection extends Base.IBaseResults<DraftProject> {
	done?: (resolve: (value?: Array<DraftProject>) => void) => void;
}

/*********************************************
* IDraftProjectQueryCollection
**********************************************/
export interface IDraftProjectQueryCollection extends Base.IBaseResults<DraftProjectOData> {
	done?: (resolve: (value?: Array<DraftProjectOData>) => void) => void;
}

/*********************************************
* IDraftProjectQuery
**********************************************/
export interface IDraftProjectQuery extends DraftProjectOData, DraftProjectMethods {

}

/*********************************************
* DraftProject
**********************************************/
export interface DraftProject extends PS.Project, Base.IBaseResult, DraftProjectProps, DraftProjectCollections, DraftProjectMethods {

}

/*********************************************
* DraftProjectProps
**********************************************/
export interface DraftProjectProps {
	CurrencyCode?: string;
	CurrencyDigits?: number;
	CurrencyPosition?: number;
	CurrencySymbol?: string;
	CurrentDate?: any;
	DaysPerMonth?: number;
	DefaultEffortDriven?: boolean;
	DefaultEstimatedDuration?: boolean;
	DefaultFixedCostAccrual?: number;
	DefaultOvertimeRate?: number;
	DefaultStandardRate?: number;
	DefaultTaskType?: number;
	DefaultWorkFormat?: number;
	Description?: string;
	FinishDate?: any;
	FiscalYearStartMonth?: number;
	MinutesPerDay?: number;
	MinutesPerWeek?: number;
	Name?: string;
	NewTasksAreManual?: boolean;
	NumberFiscalYearFromStart?: boolean;
	OwnerId?: string;
	ProjectIdentifier?: string;
	ProtectedActualsSynch?: boolean;
	ScheduledFromStart?: boolean;
	ShowEstimatedDurations?: boolean;
	StartDate?: any;
	StatusDate?: any;
	TrackingMode?: number;
	UtilizationDate?: any;
	UtilizationType?: number;
	WeekStartDay?: number;
	WinprojVersion?: number;
}

/*********************************************
* DraftProjectPropMethods
**********************************************/
export interface DraftProjectPropMethods {
	Calendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	IncludeCustomFields(): Base.IBaseQuery<PS.DraftProject, PS.DraftProjectOData> & PS.DraftProjectCollections;
	Owner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftProjectCollections
**********************************************/
export interface DraftProjectCollections extends DraftProjectPropMethods {
	Assignments(): Base.IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentOData, Base.IBaseExecution & PS.DraftAssignmentCollectionMethods> & Base.IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentOData> & PS.DraftAssignmentCollections;
	ProjectResources(): Base.IBaseCollection<PS.DraftProjectResource, PS.DraftProjectResourceOData, Base.IBaseExecution & PS.DraftProjectResourceCollectionMethods> & Base.IBaseExecution & PS.DraftProjectResourceCollectionMethods;
	ProjectResources(id: string | number): Base.IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceOData> & PS.DraftProjectResourceCollections;
	TaskLinks(): Base.IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkOData, Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods> & Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	TaskLinks(id: string | number): Base.IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkOData> & PS.DraftTaskLinkCollections;
	Tasks(): Base.IBaseCollection<PS.DraftTask, PS.DraftTaskOData, Base.IBaseExecution & PS.DraftTaskCollectionMethods> & Base.IBaseExecution & PS.DraftTaskCollectionMethods;
	Tasks(id: string | number): Base.IBaseQuery<PS.DraftTask, PS.DraftTaskOData> & PS.DraftTaskCollections;
}

/*********************************************
* DraftProjectOData
**********************************************/
export interface DraftProjectOData extends Base.IBaseResult, DraftProjectProps, DraftProjectMethods {
	Assignments: Base.IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	IncludeCustomFields: PS.DraftProject & PS.DraftProjectCollections;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	ProjectResources: Base.IBaseResults<PS.DraftProjectResource> & PS.DraftProjectResourceCollectionMethods;
	TaskLinks: Base.IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	Tasks: Base.IBaseResults<PS.DraftTask> & PS.DraftTaskCollectionMethods;
}

/*********************************************
* DraftProjectMethods
**********************************************/
export interface DraftProjectMethods {

}

/*********************************************
* IDraftProjectResource
**********************************************/
export interface IDraftProjectResource extends DraftProjectResourceCollections, DraftProjectResourceMethods, Base.IBaseQuery<DraftProjectResource, IDraftProjectResourceQuery> {

}

/*********************************************
* IDraftProjectResourceCollection
**********************************************/
export interface IDraftProjectResourceCollection extends Base.IBaseResults<DraftProjectResource>, DraftProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<DraftProjectResource>) => void) => void;
}

/*********************************************
* IDraftProjectResourceQueryCollection
**********************************************/
export interface IDraftProjectResourceQueryCollection extends Base.IBaseResults<DraftProjectResourceOData>, DraftProjectResourceCollectionMethods {
	done?: (resolve: (value?: Array<DraftProjectResourceOData>) => void) => void;
}

/*********************************************
* IDraftProjectResourceQuery
**********************************************/
export interface IDraftProjectResourceQuery extends DraftProjectResourceOData, DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResource
**********************************************/
export interface DraftProjectResource extends PS.ProjectResource, Base.IBaseResult, DraftProjectResourceProps, DraftProjectResourceCollections, DraftProjectResourceMethods {

}

/*********************************************
* DraftProjectResourceProps
**********************************************/
export interface DraftProjectResourceProps {
	CanLevel?: boolean;
	Code?: string;
	CostAccrual?: number;
	CostCenter?: string;
	CostPerUse?: number;
	DefaultBookingType?: number;
	Email?: string;
	Group?: string;
	Initials?: string;
	MaterialLabel?: string;
	MaximumCapacity?: number;
	Name?: string;
	OvertimeRate?: number;
	OvertimeRateUnits?: number;
	Phonetics?: string;
	StandardRate?: number;
	StandardRateUnits?: number;
}

/*********************************************
* DraftProjectResourcePropMethods
**********************************************/
export interface DraftProjectResourcePropMethods {
	DefaultAssignmentOwner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftProjectResourceCollections
**********************************************/
export interface DraftProjectResourceCollections extends DraftProjectResourcePropMethods {
	Assignments(): Base.IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentOData, Base.IBaseExecution & PS.DraftAssignmentCollectionMethods> & Base.IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentOData> & PS.DraftAssignmentCollections;
}

/*********************************************
* DraftProjectResourceCollectionMethods
**********************************************/
export interface DraftProjectResourceCollectionMethods {
	add(parameters?: PS.ProjectResourceCreationInformation): Base.IBaseExecution<PS.DraftProjectResource>;
	addEnterpriseResourceById(resourceId?: any): Base.IBaseExecution<PS.QueueJob>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceOData> & PS.DraftProjectResourceCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.DraftProjectResource, PS.DraftProjectResourceOData> & PS.DraftProjectResourceCollections;
}

/*********************************************
* DraftProjectResourceOData
**********************************************/
export interface DraftProjectResourceOData extends Base.IBaseResult, DraftProjectResourceProps, DraftProjectResourceMethods {
	Assignments: Base.IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	DefaultAssignmentOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* DraftProjectResourceMethods
**********************************************/
export interface DraftProjectResourceMethods {

}

/*********************************************
* DraftTaskLink
**********************************************/
export interface DraftTaskLink {
	DependencyType?: number;
	EndId?: any;
	LinkLagDuration?: string;
	StartId?: any;
}

/*********************************************
* DraftTaskLinkCollections
**********************************************/
export interface DraftTaskLinkCollections extends DraftTaskLinkCollectionMethods {

}

/*********************************************
* DraftTaskLinkOData
**********************************************/
export interface DraftTaskLinkOData extends Base.IBaseResult, DraftTaskLink {
	End: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
	Start: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
}

/*********************************************
* DraftTaskLinkCollectionMethods
**********************************************/
export interface DraftTaskLinkCollectionMethods {
	add(parameters?: PS.TaskLinkCreationInformation): Base.IBaseExecution<PS.DraftTaskLink>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkOData> & PS.DraftTaskLinkCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkOData> & PS.DraftTaskLinkCollections;
}

/*********************************************
* IDraftTask
**********************************************/
export interface IDraftTask extends DraftTaskCollections, DraftTaskMethods, Base.IBaseQuery<DraftTask, IDraftTaskQuery> {

}

/*********************************************
* IDraftTaskCollection
**********************************************/
export interface IDraftTaskCollection extends Base.IBaseResults<DraftTask>, DraftTaskCollectionMethods {
	done?: (resolve: (value?: Array<DraftTask>) => void) => void;
}

/*********************************************
* IDraftTaskQueryCollection
**********************************************/
export interface IDraftTaskQueryCollection extends Base.IBaseResults<DraftTaskOData>, DraftTaskCollectionMethods {
	done?: (resolve: (value?: Array<DraftTaskOData>) => void) => void;
}

/*********************************************
* IDraftTaskQuery
**********************************************/
export interface IDraftTaskQuery extends DraftTaskOData, DraftTaskMethods {

}

/*********************************************
* DraftTask
**********************************************/
export interface DraftTask extends PS.Task, Base.IBaseResult, DraftTaskProps, DraftTaskCollections, DraftTaskMethods {

}

/*********************************************
* DraftTaskProps
**********************************************/
export interface DraftTaskProps {
	ActualCost?: number;
	ActualFinish?: any;
	ActualStart?: any;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	AddAfterId?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Completion?: any;
	ConstraintStartEnd?: any;
	ConstraintType?: number;
	Cost?: number;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	FixedCost?: number;
	IsActive?: boolean;
	IsEffortDriven?: boolean;
	IsLockedByManager?: boolean;
	IsManual?: boolean;
	IsMarked?: boolean;
	IsMilestone?: boolean;
	LevelingAdjustsAssignments?: boolean;
	LevelingCanSplit?: boolean;
	Name?: string;
	OutlineLevel?: number;
	ParentId?: any;
	PercentComplete?: number;
	PercentPhysicalWorkComplete?: number;
	Priority?: number;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	Start?: any;
	StartText?: string;
	TaskType?: number;
	UsePercentPhysicalWorkComplete?: boolean;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* DraftTaskPropMethods
**********************************************/
export interface DraftTaskPropMethods {
	Calendar(): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	Parent(): Base.IBaseQuery<PS.DraftTask, PS.DraftTaskOData> & PS.DraftTaskCollections;
	StatusManager(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* DraftTaskCollections
**********************************************/
export interface DraftTaskCollections extends DraftTaskPropMethods {
	Assignments(): Base.IBaseCollection<PS.DraftAssignment, PS.DraftAssignmentOData, Base.IBaseExecution & PS.DraftAssignmentCollectionMethods> & Base.IBaseExecution & PS.DraftAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.DraftAssignment, PS.DraftAssignmentOData> & PS.DraftAssignmentCollections;
	Predecessors(): Base.IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkOData, Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods> & Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	Predecessors(id: string | number): Base.IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkOData> & PS.DraftTaskLinkCollections;
	Successors(): Base.IBaseCollection<PS.DraftTaskLink, PS.DraftTaskLinkOData, Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods> & Base.IBaseExecution & PS.DraftTaskLinkCollectionMethods;
	Successors(id: string | number): Base.IBaseQuery<PS.DraftTaskLink, PS.DraftTaskLinkOData> & PS.DraftTaskLinkCollections;
}

/*********************************************
* DraftTaskCollectionMethods
**********************************************/
export interface DraftTaskCollectionMethods {
	add(parameters?: PS.TaskCreationInformation): Base.IBaseExecution<PS.DraftTask>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.DraftTask, PS.DraftTaskOData> & PS.DraftTaskCollections;
	getById(objectId?: string): Base.IBaseQuery<PS.DraftTask, PS.DraftTaskOData> & PS.DraftTaskCollections;
}

/*********************************************
* DraftTaskOData
**********************************************/
export interface DraftTaskOData extends Base.IBaseResult, DraftTaskProps, DraftTaskMethods {
	Assignments: Base.IBaseResults<PS.DraftAssignment> & PS.DraftAssignmentCollectionMethods;
	Calendar: PS.Calendar & PS.CalendarCollections & PS.CalendarCollectionMethods;
	Parent: PS.DraftTask & PS.DraftTaskCollections & PS.DraftTaskCollectionMethods;
	Predecessors: Base.IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Successors: Base.IBaseResults<PS.DraftTaskLink> & PS.DraftTaskLinkCollectionMethods;
}

/*********************************************
* DraftTaskMethods
**********************************************/
export interface DraftTaskMethods {

}

/*********************************************
* IProjectWorkflowInstance
**********************************************/
export interface IProjectWorkflowInstance extends ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods, Base.IBaseQuery<ProjectWorkflowInstance, IProjectWorkflowInstanceQuery> {

}

/*********************************************
* IProjectWorkflowInstanceCollection
**********************************************/
export interface IProjectWorkflowInstanceCollection extends Base.IBaseResults<ProjectWorkflowInstance>, ProjectWorkflowInstanceCollectionMethods {
	done?: (resolve: (value?: Array<ProjectWorkflowInstance>) => void) => void;
}

/*********************************************
* IProjectWorkflowInstanceQueryCollection
**********************************************/
export interface IProjectWorkflowInstanceQueryCollection extends Base.IBaseResults<ProjectWorkflowInstanceOData>, ProjectWorkflowInstanceCollectionMethods {
	done?: (resolve: (value?: Array<ProjectWorkflowInstanceOData>) => void) => void;
}

/*********************************************
* IProjectWorkflowInstanceQuery
**********************************************/
export interface IProjectWorkflowInstanceQuery extends ProjectWorkflowInstanceOData, ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstance
**********************************************/
export interface ProjectWorkflowInstance extends Base.IBaseResult, ProjectWorkflowInstanceProps, ProjectWorkflowInstanceCollections, ProjectWorkflowInstanceMethods {

}

/*********************************************
* ProjectWorkflowInstanceProps
**********************************************/
export interface ProjectWorkflowInstanceProps {
	CreatedDate?: any;
	Id?: any;
	LastSubmittedDate?: any;
	WorkflowError?: string;
	WorkflowErrorResponseCode?: number;
	WorkflowState?: number;
}

/*********************************************
* ProjectWorkflowInstancePropMethods
**********************************************/
export interface ProjectWorkflowInstancePropMethods {
	Project(): Base.IBaseQuery<PS.Project, PS.ProjectOData> & PS.ProjectCollections & PS.ProjectMethods;
	WorkflowInstance(): Base.IBaseExecution<SP.WorkflowServices.WorkflowInstance> & SP.WorkflowServices.WorkflowInstanceCollections;
	WorkflowInstanceOwner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* ProjectWorkflowInstanceCollections
**********************************************/
export interface ProjectWorkflowInstanceCollections extends ProjectWorkflowInstancePropMethods {

}

/*********************************************
* ProjectWorkflowInstanceCollectionMethods
**********************************************/
export interface ProjectWorkflowInstanceCollectionMethods {
	getById(objectId?: string): Base.IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceOData> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
}

/*********************************************
* ProjectWorkflowInstanceOData
**********************************************/
export interface ProjectWorkflowInstanceOData extends Base.IBaseResult, ProjectWorkflowInstanceProps, ProjectWorkflowInstanceMethods {
	Project: PS.Project & PS.ProjectCollections;
	WorkflowInstance: SP.WorkflowServices.WorkflowInstance & SP.WorkflowServices.WorkflowInstanceCollections;
	WorkflowInstanceOwner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* ProjectWorkflowInstanceMethods
**********************************************/
export interface ProjectWorkflowInstanceMethods {
	restartWorkflow(): Base.IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	restartWorkflowSkipToStage(stageId?: any): Base.IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
}

/*********************************************
* ProjectSummaryTask
**********************************************/
export interface ProjectSummaryTask {
	ActualCost?: number;
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	BudgetWork?: string;
	BudgetWorkMilliseconds?: number;
	BudgetWorkTimeSpan?: any;
	Cost?: number;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	FinishText?: string;
	Name?: string;
	PercentComplete?: number;
	Priority?: number;
	Start?: any;
	StartText?: string;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* ProjectSummaryTaskCollections
**********************************************/
export interface ProjectSummaryTaskCollections {

}

/*********************************************
* IQueueJob
**********************************************/
export interface IQueueJob extends QueueJobCollections, QueueJobMethods, Base.IBaseQuery<QueueJob, IQueueJobQuery> {

}

/*********************************************
* IQueueJobCollection
**********************************************/
export interface IQueueJobCollection extends Base.IBaseResults<QueueJob>, QueueJobCollectionMethods {
	done?: (resolve: (value?: Array<QueueJob>) => void) => void;
}

/*********************************************
* IQueueJobQueryCollection
**********************************************/
export interface IQueueJobQueryCollection extends Base.IBaseResults<QueueJobOData>, QueueJobCollectionMethods {
	done?: (resolve: (value?: Array<QueueJobOData>) => void) => void;
}

/*********************************************
* IQueueJobQuery
**********************************************/
export interface IQueueJobQuery extends QueueJobOData, QueueJobMethods {

}

/*********************************************
* QueueJob
**********************************************/
export interface QueueJob extends Base.IBaseResult, QueueJobProps, QueueJobCollections, QueueJobMethods {

}

/*********************************************
* QueueJobProps
**********************************************/
export interface QueueJobProps {
	Id?: any;
	JobState?: number;
	MessageType?: number;
	PercentComplete?: number;
	WaitMilliseconds?: number;
	WaitTime?: any;
}

/*********************************************
* QueueJobPropMethods
**********************************************/
export interface QueueJobPropMethods {
	Project(): Base.IBaseQuery<PS.Project, PS.ProjectOData> & PS.ProjectCollections & PS.ProjectMethods;
	Submitter(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* QueueJobCollections
**********************************************/
export interface QueueJobCollections extends QueueJobPropMethods {

}

/*********************************************
* QueueJobCollectionMethods
**********************************************/
export interface QueueJobCollectionMethods {
	getAll(): Base.IBaseExecution<Array<PS.QueueJob>>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* QueueJobOData
**********************************************/
export interface QueueJobOData extends Base.IBaseResult, QueueJobProps, QueueJobMethods {
	Project: PS.Project & PS.ProjectCollections;
	Submitter: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* QueueJobMethods
**********************************************/
export interface QueueJobMethods {
	cancel(): Base.IBaseExecution<any>;
}

/*********************************************
* IStatusTask
**********************************************/
export interface IStatusTask extends StatusTaskCollections, StatusTaskMethods, Base.IBaseQuery<StatusTask, IStatusTaskQuery> {

}

/*********************************************
* IStatusTaskCollection
**********************************************/
export interface IStatusTaskCollection extends Base.IBaseResults<StatusTask> {
	done?: (resolve: (value?: Array<StatusTask>) => void) => void;
}

/*********************************************
* IStatusTaskQueryCollection
**********************************************/
export interface IStatusTaskQueryCollection extends Base.IBaseResults<StatusTaskOData> {
	done?: (resolve: (value?: Array<StatusTaskOData>) => void) => void;
}

/*********************************************
* IStatusTaskQuery
**********************************************/
export interface IStatusTaskQuery extends StatusTaskOData, StatusTaskMethods {

}

/*********************************************
* StatusTask
**********************************************/
export interface StatusTask extends Base.IBaseResult, StatusTaskProps, StatusTaskCollections, StatusTaskMethods {

}

/*********************************************
* StatusTaskProps
**********************************************/
export interface StatusTaskProps {
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	Deadline?: any;
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	Finish?: any;
	Id?: any;
	Name?: string;
	Overtime?: string;
	OvertimeMilliseconds?: number;
	OvertimeTimeSpan?: any;
	PercentComplete?: number;
	PercentWorkComplete?: number;
	PhysicalPercentComplete?: number;
	ProjectTaskId?: any;
	RegularWork?: string;
	RegularWorkMilliseconds?: number;
	RegularWorkTimeSpan?: any;
	RemainingDuration?: string;
	RemainingDurationMilliseconds?: number;
	RemainingDurationTimeSpan?: any;
	RemainingOvertime?: string;
	RemainingOvertimeMilliseconds?: number;
	RemainingOvertimeTimeSpan?: any;
	RemainingWork?: string;
	RemainingWorkMilliseconds?: number;
	RemainingWorkTimeSpan?: any;
	Resume?: any;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* StatusTaskPropMethods
**********************************************/
export interface StatusTaskPropMethods {
	StatusManager(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* StatusTaskCollections
**********************************************/
export interface StatusTaskCollections extends StatusTaskPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
}

/*********************************************
* StatusTaskOData
**********************************************/
export interface StatusTaskOData extends Base.IBaseResult, StatusTaskProps, StatusTaskMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	StatusManager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
}

/*********************************************
* StatusTaskMethods
**********************************************/
export interface StatusTaskMethods {

}

/*********************************************
* IEnterpriseResourceCostRateTable
**********************************************/
export interface IEnterpriseResourceCostRateTable extends EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods, Base.IBaseQuery<EnterpriseResourceCostRateTable, IEnterpriseResourceCostRateTableQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateTableCollection
**********************************************/
export interface IEnterpriseResourceCostRateTableCollection extends Base.IBaseResults<EnterpriseResourceCostRateTable> {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateTable>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateTableQueryCollection
**********************************************/
export interface IEnterpriseResourceCostRateTableQueryCollection extends Base.IBaseResults<EnterpriseResourceCostRateTableOData> {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateTableOData>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateTableQuery
**********************************************/
export interface IEnterpriseResourceCostRateTableQuery extends EnterpriseResourceCostRateTableOData, EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTable
**********************************************/
export interface EnterpriseResourceCostRateTable extends Base.IBaseResult, EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableCollections, EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* EnterpriseResourceCostRateTableProps
**********************************************/
export interface EnterpriseResourceCostRateTableProps {
	Name?: number;
}

/*********************************************
* EnterpriseResourceCostRateTablePropMethods
**********************************************/
export interface EnterpriseResourceCostRateTablePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateTableCollections
**********************************************/
export interface EnterpriseResourceCostRateTableCollections extends EnterpriseResourceCostRateTablePropMethods {
	CostRates(): Base.IBaseCollection<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollectionMethods;
	CostRates(id: string | number): Base.IBaseQuery<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollections & PS.EnterpriseResourceCostRateMethods;
}

/*********************************************
* EnterpriseResourceCostRateTableOData
**********************************************/
export interface EnterpriseResourceCostRateTableOData extends Base.IBaseResult, EnterpriseResourceCostRateTableProps, EnterpriseResourceCostRateTableMethods {
	CostRates: Base.IBaseResults<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollectionMethods;
}

/*********************************************
* EnterpriseResourceCostRateTableMethods
**********************************************/
export interface EnterpriseResourceCostRateTableMethods {

}

/*********************************************
* IEnterpriseResourceCostRate
**********************************************/
export interface IEnterpriseResourceCostRate extends EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods, Base.IBaseQuery<EnterpriseResourceCostRate, IEnterpriseResourceCostRateQuery> {

}

/*********************************************
* IEnterpriseResourceCostRateCollection
**********************************************/
export interface IEnterpriseResourceCostRateCollection extends Base.IBaseResults<EnterpriseResourceCostRate>, EnterpriseResourceCostRateCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRate>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateQueryCollection
**********************************************/
export interface IEnterpriseResourceCostRateQueryCollection extends Base.IBaseResults<EnterpriseResourceCostRateOData>, EnterpriseResourceCostRateCollectionMethods {
	done?: (resolve: (value?: Array<EnterpriseResourceCostRateOData>) => void) => void;
}

/*********************************************
* IEnterpriseResourceCostRateQuery
**********************************************/
export interface IEnterpriseResourceCostRateQuery extends EnterpriseResourceCostRateOData, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRate
**********************************************/
export interface EnterpriseResourceCostRate extends Base.IBaseResult, EnterpriseResourceCostRateProps, EnterpriseResourceCostRateCollections, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRateProps
**********************************************/
export interface EnterpriseResourceCostRateProps {
	CostPerUse?: number;
	EffectiveStarting?: any;
	EffectiveUntil?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* EnterpriseResourceCostRatePropMethods
**********************************************/
export interface EnterpriseResourceCostRatePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateCollections
**********************************************/
export interface EnterpriseResourceCostRateCollections extends EnterpriseResourceCostRatePropMethods {

}

/*********************************************
* EnterpriseResourceCostRateCollectionMethods
**********************************************/
export interface EnterpriseResourceCostRateCollectionMethods {
	add(parameters?: PS.CostRateCreationInformation): Base.IBaseExecution<PS.EnterpriseResourceCostRate>;
	getByDateUrl(effectiveDate?: string): Base.IBaseQuery<PS.EnterpriseResourceCostRate> & PS.EnterpriseResourceCostRateCollections & PS.EnterpriseResourceCostRateMethods;
}

/*********************************************
* EnterpriseResourceCostRateOData
**********************************************/
export interface EnterpriseResourceCostRateOData extends Base.IBaseResult, EnterpriseResourceCostRateProps, EnterpriseResourceCostRateMethods {

}

/*********************************************
* EnterpriseResourceCostRateMethods
**********************************************/
export interface EnterpriseResourceCostRateMethods {
	restfulDelete(): Base.IBaseExecution<any>;
	rESTfulUpdate(): Base.IBaseExecution<any>;
}

/*********************************************
* IResourceEngagement
**********************************************/
export interface IResourceEngagement extends ResourceEngagementCollections, ResourceEngagementMethods, Base.IBaseQuery<ResourceEngagement, IResourceEngagementQuery> {

}

/*********************************************
* IResourceEngagementCollection
**********************************************/
export interface IResourceEngagementCollection extends Base.IBaseResults<ResourceEngagement>, ResourceEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ResourceEngagement>) => void) => void;
}

/*********************************************
* IResourceEngagementQueryCollection
**********************************************/
export interface IResourceEngagementQueryCollection extends Base.IBaseResults<ResourceEngagementOData>, ResourceEngagementCollectionMethods {
	done?: (resolve: (value?: Array<ResourceEngagementOData>) => void) => void;
}

/*********************************************
* IResourceEngagementQuery
**********************************************/
export interface IResourceEngagementQuery extends ResourceEngagementOData, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagement
**********************************************/
export interface ResourceEngagement extends PS.Engagement, Base.IBaseResult, ResourceEngagementProps, ResourceEngagementCollections, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagementProps
**********************************************/
export interface ResourceEngagementProps {
	ApprovedFinish?: any;
	ApprovedMaxUnits?: number;
	ApprovedStart?: any;
	ApprovedWork?: string;
	ApprovedWorkMilliseconds?: number;
	ApprovedWorkTimeSpan?: any;
	RequestedFinish?: any;
	RequestedMaxUnits?: number;
	RequestedStart?: any;
	RequestedWork?: string;
	RequestedWorkMilliseconds?: number;
	RequestedWorkTimeSpan?: any;
}

/*********************************************
* ResourceEngagementPropMethods
**********************************************/
export interface ResourceEngagementPropMethods {

}

/*********************************************
* ResourceEngagementCollections
**********************************************/
export interface ResourceEngagementCollections extends ResourceEngagementPropMethods {

}

/*********************************************
* ResourceEngagementCollectionMethods
**********************************************/
export interface ResourceEngagementCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.ResourceEngagement> & PS.ResourceEngagementCollections & PS.ResourceEngagementMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementOData
**********************************************/
export interface ResourceEngagementOData extends Base.IBaseResult, ResourceEngagementProps, ResourceEngagementMethods {

}

/*********************************************
* ResourceEngagementMethods
**********************************************/
export interface ResourceEngagementMethods {
	delete(): Base.IBaseExecution<any>;
	getTimephasedByUrl(start?: string, end?: string, scale?: string, contourType?: string): Base.IBaseCollection<PS.ResourceEngagementTimephasedPeriod> & PS.ResourceEngagementTimephasedPeriodCollectionMethods;
}

/*********************************************
* EngagementTimephasedPeriod
**********************************************/
export interface EngagementTimephasedPeriod {
	End?: any;
	MaxUnits?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* EngagementTimephasedPeriodCollections
**********************************************/
export interface EngagementTimephasedPeriodCollections {

}

/*********************************************
* EntityTypes
**********************************************/
export interface EntityTypes {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EntityTypesCollections
**********************************************/
export interface EntityTypesCollections {

}

/*********************************************
* EntityTypesOData
**********************************************/
export interface EntityTypesOData extends Base.IBaseResult, EntityTypes {
	AssignmentEntity: PS.EntityType & PS.EntityTypeCollections;
	ProjectEntity: PS.EntityType & PS.EntityTypeCollections;
	ResourceEntity: PS.EntityType & PS.EntityTypeCollections;
	TaskEntity: PS.EntityType & PS.EntityTypeCollections;
}

/*********************************************
* Event
**********************************************/
export interface Event {
	EventName?: string;
	Id?: number;
	SourceName?: string;
}

/*********************************************
* EventCollections
**********************************************/
export interface EventCollections extends EventCollectionMethods {

}

/*********************************************
* EventCollectionMethods
**********************************************/
export interface EventCollectionMethods {
	getById(objectId?: string): Base.IBaseQuery<PS.Event> & PS.EventCollections;
	getByInt(id?: number): Base.IBaseQuery<PS.Event> & PS.EventCollections;
}

/*********************************************
* IEventHandler
**********************************************/
export interface IEventHandler extends EventHandlerCollections, EventHandlerMethods, Base.IBaseQuery<EventHandler, IEventHandlerQuery> {

}

/*********************************************
* IEventHandlerCollection
**********************************************/
export interface IEventHandlerCollection extends Base.IBaseResults<EventHandler>, EventHandlerCollectionMethods {
	done?: (resolve: (value?: Array<EventHandler>) => void) => void;
}

/*********************************************
* IEventHandlerQueryCollection
**********************************************/
export interface IEventHandlerQueryCollection extends Base.IBaseResults<EventHandlerOData>, EventHandlerCollectionMethods {
	done?: (resolve: (value?: Array<EventHandlerOData>) => void) => void;
}

/*********************************************
* IEventHandlerQuery
**********************************************/
export interface IEventHandlerQuery extends EventHandlerOData, EventHandlerMethods {

}

/*********************************************
* EventHandler
**********************************************/
export interface EventHandler extends Base.IBaseResult, EventHandlerProps, EventHandlerCollections, EventHandlerMethods {

}

/*********************************************
* EventHandlerProps
**********************************************/
export interface EventHandlerProps {
	AssemblyName?: string;
	ClassName?: string;
	Description?: string;
	EndpointUrl?: string;
	EventId?: number;
	Id?: any;
	Name?: string;
	Order?: number;
}

/*********************************************
* EventHandlerPropMethods
**********************************************/
export interface EventHandlerPropMethods {
	Event(): Base.IBaseExecution<PS.Event> & PS.EventCollections;
}

/*********************************************
* EventHandlerCollections
**********************************************/
export interface EventHandlerCollections extends EventHandlerPropMethods {

}

/*********************************************
* EventHandlerCollectionMethods
**********************************************/
export interface EventHandlerCollectionMethods {
	add(parameters?: PS.EventHandlerCreationInformation): Base.IBaseExecution<PS.EventHandler>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.EventHandler, PS.EventHandlerOData> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.EventHandler, PS.EventHandlerOData> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* EventHandlerOData
**********************************************/
export interface EventHandlerOData extends Base.IBaseResult, EventHandlerProps, EventHandlerMethods {
	Event: PS.Event & PS.EventCollections & PS.EventCollectionMethods;
}

/*********************************************
* EventHandlerMethods
**********************************************/
export interface EventHandlerMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupCost
**********************************************/
export interface ILookupCost extends LookupCostCollections, LookupCostMethods, Base.IBaseQuery<LookupCost, ILookupCostQuery> {

}

/*********************************************
* ILookupCostCollection
**********************************************/
export interface ILookupCostCollection extends Base.IBaseResults<LookupCost> {
	done?: (resolve: (value?: Array<LookupCost>) => void) => void;
}

/*********************************************
* ILookupCostQueryCollection
**********************************************/
export interface ILookupCostQueryCollection extends Base.IBaseResults<LookupCostOData> {
	done?: (resolve: (value?: Array<LookupCostOData>) => void) => void;
}

/*********************************************
* ILookupCostQuery
**********************************************/
export interface ILookupCostQuery extends LookupCostOData, LookupCostMethods {

}

/*********************************************
* LookupCost
**********************************************/
export interface LookupCost extends PS.LookupEntry, Base.IBaseResult, LookupCostProps, LookupCostCollections, LookupCostMethods {

}

/*********************************************
* LookupCostProps
**********************************************/
export interface LookupCostProps {
	Value?: number;
}

/*********************************************
* LookupCostPropMethods
**********************************************/
export interface LookupCostPropMethods {

}

/*********************************************
* LookupCostCollections
**********************************************/
export interface LookupCostCollections extends LookupCostPropMethods {

}

/*********************************************
* LookupCostOData
**********************************************/
export interface LookupCostOData extends Base.IBaseResult, LookupCostProps, LookupCostMethods {

}

/*********************************************
* LookupCostMethods
**********************************************/
export interface LookupCostMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupDate
**********************************************/
export interface ILookupDate extends LookupDateCollections, LookupDateMethods, Base.IBaseQuery<LookupDate, ILookupDateQuery> {

}

/*********************************************
* ILookupDateCollection
**********************************************/
export interface ILookupDateCollection extends Base.IBaseResults<LookupDate> {
	done?: (resolve: (value?: Array<LookupDate>) => void) => void;
}

/*********************************************
* ILookupDateQueryCollection
**********************************************/
export interface ILookupDateQueryCollection extends Base.IBaseResults<LookupDateOData> {
	done?: (resolve: (value?: Array<LookupDateOData>) => void) => void;
}

/*********************************************
* ILookupDateQuery
**********************************************/
export interface ILookupDateQuery extends LookupDateOData, LookupDateMethods {

}

/*********************************************
* LookupDate
**********************************************/
export interface LookupDate extends PS.LookupEntry, Base.IBaseResult, LookupDateProps, LookupDateCollections, LookupDateMethods {

}

/*********************************************
* LookupDateProps
**********************************************/
export interface LookupDateProps {
	Value?: any;
}

/*********************************************
* LookupDatePropMethods
**********************************************/
export interface LookupDatePropMethods {

}

/*********************************************
* LookupDateCollections
**********************************************/
export interface LookupDateCollections extends LookupDatePropMethods {

}

/*********************************************
* LookupDateOData
**********************************************/
export interface LookupDateOData extends Base.IBaseResult, LookupDateProps, LookupDateMethods {

}

/*********************************************
* LookupDateMethods
**********************************************/
export interface LookupDateMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupDuration
**********************************************/
export interface ILookupDuration extends LookupDurationCollections, LookupDurationMethods, Base.IBaseQuery<LookupDuration, ILookupDurationQuery> {

}

/*********************************************
* ILookupDurationCollection
**********************************************/
export interface ILookupDurationCollection extends Base.IBaseResults<LookupDuration> {
	done?: (resolve: (value?: Array<LookupDuration>) => void) => void;
}

/*********************************************
* ILookupDurationQueryCollection
**********************************************/
export interface ILookupDurationQueryCollection extends Base.IBaseResults<LookupDurationOData> {
	done?: (resolve: (value?: Array<LookupDurationOData>) => void) => void;
}

/*********************************************
* ILookupDurationQuery
**********************************************/
export interface ILookupDurationQuery extends LookupDurationOData, LookupDurationMethods {

}

/*********************************************
* LookupDuration
**********************************************/
export interface LookupDuration extends PS.LookupEntry, Base.IBaseResult, LookupDurationProps, LookupDurationCollections, LookupDurationMethods {

}

/*********************************************
* LookupDurationProps
**********************************************/
export interface LookupDurationProps {
	Value?: string;
	ValueMilliseconds?: number;
	ValueTimeSpan?: any;
}

/*********************************************
* LookupDurationPropMethods
**********************************************/
export interface LookupDurationPropMethods {

}

/*********************************************
* LookupDurationCollections
**********************************************/
export interface LookupDurationCollections extends LookupDurationPropMethods {

}

/*********************************************
* LookupDurationOData
**********************************************/
export interface LookupDurationOData extends Base.IBaseResult, LookupDurationProps, LookupDurationMethods {

}

/*********************************************
* LookupDurationMethods
**********************************************/
export interface LookupDurationMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupNumber
**********************************************/
export interface ILookupNumber extends LookupNumberCollections, LookupNumberMethods, Base.IBaseQuery<LookupNumber, ILookupNumberQuery> {

}

/*********************************************
* ILookupNumberCollection
**********************************************/
export interface ILookupNumberCollection extends Base.IBaseResults<LookupNumber> {
	done?: (resolve: (value?: Array<LookupNumber>) => void) => void;
}

/*********************************************
* ILookupNumberQueryCollection
**********************************************/
export interface ILookupNumberQueryCollection extends Base.IBaseResults<LookupNumberOData> {
	done?: (resolve: (value?: Array<LookupNumberOData>) => void) => void;
}

/*********************************************
* ILookupNumberQuery
**********************************************/
export interface ILookupNumberQuery extends LookupNumberOData, LookupNumberMethods {

}

/*********************************************
* LookupNumber
**********************************************/
export interface LookupNumber extends PS.LookupEntry, Base.IBaseResult, LookupNumberProps, LookupNumberCollections, LookupNumberMethods {

}

/*********************************************
* LookupNumberProps
**********************************************/
export interface LookupNumberProps {
	Value?: number;
}

/*********************************************
* LookupNumberPropMethods
**********************************************/
export interface LookupNumberPropMethods {

}

/*********************************************
* LookupNumberCollections
**********************************************/
export interface LookupNumberCollections extends LookupNumberPropMethods {

}

/*********************************************
* LookupNumberOData
**********************************************/
export interface LookupNumberOData extends Base.IBaseResult, LookupNumberProps, LookupNumberMethods {

}

/*********************************************
* LookupNumberMethods
**********************************************/
export interface LookupNumberMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ILookupText
**********************************************/
export interface ILookupText extends LookupTextCollections, LookupTextMethods, Base.IBaseQuery<LookupText, ILookupTextQuery> {

}

/*********************************************
* ILookupTextCollection
**********************************************/
export interface ILookupTextCollection extends Base.IBaseResults<LookupText> {
	done?: (resolve: (value?: Array<LookupText>) => void) => void;
}

/*********************************************
* ILookupTextQueryCollection
**********************************************/
export interface ILookupTextQueryCollection extends Base.IBaseResults<LookupTextOData> {
	done?: (resolve: (value?: Array<LookupTextOData>) => void) => void;
}

/*********************************************
* ILookupTextQuery
**********************************************/
export interface ILookupTextQuery extends LookupTextOData, LookupTextMethods {

}

/*********************************************
* LookupText
**********************************************/
export interface LookupText extends PS.LookupEntry, Base.IBaseResult, LookupTextProps, LookupTextCollections, LookupTextMethods {

}

/*********************************************
* LookupTextProps
**********************************************/
export interface LookupTextProps {
	HasChildren?: boolean;
	Mask?: PS.LookupMask;
	Value?: string;
}

/*********************************************
* LookupTextPropMethods
**********************************************/
export interface LookupTextPropMethods {
	Parent(): Base.IBaseQuery<PS.LookupText, PS.LookupTextOData> & PS.LookupTextCollections & PS.LookupTextMethods;
}

/*********************************************
* LookupTextCollections
**********************************************/
export interface LookupTextCollections extends LookupTextPropMethods {

}

/*********************************************
* LookupTextOData
**********************************************/
export interface LookupTextOData extends Base.IBaseResult, LookupTextProps, LookupTextMethods {
	Parent: PS.LookupText & PS.LookupTextCollections;
}

/*********************************************
* LookupTextMethods
**********************************************/
export interface LookupTextMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* PageSizes
**********************************************/
export interface PageSizes {
	EngagementsTimephased?: number;
	EnterpriseResources?: number;
	Projects?: number;
}

/*********************************************
* PageSizesCollections
**********************************************/
export interface PageSizesCollections {

}

/*********************************************
* IPlanAssignment
**********************************************/
export interface IPlanAssignment extends PlanAssignmentCollections, PlanAssignmentMethods, Base.IBaseQuery<PlanAssignment, IPlanAssignmentQuery> {

}

/*********************************************
* IPlanAssignmentCollection
**********************************************/
export interface IPlanAssignmentCollection extends Base.IBaseResults<PlanAssignment>, PlanAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<PlanAssignment>) => void) => void;
}

/*********************************************
* IPlanAssignmentQueryCollection
**********************************************/
export interface IPlanAssignmentQueryCollection extends Base.IBaseResults<PlanAssignmentOData>, PlanAssignmentCollectionMethods {
	done?: (resolve: (value?: Array<PlanAssignmentOData>) => void) => void;
}

/*********************************************
* IPlanAssignmentQuery
**********************************************/
export interface IPlanAssignmentQuery extends PlanAssignmentOData, PlanAssignmentMethods {

}

/*********************************************
* PlanAssignment
**********************************************/
export interface PlanAssignment extends Base.IBaseResult, PlanAssignmentProps, PlanAssignmentCollections, PlanAssignmentMethods {

}

/*********************************************
* PlanAssignmentProps
**********************************************/
export interface PlanAssignmentProps {
	BookingType?: number;
	CanLevel?: boolean;
	Code?: string;
	CostCenter?: string;
	Email?: string;
	Group?: string;
	HireDate?: any;
	Id?: any;
	IsTeam?: boolean;
	Name?: string;
	Phonetics?: string;
	ResourceType?: number;
	TerminationDate?: any;
}

/*********************************************
* PlanAssignmentPropMethods
**********************************************/
export interface PlanAssignmentPropMethods {
	Resource(): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
}

/*********************************************
* PlanAssignmentCollections
**********************************************/
export interface PlanAssignmentCollections extends PlanAssignmentPropMethods {
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	Intervals(): Base.IBaseCollection<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Intervals(id: string | number): Base.IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
}

/*********************************************
* PlanAssignmentCollectionMethods
**********************************************/
export interface PlanAssignmentCollectionMethods {
	add(parameters?: PS.PlanAssignmentCreationInformation): Base.IBaseExecution<PS.PlanAssignment>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentOData> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentOData> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
}

/*********************************************
* PlanAssignmentOData
**********************************************/
export interface PlanAssignmentOData extends Base.IBaseResult, PlanAssignmentProps, PlanAssignmentMethods {
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	Intervals: Base.IBaseResults<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollectionMethods;
	Resource: PS.EnterpriseResource & PS.EnterpriseResourceCollections & PS.EnterpriseResourceCollectionMethods;
}

/*********************************************
* PlanAssignmentMethods
**********************************************/
export interface PlanAssignmentMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* PlanAssignmentInterval
**********************************************/
export interface PlanAssignmentInterval {
	Duration?: string;
	DurationMilliseconds?: number;
	DurationTimeSpan?: any;
	End?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* PlanAssignmentIntervalCollections
**********************************************/
export interface PlanAssignmentIntervalCollections extends PlanAssignmentIntervalCollectionMethods {

}

/*********************************************
* PlanAssignmentIntervalCollectionMethods
**********************************************/
export interface PlanAssignmentIntervalCollectionMethods {
	getById(id?: string): Base.IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
	getByStart(start?: any): Base.IBaseQuery<PS.PlanAssignmentInterval> & PS.PlanAssignmentIntervalCollections;
}

/*********************************************
* ProjectEngagementComment
**********************************************/
export interface ProjectEngagementComment {

}

/*********************************************
* ProjectEngagementCommentCollections
**********************************************/
export interface ProjectEngagementCommentCollections {

}

/*********************************************
* ProjectEngagementTimephasedPeriod
**********************************************/
export interface ProjectEngagementTimephasedPeriod {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollections
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollections extends ProjectEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ProjectEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ProjectEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): Base.IBaseQuery<PS.ProjectEngagementTimephasedPeriod> & PS.ProjectEngagementTimephasedPeriodCollections;
}

/*********************************************
* ProjectServerData
**********************************************/
export interface ProjectServerData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProjectServerDataCollections
**********************************************/
export interface ProjectServerDataCollections {

}

/*********************************************
* IProjectServer
**********************************************/
export interface IProjectServer extends ProjectServerCollections, ProjectServerMethods, Base.IBaseQuery<ProjectServer, IProjectServerQuery> {

}

/*********************************************
* IProjectServerCollection
**********************************************/
export interface IProjectServerCollection extends Base.IBaseResults<ProjectServer> {
	done?: (resolve: (value?: Array<ProjectServer>) => void) => void;
}

/*********************************************
* IProjectServerQueryCollection
**********************************************/
export interface IProjectServerQueryCollection extends Base.IBaseResults<ProjectServerOData> {
	done?: (resolve: (value?: Array<ProjectServerOData>) => void) => void;
}

/*********************************************
* IProjectServerQuery
**********************************************/
export interface IProjectServerQuery extends ProjectServerOData, ProjectServerMethods {

}

/*********************************************
* ProjectServer
**********************************************/
export interface ProjectServer extends Base.IBaseResult, ProjectServerProps, ProjectServerCollections, ProjectServerMethods {

}

/*********************************************
* ProjectServerProps
**********************************************/
export interface ProjectServerProps {
	EngagementsTimephasedPageSize?: number;
	EnterpriseResourcesPageSize?: number;
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
	ProjectsPageSize?: number;
}

/*********************************************
* ProjectServerPropMethods
**********************************************/
export interface ProjectServerPropMethods {
	EntityTypes(): Base.IBaseQuery<PS.EntityTypes, PS.EntityTypesOData> & PS.EntityTypesCollections;
	Settings(): Base.IBaseExecution<PS.Settings> & PS.SettingsCollections;
	WorkflowActivities(): Base.IBaseExecution<PS.WorkflowActivities> & PS.WorkflowActivitiesCollections & PS.WorkflowActivitiesMethods;
	WorkflowDesigner(): Base.IBaseQuery<PS.WorkflowDesigner, PS.WorkflowDesignerOData> & PS.WorkflowDesignerCollections;
}

/*********************************************
* ProjectServerCollections
**********************************************/
export interface ProjectServerCollections extends ProjectServerPropMethods {
	Calendars(): Base.IBaseCollection<PS.Calendar, PS.CalendarOData, Base.IBaseExecution & PS.CalendarCollectionMethods> & Base.IBaseExecution & PS.CalendarCollectionMethods;
	Calendars(id: string | number): Base.IBaseQuery<PS.Calendar, PS.CalendarOData> & PS.CalendarCollections & PS.CalendarMethods;
	CustomFields(): Base.IBaseCollection<PS.CustomField, PS.CustomFieldOData, Base.IBaseExecution & PS.CustomFieldCollectionMethods> & Base.IBaseExecution & PS.CustomFieldCollectionMethods;
	CustomFields(id: string | number): Base.IBaseQuery<PS.CustomField, PS.CustomFieldOData> & PS.CustomFieldCollections & PS.CustomFieldMethods;
	EnterpriseProjectTypes(): Base.IBaseCollection<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeOData, Base.IBaseExecution & PS.EnterpriseProjectTypeCollectionMethods> & Base.IBaseExecution & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseProjectTypes(id: string | number): Base.IBaseQuery<PS.EnterpriseProjectType, PS.EnterpriseProjectTypeOData> & PS.EnterpriseProjectTypeCollections & PS.EnterpriseProjectTypeMethods;
	EnterpriseResources(): Base.IBaseCollection<PS.EnterpriseResource, PS.EnterpriseResourceOData, Base.IBaseExecution & PS.EnterpriseResourceCollectionMethods> & Base.IBaseExecution & PS.EnterpriseResourceCollectionMethods;
	EnterpriseResources(id: string | number): Base.IBaseQuery<PS.EnterpriseResource, PS.EnterpriseResourceOData> & PS.EnterpriseResourceCollections & PS.EnterpriseResourceMethods;
	EventHandlers(): Base.IBaseCollection<PS.EventHandler, PS.EventHandlerOData, Base.IBaseExecution & PS.EventHandlerCollectionMethods> & Base.IBaseExecution & PS.EventHandlerCollectionMethods;
	EventHandlers(id: string | number): Base.IBaseQuery<PS.EventHandler, PS.EventHandlerOData> & PS.EventHandlerCollections & PS.EventHandlerMethods;
	Events(): Base.IBaseCollection<PS.Event> & PS.EventCollectionMethods;
	Events(id: string | number): Base.IBaseQuery<PS.Event> & PS.EventCollections;
	LookupTables(): Base.IBaseCollection<PS.LookupTable, PS.LookupTableOData, Base.IBaseExecution & PS.LookupTableCollectionMethods> & Base.IBaseExecution & PS.LookupTableCollectionMethods;
	LookupTables(id: string | number): Base.IBaseQuery<PS.LookupTable, PS.LookupTableOData> & PS.LookupTableCollections & PS.LookupTableMethods;
	Phases(): Base.IBaseCollection<PS.Phase, PS.PhaseOData, Base.IBaseExecution & PS.PhaseCollectionMethods> & Base.IBaseExecution & PS.PhaseCollectionMethods;
	Phases(id: string | number): Base.IBaseQuery<PS.Phase, PS.PhaseOData> & PS.PhaseCollections & PS.PhaseMethods;
	ProjectDetailPages(): Base.IBaseCollection<PS.ProjectDetailPage, PS.ProjectDetailPageOData, Base.IBaseExecution & PS.ProjectDetailPageCollectionMethods> & Base.IBaseExecution & PS.ProjectDetailPageCollectionMethods;
	ProjectDetailPages(id: string | number): Base.IBaseQuery<PS.ProjectDetailPage, PS.ProjectDetailPageOData> & PS.ProjectDetailPageCollections;
	Projects(): Base.IBaseCollection<PS.PublishedProject, PS.PublishedProjectOData, Base.IBaseExecution & PS.PublishedProjectCollectionMethods> & Base.IBaseExecution & PS.PublishedProjectCollectionMethods;
	Projects(id: string | number): Base.IBaseQuery<PS.PublishedProject, PS.PublishedProjectOData> & PS.PublishedProjectCollections & PS.PublishedProjectMethods;
	ProjectWorkflowInstances(): Base.IBaseCollection<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceOData, Base.IBaseExecution & PS.ProjectWorkflowInstanceCollectionMethods> & Base.IBaseExecution & PS.ProjectWorkflowInstanceCollectionMethods;
	ProjectWorkflowInstances(id: string | number): Base.IBaseQuery<PS.ProjectWorkflowInstance, PS.ProjectWorkflowInstanceOData> & PS.ProjectWorkflowInstanceCollections & PS.ProjectWorkflowInstanceMethods;
	Stages(): Base.IBaseCollection<PS.Stage, PS.StageOData, Base.IBaseExecution & PS.StageCollectionMethods> & Base.IBaseExecution & PS.StageCollectionMethods;
	Stages(id: string | number): Base.IBaseQuery<PS.Stage, PS.StageOData> & PS.StageCollections & PS.StageMethods;
	TimeSheetPeriods(): Base.IBaseCollection<PS.TimeSheetPeriod, PS.TimeSheetPeriodOData, Base.IBaseExecution & PS.TimeSheetPeriodCollectionMethods> & Base.IBaseExecution & PS.TimeSheetPeriodCollectionMethods;
	TimeSheetPeriods(id: string | number): Base.IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodOData> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
	UserPermissions(): Base.IBaseCollection<PS.UserPermission>;
	UserPermissions(id: string | number): Base.IBaseQuery<PS.UserPermission> & PS.UserPermissionCollections;
}

/*********************************************
* ProjectServerOData
**********************************************/
export interface ProjectServerOData extends Base.IBaseResult, ProjectServerProps, ProjectServerMethods {
	Calendars: Base.IBaseResults<PS.Calendar> & PS.CalendarCollectionMethods;
	CustomFields: Base.IBaseResults<PS.CustomField> & PS.CustomFieldCollectionMethods;
	EnterpriseProjectTypes: Base.IBaseResults<PS.EnterpriseProjectType> & PS.EnterpriseProjectTypeCollectionMethods;
	EnterpriseResources: Base.IBaseResults<PS.EnterpriseResource> & PS.EnterpriseResourceCollectionMethods;
	EntityTypes: PS.EntityTypes & PS.EntityTypesCollections;
	EventHandlers: Base.IBaseResults<PS.EventHandler> & PS.EventHandlerCollectionMethods;
	Events: Base.IBaseResults<PS.Event> & PS.EventCollectionMethods;
	LookupTables: Base.IBaseResults<PS.LookupTable> & PS.LookupTableCollectionMethods;
	Phases: Base.IBaseResults<PS.Phase> & PS.PhaseCollectionMethods;
	ProjectDetailPages: Base.IBaseResults<PS.ProjectDetailPage> & PS.ProjectDetailPageCollectionMethods;
	Projects: Base.IBaseResults<PS.PublishedProject> & PS.PublishedProjectCollectionMethods;
	ProjectWorkflowInstances: Base.IBaseResults<PS.ProjectWorkflowInstance> & PS.ProjectWorkflowInstanceCollectionMethods;
	Settings: PS.Settings & PS.SettingsCollections;
	Stages: Base.IBaseResults<PS.Stage> & PS.StageCollectionMethods;
	TimeSheetPeriods: Base.IBaseResults<PS.TimeSheetPeriod> & PS.TimeSheetPeriodCollectionMethods;
	UserPermissions: Base.IBaseResults<PS.UserPermission>;
	WorkflowActivities: PS.WorkflowActivities & PS.WorkflowActivitiesCollections;
	WorkflowDesigner: PS.WorkflowDesigner & PS.WorkflowDesignerCollections;
}

/*********************************************
* ProjectServerMethods
**********************************************/
export interface ProjectServerMethods {
	getDeletedPublishedAssignments(deletedDate?: any): Base.IBaseCollection<PS.DeletedPublishedAssignment>;
	stopDelegation(): Base.IBaseExecution<any>;
}

/*********************************************
* Settings
**********************************************/
export interface Settings {
	AreManuallyScheduledTasksDefault?: boolean;
	AreManuallyScheduledTasksPublishedToTeamMember?: boolean;
	CanUsersOverrideScheduleMode?: boolean;
	DefaultCurrency?: string;
	Id?: any;
	IsAutoPublishOn?: boolean;
	ReportingTimephasedMode?: string;
}

/*********************************************
* SettingsCollections
**********************************************/
export interface SettingsCollections {

}

/*********************************************
* ITimeSheetPeriod
**********************************************/
export interface ITimeSheetPeriod extends TimeSheetPeriodCollections, TimeSheetPeriodMethods, Base.IBaseQuery<TimeSheetPeriod, ITimeSheetPeriodQuery> {

}

/*********************************************
* ITimeSheetPeriodCollection
**********************************************/
export interface ITimeSheetPeriodCollection extends Base.IBaseResults<TimeSheetPeriod>, TimeSheetPeriodCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetPeriod>) => void) => void;
}

/*********************************************
* ITimeSheetPeriodQueryCollection
**********************************************/
export interface ITimeSheetPeriodQueryCollection extends Base.IBaseResults<TimeSheetPeriodOData>, TimeSheetPeriodCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetPeriodOData>) => void) => void;
}

/*********************************************
* ITimeSheetPeriodQuery
**********************************************/
export interface ITimeSheetPeriodQuery extends TimeSheetPeriodOData, TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriod
**********************************************/
export interface TimeSheetPeriod extends Base.IBaseResult, TimeSheetPeriodProps, TimeSheetPeriodCollections, TimeSheetPeriodMethods {

}

/*********************************************
* TimeSheetPeriodProps
**********************************************/
export interface TimeSheetPeriodProps {
	End?: any;
	Id?: any;
	Name?: string;
	Start?: any;
}

/*********************************************
* TimeSheetPeriodPropMethods
**********************************************/
export interface TimeSheetPeriodPropMethods {
	TimeSheet(): Base.IBaseQuery<PS.TimeSheet, PS.TimeSheetOData> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* TimeSheetPeriodCollections
**********************************************/
export interface TimeSheetPeriodCollections extends TimeSheetPeriodPropMethods {

}

/*********************************************
* TimeSheetPeriodCollectionMethods
**********************************************/
export interface TimeSheetPeriodCollectionMethods {
	getByGuid(uid?: any): Base.IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodOData> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodOData> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
}

/*********************************************
* TimeSheetPeriodOData
**********************************************/
export interface TimeSheetPeriodOData extends Base.IBaseResult, TimeSheetPeriodProps, TimeSheetPeriodMethods {
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
}

/*********************************************
* TimeSheetPeriodMethods
**********************************************/
export interface TimeSheetPeriodMethods {
	createTimeSheet(): Base.IBaseQuery<PS.TimeSheet, PS.TimeSheetOData> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* ITimeSheet
**********************************************/
export interface ITimeSheet extends TimeSheetCollections, TimeSheetMethods, Base.IBaseQuery<TimeSheet, ITimeSheetQuery> {

}

/*********************************************
* ITimeSheetCollection
**********************************************/
export interface ITimeSheetCollection extends Base.IBaseResults<TimeSheet> {
	done?: (resolve: (value?: Array<TimeSheet>) => void) => void;
}

/*********************************************
* ITimeSheetQueryCollection
**********************************************/
export interface ITimeSheetQueryCollection extends Base.IBaseResults<TimeSheetOData> {
	done?: (resolve: (value?: Array<TimeSheetOData>) => void) => void;
}

/*********************************************
* ITimeSheetQuery
**********************************************/
export interface ITimeSheetQuery extends TimeSheetOData, TimeSheetMethods {

}

/*********************************************
* TimeSheet
**********************************************/
export interface TimeSheet extends Base.IBaseResult, TimeSheetProps, TimeSheetCollections, TimeSheetMethods {

}

/*********************************************
* TimeSheetProps
**********************************************/
export interface TimeSheetProps {
	Comments?: string;
	EntryMode?: number;
	Id?: any;
	IsControlledByOwner?: boolean;
	IsProcessed?: boolean;
	Name?: string;
	Status?: number;
	TotalActualWork?: string;
	TotalActualWorkMilliseconds?: number;
	TotalActualWorkTimeSpan?: any;
	TotalNonBillableOvertimeWork?: string;
	TotalNonBillableOvertimeWorkMilliseconds?: number;
	TotalNonBillableOvertimeWorkTimeSpan?: any;
	TotalNonBillableWork?: string;
	TotalNonBillableWorkMilliseconds?: number;
	TotalNonBillableWorkTimeSpan?: any;
	TotalOvertimeWork?: string;
	TotalOvertimeWorkMilliseconds?: number;
	TotalOvertimeWorkTimeSpan?: any;
	TotalWork?: string;
	TotalWorkMilliseconds?: number;
	TotalWorkTimeSpan?: any;
	WeekStartsOn?: any;
}

/*********************************************
* TimeSheetPropMethods
**********************************************/
export interface TimeSheetPropMethods {
	Creator(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Manager(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Period(): Base.IBaseQuery<PS.TimeSheetPeriod, PS.TimeSheetPeriodOData> & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodMethods;
}

/*********************************************
* TimeSheetCollections
**********************************************/
export interface TimeSheetCollections extends TimeSheetPropMethods {
	Lines(): Base.IBaseCollection<PS.TimeSheetLine, PS.TimeSheetLineOData, Base.IBaseExecution & PS.TimeSheetLineCollectionMethods> & Base.IBaseExecution & PS.TimeSheetLineCollectionMethods;
	Lines(id: string | number): Base.IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineOData> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
}

/*********************************************
* TimeSheetOData
**********************************************/
export interface TimeSheetOData extends Base.IBaseResult, TimeSheetProps, TimeSheetMethods {
	Creator: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Lines: Base.IBaseResults<PS.TimeSheetLine> & PS.TimeSheetLineCollectionMethods;
	Manager: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Period: PS.TimeSheetPeriod & PS.TimeSheetPeriodCollections & PS.TimeSheetPeriodCollectionMethods;
}

/*********************************************
* TimeSheetMethods
**********************************************/
export interface TimeSheetMethods {
	delete(): Base.IBaseExecution<any>;
	recall(): Base.IBaseExecution<any>;
	submit(comment?: string): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ITimeSheetLine
**********************************************/
export interface ITimeSheetLine extends TimeSheetLineCollections, TimeSheetLineMethods, Base.IBaseQuery<TimeSheetLine, ITimeSheetLineQuery> {

}

/*********************************************
* ITimeSheetLineCollection
**********************************************/
export interface ITimeSheetLineCollection extends Base.IBaseResults<TimeSheetLine>, TimeSheetLineCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetLine>) => void) => void;
}

/*********************************************
* ITimeSheetLineQueryCollection
**********************************************/
export interface ITimeSheetLineQueryCollection extends Base.IBaseResults<TimeSheetLineOData>, TimeSheetLineCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetLineOData>) => void) => void;
}

/*********************************************
* ITimeSheetLineQuery
**********************************************/
export interface ITimeSheetLineQuery extends TimeSheetLineOData, TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLine
**********************************************/
export interface TimeSheetLine extends Base.IBaseResult, TimeSheetLineProps, TimeSheetLineCollections, TimeSheetLineMethods {

}

/*********************************************
* TimeSheetLineProps
**********************************************/
export interface TimeSheetLineProps {
	Comment?: string;
	Id?: any;
	LineClass?: number;
	ProjectName?: string;
	Status?: number;
	TaskName?: string;
	TotalWork?: string;
	TotalWorkMilliseconds?: number;
	TotalWorkTimeSpan?: any;
	ValidationType?: number;
}

/*********************************************
* TimeSheetLinePropMethods
**********************************************/
export interface TimeSheetLinePropMethods {
	Assignment(): Base.IBaseQuery<PS.PublishedAssignment, PS.PublishedAssignmentOData> & PS.PublishedAssignmentCollections;
	TimeSheet(): Base.IBaseQuery<PS.TimeSheet, PS.TimeSheetOData> & PS.TimeSheetCollections & PS.TimeSheetMethods;
}

/*********************************************
* TimeSheetLineCollections
**********************************************/
export interface TimeSheetLineCollections extends TimeSheetLinePropMethods {
	Work(): Base.IBaseCollection<PS.TimeSheetWork> & PS.TimeSheetWorkCollectionMethods;
	Work(id: string | number): Base.IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
}

/*********************************************
* TimeSheetLineCollectionMethods
**********************************************/
export interface TimeSheetLineCollectionMethods {
	add(parameters?: PS.TimeSheetLineCreationInformation): Base.IBaseExecution<PS.TimeSheetLine>;
	getByGuid(uid?: any): Base.IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineOData> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
	getById(objectId?: string): Base.IBaseQuery<PS.TimeSheetLine, PS.TimeSheetLineOData> & PS.TimeSheetLineCollections & PS.TimeSheetLineMethods;
}

/*********************************************
* TimeSheetLineOData
**********************************************/
export interface TimeSheetLineOData extends Base.IBaseResult, TimeSheetLineProps, TimeSheetLineMethods {
	Assignment: PS.PublishedAssignment & PS.PublishedAssignmentCollections & PS.PublishedAssignmentCollectionMethods;
	TimeSheet: PS.TimeSheet & PS.TimeSheetCollections;
	Work: Base.IBaseResults<PS.TimeSheetWork> & PS.TimeSheetWorkCollectionMethods;
}

/*********************************************
* TimeSheetLineMethods
**********************************************/
export interface TimeSheetLineMethods {
	delete(): Base.IBaseExecution<any>;
	submit(comment?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ITimeSheetWork
**********************************************/
export interface ITimeSheetWork extends TimeSheetWorkCollections, TimeSheetWorkMethods, Base.IBaseQuery<TimeSheetWork, ITimeSheetWorkQuery> {

}

/*********************************************
* ITimeSheetWorkCollection
**********************************************/
export interface ITimeSheetWorkCollection extends Base.IBaseResults<TimeSheetWork>, TimeSheetWorkCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetWork>) => void) => void;
}

/*********************************************
* ITimeSheetWorkQueryCollection
**********************************************/
export interface ITimeSheetWorkQueryCollection extends Base.IBaseResults<TimeSheetWorkOData>, TimeSheetWorkCollectionMethods {
	done?: (resolve: (value?: Array<TimeSheetWorkOData>) => void) => void;
}

/*********************************************
* ITimeSheetWorkQuery
**********************************************/
export interface ITimeSheetWorkQuery extends TimeSheetWorkOData, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWork
**********************************************/
export interface TimeSheetWork extends Base.IBaseResult, TimeSheetWorkProps, TimeSheetWorkCollections, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWorkProps
**********************************************/
export interface TimeSheetWorkProps {
	ActualWork?: string;
	ActualWorkMilliseconds?: number;
	ActualWorkTimeSpan?: any;
	Comment?: string;
	End?: any;
	Id?: any;
	NonBillableOvertimeWork?: string;
	NonBillableOvertimeWorkMilliseconds?: number;
	NonBillableOvertimeWorkTimeSpan?: any;
	NonBillableWork?: string;
	NonBillableWorkMilliseconds?: number;
	NonBillableWorkTimeSpan?: any;
	OvertimeWork?: string;
	OvertimeWorkMilliseconds?: number;
	OvertimeWorkTimeSpan?: any;
	PlannedWork?: string;
	PlannedWorkMilliseconds?: number;
	PlannedWorkTimeSpan?: any;
	Start?: any;
}

/*********************************************
* TimeSheetWorkPropMethods
**********************************************/
export interface TimeSheetWorkPropMethods {

}

/*********************************************
* TimeSheetWorkCollections
**********************************************/
export interface TimeSheetWorkCollections extends TimeSheetWorkPropMethods {

}

/*********************************************
* TimeSheetWorkCollectionMethods
**********************************************/
export interface TimeSheetWorkCollectionMethods {
	add(parameters?: PS.TimeSheetWorkCreationInformation): Base.IBaseExecution<PS.TimeSheetWork>;
	getById(objectId?: string): Base.IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
	getByStartDate(start?: any): Base.IBaseQuery<PS.TimeSheetWork> & PS.TimeSheetWorkCollections & PS.TimeSheetWorkMethods;
}

/*********************************************
* TimeSheetWorkOData
**********************************************/
export interface TimeSheetWorkOData extends Base.IBaseResult, TimeSheetWorkProps, TimeSheetWorkMethods {

}

/*********************************************
* TimeSheetWorkMethods
**********************************************/
export interface TimeSheetWorkMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowActivities
**********************************************/
export interface IWorkflowActivities extends WorkflowActivitiesCollections, WorkflowActivitiesMethods, Base.IBaseQuery<WorkflowActivities, IWorkflowActivitiesQuery> {

}

/*********************************************
* IWorkflowActivitiesCollection
**********************************************/
export interface IWorkflowActivitiesCollection extends Base.IBaseResults<WorkflowActivities> {
	done?: (resolve: (value?: Array<WorkflowActivities>) => void) => void;
}

/*********************************************
* IWorkflowActivitiesQueryCollection
**********************************************/
export interface IWorkflowActivitiesQueryCollection extends Base.IBaseResults<WorkflowActivitiesOData> {
	done?: (resolve: (value?: Array<WorkflowActivitiesOData>) => void) => void;
}

/*********************************************
* IWorkflowActivitiesQuery
**********************************************/
export interface IWorkflowActivitiesQuery extends WorkflowActivitiesOData, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivities
**********************************************/
export interface WorkflowActivities extends Base.IBaseResult, WorkflowActivitiesProps, WorkflowActivitiesCollections, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivitiesProps
**********************************************/
export interface WorkflowActivitiesProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowActivitiesPropMethods
**********************************************/
export interface WorkflowActivitiesPropMethods {

}

/*********************************************
* WorkflowActivitiesCollections
**********************************************/
export interface WorkflowActivitiesCollections extends WorkflowActivitiesPropMethods {

}

/*********************************************
* WorkflowActivitiesOData
**********************************************/
export interface WorkflowActivitiesOData extends Base.IBaseResult, WorkflowActivitiesProps, WorkflowActivitiesMethods {

}

/*********************************************
* WorkflowActivitiesMethods
**********************************************/
export interface WorkflowActivitiesMethods {
	checkInWithJobId(projId?: any, jobId?: any, force?: boolean): Base.IBaseExecution<any>;
	createProjectFromListItem(webId?: any, listId?: any, itemId?: number, eptId?: any): Base.IBaseExecution<any>;
	enterProjectStage(projectId?: any, stageId?: any): Base.IBaseExecution<any>;
	leaveProjectStage(projectId?: any): Base.IBaseExecution<any>;
	publishSummaryWithJobId(projId?: any, jobId?: any): Base.IBaseExecution<any>;
	publishWithJobId(projectId?: any, jobId?: any): Base.IBaseExecution<any>;
	readBooleanProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<boolean>;
	readCurrencyProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<number>;
	readDateTimeProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<any>;
	readGuidProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<any>;
	readIntegerProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<number>;
	readNumberProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<number>;
	readProjectProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<string>;
	readTextProperty(projectId?: any, propertyId?: string): Base.IBaseExecution<string>;
	readyToLeaveProjectStage(projectId?: any): Base.IBaseExecution<number>;
	updateBooleanProperty(projectId?: any, propertyId?: string, value?: boolean): Base.IBaseExecution<any>;
	updateCurrencyProperty(projectId?: any, propertyId?: string, value?: number): Base.IBaseExecution<any>;
	updateDateTimeProperty(projectId?: any, propertyId?: string, value?: any): Base.IBaseExecution<any>;
	updateGuidProperty(projectId?: any, propertyId?: string, value?: any): Base.IBaseExecution<any>;
	updateIdeaListItemStatus(projectId?: any, status?: string): Base.IBaseExecution<any>;
	updateIntegerProperty(projectId?: any, propertyId?: string, value?: number): Base.IBaseExecution<any>;
	updateNumberProperty(projectId?: any, propertyId?: string, value?: number): Base.IBaseExecution<any>;
	updateProjectStageStatus(projectId?: any, stageId?: any, statusInformation?: string, stageStatusValue?: number, append?: boolean): Base.IBaseExecution<any>;
	updateTextProperty(projectId?: any, propertyId?: string, value?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowDesigner
**********************************************/
export interface IWorkflowDesigner extends WorkflowDesignerCollections, WorkflowDesignerMethods, Base.IBaseQuery<WorkflowDesigner, IWorkflowDesignerQuery> {

}

/*********************************************
* IWorkflowDesignerCollection
**********************************************/
export interface IWorkflowDesignerCollection extends Base.IBaseResults<WorkflowDesigner> {
	done?: (resolve: (value?: Array<WorkflowDesigner>) => void) => void;
}

/*********************************************
* IWorkflowDesignerQueryCollection
**********************************************/
export interface IWorkflowDesignerQueryCollection extends Base.IBaseResults<WorkflowDesignerOData> {
	done?: (resolve: (value?: Array<WorkflowDesignerOData>) => void) => void;
}

/*********************************************
* IWorkflowDesignerQuery
**********************************************/
export interface IWorkflowDesignerQuery extends WorkflowDesignerOData, WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesigner
**********************************************/
export interface WorkflowDesigner extends Base.IBaseResult, WorkflowDesignerProps, WorkflowDesignerCollections, WorkflowDesignerMethods {

}

/*********************************************
* WorkflowDesignerProps
**********************************************/
export interface WorkflowDesignerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDesignerPropMethods
**********************************************/
export interface WorkflowDesignerPropMethods {

}

/*********************************************
* WorkflowDesignerCollections
**********************************************/
export interface WorkflowDesignerCollections extends WorkflowDesignerPropMethods {
	Fields(): Base.IBaseCollection<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldOData, Base.IBaseExecution & PS.WorkflowDesignerFieldCollectionMethods> & Base.IBaseExecution & PS.WorkflowDesignerFieldCollectionMethods;
	Fields(id: string | number): Base.IBaseQuery<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldOData> & PS.WorkflowDesignerFieldCollections;
}

/*********************************************
* WorkflowDesignerOData
**********************************************/
export interface WorkflowDesignerOData extends Base.IBaseResult, WorkflowDesignerProps, WorkflowDesignerMethods {
	Fields: Base.IBaseResults<PS.WorkflowDesignerField> & PS.WorkflowDesignerFieldCollectionMethods;
}

/*********************************************
* WorkflowDesignerMethods
**********************************************/
export interface WorkflowDesignerMethods {

}

/*********************************************
* IWorkflowDesignerField
**********************************************/
export interface IWorkflowDesignerField extends WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods, Base.IBaseQuery<WorkflowDesignerField, IWorkflowDesignerFieldQuery> {

}

/*********************************************
* IWorkflowDesignerFieldCollection
**********************************************/
export interface IWorkflowDesignerFieldCollection extends Base.IBaseResults<WorkflowDesignerField>, WorkflowDesignerFieldCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDesignerField>) => void) => void;
}

/*********************************************
* IWorkflowDesignerFieldQueryCollection
**********************************************/
export interface IWorkflowDesignerFieldQueryCollection extends Base.IBaseResults<WorkflowDesignerFieldOData>, WorkflowDesignerFieldCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDesignerFieldOData>) => void) => void;
}

/*********************************************
* IWorkflowDesignerFieldQuery
**********************************************/
export interface IWorkflowDesignerFieldQuery extends WorkflowDesignerFieldOData, WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerField
**********************************************/
export interface WorkflowDesignerField extends Base.IBaseResult, WorkflowDesignerFieldProps, WorkflowDesignerFieldCollections, WorkflowDesignerFieldMethods {

}

/*********************************************
* WorkflowDesignerFieldProps
**********************************************/
export interface WorkflowDesignerFieldProps {
	DisplayName?: string;
	Id?: string;
	IsLookupField?: boolean;
	IsReadOnly?: boolean;
	SPFieldType?: number;
}

/*********************************************
* WorkflowDesignerFieldPropMethods
**********************************************/
export interface WorkflowDesignerFieldPropMethods {

}

/*********************************************
* WorkflowDesignerFieldCollections
**********************************************/
export interface WorkflowDesignerFieldCollections extends WorkflowDesignerFieldPropMethods {
	LookupEntries(): Base.IBaseCollection<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
	LookupEntries(id: string | number): Base.IBaseQuery<PS.LookupEntry> & PS.LookupEntryCollections & PS.LookupEntryMethods;
}

/*********************************************
* WorkflowDesignerFieldCollectionMethods
**********************************************/
export interface WorkflowDesignerFieldCollectionMethods {
	getById(objectId?: string): Base.IBaseQuery<PS.WorkflowDesignerField, PS.WorkflowDesignerFieldOData> & PS.WorkflowDesignerFieldCollections;
}

/*********************************************
* WorkflowDesignerFieldOData
**********************************************/
export interface WorkflowDesignerFieldOData extends Base.IBaseResult, WorkflowDesignerFieldProps, WorkflowDesignerFieldMethods {
	LookupEntries: Base.IBaseResults<PS.LookupEntry> & PS.LookupEntryCollectionMethods;
}

/*********************************************
* WorkflowDesignerFieldMethods
**********************************************/
export interface WorkflowDesignerFieldMethods {

}

/*********************************************
* IResourceCalendarException
**********************************************/
export interface IResourceCalendarException extends ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods, Base.IBaseQuery<ResourceCalendarException, IResourceCalendarExceptionQuery> {

}

/*********************************************
* IResourceCalendarExceptionCollection
**********************************************/
export interface IResourceCalendarExceptionCollection extends Base.IBaseResults<ResourceCalendarException> {
	done?: (resolve: (value?: Array<ResourceCalendarException>) => void) => void;
}

/*********************************************
* IResourceCalendarExceptionQueryCollection
**********************************************/
export interface IResourceCalendarExceptionQueryCollection extends Base.IBaseResults<ResourceCalendarExceptionOData> {
	done?: (resolve: (value?: Array<ResourceCalendarExceptionOData>) => void) => void;
}

/*********************************************
* IResourceCalendarExceptionQuery
**********************************************/
export interface IResourceCalendarExceptionQuery extends ResourceCalendarExceptionOData, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarException
**********************************************/
export interface ResourceCalendarException extends PS.CalendarException, Base.IBaseResult, ResourceCalendarExceptionProps, ResourceCalendarExceptionCollections, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionProps
**********************************************/
export interface ResourceCalendarExceptionProps {

}

/*********************************************
* ResourceCalendarExceptionPropMethods
**********************************************/
export interface ResourceCalendarExceptionPropMethods {

}

/*********************************************
* ResourceCalendarExceptionCollections
**********************************************/
export interface ResourceCalendarExceptionCollections extends ResourceCalendarExceptionPropMethods {

}

/*********************************************
* ResourceCalendarExceptionOData
**********************************************/
export interface ResourceCalendarExceptionOData extends Base.IBaseResult, ResourceCalendarExceptionProps, ResourceCalendarExceptionMethods {

}

/*********************************************
* ResourceCalendarExceptionMethods
**********************************************/
export interface ResourceCalendarExceptionMethods {
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* ResourceEngagementComment
**********************************************/
export interface ResourceEngagementComment {

}

/*********************************************
* ResourceEngagementCommentCollections
**********************************************/
export interface ResourceEngagementCommentCollections {

}

/*********************************************
* ResourceEngagementTimephasedPeriod
**********************************************/
export interface ResourceEngagementTimephasedPeriod {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollections
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollections extends ResourceEngagementTimephasedPeriodCollectionMethods {

}

/*********************************************
* ResourceEngagementTimephasedPeriodCollectionMethods
**********************************************/
export interface ResourceEngagementTimephasedPeriodCollectionMethods {
	getByStartUrl(start?: string): Base.IBaseQuery<PS.ResourceEngagementTimephasedPeriod> & PS.ResourceEngagementTimephasedPeriodCollections;
}

/*********************************************
* IResourcePlan
**********************************************/
export interface IResourcePlan extends ResourcePlanCollections, ResourcePlanMethods, Base.IBaseQuery<ResourcePlan, IResourcePlanQuery> {

}

/*********************************************
* IResourcePlanCollection
**********************************************/
export interface IResourcePlanCollection extends Base.IBaseResults<ResourcePlan> {
	done?: (resolve: (value?: Array<ResourcePlan>) => void) => void;
}

/*********************************************
* IResourcePlanQueryCollection
**********************************************/
export interface IResourcePlanQueryCollection extends Base.IBaseResults<ResourcePlanOData> {
	done?: (resolve: (value?: Array<ResourcePlanOData>) => void) => void;
}

/*********************************************
* IResourcePlanQuery
**********************************************/
export interface IResourcePlanQuery extends ResourcePlanOData, ResourcePlanMethods {

}

/*********************************************
* ResourcePlan
**********************************************/
export interface ResourcePlan extends Base.IBaseResult, ResourcePlanProps, ResourcePlanCollections, ResourcePlanMethods {

}

/*********************************************
* ResourcePlanProps
**********************************************/
export interface ResourcePlanProps {
	Finish?: any;
	Id?: any;
	Start?: any;
	UtilizationDate?: any;
	UtilizationType?: number;
}

/*********************************************
* ResourcePlanPropMethods
**********************************************/
export interface ResourcePlanPropMethods {

}

/*********************************************
* ResourcePlanCollections
**********************************************/
export interface ResourcePlanCollections extends ResourcePlanPropMethods {
	Assignments(): Base.IBaseCollection<PS.PlanAssignment, PS.PlanAssignmentOData, Base.IBaseExecution & PS.PlanAssignmentCollectionMethods> & Base.IBaseExecution & PS.PlanAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.PlanAssignment, PS.PlanAssignmentOData> & PS.PlanAssignmentCollections & PS.PlanAssignmentMethods;
}

/*********************************************
* ResourcePlanOData
**********************************************/
export interface ResourcePlanOData extends Base.IBaseResult, ResourcePlanProps, ResourcePlanMethods {
	Assignments: Base.IBaseResults<PS.PlanAssignment> & PS.PlanAssignmentCollectionMethods;
}

/*********************************************
* ResourcePlanMethods
**********************************************/
export interface ResourcePlanMethods {
	delete(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
	forceCheckIn(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
	publish(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
	update(): Base.IBaseQuery<PS.QueueJob, PS.QueueJobOData> & PS.QueueJobCollections & PS.QueueJobMethods;
}

/*********************************************
* IServiceStatus
**********************************************/
export interface IServiceStatus extends ServiceStatusCollections, ServiceStatusMethods, Base.IBaseQuery<ServiceStatus, IServiceStatusQuery> {

}

/*********************************************
* IServiceStatusCollection
**********************************************/
export interface IServiceStatusCollection extends Base.IBaseResults<ServiceStatus> {
	done?: (resolve: (value?: Array<ServiceStatus>) => void) => void;
}

/*********************************************
* IServiceStatusQueryCollection
**********************************************/
export interface IServiceStatusQueryCollection extends Base.IBaseResults<ServiceStatusOData> {
	done?: (resolve: (value?: Array<ServiceStatusOData>) => void) => void;
}

/*********************************************
* IServiceStatusQuery
**********************************************/
export interface IServiceStatusQuery extends ServiceStatusOData, ServiceStatusMethods {

}

/*********************************************
* ServiceStatus
**********************************************/
export interface ServiceStatus extends Base.IBaseResult, ServiceStatusProps, ServiceStatusCollections, ServiceStatusMethods {

}

/*********************************************
* ServiceStatusProps
**********************************************/
export interface ServiceStatusProps {
	IsDelegate?: boolean;
	IsReadOnly?: boolean;
}

/*********************************************
* ServiceStatusPropMethods
**********************************************/
export interface ServiceStatusPropMethods {

}

/*********************************************
* ServiceStatusCollections
**********************************************/
export interface ServiceStatusCollections extends ServiceStatusPropMethods {

}

/*********************************************
* ServiceStatusOData
**********************************************/
export interface ServiceStatusOData extends Base.IBaseResult, ServiceStatusProps, ServiceStatusMethods {

}

/*********************************************
* ServiceStatusMethods
**********************************************/
export interface ServiceStatusMethods {
	stopDelegation(): Base.IBaseExecution<any>;
}

/*********************************************
* ITimePhase
**********************************************/
export interface ITimePhase extends TimePhaseCollections, TimePhaseMethods, Base.IBaseQuery<TimePhase, ITimePhaseQuery> {

}

/*********************************************
* ITimePhaseCollection
**********************************************/
export interface ITimePhaseCollection extends Base.IBaseResults<TimePhase> {
	done?: (resolve: (value?: Array<TimePhase>) => void) => void;
}

/*********************************************
* ITimePhaseQueryCollection
**********************************************/
export interface ITimePhaseQueryCollection extends Base.IBaseResults<TimePhaseOData> {
	done?: (resolve: (value?: Array<TimePhaseOData>) => void) => void;
}

/*********************************************
* ITimePhaseQuery
**********************************************/
export interface ITimePhaseQuery extends TimePhaseOData, TimePhaseMethods {

}

/*********************************************
* TimePhase
**********************************************/
export interface TimePhase extends Base.IBaseResult, TimePhaseProps, TimePhaseCollections, TimePhaseMethods {

}

/*********************************************
* TimePhaseProps
**********************************************/
export interface TimePhaseProps {
	End?: any;
	Start?: any;
}

/*********************************************
* TimePhasePropMethods
**********************************************/
export interface TimePhasePropMethods {

}

/*********************************************
* TimePhaseCollections
**********************************************/
export interface TimePhaseCollections extends TimePhasePropMethods {
	Assignments(): Base.IBaseCollection<PS.StatusAssignment, PS.StatusAssignmentOData, Base.IBaseExecution & PS.StatusAssignmentCollectionMethods> & Base.IBaseExecution & PS.StatusAssignmentCollectionMethods;
	Assignments(id: string | number): Base.IBaseQuery<PS.StatusAssignment, PS.StatusAssignmentOData> & PS.StatusAssignmentCollections & PS.StatusAssignmentMethods;
}

/*********************************************
* TimePhaseOData
**********************************************/
export interface TimePhaseOData extends Base.IBaseResult, TimePhaseProps, TimePhaseMethods {
	Assignments: Base.IBaseResults<PS.StatusAssignment> & PS.StatusAssignmentCollectionMethods;
}

/*********************************************
* TimePhaseMethods
**********************************************/
export interface TimePhaseMethods {

}
