"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.usercustomaction = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.usercustomactions = {
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clear: {
        requestType: utils_1.RequestType.Post
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=userCustomAction.js.map