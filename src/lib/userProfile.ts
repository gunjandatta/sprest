import { IUserProfile } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * User Profile
 */
export const UserProfile: IUserProfile = ((targetInfo?: ITargetInfoProps) => {
    let userProfile = new Base(targetInfo);

    // Default the properties
    userProfile.targetInfo.defaultToWebFl = true;
    userProfile.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
    userProfile.targetInfo.method = "POST";

    // Add the methods
    Request.addMethods(userProfile, { __metadata: { type: "SP.UserProfiles.UserProfile" } });

    // Return the user profile
    return userProfile;
}) as any as IUserProfile;