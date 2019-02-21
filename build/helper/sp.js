"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Modal Dialog
 */
var ModalDialog = {
    // Closes the dialog
    close: function (dialogResult) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.close(dialogResult); });
    },
    // Close the dialog
    commonModalDialogClose: function (dialogResult, returnVal) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
    },
    // Open a dialog
    commonModalDialogOpen: function (url, options, callback, args) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.ModalDialog) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.ModalDialog", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Opens a pop-up page
    OpenPopUpPage: function (url, callback, width, height) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
    },
    // Refreshes the page
    RefreshPage: function (dialogResult) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.RefreshPage(dialogResult); });
    },
    // Shows a modal dialog
    showModalDialog: function (options) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.showModalDialog(options); });
    },
    // Shows a pop-up dialog
    ShowPopupDialog: function (url) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.ShowPopupDialog(url); });
    },
    // Shows a wait screen
    showWaitScreenSize: function (title, message, callback, height, width) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width); });
    },
    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: function (title, message, height, width) {
        // Load the library and call the method
        ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width); });
    }
};
/**
 * Notification
 */
var Notify = {
    // Adds a notification
    addNotification: function (html, sticky) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library and call the method
            Notify.load().then(function () { resolve(window["SP"].UI.Notify.addNotification(html, sticky)); });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.Notify) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.Notify", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes a notification
    removeNotification: function (id) {
        // Load the library and call the method
        Notify.load().then(function () { window["SP"].UI.Notify.removeNotification(id); });
    }
};
/**
 * Script on Demand (SOD)
 */
var SOD = {
    // Executes the specified function in the specified file with the optional arguments.
    execute: function (key, functionName) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        exports.SP ? exports.SP.SOD.execute(key, functionName, args) : null;
    },
    // Ensures that the specified file that contains the specified function is loaded and then runs the specified callback function.
    executeFunc: function (key, functionName, fn) { exports.SP ? exports.SP.SOD.executeFunc(key, functionName, fn) : null; },
    // Executes the specified function if the specified event has occurred; otherwise, adds the function to the pending job queue.
    executeOrDelayUntilEventNotified: function (func, eventName) { exports.SP ? exports.SP.SOD.executeOrDelayUntilEventNotified(func, eventName) : null; },
    // Executes the specified function if the file containing it is loaded; otherwise, adds it to the pending job queue.
    executeOrDelayUntilScriptLoaded: function (func, depScriptFileName) { exports.SP ? exports.SP.SOD.executeOrDelayUntilScriptLoaded(func, depScriptFileName) : null; },
    // Records the event and executes any jobs in the pending job queue that are waiting on the event.
    notifyEventAndExecuteWaitingJobs: function (eventName) { exports.SP ? exports.SP.SOD.notifyEventAndExecuteWaitingJobs(eventName) : null; },
    // Records that the script file is loaded and executes any jobs in the pending job queue that are waiting for the script file to be loaded.
    notifyScriptLoadedAndExecuteWaitingJobs: function (scriptFileName) { exports.SP ? exports.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName) : null; },
    // Registers the specified file at the specified URL.
    registerSod: function (key, url) { exports.SP ? exports.SP.SOD.registerSod(key, url) : null; },
    // Registers the specified file as a dependency of another file.
    registerSodDep: function (key, dep) { exports.SP ? exports.SP.SOD.registerSodDep(key, dep) : null; },
};
/**
 * Status
 */
var Status = {
    // Adds a status
    addStatus: function (title, html, prepend) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(window["SP"].UI.Status.addStatus(title, html, prepend));
            });
        });
    },
    // Appends a status
    appendStatus: function (id, title, html) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(window["SP"].UI.Status.appendStatus(id, title, html));
            });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (window["SP"] && window["SP"].UI && window["SP"].UI.Status) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                window["SP"].SOD.executeFunc("sp.js", "SP.UI.Status", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes all status messages
    removeAllStatus: function (hide) {
        // Load the library and call the method
        Status.load().then(function () { window["SP"].UI.Status.removeAllStatus(hide); });
    },
    // Removes a status
    removeStatus: function (id) {
        // Load the library and call the method
        Status.load().then(function () { window["SP"].UI.Status.removeStatus(id); });
    },
    // Sets the status color
    setStatusPriColor: function (id, color) {
        // Load the library and call the method
        Status.load().then(function () { window["SP"].UI.Status.setStatusPriColor(id, color); });
    },
    // Updates the status
    updateStatus: function (id, html) {
        // Load the library and call the method
        Status.load().then(function () { window["SP"].UI.Status.updateStatus(id, html); });
    }
};
/**
 * SharePoint Components
 */
exports.SP = {
    ModalDialog: ModalDialog,
    Notify: Notify,
    SOD: SOD,
    Status: Status
};
