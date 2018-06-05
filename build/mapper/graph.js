"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Graph v1.0
 */
exports.graph = {
    properties: [
        "groups|graph_groups|?[Name]|graph_group",
        "users|graph_users|/{[Name]}|graph_user"
    ],
    /**
     * me
     **/
    me: {
        requestType: utils_1.RequestType.GraphGet
    }
};
exports.graph_user = {};
