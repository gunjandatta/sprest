// Type definitions for base.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The input parameters for the target information class.
    /***********************************************************************/
    interface IBaseSettings {
        /** True to execute the request to the server, false to construct the object only. */
        executeRequestFl?:boolean;

        /** The target information settings. */
        settings?:Utils.ITargetInfoSettings;
    }

    /***********************************************************************/
    // The base object for all requests.
    /***********************************************************************/
    interface IBase {
        /******************************************************************
         * Properties
         *****************************************************************/

        /** True to execute the request asynchronously, synchronously otherwise. */
        asyncFl: boolean;

        /** True, if the object exists, false otherwise. */
        existsFl?: boolean;

        /** The parent object, which created this object. */
        parent: any;

        /** The response of the request. */
        response:any;

        /** The request type. */
        requestType:Types.RequestType;

        /******************************************************************
         * Methods
         *****************************************************************/

        /** Method executed after the asynchronous request completes. */
        done(callback:(...args) => void);

        /** Method to execute the request. */
        execute();
    }
}