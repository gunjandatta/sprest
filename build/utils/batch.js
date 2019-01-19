"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
/**
 * Batch Requests
 */
var Batch = /** @class */ (function () {
    function Batch() {
    }
    // Method to execute a batch request
    Batch.execute = function (base, args) {
        var appendFl = false;
        var callback = null;
        // Parse the arguments
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            // Check the type
            switch (typeof (arg)) {
                case "boolean":
                    // Set the append flag
                    appendFl = arg;
                    break;
                case "function":
                    // Set the callback method
                    callback = arg;
                    break;
            }
        }
        // Set the base
        base.base = base.base ? base.base : base;
        // See if we are appending this request
        if (appendFl && base.base.batchRequests) {
            // Append the request
            base.base.batchRequests[base.base.batchRequests.length - 1].push({
                callback: callback,
                targetInfo: new _1.TargetInfo(base.targetInfo)
            });
        }
        else {
            // Ensure the batch requests exist
            base.base.batchRequests = base.base.batchRequests || [];
            // Create the request
            base.base.batchRequests.push([{
                    callback: callback,
                    targetInfo: new _1.TargetInfo(base.targetInfo)
                }]);
        }
        // Return this object
        return base;
    };
    // Method to generate a batch request
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + lib_1.ContextInfo.generateGUID();
        var batchRequests = [];
        // Parse the requests
        for (var i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(Batch.createBatch(batchId, requests[i]));
        }
        // End the batch request
        batchRequests.push("--" + batchId + "--");
        // Return the target info
        return new _1.TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    };
    // Method to generate a batch request
    Batch.createBatch = function (batchId, requests) {
        // Create the batch request
        var batch = ["--" + batchId];
        // Determine if the batch requires a change set
        var requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "changeset_" + lib_1.ContextInfo.generateGUID();
            // Parse the requests
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                // Create a change set
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push("POST " + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Content-Type: application/json;odata=verbose");
                request.push("");
                targetInfo.requestData ? request.push(targetInfo.requestData) : null;
                request.push("");
                // Add the request to the change set
                changesets.push(request.join("\r\n"));
            }
            // End the change set
            changesets.push("--" + changesetId + "--");
            // Generate the change set
            var changeset = changesets.join("\r\n");
            // Add the change set information to the batch
            batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
            batch.push("Content-Length: " + changeset.length);
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        // Else, ensure a request exists
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            // Add the request to the batch
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push("GET " + targetInfo.requestUrl + " HTTP/1.1");
            batch.push("Accept: application/json;odata=verbose");
            batch.push("");
            targetInfo.requestData ? batch.push(targetInfo.requestData) : null;
            batch.push("");
        }
        // Return the batch request
        return batch.join("\r\n");
    };
    return Batch;
}());
exports.Batch = Batch;
