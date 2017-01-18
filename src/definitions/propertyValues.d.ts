declare module "gd-sprest" {
    export namespace Types {
        /**
         * Property Values
         */
        export interface IPropertyValues extends Types.IBase, ComplexTypes.KeyValue {
            /**
             * Queries the collection.
             * @param oData - The OData information.
             */
            query(oData:ComplexTypes.ODataQuery): IPropertyValues;
        }
    }
}