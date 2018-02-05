import { IBase, ITargetInfo } from "../../utils/types";
import { IUserProfile } from ".";
export interface IProfileLoader extends IBase<IProfileLoader> {
    new (targetInfo?: ITargetInfo): IProfileLoader;
    createPersonalSiteEnqueueBulk(emailIDs: Array<string>): IBase;
    getOwnerUserProfile(): IBase<IUserProfile>;
    getUserProfile(): IBase<IUserProfile>;
}
