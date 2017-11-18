import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const items = {
    // Adds an item to the list item collection.
    add: {
        metadataType: function(obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem"
        },
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets an item by its id.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};