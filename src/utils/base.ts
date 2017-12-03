import { ContextInfo } from "../lib";
import { Types } from "../mapper";
import {
    BaseExecution, Batch, Promise, TargetInfo,
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
     * Method to execute this request and previous ones to complete.
     * @param resolve - Method to execute for successful requests.
     * @param reject - Method to execute for unsuccessful requests.
     */
    then(resolve?: (value?: Result) => void, reject?: (value?: Result) => void): PromiseLike<Result>;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.IResults<Type>, IBase<Types.IResults<Result>, Types.IResults<Result>, Types.IResults<QueryResult>> { }

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

    // Method to execute the request asynchronously
    then(resolve, reject): PromiseLike<IBase> {
        // Return a promise
        return new Promise(() => {
            // Execute this request
            this.execute((request: Base) => {
                // Ensure the request was successful
                if (request && request.existsFl) {
                    // Resolve the request
                    resolve ? resolve.apply(this, request) : null;
                } else {
                    // Reject the request
                    reject ? reject.apply(this, request) : null;
                }
            });
        });
    }
}