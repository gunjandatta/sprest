declare module $REST.Types {
    /**
     * View Fields
     */
    interface IViewFields extends IBase {
        /**
         * Properties
         */

        /** Gets a value that specifies the XML schema that represents the collection. */
        SchemaXml: string;

        /** Specifies the XML schema of the collection of fields. The Items property is returned with the resource, but it doesn't have a URI-addressable endpoint. */
        Items: string;

        /** The view field collection. */
        results: Array<IViewFields>;

        /**
         * Methods
         */

        /**
         * Adds the field with the specified field internal name or display name to the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        addViewField(fieldName): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) For asynchronous requests, the method to be executed after the request completes.
         */
        execute(callback?:(IViewFields) => void): IViewFields;

        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         * @param field - The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example.
         * @param index - The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example.
         */
        moveViewFieldTo(field, index): any;

        /**
         * Removes all the fields from the collection.
         */
        removeAllViewFields(): any;

        /**
         * Removes the field with the specified field internal name from the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        removeViewField(fieldName): any;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IViewFields;
    }
}
