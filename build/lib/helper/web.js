"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
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
        this.createContentTypes = function () {
            var promise = new utils_1.Promise();
            // Create the fields
            _this.createFields(_this._configuration.FieldCfg).done(function () {
                // TO DO
                promise.resolve();
            });
            // Return the promise
            return promise;
        };
        // Method to create the fields
        this.createFields = function (customFields, listName, titleFieldName) {
            var promise = new utils_1.Promise();
            var target = null;
            // Ensure lists exist
            if (customFields == null && titleFieldName == null) {
                // Resolve the promise
                promise.resolve();
            }
            else {
                // See if the list name exists
                if (listName) {
                    // Get the list
                    target = new __1.List(listName);
                    // Log
                    console.log("[gd-sprest] Creating fields for the '" + listName + "' list.");
                }
                else {
                    // Get the web
                    target = new __1.Web();
                    // Log
                    console.log("[gd-sprest] Creating fields for the current web.");
                }
                // Get the fields
                target.Fields().execute(function (fields) {
                    var counter = 0;
                    var fldTitle = null;
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
                        }
                        // Parse the custom fields
                        for (var j = 0; j < customFields.length; j++) {
                            // See if this is a custom field
                            if (customFields[j].Name == field.InternalName) {
                                // Increment the counter
                                counter++;
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
                            // Create the field, but wait for the previous request to complete first
                            fields.createFieldAsXml(customFields[i].SchemaXml).execute(true);
                        }
                    }
                    // Wait for all requests to complete
                    fields.done(function () {
                        // Log
                        console.log("[gd-sprest] All fields were successfully created.");
                    });
                });
            }
            // Return a promise
            return promise;
        };
        // Method to create a list
        this.createList = function (index, promise) {
            // Default the index
            index = typeof (index) === "number" ? index : 0;
            // See if we are done
            if (index >= _this._configuration.ListCfg.length) {
                // Resolve the promise
                promise.resolve();
                return;
            }
            // Get the configuration
            var cfg = _this._configuration.ListCfg[index];
            // Default the promise
            promise = promise ? promise : new utils_1.Promise();
            // Get the list
            (new __1.List(cfg.ListInformation.Title)).execute(function (list) {
                // See if the list exists
                if (list.existsFl) {
                    // Create the next list
                    _this.createList(index + 1, promise);
                }
                // Remove spaces from the list name
                var listName = cfg.ListInformation.Title;
                cfg.ListInformation.Title = listName.replace(/ /g, "");
                // Get the web
                (new __1.Web())
                    .Lists()
                    .add(cfg.ListInformation)
                    .execute(function (list) {
                    // Update the list configuration
                    cfg.ListInformation.Title = listName;
                    // See if we need to update the list
                    if (list.existsFl && list.Title != listName) {
                        // Update the list
                        list.update({ Title: listName }).execute();
                    }
                    // Wait for the requests to complete
                    list.done(function () {
                        // Create the next list
                        _this.createList(index + 1, promise);
                    });
                });
            });
            // Return a promise
            return promise;
        };
        // Method to create the lists
        this.createLists = function () {
            var promise = new utils_1.Promise();
            // Create the content types
            _this.createContentTypes().done(function () {
                // Ensure lists exist
                if (_this._configuration.ListCfg == null || _this._configuration.ListCfg.length == 0) {
                    // Resolve the promise
                    promise.resolve();
                }
                else {
                    // Log
                    console.log("[gd-sprest] Starting to create/update the lists.");
                    // Create the list
                    _this.createList().done(function () {
                        // Resolve the promise
                        promise.resolve();
                    });
                }
            });
            // Return a promise
            return promise;
        };
        // Method to create the user custom action
        this.createUserCustomAction = function (siteFl, index, promise) {
            var cfgs = siteFl ? _this._configuration.CustomActionCfg.Site : _this._configuration.CustomActionCfg.Web;
            // Default the index
            index = typeof (index) === "number" ? index : 0;
            // See if we are done
            if (index >= cfgs.length) {
                // Resolve the promise
                promise.resolve();
                return;
            }
            // Get the configuration
            var cfg = cfgs[index];
            // Default the promise
            promise = promise ? promise : new utils_1.Promise();
            // Get the user custom actions
            var customActions = (siteFl ? new __1.Site() : new __1.Web()).UserCustomActions();
            // Query for this custom action
            customActions.query({
                Filter: "Name eq '" + cfg.Name + "'"
            }).execute(function (ca) {
                // See if this custom action exists
                if (ca.existsFl) {
                    // Log
                    console.log("[gd-sprest] The " + (siteFl ? "site" : "web") + " custom action '" + cfg.Name + "' already exists.");
                }
                else {
                    // Create the custom action
                    customActions.add(cfg).execute(true);
                }
                // Wait for the requests to complete
                customActions.done(function () {
                    // Create the next user custom action
                    _this.createUserCustomAction(siteFl, index + 1, promise);
                });
            });
            // Return the promise
            return promise;
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function () {
            var counter = 0;
            var promise = new utils_1.Promise();
            // Ensure custom actions exist
            if (_this._configuration.CustomActionCfg == null) {
                return;
            }
            // See if we are creating site custom actions
            if (_this._configuration.CustomActionCfg.Site && _this._configuration.CustomActionCfg.Site.length > 0) {
                // Log
                console.log("[gd-sprest] Starting to create the site user custom actions.");
                // Increment the counter
                counter++;
                // Create the user custom action
                _this.createUserCustomAction(true).done(function () {
                    // See if we are done
                    if (++counter)
                        // Resolve the promise
                        promise.resolve();
                });
            }
            // See if we are creating web custom actions
            if (_this._configuration.CustomActionCfg.Web && _this._configuration.CustomActionCfg.Web.length > 0) {
                // Log
                console.log("[gd-sprest] Starting to create the site user custom actions.");
                // Increment the counter
                counter++;
                // Create the user custom action
                _this.createUserCustomAction(false).done(function () {
                    // See if we are done
                    if (++counter)
                        // Resolve the promise
                        promise.resolve();
                });
            }
            // Return a promise
            return promise;
        };
        // Save the configuration
        this._configuration = cfg;
    }
    // Method to execute the request
    SPConfig.prototype.execute = function (callback) {
        // Create the lists
        this.createLists().done(function () {
            // Log
            console.log("[gd-sprest] Execution has completed.");
            // See if the callback exists
            if (callback && typeof (callback) === "function") {
                // Execute the callback
                callback();
            }
        });
    };
    return SPConfig;
}());
exports.SPConfig = SPConfig;
;
//# sourceMappingURL=web.js.map