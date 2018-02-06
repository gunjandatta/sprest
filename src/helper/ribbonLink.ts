import { ILinkInfo } from "./types";

/**
 * Ribbon Link
 */
export const RibbonLink = (props: ILinkInfo): HTMLAnchorElement => {
    let link: HTMLAnchorElement = null;

    // Default the append flag
    let appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : false;

    // Get the ribbon top bar
    let topBar = document.querySelector("#RibbonContainer-TabRowRight");
    if (topBar) {
        // Get the link
        link = document.querySelector("#" + props.id) as HTMLAnchorElement;
        if (link == null) {
            // Create the link
            link = document.createElement("a");
            link.className = "ms-promotedActionButton " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.innerHTML = "<span class='ms-promotedActionButton-text'>" + props.title + "</span>";
            link.id = props.id;
            link.onclick = props.onClick as any;

            // Add the link
            appendFl ? topBar.appendChild(link) : topBar.insertBefore(link, topBar.firstChild);
        }
    }

    // Return the link
    return link;
}