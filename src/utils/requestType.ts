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
    GetWithArgsInQSAsVar: 15,
    GetWithArgsValueOnly: 16,
    GetReplace: 17,

    // Graph Requests
    GraphGet: 20,
    GraphPost: 21,

    // Post Requests
    Post: 30,
    PostBodyNoArgs: 31,
    PostWithArgs: 32,
    PostWithArgsInBody: 33,
    PostWithArgsInQS: 34,
    PostWithArgsInQSAsVar: 35,
    PostWithArgsValueOnly: 36,
    PostReplace: 37
}