/**
 * Taxonomy Helper Class
 */
export interface ITaxonomy {
    /**
     * Method to get the terms from the default site collection
     * @param termSetName - The term set name
     */
    getTermsFromDefaultSC(termSetName: string): PromiseLike<Array<ITermInfo>>;

    /**
     * Method to get the term set from the default site collection
     */
    getTermSetFromDefaultSC(termSetName: string): PromiseLike<ITerm>;

    /**
     * Method to get a terms from a specified group
     */
    getTermsByGroupName(termSetName: string, groupName: string): PromiseLike<Array<ITermInfo>>;

    /**
     * Method to get the term set from the default site collection
     */
    getTermSetByGroupName(termSetName: string, groupName: string): PromiseLike<ITerm>;
}


/**
 * Taxonomy Term
 */
export interface ITerm {
    /** The root term information */
    info: ITermInfo;

    /** The parent term */
    parent?: ITerm;
}

/**
 * Taxonomy Term Information
 */
export interface ITermInfo {
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
    props: { [key: string]: string; };
}