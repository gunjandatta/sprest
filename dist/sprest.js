var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    $REST.DefaultRequestToHostWebFl = false;
    $REST.Library = {};
    var SP;
    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    var Base = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Base(targetInfo) {
            // Default the properties
            this.targetInfo = targetInfo || {};
            this.requestType = 0;
        }
        Object.defineProperty(Base.prototype, "response", {
            // Method to return the xml http request's response
            get: function () { return this.request ? this.request.response : null; },
            enumerable: true,
            configurable: true
        });
        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/
        // Method to execute a child request
        Base.prototype.execute = function (arg) {
            var _this = this;
            var callback = typeof (arg) === "boolean" ? null : arg;
            var syncFl = typeof (arg) === "boolean" ? arg : false;
            // Add this object to the responses
            this.base.responses.push(this);
            // See if this is a synchronous request
            if (syncFl) {
                // Execute this request
                return this.executeRequest(!syncFl, callback);
            }
            // Create the promise
            this.promise = new $REST.Utils.Promise(callback || this.targetInfo.callback);
            // Execute this request
            return this.executeRequest(!syncFl, function () {
                // Wait for the responses to complete
                _this.waitForRequestsToComplete(function () {
                    var responses = _this.base.responses;
                    // Clear the responses
                    _this.base.responses = [];
                    // Resolve the promise
                    _this.promise.resolve.apply(_this.promise, responses);
                });
            });
        };
        // Method to execute this method before the next method executes
        Base.prototype.next = function () {
            // Add this object to the responses
            this.base.responses.push(this);
            // Execute the request
            this.executeRequest(true, null);
            // Return the base object
            return this.base;
        };
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/
        // Method to add the methods to this object
        Base.prototype.addMethods = function (obj, data) {
            var isCollection = data.results && data.results.length > 0;
            // Determine the metadata
            var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
            // Determine the object type
            var objType = metadata && metadata.type ? metadata.type : this.targetInfo.endpoint;
            objType = objType.split('/');
            objType = (objType[objType.length - 1]);
            objType = objType.split('.');
            objType = (objType[objType.length - 1]).toLowerCase();
            objType += isCollection && data.results.length > 1 ? "s" : "";
            // See if this is a field
            if ((/^field/.test(objType) || /field$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
                // Update the type
                objType = "field" + (isCollection ? "s" : "");
            }
            else if (/item$/.test(objType)) {
                // Update the type
                objType = "listitem";
            }
            else if (/items$/.test(objType)) {
                // Update the type
                objType = "items";
            }
            // Get the methods for this object
            var methods = $REST.Library[objType];
            if (methods) {
                // Parse the methods
                for (var methodName in methods) {
                    // Get the method information
                    var methodInfo = methods[methodName] ? methods[methodName] : {};
                    // See if this is the "Properties" definition for the object
                    if (methodName == "properties") {
                        // Parse the properties
                        for (var _i = 0, methodInfo_1 = methodInfo; _i < methodInfo_1.length; _i++) {
                            var property = methodInfo_1[_i];
                            var propInfo = property.split("|");
                            // Get the metadata type
                            var propName = propInfo[0];
                            var propType = propInfo.length > 1 ? propInfo[1] : null;
                            var subPropName = propInfo.length > 2 ? propInfo[2] : null;
                            var subPropType = propInfo.length > 3 ? propInfo[3] : null;
                            // See if this property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");
                                // Add the property
                                obj[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                // Add the property
                                obj[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
                            }
                        }
                        // Continue the loop
                        continue;
                    }
                    // See if this object has a dynamic metadata type
                    if (typeof (methodInfo.metadataType) === "function") {
                        // Clone the object properties
                        methodInfo = JSON.parse(JSON.stringify(methodInfo));
                        // Set the metadata type
                        methodInfo.metadataType = methods[methodName].metadataType(obj);
                    }
                    // Add the method to the object
                    obj[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
                }
            }
        };
        // Method to add properties to this object
        Base.prototype.addProperties = function (obj, data) {
            // Parse the data properties
            for (var key in data) {
                var value = data[key];
                // Skip properties
                if (key == "__metadata" || key == "results") {
                    continue;
                }
                // See if this is a collection property
                if (value && value.__deferred && value.__deferred.uri) {
                    // Generate a method for this property
                    obj["get_" + key] = obj["get_" + key] ? obj["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
                }
                else {
                    // Append the property to this object
                    obj[key] = value;
                }
            }
        };
        // Method to execute a method
        Base.prototype.executeMethod = function (methodName, methodConfig, args) {
            var baseObj = this.request == null && this.parent && this.parent.request ? this.parent : this;
            var targetInfo = null;
            // See if the metadata is defined for this object
            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if (metadata && metadata.uri) {
                // Create the target information and use the url defined for this object
                targetInfo = {
                    url: metadata.uri
                };
                // See if we are inheriting the metadata type
                if (methodConfig.inheritMetadataType) {
                    // Copy the metadata type
                    methodConfig.metadataType = metadata.type;
                }
                // Update the metadata uri
                baseObj.updateMetadataUri(metadata, targetInfo);
            }
            else {
                // Copy the target information
                targetInfo = Object.create(baseObj.targetInfo);
            }
            // Get the method information
            var methodInfo = new $REST.Utils.MethodInfo(methodName, methodConfig, args);
            // Update the target information
            targetInfo.bufferFl = methodConfig.requestType == $REST.Types.RequestType.GetBuffer;
            targetInfo.data = methodInfo.body;
            targetInfo.method = methodInfo.requestMethod;
            // See if we are replacing the endpoint
            if (methodInfo.replaceEndpointFl) {
                // Replace the endpoint
                targetInfo.endpoint = methodInfo.url;
            }
            else if (methodInfo.url && methodInfo.url.length > 0) {
                // Append the method to the endpoint
                targetInfo.endpoint = (targetInfo.endpoint ? targetInfo.endpoint + "/" : "") + methodInfo.url;
            }
            // Create a new object
            var obj = new Base(targetInfo);
            // Set the properties
            obj.base = this.base ? this.base : this;
            obj.parent = this;
            obj.requestType = methodConfig.requestType;
            // Add the methods
            methodConfig.returnType ? obj.addMethods(obj, { __metadata: { type: methodConfig.returnType } }) : null;
            // Return the object
            return obj;
        };
        // Method to execute the request
        Base.prototype.executeRequest = function (asyncFl, callback) {
            var _this = this;
            // See if this is an asynchronous request
            if (asyncFl) {
                // Create the request
                this.request = new $REST.Utils.Request(asyncFl, new $REST.Utils.TargetInfo(this.targetInfo), function () {
                    // Update this data object
                    _this.updateDataObject();
                    // Execute the callback
                    callback ? callback() : null;
                });
            }
            else {
                // Create the request
                this.request = new $REST.Utils.Request(asyncFl, new $REST.Utils.TargetInfo(this.targetInfo));
                // Update this data object and return it
                return this.updateDataObject() || this;
            }
        };
        // Method to return a collection
        Base.prototype.getCollection = function (method, args) {
            // Copy the target information
            var targetInfo = Object.create(this.targetInfo);
            // See if the metadata is defined for this object
            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if (metadata && metadata.uri) {
                // Update the url of the target information
                targetInfo.url = metadata.uri;
                // Update the metadata uri
                this.updateMetadataUri(metadata, targetInfo);
                // Set the endpoint
                targetInfo.endpoint = method;
            }
            else {
                // Append the method to the endpoint
                targetInfo.endpoint += "/" + method;
            }
            // Update the callback
            targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
            // Create a new object
            var obj = new Base(targetInfo);
            // Set the properties
            obj.base = this.base ? this.base : this;
            obj.parent = this;
            // Return the object
            return obj;
        };
        // Method to return a property of this object
        Base.prototype.getProperty = function (propertyName, requestType) {
            // Copy the target information
            var targetInfo = Object.create(this.targetInfo);
            // See if the metadata is defined for this object
            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if (metadata && metadata.uri) {
                // Update the url of the target information
                targetInfo.url = metadata.uri;
                // Update the metadata uri
                this.updateMetadataUri(metadata, targetInfo);
                // Set the endpoint
                targetInfo.endpoint = propertyName;
            }
            else {
                // Append the property name to the endpoint
                targetInfo.endpoint += "/" + propertyName;
            }
            // Create a new object
            var obj = new Base(targetInfo);
            // Set the properties
            obj.base = this.base ? this.base : this;
            obj.parent = this;
            // Add the methods
            requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
            // Return the object
            return obj;
        };
        // Method to update a collection object
        Base.prototype.updateDataCollection = function (results) {
            var _this = this;
            // Ensure this is a collection
            if (results) {
                // Save the property
                this["results"] = results;
                // Update the flag
                this["existsFl"] = results.length > 0;
                // See if only one object exists
                if (results.length == 1) {
                    // Update the metadata
                    this.updateMetadata(results[0]);
                    // Apply the properties to the object
                    this.addProperties(this, results[0]);
                    // Add the methods
                    this.addMethods(results[0], results[0]);
                    // Add the execute method and parent reference
                    results[0]["executeMethod"] = this.executeMethod;
                    results[0]["parent"] = this;
                    // Copy the metadata
                    this["d"].__metadata = results[0].__metadata;
                }
                else {
                    // Apply the methods to the results asynchronously
                    setTimeout(function () {
                        var results = _this["results"];
                        // Parse the results
                        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                            var result = results_1[_i];
                            // Add the execute method and parent reference
                            result["executeMethod"] = _this.executeMethod;
                            result["parent"] = _this;
                            // Update the metadata
                            _this.updateMetadata(result);
                            // Add the methods
                            _this.addMethods(result, result);
                        }
                    }, 10);
                }
            }
        };
        // Method to convert the input arguments into an object
        Base.prototype.updateDataObject = function () {
            // Ensure the request doesn't have an error code
            if (this.request.request.status < 400) {
                // Return if we are expecting a buffer
                if (this.requestType == $REST.Types.RequestType.GetBuffer) {
                    // Set the exists flag
                    this["existsFl"] = this.request.response != null;
                }
                else {
                    // Get the response
                    var response = this.request.response;
                    response = response === "" ? "{}" : response;
                    // Convert the response
                    var data = JSON.parse(response);
                    this["existsFl"] = typeof (this["Exists"]) === "boolean" ? this["Exists"] : data.error == null;
                    // See if the data properties exists
                    if (data.d) {
                        // Save a reference to it
                        this["d"] = data.d;
                        // Update the metadata
                        this.updateMetadata(data.d);
                        // Update this object's properties
                        this.addProperties(this, data.d);
                        // Add the methods
                        this.addMethods(this, data.d);
                        // Update the data collection
                        this.updateDataCollection(data.d.results);
                    }
                }
            }
        };
        // Method to update the metadata
        Base.prototype.updateMetadata = function (data) {
            // Ensure this is the app web
            if (!window["_spPageContextInfo"].isAppWeb) {
                return;
            }
            // Get the url information
            var hostUrl = window["_spPageContextInfo"].webAbsoluteUrl.toLowerCase();
            var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
            var targetUrl = this.targetInfo && this.targetInfo.url ? this.targetInfo.url.toLowerCase() : null;
            // Ensure the urls exist
            if (hostUrl == null || requestUrl == null || targetUrl == null) {
                return;
            }
            // Update the metadata uri
            data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
        };
        // Method to update the metadata uri
        Base.prototype.updateMetadataUri = function (metadata, targetInfo) {
            // See if this is a field
            if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
                // Fix the uri reference
                targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
            }
            else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
                // Fix the uri reference
                targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
            }
        };
        // Method to wait for the parent requests to complete
        Base.prototype.waitForRequestsToComplete = function (callback) {
            var _this = this;
            // Loop until the requests have completed
            var intervalId = window.setInterval(function () {
                // See if the requests have completed
                for (var _i = 0, _a = _this.base.responses; _i < _a.length; _i++) {
                    var response = _a[_i];
                    // Return if the request hasn't completed
                    if (response.request == null || !response.request.completedFl) {
                        return;
                    }
                }
                // Clear the interval
                window.clearInterval(intervalId);
                // Execute the callback
                callback();
            }, 10);
        };
        return Base;
    }());
    $REST.Base = Base;
})($REST || ($REST = {}));




