import { IBase, IBatchRequest, ITargetInfo } from "../../@types/utils";
import { ContextInfo } from "../lib";
import { TargetInfo } from ".";

/**
 * Batch Requests
 */
export class Batch {
    // Method to execute a batch request
    static execute(base: IBase, args) {
        let createFl = false;
        let callback = null;

        // Parse the arguments
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];

            // Check the type
            switch (typeof (arg)) {
                case "boolean":
                    // Set the create flag
                    createFl = arg;
                    break;
                case "function":
                    // Set the callback method
                    callback = arg;
                    break;
            }
        }

        // Set the base
        base.base = base.base ? base.base : base;

        // See if we are creating a new request
        if (createFl || base.base.batchRequests == null) {
            // Ensure the batch requests exist
            base.base.batchRequests = base.base.batchRequests || [];

            // Create the request
            base.base.batchRequests.push([{
                callback,
                changesetId: ContextInfo.generateGUID(),
                targetInfo: new TargetInfo(base.targetInfo)
            }]);
        } else {
            // Batch requests are limited to 100 per execution, so we need to add a check for this
            if (base.base.batchRequests[base.base.batchRequests.length - 1].length == 100) {
                // Create a new request
                base.base.batchRequests.push([{
                    callback,
                    changesetId: ContextInfo.generateGUID(),
                    targetInfo: new TargetInfo(base.targetInfo)
                }]);
            } else {
                // Append the request
                base.base.batchRequests[base.base.batchRequests.length - 1].push({
                    callback,
                    changesetId: ContextInfo.generateGUID(),
                    targetInfo: new TargetInfo(base.targetInfo)
                });
            }
        }

        // Return this object
        return base;
    }

    // Method to generate a batch request
    static getTargetInfo(url: string, requests: Array<IBatchRequest>, requestDigest: string): TargetInfo {
        let batchId = "batch_" + ContextInfo.generateGUID();
        let batchRequests = [];

        // Create the batch request
        batchRequests.push(Batch.createBatch(batchId, requests));

        // End the batch request
        batchRequests.push("--" + batchId + "--");

        // Return the target information
        return new TargetInfo({
            url,
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestDigest,
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    }

    // Method to generate a batch request
    private static createBatch(batchId: string, requests: Array<IBatchRequest>) {
        let batch = [];

        // Parse the requests
        for (let i = 0; i < requests.length; i++) {
            let request = requests[i];

            // Create the batch request
            batch.push("--" + batchId);

            // Determine if the batch requires a change set
            let requiresChangeset = request && request.targetInfo.requestMethod != "GET";
            if (requiresChangeset) {
                // Create a change set
                batch.push("Content-Type: multipart/mixed; boundary=" + request.changesetId);
                batch.push("");
                batch.push("--" + request.changesetId);
                batch.push("Content-Type: application/http");
                batch.push("Content-Transfer-Encoding: binary");
                batch.push("");
                batch.push(request.targetInfo.requestMethod + " " + request.targetInfo.requestUrl + " HTTP/1.1");
                batch.push("Content-Type: application/json;odata=verbose");
                // See if we are making a delete/update
                if (request.targetInfo.requestMethod == "DELETE" || request.targetInfo.requestMethod == "MERGE") {
                    // Append the header for deleting/updating
                    batch.push("IF-MATCH: *");
                }
                batch.push("");
                request.targetInfo.requestData ? batch.push(request.targetInfo.requestData) : null;
                batch.push("");
                batch.push("--" + request.changesetId + "--");
            } else {
                // Create a change set
                batch.push("Content-Type: application/http");
                batch.push("Content-Transfer-Encoding: binary");
                batch.push("");
                batch.push("GET " + request.targetInfo.requestUrl + " HTTP/1.1");
                batch.push("Accept: application/json;odata=verbose");
                batch.push("");
                request.targetInfo.requestData ? batch.push(request.targetInfo.requestData) : null;
                batch.push("");
            }
        }

        // Add the change set information to the batch
        let batchRequest = batch.join("\r\n");
        let request = [];
        request.push("Content-Type: multipart/mixed; boundary=" + batchId);
        request.push("Content-Length: " + batchRequest.length);
        request.push("");
        request.push(batchRequest);
        request.push("");

        // Return the batch request
        return request.join("\r\n");
    }

    // Process the batch request callbacks
    static processCallbacks(batchRequests: Array<IBatchRequest> = []) {
        // Parse the requests
        for (let i = 0; i < batchRequests.length; i++) {
            let batchRequest = batchRequests[i];

            // See if a callback exists
            if (batchRequest.callback) {
                // Execute the callback
                batchRequest.callback(batchRequest.response, batchRequest.targetInfo);
            }
        }
    }
}