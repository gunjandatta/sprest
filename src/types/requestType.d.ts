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