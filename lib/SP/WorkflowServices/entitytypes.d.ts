import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IWorkflowDefinition
**********************************************/
export interface IWorkflowDefinition extends WorkflowDefinitionCollections, WorkflowDefinitionMethods, Base.IBaseQuery<WorkflowDefinition, IWorkflowDefinitionQuery> {

}

/*********************************************
* IWorkflowDefinitionCollection
**********************************************/
export interface IWorkflowDefinitionCollection extends Base.IBaseResults<WorkflowDefinition>, WorkflowDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDefinition>) => void) => void;
}

/*********************************************
* IWorkflowDefinitionQueryCollection
**********************************************/
export interface IWorkflowDefinitionQueryCollection extends Base.IBaseResults<WorkflowDefinitionOData>, WorkflowDefinitionCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowDefinitionOData>) => void) => void;
}

/*********************************************
* IWorkflowDefinitionQuery
**********************************************/
export interface IWorkflowDefinitionQuery extends WorkflowDefinitionOData, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinition
**********************************************/
export interface WorkflowDefinition extends Base.IBaseResult, WorkflowDefinitionProps, WorkflowDefinitionCollections, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinitionProps
**********************************************/
export interface WorkflowDefinitionProps {
	AssociationUrl?: string;
	Description?: string;
	DisplayName?: string;
	DraftVersion?: string;
	FormField?: string;
	Id?: any;
	InitiationUrl?: string;
	Properties?: { results: Array<SP.KeyValue> };
	Published?: boolean;
	RequiresAssociationForm?: boolean;
	RequiresInitiationForm?: boolean;
	RestrictToScope?: string;
	RestrictToType?: string;
	Xaml?: string;
}

/*********************************************
* WorkflowDefinitionPropMethods
**********************************************/
export interface WorkflowDefinitionPropMethods {

}

/*********************************************
* WorkflowDefinitionCollections
**********************************************/
export interface WorkflowDefinitionCollections extends WorkflowDefinitionPropMethods {

}

/*********************************************
* WorkflowDefinitionCollectionMethods
**********************************************/
export interface WorkflowDefinitionCollectionMethods {
	sort(): Base.IBaseExecution<any>;
}

/*********************************************
* WorkflowDefinitionOData
**********************************************/
export interface WorkflowDefinitionOData extends Base.IBaseResult, WorkflowDefinitionProps, WorkflowDefinitionMethods {

}

