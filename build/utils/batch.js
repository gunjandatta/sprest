"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
/**
 * Batch Requests
 */
var Batch = /** @class */ (function () {
    function Batch() {
    }
    /**
     * Methods
     */
    // Method to generate a batch request
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + this.guid();
        var batchRequests = [];
        // Parse the requests
        for (var i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(this.createBatch(batchId, requests[i]));
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
    // Method to generate a guid
    Batch.guid = function () {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    // Method to generate a batch request
    Batch.createBatch = function (batchId, requests) {
        // Create the batch request
        var batch = ["--" + batchId];
        // See if this is a "GET" request
        var requiresChangeset = requests.length > 1 || requests[0] || requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "change_" + this.guid();
            // Parse the requests
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                // Create a change set
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push((targetInfo.requestMethod == "GET" ? "GET " : "POST ") + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Accept: application/json;odata=verbose");
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
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            // Add the request to the batch
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push((targetInfo.requestMethod == "GET" ? "GET " : "POST ") + targetInfo.requestUrl + " HTTP/1.1");
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
//# sourceMappingURL=batch.js.map