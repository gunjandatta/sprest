import { ContextInfo } from "../lib";
import { RibbonLink } from "./ribbonLink";
import { ILinkInfo } from "./types";

/**
 * Suite Bar Link
 */
export const SuiteBarLink = (props: ILinkInfo): PromiseLike<HTMLAnchorElement> => {
    // Creates the ribbon link
    let create = () => {
        // Default the append flag
        let appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : true;

        // Query for the link, and ensure it exists
        let link = _elTopLinks.querySelector("#" + props.id) as HTMLAnchorElement;
        if (link == null) {
            // Create a list link
            link = document.createElement("a");
            link.className = "ms-core-suiteLink-a " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.id = props.id;
            link.innerHTML = props.title;
            link.onclick = props.onClick as any;

            // Create the suite bar link
            let sbLink = document.createElement("li");
            sbLink.className = "ms-core-suiteLink";
            sbLink.appendChild(link);

            // Append the item to the list
            appendFl ? _elTopLinks.appendChild(sbLink) : _elTopLinks.insertBefore(sbLink, _elTopLinks.firstChild);
        }

        // Return the link
        return link;
    }

    // Gets the top links element
    let _elTopLinks = null;
    let getTopLinks = () => {
        // See if the bar exists
        if (_elTopLinks == null) {
            // Set the element
            _elTopLinks = document.querySelector("#suiteLinksBox > ul");
        }

        // Return the element
        return _elTopLinks;
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // See if the top links exists
        if (getTopLinks()) {
            // Create the link
            let el = create();
            if (el) {
                // Resolve the promise
                resolve(el);
            }
        } else if (window) {
            // Wait for the window to be loaded
            window.addEventListener("load", () => {
                // See if the top links exists
                if (getTopLinks()) {
                    // Create the link
                    let el = create();
                    if (el) {
                        // Resolve the promise
                        resolve(el);
                    }
                }
            });
        }
    });
}
