import { IBaseExecution } from "gd-sprest-def/lib/base";
import { ISensitivityLabelCollection } from "gd-sprest-def/lib/SP/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/sp.sensitivitylabelcollection
 */
export const SensitivityLabels: ISensitivityLabels;

/**
 * Sensitivity Label Collection
 * @category Sensitivity Label Collection
 */
export interface ISensitivityLabels {
    /**
     * Creates an instance of the navigation library.
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): IBaseExecution<ISensitivityLabelCollection>;
}