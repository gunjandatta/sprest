import { IRequestType } from "./types";

/**
 * Request Type
 */
export const RequestType: IRequestType = {
    // Requests
    Custom: 0,
    Delete: 1,
    Merge: 2,
    OData: 3,

    // Get Requests
    Get: 10,
    GetBuffer: 11,
    GetWithArgs: 12,
    GetWithArgsInBody: 13,
    GetWithArgsInQS: 14,
    GetWithArgsValueOnly: 15,
    GetReplace: 16,

    // Graph Requests
    GraphGet: 20,
    GraphPost: 21,

    // Post Requests
    Post: 30,
    PostWithArgs: 31,
    PostWithArgsInBody: 32,
    PostWithArgsInQS: 33,
    PostWithArgsValueOnly: 34,
    PostReplace: 35
}