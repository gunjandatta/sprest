/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Folder
    /*********************************************************************************************************************************/
    Library.folder = {};
    Library.folder[RequestType.Post] = ["deleteObject", "recycle", "uniqueContentTypeOrder"];
    Library.folder[RequestType.Custom] = [
        { name: "addFile", "function": function (data, content) { return this.executePost("files/add", data, content, true); } },
        { name: "addSubFolder", "function": function (name) { return this.executePost("folders/add", name); } },
        { name: "getFile", "function": function (name) { return this.executeGet("files?$filter=Name eq '" + name + "'"); } },
        { name: "getSubFolder", "function": function (name) { return this.executeGet("folders?$filter=Name eq '" + name + "'"); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Folder", "MERGE"); } }
    ];
}
