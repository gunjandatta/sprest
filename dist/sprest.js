var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    $REST.DefaultRequestToHostWebFl = false;
    $REST.ExecuteOnCreationFl = true;
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
        function Base(params) {
            // Default the properties
            this.targetInfo = params.settings;
            this.requestType = 0;
            // Default the properties
            this.executeRequestFl = typeof (params.executeRequestFl) === "boolean" ? params.executeRequestFl : $REST.ExecuteOnCreationFl;
        }
        Object.defineProperty(Base.prototype, "asyncFl", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // Flag to determine if the request should be asynchronous
            get: function () { return this.request ? this.request.asyncFl : false; },
            set: function (value) { this.targetInfo.asyncFl = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "response", {
            // Method to return the xml http request's response
            get: function () { return this.request ? this.request.response : null; },
            enumerable: true,
            configurable: true
        });
        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/
        // Method to execute after the asynchronous request completes
        Base.prototype.done = function (callback) {
            // See if the promise exists
            if (this.promise) {
                // Execute the callback
                this.promise.done(callback);
            }
            else {
                // Set the callback in the target information
                this.targetInfo.callback = callback;
            }
        };
        // Method to execute a child request
        Base.prototype.execute = function () {
            var _this = this;
            // See if this is an asynchronous request
            if (this.targetInfo.asyncFl) {
                // Create a promise
                this.promise = new $REST.Promise(this.targetInfo.callback);
                // Create the request
                this.request = new $REST.Request(new $REST.TargetInfo(this.targetInfo), function () {
                    // Update the data object
                    _this.updateDataObject();
                });
            }
            else {
                // Create the request
                this.request = new $REST.Request(new $REST.TargetInfo(this.targetInfo));
                // Update the data object
                this.updateDataObject();
            }
        };
        // Method to get the input parameters for an asynchronous request
        Base.getAsyncInputParmeters = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Get the input parameters
            var params = Base.getInputParmeters.apply(null, args);
            // Set the asynchronous flag
            params.settings.asyncFl = true;
            // Return the parameters
            return params;
        };
        // Method to get the input parameters
        Base.getInputParmeters = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var settings = null;
            var params = {
                executeRequestFl: null,
                settings: null
            };
            // Ensure arguments exist
            if (args && args.length > 0) {
                // Determine if this is an IBaseType
                if (args.length == 1 && args[0].hasOwnProperty("executeRequestFl") && args[0].hasOwnProperty("settings")) {
                    // Return it
                    return args[0];
                }
                // See if the first parameter is the flag
                if (typeof (args[0]) === "boolean") {
                    // Set the parameters
                    params.executeRequestFl = args[0];
                    settings = args[1];
                }
                else {
                    // Set the parameters
                    params.executeRequestFl = args[1];
                    settings = args[0];
                }
            }
            // See if settings exist
            if (settings) {
                params.settings = {};
                // See if it's a callback
                if (typeof (settings) === "function") {
                    // Set the callback
                    params.settings.callback = settings;
                }
                else {
                    // Set the settings
                    params.settings = settings;
                }
            }
            else {
                // Create them
                params.settings = {};
            }
            // Return the parameters
            return params;
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
            if (/^field/.test(objType) && objType != "fields") {
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
            var targetInfo = null;
            // See if the metadata is defined for this object
            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if (metadata && metadata.uri) {
                // Create the target information and use the url defined for this object
                targetInfo = {
                    url: metadata.uri
                };
                // See if this is a field
                if (/^SP.Field/.test(metadata.type)) {
                    // Fix the uri reference
                    targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
                }
                // See if we are inheriting the metadata type
                if (methodConfig.inheritMetadataType) {
                    // Copy the metadata type
                    methodConfig.metadataType = metadata.type;
                }
            }
            else {
                // Copy the target information
                targetInfo = Object.create(this.targetInfo);
            }
            // Inherit the asynchronous flag
            targetInfo.asyncFl = this.targetInfo ? this.targetInfo.asyncFl : this.asyncFl;
            // Get the method information
            var methodInfo = new $REST.MethodInfo(methodName, methodConfig, args);
            // Update the target information
            targetInfo.bufferFl = methodConfig.requestType == $REST.RequestType.GetBuffer;
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
            var obj = new Base({ settings: targetInfo, executeRequestFl: true });
            // Set the and parent and request type
            obj.parent = this;
            obj.requestType = methodConfig.requestType;
            // Execute the request
            obj.execute();
            // Return the object
            return obj;
        };
        // Method to return a collection
        Base.prototype.getCollection = function (method, args) {
            // Copy the target information
            var targetInfo = Object.create(this.targetInfo);
            // Append the method to the endpoint
            targetInfo.endpoint += "/" + method;
            // Update the callback
            targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
            // Create a new object
            var obj = new Base({ settings: targetInfo, executeRequestFl: true });
            // Set the parent
            obj.parent = this;
            // Execute the request
            obj.execute();
            // Return the object
            return obj;
        };
        // Method to return a property of this object
        Base.prototype.getProperty = function (propertyName) {
            // Copy the target information
            var targetInfo = Object.create(this.targetInfo);
            // Append the method to the endpoint
            targetInfo.endpoint += "/" + propertyName;
            // Create a new object
            var obj = new Base({ settings: targetInfo, executeRequestFl: true });
            // Set the parent
            obj.parent = this;
            // Execute the request
            obj.execute();
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
                    // Add the asyncFl, execute method, and parent reference
                    results[0]["asyncFl"] = this.asyncFl;
                    results[0]["executeMethod"] = this.executeMethod;
                    results[0]["parent"] = this;
                    // Copy the metadata
                    this["d"].__metadata = results[0].__metadata;
                }
                else {
                    // Apply the methods to the results asynchronously
                    setTimeout(function () {
                        // Parse the results
                        for (var i = 0; i < results.length; i++) {
                            // Add the asyncFl, execute method, and parent reference
                            results[i]["asyncFl"] = _this.asyncFl;
                            results[i]["executeMethod"] = _this.executeMethod;
                            results[i]["parent"] = _this;
                            // Update the metadata
                            _this.updateMetadata(results[i]);
                            // Add the methods
                            _this.addMethods(results[i], results[i]);
                        }
                    }, 10);
                }
            }
        };
        // Method to convert the input arguments into an object
        Base.prototype.updateDataObject = function () {
            // Return if we are expecting a buffer
            if (this.requestType == $REST.RequestType.GetBuffer) {
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
            // Resolve the promise
            this.promise ? this.promise.resolve(this) : null;
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
        return Base;
    }());
    $REST.Base = Base;
})($REST || ($REST = {}));

/// <reference path="dependencies.d.ts" />
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
            this.promise = new $REST.Promise(callback);
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

