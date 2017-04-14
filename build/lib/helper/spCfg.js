"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var __1 = require("..");
/**
 * Next Code Update:
 * Update code to use web and lists object that are passed to each method.
 * Use the "done" to wait for all requests to complete, instead of using promises.
 * Test then release to npm.
 */
/*********************************************************************************************************************************/
// SharePoint Configuration
/*********************************************************************************************************************************/
var SPConfig = (function () {
    /**
     * Constructor
     */
    function SPConfig(cfg) {
        var _this = this;
        // Method to install by configuration type
        this.installByType = function (cfgType, webUrl) {
            var target = null;
            // Execute the method based on the index
            switch (cfgType) {
                // Content Types
                case types_1.SPConfigTypes.ContentTypes:
                    // Set the target
                    target = (new __1.Web(webUrl)).ContentTypes();
                    // Log
                    //console.log("[gd-sprest] Creating the content types.");
                    // Create the content types
                    //this.createContentTypes(target);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest] Creating the site columns.");
                    // Create the fields
                    _this.createFields(target, _this._configuration.FieldCfg);
                    break;
                // Lists
                case types_1.SPConfigTypes.Lists:
                    // Set the target
                    target = (new __1.Web(webUrl)).Lists();
                    // Log
                    console.log("[gd-sprest] Creating the lists.");
                    // Create the lists
                    _this.createLists(target, _this._configuration.ListCfg);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.SiteUserCustomActions:
                    // Set the target
                    target = (new __1.Site()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest] Creating the site user custom actions.");
                    // Create the user custom actions
                    _this.createUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : null);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.WebUserCustomActions:
                    // Set the target
                    target = (new __1.Web()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest] Creating the web user custom actions.");
                    // Create the user custom actions
                    _this.createUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null);
                    break;
            }
            // Return the target object
            return target;
        };
        // Method to uninstall by the configuration type
        this.uninstallByType = function (cfgType, webUrl) {
            var target = null;
            // Execute the method based on the index
            switch (cfgType) {
                // Content Types
                case types_1.SPConfigTypes.ContentTypes:
                    // Set the target
                    target = (new __1.Web(webUrl)).ContentTypes();
                    // Log
                    //console.log("[gd-sprest] Creating the content types.");
                    // Create the content types
                    //this.createContentTypes(target);
                    break;
                // Fields
                case types_1.SPConfigTypes.Fields:
                    // Set the target
                    target = (new __1.Web(webUrl)).Fields();
                    // Log
                    console.log("[gd-sprest] Removing the site columns.");
                    // Remove the fields
                    _this.removeFields(target, _this._configuration.FieldCfg);
                    break;
                // Lists
                case types_1.SPConfigTypes.Lists:
                    // Set the target
                    target = (new __1.Web(webUrl)).Lists();
                    // Log
                    console.log("[gd-sprest] Removing the lists.");
                    // Remove the lists
                    _this.removeLists(target, _this._configuration.ListCfg);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.SiteUserCustomActions:
                    // Set the target
                    target = (new __1.Site()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest] Removing the site user custom actions.");
                    // Remove the site user custom actions
                    _this.removeUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : null);
                    break;
                // Site User Custom Actions
                case types_1.SPConfigTypes.WebUserCustomActions:
                    // Set the target
                    target = (new __1.Web()).UserCustomActions();
                    // Log
                    console.log("[gd-sprest] Removing the web user custom actions.");
                    // Remove the web user custom actions
                    _this.removeUserCustomActions(target, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null);
                    break;
            }
            // Return the target object
            return target;
        };
        /**
         * Methods
         */
        // Method to create the content types
        this.createContentTypes = function (contentTypes) {
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
                                console.log("[gd-sprest] The title field was successfully updated to '" + titleFieldName + "' for the '" + listName + "' list.");
                            }
                            else {
                                // Log
                                console.log("[gd-sprest] Error updating the title field '" + titleFieldName + "' for the '" + listName + "' list.");
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
                        console.log("[gd-sprest] The field '" + field.InternalName + "' already exists" + (listName ? " in the '" + listName + "' list" : "") + ".");
                    }
                }
                // Parse the custom fields
                for (var i = 0; i < customFields.length; i++) {
                    // See if the field exists
                    if (customFields[i].Field) {
                        continue;
                    }
                    // Log
                    console.log("[gd-sprest] Creating the field '" + customFields[i].Name + "' field" + (listName ? " in the '" + listName + "' list" : "") + ".");
                    // Create the field, but wait for the previous request to complete first
                    fields.createFieldAsXml(customFields[i].SchemaXml).execute(true);
                }
            });
        };
        // Method to create the lists
        this.createLists = function (lists, cfg) {
            // Ensure lists exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            var _loop_1 = function (i) {
                var listInfo = cfg[i].ListInformation;
                // Get the list
                lists.getByTitle(listInfo.Title).execute(function (list) {
                    // See if the list exists
                    if (list.existsFl) {
                        // Log
                        console.log("[gd-sprest] The list '" + listInfo.Title + "' already exists.");
                        // Update the list
                        _this.updateList(list, cfg[i]);
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
                                    _this.updateList(lists.getByTitle(listName_1), cfg[i]);
                                });
                            }
                            else {
                                // Update the list
                                _this.updateList(list, cfg[i]);
                            }
                        });
                    }
                }, true);
            };
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                _loop_1(i);
            }
            ;
        };
        // Method to create the list views
        this.createListViews = function (list, cfg) {
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
                        console.log("[gd-sprest] The '" + cfg[i].ViewName + "' view already exists for the '" + list.Title + "' list.");
                        // Update the view
                        _this.updateListView(view, cfg[i]);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest] Creating the '" + cfg[i].ViewName + "' view for the '" + list.Title + "' list.");
                        // Create the view
                        list.Views().add({
                            Title: cfg[i].ViewName
                        }).execute(function (view) {
                            // Update the view
                            _this.updateListView(view, cfg[i]);
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
        this.createUserCustomActions = function (customActions, cfg) {
            // Ensure custom actions exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            var _loop_3 = function (i) {
                // Query for this custom action
                customActions.query({
                    Filter: "Name eq '" + cfg[i].Name + "'"
                })
                    .execute(function (ca) {
                    // See if this custom action exists
                    if (ca.existsFl) {
                        // Log
                        console.log("[gd-sprest] The custom action '" + cfg[i].Name + "' already exists.");
                    }
                    else {
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
        this.removeUserCustomActions = function (customActions, cfg) {
            // Ensure custom actions exist
            if (cfg == null || cfg.length == 0) {
                return;
            }
            // Get the custom actions
            customActions.execute(function (customActions) {
                // Parse the configuration
                for (var i = 0; i < cfg.length; i++) {
                    var caName = cfg[i].Name.toLowerCase();
                    // Parse the custom actions
                    for (var j = 0; j < customActions.results.length; j++) {
                        var ca = customActions.results[j];
                        // See if this is a custom action
                        if (ca.Name.toLowerCase() == caName) {
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
        this.updateList = function (list, cfg) {
            // Get the fields
            var fields = list.Fields();
            // Create the fields
            _this.createFields(fields, cfg.CustomFields, cfg);
            // Wait for the requests to complete
            fields.done(function () {
                // Create the views
                _this.createListViews(list, cfg.ViewInformation);
            });
        };
        // Method to update the view
        this.updateListView = function (view, cfg) {
            // See if the view fields are defined
            if (cfg.ViewFields && cfg.ViewFields.length > 0) {
                // Log
                console.log("[gd-sprest] Updating the view fields for the '" + view.Title + "' view.");
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
                console.log("[gd-sprest] Updating the view properties for the '" + view.Title + "' view.");
                // Set the properties
                cfg.JSLink ? props["JSLink"] = cfg.JSLink : null;
                cfg.ViewQuery ? props["ViewQuery"] = cfg.ViewQuery : null;
                // Update the view
                view.update(props).execute(true);
            }
            // Wait for the view requests to complete
            view.done(function () {
                // Log
                console.log("[gd-sprest] The view '" + view.Title + "' was updated successfully.");
            });
        };
        // Save the configuration
        this._configuration = cfg;
    }
    /**
     * Public Methods
     */
    // Method to install the configuration
    SPConfig.prototype.install = function (webUrl, callback, cfgType) {
        var _this = this;
        // Default the index
        cfgType = typeof (cfgType) === "number" ? cfgType : 0;
        // Uninstall by the type
        var target = this.installByType(cfgType, webUrl);
        // Ensure the target exists
        if (target) {
            // Wait for the target requests to complete
            target.done(function () {
                // Execute the next method
                _this.install(webUrl, callback, cfgType + 1);
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
    // Method to uninstall the configuration
    SPConfig.prototype.uninstall = function (webUrl, callback, cfgType) {
        var _this = this;
        // Default the index
        cfgType = typeof (cfgType) === "number" ? cfgType : 4;
        // Uninstall by the type
        var target = this.uninstallByType(cfgType, webUrl);
        // Ensure the target exists
        if (target) {
            // Wait for the target requests to complete
            target.done(function () {
                // Execute the next method
                _this.uninstall(webUrl, callback, cfgType - 1);
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
                    console.log("[gd-sprest] Deleting the '" + field.InternalName + "' field.");
                    // Delete it
                    field.delete().execute(true);
                }
            }
        });
    };
    // Method to remove the lists
    SPConfig.prototype.removeLists = function (lists, cfg) {
        // Ensure lists exist
        if (cfg == null || cfg.length == 0) {
            return;
        }
        // Get the lists
        lists.execute(function (lists) {
            // Parse the configuration
            for (var i = 0; i < cfg.length; i++) {
                var listName = cfg[i].ListInformation.Title.toLowerCase();
                // Parse the lists
                for (var j = 0; j < lists.results.length; j++) {
                    var list = lists.results[j];
                    // See if this is a custom list
                    if (list.Title.toLowerCase() == listName) {
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