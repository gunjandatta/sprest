/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Content Types
    /*********************************************************************************************************************************/
    Library.contenttypes = {};
    Library.contenttypes[RequestType.Get] = ["getById"];
    Library.contenttypes[RequestType.Post] = ["addAvailableContentType"];
    Library.contenttypes[RequestType.PostDataInBodyNoArgs] = ["add"];
}
