"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ribbon Link
 */
exports.RibbonLink = function (props) {
    // Creates the ribbon link
    var create = function () {
        var link = null;
        // Default the append flag
        var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : false;
        // Get the link
        link = _elTopBar.querySelector("#" + props.id);
        if (link == null) {
            // Create the link
            link = document.createElement("a");
            link.className = "ms-promotedActionButton " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.innerHTML = "<span class='ms-promotedActionButton-text'>" + props.title + "</span>";
            link.id = props.id;
            link.onclick = props.onClick;
            // Add the link
            appendFl ? _elTopBar.appendChild(link) : _elTopBar.insertBefore(link, _elTopBar.firstChild);
        }
        // Return the link
        return link;
    };
    // Gets the top bar element
    var _elTopBar = null;
    var getTopBar = function () {
        // See if the bar exists
        if (_elTopBar == null) {
            // Set the element
            _elTopBar = document.querySelector("#RibbonContainer-TabRowRight");
        }
        // Return the element
        return _elTopBar;
    };
    // Return a promise
    return new Promise(function (resolve, reject) {
        // See if the top bar exists
        if (getTopBar()) {
            // Create the link
            var el = create();
            if (el) {
                // Resolve the promise
                resolve(el);
            }
        }
        else if (window) {
            // Wait for the window to be loaded
            window.addEventListener("load", function () {
                // See if the top bar exists
                if (getTopBar()) {
                    // Create the link
                    var el = create();
                    if (el) {
                        // Resolve the promise
                        resolve(el);
                    }
                }
            });
        }
    });
};
