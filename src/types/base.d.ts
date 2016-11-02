declare module $REST.Types {
    /**
     * The base class
     */
    interface IBase {
        /**
         * Properties
         */

        /** True, if the object exists, false otherwise. */
        existsFl: boolean;

        /** The parent object, which created this object. */
        parent: any;

        /** The request type */
        requestType: RequestType;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): any;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): any;

        /**
         * Method to execute the request, and return the base list object.
         */
        next<IList>(): IList;

        /**
         * Method to execute the request, and return the base site object.
         */
        next<ISite>(): ISite;

        /**
         * Method to execute the request, and return the base web object.
         */
        next<IWeb>(): IWeb;
    }
}
