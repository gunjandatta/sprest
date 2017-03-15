import {
    ComplexTypes,
    IBase,
    SPTypes
} from ".";
/**
 * Role Definition
 */
export interface IRoleDefinition extends IBase {
    /**
     * Properties
     */

    /** Gets or sets a value that specifies the base permissions for the role definition. */
    BasePermissions: ComplexTypes.BasePermissions;

    /** Gets or sets a value that specifies the description of the role definition. */
    Description: string;

    /** Gets a value that specifies whether the role definition is displayed. */
    Hidden: boolean;

    /** Gets a value that specifies the Id of the role definition. */
    Id: number;

    /** Gets or sets a value that specifies the role definition name. */
    Name: string;

    /** Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page. */
    Order: number;

    /** Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values. */
    RoleTypeKind: SPTypes.RoleType | number;

    /**
     * Methods
     */

    /**
     * Deletes the role definition.
     */
    delete(): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?:(...args) => any): IRoleDefinition;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl:boolean): IRoleDefinition;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback:any, waitFl:boolean): IRoleDefinition;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IRoleDefinition;
}