import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* CrossGeoSync
**********************************************/
export interface CrossGeoSync {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CrossGeoSyncCollections
**********************************************/
export interface CrossGeoSyncCollections {

}

/*********************************************
* IFollowedContent
**********************************************/
export interface IFollowedContent extends FollowedContentCollections, FollowedContentMethods, Base.IBaseQuery<FollowedContent, IFollowedContentQuery> {

}

/*********************************************
* IFollowedContentCollection
**********************************************/
export interface IFollowedContentCollection extends Base.IBaseResults<FollowedContent> {
	done?: (resolve: (value?: Array<FollowedContent>) => void) => void;
}

/*********************************************
* IFollowedContentQueryCollection
**********************************************/
export interface IFollowedContentQueryCollection extends Base.IBaseResults<FollowedContentOData> {
	done?: (resolve: (value?: Array<FollowedContentOData>) => void) => void;
}

/*********************************************
* IFollowedContentQuery
**********************************************/
export interface IFollowedContentQuery extends FollowedContentOData, FollowedContentMethods {

}

/*********************************************
* FollowedContent
**********************************************/
export interface FollowedContent extends Base.IBaseResult, FollowedContentProps, FollowedContentCollections, FollowedContentMethods {

}

/*********************************************
* FollowedContentProps
**********************************************/
export interface FollowedContentProps {
	FollowedDocumentsUrl?: string;
	FollowedSitesUrl?: string;
}

/*********************************************
* FollowedContentPropMethods
**********************************************/
export interface FollowedContentPropMethods {

}

/*********************************************
* FollowedContentCollections
**********************************************/
export interface FollowedContentCollections extends FollowedContentPropMethods {

}

/*********************************************
* FollowedContentOData
**********************************************/
export interface FollowedContentOData extends Base.IBaseResult, FollowedContentProps, FollowedContentMethods {

}

/*********************************************
* FollowedContentMethods
**********************************************/
export interface FollowedContentMethods {
	findAndUpdateFollowedGroup(groupId?: any): Base.IBaseExecution<SP.UserProfiles.FollowedItem>;
	findAndUpdateFollowedItem(url?: string): Base.IBaseExecution<SP.UserProfiles.FollowedItem>;
	followItem(item?: SP.UserProfiles.FollowedItem): Base.IBaseExecution<SP.UserProfiles.FollowResult>;
	getFollowedStatus(url?: string): Base.IBaseExecution<number>;
	getGroups(rowLimit?: number): Base.IBaseCollection<SP.UserProfiles.FollowedItem>;
	getItem(url?: string): Base.IBaseExecution<SP.UserProfiles.FollowedItem>;
	getItems(options?: number, subtype?: number): Base.IBaseCollection<SP.UserProfiles.FollowedItem>;
	hasGroupMembershipChangedAndSyncChanges(): Base.IBaseExecution<boolean>;
	isFollowed(url?: string): Base.IBaseExecution<boolean>;
	refreshFollowedItem(item?: SP.UserProfiles.FollowedItem): Base.IBaseExecution<SP.UserProfiles.FollowedItem>;
	setItemPinState(uri?: string, groupId?: any, pinState?: number): Base.IBaseExecution<SP.UserProfiles.FollowResult>;
	stopFollowing(url?: string): Base.IBaseExecution<any>;
	updateFollowedGroupForUser(contextUri?: string, groupId?: any, loginName?: string): Base.IBaseExecution<any>;
}

/*********************************************
* FollowedItemData
**********************************************/
export interface FollowedItemData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Properties?: { results: Array<SP.KeyValue> };
}

/*********************************************
* FollowedItemDataCollections
**********************************************/
export interface FollowedItemDataCollections {

}

/*********************************************
* HashTagCollection
**********************************************/
export interface HashTagCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: { results: Array<SP.UserProfiles.HashTag> };
}

/*********************************************
* HashTagCollectionCollections
**********************************************/
export interface HashTagCollectionCollections {

}

