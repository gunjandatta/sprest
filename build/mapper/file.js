"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.attachment = {};
exports.attachmentfiles = {
    add: {
        argNames: ["fileName"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.file = {
    properties: [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ],
    approve: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    cancelupload: {
        argNames: ["uploadId"],
        name: "cancelupload(guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    checkin: {
        argNames: ["comment", "checkInType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    checkout: {
        requestType: utils_1.RequestType.Post
    },
    content: {
        name: "$value",
        requestType: utils_1.RequestType.GetBuffer
    },
    continueUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    copyTo: {
        argNames: ["strNewUrl", "bOverWrite"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    deny: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    finishUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    getlimitedwebpartmanager: {
        argNames: ["scope"],
        name: "getLimitedWebPartManager(scope=[[scope]])",
        requestType: utils_1.RequestType.GetReplace
    },
    moveTo: {
        argNames: ["newUrl", "flags"],
        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
        requestType: utils_1.RequestType.PostReplace
    },
    openBinaryStream: {
        requestType: utils_1.RequestType.GetBuffer
    },
    publish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Get
    },
    saveBinaryStream: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    startUpload: {
        argNames: ["uploadId"],
        name: "startupload(uploadId=guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    undoCheckOut: {
        requestType: utils_1.RequestType.Post
    },
    unpublish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    update: {
        metadataType: "SP.File",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.files = {
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    addTemplateFile: {
        argNames: ["urlOfFile", "templateFileType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fileversion = {
    properties: [],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fileversions = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.folder = {
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.folders = {
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],
    add: {
        argNames: ["url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.limitedwebpartmanager = {
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: utils_1.RequestType.GetReplace
    }
};
//# sourceMappingURL=file.js.map