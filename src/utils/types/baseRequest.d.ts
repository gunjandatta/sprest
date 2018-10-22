import { XHRRequest } from "..";
import { IBaseHelper } from "./baseHelper";
import { IMethodInfo, ITargetInfoProps } from ".";

/**
 * Base Request
 */
export interface IBaseRequest extends IBaseHelper {
    /** Flag to get all items. */
    getAllItemsFl: boolean;

    /** Flag determining if more items exist. */
    nextFl: boolean;

    /** The target information. */
    targetInfo: ITargetInfoProps;

    /** The request. */
    xhr: XHRRequest;

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
