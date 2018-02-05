import { Base, BaseHelper, Types, XHRRequest } from ".";
export declare class BaseRequest extends BaseHelper implements Types.IBaseRequest {
    getAllItemsFl: boolean;
    requestType: number;
    targetInfo: Types.ITargetInfo;
    xhr: XHRRequest;
    executeMethod(methodName: string, methodConfig: Types.IMethodInfo, args?: any): Base<any, any, any>;
    executeRequest(asyncFl: boolean, callback?: (...args) => void): string | this;
    getCollection(method: string, args?: any): Base<any, any, any>;
    getNextSetOfResults(): Base<any, any, any>;
    getProperty(propertyName: string, requestType?: string): Base<any, any, any>;
    updateMetadataUri(metadata: any, targetInfo: Types.ITargetInfo): void;
    validateDataCollectionResults(): PromiseLike<void>;
}
