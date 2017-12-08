import { Promise } from "../../utils";
/**
 * Dependencies
 */
export interface IDependencies {
    /**
     * Constructor
     * @param callback - The method to execute after the dependencies are loaded.
     */
    constructor(callback: (...args) => void): any;
    /** The maximum amount of time to wait for the scripts to be loaded. */
    MAX_WAIT: number;
    /** Flag to determine if the page context information exists */
    pageContextExistsFl: boolean;
    /** The promise. */
    promise: Promise;
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
/**
 * Dependencies
 * This class will ensure the core SP scripts are loaded on the page.
 */
export declare class Dependencies {
    MAX_WAIT: number;
    promise: Promise;
    readonly pageContextExistsFl: boolean;
    SCRIPTS: Array<string>;
    /**
     * Constructor
     * @param callback - The method to execute after the scripts have been loaded.
     */
    constructor(callback: (...args) => void);
    /**
     * Method to ensure the SP classes are loaded
     */
    loadDependencies(): void;
    /**
     * Method to wait for the page context to be loaded
     */
    waitForPageContext(): void;
}
