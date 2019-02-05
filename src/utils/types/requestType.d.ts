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
    GetWithArgsInQSAsVar: number;
    GetWithArgsValueOnly: number;
    GetReplace: number;

    // Graph Requests
    GraphGet: number;
    GraphPost: number;

    // Post Requests
    Post: number;
    PostBodyNoArgs: number;
    PostWithArgs: number;
    PostWithArgsAndData: number;
    PostWithArgsInBody: number;
    PostWithArgsInQS: number;
    PostWithArgsInQSAsVar: number;
    PostWithArgsValueOnly: number;
    PostReplace: number;
}