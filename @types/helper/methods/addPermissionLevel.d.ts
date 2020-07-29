import { RoleDefinition, RoleDefinitionCreationInformation } from "gd-sprest-def/lib/SP";

/**
 * Properties
 */
export interface IaddPermissionLevelProps extends RoleDefinitionCreationInformation {
    BasePermissions: Array<number>;
    WebUrl?: string;
}

/**
 * Adds a permission level to the current or specified web.
 * @props properties
 */
export const addPermissionLevel: IaddPermissionLevel;
export interface IaddPermissionLevel {
    (props: Props): PromiseLike<RoleDefinition>;
}