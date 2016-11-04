declare module $REST.Types {
    /**
     * Attachment
     */
    interface IAttachment extends IBase {
        /**
         * Properties
         */

        /** The filename. */
        FileName: string;

        /** The filename as a path. */
        FileNameAsPath: any;

        /** The server relative path. */
        ServerRelativePath: any;

        /** The server relative url. */
        ServerRelativeUrl: string;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IAttachment;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IAttachment;
    }
}
