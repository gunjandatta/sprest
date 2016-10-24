/// <reference path="requestType.ts" />
module $REST.Types {
    /**
     * Method Information Settings
     */
    export interface MethodInfoSettings {
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