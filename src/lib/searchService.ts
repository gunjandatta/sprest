/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Search Service
    /*********************************************************************************************************************************/
    Library.searchservice = {};
    Library.searchservice[RequestType.Custom] = [
        { name: "query", "function": function (query) { if (typeof (query) === "string") { return this.executeGet("query?" + query); } query = { request: query }; query.request.__metadata = { type: "Microsoft.Office.Server.Search.REST.SearchRequest" }; return this.executePost("postquery", null, query, true); } },

        { name: "querySuggestion", "function": function (query) { return this.executeGet("suggest?" + query); } },
    ];
}
