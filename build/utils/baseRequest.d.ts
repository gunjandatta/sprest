import { Base, Promise, XHRRequest, IMethodInfo, ITargetInfo } from ".";
/**
 * Base Request
 */
export declare class BaseRequest {
    readonly response: any;
    readonly status: number;
    xhr: XHRRequest;
    executeMethod(base: Base, methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
    executeRequest(base: Base, asyncFl: boolean, callback?: (...args) => void): any;
    getCollection(base: Base, method: string, args?: any): Base<any, any, any>;
    getProperty(base: Base, propertyName: string, requestType?: string): Base<any, any, any>;
    getNextSetOfResults(base: Base): Base<any, any, any>;
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): void;
    validateDataCollectionResults(base: Base, request: XHRRequest, promise?: Promise): Promise;
}
