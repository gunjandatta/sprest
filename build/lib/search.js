"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Search
 */
exports.Search = (function (url, targetInfo) {
    var base = new utils_1.Base(targetInfo);
    var search = base;
    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "search";
    // See if the web url exists
    if (url) {
        // Set the settings
        base.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Request.addMethods(search, { __metadata: { type: "Microsoft.Office.Server.Search.REST.SearchService" } });
    /** The search query method */
    search.searchquery = function (settings) {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, exports.Search.getQuery(settings));
    };
    // Return the search
    return search;
});
// Static method to compute the query
exports.Search.getQuery = function (parameters) {
    var query = "";
    // Parse the parameters
    for (var key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }
    // Return the query
    return [query];
};
