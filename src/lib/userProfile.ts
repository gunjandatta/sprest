import { Base, Helper } from "../utils";
import { IUserProfile } from "./types";
import { ITargetInfoProps } from "../utils/types";

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
    Helper.addMethods(userProfile, { __metadata: { type: "userprofile" } });

    // Return the user profile
    return userProfile;
}) as any as IUserProfile;