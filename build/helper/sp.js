"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Modal Dialog
 */
exports.ModalDialog = {
    // Closes the dialog
    close: function (dialogResult) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.close(dialogResult); });
    },
    // Close the dialog
    commonModalDialogClose: function (dialogResult, returnVal) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
    },
    // Open a dialog
    commonModalDialogOpen: function (url, options, callback, args) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.ModalDialog) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.ModalDialog", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Opens a pop-up page
    OpenPopUpPage: function (url, callback, width, height) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
    },
    // Refreshes the page
    RefreshPage: function (dialogResult) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.RefreshPage(dialogResult); });
    },
    // Shows a modal dialog
    showModalDialog: function (options) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showModalDialog(options); });
    },
    // Shows a pop-up dialog
    ShowPopupDialog: function (url) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.ShowPopupDialog(url); });
    },
    // Shows a wait screen
    showWaitScreenSize: function (title, message, callback, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width); });
    },
    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: function (title, message, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width); });
    }
};
/**
 * Notification
 */
exports.Notify = {
    // Adds a notification
    addNotification: function (html, sticky) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library and call the method
            exports.Notify.load().then(function () { resolve(SP.UI.Notify.addNotification(html, sticky)); });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Notify) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Notify", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes a notification
    removeNotification: function (id) {
        // Load the library and call the method
        exports.Notify.load().then(function () { SP.UI.Notify.removeNotification(id); });
    }
};
/**
 * Status
 */
exports.Status = {
    // Adds a status
    addStatus: function (title, html, prepend) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            exports.Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(SP.UI.Status.addStatus(title, html, prepend));
            });
        });
    },
    // Appends a status
    appendStatus: function (id, title, html) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            exports.Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(SP.UI.Status.appendStatus(id, title, html));
            });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Status) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Status", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes all status messages
    removeAllStatus: function (hide) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.removeAllStatus(hide); });
    },
    // Removes a status
    removeStatus: function (id) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.removeStatus(id); });
    },
    // Sets the status color
    setStatusPriColor: function (id, color) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.setStatusPriColor(id, color); });
    },
    // Updates the status
    updateStatus: function (id, html) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.updateStatus(id, html); });
    }
};
//# sourceMappingURL=sp.js.map