import { ICallout, ICalloutActionOptions, ICalloutActionMenuEntry, ICalloutManager, ICalloutOptions } from "../../../@types/helper";

/**
 * Callout Manager
 */
export const CalloutManager: ICalloutManager = (() => {
    // Return the callout manager
    return {
        /** Closes all callouts on the page. */
        closeAll: () => {
            // Load the library and call the method
            return window["CalloutManager"].closeAll();
        },

        /** Returns true if the associated callout is open. */
        containsOneCalloutOpen: (el: HTMLElement) => {
            // Load the library and call the method
            return window["CalloutManager"].containsOneCalloutOpen(el);
        },

        /** Returns an callout action entry. */
        createAction: (options: ICalloutActionOptions) => {
            // Create the callout action options entry
            let caOptions = new window["CalloutActionOptions"]();

            // Update the options
            for (let key in options) {
                // Set the option
                caOptions[key] = options[key];
            }

            // Create the action
            return new window["CalloutAction"](caOptions);
        },

        /** Returns an callout action menu entries. */
        createMenuEntries: (entries: Array<ICalloutActionMenuEntry>) => {
            let menuEntries = [];

            // Parse the action options
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];

                // Add the action
                menuEntries.push(new window["CalloutActionMenuEntry"](entry.text, entry.onClickCallback, entry.iconUrl));
            }

            // Return the action menu entries
            return menuEntries;
        },

        /** Creates a new callout. */
        createNew: (options: ICalloutOptions) => {
            // Load the library and call the method
            return window["CalloutManager"].createNew(options);

        },

        /** Checks if the callout id exists, before creating it. */
        createNewIfNecessary: (options: ICalloutOptions) => {
            // Load the library and call the method
            return window["CalloutManager"].createNewIfNecessary(options);
        },

        /** Performs an action on each callout on the page. */
        forEach: (callback: (callout: ICallout) => void) => {
            // Load the library and call the method
            return window["CalloutManager"].forEach(callback);
        },

        /** Finds the closest launch point and returns the callout associated with it. */
        getFromCalloutDescendant: (descendant: HTMLElement) => {                        // Load the library and call the method
            return window["CalloutManager"].getFromCalloutDescendant(descendant);
        },

        /** Returns the callout from the specified launch point. */
        getFromLaunchPoint: (launchPoint: HTMLElement) => {                        // Load the library and call the method
            return window["CalloutManager"].getFromLaunchPoint(launchPoint);
        },

        /** Returns the callout for the specified launch point, null if it doesn't exist. */
        getFromLaunchPointIfExists: (launchPoint: HTMLElement) => {                        // Load the library and call the method
            return window["CalloutManager"].getFromLaunchPointIfExists(launchPoint);
        },

        /** Returns true if at least one callout is defined on the page is opened or opening. */
        isAtLeastOneCalloutOn: () => {                        // Load the library and call the method
            return window["CalloutManager"].isAtLeastOneCalloutOn();
        },

        /** Returns true if at least one callout is opened on the page. */
        isAtLeastOneCalloutOpen: () => {                        // Load the library and call the method
            return window["CalloutManager"].isAtLeastOneCalloutOpen();
        },

        // Ensures the core library is loaded
        init: (): PromiseLike<void> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // See if the class exists
                if (window["CalloutManager"]) { resolve(); }
                else {
                    // Wait for the core script to be loaded
                    window["SP"].SOD.executeFunc("sp.callout", "Callout", () => {
                        // Resolve the promise
                        resolve();
                    });
                }
            });
        },

        /** Removes the callout and destroys it. */
        remove: (callout: ICallout) => {
            // Load the library and call the method
            return window["CalloutManager"].remove(callout);
        }
    };
})();