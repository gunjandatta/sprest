"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Graph
 */
exports.Graph = (function (accessToken, version) {
    var graph = new utils_1.Base({ accessToken: accessToken });
    // Default the target information
    graph.targetInfo.endpoint = version || "v1.0";
    graph.targetInfo.requestType = utils_1.RequestType.GraphGet;
    // Add the methods
    utils_1.Helper.addMethods(graph, { __metadata: { type: "graph" } });
    // Return the graph
    return graph;
});
// Method to get the graph token from a classic page
exports.Graph.getAccessToken = function (scope) {
    // Return a promise
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
