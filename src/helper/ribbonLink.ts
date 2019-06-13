import { ILinkInfo } from "../../@types/helper";

/**
 * Ribbon Link
 */
export const RibbonLink = (props: ILinkInfo): PromiseLike<HTMLAnchorElement> => {
    // Creates the ribbon link
    let create = () => {
        let link: HTMLAnchorElement = null;

        // Default the append flag
        let appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : false;

        // Get the link
        link = _elTopBar.querySelector("#" + props.id) as HTMLAnchorElement;
        if (link == null) {
            // Create the link
            link = document.createElement("a");
            link.className = "ms-promotedActionButton " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.innerHTML = "<span class='ms-promotedActionButton-text'>" + props.title + "</span>";
            link.id = props.id;
            link.onclick = props.onClick as any;

            // Add the link
            appendFl ? _elTopBar.appendChild(link) : _elTopBar.insertBefore(link, _elTopBar.firstChild);
        }

        // Return the link
        return link;
    }

    // Gets the top bar element
    let _elTopBar = null;
    let getTopBar = () => {
        // See if the bar exists
        if (_elTopBar == null) {
            // Set the element
            _elTopBar = document.querySelector("#RibbonContainer-TabRowRight");
        }

        // Return the element
        return _elTopBar;
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // See if the top bar exists
        if (getTopBar()) {
            // Create the link
            let el = create();
            if (el) {
                // Resolve the promise
                resolve(el);
            }
        } else if (window) {
            // Wait for the window to be loaded
            window.addEventListener("load", () => {
                // See if the top bar exists
                if (getTopBar()) {
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