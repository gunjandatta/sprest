export declare const eventreceiver: {
    delete: {
        requestType: number;
    };
    update: {
        metadataType: string;
        name: string;
        requestMethod: string;
        requestType: number;
    };
};
export declare const eventreceivers: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
