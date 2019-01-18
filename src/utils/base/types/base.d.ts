import { ODataQuery } from "../../../mapper/types/oData";
import { IRequestInfo, ITargetInfoProps } from "../../types/targetInfo";
import { IExecution } from "./execution";

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IExecution<Type, Result> {
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
    done<T=IBase>(resolve: (value?: T) => void);

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
     * Method to stringify the object.
     */
    stringify(): string;
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
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends IBase<IBaseCollectionResult<Result>, IBaseCollectionResult<Result>, IBaseCollectionResult<QueryResult>> {
    results: Array<Type>
}