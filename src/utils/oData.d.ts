// Type definitions for oData.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST.Utils {
    /***********************************************************************/
    // The OData class.
    /***********************************************************************/
    interface IOData {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        Expand?:Array<string>;
        Filter?:Array<string>;
        OrderBy?:Array<string>;
        Select?:Array<string>;
        Skip?:number;
        Top?:number;
    }
}