module $REST {
    /*********************************************************************************************************************************/
    // User Profile
    /*********************************************************************************************************************************/
    Library.userprofile = {};
    Library.userprofile[Types.RequestType.Post] = ["createPersonalSiteEnque", "shareAllSocialData"];
    Library.userprofile[Types.RequestType.Custom] = [
        { name: "getOneDriveUrl", "function": function () { return this.FollowPersonalSiteUrl + "_layouts/15/onedrive.aspx" } }
    ];
}
