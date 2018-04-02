import { BaseRequest, TargetInfo, Types } from ".";
/**
 * Base Execution
 */
export declare class BaseExecution<Type = any, Result = Type> extends BaseRequest implements Types.IBaseExecution {
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
    execute(...args: any[]): BaseExecution<any, any>;
    executeAndWait(): string | this;
    waitForRequestsToComplete(callback: () => void, requestIdx?: number): void;
}
