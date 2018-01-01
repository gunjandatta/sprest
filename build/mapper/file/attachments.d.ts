import { IBaseCollection } from "../../utils";
import { IAttachment, IAttachmentFilesMethods } from ".";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> {
}
