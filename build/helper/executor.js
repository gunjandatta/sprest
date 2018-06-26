"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Executor
 * @param methodParams - An array of parameters to execute in order synchronously.
 * @param method - The method to execute for each method parameter provided.
 * @param onExecuted - An optional event executed after the method completes. If a promise is returned, the executor will wait until it's resolved.
 */
function Executor(methodParams, method, onExecuted) {
    var _this = this;
    if (methodParams === void 0) { methodParams = []; }
    var _completedFl = false;
    var _resolve = null;
    // Method to execute the methods
    var executeMethods = function (idx) {
        if (idx === void 0) { idx = 0; }
        // Execute the method and see if a promise is returned
        var returnVal = idx < methodParams.length ? method(methodParams[idx]) : null;
        if (returnVal && returnVal.then) {
            // Wait for the method to complete
            returnVal.then(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // See if the on executed event exists
                if (onExecuted) {
                    // Execute the method and see if a promise is returned
                    var returnVal_1 = onExecuted.apply(_this, args);
                    if (returnVal_1 && returnVal_1.then) {
                        // Wait for the method to complete
                        returnVal_1.then(function () {
                            // Execute the next method
                            executeMethods(idx + 1);
                        });
                    }
                    else {
                        // Execute the next method
                        executeMethods(idx + 1);
                    }
                }
                else {
                    // Execute the next method
                    executeMethods(idx + 1);
                }
            });
        }
        else if (idx < methodParams.length) {
            // Execute the next method
            executeMethods(idx + 1);
        }
        else {
            // Resolve the promise
            _resolve();
        }
    };
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Set the resolve reference
        _resolve = resolve;
        // Execute the methods
        executeMethods();
    });
}
exports.Executor = Executor;
