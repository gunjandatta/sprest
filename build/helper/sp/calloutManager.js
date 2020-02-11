"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Callout Manager
 */
exports.CalloutManager = (function () {
    // Return the callout manager
    return {
        /** Closes all callouts on the page. */
        closeAll: function () {
            // Load the library and call the method
            return window["CalloutManager"].closeAll();
        },
        /** Returns true if the associated callout is open. */
        containsOneCalloutOpen: function (el) {
            // Load the library and call the method
            return window["CalloutManager"].containsOneCalloutOpen(el);
        },
        /** Returns an callout action entry. */
        createAction: function (options) {
            // Create the callout action options entry
            var caOptions = new window["CalloutActionOptions"]();
            // Update the options
            for (var key in options) {
                // Set the option
                caOptions[key] = options[key];
            }
            // Create the action
            return new window["CalloutAction"](caOptions);
        },
        /** Returns an callout action menu entries. */
        createMenuEntries: function (entries) {
            var menuEntries = [];
            // Parse the action options
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                // Add the action
                menuEntries.push(new window["CalloutActionMenuEntry"](entry.text, entry.onClickCallback, entry.iconUrl));
            }
            // Return the action menu entries
            return menuEntries;
        },
        /** Creates a new callout. */
        createNew: function (options) {
            // Load the library and call the method
            return window["CalloutManager"].createNew(options);
        },
        /** Checks if the callout id exists, before creating it. */
        createNewIfNecessary: function (options) {
            // Load the library and call the method
            return window["CalloutManager"].createNewIfNecessary(options);
        },
        /** Performs an action on each callout on the page. */
        forEach: function (callback) {
            // Load the library and call the method
            return window["CalloutManager"].forEach(callback);
        },
        /** Finds the closest launch point and returns the callout associated with it. */
        getFromCalloutDescendant: function (descendant) {
            return window["CalloutManager"].getFromCalloutDescendant(descendant);
        },
        /** Returns the callout from the specified launch point. */
        getFromLaunchPoint: function (launchPoint) {
            return window["CalloutManager"].getFromLaunchPoint(launchPoint);
        },
        /** Returns the callout for the specified launch point, null if it doesn't exist. */
        getFromLaunchPointIfExists: function (launchPoint) {
            return window["CalloutManager"].getFromLaunchPointIfExists(launchPoint);
        },
        /** Returns true if at least one callout is defined on the page is opened or opening. */
        isAtLeastOneCalloutOn: function () {
            return window["CalloutManager"].isAtLeastOneCalloutOn();
        },
        /** Returns true if at least one callout is opened on the page. */
        isAtLeastOneCalloutOpen: function () {
            return window["CalloutManager"].isAtLeastOneCalloutOpen();
        },
        // Ensures the core library is loaded
        init: function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the class exists
                if (window["CalloutManager"]) {
                    resolve();
                }
                else {
                    // Wait for the core script to be loaded
                    window["SP"].SOD.executeFunc("callout.js", "Callout", function () {
                        // Resolve the promise
                        resolve();
                    });
                }
            });
        },
        /** Removes the callout and destroys it. */
        remove: function (callout) {
            // Load the library and call the method
            return window["CalloutManager"].remove(callout);
        }
    };
})();
