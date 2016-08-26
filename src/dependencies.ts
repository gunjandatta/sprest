/// <reference path="dependencies.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Dependencies
    // This class will ensure the core SP scripts are loaded on the page.
    /*********************************************************************************************************************************/
    export class Dependencies implements IDependencies {

        /*********************************************************************************************************************************/
        // Constants
        /*********************************************************************************************************************************/
        private get MAX_WAIT():number { return 5 };
        private get SCRIPTS():[string] { return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"]; }

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(callback?:() => void) {
            // Default the properties
            this.promise = new Promise(callback);

            // Load the dependencies
            this.loadDependencies();
        }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The promise
        private promise:Promise;

        // Flag to determine if the page context information exists
        private get pageContextExistsFl():boolean { return window.hasOwnProperty("_spPageContextInfo"); }

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to ensure the SP classes are loaded
        private loadDependencies() {
            // See if the page context exists
            if(this.pageContextExistsFl) {
                // Resolve the promise
                this.promise.resolve();
            }
            else {
                // Load the required scripts
                for(var fileName in this.SCRIPTS) {
                    // Create the script element
                    let elScript = document.createElement("script");

                    // Set the properties
                    elScript.setAttribute("src", "/_layouts/15/" + fileName);
                    elScript.setAttribute("type", "text/javascript");

                    // Add the script element to the head
                    document.head.appendChild(elScript);
                }

                // Wait for the page context to exist
                this.waitForPageContext();
            }
        }

        // Method to wait for the page context to be loaded
        private waitForPageContext() {
            let counter = 0;

            // Check every 10ms
            let intervalId = window.setInterval(function() {
                // See if the page context exists, and ensure we haven't hit the max attempts
                if(this.pageContextExists() || ++counter >= this.MAX_WAIT) {
                    // Clear the interval
                    window.clearInterval(intervalId);

                    // Resolve the promise
                    this.promise.resolve();
                }
            }, 10);
        } 
    }
}
