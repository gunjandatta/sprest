/// <reference path="dependencies.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // This class will ensure the required scripts are loaded on the page.
    /*********************************************************************************************************************************/
    export class Dependencies implements IDependencies {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(callback?:() => void) {
            console.log("[Dev] Dependencies constructor called...");
            // Default the properties
            this.callback = callback;

            // Load the dependencies
            this.loadDependencies();
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the dependencies are loaded
        public get isLoaded() { return this.pageContextExistsFl; }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The callback method
        private callback:any;

        // SP dependencies
        private dependencies: [ "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js" ];

        // Flag to determine if the page context information exists
        private get pageContextExistsFl():boolean { return window.hasOwnProperty("_spPageContextInfo"); }

        // Flag to determine if the dependencies are loaded
        private scriptsLoaded:boolean;

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to ensure the SP classes are loaded
        private loadDependencies() {
            // See if the page context exists
            if(this.pageContextExistsFl) {
                // Notify the dependent scripts
                this.notifyScripts();
            }
            else {
                // Load the required scripts
                for(var fileName in this.dependencies) {
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

        // Method to notify this class is loaded
        private notifyScripts() {
            // Ensure the page context exists
            if(this.pageContextExistsFl) {
                console.log("[Dev] Dependencies have been loaded...");
                // See if the callback function exists
                if(this.callback && typeof(this.callback) == "function") {
                    // Execute the function passing this object
                    this.callback.apply(this);
                }
            }
            else {
                // Log an error
                console.error("[SP REST] Error: Unable to load _spPageContextInfo (Page Context).");
            }
        }

        // Method to wait for the page context to be loaded
        private waitForPageContext() {
            let counter = 0;
            let maxAttempts = 5000; // 5 seconds

            // Check every 10ms
            let intervalId = window.setInterval(function() {
                // See if the page context exists, and ensure we haven't hit the max attempts
                if(this.pageContextExists() || ++counter >= maxAttempts) {
                    // Clear the interval
                    window.clearInterval(intervalId);

                    // Notify the dependent scripts
                    this.notifyScripts();
                }
            }, 10);
        } 
    }
}
