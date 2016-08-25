/// <reference path="base.d.ts" />
/// <reference path="request.d.ts" />
/// <reference path="targetInfo.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // The base object class.
    /*********************************************************************************************************************************/
    var Base = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Base(settings) {
            var _this = this;
            console.log("[Dev] Base constructor called...");
            // Default the properties
            this.settings = settings;
            // Load the dependencies
            var dependencies = new $REST.Dependencies(function () { _this.execute(_this.settings); });
        }
        Object.defineProperty(Base.prototype, "defaultUrlToWeb", {
            // Flag to target the current web by default
            get: function () { return false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "endpoint", {
            // The endpoint for the object
            get: function () { return ""; },
            enumerable: true,
            configurable: true
        });
        ;
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
        Base.prototype.execute = function (settings) {
            debugger;
            // Create the target information
            this.targetInfo = new $REST.TargetInfo(settings.url, this.endpoint, this.defaultUrlToWeb);
            // Update the url
            settings.url = this.targetInfo.requestUrl;
            // Create the request
            return new $REST.Request(settings);
        };
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/
        // Method to convert the input arguments into an object
        Base.prototype.createDataObject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var data = null;
            // Ensure arguments exist
            if (args && args.length > 0) {
                data = {};
                // Parse the arguments
                for (var arg in args) {
                    // Append the argument
                    data[arg] = args[arg];
                }
            }
            // Return the data object
            return data;
        };
        // Method to initialize the class
        Base.prototype.init = function () {
            // Default the url
        };
        return Base;
    }());
    $REST.Base = Base;
})($REST || ($REST = {}));

/// <reference path="dependencies.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // This class will ensure the required scripts are loaded on the page.
    /*********************************************************************************************************************************/
    var Dependencies = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Dependencies(callback) {
            console.log("[Dev] Dependencies constructor called...");
            // Default the properties
            this.callback = callback;
            // Load the dependencies
            this.loadDependencies();
        }
        Object.defineProperty(Dependencies.prototype, "isLoaded", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // Flag to determine if the dependencies are loaded
            get: function () { return this.pageContextExistsFl; },
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
                // Notify the dependent scripts
                this.notifyScripts();
            }
            else {
                // Load the required scripts
                for (var fileName in this.dependencies) {
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
        // Method to notify this class is loaded
        Dependencies.prototype.notifyScripts = function () {
            // Ensure the page context exists
            if (this.pageContextExistsFl) {
                console.log("[Dev] Dependencies have been loaded...");
                // See if the callback function exists
                if (this.callback && typeof (this.callback) == "function") {
                    // Execute the function passing this object
                    this.callback.apply(this);
                }
            }
            else {
                // Log an error
                console.error("[SP REST] Error: Unable to load _spPageContextInfo (Page Context).");
            }
        };
        // Method to wait for the page context to be loaded
        Dependencies.prototype.waitForPageContext = function () {
            var counter = 0;
            var maxAttempts = 5000; // 5 seconds
            // Check every 10ms
            var intervalId = window.setInterval(function () {
                // See if the page context exists, and ensure we haven't hit the max attempts
                if (this.pageContextExists() || ++counter >= maxAttempts) {
                    // Clear the interval
                    window.clearInterval(intervalId);
                    // Notify the dependent scripts
                    this.notifyScripts();
                }
            }, 10);
        };
        return Dependencies;
    }());
    $REST.Dependencies = Dependencies;
})($REST || ($REST = {}));

