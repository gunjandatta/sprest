import { IRequestType, IResults, ODataQuery } from "..";

/**
 * The base class
 */
export interface IBase<Type = any, Result = any, QueryResult = any> {
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
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (...args) => any);

    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (value?: Result, ...args) => any);

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
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IBase<Result, QueryResult>;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = any, QueryResult = any> extends IResults<Type>, IBase<IResults<Type>, IResults<Result>, IResults<QueryResult>> {}