import { IProfileLoader } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * Profile Loader
 */
export const ProfileLoader: IProfileLoader = ((targetInfo?: ITargetInfoProps) => {
    let profileLoader = new Base(targetInfo);

    // Default the properties
    profileLoader.targetInfo.defaultToWebFl = true;
    profileLoader.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
    profileLoader.targetInfo.method = "POST";

    // Add the methods
    Request.addMethods(profileLoader, { __metadata: { type: "profileloader" } });

    // Return the profile loader
    return profileLoader;
}) as any;