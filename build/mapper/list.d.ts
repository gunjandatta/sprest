/**
 * Content Type
 */
export declare const contenttype: {
    properties: string[];
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
 * Content Types
 */
export declare const contenttypes: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    addAvailableContentType: {
        argNames: string[];
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
/**
 * Field
 */
export declare const field: {
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    setShowInDisplayForm: {
        argNames: string[];
        requestType: number;
    };
    setShowInEditForm: {
        argNames: string[];
        requestType: number;
    };
    setShowInNewForm: {
        argNames: string[];
        requestType: number;
    };
    update: {
        inheritMetadataType: boolean;
        name: string;
        requestMethod: string;
        requestType: number;
    };
};
/**
 * Field Links
 */
export declare const fieldlinks: {
    add: {
        argNames: string[];
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
/**
 * Fields
 */
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
/**
 * Items
 */
export declare const items: {
    add: {
        metadataType: (obj: any) => any;
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
/**
 * List
 */
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
/**
 * List Item
 */
export declare const listitem: {
    properties: string[];
    breakRoleInheritance: {
        argNames: string[];
        requestType: number;
    };
    delete: {
        requestType: number;
    };
    getUserEffectivePermissions: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    recycle: {
        requestType: number;
    };
    resetRoleInheritance: {
        requestType: number;
    };
    update: {
        inheritMetadataType: boolean;
        name: string;
        requestMethod: string;
        requestType: number;
    };
    validateUpdateListItem: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Lists
 */
export declare const lists: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    ensureSiteAssetsLibrary: {
        requestType: number;
    };
    ensureSitePagesLibrary: {
        requestType: number;
    };
    getById: {
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
/**
 * Version
 */
export declare const version: {
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    deleteAll: {
        requestType: number;
    };
    deleteById: {
        argNames: string[];
        requestType: number;
    };
    deleteByLabel: {
        argNames: string[];
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    restoreByLabel: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * View
 */
export declare const view: {
    properties: string[];
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    renderAsHtml: {
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
 * View Field Collection
 */
export declare const viewfieldcollection: {
    addViewField: {
        argNames: string[];
        requestType: number;
    };
    moveViewFieldTo: {
        argNames: string[];
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    removeAllViewFields: {
        requestType: number;
    };
    removeViewField: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Views
 */
export declare const views: {
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
