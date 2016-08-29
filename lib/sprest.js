/// <reference path="base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Library
    // The base library containing the method information for each object
    /*********************************************************************************************************************************/
    $REST.Library = {};
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
            this.executeRequestFl = typeof (executeRequestFl) === "boolean" ? executeRequestFl : true;
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
        Object.defineProperty(Base.prototype, "parent", {
            // The parent
            get: function () { return this.oParent; },
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
                    obj[methodName] = new Function("return this.executeMethod('" + methodName + "', '" + JSON.stringify(methods[methodName] ? methods[methodName] : {}) + "', arguments);");
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
            else {
                // Append the method to the endpoint
                targetInfo.endpoint += "/" + methodInfo.url;
            }
            // Create a new object
            var obj = new Base(targetInfo, true);
            // Set the parent
            obj.oParent = this;
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
            obj.oParent = this;
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
            this.methodInfo = JSON.parse(methodInfo);
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
                    case $REST.RequestType.PostWithArgsAsQS:
                    case $REST.RequestType.PostWithArgsInBody:
                    case $REST.RequestType.PostWithArgsValueOnly:
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
            get: function () { return this.methodInfo.requestType == $REST.RequestType.GetWithArgsAsQS || this.methodInfo.requestType == $REST.RequestType.PostWithArgsAsQS; },
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
                        default:
                            params[name_1] = this.passDataInBody || this.passDataInQS ? value : "'" + value + "'";
                            break;
                    }
                }
            }
            // See if the metadata type exists
            if (this.methodInfo.metadataType) {
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
            // See if the method has parameters
            var isEmpty = true;
            for (var k in params) {
                isEmpty = false;
                break;
            }
            this.methodParams = isEmpty ? null : params;
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
            // See if we are not passing the data in the body or query string
            if (!this.passDataInBody && !this.passDataInQS) {
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
        RequestType[RequestType["GetWithArgsAsQS"] = 12] = "GetWithArgsAsQS";
        RequestType[RequestType["GetWithArgsInBody"] = 13] = "GetWithArgsInBody";
        RequestType[RequestType["GetWithArgsValueOnly"] = 14] = "GetWithArgsValueOnly";
        // Post Requests
        RequestType[RequestType["Post"] = 20] = "Post";
        RequestType[RequestType["PostWithArgs"] = 21] = "PostWithArgs";
        RequestType[RequestType["PostWithArgsAsQS"] = 22] = "PostWithArgsAsQS";
        RequestType[RequestType["PostWithArgsInBody"] = 23] = "PostWithArgsInBody";
        RequestType[RequestType["PostWithArgsValueOnly"] = 24] = "PostWithArgsValueOnly";
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
    /*********************************************************************************************************************************/
    $REST.Library.attachmentfiles = {};
    $REST.Library.attachmentfiles[$REST.RequestType.Custom] = [
        { name: "add", "function": function (fileName, content) { return this.executePost("add", { FileName: fileName }, content, true); } },
        { name: "addFile", "function": function (file) { var thisObj = this; var promise = new $REST.Promise(); window["dev"].getFileInfo(file).done(function (name, buffer) { if (name && buffer) {
                thisObj.add(name, buffer).done(function (file) { promise.resolve(file); });
            }
            else {
                promise.resolve();
            } }); return promise; } },
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Content Type
    /*********************************************************************************************************************************/
    $REST.Library.contenttype = {};
    $REST.Library.contenttype[$REST.RequestType.Post] = ["deleteObject"];
    $REST.Library.contenttype[$REST.RequestType.Custom] = [
        { name: "addFieldLink", "function": function (data) { this.executePost("fieldlinks", null, data, true, "SP.FieldLink"); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getFieldLinkByName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fieldlinks?$filter=Name eq '" + name + "'"); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.ContentType", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Content Types
    /*********************************************************************************************************************************/
    $REST.Library.contenttypes = {};
    $REST.Library.contenttypes[$REST.RequestType.Get] = ["getById"];
    $REST.Library.contenttypes[$REST.RequestType.Post] = ["addAvailableContentType"];
    $REST.Library.contenttypes[$REST.RequestType.PostDataInBodyNoArgs] = ["add"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Field
    /*********************************************************************************************************************************/
    $REST.Library.field = {};
    $REST.Library.field[$REST.RequestType.Post] = ["deleteObject", "setShowInDisplayForm", "setShowInEditForm", "setShowInNewForm"];
    $REST.Library.field[$REST.RequestType.Custom] = [
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Field", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Field Links
    /*********************************************************************************************************************************/
    $REST.Library.fieldlinks = {};
    $REST.Library.fieldlinks[$REST.RequestType.Get] = ["getById"];
    $REST.Library.fieldlinks[$REST.RequestType.PostDataInBodyNoArgs] = ["add"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Fields
    /*********************************************************************************************************************************/
    $REST.Library.fields = {};
    $REST.Library.fields[$REST.RequestType.Get] = ["getById", "getByInternalNameOrTitle"];
    $REST.Library.fields[$REST.RequestType.Post] = ["addDependentLookup"];
    $REST.Library.fields[$REST.RequestType.PostDataInBodyNoArgs] = ["addField", "createFieldAsXml"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // File
    /*********************************************************************************************************************************/
    $REST.Library.file = {};
    $REST.Library.file[$REST.RequestType.Get] = ["getLimitedWebPartManager"];
    $REST.Library.file[$REST.RequestType.GetBuffer] = ["openBinaryStream"];
    $REST.Library.file[$REST.RequestType.Post] = [
        "approve", "cancelUpload", "checkIn", "checkOut", "copyTo", "deleteObject",
        "deny", "moveTo", "publish", "recycle", "undoCheckOut", "unpublish"
    ];
    $REST.Library.file[$REST.RequestType.PostDataInBody] = ["continueUpload", "finishUpload", "saveBinaryStream", "startUpload"];
    $REST.Library.file[$REST.RequestType.Custom] = [
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.File", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Files
    /*********************************************************************************************************************************/
    $REST.Library.files = {};
    $REST.Library.files[$REST.RequestType.Get] = ["getByTitle", "getByUrl"];
    $REST.Library.files[$REST.RequestType.PostDataInBody] = ["add", "addTemplateFile"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // File Version
    /*********************************************************************************************************************************/
    $REST.Library.fileversion = {};
    $REST.Library.fileversion[$REST.RequestType.Post] = ["deleteObject"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Folder
    /*********************************************************************************************************************************/
    $REST.Library.folder = {};
    $REST.Library.folder[$REST.RequestType.Post] = ["deleteObject", "recycle", "uniqueContentTypeOrder"];
    $REST.Library.folder[$REST.RequestType.Custom] = [
        { name: "addFile", "function": function (data, content) { return this.executePost("files/add", data, content, true); } },
        { name: "addSubFolder", "function": function (name) { return this.executePost("folders/add", name); } },
        { name: "getFile", "function": function (name) { return this.executeGet("files?$filter=Name eq '" + name + "'"); } },
        { name: "getSubFolder", "function": function (name) { return this.executeGet("folders?$filter=Name eq '" + name + "'"); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Folder", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Folders
    /*********************************************************************************************************************************/
    $REST.Library.folders = {};
    $REST.Library.folders[$REST.RequestType.Get] = ["getByUrl"];
    $REST.Library.folders[$REST.RequestType.Post] = ["add"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Group
    /*********************************************************************************************************************************/
    $REST.Library.group = {};
    $REST.Library.group[$REST.RequestType.Custom] = [
        { name: "containsUser", "function": function (user) { return this.executeGet("users?$filter=Id eq " + user.Id).exists; } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Items
    /*********************************************************************************************************************************/
    $REST.Library.items = {};
    $REST.Library.items[$REST.RequestType.Get] = ["getById"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Limited WebPart Manager
    /*********************************************************************************************************************************/
    $REST.Library.limitedwebpartmanager = {};
    $REST.Library.limitedwebpartmanager[$REST.RequestType.Custom] = [];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // List
    /*********************************************************************************************************************************/
    $REST.Library.list = {};
    $REST.Library.list[$REST.RequestType.Get] = ["getRelatedFields", "getView"];
    $REST.Library.list[$REST.RequestType.GetDataAsParameter] = ["getUserEffectivePermissions"];
    $REST.Library.list[$REST.RequestType.Post] = [
        "addItem", "breakRoleInheritance", "deleteObject", "recycle", "renderListData", "renderListFormData",
        "reserveListItemId", "resetRoleInheritance"
    ];
    $REST.Library.list[$REST.RequestType.PostDataInBodyNoArgs] = ["getChanges", "getItems", "getListItemChangesSinceToken"];
    $REST.Library.list[$REST.RequestType.Custom] = [
        { name: "addContentType", "function": function (data) { return this.executePost("contenttypes", null, data, true, "SP.ContentType"); } },
        { name: "addExistingContentType", "function": function (data) { return this.executePost("contenttypes/addAvailableContentType", data); } },
        { name: "addField", "function": function (data) { return this.executePost("fields/add", null, data, true, "SP.Field"); } },
        { name: "addFieldAsXml", "function": function (data) { return this.executePost("fields/createFieldAsXml", null, { parameters: { __metadata: { type: "SP.XmlSchemaFieldCreationInformation" }, Options: window["SP"].AddFieldOptions.addFieldInternalNameHint, SchemaXml: data } }, true); } },
        { name: "addItem", "function": function (data) { return this.executePost("items", null, data, true, "SP.ListItem"); } },
        { name: "addSiteGroup", "function": function (data) { return this.executePost("roleassignments/addroleassignment", data); } },
        { name: "addSubFolder", "function": function (name) { return this.get_RootFolder().addSubFolder(name); } },
        { name: "addView", "function": function (data) { return this.executePost("views", null, data, true, "SP.View"); } },
        { name: "getContentType", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("contenttypes?$filter=Name eq '" + title + "'"); } },
        { name: "getContentTypeById", "function": function (id) { return this.executeGet("contenttypes/getById", id); } },
        { name: "getDefaultDisplayFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 4").ServerRelativeUrl; } },
        { name: "getDefaultEditFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 6").ServerRelativeUrl; } },
        { name: "getDefaultNewFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 8").ServerRelativeUrl; } },
        { name: "getDefaultViewUrl", "function": function () { return this.get_DefaultView().ServerRelativeUrl; } },
        { name: "getField", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "' or InternalName eq '" + title + "' or StaticName eq '" + title + "'"); } },
        { name: "getFieldById", "function": function (id) { return this.executeGet("fields/getById", id); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getItemById", "function": function (id) { return this.executeGet("items(" + id + ")"); } },
        { name: "getItemByTitle", "function": function (title) { title = encodeURIComponent(title); return this.getItemsByFilter("Title eq '" + title + "'"); } },
        { name: "getItemsByFilter", "function": function (filter) { return this.executeGet("items?$filter=" + filter); } },
        { name: "getSchemaXml", "function": function () { return this.executeGet("schemaxml"); } },
        { name: "getSubFolder", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/folders?$filter=Name eq '" + name + "'"); } },
        { name: "getViewById", "function": function (id) { return this.executeGet("views/getById", id); } },
        { name: "getViewByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("views?$filter=Title eq '" + title + "'"); } },
        //{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.List", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // List Item
    /*********************************************************************************************************************************/
    $REST.Library.listitem = {};
    $REST.Library.listitem[$REST.RequestType.GetDataAsParameter] = ["getUserEffectivePermissions"];
    $REST.Library.listitem[$REST.RequestType.Post] = ["breakRoleInheritance", "deleteObject", "recycle", "resetRoleInheritance"];
    $REST.Library.listitem[$REST.RequestType.PostDataInBodyNoArgs] = ["validateUpdateListItem"];
    $REST.Library.listitem[$REST.RequestType.Custom] = [
        { name: "addAttachment", "function": function (fileName, content) { return this.executePost("attachmentfiles/add", { FileName: fileName }, content, true); } },
        //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, this.__metadata.type, "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Lists
    /*********************************************************************************************************************************/
    $REST.Library.lists = {};
    $REST.Library.lists[$REST.RequestType.Get] = ["getById"];
    $REST.Library.lists[$REST.RequestType.Post] = ["ensureSiteAssetsLibrary", "ensureSitePagesLibrary"];
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
    $REST.Library.profileloader = {};
    $REST.Library.profileloader[$REST.RequestType.Post] = ["getOwnerUserProfile", "getUserProfile"];
    $REST.Library.profileloader[$REST.RequestType.PostDataInBody] = ["createPersonalSiteEnqueueBulk"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Assignment
    /*********************************************************************************************************************************/
    $REST.Library.roleAssignment = {};
    $REST.Library.roleAssignment[$REST.RequestType.Post] = ["deleteObject"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Assignments
    /*********************************************************************************************************************************/
    $REST.Library.roleAssignments = {};
    $REST.Library.roleAssignments[$REST.RequestType.Get] = ["getByPrincipalId"];
    $REST.Library.roleAssignments[$REST.RequestType.Post] = ["addRoleAssignment", "removeRoleAssignment"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Definition
    /*********************************************************************************************************************************/
    $REST.Library.roledefinition = {};
    $REST.Library.roledefinition[$REST.RequestType.Post] = ["deleteObject"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Role Definitions
    /*********************************************************************************************************************************/
    $REST.Library.roledefinitions = {};
    $REST.Library.roledefinitions[$REST.RequestType.Get] = ["getById", "getByName", "getByType"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Search Service
    /*********************************************************************************************************************************/
    $REST.Library.searchservice = {};
    $REST.Library.searchservice[$REST.RequestType.Custom] = [
        { name: "query", "function": function (query) { if (typeof (query) === "string") {
                return this.executeGet("query?" + query);
            } query = { request: query }; query.request.__metadata = { type: "Microsoft.Office.Server.Search.REST.SearchRequest" }; return this.executePost("postquery", null, query, true); } },
        { name: "querySuggestion", "function": function (query) { return this.executeGet("suggest?" + query); } },
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
        return Site;
    }($REST.Base));
    $REST.Site = Site;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.site = {
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
        // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: ["requireUseRemoteAPIs"],
            requestType: $REST.RequestType.PostWithArgs
        }
    };
    $REST.Library.site[$REST.RequestType.Custom] = [
        { name: "addCustomAction", "function": function (data) { return this.executePost("usercustomactions", null, data, true, "SP.UserCustomAction"); } },
        { name: "getCustomAction", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("usercustomactions?$filter=Name eq '" + title + "' or Title eq '" + title + "'"); } },
        //{ name: "getRootWeb", "function": function () { this._rootWeb = this._rootWeb || new Web(this.ServerRelativeUrl, this.asyncFl); return this._rootWeb; } },
        //{ name: "hasAccess", "function": function (permissions) { return hasAccess(this, permissions); } },
        { name: "sendEmail", "function": function (data) { data = { properties: data }; data.properties.__metadata = { type: "SP.Utilities.EmailProperties" }; return this.executePost("_api/SP.Utilities.Utility.SendEmail", null, data, true); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Site", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Site Groups
    /*********************************************************************************************************************************/
    $REST.Library.siteGroups = {};
    $REST.Library.siteGroups[$REST.RequestType.Get] = ["getById", "getByName"];
    $REST.Library.siteGroups[$REST.RequestType.Post] = ["removeById", "removeByLoginName"];
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
    /*********************************************************************************************************************************/
    $REST.Library.usercustomaction = {};
    $REST.Library.usercustomaction[$REST.RequestType.Post] = ["deleteObject"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // User Custom Actions
    /*********************************************************************************************************************************/
    $REST.Library.usercustomactions = {};
    $REST.Library.usercustomactions[$REST.RequestType.Get] = ["getById"];
    $REST.Library.usercustomactions[$REST.RequestType.Post] = ["clear"];
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

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Users
    /*********************************************************************************************************************************/
    $REST.Library.users = {};
    $REST.Library.users[$REST.RequestType.Get] = ["getByEmail", "getById"];
    $REST.Library.users[$REST.RequestType.GetDataAsParameter] = ["getByLoginName"];
    $REST.Library.users[$REST.RequestType.Post] = ["removeById"];
    $REST.Library.users[$REST.RequestType.PostDataAsParameter] = ["removeByLoginName"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Versions
    /*********************************************************************************************************************************/
    $REST.Library.versions = {};
    $REST.Library.versions[$REST.RequestType.Get] = ["getById"];
    $REST.Library.versions[$REST.RequestType.Post] = ["deleteAll", "deleteById", "deleteByLabel", "restoreByLabel"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // View
    /*********************************************************************************************************************************/
    $REST.Library.view = {};
    $REST.Library.view[$REST.RequestType.Get] = ["renderAsHtml"];
    $REST.Library.view[$REST.RequestType.Post] = ["deleteObject"];
    $REST.Library.view[$REST.RequestType.Custom] = [
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.View", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // View Field Collection
    /*********************************************************************************************************************************/
    $REST.Library.viewfieldcollection = {};
    $REST.Library.viewfieldcollection[$REST.RequestType.Post] = ["addViewField", "moveViewFieldTo", "removeAllViewFields", "removeViewField"];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Views
    /*********************************************************************************************************************************/
    $REST.Library.views = {};
    $REST.Library.views[$REST.RequestType.Get] = ["getById"];
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
        return Web;
    }($REST.Base));
    $REST.Web = Web;
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    $REST.Library.web = {
        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            requestType: $REST.RequestType.PostWithArgsAsQS
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
            requestType: $REST.RequestType.GetWithArgsAsQS
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
            requestType: $REST.RequestType.PostWithArgsValueOnly
        },
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: $REST.RequestType.GetWithArgs
        },
        // Returns the list gallery on the site.
        getCatalog: {
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
        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: $REST.RequestType.Get
        },
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: $REST.RequestType.GetWithArgsAsQS
        },
        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: $REST.RequestType.PostWithArgs
        },
        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
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
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            requestType: $REST.RequestType.GetWithArgsAsQS
        },
        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: $REST.RequestType.GetWithArgs
        },
        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            requestType: $REST.RequestType.GetWithArgsValueOnly
        },
        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            requestType: $REST.RequestType.GetWithArgsAsQS
        },
        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: $REST.RequestType.GetWithArgsAsQS
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
        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: $REST.RequestType.PostWithArgsValueOnly
        }
    };
    $REST.Library.web[$REST.RequestType.Custom] = [
        { name: "addContentType", "function": function (data) { return this.executePost("contenttypes", null, data, true, "SP.ContentType"); } },
        { name: "addCustomAction", "function": function (data) { return this.executePost("usercustomactions", null, data, true, "SP.UserCustomAction"); } },
        { name: "addExistingContentType", "function": function (data) { return this.executePost("contenttypes/addAvailableContentType", data); } },
        { name: "addField", "function": function (data) { return this.executePost("fields/add", null, data, true, "SP.Field"); } },
        { name: "addFieldAsXml", "function": function (data) { return this.executePost("fields/createFieldAsXml", null, { parameters: { __metadata: { type: "SP.XmlSchemaFieldCreationInformation" }, Options: window["SP"].AddFieldOptions.addFieldInternalNameHint, SchemaXml: data } }, true); } },
        { name: "addFile", "function": function (data, content) { return this.executePost("rootfolder/files/add", data, content, true); } },
        { name: "addList", "function": function (data) { return this.executePost("lists", null, data, true, "SP.List"); } },
        { name: "addPermission", "function": function (data) { data.__metadata = { type: "SP.RoleDefinition" }; return this.executePost("roledefinitions", null, data, true, "SP.RoleDefinition"); } },
        { name: "addSiteGroup", "function": function (name) { return this.executePost("sitegroups", null, { Title: name }, true, "SP.Group"); } },
        { name: "addSubFolder", "function": function (name) { return this.executePost("rootfolder/folders/add", name); } },
        { name: "addWeb", "function": function (data) { return this.get_Webs().add(data); } },
        { name: "getContentType", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("contenttypes?$filter=Name eq '" + title + "'"); } },
        { name: "getContentTypeById", "function": function (id) { return this.executeGet("contenttypes/getById", id); } },
        { name: "getCustomAction", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("usercustomactions?$filter=Name eq '" + title + "' or Title eq '" + title + "'"); } },
        { name: "getField", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "' or InternalName eq '" + title + "' or StaticName eq '" + title + "'"); } },
        { name: "getFieldById", "function": function (id) { return this.executeGet("fields/getById", id); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getFile", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/files?$filter=Name eq '" + name + "'"); } },
        { name: "getListById", "function": function (id) { return this.executeGet("lists/getById", id); } },
        { name: "getSiteGroupById", "function": function (id) { return this.executeGet("sitegroups/getById", id); } },
        { name: "getSiteGroupByName", "function": function (name) { return this.executeGet("sitegroups/getByName", name); } },
        { name: "getSubFolder", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/folders?$filter=Name eq '" + name + "'"); } },
        { name: "getUserById", "function": function (id) { return this.executeGet("siteusers?$filter=Id eq " + id); } },
        { name: "getUserByLogin", "function": function (login) { return this.executeGet("siteusers/getByLoginName", null, login); } },
        { name: "hasAccess", "function": function (permissions) { return; /*hasAccess(this, permissions);*/ } },
        { name: "sendEmail", "function": function (data) { data = { properties: data }; data.properties.__metadata = { type: "SP.Utilities.EmailProperties" }; return this.executePost("_api/SP.Utilities.Utility.SendEmail", null, data, true); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Web", "MERGE"); } }
    ];
})($REST || ($REST = {}));

/// <reference path="../base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // Webs
    // The SPWebCollection object.
    /*********************************************************************************************************************************/
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
