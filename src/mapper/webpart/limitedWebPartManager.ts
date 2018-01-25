import { IBase } from "../../utils/index.def";

/**
 * Limited Web Part Manager
 */
export interface ILimitedWebPartManager extends IBase<ILimitedWebPartManager, ILimitedWebPartManager> {
    /**
     * Properties
     */

    HasPersonalizedParts: boolean;

    Scope: number;

    /**
     * Methods
     */

    /**
     * Gets a webpart by its id.
     * @param id - The web part id.
     */
    WebParts(id): IBase;
}