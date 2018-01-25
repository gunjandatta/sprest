import { IBaseCollection } from "../../utils/index.def";
import { IAttachment, IAttachmentFiles, IAttachmentFilesMethods } from ".";

/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> { }