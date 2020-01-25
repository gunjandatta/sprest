"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
/**
 * Graph v1.0
 */
exports.graph = {
    properties: [
        "groups|graph_groups|/[Name]|graph_group",
        "users|graph_users|/[Name]|graph_user"
    ],
    /**
     * me
     **/
    me: {
        requestType: utils_1.RequestType.GraphGet,
        returnType: "graph_me"
    }
};
/**
 * Graph Drive
 */
exports.graph_drive = {
    properties: [
        "items|graph_drive_items|/[Name]|graph_drive_item",
        "root|graph_drive_item",
        "special|graph_drive_items",
    ]
};
/**
 * Graph Me
 */
exports.graph_me = {
    properties: [
        "drives|graph_drives|/[Name]|graph_drive",
        "messages|graph_messages|/[Name]|graph_message"
    ],
    /**
     * Calendar
     */
    calendar: {
        requestType: utils_1.RequestType.GraphGet,
        returnType: "graph_calendar"
    }
};
