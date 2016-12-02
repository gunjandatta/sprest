module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.sitegroups = {
        // Adds a group to the group collection.
        add: {
            metadataType: "SP.Group",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Returns a group from the collection based on the member ID of the group.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "group"
        },

        // Returns a cross-site group from the collection based on the name of the group.
        getByName: {
            argNames: ["name"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "group"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        },

        // Removes the group with the specified member ID from the collection.
        removeById: {
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Removes the cross-site group with the specified name from the collection.
        removeByLoginName: {
            argNames: ["name"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
    }
}
