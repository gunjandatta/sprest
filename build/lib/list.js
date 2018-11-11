"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var web_1 = require("./web");
/**
 * List
 */
exports.List = (function (listName, targetInfo) {
    var list = new utils_1.Base(targetInfo);
    // Default the properties
    list.targetInfo.defaultToWebFl = true;
    list.targetInfo.endpoint = "web/lists/getByTitle('" + listName.replace(/\'/g, "''") + "')";
    // Add the methods
    list.addMethods(list, { __metadata: { type: "list" } });
    // Return the list
    return list;
});
// Static method to get the list by the entity name.
exports.List.getByEntityName = (function (props) {
    // Query for the list
    var query = web_1.Web(props.url, props.targetInfo)
        // Get the lists
        .Lists()
        // Set the query
        .query({
        Filter: "EntityTypeName eq '" + props.name + "'",
        Top: 1
    });
    // See if the callback exists
    if (props.callback) {
        // Execute the request asynchronously
        query.execute(function (lists) {
            // Execute the callback method
            props.callback(lists.results ? lists.results[0] : null);
        });
    }
    else {
        // Execute the request synchronously and return it
        var list = query.executeAndWait();
        return list.results ? list.results[0] : list;
    }
});
// Static method to get the list data from the SP.List.getListDataAsStream endpoint
exports.List.getDataAsStream = (function (listFullUrl, parameters) {
    if (parameters === void 0) { parameters = {}; }
    var params = "?listFullUrl='" + listFullUrl + "'";
    // Parse the parameters
    for (var key in parameters) {
        // Append the parameter
        params += "&" + key + "=" + parameters[key];
    }
    // Return the base object
    return new utils_1.Base({
        endpoint: "SP.List.getListDataAsStream" + params
    });
});
