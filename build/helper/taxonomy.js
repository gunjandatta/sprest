"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Taxonomy = (function () {
    function _Taxonomy() {
        var _this = this;
        this.findById = function (term, termId) {
            if (term.info && term.info.id == termId) {
                return term;
            }
            for (var prop in term) {
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                var childTerm = _this.findById(term[prop], termId);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        this.findByName = function (term, termName) {
            if (term.info && term.info.name == termName) {
                return term;
            }
            for (var prop in term) {
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                var childTerm = _this.findByName(term[prop], termName);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        this.getTermsById = function (termStoreId, termSetId) {
            return new Promise(function (resolve, reject) {
                _this.loadScripts().then(function () {
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    var termStore = session.get_termStores().getById(termStoreId);
                    var termSet = termStore.getTermSet(termSetId);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the term group.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetById = function (termStoreId, termSetId) {
            return new Promise(function (resolve, reject) {
                _this.getTermsById(termStoreId, termSetId).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.getTermsFromDefaultSC = function (termSetName) {
            return new Promise(function (resolve, reject) {
                _this.getTermGroup().then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the terms from the default site collection.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetFromDefaultSC = function (termSetName) {
            return new Promise(function (resolve, reject) {
                _this.getTermsFromDefaultSC(termSetName).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.getTermsByGroupName = function (termSetName, groupName) {
            return new Promise(function (resolve, reject) {
                _this.getTermGroup(groupName).then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the terms.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetByGroupName = function (termSetName, groupName) {
            return new Promise(function (resolve, reject) {
                _this.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.loadScripts = function () {
            return new Promise(function (resolve, reject) {
                SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                    SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                    SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                        resolve();
                    });
                }, "sp.js");
            });
        };
        this.toArray = function (term) {
            var terms = [];
            var getChildTerms = function (term, terms) {
                for (var prop in term) {
                    if (prop == "info" || prop == "parent") {
                        continue;
                    }
                    var childTerm = term[prop];
                    terms.push(childTerm.info);
                    getChildTerms(childTerm, terms);
                }
            };
            if (term) {
                if (term.info) {
                    terms.push(term.info);
                }
                getChildTerms(term, terms);
            }
            return terms;
        };
        this.toFieldValue = function (term) {
            var termInfo = term ? term["info"] || term : null;
            if (termInfo) {
                return {
                    __metadata: { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                    Label: termInfo.name,
                    TermGuid: termInfo.id,
                    WssId: -1
                };
            }
            return null;
        };
        this.toFieldMultiValue = function (terms) {
            var results = [];
            if (terms && terms.length > 0) {
                for (var i = 0; i < terms.length; i++) {
                    var termInfo = terms[i]["info"] || terms[i];
                    results.push(";#" + termInfo.name + "|" + termInfo.id);
                }
            }
            return {
                __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
                results: results
            };
        };
        this.toObject = function (terms) {
            var root = {};
            var addTerm = function (node, info, path) {
                var term = node;
                var termName = "";
                while (path.length > 0) {
                    termName = path[0];
                    if (term[termName] == null) {
                        term[termName] = {};
                    }
                    var parent_1 = term;
                    term = term[termName];
                    term.parent = parent_1;
                    path.splice(0, 1);
                }
                term.info = info;
            };
            if (terms) {
                for (var i = 0; i < terms.length; i++) {
                    var term = terms[i];
                    if (term.pathAsString == "") {
                        root.info = term;
                    }
                    else {
                        addTerm(root, term, term.pathAsString.split(";"));
                    }
                }
            }
            return root;
        };
        this.getTerms = function (termSet, termSetTerms) {
            var terms = [];
            terms.push({
                description: termSet.get_description(),
                id: termSet.get_id().toString(),
                name: termSet.get_name(),
                path: [],
                pathAsString: "",
                props: termSet.get_customProperties()
            });
            var enumerator = termSetTerms.getEnumerator();
            while (enumerator.moveNext()) {
                var term = enumerator.get_current();
                terms.push({
                    description: term.get_description(),
                    id: term.get_id().toString(),
                    name: term.get_name(),
                    path: term.get_pathOfTerm().split(";"),
                    pathAsString: term.get_pathOfTerm(),
                    props: term.get_customProperties()
                });
            }
            terms.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
            return terms;
        };
        this.getTermGroup = function (groupName) {
            return new Promise(function (resolve, reject) {
                _this.loadScripts().then(function () {
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    if (groupName) {
                        var termStores_1 = session.get_termStores();
                        context.load(termStores_1, "Include(Groups)");
                        context.executeQueryAsync(function () {
                            var enumerator = termStores_1.getEnumerator();
                            var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                            if (termStore) {
                                var termGroup = termStore.get_groups().getByName(groupName);
                                context.load(termGroup);
                                resolve({ context: context, termGroup: termGroup });
                            }
                            else {
                                console.error("[gd-sprest] Unable to get the taxonomy store.");
                                reject();
                            }
                        }, function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            console.error("[gd-sprest] Error getting the term group.");
                            console.error("[gd-sprest] Error: " + args[1].get_message());
                            reject(args);
                        });
                    }
                    else {
                        var termStore = session.getDefaultSiteCollectionTermStore();
                        var termGroup = termStore.getSiteCollectionGroup(context.get_site());
                        context.load(termGroup);
                        resolve({ context: context, termGroup: termGroup });
                    }
                });
            });
        };
    }
    return _Taxonomy;
}());
exports.Taxonomy = new _Taxonomy();
//# sourceMappingURL=taxonomy.js.map