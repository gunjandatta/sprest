import { ContextInfo } from "../lib";
import { Types } from "../mapper";
import { IRequestType } from "../types";
import {
    BaseRequest, Batch,
    Promise,
    TargetInfo,
    IRequestInfo, ITargetInfo
} from ".";

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> {
    // Flag to default the url to the current web url, site otherwise
    defaultToWebFl: boolean;

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
export class Base<Type = any, Result = Type, QueryResult = Result> {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    constructor(targetInfo: ITargetInfo) {
        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.request = new BaseRequest();
        this.requestType = 0;
        this.waitFlags = [];
    }

    // The base object
    base: Base;

    // The batch requests
    batchRequests: Array<Array<{ callback?: any, response?: Base, targetInfo: TargetInfo }>>;

    // Flag to default the url to the current web url, site otherwise
    defaultToWebFl: boolean;

    // Flag to determine if the requested object exists
    existsFl;

    // Flag to get all items
    getAllItemsFl: boolean;

    // The parent
    parent: Base;

    // The request
    request: BaseRequest;

    // The request type
    requestType;

    // Method to return the xml http request's response
    get response() { return this.request ? this.request.response : null; }

    // The index of this object in the responses array
    responseIndex: number;

    // The responses
    responses: Array<Base>;

    // The base settings
    targetInfo: ITargetInfo;

    // The wait flags
    waitFlags: Array<boolean>;

    // Method to execute this request as a batch request
    batch(arg?) {
        let callback = null;
        let appendFl = false;

        // See if the input is a boolean
        if (typeof (arg) === "boolean") {
            // Set the flag
            appendFl = arg;
        } else {
            // Set the callback
            callback = arg;
        }

        // Set the base
        this.base = this.base ? this.base : this;

        // See if we are appending this request
        if (appendFl && this.base.batchRequests) {
            // Append the request
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new TargetInfo(this.targetInfo)
            });
        } else {
            // Ensure the batch requests exist
            this.base.batchRequests = this.base.batchRequests || [];

            // Create the request
            this.base.batchRequests.push([{
                callback,
                targetInfo: new TargetInfo(this.targetInfo)
            }]);
        }

        // Return this object
        return this;
    }

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

    // Method to execute the request
    execute(...args) {
        let callback = null;
        let waitFl = false;

        // Set the callback and wait flag
        switch (args.length) {
            case 1:
                callback = typeof (args[0]) === "boolean" ? callback : args[0];
                waitFl = typeof (args[0]) === "boolean" ? args[0] : waitFl;
                break;
            case 2:
                callback = args[0];
                waitFl = args[1];
                break;
        }

        // Set the base
        this.base = this.base ? this.base : this;

        // Set the response index
        this.responseIndex = this.base.responses.length;

        // Add this object to the responses
        this.base.responses.push(this);

        // See if we are waiting for the responses to complete
        if (waitFl) {
            // Wait for the responses to execute
            this.waitForRequestsToComplete(() => {
                // Execute this request
                this.request.executeRequest(this, true, () => {
                    // See if there is a callback
                    if (callback) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        this.base = this;
                        this.base.responses = [];

                        // Execute the callback and see if it returns a promise
                        let returnVal = callback(this);
                        if (returnVal && typeof (returnVal.done) === "function") {
                            // Wait for the promise to complete
                            returnVal.done(() => {
                                // Reset the base
                                this.base = this.parent.base;

                                // Set the wait flag
                                this.base.waitFlags[this.responseIndex] = true;
                            });

                            // Wait for the promise to complete
                            return;
                        }

                        // Reset the base
                        this.base = this.parent.base;
                    }

                    // Set the wait flag
                    this.base.waitFlags[this.responseIndex] = true;
                });
            }, this.responseIndex);
        } else {
            // Execute this request
            this.request.executeRequest(this, true, () => {
                // Execute the callback and see if it returns a promise
                let returnVal = callback ? callback(this) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    // Wait for the promise to complete
                    returnVal.done(() => {
                        // Set the wait flag
                        this.base.waitFlags[this.responseIndex] = true;
                    });
                } else {
                    // Set the wait flag
                    this.base.waitFlags[this.responseIndex] = true;
                }
            });
        }

        // Return this object
        return this;
    }

    // Method to execute the request synchronously
    executeAndWait() { return this.request.executeRequest(this, false); }

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

    // Method to wait for the parent requests to complete
    waitForRequestsToComplete(callback: () => void, requestIdx?: number) {
        // Loop until the requests have completed
        let intervalId = ContextInfo.window.setInterval(() => {
            let counter = 0;

            // Parse the responses to the requests
            for (let response of this.base.responses) {
                // See if we are waiting until a specified index
                if (requestIdx == counter++) { break; }

                // Return if the request hasn't completed
                if (response.request == null || !response.request.xhr.completedFl) { return; }

                // Ensure the wait flag is set for the previous request
                if (counter > 0 && this.base.waitFlags[counter - 1] != true) { return; }
            }

            // Clear the interval
            ContextInfo.window.clearInterval(intervalId);

            // Execute the callback
            callback();
        }, 10);
    }
}