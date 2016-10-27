declare module $REST.Types {
    /**
     * The base class
     */
    interface IBase {
        /**
         * Properties
         */

        /** True to execute the request asynchronously, synchronously otherwise. */
        asyncFl: boolean;

        /** True, if the object exists, false otherwise. */
        existsFl: boolean;

        /** The parent object, which created this object. */
        parent: any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): any;
    }
}
