declare module $REST.Types {
    /**
     * Method Information Settings
     */
    interface MethodInfoSettings {
        argNames?:[string];
        argValues?:[any];
        data?:any;
        inheritMetadataType?:boolean;        
        metadataType?:string;
        name:string;
        replaceEndpointFl?:boolean;
        requestMethod?:string;
        requestType:Types.RequestType;
    }
}