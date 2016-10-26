declare module $REST.Settings {
    /**
     * OData Settings
     */
    interface ODataSettings {
        /** The fields to expand. */
        Expand?: Array<string>;

        /** The filters. */
        Filter?: Array<string>;

        /** The order by fields. */
        OrderBy?: Array<string>;

        /** The fields to select. */
        Select?: Array<string>;

        /** The number of results to skip. */
        Skip?: number;

        /** The max number of results to return. */
        Top?: number;
    }
}