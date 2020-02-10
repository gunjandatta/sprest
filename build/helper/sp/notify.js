"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Notification
 */
exports.Notify = {
    // Adds a notification
    addNotification: function (html, sticky) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library and call the method
            exports.Notify.load().then(function () { resolve(window["SP"].UI.Notify.addNotification(html, sticky)); });
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
        exports.Notify.load().then(function () { window["SP"].UI.Notify.removeNotification(id); });
    }
};
