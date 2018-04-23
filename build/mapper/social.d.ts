/**
 * People Manager
 */
export declare const peoplemanager: {
    amIFollowedBy: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    amIFollowing: {
        name: string;
        requestType: number;
    };
    follow: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    followTag: {
        argNames: string[];
        requestType: number;
    };
    getFollowedTags: {
        argNames: string[];
        requestType: number;
    };
    getFollowersFor: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getMyFollowers: {
        requestType: number;
    };
    getMyProperties: {
        requestType: number;
    };
    getMySuggestions: {
        requestType: number;
    };
    getPeopleFollowedBy: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getPeopleFollowedByMe: {
        requestType: number;
    };
    getPropertiesFor: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    getTrendingTags: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getUserProfilePropertyFor: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    hideSuggestion: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    isFollowing: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    setMyProfilePicture: {
        requestType: number;
    };
    stopFollowing: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    stopFollowingTag: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * Profile Loader
 */
export declare const profileloader: {
    createPersonalSiteEnqueueBulk: {
        argNames: string[];
        requestType: number;
    };
    getOwnerUserProfile: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
        returnType: string;
    };
    getUserProfile: {
        requestType: number;
        returnType: string;
    };
};
/**
 * Social Feed
 */
export declare const socialfeed: {
    actor: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    actorFeed: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    clearMyUnreadMentionCount: {
        name: string;
        requestType: number;
    };
    my: {
        name: string;
        requestType: number;
    };
    myFeed: {
        name: string;
        requestType: number;
    };
    myLikes: {
        name: string;
        requestType: number;
    };
    myMentionFeed: {
        name: string;
        requestType: number;
    };
    myNews: {
        name: string;
        requestType: number;
    };
    myTimelineFeed: {
        name: string;
        requestType: number;
    };
    myUnreadMentionCount: {
        name: string;
        requestType: number;
    };
};
/**
 * User Profile
 */
export declare const userprofile: {
    properties: string[];
    createPersonalSiteEnque: {
        argNames: string[];
        requestType: number;
    };
    shareAllSocialData: {
        argNames: string[];
        requestType: number;
    };
};
