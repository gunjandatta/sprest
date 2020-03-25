"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var utils_1 = require("../utils");
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
                        // See if we are keeping this field
                        var removeFl = true;
                        for (var j = 0; j < ctInfo.fields.length; j++) {
                            var field = ctInfo.fields[j];
                            var fieldName = typeof (field) === "string" ? field : field.Name || field.FieldInternalName;
                            if (fieldName == fieldLink.Name) {
                                // Set the flag
                                removeFl = false;
                                // Add the field
                                skipFields.push(fieldLink);
                                break;
                            }
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
    // Update the field links
    var updateLinks = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            /*
            The JSOM methods aren't working. Need to figure out if this is a bug.
            */
            // Resolve the promise
            resolve();
            return;
            /*
            // Get the field links
            getLinks().then(fieldLinks => {
                // Set the context
                let ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(ContextInfo.webServerRelativeUrl);

                // Get the source
                let src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();

                // Get the content type
                let contentType = src.get_contentTypes().getById(ctInfo.id);
                ctx.load(contentType);

                // Parse the fields
                let fields: Array<{ ref: any, info: FieldLinkProps }> = [];
                for (let i = 0; i < ctInfo.fields.length; i++) {
                    let fieldInfo = ctInfo.fields[i];

                    // See if properties have been defined
                    if (typeof (fieldInfo) === "string") { continue; }

                    // Parse the field information
                    for (let j = 0; j < fieldLinks.length; j++) {
                        let fieldLink = fieldLinks[j];

                        // See if this is the target field
                        if (fieldLink.Name == fieldInfo.Name || fieldLink.Name == fieldInfo.FieldInternalName) {
                            // Load this field
                            fields.push({
                                ref: contentType.get_fieldLinks().getById(fieldLink.Id),
                                info: fieldLink
                            });
                        }
                    }
                }

                // See if an update is needed
                if (fields.length > 0) {
                    // Execute the request
                    ctx.executeQueryAsync(() => {
                        let updateFl = false;

                        // Parse the fields
                        for (let i = 0; i < fields.length; i++) {
                            let field = fields[i];

                            // Checks if an update is needed
                            let updateField = (fieldLink: any, fieldId: string, propName: string, propValue: any) => {
                                // Ensure a value exists
                                if (propValue == null) { return; }

                                // See if an update is needed
                                if (fieldLink["get_" + propName] == propValue) { return; }

                                // Update the field property
                                let fl = contentType.get_fieldLinks().getById(fieldId);
                                fl["set_" + propName](propValue);
                                ctx.load(fl);

                                // Set the flag
                                updateFl = true;
                            }

                            // Update the properties
                            updateField(field.ref, field.info.Id, "displayName", field.info.DisplayName);
                            updateField(field.ref, field.info.Id, "hidden", field.info.Hidden);
                            updateField(field.ref, field.info.Id, "readOnly", field.info.ReadOnly);
                            updateField(field.ref, field.info.Id, "required", field.info.Required);
                            updateField(field.ref, field.info.Id, "showInDisplayForm", field.info.ShowInDisplayForm);
                        }

                        // See if an update is required
                        if (updateFl) {
                            // Update the site content types
                            ctInfo.listName ? null : contentType.update(true);

                            // Execute the request
                            ctx.executeQueryAsync(
                                // Success
                                () => {
                                    // Log
                                    console.log("[gd-sprest][Set Content Type Fields] Updated the field links successfully.");

                                    // Resolve the request
                                    resolve();
                                },

                                // Error
                                (sender, args) => {
                                    // Log
                                    console.log("[gd-sprest][Set Content Type Fields] Error updating field references.", args.get_message());

                                    // Reject the request
                                    reject();
                                });
                        } else {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] No fields need to be updated.");

                            // Resolve the request
                            resolve();
                        }
                    }, (sender, args) => {
                        // Log
                        console.log("[gd-sprest][Set Content Type Fields] Error getting field references.", args.get_message());

                        // Resolve the request
                        resolve();
                    });
                } else {
                    // Log
                    console.log("[gd-sprest][Set Content Type Fields] No fields need to be updated.");

                    // Resolve the request
                    resolve();
                }
            });
            */
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
                    setOrder().then(function () {
                        // Update the field links
                        updateLinks().then(resolve, reject);
                    }, reject);
                }, reject);
            }, reject);
        }
        else {
            // Resolve the promise
            resolve();
        }
    });
};
