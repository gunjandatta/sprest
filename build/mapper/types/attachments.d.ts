import { IBaseCollection } from "../../utils/types";
import { IAttachment, IAttachmentFilesMethods } from ".";
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> {
}
