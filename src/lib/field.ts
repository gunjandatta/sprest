import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
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
export default Library;