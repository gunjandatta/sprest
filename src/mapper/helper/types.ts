/**
 * Helper Types
 */
export interface IHelperTypes {
    /** The field types */
    SPCfgFieldType: {
        Boolean: number;
        Calculated: number;
        Choice: number;
        Date: number;
        Lookup: number;
        MMS: number;
        Note: number;
        Number: number;
        Text: number;
        Url: number;
        User: number;
    };

    /** The configuration types */
    SPCfgType: {
        Fields: number;
        ContentTypes: number;
        Lists: number;
        SiteUserCustomActions: number;
        WebParts: number;
        WebUserCustomActions: number;
    };
}