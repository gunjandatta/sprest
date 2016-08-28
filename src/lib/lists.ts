/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Lists
    /*********************************************************************************************************************************/
    Library.lists = {};
    Library.lists[RequestType.Get] = ["getById"];
    Library.lists[RequestType.Post] = ["ensureSiteAssetsLibrary", "ensureSitePagesLibrary"];
}
