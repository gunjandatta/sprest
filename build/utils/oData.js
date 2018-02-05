"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OData = (function () {
    function OData(oData) {
        this._custom = oData && oData.Custom ? oData.Custom : null;
        this._expand = oData && oData.Expand ? oData.Expand : [];
        this._filter = oData && oData.Filter ? oData.Filter : null;
        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
        this._select = oData && oData.Select ? oData.Select : [];
        this._skip = oData && oData.Skip ? oData.Skip : null;
        this._top = oData && oData.Top ? oData.Top : null;
    }
    Object.defineProperty(OData.prototype, "Custom", {
        get: function () { return this._custom; },
        set: function (value) { this._custom = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Expand", {
        get: function () { return this._expand; },
        set: function (value) { this._expand = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Filter", {
        get: function () { return this._filter; },
        set: function (value) { this._filter = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "GetAllItems", {
        get: function () { return this._getAllItems; },
        set: function (value) { this._getAllItems = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "OrderBy", {
        get: function () { return this._orderBy; },
        set: function (value) { this._orderBy = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "QueryString", {
        get: function () {
            var qs = "";
            var values = [];
            values.push(this.getQSValue("$select", this._select));
            values.push(this.getQSValue("$orderby", this._orderBy));
            this._top ? values.push("$top=" + this._top) : null;
            this._skip ? values.push("$skip=" + this._skip) : null;
            this._filter ? values.push("$filter=" + this._filter) : null;
            values.push(this.getQSValue("$expand", this._expand));
            this._custom ? values.push(this._custom) : null;
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (value && value != "") {
                    qs += (qs == "" ? "" : "&") + value;
                }
            }
            return qs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Select", {
        get: function () { return this._select; },
        set: function (value) { this._select = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Skip", {
        get: function () { return this._skip; },
        set: function (value) { this._skip = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Top", {
        get: function () { return this._top; },
        set: function (value) { this._top = value; },
        enumerable: true,
        configurable: true
    });
    OData.prototype.getQSValue = function (qsKey, keys) {
        return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
    };
    return OData;
}());
exports.OData = OData;
//# sourceMappingURL=oData.js.map