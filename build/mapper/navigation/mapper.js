"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * Navigation
 */
exports.navigationservicerest = {
    /**
     * Properties
     */
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],
    /**
     * Methods
     */
    // Method to get the menu state.
    getMenuState: {
        argNames: ["menuNodeKey", "depth", "customProperties", "mapProviderName"],
        name: "MenuState",
        RequestType: types_1.RequestType.GetWithArgsInQS
    }
};
//# sourceMappingURL=mapper.js.map