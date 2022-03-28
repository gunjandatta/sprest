import { RoleDefinition, RoleDefinitionCreationInformation } from "gd-sprest-def/lib/SP";

/**
 * Properties
 */
export interface IcopyPermissionLevelProps extends RoleDefinitionCreationInformation {
    AddPermissions?: Array<number>;
    Description: string;
    BasePermission: string;
    Order?: number;
    Name: string;
    RemovePermissions?: Array<number>;
    WebUrl?: string;
}

/**
 * Copies a permission level to the current or specified web.
 * @props properties
 */
export const copyPermissionLevel: IcopyPermissionLevel;
export interface IcopyPermissionLevel {
    (props: IcopyPermissionLevelProps): PromiseLike<RoleDefinition>;
}