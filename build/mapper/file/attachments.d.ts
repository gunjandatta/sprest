import { IBaseCollection } from "../../utils/index.def";
import { IAttachment, IAttachmentFilesMethods } from ".";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> {
}
