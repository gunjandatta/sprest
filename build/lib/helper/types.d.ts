export interface ITypes {
    /** The configuration types */
    ConfigType: {
        Fields: number;
        ContentTypes: number;
        Lists: number;
        SiteUserCustomActions: number;
        WebParts: number;
        WebUserCustomActions: number;
    };
    /** The field types */
    FieldType: {
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
}
export declare const Types: ITypes;
