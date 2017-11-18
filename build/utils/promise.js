System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Promise;
    return {
        setters: [],
        execute: function () {
            /*********************************************************************************************************************************/
            // Promise
            // This is a lightweight promise library.
            /*********************************************************************************************************************************/
            Promise = class Promise {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(callback) {
                    // Default the properties
                    this.callback = callback;
                    this.resolvedFl = false;
                }
                /******************************************************************************************************************************** */
                // Public Methods
                /******************************************************************************************************************************** */
                // Method to execute after the promise is resolved
                done(callback) {
                    // Set the callback
                    this.callback = callback || this.callback;
                    // See if the promise is resolved
                    if (this.resolvedFl) {
                        // Execute the callback
                        this.executeMethod();
                    }
                }
                // Method to resolve the promise
                resolve(...args) {
                    // Set the properties
                    this.args = args;
                    this.resolvedFl = true;
                    // Execute the callback
                    this.executeMethod();
                }
                // Method to execute after the promise completes
                then(onfulfilled, onrejected) {
                    // Execute the done method
                    this.done(onfulfilled);
                    // Return this promise
                    return this;
                }
                /*********************************************************************************************************************************/
                // Private Methods
                /*********************************************************************************************************************************/
                // Method to execute the callback method
                executeMethod() {
                    // See if callback function exists
                    if (this.callback && typeof (this.callback) == "function") {
                        // Execute the callback method
                        this.callback.apply(this, this.args);
                    }
                }
            };
            exports_1("Promise", Promise);
        }
    };
});
//# sourceMappingURL=promise.js.map