import { IBase } from "../../utils/types";
export interface ILimitedWebPartManager extends IBase<ILimitedWebPartManager, ILimitedWebPartManager> {
    HasPersonalizedParts: boolean;
    Scope: number;
    WebParts(id: any): IBase;
}
