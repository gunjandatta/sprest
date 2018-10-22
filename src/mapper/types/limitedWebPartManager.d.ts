import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/types";

/**
 * Limited Web Part Manager
 */
export interface ILimitedWebPartManager extends SP.WebParts.LimitedWebPartManager, IBase<ILimitedWebPartManager, ILimitedWebPartManager> {
    /**
     * Gets a webpart by its id.
     * @param id - The web part id.
     */
    WebParts(id): IBase;
}