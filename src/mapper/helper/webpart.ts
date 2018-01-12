/**
 * The webpart configuration
 */
export interface IWebPartCfg {
    /** The webpart id */
    WebPartId: string;
}

/**
 * The webpart instance
 */
export interface IWebPart {
    /** The configuration */
    cfg: IWebPartCfg;

    /** The element to render the webpart to */
    el: HTMLElement;

    /** The webpart id */
    wpId: string;
}

/**
 * The webpart properties
 */
export interface IWebPartProps {
    /** The optional configuration element id */
    cfgElementId?: string;

    /** The optional help link properties */
    helpProps?: {
        /** The link title */
        title?: string;

        /** The link url */
        url: string;
    };

    /** The post render event */
    onPostRender?: (wp: IWebPart) => void;

    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: IWebPart) => any;

    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: IWebPart) => any;

    /** The target element id to render the webpart to */
    elementId: string;
}