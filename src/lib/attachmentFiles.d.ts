declare module $REST.Types {
    /**
     * Attachment Files
     */
    interface IAttachmentFiles extends IBase {
        /**
         * Properties
         */

        /** The attachment file collection. */
        results: Array<IAttachment>;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param fileName - The filename of the attachment.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(fileName, content): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IAttachmentFiles;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IAttachmentFiles;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IAttachmentFiles;
    }
}
