"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
var Base = /** @class */ (function () {
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    function Base(targetInfo) {
        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.requestType = 0;
        this.waitFlags = [];
    }
    // Method to update the object functions, based on the type
    Base.prototype.addMethods = function (data, context) { return _1.Request.addMethods(this, data, context); };
    // Method to execute this request as a batch request
    Base.prototype.batch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Batch.execute(this, args);
    };
    // Method to wait for the requests to complete
    Base.prototype.done = function (resolve) { return _1.Helper.done(this, resolve); };
    // Method to execute the request
    Base.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Request.execute(this, args);
    };
    // Method to execute a method
    Base.prototype.executeMethod = function (methodName, methodConfig, args) { return _1.Helper.executeMethod(this, methodName, methodConfig, args); };
    // Method to execute the request synchronously
    Base.prototype.executeAndWait = function () { return _1.Request.executeRequest(this, false); };
    // Method to return a collection
    Base.prototype.getCollection = function (method, args) { return _1.Helper.getCollection(this, method, args); };
    // Method to get the request information
    Base.prototype.getInfo = function () { return _1.Helper.getRequestInfo(this); };
    // Method to get the next set of results
    Base.prototype.getNextSetOfResults = function () { return _1.Helper.getNextSetOfResults(this); };
    // Method to return a property of the base object
    Base.prototype.getProperty = function (propertyName, requestType) { return _1.Helper.getProperty(this, propertyName, requestType); };
    // Method to stringify the object
    Base.prototype.stringify = function () { return _1.Helper.stringify(this); };
    // Method to update the metadata uri
    Base.prototype.updateMetadataUri = function (metadata, targetInfo) { return _1.Helper.updateMetadataUri(this, metadata, targetInfo); };
    // Method to wait for the parent requests to complete
    Base.prototype.waitForRequestsToComplete = function (callback, requestIdx) { _1.Request.waitForRequestsToComplete(this, callback, requestIdx); };
    return Base;
}());
exports.Base = Base;
