"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.contenttype = {
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.contenttypes = {
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.field = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.fieldlinks = {
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fields = {
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    createFieldAsXml: {
        argNames: ["schemaXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            parameters: {
                __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                Options: 8,
                SchemaXml: "[[schemaXml]]"
            }
        }
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.items = {
    add: {
        metadataType: function (obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
        },
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.list = {
    properties: [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ],
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getItemById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "item"
    },
    getItems: {
        argNames: ["viewXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "[[viewXml]]"
            }
        }
    },
    getItemsByQuery: {
        argNames: ["camlQuery"],
        name: "getItems",
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "<View>[[camlQuery]]</View>"
            }
        }
    },
    getListItemChangesSinceToken: {
        argNames: ["query"],
        metadataType: "SP.ChangeLogItemQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getRelatedFields: {
        requestType: utils_1.RequestType.Get
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getViewById: {
        argNames: ["viewId"],
        name: "getView",
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    renderListData: {
        argNames: ["viewXml"],
        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
        requestType: utils_1.RequestType.PostReplace
    },
    renderListFormData: {
        argNames: ["itemid", "formid", "mode"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    reserveListItemId: {
        requestType: utils_1.RequestType.Post
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        metadataType: "SP.List",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.listitem = {
    properties: [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ],
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.lists = {
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    ensureSiteAssetsLibrary: {
        requestType: utils_1.RequestType.Post
    },
    ensureSitePagesLibrary: {
        requestType: utils_1.RequestType.Post
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.version = {
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },
    deleteAll: {
        requestType: utils_1.RequestType.Post
    },
    deleteById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    deleteByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    restoreByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
exports.view = {
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    renderAsHtml: {
        requestType: utils_1.RequestType.Get
    },
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.viewfieldcollection = {
    addViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeAllViewFields: {
        requestType: utils_1.RequestType.Post
    },
    removeViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    }
};
exports.views = {
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=list.js.map