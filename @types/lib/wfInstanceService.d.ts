import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Workflow Instance Service
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
    (url?: string, targetInfo?: ITargetInfoProps): SP.WorkflowServices.IWorkflowInstanceService;
}