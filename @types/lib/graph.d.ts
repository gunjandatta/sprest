import { IBaseExecution } from "gd-sprest-def/lib/base";
import { IGraph as IGraphCore, IGraphToken } from "../intellisense/graph";
import { ITargetInfo } from "../utils";

/**
 * Graph
 */
export const Graph: IGraph;

// Graph Properties
export interface IGraphProperties {
    accessToken: string;
    cloud?: string;
    requestType?: string;
    url: string;
    version?: string;
}

/**
 * Graph
 */
export interface IGraph {
    /**
     * Creates an instance of the graph library.
     * @param props - The graph request information.
     */
    (props: IGraphProperties): IGraphCore;

    /**
     * Method to get the access token from a classic page.
     * @param resource - The graph api endpoint.
     */
    getAccessToken(resource?: string): IBaseExecution<IGraphToken>;
}