import { IBaseExecution } from "gd-sprest-def/lib/base";
import { Graph as GraphCore } from "gd-sprest-def/lib/microsoft";
import { IGraph as IGraphCore, IGraphToken } from "../intellisense/graph";
import { ITargetInfo } from "../utils";

/**
 * Graph
 */
export const Graph: IGraph;

/**
 * Graph Properties
 */
export interface IGraphProperties {
    /** The access token. Defaults to the Graph.Token value if not set. */
    accessToken?: string;

    /** The cloud environment. Defaults to the Graph.Cloud or commercial environment if not set. */
    cloud?: string;

    /** The data to be sent in the body of the request. */
    data?: string;

    /** The request type GET or POST. */
    requestType?: string;

    /** The url of the graph api request. */
    url: string;

    /** The version of the graph api to use. */
    version?: string;
}

/**
 * Graph EndPoints
 */
export interface IGraphCustom extends IGraphCore {
    me(): IBaseExecution<GraphCore.user>;
    group(id: string): IBaseExecution<GraphCore.group>;
    groups(): IBaseExecution<GraphCore.groupCollections>;
    list(siteId: string, id: string): IBaseExecution<GraphCore.list>;
    lists(siteId: string): IBaseExecution<GraphCore.listCollections>;
    site(id: string): IBaseExecution<GraphCore.site>;
    sites(): IBaseExecution<GraphCore.siteCollections>;
    user(id: string): IBaseExecution<GraphCore.user>;
    users(): IBaseExecution<GraphCore.userCollections>;
}

/**
 * Graph
 */
export interface IGraph {
    /**
     * Creates an instance of the graph library.
     * @param props - The graph request information.
     */
    (props?: IGraphProperties): IGraphCustom;

    /** The default cloud environment to use for the requests. */
    Cloud: string;

    /** The default token to use for the requests. */
    Token: string;

    /** The default version to use for the requests. */
    Version: string;

    /**
     * Method to get the access token from a classic page.
     * @param resource - The graph api endpoint.
     * @param tokenType - The token type.
     */
    getAccessToken(resource?: string, tokenType?: string): IBaseExecution<IGraphToken>;
}