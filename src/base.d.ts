// Type definitions for base.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The input parameters for the target information class.
    /***********************************************************************/
    interface IBaseType {
        executeRequestFl?:boolean;
        settings?:ITargetInfoType;
    }

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
        requestType:RequestType;

        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        done(callback:() => void);
        execute(settings:ITargetInfoType):any;
    }
}