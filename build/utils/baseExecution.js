"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
var BaseExecution = (function (_super) {
    __extends(BaseExecution, _super);
    function BaseExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseExecution.prototype.batch = function (arg) {
        var callback = null;
        var appendFl = false;
        if (typeof (arg) === "boolean") {
            appendFl = arg;
        }
        else {
            callback = arg;
        }
        this.base = this.base ? this.base : this;
        if (appendFl && this.base.batchRequests) {
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new _1.TargetInfo(this.targetInfo)
            });
        }
        else {
            this.base.batchRequests = this.base.batchRequests || [];
            this.base.batchRequests.push([{
                    callback: callback,
                    targetInfo: new _1.TargetInfo(this.targetInfo)
                }]);
        }
        return this;
    };
    BaseExecution.prototype.execute = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callback = null;
        var waitFl = false;
        switch (args.length) {
            case 1:
                callback = typeof (args[0]) === "boolean" ? callback : args[0];
                waitFl = typeof (args[0]) === "boolean" ? args[0] : waitFl;
                break;
            case 2:
                callback = args[0];
                waitFl = args[1];
                break;
        }
        this.base = this.base ? this.base : this;
        this.responseIndex = this.base.responses.length;
        this.base.responses.push(this);
        if (waitFl) {
            this.waitForRequestsToComplete(function () {
                _this.executeRequest(true, function (response) {
                    if (callback) {
                        _this.base = _this;
                        _this.base.responses = [];
                        var returnVal = callback(response);
                        var waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            waitFunc(function () {
                                _this.base = _this.parent.base;
                                _this.base.waitFlags[_this.responseIndex] = true;
                            });
                            return;
                        }
                        _this.base = _this.parent.base;
                    }
                    _this.base.waitFlags[_this.responseIndex] = true;
                });
            }, this.responseIndex);
        }
        else {
            this.executeRequest(true, function (response) {
                var returnVal = callback ? callback(response) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    returnVal.done(function () {
                        _this.base.waitFlags[_this.responseIndex] = true;
                    });
                }
                else {
                    _this.base.waitFlags[_this.responseIndex] = true;
                }
            });
        }
        return this;
    };
    BaseExecution.prototype.executeAndWait = function () { return this.executeRequest(false); };
    BaseExecution.prototype.waitForRequestsToComplete = function (callback, requestIdx) {
        var _this = this;
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            var counter = 0;
            for (var i = 0; i < _this.base.responses.length; i++) {
                var response = _this.base.responses[i];
                if (requestIdx == counter++) {
                    break;
                }
                if (response.xhr == null || !response.xhr.completedFl) {
                    return;
                }
                if (counter > 0 && _this.base.waitFlags[counter - 1] != true) {
                    return;
                }
            }
            lib_1.ContextInfo.window.clearInterval(intervalId);
            callback();
        }, 10);
    };
    return BaseExecution;
}(_1.BaseRequest));
exports.BaseExecution = BaseExecution;
//# sourceMappingURL=baseExecution.js.map