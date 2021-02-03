import { IBase, ITargetInfo } from "../../@types/utils";
import { ContextInfo } from "../lib";
import { TargetInfo } from ".";

/**
 * Batch Requests
 */
export class Batch {
    // Method to execute a batch request
    static execute(base: IBase, args) {
        let appendFl = false;
        let callback = null;

        // Parse the arguments
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];

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
                callback,
                targetInfo: new TargetInfo(base.targetInfo)
            });
        } else {
            // Ensure the batch requests exist
            base.base.batchRequests = base.base.batchRequests || [];

            // Create the request
            base.base.batchRequests.push([{
                callback,
                targetInfo: new TargetInfo(base.targetInfo)
            }]);
        }

        // Return this object
        return base;
    }

    // Method to generate a batch request
    static getTargetInfo(requests: Array<Array<{ callback?: any, response?: IBase, targetInfo: ITargetInfo }>>): TargetInfo {
        let batchId = "batch_" + ContextInfo.generateGUID();
        let batchRequests = [];

        // Parse the requests
        for (let i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(Batch.createBatch(batchId, requests[i]));
        }

        // End the batch request
        batchRequests.push("--" + batchId + "--");

        // Return the target info
        return new TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    }

    // Method to generate a batch request
    private static createBatch(batchId: string, requests: Array<{ callback?: any, response?: IBase, targetInfo: ITargetInfo }>) {
        let batch = [];

        // Parse the requests
        for (let i = 0; i < requests.length; i++) {
            let request = requests[i];

            // Create the batch request
            batch.push("--" + batchId);

            // Determine if the batch requires a change set
            let requiresChangeset = request && request.targetInfo.requestMethod != "GET";
            if (requiresChangeset) {
                let changesetId = "changeset_" + ContextInfo.generateGUID();

                // Create a change set
                batch.push("--" + changesetId);
                batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
                batch.push("Content-Transfer-Encoding: binary");
                batch.push("");
                batch.push("POST " + request.targetInfo.requestUrl + " HTTP/1.1");
                batch.push("Content-Type: application/json;odata=verbose");
                batch.push("");
                request.targetInfo.requestData ? batch.push(request.targetInfo.requestData) : null;
                batch.push("");
                batch.push("--" + changesetId + "--");
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
        batch.push("Content-Type: multipart/mixed; boundary=" + batchId);
        batch.push("Content-Length: " + batchRequest.length);
        batch.push("");
        batch.push(batchRequest);
        batch.push("");

        // Return the batch request
        return batch.join("\r\n");
    }

    // Process the batch request callbacks
    static processCallbacks(requests: Array<Array<{ callback?: any, response?: IBase, targetInfo: ITargetInfo }>> = []) {
        // Parse the requests
        for (let i = 0; i < requests.length; i++) {
            let request = requests[i];

            // Parse the batch request
            for (let j = 0; j < request.length; j++) {
                let batchRequest = request[j];

                // See if a callback exists
                if (batchRequest.callback) {
                    // Execute the callback
                    batchRequest.callback(batchRequest.response, batchRequest.targetInfo);
                }
            }
        }
    }
}