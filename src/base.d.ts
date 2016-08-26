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
        parent:any;
        response:any;

        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        execute(settings:ITargetInfoType):any;
    }
}