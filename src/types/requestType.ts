/**
 * Request Type
 */
export type IRequestType = {
    // Requests
    Custom,
    Delete,
    Merge,
    OData,

    // Get Requests
    Get,
    GetBuffer,
    GetWithArgs,
    GetWithArgsInBody,
    GetWithArgsInQS,
    GetWithArgsValueOnly,
    GetReplace,

    // Post Requests
    Post,
    PostWithArgs,
    PostWithArgsInBody,
    PostWithArgsInQS,
    PostWithArgsValueOnly,
    PostReplace
}

/**
 * Request Type
 */
export const RequestType = {
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

    // Post Requests
    Post: 20,
    PostWithArgs: 21,
    PostWithArgsInBody: 22,
    PostWithArgsInQS: 23,
    PostWithArgsValueOnly: 24,
    PostReplace: 25
}