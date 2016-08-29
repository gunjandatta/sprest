// Type definitions for methodInfo.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The input parameters for the target information class.
    /***********************************************************************/
    interface IMethodInfoType {
        argNames:[string];
        argValues:[any];
        data?:any;
        metadataType:string;
        name:string;
        replaceEndpointFl?:boolean;
        requestType:RequestType;
    }

    /***********************************************************************/
    // The method information.
    /***********************************************************************/
    interface IMethodInfo {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        body:any;
        replaceEndpointFl:boolean;
        requestMethod:string;
        url:string;
   }
}
