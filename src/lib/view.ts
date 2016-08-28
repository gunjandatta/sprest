/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // View
    /*********************************************************************************************************************************/
    Library.view = {};
    Library.view[RequestType.Get] = ["renderAsHtml"];
    Library.view[RequestType.Post] = ["deleteObject"];
    Library.view[RequestType.Custom] = [
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.View", "MERGE"); } }
    ];
}
