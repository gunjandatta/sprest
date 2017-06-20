import { IRoleDefinitionMethods } from "./roleDefinitionMethods";
import {
    IBasePermissions,
    SPTypes
} from "..";

/**
 * Role Definition
 */
export interface IRoleDefinition extends IRoleDefinitionMethods {
    /** Gets or sets a value that specifies the base permissions for the role definition. */
    BasePermissions: IBasePermissions;

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
}