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
var types_1 = require("../types");
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
var _Search = /** @class */ (function (_super) {
    __extends(_Search, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Search(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.defaultToWebFl = true;
        _this.targetInfo.endpoint = "search";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        utils_1.Request.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to compute the query
    _Search.prototype.getQuery = function (parameters) {
        var query = "";
        // Parse the parameters
        for (var key in parameters) {
            // Append the parameter to the query
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }
        // Return the query
        return [query];
    };
    /** The search query method */
    _Search.prototype.searchquery = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: types_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    /** The suggest method */
    _Search.prototype.suggest = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: types_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map