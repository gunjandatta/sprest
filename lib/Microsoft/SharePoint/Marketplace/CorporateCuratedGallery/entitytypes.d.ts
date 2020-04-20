import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* ISiteCollectionCorporateCatalogAccessor
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorCollections, SiteCollectionCorporateCatalogAccessorMethods, Base.IBaseQuery<SiteCollectionCorporateCatalogAccessor, ISiteCollectionCorporateCatalogAccessorQuery> {

}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorCollection
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorCollection extends Base.IBaseResults<SiteCollectionCorporateCatalogAccessor> {
	done?: (resolve: (value?: Array<SiteCollectionCorporateCatalogAccessor>) => void) => void;
}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorQueryCollection
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorQueryCollection extends Base.IBaseResults<SiteCollectionCorporateCatalogAccessorOData> {
	done?: (resolve: (value?: Array<SiteCollectionCorporateCatalogAccessorOData>) => void) => void;
}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorQuery extends SiteCollectionCorporateCatalogAccessorOData, SiteCollectionCorporateCatalogAccessorMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor extends Base.IBaseResult, SiteCollectionCorporateCatalogAccessorProps, SiteCollectionCorporateCatalogAccessorCollections, SiteCollectionCorporateCatalogAccessorMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessorProps
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorPropMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorPropMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessorCollections
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorCollections extends SiteCollectionCorporateCatalogAccessorPropMethods {
	AvailableApps(): Base.IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	AvailableApps(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorOData
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorOData extends Base.IBaseResult, SiteCollectionCorporateCatalogAccessorProps, SiteCollectionCorporateCatalogAccessorMethods {
	AvailableApps: Base.IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods {
	// add(Content?: any, Overwrite?: boolean, Url?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	add(Url?: string, Overwrite?: boolean, Content?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* ICorporateCatalogAppMetadata
**********************************************/
export interface ICorporateCatalogAppMetadata extends CorporateCatalogAppMetadataCollections, CorporateCatalogAppMetadataMethods, Base.IBaseQuery<CorporateCatalogAppMetadata, ICorporateCatalogAppMetadataQuery> {

}

/*********************************************
* ICorporateCatalogAppMetadataCollection
**********************************************/
export interface ICorporateCatalogAppMetadataCollection extends Base.IBaseResults<CorporateCatalogAppMetadata>, CorporateCatalogAppMetadataCollectionMethods {
	done?: (resolve: (value?: Array<CorporateCatalogAppMetadata>) => void) => void;
}

/*********************************************
* ICorporateCatalogAppMetadataQueryCollection
**********************************************/
export interface ICorporateCatalogAppMetadataQueryCollection extends Base.IBaseResults<CorporateCatalogAppMetadataOData>, CorporateCatalogAppMetadataCollectionMethods {
	done?: (resolve: (value?: Array<CorporateCatalogAppMetadataOData>) => void) => void;
}

/*********************************************
* ICorporateCatalogAppMetadataQuery
**********************************************/
export interface ICorporateCatalogAppMetadataQuery extends CorporateCatalogAppMetadataOData, CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadata
**********************************************/
export interface CorporateCatalogAppMetadata extends Base.IBaseResult, CorporateCatalogAppMetadataProps, CorporateCatalogAppMetadataCollections, CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadataProps
**********************************************/
export interface CorporateCatalogAppMetadataProps {
	AadAppId?: string;
	AadPermissions?: string;
	AppCatalogVersion?: string;
	CanUpgrade?: boolean;
	CDNLocation?: string;
	CurrentVersionDeployed?: boolean;
	Deployed?: boolean;
	ID?: string;
	InstalledVersion?: string;
	IsClientSideSolution?: boolean;
	IsEnabled?: boolean;
	ProductId?: string;
	ShortDescription?: string;
	SkipDeploymentFeature?: boolean;
	ThumbnailUrl?: string;
	Title?: string;
}

/*********************************************
* CorporateCatalogAppMetadataPropMethods
**********************************************/
export interface CorporateCatalogAppMetadataPropMethods {

}

/*********************************************
* CorporateCatalogAppMetadataCollections
**********************************************/
export interface CorporateCatalogAppMetadataCollections extends CorporateCatalogAppMetadataPropMethods {

}

/*********************************************
* CorporateCatalogAppMetadataCollectionMethods
**********************************************/
export interface CorporateCatalogAppMetadataCollectionMethods {
	getById(id?: string): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
}

/*********************************************
* CorporateCatalogAppMetadataOData
**********************************************/
export interface CorporateCatalogAppMetadataOData extends Base.IBaseResult, CorporateCatalogAppMetadataProps, CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadataMethods
**********************************************/
export interface CorporateCatalogAppMetadataMethods {
	deploy(skipFeatureDeployment?: boolean): Base.IBaseExecution<any>;
	install(): Base.IBaseExecution<any>;
	remove(): Base.IBaseExecution<any>;
	retract(): Base.IBaseExecution<any>;
	uninstall(): Base.IBaseExecution<any>;
	upgrade(): Base.IBaseExecution<any>;
}

/*********************************************
* ITenantCorporateCatalogAccessor
**********************************************/
export interface ITenantCorporateCatalogAccessor extends TenantCorporateCatalogAccessorCollections, TenantCorporateCatalogAccessorMethods, Base.IBaseQuery<TenantCorporateCatalogAccessor, ITenantCorporateCatalogAccessorQuery> {

}

/*********************************************
* ITenantCorporateCatalogAccessorCollection
**********************************************/
export interface ITenantCorporateCatalogAccessorCollection extends Base.IBaseResults<TenantCorporateCatalogAccessor> {
	done?: (resolve: (value?: Array<TenantCorporateCatalogAccessor>) => void) => void;
}

/*********************************************
* ITenantCorporateCatalogAccessorQueryCollection
**********************************************/
export interface ITenantCorporateCatalogAccessorQueryCollection extends Base.IBaseResults<TenantCorporateCatalogAccessorOData> {
	done?: (resolve: (value?: Array<TenantCorporateCatalogAccessorOData>) => void) => void;
}

/*********************************************
* ITenantCorporateCatalogAccessorQuery
**********************************************/
export interface ITenantCorporateCatalogAccessorQuery extends TenantCorporateCatalogAccessorOData, TenantCorporateCatalogAccessorMethods {

}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor extends Base.IBaseResult, TenantCorporateCatalogAccessorProps, TenantCorporateCatalogAccessorCollections, TenantCorporateCatalogAccessorMethods {

}

/*********************************************
* TenantCorporateCatalogAccessorProps
**********************************************/
export interface TenantCorporateCatalogAccessorProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorPropMethods
**********************************************/
export interface TenantCorporateCatalogAccessorPropMethods {

}

/*********************************************
* TenantCorporateCatalogAccessorCollections
**********************************************/
export interface TenantCorporateCatalogAccessorCollections extends TenantCorporateCatalogAccessorPropMethods {
	AvailableApps(): Base.IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	AvailableApps(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
	SiteCollectionAppCatalogsSites(): Base.IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollectionMethods;
	SiteCollectionAppCatalogsSites(id: string | number): Base.IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollections;
}

/*********************************************
* TenantCorporateCatalogAccessorOData
**********************************************/
export interface TenantCorporateCatalogAccessorOData extends Base.IBaseResult, TenantCorporateCatalogAccessorProps, TenantCorporateCatalogAccessorMethods {
	AvailableApps: Base.IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	SiteCollectionAppCatalogsSites: Base.IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollectionMethods;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods
**********************************************/
export interface TenantCorporateCatalogAccessorMethods {
	// add(Content?: any, Overwrite?: boolean, Url?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	syncSolutionToTeams(id?: number): Base.IBaseExecution<any>;
	upload(Content?: any, Overwrite?: boolean, Url?: string): Base.IBaseExecution<any>;
	add(Url?: string, Overwrite?: boolean, Content?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* SiteCollectionAppCatalogAllowedItem
**********************************************/
export interface SiteCollectionAppCatalogAllowedItem {
	AbsoluteUrl?: string;
	SiteID?: any;
}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollections
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollections extends SiteCollectionAppCatalogAllowedItemCollectionMethods {

}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollectionMethods
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollectionMethods {
	add(absolutePath?: string): Base.IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
	remove(absolutePath?: string): Base.IBaseExecution<any>;
	removeById(siteId?: any): Base.IBaseExecution<any>;
}

/*********************************************
* SPCorporateCuratedGallerySettingsBase
**********************************************/
export interface SPCorporateCuratedGallerySettingsBase {
	HostSiteFullUrl?: string;
}

/*********************************************
* SPCorporateCuratedGallerySettingsBaseCollections
**********************************************/
export interface SPCorporateCuratedGallerySettingsBaseCollections {

}

/*********************************************
* SPCorporateCuratedGallerySettingsFactory
**********************************************/
export interface SPCorporateCuratedGallerySettingsFactory {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPCorporateCuratedGallerySettingsFactoryCollections
**********************************************/
export interface SPCorporateCuratedGallerySettingsFactoryCollections {

}
