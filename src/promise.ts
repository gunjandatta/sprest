/*********************************************************************************************************************************/
// REST Namespace
/*********************************************************************************************************************************/
module $REST {
    /*********************************************************************************************************************************/
    // The request class.
    /*********************************************************************************************************************************/
    export class Promise implements IPromise {

        /******************************************************************************************************************************** */
        // Public Variables
        /******************************************************************************************************************************** */

        // Optional arguments to pass to the callback function
        public args:any;

        // Method to call after the promise is resolved
        public callback:void;

        // Flag to determine if the promise has been resolved
        public resolveFl:boolean;

        /******************************************************************************************************************************** */
        // Constructor
        /******************************************************************************************************************************** */
        constructor() {
            // Default the Variables
            this.resolveFl = false;
        }

        /******************************************************************************************************************************** */
        // Public Methods
        /******************************************************************************************************************************** */

        // Executes the callback method after the promise is resolved
        public Done(callback:() => any) {
            // Set the callback method
            this.callback = callback;

            // See if this promise has been resolved
            if(this.resolveFl) {
                // Resolve this promise
                this.Resolve(this.arguments);
            }
        }

        // Method to resolve the promise
        public Resolve(...args:any[]) {
            // Set the arguments
            this.arguments = args;

            // Set the flag
            this.resolveFl = true;

            // See if callback function exists
            if(this.callback && typeof(this.callback) == "function") {
                // Execute the method
                this.callback.apply(this.arguments);
            }
        }
    }
}