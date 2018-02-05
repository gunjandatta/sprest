import { IBase, ITargetInfo } from "../../utils/types";
import { ComplexTypes } from ".";
export interface IPersonProperties extends IBase<IPersonProperties> {
    AccountName: string;
    DirectReports: string;
    DisplayName: string;
    Email: string;
    ExtendedManagers: string;
    ExtendedReports: string;
    IsFollowed: boolean;
    LatestPost: string;
    Peers: string;
    PersonalUrl: string;
    PictureUrl: string;
    Title: string;
    UserProfileProperties: ComplexTypes.KeyValue;
    UserUrl: string;
}
export interface IPeopleManager extends IBase<IPeopleManager> {
    new (targetInfo?: ITargetInfo): IPeopleManager;
    EditProfileLink: string;
    IsMyPeopleListPublic: boolean;
    amIFollowedBy(accountName: string): IBase;
    amIFollowing(accountName: string): IBase;
    follow(accountName: string): IBase;
    followTag(id: string): IBase;
    getFollowedTags(maxCount: number): IBase;
    getFollowersFor(accountName: string): IBase<IPersonProperties>;
    getMyFollowers(): IBase<IPersonProperties>;
    getMyProperties(): IBase<IPersonProperties>;
    getMySuggestions(): IBase<IPersonProperties>;
    getPeopleFollowedBy(accountName: string): IBase<IPersonProperties>;
    getPeopleFollowedByMe(): IBase<IPersonProperties>;
    getPropertiesFor(accountName: string): IBase<IPersonProperties>;
    getTrendingTags(): IBase;
    getUserProfilePropertyFor(accountName: string, propertyName: string): IBase<IPersonProperties>;
    hideSuggestion(accountName: string): IBase;
    isFollowing(possibleFollowerAccountName: string, possibleFolloweeAccountName: string): IBase;
    setMyProfilePicture(stream: any): IBase;
    stopFollowing(accountName: string): IBase;
    stopFollowingTag(id: string): IBase;
}
