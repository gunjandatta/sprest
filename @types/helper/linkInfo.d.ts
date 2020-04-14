/**
 * Adds an icon to the ribbon bar on a classic page.
 * @param props The ribbon link information.
 */
export const RibbonLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

/**
 * Adds an icon to the suite bar on a classic page.
 * If SharePoint Online is detected, then the icon will be rendered in the ribbon bar.
 */
export const SuiteBarLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

/**
* Link Information
*/
export interface ILinkInfo {
    /** True to append the link at the end of the list. */
    appendFl?: boolean;

    /** The link class name */
    className?: string;

    /** The link url */
    href?: string;

    /** The link id */
    id: string;

    /** The link click event */
    onClick?: (ev?: MouseEvent) => void;

    /** The link title */
    title: string;
}

/**
 * Ribbon Link
 */
export interface IRibbonLink {
    (props: ILinkInfo): PromiseLike<HTMLAnchorElement>;
}

/**
 * Suitebar Link
 */
export interface ISuiteBarLink {
    (props: ILinkInfo): PromiseLike<HTMLAnchorElement>;
}