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
        _this.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to compute the argument names
    _Search.prototype.getArguments = function (parameters) {
        var names = [];
        var values = [];
        // Parse the arguments
        for (var key in parameters) {
            // Append the argument to the array
            names.push(key);
            values.push(parameters[key]);
        }
        // Return the argument names
        return { names: names, values: values };
    };
    /** The search query method */
    _Search.prototype.searchquery = function (settings) {
        var args = this.getArguments(settings);
        // Execute the request
        return this.executeMethod("query", {
            argNames: args.names,
            name: "query",
            requestType: types_1.RequestType.GetWithArgs
        }, args.values);
    };
    /** The suggest method */
    _Search.prototype.suggest = function (settings) {
        var args = this.getArguments(settings);
        // Execute the request
        return this.executeMethod("suggest", {
            argNames: args.names,
            name: "suggest",
            requestType: types_1.RequestType.GetWithArgs
        }, args.values);
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map