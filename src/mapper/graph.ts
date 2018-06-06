import { RequestType } from "../utils";

/**
 * Graph v1.0
 */
export const graph = {
    properties: [
        "groups|graph_groups|/{[Name]}|graph_group",
        "users|graph_users|/{[Name]}|graph_user"
    ],

    /**
     * me
     **/
    me: {
        requestType: RequestType.GraphGet
    }
};

export const graph_user = {

}