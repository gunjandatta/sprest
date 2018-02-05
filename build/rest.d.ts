import * as Helper from "./helper";
import * as Lib from "./lib";
import * as Mapper from "./mapper";
import * as Util from "./utils";
export interface IREST {
    __ver: number;
    ContextInfo: Lib.Types.IContextInformation;
    DefaultRequestToHostFl: boolean;
    Helper: {
        App: Helper.Types.IApp;
        Dependencies: Helper.Types.IDependencies;
        FieldSchemaXML: Helper.Types.IFieldSchemaXML;
        JSLink: Helper.Types.IJSLink;
        ListForm: Helper.Types.IListForm;
        ListFormField: Helper.Types.IListFormField;
        Loader: Helper.Types.ILoader;
        parse: (jsonString: string) => Util.Base;
        SPConfig: Helper.Types.ISPConfig;
        Taxonomy: Helper.Types.ITaxonomy;
        WebPart: Helper.Types.IWebPart;
    };
    List: (listName: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IList;
    Navigation: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.INavigationServiceREST;
    PeopleManager: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IPeopleManager;
    PeoplePicker: (settings?: Util.Types.ITargetInfo) => Mapper.Types.IPeoplePicker;
    ProfileLoader: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IProfileLoader;
    Search: (url?: string, settings?: Util.Types.ITargetInfo) => Mapper.Types.ISearch;
    SPTypes: any;
    Site: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.ISite;
    SocialFeed: Mapper.Types.ISocialFeed;
    UserProfile: (targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IUserProfile;
    Utility: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IUtility;
    Web: (url?: string, targetInfo?: Util.Types.ITargetInfo) => Mapper.Types.IWeb;
}
export declare const $REST: any;
