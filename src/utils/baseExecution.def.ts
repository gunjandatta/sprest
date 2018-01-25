import { BaseExecution, TargetInfo } from ".";
import { IBaseExecution, IBaseRequest, IRequestInfo } from "./index.def";

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
     * @param callback - The method to be executed after the request completes.
     */
    batch(callback?: (value?: Result, ...args) => any): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: Result, ...args) => any): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: Result, ...args) => any, waitFl: boolean): Type;

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
