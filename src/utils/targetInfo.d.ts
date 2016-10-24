// Type definitions for targetInfo.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST.Utils {
    /***********************************************************************/
    // The input parameters for the target information class.
    /***********************************************************************/
    interface ITargetInfoSettings {
        asyncFl?:boolean;
        bufferFl?:boolean;
        callback?:() => void;
        data?:any;
        defaultToWebFl?:boolean;
        method?:string;
        endpoint?:string;
        url?:string;
    }

    /***********************************************************************/
    // The target information of the target information.
    /***********************************************************************/
    interface ITargetInfo {
        /***********************************************************************/
        // Public Properties
        /***********************************************************************/
        asyncFl:boolean;
        bufferFl:boolean;
        callback:() => void;
        requestData:any;
        requestHeaders:any;
        requestMethod:string;
        requestUrl:string;
   }
}
