module $REST {
    /*********************************************************************************************************************************/
    // Social Feed
    /*********************************************************************************************************************************/
    export class SocialFeed {
        static Actor(accountName:string) {
            return new $REST.SocialRestActor(accountName);
        }

        static My() {
            return new $REST.SocialRestActor();
        }

        static Post(id) {
            return new $REST.SocialRestThread(id);
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/

    Library.socialfeed = {
        properties: ["Actor|socialrestactor", "My|socialrestactor", "Post|socialrestthread"]
    }
}