declare module $REST.Types {

    /**
     * Property Values
     */
    interface IPropertyValues extends IBase {
        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IPropertyValues;
    }
}