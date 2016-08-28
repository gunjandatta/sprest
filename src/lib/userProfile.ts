/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // User Profile
    /*********************************************************************************************************************************/
    Library.userprofile = {};
    Library.userprofile[RequestType.Post] = ["createPersonalSiteEnque", "shareAllSocialData"];
    Library.userprofile[RequestType.Custom] = [
        { name: "getOneDriveUrl", "function": function () { return this.FollowPersonalSiteUrl + "_layouts/15/onedrive.aspx" } }
    ];
}
