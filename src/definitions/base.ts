import {IRequestType} from ".";
/**
 * The base class
 */
export interface IBase<T = any> {
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
    done(callback?:(...args) => any);

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(value?:T, ...args) => any): T;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): T;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:(value?:T, ...args) => any, waitFl:boolean): T;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): T;
}