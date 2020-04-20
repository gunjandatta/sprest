import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* ICommunicationSite
**********************************************/
export interface ICommunicationSite extends CommunicationSiteCollections, CommunicationSiteMethods, Base.IBaseQuery<CommunicationSite, ICommunicationSiteQuery> {

}

/*********************************************
* ICommunicationSiteCollection
**********************************************/
export interface ICommunicationSiteCollection extends Base.IBaseResults<CommunicationSite> {
	done?: (resolve: (value?: Array<CommunicationSite>) => void) => void;
}

/*********************************************
* ICommunicationSiteQueryCollection
**********************************************/
export interface ICommunicationSiteQueryCollection extends Base.IBaseResults<CommunicationSiteOData> {
	done?: (resolve: (value?: Array<CommunicationSiteOData>) => void) => void;
}

/*********************************************
* ICommunicationSiteQuery
**********************************************/
export interface ICommunicationSiteQuery extends CommunicationSiteOData, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSite
**********************************************/
export interface CommunicationSite extends Base.IBaseResult, CommunicationSiteProps, CommunicationSiteCollections, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSiteProps
**********************************************/
export interface CommunicationSiteProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CommunicationSitePropMethods
**********************************************/
export interface CommunicationSitePropMethods {

}

/*********************************************
* CommunicationSiteCollections
**********************************************/
export interface CommunicationSiteCollections extends CommunicationSitePropMethods {

}

/*********************************************
* CommunicationSiteOData
**********************************************/
export interface CommunicationSiteOData extends Base.IBaseResult, CommunicationSiteProps, CommunicationSiteMethods {

}

/*********************************************
* CommunicationSiteMethods
**********************************************/
export interface CommunicationSiteMethods {
	create(request?: SP.Publishing.CommunicationSiteCreationRequest): Base.IBaseExecution<SP.Publishing.CommunicationSiteCreationResponse>;
	enable(designPackageId?: any): Base.IBaseExecution<any>;
	status(url?: string): Base.IBaseExecution<SP.Publishing.CommunicationSiteCreationResponse>;
}

/*********************************************
* EmbedDataV1
**********************************************/
export interface EmbedDataV1 {
	AllowHttpsEmbed?: boolean;
	CreatorName?: string;
	DatePublishedAt?: string;
	Description?: string;
	EmbedServiceResponseCode?: number;
	ErrorMessage?: string;
	Html?: string;
	ListId?: string;
	PublisherName?: string;
	ResponseCode?: number;
	SiteId?: string;
	ThumbnailUrl?: string;
	Title?: string;
	Type?: string;
	UniqueId?: string;
	Url?: string;
	VideoId?: string;
	WebId?: string;
}

/*********************************************
* EmbedDataV1Collections
**********************************************/
export interface EmbedDataV1Collections {

}

/*********************************************
* IEmbedService
**********************************************/
export interface IEmbedService extends EmbedServiceCollections, EmbedServiceMethods, Base.IBaseQuery<EmbedService, IEmbedServiceQuery> {

}

/*********************************************
* IEmbedServiceCollection
**********************************************/
export interface IEmbedServiceCollection extends Base.IBaseResults<EmbedService> {
	done?: (resolve: (value?: Array<EmbedService>) => void) => void;
}

/*********************************************
* IEmbedServiceQueryCollection
**********************************************/
export interface IEmbedServiceQueryCollection extends Base.IBaseResults<EmbedServiceOData> {
	done?: (resolve: (value?: Array<EmbedServiceOData>) => void) => void;
}

/*********************************************
* IEmbedServiceQuery
**********************************************/
export interface IEmbedServiceQuery extends EmbedServiceOData, EmbedServiceMethods {

}

/*********************************************
* EmbedService
**********************************************/
export interface EmbedService extends Base.IBaseResult, EmbedServiceProps, EmbedServiceCollections, EmbedServiceMethods {

}

/*********************************************
* EmbedServiceProps
**********************************************/
export interface EmbedServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* EmbedServicePropMethods
**********************************************/
export interface EmbedServicePropMethods {

}

/*********************************************
* EmbedServiceCollections
**********************************************/
export interface EmbedServiceCollections extends EmbedServicePropMethods {

}

/*********************************************
* EmbedServiceOData
**********************************************/
export interface EmbedServiceOData extends Base.IBaseResult, EmbedServiceProps, EmbedServiceMethods {

}

/*********************************************
* EmbedServiceMethods
**********************************************/
export interface EmbedServiceMethods {
	embedData(url?: string, version?: number): Base.IBaseExecution<SP.Publishing.EmbedDataV1>;
}

/*********************************************
* IVideoItem
**********************************************/
export interface IVideoItem extends VideoItemCollections, VideoItemMethods, Base.IBaseQuery<VideoItem, IVideoItemQuery> {

}

/*********************************************
* IVideoItemCollection
**********************************************/
export interface IVideoItemCollection extends Base.IBaseResults<VideoItem>, VideoItemCollectionMethods {
	done?: (resolve: (value?: Array<VideoItem>) => void) => void;
}

/*********************************************
* IVideoItemQueryCollection
**********************************************/
export interface IVideoItemQueryCollection extends Base.IBaseResults<VideoItemOData>, VideoItemCollectionMethods {
	done?: (resolve: (value?: Array<VideoItemOData>) => void) => void;
}

/*********************************************
* IVideoItemQuery
**********************************************/
export interface IVideoItemQuery extends VideoItemOData, VideoItemMethods {

}

/*********************************************
* VideoItem
**********************************************/
export interface VideoItem extends Base.IBaseResult, VideoItemProps, VideoItemCollections, VideoItemMethods {

}

/*********************************************
* VideoItemProps
**********************************************/
export interface VideoItemProps {
	ChannelID?: any;
	CreatedDate?: any;
	DefaultEmbedCode?: string;
	Description?: string;
	DisplayFormUrl?: string;
	FileName?: string;
	OwnerName?: string;
	PlayerPageUrl?: string;
	ServerRelativeUrl?: string;
	ThumbnailSelection?: number;
	ThumbnailUrl?: string;
	Title?: string;
	ID?: any;
	Url?: string;
	VideoDownloadUrl?: string;
	VideoDurationInSeconds?: number;
	VideoProcessingStatus?: number;
	ViewCount?: number;
	YammerObjectUrl?: string;
}

