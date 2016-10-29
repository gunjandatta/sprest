module $REST {
    Library.folder = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
            "ParentFolder|folder", "Properties", "StorageMetrics"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds a file to this folder.
        addFile: {
            argNames: ["url", "overwrite"],
            name: "files/add",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds a ghosted file to this list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            name: "files/addtemplatefile",
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds the sub-folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: Types.RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: Types.RequestType.Post
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Folder",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
