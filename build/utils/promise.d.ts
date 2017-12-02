import { IBase } from ".";
/**
 * Promise
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
/**
 * Promise
 */
export declare class Promise implements PromiseLike<any> {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(callback?: (...args) => void);
    /******************************************************************************************************************************** */
    /******************************************************************************************************************************** */
    done(callback?: (...args) => void): void;
    resolve(...args: any[]): void;
    then<TResult1 = IBase, TResult2 = never>(onfulfilled?: ((value: IBase) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): any;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private args;
    private callback;
    private resolvedFl;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private executeMethod();
}
