declare module GD.ComplexTypes {
    /**
     * OData Settings
     */
    interface ODataQuery {
        /** The fields to expand. */
        Expand?: Array<string>;

        /** The filters. */
        Filter?: string;

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