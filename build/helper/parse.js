"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.parse = function (jsonString) {
    try {
        var obj = JSON.parse(jsonString);
        var base = new utils_1.Base(obj.props);
        base.response = obj.response;
        base.status = obj.status;
        base.updateDataObject(false);
        return base;
    }
    catch (_a) { }
    return null;
};
//# sourceMappingURL=parse.js.map