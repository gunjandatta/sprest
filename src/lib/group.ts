/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Group
    /*********************************************************************************************************************************/
    Library.group = {};
    Library.group[RequestType.Custom] = [
        { name: "containsUser", "function": function (user) { return this.executeGet("users?$filter=Id eq " + user.Id).exists; } }
    ];
}
