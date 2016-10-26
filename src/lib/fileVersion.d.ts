declare module $REST.Types {
    /**
     * File Version
     */
    interface IFileVersion extends IBase {
        /**
         * Properties
         */

        /** Gets a value that specifies the check-in comment. */
        CheckInComment: string;

        /** Gets a value that specifies the creation date and time for the file version. */
        Created: string;

        /**
         * Gets a value that specifies the user that represents the creator of the file version.
         * @param executeRequestFl - (Optional) True to execute the request to the server, false to construct the object only.
         */
        CreatedBy(executeRequestFl?:boolean): IUser;

        /** Gets the internal identifier for the file version. */
        ID: string;

        /** Gets a value that specifies whether the file version is the current version. */
        IsCurrentVersion: string;

        /**  */
        Size: string;

        /** Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite. */
        Url: string;

        /** Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2. */
        VersionLabel: string;

        /**
         * Methods
         */

        /**
         * Deletes the file version.
         */
        delete():any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IFileVersion) => void): IFileVersion;
    }
}
