module $REST {
    /*********************************************************************************************************************************/
    // People Manager
    /*********************************************************************************************************************************/
    Library.peoplemanager = {};
    Library.peoplemanager[Types.RequestType.Get] = [
        "amlFollowedBy", "amlFollowing", "getFollowedTags", "getFollowersFor", "getMyFollowers", "getMyProperties", "getMySuggestions",
        "getPeopleFollowedBy", "getPeopleFollowedByMe", "getPropertiesFor", "getUserProfilePropertyFor"
    ];
    Library.peoplemanager[Types.RequestType.GetWithArgsInQS] = ["getTrendingTags", "isFollowing"];
    Library.peoplemanager[Types.RequestType.Post] = ["follow", "followTag", "hideSuggestion", "stopFollowing", "stopFollowingTag"];
    Library.peoplemanager[Types.RequestType.PostWithArgsInBody] = ["setMyProfilePicture"];
}
