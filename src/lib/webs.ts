/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Webs
    /*********************************************************************************************************************************/
    Library.webs = {};
    Library.webs[RequestType.Custom] = [
        { name: "add", "function": function (data) { data = { parameters: data }; data.parameters.__metadata = { type: "SP.WebCreationInformation" }; return this.executePost("add", null, data, true); } },
    ];
}
