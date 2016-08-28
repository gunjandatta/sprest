/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Files
    /*********************************************************************************************************************************/
    Library.files = {};
    Library.files[RequestType.Get] = ["getByTitle", "getByUrl"];
    Library.files[RequestType.PostDataInBody] = ["add", "addTemplateFile"];
}
