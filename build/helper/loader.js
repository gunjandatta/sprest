"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
exports.Loader = {
    loaded: false,
    waitForSPLibs: function (callback, timeout, loadLibraries) {
        var counter = 0;
        loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
        timeout = typeof (timeout) === "number" ? timeout : 2500;
        var maxLoops = timeout / 25;
        if (_this.loaded) {
            callback();
            return;
        }
        if (loadLibraries) {
            ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every(function (fileName) {
                var el = lib_1.ContextInfo.document.createElement("script");
                el.setAttribute("src", "/_layouts/15/" + fileName);
                el.setAttribute("type", "text/javascript");
                lib_1.ContextInfo.document.head.appendChild(el);
                return true;
            });
        }
        var intervalId = setInterval(function () {
            var maxLoopFl = ++counter > maxLoops;
            if (lib_1.ContextInfo.existsFl || maxLoopFl) {
                clearInterval(intervalId);
                callback();
            }
        }, 25);
    }
};
//# sourceMappingURL=loader.js.map