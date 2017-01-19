"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.Post,
        returnType: "userprofile"
    },
    getUserProfile: {
        requestType: types_1.RequestType.Post,
        returnType: "userprofile"
    },
};
//# sourceMappingURL=profileLoader.js.map