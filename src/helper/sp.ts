import { IDialogOptions, IModalDialog, INotify, IStatus } from "./types";
declare var SP;

/**
 * Modal Dialog
 */
export const ModalDialog: IModalDialog = {
    // Closes the dialog
    close: (dialogResult?: number) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.close(dialogResult); });
    },

    // Close the dialog
    commonModalDialogClose: (dialogResult?: number, returnVal?: any) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.commonModalDialogClose(dialogResult, returnVal); });
    },

    // Open a dialog
    commonModalDialogOpen: (url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.commonModalDialogOpen(url, options, callback, args); });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (SP && SP.UI && SP.UI.ModalDialog) { resolve(); }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.ModalDialog", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Opens a pop-up page
    OpenPopUpPage: (url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.OpenPopUpPage(url, callback, width, height); });
    },

    // Refreshes the page
    RefreshPage: (dialogResult?: number) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.RefreshPage(dialogResult); });
    },

    // Shows a modal dialog
    showModalDialog: (options: IDialogOptions) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.showModalDialog(options); });
    },

    // Shows a pop-up dialog
    ShowPopupDialog: (url: string) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.ShowPopupDialog(url); });
    },

    // Shows a wait screen
    showWaitScreenSize: (title: string, message: string, callback: () => void, height: number, width: number) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.showWaitScreenSize(title, message, callback, height, width); });
    },

    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: (title: string, message: string, height: number, width: number) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.ModialDialog.showWaitScreenWithNoClose(title, message, height, width); });
    }
}

/**
 * Notification
 */
export const Notify: INotify = {
    // Adds a notification
    addNotify: (html: string, sticky?: boolean): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library and call the method
            this.load().then(() => { resolve(SP.UI.Notify.addNotification(html, sticky)); });
        });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Notify) { resolve(); }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Notify", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Removes a notification
    removeNotification: (id: string) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.Notify.removeNotification(id); });
    }
}

/**
 * Status
 */
export const Status: IStatus = {
    // Adds a status
    addStatus: (title: string, html?: string, prepend?: boolean): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library and call the method
            this.load().then(() => { SP.UI.Status.addStatus(title, html, prepend); });
        });
    },

    // Appends a status
    appendStatus: (id: string, title: string, html: string): PromiseLike<string> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the library and call the method
            this.load().then(() => { SP.UI.Status.appendStatus(id, title, html); });
        });
    },

    // Method to ensure the core library is loaded
    load: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Status) { resolve(); }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Status", () => {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },

    // Removes all status messages
    removeAllStatus: (hide?: boolean) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.Status.removeAllStatus(hide); });
    },

    // Removes a status
    removeStatus: (id: string) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.Status.removeStatus(id); });
    },

    // Sets the status color
    setStatusPriColor: (id: string, color: string) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.Status.setStatusPriColor(id, color); });
    },

    // Updates the status
    updateStatus: (id: string, html: string) => {
        // Load the library and call the method
        this.load().then(() => { SP.UI.Status.updateStatus(id, html); });
    }
}