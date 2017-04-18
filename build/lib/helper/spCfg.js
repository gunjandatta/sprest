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
                    //console.log("[gd-sprest][ContentType] Creating the content types.");
                    // Create the content types
                    //this.createContentTypes(target, targetName);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest][Field] Creating the site columns.");
                    // Create the fields
                    _this.createFields(target, _this._configuration.FieldCfg);
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
                    //console.log("[gd-sprest][ContentType] Creating the content types.");
                    // Create the content types
                    //this.createContentTypes(target, targetName);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(_this._webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest][Field] Removing the site columns.");
                    // Remove the fields
                    _this.removeFields(target, _this._configuration.FieldCfg);
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
        // Method to create the content types
        this.createContentTypes = function (contentTypes, ctName) {
            // TO DO
        };
        // Method to create the fields
        this.createFields = function (fields, customFields, listInfo) {
            // Ensure fields exist
            if (customFields == null || customFields.length == 0) {
                return;
            }
            // Execute the request to get the fields
            fields.execute(function (fields) {
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
                    // See if this is a custom field
                    if (_this.isCustomField(field, customFields)) {
                        // Increment the counter
                        counter++;
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' already exists" + (listName ? " in the '" + listName + "' list" : "") + ".");
                    }
                }
                // Parse the custom fields
                for (var i = 0; i < customFields.length; i++) {
                    // See if the field exists
                    if (customFields[i].Field) {
                        continue;
                    }
                    // Log
                    console.log("[gd-sprest][Field] Creating the field '" + customFields[i].Name + "' field" + (listName ? " in the '" + listName + "' list" : "") + ".");
                    // Create the field, but wait for the previous request to complete first
                    fields.createFieldAsXml(customFields[i].SchemaXml).execute(true);
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
                    var promise = new utils_1.Promise();
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
                    // Wait for the list to be created, and resolve the promise
                    list.done(function () { promise.resolve(); });
                    // Return the promise
                    return promise;
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
        // Method to get the custom fields
        this.isCustomField = function (field, customFields) {
            // Parse the custom fields
            for (var j = 0; j < customFields.length; j++) {
                // See if this is a custom field
                if (customFields[j].Name == field.InternalName) {
                    // Save a reference to the field and break from the loop
                    customFields[j].Field = field;
                    // Is a custom field
                    return true;
                }
            }
            // Not a custom field
            return false;
        };
        // Method to remove the content types
        this.removeContentTypes = function () {
            // TO DO
        };
        // Method to remove the user custom actions
        this.removeUserCustomActions = function (customActions, cfg, customActionName) {
            // Ensure custom actions exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Get the custom actions
            customActions.execute(function (customActions) {
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
                // Create the views
                _this.createListViews(listName, list, cfg.ViewInformation);
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
    // Method to install a specific content type
    SPConfig.prototype.installContentType = function (ctName, callback) { this.installByType(types_1.SPConfigTypes.ContentTypes, callback, ctName); };
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
        cfgType = typeof (cfgType) === "number" ? cfgType : 4;
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
    // Method to install a specific content type
    SPConfig.prototype.uninstallContentType = function (ctName, callback) { this.uninstallByType(types_1.SPConfigTypes.ContentTypes, callback, ctName); };
    // Method to install a specific list
    SPConfig.prototype.uninstallList = function (listName, callback) { this.uninstallByType(types_1.SPConfigTypes.Lists, callback, listName); };
    // Method to install a specific site custom action
    SPConfig.prototype.uninstallSiteCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.SiteUserCustomActions, callback, caName); };
    // Method to install a specific web custom action
    SPConfig.prototype.uninstallWebCustomAction = function (caName, callback) { this.uninstallByType(types_1.SPConfigTypes.WebUserCustomActions, callback, caName); };
    // Method to remove the fields
    SPConfig.prototype.removeFields = function (fields, customFields, listInfo) {
        var _this = this;
        // Ensure fields exist
        if (customFields == null || customFields.length == 0) {
            return;
        }
        // Get the fields
        fields.execute(function (fields) {
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // See if this is a custom field
                if (_this.isCustomField(field, customFields)) {
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
        // Ensure lists exist
        if (cfg == null || cfg.length == 0) {
            return;
        }
        // Get the lists
        lists.execute(function (lists) {
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
    return SPConfig;
}());
exports.SPConfig = SPConfig;
;
//# sourceMappingURL=spCfg.js.map