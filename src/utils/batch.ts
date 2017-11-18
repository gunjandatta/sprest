import { TargetInfo } from ".";

/**
 * Batch Requests
 */
export class Batch {
    /**
     * Methods
     */

    // Method to generate a batch request
    static getTargetInfo(requests: Array<Array<{ callback?: any, targetInfo: TargetInfo }>>): TargetInfo {
        let batchId = "batch_" + this.guid();
        let batchRequests = [];

        // Parse the requests
        for (let i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(this.createBatch(batchId, requests[i]));
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

    // Method to generate a guid
    private static guid() {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Method to generate a batch request
    private static createBatch(batchId: string, requests: Array<{ callback?: any, targetInfo: TargetInfo }>) {
        // Create the batch request
        let batch = ["--" + batchId];

        // Determine if the batch requires a change set
        let requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            let changesets = [];
            let changesetId = "changeset_" + this.guid();

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