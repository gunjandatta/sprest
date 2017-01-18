declare module "gd-sprest" {
    export namespace Types {
        /**
         * Limited Web Part Manager
         */
        export interface ILimitedWebPartManager extends Types.IBase {
            /**
             * Properties
             */

            HasPersonalizedParts: boolean;

            Scope: number;

            /**
             * Methods
             */

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             */
            execute(callback?:(...args) => any): ILimitedWebPartManager;

            /**
             * Method to execute the request.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(waitFl:boolean): ILimitedWebPartManager;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(callback:any, waitFl:boolean): ILimitedWebPartManager;

            /**
             * Method to execute the request synchronously.
             */
            executeAndWait(): ILimitedWebPartManager;

            /**
             * Gets a webpart by its id.
             * @param id - The web part id.
             */
            WebParts(id);
        }
    }
}