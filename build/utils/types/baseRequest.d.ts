import { XHRRequest } from "..";
import { IBaseHelper, IMethodInfo, ITargetInfo } from ".";
export interface IBaseRequest extends IBaseHelper {
    getAllItemsFl: boolean;
    targetInfo: ITargetInfo;
    xhr: XHRRequest;
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): any;
    executeRequest(asyncFl: boolean, callback?: (...args) => void): any;
    getCollection(method: string, args?: any): any;
    getNextSetOfResults(): any;
    getProperty(propertyName: string, requestType?: string): any;
    updateMetadataUri(metadata: any, targetInfo: ITargetInfo): any;
    validateDataCollectionResults(): PromiseLike<void>;
}
