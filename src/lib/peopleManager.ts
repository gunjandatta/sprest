/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // People Manager
    /*********************************************************************************************************************************/
    Library.peoplemanager = {};
    Library.peoplemanager[RequestType.Get] = [
        "amlFollowedBy", "amlFollowing", "getFollowedTags", "getFollowersFor", "getMyFollowers", "getMyProperties", "getMySuggestions",
        "getPeopleFollowedBy", "getPeopleFollowedByMe", "getPropertiesFor", "getUserProfilePropertyFor"
    ];
    Library.peoplemanager[RequestType.GetAppendMethodToEndPoint] = ["getTrendingTags", "isFollowing"];
    Library.peoplemanager[RequestType.Post] = ["follow", "followTag", "hideSuggestion", "stopFollowing", "stopFollowingTag"];
    Library.peoplemanager[RequestType.PostDataInBody] = ["setMyProfilePicture"];
}
