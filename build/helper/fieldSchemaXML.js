"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var __1 = require("..");
var spCfg_1 = require("./spCfg");
var _FieldSchemaXML = (function () {
    function _FieldSchemaXML() {
        var _this = this;
        this._resolve = null;
        this.generate = function (fieldInfo) {
            return new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                if (fieldInfo.schemaXml) {
                    resolve(fieldInfo.schemaXml);
                }
                else {
                    var props = {};
                    props["ID"] = "{" + lib_1.ContextInfo.generateGUID() + "}";
                    props["Name"] = fieldInfo.name;
                    props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
                    props["StaticName"] = fieldInfo.name;
                    props["DisplayName"] = fieldInfo.title;
                    switch (fieldInfo.type) {
                        case spCfg_1.SPCfgFieldType.Boolean:
                            _this.createBoolean(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Calculated:
                            _this.createCalculated(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Choice:
                            _this.createChoice(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Date:
                            _this.createDate(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Lookup:
                            _this.createLookup(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.MMS:
                            _this.createMMS(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Note:
                            _this.createNote(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Number:
                            _this.createNumber(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Text:
                            _this.createText(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Url:
                            _this.createUrl(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.User:
                            _this.createUser(fieldInfo, props);
                            break;
                        default:
                            resolve();
                            break;
                    }
                }
            });
        };
        this.createBoolean = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Boolean";
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            schemaXml += "</Field>";
            _this._resolve(schemaXml);
        };
        this.createCalculated = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Calculated";
            switch (fieldInfo.resultType) {
                case __1.SPTypes.FieldResultType.Boolean:
                    props["ResultType"] = "Boolean";
                    break;
                case __1.SPTypes.FieldResultType.Currency:
                    props["ResultType"] = "Currency";
                    break;
                case __1.SPTypes.FieldResultType.DateOnly:
                    props["Format"] = "DateOnly";
                    props["ResultType"] = "DateTime";
                    break;
                case __1.SPTypes.FieldResultType.DateTime:
                    props["Format"] = "DateTime";
                    props["ResultType"] = "DateTime";
                    break;
                case __1.SPTypes.FieldResultType.Number:
                    props["ResultType"] = "Number";
                    break;
                default:
                    props["ResultType"] = "Text";
                    break;
            }
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.formula) {
                schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>";
            }
            if (fieldInfo.fieldRefs) {
                schemaXml += "<FieldRefs>";
                for (var i = 0; i < fieldInfo.fieldRefs.length; i++) {
                    schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />";
                }
                schemaXml += "</FieldRefs>";
            }
            schemaXml += "</Field>";
            _this._resolve(schemaXml);
        };
        this.createChoice = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            if (fieldInfo.choices) {
                schemaXml += "<CHOICES>";
                for (var i = 0; i < fieldInfo.choices.length; i++) {
                    schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>";
                }
                schemaXml += "</CHOICES>";
            }
            schemaXml += "</Field>";
            _this._resolve(schemaXml);
        };
        this.createDate = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "DateTime";
            props["Format"] = fieldInfo.format == __1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createLookup = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";
            if (fieldInfo.fieldRef) {
                props["FieldRef"] = fieldInfo.fieldRef;
            }
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.showField) {
                props["ShowField"] = fieldInfo.showField;
            }
            if (fieldInfo.listName) {
                (new lib_1.Web(fieldInfo.webUrl))
                    .Lists(fieldInfo.listName)
                    .query({
                    Expand: ["ParentWeb"]
                })
                    .execute(function (list) {
                    props["List"] = list.Id;
                    if (fieldInfo.webUrl) {
                        props["WebId"] = list.ParentWeb.Id;
                    }
                    _this._resolve("<Field " + _this.toString(props) + " />");
                });
            }
            else {
                props["List"] = fieldInfo.listId;
                _this._resolve("<Field " + _this.toString(props) + " />");
            }
        };
        this.createMMS = function (fieldInfo, props) {
            var valueProps = {
                ID: "{" + lib_1.ContextInfo.generateGUID() + "}",
                Name: fieldInfo.name + "_0",
                StaticName: fieldInfo.name + "_0",
                DisplayName: fieldInfo.title + " Value",
                Type: "Note",
                Hidden: "TRUE",
                Required: "FALSE",
                ShowInViewForms: "FALSE",
                CanToggleHidden: "TRUE"
            };
            var schemaXmlValue = "<Field " + _this.toString(valueProps) + " />";
            props["Type"] = "TaxonomyFieldType";
            props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
            var schemaXml = [
                "<Field " + _this.toString(props) + ">",
                "<Customization>",
                "<ArrayOfProperty>",
                "<Property>",
                "<Name>TextField</Name>",
                "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps.ID + "</Value>",
                "</Property>",
                "</ArrayOfProperty>",
                "</Customization>",
                "</Field>"
            ].join("");
            _this._resolve([schemaXmlValue, schemaXml]);
        };
        this.createNote = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Note";
            if (fieldInfo.appendFl) {
                props["AppendOnly"] = "TRUE";
            }
            if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == __1.SPTypes.FieldNoteType.RichText) {
                props["RichText"] = "TRUE";
            }
            if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText) {
                props["RichTextMode"] = "FullHtml";
            }
            if (fieldInfo.numberOfLines > 0) {
                props["NumLines"] = fieldInfo.numberOfLines;
            }
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createNumber = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Number";
            if (fieldInfo.decimals >= 0) {
                props["Decimals"] = fieldInfo.decimals;
            }
            if (fieldInfo.max != null) {
                props["Max"] = fieldInfo.max;
            }
            if (fieldInfo.min != null) {
                props["Min"] = fieldInfo.min;
            }
            if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Integer) {
                props["Decimals"] = 0;
            }
            if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Percentage) {
                props["ShowPercentage"] = "TRUE";
            }
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createText = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Text";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createUrl = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "URL";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createUser = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "User";
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.selectionMode != null) {
                props["UserSelectionMode"] = fieldInfo.selectionMode;
            }
            if (fieldInfo.selectionScope != null) {
                props["UserSelectionScope"] = fieldInfo.selectionScope;
            }
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.toString = function (props) {
            var properties = "";
            for (var key in props) {
                var value = props[key];
                properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
            }
            return properties;
        };
    }
    return _FieldSchemaXML;
}());
exports.FieldSchemaXML = new _FieldSchemaXML();
//# sourceMappingURL=fieldSchemaXML.js.map