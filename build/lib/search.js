"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var types_1 = require("../types");
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
var _Search = (function (_super) {
    __extends(_Search, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Search(url, targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "search";
        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }
        // Add the methods
        this.addMethods(this, { __metadata: { type: "search" } });
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to compute the argument names
    _Search.prototype.getArgNames = function (parameters) {
        var argNames = [];
        // Parse the arguments
        for (var key in parameters) {
            // Append the argument to the array
            argNames.push(key);
        }
        // Return the argument names
        return argNames;
    };
    /** The query method */
    _Search.prototype.query = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: this.getArgNames(settings),
            name: "query",
            requestType: types_1.RequestType.GetWithArgs
        }, settings);
    };
    /** The suggest method */
    _Search.prototype.suggest = function (settings) {
        // Execute the request
        return this.executeMethod("suggest", {
            argNames: this.getArgNames(settings),
            name: "suggest",
            requestType: types_1.RequestType.GetWithArgs
        }, settings);
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map