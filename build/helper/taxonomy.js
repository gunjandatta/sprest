"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Taxonomy Helper Class
 */
exports.Taxonomy = {
    /**
     * Method to find a term by id
     */
    findById: function (term, termId) {
        // See if this is the root node
        if (term.info && term.info.id == termId) {
            // Return the root node
            return term;
        }
        // Parse the child nodes
        for (var prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") {
                continue;
            }
            // Find the term by id
            var childTerm = exports.Taxonomy.findById(term[prop], termId);
            if (childTerm) {
                return childTerm;
            }
        }
    },
    /**
     * Method to find a term by name
     */
    findByName: function (term, termName) {
        // See if this is the root node
        if (term.info && term.info.name == termName) {
            // Return the root node
            return term;
        }
        // Parse the child nodes
        for (var prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") {
                continue;
            }
            // Find the term by id
            var childTerm = exports.Taxonomy.findByName(term[prop], termName);
            if (childTerm) {
                return childTerm;
            }
        }
    },
    /**
     * Method to get the terms
     */
    getTerms: function (termSet, termSetTerms) {
        var terms = [];
        // Add the root term
        terms.push({
            description: termSet.get_description(),
            id: termSet.get_id().toString(),
            name: termSet.get_name(),
            path: [],
            pathAsString: "",
            props: termSet.get_customProperties()
        });
        // Parse the term sets terms
        var enumerator = termSetTerms.getEnumerator();
        while (enumerator.moveNext()) {
            var term = enumerator.get_current();
            // Create the terms
            terms.push({
                description: term.get_description(),
                id: term.get_id().toString(),
                name: term.get_name(),
                path: term.get_pathOfTerm().split(";"),
                pathAsString: term.get_pathOfTerm(),
                props: term.get_customProperties()
            });
        }
        // Sort the terms
        terms.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        // Return the terms
        return terms;
    },
    /**
     * Method to get the term group
     */
    getTermGroup: function (groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the scripts
            exports.Taxonomy.loadScripts().then(function () {
                // Get the taxonomy session
                var context = SP.ClientContext.get_current();
                var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                // See if we are getting a specific group name
                if (groupName) {
                    // Resolve the promise
                    var termStores_1 = session.get_termStores();
                    context.load(termStores_1, "Include(Groups)");
                    context.executeQueryAsync(function () {
                        // Get the default store
                        var enumerator = termStores_1.getEnumerator();
                        var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                        if (termStore) {
                            // Get the term group
                            var termGroup = termStore.get_groups().getByName(groupName);
                            context.load(termGroup);
                            // Resolve the promise
                            resolve({ context: context, termGroup: termGroup });
                        }
                        else {
                            // Log
                            console.error("[gd-sprest] Unable to get the taxonomy store.");
                            // Reject the promise
                            reject();
                        }
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Log
                        console.error("[gd-sprest] Error getting the term group.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        // Reject the promise
                        reject(args);
                    });
                }
                else {
                    // Get the default site collection group
                    var termStore = session.getDefaultSiteCollectionTermStore();
                    var termGroup = termStore.getSiteCollectionGroup(context.get_site());
                    context.load(termGroup);
                    // Resolve the promise
                    resolve({ context: context, termGroup: termGroup });
                }
            });
        });
    },
    /**
     * Method to get the terms by id
     */
    getTermsById: function (termStoreId, termSetId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the scripts
            exports.Taxonomy.loadScripts().then(function () {
                // Get the taxonomy session
                var context = SP.ClientContext.get_current();
                var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                // Get the term set terms
                var termStore = session.get_termStores().getById(termStoreId);
                var termSet = termStore.getTermSet(termSetId);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Log
                    console.error("[gd-sprest] Error getting the term group.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
                });
            });
        });
    },
    /**
     * Method to get the term set by id
     */
    getTermSetById: function (termStoreId, termSetId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsById(termStoreId, termSetId).then(function (terms) {
                // Resolve the promise
                resolve(exports.Taxonomy.toObject(terms));
            });
        });
    },
    /**
     * Method to get the terms from the default site collection
     */
    getTermsFromDefaultSC: function (termSetName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the term group
            exports.Taxonomy.getTermGroup().then(function (_a) {
                var context = _a.context, termGroup = _a.termGroup;
                // Get the term set terms
                var termSet = termGroup.get_termSets().getByName(termSetName);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Log
                    console.error("[gd-sprest] Error getting the terms from the default site collection.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
                });
            });
        });
    },
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetFromDefaultSC: function (termSetName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsFromDefaultSC(termSetName).then(function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
            });
        });
    },
    /**
     * Method to get a terms from a specified group
     */
    getTermsByGroupName: function (termSetName, groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the term group
            exports.Taxonomy.getTermGroup(groupName).then(function (_a) {
                var context = _a.context, termGroup = _a.termGroup;
                // Get the term set terms
                var termSet = termGroup.get_termSets().getByName(termSetName);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Log
                    console.error("[gd-sprest] Error getting the terms.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
                });
            });
        });
    },
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetByGroupName: function (termSetName, groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
            });
        });
    },
    /**
     * Method to ensure the taxonomy script references are loaded.
     */
    loadScripts: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the core script is loaded
            SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                // Ensure the taxonomy script is loaded
                SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                    // Resolve the promise
                    resolve();
                });
            }, "sp.js");
        });
    },
    /**
     * Method to convert a term to an array of term information
     */
    toArray: function (term) {
        var terms = [];
        // Recursive method to extract the child terms
        var getChildTerms = function (term, terms) {
            // Parse the properties
            for (var prop in term) {
                // Skip the info and parent properties
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                // Add the child term
                var childTerm = term[prop];
                terms.push(childTerm.info);
                // Add the child terms
                getChildTerms(childTerm, terms);
            }
        };
        // Ensure the term exists
        if (term) {
            // See if the root node contains term information
            if (term.info) {
                // Add the root term
                terms.push(term.info);
            }
            // Get the child terms
            getChildTerms(term, terms);
        }
        // Return the child terms
        return terms;
    },
    /**
     * Method to convert a term to a field value
     */
    toFieldValue: function (term) {
        var termInfo = term ? term["info"] || term : null;
        // Ensure the term exists
        if (termInfo) {
            return {
                __metadata: { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                Label: termInfo.name,
                TermGuid: termInfo.id,
                WssId: -1
            };
        }
        // Return nothing
        return null;
    },
    /**
     * Method to convert a collection of terms to a field value
     */
    toFieldMultiValue: function (terms) {
        var results = [];
        // Ensure terms exist
        if (terms && terms.length > 0) {
            // Parse the terms
            for (var i = 0; i < terms.length; i++) {
                var termInfo = terms[i]["info"] || terms[i];
                // Add the term
                results.push(";#" + termInfo.name + "|" + termInfo.id);
            }
        }
        // Return a blank array
        return {
            __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
            results: results
        };
    },
    /**
     * Method to convert the terms to an object
     */
    toObject: function (terms) {
        var root = {};
        // Recursive method to add terms
        var addTerm = function (node, info, path) {
            var term = node;
            var termName = "";
            // Loop for each term
            while (path.length > 0) {
                // Ensure the term exists
                termName = path[0];
                if (term[termName] == null) {
                    // Create the term
                    term[termName] = {};
                }
                // Set the term
                var parent_1 = term;
                term = term[termName];
                // Set the parent
                term.parent = parent_1;
                // Remove the term from the path
                path.splice(0, 1);
            }
            // Set the info
            term.info = info;
        };
        // Ensure the terms exist
        if (terms) {
            // Parse the terms
            for (var i = 0; i < terms.length; i++) {
                var term = terms[i];
                // See if this is the root term
                if (term.pathAsString == "") {
                    // Set the root information
                    root.info = term;
                }
                else {
                    // Add the term
                    addTerm(root, term, term.pathAsString.split(";"));
                }
            }
        }
        // Return the root term
        return root;
    }
};
//# sourceMappingURL=taxonomy.js.map