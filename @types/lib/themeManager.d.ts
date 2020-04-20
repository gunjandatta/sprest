import * as SP from "gd-sprest-def/lib/SP/Utilities/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/ThemeManager
 */
export const ThemeManager: IThemeManager;

/**
 * Theme Manager
 * @category Theme Manager
 */
export interface IThemeManager {
    /**
     * Creates an instance of the user profile library.
     * @param targetInfo - (Optional) The target information.
     */
    (targetInfo?: ITargetInfoProps): SP.IThemeManager;
}