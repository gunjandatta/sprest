export interface IDependencies {
    constructor(callback: (...args) => void): any;
    MAX_WAIT: number;
    pageContextExistsFl: boolean;
    SCRIPTS: Array<string>;
    loadDependencies(): any;
    waitForPageContext(): any;
}
