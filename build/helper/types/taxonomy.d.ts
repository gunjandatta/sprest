/**
 * Taxonomy Helper Class
 */
export interface ITaxonomy {
    /**
     * Method to find a term by id
     * @param term - The term
     * @param termId - The term id to search for
     */
    findById(term: ITerm, termId: string): ITermInfo;
    /**
     * Method to find a term by name
     * @param term - The term
     * @param termName - The term name to search for
     */
    findByName(term: ITerm, termName: string): ITermInfo;
    /**
     * Method to get the terms by id
     * @param termStoreId - The term store guid
     * @param termSetId - The term set guid
     */
    getTermsById(termStoreId: string, termSetId: string): PromiseLike<Array<ITermInfo>>;
    /**
     * Method to get the term set by id
     * @param termStoreId - The term store guid
     * @param termSetId - The term set guid
     */
    getTermSetById(termStoreId: string, termSetId: string): PromiseLike<ITerm>;
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
    /**
     * Method to convert a term set into an array of terms
     * @param term - The term
     */
    toArray(term: ITerm | ITermInfo): Array<ITermInfo>;
    /**
     * Method to convert a term to a field value
     * @param term - The term
     */
    toFieldValue(term: ITerm): any;
    /**
     * Method to convert a collection of terms to a field value
     * @param terms - The terms
     */
    toFieldMultiValue(terms: Array<ITerm>): any;
    /**
     * Method to convert an array of terms into a term set
     * @param terms - The terms
     */
    toObject(terms: Array<ITermInfo>): ITerm;
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
    props: {
        [key: string]: string;
    };
}
