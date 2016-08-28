/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    Library. = {};
    Library.[RequestType] = [
    ];
}
                get: ["getById", "getByInternalNameOrTitle"],

                post: ["addDependentLookup"],

                postDataInBodyNoArgs: ["addField", "createFieldAsXml"]
