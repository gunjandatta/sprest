import { ContextInfo } from "../lib";

/**
 * Dependencies
 */
export interface IDependencies {
    /**
     * Constructor
     * @param callback - The method to execute after the dependencies are loaded.
     */
    constructor(callback: (...args) => void);

    /** The maximum amount of time to wait for the scripts to be loaded. */
    MAX_WAIT: number;

    /** Flag to determine if the page context information exists */
    pageContextExistsFl: boolean;

    /** The script file names to load. */
    SCRIPTS: Array<string>;

    /**
     * Method to ensure the SP classes are loaded
     */
    loadDependencies();

    /**
     * Method to wait for the page context to be loaded
     */
    waitForPageContext();
}

/**
 * Dependencies
 * This class will ensure the core SP scripts are loaded on the page.
 */
export class Dependencies {
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
