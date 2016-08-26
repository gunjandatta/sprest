// Type definitions for request.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // Enumerators
    /***********************************************************************/

    // Request Type
    export enum RequestType {
        Get = 0,
        GetAppendMethodToEndPoint = 1,
        GetBuffer = 2,
        GetDataAsParameter = 3,
        GetDataInBody = 4,
        GetDataInBodyNoArgs = 5,
        Post = 6,
        PostAppendMethodToEndPoint = 7,
        PostDataAsParameter = 8,
        PostDataInBody = 9,
        PostDataInBodyNoArgs = 10
    }

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
    }
}