/**
 * Loader
 */
export interface ILoader {
    /**
     * Waits for the SharePoint core libraries to be loaded.
     * @param callback - The callback function.
     * @param timeout - The max time (ms) to wait for the libraries to be loaded.
     * @param loadLibraries - Flag to load the core libraries manually.
     */
    waitForSPLibs(callback: any, timeout?: number, loadLibraries?: boolean): any;
}
/**
 * Loader
 */
export declare const Loader: {
    loaded: boolean;
    waitForSPLibs: (callback: any, timeout?: number, loadLibraries?: boolean) => void;
};
