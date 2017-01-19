/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare const fields: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    addField: {
        argNames: string[];
        metadataType: string;
        name: string;
        requestType: number;
    };
    addDependentLookupField: {
        argNames: string[];
        requestType: number;
    };
    createFieldAsXml: {
        argNames: string[];
        requestType: number;
        data: {
            parameters: {
                __metadata: {
                    type: string;
                };
                Options: number;
                SchemaXml: string;
            };
        };
    };
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getByInternalNameOrTitle: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getByTitle: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
