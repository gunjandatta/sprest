/**
 * Loader
 */
export const Loader: ILoader;

/**
 * Loader
 */
export interface ILoader {
    // Internal flag to determine if the SP core libraries have been loaded
    loaded: boolean;

    /**
     * Waits for the SharePoint core libraries to be loaded.
     * @param callback - The callback function.
     * @param timeout - The max time (ms) to wait for the libraries to be loaded.
     * @param loadLibraries - Flag to load the core libraries manually.
     */
    waitForSPLibs(callback: any, timeout?: number, loadLibraries?: boolean);
}