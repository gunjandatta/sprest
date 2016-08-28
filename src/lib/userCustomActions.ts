/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // User Custom Actions
    /*********************************************************************************************************************************/
    Library.usercustomactions = {};
    Library.usercustomactions[RequestType.Get] = ["getById"];
    Library.usercustomactions[RequestType.Post] = ["clear"];
}
