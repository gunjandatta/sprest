import { Types } from "../mapper";
import {
    BaseExecution, Batch, TargetInfo,
    IBaseExecution, IRequestInfo, ITargetInfo
} from ".";

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> extends IBaseExecution<Type, Result> {
    // Flag to default the url to the current web url, site otherwise
    defaultToWebFl: boolean;

    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** The parent object, which created this object. */
    parent: any;

    /** The response */
    response: string;

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
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: Types.ODataQuery): IBase<Result, QueryResult>;

    /**
     * Method to stringify the object.
     */
    stringify(): string;
}

/**
 * Base Collection Results
 */
export interface IBaseCollectionResult<Result> extends Types.IResults<Result> {
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
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.IResults<Type>, IBase<IBaseCollectionResult<Result>, IBaseCollectionResult<Result>, IBaseCollectionResult<QueryResult>> { }

/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
export class Base<Type = any, Result = Type, QueryResult = Result> extends BaseExecution<Type, Result> implements IBase {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfo) {
        super();

        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.requestType = 0;
        this.waitFlags = [];
    }

    // Flag to default the url to the current web url, site otherwise
    defaultToWebFl: boolean;

    // Flag to determine if the requested object exists
    existsFl;

    // Method to wait for the requests to complete
    done(callback: (...args) => any) {
        // Ensure the base is set
        this.base = this.base ? this.base : this;

        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;

        // Wait for the responses to execute
        this.waitForRequestsToComplete(() => {
            let responses = this.base.responses;

            // Clear the responses
            this.base.responses = [];

            // Clear the wait flags
            this.base.waitFlags = [];

            // Execute the callback back
            callback ? callback.apply(this, responses) : null;
        });
    }

    // Method to get the request information
    getInfo(): IRequestInfo { return (new TargetInfo(this.targetInfo)).requestInfo; }

    // Method to stringify the object
    stringify(): string {
        // Stringify the object
        return JSON.stringify({
            response: this.response,
            status: this.status,
            targetInfo: this.targetInfo
        });
    }
}