/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    Library.field = {};
    Library.field[RequestType.Post] = ["deleteObject", "setShowInDisplayForm", "setShowInEditForm", "setShowInNewForm"];
    Library.field[RequestType.Custom] = [    
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Field", "MERGE"); } }
    ];
}
