export * from "./baseExecution.d";
import { BaseRequest, TargetInfo, IBaseExecution } from ".";
/**
 * Base Execution
 */
export declare class BaseExecution<Type = any, Result = Type> extends BaseRequest implements IBaseExecution {
    batchRequests: Array<Array<{
        callback?: any;
        response?: BaseExecution;
        targetInfo: TargetInfo;
    }>>;
    parent: BaseExecution;
    responseIndex: number;
    responses: Array<BaseExecution>;
    waitFlags: Array<boolean>;
    batch(arg?: any): this;
    execute(...args: any[]): this;
    executeAndWait(): any;
    waitForRequestsToComplete(callback: () => void, requestIdx?: number): void;
}
