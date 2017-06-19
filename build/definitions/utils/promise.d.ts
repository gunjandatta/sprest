/**
 * The promise class
 */
export interface IPromise {
    /**
     * Constructor
     * @param callback - The method to be executed after the promise completes.
     */
    new (callback?: (...args) => void): any;
    /**
     * Method to set the callback method of the promise.
     * @param callback - The method to be executed after the promise completes.
     */
    done(callback?: (...args) => void): any;
    /**
     * Method to set this promise as completed.
     * @param args - The arguments to pass to the callback.
     */
    resolve(...args: any[]): any;
}
