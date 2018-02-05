import { IBase } from "../../utils/types";
import { Types } from "../..";
export interface ISocialFeed {
    actor(accountName: string): IBase<ISocialRestActor>;
    actorFeed(accountName: string): IBase<ISocialRestThread>;
    clearMyUnreadMentionCount(): IBase;
    my(): IBase<ISocialRestActor>;
    myFeed(): IBase<ISocialRestFeed>;
    myLikes(): IBase<ISocialRestFeed>;
    myMentionFeed(): IBase<ISocialRestFeed>;
    myNews(): IBase<ISocialRestFeed>;
    myTimelineFeed(): IBase<ISocialRestFeed>;
    myUnreadMentionCount(): IBase<ISocialRestFeed>;
    postToFeed(accountName: string, postInfo: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
    postToMyFeed(creationData: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
}
export interface ISocialRestActor extends IBase<ISocialRestActor> {
    FollowableItem?: string;
    FollwableItemActor: Types.SP.ComplexTypes.SocialActor;
    Me: Types.SP.ComplexTypes.SocialActor;
    clearUnreadMentionCount(): IBase<ISocialRestFeed>;
}
export interface ISocialRestFeed extends IBase<ISocialRestFeed> {
    SocialFeed: Types.SP.ComplexTypes.SocialFeed;
    post(postInfo: Types.SP.ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
}
export interface ISocialRestThread extends IBase<ISocialRestThread> {
    ID?: string;
    SocialThread: Types.SP.ComplexTypes.SocialThread;
    delete(): IBase<ISocialRestThread>;
    reply(restCreationData: Types.SP.ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
}
