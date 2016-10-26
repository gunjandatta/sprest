declare module $REST.Settings {
    /**
     * Base Settings
     */
    interface BaseSettings {
        /** True to execute the request to the server, false to construct the object only. */
        executeRequestFl?:boolean;

        /** The target information settings. */
        settings?:TargetInfoSettings;
    }
}

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

        /** Method executed after the asynchronous request completes. */
        done(callback:(...args) => void);

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): any;
    }
}
