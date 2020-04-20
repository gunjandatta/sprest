import { IBaseExecution } from "../../lib/base";
import { IWorkflowInstanceService as IWorkflowInstanceServiceDef } from "../../lib/SP/WorkflowServices/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/SP.WorkflowServices.WorkflowInstanceService.Current
 */
export const WorkflowInstanceService: IWorkflowInstanceService;

/**
 * Workflow Instance Service
 */
export interface IWorkflowInstanceService {
    /**
     * Creates an instance of the web library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): IWorkflowInstanceServiceDef;
}