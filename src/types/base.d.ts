declare module $REST.Types {
    /**
     * Base Settings
     */
    export interface BaseSettings {
        /** True to execute the request to the server, false to construct the object only. */
        executeRequestFl?:boolean;

        /** The target information settings. */
        settings?:$REST.Types.TargetInfoSettings;
    }
}

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
}
