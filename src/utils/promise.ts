import { IBase } from "../definitions/index";
/*********************************************************************************************************************************/
// Promise
// This is a lightweight promise library.
/*********************************************************************************************************************************/
export class Promise implements PromiseLike<any> {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(callback?: (...args) => void) {
        // Default the properties
        this.callback = callback
        this.resolvedFl = false;
    }

    /******************************************************************************************************************************** */
    // Public Methods
    /******************************************************************************************************************************** */

    // Method to execute after the promise is resolved
    done(callback?: (...args) => void) {
        // Set the callback
        this.callback = callback || this.callback;

        // See if the promise is resolved
        if (this.resolvedFl) {
            // Execute the callback
            this.executeMethod();
        }
    }

    // Method to resolve the promise
    resolve(...args) {
        // Set the properties
        this.args = args;
        this.resolvedFl = true;

        // Execute the callback
        this.executeMethod();
    }

    // Method to execute after the promise completes
    then<TResult1 = IBase, TResult2 = never>(onfulfilled?: ((value: IBase) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): any {
        // Execute the done method
        this.done(onfulfilled);

        // Return this promise
        return this;
    }

    /*********************************************************************************************************************************/
    // Private Variables
    /*********************************************************************************************************************************/

    // The arguments to pass back
    private args: any[];

    // The callback
    private callback: (...args) => void;

    // Flag to determine if the promise is resolved
    private resolvedFl: boolean;

    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/

    // Method to execute the callback method
    private executeMethod() {
        // See if callback function exists
        if (this.callback && typeof (this.callback) == "function") {
            // Execute the callback method
            this.callback.apply(this, this.args);
        }
    }
}