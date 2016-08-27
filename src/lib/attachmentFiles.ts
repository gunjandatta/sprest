/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    Library.attachmentfiles = {};
    Library.attachmentfiles[RequestType.Custom] = [
        { name: "add", "function": function (fileName, content) { return this.executePost("add", { FileName: fileName }, content, true); } },
        { name: "addFile", "function": function (file) { var thisObj = this; var promise = new Promise(); window["dev"].getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.add(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
    ];
}