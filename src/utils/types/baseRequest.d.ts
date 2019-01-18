import { IBase } from "./base";
import { IMethodInfo } from "./methodInfo";
import { ITargetInfoProps } from "./targetInfo";
import { IXHRRequest } from "./xhrRequest";

/**
 * Base Request
 */
export interface IBaseRequest {
    /** The base object. */
    base: IBase;

    /** The request type */
    requestType: number;

    /** The request's raw response. */
    response: string;

    /** The request's status. */
    status: number;

    /** The xml object. */
    xml: string | XMLDocument;

    /** Updates the data object. */
    updateDataObject(isBatchRequest: boolean);



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
