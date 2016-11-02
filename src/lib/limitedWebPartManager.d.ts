declare module $REST.Types {
    /**
     * Limited Web Part Manager
     */
    interface ILimitedWebPartManager extends IBase {
        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): ILimitedWebPartManager;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): ILimitedWebPartManager;

        /**
         * Gets a webpart by its id.
         * @param id - The web part id.
         */
        WebParts(id);
    }
}
