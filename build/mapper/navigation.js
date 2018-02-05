"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.navigationservicerest = {
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],
    getMenuState: {
        argNames: ["menuNodeKey", "depth", "customProperties", "mapProviderName"],
        name: "MenuState",
        RequestType: utils_1.RequestType.GetWithArgsInQS
    }
};
//# sourceMappingURL=navigation.js.map