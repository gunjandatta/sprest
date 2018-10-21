import { SP } from "gd-sprest-def";
import { IBaseCollection } from "../../utils/types";
import { IAttachmentFilesMethods } from ".";
/**
 * Attachment Files
 */
export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<SP.Attachment> {
}
