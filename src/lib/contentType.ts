/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    Library.contenttype = {};
    Library.contenttype[RequestType.Post] = ["deleteObject"];
    Library.contenttype[RequestType.Custom] = [
        { name: "addFieldLink", "function": function (data) { this.executePost("fieldlinks", null, data, true, "SP.FieldLink"); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getFieldLinkByName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fieldlinks?$filter=Name eq '" + name + "'"); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.ContentType", "MERGE"); } }
    ];
}
