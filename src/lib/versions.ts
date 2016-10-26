module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.versions = {
        // Gets the version with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Deletes all versions in the collection.
        deleteAll: {
            requestType: Types.RequestType.Post
        },

        // Deletes a version, by the specified id.
        deleteById: {
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Deletes a version, by the specified label.
        deleteByLabel: {
            argNames: ["label"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Restores a version, by the specified label.
        restoreByLabel: {
            argNames: ["label"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        }
    }
}
