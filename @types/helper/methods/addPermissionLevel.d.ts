import { RoleDefinition, RoleDefinitionCreationInformation } from "gd-sprest-def/lib/SP";

/**
 * Properties
 */
export interface IaddPermissionLevelProps extends RoleDefinitionCreationInformation {
    Permissions: Array<number>;
    Name: string;
    Order?: number;
    WebUrl?: string;
}

/**
 * Adds a permission level to the current or specified web.
 * @props properties
 */
export const addPermissionLevel: IaddPermissionLevel;
export interface IaddPermissionLevel {
    (props: IaddPermissionLevelProps): PromiseLike<RoleDefinition>;
}