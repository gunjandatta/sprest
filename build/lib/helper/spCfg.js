"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
var types_1 = require("../../types");
var __1 = require("..");
/*********************************************************************************************************************************/
// SharePoint Configuration
/*********************************************************************************************************************************/
var SPConfig = (function () {
    /**
     * Constructor
     */
    function SPConfig(cfg, webUrl) {
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
            var promise = new utils_1.Promise();
            // Ensure the content types exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                        (new __1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
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
                    promise.resolve();
                });
            });
            // Return a promise
            return promise;
        };
        // Method to create the fields
        this.createFields = function (fields, cfgFields) {
            var promise = new utils_1.Promise();
            // Ensure the fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
            }
            var _loop_3 = function (i) {
                var cfgField = cfgFields[i];
                // See if this field already exists
                var field = _this.isInCollection("InternalName", cfgField.Name, fields.results);
                if (field) {
                    // Log
                    console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' already exists.");
                    // Trigger the event
                    cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                }
                else {
                    // Log
                    console.log("[gd-sprest][Field] Creating the '" + cfgField.Name + "' field.");
                    // Update the schema xml
                    _this.updateFieldSchemaXml(cfgField.SchemaXml).done(function (schemaXml) {
                        // Add the field
                        fields.createFieldAsXml(schemaXml).execute(function (field) {
                            // See if it was successful
                            if (field.existsFl) {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' was created successfully.");
                                // Trigger the event
                                cfgField.onCreated ? cfgField.onCreated(field) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + field.response);
                            }
                        }, true);
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to create the lists
        this.createLists = function (lists, cfgLists) {
            var promise = new utils_1.Promise();
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.Lists) {
                    // Resolve the promise
                    promise.resolve();
                    return promise;
                }
            }
            // Ensure the lists exist
            if (cfgLists == null || cfgLists.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                _this.updateLists(cfgLists).done(function () {
                    // Resolve the promise
                    promise.resolve();
                });
            });
            // Return a promise
            return promise;
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            var promise = new utils_1.Promise();
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.SiteUserCustomActions || _this._cfgType != types_1.SPConfigTypes.WebUserCustomActions) {
                    // Resolve the promise
                    promise.resolve();
                    return promise;
                }
            }
            // Ensure the lists exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                    customActions.add(cfgCustomAction).execute(true);
                }
            }
            // Wait for the requests to complete
            customActions.done(function () {
                // Resolve the promise
                promise.resolve();
            });
            // Return the promise
            return promise;
        };
        // Method to create the list views
        this.createViews = function (views, cfgViews) {
            var promise = new utils_1.Promise();
            // Ensure the list views exist
            if (cfgViews == null || cfgViews.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                _this.updateViews(views, cfgViews).done(function () {
                    // Resolve the promise
                    promise.resolve();
                });
            });
            // Return the promise
            return promise;
        };
        // Method to create the web parts
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.WebParts) {
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
            (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
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
                                (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
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
            var promise = new utils_1.Promise();
            // Ensure site actions exist
            if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
            // Log
            console.log("[gd-sprest] Loading the site information...");
            // Get the site
            (new __1.Site(_this._webUrl))
                .query({
                Expand: ["UserCustomActions"]
            })
                .execute(function (site) {
                // Install the user custom actions
                _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).done(function () {
                    // Resolve the promise
                    promise.resolve(site);
                });
            });
            // Return the promise
            return promise;
        };
        // Method to install the web components
        this.installWeb = function () {
            var promise = new utils_1.Promise();
            // Log
            console.log("[gd-sprest] Loading the web information...");
            // Get the web
            (new __1.Web(_this._webUrl))
                .query({
                Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
            })
                .execute(function (web) {
                // Create the fields
                _this.createFields(web.Fields, _this._configuration.Fields).done(function () {
                    // Create the content types
                    _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).done(function () {
                        // Create the lists
                        _this.createLists(web.Lists, _this._configuration.ListCfg).done(function () {
                            // Create the web custom actions
                            _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).done(function () {
                                // Resolve the promise
                                promise.resolve();
                            });
                        });
                    });
                });
            });
            // Return the promise
            return promise;
        };
        // Method to see if an object exists in a collection
        this.isInCollection = function (key, value, collection) {
            var valueLower = value.toLowerCase();
            // Parse the collection
            for (var i = 0; i < collection.length; i++) {
                // See if the item exists
                if (valueLower == collection[i][key].toLowerCase()) {
                    // Return true
                    return collection[i];
                }
            }
            // Not in the collection
            return false;
        };
        // Method to remove the content type
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
            var promise = new utils_1.Promise();
            // Ensure the content types exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to remove the fields
        this.removeFields = function (fields, cfgFields) {
            var promise = new utils_1.Promise();
            // Ensure the fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
            }
            var _loop_8 = function (i) {
                var cfgField = cfgFields[i];
                // Get the field
                var field = _this.isInCollection("InternalName", cfgField.Name, fields.results);
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to remove the lists
        this.removeLists = function (lists, cfgLists) {
            var promise = new utils_1.Promise();
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.Lists) {
                    // Resolve the promise
                    promise.resolve();
                    return promise;
                }
            }
            // Ensure the lists exist
            if (cfgLists == null || cfgLists.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to remove the user custom actions
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            var promise = new utils_1.Promise();
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.SiteUserCustomActions || _this._cfgType != types_1.SPConfigTypes.WebUserCustomActions) {
                    // Resolve the promise
                    promise.resolve();
                    return promise;
                }
            }
            // Ensure the custom actions exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
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
                var ca = _this.isInCollection("Title", cfgCustomAction.Name, customActions.results);
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to remove the web parts
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            var promise = new utils_1.Promise();
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != types_1.SPConfigTypes.WebParts) {
                    // Resolve the promise
                    promise.resolve();
                    return promise;
                }
            }
            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
                return promise;
            }
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the root web
            (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
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
                promise.resolve();
            });
            // Return a promise
            return promise;
        };
        // Method to update the schema xml
        this.updateFieldSchemaXml = function (schemaXml) {
            var promise = new utils_1.Promise();
            // Create the schema
            var fieldInfo = document.createElement("field");
            fieldInfo.innerHTML = schemaXml;
            fieldInfo = fieldInfo.querySelector("field");
            // Get the field type
            switch (fieldInfo.getAttribute("Type")) {
                case "Lookup":
                case "LookupMulti":
                    // Get the target list
                    (new __1.List(fieldInfo.getAttribute("List"))).execute(function (list) {
                        // Ensure the list exists
                        if (list.existsFl) {
                            var startIdx = schemaXml.toLowerCase().indexOf("list=");
                            var endIdx = schemaXml.indexOf(" ", startIdx + 5 + list.Title.length);
                            // Replace the List property
                            schemaXml = schemaXml.substr(0, startIdx) + "List=\"" + list.Id + "\"" + schemaXml.substr(endIdx);
                        }
                        // Resolve the promise
                        promise.resolve(schemaXml);
                    });
                    break;
                default:
                    // Resolve the promise
                    promise.resolve(schemaXml);
                    break;
            }
            // Return the promise
            return promise;
        };
        // Method to update the lists
        this.updateLists = function (cfgLists, idx, promise) {
            // Default the index and promise
            idx = idx ? idx : 0;
            promise = promise ? promise : new utils_1.Promise();
            // Get the list configuration
            var cfgList = cfgLists[idx];
            // Ensure the configuration exists
            if (cfgList) {
                // Get the web
                (new __1.Web(_this._webUrl))
                    .Lists(cfgList.ListInformation.Title)
                    .query({
                    Expand: ["ContentTypes", "Fields", "Views"]
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
                    _this.createFields(list.Fields, cfgList.CustomFields).done(function () {
                        // Update the content types
                        _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).done(function () {
                            // Update the views
                            _this.createViews(list.Views, cfgList.ViewInformation).done(function () {
                                // Trigger the event
                                cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                // Update the next list
                                _this.updateLists(cfgLists, idx + 1, promise);
                            });
                        });
                    });
                });
            }
            else {
                // Resolve the promise
                promise.resolve();
            }
            // Return a promise
            return promise;
        };
        // Method to update the views
        this.updateViews = function (views, cfgViews) {
            var counter = 0;
            var promise = new utils_1.Promise();
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
                    for (var i_1 = 0; i_1 < cfgView.ViewFields.length; i_1++) {
                        // Add the view field
                        view.ViewFields().addViewField(cfgView.ViewFields[i_1]).execute(true);
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
                        promise.resolve();
                    }
                });
            };
            // Parse the views
            for (var i = 0; i < cfgViews.length; i++) {
                _loop_12(i);
            }
            // Return the promise
            return promise;
        };
        // Method to uninstall the site components
        this.uninstallSite = function () {
            var promise = new utils_1.Promise();
            // Ensure site actions exist
            if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
            // Get the site
            (new __1.Site(_this._webUrl))
                .query({
                Expand: ["UserCustomActions"]
            })
                .execute(function (site) {
                // Remove the user custom actions
                _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).done(function () {
                    // Resolve the promise
                    promise.resolve(site);
                });
            });
            // Return the promise
            return promise;
        };
        // Method to uninstall the web components
        this.uninstallWeb = function () {
            var promise = new utils_1.Promise();
            // Get the web
            (new __1.Web(_this._webUrl))
                .query({
                Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
            })
                .execute(function (web) {
                // Remove the fields
                _this.removeFields(web.Fields, _this._configuration.Fields).done(function () {
                    // Remove the content types
                    _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).done(function () {
                        // Remove the lists
                        _this.removeLists(web.Lists, _this._configuration.ListCfg).done(function () {
                            // Remove the web custom actions
                            _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).done(function () {
                                // Resolve the promise
                                promise.resolve();
                            });
                        });
                    });
                });
            });
            // Return the promise
            return promise;
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
    SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        // Install the web components
        this.installWeb().done(function () {
            // Install the site components
            _this.installSite().done(function () {
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
    SPConfig.prototype.installList = function (listName, callback) { this.installByType(types_1.SPConfigTypes.Lists, callback, listName); };
    // Method to install a specific site custom action
    SPConfig.prototype.installSiteCustomAction = function (caName, callback) { this.installByType(types_1.SPConfigTypes.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    SPConfig.prototype.installWebCustomAction = function (caName, callback) { this.installByType(types_1.SPConfigTypes.WebUserCustomActions, callback, caName); };
    // Method to uninstall the configuration
    SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName;
        // Uninstall the web components
        this.uninstallWeb().done(function () {
            // Uninstall the site components
            _this.uninstallSite().done(function () {
                // Remove the webparts
                _this.removeWebParts().done(function () {
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
    SPConfig.prototype.uninstallList = function (listName, callback) { this.uninstallByType(types_1.SPConfigTypes.Lists, callback, listName); };
    // Method to install a specific site custom action
    SPConfig.prototype.uninstallSiteCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    SPConfig.prototype.uninstallWebCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.WebUserCustomActions, callback, caName); };
    return SPConfig;
}());
exports.SPConfig = SPConfig;
;
//# sourceMappingURL=spCfg.js.map