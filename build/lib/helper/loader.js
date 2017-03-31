"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Loader
 */
exports.Loader = {
    // Flag to determine if the SharePoint core libraries have been loaded
    loaded: false,
    // Method to wait for the SharePoint core libraries to be loaded
    waitForSPLibs: function (callback, timeout, loadLibraries) {
        var counter = 0;
        // Default the flag to load the libraries
        loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
        // Default the timeout (5 seconds)
        timeout = typeof (timeout) === "number" ? timeout : 2500;
        // Determine the number of iterations
        var maxLoops = timeout / 25;
        // See if the flag has already been set
        if (_this.loaded) {
            // Execute the callback
            callback();
            return;
        }
        // See if we are loading the libraries
        if (loadLibraries) {
            // Parse the files to load
            ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every(function (fileName) {
                // Create the script element
                var el = document.createElement("script");
                // Set the properties
                el.setAttribute("src", "/_layouts/15/" + fileName);
                el.setAttribute("type", "text/javascript");
                // Add the element to the head
                document.head.appendChild(el);
                // Continue the loop
                return true;
            });
        }
        // Loop until the libraries are loaded
        var intervalId = setInterval(function () {
            var maxLoopFl = ++counter > maxLoops;
            // See if the page context exists or if we have hit the max attempts
            if (window["_spPageContextInfo"] || maxLoopFl) {
                // Stop the loop
                clearInterval(intervalId);
                // Execute the callback
                callback();
            }
        }, 25);
    }
};
//# sourceMappingURL=loader.js.map