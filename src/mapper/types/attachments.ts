import { IBase, IBaseCollection } from "../../utils/types";
import { IAttachment, IAttachmentFiles, IAttachmentFilesMethods } from ".";

/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment> { }