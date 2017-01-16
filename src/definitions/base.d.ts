/**
 * The base class
 */
export interface IBase {
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
    requestType: number;

    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?:(...args) => any);

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IBase;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IBase;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IBase;
}