/// <reference path="./request.d.ts" />
/// <reference path="./targetInfo.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // The request class.
    /*********************************************************************************************************************************/
    var Request = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function Request(settings) {
            console.log("[Dev] Request constructor called...");
            // Default the properties
            this.asyncFl = typeof (settings.asyncFl) === "boolean" ? settings.asyncFl : true;
            this.bufferFl = typeof (settings.bufferFl) === "boolean" ? settings.bufferFl : false;
            this.callback = settings.callback ? settings.callback : null;
            this.requestType = settings.requestType ? settings.requestType : 0;
            this.requestUrl = settings.url ? settings.url : "";
            // Initialize this class
            this.init(settings);
        }
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
        Object.defineProperty(Request.prototype, "url", {
            // The request url
            get: function () { return this.requestUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "isAsynchronous", {
            // Flag to determine if the request is asynchronous
            get: function () { return this.asyncFl || this.bufferFl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Request.prototype, "isGetMethod", {
            // Flag to determine if this is a GET or POST request
            get: function () { return this.requestType < 6; },
            enumerable: true,
            configurable: true
        });
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/
        // Method to default the request headers
        Request.prototype.defaultHeaders = function (settings) {
            // Get the request digest
            var requestDigest = document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
            this.xhr.setRequestHeader("X-HTTP-Method", settings.method);
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
            // See if the custom headers exist
            if (settings.headers) {
                // Parse the custom headers
                for (var header in settings.headers) {
                    // Add the header
                    this.xhr.setRequestHeader(header, settings.headers[header]);
                }
            }
        };
        // Method to execute the callback function
        Request.prototype.executeCallback = function () {
            // See if the callback exists
            if (this.callback && typeof (this.callback) == "function") {
                // Execute the callback function
                this.callback.apply(this.response);
            }
        };
        // Method to execute the xml http request
        Request.prototype.executeSubRequest = function (request) {
        };
        // Method to execute the xml http request
        Request.prototype.executeRequest = function (settings) {
            var _this = this;
            // Open the request
            this.xhr.open(this.isGetMethod ? "GET" : "POST", this.url, this.isAsynchronous);
            // See if we are making an asynchronous request
            if (this.isAsynchronous) {
                // Set the state change event
                this.xhr.onreadystatechange = function () {
                    // See if the request has finished
                    if (_this.xhr.readyState == 4) {
                        // Execute the callback function
                        _this.executeCallback();
                    }
                };
            }
            // See if we the response type is an array buffer
            if (this.bufferFl) {
                // Set the response type
                this.xhr.responseType = "arraybuffer";
            }
            else {
                // Default the headers
                this.defaultHeaders(settings);
                // See if arguments are being passed
                if (settings.data) {
                    // Stringify the data object
                    settings.data = settings.data.byteLength ? settings.data : JSON.stringify(settings.data);
                }
            }
            // Execute the request
            this.bufferFl ? this.xhr.send() : this.xhr.send(settings.data);
            // Return the request
            return this.request;
        };
        // Method to initialize this class
        Request.prototype.init = function (settings) {
            // See if the generic object doesn't exist
            if (typeof (XMLHttpRequest) === "undefined") {
                // Try to create the request
                try {
                    this.xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
                }
                catch (e) { }
                // Try to create the request
                try {
                    this.xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0");
                }
                catch (e) { }
                // Try to create the request
                try {
                    this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) { }
                // Throw an error
                throw new Error("This browser does not support xml http requests.");
            }
            else {
                // Create an instance of the xml http request object
                this.xhr = new XMLHttpRequest();
            }
            // See if the request exists
            if (this.xhr) {
                debugger;
                // Execute the request
                this.executeRequest(settings);
            }
        };
        return Request;
    }());
    $REST.Request = Request;
})($REST || ($REST = {}));

