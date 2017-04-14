"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        /**
         * Methods
         */
        // Method to create the content types
        this.createContentTypes = function (contentTypes) {
            // TO DO
        };
        // Method to create the fields
        this.createFields = function (fields, customFields, listInfo) {
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
                    // Parse the custom fields
                    for (var j = 0; j < customFields.length; j++) {
                        // See if this is a custom field
                        if (customFields[j].Name == field.InternalName) {
                            // Increment the counter
                            counter++;
                            // Log
                            console.log("[gd-sprest] The field '" + field.InternalName + "' already exists.");
                            // Save a reference to the field and break from the loop
                            customFields[j].Field = field;
                            break;
                        }
                    }
                }
                // Parse the fields
                for (var i = 0; i < customFields.length; i++) {
                    // See if we need to create the field
                    if (customFields[i].Field == null) {
                        // Log
                        console.log("[gd-sprest] Creating the field '" + customFields[i].Name + "' field.");
                        // Create the field, but wait for the previous request to complete first
                        fields.createFieldAsXml(customFields[i].SchemaXml).execute(true);
                    }
                }
            });
        };
        // Method to create the lists
        this.createLists = function (lists, cfg) {
            // Ensure custom actions exist
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
                            // Update the list configuration
                            listInfo.Title = listName_1;
                            // See if we need to update the list
                            if (list.existsFl && list.Title != listName_1) {
                                // Update the list
                                list.update({ Title: listName_1 }).execute(function () {
                                    // Update the list
                                    _this.updateList(lists.getByTitle(listName_1), cfg[i]);
                                });
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
            // Ensure views exist
            if (cfg.ViewInformation == null || cfg.ViewInformation.length == 0) {
                return;
            }
            var _loop_2 = function (i) {
                // Get the view
                list.Views().getByTitle(cfg.ViewInformation[i].ViewName).execute(function (view) {
                    // Ensure the view exists
                    if (view.existsFl) {
                        // Log
                        console.log("[gd-sprest] The view '" + cfg.ViewInformation[i].ViewName + "' already exists for the '" + cfg.ListInformation.Title + "' list.");
                        // Update the view
                        _this.updateListView(view, cfg.ViewInformation[i]);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest] Creating the '" + cfg.ViewInformation[i].ViewName + "' view for the '" + cfg.ListInformation.Title + "' list.");
                        // Create the view
                        list.Views().add({
                            Title: cfg.ViewInformation[i].ViewName
                        }).execute(function (view) {
                            // Update the view
                            _this.updateListView(view, cfg.ViewInformation[i]);
                        });
                    }
                });
            };
            // Parse the views
            for (var i = 0; i < cfg.ViewInformation.length; i++) {
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
        // Method to update the list
        this.updateList = function (list, cfg) {
            // Get the fields
            var fields = list.Fields();
            // Create the fields
            _this.createFields(fields, cfg.CustomFields, cfg);
            // Wait for the requests to complete
            fields.done(function () {
                // Create the views
                _this.createListViews(list, cfg);
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
    // Method to execute the request
    SPConfig.prototype.execute = function (webUrl, callback, index) {
        var _this = this;
        var target;
        // Default the index
        index = typeof (index) === "number" ? index : 0;
        // Execute the method based on the index
        switch (index) {
            case 0:
                // Set the target
                target = (new __1.Web(webUrl)).Fields();
                // Log
                console.log("[gd-sprest] Creating the site columns.");
                // Create the fields
                this.createFields(target, this._configuration.FieldCfg);
                break;
            case 1:
                // Set the target
                target = (new __1.Web(webUrl)).ContentTypes();
                // Log
                //console.log("[gd-sprest] Creating the content types.");
                // Create the content types
                //this.createContentTypes(target);
                break;
            case 2:
                // Set the target
                target = (new __1.Web(webUrl)).Lists();
                // Log
                console.log("[gd-sprest] Creating the lists.");
                // Create the lists
                this.createLists(target, this._configuration.ListCfg);
                break;
            case 3:
                // Set the target
                target = (new __1.Site()).UserCustomActions();
                // Log
                console.log("[gd-sprest] Creating the site user custom actions.");
                // Create the user custom actions
                this.createUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : null);
                break;
            case 4:
                // Set the target
                target = (new __1.Web()).UserCustomActions();
                // Log
                console.log("[gd-sprest] Creating the web user custom actions.");
                // Create the user custom actions
                this.createUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null);
                break;
            default:
                // Log
                console.log("[gd-sprest] The configuration script completed.");
                // See if the callback exists
                if (callback && typeof (callback) === "function") {
                    // Execute the callback
                    callback();
                }
                return;
        }
        // Wait for the target requests to complete
        target.done(function () {
            // Execute the next method
            _this.execute(webUrl, callback, index + 1);
        });
    };
    return SPConfig;
}());
exports.SPConfig = SPConfig;
;
//# sourceMappingURL=spCfg.js.map