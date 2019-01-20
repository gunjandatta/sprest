import { SP } from "gd-sprest-def";
import { IBaseExecution } from "../../utils/types/base";

/**
 * Limited Web Part Manager
 */
export interface ILimitedWebPartManager extends SP.WebParts.LimitedWebPartManager, IBaseExecution<ILimitedWebPartManager, ILimitedWebPartManager> {
    /**
     * Gets a webpart by its id.
     * @param id - The web part id.
     */
    WebParts(id): IBaseExecution;
}