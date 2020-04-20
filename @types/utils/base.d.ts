import { IBaseExecution, IBaseResult } from "../../lib/base";
import { ITargetInfo, ITargetInfoProps } from "./targetInfo";
import { IXHRRequest } from "./xhrRequest";

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseExecution<Result, QueryResult>, IBaseResult {
    /**
     * Base Properties
     */

    /** The parent object, which created this object. */
    parent: any;

    /**
     * Execution Properties
     */

    /** The batch requests. */
    batchRequests: Array<Array<{ callback?: any, response?: IBase, targetInfo: ITargetInfo }>>;

    /** The index of this object in the responses array. */
    responseIndex: number;

    /** The responses. */
    responses: Array<IBase>;

    /** The wait flags. */
    waitFlags: Array<boolean>;

    /**
     * Request Properties
     */

    /** The base object. */
    base: IBase;

    /** The request type */
    requestType: number;

    /** The request's status. */
    status: number;

    /** The target information. */
    targetInfo: ITargetInfoProps;

    /** The xml object. */
    xml: string | XMLDocument;

    /**
     * Request Helper Properties & Methods
     */

    /** Flag to get all items. */
    getAllItemsFl: boolean;

    /** Flag determining if more items exist. */
    nextFl: boolean;

    /** The request. */
    xhr: IXHRRequest;

    /** Adds methods based on the object type. */
    addMethods(data: any, context?: any);

    /** Gets the property as a collection. */
    getCollection(method: string, args?: any);

    /** Gets the next set of results. */
    getNextSetOfResults();

    /** Gets the property. */
    getProperty(propertyName: string, requestType?: string);

    /** Updates the metdata uri. */
    updateMetadataUri(metadata, targetInfo: ITargetInfoProps);

    /**
     * Method to wait for the parent requests to complete
     */
    waitForRequestsToComplete(callback: () => void, requestIdx?: number);
}