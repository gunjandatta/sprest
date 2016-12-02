module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.limitedwebpartmanager = {
        // Gets a webpart by its id.
        get_WebParts: {
            argNames: ["id"],
            name: "webparts?expand=WebPart",
            requestType: Types.RequestType.GetReplace
        }
    };
}
