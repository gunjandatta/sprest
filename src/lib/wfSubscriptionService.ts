import { IWorkflowSubscriptionService } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Workflow Subscription Service
 */
export const WorkflowSubscriptionService: IWorkflowSubscriptionService = ((url: string, targetInfo?: ITargetInfoProps) => {
    let wfs = new Base(targetInfo);

    // Default the properties
    wfs.targetInfo.defaultToWebFl = true;
    wfs.targetInfo.endpoint = "SP.WorkflowServices.WorkflowSubscriptionService.Current";

    // See if the web url exists
    if (url) {
        // Set the settings
        wfs.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(wfs, { __metadata: { type: "SP.WorkflowServices.WorkflowSubscriptionService" } });

    // Return the workflow service
    return wfs;
}) as any as IWorkflowSubscriptionService;