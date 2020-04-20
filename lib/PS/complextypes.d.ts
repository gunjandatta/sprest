import { Base } from "../";
import { PS } from "../";

/*********************************************
* EngagementSaveConflictException
**********************************************/
export interface EngagementSaveConflictException {

}

/*********************************************
* EngagementSaveConflictExceptionCollections
**********************************************/
export interface EngagementSaveConflictExceptionCollections {

}

/*********************************************
* AssignmentCreationInformation
**********************************************/
export interface AssignmentCreationInformation {
	Finish?: any;
	Id?: any;
	Notes?: string;
	ResourceId?: any;
	Start?: any;
	TaskId?: any;
}

/*********************************************
* AssignmentCreationInformationCollections
**********************************************/
export interface AssignmentCreationInformationCollections {

}

/*********************************************
* CalendarCreationInformation
**********************************************/
export interface CalendarCreationInformation {
	Id?: any;
	Name?: string;
	OriginalId?: any;
}

/*********************************************
* CalendarCreationInformationCollections
**********************************************/
export interface CalendarCreationInformationCollections {

}

/*********************************************
* CalendarExceptionCreationInformation
**********************************************/
export interface CalendarExceptionCreationInformation {
	Finish?: any;
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
* CalendarExceptionCreationInformationCollections
**********************************************/
export interface CalendarExceptionCreationInformationCollections {

}

/*********************************************
* CostRateCreationInformation
**********************************************/
export interface CostRateCreationInformation {
	CostPerUse?: number;
	EffectiveDate?: any;
	OvertimeRate?: number;
	StandardRate?: number;
}

/*********************************************
* CostRateCreationInformationCollections
**********************************************/
export interface CostRateCreationInformationCollections {

}

/*********************************************
* CustomFieldCreationInformation
**********************************************/
export interface CustomFieldCreationInformation {
	Description?: string;
	EntityTypeId?: any;
	FieldType?: number;
	Formula?: string;
	GraphicalIndicatorNonSummary?: string;
	GraphicalIndicatorProjectSummary?: string;
	GraphicalIndicatorSummary?: string;
	Id?: any;
	IsEditableInVisibility?: boolean;
	IsLeafOnly?: boolean;
	IsMultilineText?: boolean;
	IsRequired?: boolean;
	IsWorkflowControlled?: boolean;
	LookupAllowMultiSelect?: boolean;
	LookupDefaultValue?: any;
	LookupTableId?: any;
	Name?: string;
	ShowToolTip?: boolean;
	UseFieldForMatching?: boolean;
}

/*********************************************
* CustomFieldCreationInformationCollections
**********************************************/
export interface CustomFieldCreationInformationCollections {

}

/*********************************************
* EngagementCreationInformation
**********************************************/
export interface EngagementCreationInformation {
	Description?: string;
	Finish?: any;
	Id?: any;
	MaxUnits?: number;
	ResourceId?: any;
	Start?: any;
	TimephasedPeriodData?: Array<PS.EngagementTimephasedPeriodCreationInformation>;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* EngagementCreationInformationCollections
**********************************************/
export interface EngagementCreationInformationCollections {

}

/*********************************************
* EngagementTimephasedPeriodCreationInformation
**********************************************/
export interface EngagementTimephasedPeriodCreationInformation {
	End?: any;
	MaxUnits?: number;
	Start?: any;
	Work?: string;
	WorkMilliseconds?: number;
	WorkTimeSpan?: any;
}

/*********************************************
* EngagementTimephasedPeriodCreationInformationCollections
**********************************************/
export interface EngagementTimephasedPeriodCreationInformationCollections {

}

/*********************************************
* EnterpriseProjectTypeCreationInformation
**********************************************/
export interface EnterpriseProjectTypeCreationInformation {
	DepartmentIds?: Array<any>;
	Description?: string;
	Id?: any;
	ImageUrl?: string;
	IsDefault?: boolean;
	IsManaged?: boolean;
	Name?: string;
	Order?: number;
	PermissionSyncEnable?: boolean;
	ProjectDetailPages?: Array<PS.ProjectDetailPageCreationInformation>;
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
* EnterpriseProjectTypeCreationInformationCollections
**********************************************/
export interface EnterpriseProjectTypeCreationInformationCollections {

}

/*********************************************
* ProjectDetailPageCreationInformation
**********************************************/
export interface ProjectDetailPageCreationInformation {
	Id?: any;
	IsCreate?: boolean;
	Position?: number;
}

/*********************************************
* ProjectDetailPageCreationInformationCollections
**********************************************/
export interface ProjectDetailPageCreationInformationCollections {

}

/*********************************************
* EnterpriseResourceCreationInformation
**********************************************/
export interface EnterpriseResourceCreationInformation {
	HyperlinkName?: string;
	HyperlinkUrl?: string;
	Id?: any;
	IsBudget?: boolean;
	IsGeneric?: boolean;
	IsInactive?: boolean;
	Name?: string;
	ResourceType?: number;
}

/*********************************************
* EnterpriseResourceCreationInformationCollections
**********************************************/
export interface EnterpriseResourceCreationInformationCollections {

}

/*********************************************
* EntityLinkCreationInformation
**********************************************/
export interface EntityLinkCreationInformation {
	EntityLinkType?: number;
	Id?: any;
	Label?: string;
	Url?: string;
}

/*********************************************
* EntityLinkCreationInformationCollections
**********************************************/
export interface EntityLinkCreationInformationCollections {

}

/*********************************************
* EventHandlerCreationInformation
**********************************************/
export interface EventHandlerCreationInformation {
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
* EventHandlerCreationInformationCollections
**********************************************/
export interface EventHandlerCreationInformationCollections {

}

/*********************************************
* LookupEntryCreationInformation
**********************************************/
export interface LookupEntryCreationInformation {
	Description?: string;
	Id?: any;
	ParentId?: any;
	SortIndex?: number;
	Value?: PS.LookupEntryValue;
}

/*********************************************
* LookupEntryCreationInformationCollections
**********************************************/
export interface LookupEntryCreationInformationCollections {

}

/*********************************************
* LookupEntryValue
**********************************************/
export interface LookupEntryValue {
	DateValue?: any;
	DurationValue?: string;
	NumberValue?: number;
	TextValue?: string;
}

/*********************************************
* LookupEntryValueCollections
**********************************************/
export interface LookupEntryValueCollections {

}

/*********************************************
* LookupMask
**********************************************/
export interface LookupMask {
	Length?: number;
	MaskType?: number;
	Separator?: string;
}

/*********************************************
* LookupMaskCollections
**********************************************/
export interface LookupMaskCollections {

}

/*********************************************
* LookupTableCreationInformation
**********************************************/
export interface LookupTableCreationInformation {
	Entries?: Array<PS.LookupEntryCreationInformation>;
	Id?: any;
	Masks?: Array<PS.LookupMask>;
	Name?: string;
	SortOrder?: number;
}

/*********************************************
* LookupTableCreationInformationCollections
**********************************************/
export interface LookupTableCreationInformationCollections {

}

/*********************************************
* PhaseCreationInformation
**********************************************/
export interface PhaseCreationInformation {
	Description?: string;
	Id?: any;
	Name?: string;
}

/*********************************************
* PhaseCreationInformationCollections
**********************************************/
export interface PhaseCreationInformationCollections {

}

/*********************************************
* PlanAssignmentCreationInformation
**********************************************/
export interface PlanAssignmentCreationInformation {
	BookingType?: number;
	Id?: any;
	Intervals?: Array<PS.PlanAssignmentIntervalCreationInformation>;
	ResourceId?: any;
}

/*********************************************
* PlanAssignmentCreationInformationCollections
**********************************************/
export interface PlanAssignmentCreationInformationCollections {

}

/*********************************************
* PlanAssignmentIntervalCreationInformation
**********************************************/
export interface PlanAssignmentIntervalCreationInformation {
	Duration?: string;
	Interval?: any;
}

/*********************************************
* PlanAssignmentIntervalCreationInformationCollections
**********************************************/
export interface PlanAssignmentIntervalCreationInformationCollections {

}

/*********************************************
* ProjectCreationInformation
**********************************************/
export interface ProjectCreationInformation {
	Description?: string;
	EnterpriseProjectTypeId?: any;
	Id?: any;
	ListId?: any;
	Name?: string;
	Start?: any;
	WebId?: any;
}

/*********************************************
* ProjectCreationInformationCollections
**********************************************/
export interface ProjectCreationInformationCollections {

}

/*********************************************
* ProjectEngagementCreationInformation
**********************************************/
export interface ProjectEngagementCreationInformation {

}

/*********************************************
* ProjectEngagementCreationInformationCollections
**********************************************/
export interface ProjectEngagementCreationInformationCollections {

}

/*********************************************
* ProjectResourceCreationInformation
**********************************************/
export interface ProjectResourceCreationInformation {
	Account?: string;
	Email?: string;
	Id?: any;
	Name?: string;
	Notes?: string;
}

/*********************************************
* ProjectResourceCreationInformationCollections
**********************************************/
export interface ProjectResourceCreationInformationCollections {

}

/*********************************************
* StageCreationInformation
**********************************************/
export interface StageCreationInformation {
	Behavior?: number;
	CheckInRequired?: boolean;
	CustomFields?: Array<PS.StageCustomFieldCreationInformation>;
	Description?: string;
	Id?: any;
	Name?: string;
	PhaseId?: any;
	ProjectDetailPages?: Array<PS.StageDetailPageCreationInformation>;
	SubmitDescription?: string;
	WorkflowStatusPageId?: any;
}

/*********************************************
* StageCreationInformationCollections
**********************************************/
export interface StageCreationInformationCollections {

}

/*********************************************
* StageCustomFieldCreationInformation
**********************************************/
export interface StageCustomFieldCreationInformation {
	Id?: any;
	ReadOnly?: boolean;
	Required?: boolean;
}

/*********************************************
* StageCustomFieldCreationInformationCollections
**********************************************/
export interface StageCustomFieldCreationInformationCollections {

}

/*********************************************
* StageDetailPageCreationInformation
**********************************************/
export interface StageDetailPageCreationInformation {
	Description?: string;
	Id?: any;
	Position?: number;
	RequiresAttention?: boolean;
}

/*********************************************
* StageDetailPageCreationInformationCollections
**********************************************/
export interface StageDetailPageCreationInformationCollections {

}

/*********************************************
* StatusAssignmentCreationInformation
**********************************************/
export interface StatusAssignmentCreationInformation {
	Comment?: string;
	Id?: any;
	ProjectId?: any;
	Task?: PS.StatusTaskCreationInformation;
}

/*********************************************
* StatusAssignmentCreationInformationCollections
**********************************************/
export interface StatusAssignmentCreationInformationCollections {

}

/*********************************************
* StatusTaskCreationInformation
**********************************************/
export interface StatusTaskCreationInformation {
	Finish?: any;
	Id?: any;
	Name?: string;
	ParentId?: any;
	Start?: any;
	Work?: string;
}

/*********************************************
* StatusTaskCreationInformationCollections
**********************************************/
export interface StatusTaskCreationInformationCollections {

}

/*********************************************
* TaskCreationInformation
**********************************************/
export interface TaskCreationInformation {
	AddAfterId?: any;
	Duration?: string;
	Finish?: any;
	Id?: any;
	IsManual?: boolean;
	Name?: string;
	Notes?: string;
	ParentId?: any;
	Start?: any;
}

/*********************************************
* TaskCreationInformationCollections
**********************************************/
export interface TaskCreationInformationCollections {

}

/*********************************************
* TaskLinkCreationInformation
**********************************************/
export interface TaskLinkCreationInformation {
	DependencyType?: number;
	EndId?: any;
	Id?: any;
	LinkLagDuration?: string;
	StartId?: any;
}

/*********************************************
* TaskLinkCreationInformationCollections
**********************************************/
export interface TaskLinkCreationInformationCollections {

}

/*********************************************
* TaskPlanLinksCreationInformation
**********************************************/
export interface TaskPlanLinksCreationInformation {
	GroupId?: any;
	PlanId?: string;
}

/*********************************************
* TaskPlanLinksCreationInformationCollections
**********************************************/
export interface TaskPlanLinksCreationInformationCollections {

}

/*********************************************
* TimeSheetLineCreationInformation
**********************************************/
export interface TimeSheetLineCreationInformation {
	AssignmentId?: any;
	Comment?: string;
	Id?: any;
	LineClass?: number;
	ProjectId?: any;
	TaskName?: string;
}

/*********************************************
* TimeSheetLineCreationInformationCollections
**********************************************/
export interface TimeSheetLineCreationInformationCollections {

}

/*********************************************
* TimeSheetWorkCreationInformation
**********************************************/
export interface TimeSheetWorkCreationInformation {
	ActualWork?: string;
	Comment?: string;
	End?: any;
	NonBillableOvertimeWork?: string;
	NonBillableWork?: string;
	OvertimeWork?: string;
	PlannedWork?: string;
	Start?: any;
}

/*********************************************
* TimeSheetWorkCreationInformationCollections
**********************************************/
export interface TimeSheetWorkCreationInformationCollections {

}
