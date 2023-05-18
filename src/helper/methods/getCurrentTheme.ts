import { IgetCurrentTheme } from "../../../@types/helper/methods";
import { Site, Web } from "../../lib";

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const getCurrentTheme: IgetCurrentTheme = (): PromiseLike<{ [key: string]: string }> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Wait for the modern theme information to be loaded
        waitForModernTheme().then(
            // Success
            () => {
                // Resolve the request with the theme information
                resolve(window["__themeState__"].theme);
            },

            // Error
            () => {
                // Get the current theme info
                Web().Lists("Composed Looks").Items().query({
                    Filter: "DisplayOrder eq 0 or Title eq 'Office'",
                    OrderBy: ["DisplayOrder"],
                    Select: ["DisplayOrder", "MasterPageUrl", "ThemeUrl", "Title"]
                }).execute(items => {
                    let currentItem = items.results[0];
                    let defaultItem = items.results[1];

                    // See if the current theme info exists
                    if (currentItem && currentItem["ThemeUrl"]) {
                        // Get the theme information
                        getThemeInfo(currentItem["ThemeUrl"].Url).then(resolve, reject);
                    }
                    else if (defaultItem && defaultItem["ThemeUrl"]) {
                        // Get the theme information
                        getThemeInfo(defaultItem["ThemeUrl"].Url).then(resolve, reject);
                    } else {
                        // Unable to determine the theme
                        reject();
                    }
                }, reject)
            }
        )
    });
}

// Gets the theme information for a color palette
const getThemeInfo = (url: string = ""): PromiseLike<{ [key: string]: string }> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        let themeInfo: { [key: string]: string } = {};

        // Ensure the url exists
        if (url.length == 0) { resolve(themeInfo); return; }

        // Get the file item
        Site().RootWeb().getFileByUrl(url).execute(file => {
            // Read the contents
            file.content().execute(contents => {
                // Convert the xml
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(String.fromCharCode.apply(null, new Uint8Array(contents)), "text/xml");

                // Get the colors and parse them
                let colors = xmlDoc.getElementsByTagName("s:color");
                for (let i = 0; i < colors.length; i++) {
                    let color = colors[i];
                    let key = color.getAttribute("name");
                    let value = color.getAttribute("value");

                    // See if the length is > 6 characters
                    if (value.length > 6) {
                        // Convert the value
                        value = value.slice(2, 8) + value[0] + value[1];
                    }

                    // Add the color information
                    themeInfo[key] = "#" + value;
                }

                // Resolve the request
                resolve(themeInfo);
            }, reject);
        }, reject);
    });
}

// Waits for the modern theme information to be loaded
const waitForModernTheme = (): PromiseLike<void> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        let counter = 0;
        let maxAttempts = 50;

        // See if the modern theme exists
        if (window["__themeState__"] != null && window["__themeState__"].theme != null) {
            // Theme is loaded
            resolve();
            return;
        }

        // Wait for the theme to be loaded
        let loopId = setInterval(() => {
            // See if the modern theme exists
            if (window["__themeState__"] != null && window["__themeState__"].theme != null) {
                // Stop the loop
                clearInterval(loopId);

                // Resolve the request
                resolve();
            }
            // Else, see if we have hit the max attempts
            else if (++counter >= maxAttempts) {
                // Stop the loop
                clearInterval(loopId);

                // Reject the request
                reject();
            }
        }, 10);
    });
}