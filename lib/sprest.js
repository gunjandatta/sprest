/// <reference path="base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    $REST.Library = {};
    $REST.ExecuteOnCreationFl = true;
    var SP;
    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    var Base = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Base(targetInfo, executeRequestFl) {
            // Default the properties
            this.targetInfo = targetInfo || {};
            // Default the flag, if it's not defined
            this.executeRequestFl = typeof (executeRequestFl) === "boolean" ? executeRequestFl : $REST.ExecuteOnCreationFl;
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
        // Method to execute a child request
        Base.prototype.execute = function () {
            // See if this is an asynchronous request
            if (this.targetInfo.asyncFl || this.targetInfo.bufferFl) {
                // Create a promise
                this.promise = new $REST.Promise(this.targetInfo.callback);
                // Create the request
                this.request = new $REST.Request(new $REST.TargetInfo(this.targetInfo), this.updateDataObject);
            }
            else {
                // Create the request
                this.request = new $REST.Request(new $REST.TargetInfo(this.targetInfo));
                // Update the data object
                this.updateDataObject(this.request.response);
            }
        };
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/
        // Method to add the methods to this object
        Base.prototype.addMethods = function (obj, data) {
            // Determine the object type
            var type = (data.__metadata && data.__metadata.type ? data.__metadata.type : this.targetInfo.endpoint).split('.');
            type = (type[type.length - 1]).toLowerCase();
            // Get the methods for this object
            var methods = $REST.Library[type];
            if (methods) {
                // Parse the methods
                for (var methodName in methods) {
                    // Add the method to the object
                    obj[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methods[methodName] ? methods[methodName] : {}) + ", arguments);");
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
                    obj["get_" + key] = new Function("return this.getCollection('" + key + "', arguments);");
                }
                else {
                    // Append the property to this object
                    obj[key] = value;
                }
            }
        };
        // Method to execute a method
        Base.prototype.executeMethod = function (methodName, methodConfig, args) {
            // Copy the target information
            var targetInfo = Object.create(this.targetInfo);
            // Get the method information
            var methodInfo = new $REST.MethodInfo(methodName, methodConfig, args);
            // Update the target information
            targetInfo.data = methodInfo.body;
            targetInfo.method = methodInfo.requestMethod;
            // See if we are replacing the endpoint
            if (methodInfo.replaceEndpointFl) {
                // Replace the endpoint
                targetInfo.endpoint = methodInfo.url;
            }
            else if (methodInfo.url && methodInfo.url.length > 0) {
                // Append the method to the endpoint
                targetInfo.endpoint += "/" + methodInfo.url;
            }
            // Create a new object
            var obj = new Base(targetInfo, true);
            // Set the parent
            obj.parent = this;
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
            var obj = new Base(targetInfo, true);
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
                    // Apply the properties to the object
                    this.addProperties(this, results[0]);
                }
                else {
                    // Apply the methods to the results asynchronously
                    setTimeout(function () {
                        // Parse the results
                        for (var i = 0; i < results.length; i++) {
                            // Add the methods
                            _this.addMethods(results[i], results[i]);
                        }
                    }, 10);
                }
            }
        };
        // Method to convert the input arguments into an object
        Base.prototype.updateDataObject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var response = args && args.length > 0 ? args[0] : "{}";
            // Convert the response
            var data = JSON.parse(response);
            this["existsFl"] = data.error == null;
            // See if the data properties exists
            if (data.d) {
                // Save a reference to it
                this["d"] = data.d;
                // Update this object's properties
                this.addProperties(this, data.d);
                // Add the methods
                this.addMethods(this, data.d);
                // Update the data collection
                this.updateDataCollection(data.d.results);
            }
            // Resolve the promise
            this.promise ? this.promise.resolve() : null;
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
            this.methodInfo.name = this.methodInfo.name ? this.methodInfo.name : methodName;
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
                        case "string":
                            params[name_1] = this.isTemplate || this.replace ? value : "'" + value + "'";
                            break;
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
                        this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key]);
                    }
                    // Set the method data
                    this.methodData = JSON.parse(this.methodInfo.data);
                }
                else if (this.methodInfo.metadataType) {
                    // See if parameters exist
                    if (this.methodInfo.argNames) {
                        // Append the metadata to the first parameter
                        params[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                    else {
                        // Append the metadata to the parameters
                        params["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                }
            }
            // See if the argument values exist
            if (this.methodInfo.argValues && (this.methodInfo.argNames == null || this.methodInfo.argValues.length > this.methodInfo.argNames.length)) {
                // Set the method data to be passed in the body of the request
                this.methodData = this.methodInfo.argValues[(this.methodInfo.argNames ? this.methodInfo.argNames.length : -1) + 1];
            }
        };
        // Method to generate the method and parameters as a url
        MethodInfo.prototype.generateUrl = function () {
            var url = this.methodInfo.name;
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
                        switch (this.methodInfo.requestType) {
                            // Append the value only
                            case $REST.RequestType.GetWithArgsValueOnly:
                            case $REST.RequestType.PostWithArgsValueOnly:
                                params += data[name_2] + ", ";
                                break;
                            // Append the parameter and value
                            default:
                                params += name_2 + "=" + data[name_2] + ", ";
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
                        _this.promise.resolve(_this.response);
                    }
                };
            }
            // See if we the response type is an array buffer
            if (this.targetInfo.bufferFl) {
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
            this.targetInfo.bufferFl ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
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
            this.requestData = targetInfo.data;
            this.targetInfo = targetInfo || {};
            this.requestMethod = targetInfo.method ? targetInfo.method : "GET";
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
            var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
            // Ensure the url exists
            if (this.targetInfo.url == null) {
                // Default the url to the current site/web url
                this.targetInfo.url = this.context[this.targetInfo.defaultToWebFl ? "webAbsoluteUrl" : "siteAbsoluteUrl"];
            }
            // See if this is a relative url
            if (this.targetInfo.url.indexOf("http") != 0) {
                // Add the domain
                this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
            }
            // See if this is the app web
            if (this.isAppWeb) {
                // Append the start character for the query string
                var endpoint = this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?";
                // Set the request url
                this.requestUrl = template
                    .replace("{{Url}}", this.context["webAbsoluteUrl"])
                    .replace("{{EndPoint}}", endpoint)
                    .replace("{{TargetUrl}}", "@target='" + this.targetInfo.url + "'");
            }
            else {
                // Set the request url
                this.requestUrl = template
                    .replace("{{Url}}", this.targetInfo.url)
                    .replace("{{EndPoint}}", this.targetInfo.endpoint)
                    .replace("{{TargetUrl}}", "");
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
    $REST.Library.attahmentfiles = {
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        add: {
            argNames: ["name"],
            requestType: $REST.RequestType.PostWithArgs
        },
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Content Types
    // The SPContentType object.
    /*********************************************************************************************************************************/
    //export class ContentType extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.contenttype = {
        // Adds a field link to the content type.
        addFieldLink: {
            argNames: ["data"],
            name: "fieldlinks",
            metadataType: "SP.FieldLink",
            requestType: $REST.RequestType.GetWithArgsInBody
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
        function ContentTypes(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function ContentTypes_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
            name: "getById([[id]])",
            requestType: $REST.RequestType.GetReplace
        }
    };
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Field
    // The SPField object.
    /*********************************************************************************************************************************/
    //export class Field extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    //}
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
            metadataType: "SP.Field",
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
        function Fields(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Fields_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
        function File(serverRelativeUrl, listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/rootfolder/files/getByUrl('" : "getFileByServerRelativeUrl('") + serverRelativeUrl + "')";
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
        return File;
    }($REST.Base));
    $REST.File = File;
    var File_Async = (function (_super) {
        __extends(File_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function File_Async(serverRelativeUrl, listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, serverRelativeUrl, listName, settings, executeRequestFl);
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
            requestType: $REST.RequestType.PostWithArgsInQS
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
            argNames: ["checkin", "checkInType"],
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
        // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: $REST.RequestType.Get
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
        function Files(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Files_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
            argNames: ["content", "overwrite", "url"],
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
    // Attachment Files
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
        function Folder(serverRelativeUrl, listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/rootfolder/folders/getByUrl('" : "getFolderByServerRelativeUrl('") + serverRelativeUrl + "')";
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
        return Folder;
    }($REST.Base));
    $REST.Folder = Folder;
    var Folder_Async = (function (_super) {
        __extends(Folder_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Folder_Async(serverRelativeUrl, listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, serverRelativeUrl, listName, settings, executeRequestFl);
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
            argNames: ["content", "overwrite", "url"],
            name: "files/add",
            requestType: $REST.RequestType.PostWithArgsInQS
        },
        // Adds a ghosted file to this list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            name: "files/addtemplatefile",
            requestType: $REST.RequestType.PostReplace
        },
        // Adds the sub-folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
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
        function Folders(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Folders_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
        // Deletes the object
        containsUser: {
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
        function ListItems(listName, camlQuery, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/items";
            // See if the caml query exists
            if (camlQuery) {
                // Create a list
                var list = new $REST.List(listName, settings, false);
                // Query the items
                return list["existsFl"] ? list["getItems"](camlQuery) : list;
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
        function ListItems_Async(listName, camlQuery, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, camlQuery, settings, executeRequestFl);
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
            metadataType: "SP.ListItem",
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
        // Gets an item by its id.
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
        function List(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        return List;
    }($REST.Base));
    $REST.List = List;
    var List_Async = (function (_super) {
        __extends(List_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function List_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            name: "fields/addDependentLookupField",
            requestType: $REST.RequestType.PostWithArgs
        },
        // Adds an item to the list item collection.
        addItem: {
            metadataType: "SP.ListItem",
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
        // Adds an item to the list item collection.
        addView: {
            metadataType: "SP.View",
            name: "views",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Creates a field based on the specified schema, Boolean value, and field options.
        createFieldAsXml: {
            argNames: ["parameters"],
            metadataType: "SP.XmlSchemaFieldCreationInformation",
            name: "fields/createFieldAsXml",
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
        // Returns the list item with the specified list item identifier.
        getById: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
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
            name: "fields/getFieldById",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first Field object with the specified internal name or title from the collection.
        getFieldByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            name: "fields/getFieldByInternalNameOrTitle",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Returns the first field object in the collection based on the title of the specified field.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields/getFieldByTitle",
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Get the file at the specified URL.
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
        // Returns a collection of items from the list based on the specified query.
        getItems: {
            argNames: ["camlQuery"],
            requestType: $REST.RequestType.PostWithArgsInBody,
            data: {
                query: {
                    __metadata: { type: "SP.CamlQuery" },
                    ViewXml: "<View>[[camlQuery]]</View>"
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
            requestType: $REST.RequestType.PostWithArgsInQS
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
        function ListItem(itemId, listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/getById(" + itemId + ")";
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
        return ListItem;
    }($REST.Base));
    $REST.ListItem = ListItem;
    var ListItem_Async = (function (_super) {
        __extends(ListItem_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function ListItem_Async(itemId, listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, itemId, listName, settings, executeRequestFl);
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
            requestType: $REST.RequestType.GetWithArgsInQS
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
        function Lists(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Lists_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
        }
        return Lists_Async;
    }(Lists));
    $REST.Lists_Async = Lists_Async;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.lists = {
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
        function RoleAssignments(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function RoleAssignments_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
            argNames: ["principalid", "roledefid"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Gets the role assignment associated with the specified principal ID from the collection.
        getByPrincipalId: {
            argNames: ["id"],
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the role definition with the specified role type.
        removeRoleAssignment: {
            argNames: ["principalid", "roledefid"],
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
        function RoleDefinitions(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function RoleDefinitions_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
            argNames: ["id"],
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
        function Site(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Site_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function SiteGroups(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function SiteGroups_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
            argNames: ["loginName"],
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
        function UserCustomActions(webFl, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function UserCustomActions_Async(webFl, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, webFl, settings, executeRequestFl);
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
        function Users(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Users_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function View(viewName, listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function View_Async(viewName, listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, viewName, listName, settings, executeRequestFl);
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
        function Views(listName, settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        function Views_Async(listName, settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, listName, settings, executeRequestFl);
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
        function Web(settings, executeRequestFl) {
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
        return Web;
    }($REST.Base));
    $REST.Web = Web;
    var Web_Async = (function (_super) {
        __extends(Web_Async, _super);
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Web_Async(settings, executeRequestFl) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;
            // Call the base constructor
            _super.call(this, settings, executeRequestFl);
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
            argNames: ["data"],
            metadataType: "SP.ContentType",
            name: "contenttypes",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            argNames: ["data"],
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds an existing content type to content type collection.
        addExistingContentType: {
            argNames: ["data"],
            name: "contenttypes/addAvailableContentType",
            requestType: $REST.RequestType.PostWithArgsInBody
        },
        // Adds a field to it's collection.
        addField: {
            argNames: ["data"],
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
            requestType: $REST.RequestType.GetWithArgsInQS
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
            argNames: [],
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
