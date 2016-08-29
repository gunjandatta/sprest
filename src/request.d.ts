// Type definitions for request.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The request object will execute the xml http requests to the api.
    /***********************************************************************/
    interface IRequest {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        asyncFl:boolean;
        response:any;
        request:any;
        requestData:any;
        requestUrl:string;
    }
}