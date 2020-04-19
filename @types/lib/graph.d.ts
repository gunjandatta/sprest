import { IGraph as IGraphDef, IGraphToken } from "../intellisense/graph";
import { ITargetInfo } from "../utils";

/**
 * Graph
 * @hidden
 */
export const Graph: IGraph;

/**
 * Graph
 * @hidden
 */
export interface IGraph {
    /**
     * Creates an instance of the graph library.
     * @param accessToken - The access token for the graph api request.
     * @param version - The version of the graph to target.
     */
    (accessToken: string, version?: string): IGraphDef;

    /**
     * Method to get the access token from a classic page.
     */
    getAccessToken(): Promise<IGraphToken>;
}