/**
 * Dependencies
 */
export interface IDependencies {
    /**
     * Constructor
     * @param callback - The method to execute after the dependencies are loaded.
     */
    constructor(callback: (...args: any[]) => void): any;
    /** The maximum amount of time to wait for the scripts to be loaded. */
    MAX_WAIT: number;
    /** Flag to determine if the page context information exists */
    pageContextExistsFl: boolean;
    /** The script file names to load. */
    SCRIPTS: Array<string>;
    /**
     * Method to ensure the SP classes are loaded
     */
    loadDependencies(): any;
    /**
     * Method to wait for the page context to be loaded
     */
    waitForPageContext(): any;
}
