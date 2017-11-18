import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const field = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Sets the value of the ShowInDisplayForm property for this field.
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Sets the value of the ShowInEditForm property for this field.
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Sets the value of the ShowInNewForm property for this field.
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};