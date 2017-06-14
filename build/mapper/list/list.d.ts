/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare const list: {
    properties: string[];
    breakRoleInheritance: {
        argNames: string[];
        requestType: number;
    };
    delete: {
        requestType: number;
    };
    getChanges: {
        argNames: string[];
        metadataType: string;
        requestType: number;
    };
    getItemById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    getItems: {
        argNames: string[];
        requestType: number;
        data: {
            query: {
                __metadata: {
                    type: string;
                };
                ViewXml: string;
            };
        };
    };
    getItemsByQuery: {
        argNames: string[];
        name: string;
        requestType: number;
        data: {
            query: {
                __metadata: {
                    type: string;
                };
                ViewXml: string;
            };
        };
    };
    getListItemChangesSinceToken: {
        argNames: string[];
        metadataType: string;
        requestType: number;
    };
    getRelatedFields: {
        requestType: number;
    };
    getUserEffectivePermissions: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getViewById: {
        argNames: string[];
        name: string;
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
    renderListData: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    renderListFormData: {
        argNames: string[];
        requestType: number;
    };
    reserveListItemId: {
        requestType: number;
    };
    resetRoleInheritance: {
        requestType: number;
    };
    update: {
        metadataType: string;
        name: string;
        requestMethod: string;
        requestType: number;
    };
};
