import { BaseExecution, TargetInfo } from "..";
import { IBaseRequest } from ".";
export interface IBaseExecution<Type = any, Result = Type> extends IBaseRequest {
    batchRequests: Array<Array<{
        callback?: any;
        response?: BaseExecution;
        targetInfo: TargetInfo;
    }>>;
    parent: BaseExecution;
    responseIndex: number;
    responses: Array<BaseExecution>;
    waitFlags: Array<boolean>;
    batch(resolve: (value?: Result) => void): Type;
    batch(appendFl?: boolean): Type;
    execute(waitFl: boolean): Type;
    execute(resolve?: (value?: Result) => void, waitFl?: boolean): Type;
    executeAndWait(): Result;
    waitForRequestsToComplete(callback: () => void, requestIdx?: number): any;
}
