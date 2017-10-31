"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************************************************************************/
// Promise
// This is a lightweight promise library.
/*********************************************************************************************************************************/
var Promise = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function Promise(callback) {
        // Default the properties
        this.callback = callback;
        this.resolvedFl = false;
    }
    /******************************************************************************************************************************** */
    // Public Methods
    /******************************************************************************************************************************** */
    // Method to execute after the promise is resolved
    Promise.prototype.done = function (callback) {
        // Set the callback
        this.callback = callback || this.callback;
        // See if the promise is resolved
        if (this.resolvedFl) {
            // Execute the callback
            this.executeMethod();
        }
    };
    // Method to resolve the promise
    Promise.prototype.resolve = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Set the properties
        this.args = args;
        this.resolvedFl = true;
        // Execute the callback
        this.executeMethod();
    };
    // Method to execute after the promise completes
    Promise.prototype.then = function (onfulfilled, onrejected) {
        // Execute the done method
        this.done(onfulfilled);
        // Return this promise
        return this;
    };
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to execute the callback method
    Promise.prototype.executeMethod = function () {
        // See if callback function exists
        if (this.callback && typeof (this.callback) == "function") {
            // Execute the callback method
            this.callback.apply(this, this.args);
        }
    };
    return Promise;
}());
exports.Promise = Promise;
//# sourceMappingURL=promise.js.map