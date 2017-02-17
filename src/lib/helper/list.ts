import {
    IPromise,
    IView
} from "../../definitions";
import {
    Promise
} from "../../utils";
/*********************************************************************************************************************************/
// List Helper Methods
/*********************************************************************************************************************************/
export const ListHelper = {
    /**
     * Adds the fields to the view.
     * @param view - The view to add the fields to.
     * @param fields - The fields to add to the view.
     */
    addViewFields: (view:IView, fields:Array<string>):IView => {
        // Get the view Fields
        view.ViewFields()
            // Remove the view fields
            .removeAllViewFields()
            // Execute the request
            .execute();

        // Parse the fields
        for(let field of fields) {
            // Get the view Fields
            view.ViewFields()
                // Add the field
                .addViewField(field)
                // Execute the request
                .execute(true);
        }

        // Return the view
        return view;
    }
}