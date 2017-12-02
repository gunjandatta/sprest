import { Types } from "../mapper";
import { IRequestType } from "../types";
import { ODataQuery, IMethodInfo, XHRRequest, IRequestInfo, ITargetInfo } from ".";
/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> {
    /**
     * Properties
     */
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;
    /** The parent object, which created this object. */
    parent: any;
    /** The response */
    response: string;
    /** The request type */
    requestType: IRequestType;
    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param callback - The method to be executed after the request completes.
     */
    batch(callback?: (value?: Result, ...args) => any): Type;
    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;
    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (...args) => any): any;
    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (value?: Result, ...args) => any): any;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: Result, ...args) => any): Type;
    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;
    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: Result, ...args) => any, waitFl: boolean): Type;
    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;
    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: ODataQuery): IBase<Result, QueryResult>;
    /**
     * Method to execute this request and previous ones to complete.
     * @param resolve - Method to execute for successful requests.
     * @param reject - Method to execute for unsuccessful requests.
     */
    then(resolve?: (value?: Result) => void, reject?: (value?: Result) => void): PromiseLike<Result>;
}
/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.IResults<Type>, IBase<Types.IResults<Result>, Types.IResults<Result>, Types.IResults<QueryResult>> {
}
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Base<Type = any, Result = Type, QueryResult = Result> implements IBase {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    existsFl: any;
    parent: Base;
    requestType: any;
    readonly response: any;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    batch(arg?: any): this;
    done(callback: (...args) => any): void;
    execute(...args: any[]): this;
    executeAndWait(): this;
    getInfo(): IRequestInfo;
    then(resolve: any, reject: any): PromiseLike<IBase>;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private base;
    private batchRequests;
    protected defaultToWebFl: boolean;
    protected getAllItemsFl: boolean;
    private promise;
    protected request: XHRRequest;
    protected responses: Array<Base>;
    private responseIndex;
    protected targetInfo: ITargetInfo;
    private waitFlags;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    protected addMethods(obj: any, data: any): void;
    private addProperties(obj, data);
    protected executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
    protected executeRequest(asyncFl: boolean, callback?: (...args) => void): this;
    private getCollection(method, args?);
    protected getProperty(propertyName: string, requestType?: string): Base<any, any, any>;
    protected getNextSetOfResults(): Base<any, any, any>;
    private updateDataCollection(obj, results);
    protected updateDataObject(isBatchRequest: boolean): any;
    private updateMetadata(obj, data);
    private updateMetadataUri(metadata, targetInfo);
    private validateDataCollectionResults(request, promise?);
    private waitForRequestsToComplete(callback, requestIdx?);
}
