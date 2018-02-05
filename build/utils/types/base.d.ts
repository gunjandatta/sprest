import { Types } from "../..";
import { IBaseExecution, IRequestInfo } from ".";
/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseExecution<Type, Result> {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;
    /** The parent object, which created this object. */
    parent: any;
    /** The response */
    response: string;
    /**
     * Method to wait for the requests to complete.
     * @param resolve - The method to be executed after the request completes.
     */
    done<T = IBase>(resolve: (value?: T) => void): any;
    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: Types.SP.ODataQuery): IBase<Result, QueryResult>;
    /**
     * Method to stringify the object.
     */
    stringify(): string;
}
/**
 * Base Collection Results
 */
export interface IBaseCollectionResult<Result> extends Types.SP.IResults<Result> {
    /** True, if the object exists, false otherwise. */
    existsFl: boolean;
    /** The raw string response. */
    response: string;
    /** Method to stringify the object. */
    stringify(): string;
}
/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.SP.IResults<Type>, IBase<IBaseCollectionResult<Result>, IBaseCollectionResult<Result>, IBaseCollectionResult<QueryResult>> {
}
