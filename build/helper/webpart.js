"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
/**
 * Web Part
 */
var _WebPart = /** @class */ (function () {
    /**
     * Constructor
     * @param props - The webpart properties.
     */
    function _WebPart(props) {
        var _this = this;
        this._props = null;
        this._wp = null;
        /**
         * Method to add the help link to a script part editor.
         * @wpId - The webpart id.
         */
        this.addHelpLink = function () {
            // Ensure the help properties exist
            if (_this._props.helpProps) {
                // Get the webpart's "Snippet"
                var link = document.querySelector("div[webpartid='" + _this._wp.wpId + "'] a[title='Edit Snippet']");
                if (link) {
                    // Create the help link
                    var helpLink = document.createElement("a");
                    helpLink.href = _this._props.helpProps.url || "#";
                    helpLink.style.paddingLeft = "10px";
                    helpLink.setAttribute("role", "button");
                    helpLink.title = _this._props.helpProps.title || "Help";
                    helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                    helpLink.target = "_blank";
                    // Append the link
                    link.parentElement.appendChild(helpLink);
                }
            }
        };
        /**
         * Method to get the webpart
         */
        this.getWebPart = function (wpId) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the current context
                var context = SP.ClientContext.get_current();
                // Get the webpart from the current page
                var page = context.get_web().getFileByServerRelativeUrl(lib_1.ContextInfo.serverRequestPath);
                var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                var wpDef = wpMgr.get_webParts().getById(wpId);
                var wp = wpDef.get_webPart();
                context.load(wp, "Properties");
                // Execute the request
                context.executeQueryAsync(
                // Success
                function () {
                    // Resolve the promise
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef,
                        WebPartId: wp.get_id()
                    });
                }, 
                // Error
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1] ? args[1].get_message() : "");
                });
            });
        };
        /**
         * Method to get the webpart id for a specified element
         * @param el - The target element.
         */
        this.getWebPartId = function (el) {
            // Loop until we find the webpart id
            while (el) {
                // See if this element contains the webpart id
                var wpId = el.getAttribute("webpartid");
                if (wpId) {
                    // Return the webpart id
                    return wpId;
                }
                // Check the parent
                el = el.parentElement;
            }
            // Unable to detect
            return "";
        };
        /**
         * Method to get the webpart information
         */
        this.getWebPartInfo = function () {
            var targetInfo = {
                cfg: null,
                el: null,
                wpId: null
            };
            // Ensure the element id exists
            if (_this._props.elementId) {
                // Get the webpart elements
                var elements = document.querySelectorAll("#" + _this._props.elementId);
                for (var i = 0; i < elements.length; i++) {
                    var elWebPart = elements[i];
                    // See if we have already configured this element
                    if (elWebPart.getAttribute("data-isConfigured")) {
                        continue;
                    }
                    // Get the webpart id
                    var wpId = _this.getWebPartId(elWebPart);
                    if (wpId) {
                        // See if the configuration element exists
                        var elCfg = _this._props.cfgElementId ? elWebPart.parentElement.querySelector("#" + _this._props.cfgElementId) : null;
                        if (elCfg) {
                            try {
                                // Parse the configuration
                                var cfg = JSON.parse(elCfg.innerText.trim());
                                // See if the webaprt id exists
                                if (cfg.WebPartId) {
                                    // See if it's for this webpart
                                    if (cfg.WebPartId == wpId) {
                                        // Set the target information
                                        targetInfo = {
                                            cfg: cfg,
                                            el: elWebPart,
                                            wpId: wpId
                                        };
                                        break;
                                    }
                                }
                                else {
                                    // Set the target information
                                    targetInfo = {
                                        cfg: {
                                            WebPartId: wpId
                                        },
                                        el: elWebPart,
                                        wpId: wpId
                                    };
                                    break;
                                }
                            }
                            catch (ex) {
                                // Set the target information
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                // Log
                                console.log("[sp-webpart] Error parsing the configuration for element '" + _this._props.cfgElementId + "'.");
                            }
                            // Break from the loop
                            break;
                        }
                        else {
                            // Set the target information
                            targetInfo = {
                                cfg: {
                                    WebPartId: wpId
                                },
                                el: elWebPart,
                                wpId: wpId
                            };
                            break;
                        }
                    }
                }
                // Ensure elements were found
                if (elements.length == 0) {
                    // Log
                    console.log("[sp-webpart] Error - Unable to find elements with id '" + _this._props.elementId + "'.");
                }
            }
            else {
                // Log
                console.log("[sp-webpart] The target element id is not defined.");
            }
            // Ensure the target element exists
            if (targetInfo.el) {
                // Set the configuration flag
                targetInfo.el.setAttribute("data-isConfigured", "true");
            }
            // Return the target information
            return targetInfo;
        };
        /**
         * Method to detect if a page is being edited
         */
        this.isEditMode = function () {
            var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
            // Get the form
            var form = document.forms[MSOWebPartPageFormName];
            if (form) {
                // Get the wiki page mode
                var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
                // Get the webpart page mode
                var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
                // Determine if the page is being edited
                return wikiPageMode == "Edit" || wpPageMode == "1";
            }
            // Unable to determine
            return false;
        };
        /**
         * Method to render the webpart
         */
        this.render = function () {
            var element = null;
            // Get the webpart information
            _this._wp = _this.getWebPartInfo();
            if (_this._wp == null || _this._wp.el == null) {
                // Log
                console.log("[sp-webpart] The target webpart element '" + _this._props.elementId + "' was not found.");
                return;
            }
            // See if the page is being edited
            var returnVal = null;
            if (_this.isEditMode()) {
                // Add the help link
                _this.addHelpLink();
                // Call the render event
                if (_this._props.onRenderEdit) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderEdit(_this._wp);
                }
            }
            else {
                // See if the configuration is defined, but has no value
                if (_this._wp.cfg || (_this._props.cfgElementId || "").length == 0) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderDisplay(_this._wp);
                }
                else {
                    // Render a message
                    _this._wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
                }
            }
            // See if a promise was returned
            if (returnVal && returnVal.then) {
                // Wait for the request to complete
                returnVal.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Execute the post render event
                    _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
                });
            }
            else {
                // Execute the post render event
                _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
            }
        };
        // Set the properties
        this._props = props || {};
        // Add a load event
        window.addEventListener("load", function () {
            // Render the component
            _this.render();
        });
    }
    // Method to create an instance of the webpart
    _WebPart.create = function (props) {
        // Return an instance of the webpart
        return new _WebPart(props);
    };
    return _WebPart;
}());
exports.WebPart = _WebPart;
//# sourceMappingURL=webpart.js.map