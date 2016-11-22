declare module $REST.Types {
    /**
     * Helper Methods
     */
    interface IHelper {
        /**
         * Method to copy a file from the app web to the host web.
         * @param fileUrl - The source file url, relative to the app web.
         * @param dstFolder - The destination folder.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         */
        copyFileToHostWeb(srcFileUrl:string, dstFolder:Types.IFolder, overwriteFl?:boolean): Types.IPromise;

        /**
         * Method to copy a file from the app web to the host web.
         * @param fileUrl - The source file url, relative to the app web.
         * @param dstFolderUrl - The destination folder url, relative to the host web.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         */
        copyFileToHostWeb(srcFileUrl:string, dstFolderUrl:string, overwriteFl?:boolean): Types.IPromise;

        /**
         * Method to copy a file from the app web to the host web
         * @param fileUrls - An array of source file urls, relative to the app web.
         * @param folderUrls - An array of destination folder urls, relative to the host web.
         */
        copyFilesToHostWeb(fileUrls:Array<string>, folderUrls:Array<string>, overwriteFl?:boolean);

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
         * @param createFl - Flag to create the folder, if it doesn't exist.
         */
        getFolder(web:$REST.Types.IWeb, folderUrl:string, createFl?:boolean): Types.IPromise;

        /**
         * Method to remove empty folders
         * @param web - The web containing the files.
         * @param folderUrls - An array of folder urls, relative to the web.
         */
        removeEmptyFolders(web:$REST.Types.IWeb, folderUrls:Array<string>): Types.IPromise;

        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrl - The file url, relative to the web.
         */
        removeFile(web:$REST.Types.IWeb, fileUrl:string): Types.IPromise;

        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         */
        removeFiles(web:$REST.Types.IWeb, fileUrls:Array<string>): Types.IPromise;
   }
}
