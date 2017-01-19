import {
    ContextInfo,
    Email,
    Helper,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
} from ".";

/**
 * SharePoint REST Library
 */
export const $REST = {
    ContextInfo,
    DefaultRequestToHostFl: false,
    Email,
    Helper,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    Search,
    Site,
    SocialFeed,
    UserProfile,
    Web
}

// Make the library globally available
window["$REST"] = $REST;