import { Base } from "../utils";
import { IProfileLoader } from "./types";
import { ITargetInfo } from "../utils/types";

/**
 * Profile Loader
 */
export const ProfileLoader: IProfileLoader = ((targetInfo?: ITargetInfo) => {
    let profileLoader = new Base(targetInfo);

    // Default the properties
    profileLoader.targetInfo.defaultToWebFl = true;
    profileLoader.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
    profileLoader.targetInfo.method = "POST";

    // Add the methods
    profileLoader.addMethods(profileLoader, { __metadata: { type: "profileloader" } });

    // Return the profile loader
    return profileLoader;
}) as any;