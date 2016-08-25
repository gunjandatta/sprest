/// <reference path="base.d.ts" />
/// <reference path="request.d.ts" />
/// <reference path="targetInfo.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // The base object class.
    /*********************************************************************************************************************************/
    export class Base implements IBase {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings:IRequestType) {
            console.log("[Dev] Base constructor called...");
            // Default the properties
            this.settings = settings;

            // Load the dependencies
            let dependencies = new Dependencies(() => { this.execute(this.settings); });
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous
        public asyncFl:boolean;

        // Flag to target the current web by default
        public get defaultUrlToWeb():boolean { return false; }

        // The endpoint for the object
        public get endpoint():string { return ""; };

        // Method to return the xml http request's response
        public get response():any { return this.request ? this.request.response : null; }

        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/

        // Method to execute a child request
        public execute(settings:IRequestType):any {
            debugger;
            // Create the target information
            this.targetInfo = new TargetInfo(settings.url, this.endpoint, this.defaultUrlToWeb);

            // Update the url
            settings.url = this.targetInfo.requestUrl;

            // Create the request
            return new Request(settings);
        }
        
        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The request
        protected request:Request;

        // The base settings
        private settings:IRequestType;

        // The target information
        private targetInfo:TargetInfo;

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

        // Method to initialize the class
        private init() {
            // Default the url
        }
    }
}
    