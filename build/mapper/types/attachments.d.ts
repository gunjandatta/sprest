import { IBaseCollection } from "../../utils/types";
import { IAttachment, IAttachmentFilesMethods } from ".";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> {
}
