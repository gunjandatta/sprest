"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.installByType = function (cfgType, callback, targetName) {
            var target = null;
            // Update the target name
            targetName = targetName ? targetName.toLowerCase() : targetName;
            // Execute the method based on the index
            switch (cfgType) {
                // Content Types
                case types_1.SPConfigTypes.ContentTypes:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).ContentTypes();
                    // Log
                    console.log("[gd-sprest][ContentType] Creating the content types.");
                    // Create the content types
                    _this.createContentTypes(target, _this._configuration.ContentTypes);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest][Field] Creating the site columns.");
                    // Create the fields
                    _this.createFields(target, _this._configuration.Fields);
                    break;
                // Lists
                case types_1.SPConfigTypes.Lists:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Lists();
                    // Log
                    console.log("[gd-sprest][List] Creating the lists.");
                    // Create the lists
                    _this.createLists(target, _this._configuration.ListCfg, targetName);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.SiteUserCustomActions:
                    // Set the target
                    target = (new __1.Site()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest][CustomAction] Creating the site user custom actions.");
                    // Create the user custom actions
                    _this.createUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : null, targetName);
                    break;
                // Web Parts
                case types_1.SPConfigTypes.WebParts:
                    // Set the target to the root web
                    target = (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
                        .Lists("Web Part Gallery")
                        .RootFolder();
                    // Log
                    console.log("[gd-sprest][WebPart] Creating the web parts.");
                    // Create the web parts
                    _this.createWebParts(target, _this._configuration.WebPartCfg ? _this._configuration.WebPartCfg : null);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.WebUserCustomActions:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).UserCustomActions();
                    // Log
                    console.log("[gd-sprest][CustomAction] Creating the web user custom actions.");
                    // Create the user custom actions
                    _this.createUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null, targetName);
                    break;
            }
            // Ensure the callback and target objects exist
            if (callback && target) {
                // Wait for the target requests to complete
                target.done(function () {
                    // Execute the callback
                    callback();
                });
            }
            // Return the target object
            return target;
        };
        // Method to uninstall by the configuration type
        this.uninstallByType = function (cfgType, callback, targetName) {
            var target = null;
            // Update the target name
            targetName = targetName ? targetName.toLowerCase() : targetName;
            // Execute the method based on the index
            switch (cfgType) {
                // Content Types
                case types_1.SPConfigTypes.ContentTypes:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).ContentTypes();
                    // Log
                    console.log("[gd-sprest][Content Type] Removing the content types.");
                    // Create the content types
                    _this.removeContentTypes(target, _this._configuration.ContentTypes);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest][Field] Removing the site columns.");
                    // Remove the fields
                    _this.removeFields(target, _this._configuration.Fields);
                    break;
                // Lists
                case types_1.SPConfigTypes.Lists:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Lists();
                    // Log
                    console.log("[gd-sprest][List] Removing the lists.");
                    // Remove the lists
                    _this.removeLists(target, _this._configuration.ListCfg, targetName);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.SiteUserCustomActions:
                    // Set the target
                    target = (new __1.Site()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest][CustomAction] Removing the site user custom actions.");
                    // Remove the site user custom actions
                    _this.removeUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : null, targetName);
                    break;
                // Web Parts
                case types_1.SPConfigTypes.WebParts:
                    // Set the target to the root web
                    target = (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
                        .Lists("Web Part Gallery")
                        .RootFolder();
                    // Log
                    console.log("[gd-sprest][WebPart] Removing the web parts.");
                    // Create the web parts
                    _this.removeWebParts(target, _this._configuration.WebPartCfg ? _this._configuration.WebPartCfg : null);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.WebUserCustomActions:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).UserCustomActions();
                    // Log
                    console.log("[gd-sprest][CustomAction] Removing the web user custom actions.");
                    // Remove the web user custom actions
                    _this.removeUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null, targetName);
                    break;
            }
            // Ensure the callback and target objects exist
            if (callback && target) {
                // Wait for the target requests to complete
                target.done(function () {
                    // Execute the callback
                    callback();
                });
            }
            // Return the target object
            return target;
        };
        /**
         * Methods
         */
        // Method to create the content type
        this.createContentType = function (cfgItem, contentTypes, web) {
            // Create the web
            web = web ? web : new __1.Web().execute();
            // Get the content types of the web
            web.ContentTypes()
                .query({
                Filter: "Name eq '" + (cfgItem.Name || cfgItem.ParentName) + "'",
                Top: 1
            })
                .execute(function (parentContentTypes) {
                // See if the content type exists
                if (parentContentTypes.existsFl) {
                    // Add the content type
                    contentTypes.addAvailableContentType(parentContentTypes.results[0].Id.StringValue).execute(function (contentType) {
                        var props = {};
                        // See if we need to update the content type
                        if (contentType.Name == cfgItem.Name && contentType.JSlink == cfgItem.JSLink) {
                            return;
                        }
                        // Log
                        console.log("[gd-sprest][Content Type] Updating the properties for the '" + cfgItem.Name + "' content type.");
                        // Set the properties
                        cfgItem.JSLink ? props["JSLink"] = cfgItem.JSLink : null;
                        cfgItem.Name ? props["Name"] = cfgItem.Name : null;
                        // Update the content type
                        contentType.update(props).execute(function () {
                            // Log
                            console.log("[gd-sprest][Content Type] The properties for the '" + cfgItem.Name + "' was updated successfully.");
                        });
                    }, true);
                }
                else {
                    // See if this is a sub-web
                    if (web.ServerRelativeUrl != __1.ContextInfo.siteServerRelativeUrl) {
                        // Log
                        console.log("[gd-sprest][Content Type] The parent content type '" + cfgItem.ParentName + "' was not found in the current web.");
                        // Check the root web
                        _this.createContentType(cfgItem, contentTypes, new __1.Web(__1.ContextInfo.siteServerRelativeUrl));
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Content Type] The parent content type '" + cfgItem.ParentName + "' was not found in the root web.");
                    }
                }
            });
        };
        // Method to create the content types
        this.createContentTypes = function (contentTypes, cfg, listInfo) {
            // Ensure configuration exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Clear the content types in the configuration
            for (var i = 0; i < cfg.length; i++) {
                cfg[i].ContentType = null;
            }
            // Execute the request to get the content types
            contentTypes.execute(function () {
                var counter = 0;
                var listName = listInfo && listInfo.ListInformation ? listInfo.ListInformation.Title : null;
                // Parse the content types
                for (var i = 0; i < contentTypes.results.length; i++) {
                    var contentType = contentTypes.results[i];
                    // See if the content type is in the configuration
                    if (_this.isInConfiguration(contentType, "Name", cfg, "Name", "ContentType")) {
                        // Increment the counter
                        counter++;
                        // Log
                        console.log("[gd-sprest][Content Type] The content type '" + contentType.Name + "' already exists in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                    }
                }
                // Parse the configuration
                for (var i = 0; i < cfg.length; i++) {
                    // See if the content type exists
                    if (cfg[i].ContentType) {
                        continue;
                    }
                    // Log
                    console.log("[gd-sprest][Content Type] Creating the '" + cfg[i].Name + "' content type in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                    // Create the content type
                    _this.createContentType(cfg[i], contentTypes);
                }
            });
        };
        // Method to create the fields
        this.createFields = function (fields, cfg, listInfo) {
            // Ensure configuration exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Clear the fields in the configuration
            for (var i = 0; i < cfg.length; i++) {
                cfg[i].Field = null;
            }
            // Execute the request to get the fields
            fields.execute(function () {
                var counter = 0;
                var fldTitle = null;
                var titleFieldName = listInfo ? listInfo.TitleFieldDisplayName : null;
                var listName = listInfo && listInfo.ListInformation ? listInfo.ListInformation.Title : null;
                // Parse the fields
                for (var i = 0; i < fields.results.length; i++) {
                    var field = fields.results[i];
                    // See if this is the title field and we are updating it
                    if (field.InternalName == "Title" && titleFieldName && titleFieldName != field.InternalName) {
                        // Update the field
                        field.update({ Title: titleFieldName }).execute(function (response) {
                            // See if the response was successful
                            if (response.existsFl) {
                                // Log
                                console.log("[gd-sprest][Field] The title field was successfully updated to '" + titleFieldName + "' for the '" + listName + "' list.");
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Field] Error updating the title field '" + titleFieldName + "' for the '" + listName + "' list.");
                            }
                        });
                        // Continue the loop
                        continue;
                    }
                    // See if the field is in the configuration
                    if (_this.isInConfiguration(field, "InternalName", cfg, "Name", "Field")) {
                        // Increment the counter
                        counter++;
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' already exists in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                    }
                }
                // Parse the configuration
                for (var i = 0; i < cfg.length; i++) {
                    // See if the field exists
                    if (cfg[i].Field) {
                        continue;
                    }
                    // Log
                    console.log("[gd-sprest][Field] Creating the field '" + cfg[i].Name + "' field in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                    // Create the field, but wait for the previous request to complete first
                    fields.createFieldAsXml(cfg[i].SchemaXml).execute(true);
                }
            });
        };
        // Method to create the lists
        this.createLists = function (lists, cfg, listName) {
            // Ensure lists exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            var _loop_1 = function (i) {
                var listInfo = cfg[i].ListInformation;
                // See if we are creating a specific list
                if (listName && listInfo.Title.toLowerCase() != listName) {
                    return "continue";
                }
                // Get the list
                lists.getByTitle(listInfo.Title).execute(function (list) {
                    // See if the list exists
                    if (list.existsFl) {
                        // Log
                        console.log("[gd-sprest][List] The list '" + listInfo.Title + "' already exists.");
                        // Update the list
                        _this.updateList(list.Title, list, cfg[i]);
                    }
                    else {
                        // Remove spaces from the list name
                        var listName_1 = listInfo.Title;
                        listInfo.Title = listName_1.replace(/ /g, "");
                        // Add the list
                        lists.add(listInfo)
                            .execute(function (list) {
                            // Restore the list name in the configuration
                            listInfo.Title = listName_1;
                            // See if we need to update the list
                            if (list.existsFl && list.Title != listName_1) {
                                // Update the list
                                list.update({ Title: listName_1 }).execute(function () {
                                    // Update the list
                                    list = lists.getByTitle(listName_1);
                                    _this.updateList(listName_1, list, cfg[i]);
                                });
                            }
                            else {
                                // Update the list
                                _this.updateList(list.Title, list, cfg[i]);
                            }
                        });
                    }
                    // Return the list
                    return list;
                }, true);
            };
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                _loop_1(i);
            }
            ;
        };
        // Method to create the list views
        this.createListViews = function (listName, list, cfg) {
            // Ensure view configurations exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            var _loop_2 = function (i) {
                // Get the view
                list.Views().getByTitle(cfg[i].ViewName).execute(function (view) {
                    // Ensure the view exists
                    if (view.existsFl) {
                        // Log
                        console.log("[gd-sprest][List] The '" + cfg[i].ViewName + "' view already exists for the '" + listName + "' list.");
                        // Update the view
                        _this.updateListView(listName, view, cfg[i]);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][List] Creating the '" + cfg[i].ViewName + "' view for the '" + listName + "' list.");
                        // Create the view
                        list.Views().add({
                            Title: cfg[i].ViewName
                        }).execute(function (view) {
                            // Update the view
                            _this.updateListView(listName, view, cfg[i]);
                        });
                    }
                });
            };
            // Parse the view configurations
            for (var i = 0; i < cfg.length; i++) {
                _loop_2(i);
            }
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function (customActions, cfg, customActionName) {
            // Ensure custom actions exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            var _loop_3 = function (i) {
                // See if we are creating a specific custom action
                if (customActionName && cfg[i].Name.toLowerCase() != customActionName) {
                    return "continue";
                }
                // Query for this custom action
                customActions.query({
                    Filter: "Name eq '" + cfg[i].Name + "'"
                })
                    .execute(function (ca) {
                    // See if this custom action exists
                    if (ca.existsFl) {
                        // Log
                        console.log("[gd-sprest][CustomAction] The custom action '" + cfg[i].Name + "' already exists.");
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][CustomAction] Creating the '" + cfg[i].Name + "' custom action.");
                        // Create the custom action
                        customActions.add(cfg[i]).execute();
                    }
                }, true);
            };
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                _loop_3(i);
            }
        };
        // Method to create the web parts
        this.createWebParts = function (folder, cfg, listInfo) {
            // Ensure the configuration exists
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Clear the web parts in the configuration
            for (var i = 0; i < cfg.length; i++) {
                cfg[i].File = null;
            }
            // Get the webpart files
            folder.Files()
                .query({
                GetAllItems: true,
                Top: 500
            })
                .execute(function (files) {
                var counter = 0;
                // Parse the files
                for (var i = 0; i < files.results.length; i++) {
                    var file = files.results[i];
                    // See if the webpart is in the configuration
                    if (_this.isInConfiguration(file, "Name", cfg, "FileName", "File")) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' already exists.");
                        // See if all the webparts have been removed
                        if (++counter == cfg.length) {
                            break;
                        }
                    }
                }
                var _loop_4 = function (i) {
                    var wpCfg = cfg[i];
                    // See if the web part exists
                    if (wpCfg.File) {
                        return "continue";
                    }
                    // Log
                    console.log("[gd-sprest][WebPart] Creating the '" + wpCfg.FileName + "' webpart.");
                    // Trim the xml
                    var xml = wpCfg.XML.trim();
                    // Convert the string to an array buffer
                    var buffer = new ArrayBuffer(xml.length * 2);
                    var bufferView = new Uint16Array(buffer);
                    for (var j = 0; j < xml.length; j++) {
                        bufferView[j] = xml.charCodeAt(j);
                    }
                    // Create the webpart, but execute the requests one at a time
                    folder.Files().add(true, cfg[i].FileName, buffer).execute(function (file) {
                        // See if group exists
                        if (wpCfg.Group) {
                            // Set the target to the root web
                            (new __1.Web(__1.ContextInfo.siteServerRelativeUrl))
                                .Lists("Web Part Gallery")
                                .Items()
                                .query({
                                Filter: "FileLeafRef eq '" + cfg[i].FileName + "'"
                            })
                                .execute(function (items) {
                                // Update the item
                                items.results[0].update({
                                    Group: wpCfg.Group
                                }).execute();
                            });
                        }
                        // Wait for the requests to complete
                        file.done(function () {
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                        });
                    });
                };
                // Parse the web parts
                for (var i = 0; i < cfg.length; i++) {
                    _loop_4(i);
                }
            });
        };
        // Method to determine if the configuration contains the target
        this.isInConfiguration = function (target, propName, cfg, cfgPropName, cfgRefName) {
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                var cfgItem = cfg[i];
                // Compare the properties
                if ((target[propName] + "").toLowerCase() == (cfgItem[cfgPropName] + "").toLowerCase()) {
                    // Set the reference to the target
                    cfgItem[cfgRefName] = target;
                    // Is in the configuration
                    return true;
                }
            }
            // Not in the configuration
            return false;
        };
        // Method to remove the content types
        this.removeContentTypes = function (contentTypes, cfg) {
            // Ensure configuration exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Get the content types
            contentTypes.execute(function () {
                // Parse the content types
                for (var i = 0; i < contentTypes.results.length; i++) {
                    var contentType = contentTypes.results[i];
                    // See if the content type is in the configuration
                    if (_this.isInConfiguration(contentType, "Name", cfg, "Name", "ContentType")) {
                        // Log
                        console.log("[gd-sprest][Content Type] Deleting the '" + contentType.Name + "' content type.");
                        // Delete it
                        contentType.delete().execute(true);
                    }
                }
            });
        };
        // Method to remove the user custom actions
        this.removeUserCustomActions = function (customActions, cfg, customActionName) {
            // Ensure custom actions exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Get the custom actions
            customActions.execute(function () {
                // Parse the configuration
                for (var i = 0; i < cfg.length; i++) {
                    var caName = cfg[i].Name.toLowerCase();
                    // See if we are removing a specific custom action
                    if (customActionName && customActionName != caName.toLowerCase()) {
                        continue;
                    }
                    // Parse the custom actions
                    for (var j = 0; j < customActions.results.length; j++) {
                        var ca = customActions.results[j];
                        // See if this is a custom action
                        if (ca.Name.toLowerCase() == caName) {
                            // Log
                            console.log("[gd-sprest][CustomAction] Deleting the '" + ca.Name + "' custom action.");
                            // Delete the custom action
                            ca.delete().execute(true);
                            // Break from the loop
                            break;
                        }
                    }
                }
            });
        };
        // Method to update the list
        this.updateList = function (listName, list, cfg) {
            // Log
            console.log("[gd-sprest][List] Updating the fields and views of the '" + cfg.ListInformation.Title + "' list.");
            // Get the fields
            var fields = list.Fields();
            // Create the fields
            _this.createFields(fields, cfg.CustomFields, cfg);
            // Wait for the requests to complete
            fields.done(function () {
                // Get the content types
                var contentTypes = list.ContentTypes();
                // Create the content types
                _this.createContentTypes(contentTypes, cfg.ContentTypes, cfg);
                // Wait for the requests to complete
                contentTypes.done(function () {
                    // Create the views
                    _this.createListViews(listName, list, cfg.ViewInformation);
                });
            });
        };
        // Method to update the view
        this.updateListView = function (listName, view, viewCfg) {
            // See if the view fields are defined
            if (viewCfg.ViewFields && viewCfg.ViewFields.length > 0) {
                // Log
                console.log("[gd-sprest][List] Updating the view fields for the '" + viewCfg.ViewName + "' view in the '" + listName + "' list.");
                // Clear the view fields
                view.ViewFields().removeAllViewFields().execute(true);
                // Parse the view fields
                for (var i = 0; i < viewCfg.ViewFields.length; i++) {
                    // Add the view field
                    view.ViewFields().addViewField(viewCfg.ViewFields[i]).execute(true);
                }
            }
            // See if we are updating the view properties
            if (viewCfg.JSLink || viewCfg.ViewQuery) {
                var props = {};
                // Log
                console.log("[gd-sprest][List] Updating the view properties for the '" + viewCfg.ViewName + "' view in the '" + listName + "' list.");
                // Set the properties
                viewCfg.JSLink ? props["JSLink"] = viewCfg.JSLink : null;
                viewCfg.ViewQuery ? props["ViewQuery"] = viewCfg.ViewQuery : null;
                // Update the view
                view.update(props).execute(true);
            }
            // Wait for the view requests to complete
            view.done(function () {
                // Log
                console.log("[gd-sprest][List] The view '" + view.Title + "' was updated successfully in the '" + listName + "' list.");
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
    SPConfig.prototype.install = function (callback, cfgType) {
        var _this = this;
        // Default the index
        cfgType = typeof (cfgType) === "number" ? cfgType : 0;
        // Uninstall by the type
        var target = this.installByType(cfgType);
        // Ensure the target exists
        if (target) {
            // Wait for the target requests to complete
            target.done(function () {
                // Execute the next method
                _this.install(callback, cfgType + 1);
            });
        }
        else {
            // Log
            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
            // See if the callback exists
            if (callback && typeof (callback) === "function") {
                // Execute the callback
                callback();
            }
        }
    };
    // Method to install a specific list
    SPConfig.prototype.installList = function (listName, callback) { this.installByType(types_1.SPConfigTypes.Lists, callback, listName); };
    // Method to install a specific site custom action
    SPConfig.prototype.installSiteCustomAction = function (caName, callback) { this.installByType(types_1.SPConfigTypes.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    SPConfig.prototype.installWebCustomAction = function (caName, callback) { this.installByType(types_1.SPConfigTypes.WebUserCustomActions, callback, caName); };
    // Method to uninstall the configuration
    SPConfig.prototype.uninstall = function (callback, cfgType) {
        var _this = this;
        // Default the index
        cfgType = typeof (cfgType) === "number" ? cfgType : 5;
        // Uninstall by the type
        var target = this.uninstallByType(cfgType);
        // Ensure the target exists
        if (target) {
            // Wait for the target requests to complete
            target.done(function () {
                // Execute the next method
                _this.uninstall(callback, cfgType - 1);
            });
        }
        else {
            // Log
            console.log("[gd-sprest] The configuration script completed.");
            // See if the callback exists
            if (callback && typeof (callback) === "function") {
                // Execute the callback
                callback();
            }
        }
    };
    // Method to install a specific list
    SPConfig.prototype.uninstallList = function (listName, callback) { this.uninstallByType(types_1.SPConfigTypes.Lists, callback, listName); };
    // Method to install a specific site custom action
    SPConfig.prototype.uninstallSiteCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    SPConfig.prototype.uninstallWebCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.WebUserCustomActions, callback, caName); };
    // Method to remove the fields
    SPConfig.prototype.removeFields = function (fields, cfg, listInfo) {
        var _this = this;
        // Ensure configuration exist
        if (cfg == null || cfg.length == 0) {
            return;
        }
        // Get the fields
        fields.execute(function () {
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // See if the field is in the configuration
                if (_this.isInConfiguration(field, "InternalName", cfg, "Name", "Field")) {
                    // Log
                    console.log("[gd-sprest][Field] Deleting the '" + field.InternalName + "' field.");
                    // Delete it
                    field.delete().execute(true);
                }
            }
        });
    };
    // Method to remove the lists
    SPConfig.prototype.removeLists = function (lists, cfg, targetList) {
        // Ensure configuration exist
        if (cfg == null || cfg.length == 0) {
            return;
        }
        // Get the lists
        lists.execute(function () {
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                var listName = cfg[i].ListInformation.Title.toLowerCase();
                // See if we are removing a specific list
                if (targetList && targetList != listName.toLowerCase()) {
                    continue;
                }
                // Parse the lists
                for (var j = 0; j < lists.results.length; j++) {
                    var list = lists.results[j];
                    // See if this is a custom list
                    if (list.Title.toLowerCase() == listName) {
                        // Log
                        console.log("[gd-sprest][List] Deleting the '" + list.Title + "' list.");
                        // Delete the list
                        list.delete().execute(true);
                        // Break from the loop
                        break;
                    }
                }
            }
        });
    };
    // Method to remove the web parts
    SPConfig.prototype.removeWebParts = function (folder, cfg) {
        var _this = this;
        // Ensure the configuration exists
        if (cfg == null || cfg.length == 0) {
            return;
        }
        // Get the webpart files
        folder.Files()
            .query({
            GetAllItems: true,
            Top: 500
        })
            .execute(function (files) {
            var counter = 0;
            // Parse the files
            for (var i = 0; i < files.results.length; i++) {
                var file = files.results[i];
                // See if this webpart is in the configuration
                if (_this.isInConfiguration(file, "Name", cfg, "FileName", "File")) {
                    // Log
                    console.log("[gd-sprest][WebPart] Deleting the '" + file.Name + "' webpart.");
                    // Delete it
                    file.delete().execute();
                    // See if all the webparts have been removed
                    if (++counter == cfg.length) {
                        break;
                    }
                }
            }
        });
    };
    return SPConfig;
}());
exports.SPConfig = SPConfig;
;
//# sourceMappingURL=spCfg.js.map