/*********************************************
* VideoItemPropMethods
**********************************************/
export interface VideoItemPropMethods {
	Author(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
	Owner(): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoItemCollections
**********************************************/
export interface VideoItemCollections extends VideoItemPropMethods {
	PeopleInMedia(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	PeopleInMedia(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoItemCollectionMethods
**********************************************/
export interface VideoItemCollectionMethods {
	getById(id?: any): Base.IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* VideoItemOData
**********************************************/
export interface VideoItemOData extends Base.IBaseResult, VideoItemProps, VideoItemMethods {
	Author: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	Owner: SP.User & SP.UserCollections & SP.UserCollectionMethods;
	PeopleInMedia: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
}

/*********************************************
* VideoItemMethods
**********************************************/
export interface VideoItemMethods {
	customThumbnail(): Base.IBaseExecution<any>;
	delete(): Base.IBaseExecution<any>;
	getFile(): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	getPlaybackMetadata(sdnConfiguration?: string): Base.IBaseExecution<SP.Publishing.VideoPlaybackMetadata>;
	getPlaybackUrl(videoFormat?: number): Base.IBaseExecution<string>;
	getStreamingKeyAccessToken(): Base.IBaseExecution<string>;
	getVideoDetailedViewCount(): Base.IBaseExecution<SP.Publishing.ItemViewsAnalyticsData>;
	getVideoEmbedCode(width?: number, height?: number, autoplay?: boolean, showInfo?: boolean, makeResponsive?: boolean): Base.IBaseExecution<string>;
	getVideoViewProgressCount(): Base.IBaseCollection<SP.Publishing.ViewProgressAnalyticsData>;
	incrementVideoViewProgressCount(percentageViewed?: number): Base.IBaseExecution<any>;
	incrementViewCount(viewOrigin?: number): Base.IBaseExecution<any>;
	setPeopleInMedia(loginNames?: Array<string>): Base.IBaseExecution<any>;
	setVideoOwner(id?: number): Base.IBaseExecution<any>;
	subtitles(): Base.IBaseCollection<SP.Publishing.SubtitleFile> & SP.Publishing.SubtitleFileCollectionMethods;
	thumbnails(preferredWidth?: number): Base.IBaseCollection<SP.Publishing.VideoThumbnail> & SP.Publishing.VideoThumbnailCollectionMethods;
	thumbnailStream(preferredWidth?: number): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
	uploadCustomThumbnail(fileExtension?: string, customVideoThumbnail?: any): Base.IBaseExecution<any>;
}

/*********************************************
* PersonMagazine
**********************************************/
export interface PersonMagazine {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonMagazineCollections
**********************************************/
export interface PersonMagazineCollections {

}

/*********************************************
* PointPublishingDocProps
**********************************************/
export interface PointPublishingDocProps {
	Author?: string;
	ContentTypeId?: string;
	DocLibraryUrl?: string;
	FileType?: string;
	Modified?: any;
	ServerRedirectedEmbedUrl?: string;
	ServerRedirectedPreviewUrl?: string;
	SiteId?: any;
	SiteTitle?: string;
	Title?: string;
	UniqueId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* PointPublishingDocPropsCollections
**********************************************/
export interface PointPublishingDocPropsCollections {

}

/*********************************************
* PointPublishingMagazineProps
**********************************************/
export interface PointPublishingMagazineProps {
	BannerColor?: string;
	BannerImageUrl?: string;
	BannerPattern?: string;
	Description?: string;
	IsUserContributor?: boolean;
	IsUserOwner?: boolean;
	MagazineType?: number;
	PublishedDate?: any;
	Title?: string;
}

/*********************************************
* PointPublishingMagazinePropsCollections
**********************************************/
export interface PointPublishingMagazinePropsCollections {

}

/*********************************************
* IPointPublishingPost
**********************************************/
export interface IPointPublishingPost extends PointPublishingPostCollections, PointPublishingPostMethods, Base.IBaseQuery<PointPublishingPost, IPointPublishingPostQuery> {

}

/*********************************************
* IPointPublishingPostCollection
**********************************************/
export interface IPointPublishingPostCollection extends Base.IBaseResults<PointPublishingPost>, PointPublishingPostCollectionMethods {
	done?: (resolve: (value?: Array<PointPublishingPost>) => void) => void;
}

/*********************************************
* IPointPublishingPostQueryCollection
**********************************************/
export interface IPointPublishingPostQueryCollection extends Base.IBaseResults<PointPublishingPostOData>, PointPublishingPostCollectionMethods {
	done?: (resolve: (value?: Array<PointPublishingPostOData>) => void) => void;
}

/*********************************************
* IPointPublishingPostQuery
**********************************************/
export interface IPointPublishingPostQuery extends PointPublishingPostOData, PointPublishingPostMethods {

}

/*********************************************
* PointPublishingPost
**********************************************/
export interface PointPublishingPost extends Base.IBaseResult, PointPublishingPostProps, PointPublishingPostCollections, PointPublishingPostMethods {

}

/*********************************************
* PointPublishingPostProps
**********************************************/
export interface PointPublishingPostProps {
	Author?: string;
	Content?: string;
	CreatedDate?: any;
	FriendlyUrlFileName?: string;
	Id?: number;
	ModifiedDate?: any;
	OperationType?: number;
	Title?: string;
	UserIsAuthor?: boolean;
	Version?: string;
}

/*********************************************
* PointPublishingPostPropMethods
**********************************************/
export interface PointPublishingPostPropMethods {

}

/*********************************************
* PointPublishingPostCollections
**********************************************/
export interface PointPublishingPostCollections extends PointPublishingPostPropMethods {
	images(): Base.IBaseCollection<SP.File, SP.FileOData, Base.IBaseExecution & SP.FileCollectionMethods> & Base.IBaseExecution & SP.FileCollectionMethods;
	images(id: string | number): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* PointPublishingPostCollectionMethods
**********************************************/
export interface PointPublishingPostCollectionMethods {
	getById(id?: number, publishedOnly?: boolean): Base.IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostOData> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
	getByName(name?: string, publishedOnly?: boolean): Base.IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostOData> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
}

/*********************************************
* PointPublishingPostOData
**********************************************/
export interface PointPublishingPostOData extends Base.IBaseResult, PointPublishingPostProps, PointPublishingPostMethods {
	images: Base.IBaseResults<SP.File> & SP.FileCollectionMethods;
}

/*********************************************
* PointPublishingPostMethods
**********************************************/
export interface PointPublishingPostMethods {
	addImageFromUrl(fromImageUrl?: string): Base.IBaseExecution<string>;
	delete(): Base.IBaseExecution<any>;
}

/*********************************************
* IPointPublishingPostServiceManager
**********************************************/
export interface IPointPublishingPostServiceManager extends PointPublishingPostServiceManagerCollections, PointPublishingPostServiceManagerMethods, Base.IBaseQuery<PointPublishingPostServiceManager, IPointPublishingPostServiceManagerQuery> {

}

/*********************************************
* IPointPublishingPostServiceManagerCollection
**********************************************/
export interface IPointPublishingPostServiceManagerCollection extends Base.IBaseResults<PointPublishingPostServiceManager> {
	done?: (resolve: (value?: Array<PointPublishingPostServiceManager>) => void) => void;
}

/*********************************************
* IPointPublishingPostServiceManagerQueryCollection
**********************************************/
export interface IPointPublishingPostServiceManagerQueryCollection extends Base.IBaseResults<PointPublishingPostServiceManagerOData> {
	done?: (resolve: (value?: Array<PointPublishingPostServiceManagerOData>) => void) => void;
}

/*********************************************
* IPointPublishingPostServiceManagerQuery
**********************************************/
export interface IPointPublishingPostServiceManagerQuery extends PointPublishingPostServiceManagerOData, PointPublishingPostServiceManagerMethods {

}

/*********************************************
* PointPublishingPostServiceManager
**********************************************/
export interface PointPublishingPostServiceManager extends Base.IBaseResult, PointPublishingPostServiceManagerProps, PointPublishingPostServiceManagerCollections, PointPublishingPostServiceManagerMethods {

}

/*********************************************
* PointPublishingPostServiceManagerProps
**********************************************/
export interface PointPublishingPostServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingPostServiceManagerPropMethods
**********************************************/
export interface PointPublishingPostServiceManagerPropMethods {
	magazineprops(): Base.IBaseExecution<SP.Publishing.PointPublishingMagazineProps> & SP.Publishing.PointPublishingMagazinePropsCollections;
}

/*********************************************
* PointPublishingPostServiceManagerCollections
**********************************************/
export interface PointPublishingPostServiceManagerCollections extends PointPublishingPostServiceManagerPropMethods {
	bannerimages(): Base.IBaseCollection<SP.File, SP.FileOData, Base.IBaseExecution & SP.FileCollectionMethods> & Base.IBaseExecution & SP.FileCollectionMethods;
	bannerimages(id: string | number): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	contributors(): Base.IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	contributors(id: string | number): Base.IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
	creators(): Base.IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	creators(id: string | number): Base.IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
	posts(): Base.IBaseCollection<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostOData, Base.IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods> & Base.IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods;
	posts(id: string | number): Base.IBaseQuery<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostOData> & SP.Publishing.PointPublishingPostCollections & SP.Publishing.PointPublishingPostMethods;
	viewers(): Base.IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	viewers(id: string | number): Base.IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
}

/*********************************************
* PointPublishingPostServiceManagerOData
**********************************************/
export interface PointPublishingPostServiceManagerOData extends Base.IBaseResult, PointPublishingPostServiceManagerProps, PointPublishingPostServiceManagerMethods {
	bannerimages: Base.IBaseResults<SP.File> & SP.FileCollectionMethods;
	contributors: Base.IBaseResults<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	creators: Base.IBaseResults<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	magazineprops: SP.Publishing.PointPublishingMagazineProps & SP.Publishing.PointPublishingMagazinePropsCollections;
	posts: Base.IBaseResults<SP.Publishing.PointPublishingPost> & SP.Publishing.PointPublishingPostCollectionMethods;
	viewers: Base.IBaseResults<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
}

/*********************************************
* PointPublishingPostServiceManagerMethods
**********************************************/
export interface PointPublishingPostServiceManagerMethods {
	addBannerImageFromUrl(fromImageUrl?: string): Base.IBaseExecution<string>;
	deleteMagazine(): Base.IBaseExecution<any>;
	getDocProps(docUrls?: Array<string>): Base.IBaseCollection<SP.Publishing.PointPublishingDocProps>;
	getPostsQuery(top?: number, itemIdBoundary?: number, directionAscending?: boolean, publishedOnly?: boolean, draftsOnly?: boolean): Base.IBaseCollection<SP.Publishing.PointPublishingPost, SP.Publishing.PointPublishingPostOData, Base.IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods> & Base.IBaseExecution & SP.Publishing.PointPublishingPostCollectionMethods;
	getTopAuthors(count?: number): Base.IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	queryGroupNames(query?: string): Base.IBaseCollection<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollectionMethods;
	setMagazineProperties(title?: string, description?: string, bannerImageUrl?: string, bannerColor?: string, bannerPattern?: string): Base.IBaseExecution<SP.Publishing.PointPublishingMagazineProps>;
}

/*********************************************
* IPointPublishingUser
**********************************************/
export interface IPointPublishingUser extends PointPublishingUserCollections, PointPublishingUserMethods, Base.IBaseQuery<PointPublishingUser, IPointPublishingUserQuery> {

}

/*********************************************
* IPointPublishingUserCollection
**********************************************/
export interface IPointPublishingUserCollection extends Base.IBaseResults<PointPublishingUser>, PointPublishingUserCollectionMethods {
	done?: (resolve: (value?: Array<PointPublishingUser>) => void) => void;
}

/*********************************************
* IPointPublishingUserQueryCollection
**********************************************/
export interface IPointPublishingUserQueryCollection extends Base.IBaseResults<PointPublishingUserOData>, PointPublishingUserCollectionMethods {
	done?: (resolve: (value?: Array<PointPublishingUserOData>) => void) => void;
}

/*********************************************
* IPointPublishingUserQuery
**********************************************/
export interface IPointPublishingUserQuery extends PointPublishingUserOData, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUser
**********************************************/
export interface PointPublishingUser extends Base.IBaseResult, PointPublishingUserProps, PointPublishingUserCollections, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUserProps
**********************************************/
export interface PointPublishingUserProps {
	AccountName?: string;
	Department?: string;
	Email?: string;
	ID?: number;
	IsDomainGroup?: boolean;
	IsMagazineOwner?: boolean;
	JobTitle?: string;
	LoginName?: string;
	Name?: string;
	PictureUrl?: string;
	SipAddress?: string;
}

/*********************************************
* PointPublishingUserPropMethods
**********************************************/
export interface PointPublishingUserPropMethods {

}

/*********************************************
* PointPublishingUserCollections
**********************************************/
export interface PointPublishingUserCollections extends PointPublishingUserPropMethods {

}

/*********************************************
* PointPublishingUserCollectionMethods
**********************************************/
export interface PointPublishingUserCollectionMethods {
	addOrUpdateUser(loginName?: string, isOwner?: boolean): Base.IBaseExecution<SP.Publishing.PointPublishingUser>;
	getById(userId?: number): Base.IBaseQuery<SP.Publishing.PointPublishingUser> & SP.Publishing.PointPublishingUserCollections & SP.Publishing.PointPublishingUserMethods;
}

/*********************************************
* PointPublishingUserOData
**********************************************/
export interface PointPublishingUserOData extends Base.IBaseResult, PointPublishingUserProps, PointPublishingUserMethods {

}

/*********************************************
* PointPublishingUserMethods
**********************************************/
export interface PointPublishingUserMethods {
	deleteUserFromContainerGroup(): Base.IBaseExecution<any>;
}

/*********************************************
* IPointPublishingSiteManager
**********************************************/
export interface IPointPublishingSiteManager extends PointPublishingSiteManagerCollections, PointPublishingSiteManagerMethods, Base.IBaseQuery<PointPublishingSiteManager, IPointPublishingSiteManagerQuery> {

}

/*********************************************
* IPointPublishingSiteManagerCollection
**********************************************/
export interface IPointPublishingSiteManagerCollection extends Base.IBaseResults<PointPublishingSiteManager> {
	done?: (resolve: (value?: Array<PointPublishingSiteManager>) => void) => void;
}

/*********************************************
* IPointPublishingSiteManagerQueryCollection
**********************************************/
export interface IPointPublishingSiteManagerQueryCollection extends Base.IBaseResults<PointPublishingSiteManagerOData> {
	done?: (resolve: (value?: Array<PointPublishingSiteManagerOData>) => void) => void;
}

/*********************************************
* IPointPublishingSiteManagerQuery
**********************************************/
export interface IPointPublishingSiteManagerQuery extends PointPublishingSiteManagerOData, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManager
**********************************************/
export interface PointPublishingSiteManager extends Base.IBaseResult, PointPublishingSiteManagerProps, PointPublishingSiteManagerCollections, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManagerProps
**********************************************/
export interface PointPublishingSiteManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingSiteManagerPropMethods
**********************************************/
export interface PointPublishingSiteManagerPropMethods {

}

/*********************************************
* PointPublishingSiteManagerCollections
**********************************************/
export interface PointPublishingSiteManagerCollections extends PointPublishingSiteManagerPropMethods {

}

/*********************************************
* PointPublishingSiteManagerOData
**********************************************/
export interface PointPublishingSiteManagerOData extends Base.IBaseResult, PointPublishingSiteManagerProps, PointPublishingSiteManagerMethods {

}

/*********************************************
* PointPublishingSiteManagerMethods
**********************************************/
export interface PointPublishingSiteManagerMethods {
	create(siteInfo?: SP.Publishing.PublishSiteInformation): Base.IBaseExecution<SP.Publishing.PointPublishingSiteStatus>;
	getSiteStatus(siteInfo?: SP.Publishing.PublishSiteInformation): Base.IBaseExecution<SP.Publishing.PointPublishingSiteStatus>;
}

/*********************************************
* PointPublishingSiteStatus
**********************************************/
export interface PointPublishingSiteStatus {
	FriendlyUrl?: string;
	SiteId?: any;
	SiteUrl?: string;
	Status?: number;
}

/*********************************************
* PointPublishingSiteStatusCollections
**********************************************/
export interface PointPublishingSiteStatusCollections {

}

/*********************************************
* IPointPublishingTenantManager
**********************************************/
export interface IPointPublishingTenantManager extends PointPublishingTenantManagerCollections, PointPublishingTenantManagerMethods, Base.IBaseQuery<PointPublishingTenantManager, IPointPublishingTenantManagerQuery> {

}

/*********************************************
* IPointPublishingTenantManagerCollection
**********************************************/
export interface IPointPublishingTenantManagerCollection extends Base.IBaseResults<PointPublishingTenantManager> {
	done?: (resolve: (value?: Array<PointPublishingTenantManager>) => void) => void;
}

/*********************************************
* IPointPublishingTenantManagerQueryCollection
**********************************************/
export interface IPointPublishingTenantManagerQueryCollection extends Base.IBaseResults<PointPublishingTenantManagerOData> {
	done?: (resolve: (value?: Array<PointPublishingTenantManagerOData>) => void) => void;
}

/*********************************************
* IPointPublishingTenantManagerQuery
**********************************************/
export interface IPointPublishingTenantManagerQuery extends PointPublishingTenantManagerOData, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManager
**********************************************/
export interface PointPublishingTenantManager extends Base.IBaseResult, PointPublishingTenantManagerProps, PointPublishingTenantManagerCollections, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManagerProps
**********************************************/
export interface PointPublishingTenantManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PointPublishingTenantManagerPropMethods
**********************************************/
export interface PointPublishingTenantManagerPropMethods {

}

/*********************************************
* PointPublishingTenantManagerCollections
**********************************************/
export interface PointPublishingTenantManagerCollections extends PointPublishingTenantManagerPropMethods {

}

/*********************************************
* PointPublishingTenantManagerOData
**********************************************/
export interface PointPublishingTenantManagerOData extends Base.IBaseResult, PointPublishingTenantManagerProps, PointPublishingTenantManagerMethods {

}

/*********************************************
* PointPublishingTenantManagerMethods
**********************************************/
export interface PointPublishingTenantManagerMethods {
	isBlogEnabled(): Base.IBaseExecution<boolean>;
}

/*********************************************
* PrimaryCityTime
**********************************************/
export interface PrimaryCityTime {
	Location?: string;
	Time?: string;
	UtcOffset?: string;
}

/*********************************************
* PrimaryCityTimeCollections
**********************************************/
export interface PrimaryCityTimeCollections {

}

/*********************************************
* SitePageMetadata
**********************************************/
export interface SitePageMetadata {
	AbsoluteUrl?: string;
	AuthorByline?: { results: Array<string> };
	BannerImageUrl?: string;
	BannerThumbnailUrl?: string;
	CommentCount?: number;
	CommentsDisabled?: boolean;
	ContentTypeId?: string;
	Description?: string;
	DoesUserHaveEditPermission?: boolean;
	FileName?: string;
	FirstPublished?: any;
	FirstPublishedRelativeTime?: string;
	Id?: number;
	IsPageCheckedOutToCurrentUser?: boolean;
	IsWebWelcomePage?: boolean;
	LikeCount?: number;
	ListId?: any;
	Modified?: any;
	ModifiedRelativeTime?: string;
	PageLayoutType?: string;
	Path?: SP.ResourcePath;
	PromotedState?: number;
	PublishStartDate?: any;
	SocialBarOnSitePagesDisabled?: boolean;
	Title?: string;
	TopicHeader?: string;
	UniqueId?: any;
	Url?: string;
	Version?: string;
	VersionInfo?: SP.Publishing.SitePageVersionInfo;
}

/*********************************************
* SitePageMetadataCollections
**********************************************/
export interface SitePageMetadataCollections extends SitePageMetadataCollectionMethods {

}

/*********************************************
* SitePageMetadataOData
**********************************************/
export interface SitePageMetadataOData extends Base.IBaseResult, SitePageMetadata {
	CreatedBy: SP.Publishing.UserInfo & SP.Publishing.UserInfoCollections;
	LastModifiedBy: SP.Publishing.UserInfo & SP.Publishing.UserInfoCollections;
}

/*********************************************
* SitePageMetadataCollectionMethods
**********************************************/
export interface SitePageMetadataCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.Publishing.SitePageMetadata, SP.Publishing.SitePageMetadataOData> & SP.Publishing.SitePageMetadataCollections;
}

/*********************************************
* UserInfo
**********************************************/
export interface UserInfo {
	AccountName?: string;
	Acronym?: string;
	Color?: string;
	Name?: string;
}

/*********************************************
* UserInfoCollections
**********************************************/
export interface UserInfoCollections {

}

/*********************************************
* ISitePage
**********************************************/
export interface ISitePage extends SitePageCollections, SitePageMethods, Base.IBaseQuery<SitePage, ISitePageQuery> {

}

/*********************************************
* ISitePageCollection
**********************************************/
export interface ISitePageCollection extends Base.IBaseResults<SitePage>, SitePageCollectionMethods {
	done?: (resolve: (value?: Array<SitePage>) => void) => void;
}

/*********************************************
* ISitePageQueryCollection
**********************************************/
export interface ISitePageQueryCollection extends Base.IBaseResults<SitePageOData>, SitePageCollectionMethods {
	done?: (resolve: (value?: Array<SitePageOData>) => void) => void;
}

/*********************************************
* ISitePageQuery
**********************************************/
export interface ISitePageQuery extends SitePageOData, SitePageMethods {

}

/*********************************************
* SitePage
**********************************************/
export interface SitePage extends SP.Publishing.SitePageMetadata, Base.IBaseResult, SitePageProps, SitePageCollections, SitePageMethods {

}

/*********************************************
* SitePageProps
**********************************************/
export interface SitePageProps {
	AlternativeUrlMap?: string;
	CanvasContent1?: string;
	CanvasJson1?: string;
	IsLikedByCurrentUser?: boolean;
	IsTemplate?: boolean;
	LayoutWebpartsContent?: string;
	Name?: string;
	SitePageFlags?: string;
}

/*********************************************
* SitePagePropMethods
**********************************************/
export interface SitePagePropMethods {
	Translations(): Base.IBaseExecution<SP.TranslationStatusCollection> & SP.TranslationStatusCollectionCollections & SP.TranslationStatusCollectionMethods;
}

/*********************************************
* SitePageCollections
**********************************************/
export interface SitePageCollections extends SitePagePropMethods {

}

/*********************************************
* SitePageCollectionMethods
**********************************************/
export interface SitePageCollectionMethods {
	createAppPage(webPartDataAsJson?: string): Base.IBaseExecution<string>;
	createFullPageApp(webPartDataAsJson?: string, title?: string, addToQuickLaunch?: boolean): Base.IBaseExecution<string>;
	ensureTitleResource(): Base.IBaseExecution<any>;
	feed(promotedState?: number, published?: boolean, metadataFilter?: string, languageOverride?: string): Base.IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	feedTargeted(promotedState?: number, published?: boolean, metadataFilter?: string, languageOverride?: string): Base.IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	getById(id?: number): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getByUniqueId(uniqueId?: any): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getByUrl(url?: string): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getPageColumnState(url?: string): Base.IBaseExecution<number>;
	isSitePage(url?: string): Base.IBaseExecution<boolean>;
	templates(): Base.IBaseExecution<Array<SP.Publishing.SitePageMetadata>>;
	updateAppPage(pageId?: number, webPartDataAsJson?: string, title?: string, includeInNavigation?: boolean): Base.IBaseExecution<string>;
	updateFullPageApp(serverRelativeUrl?: string, webPartDataAsJson?: string): Base.IBaseExecution<any>;
}

/*********************************************
* SitePageOData
**********************************************/
export interface SitePageOData extends Base.IBaseResult, SitePageProps, SitePageMethods {
	Translations: SP.TranslationStatusCollection & SP.TranslationStatusCollectionCollections;
}

/*********************************************
* SitePageMethods
**********************************************/
export interface SitePageMethods {
	checkOut(): Base.IBaseExecution<boolean>;
	checkoutPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	copy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	createNewsCopy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	demoteFromNews(): Base.IBaseExecution<boolean>;
	discardPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getVersion(versionId?: number): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	promoteToNews(): Base.IBaseExecution<boolean>;
	publish(): Base.IBaseExecution<boolean>;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<boolean>;
	savePage(pageStream?: any): Base.IBaseExecution<any>;
	savePageAsDraft(pageStream?: any): Base.IBaseExecution<boolean>;
	savePageAsTemplate(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	schedulePublish(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<string>;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IRepostPage
**********************************************/
export interface IRepostPage extends RepostPageCollections, RepostPageMethods, Base.IBaseQuery<RepostPage, IRepostPageQuery> {

}

/*********************************************
* IRepostPageCollection
**********************************************/
export interface IRepostPageCollection extends Base.IBaseResults<RepostPage>, RepostPageCollectionMethods {
	done?: (resolve: (value?: Array<RepostPage>) => void) => void;
}

/*********************************************
* IRepostPageQueryCollection
**********************************************/
export interface IRepostPageQueryCollection extends Base.IBaseResults<RepostPageOData>, RepostPageCollectionMethods {
	done?: (resolve: (value?: Array<RepostPageOData>) => void) => void;
}

/*********************************************
* IRepostPageQuery
**********************************************/
export interface IRepostPageQuery extends RepostPageOData, RepostPageMethods {

}

/*********************************************
* RepostPage
**********************************************/
export interface RepostPage extends SP.Publishing.SitePage, Base.IBaseResult, RepostPageProps, RepostPageCollections, RepostPageMethods {

}

/*********************************************
* RepostPageProps
**********************************************/
export interface RepostPageProps {
	IsBannerImageUrlExternal?: boolean;
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
	ShouldSaveAsDraft?: boolean;
}

/*********************************************
* RepostPagePropMethods
**********************************************/
export interface RepostPagePropMethods {

}

/*********************************************
* RepostPageCollections
**********************************************/
export interface RepostPageCollections extends RepostPagePropMethods {

}

/*********************************************
* RepostPageCollectionMethods
**********************************************/
export interface RepostPageCollectionMethods {
	isContentTypeAvailable(): Base.IBaseExecution<boolean>;
}

/*********************************************
* RepostPageOData
**********************************************/
export interface RepostPageOData extends Base.IBaseResult, RepostPageProps, RepostPageMethods {

}

/*********************************************
* RepostPageMethods
**********************************************/
export interface RepostPageMethods {
	checkOut(): Base.IBaseExecution<boolean>;
	checkoutPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	copy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	createNewsCopy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	demoteFromNews(): Base.IBaseExecution<boolean>;
	discardPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getVersion(versionId?: number): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	promoteToNews(): Base.IBaseExecution<boolean>;
	publish(): Base.IBaseExecution<boolean>;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<boolean>;
	savePage(pageStream?: any): Base.IBaseExecution<any>;
	savePageAsDraft(pageStream?: any): Base.IBaseExecution<boolean>;
	savePageAsTemplate(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	schedulePublish(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<string>;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* RepostPageMetadata
**********************************************/
export interface RepostPageMetadata {
	OriginalSourceItemId?: any;
	OriginalSourceListId?: any;
	OriginalSourceSiteId?: any;
	OriginalSourceUrl?: string;
	OriginalSourceWebId?: any;
}

/*********************************************
* RepostPageMetadataCollections
**********************************************/
export interface RepostPageMetadataCollections {

}

/*********************************************
* IRichSharing
**********************************************/
export interface IRichSharing extends RichSharingCollections, RichSharingMethods, Base.IBaseQuery<RichSharing, IRichSharingQuery> {

}

/*********************************************
* IRichSharingCollection
**********************************************/
export interface IRichSharingCollection extends Base.IBaseResults<RichSharing> {
	done?: (resolve: (value?: Array<RichSharing>) => void) => void;
}

/*********************************************
* IRichSharingQueryCollection
**********************************************/
export interface IRichSharingQueryCollection extends Base.IBaseResults<RichSharingOData> {
	done?: (resolve: (value?: Array<RichSharingOData>) => void) => void;
}

/*********************************************
* IRichSharingQuery
**********************************************/
export interface IRichSharingQuery extends RichSharingOData, RichSharingMethods {

}

/*********************************************
* RichSharing
**********************************************/
export interface RichSharing extends Base.IBaseResult, RichSharingProps, RichSharingCollections, RichSharingMethods {

}

/*********************************************
* RichSharingProps
**********************************************/
export interface RichSharingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RichSharingPropMethods
**********************************************/
export interface RichSharingPropMethods {

}

/*********************************************
* RichSharingCollections
**********************************************/
export interface RichSharingCollections extends RichSharingPropMethods {

}

/*********************************************
* RichSharingOData
**********************************************/
export interface RichSharingOData extends Base.IBaseResult, RichSharingProps, RichSharingMethods {

}

/*********************************************
* RichSharingMethods
**********************************************/
export interface RichSharingMethods {
	sharePageByEmail(url?: string, message?: string, recipientEmails?: Array<string>): Base.IBaseExecution<any>;
	shareSiteByEmail(CustomDescription?: string, CustomTitle?: string, Message?: string, Url?: string, recipientEmails?: Array<string>): Base.IBaseExecution<any>;
}

/*********************************************
* ISharePointHomeServiceManager
**********************************************/
export interface ISharePointHomeServiceManager extends SharePointHomeServiceManagerCollections, SharePointHomeServiceManagerMethods, Base.IBaseQuery<SharePointHomeServiceManager, ISharePointHomeServiceManagerQuery> {

}

/*********************************************
* ISharePointHomeServiceManagerCollection
**********************************************/
export interface ISharePointHomeServiceManagerCollection extends Base.IBaseResults<SharePointHomeServiceManager> {
	done?: (resolve: (value?: Array<SharePointHomeServiceManager>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceManagerQueryCollection
**********************************************/
export interface ISharePointHomeServiceManagerQueryCollection extends Base.IBaseResults<SharePointHomeServiceManagerOData> {
	done?: (resolve: (value?: Array<SharePointHomeServiceManagerOData>) => void) => void;
}

/*********************************************
* ISharePointHomeServiceManagerQuery
**********************************************/
export interface ISharePointHomeServiceManagerQuery extends SharePointHomeServiceManagerOData, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManager
**********************************************/
export interface SharePointHomeServiceManager extends Base.IBaseResult, SharePointHomeServiceManagerProps, SharePointHomeServiceManagerCollections, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManagerProps
**********************************************/
export interface SharePointHomeServiceManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharePointHomeServiceManagerPropMethods
**********************************************/
export interface SharePointHomeServiceManagerPropMethods {

}

/*********************************************
* SharePointHomeServiceManagerCollections
**********************************************/
export interface SharePointHomeServiceManagerCollections extends SharePointHomeServiceManagerPropMethods {

}

/*********************************************
* SharePointHomeServiceManagerOData
**********************************************/
export interface SharePointHomeServiceManagerOData extends Base.IBaseResult, SharePointHomeServiceManagerProps, SharePointHomeServiceManagerMethods {

}

/*********************************************
* SharePointHomeServiceManagerMethods
**********************************************/
export interface SharePointHomeServiceManagerMethods {
	getAcronymsAndColors(labels?: Array<SP.Publishing.TextValueWithLanguage>): Base.IBaseCollection<SP.Publishing.AcronymInformation>;
}

/*********************************************
* ISitePage3D
**********************************************/
export interface ISitePage3D extends SitePage3DCollections, SitePage3DMethods, Base.IBaseQuery<SitePage3D, ISitePage3DQuery> {

}

/*********************************************
* ISitePage3DCollection
**********************************************/
export interface ISitePage3DCollection extends Base.IBaseResults<SitePage3D> {
	done?: (resolve: (value?: Array<SitePage3D>) => void) => void;
}

/*********************************************
* ISitePage3DQueryCollection
**********************************************/
export interface ISitePage3DQueryCollection extends Base.IBaseResults<SitePage3DOData> {
	done?: (resolve: (value?: Array<SitePage3DOData>) => void) => void;
}

/*********************************************
* ISitePage3DQuery
**********************************************/
export interface ISitePage3DQuery extends SitePage3DOData, SitePage3DMethods {

}

/*********************************************
* SitePage3D
**********************************************/
export interface SitePage3D extends SP.Publishing.SitePage, Base.IBaseResult, SitePage3DProps, SitePage3DCollections, SitePage3DMethods {

}

/*********************************************
* SitePage3DProps
**********************************************/
export interface SitePage3DProps {
	SpaceContent?: string;
}

/*********************************************
* SitePage3DPropMethods
**********************************************/
export interface SitePage3DPropMethods {

}

/*********************************************
* SitePage3DCollections
**********************************************/
export interface SitePage3DCollections extends SitePage3DPropMethods {

}

/*********************************************
* SitePage3DOData
**********************************************/
export interface SitePage3DOData extends Base.IBaseResult, SitePage3DProps, SitePage3DMethods {

}

/*********************************************
* SitePage3DMethods
**********************************************/
export interface SitePage3DMethods {
	checkOut(): Base.IBaseExecution<boolean>;
	checkoutPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	copy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	createNewsCopy(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	demoteFromNews(): Base.IBaseExecution<boolean>;
	discardPage(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	getVersion(versionId?: number): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	promoteToNews(): Base.IBaseExecution<boolean>;
	publish(): Base.IBaseExecution<boolean>;
	saveDraft(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<boolean>;
	savePage(pageStream?: any): Base.IBaseExecution<any>;
	savePageAsDraft(pageStream?: any): Base.IBaseExecution<boolean>;
	savePageAsTemplate(): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
	schedulePublish(sitePage?: SP.Publishing.SitePageFieldsData): Base.IBaseExecution<string>;
	sharePagePreviewByEmail(message?: string, recipientEmails?: Array<string>): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISitePageService
**********************************************/
export interface ISitePageService extends SitePageServiceCollections, SitePageServiceMethods, Base.IBaseQuery<SitePageService, ISitePageServiceQuery> {

}

/*********************************************
* ISitePageServiceCollection
**********************************************/
export interface ISitePageServiceCollection extends Base.IBaseResults<SitePageService> {
	done?: (resolve: (value?: Array<SitePageService>) => void) => void;
}

/*********************************************
* ISitePageServiceQueryCollection
**********************************************/
export interface ISitePageServiceQueryCollection extends Base.IBaseResults<SitePageServiceOData> {
	done?: (resolve: (value?: Array<SitePageServiceOData>) => void) => void;
}

/*********************************************
* ISitePageServiceQuery
**********************************************/
export interface ISitePageServiceQuery extends SitePageServiceOData, SitePageServiceMethods {

}

/*********************************************
* SitePageService
**********************************************/
export interface SitePageService extends Base.IBaseResult, SitePageServiceProps, SitePageServiceCollections, SitePageServiceMethods {

}

/*********************************************
* SitePageServiceProps
**********************************************/
export interface SitePageServiceProps {
	CustomContentApprovalEnabled?: boolean;
}

/*********************************************
* SitePageServicePropMethods
**********************************************/
export interface SitePageServicePropMethods {
	CommunicationSite(): Base.IBaseExecution<SP.Publishing.CommunicationSite> & SP.Publishing.CommunicationSiteCollections & SP.Publishing.CommunicationSiteMethods;
}

/*********************************************
* SitePageServiceCollections
**********************************************/
export interface SitePageServiceCollections extends SitePageServicePropMethods {
	Pages(): Base.IBaseCollection<SP.Publishing.SitePage, SP.Publishing.SitePageOData, Base.IBaseExecution & SP.Publishing.SitePageCollectionMethods> & Base.IBaseExecution & SP.Publishing.SitePageCollectionMethods;
	Pages(id: string | number): Base.IBaseQuery<SP.Publishing.SitePage, SP.Publishing.SitePageOData> & SP.Publishing.SitePageCollections & SP.Publishing.SitePageMethods;
}

/*********************************************
* SitePageServiceOData
**********************************************/
export interface SitePageServiceOData extends Base.IBaseResult, SitePageServiceProps, SitePageServiceMethods {
	CommunicationSite: SP.Publishing.CommunicationSite & SP.Publishing.CommunicationSiteCollections;
	Pages: Base.IBaseResults<SP.Publishing.SitePage> & SP.Publishing.SitePageCollectionMethods;
}

/*********************************************
* SitePageServiceMethods
**********************************************/
export interface SitePageServiceMethods {
	addImage(pageName?: string, imageFileName?: string, imageStream?: any): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	addImageFromExternalUrl(pageName?: string, imageFileName?: string, externalUrl?: string, subFolderName?: string): Base.IBaseQuery<SP.File, SP.FileOData> & SP.FileCollections & SP.FileMethods;
	canCreatePromotedPage(): Base.IBaseExecution<boolean>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISpotlightChannel
**********************************************/
export interface ISpotlightChannel extends SpotlightChannelCollections, SpotlightChannelMethods, Base.IBaseQuery<SpotlightChannel, ISpotlightChannelQuery> {

}

/*********************************************
* ISpotlightChannelCollection
**********************************************/
export interface ISpotlightChannelCollection extends Base.IBaseResults<SpotlightChannel>, SpotlightChannelCollectionMethods {
	done?: (resolve: (value?: Array<SpotlightChannel>) => void) => void;
}

/*********************************************
* ISpotlightChannelQueryCollection
**********************************************/
export interface ISpotlightChannelQueryCollection extends Base.IBaseResults<SpotlightChannelOData>, SpotlightChannelCollectionMethods {
	done?: (resolve: (value?: Array<SpotlightChannelOData>) => void) => void;
}

/*********************************************
* ISpotlightChannelQuery
**********************************************/
export interface ISpotlightChannelQuery extends SpotlightChannelOData, SpotlightChannelMethods {

}

/*********************************************
* SpotlightChannel
**********************************************/
export interface SpotlightChannel extends Base.IBaseResult, SpotlightChannelProps, SpotlightChannelCollections, SpotlightChannelMethods {

}

/*********************************************
* SpotlightChannelProps
**********************************************/
export interface SpotlightChannelProps {
	ChannelId?: any;
	Id?: number;
	TileHtmlColor?: string;
	Title?: string;
	VideoLibraryServerRelativeUrl?: string;
}

/*********************************************
* SpotlightChannelPropMethods
**********************************************/
export interface SpotlightChannelPropMethods {
	Channel(): Base.IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
}

/*********************************************
* SpotlightChannelCollections
**********************************************/
export interface SpotlightChannelCollections extends SpotlightChannelPropMethods {

}

/*********************************************
* SpotlightChannelCollectionMethods
**********************************************/
export interface SpotlightChannelCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelOData> & SP.Publishing.SpotlightChannelCollections & SP.Publishing.SpotlightChannelMethods;
}

/*********************************************
* SpotlightChannelOData
**********************************************/
export interface SpotlightChannelOData extends Base.IBaseResult, SpotlightChannelProps, SpotlightChannelMethods {
	Channel: SP.Publishing.VideoChannel & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelCollectionMethods;
}

/*********************************************
* SpotlightChannelMethods
**********************************************/
export interface SpotlightChannelMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* IVideoChannel
**********************************************/
export interface IVideoChannel extends VideoChannelCollections, VideoChannelMethods, Base.IBaseQuery<VideoChannel, IVideoChannelQuery> {

}

/*********************************************
* IVideoChannelCollection
**********************************************/
export interface IVideoChannelCollection extends Base.IBaseResults<VideoChannel>, VideoChannelCollectionMethods {
	done?: (resolve: (value?: Array<VideoChannel>) => void) => void;
}

/*********************************************
* IVideoChannelQueryCollection
**********************************************/
export interface IVideoChannelQueryCollection extends Base.IBaseResults<VideoChannelOData>, VideoChannelCollectionMethods {
	done?: (resolve: (value?: Array<VideoChannelOData>) => void) => void;
}

/*********************************************
* IVideoChannelQuery
**********************************************/
export interface IVideoChannelQuery extends VideoChannelOData, VideoChannelMethods {

}

/*********************************************
* VideoChannel
**********************************************/
export interface VideoChannel extends Base.IBaseResult, VideoChannelProps, VideoChannelCollections, VideoChannelMethods {

}

/*********************************************
* VideoChannelProps
**********************************************/
export interface VideoChannelProps {
	CanAdministrateByCurrent?: boolean;
	CanEditByCurrent?: boolean;
	CanViewByCurrent?: boolean;
	ChannelPageUrl?: string;
	Description?: string;
	DownloadUrlVisibleMinPermission?: number;
	FullUrl?: string;
	Id?: any;
	ServerRelativeUrl?: string;
	ShareByEmailEnabled?: boolean;
	TileHtmlColor?: string;
	Title?: string;
	YammerDefaultGroupId?: number;
	YammerEnabled?: boolean;
}

/*********************************************
* VideoChannelPropMethods
**********************************************/
export interface VideoChannelPropMethods {
	Search(): Base.IBaseExecution<SP.Publishing.Search> & SP.Publishing.SearchCollections & SP.Publishing.SearchMethods;
}

/*********************************************
* VideoChannelCollections
**********************************************/
export interface VideoChannelCollections extends VideoChannelPropMethods {
	SpotlightVideos(): Base.IBaseCollection<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoOData, Base.IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods> & Base.IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): Base.IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoOData> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
	Videos(): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	Videos(id: string | number): Base.IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* VideoChannelCollectionMethods
**********************************************/
export interface VideoChannelCollectionMethods {
	getById(id?: any): Base.IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
}

/*********************************************
* VideoChannelOData
**********************************************/
export interface VideoChannelOData extends Base.IBaseResult, VideoChannelProps, VideoChannelMethods {
	Search: SP.Publishing.Search & SP.Publishing.SearchCollections;
	SpotlightVideos: Base.IBaseResults<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollectionMethods;
	Videos: Base.IBaseResults<SP.Publishing.VideoItem> & SP.Publishing.VideoItemCollectionMethods;
}

/*********************************************
* VideoChannelMethods
**********************************************/
export interface VideoChannelMethods {
	getAllVideos(skip?: number, limit?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	getChannelPageUrl(viewMode?: number): Base.IBaseExecution<string>;
	getMyVideos(skip?: number, limit?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	getPermissionGroup(permission?: number): Base.IBaseQuery<SP.Publishing.VideoPermissionGroup, SP.Publishing.VideoPermissionGroupOData> & SP.Publishing.VideoPermissionGroupCollections & SP.Publishing.VideoPermissionGroupMethods;
	getVideoCount(): Base.IBaseExecution<number>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* ISearch
**********************************************/
export interface ISearch extends SearchCollections, SearchMethods, Base.IBaseExecution<ISearch> {

}

/*********************************************
* ISearchCollection
**********************************************/
export interface ISearchCollection extends Base.IBaseResults<Search> {
	done?: (resolve: (value?: Array<Search>) => void) => void;
}

/*********************************************
* ISearchQueryCollection
**********************************************/
export interface ISearchQueryCollection extends Base.IBaseResults<SearchOData> {
	done?: (resolve: (value?: Array<SearchOData>) => void) => void;
}

/*********************************************
* ISearchQuery
**********************************************/
export interface ISearchQuery extends SearchOData, SearchMethods {

}

/*********************************************
* Search
**********************************************/
export interface Search extends Base.IBaseResult, SearchProps, SearchCollections, SearchMethods {

}

/*********************************************
* SearchProps
**********************************************/
export interface SearchProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	QueryLanguages?: { results: Array<number> };
}

/*********************************************
* SearchPropMethods
**********************************************/
export interface SearchPropMethods {

}

/*********************************************
* SearchCollections
**********************************************/
export interface SearchCollections extends SearchPropMethods {

}

/*********************************************
* SearchOData
**********************************************/
export interface SearchOData extends Base.IBaseResult, SearchProps, SearchMethods {

}

/*********************************************
* SearchMethods
**********************************************/
export interface SearchMethods {
	newest(startItemIndex?: number, itemLimit?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	popular(startItemIndex?: number, itemLimit?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	query(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
	queryChannels(queryText?: string, startItemIndex?: number, itemLimit?: number, culture?: number): Base.IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData, Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	related(videoId?: any, startItemIndex?: number, itemLimit?: number): Base.IBaseCollection<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData, Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoItemCollectionMethods;
}

/*********************************************
* ISpotlightVideo
**********************************************/
export interface ISpotlightVideo extends SpotlightVideoCollections, SpotlightVideoMethods, Base.IBaseQuery<SpotlightVideo, ISpotlightVideoQuery> {

}

/*********************************************
* ISpotlightVideoCollection
**********************************************/
export interface ISpotlightVideoCollection extends Base.IBaseResults<SpotlightVideo>, SpotlightVideoCollectionMethods {
	done?: (resolve: (value?: Array<SpotlightVideo>) => void) => void;
}

/*********************************************
* ISpotlightVideoQueryCollection
**********************************************/
export interface ISpotlightVideoQueryCollection extends Base.IBaseResults<SpotlightVideoOData>, SpotlightVideoCollectionMethods {
	done?: (resolve: (value?: Array<SpotlightVideoOData>) => void) => void;
}

/*********************************************
* ISpotlightVideoQuery
**********************************************/
export interface ISpotlightVideoQuery extends SpotlightVideoOData, SpotlightVideoMethods {

}

/*********************************************
* SpotlightVideo
**********************************************/
export interface SpotlightVideo extends Base.IBaseResult, SpotlightVideoProps, SpotlightVideoCollections, SpotlightVideoMethods {

}

/*********************************************
* SpotlightVideoProps
**********************************************/
export interface SpotlightVideoProps {
	Id?: number;
	ServerRelativeUrl?: string;
	Url?: string;
}

/*********************************************
* SpotlightVideoPropMethods
**********************************************/
export interface SpotlightVideoPropMethods {
	Video(): Base.IBaseQuery<SP.Publishing.VideoItem, SP.Publishing.VideoItemOData> & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemMethods;
}

/*********************************************
* SpotlightVideoCollections
**********************************************/
export interface SpotlightVideoCollections extends SpotlightVideoPropMethods {

}

/*********************************************
* SpotlightVideoCollectionMethods
**********************************************/
export interface SpotlightVideoCollectionMethods {
	getById(id?: number): Base.IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoOData> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
}

/*********************************************
* SpotlightVideoOData
**********************************************/
export interface SpotlightVideoOData extends Base.IBaseResult, SpotlightVideoProps, SpotlightVideoMethods {
	Video: SP.Publishing.VideoItem & SP.Publishing.VideoItemCollections & SP.Publishing.VideoItemCollectionMethods;
}

/*********************************************
* SpotlightVideoMethods
**********************************************/
export interface SpotlightVideoMethods {
	delete(): Base.IBaseExecution<any>;
	update(): Base.IBaseExecution<any>;
}

/*********************************************
* SubtitleFile
**********************************************/
export interface SubtitleFile {
	Language?: string;
	NativeLanguageName?: string;
	Url?: string;
}

/*********************************************
* SubtitleFileCollections
**********************************************/
export interface SubtitleFileCollections extends SubtitleFileCollectionMethods {

}

/*********************************************
* SubtitleFileCollectionMethods
**********************************************/
export interface SubtitleFileCollectionMethods {
	add(language?: string, extension?: string, stream?: any): Base.IBaseExecution<any>;
	getSubtitleFile(name?: string): Base.IBaseExecution<any>;
	remove(name?: string): Base.IBaseExecution<any>;
}

/*********************************************
* IVideoPermissionGroup
**********************************************/
export interface IVideoPermissionGroup extends VideoPermissionGroupCollections, VideoPermissionGroupMethods, Base.IBaseQuery<VideoPermissionGroup, IVideoPermissionGroupQuery> {

}

/*********************************************
* IVideoPermissionGroupCollection
**********************************************/
export interface IVideoPermissionGroupCollection extends Base.IBaseResults<VideoPermissionGroup> {
	done?: (resolve: (value?: Array<VideoPermissionGroup>) => void) => void;
}

/*********************************************
* IVideoPermissionGroupQueryCollection
**********************************************/
export interface IVideoPermissionGroupQueryCollection extends Base.IBaseResults<VideoPermissionGroupOData> {
	done?: (resolve: (value?: Array<VideoPermissionGroupOData>) => void) => void;
}

/*********************************************
* IVideoPermissionGroupQuery
**********************************************/
export interface IVideoPermissionGroupQuery extends VideoPermissionGroupOData, VideoPermissionGroupMethods {

}

/*********************************************
* VideoPermissionGroup
**********************************************/
export interface VideoPermissionGroup extends Base.IBaseResult, VideoPermissionGroupProps, VideoPermissionGroupCollections, VideoPermissionGroupMethods {

}

/*********************************************
* VideoPermissionGroupProps
**********************************************/
export interface VideoPermissionGroupProps {
	Id?: number;
}

/*********************************************
* VideoPermissionGroupPropMethods
**********************************************/
export interface VideoPermissionGroupPropMethods {

}

/*********************************************
* VideoPermissionGroupCollections
**********************************************/
export interface VideoPermissionGroupCollections extends VideoPermissionGroupPropMethods {
	Users(): Base.IBaseCollection<SP.User, SP.UserOData, Base.IBaseExecution & SP.UserCollectionMethods> & Base.IBaseExecution & SP.UserCollectionMethods;
	Users(id: string | number): Base.IBaseQuery<SP.User, SP.UserOData> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* VideoPermissionGroupOData
**********************************************/
export interface VideoPermissionGroupOData extends Base.IBaseResult, VideoPermissionGroupProps, VideoPermissionGroupMethods {
	Users: Base.IBaseResults<SP.User> & SP.UserCollectionMethods;
}

/*********************************************
* VideoPermissionGroupMethods
**********************************************/
export interface VideoPermissionGroupMethods {
	hasCurrentUser(): Base.IBaseExecution<boolean>;
}

/*********************************************
* VideoPlaybackMetadata
**********************************************/
export interface VideoPlaybackMetadata {
	HLSUrl?: string;
	SdnPlaybackMetadata?: string;
	StreamingUrl?: string;
	Token?: string;
}

/*********************************************
* VideoPlaybackMetadataCollections
**********************************************/
export interface VideoPlaybackMetadataCollections {

}

/*********************************************
* VideoServiceDiscoverer
**********************************************/
export interface VideoServiceDiscoverer {
	ChannelUrlTemplate?: string;
	IsFeedbackEnabled?: boolean;
	IsLicensedForVideoPortal?: boolean;
	IsMigratedToStream?: boolean;
	IsO365VideoEnabled?: boolean;
	IsVideoPortalEnabled?: boolean;
	O365VideoPageUrl?: string;
	PlayerUrlTemplate?: string;
	VideoPortalLayoutsUrl?: string;
	VideoPortalUrl?: string;
}

/*********************************************
* VideoServiceDiscovererCollections
**********************************************/
export interface VideoServiceDiscovererCollections {

}

/*********************************************
* IVideoServiceManager
**********************************************/
export interface IVideoServiceManager extends VideoServiceManagerCollections, VideoServiceManagerMethods, Base.IBaseQuery<VideoServiceManager, IVideoServiceManagerQuery> {

}

/*********************************************
* IVideoServiceManagerCollection
**********************************************/
export interface IVideoServiceManagerCollection extends Base.IBaseResults<VideoServiceManager> {
	done?: (resolve: (value?: Array<VideoServiceManager>) => void) => void;
}

/*********************************************
* IVideoServiceManagerQueryCollection
**********************************************/
export interface IVideoServiceManagerQueryCollection extends Base.IBaseResults<VideoServiceManagerOData> {
	done?: (resolve: (value?: Array<VideoServiceManagerOData>) => void) => void;
}

/*********************************************
* IVideoServiceManagerQuery
**********************************************/
export interface IVideoServiceManagerQuery extends VideoServiceManagerOData, VideoServiceManagerMethods {

}

/*********************************************
* VideoServiceManager
**********************************************/
export interface VideoServiceManager extends Base.IBaseResult, VideoServiceManagerProps, VideoServiceManagerCollections, VideoServiceManagerMethods {

}

/*********************************************
* VideoServiceManagerProps
**********************************************/
export interface VideoServiceManagerProps {
	AutomaticMigrationType?: string;
	CanAdministratePortalByCurrent?: boolean;
	CanCreateChannelsByCurrent?: boolean;
	CanViewPortalByCurrent?: boolean;
	UploadGuidelinesLink?: string;
	VideoGuidelinesLink?: string;
}

/*********************************************
* VideoServiceManagerPropMethods
**********************************************/
export interface VideoServiceManagerPropMethods {
	Search(): Base.IBaseExecution<SP.Publishing.Search> & SP.Publishing.SearchCollections & SP.Publishing.SearchMethods;
}

/*********************************************
* VideoServiceManagerCollections
**********************************************/
export interface VideoServiceManagerCollections extends VideoServiceManagerPropMethods {
	CanEditChannels(): Base.IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData, Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	CanEditChannels(id: string | number): Base.IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
	Channels(): Base.IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData, Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	Channels(id: string | number): Base.IBaseQuery<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData> & SP.Publishing.VideoChannelCollections & SP.Publishing.VideoChannelMethods;
	SpotlightChannels(): Base.IBaseCollection<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelOData, Base.IBaseExecution & SP.Publishing.SpotlightChannelCollectionMethods> & Base.IBaseExecution & SP.Publishing.SpotlightChannelCollectionMethods;
	SpotlightChannels(id: string | number): Base.IBaseQuery<SP.Publishing.SpotlightChannel, SP.Publishing.SpotlightChannelOData> & SP.Publishing.SpotlightChannelCollections & SP.Publishing.SpotlightChannelMethods;
	SpotlightVideos(): Base.IBaseCollection<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoOData, Base.IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods> & Base.IBaseExecution & SP.Publishing.SpotlightVideoCollectionMethods;
	SpotlightVideos(id: string | number): Base.IBaseQuery<SP.Publishing.SpotlightVideo, SP.Publishing.SpotlightVideoOData> & SP.Publishing.SpotlightVideoCollections & SP.Publishing.SpotlightVideoMethods;
}

/*********************************************
* VideoServiceManagerOData
**********************************************/
export interface VideoServiceManagerOData extends Base.IBaseResult, VideoServiceManagerProps, VideoServiceManagerMethods {
	CanEditChannels: Base.IBaseResults<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollectionMethods;
	Channels: Base.IBaseResults<SP.Publishing.VideoChannel> & SP.Publishing.VideoChannelCollectionMethods;
	Search: SP.Publishing.Search & SP.Publishing.SearchCollections;
	SpotlightChannels: Base.IBaseResults<SP.Publishing.SpotlightChannel> & SP.Publishing.SpotlightChannelCollectionMethods;
	SpotlightVideos: Base.IBaseResults<SP.Publishing.SpotlightVideo> & SP.Publishing.SpotlightVideoCollectionMethods;
}

/*********************************************
* VideoServiceManagerMethods
**********************************************/
export interface VideoServiceManagerMethods {
	getChannels(startIndex?: number, limit?: number): Base.IBaseCollection<SP.Publishing.VideoChannel, SP.Publishing.VideoChannelOData, Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods> & Base.IBaseExecution & SP.Publishing.VideoChannelCollectionMethods;
	getPermissionGroup(permission?: number): Base.IBaseQuery<SP.Publishing.VideoPermissionGroup, SP.Publishing.VideoPermissionGroupOData> & SP.Publishing.VideoPermissionGroupCollections & SP.Publishing.VideoPermissionGroupMethods;
}

/*********************************************
* VideoThumbnail
**********************************************/
export interface VideoThumbnail {
	Choice?: number;
	IsSelected?: boolean;
	Url?: string;
}

/*********************************************
* VideoThumbnailCollections
**********************************************/
export interface VideoThumbnailCollections extends VideoThumbnailCollectionMethods {

}

/*********************************************
* VideoThumbnailCollectionMethods
**********************************************/
export interface VideoThumbnailCollectionMethods {
	getByIndex(choice?: number): Base.IBaseQuery<SP.Publishing.VideoThumbnail> & SP.Publishing.VideoThumbnailCollections;
}
