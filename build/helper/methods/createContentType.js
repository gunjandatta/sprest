"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../../lib");
/**
 * Creates a content type in a web or specified list.
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to.
 */
exports.createContentType = function (ctInfo, parentInfo, webUrl, listName) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Set the context
        var ctx = webUrl ? new SP.ClientContext(webUrl) : SP.ClientContext.get_current();
        // Get the parent content type
        var parentContentType = (parentInfo.Url ? ctx.get_site().openWeb(parentInfo.Url) : ctx.get_web()).get_contentTypes().getById(parentInfo.Id);
        // Create the content type
        var ct = new SP.ContentTypeCreationInformation();
        ctInfo.Description != null ? ct.set_description(ctInfo.Description) : null;
        ctInfo.Group != null ? ct.set_group(ctInfo.Group) : null;
        ct.set_name(ctInfo.Name);
        ct.set_parentContentType(parentContentType);
        // Add the content type
        var src = listName ? ctx.get_web().get_lists().getByTitle(listName) : ctx.get_web();
        var contentTypes = src.get_contentTypes();
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
            // Log
            console.log("[gd-sprest][Create Content Type] Error adding the content type.", ctInfo.Name);
            // Reject the request
            reject(args.get_message());
        });
    });
};
