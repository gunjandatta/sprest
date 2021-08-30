import { IloadSPCore } from "../../../@types/helper/methods";

/**
 * Loads the core SharePoint JavaScript library for JSOM.
 */
export const loadSPCore: IloadSPCore = () => {
    // Return a promise
    return new Promise((resolve) => {
        // Define the core libraries to load
        let libs = ["init", "MicrosoftAjax", "SP.Runtime", "SP"];

        // Parse the libraries
        for (let i = 0; i < libs.length; i++) {
            let libName = libs[i];

            // See if a script already exists
            if (document.querySelector("script[title='" + libName + "']") == null) {
                // Log
                console.debug("[gd-sprest] Loading the core library: " + libName);

                // Load the library
                let elScript = document.createElement("script");
                elScript.title = libName;
                elScript.src = document.location.origin + "/_layouts/15/" + libName + ".js";
                document.head.appendChild(elScript);
            } else {
                // Log
                console.debug("[gd-sprest] Core library already loaded: " + libName);
            }

            // Resolve the request
            resolve();
        }
    });
}
