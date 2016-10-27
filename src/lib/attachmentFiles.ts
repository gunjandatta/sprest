module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.attachmentfiles = {
        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the file to add.
         * @param contents - The file contents as an array buffer.
        **/
        add: {
            argNames: ["name"],
            name: "",
            requestType: Types.RequestType.PostWithArgs
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };

    //        { name: "addFile", "function": function (file) { var thisObj = this; var promise = new Promise(); window["dev"].getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.add(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
}
