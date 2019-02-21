import { IDialogOptions, IModalDialog, INotify, ISOD, IStatus } from "./types";

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
 * Script on Demand (SOD)
 */
const SOD: ISOD = {
    // Executes the specified function in the specified file with the optional arguments.
    execute: (key: string, functionName: string, ...args) => { SP ? SP.SOD.execute(key, functionName, args) : null; },

    // Ensures that the specified file that contains the specified function is loaded and then runs the specified callback function.
    executeFunc: (key: string, functionName: string, fn: Function) => { SP ? SP.SOD.executeFunc(key, functionName, fn) : null; },

    // Executes the specified function if the specified event has occurred; otherwise, adds the function to the pending job queue.
    executeOrDelayUntilEventNotified: (func: Function, eventName: string) => { SP ? SP.SOD.executeOrDelayUntilEventNotified(func, eventName) : null; },

    // Executes the specified function if the file containing it is loaded; otherwise, adds it to the pending job queue.
    executeOrDelayUntilScriptLoaded: (func: Function, depScriptFileName: string) => { SP ? SP.SOD.executeOrDelayUntilScriptLoaded(func, depScriptFileName) : null; },

    // Records the event and executes any jobs in the pending job queue that are waiting on the event.
    notifyEventAndExecuteWaitingJobs: (eventName: string) => { SP ? SP.SOD.notifyEventAndExecuteWaitingJobs(eventName) : null; },

    // Records that the script file is loaded and executes any jobs in the pending job queue that are waiting for the script file to be loaded.
    notifyScriptLoadedAndExecuteWaitingJobs: (scriptFileName: string) => { SP ? SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) : null; },

    // Registers the specified file at the specified URL.
    registerSod: (key: string, url: string) => { SP ? SP.SOD.registerSod(key, url) : null; },

    // Registers the specified file as a dependency of another file.
    registerSodDep: (key: string, dep: string) => { SP ? SP.SOD.registerSodDep(key, dep) : null; },
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
    SOD,
    Status
}