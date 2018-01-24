export * from "./baseRequest.def";
import { Base, IBaseRequest, BaseHelper, IMethodInfo, ITargetInfo, XHRRequest } from ".";
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
