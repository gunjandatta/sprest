declare module "gd-sprest" {
    /**
     * Method Information Settings
     */
    export interface MethodInfoSettings {
        argNames?: Array<string>;
        argValues?: Array<any>;
        data?: any;
        getAllItemsFl?: boolean;
        inheritMetadataType?: boolean;        
        metadataType?: string;
        name: string;
        replaceEndpointFl?: boolean;
        requestMethod?: string;
        requestType: number;
        returnType?: string;
    }
}