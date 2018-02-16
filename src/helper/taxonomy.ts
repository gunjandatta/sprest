import { Types } from "..";
import * as TaxonomyTypes from "./types";
declare var SP;

/**
 * Taxonomy Helper Class
 */
export const Taxonomy: TaxonomyTypes.ITaxonomy = {
    /**
     * Method to find a term by id
     */
    findById: (term: TaxonomyTypes.ITerm, termId: string): TaxonomyTypes.ITerm => {
        // See if this is the root node
        if (term.info && term.info.id == termId) {
            // Return the root node
            return term;
        }

        // Parse the child nodes
        for (let prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") { continue; }

            // Find the term by id
            let childTerm = Taxonomy.findById(term[prop], termId);
            if (childTerm) { return childTerm; }
        }
    },

    /**
     * Method to find a term by name
     */
    findByName: (term: TaxonomyTypes.ITerm, termName: string): TaxonomyTypes.ITerm => {
        // See if this is the root node
        if (term.info && term.info.name == termName) {
            // Return the root node
            return term;
        }

        // Parse the child nodes
        for (let prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") { continue; }

            // Find the term by id
            let childTerm = Taxonomy.findByName(term[prop], termName);
            if (childTerm) { return childTerm; }
        }
    },
    /**
     * Method to get the terms
     */
    getTerms: (termSet, termSetTerms): Array<TaxonomyTypes.ITermInfo> => {
        let terms: Array<TaxonomyTypes.ITermInfo> = [];

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
        let enumerator = termSetTerms.getEnumerator();
        while (enumerator.moveNext()) {
            let term = enumerator.get_current();

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
        terms.sort((a, b) => {
            if (a < b) { return -1; }
            if (a > b) { return 1; }
            return 0;
        });

        // Return the terms
        return terms;
    },

    /**
     * Method to get the term group
     */
    getTermGroup: (groupName?: string): PromiseLike<{ context: any, termGroup: any }> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the scripts
            Taxonomy.loadScripts().then(() => {
                // Get the taxonomy session
                let context = SP.ClientContext.get_current();
                let session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);

                // See if we are getting a specific group name
                if (groupName) {
                    // Resolve the promise
                    let termStores = session.get_termStores();
                    context.load(termStores, "Include(Groups)");
                    context.executeQueryAsync(() => {
                        // Get the default store
                        let enumerator = termStores.getEnumerator();
                        let termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                        if (termStore) {
                            // Get the term group
                            let termGroup = termStore.get_groups().getByName(groupName);
                            context.load(termGroup);

                            // Resolve the promise
                            resolve({ context, termGroup });
                        } else {
                            // Reject the promise
                            reject("Unable to find the taxonomy store.");
                        }
                    }, (...args) => {
                        // Reject the promise
                        reject(args[1].get_message());
                    });
                } else {
                    // Get the default site collection group
                    let termStore = session.getDefaultSiteCollectionTermStore();
                    let termGroup = termStore.getSiteCollectionGroup(context.get_site());
                    context.load(termGroup);

                    // Resolve the promise
                    resolve({ context, termGroup });
                }
            });
        });
    },

    /**
     * Method to get the terms by id
     */
    getTermsById: (termStoreId: string, termSetId): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the scripts
            Taxonomy.loadScripts().then(() => {
                // Get the taxonomy session
                let context = SP.ClientContext.get_current();
                let session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);

                // Get the term set terms
                let termStore = session.get_termStores().getById(termStoreId);
                let termSet = termStore.getTermSet(termSetId);
                let terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");

                // Execute the request
                context.executeQueryAsync(() => {
                    // Resolve the promise
                    resolve(Taxonomy.getTerms(termSet, terms));
                }, (...args) => {
                    // Reject the promise
                    reject(args[1].get_message());
                });
            });
        });
    },

    /**
     * Method to get the term set by id
     */
    getTermSetById: (termStoreId: string, termSetId: string): PromiseLike<TaxonomyTypes.ITerm> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the terms
            Taxonomy.getTermsById(termStoreId, termSetId).then(
                // Success
                terms => {
                    // Resolve the promise
                    resolve(Taxonomy.toObject(terms));
                },
                // Error
                reason => {
                    // Reject the promise
                    reject(reason);
                }
            );
        });
    },

    /**
     * Method to get the terms from the default site collection
     */
    getTermsFromDefaultSC: (termSetName: string): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the term group
            Taxonomy.getTermGroup().then(
                // Success
                ({ context, termGroup }) => {
                    // Get the term set terms
                    let termSet = termGroup.get_termSets().getByName(termSetName);
                    let terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");

                    // Execute the request
                    context.executeQueryAsync(() => {
                        // Resolve the promise
                        resolve(Taxonomy.getTerms(termSet, terms));
                    }, (...args) => {
                        // Reject the promise
                        reject(args[1].get_message());
                    });
                },
                // Error
                reason => {
                    // Reject the promise
                    reject(reason);
                }
            );
        });
    },

    /**
     * Method to get the term set from the default site collection
     */
    getTermSetFromDefaultSC: (termSetName: string): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the terms
            Taxonomy.getTermsFromDefaultSC(termSetName).then(
                // Success
                terms => {
                    // Resolve the object
                    resolve(Taxonomy.toObject(terms));
                },
                // Error
                reason => {
                    // Reject the promise
                    reject(reason);
                }
            );
        });
    },

    /**
     * Method to get a terms from a specified group
     */
    getTermsByGroupName: (termSetName: string, groupName: string): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the term group
            Taxonomy.getTermGroup(groupName).then(({ context, termGroup }) => {
                // Get the term set terms
                let termSet = termGroup.get_termSets().getByName(termSetName);
                let terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");

                // Execute the request
                context.executeQueryAsync(() => {
                    // Resolve the promise
                    resolve(Taxonomy.getTerms(termSet, terms));
                }, (...args) => {
                    // Reject the promise
                    reject(args[1].get_message());
                });
            });
        });
    },

    /**
     * Method to get the term set from the default site collection
     */
    getTermSetByGroupName: (termSetName: string, groupName: string): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the terms
            Taxonomy.getTermsByGroupName(termSetName, groupName).then(
                // Success
                terms => {
                    // Resolve the object
                    resolve(Taxonomy.toObject(terms));
                },
                // Error
                reason => {
                    // Reject the promise
                    reject(reason);
                }
            );
        });
    },

    /**
     * Method to ensure the taxonomy script references are loaded.
     */
    loadScripts: (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the core script is loaded
            SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", () => {
                // Ensure the taxonomy script is loaded
                SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", () => {
                    // Resolve the promise
                    resolve();
                });
            }, "sp.js");
        });
    },

    /**
     * Method to convert a term to an array of term information
     */
    toArray: (term: TaxonomyTypes.ITerm): Array<TaxonomyTypes.ITermInfo> => {
        let terms: Array<TaxonomyTypes.ITermInfo> = [];

        // Recursive method to extract the child terms
        let getChildTerms = (term: TaxonomyTypes.ITermInfo, terms: Array<TaxonomyTypes.ITermInfo>) => {
            // Parse the properties
            for (let prop in term) {
                // Skip the info and parent properties
                if (prop == "info" || prop == "parent") { continue; }

                // Add the child term
                let childTerm = term[prop];
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
            getChildTerms(term as any, terms);
        }

        // Return the child terms
        return terms;
    },

    /**
     * Method to convert a term to a field value
     */
    toFieldValue: (term: TaxonomyTypes.ITerm | TaxonomyTypes.ITermInfo) => {
        let termInfo: TaxonomyTypes.ITermInfo = term ? term["info"] || term : null;

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
    toFieldMultiValue: (terms: Array<TaxonomyTypes.ITerm | TaxonomyTypes.ITermInfo>) => {
        let results = [];

        // Ensure terms exist
        if (terms && terms.length > 0) {
            // Parse the terms
            for (let i = 0; i < terms.length; i++) {
                let termInfo: TaxonomyTypes.ITermInfo = terms[i]["info"] || terms[i];

                // Add the term
                results.push(";#" + termInfo.name + "|" + termInfo.id);
            }
        }

        // Return a blank array
        return {
            __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
            results
        }
    },

    /**
     * Method to convert the terms to an object
     */
    toObject: (terms: Array<TaxonomyTypes.ITermInfo>): TaxonomyTypes.ITerm => {
        let root: TaxonomyTypes.ITerm = {} as any;

        // Recursive method to add terms
        let addTerm = (node: TaxonomyTypes.ITerm, info: TaxonomyTypes.ITermInfo, path: Array<string>) => {
            let term = node;
            let termName = "";

            // Loop for each term
            while (path.length > 0) {
                // Ensure the term exists
                termName = path[0];
                if (term[termName] == null) {
                    // Create the term
                    term[termName] = {};
                }

                // Set the term
                let parent = term;
                term = term[termName];

                // Set the parent
                term.parent = parent;

                // Remove the term from the path
                path.splice(0, 1);
            }

            // Set the info
            term.info = info;
        }

        // Ensure the terms exist
        if (terms && terms.length > 0) {
            // Parse the terms
            for (let i = 0; i < terms.length; i++) {
                let term = terms[i];

                // See if this is the root term
                if (term.pathAsString == "") {
                    // Set the root information
                    root.info = term;
                } else {
                    // Add the term
                    addTerm(root, term, term.pathAsString.split(";"))
                }
            }

            // Return the root term
            return Taxonomy.findById(root, terms[0].id);
        }

        // Return nothing
        return null;
    }
};