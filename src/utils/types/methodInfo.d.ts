/**
 * Method Information Settings
 */
export interface IMethodInfo {
    argNames?: Array<string>;
    argValues?: Array<any>;
    data?: any;
    getAllItemsFl?: boolean;
    inheritMetadataType?: boolean;
    metadataType?: string;
    name?: string;
    replaceEndpointFl?: boolean;
    requestMethod?: string;
    requestType?: number;
    returnType?: string;
}
