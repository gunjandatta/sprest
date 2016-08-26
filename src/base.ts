/// <reference path="base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    export class Base implements IBase {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the properties
            this.targetInfo = targetInfo || {};

            // Default the flag, if it's not defined
            this.executeRequestFl = typeof(executeRequestFl) === "boolean" ? executeRequestFl : true;
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous
        public get asyncFl():boolean { return this.request ? this.request.asyncFl : false; }
        public set asyncFl(value) { this.targetInfo.asyncFl = value; }

        // The parent
        public get parent():Base { return this.oParent; }

        // Method to return the xml http request's response
        public get response():any { return this.request ? this.request.response : null; }

        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/

        // Method to execute a child request
        public execute():void {
            // Create the request
            this.request = new Request(new TargetInfo(this.targetInfo));
        }
        
        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // Flag to determine if we should execute the request on creation
        protected executeRequestFl:boolean;

        // Flag to default the url to the current web url, site otherwise
        protected defaultToWebFl;

        // The parent
        protected oParent:Base;

        // The promise
        private promise:Promise;

        // The request
        protected request:Request;

        // The base settings
        protected targetInfo:ITargetInfoType;

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to convert the input arguments into an object
        protected createDataObject(...args) {
            let data = null;

            // Ensure arguments exist
            if(args && args.length > 0) {
                data = {};

                // Parse the arguments
                for(var arg in args) {
                    // Append the argument
                    data[arg] = args[arg];
                }
            }

            // Return the data object
            return data;
        }
    }
}
    