"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
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
        RequestType: utils_1.RequestType.GetWithArgsInQSAsVar
    }
};
