import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * Workflow Subscription Service
 */
export const WorkflowSubscriptionService: IWorkflowSubscriptionService;

/**
 * Workflow Subscription Service
 */
export interface IWorkflowSubscriptionService {
    /**
     * Creates an instance of the web library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): SP.WorkflowServices.IWorkflowSubscriptionService;
}