declare module GD.Types {
    /**
     * Field Link
     */
    interface IFieldLink extends IBase {
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