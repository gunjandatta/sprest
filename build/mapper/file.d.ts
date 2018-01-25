/**
 * Attachment
 */
export declare const attachment: {};
/**
 * Attachment Files
 */
export declare const attachmentfiles: {
    add: {
        argNames: string[];
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * File
 */
export declare const file: {
    properties: string[];
    approve: {
        argNames: string[];
        requestType: number;
    };
    cancelupload: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    checkin: {
        argNames: string[];
        requestType: number;
    };
    checkout: {
        requestType: number;
    };
    content: {
        name: string;
        requestType: number;
    };
    continueUpload: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    copyTo: {
        argNames: string[];
        requestType: number;
    };
    delete: {
        requestType: number;
    };
    deny: {
        argNames: string[];
        requestType: number;
    };
    finishUpload: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getlimitedwebpartmanager: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    moveTo: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    openBinaryStream: {
        requestType: number;
    };
    publish: {
        argNames: string[];
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    recycle: {
        requestType: number;
    };
    saveBinaryStream: {
        requestType: number;
    };
    startUpload: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    undoCheckOut: {
        requestType: number;
    };
    unpublish: {
        argNames: string[];
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
 * Files
 */
export declare const files: {
    add: {
        argNames: string[];
        requestType: number;
    };
    addTemplateFile: {
        argNames: string[];
        requestType: number;
    };
    getByUrl: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * File Version
 */
export declare const fileversion: {
    properties: any[];
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * File Versions
 */
export declare const fileversions: {
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Folder
 */
export declare const folder: {
    properties: string[];
    delete: {
        requestType: number;
    };
    getByUrl: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    recycle: {
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
 * Folders
 */
export declare const folders: {
    properties: string[];
    add: {
        argNames: string[];
        requestType: number;
    };
    getbyurl: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Limited Web Part Manager
 */
export declare const limitedwebpartmanager: {
    get_WebParts: {
        argNames: string[];
        name: string;
        requestType: number;
    };
};
