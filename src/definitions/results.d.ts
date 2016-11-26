declare module $REST.Results {
    /**
     * App License
     */
    interface AppLicense {
        /** The collection of app licenses. */
        results: Array<ComplexTypes.AppLicense>;
    }

    /**
     * Creatable Item Information
     */
    interface CreatableItemInfo {
        /** The collection of creatable item information. */
        results: Array<ComplexTypes.CreatableItemInfoCollection>;
    }

    /**
     * Custom Action Element
     */
    interface CustomActionElement {
        /** The collection of custom action elements. */
        results: Array<ComplexTypes.CustomActionElement>;
    }

    /**
     * Data Row
     */
    interface DataRow {
        /** The collection of data rows. */
        results: Array<ComplexTypes.SimpleDataRow>;
    }

    /**
     * Key/Value
     */
    interface KeyValue {
        /** The collection of key-value pairs. */
        results: Array<ComplexTypes.KeyValue>;
    }

    /**
     * List Data Validation Failure
     */
    interface ListDataValidationFailure {
        /** The collection of list data validation failures. */
        results: Array<ComplexTypes.ListDataValidationFailure>;
    }

    /**
     * Menu Node
     */
    interface MenuNode {
        /** The collection of menu nodes. */
        results: Array<ComplexTypes.MenuNode>;
    }

    /**
     * Parameter Information
     */
    interface ParameterInformation {
        /** The collection of parameter information. */
        results: Array<ComplexTypes.ParameterInformation>;
    }

    /**
     * Shared User
     */
    interface SharedWithUser {
        /** The collection of shared users. */
        results: Array<ComplexTypes.SharedWithUser>
    }

    /**
     * String Collection
     */
    interface String {
        /** The collection of strings. */
        results: Array<string>;
    }

    /**
     * Visualization Field
     */
    interface VisualizationField {
        /** The collection of visualization fields. */
        results: Array<ComplexTypes.VisualizationField>;
    }
}