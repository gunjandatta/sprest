/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Files
    // The SPFileCollection object.
    /*********************************************************************************************************************************/
    //export class Files extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.files = {
        // Adds a file to this collection.
        add: {
            argNames: ["content", "overwrite", "url"],
            requestType: RequestType.PostWithArgs
        },

        // Adds a ghosted file to an existing list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: RequestType.PostWithArgs
        },

        // Gets the file for the specified name
        getByName: {
            argNames: ["name"],
            name: "?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
