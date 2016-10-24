// Type definitions for methodInfo.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST.Utils {
    /***********************************************************************/
    // The input parameters for the target information class.
    /***********************************************************************/
    interface IMethodInfoSettings {
        argNames?:[string];
        argValues?:[any];
        data?:any;
        inheritMetadataType?:boolean;        
        metadataType?:string;
        name:string;
        replaceEndpointFl?:boolean;
        requestMethod?:string;
        requestType:Types.RequestType;
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
