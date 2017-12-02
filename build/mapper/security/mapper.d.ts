/**
 * Role Assignment
 */
export declare const roleassignment: {
    properties: string[];
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Role Assignments
 */
export declare const roleassignments: {
    addRoleAssignment: {
        argNames: string[];
        requestType: number;
    };
    getByPrincipalId: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
    removeRoleAssignment: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Role Definition
 */
export declare const roledefinition: {
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Role Definitions
 */
export declare const roledefinitions: {
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
    getByType: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
