import { ContextInfo } from "../lib";
import { RibbonLink } from "./ribbonLink";
import { ILinkInfo } from "./types";

/**
 * Suite Bar Link
 */
export const SuiteBarLink = (props: ILinkInfo): HTMLAnchorElement => {
    let link: HTMLAnchorElement = null;

    // Default the append flag
    let appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : true;

    // Get the suite bar top links
    let topLinks = document.querySelector("#suiteLinksBox > ul");
    if (topLinks) {
        // Query for the link, and ensure it exists
        link = topLinks.querySelector("#" + props.id) as HTMLAnchorElement;
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
            appendFl ? topLinks.appendChild(sbLink) : topLinks.insertBefore(sbLink, topLinks.firstChild);
        }
    }
    // Else, see if this is SPO
    else if (ContextInfo.isSPO) {
        // Create this as a ribbon link
        link = RibbonLink(props);
    }

    // Return the link
    return link;
}
