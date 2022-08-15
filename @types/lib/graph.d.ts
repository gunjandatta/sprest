import { IBaseExecution } from "gd-sprest-def/lib/base";
import { graph } from "gd-sprest-def/lib/microsoft";
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
    me(): IBaseExecution<graph.user>;
    group(id: string): IBaseExecution<graph.group>;
    groups(): IBaseExecution<graph.groupCollections>;
    list(siteId: string, id: string): IBaseExecution<graph.list>;
    lists(siteId: string): IBaseExecution<graph.listCollections>;
    site(id: string): IBaseExecution<graph.site>;
    sites(): IBaseExecution<graph.siteCollections>;
    user(id: string): IBaseExecution<graph.user>;
    users(): IBaseExecution<graph.userCollections>;
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
     */
    getAccessToken(resource?: string): IBaseExecution<IGraphToken>;
}