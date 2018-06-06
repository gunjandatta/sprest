import { Types } from "../mapper";
import { Base, RequestType } from "../utils";

/**
 * Graph
 */
class _Graph extends Base {
    /**
     * Constructor
     */
    constructor(accessToken: string, version?: string) {
        // Call the base constructor
        super({ accessToken });

        // Default the version
        this.targetInfo.endpoint = version || "v1.0";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "graph" } });
    }

    // Method to get the graph token from a classic page
    static getAuthToken(scope?: string): Promise<Types.IGraphToken> {
        // Return a proimse
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
}
export const Graph: Types.IGraph = _Graph as any;