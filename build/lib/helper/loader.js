System.register(["../index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Loader;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /**
             * Loader
             */
            exports_1("Loader", Loader = {
                // Flag to determine if the SharePoint core libraries have been loaded
                loaded: false,
                // Method to wait for the SharePoint core libraries to be loaded
                waitForSPLibs: (callback, timeout, loadLibraries) => {
                    let counter = 0;
                    // Default the flag to load the libraries
                    loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
                    // Default the timeout (5 seconds)
                    timeout = typeof (timeout) === "number" ? timeout : 2500;
                    // Determine the number of iterations
                    let maxLoops = timeout / 25;
                    // See if the flag has already been set
                    if (this.loaded) {
                        // Execute the callback
                        callback();
                        return;
                    }
                    // See if we are loading the libraries
                    if (loadLibraries) {
                        // Parse the files to load
                        ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every((fileName) => {
                            // Create the script element
                            let el = index_1.ContextInfo.document.createElement("script");
                            // Set the properties
                            el.setAttribute("src", "/_layouts/15/" + fileName);
                            el.setAttribute("type", "text/javascript");
                            // Add the element to the head
                            index_1.ContextInfo.document.head.appendChild(el);
                            // Continue the loop
                            return true;
                        });
                    }
                    // Loop until the libraries are loaded
                    let intervalId = setInterval(() => {
                        let maxLoopFl = ++counter > maxLoops;
                        // See if the page context exists or if we have hit the max attempts
                        if (index_1.ContextInfo.existsFl || maxLoopFl) {
                            // Stop the loop
                            clearInterval(intervalId);
                            // Execute the callback
                            callback();
                        }
                    }, 25);
                }
            });
        }
    };
});
//# sourceMappingURL=loader.js.map