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

        /** The response */
        response: string;

        /** The request type */
        requestType: $REST.Types.RequestType;

        /**
         * Method to wait for the requests to complete.
         * @param callback - The method to be executed after the request completes.
         */
        done(callback?:(...args) => any);

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IBase;
        execute<IList>(callback?:(...args) => any): IList;
        execute<ISite>(callback?:(...args) => any): ISite;
        execute<IWeb>(callback?:(...args) => any): IWeb;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IBase;
        execute<IList>(waitFl:boolean): IList;
        execute<ISite>(waitFl:boolean): ISite;
        execute<IWeb>(waitFl:boolean): IWeb;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IBase;
        execute<IList>(callback:any, waitFl:boolean): IList;
        execute<ISite>(callback:any, waitFl:boolean): ISite;
        execute<IWeb>(callback:any, waitFl:boolean): IWeb;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IBase;
        executeAndWait<IList>(): IList;
        executeAndWait<ISite>(): ISite;
        executeAndWait<IWeb>(): IWeb;
    }
}
