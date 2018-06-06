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
var utils_1 = require("../utils");
/**
 * Graph
 */
var _Graph = /** @class */ (function (_super) {
    __extends(_Graph, _super);
    /**
     * Constructor
     */
    function _Graph(accessToken, version) {
        var _this = 
        // Call the base constructor
        _super.call(this, { accessToken: accessToken }) || this;
        // Default the version
        _this.targetInfo.endpoint = version || "v1.0";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "graph" } });
        return _this;
    }
    // Method to get the graph token from a classic page
    _Graph.getAuthToken = function (scope) {
        // Return a proimse
        return new Promise(function (resolve, reject) {
            // Set the data 
            var data = { "resource": "https://graph.microsoft.com" };
            scope ? data["scope"] = scope : null;
            // Get the access token
            (new utils_1.Base({
                endpoint: "SP.OAuth.Token/Acquire",
                data: data,
                method: "POST"
            })).execute(function (token) {
                // Resolve the promise
                resolve(token);
            });
        });
    };
    return _Graph;
}(utils_1.Base));
exports.Graph = _Graph;
