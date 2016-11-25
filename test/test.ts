/// <reference path="../dist/sprest.d.ts" />

// TO DO
let props = (new $REST.PeopleManager()).getMyProperties().execute();
for(let prop of props.UserProfileProperties.results) {
    prop.Key;
}

let up = (new $REST.ProfileLoader()).getUserProfile().execute();
up.AccountName;
