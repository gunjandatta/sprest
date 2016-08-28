/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Site Groups
    /*********************************************************************************************************************************/
    Library.siteGroups = {};
    Library.siteGroups[RequestType.Get] = ["getById", "getByName"];
    Library.siteGroups[RequestType.Post] = ["removeById", "removeByLoginName"];
}
