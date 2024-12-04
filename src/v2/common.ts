import { Graph } from "../lib/graph";

/**
 * Initialization for the v2 libs.
 */
export function init() {
    // See if the token is already set
    if (Graph.Token) { return; }

    // Set the cloud access token
    Graph.getAccessToken(Graph.Cloud, "SPO").execute(auth => {
        // Set the access token
        Graph.Token = auth.access_token;
    });
}