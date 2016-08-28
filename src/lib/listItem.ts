/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // List Item
    /*********************************************************************************************************************************/
    Library.listitem = {};
    Library.listitem[RequestType.GetDataAsParameter] = ["getUserEffectivePermissions"];
    Library.listitem[RequestType.Post] = ["breakRoleInheritance", "deleteObject", "recycle", "resetRoleInheritance"];
    Library.listitem[RequestType.PostDataInBodyNoArgs] = ["validateUpdateListItem"];
    Library.listitem[RequestType.Custom] = [
        { name: "addAttachment", "function": function (fileName, content) { return this.executePost("attachmentfiles/add", { FileName: fileName }, content, true); } },
        //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, this.__metadata.type, "MERGE"); } }
    ];
}
