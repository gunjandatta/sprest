declare module $REST.Types {
    // Request Type
    enum RequestType {
        // Requests
        Custom = 0,
        Delete = 1,
        Merge = 2,
        OData = 3,
        // Get Requests
        Get = 10,
        GetWithArgs = 11,
        GetWithArgsInBody = 12,
        GetWithArgsInQS = 13,
        GetWithArgsValueOnly = 14,
        GetReplace = 15,
        // Post Requests
        Post = 20,
        PostWithArgs = 21,
        PostWithArgsInBody = 22,
        PostWithArgsInQS = 23,
        PostWithArgsValueOnly = 24,
        PostReplace = 25,
        // Remove if no longer needed
        GetAppendMethodToEndPoint = 30,
        GetBuffer = 31,
        GetDataAsParameter = 32,
        GetDataInBody = 33,
        GetDataInBodyNoArgs = 34,
        PostAppendMethodToEndPoint = 35,
        PostDataAsParameter = 36,
        PostDataInBody = 37,
        PostDataInBodyNoArgs = 38
    }
}