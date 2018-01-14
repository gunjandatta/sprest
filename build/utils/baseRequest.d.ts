import { Base, BaseHelper, IBaseHelper, XHRRequest, IMethodInfo, ITargetInfo } from ".";
/**
 * Base Request
 */
export interface IBaseRequest extends IBaseHelper {
    /** Flag to get all items. */
    getAllItemsFl: boolean;
    /** The target information. */
    targetInfo: ITargetInfo;
    /** The request. */
    xhr: XHRRequest;
    /** Method to execute the request. */
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): any;
    /** Method to execute the request. */
    executeRequest(asyncFl: boolean, callback?: (...args) => void): any;
    /** Gets the property as a collection. */
    getCollection(method: string, args?: any): any;
    /** Gets the next set of results. */
    getNextSetOfResults(): any;
    /** Gets the property. */
    getProperty(propertyName: string, requestType?: string): any;
    /** Updates the metdata uri. */
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): any;
    /** Validates the data collection results. */
    validateDataCollectionResults(): PromiseLike<void>;
}
/**
 * Base Request
 */
export declare class BaseRequest extends BaseHelper implements IBaseRequest {
    getAllItemsFl: boolean;
    requestType: number;
    targetInfo: ITargetInfo;
    xhr: XHRRequest;
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
    executeRequest(asyncFl: boolean, callback?: (...args) => void): any;
    getCollection(method: string, args?: any): Base<any, any, any>;
    getNextSetOfResults(): Base<any, any, any>;
    getProperty(propertyName: string, requestType?: string): Base<any, any, any>;
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): void;
    validateDataCollectionResults(): PromiseLike<void>;
}