/*********************************************
* WorkflowDefinitionMethods
**********************************************/
export interface WorkflowDefinitionMethods {
	setProperty(propertyName?: string, value?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowDeploymentService
**********************************************/
export interface IWorkflowDeploymentService extends WorkflowDeploymentServiceCollections, WorkflowDeploymentServiceMethods, Base.IBaseQuery<WorkflowDeploymentService, IWorkflowDeploymentServiceQuery> {

}

/*********************************************
* IWorkflowDeploymentServiceCollection
**********************************************/
export interface IWorkflowDeploymentServiceCollection extends Base.IBaseResults<WorkflowDeploymentService> {
	done?: (resolve: (value?: Array<WorkflowDeploymentService>) => void) => void;
}

/*********************************************
* IWorkflowDeploymentServiceQueryCollection
**********************************************/
export interface IWorkflowDeploymentServiceQueryCollection extends Base.IBaseResults<WorkflowDeploymentServiceOData> {
	done?: (resolve: (value?: Array<WorkflowDeploymentServiceOData>) => void) => void;
}

/*********************************************
* IWorkflowDeploymentServiceQuery
**********************************************/
export interface IWorkflowDeploymentServiceQuery extends WorkflowDeploymentServiceOData, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentService
**********************************************/
export interface WorkflowDeploymentService extends Base.IBaseResult, WorkflowDeploymentServiceProps, WorkflowDeploymentServiceCollections, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentServiceProps
**********************************************/
export interface WorkflowDeploymentServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowDeploymentServicePropMethods
**********************************************/
export interface WorkflowDeploymentServicePropMethods {

}

/*********************************************
* WorkflowDeploymentServiceCollections
**********************************************/
export interface WorkflowDeploymentServiceCollections extends WorkflowDeploymentServicePropMethods {

}

/*********************************************
* WorkflowDeploymentServiceOData
**********************************************/
export interface WorkflowDeploymentServiceOData extends Base.IBaseResult, WorkflowDeploymentServiceProps, WorkflowDeploymentServiceMethods {

}

/*********************************************
* WorkflowDeploymentServiceMethods
**********************************************/
export interface WorkflowDeploymentServiceMethods {
	deleteCollateral(workflowDefinitionId?: any, leafFileName?: string): Base.IBaseExecution<any>;
	deleteDefinition(definitionId?: any): Base.IBaseExecution<any>;
	deprecateDefinition(definitionId?: any): Base.IBaseExecution<any>;
	enumerateDefinitions(publishedOnly?: boolean): Base.IBaseCollection<SP.WorkflowServices.WorkflowDefinition> & SP.WorkflowServices.WorkflowDefinitionCollectionMethods;
	enumerateIntegratedApps(): Base.IBaseCollection<SP.AppInstance>;
	getActivitySignatures(lastChanged?: any): Base.IBaseCollection<SP.KeyValue>;
	getCollateralUri(workflowDefinitionId?: any, leafFileName?: string): Base.IBaseExecution<string>;
	getDefinition(definitionId?: any): Base.IBaseExecution<SP.WorkflowServices.WorkflowDefinition>;
	isIntegratedApp(): Base.IBaseExecution<boolean>;
	packageDefinition(definitionId?: any, packageDefaultFilename?: string, packageTitle?: string, packageDescription?: string): Base.IBaseExecution<string>;
	publishDefinition(definitionId?: any): Base.IBaseExecution<any>;
	saveCollateral(workflowDefinitionId?: any, leafFileName?: string, fileContent?: any): Base.IBaseExecution<any>;
	validateActivity(activityXaml?: string): Base.IBaseExecution<string>;
}

/*********************************************
* WorkflowInstance
**********************************************/
export interface WorkflowInstance {
	FaultInfo?: string;
	Id?: any;
	InstanceCreated?: any;
	LastUpdated?: any;
	Properties?: { results: Array<SP.KeyValue> };
	Status?: number;
	UserStatus?: string;
	WorkflowSubscriptionId?: any;
}

/*********************************************
* WorkflowInstanceCollections
**********************************************/
export interface WorkflowInstanceCollections {

}

/*********************************************
* IWorkflowInstanceService
**********************************************/
export interface IWorkflowInstanceService extends WorkflowInstanceServiceCollections, WorkflowInstanceServiceMethods, Base.IBaseQuery<WorkflowInstanceService, IWorkflowInstanceServiceQuery> {

}

/*********************************************
* IWorkflowInstanceServiceCollection
**********************************************/
export interface IWorkflowInstanceServiceCollection extends Base.IBaseResults<WorkflowInstanceService> {
	done?: (resolve: (value?: Array<WorkflowInstanceService>) => void) => void;
}

/*********************************************
* IWorkflowInstanceServiceQueryCollection
**********************************************/
export interface IWorkflowInstanceServiceQueryCollection extends Base.IBaseResults<WorkflowInstanceServiceOData> {
	done?: (resolve: (value?: Array<WorkflowInstanceServiceOData>) => void) => void;
}

/*********************************************
* IWorkflowInstanceServiceQuery
**********************************************/
export interface IWorkflowInstanceServiceQuery extends WorkflowInstanceServiceOData, WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceService
**********************************************/
export interface WorkflowInstanceService extends Base.IBaseResult, WorkflowInstanceServiceProps, WorkflowInstanceServiceCollections, WorkflowInstanceServiceMethods {

}

/*********************************************
* WorkflowInstanceServiceProps
**********************************************/
export interface WorkflowInstanceServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowInstanceServicePropMethods
**********************************************/
export interface WorkflowInstanceServicePropMethods {
	Current(): Base.IBaseQuery<SP.WorkflowServices.WorkflowInstanceService, SP.WorkflowServices.WorkflowInstanceServiceOData> & SP.WorkflowServices.WorkflowInstanceServiceCollections & SP.WorkflowServices.WorkflowInstanceServiceMethods;
}

/*********************************************
* WorkflowInstanceServiceCollections
**********************************************/
export interface WorkflowInstanceServiceCollections extends WorkflowInstanceServicePropMethods {

}

/*********************************************
* WorkflowInstanceServiceOData
**********************************************/
export interface WorkflowInstanceServiceOData extends Base.IBaseResult, WorkflowInstanceServiceProps, WorkflowInstanceServiceMethods {
	Current: SP.WorkflowServices.WorkflowInstanceService & SP.WorkflowServices.WorkflowInstanceServiceCollections;
}

/*********************************************
* WorkflowInstanceServiceMethods
**********************************************/
export interface WorkflowInstanceServiceMethods {
	enumerateInstancesForListItem(listId?: any, itemId?: number): Base.IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForListItemWithOffset(listId?: any, itemId?: number, offset?: number): Base.IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForSite(): Base.IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	enumerateInstancesForSiteWithOffset(offset?: number): Base.IBaseCollection<SP.WorkflowServices.WorkflowInstance>;
	getInstance(instanceId?: any): Base.IBaseExecution<SP.WorkflowServices.WorkflowInstance>;
	startWorkflowOnListItemBySubscriptionId(subscriptionId?: any, itemId?: number, payload?: Array<SP.KeyValue>): Base.IBaseExecution<any>;
}

/*********************************************
* IInteropService
**********************************************/
export interface IInteropService extends InteropServiceCollections, InteropServiceMethods, Base.IBaseQuery<InteropService, IInteropServiceQuery> {

}

/*********************************************
* IInteropServiceCollection
**********************************************/
export interface IInteropServiceCollection extends Base.IBaseResults<InteropService> {
	done?: (resolve: (value?: Array<InteropService>) => void) => void;
}

/*********************************************
* IInteropServiceQueryCollection
**********************************************/
export interface IInteropServiceQueryCollection extends Base.IBaseResults<InteropServiceOData> {
	done?: (resolve: (value?: Array<InteropServiceOData>) => void) => void;
}

/*********************************************
* IInteropServiceQuery
**********************************************/
export interface IInteropServiceQuery extends InteropServiceOData, InteropServiceMethods {

}

/*********************************************
* InteropService
**********************************************/
export interface InteropService extends Base.IBaseResult, InteropServiceProps, InteropServiceCollections, InteropServiceMethods {

}

/*********************************************
* InteropServiceProps
**********************************************/
export interface InteropServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* InteropServicePropMethods
**********************************************/
export interface InteropServicePropMethods {
	Current(): Base.IBaseQuery<SP.WorkflowServices.InteropService, SP.WorkflowServices.InteropServiceOData> & SP.WorkflowServices.InteropServiceCollections & SP.WorkflowServices.InteropServiceMethods;
}

/*********************************************
* InteropServiceCollections
**********************************************/
export interface InteropServiceCollections extends InteropServicePropMethods {

}

/*********************************************
* InteropServiceOData
**********************************************/
export interface InteropServiceOData extends Base.IBaseResult, InteropServiceProps, InteropServiceMethods {
	Current: SP.WorkflowServices.InteropService & SP.WorkflowServices.InteropServiceCollections;
}

/*********************************************
* InteropServiceMethods
**********************************************/
export interface InteropServiceMethods {
	cancelWorkflow(instanceId?: any): Base.IBaseExecution<any>;
	disableEvents(listId?: any, itemGuid?: any): Base.IBaseExecution<any>;
	enableEvents(listId?: any, itemGuid?: any): Base.IBaseExecution<any>;
	startWorkflow(associationName?: string, correlationId?: any, listId?: any, itemGuid?: any, workflowParameters?: Array<SP.KeyValue>): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowServicesManager
**********************************************/
export interface IWorkflowServicesManager extends WorkflowServicesManagerCollections, WorkflowServicesManagerMethods, Base.IBaseQuery<WorkflowServicesManager, IWorkflowServicesManagerQuery> {

}

/*********************************************
* IWorkflowServicesManagerCollection
**********************************************/
export interface IWorkflowServicesManagerCollection extends Base.IBaseResults<WorkflowServicesManager> {
	done?: (resolve: (value?: Array<WorkflowServicesManager>) => void) => void;
}

/*********************************************
* IWorkflowServicesManagerQueryCollection
**********************************************/
export interface IWorkflowServicesManagerQueryCollection extends Base.IBaseResults<WorkflowServicesManagerOData> {
	done?: (resolve: (value?: Array<WorkflowServicesManagerOData>) => void) => void;
}

/*********************************************
* IWorkflowServicesManagerQuery
**********************************************/
export interface IWorkflowServicesManagerQuery extends WorkflowServicesManagerOData, WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManager
**********************************************/
export interface WorkflowServicesManager extends Base.IBaseResult, WorkflowServicesManagerProps, WorkflowServicesManagerCollections, WorkflowServicesManagerMethods {

}

/*********************************************
* WorkflowServicesManagerProps
**********************************************/
export interface WorkflowServicesManagerProps {
	AppId?: string;
	IsConnected?: boolean;
	ScopePath?: string;
	ServiceHealthStatus?: number;
}

/*********************************************
* WorkflowServicesManagerPropMethods
**********************************************/
export interface WorkflowServicesManagerPropMethods {
	Current(): Base.IBaseQuery<SP.WorkflowServices.WorkflowServicesManager, SP.WorkflowServices.WorkflowServicesManagerOData> & SP.WorkflowServices.WorkflowServicesManagerCollections & SP.WorkflowServices.WorkflowServicesManagerMethods;
}

/*********************************************
* WorkflowServicesManagerCollections
**********************************************/
export interface WorkflowServicesManagerCollections extends WorkflowServicesManagerPropMethods {

}

/*********************************************
* WorkflowServicesManagerOData
**********************************************/
export interface WorkflowServicesManagerOData extends Base.IBaseResult, WorkflowServicesManagerProps, WorkflowServicesManagerMethods {
	Current: SP.WorkflowServices.WorkflowServicesManager & SP.WorkflowServices.WorkflowServicesManagerCollections;
}

/*********************************************
* WorkflowServicesManagerMethods
**********************************************/
export interface WorkflowServicesManagerMethods {
	getWorkflowDeploymentService(): Base.IBaseExecution<SP.WorkflowServices.WorkflowDeploymentService>;
	getWorkflowInstanceService(): Base.IBaseQuery<SP.WorkflowServices.WorkflowInstanceService, SP.WorkflowServices.WorkflowInstanceServiceOData> & SP.WorkflowServices.WorkflowInstanceServiceCollections & SP.WorkflowServices.WorkflowInstanceServiceMethods;
	getWorkflowInteropService(): Base.IBaseQuery<SP.WorkflowServices.InteropService, SP.WorkflowServices.InteropServiceOData> & SP.WorkflowServices.InteropServiceCollections & SP.WorkflowServices.InteropServiceMethods;
	getWorkflowSubscriptionService(): Base.IBaseQuery<SP.WorkflowServices.WorkflowSubscriptionService, SP.WorkflowServices.WorkflowSubscriptionServiceOData> & SP.WorkflowServices.WorkflowSubscriptionServiceCollections & SP.WorkflowServices.WorkflowSubscriptionServiceMethods;
	isIntegratedApp(): Base.IBaseExecution<boolean>;
}

/*********************************************
* IWorkflowSubscription
**********************************************/
export interface IWorkflowSubscription extends WorkflowSubscriptionCollections, WorkflowSubscriptionMethods, Base.IBaseQuery<WorkflowSubscription, IWorkflowSubscriptionQuery> {

}

/*********************************************
* IWorkflowSubscriptionCollection
**********************************************/
export interface IWorkflowSubscriptionCollection extends Base.IBaseResults<WorkflowSubscription>, WorkflowSubscriptionCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowSubscription>) => void) => void;
}

