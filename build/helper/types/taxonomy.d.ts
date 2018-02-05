export interface ITaxonomy {
    findById(term: ITerm, termId: string): ITerm;
    findByName(term: ITerm, termName: string): ITerm;
    getTermsById(termStoreId: string, termSetId: string): PromiseLike<Array<ITermInfo>>;
    getTermSetById(termStoreId: string, termSetId: string): PromiseLike<ITerm>;
    getTermsFromDefaultSC(termSetName: string): PromiseLike<Array<ITermInfo>>;
    getTermSetFromDefaultSC(termSetName: string): PromiseLike<ITerm>;
    getTermsByGroupName(termSetName: string, groupName: string): PromiseLike<Array<ITermInfo>>;
    getTermSetByGroupName(termSetName: string, groupName: string): PromiseLike<ITerm>;
    toArray(term: ITerm | ITermInfo): Array<ITermInfo>;
    toFieldValue(term: ITerm | ITermInfo): any;
    toFieldMultiValue(terms: Array<ITerm | ITermInfo>): any;
    toObject(terms: Array<ITermInfo>): ITerm;
}
export interface ITerm {
    info: ITermInfo;
    parent?: ITerm;
}
export interface ITermInfo {
    description: string;
    id: string;
    name: string;
    parent?: ITerm;
    path: Array<string>;
    pathAsString: string;
    props: {
        [key: string]: string;
    };
}
