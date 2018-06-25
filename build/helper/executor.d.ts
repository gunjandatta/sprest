/**
 * Executor
 * @param methodParams - An array of parameters to execute in order synchronously.
 * @param method - The method to execute for each method parameter provided.
 * @param onExecuted - An optional event executed after the method completes. If a promise is returned, the executor will wait until it's resolved.
 */
export declare function Executor<T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: () => PromiseLike<any> | void): Promise<{}>;
