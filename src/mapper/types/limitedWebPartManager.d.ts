import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";

/**
 * Limited Web Part Manager
 */
export interface ILimitedWebPartManager extends SP.WebParts.LimitedWebPartManager, IBaseLib<ILimitedWebPartManager, ILimitedWebPartManager> {
    /**
     * Gets a webpart by its id.
     * @param id - The web part id.
     */
    WebParts(id): IBaseLib;
}