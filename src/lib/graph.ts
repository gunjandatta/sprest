import { IGraph, IGraphProperties } from "../../@types/lib/graph";
import { SPTypes } from "../sptypes";
import { Base, Request, RequestType } from "../utils";

// Default Token
//export const Token

/**
 * Graph
 */
export const Graph: IGraph = ((props: IGraphProperties) => {
    let graph = new Base({ accessToken: props && props.accessToken ? props.accessToken : Graph.Token });

    // Default the target information
    graph.targetInfo.requestType = (props && props.requestType ? props.requestType : "").toLowerCase() == "post" ? RequestType.GraphPost : RequestType.GraphGet;

    // Set the endpoint
    graph.targetInfo.data = props ? props.data : null;
    graph.targetInfo.endpoint = props && props.cloud ? props.cloud : Graph.Cloud || SPTypes.CloudEnvironment.Default;
    graph.targetInfo.endpoint += "/" + (props && props.version ? props.version : Graph.Version || "v1.0");
    props && props.url ? graph.targetInfo.endpoint += "/" + props.url : null;

    // Add the methods
    Request.addMethods(graph, { __metadata: { type: "graph" } });

    // Return the graph
    return graph;
}) as any;

// Default Values
Graph.Cloud = "";
Graph.Token = "";
Graph.Version = "";

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