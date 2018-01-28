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
/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    function Base(targetInfo) {
        var _this = _super.call(this) || this;
        // Default the properties
        _this.targetInfo = Object.create(targetInfo || {});
        _this.responses = [];
        _this.requestType = 0;
        _this.waitFlags = [];
        return _this;
    }
    // Method to wait for the requests to complete
    Base.prototype.done = function (resolve) {
        var _this = this;
        // Ensure the base is set
        this.base = this.base ? this.base : this;
        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;
        // Wait for the responses to execute
        this.waitForRequestsToComplete(function () {
            var responses = _this.base.responses;
            // Clear the responses
            _this.base.responses = [];
            // Clear the wait flags
            _this.base.waitFlags = [];
            // Resolve the request
            resolve ? resolve.apply(_this, responses) : null;
        });
    };
    // Method to get the request information
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    // Method to stringify the object
    Base.prototype.stringify = function () {
        // Stringify the object
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