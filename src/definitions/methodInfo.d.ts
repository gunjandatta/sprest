import {RequestType} from "../types";
import {IBase} from ".";

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
    requestType: RequestType;
    returnType?: string;
}