/*********************************************
* IPeopleManager
**********************************************/
export interface IPeopleManager extends PeopleManagerCollections, PeopleManagerMethods, Base.IBaseQuery<PeopleManager, IPeopleManagerQuery> {

}

/*********************************************
* IPeopleManagerCollection
**********************************************/
export interface IPeopleManagerCollection extends Base.IBaseResults<PeopleManager> {
	done?: (resolve: (value?: Array<PeopleManager>) => void) => void;
}

/*********************************************
* IPeopleManagerQueryCollection
**********************************************/
export interface IPeopleManagerQueryCollection extends Base.IBaseResults<PeopleManagerOData> {
	done?: (resolve: (value?: Array<PeopleManagerOData>) => void) => void;
}

/*********************************************
* IPeopleManagerQuery
**********************************************/
export interface IPeopleManagerQuery extends PeopleManagerOData, PeopleManagerMethods {

}

/*********************************************
* PeopleManager
**********************************************/
export interface PeopleManager extends Base.IBaseResult, PeopleManagerProps, PeopleManagerCollections, PeopleManagerMethods {

}

/*********************************************
* PeopleManagerProps
**********************************************/
export interface PeopleManagerProps {
	EditProfileLink?: string;
	IsMyPeopleListPublic?: boolean;
}

/*********************************************
* PeopleManagerPropMethods
**********************************************/
export interface PeopleManagerPropMethods {

}

/*********************************************
* PeopleManagerCollections
**********************************************/
export interface PeopleManagerCollections extends PeopleManagerPropMethods {

}

/*********************************************
* PeopleManagerOData
**********************************************/
export interface PeopleManagerOData extends Base.IBaseResult, PeopleManagerProps, PeopleManagerMethods {

}

/*********************************************
* PeopleManagerMethods
**********************************************/
export interface PeopleManagerMethods {
	amIFollowedBy(accountName?: string): Base.IBaseExecution<boolean>;
	amIFollowing(accountName?: string): Base.IBaseExecution<boolean>;
	follow(accountName?: string): Base.IBaseExecution<any>;
	followTag(value?: any): Base.IBaseExecution<any>;
	getDefaultDocumentLibrary(accountName?: string, createSiteIfNotExists?: boolean, siteCreationPriority?: number): Base.IBaseExecution<string>;
	getFollowedTags(cTagsToFetch?: number): Base.IBaseCollection<string>;
	getFollowersFor(accountName?: string): Base.IBaseCollection<SP.UserProfiles.PersonProperties>;
	getMyFollowers(): Base.IBaseCollection<SP.UserProfiles.PersonProperties>;
	getMyProperties(): Base.IBaseExecution<SP.UserProfiles.PersonProperties>;
	getMySuggestions(): Base.IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPeopleFollowedBy(accountName?: string): Base.IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPeopleFollowedByMe(): Base.IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPropertiesFor(accountName?: string): Base.IBaseExecution<SP.UserProfiles.PersonProperties>;
	getSPUserInformation(accountName?: string, siteId?: any): Base.IBaseCollection<SP.KeyValue>;
	getUserProfileProperties(accountName?: string): Base.IBaseCollection<SP.KeyValue>;
	getUserProfilePropertyFor(accountName?: string, propertyName?: string): Base.IBaseExecution<string>;
	hardDeleteUserProfile(accountName?: string, userId?: any): Base.IBaseExecution<boolean>;
	hideSuggestion(accountName?: string): Base.IBaseExecution<any>;
	removeSPUserInformation(accountName?: string, siteId?: any, redactName?: string): Base.IBaseCollection<SP.KeyValue>;
	setMultiValuedProfileProperty(accountName?: string, propertyName?: string, propertyValues?: Array<string>): Base.IBaseExecution<any>;
	setMyProfilePicture(picture?: any): Base.IBaseExecution<any>;
	setSingleValueProfileProperty(accountName?: string, propertyName?: string, propertyValue?: string): Base.IBaseExecution<any>;
	stopFollowing(accountName?: string): Base.IBaseExecution<any>;
	stopFollowingTag(value?: any): Base.IBaseExecution<any>;
}

