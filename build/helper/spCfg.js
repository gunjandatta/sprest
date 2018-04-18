"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./spCfgTypes"));
var lib_1 = require("../lib");
var __1 = require("..");
var _1 = require(".");
/**
 * SharePoint Configuration
 */
exports.SPConfig = function (cfg, webUrl) {
    // The selected configuration type to install
    var _cfgType;
    // The target name to install/uninstall
    var _targetName;
    /**
     * Methods
     */
    // Method to create the content types
    var createContentTypes = function (contentTypes, cfgContentTypes) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure fields exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }
            var _loop_1 = function (i) {
                var cfgContentType = cfgContentTypes[i];
                // See if this content type already exists
                var ct = isInCollection("Name", cfgContentType.Name, contentTypes.results);
                if (ct) {
                    // Log
                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
                    // Update the configuration
                    cfgContentType.ContentType = ct;
                }
                else {
                    // Log
                    console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");
                    // See if the parent name exists
                    if (cfgContentType.ParentName) {
                        // Get the web containing the parent content type
                        (new lib_1.Web(cfgContentType.ParentWebUrl || webUrl))
                            .ContentTypes()
                            .query({
                            Filter: "Name eq '" + cfgContentType.ParentName + "'"
                        })
                            .execute(function (parent) {
                            // See if the parent exists
                            if (parent.results[0]) {
                                // Add the available content type
                                contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(function (ct) {
                                    // See if it was successful
                                    if (ct.existsFl) {
                                        // Update the name
                                        (function () {
                                            return new Promise(function (resolve, reject) {
                                                // Ensure the name doesn't need to be updated
                                                if (ct.Name != cfgContentType.Name) {
                                                    ct.update({ Name: cfgContentType.Name }).execute(function () {
                                                        // Resolve the promise
                                                        resolve();
                                                    });
                                                }
                                                else {
                                                    // Resolve the promise
                                                    resolve();
                                                }
                                            });
                                        })().then(function () {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                            // Update the configuration
                                            cfgContentType.ContentType = ct;
                                            // Trigger the event
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        });
                                    }
                                    else {
                                        // Log
                                        console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                        console.error("[gd-sprest][Field] Error: " + ct.response);
                                    }
                                }, true);
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                            }
                        });
                    }
                    else {
                        // Create the content type
                        contentTypes.add({
                            Description: cfgContentType.Description,
                            Group: cfgContentType.Group,
                            Id: {
                                __metadata: { type: "SP.ContentTypeId" },
                                StringValue: cfgContentType.Id ? cfgContentType.Id.StringValue : "0x0100" + lib_1.ContextInfo.generateGUID().replace("{", "").replace("-", "").replace("}", "")
                            },
                            Name: cfgContentType.Name
                        }).execute(function (ct) {
                            // See if it was successful
                            if (ct.existsFl) {
                                // Log
                                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                // Update the configuration
                                cfgContentType.ContentType = ct;
                                // Trigger the event
                                cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + ct.response);
                            }
                        });
                    }
                }
            };
            // Parse the configuration
            for (var i = 0; i < cfgContentTypes.length; i++) {
                _loop_1(i);
            }
            // Wait for the requests to complete
            contentTypes.done(function () {
                var _loop_2 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    var cfgUpdate = {};
                    var updateFl = false;
                    // Ensure the content type exists
                    if (cfgContentType.ContentType == null) {
                        return "continue";
                    }
                    /**
                     * See if we need to update the properties
                     */
                    // Description
                    if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                        // Update the configuration
                        cfgUpdate.Description = cfgContentType.Description;
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");
                        // Set the flag
                        updateFl = true;
                    }
                    // Group
                    if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                        // Update the configuration
                        cfgUpdate.Group = cfgContentType.Group;
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");
                        // Set the flag
                        updateFl = true;
                    }
                    // JSLink
                    if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                        // Update the configuration
                        cfgUpdate.JSLink = cfgContentType.JSLink;
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");
                        // Set the flag
                        updateFl = true;
                    }
                    // Name
                    if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                        // Update the configuration
                        cfgUpdate.Name = cfgContentType.Name;
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");
                        // Set the flag
                        updateFl = true;
                    }
                    // See if an update is needed
                    if (updateFl) {
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");
                        // Update the content type
                        cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(function () {
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                            // Trigger the event
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        });
                    }
                    else {
                        // Trigger the event
                        cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_2(i);
                }
                // Wait for the requests to complete
                contentTypes.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    };
    // Method to create the fields
    var createFields = function (fields, cfgFields) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }
            var _loop_3 = function (i) {
                var cfgField = cfgFields[i];
                // See if this field already exists
                var field = isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Log
                    console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                    // Trigger the event
                    cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                }
                else {
                    // Log
                    console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                    // The field created event
                    var onFieldCreated_1 = function (field) {
                        // See if it was successful
                        if (field.existsFl) {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                            // Trigger the event
                            cfgField.onCreated ? cfgField.onCreated(field) : null;
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                            console.error("[gd-sprest][Field] Error: " + field.response);
                        }
                    };
                    // Compute the schema xml
                    _1.FieldSchemaXML(cfgField).then(function (response) {
                        var schemas = typeof (response) === "string" ? [response] : response;
                        // Parse the fields to add
                        for (var i_1 = 0; i_1 < schemas.length; i_1++) {
                            // Add the field
                            fields.createFieldAsXml(schemas[i_1]).execute(onFieldCreated_1, true);
                        }
                    });
                }
            };
            // Parse the fields
            for (var i = 0; i < cfgFields.length; i++) {
                _loop_3(i);
            }
            // Wait for the requests to complete
            fields.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to create the lists
    var createLists = function (lists, cfgLists) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var _loop_4 = function (i) {
                var cfgList = cfgLists[i];
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        return "continue";
                    }
                }
                // See if this content type already exists
                var list = isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                if (list) {
                    // Log
                    console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                }
                else {
                    // Log
                    console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                    // Update the list name and remove spaces
                    var listInfo_1 = cfgList.ListInformation;
                    var listName_1 = listInfo_1.Title;
                    listInfo_1.Title = listName_1.replace(/ /g, "");
                    // Add the list
                    lists.add(listInfo_1)
                        .execute(function (list) {
                        // Restore the list name in the configuration
                        listInfo_1.Title = listName_1;
                        // See if the request was successful
                        if (list.existsFl) {
                            // See if we need to update the list
                            if (list.existsFl && list.Title != listName_1) {
                                // Update the list
                                list.update({ Title: listName_1 }).execute(function () {
                                    // Log
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                });
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                            }
                            // Trigger the event
                            cfgList.onCreated ? cfgList.onCreated(list) : null;
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][List] The list '" + listInfo_1.Title + "' failed to be created.");
                            console.log("[gd-sprest][List] Error: '" + list.response);
                        }
                    });
                }
            };
            // Parse the content types
            for (var i = 0; i < cfgLists.length; i++) {
                _loop_4(i);
            }
            // Wait for the requests to complete
            lists.done(function () {
                // Update the lists
                updateLists(cfgLists).then(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    };
    // Method to create the user custom actions
    var createUserCustomActions = function (customActions, cfgCustomActions) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != _1.SPCfgType.SiteUserCustomActions || _cfgType != _1.SPCfgType.WebUserCustomActions) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }
            // Ensure the lists exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            // Parse the custom actions
            for (var i = 0; i < cfgCustomActions.length; i++) {
                var cfgCustomAction = cfgCustomActions[i];
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != _targetName ||
                        cfgCustomAction.Title.toLowerCase() != _targetName) {
                        // Skip this custom action
                        continue;
                    }
                }
                // See if this custom action already exists
                if (isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                    // Log
                    console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                }
                else {
                    // Add the custom action
                    customActions.add(cfgCustomAction).execute(function (ca) {
                        // Ensure it exists
                        if (ca.existsFl) {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                            console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                        }
                    }, true);
                }
            }
            // Wait for the requests to complete
            customActions.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to create the list views
    var createViews = function (views, cfgViews) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the list views exist
            if (cfgViews == null || cfgViews.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            var _loop_5 = function (i) {
                var cfgView = cfgViews[i];
                // See if this view exists
                var view = isInCollection("Title", cfgView.ViewName, views.results);
                if (view) {
                    // Log
                    console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                }
                else {
                    // Add the view
                    views.add({
                        Title: cfgView.ViewName,
                        ViewQuery: cfgView.ViewQuery
                    }).execute(function (view) {
                        // Ensure it exists
                        if (view.existsFl) {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");
                            // Trigger the event
                            cfgView.onCreated ? cfgView.onCreated(view) : null;
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                            console.log("[gd-sprest][View] Error: " + view.response);
                        }
                    }, true);
                }
            };
            // Parse the views
            for (var i = 0; i < cfgViews.length; i++) {
                _loop_5(i);
            }
            // Wait for the requests to complete
            views.done(function () {
                // Update the views
                updateViews(views, cfgViews).then(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    };
    // Method to create the web parts
    var createWebParts = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var cfgWebParts = cfg.WebPartCfg;
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the root web
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var ctr = 0;
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    // See if the target name exists
                    if (_cfgType && _targetName) {
                        // Ensure it's for this list
                        if (cfgWebPart.FileName.toLowerCase() != _targetName) {
                            return "continue";
                        }
                    }
                    // The post execute method
                    var postExecute = function () {
                        // Increment the counter
                        if (++ctr >= cfgWebParts.length) {
                            // Resolve the promise
                            resolve();
                        }
                    };
                    // See if this webpart exists
                    var file = isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        // Trigger the event
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                        // Execute the post event
                        postExecute();
                    }
                    else {
                        // Trim the xml
                        var xml = cfgWebPart.XML.trim();
                        // Convert the string to an array buffer
                        var buffer = new ArrayBuffer(xml.length * 2);
                        var bufferView = new Uint16Array(buffer);
                        for (var j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }
                        // Create the webpart, but execute the requests one at a time
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute(function (file) {
                            // See if group exists
                            if (cfgWebPart.Group) {
                                // Set the target to the root web
                                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                                    .getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    // Update the item
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute(postExecute);
                                });
                            }
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                            // Trigger the event
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_6(i);
                }
            });
        });
    };
    // Method to see if an object exists in a collection
    var isInCollection = function (key, value, collection) {
        var valueLower = value.toLowerCase();
        // Parse the collection
        for (var i = 0; i < collection.length; i++) {
            var keyValue = collection[i][key];
            keyValue = keyValue ? keyValue.toLowerCase() : "";
            // See if the item exists
            if (valueLower == keyValue) {
                // Return true
                return collection[i];
            }
        }
        // Not in the collection
        return false;
    };
    // Method to remove the content type
    var removeContentTypes = function (contentTypes, cfgContentTypes) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the content types exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            var _loop_7 = function (i) {
                var cfgContentType = cfgContentTypes[i];
                // Get the field
                var ct = isInCollection("Name", cfgContentType.Name, contentTypes.results);
                if (ct) {
                    // Remove the field
                    ct.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                    }, true);
                }
            };
            // Parse the configuration
            for (var i = 0; i < cfgContentTypes.length; i++) {
                _loop_7(i);
            }
            // Wait for the requests to complete
            contentTypes.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to remove the fields
    var removeFields = function (fields, cfgFields) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            var _loop_8 = function (i) {
                var cfgField = cfgFields[i];
                // Get the field
                var field = isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Remove the field
                    field.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                    }, true);
                }
            };
            // Parse the configuration
            for (var i = 0; i < cfgFields.length; i++) {
                _loop_8(i);
            }
            // Wait for the requests to complete
            fields.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to remove the lists
    var removeLists = function (lists, cfgLists) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != _1.SPCfgType.Lists) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }
            // Ensure the lists exist
            if (cfgLists == null || cfgLists.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            var _loop_9 = function (i) {
                var cfgList = cfgLists[i];
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        return "continue";
                    }
                }
                // Get the list
                var list = isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                if (list) {
                    // Remove the list
                    list.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                    }, true);
                }
            };
            // Parse the configuration
            for (var i = 0; i < cfgLists.length; i++) {
                _loop_9(i);
            }
            // Wait for the requests to complete
            lists.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to remove the user custom actions
    var removeUserCustomActions = function (customActions, cfgCustomActions) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != _1.SPCfgType.SiteUserCustomActions || _cfgType != _1.SPCfgType.WebUserCustomActions) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }
            // Ensure the custom actions exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            var _loop_10 = function (i) {
                var cfgCustomAction = cfgCustomActions[i];
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != _targetName ||
                        cfgCustomAction.Title.toLowerCase() != _targetName) {
                        return "continue";
                    }
                }
                // Get the custom action
                var ca = isInCollection("Name", cfgCustomAction.Name, customActions.results);
                if (ca) {
                    // Remove the custom action
                    ca.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                    }, true);
                }
            };
            // Parse the configuration
            for (var i = 0; i < cfgCustomActions.length; i++) {
                _loop_10(i);
            }
            // Wait for the requests to complete
            customActions.done(function () {
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to remove the web parts
    var removeWebParts = function () {
        var cfgWebParts = cfg.WebPartCfg;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != _1.SPCfgType.WebParts) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }
            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            // Log
            console.log("[gd-sprest][WebPart] Removing the web parts.");
            // Get the root web
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                .RootFolder()
                .Files()
                .execute(function (files) {
                var _loop_11 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    // See if the target name exists
                    if (_cfgType && _targetName) {
                        // Ensure it's for this webpart
                        if (cfgWebPart.FileName.toLowerCase() != _targetName) {
                            return "continue";
                        }
                    }
                    // Get the file
                    var file = isInCollection("Name", cfgWebPart.FileName, files.results);
                    if (file) {
                        // Remove the file
                        file.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_11(i);
                }
                // Resolve the promise
                resolve();
            });
        });
    };
    // Method to update the lists
    var updateLists = function (cfgLists) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                // Get the list configuration
                var cfgList = cfgLists[idx];
                // See if the target name exists
                if (_targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        // Update the next list
                        request(idx + 1, resolve);
                        return;
                    }
                }
                // Ensure the configuration exists
                if (cfgList) {
                    // Get the web
                    (new lib_1.Web(webUrl))
                        .Lists(cfgList.ListInformation.Title)
                        .query({
                        Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                    })
                        .execute(function (list) {
                        // See if the title field is being updated
                        if (cfgList.TitleFieldDisplayName) {
                            // Parse the fields
                            for (var i = 0; i < list.Fields.results.length; i++) {
                                var field = list.Fields.results[i];
                                // See if this is the title field
                                if (field.InternalName == "Title") {
                                    // See if an update is required
                                    if (field.Title != cfgList.TitleFieldDisplayName) {
                                        // Update the field name
                                        field.update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                                            // Log
                                            console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                        });
                                    }
                                }
                            }
                        }
                        // Create the fields
                        createFields(list.Fields, cfgList.CustomFields).then(function () {
                            // Create the content types
                            createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                // Update the views
                                createViews(list.Views, cfgList.ViewInformation).then(function () {
                                    // Update the views
                                    createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions).then(function () {
                                        // Trigger the event
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        // Update the next list
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                        });
                    });
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            };
            // Execute the request
            request(0, resolve);
        });
    };
    // Method to update the views
    var updateViews = function (views, cfgViews) {
        var counter = 0;
        // Return a promise
        return new Promise(function (resolve, reject) {
            var _loop_12 = function (i) {
                var cfgView = cfgViews[i];
                // Get the view
                var view = views.getByTitle(cfgView.ViewName);
                // See if the view fields are defined
                if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                    // Log
                    console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");
                    // Clear the view fields
                    view.ViewFields().removeAllViewFields().execute(true);
                    // Parse the view fields
                    for (var i_2 = 0; i_2 < cfgView.ViewFields.length; i_2++) {
                        // Add the view field
                        view.ViewFields().addViewField(cfgView.ViewFields[i_2]).execute(true);
                    }
                }
                // See if we are updating the view properties
                if (cfgView.JSLink || cfgView.ViewQuery) {
                    var props = {};
                    // Log
                    console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");
                    // Set the properties
                    cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                    cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;
                    // Update the view
                    view.update(props).execute(true);
                }
                // Wait for the requests to complete
                view.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Log
                    console.log("[gd-sprest][View] The updates for the '" + cfgView.ViewName + "' view has completed.");
                    // Trigger the event
                    cfgView.onUpdated ? cfgView.onUpdated(view) : null;
                    // See if we are done
                    if (++counter >= cfgViews.length) {
                        // Resolve the promise
                        resolve();
                    }
                });
            };
            // Parse the views
            for (var i = 0; i < cfgViews.length; i++) {
                _loop_12(i);
            }
        });
    };
    // Method to uninstall the site components
    var uninstallSite = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Log
            console.log("[gd-sprest][uninstall] Loading the site information...");
            // Ensure site actions exist
            if (cfg.CustomActionCfg == null || cfg.CustomActionCfg.Site == null) {
                // Resolve the promise
                resolve();
                return;
            }
            // Get the site
            (new lib_1.Site(webUrl))
                .query({
                Expand: ["UserCustomActions"]
            })
                .execute(function (site) {
                // Remove the user custom actions
                removeUserCustomActions(site.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Site : []).then(function () {
                    // Resolve the promise
                    resolve(site);
                });
            });
        });
    };
    // Method to uninstall the web components
    var uninstallWeb = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Log
            console.log("[gd-sprest][uninstall] Loading the web information...");
            // Get the web
            (new lib_1.Web(webUrl))
                .query({
                Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
            })
                .execute(function (web) {
                // Remove the fields
                removeFields(web.Fields, cfg.Fields).then(function () {
                    // Remove the content types
                    removeContentTypes(web.ContentTypes, cfg.ContentTypes).then(function () {
                        // Remove the lists
                        removeLists(web.Lists, cfg.ListCfg).then(function () {
                            // Remove the web custom actions
                            removeUserCustomActions(web.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Web : null).then(function () {
                                // Resolve the promise
                                resolve();
                            });
                        });
                    });
                });
            });
        });
    };
    /**
     * Public Interface
     */
    return {
        // The configuration
        _configuration: cfg,
        // Method to install the configuration
        install: function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                var ctr = 0;
                var ctrExecutions = 0;
                // Log
                console.log("[gd-sprest] Loading the web information...");
                // Get the web
                var web = new lib_1.Web(webUrl);
                // The post execution method
                var postExecute = function () {
                    // See if we have completed the executions
                    if (++ctr >= ctrExecutions) {
                        // Resolve the promise
                        resolve();
                    }
                };
                // See if we are creating fields
                if (cfg.Fields && cfg.Fields.length > 0) {
                    // Increment the counter
                    ctrExecutions++;
                    // Log
                    console.log("[gd-sprest][Fields] Starting the requests.");
                    // Get the fields
                    web.Fields().execute(function (fields) {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // Create the fields
                            createFields(_1.parse(fields.stringify()), cfg.Fields).then(function () {
                                // Log
                                console.log("[gd-sprest][Fields] Completed the requests.");
                                // Execute the post execute method
                                postExecute();
                                // Resolve the promise
                                resolve();
                            });
                        });
                    });
                }
                // See if we are creating the content types
                if (cfg.ContentTypes && cfg.ContentTypes.length > 0) {
                    // Increment the counter
                    ctrExecutions++;
                    // Log
                    console.log("[gd-sprest][Content Types] Starting the requests.");
                    // Get the content types
                    web.ContentTypes().execute(function (contentTypes) {
                        // Create the content types
                        createContentTypes(_1.parse(contentTypes.stringify()), cfg.ContentTypes).then(function () {
                            // Log
                            console.log("[gd-sprest][Content Types] Completed the requests.");
                            // Execute the post execute method
                            postExecute();
                        });
                    }, true);
                }
                // See if we are creating the lists
                if (cfg.ListCfg && cfg.ListCfg.length) {
                    // Increment the counter
                    ctrExecutions++;
                    // Log
                    console.log("[gd-sprest][Lists] Starting the requests.");
                    // Get the lists
                    web.Lists().execute(function (lists) {
                        // Create the lists
                        createLists(_1.parse(lists.stringify()), cfg.ListCfg).then(function () {
                            // Log
                            console.log("[gd-sprest][Lists] Completed the requests.");
                            // Execute the post execute method
                            postExecute();
                        });
                    }, true);
                }
                // See if we are creating the webparts
                if (cfg.WebPartCfg && cfg.WebPartCfg.length > 0) {
                    // Increment the counter
                    ctrExecutions++;
                    // Log
                    console.log("[gd-sprest][WebParts] Starting the requests.");
                    // Create the webparts
                    createWebParts().then(function () {
                        // Log
                        console.log("[gd-sprest][WebParts] Completed the requests.");
                        // Execute the post execute method
                        postExecute();
                    });
                }
                // See if we are creating custom actions
                if (cfg.CustomActionCfg) {
                    // See if we are targeting the site collection
                    if (cfg.CustomActionCfg.Site) {
                        // Increment the counter
                        ctrExecutions++;
                        // Log
                        console.log("[gd-sprest][Site Custom Actions] Starting the requests.");
                        // Get the site
                        (new lib_1.Site(webUrl))
                            .UserCustomActions().execute(function (customActions) {
                            // Create the user custom actions
                            createUserCustomActions(_1.parse(customActions.stringify()), cfg.CustomActionCfg.Site).then(function () {
                                // Log
                                console.log("[gd-sprest][Site Custom Actions] Completed the requests.");
                                // Execute the post execute method
                                postExecute();
                            });
                        });
                    }
                    // See if we are targeting the web
                    if (cfg.CustomActionCfg.Web) {
                        // Increment the counter
                        ctrExecutions++;
                        // Log
                        console.log("[gd-sprest][Web Custom Actions] Starting the requests.");
                        // Get the user custom actions
                        web.UserCustomActions().execute(function (customActions) {
                            // Create the user custom actions
                            createUserCustomActions(_1.parse(customActions.stringify()), cfg.CustomActionCfg.Web).then(function () {
                                // Log
                                console.log("[gd-sprest][Web Custom Actions] Completed the requests.");
                                // Execute the post execute method
                                postExecute();
                            });
                        });
                    }
                }
            });
        },
        // Method to uninstall the configuration
        uninstall: function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Uninstall the web components
                uninstallWeb().then(function () {
                    // Uninstall the site components
                    uninstallSite().then(function () {
                        // Remove the webparts
                        removeWebParts().then(function () {
                            // Log
                            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                            // Resolve the promise
                            resolve();
                        });
                    });
                });
            });
        }
    };
};
//# sourceMappingURL=spCfg.js.map