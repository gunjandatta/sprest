import { Types } from "../mapper";
import { BaseExecution, IBaseExecution, IRequestInfo, ITargetInfo } from ".";
/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseExecution<Type, Result> {
    defaultToWebFl: boolean;
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;
    /** The parent object, which created this object. */
    parent: any;
    /** The response */
    response: string;
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
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: Types.ODataQuery): IBase<Result, QueryResult>;
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
export declare class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfo);
    defaultToWebFl: boolean;
    existsFl: any;
    getAllItemsFl: boolean;
    done(callback: (...args) => any): void;
    getInfo(): IRequestInfo;
    then(resolve: any, reject: any): PromiseLike<IBase>;
}