var $REST;
(function ($REST) {
    var Types;
    (function (Types) {
        // Request Type
        (function (RequestType) {
            // Requests
            RequestType[RequestType["Custom"] = 0] = "Custom";
            RequestType[RequestType["Delete"] = 1] = "Delete";
            RequestType[RequestType["Merge"] = 2] = "Merge";
            RequestType[RequestType["OData"] = 3] = "OData";
            // Get Requests
            RequestType[RequestType["Get"] = 10] = "Get";
            RequestType[RequestType["GetWithArgs"] = 11] = "GetWithArgs";
            RequestType[RequestType["GetWithArgsInBody"] = 12] = "GetWithArgsInBody";
            RequestType[RequestType["GetWithArgsInQS"] = 13] = "GetWithArgsInQS";
            RequestType[RequestType["GetWithArgsValueOnly"] = 14] = "GetWithArgsValueOnly";
            RequestType[RequestType["GetReplace"] = 15] = "GetReplace";
            // Post Requests
            RequestType[RequestType["Post"] = 20] = "Post";
            RequestType[RequestType["PostWithArgs"] = 21] = "PostWithArgs";
            RequestType[RequestType["PostWithArgsInBody"] = 22] = "PostWithArgsInBody";
            RequestType[RequestType["PostWithArgsInQS"] = 23] = "PostWithArgsInQS";
            RequestType[RequestType["PostWithArgsValueOnly"] = 24] = "PostWithArgsValueOnly";
            RequestType[RequestType["PostReplace"] = 25] = "PostReplace";
            // Remove if no longer needed
            RequestType[RequestType["GetAppendMethodToEndPoint"] = 30] = "GetAppendMethodToEndPoint";
            RequestType[RequestType["GetBuffer"] = 31] = "GetBuffer";
            RequestType[RequestType["GetDataAsParameter"] = 32] = "GetDataAsParameter";
            RequestType[RequestType["GetDataInBody"] = 33] = "GetDataInBody";
            RequestType[RequestType["GetDataInBodyNoArgs"] = 34] = "GetDataInBodyNoArgs";
            RequestType[RequestType["PostAppendMethodToEndPoint"] = 35] = "PostAppendMethodToEndPoint";
            RequestType[RequestType["PostDataAsParameter"] = 36] = "PostDataAsParameter";
            RequestType[RequestType["PostDataInBody"] = 37] = "PostDataInBody";
            RequestType[RequestType["PostDataInBodyNoArgs"] = 38] = "PostDataInBodyNoArgs";
        })(Types.RequestType || (Types.RequestType = {}));
        var RequestType = Types.RequestType;
    })(Types = $REST.Types || ($REST.Types = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Types;
    (function (Types) {
        /**
         * Control Modes
         */
        (function (ControlMode) {
            /** A placeholder value in the enumeration indicating that it has no valid display mode from one of the other enumeration values. */
            ControlMode[ControlMode["Invalid"] = 0] = "Invalid";
            /** Specifies that the control is in display mode. */
            ControlMode[ControlMode["Display"] = 1] = "Display";
            /** Specifies that the control is in edit mode. */
            ControlMode[ControlMode["Edit"] = 2] = "Edit";
            /** Specifies that the control is in New mode. */
            ControlMode[ControlMode["New"] = 3] = "New";
        })(Types.ControlMode || (Types.ControlMode = {}));
        var ControlMode = Types.ControlMode;
        /**
         * Draft Visibility Types
         */
        (function (DraftVisibilityType) {
            /** Enumeration whose values specify that the minimum permission is approver. */
            DraftVisibilityType[DraftVisibilityType["Approver"] = 2] = "Approver";
            /** Enumeration whose values specify that the minimum permission is author. */
            DraftVisibilityType[DraftVisibilityType["Author"] = 1] = "Author";
            /** Enumeration whose values specify that the minimum permission is reader. */
            DraftVisibilityType[DraftVisibilityType["Reader"] = 0] = "Reader";
        })(Types.DraftVisibilityType || (Types.DraftVisibilityType = {}));
        var DraftVisibilityType = Types.DraftVisibilityType;
        /**
         * Event Receiver Types
         */
        (function (EventReceiverType) {
            /** Event that occurs before an item has been added. */
            EventReceiverType[EventReceiverType["ItemAdding"] = 1] = "ItemAdding";
            /** Event that occurs before an item is updated. */
            EventReceiverType[EventReceiverType["ItemUpdating"] = 2] = "ItemUpdating";
            /** Event that occurs before an item is deleted. */
            EventReceiverType[EventReceiverType["ItemDeleting"] = 3] = "ItemDeleting";
            /** Event that occurs before an item has been checked in. */
            EventReceiverType[EventReceiverType["ItemCheckingIn"] = 4] = "ItemCheckingIn";
            /** Event that occurs before an item is checked out. */
            EventReceiverType[EventReceiverType["ItemCheckingOut"] = 5] = "ItemCheckingOut";
            /** Event that occurs before an item is unchecked out. */
            EventReceiverType[EventReceiverType["ItemUncheckingOut"] = 6] = "ItemUncheckingOut";
            /** Event that occurs before an attachment has been added to an item. */
            EventReceiverType[EventReceiverType["ItemAttachmentAdding"] = 7] = "ItemAttachmentAdding";
            /** Event that occurs before an attachment has been removed from the item. */
            EventReceiverType[EventReceiverType["ItemAttachmentDeleting"] = 8] = "ItemAttachmentDeleting";
            /** Event that occurs before a file is moved. */
            EventReceiverType[EventReceiverType["ItemFileMoving"] = 9] = "ItemFileMoving";
            /** Event that occurs before a document version is deleted. */
            EventReceiverType[EventReceiverType["ItemVersionDeleting"] = 11] = "ItemVersionDeleting";
            /** Event that occurs before a field is added to a list. */
            EventReceiverType[EventReceiverType["FieldAdding"] = 101] = "FieldAdding";
            /** Event that occurs before a field is updated. */
            EventReceiverType[EventReceiverType["FieldUpdating"] = 102] = "FieldUpdating";
            /** Event that occurs before a field is removed from a list. */
            EventReceiverType[EventReceiverType["FieldDeleting"] = 103] = "FieldDeleting";
            /** Event that occurs before a list is created. */
            EventReceiverType[EventReceiverType["ListAdding"] = 104] = "ListAdding";
            /** Event that occurs before a list is deleted. */
            EventReceiverType[EventReceiverType["ListDeleting"] = 105] = "ListDeleting";
            /** Event that occurs before a site collection is deleted. */
            EventReceiverType[EventReceiverType["SiteDeleting"] = 201] = "SiteDeleting";
            /** Event that occurs before a site is deleted. */
            EventReceiverType[EventReceiverType["WebDeleting"] = 202] = "WebDeleting";
            /** Event that occurs before a site URL has been changed. */
            EventReceiverType[EventReceiverType["WebMoving"] = 203] = "WebMoving";
            /** Event that occurs before a new site is created. */
            EventReceiverType[EventReceiverType["WebAdding"] = 204] = "WebAdding";
            /** Event that occurs before a security group is added. */
            EventReceiverType[EventReceiverType["GroupAdding"] = 301] = "GroupAdding";
            /** Event that occurs before a security group is updated. */
            EventReceiverType[EventReceiverType["GroupUpdating"] = 302] = "GroupUpdating";
            /** Event that occurs before a security group is deleted. */
            EventReceiverType[EventReceiverType["GroupDeleting"] = 303] = "GroupDeleting";
            /** Event that occurs before a user is added to a security group. */
            EventReceiverType[EventReceiverType["GroupUserAdding"] = 304] = "GroupUserAdding";
            /** Event that occurs before a user is deleted from a security group. */
            EventReceiverType[EventReceiverType["GroupUserDeleting"] = 305] = "GroupUserDeleting";
            /** Event that occurs before a role definition is added. */
            EventReceiverType[EventReceiverType["RoleDefinitionAdding"] = 306] = "RoleDefinitionAdding";
            /** Event that occurs before a role definition is updated. */
            EventReceiverType[EventReceiverType["RoleDefinitionUpdating"] = 307] = "RoleDefinitionUpdating";
            /** Event that occurs before a role definition is deleted. */
            EventReceiverType[EventReceiverType["RoleDefinitionDeleting"] = 308] = "RoleDefinitionDeleting";
            /** Event that occurs before a role assignment is added. */
            EventReceiverType[EventReceiverType["RoleAssignmentAdding"] = 309] = "RoleAssignmentAdding";
            /** Event that occurs before a role assignment is deleted. */
            EventReceiverType[EventReceiverType["RoleAssignmentDeleting"] = 310] = "RoleAssignmentDeleting";
            /** Event that occurs before an inheritance is broken. */
            EventReceiverType[EventReceiverType["InheritanceBreaking"] = 311] = "InheritanceBreaking";
            /** Event that occurs before an inheritance is restored. */
            EventReceiverType[EventReceiverType["InheritanceResetting"] = 312] = "InheritanceResetting";
            /** Event that occurs before a workflow starts running. */
            EventReceiverType[EventReceiverType["WorkflowStarting"] = 501] = "WorkflowStarting";
            /** Event that occurs after an item has been added. */
            EventReceiverType[EventReceiverType["ItemAdded"] = 10001] = "ItemAdded";
            /** Event that occurs after an item has been updated. */
            EventReceiverType[EventReceiverType["ItemUpdated"] = 10002] = "ItemUpdated";
            /** Event that occurs after an item has been deleted. */
            EventReceiverType[EventReceiverType["ItemDeleted"] = 10003] = "ItemDeleted";
            /** Event that occurs after an item has been checked in. */
            EventReceiverType[EventReceiverType["ItemCheckedIn"] = 10004] = "ItemCheckedIn";
            /** Event that occurs after an item has been checked out. */
            EventReceiverType[EventReceiverType["ItemCheckedOut"] = 10005] = "ItemCheckedOut";
            /** Event that occurs after an item has been unchecked out. */
            EventReceiverType[EventReceiverType["ItemUncheckedOut"] = 10006] = "ItemUncheckedOut";
            /** Event that occurs after an attachment has been added to the item. */
            EventReceiverType[EventReceiverType["ItemAttachmentAdded"] = 10007] = "ItemAttachmentAdded";
            /** Event that occurs after an attachment has been removed from the item. */
            EventReceiverType[EventReceiverType["ItemAttachmentDeleted"] = 10008] = "ItemAttachmentDeleted";
            /** Event that occurs after a file has been moved. */
            EventReceiverType[EventReceiverType["ItemFileMoved"] = 10009] = "ItemFileMoved";
            /** Event that occurs after a file is transformed from one type to another. */
            EventReceiverType[EventReceiverType["ItemFileConverted"] = 10010] = "ItemFileConverted";
            /** Event that occurs after a document version is deleted. */
            EventReceiverType[EventReceiverType["ItemVersionDeleted"] = 10011] = "ItemVersionDeleted";
            /** Event that occurs after a field has been added. */
            EventReceiverType[EventReceiverType["FieldAdded"] = 10101] = "FieldAdded";
            /** Event that occurs after a field has been updated. */
            EventReceiverType[EventReceiverType["FieldUpdated"] = 10102] = "FieldUpdated";
            /** Event that occurs after a field has been removed. */
            EventReceiverType[EventReceiverType["FieldDeleted"] = 10103] = "FieldDeleted";
            /** Event that occurs after a list has been created. */
            EventReceiverType[EventReceiverType["ListAdded"] = 10104] = "ListAdded";
            /** Event that occurs after a list has been deleted. */
            EventReceiverType[EventReceiverType["ListDeleted"] = 10105] = "ListDeleted";
            /** Event that occurs after a site collection has been deleted. */
            EventReceiverType[EventReceiverType["SiteDeleted"] = 10201] = "SiteDeleted";
            /** Event that occurs after a site has been deleted. */
            EventReceiverType[EventReceiverType["WebDeleted"] = 10202] = "WebDeleted";
            /** Event that occurs after a site URL has been changed. */
            EventReceiverType[EventReceiverType["WebMoved"] = 10203] = "WebMoved";
            /** Event that occurs after a new site has been created, but before that new site is provisioned. */
            EventReceiverType[EventReceiverType["WebProvisioned"] = 10204] = "WebProvisioned";
            /** Event that occurs happens after a security group is added. */
            EventReceiverType[EventReceiverType["GroupAdded"] = 10301] = "GroupAdded";
            /** Event that occurs after a security group is updated. */
            EventReceiverType[EventReceiverType["GroupUpdated"] = 10302] = "GroupUpdated";
            /** Event that occurs after a security group is deleted. */
            EventReceiverType[EventReceiverType["GroupDeleted"] = 10303] = "GroupDeleted";
            /** Event that occurs after a user is added to a security group. */
            EventReceiverType[EventReceiverType["GroupUserAdded"] = 10304] = "GroupUserAdded";
            /** Event that occurs after a user is deleted from a security group. */
            EventReceiverType[EventReceiverType["GroupUserDeleted"] = 10305] = "GroupUserDeleted";
            /** Event that occurs after a role definition is added. */
            EventReceiverType[EventReceiverType["RoleDefinitionAdded"] = 10306] = "RoleDefinitionAdded";
            /** Event that occurs after a role definition is updated. */
            EventReceiverType[EventReceiverType["RoleDefinitionUpdated"] = 10307] = "RoleDefinitionUpdated";
            /** Event that occurs after a role definition is deleted. */
            EventReceiverType[EventReceiverType["RoleDefinitionDeleted"] = 10308] = "RoleDefinitionDeleted";
            /** Event that occurs after a role assignment is added. */
            EventReceiverType[EventReceiverType["RoleAssignmentAdded"] = 10309] = "RoleAssignmentAdded";
            /** Event that occurs after a role definition is deleted. */
            EventReceiverType[EventReceiverType["RoleAssignmentDeleted"] = 10310] = "RoleAssignmentDeleted";
            /** Event that occurs after an inheritance is broken. */
            EventReceiverType[EventReceiverType["InheritanceBroken"] = 10311] = "InheritanceBroken";
            /** Event that occurs after an inheritance is restored. */
            EventReceiverType[EventReceiverType["InheritanceReset"] = 10312] = "InheritanceReset";
            /** Event that occurs after a workflow has started running. */
            EventReceiverType[EventReceiverType["WorkflowStarted"] = 10501] = "WorkflowStarted";
            /** Event that occurs after a workflow has been postponed. */
            EventReceiverType[EventReceiverType["WorkflowPostponed"] = 10502] = "WorkflowPostponed";
            /** Event that occurs after a workflow has completed running. */
            EventReceiverType[EventReceiverType["WorkflowCompleted"] = 10503] = "WorkflowCompleted";
            /** Event that occurs when an instance of an external content type has been added. */
            EventReceiverType[EventReceiverType["EntityInstanceAdded"] = 10601] = "EntityInstanceAdded";
            /** Event that occurs when an instance of an external content type has been updated. */
            EventReceiverType[EventReceiverType["EntityInstanceUpdated"] = 10602] = "EntityInstanceUpdated";
            /** Event that occurs when an instance of an external content type has been deleted. */
            EventReceiverType[EventReceiverType["EntityInstanceDeleted"] = 10603] = "EntityInstanceDeleted";
            /** Event that occurs after an app is installed. */
            EventReceiverType[EventReceiverType["AppInstalled"] = 10701] = "AppInstalled";
            /** Event that occurs after an app is upgraded. */
            EventReceiverType[EventReceiverType["AppUpgraded"] = 10702] = "AppUpgraded";
            /** Event that occurs before an app is uninstalled. */
            EventReceiverType[EventReceiverType["AppUninstalling"] = 10703] = "AppUninstalling";
            /** Event that occurs after a list receives an e-mail message. */
            EventReceiverType[EventReceiverType["EmailReceived"] = 20000] = "EmailReceived";
            /** Identifies workflow event receivers, and is therefore not a true event type. */
            EventReceiverType[EventReceiverType["ContextEvent"] = 32766] = "ContextEvent";
        })(Types.EventReceiverType || (Types.EventReceiverType = {}));
        var EventReceiverType = Types.EventReceiverType;
        /**
         * Event Receiver Synchronization Types
         */
        (function (EventReceiverSynchronizationType) {
            /** Event to be triggered asynchronously. */
            EventReceiverSynchronizationType[EventReceiverSynchronizationType["Asynchronous"] = 2] = "Asynchronous";
            /** Event to be triggered synchronously. */
            EventReceiverSynchronizationType[EventReceiverSynchronizationType["Synchronization"] = 1] = "Synchronization";
        })(Types.EventReceiverSynchronizationType || (Types.EventReceiverSynchronizationType = {}));
        var EventReceiverSynchronizationType = Types.EventReceiverSynchronizationType;
        /**
         * Field Types
         */
        (function (FieldType) {
            /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
            FieldType[FieldType["AllDayEvent"] = 29] = "AllDayEvent";
            /** Specifies that the field indicates whether the list item has attachments. */
            FieldType[FieldType["Attachments"] = 19] = "Attachments";
            /** Specifies that the field contains a Boolean value. */
            FieldType[FieldType["Boolean"] = 8] = "Boolean";
            /** Specifies that the field is a calculated field. */
            FieldType[FieldType["Calculated"] = 17] = "Calculated";
            /** Specifies that the field contains a single value from a set of specified values. */
            FieldType[FieldType["Choice"] = 6] = "Choice";
            /** Specifies that the field is a computed field. */
            FieldType[FieldType["Computed"] = 12] = "Computed";
            /** Specifies that the field contains a content type identifier as a value. */
            FieldType[FieldType["ContentTypeId"] = 25] = "ContentTypeId";
            /** Specifies that the field contains a monotonically increasing integer. */
            FieldType[FieldType["Counter"] = 5] = "Counter";
            /** Specifies that the field contains a link between projects in a Meeting Workspace site. */
            FieldType[FieldType["CrossProjectLink"] = 22] = "CrossProjectLink";
            /** Specifies that the field contains a currency value. */
            FieldType[FieldType["Currency"] = 10] = "Currency";
            /** Specifies that the field contains a date and time value or a date-only value. */
            FieldType[FieldType["DateTime"] = 4] = "DateTime";
            /** Specifies that the type of the field was set to an invalid value. */
            FieldType[FieldType["Error"] = 24] = "Error";
            /** Specifies that the field contains the leaf name of a document as a value. */
            FieldType[FieldType["File"] = 18] = "File";
            /** Specifies that the field contains geographical location values. */
            FieldType[FieldType["Geolocation"] = 31] = "Geolocation";
            /** Specifies that the field contains rating scale values for a survey list. */
            FieldType[FieldType["GridChoice"] = 16] = "GridChoice";
            /** Specifies that the field contains a GUID value. */
            FieldType[FieldType["Guid"] = 14] = "Guid";
            /** Specifies that the field contains an integer value. */
            FieldType[FieldType["Integer"] = 1] = "Integer";
            /** Must not be used. */
            FieldType[FieldType["Invalid"] = 0] = "Invalid";
            /** Specifies that the field is a lookup field. */
            FieldType[FieldType["Lookup"] = 7] = "Lookup";
            /** Must not be used. */
            FieldType[FieldType["MaxItems"] = 31] = "MaxItems";
            /** Specifies that the field indicates moderation status. */
            FieldType[FieldType["ModStat"] = 23] = "ModStat";
            /** Specifies that the field contains one or more values from a set of specified values. */
            FieldType[FieldType["MultiChoice"] = 15] = "MultiChoice";
            /** Specifies that the field contains multiple lines of text. */
            FieldType[FieldType["Note"] = 3] = "Note";
            /** Specifies that the field contains a floating-point number value. */
            FieldType[FieldType["Number"] = 9] = "Number";
            /** Specifies that the field separates questions in a survey list onto multiple pages. */
            FieldType[FieldType["PageSeparator"] = 26] = "PageSeparator";
            /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
            FieldType[FieldType["Recurrence"] = 21] = "Recurrence";
            /** Specifies that the field contains a single line of text. */
            FieldType[FieldType["Text"] = 2] = "Text";
            /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */
            FieldType[FieldType["ThreadIndex"] = 27] = "ThreadIndex";
            /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
            FieldType[FieldType["Threading"] = 13] = "Threading";
            /** Specifies that the field contains a URI and an optional description of the URI. */
            FieldType[FieldType["URL"] = 11] = "URL";
            /** Specifies that the field contains one or more users and groups as values. */
            FieldType[FieldType["User"] = 20] = "User";
            /** Specifies that the field contains the most recent event in a workflow instance. */
            FieldType[FieldType["WorkflowEventType"] = 30] = "WorkflowEventType";
            /** Specifies that the field indicates the status of a workflow instance on a list item. */
            FieldType[FieldType["WorkflowStatus"] = 28] = "WorkflowStatus";
        })(Types.FieldType || (Types.FieldType = {}));
        var FieldType = Types.FieldType;
        /**
         * File Template Types
         */
        (function (FileTemplateType) {
            /** Enumeration whose value specifies default form template. */
            FileTemplateType[FileTemplateType["FormPage"] = 2] = "FormPage";
            /** Enumeration whose value specifies default view template. */
            FileTemplateType[FileTemplateType["StandardPage"] = 0] = "StandardPage";
            /** Enumeration whose value specifies default wiki template. */
            FileTemplateType[FileTemplateType["WikiPage"] = 1] = "WikiPage";
        })(Types.FileTemplateType || (Types.FileTemplateType = {}));
        var FileTemplateType = Types.FileTemplateType;
        /**
         * List Template Types
         */
        (function (ListTemplateType) {
            /** Access Request List */
            ListTemplateType[ListTemplateType["AccessRequest"] = 160] = "AccessRequest";
            /** Administrator Tasks */
            ListTemplateType[ListTemplateType["AdminTasks"] = 1200] = "AdminTasks";
            /** Agenda (Meeting) */
            ListTemplateType[ListTemplateType["Agenda"] = 201] = "Agenda";
            /** App Data Catalog */
            ListTemplateType[ListTemplateType["AppDataCatalog"] = 125] = "AppDataCatalog";
            /** Announcements */
            ListTemplateType[ListTemplateType["Announcements"] = 104] = "Announcements";
            /** Call Track */
            ListTemplateType[ListTemplateType["CallTrack"] = 404] = "CallTrack";
            /** Categories (Blog) */
            ListTemplateType[ListTemplateType["Categories"] = 303] = "Categories";
            /** Circulation */
            ListTemplateType[ListTemplateType["Circulation"] = 405] = "Circulation";
            /** Comments (Blog) */
            ListTemplateType[ListTemplateType["Comments"] = 302] = "Comments";
            /** Contacts */
            ListTemplateType[ListTemplateType["Contacts"] = 105] = "Contacts";
            /** Custom grid for a list */
            ListTemplateType[ListTemplateType["CustomGrid"] = 120] = "CustomGrid";
            /** Data connection library for sharing information about external data connections */
            ListTemplateType[ListTemplateType["DataConnectionLibrary"] = 130] = "DataConnectionLibrary";
            /** Data sources for a site */
            ListTemplateType[ListTemplateType["DataSources"] = 110] = "DataSources";
            /** Decisions (Meeting) */
            ListTemplateType[ListTemplateType["Decision"] = 204] = "Decision";
            /** Design Catalog */
            ListTemplateType[ListTemplateType["DesignCatalog"] = 124] = "DesignCatalog";
            /** Draft Apps library in Developer Site */
            ListTemplateType[ListTemplateType["DeveloperSiteDraftApps"] = 1230] = "DeveloperSiteDraftApps";
            /** Discussion board */
            ListTemplateType[ListTemplateType["DiscussionBoard"] = 108] = "DiscussionBoard";
            /** Document library */
            ListTemplateType[ListTemplateType["DocumentLibrary"] = 101] = "DocumentLibrary";
            /** Calendar */
            ListTemplateType[ListTemplateType["Events"] = 106] = "Events";
            /** External */
            ListTemplateType[ListTemplateType["ExternalList"] = 600] = "ExternalList";
            /** Facility */
            ListTemplateType[ListTemplateType["Facility"] = 402] = "Facility";
            /** Project Tasks */
            ListTemplateType[ListTemplateType["GanttTasks"] = 150] = "GanttTasks";
            /** Custom list */
            ListTemplateType[ListTemplateType["GenericList"] = 100] = "GenericList";
            /** Health Reports */
            ListTemplateType[ListTemplateType["HealthReports"] = 1221] = "HealthReports";
            /** Health Rules */
            ListTemplateType[ListTemplateType["HealthRules"] = 1220] = "HealthRules";
            /** Help Library */
            ListTemplateType[ListTemplateType["HelpLibrary"] = 151] = "HelpLibrary";
            /** Holidays */
            ListTemplateType[ListTemplateType["Holidays"] = 421] = "Holidays";
            /** Workspace Pages (Meeting) */
            ListTemplateType[ListTemplateType["HomePageLibrary"] = 212] = "HomePageLibrary";
            /** IME (Input Method Editor) Dictionary */
            ListTemplateType[ListTemplateType["IMEDic"] = 499] = "IMEDic";
            /** Issue tracking */
            ListTemplateType[ListTemplateType["IssueTracking"] = 1100] = "IssueTracking";
            /** Links */
            ListTemplateType[ListTemplateType["Links"] = 103] = "Links";
            /** List Template gallery */
            ListTemplateType[ListTemplateType["ListTemplateCatalog"] = 114] = "ListTemplateCatalog";
            /** Master Page gallery */
            ListTemplateType[ListTemplateType["MasterPageCatalog"] = 116] = "MasterPageCatalog";
            /** Maintenance Logs Library */
            ListTemplateType[ListTemplateType["MaintenanceLogs"] = 175] = "MaintenanceLogs";
            /** Objectives (Meeting) */
            ListTemplateType[ListTemplateType["MeetingObjective"] = 207] = "MeetingObjective";
            /** Meeting Series (Meeting) */
            ListTemplateType[ListTemplateType["Meetings"] = 200] = "Meetings";
            /** Attendees (Meeting) */
            ListTemplateType[ListTemplateType["MeetingUser"] = 202] = "MeetingUser";
            /** My Site Document Library */
            ListTemplateType[ListTemplateType["MySiteDocumentLibrary"] = 700] = "MySiteDocumentLibrary";
            /** Posts (Blog) */
            ListTemplateType[ListTemplateType["Posts"] = 301] = "Posts";
            /** No Code Public Workflow */
            ListTemplateType[ListTemplateType["NoCodePublic"] = 122] = "NoCodePublic";
            /** No Code Workflows */
            ListTemplateType[ListTemplateType["NoCodeWorkflows"] = 117] = "NoCodeWorkflows";
            /** Picture library */
            ListTemplateType[ListTemplateType["PictureLibrary"] = 109] = "PictureLibrary";
            /** Solutions */
            ListTemplateType[ListTemplateType["SolutionCatalog"] = 121] = "SolutionCatalog";
            /** Survey */
            ListTemplateType[ListTemplateType["Survey"] = 102] = "Survey";
            /** Tasks */
            ListTemplateType[ListTemplateType["Tasks"] = 107] = "Tasks";
            /** Tasks with Timeline and Hierarchy */
            ListTemplateType[ListTemplateType["TasksWithTimelineAndHierarchy"] = 171] = "TasksWithTimelineAndHierarchy";
            /** Text Box (Meeting) */
            ListTemplateType[ListTemplateType["TextBox"] = 210] = "TextBox";
            /** Themes */
            ListTemplateType[ListTemplateType["ThemeCatalog"] = 123] = "ThemeCatalog";
            /** Things To Bring (Meeting) */
            ListTemplateType[ListTemplateType["ThingsToBring"] = 211] = "ThingsToBring";
            /** Timecard */
            ListTemplateType[ListTemplateType["Timecard"] = 420] = "Timecard";
            /** User Information */
            ListTemplateType[ListTemplateType["UserInformation"] = 112] = "UserInformation";
            /** Wiki Page Library */
            ListTemplateType[ListTemplateType["WebPageLibrary"] = 119] = "WebPageLibrary";
            /** Web Part gallery */
            ListTemplateType[ListTemplateType["WebPartCatalog"] = 113] = "WebPartCatalog";
            /** Site template gallery */
            ListTemplateType[ListTemplateType["WebTemplateCatalog"] = 111] = "WebTemplateCatalog";
            /** Whereabouts */
            ListTemplateType[ListTemplateType["Whereabouts"] = 403] = "Whereabouts";
            /** Workflow History */
            ListTemplateType[ListTemplateType["WorkflowHistory"] = 140] = "WorkflowHistory";
            /** Custom Workflow Process */
            ListTemplateType[ListTemplateType["WorkflowProcess"] = 118] = "WorkflowProcess";
            /** XML Form library */
            ListTemplateType[ListTemplateType["XMLForm"] = 115] = "XMLForm";
        })(Types.ListTemplateType || (Types.ListTemplateType = {}));
        var ListTemplateType = Types.ListTemplateType;
        /**
         * Page Types
         */
        (function (PageType) {
            /** Enumeration whose values specify a page that is the default view for a list. */
            PageType[PageType["DefaultView"] = 0] = "DefaultView";
            /** Enumeration whose values specify a page suitable for display within a dialog box on a client computer. */
            PageType[PageType["DialogView"] = 2] = "DialogView";
            /** Enumeration whose values specify a list form for displaying a list item. */
            PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
            /** Enumeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */
            PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
            /** Enumeration whose values specify a list form for editing a list item. */
            PageType[PageType["EditForm"] = 6] = "EditForm";
            /** Enumeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */
            PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
            /** Enumeration whose values specify a page that does not correspond to a list view or a list form. */
            PageType[PageType["Invalid"] = -1] = "Invalid";
            /** Enumeration whose values specify a list form for creating a new list item. */
            PageType[PageType["NewForm"] = 8] = "NewForm";
            /** Enumeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */
            PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
            /** Enumeration whose values specify a page that is a list view and is not the default view for a list. */
            PageType[PageType["NormalView"] = 1] = "NormalView";
            /** Enumeration whose values specify the total number of valid page types. */
            PageType[PageType["Page_MAXITEMS"] = 11] = "Page_MAXITEMS";
            /** Enumeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */
            PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
            /** Enumeration whose values specify a page that is a list view. */
            PageType[PageType["View"] = 3] = "View";
        })(Types.PageType || (Types.PageType = {}));
        var PageType = Types.PageType;
        /**
         * Role Types
         */
        (function (RoleType) {
            /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
            RoleType[RoleType["Administrator"] = 5] = "Administrator";
            /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
            RoleType[RoleType["Contributor"] = 3] = "Contributor";
            /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
            RoleType[RoleType["Editor"] = 6] = "Editor";
            /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
            RoleType[RoleType["Guest"] = 1] = "Guest";
            /** Enumeration whose values specify that there are no rights on the Web site. */
            RoleType[RoleType["None"] = 0] = "None";
            /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
            RoleType[RoleType["Reader"] = 2] = "Reader";
            /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
            RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
        })(Types.RoleType || (Types.RoleType = {}));
        var RoleType = Types.RoleType;
        /**
         * User Custom Action Registration Types
         */
        (function (UserCustomActionRegistrationType) {
            /** Enumeration whose values specify that the object association is not specified. */
            UserCustomActionRegistrationType[UserCustomActionRegistrationType["None"] = 0] = "None";
            /** Enumeration whose values specify that the custom action is associated with a list. */
            UserCustomActionRegistrationType[UserCustomActionRegistrationType["List"] = 1] = "List";
            /** Enumeration whose values specify that the custom action is associated with a content type. */
            UserCustomActionRegistrationType[UserCustomActionRegistrationType["ContentType"] = 2] = "ContentType";
            /** Enumeration whose values specify that the custom action is associated with a ProgID. */
            UserCustomActionRegistrationType[UserCustomActionRegistrationType["ProgId"] = 3] = "ProgId";
            /** Enumeration whose values specify that the custom action is associated with a file extension. */
            UserCustomActionRegistrationType[UserCustomActionRegistrationType["FileType"] = 4] = "FileType";
        })(Types.UserCustomActionRegistrationType || (Types.UserCustomActionRegistrationType = {}));
        var UserCustomActionRegistrationType = Types.UserCustomActionRegistrationType;
        /**
         * View Types
         */
        (function (ViewType) {
            /** Enumeration whose values specify a calendar list view type. */
            ViewType[ViewType["Calendar"] = 524288] = "Calendar";
            /** Enumeration whose values specify a chart list view type. */
            ViewType[ViewType["Chart"] = 131072] = "Chart";
            /** Enumeration whose values specify a Gantt chart list view type. */
            ViewType[ViewType["Gantt"] = 67108864] = "Gantt";
            /** Enumeration whose values specify a datasheet list view type. */
            ViewType[ViewType["Grid"] = 2048] = "Grid";
            /** Enumeration whose values specify an HTML list view type. */
            ViewType[ViewType["Html"] = 1] = "Html";
            /** Enumeration whose values specify a list view type that displays recurring events. */
            ViewType[ViewType["Recurrence"] = 8193] = "Recurrence";
        })(Types.ViewType || (Types.ViewType = {}));
        var ViewType = Types.ViewType;
    })(Types = $REST.Types || ($REST.Types = {}));
})($REST || ($REST = {}));


var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Dependencies
    // This class will ensure the core SP scripts are loaded on the page.
    /*********************************************************************************************************************************/
    var Dependencies = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Dependencies(callback) {
            // Default the properties
            this.promise = new $REST.Utils.Promise(callback);
            // Load the dependencies
            this.loadDependencies();
        }
        Object.defineProperty(Dependencies.prototype, "MAX_WAIT", {
            /*********************************************************************************************************************************/
            // Constants
            /*********************************************************************************************************************************/
            get: function () { return 5; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Dependencies.prototype, "SCRIPTS", {
            get: function () { return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dependencies.prototype, "pageContextExistsFl", {
            // Flag to determine if the page context information exists
            get: function () { return window.hasOwnProperty("_spPageContextInfo"); },
            enumerable: true,
            configurable: true
        });
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/
        // Method to ensure the SP classes are loaded
        Dependencies.prototype.loadDependencies = function () {
            // See if the page context exists
            if (this.pageContextExistsFl) {
                // Resolve the promise
                this.promise.resolve();
            }
            else {
                // Load the required scripts
                for (var fileName in this.SCRIPTS) {
                    // Create the script element
                    var elScript = document.createElement("script");
                    // Set the properties
                    elScript.setAttribute("src", "/_layouts/15/" + fileName);
                    elScript.setAttribute("type", "text/javascript");
                    // Add the script element to the head
                    document.head.appendChild(elScript);
                }
                // Wait for the page context to exist
                this.waitForPageContext();
            }
        };
        // Method to wait for the page context to be loaded
        Dependencies.prototype.waitForPageContext = function () {
            var counter = 0;
            // Check every 10ms
            var intervalId = window.setInterval(function () {
                // See if the page context exists, and ensure we haven't hit the max attempts
                if (this.pageContextExists() || ++counter >= this.MAX_WAIT) {
                    // Clear the interval
                    window.clearInterval(intervalId);
                    // Resolve the promise
                    this.promise.resolve();
                }
            }, 10);
        };
        return Dependencies;
    }());
    $REST.Dependencies = Dependencies;
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Utils;
    (function (Utils) {
        /*********************************************************************************************************************************/
        // Method Information
        // This class will create the method information for the request.
        /*********************************************************************************************************************************/
        var MethodInfo = (function () {
            /*********************************************************************************************************************************/
            // Constructor
            /*********************************************************************************************************************************/
            function MethodInfo(methodName, methodInfo, args) {
                // Default the properties
                this.methodInfo = methodInfo;
                this.methodInfo.argValues = args;
                this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
                // Generate the parameters
                this.generateParams();
                // Generate the url
                this.methodUrl = this.generateUrl();
            }
            Object.defineProperty(MethodInfo.prototype, "body", {
                /*********************************************************************************************************************************/
                // Public Properties
                /*********************************************************************************************************************************/
                // The data passed through the body of the request
                get: function () { return this.methodData; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
                // Flag to determine if this method replaces the endpoint
                get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "requestMethod", {
                // The request method
                get: function () {
                    // Return the request method if it exists
                    if (typeof (this.methodInfo.requestMethod) === "string") {
                        return this.methodInfo.requestMethod;
                    }
                    // Determine the request method, based on the request type
                    switch (this.methodInfo.requestType) {
                        case $REST.Types.RequestType.Delete:
                        case $REST.Types.RequestType.Post:
                        case $REST.Types.RequestType.PostWithArgs:
                        case $REST.Types.RequestType.PostWithArgsInBody:
                        case $REST.Types.RequestType.PostWithArgsInQS:
                        case $REST.Types.RequestType.PostWithArgsValueOnly:
                        case $REST.Types.RequestType.PostReplace:
                            return "POST";
                        default:
                            return "GET";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "url", {
                // The url of the method and parameters
                get: function () { return this.methodUrl; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
                /*********************************************************************************************************************************/
                // Private Variables
                /*********************************************************************************************************************************/
                get: function () { return this.methodInfo.requestType == $REST.Types.RequestType.GetWithArgsInBody || this.methodInfo.requestType == $REST.Types.RequestType.PostWithArgsInBody; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
                get: function () { return this.methodInfo.requestType == $REST.Types.RequestType.GetWithArgsInQS || this.methodInfo.requestType == $REST.Types.RequestType.PostWithArgsInQS; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "isTemplate", {
                get: function () { return this.methodInfo.data ? true : false; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MethodInfo.prototype, "replace", {
                get: function () { return this.methodInfo.requestType == $REST.Types.RequestType.GetReplace || this.methodInfo.requestType == $REST.Types.RequestType.PostReplace; },
                enumerable: true,
                configurable: true
            });
            /*********************************************************************************************************************************/
            // Private Methods
            /*********************************************************************************************************************************/
            // Method to generate the method input parameters
            MethodInfo.prototype.generateParams = function () {
                var params = {};
                // Ensure values exist
                if (this.methodInfo.argValues == null) {
                    return;
                }
                // See if the argument names exist
                if (this.methodInfo.argNames) {
                    // Parse the argument names
                    for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                        var name_1 = this.methodInfo.argNames[i];
                        var value = this.methodInfo.argValues[i];
                        // Copy the parameter value
                        switch (typeof (this.methodInfo.argValues[i])) {
                            case "boolean":
                                params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                                break;
                            case "number":
                                params[name_1] = this.methodInfo.argValues[i];
                                break;
                            //case "string":
                            //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
                            //break;
                            default:
                                params[name_1] = value;
                                break;
                        }
                    }
                }
                // See if the method has parameters
                var isEmpty = true;
                for (var k in params) {
                    isEmpty = false;
                    break;
                }
                this.methodParams = isEmpty ? null : params;
                // See if method parameters exist
                if (this.methodParams) {
                    // See if a template is defined for the method data
                    if (this.isTemplate) {
                        // Ensure the object is a string
                        if (typeof (this.methodInfo.data) !== "string") {
                            // Stringify the object
                            this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                        }
                        // Parse the arguments
                        for (var key in this.methodParams) {
                            // Replace the argument in the template
                            this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                        }
                        // Set the method data
                        this.methodData = JSON.parse(this.methodInfo.data);
                    }
                }
                // See if argument values exist
                if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
                    // See if argument names exist
                    if (this.methodInfo.argNames == null) {
                        // Set the method data to first argument value
                        this.methodData = this.methodInfo.argValues[0];
                    }
                    else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                        // Set the method data to the next available argument value
                        this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
                    }
                }
                // See if the metadata type exists
                if (this.methodInfo.metadataType) {
                    // See if parameters exist
                    if (this.methodInfo.argNames) {
                        // Append the metadata to the first parameter
                        (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                    else {
                        // Append the metadata to the parameters
                        (this.methodData || this.methodParams)["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                }
            };
            // Method to generate the method and parameters as a url
            MethodInfo.prototype.generateUrl = function () {
                var url = this.methodInfo.name;
                // See if we are deleting the object
                if (this.methodInfo.requestType == $REST.Types.RequestType.Delete) {
                    // Update the url
                    url = "deleteObject";
                }
                // See if we are passing the data in the body
                if (this.passDataInBody) {
                    var data = this.methodData || this.methodParams;
                    // Stringify the data to be passed in the body
                    this.methodData = JSON.stringify(data);
                }
                // See if we are passing the data in the query string
                if (this.passDataInQS) {
                    var data = this.methodParams || this.methodData;
                    // Append the parameters in the query string
                    url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
                }
                // See if we are replacing the arguments
                if (this.replace) {
                    // Parse the arguments
                    for (var key in this.methodParams) {
                        // Replace the argument in the url
                        url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
                    }
                }
                else if (this.methodInfo.requestType == $REST.Types.RequestType.OData) {
                    var oData = new Utils.OData(this.methodParams["oData"]);
                    // Update the url
                    url = "?" + oData.QueryString;
                }
                else if (!this.passDataInBody && !this.passDataInQS) {
                    var params = "";
                    // Ensure data exists
                    var data = this.methodParams || this.methodData;
                    if (data) {
                        // Ensure the data is an object
                        data = data && typeof (data) === "object" ? data : { value: data };
                        // Parse the parameters
                        for (var name_2 in data) {
                            var value = data[name_2];
                            value = typeof (value) === "string" ? "'" + value + "'" : value;
                            switch (this.methodInfo.requestType) {
                                // Append the value only
                                case $REST.Types.RequestType.GetWithArgsValueOnly:
                                case $REST.Types.RequestType.PostWithArgsValueOnly:
                                    params += value + ", ";
                                    break;
                                // Append the parameter and value
                                default:
                                    params += name_2 + "=" + value + ", ";
                                    break;
                            }
                        }
                    }
                    // Set the url
                    url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
                }
                // Return the url
                return url;
            };
            return MethodInfo;
        }());
        Utils.MethodInfo = MethodInfo;
    })(Utils = $REST.Utils || ($REST.Utils = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Utils;
    (function (Utils) {
        /*********************************************************************************************************************************/
        // OData
        // Class for generating the OData query string.
        /*********************************************************************************************************************************/
        var OData = (function () {
            /*********************************************************************************************************************************/
            // Constructor
            /*********************************************************************************************************************************/
            // The class constructor
            function OData(oData) {
                // Default the Variables
                this._expand = oData && oData.Expand ? oData.Expand : [];
                this._filter = oData && oData.Filter ? oData.Filter : null;
                this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
                this._select = oData && oData.Select ? oData.Select : [];
                this._skip = oData && oData.Skip ? oData.Skip : null;
                this._top = oData && oData.Top ? oData.Top : null;
            }
            Object.defineProperty(OData.prototype, "Expand", {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                // Expand
                get: function () { return this._expand; },
                set: function (value) { this._expand = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "Filter", {
                // Filter
                get: function () { return this._filter; },
                set: function (value) { this._filter = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "OrderBy", {
                // Order By
                get: function () { return this._orderBy; },
                set: function (value) { this._orderBy = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "QueryString", {
                // Query String
                get: function () {
                    var qs = "";
                    var values = [];
                    // Get the query string values for the properties
                    values.push(this.getQSValue("$select", this._select));
                    values.push(this.getQSValue("$orderby", this._orderBy));
                    this._top ? values.push("$top=" + this._top) : null;
                    this._skip ? values.push("$skip=" + this._skip) : null;
                    this._filter ? values.push("$filter=" + this._filter) : null;
                    values.push(this.getQSValue("$expand", this._expand));
                    // Parse the values
                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                        var value = values_1[_i];
                        // Ensure a value exists
                        if (value && value != "") {
                            // Append the query string value
                            qs += (qs == "" ? "" : "&") + value;
                        }
                    }
                    // Return the query string
                    return qs;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "Select", {
                // Select
                get: function () { return this._select; },
                set: function (value) { this._select = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "Skip", {
                // Skip
                get: function () { return this._skip; },
                set: function (value) { this._skip = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OData.prototype, "Top", {
                // Top
                get: function () { return this._top; },
                set: function (value) { this._top = value; },
                enumerable: true,
                configurable: true
            });
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            // Method to convert the array of strings to a query string value.
            OData.prototype.getQSValue = function (qsKey, keys) {
                // Return the query string
                return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
            };
            return OData;
        }());
        Utils.OData = OData;
    })(Utils = $REST.Utils || ($REST.Utils = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Utils;
    (function (Utils) {
        /*********************************************************************************************************************************/
        // Promise
        // This is a lightweight promise library.
        /*********************************************************************************************************************************/
        var Promise = (function () {
            /*********************************************************************************************************************************/
            // Constructor
            /*********************************************************************************************************************************/
            function Promise(callback) {
                // Default the properties
                this.callback = callback;
                this.resolvedFl = false;
            }
            /******************************************************************************************************************************** */
            // Public Methods
            /******************************************************************************************************************************** */
            // Method to execute after the promise is resolved
            Promise.prototype.done = function (callback) {
                // Set the callback
                this.callback = callback || this.callback;
                // See if the promise is resolved
                if (this.resolvedFl) {
                    // Execute the callback
                    this.executeMethod();
                }
            };
            // Method to resolve the promise
            Promise.prototype.resolve = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                // Set the properties
                this.args = args;
                this.resolvedFl = true;
                // Execute the callback
                this.executeMethod();
            };
            /*********************************************************************************************************************************/
            // Private Methods
            /*********************************************************************************************************************************/
            // Method to execute the callback method
            Promise.prototype.executeMethod = function () {
                // See if callback function exists
                if (this.callback && typeof (this.callback) == "function") {
                    // Execute the callback method
                    this.callback.apply(this, this.args);
                }
            };
            return Promise;
        }());
        Utils.Promise = Promise;
    })(Utils = $REST.Utils || ($REST.Utils = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Utils;
    (function (Utils) {
        /*********************************************************************************************************************************/
        // Request
        // This class will execute the xml http request.
        /*********************************************************************************************************************************/
        var Request = (function () {
            /*********************************************************************************************************************************/
            // Constructor
            /*********************************************************************************************************************************/
            function Request(asyncFl, targetInfo, callback) {
                // Default the properties
                this.asyncFl = asyncFl;
                this.promise = new Utils.Promise(callback || targetInfo.callback);
                this.targetInfo = targetInfo;
                this.xhr = this.createXHR();
                // Execute the request
                this.execute();
            }
            Object.defineProperty(Request.prototype, "completedFl", {
                /*********************************************************************************************************************************/
                // Public Properties
                /*********************************************************************************************************************************/
                // Flag indicating the request has completed
                get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Request.prototype, "response", {
                // The response
                get: function () { return this.xhr ? this.xhr.response : null; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Request.prototype, "request", {
                // The xml http request
                get: function () { return this.xhr ? this.xhr : null; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Request.prototype, "requestData", {
                // The data send in the body of the request
                get: function () { return this.targetInfo.requestData; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Request.prototype, "requestUrl", {
                // The reqest url
                get: function () { return this.xhr ? this.xhr.responseURL : null; },
                enumerable: true,
                configurable: true
            });
            /*********************************************************************************************************************************/
            // Private Methods
            /*********************************************************************************************************************************/
            // Method to create the xml http request
            Request.prototype.createXHR = function () {
                // See if the generic object doesn't exist
                if (typeof (XMLHttpRequest) !== "undefined") {
                    // Create an instance of the xml http request object
                    return new XMLHttpRequest();
                }
                // Try to create the request
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                }
                catch (e) { }
                // Try to create the request
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                }
                catch (e) { }
                // Try to create the request
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) { }
                // Throw an error
                throw new Error("This browser does not support xml http requests.");
            };
            // Method to default the request headers
            Request.prototype.defaultHeaders = function () {
                // Get the request digest
                var requestDigest = document.querySelector("#__REQUESTDIGEST");
                requestDigest = requestDigest ? requestDigest.value : "";
                // Set the default headers
                this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
                this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
                this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
                this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
                // See if we are deleting or updating the data
                if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
                    // Append the header for deleting/updating
                    this.xhr.setRequestHeader("IF-MATCH", "*");
                }
                // See if the custom headers exist
                if (this.targetInfo.requestHeaders) {
                    // Parse the custom headers
                    for (var header in this.targetInfo.requestHeaders) {
                        // Add the header
                        this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
                    }
                }
            };
            // Method to execute the xml http request
            Request.prototype.execute = function () {
                var _this = this;
                // Ensure the xml http request exists
                if (this.xhr == null) {
                    return null;
                }
                // Open the request
                this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
                // See if we are making an asynchronous request
                if (this.asyncFl) {
                    // Set the state change event
                    this.xhr.onreadystatechange = function () {
                        // See if the request has finished
                        if (_this.xhr.readyState == 4) {
                            // Resolve the promise
                            _this.promise.resolve(_this);
                        }
                    };
                }
                // See if we the response type is an array buffer
                // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
                if (this.targetInfo.bufferFl && this.asyncFl) {
                    // Set the response type
                    this.xhr.responseType = "arraybuffer";
                }
                else {
                    // Default the headers
                    this.defaultHeaders();
                    // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
                    if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                        // Stringify the data object, if it's not an array buffer
                        this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
                    }
                }
                // Execute the request
                this.targetInfo.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
            };
            return Request;
        }());
        Utils.Request = Request;
    })(Utils = $REST.Utils || ($REST.Utils = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    var Utils;
    (function (Utils) {
        /*********************************************************************************************************************************/
        // Target Information
        // This class will take the target information and create the request url.
        /*********************************************************************************************************************************/
        var TargetInfo = (function () {
            /*********************************************************************************************************************************/
            // Constructor
            /*********************************************************************************************************************************/
            function TargetInfo(targetInfo) {
                // Default the properties
                this.targetInfo = targetInfo || {};
                this.requestData = this.targetInfo.data;
                this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";
                // Set the request url
                this.setRequestUrl();
            }
            Object.defineProperty(TargetInfo.prototype, "bufferFl", {
                /*********************************************************************************************************************************/
                // Public Properties
                /*********************************************************************************************************************************/
                // Flag to determine if the request returns an array buffer
                get: function () { return this.targetInfo.bufferFl; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TargetInfo.prototype, "callback", {
                // The callback method to execute after the asynchronous request completes
                get: function () { return this.targetInfo.callback; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TargetInfo.prototype, "context", {
                // Reference to the page context information
                get: function () { return window["_spPageContextInfo"]; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TargetInfo.prototype, "isAppWeb", {
                // Flag to determine if we are currently in an app web
                get: function () { return this.context.isAppWeb; },
                enumerable: true,
                configurable: true
            });
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            // Method to get the domain url
            TargetInfo.prototype.getDomainUrl = function () {
                var url = document.location.href;
                // See if this is an app web
                if (this.isAppWeb) {
                    // Set the url to the host url
                    url = this.getQueryStringValue("SPHostUrl") + "";
                }
                // Split the url and validate it
                url = url.split('/');
                if (url && url.length >= 2) {
                    // Set the url
                    url = url[0] + "//" + url[2];
                }
                // Return the url
                return url;
            };
            // Method to get a query string value
            TargetInfo.prototype.getQueryStringValue = function (key) {
                // Get the query string
                var queryString = document.location.href.split('?');
                queryString = queryString.length > 1 ? queryString[1] : queryString[0];
                // Parse the values
                var values = queryString.split('&');
                for (var i = 0; i < values.length; i++) {
                    var keyValue = values[i].split('=');
                    // Ensure a value exists
                    if (keyValue.length == 1) {
                        continue;
                    }
                    // See if this is the key we are looking for
                    if (decodeURIComponent(keyValue[0]) == key) {
                        return decodeURIComponent(keyValue[1]);
                    }
                }
                // Key was not found
                return null;
            };
            // Method to set the request url
            TargetInfo.prototype.setRequestUrl = function () {
                var hostUrl = this.getQueryStringValue("SPHostUrl");
                var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
                // See if we are defaulting the url for the app web
                if ($REST.DefaultRequestToHostWebFl && this.isAppWeb && this.targetInfo.url == null) {
                    // Default the url to the host web
                    this.targetInfo.url = hostUrl;
                }
                // Ensure the url exists
                if (this.targetInfo.url == null) {
                    // Default the url to the current site/web url
                    this.targetInfo.url = this.context[this.targetInfo.defaultToWebFl == false ? "siteAbsoluteUrl" : "webAbsoluteUrl"];
                }
                else if (/\/_api\//.test(this.targetInfo.url)) {
                    // Get the url
                    var url = this.targetInfo.url.split("/_api/");
                    // See if this is the app web and we are executing against a different web
                    if (this.isAppWeb && url[0] != this.context["webAbsoluteUrl"]) {
                        // Set the request url
                        this.requestUrl = this.context["webAbsoluteUrl"] + "/_api/SP.AppContextSite(@target)/" + url[1] +
                            (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "") +
                            "?@target='" + url[0] + "'";
                    }
                    else {
                        // Set the request url
                        this.requestUrl = this.targetInfo.url + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "");
                    }
                    return;
                }
                // See if this is a relative url
                if (this.targetInfo.url.indexOf("http") != 0) {
                    // Add the domain
                    this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
                }
                // See if this is the app web, and we are executing against a different web
                if (this.isAppWeb && this.targetInfo.url != this.context["webAbsoluteUrl"]) {
                    // Append the start character for the query string
                    var endpoint = this.targetInfo.endpoint +
                        (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");
                    // Set the request url
                    this.requestUrl = template
                        .replace(/{{Url}}/g, this.context["webAbsoluteUrl"])
                        .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint)
                        .replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
                }
                else {
                    // Set the request url
                    this.requestUrl = template
                        .replace(/{{Url}}/g, this.targetInfo.url)
                        .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                        .replace(/{{TargetUrl}}/g, "");
                }
            };
            return TargetInfo;
        }());
        Utils.TargetInfo = TargetInfo;
    })(Utils = $REST.Utils || ($REST.Utils = {}));
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.attachmentfiles = {
        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the file to add.
         * @param contents - The file contents as an array buffer.
        **/
        add: {
            argNames: ["name"],
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.contenttype = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the content type.
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.contenttypes = {
        // Adds a content type to the collection.
        add: {
            metadataType: "SP.ContentType",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets a content type by id.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "contenttype"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Email
    // The SP.Utilities.Utility.SendEmail object.
    /*********************************************************************************************************************************/
    var Email = (function (_super) {
        __extends(Email, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Email(targetInfo) {
            // Call the base constructor
            _super.call(this, targetInfo);
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
        }
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Method to send an email
        Email.prototype.send = function (properties) {
            // Ensure the "To" property exists, and is formatted correctly
            if (properties.To) {
                // See if it's a string
                if (typeof (properties.To) === "string") {
                    properties.To = { 'results': [properties.To] };
                }
                else {
                    properties.To = { 'results': properties.To };
                }
            }
            // Execute the method
            this.executeMethod("send", {
                argNames: ["properties"],
                name: "",
                metadataType: "SP.Utilities.EmailProperties",
                requestType: $REST.Types.RequestType.PostWithArgsInBody
            }, [properties]);
        };
        return Email;
    }($REST.Base));
    $REST.Email = Email;
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.eventreceiverdefinition = {
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.eventreceiverdefinitions = {
        // Adds an event receiver to the collection.
        add: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets an event receiver by it's id.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "eventreceiver"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.field = {
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Sets the value of the ShowInDisplayForm property for this field.
        setShowInDisplayForm: {
            argNames: ["showInForm"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Sets the value of the ShowInEditForm property for this field.
        setShowInEditForm: {
            argNames: ["showInForm"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Sets the value of the ShowInNewForm property for this field.
        setShowInNewForm: {
            argNames: ["showInForm"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Updates it's properties.
        update: {
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fieldlinks = {
        // Adds a field link to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets a field link by it's id.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "fieldlink"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fields = {
        // Adds a field to the field collection.
        add: {
            metadataType: "SP.Field",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Adds a field to the field collection.
        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "addField",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Creates a field based on the specified schema, Boolean value, and field options.
        // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        createFieldAsXml: {
            argNames: ["schemaXml"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                    __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                    Options: 8,
                    SchemaXml: "[[schemaXml]]"
                }
            }
        },
        // Gets the field with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly,
            returnType: "field"
        },
        // Returns the first Field object with the specified internal name or title from the collection.
        getByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly,
            returnType: "field"
        },
        // Returns the first field object in the collection based on the title of the specified field.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly,
            returnType: "field"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    $REST.Library.file = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
            "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties", "VersionEvents", "Versions|fileversions"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Approves the file submitted for content approval with the specified comment.
        approve: {
            argNames: ["comment"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        cancelupload: {
            argNames: ["uploadId"],
            name: "cancelupload(guid'[[uploadId]]')",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Checks the file in to a document library based on the check-in type.
        // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
        checkin: {
            argNames: ["comment", "checkInType"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Checks out the file from a document library based on the check-out type.
        checkout: {
            requestType: $REST.Types.RequestType.Post
        },
        // Returns the file content.
        content: {
            name: "$value",
            requestType: $REST.Types.RequestType.GetBuffer
        },
        // Continues the chunk upload session with an additional fragment. The current file content is not changed.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        continueUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Copies the file to the destination URL.
        copyTo: {
            argNames: ["strNewUrl", "bOverWrite"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Denies approval for a file that was submitted for content approval.
        // Only documents in lists that are enabled for content approval can be denied.
        deny: {
            argNames: ["comment"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        finishUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
        // An exception is thrown if the file is not an ASPX page.
        // Type of scopes: 
        getlimitedwebpartmanager: {
            argNames: ["scope"],
            name: "getLimitedWebPartManager(scope=[[scope]])",
            requestType: $REST.Types.RequestType.GetReplace
        },
        // Moves the file to the specified destination URL.
        // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
        moveTo: {
            argNames: ["newUrl", "flags"],
            name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Opens the file as a stream.
        openBinaryStream: {
            requestType: $REST.Types.RequestType.GetBuffer
        },
        // Submits the file for content approval with the specified comment.
        publish: {
            argNames: ["comment"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.Types.RequestType.Get
        },
        // Saves the file as a stream.
        saveBinaryStream: {
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
        // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
        // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
        startUpload: {
            argNames: ["uploadId"],
            name: "startupload(uploadId=guid'[[uploadId]]')",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Reverts an existing checkout for the file.
        undoCheckOut: {
            requestType: $REST.Types.RequestType.Post
        },
        // Removes the file from content approval or unpublish a major version.
        unpublish: {
            argNames: ["comment"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.File",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.files = {
        // Adds a file to this collection.
        add: {
            argNames: ["overwrite", "url"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Adds a ghosted file to an existing list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "file"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.fileversion = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fileversions = {
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.folder = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
            "ParentFolder|folder", "Properties", "StorageMetrics"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "folder"
        },
        // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.Types.RequestType.Post
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Folder",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    $REST.Library.folders = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields", "ParentFolder",
            "Properties", "StorageMetrics"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Adds the folder that is located at the specified URL to the collection.
        add: {
            argNames: ["url"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Get the file at the specified URL.
        getbyurl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "folder"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.group = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Users|users|/getById([Name])|user"
        ],
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.items = {
        // Adds an item to the list item collection.
        add: {
            metadataType: function (obj) { return obj.Parent && obj.Parent["ListItemEntityTypeFullName"] ? obj.Parent["ListItemEntityTypeFullName"] : "SP.ListItem"; },
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "listitem"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.limitedwebpartmanager = {
        // Gets a webpart by its id.
        get_WebParts: {
            argNames: ["id"],
            name: "webparts?expand=WebPart",
            requestType: $REST.Types.RequestType.GetReplace
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // List
    // The SPList object.
    /*********************************************************************************************************************************/
    var List = (function (_super) {
        __extends(List, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function List(listName, targetInfo) {
            // Call the base constructor
            _super.call(this, targetInfo);
            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "lists/getByTitle('" + listName + "')";
            // Add the methods
            this.addMethods(this, { __metadata: { type: "list" } });
        }
        return List;
    }($REST.Base));
    $REST.List = List;
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
    $REST.Library.list = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "BrowserFileHandling", "ContentTypes|contenttypes|([Name])|contenttype", "CreatablesInfo", "DefaultView|view",
            "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
            "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
            "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
            "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views||('[Name]')|view", "WorkflowAssociations"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Returns an item based on the id.
        getItemById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "item"
        },
        // Returns a collection of items from the list based on the view xml.
        getItems: {
            argNames: ["viewXml"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "[[viewXml]]"
                }
            }
        },
        // Returns a collection of items from the list based on the specified query.
        getItemsByQuery: {
            argNames: ["camlQuery"],
            name: "getItems",
            requestType: $REST.Types.RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "<View>[[camlQuery]]</View>"
                }
            }
        },
        // Returns a collection of items from the list based on the specified query.
        getListItemChangesSinceToken: {
            argNames: ["query"],
            metadataType: "SP.ChangeLogItemQuery",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
        getRelatedFields: {
            requestType: $REST.Types.RequestType.Get
        },
        // Gets the effective user permissions for the current user.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.Types.RequestType.GetReplace
        },
        // Returns the list view with the specified view identifier.
        getViewById: {
            argNames: ["viewId"],
            name: "getView",
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "view"
        },
        // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.Types.RequestType.Post
        },
        // Renders the list data.
        renderListData: {
            argNames: ["viewXml"],
            name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
            requestType: $REST.Types.RequestType.PostReplace
        },
        // Renders the list form data.
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        renderListFormData: {
            argNames: ["itemid", "formid", "mode"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Reserves a list item ID for idempotent list item creation.
        reserveListItemId: {
            requestType: $REST.Types.RequestType.Post
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.Types.RequestType.Post
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.listitem = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "AttachmentFiles|attachmentfiles", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
            "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
            "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Gets the effective permissions that a specified user has on the list item.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.Types.RequestType.GetReplace
        },
        // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.Types.RequestType.Post
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.Types.RequestType.Post
        },
        // Updates it's properties.
        update: {
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Validates and sets the values of the specified collection of fields for the list item.
        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.lists = {
        // Adds a list to the list collection.
        add: {
            metadataType: "SP.List",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
        ensureSiteAssetsLibrary: {
            requestType: $REST.Types.RequestType.Post
        },
        // Gets a list that is the default location for wiki pages.
        ensureSitePagesLibrary: {
            requestType: $REST.Types.RequestType.Post
        },
        // Returns the list with the specified list identifier.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "list"
        },
        // Returns the list with the specified title from the collection.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "list"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // People Manager
    /*********************************************************************************************************************************/
    $REST.Library.peoplemanager = {};
    $REST.Library.peoplemanager[$REST.Types.RequestType.Get] = [
        "amlFollowedBy", "amlFollowing", "getFollowedTags", "getFollowersFor", "getMyFollowers", "getMyProperties", "getMySuggestions",
        "getPeopleFollowedBy", "getPeopleFollowedByMe", "getPropertiesFor", "getUserProfilePropertyFor"
    ];
    $REST.Library.peoplemanager[$REST.Types.RequestType.GetAppendMethodToEndPoint] = ["getTrendingTags", "isFollowing"];
    $REST.Library.peoplemanager[$REST.Types.RequestType.Post] = ["follow", "followTag", "hideSuggestion", "stopFollowing", "stopFollowingTag"];
    $REST.Library.peoplemanager[$REST.Types.RequestType.PostDataInBody] = ["setMyProfilePicture"];
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.profileloader = {};
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.roleAssignment = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Member", "RoleDefinitionBindings|roledefinitions"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roleAssignments = {
        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Gets the role assignment associated with the specified principal ID from the collection.
        getByPrincipalId: {
            argNames: ["principalId"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "roleassignment"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        },
        // Gets the role definition with the specified role type.
        removeRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: $REST.Types.RequestType.PostWithArgs
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roledefinition = {
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["roleDefId"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinition"
        },
        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinition"
        },
        // Gets the role definitions with the specified role type.
        getByType: {
            argNames: ["roleType"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinitions"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Search Service
    // The SPSearchService object.
    /*********************************************************************************************************************************/
    //export class Search Service extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.searchservice = {};
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Site
    // The SPSite object.
    /*********************************************************************************************************************************/
    var Site = (function (_super) {
        __extends(Site, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Site(url, targetInfo) {
            // Call the base constructor
            _super.call(this, targetInfo);
            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "site";
            // See if the web url exists
            if (url) {
                // Set the settings
                this.targetInfo.url = url;
            }
            // Add the methods
            this.addMethods(this, { __metadata: { type: "site" } });
        }
        // Method to get the root web
        Site.prototype.getRootWeb = function () { return new $REST.Web(null, this.targetInfo); };
        // Method to determine if the current user has access, based on the permissions.
        Site.prototype.hasAccess = function (permissions) {
            // TO DO
            return true;
        };
        ;
        return Site;
    }($REST.Base));
    $REST.Site = Site;
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    $REST.Library.site = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
        createPreviewSPSite: {
            argNames: ["upgrade", "sendemail"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
        extendUpgradeReminderDate: {
            requestType: $REST.Types.RequestType.Post
        },
        // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
        getCatalog: {
            argNames: ["typeCatalog"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Specifies the collection of custom list templates for a given site.
        getCustomListTemplates: {
            argNames: ["web"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Returns the collection of site definitions that are available for creating Web sites within the site collection.
        getWebTemplates: {
            argNames: ["LCID", "overrideCompatLevel"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
        invalidate: {
            requestType: $REST.Types.RequestType.Post
        },
        // Returns true if the object needs to be upgraded; otherwise, false.
        needsUpgradeByType: {
            argNames: ["versionUpgrade", "recursive"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Returns the site at the specified URL.
        openWeb: {
            argNames: ["strUrl"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Returns the site with the specified GUID.
        openWebById: {
            argNames: ["gWebId"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
        runHealthCheck: {
            argNames: ["ruleId", "bRepair", "bRunAlways"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
        runUpgradeSiteSession: {
            argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Site",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: ["requireUseRemoteAPIs"],
            requestType: $REST.Types.RequestType.PostWithArgs
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.siteGroups = {
        // Returns a group from the collection based on the member ID of the group.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "group"
        },
        // Returns a cross-site group from the collection based on the name of the group.
        getByName: {
            argNames: ["name"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "group"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        },
        // Removes the group with the specified member ID from the collection.
        removeById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Removes the cross-site group with the specified name from the collection.
        removeByLoginName: {
            argNames: ["name"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Actor
    /*********************************************************************************************************************************/
    $REST.Library.socialrestactor = {};
    $REST.Library.socialrestactor[$REST.Types.RequestType.Custom] = [
        { name: "createPost", "function": function (data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: null, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("feed/post", null, data, true); } },
        { name: "getFeed", "function": function () { return this.executeGet("feed"); } },
    ];
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Feed Manager
    /*********************************************************************************************************************************/
    $REST.Library.socialrestfeedmanager = {};
    $REST.Library.socialrestfeedmanager[$REST.Types.RequestType.Custom] = [
        { name: "createPost", "function": function (data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: null, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("my/feed/post", null, data, true); } },
        { name: "deletePost", "function": function (id) { return this.executePost("post/delete", null, { ID: id }, true); } },
        { name: "getMyFeed", "function": function () { return this.executeGet("my/feed"); } },
        { name: "getMyInfo", "function": function () { return this.executeGet("my"); } },
        { name: "getMyLikes", "function": function () { return this.executeGet("my/likes"); } },
        { name: "getMyMentionFeed", "function": function () { return this.executeGet("my/mentionfeed"); } },
        { name: "getMyNews", "function": function () { return this.executeGet("my/news"); } },
        { name: "getMyTimeLineFeed", "function": function () { return this.executeGet("my/timelinefeed"); } },
        { name: "getMyUnreadMentionCount", "function": function () { return this.executeGet("my/unreadmentioncount"); } },
        { name: "getPost", "function": function (id) { return this.executePost("post", null, { ID: id }, true); } },
        { name: "getPostLikers", "function": function (id) { return this.executePost("post/likers", null, { ID: id }, true); } },
        { name: "getUser", "function": function (user) { return user.indexOf('i:0#.f|') == 0 ? this.executeGet("actor", null, user) : this.executeGet("actor", user); } },
        { name: "likePost", "function": function (id) { return this.executePost("post/like", null, { ID: id }, true); } },
        { name: "lockPost", "function": function (id) { return this.executePost("post/lock", null, { ID: id }, true); } },
        { name: "replyToPost", "function": function (id, data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: id, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("post/reply", null, data, true); } },
        { name: "unlikePost", "function": function (id) { return this.executePost("post/unlike", null, { ID: id }, true); } },
        { name: "unlockPost", "function": function (id) { return this.executePost("post/unlock", null, { ID: id }, true); } },
    ];
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Thread
    /*********************************************************************************************************************************/
    $REST.Library.socialrestthread = {};
    $REST.Library.socialrestthread[$REST.Types.RequestType.Custom] = [
        { name: "delete", "function": function (id) { return this.executePost("delete", null, { ID: id || this.ID }, true); } },
        { name: "like", "function": function (id) { return this.executePost("like", null, { ID: id || this.ID }, true); } },
        { name: "lock", "function": function (id) { return this.executePost("lock", null, { ID: id || this.ID }, true); } },
        { name: "reply", "function": function (data, id) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: id || this.ID, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("reply", null, data, true); } },
        { name: "unlike", "function": function (id) { return this.executePost("unlike", null, { ID: id || this.ID }, true); } },
        { name: "unlock", "function": function (id) { return this.executePost("unlock", null, { ID: id || this.ID }, true); } },
    ];
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.user = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "Groups|sitegroups|([Name])|group"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.usercustomaction = {
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.usercustomactions = {
        // Adds a user custom action to the collection.
        add: {
            metadataType: "SP.UserCustomAction",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Deletes all custom actions in the collection.
        clear: {
            requestType: $REST.Types.RequestType.Post
        },
        // Returns the custom action with the specified identifier.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "usercustomaction"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User Profile
    /*********************************************************************************************************************************/
    $REST.Library.userprofile = {};
    $REST.Library.userprofile[$REST.Types.RequestType.Post] = ["createPersonalSiteEnque", "shareAllSocialData"];
    $REST.Library.userprofile[$REST.Types.RequestType.Custom] = [
        { name: "getOneDriveUrl", "function": function () { return this.FollowPersonalSiteUrl + "_layouts/15/onedrive.aspx"; } }
    ];
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.users = {
        // Gets the user with the specified email address.
        getByEmail: {
            argNames: ["email"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },
        // Gets the user with the specified member identifier (ID).
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },
        // Gets the user with the specified login name.
        getByLoginName: {
            argNames: ["loginName"],
            requestType: $REST.Types.RequestType.GetWithArgsInQS,
            returnType: "user"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        },
        // Removes the user with the specified ID.
        removeById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Removes the user with the specified login name.
        removeByLoginName: {
            argNames: ["loginName"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.versions = {
        // Gets the version with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "version"
        },
        // Deletes all versions in the collection.
        deleteAll: {
            requestType: $REST.Types.RequestType.Post
        },
        // Deletes a version, by the specified id.
        deleteById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Deletes a version, by the specified label.
        deleteByLabel: {
            argNames: ["label"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Restores a version, by the specified label.
        restoreByLabel: {
            argNames: ["label"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    $REST.Library.view = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "ViewFields|viewfieldcollection"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Returns the list view as HTML.
        renderAsHtml: {
            requestType: $REST.Types.RequestType.Get
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.View",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.viewfieldcollection = {
        // Adds the field with the specified field internal name or display name to the collection.
        addViewField: {
            argNames: ["fieldName"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Moves the field with the specified field internal name to the specified position in the collection.
        moveViewFieldTo: {
            argNames: ["field", "index"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        },
        // Removes all the fields from the collection.
        removeAllViewFields: {
            requestType: $REST.Types.RequestType.Post
        },
        // Removes the field with the specified field internal name from the collection.
        removeViewField: {
            argNames: ["fieldName"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.views = {
        // Adds a view to the view collection.
        add: {
            metadataType: "SP.View",
            name: "",
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "view"
        },
        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "view"
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Web
    /*********************************************************************************************************************************/
    var Web = (function (_super) {
        __extends(Web, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Web(url, targetInfo) {
            // Call the base constructor
            _super.call(this, targetInfo);
            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "web";
            // See if the web url exists
            if (url) {
                // Set the settings
                this.targetInfo.url = url;
            }
            // Add the methods
            this.addMethods(this, { __metadata: { type: "web" } });
        }
        // Method to determine if the current user has access, based on the permissions.
        Web.prototype.hasAccess = function (permissions) {
            // TO DO
            return true;
        };
        ;
        return Web;
    }($REST.Base));
    $REST.Web = Web;
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    $REST.Library.web = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "AllProperties", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group", "AssociatedVisitorGroup|group",
            "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields", "ClientWebParts",
            "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
            "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
            "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
            "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
            "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb", "PushNotificationSubscribers", "RecycleBin",
            "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
            "RoleDefinitions|roledefinitions|([Name])|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
            "SiteGroups|sitegroups|([Name])|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user", "ThemeInfo", "TitleResource",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
        ],
        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/
        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            argName: ["name"],
            requestType: $REST.Types.RequestType.PostWithArgsInQS
        },
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.Types.RequestType.Delete
        },
        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        doesPushNotificationSubscriberExist: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Returns whether the current user has the given set of permissions.
        doesUserHavePermissions: {
            argNames: ["High", "Low"],
            requestType: $REST.Types.RequestType.GetWithArgsInQS
        },
        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        ensureUser: {
            argNames: ["logonName"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Sends data to an OData service.
        executeRemoteLOB: {
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets the app BDC catalog.
        getAppBdcCatalog: {
            requestType: $REST.Types.RequestType.Post
        },
        // Gets the app BDC catalog for the specified app instance.
        getAppBdcCatalogForAppInstance: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: $REST.Types.RequestType.GetWithArgs
        },
        // Returns the list gallery on the site.
        getCatalog: {
            argNames: ["galleryType"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Gets the context information for the site. Static method.
        getContextWebInformation: {
            name: "contextInfo",
            replaceEndpointFl: true,
            requestType: $REST.Types.RequestType.Post
        },
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: $REST.Types.RequestType.Get
        },
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: $REST.Types.RequestType.GetWithArgsInQS
        },
        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            argNames: ["url"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "file"
        },
        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            argNames: ["url"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "folder"
        },
        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
            argNames: ["url"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "list"
        },
        // Gets the push notification subscriber over the site for the specified device application instance ID.
        getPushNotificationSubscriber: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            argNames: ["args"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            argNames: ["loginName"],
            requestType: $REST.Types.RequestType.GetWithArgsInQS
        },
        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: $REST.Types.RequestType.GetWithArgs
        },
        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            argNames: ["id"],
            requestType: $REST.Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },
        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.Types.RequestType.GetReplace
        },
        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: $REST.Types.RequestType.GetWithArgsInQS
        },
        // Uploads and installs an app package to this site.
        loadAndInstallApp: {
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Uploads and installs an App package on the site in a specified locale.
        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Uploads an App package and creates an instance from it.
        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Returns the name of the image file for the icon that is used to represent the specified file.
        mapToIcon: {
            argNames: ["filename", "progid", "size"],
            requestType: $REST.Types.RequestType.GetWithArgs
        },
        // Processes a notification from an external system.
        processExternalNotification: {
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        registerPushNotificationSubscriber: {
            argNames: ["deviceappinstanceid", "servicetoken"],
            requestType: $REST.Types.RequestType.PostWithArgs
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.Types.RequestType.Post
        },
        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: $REST.Types.RequestType.PostWithArgsValueOnly
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.webs = {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebCreationInformation",
            requestType: $REST.Types.RequestType.PostWithArgsInBody
        },
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: $REST.Types.RequestType.OData
        }
    };
})($REST || ($REST = {}));
