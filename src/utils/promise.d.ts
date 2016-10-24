// Type definitions for promise.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST.Utils {
    /***********************************************************************/
    // The promise class.
    /***********************************************************************/
    interface IPromise {
        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        done(callback?:() => void):void;
        resolve():void;
    }
}