/*********************************************
* IWorkflowSubscriptionQueryCollection
**********************************************/
export interface IWorkflowSubscriptionQueryCollection extends Base.IBaseResults<WorkflowSubscriptionOData>, WorkflowSubscriptionCollectionMethods {
	done?: (resolve: (value?: Array<WorkflowSubscriptionOData>) => void) => void;
}

/*********************************************
* IWorkflowSubscriptionQuery
**********************************************/
export interface IWorkflowSubscriptionQuery extends WorkflowSubscriptionOData, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscription
**********************************************/
export interface WorkflowSubscription extends Base.IBaseResult, WorkflowSubscriptionProps, WorkflowSubscriptionCollections, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscriptionProps
**********************************************/
export interface WorkflowSubscriptionProps {
	DefinitionId?: any;
	Enabled?: boolean;
	EventSourceId?: any;
	EventTypes?: { results: Array<string> };
	Id?: any;
	ManualStartBypassesActivationLimit?: boolean;
	Name?: string;
	ParentContentTypeId?: string;
	PropertyDefinitions?: { results: Array<SP.KeyValue> };
	StatusFieldName?: string;
}

/*********************************************
* WorkflowSubscriptionPropMethods
**********************************************/
export interface WorkflowSubscriptionPropMethods {

}

/*********************************************
* WorkflowSubscriptionCollections
**********************************************/
export interface WorkflowSubscriptionCollections extends WorkflowSubscriptionPropMethods {

}

