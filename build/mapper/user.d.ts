export declare const group: {
    properties: string[];
    query: {
        argNames: string[];
        requestType: number;
    };
};
export declare const sitegroups: {
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
    getByName: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    removeById: {
        argNames: string[];
        requestType: number;
    };
    removeByLoginName: {
        argNames: string[];
        requestType: number;
    };
};
export declare const peoplepicker: {
    clientPeoplePickerResolveUser: {
        argNames: string[];
        metadataType: string;
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    clientPeoplePickerSearchUser: {
        argNames: string[];
        metadataType: string;
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
};
export declare const user: {
    properties: string[];
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
export declare const users: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    getByEmail: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getByLoginName: {
        argNames: string[];
        name: string;
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    removeById: {
        argNames: string[];
        requestType: number;
    };
    removeByLoginName: {
        argNames: string[];
        name: string;
        requestType: number;
    };
};
