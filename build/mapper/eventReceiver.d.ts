/**
 * Event Receiver
 */
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
/**
 * Event Receivers
 */
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
