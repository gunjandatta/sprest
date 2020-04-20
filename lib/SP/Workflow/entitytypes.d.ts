import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IWorkflowAssociation
**********************************************/
export interface IWorkflowAssociation extends WorkflowAssociationCollections, WorkflowAssociationMethods, Base.IBaseQuery<WorkflowAssociation, IWorkflowAssociationQuery> {

}

/*********************************************
* IWorkflowAssociationCollection
**********************************************/
export interface IWorkflowAssociationCollection extends Base.IBaseResults<WorkflowAssociation>, WorkflowAssociationCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowAssociation>) => void) => void;
}

/*********************************************
* IWorkflowAssociationQueryCollection
**********************************************/
export interface IWorkflowAssociationQueryCollection extends Base.IBaseResults<WorkflowAssociationOData>, WorkflowAssociationCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowAssociationOData>) => void) => void;
}

/*********************************************
* IWorkflowAssociationQuery
**********************************************/
export interface IWorkflowAssociationQuery extends WorkflowAssociationOData, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociation
**********************************************/
export interface WorkflowAssociation extends Base.IBaseResult, WorkflowAssociationProps, WorkflowAssociationCollections, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociationProps
**********************************************/
export interface WorkflowAssociationProps {
	AllowManual?: boolean;
	AssociationData?: string;
	AutoStartChange?: boolean;
	AutoStartCreate?: boolean;
	BaseId?: any;
	Created?: any;
	Description?: string;
	Enabled?: boolean;
	HistoryListTitle?: string;
	Id?: any;
	InstantiationUrl?: string;
	InternalName?: string;
	IsDeclarative?: boolean;
	ListId?: any;
	Modified?: any;
	Name?: string;
	TaskListTitle?: string;
	WebId?: any;
}

/*********************************************
* WorkflowAssociationPropMethods
**********************************************/
export interface WorkflowAssociationPropMethods {

}

/*********************************************
* WorkflowAssociationCollections
**********************************************/
export interface WorkflowAssociationCollections extends WorkflowAssociationPropMethods {

}