/// <reference path="targetInfo.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // The target information class.
    /*********************************************************************************************************************************/
    var TargetInfo = (function () {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        function TargetInfo(url, endPoint, defaultToCurrentWeb) {
            // Default the properties
            this.endPoint = endPoint;
            this.url = url ? url : this.context[defaultToCurrentWeb ? "webAbsoluteUrl" : "siteAbsoluteUrl"];
            // Set the domain
            if (this.url.indexOf("http") != 0) {
                this.url = this.getDomainUrl() + this.url;
            }
            // See if this is the app web
            if (this.isAppWeb) {
                // Set the request url template
                this.template = this.context.webAbsoluteUrl + "/_api/" + "SP.AppContextSite(@target)/{{EndPoint}}" +
                    (this.endPoint.indexOf('?') > 0 ? "&" : "?") + "@target='{{Url}}'";
            }
            else {
                // Set the request url template
                this.template = this.url + "/_api/{{EndPoint}}";
            }
        }
        Object.defineProperty(TargetInfo.prototype, "requestUrl", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // The request url
            get: function () {
                return this.template
                    .replace("{{EndPoint}}", this.endPoint)
                    .replace("{{Url}}", this.url);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TargetInfo.prototype, "context", {
            /*********************************************************************************************************************************/
            // Private Properties
            /*********************************************************************************************************************************/
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
        // Private Methods
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
        return TargetInfo;
    }());
    $REST.TargetInfo = TargetInfo;
})($REST || ($REST = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./base.d.ts" />
var $REST;
(function ($REST) {
    /*********************************************************************************************************************************/
    // The web class.
    /*********************************************************************************************************************************/
    var Web = (function (_super) {
        __extends(Web, _super);
        function Web() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(Web.prototype, "endpoint", {
            /*********************************************************************************************************************************/
            // Public Properties
            /*********************************************************************************************************************************/
            // The endpoint for this object
            get: function () { return "web"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Web.prototype, "defaultUrlToWeb", {
            // Flag to target the current web by default
            get: function () { return true; },
            enumerable: true,
            configurable: true
        });
        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/
        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        };
        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        Web.prototype.applyWebTemplate = function () { };
        // Deletes the Web site.
        Web.prototype.deleteObject = function () { };
        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        Web.prototype.doesPushNotificationSubscriberExist = function () { };
        // Returns whether the current user has the given set of permissions.
        Web.prototype.doesUserHavePermissions = function () { };
        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        Web.prototype.ensureUser = function () { };
        //
        Web.prototype.getAppBdcCatalog = function () { };
        // 
        Web.prototype.getAppBdcCatalogForAppInstance = function () { };
        // Retrieves an AppInstance installed on this Site.
        Web.prototype.getAppInstanceById = function () { };
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        Web.prototype.getAppInstancesByProductId = function () { };
        // Returns a collection of site templates available for the site.
        Web.prototype.getAvailableWebTemplates = function () { };
        // Gets the list template gallery, site template gallery, or Web Part gallery for the Web site.
        Web.prototype.getCatalog = function () { };
        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        Web.prototype.getChanges = function () { };
        // Gets the specified external content type in a line-of-business (LOB) system application.
        Web.prototype.getEntity = function () { };
        // Returns the file object located at the specified server-relative URL.
        Web.prototype.getFileByServerRelativeUrl = function () { };
        // Returns the folder object located at the specified server-relative URL.
        Web.prototype.getFolderByServerRelativeUrl = function () { };
        // Gets the push notification subscriber over the site for the specified device application instance ID.
        Web.prototype.getPushNotificationSubscriber = function () { };
        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        Web.prototype.getPushNotificationSubscribersByArgs = function () { };
        // Queries for the push notification subscribers over the site for the specified user.
        Web.prototype.getPushNotificationSubscribersByUser = function () { };
        // Returns the collection of child sites of the current site based on the specified query.
        Web.prototype.getSubwebsForCurrentUser = function () { };
        // Returns the user corresponding to the specified member identifier for the current site.
        Web.prototype.getUserById = function () { };
        // Gets the effective permissions that the specified user has within the current application scope.
        Web.prototype.getUserEffectivePermissions = function () { };
        //
        Web.prototype.initPropertiesFromJson = function () { };
        // Uploads and installs an app package to this site.
        Web.prototype.loadAndInstallApp = function () { };
        // Uploads and installs an App package on the site in a specified locale.
        Web.prototype.loadAndInstallAppInSpecifiedLocale = function () { };
        // Uploads an App package and creates an instance from it.
        Web.prototype.loadApp = function () { };
        // Returns the name of the image file for the icon that is used to represent the specified file.
        Web.prototype.mapToIcon = function () { };
        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        Web.prototype.registerPushNotificationSubscriber = function () { };
        // Unregisters the subscriber for push notifications from the site.
        Web.prototype.unregisterPushNotificationSubscriber = function () { };
        // Updates the database with changes that are made to the Web site.
        Web.prototype.update = function () { };
        return Web;
    }($REST.Base));
    $REST.Web = Web;
})($REST || ($REST = {}));
