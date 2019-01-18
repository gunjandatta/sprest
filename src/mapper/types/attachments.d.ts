import { SP } from "gd-sprest-def";
import { IBaseCollection } from "../../utils/base/types";
import { IAttachmentFiles, IAttachmentFilesMethods } from ".";

/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<SP.Attachment> { }