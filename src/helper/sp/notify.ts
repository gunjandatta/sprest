import { INotify } from "../../../@types/helper";

/**
 * Notification
 */
export const Notify: INotify = {
    // Adds a notification
    addNotification: (html: string, sticky?: boolean): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library and call the method
            Notify.load().then(() => { resolve(window["SP"].UI.Notify.addNotification(html, sticky)); });
        });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.Notify) { resolve(); }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.Notify", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Removes a notification
    removeNotification: (id: string) => {
        // Load the library and call the method
        Notify.load().then(() => { window["SP"].UI.Notify.removeNotification(id); });
    }
}