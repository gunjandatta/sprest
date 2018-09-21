import { BaseExecution, TargetInfo } from "..";
import { IBaseExecution, IBaseRequest, IRequestInfo } from ".";

/**
 * Base Execution
 */
export interface IBaseExecution<Type = any, Result = Type> extends IBaseRequest {
    /** The batch requests. */
    batchRequests: Array<Array<{ callback?: any, response?: BaseExecution, targetInfo: TargetInfo }>>;

    /** The parent. */
    parent: BaseExecution;

    /** The index of this object in the responses array. */
    responseIndex: number;

    /** The responses. */
    responses: Array<BaseExecution>;

    /** The wait flags. */
    waitFlags: Array<boolean>;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     */
    batch(resolve: (value?: Result) => void): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param reject - The method to be executed if the request fails.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, reject?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;

    /**
     * Method to wait for the parent requests to complete
     * @param callback - The callback method.
     * @param requestIdx - The request index.
     */
    waitForRequestsToComplete(callback: () => void, requestIdx?: number);
}
