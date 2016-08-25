// Type definitions for base.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The base object for all requests.
    /***********************************************************************/
    interface IBase {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        asyncFl:boolean;
        defaultUrlToWeb:boolean;
        endpoint:string;
        response: any;

        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        execute(settings:any):any;
    }
}