/*********************************************
* WorkflowAssociationCollectionMethods
**********************************************/
export interface WorkflowAssociationCollectionMethods {
	add(parameters?: SP.Workflow.WorkflowAssociationCreationInformation): Base.IBaseExecution<SP.Workflow.WorkflowAssociation>;
	getById(associationId?: any): Base.IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
	getByName(name?: string): Base.IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* WorkflowAssociationOData
**********************************************/
export interface WorkflowAssociationOData extends Base.IBaseResult, WorkflowAssociationProps, WorkflowAssociationMethods {

}

/*********************************************
* WorkflowAssociationMethods
**********************************************/
export interface WorkflowAssociationMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* WorkflowTemplate
**********************************************/
export interface WorkflowTemplate {
	AllowManual?: boolean;
	AssociationUrl?: string;
	AutoStartChange?: boolean;
	AutoStartCreate?: boolean;
	Description?: string;
	Id?: any;
	IsDeclarative?: boolean;
	Name?: string;
	PermissionsManual?: SP.BasePermissions;
}

/*********************************************
* WorkflowTemplateCollections
**********************************************/
export interface WorkflowTemplateCollections extends WorkflowTemplateCollectionMethods {

}

/*********************************************
* WorkflowTemplateCollectionMethods
**********************************************/
export interface WorkflowTemplateCollectionMethods {
	getById(templateId?: any): Base.IBaseQuery<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollections;
	getByName(name?: string): Base.IBaseQuery<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollections;
}

/*********************************************
* SPWorkflow
**********************************************/
export interface SPWorkflow {
	AssociationId?: any;
	InstanceId?: any;
	IsCompleted?: boolean;
	StatusText?: string;
}

/*********************************************
* SPWorkflowCollections
**********************************************/
export interface SPWorkflowCollections {

}

/*********************************************
* SPWorkflowManager
**********************************************/
export interface SPWorkflowManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWorkflowManagerCollections
**********************************************/
export interface SPWorkflowManagerCollections {

}

/*********************************************
* ISPWorkflowTask
**********************************************/
export interface ISPWorkflowTask extends SPWorkflowTaskCollections, SPWorkflowTaskMethods, Base.IBaseQuery<SPWorkflowTask, ISPWorkflowTaskQuery> {

}

/*********************************************
* ISPWorkflowTaskCollection
**********************************************/
export interface ISPWorkflowTaskCollection extends Base.IBaseResults<SPWorkflowTask> {
	done?: (resolve: (value?: Array<SPWorkflowTask>) => void) => void;
}

/*********************************************
* ISPWorkflowTaskQueryCollection
**********************************************/
export interface ISPWorkflowTaskQueryCollection extends Base.IBaseResults<SPWorkflowTaskOData> {
	done?: (resolve: (value?: Array<SPWorkflowTaskOData>) => void) => void;
}

/*********************************************
* ISPWorkflowTaskQuery
**********************************************/
export interface ISPWorkflowTaskQuery extends SPWorkflowTaskOData, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTask
**********************************************/
export interface SPWorkflowTask extends SP.ListItem, Base.IBaseResult, SPWorkflowTaskProps, SPWorkflowTaskCollections, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTaskProps
**********************************************/
export interface SPWorkflowTaskProps {

}

/*********************************************
* SPWorkflowTaskPropMethods
**********************************************/
export interface SPWorkflowTaskPropMethods {

}

/*********************************************
* SPWorkflowTaskCollections
**********************************************/
export interface SPWorkflowTaskCollections extends SPWorkflowTaskPropMethods {

}

/*********************************************
* SPWorkflowTaskOData
**********************************************/
export interface SPWorkflowTaskOData extends Base.IBaseResult, SPWorkflowTaskProps, SPWorkflowTaskMethods {

}

/*********************************************
* SPWorkflowTaskMethods
**********************************************/
export interface SPWorkflowTaskMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Base.IBaseExecution<any>;
	resetRoleInheritance(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	deleteWithParameters(parameters?: SP.ListItemDeleteParameters): Base.IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): Base.IBaseCollection<SP.Change>;
	getHashtags(): Base.IBaseCollection<SP.Hashtag>;
	getUserEffectivePermissions(userName?: string): Base.IBaseExecution<SP.BasePermissions>;
	getWOPIFrameUrl(action?: number): Base.IBaseExecution<string>;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): Base.IBaseExecution<any>;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): Base.IBaseExecution<any>;
	overridePolicyTip(userAction?: number, justification?: string): Base.IBaseExecution<number>;
	parseAndSetFieldValue(fieldName?: string, value?: string): Base.IBaseExecution<any>;
	recycle(): Base.IBaseExecution<any>;
	recycleWithParameters(parameters?: SP.ListItemDeleteParameters): Base.IBaseExecution<any>;
	setCommentsDisabled(value?: boolean): Base.IBaseExecution<any>;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): Base.IBaseExecution<any>;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): Base.IBaseExecution<any>;
	setComplianceTagWithHold(complianceTag?: string): Base.IBaseExecution<any>;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): Base.IBaseExecution<any>;
	setComplianceTagWithNoHold(complianceTag?: string): Base.IBaseExecution<any>;
	setComplianceTagWithRecord(complianceTag?: string): Base.IBaseExecution<any>;
	systemUpdate(): Base.IBaseExecution<any>;
	// update(): Base.IBaseExecution<any>;
	updateEx(parameters?: SP.ListItemUpdateParameters): Base.IBaseExecution<any>;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): Base.IBaseCollection<SP.Hashtag>;
	updateOverwriteVersion(): Base.IBaseExecution<any>;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): Base.IBaseCollection<SP.ListItemFormUpdateValue>;
	update(properties?: any): Base.IBaseExecution<any>;
}
