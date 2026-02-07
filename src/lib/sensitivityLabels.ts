import { ISensitivityLabels } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Sensitivity Labels
 */
export const SensitivityLabels: ISensitivityLabels = ((targetInfo?: ITargetInfoProps) => {
    let sensitivityLabels = new Base(targetInfo);

    // Default the properties
    sensitivityLabels.targetInfo.defaultToWebFl = true;
    sensitivityLabels.targetInfo.endpoint = "sp.sensitivitylabelcollection";

    // Add the methods
    Request.addMethods(sensitivityLabels, { __metadata: { type: "SP.SensitivityLabelCollection" } });

    // Return the sensitivity labels
    return sensitivityLabels;
}) as any as ISensitivityLabels;