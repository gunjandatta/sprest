import { RequestType } from "../../utils";

/**
 * Graph v1.0
 */
export const graph = {
    properties: [
        "groups|graph_groups|/[Name]|graph_group",
        "users|graph_users|/[Name]|graph_user"
    ],

    /**
     * me
     **/
    me: {
        requestType: RequestType.GraphGet,
        returnType: "graph_me"
    }
};

/**
 * Graph Drive
 */
export const graph_drive = {
    properties: [
        "items|graph_drive_items|/[Name]|graph_drive_item",
        "root|graph_drive_item",
        "special|graph_drive_items",
    ]
}

/**
 * Graph Me
 */
export const graph_me = {
    properties: [
        "drives|graph_drives|/[Name]|graph_drive",
        "messages|graph_messages|/[Name]|graph_message"
    ],

    /**
     * Calendar
     */
    calendar: {
        requestType: RequestType.GraphGet,
        returnType: "graph_calendar"
    }
}