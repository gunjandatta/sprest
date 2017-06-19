/**
 * OData Settings
 */
export interface ODataQuery {
    /** An optional custom query string */
    Custom?: string;
    /** The fields to expand. */
    Expand?: Array<string>;
    /** The filters. */
    Filter?: string;
    /**
     * Flag to get all items.
     * Use this flag to get past the 5000 limit.
     */
    GetAllItems?: boolean;
    /** The order by fields. */
    OrderBy?: Array<string>;
    /** The fields to select. */
    Select?: Array<string>;
    /** The number of results to skip. */
    Skip?: number;
    /** The max number of results to return. */
    Top?: number;
}
