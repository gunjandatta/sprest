declare module $REST.Types {
    /**
     * Helper Methods
     */
    interface IHelper {
        /**
         * Method to check-in and publish a file.
         * @param file - The file to check-in and publish.
         * @param checkInComment - The check-in comment.
         * @param publishComment - The publish comment.
         */
        checkInAndPublish(file:$REST.Types.IFile, checkInComment?:string, publishComment?:string): Types.IPromise;

        /**
         * Method to check out a files.
         * @param web - The web containing the file.
         * @param fileUrls - An array of server relative url of the file.
         */
        checkoutFiles(web:$REST.Types.IWeb, fileUrls:Array<string>): Types.IPromise;

        /**
         * Method to copy a file from the app web to the host web.
         * @param appWebSrcFileUrl - The app web relative url to the source file.
         * @param dstFolder - The destination folder.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         */
        copyFile(appWebSrcFileUrl:string, dstFolder:Types.IFolder, overwriteFl?:boolean): Types.IPromise;

        /**
         * Method to copy files from the app web to the host web.
         * @param srcFileUrls - Any array of app web relative urls of the source file.
         * @param dstFolderUrls - An array of host web relative urls of the destination folder.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         */
        copyFiles(srcFileUrls:Array<string>, dstFolderUrls:Array<string>, overwriteFl?:boolean): Types.IPromise;

        /**
         * Method to create folders in a web.
         * @param web - The web to create the folders in.
         * @param folderUrls - The relative url of the folder to the web.
         */
        createFolders(web:Types.IWeb, folderUrls:Array<string>): Types.IPromise;

        /**
         * Method to create sub-folders.
         * @param folder - The app web relative url to the source file.
         * @param subFolderUrl - The host web relative url of the destination folder.
         */
        createSubFolders(folder:Types.IFolder, subFolderUrl:string): Types.IPromise;

        /**
         * Method to get the file content.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         */
        getFileContent(web:$REST.Types.IWeb, fileUrls:Array<string>): Types.IPromise;
   }
}
