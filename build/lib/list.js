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
var web_1 = require("./web");
/**
 * List
 */
var _List = /** @class */ (function (_super) {
    __extends(_List, _super);
    /**
     * Constructor
     */
    function _List(listName, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName.replace(/\'/g, "''") + "')";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "list" } });
        return _this;
    }
    // Method to get the list by the entity name.
    _List.getByEntityName = function (entityTypeName, callback, targetInfo) {
        // Query for the list
        var query = (new web_1.Web(targetInfo))
            .Lists()
            .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });
        // See if the callback exists
        if (typeof (callback) != "function") {
            // Execute the request synchronously and return it
            var list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }
        // Execute the request asynchronously
        query.execute(function (lists) {
            // Execute the callback method
            callback(lists.results ? lists.results[0] : lists);
        });
    };
    // Method to get the list data from the SP.List.GetListDataAsStream endpoint
    _List.getListDataAsStream = function (listFullUrl, parameters, overrideParameters) {
        if (parameters === void 0) { parameters = {}; }
        if (overrideParameters === void 0) { overrideParameters = {}; }
        var params = "?listFullUrl='" + listFullUrl + "'";
        // Parse the parameters
        for (var key in parameters) {
            // Append the parameter
            params += "&" + key + "=" + parameters[key];
        }
        // Parse the override parameters
        for (var key in overrideParameters) {
            // Append the parameter
            params += "&" + key + "=" + overrideParameters[key];
        }
        // Return the base object
        return new utils_1.Base({
            endpoint: "SP.List.GetListDataAsStream" + params
        });
    };
    return _List;
}(utils_1.Base));
exports.List = _List;
