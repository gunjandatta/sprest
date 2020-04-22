"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var __1 = require("..");
var _1 = require(".");
__export(require("./spCfgTypes"));
/**
 * SharePoint Configuration
 */
exports.SPConfig = function (cfg, webUrl) {
    // The selected configuration type to install
    var _cfgType;
    // The request digest
    var _requestDigest = null;
    // The target name to install/uninstall
    var _targetName;
    /**
     * Methods
     */
    // Method to create the content types
    var createContentTypes = function (contentTypes, cfgContentTypes, list) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure fields exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }
            // Method to get the parent content type
            var getParentCT = function (ctName, url) {
                // Return a promise
                return new Promise(function (resolve, reject) {
                    // Get the web containing the parent content type
                    lib_1.Web(url)
                        // Get the content types
                        .ContentTypes()
                        // Filter for the parent name
                        .query({
                        Filter: "Name eq '" + ctName + "'"
                    })
                        // Execute the request
                        .execute(function (cts) {
                        // See if the parent exists
                        if (cts.results[0]) {
                            // Resolve the promise
                            resolve({ Id: cts.results[0].Id.StringValue, Url: url });
                        }
                        // Else, ensure this isn't the root web
                        else if (url != lib_1.ContextInfo.siteServerRelativeUrl) {
                            // Check the root web for the parent content type
                            getParentCT(ctName, lib_1.ContextInfo.siteServerRelativeUrl).then(resolve, reject);
                        }
                        else {
                            // Reject the promise
                            reject();
                        }
                    }, reject);
                });
            };
            // Parse the configuration
            _1.Executor(cfgContentTypes, function (cfg) {
                // Return a promise
                return new Promise(function (resolve, reject) {
                    // See if this content type already exists
                    var ct = isInCollection("Name", cfg.Name, contentTypes.results);
                    if (ct) {
                        // Log
                        console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The content type '" + cfg.Name + "' already exists.");
                        // Update the configuration
                        cfg.ContentType = ct;
                        // Resolve the promise and return
                        resolve(cfg);
                        return;
                    }
                    // Log
                    console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] Creating the '" + cfg.Name + "' content type.");
                    // See if the parent name exists
                    if (cfg.ParentName) {
                        getParentCT(cfg.ParentName, cfg.ParentWebUrl || webUrl).then(
                        // Success
                        function (parentInfo) {
                            // Add the content type
                            _1.createContentType({
                                Description: cfg.Description,
                                Group: cfg.Group,
                                Name: cfg.Name
                            }, parentInfo, webUrl, list ? list.Title : null).then(
                            // Success
                            function (ct) {
                                // Log
                                console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The content type '" + cfg.Name + "' was created successfully.");
                                // Update the configuration
                                cfg.ContentType = ct;
                                // Trigger the event
                                cfg.onCreated ? cfg.onCreated(ct, list) : null;
                                // Resolve the promise
                                resolve(cfg);
                            }, 
                            // Error
                            function (error) {
                                // Log
                                console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The content type '" + cfg.Name + "' failed to be created.", error);
                                // Reject the promise
                                reject(error);
                            });
                        }, 
                        // Error
                        function () {
                            // Log
                            console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The parent content type '" + cfg.ParentName + "' was not found.");
                            // Reject the promise
                            reject(ct.response);
                        });
                    }
                    else {
                        // Create the content type
                        contentTypes.add({
                            Description: cfg.Description,
                            Group: cfg.Group,
                            Name: cfg.Name,
                            Id: {
                                __metadata: {
                                    type: "SP.ContentTypeId"
                                },
                                StringValue: cfg.Id || "0x0100" + lib_1.ContextInfo.generateGUID().replace(/-/g, "")
                            }
                        }).execute(
                        // Success
                        function (ct) {
                            // Log
                            console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The content type '" + cfg.Name + "' was created successfully.");
                            // Update the configuration
                            cfg.ContentType = ct;
                            // Trigger the event
                            cfg.onCreated ? cfg.onCreated(ct, list) : null;
                            // Resolve the promise
                            resolve(cfg);
                        }, 
                        // Error
                        function (error) {
                            // Log
                            console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] The content type '" + cfg.Name + "' failed to be created.");
                            console.error("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] Error: " + error.response);
                            // Reject the promise
                            reject(error.response);
                        });
                    }
                });
            }).then(function () {
                // Parse the configuration
                _1.Executor(cfgContentTypes, function (cfgContentType) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        var cfgUpdate = {};
                        var updateFl = false;
                        // Ensure the content type exists
                        if (cfgContentType.ContentType == null) {
                            // Skip this content type
                            resolve();
                            return;
                        }
                        // Log
                        console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type] Updating the field references for: " + cfgContentType.Name);
                        // Create the field refs
                        _1.setContentTypeFields({
                            fields: cfgContentType.FieldRefs,
                            id: cfgContentType.ContentType.Id.StringValue,
                            listName: list ? list.Title : null,
                            webUrl: webUrl
                        }).then(function () {
                            /**
                             * See if we need to update the properties
                             */
                            // Description
                            if (cfgContentType.Description != null && cfgContentType.ContentType.Description != cfgContentType.Description) {
                                // Update the configuration
                                cfgUpdate.Description = cfgContentType.Description;
                                // Set the flag
                                updateFl = true;
                            }
                            // Group
                            if (cfgContentType.Group != null && cfgContentType.ContentType.Group != cfgContentType.Group) {
                                // Update the configuration
                                cfgUpdate.Group = cfgContentType.Group;
                                // Set the flag
                                updateFl = true;
                            }
                            // JSLink
                            if (cfgContentType.JSLink != null && cfgContentType.ContentType.JSLink != cfgContentType.JSLink) {
                                // Update the configuration
                                cfgUpdate.JSLink = cfgContentType.JSLink;
                                // Set the flag
                                updateFl = true;
                            }
                            // Name
                            if (cfgContentType.Name != null && cfgContentType.ContentType.Name != cfgContentType.Name) {
                                // Update the configuration
                                cfgUpdate.Name = cfgContentType.Name;
                                // Set the flag
                                updateFl = true;
                            }
                            // See if an update is needed
                            if (updateFl) {
                                // Log
                                console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type][" + cfgContentType.ContentType.Name + "] Updating the content type.");
                                // Update the content type
                                cfgContentType.ContentType.update(cfgUpdate).execute(function () {
                                    // Log
                                    console.log("[gd-sprest]" + (list ? "[" + list.Title + " List]" : "") + "[Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                                    // Trigger the event
                                    cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                                    // Resolve this request
                                    resolve();
                                }, reject);
                            }
                            else {
                                // Trigger the event
                                cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                                // Resolve this request
                                resolve();
                            }
                        }, reject);
                    });
                }).then(resolve);
            }, reject);
        });
    };
    // Method to create the fields`
    var createFields = function (fields, cfgFields, list) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }
            // Parse the configuration
            _1.Executor(cfgFields, function (cfg) {
                return new Promise(function (resolve, reject) {
                    // See if this field already exists
                    var field = isInCollection("InternalName", cfg.name, fields.results);
                    if (field) {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + cfg.name + "' already exists.");
                        // Trigger the event
                        cfg.onUpdated ? cfg.onUpdated(field, list) : null;
                        // Resolve the promise
                        resolve();
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Field] Creating the '" + cfg.name + "' field.");
                        // See if this is an associated lookup field
                        var cfgLookup = cfg;
                        if (cfgLookup.type == _1.SPCfgFieldType.Lookup && cfgLookup.fieldRef) {
                            // Get the field reference
                            var fieldRef = isInCollection("InternalName", cfg.name, fields.results);
                            if (fieldRef) {
                                // Update the value to be the guid
                                cfgLookup.fieldRef = fieldRef.Id;
                            }
                        }
                        // Compute the schema xml
                        _1.FieldSchemaXML(cfg).then(function (response) {
                            var schemas = typeof (response) === "string" ? [response] : response;
                            // Parse the fields to add
                            for (var i = 0; i < schemas.length; i++) {
                                // Add the field
                                fields.createFieldAsXml(schemas[i]).execute(function (field) {
                                    // See if it was successful
                                    if (field.InternalName) {
                                        // Log
                                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                                        // Trigger the event
                                        cfg.onCreated ? cfg.onCreated(field, list) : null;
                                        // Resolve the promise
                                        resolve();
                                    }
                                    else {
                                        // Log
                                        console.log("[gd-sprest][Field] The field '" + cfg.name + "' failed to be created.");
                                        console.error("[gd-sprest][Field] Error: " + field.response);
                                        // Reject the promise
                                        reject();
                                    }
                                });
                            }
                        });
                    }
                });
            }).then(resolve);
        });
    };
    // Method to create the lists
    var createLists = function (lists, cfgLists) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Execute code against each list configuration
            _1.Executor(cfgLists, function (cfgList) {
                // Return a promise
                return new Promise(function (resolve) {
                    // See if the target name exists and matches this list
                    if (_cfgType && _targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                            // Do nothing
                            resolve();
                            return;
                        }
                    }
                    // See if this list already exists
                    var list = isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        // Log
                        console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                        // Resolve the promise and do nothing
                        resolve();
                        return;
                    }
                    // Log
                    console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                    // Update the list name and remove spaces
                    var listInfo = cfgList.ListInformation;
                    var listName = listInfo.Title;
                    listInfo.Title = listName.replace(/ /g, "");
                    // Add the list
                    lists.add(listInfo)
                        // Execute the request
                        .execute(function (list) {
                        // Restore the list name in the configuration
                        listInfo.Title = listName;
                        // See if the request was successful
                        if (list.Id) {
                            // See if we need to update the list
                            if (list.Title != listName) {
                                // Update the list
                                list.update({ Title: listName }).execute(function () {
                                    // Log
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    // Resolve the promise
                                    resolve();
                                });
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                // Resolve the promise
                                resolve();
                            }
                            // Trigger the event
                            cfgList.onCreated ? cfgList.onCreated(list) : null;
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][List] The list '" + listInfo.Title + "' failed to be created.");
                            console.log("[gd-sprest][List] Error: '" + list.response);
                            // Resolve the promise
                            resolve();
                        }
                    }, reject);
                });
            }).then(function () {
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
            // Parse the configuration
            _1.Executor(cfgCustomActions, function (cfg) {
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfg.Name.toLowerCase() != _targetName ||
                        cfg.Title.toLowerCase() != _targetName) {
                        // Skip this custom action
                        return;
                    }
                }
                // See if this custom action already exists
                if (isInCollection("Name", cfg.Name, customActions.results)) {
                    // Log
                    console.log("[gd-sprest][Custom Action] The custom action '" + cfg.Name + "' already exists.");
                }
                else {
                    // See if rights exist
                    if (cfg.Rights) {
                        // Update the value
                        cfg.Rights = updateBasePermissions(cfg.Rights);
                    }
                    // Add the custom action
                    customActions.add(cfg).execute(function (ca) {
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
                    }, reject, true);
                }
            }).then(resolve);
        });
    };
    // Method to create the list views
    var createViews = function (list, views, cfgViews) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the list views exist
            if (cfgViews == null || cfgViews.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }
            // Parse the configuration
            _1.Executor(cfgViews, function (cfg) {
                // See if this view exists
                var view = isInCollection("Title", cfg.ViewName, views.results);
                if (view) {
                    // Log
                    console.log("[gd-sprest][View] The view '" + cfg.ViewName + "' already exists.");
                }
                else {
                    // Add the view
                    views.add({
                        Title: cfg.ViewName,
                        ViewQuery: cfg.ViewQuery
                    }).execute(function (view) {
                        // Ensure it exists
                        if (view.existsFl) {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfg.ViewName + "' was created successfully.");
                            // Trigger the event
                            cfg.onCreated ? cfg.onCreated(view, list) : null;
                        }
                        else {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfg.ViewName + "' failed to be created.");
                            console.log("[gd-sprest][View] Error: " + view.response);
                        }
                    }, reject, true);
                }
            }).then(function () {
                // Update the views
                updateViews(list, views, cfgViews).then(function () {
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
            // Ensure fields exist
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the web
            lib_1.Web(webUrl, { requestDigest: _requestDigest })
                // Get the web part catalog
                .getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                // Get the root folder
                .RootFolder()
                // Expand the files and items
                .query({
                Expand: ["Files"]
            })
                // Execute the request
                .execute(function (folder) {
                var ctr = 0;
                var _loop_1 = function (i) {
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
                    if (file.Name) {
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
                        folder.Files.add(cfgWebPart.FileName, true, buffer).execute(
                        // Success
                        function (file) {
                            // See if group exists
                            if (cfgWebPart.Group) {
                                // Set the target to the root web
                                lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl)
                                    // Get the web part catalog
                                    .getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                                    // Get the Items
                                    .Items()
                                    // Query for this webpart
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    // Execute the request
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
                        }, 
                        // Error
                        function () {
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file upload failed.");
                            // Skip this webpart
                            resolve();
                        });
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_1(i);
                }
            }, reject);
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
            // Parse the configuration
            _1.Executor(cfgContentTypes, function (cfg) {
                // Get the field
                var ct = isInCollection("Name", cfg.Name, contentTypes.results);
                if (ct) {
                    // Remove the field
                    ct.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Content Type] The content type '" + ct.Name + "' was removed.");
                    }, reject, true);
                }
            }).then(resolve);
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
            // Parse the configuration
            _1.Executor(cfgFields, function (cfg) {
                // Get the field
                var field = isInCollection("InternalName", cfg.name, fields.results);
                if (field) {
                    // Remove the field
                    field.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                    }, reject, true);
                }
            }).then(resolve);
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
            // Parse the configuration
            _1.Executor(cfgLists, function (cfg) {
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this list
                    if (cfg.ListInformation.Title.toLowerCase() != _targetName) {
                        // Skip this list
                        return;
                    }
                }
                // Get the list
                var list = isInCollection("Title", cfg.ListInformation.Title, lists.results);
                if (list) {
                    // Remove the list
                    list.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                    }, reject, true);
                }
            }).then(resolve);
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
            // Parse the configuration
            _1.Executor(cfgCustomActions, function (cfg) {
                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfg.Name.toLowerCase() != _targetName ||
                        cfg.Title.toLowerCase() != _targetName) {
                        // Skip this custom action
                        return;
                    }
                }
                // Get the custom action
                var ca = isInCollection("Name", cfg.Name, customActions.results);
                if (ca) {
                    // Remove the custom action
                    ca.delete().execute(function () {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                    }, reject, true);
                }
            }).then(resolve);
        });
    };
    // Method to remove the web parts
    var removeWebParts = function (site) {
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
            // Get the webpart gallery from the root web
            site.RootWeb().getCatalog(__1.SPTypes.ListTemplateType.WebPartCatalog)
                // Get the root folder
                .RootFolder()
                // Expand the files
                .Files()
                // Execute the request
                .execute(function (files) {
                var _loop_2 = function (i) {
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
                    _loop_2(i);
                }
                // Resolve the promise
                resolve();
            }, reject);
        });
    };
    // Method to get the web information
    var setRequestDigest = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            if (webUrl) {
                // Get the web context information
                lib_1.ContextInfo.getWeb(webUrl).execute(function (webInfo) {
                    _requestDigest = webInfo.GetContextWebInformation.FormDigestValue;
                    // Resolve the promise
                    resolve();
                }, reject);
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to update the base permissions
    var updateBasePermissions = function (values) {
        var high = values.High;
        var low = values.Low;
        // See if this is an array
        for (var i = 0; i < values["length"]; i++) {
            var value = values[i];
            // See if this is the full mask
            if (value == 65) {
                // Set the values
                low = 65535;
                high = 32767;
                // Break from the loop
                break;
            }
            // Else, see if it's empty
            else if (value == 0) {
                // Clear the values
                low = 0;
                high = 0;
            }
            // Else, update the base permission
            else {
                var bit = value - 1;
                var bitValue = 1;
                // Validate the bit
                if (bit < 0) {
                    continue;
                }
                // See if it's a low permission
                if (bit < 32) {
                    // Compute the value
                    bitValue = bitValue << bit;
                    // Set the low value
                    low |= bitValue;
                }
                // Else, it's a high permission
                else {
                    // Compute the value
                    bitValue = bitValue << (bit - 32);
                    // Set the high value
                    high |= bitValue;
                }
            }
        }
        // Return the base permission
        return {
            Low: low.toString(),
            High: high.toString()
        };
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
                    lib_1.Web(webUrl, { requestDigest: _requestDigest })
                        // Get the list
                        .Lists(cfgList.ListInformation.Title)
                        // Expand the content types, fields and views
                        .query({
                        Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                    })
                        // Execute the request
                        .execute(function (list) {
                        // Update the title field
                        updateListTitleField(list, cfgList).then(function () {
                            // Create the fields
                            createFields(list.Fields, cfgList.CustomFields, list).then(function () {
                                // Create the content types
                                createContentTypes(list.ContentTypes, cfgList.ContentTypes, list).then(function () {
                                    // Update the views
                                    createViews(list, list.Views, cfgList.ViewInformation).then(function () {
                                        // Update the views
                                        createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions).then(function () {
                                            // Trigger the event
                                            cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                            // Update the next list
                                            request(idx + 1, resolve);
                                        }, reject);
                                    }, reject);
                                }, reject);
                            }, reject);
                        }, reject);
                    }, reject);
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
    // Method to update the list title field
    var updateListTitleField = function (list, cfgList) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the title field is being updated
            if (cfgList.TitleFieldDisplayName) {
                // Update the field name
                list.Fields.getByInternalNameOrTitle("Title").update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                    // Log
                    console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                    // Resolve the promise
                    resolve();
                }, reject);
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to update the views
    var updateViews = function (list, views, cfgViews) {
        // Return a promise
        return new Promise(function (resolve) {
            // Parse the configuration
            _1.Executor(cfgViews, function (cfg) {
                // Return a promise
                return new Promise(function (resolve) {
                    // Get the view
                    var view = views.getByTitle(cfg.ViewName);
                    // See if the view fields are defined
                    if (cfg.ViewFields && cfg.ViewFields.length > 0) {
                        // Log
                        console.log("[gd-sprest][View] Updating the view fields for the '" + cfg.ViewName + "' view.");
                        // Clear the view fields
                        view.ViewFields().removeAllViewFields().execute(true);
                        // Parse the view fields
                        for (var i = 0; i < cfg.ViewFields.length; i++) {
                            // Add the view field
                            view.ViewFields().addViewField(cfg.ViewFields[i]).execute(true);
                        }
                    }
                    // See if we are updating the view properties
                    if (cfg.JSLink || cfg.ViewQuery) {
                        var props = {};
                        // Log
                        console.log("[gd-sprest][View] Updating the view properties for the '" + cfg.ViewName + "' view.");
                        // Set the properties
                        cfg.JSLink ? props["JSLink"] = cfg.JSLink : null;
                        cfg.ViewQuery ? props["ViewQuery"] = cfg.ViewQuery : null;
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
                        console.log("[gd-sprest][View] The updates for the '" + cfg.ViewName + "' view has completed.");
                        // Trigger the event
                        cfg.onUpdated ? cfg.onUpdated(view, list) : null;
                        // Resolve the promise
                        resolve();
                    });
                });
            }).then(resolve);
        });
    };
    // Method to uninstall the site components
    var uninstallSite = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure we need to complete this request
            if ((cfg.CustomActionCfg != null && cfg.CustomActionCfg.Site != null) || cfg.WebPartCfg != null) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the site information...");
                // Get the site
                lib_1.Site(webUrl, { requestDigest: _requestDigest })
                    // Expand the user custom actions
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    // Execute the request
                    .execute(function (site) {
                    // Remove the user custom actions
                    removeUserCustomActions(site.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Site : []).then(function () {
                        // Remove the webpart
                        removeWebParts(site).then(function () {
                            // Resolve the promise
                            resolve(site);
                        }, reject);
                    });
                }, reject);
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to uninstall the web components
    var uninstallWeb = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var Expand = [];
            // Log
            console.log("[gd-sprest][uninstall] Loading the web information...");
            // Set the query
            if (cfg.ContentTypes) {
                Expand.push("ContentTypes");
            }
            if (cfg.CustomActionCfg) {
                Expand.push("UserCustomActions");
            }
            if (cfg.Fields) {
                Expand.push("Fields");
            }
            if (cfg.ListCfg) {
                Expand.push("Lists");
            }
            // Query the web
            lib_1.Web(webUrl, { requestDigest: _requestDigest }).query({ Expand: Expand })
                // Execute the request
                .execute(function (web) {
                // Remove the web custom actions
                removeUserCustomActions(web.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Web : null).then(function () {
                    // Remove the lists
                    removeLists(web.Lists, cfg.ListCfg).then(function () {
                        // Remove the content types
                        removeContentTypes(web.ContentTypes, cfg.ContentTypes).then(function () {
                            // Remove the fields
                            removeFields(web.Fields, cfg.Fields).then(function () {
                                // Resolve the promise
                                resolve();
                            }, reject);
                        }, reject);
                    }, reject);
                }, reject);
            }, reject);
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
                // Set the request digest
                setRequestDigest().then(function () {
                    // Log
                    console.log("[gd-sprest] Installing the web assets...");
                    // Get the web
                    var web = lib_1.Web(webUrl, { requestDigest: _requestDigest });
                    // Create the site fields
                    var createSiteFields = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are creating fields
                            if (cfg.Fields && cfg.Fields.length > 0) {
                                // Log
                                console.log("[gd-sprest][Fields] Starting the requests.");
                                // Get the fields
                                web.Fields().execute(function (fields) {
                                    // Create the fields
                                    createFields(fields, cfg.Fields).then(function () {
                                        // Log
                                        console.log("[gd-sprest][Fields] Completed the requests.");
                                        // Resolve the promise
                                        resolve();
                                    }, reject);
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the site content types
                    var createSiteContentTypes = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are creating the content types
                            if (cfg.ContentTypes && cfg.ContentTypes.length > 0) {
                                // Log
                                console.log("[gd-sprest][Content Types] Starting the requests.");
                                // Get the content types
                                web.ContentTypes().execute(function (contentTypes) {
                                    // Create the content types
                                    createContentTypes(contentTypes, cfg.ContentTypes).then(function () {
                                        // Log
                                        console.log("[gd-sprest][Content Types] Completed the requests.");
                                        // Resolve the promise
                                        resolve();
                                    }, reject);
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the site lists
                    var createSiteLists = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are creating the lists
                            if (cfg.ListCfg && cfg.ListCfg.length) {
                                // Log
                                console.log("[gd-sprest][Lists] Starting the requests.");
                                // Get the lists
                                web.Lists().execute(function (lists) {
                                    // Create the lists
                                    createLists(lists, cfg.ListCfg).then(function () {
                                        // Log
                                        console.log("[gd-sprest][Lists] Completed the requests.");
                                        // Resolve the promise
                                        resolve();
                                    }, reject);
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the site webparts
                    var createSiteWebParts = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are creating the webparts
                            if (cfg.WebPartCfg && cfg.WebPartCfg.length > 0) {
                                // Log
                                console.log("[gd-sprest][WebParts] Starting the requests.");
                                // Create the webparts
                                createWebParts().then(function () {
                                    // Log
                                    console.log("[gd-sprest][WebParts] Completed the requests.");
                                    // Resolve the promise
                                    resolve();
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the custom actions
                    var createSiteCollectionCustomActions = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are targeting the site collection
                            if (cfg.CustomActionCfg && cfg.CustomActionCfg.Site) {
                                // Log
                                console.log("[gd-sprest][Site Custom Actions] Starting the requests.");
                                // Get the site
                                lib_1.Site(webUrl, { requestDigest: _requestDigest })
                                    // Get the user custom actions
                                    .UserCustomActions().execute(function (customActions) {
                                    // Create the user custom actions
                                    createUserCustomActions(customActions, cfg.CustomActionCfg.Site).then(function () {
                                        // Log
                                        console.log("[gd-sprest][Site Custom Actions] Completed the requests.");
                                        // Resolve the promise
                                        resolve();
                                    }, reject);
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the custom actions
                    var createSiteCustomActions = function () {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if we are targeting the web
                            if (cfg.CustomActionCfg && cfg.CustomActionCfg.Web) {
                                // Log
                                console.log("[gd-sprest][Web Custom Actions] Starting the requests.");
                                // Get the user custom actions
                                web.UserCustomActions().execute(function (customActions) {
                                    // Create the user custom actions
                                    createUserCustomActions(customActions, cfg.CustomActionCfg.Web).then(function () {
                                        // Log
                                        console.log("[gd-sprest][Web Custom Actions] Completed the requests.");
                                        // Resolve the promise
                                        resolve();
                                    });
                                }, reject);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    };
                    // Create the site fields
                    createSiteFields().then(function () {
                        // Create the site content types
                        createSiteContentTypes().then(function () {
                            // Create the site lists
                            createSiteLists().then(function () {
                                // Create the webparts
                                createSiteWebParts().then(function () {
                                    // Create the site collection custom actions
                                    createSiteCollectionCustomActions().then(function () {
                                        // Create the site custom actions
                                        createSiteCustomActions().then(function () {
                                            // Log
                                            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                                            // Resolve the request
                                            resolve();
                                        }, reject);
                                    }, reject);
                                }, reject);
                            }, reject);
                        }, reject);
                    }, reject);
                }, reject);
            });
        },
        // Method to uninstall the configuration
        uninstall: function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Set the request digest
                setRequestDigest().then(function () {
                    // Uninstall the web components
                    uninstallWeb().then(function () {
                        // Uninstall the site components
                        uninstallSite().then(function () {
                            // Log
                            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                            // Resolve the promise
                            resolve();
                        }, reject);
                    }, reject);
                });
            });
        }
    };
};
