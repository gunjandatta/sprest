/**
 * Taxonomy Helper Class
 */
export interface ITaxonomy {
    /**
     * Method to get the terms from the default site collection
     * @param termSetName - The term set name
     */
    getTermsFromDefaultSC(termSetName: string): PromiseLike<Array<ITerm>>;
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetFromDefaultSC(termSetName: string): PromiseLike<IRootTerm>;
    /**
     * Method to get a terms from a specified group
     */
    getTermsByGroupName(termSetName: string, groupName: string): PromiseLike<Array<ITerm>>;
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetByGroupName(termSetName: string, groupName: string): PromiseLike<IRootTerm>;
}
/**
 * Taxonomy Root Term
 */
export interface IRootTerm {
    /** The root term information */
    info: ITerm;
}
/**
 * Taxonomy Term
 */
export interface ITerm {
    /** The term description */
    description: string;
    /** The term id */
    id: string;
    /** The term name */
    name: string;
    /** The parent term */
    parent?: ITerm;
    /** The term path */
    path: Array<string>;
    /** The term path as a string */
    pathAsString: string;
    /** The term custom properties */
    props: {
        [key: string]: string;
    };
}
