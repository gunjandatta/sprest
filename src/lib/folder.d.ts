declare module $REST.Types {
    /**
     * Folder
     */
    interface IFolder extends IBase {
        /**
         * Properties
         */

        /** Specifies the sequence in which content types are displayed. */
        ContentTypeOrder: string;

        /**
         * Gets the collection of all files contained in the list folder. You can add a file to a folder by using the Add method on the folder’s FileCollection resource.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Files(executeRequestFl?:boolean): IFiles;

        /**
         * Gets the collection of list folders contained in the list folder.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Folders(executeRequestFl?:boolean): IFolders;

        /** Gets a value that specifies the count of items in the list folder. */
        ItemCount: string;

        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ListItemAllFields(executeRequestFl?:boolean): any;

        /** Gets the name of the folder. */
        Name: string;

        /**
         * Gets the parent list folder of the folder.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        ParentFolder(executeRequestFl?:boolean): IFolder;

        /**
         * Gets the collection of all files contained in the folder.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        Properties(executeRequestFl?:boolean): any;

        /** Gets the server-relative URL of the list folder. */
        ServerRelativeUrl: string;

        /** Gets or sets a value that specifies the content type order. */
        UniqueContentTypeOrder: string;

        /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
        WelcomePage: string;

        /**
         * Methods
         */

        /**
         * Adds a file to this folder.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        addFile(url, overwrite, content): IFile;

        /**
         * Adds a ghosted file to this list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file.
         */
        addTemplateFile(urlOfFile, templateFileType:Types.FileTemplateType): any;

        /**
         * Adds the sub-folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        addSubFolder(url): IFolder;

        /**
         * Deletes the folder.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IFolder) => void): IFolder;

        /**
         * Gets the file for the specified name.
         * @param name - The file name.
         */
        getFile(name): IFile;

        /**
         * Gets the folder for the specified name.
         * @param name - The folder name.
         */
        getSubFolder(name): IFolder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl): IFolder;

        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }
}
