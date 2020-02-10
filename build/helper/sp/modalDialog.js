"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Modal Dialog
 */
exports.ModalDialog = (function () {
    // Adds the custom methods to the dialog
    var getDialog = function (dialog) {
        // Shows the dialog
        dialog.show = function () {
            // Get the modal dialog element
            var el = dialog.get_dialogElement();
            if (el) {
                // Show the dialog
                el.style.display = "";
            }
            // Get the iframe element
            el = dialog.get_frameElement();
            if (el) {
                // Show the dialog
                el.style.display = "";
            }
        };
        // Updates the title
        dialog.setTitle = function (value) {
            // Get the title element
            var elDlg = dialog.get_dialogElement();
            var elTitle = elDlg ? elDlg.querySelector(".ms-dlgLoadingTextDiv .ms-core-pageTitle") : null;
            if (elTitle) {
                // Update the title
                elTitle.innerHTML = value;
            }
        };
        // Updates the sub-title
        dialog.setSubTitle = function (value) {
            // Get the sub-title element
            var elDlg = dialog.get_dialogElement();
            var elSubTitle = elDlg ? elDlg.querySelector(".ms-dlgLoadingTextDiv ~ div") : null;
            if (elSubTitle) {
                // Update the sub-title
                elSubTitle.innerHTML = value;
            }
        };
        // Return the dialog
        return dialog;
    };
    // Return the modal dialog
    return {
        // Close the dialog
        commonModalDialogClose: function (dialogResult, returnVal) {
            // Load the library and call the method
            exports.ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
        },
        // Open a dialog
        commonModalDialogOpen: function (url, options, callback, args) {
            // Load the library and call the method
            exports.ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
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
            exports.ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
        },
        // Refreshes the page
        RefreshPage: function (dialogResult) {
            // Load the library and call the method
            exports.ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.RefreshPage(dialogResult); });
        },
        // Shows a modal dialog
        showModalDialog: function (options) {
            // Return a promise
            return new Promise(function (resolve) {
                // Load the library and call the method
                exports.ModalDialog.load().then(function () {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showModalDialog(options)));
                });
            });
        },
        // Shows a pop-up dialog
        ShowPopupDialog: function (url) {
            // Load the library and call the method
            exports.ModalDialog.load().then(function () { window["SP"].UI.ModalDialog.ShowPopupDialog(url); });
        },
        // Shows a wait screen
        showWaitScreenSize: function (title, message, callback, height, width) {
            // Return a promise
            return new Promise(function (resolve) {
                // Load the library and call the method
                exports.ModalDialog.load().then(function () {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width)));
                });
            });
        },
        // Shows a wait screen w/ no close button
        showWaitScreenWithNoClose: function (title, message, height, width) {
            // Return a promise
            return new Promise(function (resolve) {
                // Load the library and call the method
                exports.ModalDialog.load().then(function () {
                    // Resolve the promise
                    resolve(getDialog(window["SP"].UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width)));
                });
            });
        }
    };
})();
