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
        Base.prototype.addMethods = function (data) {
            debugger;
            // Determine the object type
            var type = (data.__metadata && data.__metadata.type ? data.__metadata.type : this.targetInfo.endpoint).split('.');
            type = (type[type.length - 1]).toLowerCase();
            // Get the methods for this object
            var methods = $REST.Library[type];
            if (methods) {
                // Parse the request types
                for (var requestType in methods) {
                    // Determine the function type to generate
                    switch (requestType) {
                        // Custom function
                        case $REST.RequestType.Custom.toString():
                            // Parse the custom methods
                            for (var i = 0; i < methods[requestType].length; i++) {
                                var method = methods[requestType][i];
                                // Add the custom method to this object
                                this[method.name] = method["function"];
                            }
                            break;
                        default:
                            // Parse the methods
                            for (var i = 0; i < methods[requestType].length; i++) {
                                var methodName = methods[requestType][i];
                                // Add the custom method to this object
                                this[methodName] = new Function("return true;");
                            }
                            break;
                    }
                }
            }
        };
        // Method to add properties to this object
        Base.prototype.addProperties = function (data) {
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
                    this["get_" + key] = new Function("return this.getCollection('" + key + "', arguments);");
                }
                else {
                    // Append the property to this object
                    this[key] = value;
                }
            }
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
            // Ensure this is a collection
            if (results) {
                // Save the property
                this["results"] = results;
                // Update the flag
                this["existsFl"] = results.length > 0;
                // See if only one object exists
                if (results.length == 1) {
                    // Apply the properties to the object
                    this.addProperties(results[0]);
                }
                else {
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
                this.addProperties(data.d);
                // Add the methods
                this.addMethods(data.d);
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
        RequestType[RequestType["Custom"] = 0] = "Custom";
        RequestType[RequestType["Get"] = 1] = "Get";
        RequestType[RequestType["GetAppendMethodToEndPoint"] = 2] = "GetAppendMethodToEndPoint";
        RequestType[RequestType["GetBuffer"] = 3] = "GetBuffer";
        RequestType[RequestType["GetDataAsParameter"] = 4] = "GetDataAsParameter";
        RequestType[RequestType["GetDataInBody"] = 5] = "GetDataInBody";
        RequestType[RequestType["GetDataInBodyNoArgs"] = 6] = "GetDataInBodyNoArgs";
        RequestType[RequestType["Post"] = 7] = "Post";
        RequestType[RequestType["PostAppendMethodToEndPoint"] = 8] = "PostAppendMethodToEndPoint";
        RequestType[RequestType["PostDataAsParameter"] = 9] = "PostDataAsParameter";
        RequestType[RequestType["PostDataInBody"] = 10] = "PostDataInBody";
        RequestType[RequestType["PostDataInBodyNoArgs"] = 11] = "PostDataInBodyNoArgs";
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
            // Method to return the xml http request's response
            get: function () { return this.xhr ? this.xhr.response : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "request", {
            // Method to return the xml http request
            get: function () { return this.xhr ? this.xhr : null; },
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
                // See if arguments are being passed
                if (this.targetInfo.requestData) {
                    // Stringify the data object
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
            this.requestMethod = "GET";
            this.targetInfo = targetInfo || {};
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

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../base.d.ts" />
/// <reference path="./web.d.ts" />
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
        }
        return Web;
    }($REST.Base));
    $REST.Web = Web;
    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    $REST.Library.web = {};
    $REST.Library.web[$REST.RequestType.Get] = [
        "doesPushNotificationSubscriberExist", "getAppInstanceById", "getAppInstancesByProductId", "getAvailableWebTemplates",
        "getCatalog", "getContextWebInformation", "getCustomListTemplates", "getDocumentLibraries", "getFileByServerRelativeUrl",
        "getFolderByServerRelativeUrl", "getList", "getPushNotificationSubscriber", "getPushNotificationSubscribersByArgs",
        "getPushNotificationSubscribersByUser", "getSubwebsFilteredForCurrentUser", "getUserById", "getWebUrlFromPageUrl", "mapsToIcon"
    ];
    $REST.Library.web[$REST.RequestType.GetDataAsParameter] = ["doesUserHavePermissions", "getUserEffectivePermissions"];
    $REST.Library.web[$REST.RequestType.Post] = [
        "applyTheme", "applyWebTemplate", "breakRoleInheritance", "deleteObject", "getAppBdcCatalog", "getAppBdcCatalogForAppInstance", "getEntity",
        "registerPushNotificationSubscriber", "resetRoleInheritance", "unregisterPushNotificationSubscriber"
    ];
    $REST.Library.web[$REST.RequestType.PostDataAsParameter] = ["addCustomAction", "ensureUser"];
    $REST.Library.web[$REST.RequestType.PostDataInBodyNoArgs] = ["executeRemoteLOB", "getChanges", "loadAndInstallApp", "loadAndInstallAppInSpecifiedLocale", "loadApp", "processExternalNotification"];
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
        { name: "getListByTitle", "function": function (title) { return this.executeGet("lists/getByTitle", title); } },
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
