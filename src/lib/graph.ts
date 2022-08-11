import { IGraph, IGraphProperties } from "../../@types/lib/graph";
import { SPTypes } from "../sptypes";
import { Base, Request, RequestType } from "../utils";

/**
 * Graph
 */
export const Graph: IGraph = ((props: IGraphProperties) => {
    let graph = new Base({ accessToken: props.accessToken });

    // Default the target information
    graph.targetInfo.requestType = (props.requestType || "").toLowerCase() == "post" ? RequestType.GraphPost : RequestType.GraphGet;

    // Set the endpoint
    graph.targetInfo.endpoint = props.cloud || SPTypes.CloudEnvironment.Default;
    graph.targetInfo.endpoint += "/" + (props.version || "v1.0");
    props.url ? graph.targetInfo.endpoint += "/" + props.url : null;

    // Return the graph
    return graph;
}) as any;

// Method to get the graph token from a classic page
Graph.getAccessToken = (resource?: string) => {
    // Set the data 
    let data = { "resource": resource || SPTypes.CloudEnvironment.Default };

    // Get the access token
    return new Base({
        endpoint: "SP.OAuth.Token/Acquire",
        method: "POST",
        data
    }) as any;
}