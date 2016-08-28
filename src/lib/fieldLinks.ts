/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Field Links
    /*********************************************************************************************************************************/
    Library.fieldlinks = {};
    Library.fieldlinks[RequestType.Get] = ["getById"];
    Library.fieldlinks[RequestType.PostDataInBodyNoArgs] = ["add"];
}
