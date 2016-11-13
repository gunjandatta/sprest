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
         * @param syncFl - Flag to execute the request synchronously.
         */
        execute(syncFl:boolean): any;

        /**
         * Method to execute the request, and return the base list object.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        next<IList>(callback?:(...args) => void): IList;

        /**
         * Method to execute the request, and return the base list object.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        next<IList>(waitFl:boolean): IList;

        /**
         * Method to execute the request, and return the base site object.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        next<ISite>(callback?:(...args) => void): ISite;

        /**
         * Method to execute the request, and return the base site object.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        next<ISite>(waitFl:boolean): ISite;

        /**
         * Method to execute the request, and return the base web object.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        next<IWeb>(callback?:(...args) => void): IWeb;

        /**
         * Method to execute the request, and return the base web object.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        next<IWeb>(waitFl:boolean): IWeb;
    }
}
