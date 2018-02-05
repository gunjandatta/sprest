export interface IWebPart {
    new (props: IWebPartProps): any;
}
export interface IWebPartCfg {
    WebPartId?: string;
}
export interface IWebPartInfo {
    cfg: IWebPartCfg;
    el: HTMLElement;
    wpId: string;
}
export interface IWebPartProps {
    cfgElementId?: string;
    helpProps?: {
        title?: string;
        url: string;
    };
    onPostRender?: (wp: IWebPartInfo) => void;
    onRenderDisplay?: (wp: IWebPartInfo) => any;
    onRenderEdit?: (wp: IWebPartInfo) => any;
    elementId: string;
}
