"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.group = {
    properties: [
        "Users|users|/getById([Name])|user"
    ],
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.sitegroups = {
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    removeByLoginName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
exports.peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.user = {
    properties: [
        "Groups|sitegroups|([Name])|group"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.users = {
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getByEmail: {
        argNames: ["email"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "user"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    removeByLoginName: {
        argNames: ["loginName"],
        name: "removeByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.PostReplace
    }
};
//# sourceMappingURL=user.js.map