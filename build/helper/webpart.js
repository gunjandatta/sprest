"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _WebPart = (function () {
    function _WebPart(props) {
        var _this = this;
        this._props = null;
        this._wp = null;
        this.addHelpLink = function () {
            if (_this._props.helpProps) {
                var link = document.querySelector("div[webpartid='" + _this._wp.wpId + "'] a[title='Edit Snippet']");
                if (link) {
                    var helpLink = document.createElement("a");
                    helpLink.href = _this._props.helpProps.url || "#";
                    helpLink.style.paddingLeft = "10px";
                    helpLink.setAttribute("role", "button");
                    helpLink.title = _this._props.helpProps.title || "Help";
                    helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                    helpLink.target = "_blank";
                    link.parentElement.appendChild(helpLink);
                }
            }
        };
        this.getWebPart = function (wpId) {
            return new Promise(function (resolve, reject) {
                var context = SP.ClientContext.get_current();
                var page = context.get_web().getFileByServerRelativeUrl(lib_1.ContextInfo.serverRequestPath);
                var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                var wpDef = wpMgr.get_webParts().getById(wpId);
                var wp = wpDef.get_webPart();
                context.load(wp, "Properties");
                context.executeQueryAsync(function () {
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef,
                        WebPartId: wp.get_id()
                    });
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    reject(args[1] ? args[1].get_message() : "");
                });
            });
        };
        this.getWebPartId = function (el) {
            while (el) {
                var wpId = el.getAttribute("webpartid");
                if (wpId) {
                    return wpId;
                }
                el = el.parentElement;
            }
            return "";
        };
        this.getWebPartInfo = function () {
            var targetInfo = {
                cfg: null,
                el: null,
                wpId: null
            };
            if (_this._props.elementId) {
                var elements = document.querySelectorAll("#" + _this._props.elementId);
                for (var i = 0; i < elements.length; i++) {
                    var elWebPart = elements[i];
                    if (elWebPart.getAttribute("data-isConfigured")) {
                        continue;
                    }
                    var wpId = _this.getWebPartId(elWebPart);
                    if (wpId) {
                        var elCfg = _this._props.cfgElementId ? elWebPart.parentElement.querySelector("#" + _this._props.cfgElementId) : null;
                        if (elCfg) {
                            try {
                                var cfg = JSON.parse(elCfg.innerText.trim());
                                if (cfg.WebPartId) {
                                    if (cfg.WebPartId == wpId) {
                                        targetInfo = {
                                            cfg: cfg,
                                            el: elWebPart,
                                            wpId: wpId
                                        };
                                        break;
                                    }
                                }
                                else {
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
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                console.log("[sp-webpart] Error parsing the configuration for element '" + _this._props.cfgElementId + "'.");
                            }
                            break;
                        }
                        else {
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
                if (elements.length == 0) {
                    console.log("[sp-webpart] Error - Unable to find elements with id '" + _this._props.elementId + "'.");
                }
            }
            else {
                console.log("[sp-webpart] The target element id is not defined.");
            }
            if (targetInfo.el) {
                targetInfo.el.setAttribute("data-isConfigured", "true");
            }
            return targetInfo;
        };
        this.isEditMode = function () {
            var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
            var form = document.forms[MSOWebPartPageFormName];
            if (form) {
                var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
                var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
                return wikiPageMode == "Edit" || wpPageMode == "1";
            }
            return false;
        };
        this.render = function () {
            var element = null;
            _this._wp = _this.getWebPartInfo();
            if (_this._wp == null || _this._wp.el == null) {
                console.log("[sp-webpart] The target webpart element '" + _this._props.elementId + "' was not found.");
                return;
            }
            var returnVal = null;
            if (_this.isEditMode()) {
                _this.addHelpLink();
                if (_this._props.onRenderEdit) {
                    returnVal = _this._props.onRenderEdit(_this._wp);
                }
            }
            else {
                if (_this._wp.cfg || (_this._props.cfgElementId || "").length == 0) {
                    returnVal = _this._props.onRenderDisplay(_this._wp);
                }
                else {
                    _this._wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
                }
            }
            if (returnVal && returnVal.then) {
                returnVal.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
                });
            }
            else {
                _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
            }
        };
        this._props = props || {};
        window.addEventListener("load", function () {
            _this.render();
        });
    }
    return _WebPart;
}());
exports.WebPart = _WebPart;
//# sourceMappingURL=webpart.js.map