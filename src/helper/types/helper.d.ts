import { SP } from "@dattabase/sprest-def";
import * as HelperTypes from ".";
import * as MapperTypes from "../../mapper/types";
import * as UtilTypes from "../../utils/types";

/**
 * Helper
 */
export const Helper: IHelper;

/**
 * Helper
 */
export interface IHelper {
    /**
     * Helper classes for the app web
     */
    App: HelperTypes.IApp;

    /**
     * Helper class to load the required SP scripts
     */
    Dependencies: HelperTypes.IDependencies;

    /**
     * Method to create a document set item.
     */
    createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<MapperTypes.IListItemResult>;

    /**
     * Executor
     */
    Executor<T = any>(methodParams: Array<T>, method: (param: T) => PromiseLike<any> | void, onExecuted?: (...args) => PromiseLike<any> | void);

    /**
     * Helper class for generating a field schema xml
     */
    FieldSchemaXML: (fieldInfo: HelperTypes.IFieldInfo) => PromiseLike<string>;

    /**
     * Determines if the user has permissions, based on the permission kind value
     */
    hasPermissions(permissionMask: SP.BasePermissions, permissions: Array<number> | number): boolean;

    /**
     * Helper class for implementing JSLink solutions
     */
    JSLink: HelperTypes.IJSLink;

    /**
     * Helper class for implementing custom list forms
     */
    ListForm: HelperTypes.IListForm;

    /**
     * Helper class for implementing custom list forms
     */
    ListFormField: HelperTypes.IListFormField;

    /**
     * Helper class for waiting until the core SP scripts are loaded
     */
    Loader: HelperTypes.ILoader;

    /**
     * Helper method to convert a json string to a base object
     * This will require you to use the stringify method of the base object.
     */
    parse<T = UtilTypes.IBase>(jsonString: string): T;

    /**
     * Helper method to execute an XMLHttpRequest
     */
    request(props: HelperTypes.IRequest): PromiseLike<any>;

    /**
     * Helper class for adding links to the top ribbon bar
     */
    RibbonLink: (props: HelperTypes.ILinkInfo) => HTMLAnchorElement;

    /**
     * SharePoint Core Library Reference
     */
    SP: {
        /** Modal Dialog */
        ModalDialog: HelperTypes.IModalDialog,

        /** Notify */
        Notify: HelperTypes.INotify,

        /** Status */
        Status: HelperTypes.IStatus
    };

    /**
     * The field configuration types
     */
    SPCfgFieldType: HelperTypes.ISPCfgFieldType;

    /**
     * The configuration types
     */
    SPCfgType: HelperTypes.ISPCfgType;

    /**
     * Helper class for automating SharePoint assets
     */
    SPConfig: (cfg: HelperTypes.ISPConfigProps, webUrl?: string) => HelperTypes.ISPConfig;

    /**
     * Helper class for adding links to the suite bar
     */
    SuiteBarLink: (props: HelperTypes.ILinkInfo) => HTMLAnchorElement;

    /**
     * Helper class for getting information from the taxonomy term store
     */
    Taxonomy: HelperTypes.ITaxonomy;

    /**
     * Helper class for creating modern webparts in SharePoint 2013+ environments
     */
    WebPart: HelperTypes.IWebPart;
}