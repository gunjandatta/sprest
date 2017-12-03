import { Base, BaseHelper, IBaseHelper, Promise, XHRRequest, IMethodInfo, ITargetInfo } from ".";
/**
 * Base Request
 */
export interface IBaseRequest extends IBaseHelper {
    /** The target information. */
    targetInfo: ITargetInfo;
    /** The request. */
    xhr: XHRRequest;
    /** Method to execute the request. */
    executeMethod(base: Base, methodName: string, methodConfig: IMethodInfo, args?: any): any;
    /** Method to execute the request. */
    executeRequest(asyncFl: boolean, callback?: (...args) => void): any;
    /** Gets the property as a collection. */
    getCollection(base: Base, method: string, args?: any): any;
    /** Gets the next set of results. */
    getNextSetOfResults(base: Base): any;
    /** Gets the property. */
    getProperty(base: Base, propertyName: string, requestType?: string): any;
    /** Updates the metdata uri. */
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): any;
    /** Validates the data collection results. */
    validateDataCollectionResults(base: Base, request: XHRRequest, promise?: Promise): any;
}
/**
 * Base Request
 */
export declare class BaseRequest extends BaseHelper implements IBaseRequest {
    requestType: number;
    targetInfo: ITargetInfo;
    xhr: XHRRequest;
    executeMethod(base: Base, methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
    executeRequest(asyncFl: boolean, callback?: (...args) => void): any;
    getCollection(base: Base, method: string, args?: any): Base<any, any, any>;
    getNextSetOfResults(base: Base): Base<any, any, any>;
    getProperty(base: Base, propertyName: string, requestType?: string): Base<any, any, any>;
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): void;
    validateDataCollectionResults(base: Base, request: XHRRequest, promise?: Promise): Promise;
}
