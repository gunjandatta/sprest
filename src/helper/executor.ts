/**
 * Executor
 * @param methodParams - An array of parameters to execute in order synchronously.
 * @param method - The method to execute for each method parameter provided.
 * @param onExecuted - An optional event executed after the method completes. If a promise is returned, the executor will wait until it's resolved.
 */
export function Executor<T = any>(methodParams: Array<T> = [], method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void) {
    let _completedFl = false;
    let _resolve = null;

    // Method to execute the methods
    let executeMethods = (idx: number = 0) => {
        // Execute the method and see if a promise is returned
        let returnVal = idx < methodParams.length ? method(methodParams[idx]) : null;
        if (returnVal && returnVal.then) {
            // Wait for the method to complete
            returnVal.then((...args) => {
                // See if the on executed event exists
                if (onExecuted) {
                    // Execute the method and see if a promise is returned
                    let returnVal = onExecuted.apply(this, args);
                    if (returnVal && returnVal.then) {
                        // Wait for the method to complete
                        returnVal.then(() => {
                            // Execute the next method
                            executeMethods(idx + 1);
                        });
                    } else {
                        // Execute the next method
                        executeMethods(idx + 1);
                    }
                } else {
                    // Execute the next method
                    executeMethods(idx + 1);
                }
            });
        }
        // Else, see if additional methods need to be executed
        else if (idx < methodParams.length) {
            // Execute the next method
            executeMethods(idx + 1);
        }
        // Else, resolve the promise
        else {
            // Resolve the promise
            _resolve();
        }
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // Set the resolve reference
        _resolve = resolve;

        // Execute the methods
        executeMethods();
    });
}