import { ContextInfo } from "../lib";
import { BaseRequest, TargetInfo, IBaseRequest } from ".";

/**
 * Base Execution
 */
export interface IBaseExecution<Type = any, Result = Type> extends IBaseRequest {
    /** The batch requests. */
    batchRequests: Array<Array<{ callback?: any, response?: BaseExecution, targetInfo: TargetInfo }>>;

    /** The parent. */
    parent: BaseExecution;

    /** The index of this object in the responses array. */
    responseIndex: number;

    /** The responses. */
    responses: Array<BaseExecution>;

    /** The wait flags. */
    waitFlags: Array<boolean>;

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
     * Method to wait for the parent requests to complete
     * @param callback - The callback method.
     * @param requestIdx - The request index.
     */
    waitForRequestsToComplete(callback: () => void, requestIdx?: number);
}

/**
 * Base Execution
 */
export class BaseExecution<Type = any, Result = Type> extends BaseRequest {
    batchRequests: Array<Array<{ callback?: any, response?: BaseExecution, targetInfo: TargetInfo }>>;
    parent: BaseExecution;
    responseIndex: number;
    responses: Array<BaseExecution>;
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
                this.executeRequest(true, () => {
                    // See if there is a callback
                    if (callback) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        this.base = this as any;
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
            this.executeRequest(true, () => {
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
    executeAndWait() { return this.executeRequest(false); }

    // Method to wait for the parent requests to complete
    waitForRequestsToComplete(callback: () => void, requestIdx?: number) {
        // Loop until the requests have completed
        let intervalId = ContextInfo.window.setInterval(() => {
            let counter = 0;

            // Parse the responses to the requests
            for (let i = 0; i < this.base.responses.length; i++) {
                let response = this.base.responses[i];

                // See if we are waiting until a specified index
                if (requestIdx == counter++) { break; }

                // Return if the request hasn't completed
                if (response.xhr == null || !response.xhr.completedFl) { return; }

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