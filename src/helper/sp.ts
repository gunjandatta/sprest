import { IDialogOptions, IModalDialog, INotify, IStatus } from "./types";

/**
 * Modal Dialog
 */
const ModalDialog: IModalDialog = {
    // Closes the dialog
    close: (dialogResult?: number) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.close(dialogResult); });
    },

    // Close the dialog
    commonModalDialogClose: (dialogResult?: number, returnVal?: any) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
    },

    // Open a dialog
    commonModalDialogOpen: (url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.ModalDialog) { resolve(); }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.ModalDialog", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Opens a pop-up page
    OpenPopUpPage: (url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
    },

    // Refreshes the page
    RefreshPage: (dialogResult?: number) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.RefreshPage(dialogResult); });
    },

    // Shows a modal dialog
    showModalDialog: (options: IDialogOptions) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.showModalDialog(options); });
    },

    // Shows a pop-up dialog
    ShowPopupDialog: (url: string) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.ShowPopupDialog(url); });
    },

    // Shows a wait screen
    showWaitScreenSize: (title: string, message?: string, callback?: () => void, height?: number, width?: number) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width); });
    },

    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: (title: string, message?: string, height?: number, width?: number) => {
        // Load the library and call the method
        ModalDialog.load().then(() => { window["SP"].UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width); });
    }
}

/**
 * Notification
 */
const Notify: INotify = {
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

/**
 * Status
 */
const Status: IStatus = {
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

/**
 * SharePoint Components
 */
export const SP = {
    ModalDialog,
    Notify,
    Status
}