"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./spCfgTypes"));
var lib_1 = require("../lib");
var fieldSchemaXML_1 = require("./fieldSchemaXML");
var spCfgTypes_1 = require("./spCfgTypes");
/**
 * SharePoint Configuration
 */
var _SPConfig = /** @class */ (function () {
    /**
     * Constructor
     */
    function _SPConfig(cfg, webUrl) {
        var _this = this;
        // Method to install by configuration type
        this.installByType = function (cfgType, callback, targetName) { return _this.install(callback, cfgType, targetName); };
        // Method to uninstall by the configuration type
        this.uninstallByType = function (cfgType, callback, targetName) { return _this.uninstall(callback, cfgType, targetName); };
        /**
         * Methods
         */
        // Method to create the content types
        this.createContentTypes = function (contentTypes, cfgContentTypes) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the content types exist
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                var _loop_1 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    // See if this content type already exists
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
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
                            (new lib_1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
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
        this.createFields = function (fields, cfgFields) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the fields exist
                if (cfgFields == null || cfgFields.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_3 = function (i) {
                    var cfgField = cfgFields[i];
                    // See if this field already exists
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                        // Trigger the event
                        cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                        //
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
                        fieldSchemaXML_1.FieldSchemaXML.generate(cfgField).then(function (response) {
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
        this.createLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != spCfgTypes_1.SPCfgType.Lists) {
                        // Resolve the promise and return
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgLists == null || cfgLists.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_4 = function (i) {
                    var cfgList = cfgLists[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this content type already exists
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
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
                    _this.updateLists(cfgLists).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != spCfgTypes_1.SPCfgType.SiteUserCustomActions || _this._cfgType != spCfgTypes_1.SPCfgType.WebUserCustomActions) {
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
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            // Skip this custom action
                            continue;
                        }
                    }
                    // See if this custom action already exists
                    if (_this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
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
        this.createViews = function (views, cfgViews) {
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
                    var view = _this.isInCollection("Title", cfgView.ViewName, views.results);
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
                    _this.updateViews(views, cfgViews).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the web parts
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != spCfgTypes_1.SPCfgType.WebParts) {
                    return;
                }
            }
            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                return;
            }
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the root web
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .Lists("Web Part Gallery")
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this webpart exists
                    var file = _this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        // Trigger the event
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
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
                                    .Lists("Web Part Gallery")
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    // Update the item
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute();
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
        };
        // Method to install the site components
        this.installSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Log
                console.log("[gd-sprest] Loading the site information...");
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Install the user custom actions
                    _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to install the web components
        this.installWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Create the fields
                    _this.createFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Create the content types
                        _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Create the lists
                            _this.createLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Create the web custom actions
                                _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Method to see if an object exists in a collection
        this.isInCollection = function (key, value, collection) {
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
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
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
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
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
        this.removeFields = function (fields, cfgFields) {
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
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
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
        this.removeLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != spCfgTypes_1.SPCfgType.Lists) {
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
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the list
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
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
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != spCfgTypes_1.SPCfgType.SiteUserCustomActions || _this._cfgType != spCfgTypes_1.SPCfgType.WebUserCustomActions) {
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
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the custom action
                    var ca = _this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
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
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != spCfgTypes_1.SPCfgType.WebParts) {
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
                console.log("[gd-sprest][WebPart] Creating the web parts.");
                // Get the root web
                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                    .Lists("Web Part Gallery")
                    .RootFolder()
                    .Files()
                    .execute(function (files) {
                    var _loop_11 = function (i) {
                        var cfgWebPart = cfgWebParts[i];
                        // See if the target name exists
                        if (_this._cfgType && _this._targetName) {
                            // Ensure it's for this list
                            if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                                return "continue";
                            }
                        }
                        // Get the file
                        var file = _this.isInCollection("Name", cfgWebPart.FileName, files.results);
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
        this.updateLists = function (cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                var request = function (idx, resolve) {
                    // Get the list configuration
                    var cfgList = cfgLists[idx];
                    // See if the target name exists
                    if (_this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            // Update the next list
                            request(idx + 1, resolve);
                            return;
                        }
                    }
                    // Ensure the configuration exists
                    if (cfgList) {
                        // Get the web
                        (new lib_1.Web(_this._webUrl))
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
                            // Update the list fields
                            _this.createFields(list.Fields, cfgList.CustomFields).then(function () {
                                // Update the content types
                                _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                    // Update the views
                                    _this.createViews(list.Views, cfgList.ViewInformation).then(function () {
                                        // Trigger the event
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        // Update the next list
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                            // Update the user custom actions
                            _this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
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
        this.updateViews = function (views, cfgViews) {
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
        this.uninstallSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the site information...");
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Remove the user custom actions
                    _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to uninstall the web components
        this.uninstallWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Remove the fields
                    _this.removeFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Remove the content types
                        _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Remove the lists
                            _this.removeLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Remove the web custom actions
                                _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Save the configuration
        this._configuration = cfg;
        // Save the target web url
        this._webUrl = webUrl;
    }
    /**
     * Public Methods
     */
    // Method to install the configuration
    _SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        // Install the web components
        this.installWeb().then(function () {
            // Install the site components
            _this.installSite().then(function () {
                // Create the webparts
                _this.createWebParts();
                // Log
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                // See if the callback exists
                if (callback && typeof (callback) === "function") {
                    // Execute the callback
                    callback();
                }
            });
        });
    };
    // Method to install a specific list
    _SPConfig.prototype.installList = function (listName, callback) { this.installByType(spCfgTypes_1.SPCfgType.Lists, callback, listName); };
    // Method to install a specific site custom action
    _SPConfig.prototype.installSiteCustomAction = function (caName, callback) { this.installByType(spCfgTypes_1.SPCfgType.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    _SPConfig.prototype.installWebCustomAction = function (caName, callback) { this.installByType(spCfgTypes_1.SPCfgType.WebUserCustomActions, callback, caName); };
    // Method to uninstall the configuration
    _SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName;
        // Uninstall the web components
        this.uninstallWeb().then(function () {
            // Uninstall the site components
            _this.uninstallSite().then(function () {
                // Remove the webparts
                _this.removeWebParts().then(function () {
                    // Log
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                    // See if the callback exists
                    if (callback && typeof (callback) === "function") {
                        // Execute the callback
                        callback();
                    }
                });
            });
        });
    };
    // Method to install a specific list
    _SPConfig.prototype.uninstallList = function (listName, callback) { this.uninstallByType(spCfgTypes_1.SPCfgType.Lists, callback, listName); };
    // Method to install a specific site custom action
    _SPConfig.prototype.uninstallSiteCustomAction = function (caName, callback) { this.uninstallByType(spCfgTypes_1.SPCfgType.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    _SPConfig.prototype.uninstallWebCustomAction = function (caName, callback) { this.uninstallByType(spCfgTypes_1.SPCfgType.WebUserCustomActions, callback, caName); };
    return _SPConfig;
}());
;
exports.SPConfig = _SPConfig;
//# sourceMappingURL=spCfg.js.map