/*********************************************
* IPersonalCache
**********************************************/
export interface IPersonalCache extends PersonalCacheCollections, PersonalCacheMethods, Base.IBaseQuery<PersonalCache, IPersonalCacheQuery> {

}

/*********************************************
* IPersonalCacheCollection
**********************************************/
export interface IPersonalCacheCollection extends Base.IBaseResults<PersonalCache> {
	done?: (resolve: (value?: Array<PersonalCache>) => void) => void;
}

/*********************************************
* IPersonalCacheQueryCollection
**********************************************/
export interface IPersonalCacheQueryCollection extends Base.IBaseResults<PersonalCacheOData> {
	done?: (resolve: (value?: Array<PersonalCacheOData>) => void) => void;
}

/*********************************************
* IPersonalCacheQuery
**********************************************/
export interface IPersonalCacheQuery extends PersonalCacheOData, PersonalCacheMethods {

}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache extends Base.IBaseResult, PersonalCacheProps, PersonalCacheCollections, PersonalCacheMethods {

}

/*********************************************
* PersonalCacheProps
**********************************************/
export interface PersonalCacheProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCachePropMethods
**********************************************/
export interface PersonalCachePropMethods {

}

/*********************************************
* PersonalCacheCollections
**********************************************/
export interface PersonalCacheCollections extends PersonalCachePropMethods {

}

/*********************************************
* PersonalCacheOData
**********************************************/
export interface PersonalCacheOData extends Base.IBaseResult, PersonalCacheProps, PersonalCacheMethods {

}

