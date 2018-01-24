/**
 * Request Type
 */
export type IRequestType = {
    // Requests
    Custom: number;
    Delete: number;
    Merge: number;
    OData: number;

    // Get Requests
    Get: number;
    GetBuffer: number;
    GetWithArgs: number;
    GetWithArgsInBody: number;
    GetWithArgsInQS: number;
    GetWithArgsValueOnly: number;
    GetReplace: number;

    // Post Requests
    Post: number;
    PostWithArgs: number;
    PostWithArgsInBody: number;
    PostWithArgsInQS: number;
    PostWithArgsValueOnly: number;
    PostReplace: number;
}