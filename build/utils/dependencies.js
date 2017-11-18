System.register(["../lib/index", "./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, Dependencies;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Dependencies
            // This class will ensure the core SP scripts are loaded on the page.
            /*********************************************************************************************************************************/
            Dependencies = class Dependencies {
                /*********************************************************************************************************************************/
                // Constants
                /*********************************************************************************************************************************/
                get MAX_WAIT() { return 5; }
                ;
                get SCRIPTS() { return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"]; }
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(callback) {
                    // Default the properties
                    this.promise = new index_2.Promise(callback);
                    // Load the dependencies
                    this.loadDependencies();
                }
                // Flag to determine if the page context information exists
                get pageContextExistsFl() { return index_1.ContextInfo.webAbsoluteUrl != ""; }
                /*********************************************************************************************************************************/
                // Private Methods
                /*********************************************************************************************************************************/
                // Method to ensure the SP classes are loaded
                loadDependencies() {
                    // See if the page context exists
                    if (this.pageContextExistsFl) {
                        // Resolve the promise
                        this.promise.resolve();
                    }
                    else {
                        // Load the required scripts
                        for (var fileName in this.SCRIPTS) {
                            // Create the script element
                            let elScript = index_1.ContextInfo.document.createElement("script");
                            // Set the properties
                            elScript.setAttribute("src", "/_layouts/15/" + fileName);
                            elScript.setAttribute("type", "text/javascript");
                            // Add the script element to the head
                            index_1.ContextInfo.document.head.appendChild(elScript);
                        }
                        // Wait for the page context to exist
                        this.waitForPageContext();
                    }
                }
                // Method to wait for the page context to be loaded
                waitForPageContext() {
                    let counter = 0;
                    // Check every 10ms
                    let intervalId = index_1.ContextInfo.window.setInterval(function () {
                        // See if the page context exists, and ensure we haven't hit the max attempts
                        if (this.pageContextExists() || ++counter >= this.MAX_WAIT) {
                            // Clear the interval
                            index_1.ContextInfo.window.clearInterval(intervalId);
                            // Resolve the promise
                            this.promise.resolve();
                        }
                    }, 10);
                }
            };
            exports_1("Dependencies", Dependencies);
        }
    };
});
//# sourceMappingURL=dependencies.js.map