/*********************************************
* WorkflowSubscriptionCollectionMethods
**********************************************/
export interface WorkflowSubscriptionCollectionMethods {
	sort(): Base.IBaseExecution<any>;
}

/*********************************************
* WorkflowSubscriptionOData
**********************************************/
export interface WorkflowSubscriptionOData extends Base.IBaseResult, WorkflowSubscriptionProps, WorkflowSubscriptionMethods {

}

/*********************************************
* WorkflowSubscriptionMethods
**********************************************/
export interface WorkflowSubscriptionMethods {
	getExternalVariable(name?: string): Base.IBaseExecution<string>;
	setExternalVariable(name?: string, value?: string): Base.IBaseExecution<any>;
	setProperty(name?: string, value?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowSubscriptionService
**********************************************/
export interface IWorkflowSubscriptionService extends WorkflowSubscriptionServiceCollections, WorkflowSubscriptionServiceMethods, Base.IBaseQuery<WorkflowSubscriptionService, IWorkflowSubscriptionServiceQuery> {

}

/*********************************************
* IWorkflowSubscriptionServiceCollection
**********************************************/
export interface IWorkflowSubscriptionServiceCollection extends Base.IBaseResults<WorkflowSubscriptionService> {
	done?: (resolve: (value?: Array<WorkflowSubscriptionService>) => void) => void;
}

/*********************************************
* IWorkflowSubscriptionServiceQueryCollection
**********************************************/
export interface IWorkflowSubscriptionServiceQueryCollection extends Base.IBaseResults<WorkflowSubscriptionServiceOData> {
	done?: (resolve: (value?: Array<WorkflowSubscriptionServiceOData>) => void) => void;
}

/*********************************************
* IWorkflowSubscriptionServiceQuery
**********************************************/
export interface IWorkflowSubscriptionServiceQuery extends WorkflowSubscriptionServiceOData, WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionService
**********************************************/
export interface WorkflowSubscriptionService extends Base.IBaseResult, WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceCollections, WorkflowSubscriptionServiceMethods {

}

/*********************************************
* WorkflowSubscriptionServiceProps
**********************************************/
export interface WorkflowSubscriptionServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowSubscriptionServicePropMethods
**********************************************/
export interface WorkflowSubscriptionServicePropMethods {
	Current(): Base.IBaseQuery<SP.WorkflowServices.WorkflowSubscriptionService, SP.WorkflowServices.WorkflowSubscriptionServiceOData> & SP.WorkflowServices.WorkflowSubscriptionServiceCollections & SP.WorkflowServices.WorkflowSubscriptionServiceMethods;
}

/*********************************************
* WorkflowSubscriptionServiceCollections
**********************************************/
export interface WorkflowSubscriptionServiceCollections extends WorkflowSubscriptionServicePropMethods {

}

/*********************************************
* WorkflowSubscriptionServiceOData
**********************************************/
export interface WorkflowSubscriptionServiceOData extends Base.IBaseResult, WorkflowSubscriptionServiceProps, WorkflowSubscriptionServiceMethods {
	Current: SP.WorkflowServices.WorkflowSubscriptionService & SP.WorkflowServices.WorkflowSubscriptionServiceCollections;
}

/*********************************************
* WorkflowSubscriptionServiceMethods
**********************************************/
export interface WorkflowSubscriptionServiceMethods {
	deleteSubscription(subscriptionId?: any): Base.IBaseExecution<any>;
	enumerateSubscriptions(): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByDefinition(definitionId?: any): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByEventSource(eventSourceId?: any): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByList(listId?: any): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByListAndParentContentType(listId?: any, parentContentTypeId?: SP.ContentTypeId, includeNoContentTypeSpecified?: boolean): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	enumerateSubscriptionsByListWithContentType(listId?: any, includeContentTypeSpecified?: boolean): Base.IBaseCollection<SP.WorkflowServices.WorkflowSubscription> & SP.WorkflowServices.WorkflowSubscriptionCollectionMethods;
	getSubscription(subscriptionId?: any): Base.IBaseExecution<SP.WorkflowServices.WorkflowSubscription>;
	registerInterestInHostWebList(listId?: any, eventName?: string): Base.IBaseExecution<any>;
	registerInterestInList(listId?: any, eventName?: string): Base.IBaseExecution<any>;
	unregisterInterestInHostWebList(listId?: any, eventName?: string): Base.IBaseExecution<any>;
	unregisterInterestInList(listId?: any, eventName?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IWorkflowMessagingService
**********************************************/
export interface IWorkflowMessagingService extends WorkflowMessagingServiceCollections, WorkflowMessagingServiceMethods, Base.IBaseQuery<WorkflowMessagingService, IWorkflowMessagingServiceQuery> {

}

/*********************************************
* IWorkflowMessagingServiceCollection
**********************************************/
export interface IWorkflowMessagingServiceCollection extends Base.IBaseResults<WorkflowMessagingService> {
	done?: (resolve: (value?: Array<WorkflowMessagingService>) => void) => void;
}

/*********************************************
* IWorkflowMessagingServiceQueryCollection
**********************************************/
export interface IWorkflowMessagingServiceQueryCollection extends Base.IBaseResults<WorkflowMessagingServiceOData> {
	done?: (resolve: (value?: Array<WorkflowMessagingServiceOData>) => void) => void;
}

/*********************************************
* IWorkflowMessagingServiceQuery
**********************************************/
export interface IWorkflowMessagingServiceQuery extends WorkflowMessagingServiceOData, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingService
**********************************************/
export interface WorkflowMessagingService extends Base.IBaseResult, WorkflowMessagingServiceProps, WorkflowMessagingServiceCollections, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingServiceProps
**********************************************/
export interface WorkflowMessagingServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WorkflowMessagingServicePropMethods
**********************************************/
export interface WorkflowMessagingServicePropMethods {

}

/*********************************************
* WorkflowMessagingServiceCollections
**********************************************/
export interface WorkflowMessagingServiceCollections extends WorkflowMessagingServicePropMethods {

}

/*********************************************
* WorkflowMessagingServiceOData
**********************************************/
export interface WorkflowMessagingServiceOData extends Base.IBaseResult, WorkflowMessagingServiceProps, WorkflowMessagingServiceMethods {

}

/*********************************************
* WorkflowMessagingServiceMethods
**********************************************/
export interface WorkflowMessagingServiceMethods {
	publishEvent(eventSourceId?: any, eventName?: string, payload?: Array<SP.KeyValue>): Base.IBaseExecution<string>;
}
