"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var utils_1 = require("../utils");
/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
exports.createDocSet = function (name, listName, webUrl) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Get the document set's root folder
        lib_1.Web(webUrl).Lists(listName).query({ Expand: ["ContentTypes", "ParentWeb", "RootFolder"] }).execute(function (list) {
            // Parse the content types
            var ctId = "0x0120D520";
            for (var i = 0; i < list.ContentTypes.results.length; i++) {
                // See if this is the document set content type
                if (list.ContentTypes.results[i].StringId.startsWith(ctId)) {
                    // Set the content type id
                    ctId = list.ContentTypes.results[i].StringId;
                    break;
                }
            }
            // Create the document set item
            exports.request({
                method: "POST",
                url: list.ParentWebUrl + "/_vti_bin/listdata.svc/" + list.Title.replace(/ /g, ""),
                headers: {
                    Accept: "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    Slug: list.RootFolder.ServerRelativeUrl + "/" + name + "|" + ctId,
                    "X-Requested-With": "XMLHttpRequest"
                },
                data: {
                    Title: name,
                    Path: list.RootFolder.ServerRelativeUrl
                }
            }).then(function (response) {
                // See if the request was successful
                if (response.d && response.d.Id > 0) {
                    // Get the document set item and resolve the promise
                    lib_1.Web(webUrl).Lists(listName).Items(response.d.Id).execute(resolve);
                }
                else {
                    // Reject the promise
                    reject(response["response"]);
                }
            });
        }, reject);
    });
};
/**
 * Convert a JSON string to a base object
 */
exports.parse = function (jsonString) {
    // Try to parse the string
    try {
        var obj = JSON.parse(jsonString);
        // Create a base object
        var base = new utils_1.Base(obj.props);
        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        base.targetInfo = obj.targetInfo;
        // Update the object
        base.updateDataObject(false);
        // Return the base object
        return base;
    }
    catch (_a) { }
    return null;
};
/**
 * XML HTTP Request
 */
exports.request = function (props) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Execute the request and resolve the promise
        (new utils_1.Base({
            method: props.method || "GET",
            url: props.url,
            requestHeader: props.headers,
            data: props.data
        })).execute(resolve, reject);
    });
};
