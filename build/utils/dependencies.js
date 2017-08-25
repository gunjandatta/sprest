"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
/*********************************************************************************************************************************/
// Dependencies
// This class will ensure the core SP scripts are loaded on the page.
/*********************************************************************************************************************************/
var Dependencies = (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function Dependencies(callback) {
        // Default the properties
        this.promise = new _1.Promise(callback);
        // Load the dependencies
        this.loadDependencies();
    }
    Object.defineProperty(Dependencies.prototype, "MAX_WAIT", {
        /*********************************************************************************************************************************/
        // Constants
        /*********************************************************************************************************************************/
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Dependencies.prototype, "SCRIPTS", {
        get: function () { return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dependencies.prototype, "pageContextExistsFl", {
        // Flag to determine if the page context information exists
        get: function () { return lib_1.ContextInfo.webAbsoluteUrl != ""; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to ensure the SP classes are loaded
    Dependencies.prototype.loadDependencies = function () {
        // See if the page context exists
        if (this.pageContextExistsFl) {
            // Resolve the promise
            this.promise.resolve();
        }
        else {
            // Load the required scripts
            for (var fileName in this.SCRIPTS) {
                // Create the script element
                var elScript = lib_1.ContextInfo.document.createElement("script");
                // Set the properties
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");
                // Add the script element to the head
                lib_1.ContextInfo.document.head.appendChild(elScript);
            }
            // Wait for the page context to exist
            this.waitForPageContext();
        }
    };
    // Method to wait for the page context to be loaded
    Dependencies.prototype.waitForPageContext = function () {
        var counter = 0;
        // Check every 10ms
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            // See if the page context exists, and ensure we haven't hit the max attempts
            if (this.pageContextExists() || ++counter >= this.MAX_WAIT) {
                // Clear the interval
                lib_1.ContextInfo.window.clearInterval(intervalId);
                // Resolve the promise
                this.promise.resolve();
            }
        }, 10);
    };
    return Dependencies;
}());
exports.Dependencies = Dependencies;
//# sourceMappingURL=dependencies.js.map