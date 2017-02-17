"use strict";
/*********************************************************************************************************************************/
// List Helper Methods
/*********************************************************************************************************************************/
exports.ListHelper = {
    /**
     * Adds the fields to the view.
     * @param view - The view to add the fields to.
     * @param fields - The fields to add to the view.
     */
    addViewFields: function (view, fields) {
        // Get the view Fields
        view.ViewFields()
            .removeAllViewFields()
            .execute();
        // Parse the fields
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            // Get the view Fields
            view.ViewFields()
                .addViewField(field)
                .execute(true);
        }
        // Return the view
        return view;
    }
};
//# sourceMappingURL=list.js.map