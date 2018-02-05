import { IBase } from "../../utils/types";
export interface ITenantAppMethods {
    deploy(): IBase;
    install(): IBase;
    remove(): IBase;
    retract(): IBase;
    uninstall(): IBase;
    upgrade(): IBase;
}
export interface ITenantAppProps {
    AppCatalogVersion: string;
    CanUpgrade: boolean;
    CurrentVersionDeployed: boolean;
    Deployed: boolean;
    ID: string;
    InstalledVersion: string;
    IsClientSideSolution: boolean;
    Title: string;
}
export interface ITenantAppResult extends ITenantAppMethods, ITenantAppProps, IBase<ITenantApp, ITenantAppResult> {
}
export interface ITenantApp extends ITenantAppMethods, IBase<ITenantApp, ITenantAppResult> {
}
