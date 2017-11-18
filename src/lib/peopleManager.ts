import { IPeopleManager } from "../definitions/index";
import { Base } from "../utils/index";

/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
class _PeopleManager extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplemanager" } });
    }
}
export const PeopleManager: IPeopleManager = <any>_PeopleManager;