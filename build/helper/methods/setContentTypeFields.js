"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../../lib");
/**
 * Sets the field links associated with a content type.
 * @param ctInfo - The content type information
 */
exports.setContentTypeFields = function (ctInfo) {
    // Clears the content type field links
    var clearLinks = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the links
            getLinks().then(function (fieldLinks) {
                var skipFields = [];
                // See if we need to remove any fields
                if (fieldLinks.length > 0) {
                    var updateFl = false;
                    // Set the context
                    var ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(lib_1.ContextInfo.webServerRelativeUrl);
                    // Get the source
                    var src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();
                    // Get the content type
                    var contentType = src.get_contentTypes().getById(ctInfo.id);
                    // Parse the content type field links
                    for (var i = 0; i < fieldLinks.length; i++) {
                        var fieldLink = fieldLinks[i];
                        var removeFl = true;
                        var _loop_1 = function (j) {
                            var field = ctInfo.fields[j];
                            var fieldName = typeof (field) === "string" ? field : field.Name || field.FieldInternalName;
                            // See if we are keeping this field
                            if (fieldName == fieldLink.Name) {
                                var propUpdateFl_1 = false;
                                // Checks if an update is needed
                                var updateField = function (oldValue, newValue) {
                                    // Ensure a value exists
                                    if (newValue == null) {
                                        return;
                                    }
                                    // See if an update is needed
                                    if (oldValue == newValue) {
                                        return;
                                    }
                                    // Set the flag
                                    propUpdateFl_1 = true;
                                };
                                // Update the properties
                                updateField(fieldLink.DisplayName, field.DisplayName);
                                updateField(fieldLink.Hidden, field.Hidden);
                                updateField(fieldLink.ReadOnly, field.ReadOnly);
                                updateField(fieldLink.Required, field.Required);
                                updateField(fieldLink.ShowInDisplayForm, field.ShowInDisplayForm);
                                // See if an update to the property is needed
                                if (!propUpdateFl_1) {
                                    // Set the flag to not remove this field reference
                                    removeFl = false;
                                    // Add the field to skip
                                    skipFields.push(fieldLink);
                                }
                                return "break";
                            }
                        };
                        // Parse the fields to add
                        for (var j = 0; j < ctInfo.fields.length; j++) {
                            var state_1 = _loop_1(j);
                            if (state_1 === "break")
                                break;
                        }
                        // See if we are removing the field
                        if (removeFl) {
                            // Remove the field link
                            contentType.get_fieldLinks().getById(fieldLink.Id).deleteObject();
                            // Set the flag
                            updateFl = true;
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Removing the field link: " + fieldLink.Name);
                        }
                    }
                    // See if an update is required
                    if (updateFl) {
                        // Update the content type
                        contentType.update(false);
                        // Execute the request
                        ctx.executeQueryAsync(
                        // Success
                        function () {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Removed the field links successfully.");
                            // Resolve the request
                            resolve(skipFields);
                        }, 
                        // Error
                        function (sender, args) {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Error removing the field links.");
                            // Reject the request
                            reject();
                        });
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Set Content Type Fields] No fields need to be removed.");
                        // Resolve the request
                        resolve(skipFields);
                    }
                }
                else {
                    // Resolve the request
                    resolve(skipFields);
                }
            }, reject);
        });
    };
    // Creates the field links
    var createLinks = function (skipFields) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Set the context
            var ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(lib_1.ContextInfo.webServerRelativeUrl);
            // Get the source
            var src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();
            var skipField = function (fieldName, fields) {
                for (var i = 0; i < fields.length; i++) {
                    // See if we are skipping this field
                    if (fields[i].Name == fieldName) {
                        return true;
                    }
                }
            };
            // Parse the fields to add
            var fields = [];
            for (var i = 0; i < ctInfo.fields.length; i++) {
                var fieldInfo = ctInfo.fields[i];
                var fieldName = typeof (fieldInfo) === "string" ? fieldInfo : fieldInfo.Name || fieldInfo.FieldInternalName;
                // See if we are skipping this field
                if (skipField(fieldName, skipFields)) {
                    continue;
                }
                // Load the field
                var field = src.get_fields().getByInternalNameOrTitle(fieldName);
                ctx.load(field);
                // Log
                console.log("[gd-sprest][Set Content Type Fields] Adding the field link: " + fieldName);
                // Save a reference to this field
                fields.push({ ref: field, info: fieldInfo });
            }
            // See if an update is needed
            if (fields.length > 0) {
                // Execute the request
                ctx.executeQueryAsync(function () {
                    // Get the content type
                    var contentType = src.get_contentTypes().getById(ctInfo.id);
                    ctx.load(contentType);
                    // Parse the fields
                    for (var i = 0; i < fields.length; i++) {
                        var field = fields[i];
                        /**
                         * The field link set_[property] methods don't seem to work. Setting the field information seems to be the only way.
                         * The read only property is the only one that doesn't seem to work.
                         */
                        // See if the field ref has properties to update
                        if (typeof (field.info) !== "string") {
                            // Update the field properties
                            field.info.DisplayName != null ? field.ref.set_title(field.info.DisplayName) : null;
                            field.info.Hidden != null ? field.ref.set_hidden(field.info.Hidden) : null;
                            field.info.ReadOnly != null ? field.ref.set_readOnlyField(field.info.ReadOnly) : null;
                            field.info.Required != null ? field.ref.set_required(field.info.Required) : null;
                            field.info.ShowInDisplayForm != null ? field.ref.setShowInDisplayForm(field.info.ShowInDisplayForm) : null;
                        }
                        // Create the field link
                        var fieldLink = new SP.FieldLinkCreationInformation();
                        fieldLink.set_field(field.ref);
                        // Add the field link to the content type
                        contentType.get_fieldLinks().add(fieldLink);
                    }
                    // Update the content type
                    contentType.update(false);
                    // Execute the request
                    ctx.executeQueryAsync(
                    // Success
                    function () {
                        // Log
                        console.log("[gd-sprest][Set Content Type Fields] Added the field links successfully.");
                        // Resolve the request
                        resolve();
                    }, 
                    // Error
                    function (sender, args) {
                        // Log
                        console.log("[gd-sprest][Set Content Type Fields] Error adding field references.", args.get_message());
                        // Reject the request
                        reject();
                    });
                }, function (sender, args) {
                    // Log
                    console.log("[gd-sprest][Set Content Type Fields] Error getting field references.", args.get_message());
                    // Resolve the request
                    resolve();
                });
            }
            else {
                // Log
                console.log("[gd-sprest][Set Content Type Fields] No fields need to be added.");
                // Resolve the request
                resolve();
            }
        });
    };
    // Gets the content type field links
    var getLinks = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var ct = null;
            // See if list name exists
            if (ctInfo.listName) {
                // Get the list content type
                ct = lib_1.Web(ctInfo.webUrl).Lists(ctInfo.listName).ContentTypes(ctInfo.id);
            }
            else {
                // Get the content type
                ct = lib_1.Web(ctInfo.webUrl).ContentTypes(ctInfo.id);
            }
            // Query the field links
            ct.FieldLinks().query({
                Select: ["DisplayName", "Id", "Name", "Required", "ReadOnly", "ShowInDisplayForm"]
            }).execute(function (fieldLinks) {
                // Resolve the request
                resolve(fieldLinks.results);
            }, reject);
        });
    };
    // Set the order of the field references
    var setOrder = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Set the context
            var ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(lib_1.ContextInfo.webServerRelativeUrl);
            // Get the source
            var src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();
            // Get the content type
            var contentType = src.get_contentTypes().getById(ctInfo.id);
            // Reorder the content type
            contentType.get_fieldLinks().reorder(ctInfo.fields);
            // Update the content type
            contentType.update(ctInfo.listName ? false : true);
            // Execute the request
            ctx.executeQueryAsync(
            // Success
            function () {
                // Log
                console.log("[gd-sprest][Set Content Type Fields] Updated the field order successfully.");
                // Resolve the request
                resolve();
            }, 
            // Error
            function (sender, args) {
                // Log
                console.log("[gd-sprest][Set Content Type Fields] Error updating the field order.", args.get_message());
                // Reject the request
                reject();
            });
        });
    };
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Ensure fields exist
        if (ctInfo.fields) {
            // Clear the links
            clearLinks().then(function (skipFields) {
                // Create the links
                createLinks(skipFields).then(function () {
                    // Set the field order
                    setOrder().then(resolve, reject);
                }, reject);
            }, reject);
        }
        else {
            // Resolve the promise
            resolve();
        }
    });
};
