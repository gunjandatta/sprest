/**
 * An easy way to apply simple or complex code against an array of objects.
 * @param methodParams - An array of parameters to execute in order synchronously.
 * @param method - The method to execute for each method parameter provided. Returning a promise will prevent the next item from executing until it is resolved.
 * @param onExecuted - An event executed after the method completes. Returning a promise will prevent the next item from executing until it is resolved.
 */
export const Executor: IExecutor;

/**
 * Executor
 */
export interface IExecutor {
    <T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void): PromiseLike<any>;
}