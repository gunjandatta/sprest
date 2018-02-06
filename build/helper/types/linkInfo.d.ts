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
    onClick?: (link?: HTMLElement, ev?: MouseEvent) => void;
    /** The link title */
    title: string;
}
/**
 * Ribbon Link
 */
export interface IRibbonLink {
    /** Creates the ribbon link */
    new (props: ILinkInfo): HTMLAnchorElement;
}
/**
 * Suitebar Link
 */
export interface ISuiteBarLink {
    /** Creates the suitebar link */
    new (props: ILinkInfo): HTMLAnchorElement;
}
