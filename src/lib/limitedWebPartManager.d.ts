declare module $REST.Types {
    /**
     * Limited Web Part Manager
     */
    interface ILimitedWebPartManager extends IBase {
        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(ILimitedWebPartManager) => void): ILimitedWebPartManager;

        /**
         * Gets a webpart by its id.
         * @param id - The web part id.
         */
        WebParts(id);
    }
}
