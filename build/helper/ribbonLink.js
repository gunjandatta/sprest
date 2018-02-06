"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ribbon Link
 */
exports.RibbonLink = function (props) {
    var link = null;
    // Default the append flag
    var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : false;
    // Get the ribbon top bar
    var topBar = document.querySelector("#RibbonContainer-TabRowRight");
    if (topBar) {
        // Get the link
        link = document.querySelector("#" + props.id);
        if (link == null) {
            // Create the link
            link = document.createElement("a");
            link.className = "ms-promotedActionButton " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.innerHTML = "<span class='ms-promotedActionButton-text'>" + props.title + "</span>";
            link.id = props.id;
            link.onclick = props.onClick;
            // Add the link
            appendFl ? topBar.appendChild(link) : topBar.insertBefore(link, topBar.firstChild);
        }
    }
    // Return the link
    return link;
};
//# sourceMappingURL=ribbonLink.js.map