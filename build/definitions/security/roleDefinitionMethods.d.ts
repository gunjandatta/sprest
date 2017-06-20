import { IBase, IRoleDefinition } from "..";
/**
 * Role Definition Methods
 */
export interface IRoleDefinitionMethods extends IBase<IRoleDefinition> {
    /**
     * Deletes the role definition.
     */
    delete(): IBase;
}