/*********************************************
* PersonalCacheMethods
**********************************************/
export interface PersonalCacheMethods {
	deleteCacheItemsAsync(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): Base.IBaseExecution<any>;
	deleteCacheItemsAsync2(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>, mySiteUrl?: string): Base.IBaseExecution<any>;
	loadUserProfile(email?: string): Base.IBaseExecution<any>;
	readCache(folderPath?: string): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCache2(folderPath?: string, mySiteUrl?: string): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreate(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreate2(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean, mySiteUrl?: string): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreateOrderById(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreateOrderById2(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean, mySiteUrl?: string): Base.IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	writeCache(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): Base.IBaseExecution<any>;
	writeCache2(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>, mySiteUrl?: string): Base.IBaseExecution<any>;
}

/*********************************************
* PersonProperties
**********************************************/
export interface PersonProperties {
	AccountName?: string;
	DirectReports?: { results: Array<string> };
	DisplayName?: string;
	Email?: string;
	ExtendedManagers?: { results: Array<string> };
	ExtendedReports?: { results: Array<string> };
	IsFollowed?: boolean;
	LatestPost?: string;
	Peers?: { results: Array<string> };
	PersonalSiteHostUrl?: string;
	PersonalUrl?: string;
	PictureUrl?: string;
	Title?: string;
	UserProfileProperties?: { results: Array<SP.KeyValue> };
	UserUrl?: string;
}

/*********************************************
* PersonPropertiesCollections
**********************************************/
export interface PersonPropertiesCollections {

}

/*********************************************
* IProfileImageStore
**********************************************/
export interface IProfileImageStore extends ProfileImageStoreCollections, ProfileImageStoreMethods, Base.IBaseQuery<ProfileImageStore, IProfileImageStoreQuery> {

}

/*********************************************
* IProfileImageStoreCollection
**********************************************/
export interface IProfileImageStoreCollection extends Base.IBaseResults<ProfileImageStore> {
	done?: (resolve: (value?: Array<ProfileImageStore>) => void) => void;
}

/*********************************************
* IProfileImageStoreQueryCollection
**********************************************/
export interface IProfileImageStoreQueryCollection extends Base.IBaseResults<ProfileImageStoreOData> {
	done?: (resolve: (value?: Array<ProfileImageStoreOData>) => void) => void;
}

/*********************************************
* IProfileImageStoreQuery
**********************************************/
export interface IProfileImageStoreQuery extends ProfileImageStoreOData, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStore
**********************************************/
export interface ProfileImageStore extends Base.IBaseResult, ProfileImageStoreProps, ProfileImageStoreCollections, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStoreProps
**********************************************/
export interface ProfileImageStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileImageStorePropMethods
**********************************************/
export interface ProfileImageStorePropMethods {

}

/*********************************************
* ProfileImageStoreCollections
**********************************************/
export interface ProfileImageStoreCollections extends ProfileImageStorePropMethods {

}

/*********************************************
* ProfileImageStoreOData
**********************************************/
export interface ProfileImageStoreOData extends Base.IBaseResult, ProfileImageStoreProps, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStoreMethods
**********************************************/
export interface ProfileImageStoreMethods {
	saveUploadedFile(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): Base.IBaseCollection<string>;
}

/*********************************************
* IProfileLoader
**********************************************/
export interface IProfileLoader extends ProfileLoaderCollections, ProfileLoaderMethods, Base.IBaseQuery<ProfileLoader, IProfileLoaderQuery> {

}

/*********************************************
* IProfileLoaderCollection
**********************************************/
export interface IProfileLoaderCollection extends Base.IBaseResults<ProfileLoader> {
	done?: (resolve: (value?: Array<ProfileLoader>) => void) => void;
}

/*********************************************
* IProfileLoaderQueryCollection
**********************************************/
export interface IProfileLoaderQueryCollection extends Base.IBaseResults<ProfileLoaderOData> {
	done?: (resolve: (value?: Array<ProfileLoaderOData>) => void) => void;
}

/*********************************************
* IProfileLoaderQuery
**********************************************/
export interface IProfileLoaderQuery extends ProfileLoaderOData, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader extends Base.IBaseResult, ProfileLoaderProps, ProfileLoaderCollections, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoaderProps
**********************************************/
export interface ProfileLoaderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderPropMethods
**********************************************/
export interface ProfileLoaderPropMethods {

}

/*********************************************
* ProfileLoaderCollections
**********************************************/
export interface ProfileLoaderCollections extends ProfileLoaderPropMethods {

}

/*********************************************
* ProfileLoaderOData
**********************************************/
export interface ProfileLoaderOData extends Base.IBaseResult, ProfileLoaderProps, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoaderMethods
**********************************************/
export interface ProfileLoaderMethods {
	createPersonalSiteEnqueueBulk(emailIDs?: Array<string>): Base.IBaseCollection<string>;
	getUserProfile(): Base.IBaseQuery<SP.UserProfiles.UserProfile, SP.UserProfiles.UserProfileOData> & SP.UserProfiles.UserProfileCollections & SP.UserProfiles.UserProfileMethods;
}

/*********************************************
* IUserProfilePropertiesForUser
**********************************************/
export interface IUserProfilePropertiesForUser extends UserProfilePropertiesForUserCollections, UserProfilePropertiesForUserMethods, Base.IBaseQuery<UserProfilePropertiesForUser, IUserProfilePropertiesForUserQuery> {

}

/*********************************************
* IUserProfilePropertiesForUserCollection
**********************************************/
export interface IUserProfilePropertiesForUserCollection extends Base.IBaseResults<UserProfilePropertiesForUser> {
	done?: (resolve: (value?: Array<UserProfilePropertiesForUser>) => void) => void;
}

/*********************************************
* IUserProfilePropertiesForUserQueryCollection
**********************************************/
export interface IUserProfilePropertiesForUserQueryCollection extends Base.IBaseResults<UserProfilePropertiesForUserOData> {
	done?: (resolve: (value?: Array<UserProfilePropertiesForUserOData>) => void) => void;
}

/*********************************************
* IUserProfilePropertiesForUserQuery
**********************************************/
export interface IUserProfilePropertiesForUserQuery extends UserProfilePropertiesForUserOData, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser extends Base.IBaseResult, UserProfilePropertiesForUserProps, UserProfilePropertiesForUserCollections, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUserProps
**********************************************/
export interface UserProfilePropertiesForUserProps {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserPropMethods
**********************************************/
export interface UserProfilePropertiesForUserPropMethods {

}

/*********************************************
* UserProfilePropertiesForUserCollections
**********************************************/
export interface UserProfilePropertiesForUserCollections extends UserProfilePropertiesForUserPropMethods {

}

/*********************************************
* UserProfilePropertiesForUserOData
**********************************************/
export interface UserProfilePropertiesForUserOData extends Base.IBaseResult, UserProfilePropertiesForUserProps, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUserMethods
**********************************************/
export interface UserProfilePropertiesForUserMethods {
	getPropertyNames(): Base.IBaseCollection<string>;
}

/*********************************************
* IUserProfile
**********************************************/
export interface IUserProfile extends UserProfileCollections, UserProfileMethods, Base.IBaseQuery<UserProfile, IUserProfileQuery> {

}

/*********************************************
* IUserProfileCollection
**********************************************/
export interface IUserProfileCollection extends Base.IBaseResults<UserProfile> {
	done?: (resolve: (value?: Array<UserProfile>) => void) => void;
}

/*********************************************
* IUserProfileQueryCollection
**********************************************/
export interface IUserProfileQueryCollection extends Base.IBaseResults<UserProfileOData> {
	done?: (resolve: (value?: Array<UserProfileOData>) => void) => void;
}

/*********************************************
* IUserProfileQuery
**********************************************/
export interface IUserProfileQuery extends UserProfileOData, UserProfileMethods {

}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile extends Base.IBaseResult, UserProfileProps, UserProfileCollections, UserProfileMethods {

}

/*********************************************
* UserProfileProps
**********************************************/
export interface UserProfileProps {
	AccountName?: string;
	DisplayName?: string;
	FollowPersonalSiteUrl?: string;
	IsDefaultDocumentLibraryBlocked?: boolean;
	IsPeopleListPublic?: boolean;
	IsPrivacySettingOn?: boolean;
	IsSelf?: boolean;
	JobTitle?: string;
	MySiteFirstRunExperience?: number;
	MySiteHostUrl?: string;
	O15FirstRunExperience?: number;
	PersonalSiteCapabilities?: number;
	PersonalSiteFirstCreationError?: string;
	PersonalSiteFirstCreationTime?: any;
	PersonalSiteInstantiationState?: number;
	PersonalSiteLastCreationTime?: any;
	PersonalSiteNumberOfRetries?: number;
	PictureImportEnabled?: boolean;
	PictureUrl?: string;
	PublicUrl?: string;
	SipAddress?: string;
	UrlToCreatePersonalSite?: string;
}

/*********************************************
* UserProfilePropMethods
**********************************************/
export interface UserProfilePropMethods {
	FollowedContent(): Base.IBaseExecution<SP.UserProfiles.FollowedContent> & SP.UserProfiles.FollowedContentCollections & SP.UserProfiles.FollowedContentMethods;
	PersonalSite(): Base.IBaseQuery<SP.Site, SP.SiteOData> & SP.SiteCollections & SP.SiteMethods;
}

/*********************************************
* UserProfileCollections
**********************************************/
export interface UserProfileCollections extends UserProfilePropMethods {

}

/*********************************************
* UserProfileOData
**********************************************/
export interface UserProfileOData extends Base.IBaseResult, UserProfileProps, UserProfileMethods {
	FollowedContent: SP.UserProfiles.FollowedContent & SP.UserProfiles.FollowedContentCollections;
	PersonalSite: SP.Site & SP.SiteCollections;
}

/*********************************************
* UserProfileMethods
**********************************************/
export interface UserProfileMethods {
	createPersonalSite(lcid?: number): Base.IBaseExecution<any>;
	createPersonalSiteEnque(isInteractive?: boolean): Base.IBaseExecution<any>;
	createPersonalSiteFromWorkItem(workItemType?: any): Base.IBaseExecution<number>;
	setMySiteFirstRunExperience(value?: number): Base.IBaseExecution<any>;
	shareAllSocialData(shareAll?: boolean): Base.IBaseExecution<any>;
}
