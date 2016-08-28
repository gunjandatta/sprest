/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Profile Loader
    /*********************************************************************************************************************************/
    Library.profileloader = {};
    Library.profileloader[RequestType.Post] = ["getOwnerUserProfile", "getUserProfile"];
    Library.profileloader[RequestType.PostDataInBody] = ["createPersonalSiteEnqueueBulk"];
}
