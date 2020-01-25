import { IPeopleManager } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { Base, Request } from "../utils";

/**
 * People Manager
 */
export const PeopleManager: IPeopleManager = ((targetInfo?: ITargetInfoProps) => {
    let peopleManager = new Base(targetInfo);

    // Default the properties
    peopleManager.targetInfo.defaultToWebFl = true;
    peopleManager.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

    // Add the methods
    Request.addMethods(peopleManager, { __metadata: { type: "SP.UserProfiles.PeopleManager" } });

    // Return the people manager
    return peopleManager;
}) as any;
