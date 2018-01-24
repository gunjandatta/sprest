export * from "./dependencies.d";
import { ContextInfo } from "../lib";
import { IDependencies } from ".";

/**
 * Dependencies
 * This class will ensure the core SP scripts are loaded on the page.
 */
class _Dependencies {
    MAX_WAIT: number;
    SCRIPTS: Array<string>;
    private _callback = null;
    get pageContextExistsFl(): boolean { return ContextInfo.webAbsoluteUrl != ""; }

    /**
     * Constructor
     * @param callback - The method to execute after the scripts have been loaded.
     */
    constructor(callback: (...args) => void) {
        // Default the properties
        this._callback = callback;
        this.MAX_WAIT = 5;
        this.SCRIPTS = [
            "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"
        ];

        // Load the dependencies
        this.loadDependencies();
    }

    /**
     * Method to ensure the SP classes are loaded
     */
    loadDependencies() {
        // See if the page context exists
        if (this.pageContextExistsFl) {
            // Call the callback event
            this._callback ? this._callback() : null;
        }
        else {
            // Load the required scripts
            for (var fileName in this.SCRIPTS) {
                // Create the script element
                let elScript = ContextInfo.document.createElement("script");

                // Set the properties
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");

                // Add the script element to the head
                ContextInfo.document.head.appendChild(elScript);
            }

            // Wait for the page context to exist
            this.waitForPageContext();
        }
    }

    /**
     * Method to wait for the page context to be loaded
     */
    waitForPageContext() {
        let counter = 0;

        // Check every 10ms
        let intervalId = ContextInfo.window.setInterval(function () {
            // See if the page context exists, and ensure we haven't hit the max attempts
            if (this.pageContextExists || ++counter >= this.MAX_WAIT) {
                // Clear the interval
                ContextInfo.window.clearInterval(intervalId);

                // Call the callback event
                this._callback ? this._callback() : null;
            }
        }, 10);
    }
}
export const Dependencies: IDependencies = _Dependencies as any;