import { IBase, ITargetInfo } from "../../utils/types";
import { IWeb } from ".";
export interface IUserProfile extends IBase<IUserProfile> {
    new (targetInfo?: ITargetInfo): IUserProfile;
    FollowedContent(): IBase<any>;
    AccountName: string;
    DisplayName: string;
    FollowPersonalSiteUrl: string;
    IsPeopleListPublic: boolean;
    IsPrivacySettingOn: boolean;
    IsSelf: boolean;
    JobTitle: string;
    MySiteFirstRunExperience: number;
    MySiteHostUrl: string;
    O15FirstRunExperience: number;
    PersonalSite(): IBase<IWeb>;
    PersonalSiteCapabilities: number;
    PersonalSiteFirstCreationError: string;
    PersonalSiteFirstCreationTime: string;
    PersonalSiteInstantiationState: number;
    PersonalSiteLastCreationTime: string;
    PersonalSiteNumberOfRetries: number;
    PictureImportEnabled: boolean;
    PictureUrl: string;
    PublicUrl: string;
    UrlToCreatePersonalSite: string;
    createPersonalSiteEnque(interactiveFl: boolean): IBase;
    shareAllSocialData(publicFl: boolean): IBase;
}
