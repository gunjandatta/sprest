import { IloadSPCore } from "../../../@types/helper/methods";
import { Executor } from "../executor";

/**
 * Loads the core SharePoint JavaScript library for JSOM.
 */
export const loadSPCore: IloadSPCore = () => {
    // Return a promise
    return new Promise((resolve) => {
        // Define the core libraries to load
        let libs = ["init", "MicrosoftAjax", "SP.Runtime", "SP", "SP.Init"];

        // Parse the libraries
        let counter = 0;
        Executor(libs, libName => {
            // Return a promise
            return new Promise(resolve => {
                // See if a script already exists
                if (document.querySelector("script[title='" + libName + "']") == null) {
                    // Log
                    console.debug("[gd-sprest] Loading the core library: " + libName);

                    // Create the script element to load the library
                    let elScript = document.createElement("script");
                    elScript.title = libName;
                    elScript.src = document.location.origin + "/_layouts/15/" + libName + ".js";

                    // Wait for the previous library to load
                    setTimeout(() => {
                        // Load the script
                        document.head.appendChild(elScript);

                        // Resolve the request
                        resolve(null);
                    }, 10 * counter++);
                } else {
                    // Log
                    console.debug("[gd-sprest] Core library already loaded: " + libName);
                }
            }).then(() => {
                // Resolve the request after all the libraries have been requested
                resolve();
            });
        });
    });
}
