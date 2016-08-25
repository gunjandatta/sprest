// Type definitions for promise.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The request object will execute the xml http requests to the api.
    /***********************************************************************/
    interface IPromise {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        args:any;
        callback:void;
        resolveFl:boolean;

        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        done:void;
    }

    /***********************************************************************/
    // The input parameters for the promise class.
    /***********************************************************************/
    interface IPromiseType {
        args:any,
        callback:void
    }
}