"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Search
 */
exports.Search = (function (url, targetInfo) {
    var search = new utils_1.Base(targetInfo);
    // Default the properties
    search.targetInfo.defaultToWebFl = true;
    search.targetInfo.endpoint = "search";
    // See if the web url exists
    if (url) {
        // Set the settings
        search.targetInfo.url = url;
    }
    // Add the methods
    search.addMethods(search, { __metadata: { type: "search" } });
    /** The search query method */
    search.searchquery = function (settings) {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, exports.Search.getQuery(settings));
    };
    /** The search suggest method */
    search["suggest"] = function (settings /*SearchSuggestion*/) {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, exports.Search.getQuery(settings));
    };
    // Return the search
    return search;
});
// Static method to compute the query
exports.Search.getQuery = function (parameters /* | Types.ComplexTypes.SearchSuggestion*/) {
    var query = "";
    // Parse the parameters
    for (var key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }
    // Return the query
    return [query];
};