/// <reference path="methodInfo.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Method Information
    // This class will create the method information for the request.
    // name - The method name.
    // requestType - The request type.
    // argNames - The method input parameter names.
    // argValues - The data passed with the method.
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
                    case $REST.RequestType.Delete:
                    case $REST.RequestType.Post:
                    case $REST.RequestType.PostWithArgs:
                    case $REST.RequestType.PostWithArgsInBody:
                    case $REST.RequestType.PostWithArgsInQS:
                    case $REST.RequestType.PostWithArgsValueOnly:
                    case $REST.RequestType.PostReplace:
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
            get: function () { return this.methodInfo.requestType == $REST.RequestType.GetWithArgsInBody || this.methodInfo.requestType == $REST.RequestType.PostWithArgsInBody; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
            get: function () { return this.methodInfo.requestType == $REST.RequestType.GetWithArgsInQS || this.methodInfo.requestType == $REST.RequestType.PostWithArgsInQS; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MethodInfo.prototype, "isTemplate", {
            get: function () { return this.methodInfo.data ? true : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MethodInfo.prototype, "replace", {
            get: function () { return this.methodInfo.requestType == $REST.RequestType.GetReplace || this.methodInfo.requestType == $REST.RequestType.PostReplace; },
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
                        this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"'));
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
                    this.methodData[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
                }
                else {
                    // Append the metadata to the parameters
                    this.methodData["__metadata"] = { "type": this.methodInfo.metadataType };
                }
            }
        };
        // Method to generate the method and parameters as a url
        MethodInfo.prototype.generateUrl = function () {
            var url = this.methodInfo.name;
            // See if we are deleting the object
            if (this.methodInfo.requestType == $REST.RequestType.Delete) {
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
                            case $REST.RequestType.GetWithArgsValueOnly:
                            case $REST.RequestType.PostWithArgsValueOnly:
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
    $REST.MethodInfo = MethodInfo;
})($REST || ($REST = {}));

/// <reference path="promise.d.ts" />
var $REST;
(function ($REST) {
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
    $REST.Promise = Promise;
})($REST || ($REST = {}));

/// <reference path="./request.d.ts" />
var $REST;
(function ($REST) {
    /***********************************************************************/
    // Enumerators
    /***********************************************************************/
    // Request Type
    (function (RequestType) {
        // Requests
        RequestType[RequestType["Custom"] = 0] = "Custom";
        RequestType[RequestType["Delete"] = 1] = "Delete";
        RequestType[RequestType["Merge"] = 2] = "Merge";
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
    })($REST.RequestType || ($REST.RequestType = {}));
    var RequestType = $REST.RequestType;
    /*********************************************************************************************************************************/
    // Request
    // This class will execute the xml http request.
    /*********************************************************************************************************************************/
    var Request = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Request(targetInfo, callback) {
            // Default the properties
            this.promise = new $REST.Promise(callback || targetInfo.callback);
            this.targetInfo = targetInfo;
            this.xhr = this.createXHR();
            // Execute the request
            this.executeRequest();
        }
        Object.defineProperty(Request.prototype, "asyncFl", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // Flag to determine if the request is asynchronous
            get: function () { return this.targetInfo.asyncFl; },
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
        Request.prototype.executeRequest = function () {
            var _this = this;
            // Ensure the xml http request exists
            if (this.xhr == null) {
                return null;
            }
            // Open the request
            this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.targetInfo.asyncFl);
            // See if we are making an asynchronous request
            if (this.targetInfo.asyncFl) {
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
            if (this.targetInfo.bufferFl && this.targetInfo.asyncFl) {
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
    $REST.Request = Request;
})($REST || ($REST = {}));

/// <reference path="targetInfo.d.ts" />
var $REST;
(function ($REST) {
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
            this.targetInfo.asyncFl = this.targetInfo.asyncFl ? true : false;
            // Set the request url
            this.setRequestUrl();
        }
        Object.defineProperty(TargetInfo.prototype, "asyncFl", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // Flag to determine if the request should be asynchronous or synchronous
            get: function () { return this.targetInfo.asyncFl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TargetInfo.prototype, "bufferFl", {
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
                this.targetInfo.url = this.context[this.targetInfo.defaultToWebFl ? "webAbsoluteUrl" : "siteAbsoluteUrl"];
            }
            else if (/\/_api\//.test(this.targetInfo.url)) {
                // See if this is the app web
                if (this.isAppWeb) {
                    var url = this.targetInfo.url.split("/_api/");
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
            // See if this is the app web
            if (this.isAppWeb) {
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
    $REST.TargetInfo = TargetInfo;
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Attachment Files
    // The SPAttachmentCollection object.
    /*********************************************************************************************************************************/
    //export class AttachmentFiles extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
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
            requestType: $REST.RequestType.PostWithArgs
        },
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Content Type
    // The SPContentType object.
    /*********************************************************************************************************************************/
    var ContentType = (function (_super) {
        __extends(ContentType, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ContentType(contentTypeName, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Query for the content type
            return (new $REST.ContentTypes(listName, this.targetInfo, false))["getByName"](contentTypeName);
        }
        return ContentType;
    }($REST.Base));
    $REST.ContentType = ContentType;
    var ContentType_Async = (function (_super) {
        __extends(ContentType_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ContentType_Async(contentTypeName, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, contentTypeName, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return ContentType_Async;
    }(ContentType));
    $REST.ContentType_Async = ContentType_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.contenttype = {
        // Adds a field link to the content type.
        addFieldLink: {
            name: "fieldlink",
            metadataType: "SP.FieldLink",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Deletes the content type.
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Content Types
    // The SPContentTypeCollection object.
    /*********************************************************************************************************************************/
    var ContentTypes = (function (_super) {
        __extends(ContentTypes, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ContentTypes(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "contenttypes";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "contenttypes" } });
            }
        }
        return ContentTypes;
    }($REST.Base));
    $REST.ContentTypes = ContentTypes;
    var ContentTypes_Async = (function (_super) {
        __extends(ContentTypes_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ContentTypes_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return ContentTypes_Async;
    }(ContentTypes));
    $REST.ContentTypes_Async = ContentTypes_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.contenttypes = {
        // Adds a content type to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.ContentType",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets a content type by id.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a content type by name.
        getByName: {
            argNames: ["name"],
            name: "?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Field
    // The SPField object.
    /*********************************************************************************************************************************/
    var Field = (function (_super) {
        __extends(Field, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Field(internalNameOrTitle, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Get the Fields
            var fields = new $REST.Fields(listName, this.targetInfo, false);
            // Query for the field
            return fields["getByInternalNameOrTitle"](internalNameOrTitle);
        }
        return Field;
    }($REST.Base));
    $REST.Field = Field;
    var Field_Async = (function (_super) {
        __extends(Field_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Field_Async(internalNameOrTitle, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, internalNameOrTitle, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Field_Async;
    }(Field));
    $REST.Field_Async = Field_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.field = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Sets the value of the ShowInDisplayForm property for this field.
        setShowInDisplayForm: {
            argNames: ["showInForm"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Sets the value of the ShowInEditForm property for this field.
        setShowInEditForm: {
            argNames: ["showInForm"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Sets the value of the ShowInNewForm property for this field.
        setShowInNewForm: {
            argNames: ["showInForm"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Updates it's properties.
        update: {
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Field Link Collection
    // The SPFieldLinkCollection object.
    /*********************************************************************************************************************************/
    //export class FieldLinks extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fieldlinks = {
        // Adds a content type to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets a field link by it's id.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Fields
    // The SPFieldCollection object.
    /*********************************************************************************************************************************/
    var Fields = (function (_super) {
        __extends(Fields, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Fields(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "fields";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "fields" } });
            }
        }
        return Fields;
    }($REST.Base));
    $REST.Fields = Fields;
    var Fields_Async = (function (_super) {
        __extends(Fields_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Fields_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Fields_Async;
    }(Fields));
    $REST.Fields_Async = Fields_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fields = {
        // Adds a field to the field collection.
        add: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookup: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Creates a field based on the specified schema, Boolean value, and field options.
        // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        createFieldAsXml: {
            argNames: ["schemaXml"],
            requestType: $REST.RequestType.PostWithArgsInBody,
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
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first Field object with the specified internal name or title from the collection.
        getByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first field object in the collection based on the title of the specified field.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // File
    // The SPFile object.
    /*********************************************************************************************************************************/
    var File = (function (_super) {
        __extends(File, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function File(serverRelativeUrl, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var endpoint = "";
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // See if the list name exists
            if (listName) {
                // Update the endpoint
                endpoint = "/lists/getByTitle('" + listName + "')/rootfolder";
                // Split the url
                var url = serverRelativeUrl ? serverRelativeUrl.split("/") : [];
                // Parse the folders
                for (var i = 0; i < url.length - 1; i++) {
                    // Update the endpoint
                    endpoint += "/folders/getByUrl('" + url[i] + "')";
                }
                // Add the file
                endpoint += "/files/getByUrl('" + url[url.length - 1] + "')";
            }
            else {
                // Update the endpoint
                endpoint += "/getFileByServerRelativeUrl('" + serverRelativeUrl + "')";
            }
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web" + endpoint;
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "file" } });
            }
        }
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        /**
         * Gets a value that specifies the user who added the file.
         */
        File.prototype.get_Author = function () { return this.getProperty("Author"); };
        /**
         * Gets a value that returns the user who has checked out the file.
         */
        File.prototype.get_CheckedOutByUser = function () { return this.getProperty("CheckedOutByUser"); };
        /**
         *
         */
        File.prototype.get_EffectiveInformationRightsManagementSettings = function () { return this.getProperty("EffectiveInformationRightsManagementSettings"); };
        /**
         *
         */
        File.prototype.get_InformationRightsManagementSettings = function () { return this.getProperty("InformationRightsManagementSettings"); };
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         */
        File.prototype.get_ListItemAllFields = function () { return this.getProperty("ListItemAllFields"); };
        /**
         * Gets a value that returns the user that owns the current lock on the file.
         */
        File.prototype.get_LockedByUser = function () { return this.getProperty("LockedByUser"); };
        /**
         * Gets a value that returns the user who last modified the file.
         */
        File.prototype.get_ModifiedBy = function () { return this.getProperty("ModifiedBy"); };
        /**
         *
         */
        File.prototype.get_Properties = function () { return this.getProperty("Properties"); };
        /**
         *
         */
        File.prototype.get_VersionEvents = function () { return this.getProperty("VersionEvents"); };
        /**
         * Gets a value that returns a collection of file version objects that represent the versions of the file.
         */
        File.prototype.get_Versions = function () { return this.getProperty("Versions"); };
        return File;
    }($REST.Base));
    $REST.File = File;
    var File_Async = (function (_super) {
        __extends(File_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function File_Async(serverRelativeUrl, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, serverRelativeUrl, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return File_Async;
    }(File));
    $REST.File_Async = File_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.file = {
        // Approves the file submitted for content approval with the specified comment.
        approve: {
            argNames: ["comment"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        cancelupload: {
            argNames: ["uploadId"],
            name: "cancelupload(guid'[[uploadId]]')",
            requestType: $REST.RequestType.PostReplace
        },
        // Checks the file in to a document library based on the check-in type.
        // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
        checkin: {
            argNames: ["comment", "checkInType"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Checks out the file from a document library based on the check-out type.
        checkout: {
            requestType: $REST.RequestType.Post
        },
        // Returns the file content.
        content: {
            name: "$value",
            requestType: $REST.RequestType.GetBuffer
        },
        // Continues the chunk upload session with an additional fragment. The current file content is not changed.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        continueUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "cancelupload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: $REST.RequestType.PostReplace
        },
        // Copies the file to the destination URL.
        copyTo: {
            argNames: ["strNewUrl", "bOverWrite"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Denies approval for a file that was submitted for content approval.
        // Only documents in lists that are enabled for content approval can be denied.
        deny: {
            argNames: ["comment"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        finishUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "cancelupload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: $REST.RequestType.PostReplace
        },
        // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
        // An exception is thrown if the file is not an ASPX page.
        // Type of scopes: 
        getlimitedwebpartmanager: {
            argNames: ["scope"],
            name: "getLimitedWebPartManager(scope=[[scope]])",
            requestType: $REST.RequestType.GetReplace
        },
        // Moves the file to the specified destination URL.
        // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
        moveTo: {
            argNames: ["newUrl", "flags"],
            name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
            requestType: $REST.RequestType.PostReplace
        },
        // Opens the file as a stream.
        openBinaryStream: {
            requestType: $REST.RequestType.GetBuffer
        },
        // Submits the file for content approval with the specified comment.
        publish: {
            argNames: ["comment"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.RequestType.Get
        },
        // Saves the file as a stream.
        saveBinaryStream: {
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
        // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
        // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
        startUpload: {
            argNames: ["uploadId"],
            name: "startupload(uploadId=guid'[[uploadId]]')",
            requestType: $REST.RequestType.PostReplace
        },
        // Reverts an existing checkout for the file.
        undoCheckOut: {
            requestType: $REST.RequestType.Post
        },
        // Removes the file from content approval or unpublish a major version.
        unpublish: {
            argNames: ["comment"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.File",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Files
    // The SPFileCollection object.
    /*********************************************************************************************************************************/
    var Files = (function (_super) {
        __extends(Files, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Files(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "rootfolder/files";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "files" } });
            }
        }
        return Files;
    }($REST.Base));
    $REST.Files = Files;
    var Files_Async = (function (_super) {
        __extends(Files_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Files_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Files_Async;
    }(Files));
    $REST.Files_Async = Files_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.files = {
        // Adds a file to this collection.
        add: {
            argNames: ["overwrite", "url"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds a ghosted file to an existing list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Gets the file for the specified name
        getByName: {
            argNames: ["name"],
            name: "?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // File Version
    // The SPFileVersion object.
    /*********************************************************************************************************************************/
    //export class FileVersion extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fileversion = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // File Versions
    // The SPFileVersionCollection object.
    /*********************************************************************************************************************************/
    //export class FileVersions extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.fileversions = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Folder
    // The SPFolder object.
    /*********************************************************************************************************************************/
    var Folder = (function (_super) {
        __extends(Folder, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Folder(serverRelativeUrl, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var endpoint = "";
            var getRootFolder = serverRelativeUrl == null || serverRelativeUrl == "" ? true : false;
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // See if the list name exists
            if (listName) {
                // Update the endpoint
                endpoint = "/lists/getByTitle('" + listName + "')";
            }
            // See if we are getting the root folder
            if (getRootFolder || listName) {
                // Update the endpoint
                endpoint += "/rootfolder";
            }
            // See if the list name exists
            if (listName) {
                // Split the url
                var url = serverRelativeUrl ? serverRelativeUrl.split("/") : [];
                // Parse the url
                for (var i = 0; i < url.length; i++) {
                    // Update the endpoint
                    endpoint += "/folders/getByUrl('" + url[i] + "')";
                }
            }
            else {
                // Update the endpoint
                endpoint += getRootFolder ? "" : "/getFolderByServerRelativeUrl('" + serverRelativeUrl + "')";
            }
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web" + endpoint;
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "folder" } });
            }
        }
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        /**
         * Gets the collection of all files contained in the list folder. You can add a file to a folder by using the Add method on the folder’s FileCollection resource.
         */
        Folder.prototype.get_Files = function () { return this.getProperty("Files"); };
        /**
         * Gets the collection of list folders contained in the list folder.
         */
        Folder.prototype.get_Folders = function () { return this.getProperty("Folders"); };
        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        Folder.prototype.get_ListItemAllFields = function () { return this.getProperty("ListItemAllFields"); };
        /**
         * Gets the parent list folder of the folder.
         */
        Folder.prototype.get_ParentFolder = function () { return this.getProperty("ParentFolder"); };
        /**
         * Gets the collection of all files contained in the folder.
         */
        Folder.prototype.get_Properties = function () { return this.getProperty("Properties"); };
        /**
         *
         */
        Folder.prototype.get_StorageMetrics = function () { return this.getProperty("StorageMetrics"); };
        return Folder;
    }($REST.Base));
    $REST.Folder = Folder;
    var Folder_Async = (function (_super) {
        __extends(Folder_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Folder_Async(serverRelativeUrl, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, serverRelativeUrl, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Folder_Async;
    }(Folder));
    $REST.Folder_Async = Folder_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.folder = {
        // Adds a file to this folder.
        addFile: {
            argNames: ["url", "overwrite"],
            name: "files/add",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds a ghosted file to this list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            name: "files/addtemplatefile",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds the sub-folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Gets the file for the specified name
        getFile: {
            argNames: ["name"],
            name: "files?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets the folder for the specified name
        getSubFolder: {
            argNames: ["name"],
            name: "folders?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.RequestType.Post
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Folder",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Folders
    // The SPFolderCollection object.
    /*********************************************************************************************************************************/
    var Folders = (function (_super) {
        __extends(Folders, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Folders(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/rootfolder/" : "") + "folders";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "folders" } });
            }
        }
        return Folders;
    }($REST.Base));
    $REST.Folders = Folders;
    var Folders_Async = (function (_super) {
        __extends(Folders_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Folders_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Folders_Async;
    }(Folders));
    $REST.Folders_Async = Folders_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.folders = {
        // Adds the folder that is located at the specified URL to the collection.
        add: {
            argNames: ["url"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Get the file at the specified URL.
        getbyurl: {
            argNames: ["serverRelativeUrl"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Group
    // The SPGroup object.
    /*********************************************************************************************************************************/
    //export class Group extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.group = {
        // Gets the user by the specified user id.
        getUserById: {
            argNames: ["userId"],
            name: "users?$filter=Id eq [[userId]]",
            requestType: $REST.RequestType.GetReplace
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // List Items
    // The SPItemCollection object.
    /*********************************************************************************************************************************/
    var ListItems = (function (_super) {
        __extends(ListItems, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ListItems(listName, camlQuery) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items";
            // See if the caml query exists
            if (camlQuery) {
                // Create a list
                var list = new $REST.List(listName, this.targetInfo, false);
                // Query the items
                return list[/^<View/.test(camlQuery) ? "getItems" : "getItemsByQuery"](camlQuery);
            }
            else {
                // See if we are executing the request
                if (this.executeRequestFl) {
                    // Execute the request
                    this.execute();
                }
                else {
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "items" } });
                }
            }
        }
        return ListItems;
    }($REST.Base));
    $REST.ListItems = ListItems;
    var ListItems_Async = (function (_super) {
        __extends(ListItems_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ListItems_Async(listName, camlQuery) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, camlQuery, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return ListItems_Async;
    }(ListItems));
    $REST.ListItems_Async = ListItems_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.items = {
        // Adds an item to the list item collection.
        add: {
            metadataType: function (obj) { return obj.Parent && obj.Parent["ListItemEntityTypeFullName"] ? obj.Parent["ListItemEntityTypeFullName"] : "SP.ListItem"; },
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Limited WebPart Manager
    // The SPLimitedWebPartManager object.
    /*********************************************************************************************************************************/
    //export class LimitedWebPartManager extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.limitedwebpartmanager = {
        // Gets a webpart by its id.
        get_WebParts: {
            argNames: ["id"],
            name: "webparts?expand=WebPart",
            requestType: $REST.RequestType.GetReplace
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
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
        function List(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "list" } });
            }
        }
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        /**
         * Gets the content types that are associated with the list.
         */
        List.prototype.get_ContentTypes = function () { return this.getProperty("ContentTypes"); };
        /**
         *
         */
        List.prototype.get_CreatablesInfo = function () { return this.getProperty("CreatablesInfo"); };
        /**
         * Gets the default view for the list.
         */
        List.prototype.get_DefaultView = function () { return this.getProperty("DefaultView"); };
        /**
         *
         */
        List.prototype.get_DescriptionResource = function () { return this.getProperty("DescriptionResource"); };
        /**
         * Gets the collection of event receiver definitions associated with the list.
         */
        List.prototype.get_EventReceivers = function () { return this.getProperty("EventReceivers"); };
        /**
         * Gets the collection of field objects associated with the list.
         */
        List.prototype.get_Fields = function () { return this.getProperty("Fields"); };
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        List.prototype.get_FirstUniqueAncestorSecurableObject = function () { return this.getProperty("FirstUniqueAncestorSecurableObject"); };
        /**
         * Gets the collection of forms associated with the list.
         */
        List.prototype.get_Forms = function () { return this.getProperty("Forms"); };
        /**
         *
         */
        List.prototype.get_InformationRightsManagementSettings = function () { return this.getProperty("InformationRightsManagementSettings"); };
        /**
         * Gets all the items in the list.
         */
        List.prototype.get_Items = function () { return this.getProperty("Items"); };
        /**
         * Gets a value that specifies the site that contains the list.
         */
        List.prototype.get_ParentWeb = function () { return this.getProperty("ParentWeb"); };
        /**
         * Gets the collection of role assignments associated with the list.
         */
        List.prototype.get_RoleAssignments = function () { return this.getProperty("RoleAssignments"); };
        /**
         * Gets the root folder for the list.
         */
        List.prototype.get_RootFolder = function () { return this.getProperty("RootFolder"); };
        /**
         *
         */
        List.prototype.get_Subscriptions = function () { return this.getProperty("Subscriptions"); };
        /**
         *
         */
        List.prototype.get_TitleResource = function () { return this.getProperty("TitleResource"); };
        /**
         * Gets a value that specifies the collection of user custom actions associate with the list.
         */
        List.prototype.get_UserCustomActions = function () { return this.getProperty("UserCustomActions"); };
        /**
         * Gets a value that specifies the collection of all views associated with the list.
         */
        List.prototype.get_Views = function () { return this.getProperty("Views"); };
        /**
         * Gets a value that specifies the collection of all workflow associations for the list.
         */
        List.prototype.get_WorkflowAssociations = function () { return this.getProperty("WorkflowAssociations"); };
        return List;
    }($REST.Base));
    $REST.List = List;
    var List_Async = (function (_super) {
        __extends(List_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function List_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return List_Async;
    }(List));
    $REST.List_Async = List_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
    $REST.Library.list = {
        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            name: "contenttypes/addAvailableContentType",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a content type to the collection.
        addContentType: {
            argNames: ["data"],
            metadataType: "SP.ContentType",
            name: "contenttypes/add",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a field to the field collection.
        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "fields/add",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a field, using it's Schema XML, to the field collection.
        // Set the option to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: $REST.RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                    __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                    Options: 8,
                    SchemaXml: "[[schemaXml]]"
                }
            }
        },
        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            name: "fields/addDependentLookupField",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds an item to the list item collection.
        addItem: {
            metadataType: function (obj) { return obj["ListItemEntityTypeFullName"] || "SP.ListItem"; },
            name: "items",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addSiteGroup: {
            argNames: ["principalid", "roledefid"],
            name: "roleassignments/addroleassignment",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds the folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds a view to the list view collection.
        addView: {
            metadataType: "SP.View",
            name: "views",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets a content type by it's name.
        getContentType: {
            argNames: ["name"],
            name: "contenttypes?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a content type by id.
        getContentTypeById: {
            argNames: ["id"],
            name: "contenttypes/getById([[id]])",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the display form.
        getDefaultDisplayForm: {
            name: "forms?$filter=FormType eq 4",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the edit form.
        getDefaultEditForm: {
            name: "forms?$filter=FormType eq 6",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the new form.
        getDefaultNewForm: {
            name: "forms?$filter=FormType eq 8",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the list form based on the form type.
        getForm: {
            argNames: ["formType"],
            name: "forms?$filter=FormType eq [[formType]]",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets the field with the specified ID.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getById",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first Field object with the specified internal name or title from the collection.
        getFieldByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            name: "fields/getByInternalNameOrTitle",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first field object in the collection based on the title of the specified field.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields/getByTitle",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Get the folder at the specified URL.
        getSubFolder: {
            argNames: ["serverRelativeUrl"],
            name: "folders/getbyurl",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns an item based on the id.
        getItemById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns an item based on the title.
        getItemByTitle: {
            argNames: ["title"],
            name: "items?$filter Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns a collection of items from the list based on the view xml.
        getItems: {
            argNames: ["viewXml"],
            requestType: $REST.RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "[[viewXml]]"
                }
            }
        },
        // Returns a collection of items based on the filter.
        getItemsByFilter: {
            argNames: ["filter"],
            name: "items?$filter=[[filter]]",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns a collection of items from the list based on the specified query.
        getItemsByQuery: {
            argNames: ["camlQuery"],
            name: "getItems",
            requestType: $REST.RequestType.PostWithArgsInBody,
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
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
        getRelatedFields: {
            requestType: $REST.RequestType.Get
        },
        // Gets the effective user permissions for the current user.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the list view with the specified view identifier.
        getViewById: {
            argNames: ["viewId"],
            name: "getView",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the list view with the specified view identifier.
        getViewByTitle: {
            argNames: ["title"],
            name: "views?$filter=Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.RequestType.Post
        },
        // Renders the list data.
        renderListData: {
            argNames: ["viewXml"],
            name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
            requestType: $REST.RequestType.PostReplace
        },
        // Renders the list form data.
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        renderListFormData: {
            argNames: ["itemid", "formid", "mode"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Reserves a list item ID for idempotent list item creation.
        reserveListItemId: {
            requestType: $REST.RequestType.Post
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.RequestType.Post
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.List",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // List Item
    // The SPListItem object.
    /*********************************************************************************************************************************/
    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ListItem(itemId, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items(" + itemId + ")";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "listItem" } });
            }
        }
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        /**
         * Specifies the collection of attachments that are associated with the list item.
         */
        ListItem.prototype.get_AttachmentFiles = function () { return this.getProperty("AttachmentFiles"); };
        /**
         * Gets a value that specifies the content type of the list item.
         */
        ListItem.prototype.get_ContentType = function () { return this.getProperty("ContentType"); };
        /**
         * Gets the values for the list item as HTML.
         */
        ListItem.prototype.get_FieldValuesAsHtml = function () { return this.getProperty("FieldValuesAsHtml"); };
        /**
         * Gets the list item's field values as a collection of string values.
         */
        ListItem.prototype.get_FieldValuesAsText = function () { return this.getProperty("FieldValuesAsText"); };
        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        ListItem.prototype.get_FieldValuesForEdit = function () { return this.getProperty("FieldValuesForEdit"); };
        /**
         * Gets the file that is represented by the item from a document library.
         */
        ListItem.prototype.get_File = function () { return this.getProperty("File"); };
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        ListItem.prototype.get_FirstUniqueAncestorSecurableObject = function () { return this.getProperty("FirstUniqueAncestorSecurableObject"); };
        /**
         * Gets a folder object that is associated with a folder item.
         */
        ListItem.prototype.get_Folder = function () { return this.getProperty("Folder"); };
        /**
         *
         */
        ListItem.prototype.get_GetDlpPolicyTip = function () { return this.getProperty("GetDlpPolicyTip"); };
        /**
         * Gets the parent list that contains the list item.
         */
        ListItem.prototype.get_ParentList = function () { return this.getProperty("ParentList"); };
        /**
         * Gets the role assignments for the securable object.
         */
        ListItem.prototype.get_RoleAssignments = function () { return this.getProperty("RoleAssignments"); };
        return ListItem;
    }($REST.Base));
    $REST.ListItem = ListItem;
    var ListItem_Async = (function (_super) {
        __extends(ListItem_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ListItem_Async(itemId, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, itemId, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return ListItem_Async;
    }(ListItem));
    $REST.ListItem_Async = ListItem_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.listitem = {
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        addAttachment: {
            argNames: ["name"],
            name: "attachmentfiles/add",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Gets the effective permissions that a specified user has on the list item.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.RequestType.Post
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.RequestType.Post
        },
        // Updates it's properties.
        update: {
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Validates and sets the values of the specified collection of fields for the list item.
        validateUpdateListItem: {
            argNames: ["formValues", "bNewDocumentUpdate"],
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Lists
    // The SPListCollection object.
    /*********************************************************************************************************************************/
    var Lists = (function (_super) {
        __extends(Lists, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Lists() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "lists" } });
            }
        }
        return Lists;
    }($REST.Base));
    $REST.Lists = Lists;
    var Lists_Async = (function (_super) {
        __extends(Lists_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Lists_Async() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Lists_Async;
    }(Lists));
    $REST.Lists_Async = Lists_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.lists = {
        // Adds a list to the list collection.
        add: {
            metadataType: "SP.List",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
        ensureSiteAssetsLibrary: {
            requestType: $REST.RequestType.Post
        },
        // Gets a list that is the default location for wiki pages.
        ensureSitePagesLibrary: {
            requestType: $REST.RequestType.Post
        },
        // Returns the list with the specified list identifier.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the list with the specified title from the collection.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // People Manager
    /*********************************************************************************************************************************/
    $REST.Library.peoplemanager = {};
    $REST.Library.peoplemanager[$REST.RequestType.Get] = [
        "amlFollowedBy", "amlFollowing", "getFollowedTags", "getFollowersFor", "getMyFollowers", "getMyProperties", "getMySuggestions",
        "getPeopleFollowedBy", "getPeopleFollowedByMe", "getPropertiesFor", "getUserProfilePropertyFor"
    ];
    $REST.Library.peoplemanager[$REST.RequestType.GetAppendMethodToEndPoint] = ["getTrendingTags", "isFollowing"];
    $REST.Library.peoplemanager[$REST.RequestType.Post] = ["follow", "followTag", "hideSuggestion", "stopFollowing", "stopFollowingTag"];
    $REST.Library.peoplemanager[$REST.RequestType.PostDataInBody] = ["setMyProfilePicture"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Profile Loader
    /*********************************************************************************************************************************/
    //export class ProfileLoader extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.profileloader = {};
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Assignment
    // The SPRoleAssignment object.
    /*********************************************************************************************************************************/
    //export class RoleAssignment extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roleAssignment = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Assignments
    // The SPRoleAssignmentCollection object.
    /*********************************************************************************************************************************/
    var RoleAssignments = (function (_super) {
        __extends(RoleAssignments, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function RoleAssignments(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "roleassignments";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "roleassignments" } });
            }
        }
        return RoleAssignments;
    }($REST.Base));
    $REST.RoleAssignments = RoleAssignments;
    var RoleAssignments_Async = (function (_super) {
        __extends(RoleAssignments_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function RoleAssignments_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return RoleAssignments_Async;
    }(RoleAssignments));
    $REST.RoleAssignments_Async = RoleAssignments_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roleAssignments = {
        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Gets the role assignment associated with the specified principal ID from the collection.
        getByPrincipalId: {
            argNames: ["principalId"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the role definition with the specified role type.
        removeRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: $REST.RequestType.PostWithArgs
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Definition
    // The SPRoleDefinition object.
    /*********************************************************************************************************************************/
    //export class RoleDefinition extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roledefinition = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Definitions
    // The SPRoleDefinitionCollection object.
    /*********************************************************************************************************************************/
    var RoleDefinitions = (function (_super) {
        __extends(RoleDefinitions, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function RoleDefinitions() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/roledefinitions";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "roledefinitions" } });
            }
        }
        return RoleDefinitions;
    }($REST.Base));
    $REST.RoleDefinitions = RoleDefinitions;
    var RoleDefinitions_Async = (function (_super) {
        __extends(RoleDefinitions_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function RoleDefinitions_Async() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return RoleDefinitions_Async;
    }(RoleDefinitions));
    $REST.RoleDefinitions_Async = RoleDefinitions_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["roleDefId"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the role definition with the specified role type.
        getByType: {
            argNames: ["type"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
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
/// <reference path="../base.d.ts" />
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
        function Site() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters(args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "site";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "site" } });
            }
        }
        // Method to get the root web
        Site.prototype.getRootWeb = function () { return new $REST.Web(this.targetInfo); };
        // Method to determine if the current user has access, based on the permissions.
        Site.prototype.hasAccess = function (permissions) {
            // TO DO
            return true;
        };
        ;
        return Site;
    }($REST.Base));
    $REST.Site = Site;
    var Site_Async = (function (_super) {
        __extends(Site_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Site_Async() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Site_Async;
    }(Site));
    $REST.Site_Async = Site_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.site = {
        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            argNames: ["data"],
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
        createPreviewSPSite: {
            argNames: ["upgrade", "sendemail"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
        extendUpgradeReminderDate: {
            requestType: $REST.RequestType.Post
        },
        // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
        getCatalog: {
            argNames: ["typeCatalog"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets a custom action by it's name or title.
        getCustomAction: {
            argNames: ["title"],
            name: "usercustomactions?$filter=Name eq '[[title]]' or Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Specifies the collection of custom list templates for a given site.
        getCustomListTemplates: {
            argNames: ["web"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Returns the collection of site definitions that are available for creating Web sites within the site collection.
        getWebTemplates: {
            argNames: ["LCID", "overrideCompatLevel"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
        invalidate: {
            requestType: $REST.RequestType.Post
        },
        // Returns true if the object needs to be upgraded; otherwise, false.
        needsUpgradeByType: {
            argNames: ["versionUpgrade", "recursive"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Returns the site at the specified URL.
        openWeb: {
            argNames: ["strUrl"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the site with the specified GUID.
        openWebById: {
            argNames: ["gWebId"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
        runHealthCheck: {
            argNames: ["ruleId", "bRepair", "bRunAlways"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
        runUpgradeSiteSession: {
            argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Method to send an email.
        sendEmail: {
            argNames: ["properties"],
            name: "SP.Utilities.Utility.SendEmail",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Site",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: ["requireUseRemoteAPIs"],
            requestType: $REST.RequestType.PostWithArgs
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Site Groups
    // The SPSiteGroupCollection object.
    /*********************************************************************************************************************************/
    var SiteGroups = (function (_super) {
        __extends(SiteGroups, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function SiteGroups() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/sitegroups";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "sitegroups" } });
            }
        }
        return SiteGroups;
    }($REST.Base));
    $REST.SiteGroups = SiteGroups;
    var SiteGroups_Async = (function (_super) {
        __extends(SiteGroups_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function SiteGroups_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return SiteGroups_Async;
    }(SiteGroups));
    $REST.SiteGroups_Async = SiteGroups_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.siteGroups = {
        // Returns a group from the collection based on the member ID of the group.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns a cross-site group from the collection based on the name of the group.
        getByName: {
            argNames: ["name"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Removes the group with the specified member ID from the collection.
        removeById: {
            argNames: ["id"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Removes the cross-site group with the specified name from the collection.
        removeByLoginName: {
            argNames: ["name"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Actor
    /*********************************************************************************************************************************/
    $REST.Library.socialrestactor = {};
    $REST.Library.socialrestactor[$REST.RequestType.Custom] = [
        { name: "createPost", "function": function (data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: null, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("feed/post", null, data, true); } },
        { name: "getFeed", "function": function () { return this.executeGet("feed"); } },
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Feed Manager
    /*********************************************************************************************************************************/
    $REST.Library.socialrestfeedmanager = {};
    $REST.Library.socialrestfeedmanager[$REST.RequestType.Custom] = [
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

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Social REST Thread
    /*********************************************************************************************************************************/
    $REST.Library.socialrestthread = {};
    $REST.Library.socialrestthread[$REST.RequestType.Custom] = [
        { name: "delete", "function": function (id) { return this.executePost("delete", null, { ID: id || this.ID }, true); } },
        { name: "like", "function": function (id) { return this.executePost("like", null, { ID: id || this.ID }, true); } },
        { name: "lock", "function": function (id) { return this.executePost("lock", null, { ID: id || this.ID }, true); } },
        { name: "reply", "function": function (data, id) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: id || this.ID, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("reply", null, data, true); } },
        { name: "unlike", "function": function (id) { return this.executePost("unlike", null, { ID: id || this.ID }, true); } },
        { name: "unlock", "function": function (id) { return this.executePost("unlock", null, { ID: id || this.ID }, true); } },
    ];
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User
    // The SPUser object.
    /*********************************************************************************************************************************/
    var User = (function (_super) {
        __extends(User, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function User(userId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/getUserById(" + userId + ")";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "user" } });
            }
        }
        return User;
    }($REST.Base));
    $REST.User = User;
    var User_Async = (function (_super) {
        __extends(User_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function User_Async(userId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, userId, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return User_Async;
    }(User));
    $REST.User_Async = User_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.user = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User Custom Action
    // The SPUserCustomAction object.
    /*********************************************************************************************************************************/
    //export class UserCustomAction extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.usercustomaction = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User Custom Actions
    // The SPUserCustomActionCollection object.
    /*********************************************************************************************************************************/
    var UserCustomActions = (function (_super) {
        __extends(UserCustomActions, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function UserCustomActions(webFl) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = typeof (webFl) === "boolean" ? webFl : false;
            this.targetInfo.endpoint = (this.defaultToWebFl ? "web" : "site") + "/usercustomactions";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "usercustomactions" } });
            }
        }
        return UserCustomActions;
    }($REST.Base));
    $REST.UserCustomActions = UserCustomActions;
    var UserCustomActions_Async = (function (_super) {
        __extends(UserCustomActions_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function UserCustomActions_Async(webFl) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, webFl, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return UserCustomActions_Async;
    }(UserCustomActions));
    $REST.UserCustomActions_Async = UserCustomActions_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.usercustomactions = {
        // Deletes all custom actions in the collection.
        clear: {
            requestType: $REST.RequestType.Post
        },
        // Returns the custom action with the specified identifier.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the user custom action based on the name of the specified user custom action.
        getByName: {
            argNames: ["name"],
            name: "?filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.PostReplace
        },
        // Returns the user custom action based on the title of the specified user custom action.
        getByTitle: {
            argNames: ["title"],
            name: "?filter=Title eq '[[title]]'",
            requestType: $REST.RequestType.PostReplace
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User Profile
    /*********************************************************************************************************************************/
    $REST.Library.userprofile = {};
    $REST.Library.userprofile[$REST.RequestType.Post] = ["createPersonalSiteEnque", "shareAllSocialData"];
    $REST.Library.userprofile[$REST.RequestType.Custom] = [
        { name: "getOneDriveUrl", "function": function () { return this.FollowPersonalSiteUrl + "_layouts/15/onedrive.aspx"; } }
    ];
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Users
    // The SPUserCollection object.
    /*********************************************************************************************************************************/
    var Users = (function (_super) {
        __extends(Users, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Users() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/users";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "users" } });
            }
        }
        return Users;
    }($REST.Base));
    $REST.Users = Users;
    var Users_Async = (function (_super) {
        __extends(Users_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Users_Async() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Users_Async;
    }(Users));
    $REST.Users_Async = Users_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.users = {
        // Gets the user with the specified email address.
        getByEmail: {
            argNames: ["email"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the user with the specified member identifier (ID).
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the user with the specified login name.
        getByLoginName: {
            argNames: ["loginName"],
            requestType: $REST.RequestType.GetWithArgsInQS
        },
        // Removes the user with the specified ID.
        removeById: {
            argNames: ["id"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Removes the user with the specified login name.
        removeByLoginName: {
            argNames: ["loginName"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Versions
    // The SPVersionCollection object.
    /*********************************************************************************************************************************/
    //export class Versions extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.versions = {
        // Gets the version with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Deletes all versions in the collection.
        deleteAll: {
            requestType: $REST.RequestType.Post
        },
        // Deletes a version, by the specified id.
        deleteById: {
            argNames: ["id"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Deletes a version, by the specified label.
        deleteByLabel: {
            argNames: ["label"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Restores a version, by the specified label.
        restoreByLabel: {
            argNames: ["label"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // View
    // The SPView object.
    /*********************************************************************************************************************************/
    var View = (function (_super) {
        __extends(View, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function View(viewName, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/views/getByTitle('" + viewName + "')";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "view" } });
            }
        }
        return View;
    }($REST.Base));
    $REST.View = View;
    var View_Async = (function (_super) {
        __extends(View_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function View_Async(viewName, listName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, viewName, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return View_Async;
    }(View));
    $REST.View_Async = View_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.view = {
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Returns the list view as HTML.
        renderAsHtml: {
            requestType: $REST.RequestType.Get
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.View",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // View Fields
    // The SPViewFieldCollection object.
    /*********************************************************************************************************************************/
    //export class ViewFieldCollection extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.viewfieldcollection = {
        // Adds the field with the specified field internal name or display name to the collection.
        addViewField: {
            argNames: ["fieldName"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Moves the field with the specified field internal name to the specified position in the collection.
        moveViewFieldTo: {
            argNames: ["field", "index"],
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Removes all the fields from the collection.
        removeAllViewFields: {
            requestType: $REST.RequestType.Post
        },
        // Removes the field with the specified field internal name from the collection.
        removeViewField: {
            argNames: ["fieldName"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Views
    // The SPViewCollection object.
    /*********************************************************************************************************************************/
    var Views = (function (_super) {
        __extends(Views, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Views(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/views";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "views" } });
            }
        }
        return Views;
    }($REST.Base));
    $REST.Views = Views;
    var Views_Async = (function (_super) {
        __extends(Views_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Views_Async(listName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, listName, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Views_Async;
    }(Views));
    $REST.Views_Async = Views_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.views = {
        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        }
    };
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Web
    // The SPWeb object.
    /*********************************************************************************************************************************/
    var Web = (function (_super) {
        __extends(Web, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Web() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getInputParmeters.apply(null, args));
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web";
            // See if we are executing the request
            if (this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "web" } });
            }
        }
        // Method to determine if the current user has access, based on the permissions.
        Web.prototype.hasAccess = function (permissions) {
            // TO DO
            return true;
        };
        ;
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        /**
         * Gets a collection of metadata for the Web site.
         */
        Web.prototype.get_AllProperties = function () { return this.getProperty("AllProperties"); };
        /**
         *
         */
        Web.prototype.get_AppTiles = function () { return this.getProperty("AppTiles"); };
        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        Web.prototype.get_AssociatedMemberGroup = function () { return this.getProperty("AssociatedMemberGroup"); };
        /**
         * Gets or sets the associated owner group of the Web site.
         */
        Web.prototype.get_AssociatedOwnerGroup = function () { return this.getProperty("AssociatedOwnerGroup"); };
        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        Web.prototype.get_AssociatedVisitorGroup = function () { return this.getProperty("AssociatedVisitorGroup"); };
        /**
         *
         */
        Web.prototype.get_Author = function () { return this.getProperty("Author"); };
        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        Web.prototype.get_AvailableContentTypes = function () { return this.getProperty("AvailableContentTypes"); };
        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        Web.prototype.get_AvailableFields = function () { return this.getProperty("AvailableFields"); };
        /**
         *
         */
        Web.prototype.get_ClientWebParts = function () { return this.getProperty("ClientWebParts"); };
        /**
         * Gets the collection of content types for the Web site.
         */
        Web.prototype.get_ContentTypes = function () { return this.getProperty("ContentTypes"); };
        /**
         * Gets the current user of the site.
         */
        Web.prototype.get_CurrentUser = function () { return this.getProperty("CurrentUser"); };
        /**
         *
         */
        Web.prototype.get_DataLeakagePreventionStatusInfo = function () { return this.getProperty("DataLeakagePreventionStatusInfo"); };
        /**
         *
         */
        Web.prototype.get_DescriptionResource = function () { return this.getProperty("DescriptionResource"); };
        /**
         * Gets the collection of event receiver definitions that are currently available on the website.
         */
        Web.prototype.get_EventReceivers = function () { return this.getProperty("EventReceivers"); };
        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        Web.prototype.get_Features = function () { return this.getProperty("Features"); };
        /**
         * Gets the collection of field objects that represents all the fields in the Web site.
         */
        Web.prototype.get_Fields = function () { return this.getProperty("Fields"); };
        /**
         * Gets the collection of all first-level files in the Web site.
         */
        Web.prototype.get_Files = function () { return this.getProperty("rootfolder/files"); };
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        Web.prototype.get_FirstUniqueAncestorSecurableObject = function () { return this.getProperty("FirstUniqueAncestorSecurableObject"); };
        /**
         * Gets the collection of all first-level folders in the Web site.
         */
        Web.prototype.get_Folders = function () { return this.getProperty("Folders"); };
        /**
         * Gets the collection of all lists that are contained in the Web site available to the current user based on the permissions of the current user.
         */
        Web.prototype.get_Lists = function () { return this.getProperty("Lists"); };
        /**
         * Gets a value that specifies the collection of list definitions and list templates available for creating lists on the site.
         */
        Web.prototype.get_ListTemplates = function () { return this.getProperty("ListTemplates"); };
        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        Web.prototype.get_Navigation = function () { return this.getProperty("Navigation"); };
        /**
         * Gets the parent website of the specified website.
         */
        Web.prototype.get_ParentWeb = function () { return this.getProperty("ParentWeb"); };
        /**
         * Gets the collection of push notification subscribers over the site.
         */
        Web.prototype.get_PushNotificationSubscribers = function () { return this.getProperty("PushNotificationSubscribers"); };
        /**
         * Gets the collection of push notification subscribers over the site.
         */
        Web.prototype.get_RecycleBin = function () { return this.getProperty("RecycleBin"); };
        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        Web.prototype.get_RegionalSettings = function () { return this.getProperty("RegionalSettings"); };
        /**
         * Gets the collection of role assignments for the Web site.
         */
        Web.prototype.get_RoleAssignments = function () { return this.getProperty("RoleAssignments"); };
        /**
         * Gets the collection of role definitions for the Web site.
         */
        Web.prototype.get_RoleDefinitions = function () { return this.getProperty("RoleDefinitions"); };
        /**
         * Gets the root folder for the Web site.
         */
        Web.prototype.get_RootFolder = function () { return this.getProperty("RootFolder"); };
        /**
         * Gets the collection of groups for the site collection.
         */
        Web.prototype.get_SiteGroups = function () { return this.getProperty("SiteGroups"); };
        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        Web.prototype.get_SiteUserInfoList = function () { return this.getProperty("SiteUserInfoList"); };
        /**
         * Gets the collection of all users that belong to the site collection.
         */
        Web.prototype.get_SiteUsers = function () { return this.getProperty("SiteUsers"); };
        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        Web.prototype.get_ThemeInfo = function () { return this.getProperty("ThemeInfo"); };
        /**
         *
         */
        Web.prototype.get_TitleResource = function () { return this.getProperty("TitleResource"); };
        /**
         * Gets a value that specifies the collection of user custom actions for the site.
         */
        Web.prototype.get_UserCustomActions = function () { return this.getProperty("UserCustomActions"); };
        /**
         * Represents key properties of the subsites of a site.
         */
        Web.prototype.get_WebInfos = function () { return this.getProperty("WebInfos"); };
        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        Web.prototype.get_Webs = function () { return this.getProperty("Webs"); };
        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        Web.prototype.get_WorkflowAssociations = function () { return this.getProperty("WorkflowAssociations"); };
        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        Web.prototype.get_WorkflowTemplates = function () { return this.getProperty("WorkflowTemplates"); };
        return Web;
    }($REST.Base));
    $REST.Web = Web;
    var Web_Async = (function (_super) {
        __extends(Web_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Web_Async() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            // Call the base constructor
            _super.call(this, $REST.Base.getAsyncInputParmeters.apply(null, args));
        }
        return Web_Async;
    }(Web));
    $REST.Web_Async = Web_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.web = {
        // Adds a content type content type collection.
        addContentType: {
            metadataType: "SP.ContentType",
            name: "contenttypes",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds an existing content type to content type collection.
        addExistingContentType: {
            argNames: ["contentTypeId"],
            name: "contenttypes/addAvailableContentType",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a field to it's collection.
        addField: {
            metadataType: "SP.Field",
            name: "fields/add",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a field, using it's Schema XML, to the field collection.
        // Set the option to SP.AddFieldOptions.addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        addFieldAsXml: {
            argNames: ["schemaXml"],
            name: "fields/createFieldAsXml",
            requestType: $REST.RequestType.PostWithArgsInBody,
            data: {
                parameters: {
                    __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                    Options: 8,
                    SchemaXml: "[[schemaXml]]"
                }
            }
        },
        // Adds a file to the root folder.
        addFile: {
            argNames: ["url", "overwrite"],
            name: "rootfolder/files/add",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds a list to the list collection.
        addList: {
            metadataType: "SP.List",
            name: "lists",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a permission to the role definitions.
        addPermission: {
            metadataType: "SP.RoleDefinition",
            name: "roledefinitions",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a site group to the site group collection.
        addSiteGroup: {
            argNames: ["Title"],
            metadataType: "SP.Group",
            name: "sitegroups",
            requestType: $REST.RequestType.PostWithArgsInBody,
        },
        // Adds a sub-folder to the root folder.
        addSubFolder: {
            argNames: ["url"],
            name: "rootfolder/folders/add",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            argName: ["name"],
            requestType: $REST.RequestType.PostWithArgsInQS
        },
        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Deletes the object
        delete: {
            requestType: $REST.RequestType.Delete
        },
        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        doesPushNotificationSubscriberExist: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns whether the current user has the given set of permissions.
        doesUserHavePermissions: {
            argNames: ["High", "Low"],
            requestType: $REST.RequestType.GetWithArgsInQS
        },
        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        ensureUser: {
            argNames: ["logonName"],
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Sends data to an OData service.
        executeRemoteLOB: {
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets the app BDC catalog.
        getAppBdcCatalog: {
            requestType: $REST.RequestType.Post
        },
        // Gets the app BDC catalog for the specified app instance.
        getAppBdcCatalogForAppInstance: {
            argNames: ["id"],
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: $REST.RequestType.GetWithArgs
        },
        // Returns the list gallery on the site.
        getCatalog: {
            argNames: ["galleryType"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Gets the context information for the site. Static method.
        getContextWebInformation: {
            name: "contextInfo",
            replaceEndpointFl: true,
            requestType: $REST.RequestType.Post
        },
        // Gets a custom action by it's name or title.
        getCustomAction: {
            argNames: ["title"],
            name: "usercustomactions?$filter=Name eq '[[title]]' or Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: $REST.RequestType.Get
        },
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: $REST.RequestType.GetWithArgsInQS
        },
        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Gets a field by it's title, internal name or static name.
        getField: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]' or InternalName eq '[[title]]' or StaticName eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's id.
        getFieldById: {
            argNames: ["id"],
            name: "fields/getById",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a file by it's name, in the root folder.
        getFile: {
            argNames: ["name"],
            name: "rootfolder/files?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            argNames: ["url"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            argNames: ["url"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
            argNames: ["url"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a list by it's id.
        getListById: {
            argNames: ["id"],
            name: "lists/getById",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the list for the specified title
        getListByTitle: {
            argNames: ["title"],
            name: "lists/getByTitle",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the push notification subscriber over the site for the specified device application instance ID.
        getPushNotificationSubscriber: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            argNames: ["args"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            argNames: ["loginName"],
            requestType: $REST.RequestType.GetWithArgsInQS
        },
        // Gets a sub-folder by it's name, from the root folder.
        getSubFolder: {
            argNames: ["name"],
            name: "rootfolder/folders?$filter=Name eq '[[name]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets a site group by it's id.
        getSiteGroupById: {
            argNames: ["id"],
            name: "sitegroups/getById",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a site group by it's name.
        getSiteGroupByName: {
            argNames: ["name"],
            name: "sitegroups/getByName",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: $REST.RequestType.GetWithArgs
        },
        // Gets a user by login name.
        getUserByEmail: {
            argNames: ["email"],
            name: "siteusers/getByEmail",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets a user by login name.
        getUserByLogin: {
            argNames: ["loginName"],
            name: "siteusers/getByLoginName",
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: $REST.RequestType.GetReplace
        },
        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: $REST.RequestType.GetWithArgsInQS
        },
        // Uploads and installs an app package to this site.
        loadAndInstallApp: {
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Uploads and installs an App package on the site in a specified locale.
        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Uploads an App package and creates an instance from it.
        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Returns the name of the image file for the icon that is used to represent the specified file.
        mapToIcon: {
            argNames: ["filename", "progid", "size"],
            requestType: $REST.RequestType.GetWithArgs
        },
        // Processes a notification from an external system.
        processExternalNotification: {
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        registerPushNotificationSubscriber: {
            argNames: ["deviceappinstanceid", "servicetoken"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: $REST.RequestType.Post
        },
        // Method to send an email.
        sendEmail: {
            argNames: ["properties"],
            name: "SP.Utilities.Utility.SendEmail",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Updates it's properties.
        update: {
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Webs
    // The SPWebCollection object.
    /*********************************************************************************************************************************/
    //export class Webs extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.webs = {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebCreationInformation",
            requestType: $REST.RequestType.PostWithArgsInBody
        }
    };
})($REST || ($REST = {}));
