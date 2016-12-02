declare module GD.ComplexTypes {

    /**
     * Method Information Settings
     */
    interface MethodInfoSettings {
        argNames?: Array<string>;
        argValues?: Array<any>;
        data?: any;
        inheritMetadataType?: boolean;        
        metadataType?: string;
        name: string;
        replaceEndpointFl?: boolean;
        requestMethod?: string;
        requestType: GD.Types.RequestType;
        returnType?: string;
    }
}