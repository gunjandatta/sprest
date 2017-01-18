declare module "gd-sprest" {
    export namespace Types {
        /**
         * Field Link
         */
        export interface IFieldLink extends Types.IBase {
            /**
             * Properties
             */

            DisplayName: string;

            FieldInternalName: string;

            Hidden: boolean;

            Id: string;

            Name: string;

            ReadOnly: boolean;

            Required: boolean;

            ShowInDisplayForm: boolean;
        }
    }
}