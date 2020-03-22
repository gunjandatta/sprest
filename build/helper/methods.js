"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var utils_1 = require("../utils");
/**
 * Creates a content type in the current web or specified list.
 * @param ctInfo - The content type information.
 * @param parentContentTypeId - The parent content type id to inherit from.
 * @param listName - The list name to add the content type to.
 */
exports.createContentType = function (ctInfo, parentContentTypeId, listName) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Get the current context
        var ctx = SP.ClientContext.get_current();
        // Get the parent content type
        var parent = ctx.get_site().get_rootWeb().get_contentTypes().getById(parentContentTypeId);
        // Create the content type
        var ct = new SP.ContentTypeCreationInformation();
        ct.set_description(ctInfo.Description);
        ct.set_group(ctInfo.Group);
        ct.set_name(ctInfo.Name);
        ct.set_parentContentType(parent);
        // See if the list name was defined
        var contentTypes = null;
        if (listName) {
            // Set the content type collection
            contentTypes = ctx.get_web().get_lists().getByTitle(listName).get_contentTypes();
        }
        else {
            // Set the content type collection
            contentTypes = ctx.get_web().get_contentTypes();
        }
        // Add the content type
        contentTypes.add(ct);
        ctx.load(contentTypes);
        // Execute the request
        ctx.executeQueryAsync(
        // Success
        function () {
            // Set the content type collection
            var cts = (listName ? lib_1.Web().Lists(listName) : lib_1.Web()).ContentTypes();
            // Find the content type
            cts.query({ Filter: "Name eq '" + ctInfo.Name + "'" }).execute(function (cts) {
                // Resolve the request
                resolve(cts.results[0]);
            });
        }, 
        // Error
        function (sender, args) {
            // Reject the request
            reject(args.get_message());
        });
    });
};
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
                if (list.ContentTypes.results[i].StringId.indexOf(ctId) == 0) {
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
 * Determines if the user has permissions, based on the permission kind value
 */
exports.hasPermissions = function (permissionMask, permissions) {
    if (permissions === void 0) { permissions = []; }
    var hasPermissions = false;
    // Set the permissions
    var requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;
    // Ensure the base permissions exist
    if (SP && SP.BasePermissions) {
        // Initialize the base permissions from the value
        var basePermissions = new SP.BasePermissions();
        basePermissions.initPropertiesFromJson(permissionMask);
        // Default the permission flag
        hasPermissions = true;
        // Parse the requested permissions
        for (var i = 0; i < requestedPermissions.length; i++) {
            // See if the user has permissions
            if (!basePermissions.has(requestedPermissions[i])) {
                // Set the flag and break from the loop
                hasPermissions = false;
                break;
            }
        }
    }
    else {
        // Log
        console.info("[gd-sprest] The 'SP' core library is not available.");
    }
    // Return the value
    return hasPermissions;
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
        utils_1.Request.updateDataObject(base, false);
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
