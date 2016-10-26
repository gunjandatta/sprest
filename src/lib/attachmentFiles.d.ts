declare module $REST.Types {
    /**
     * Attachment Files
     */
    interface IAttachmentFiles extends IBase {
        /**
         * Properties
         */

        /** The attachment file collection. */
        results: Array<any>;

        /**
         * Methods
         */

        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param name - The name of the file to add.
         * @param contents - The file contents as an array buffer.
        **/
        add(name): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IAttachmentFiles) => void): IAttachmentFiles;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IAttachmentFiles;
    }
}
