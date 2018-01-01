import { IBaseCollection } from "../../utils";
import { IAttachment, IAttachmentFiles, IAttachmentFilesMethods } from ".";

/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> { }