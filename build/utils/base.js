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
var _1 = require(".");
var Base = (function (_super) {
    __extends(Base, _super);
    function Base(targetInfo) {
        var _this = _super.call(this) || this;
        _this.targetInfo = Object.create(targetInfo || {});
        _this.responses = [];
        _this.requestType = 0;
        _this.waitFlags = [];
        return _this;
    }
    Base.prototype.done = function (resolve) {
        var _this = this;
        this.base = this.base ? this.base : this;
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;
        this.waitForRequestsToComplete(function () {
            var responses = _this.base.responses;
            _this.base.responses = [];
            _this.base.waitFlags = [];
            resolve ? resolve.apply(_this, responses) : null;
        });
    };
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    Base.prototype.stringify = function () {
        return JSON.stringify({
            response: this.response,
            status: this.status,
            targetInfo: this.targetInfo
        });
    };
    return Base;
}(_1.BaseExecution));
exports.Base = Base;
//# sourceMappingURL=base.js.map