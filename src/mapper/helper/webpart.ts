/**
 * WebPart Configuration
 */
export interface IWebPartCfg {
    /** The webpart id */
    WebPartId: string;
}

/**
 * WebPart Instance
 */
export interface IWebPart {
    /** The configuration */
    cfg: IWebPartCfg;

    /** The element to render the webpart to */
    el: HTMLElement;

    /** The webpart id */
    wpId: string;
}
