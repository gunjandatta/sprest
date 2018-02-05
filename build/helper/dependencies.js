"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _Dependencies = (function () {
    function _Dependencies(callback) {
        this._callback = null;
        this._callback = callback;
        this.MAX_WAIT = 5;
        this.SCRIPTS = [
            "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"
        ];
        this.loadDependencies();
    }
    Object.defineProperty(_Dependencies.prototype, "pageContextExistsFl", {
        get: function () { return lib_1.ContextInfo.webAbsoluteUrl != ""; },
        enumerable: true,
        configurable: true
    });
    _Dependencies.prototype.loadDependencies = function () {
        if (this.pageContextExistsFl) {
            this._callback ? this._callback() : null;
        }
        else {
            for (var fileName in this.SCRIPTS) {
                var elScript = lib_1.ContextInfo.document.createElement("script");
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");
                lib_1.ContextInfo.document.head.appendChild(elScript);
            }
            this.waitForPageContext();
        }
    };
    _Dependencies.prototype.waitForPageContext = function () {
        var counter = 0;
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            if (this.pageContextExists || ++counter >= this.MAX_WAIT) {
                lib_1.ContextInfo.window.clearInterval(intervalId);
                this._callback ? this._callback() : null;
            }
        }, 10);
    };
    return _Dependencies;
}());
exports.Dependencies = _Dependencies;
//# sourceMappingURL=dependencies.js.map