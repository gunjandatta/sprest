declare module "gd-sprest" {
    export namespace Types {
        /**
         * Field Links
         */
        export interface IFieldLinks extends Types.IBase {
            /**
             * Properties
             */

            /** The field link collection. */
            results: Array<IFieldLink>;

            /**
             * Methods
             */

            /**
             * Adds a content type to the collection.
             * @param data - The field link properties.
             */
            add(data): Types.IBase;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             */
            execute(callback?:(...args) => any): IFieldLinks;

            /**
             * Method to execute the request.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(waitFl:boolean): IFieldLinks;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(callback:any, waitFl:boolean): IFieldLinks;

            /**
             * Method to execute the request synchronously.
             */
            executeAndWait(): IFieldLinks;

            /**
             * Gets the field link by its id.
             * @param id - The id of the field.
             */
            getById(id);

            /**
             * Method to get the next set of results.
             */
            next(): IFieldLinks;

            /**
             * Queries the collection.
             * @param oData - The OData information.
             */
            query(oData:ComplexTypes.ODataQuery): IFieldLinks;
        }
    }
}