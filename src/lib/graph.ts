import { IGraphToken } from "../mapper/types";
import { Base, RequestType } from "../utils";
import { IGraph } from "./types";

/**
 * Graph
 */
export const Graph: IGraph = ((accessToken: string, version?: string) => {
    let graph = new Base({ accessToken });

    // Default the target information
    graph.targetInfo.endpoint = version || "v1.0";
    graph.targetInfo.requestType = RequestType.GraphGet;

    // Add the methods
    graph.addMethods(graph, { __metadata: { type: "graph" } });

    // Return the graph
    return graph;
}) as any;

// Method to get the graph token from a classic page
Graph.getAccessToken = (scope?: string): Promise<IGraphToken> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Set the data 
        let data = { "resource": "https://graph.microsoft.com" };
        scope ? data["scope"] = scope : null;

        // Get the access token
        (new Base({
            endpoint: "SP.OAuth.Token/Acquire",
            data,
            method: "POST"
        })).execute(token => {
            // Resolve the promise
            resolve(token);
        });
    });
}