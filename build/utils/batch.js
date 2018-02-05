"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
var Batch = (function () {
    function Batch() {
    }
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + lib_1.ContextInfo.generateGUID();
        var batchRequests = [];
        for (var i = 0; i < requests.length; i++) {
            batchRequests.push(this.createBatch(batchId, requests[i]));
        }
        batchRequests.push("--" + batchId + "--");
        return new _1.TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    };
    Batch.createBatch = function (batchId, requests) {
        var batch = ["--" + batchId];
        var requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "changeset_" + lib_1.ContextInfo.generateGUID();
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push("POST " + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Content-Type: application/json;odata=verbose");
                request.push("");
                targetInfo.requestData ? request.push(targetInfo.requestData) : null;
                request.push("");
                changesets.push(request.join("\r\n"));
            }
            changesets.push("--" + changesetId + "--");
            var changeset = changesets.join("\r\n");
            batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
            batch.push("Content-Length: " + changeset.length);
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push("GET " + targetInfo.requestUrl + " HTTP/1.1");
            batch.push("Accept: application/json;odata=verbose");
            batch.push("");
            targetInfo.requestData ? batch.push(targetInfo.requestData) : null;
            batch.push("");
        }
        return batch.join("\r\n");
    };
    return Batch;
}());
exports.Batch = Batch;
//# sourceMappingURL=batch.js.map