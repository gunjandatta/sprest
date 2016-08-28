/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Versions
    /*********************************************************************************************************************************/
    Library.versions = {};
    Library.versions[RequestType.Get] = ["getById"];
    Library.versions[RequestType.Post] = ["deleteAll", "deleteById", "deleteByLabel", "restoreByLabel"];
}
