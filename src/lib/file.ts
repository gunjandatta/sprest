/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // File
    /*********************************************************************************************************************************/
    Library.file = {};
    Library.file[RequestType.Get] = ["getLimitedWebPartManager"];
    Library.file[RequestType.GetBuffer] = ["openBinaryStream"];
    Library.file[RequestType.Post] = [
        "approve", "cancelUpload", "checkIn", "checkOut", "copyTo", "deleteObject",
        "deny", "moveTo", "publish", "recycle", "undoCheckOut", "unpublish"
    ];
    Library.file[RequestType.PostDataInBody] = ["continueUpload", "finishUpload", "saveBinaryStream", "startUpload"];
    Library.file[RequestType.Custom] = [
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.File", "MERGE"); } }
    ];
}
