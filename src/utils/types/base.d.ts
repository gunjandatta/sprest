import { ODataQuery } from "../../mapper/types";
import { IMethodInfo } from "./methodInfo";
import { IRequestInfo, ITargetInfo, ITargetInfoProps } from "./targetInfo";
import { IXHRRequest } from "./xhrRequest";

/**
 * Base Library
 */
export interface IBaseLib<Type = any, Result = Type, QueryResult = Result> {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** The response */
    response: string;

    /** The target information. */
    targetInfo: ITargetInfoProps;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     */
    batch(resolve: (value?: Result) => void): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param resolve - The method to be executed after the request completes.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(resolve: (value?: Result) => void, appendFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request.
     * @param resolve - The method to be executed if the request is successful.
     * @param reject - The method to be executed if the request fails.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(resolve?: (value?: Result) => void, reject?: (value?: Result) => void, waitFl?: boolean): Type;

    /**
     * Method to execute the request. (This is an internal method)
     * @param methodName - The method name to execute.
     * @param methodConfig - The configuration to pass with the request.
     * @param args - The optional arguments for the request.
     */
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any);

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;

    /**
     * Method to wait for the requests to complete.
     * @param resolve - The method to be executed after the request completes.
     */
    done<T=IBase>(resolve: (value?: T) => void);

    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: ODataQuery): IBaseLib<Result, QueryResult>;

    /**
     * Method to stringify the object.
     */
    stringify(): string;

    /**
     * Method to wait for the parent requests to complete
     * @param callback - The callback method.
     * @param requestIdx - The request index.
     */
    waitForRequestsToComplete(callback: () => void, requestIdx?: number);
}

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseLib<Type, Result, QueryResult> {
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
}

/**
 * Base Collection Results
 */
export interface IBaseCollectionResult<Result> {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** Returns the next set of results, if paging exists. */
    next(): IBaseCollection<Result>;

    /** True, if more items exist. */
    nextFl: boolean;

    /** The raw string response. */
    response: string;

    /** The results. */
    results: Array<Result>;

    /** Method to stringify the object. */
    stringify(): string;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends IBaseLib<IBaseCollectionResult<Result>, IBaseCollectionResult<Result>, IBaseCollectionResult<QueryResult>> {
    results: Array<Type>
}