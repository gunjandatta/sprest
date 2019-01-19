import { ContextInfo } from "../lib";
import { TargetInfo } from ".";
import { IBase, ITargetInfo } from "./types";

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
        // Create the batch request
        let batch = ["--" + batchId];

        // Determine if the batch requires a change set
        let requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            let changesets = [];
            let changesetId = "changeset_" + ContextInfo.generateGUID();

            // Parse the requests
            for (let i = 0; i < requests.length; i++) {
                let request = [];
                let targetInfo = requests[i].targetInfo;

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
            let changeset = changesets.join("\r\n");

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
            let targetInfo = requests[0].targetInfo;

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
    }
}