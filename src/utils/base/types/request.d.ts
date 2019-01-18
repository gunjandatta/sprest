import { IHelper } from "./helper";
import { IMethodInfo } from "../../types/methodInfo";
import { ITargetInfoProps } from "../../types/targetInfo";
import { IXHRRequest } from "../../types/xhrRequest";

/**
 * Base Request
 */
export interface IRequest extends IHelper {
    /** Flag to get all items. */
    getAllItemsFl: boolean;

    /** Flag determining if more items exist. */
    nextFl: boolean;

    /** The target information. */
    targetInfo: ITargetInfoProps;

    /** The request. */
    xhr: IXHRRequest;

    /** Method to execute the request. */
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any);

    /** Method to execute the request. */
    executeRequest(asyncFl: boolean, callback?: (response: any, errorFl: boolean) => void);

    /** Gets the property as a collection. */
    getCollection(method: string, args?: any);

    /** Gets the next set of results. */
    getNextSetOfResults();

    /** Gets the property. */
    getProperty(propertyName: string, requestType?: string);

    /** Updates the metdata uri. */
    updateMetadataUri(metadata, targetInfo: ITargetInfoProps);

    /** Validates the data collection results. */
    validateDataCollectionResults(): PromiseLike<void>;
}
