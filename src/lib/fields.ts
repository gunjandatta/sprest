/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Fields
    /*********************************************************************************************************************************/
    Library.fields = {};
    Library.fields[RequestType.Get] = ["getById", "getByInternalNameOrTitle"];
    Library.fields[RequestType.Post] = ["addDependentLookup"];
    Library.fields[RequestType.PostDataInBodyNoArgs] = ["addField", "createFieldAsXml"];
}
