declare module $REST.Types {

    /**
     * Property Values
     */
    interface IPropertyValues extends IBase, Results.KeyValue {
        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): IPropertyValues;
    }
}