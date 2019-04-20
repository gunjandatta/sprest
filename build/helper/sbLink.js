"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suite Bar Link
 */
exports.SuiteBarLink = function (props) {
    // Creates the ribbon link
    var create = function () {
        // Default the append flag
        var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : true;
        // Query for the link, and ensure it exists
        var link = _elTopLinks.querySelector("#" + props.id);
        if (link == null) {
            // Create a list link
            link = document.createElement("a");
            link.className = "ms-core-suiteLink-a " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.id = props.id;
            link.innerHTML = props.title;
            link.onclick = props.onClick;
            // Create the suite bar link
            var sbLink = document.createElement("li");
            sbLink.className = "ms-core-suiteLink";
            sbLink.appendChild(link);
            // Append the item to the list
            appendFl ? _elTopLinks.appendChild(sbLink) : _elTopLinks.insertBefore(sbLink, _elTopLinks.firstChild);
        }
        // Return the link
        return link;
    };
    // Gets the top links element
    var _elTopLinks = null;
    var getTopLinks = function () {
        // See if the bar exists
        if (_elTopLinks == null) {
            // Set the element
            _elTopLinks = document.querySelector("#suiteLinksBox > ul");
        }
        // Return the element
        return _elTopLinks;
    };
    // Return a promise
    return new Promise(function (resolve, reject) {
        // See if the top links exists
        if (getTopLinks()) {
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
                // See if the top links exists
                if (getTopLinks()) {
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
