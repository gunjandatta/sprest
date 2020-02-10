import { IStatus } from "../../../@types/helper";

/**
 * Status
 */
export const Status: IStatus = {
    // Adds a status
    addStatus: (title: string, html?: string, prepend?: boolean): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library
            Status.load().then(() => {
                // Add the status and resolve the promise
                resolve(window["SP"].UI.Status.addStatus(title, html, prepend));
            });
        });
    },

    // Appends a status
    appendStatus: (id: string, title: string, html?: string): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library
            Status.load().then(() => {
                // Add the status and resolve the promise
                resolve(window["SP"].UI.Status.appendStatus(id, title, html));
            });
        });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.Status) { resolve(); }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.Status", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Removes all status messages
    removeAllStatus: (hide?: boolean) => {
        // Load the library and call the method
        Status.load().then(() => { window["SP"].UI.Status.removeAllStatus(hide); });
    },

    // Removes a status
    removeStatus: (id: string) => {
        // Load the library and call the method
        Status.load().then(() => { window["SP"].UI.Status.removeStatus(id); });
    },

    // Sets the status color
    setStatusPriColor: (id: string, color: string) => {
        // Load the library and call the method
        Status.load().then(() => { window["SP"].UI.Status.setStatusPriColor(id, color); });
    },

    // Updates the status
    updateStatus: (id: string, html: string) => {
        // Load the library and call the method
        Status.load().then(() => { window["SP"].UI.Status.updateStatus(id, html); });
    }
}