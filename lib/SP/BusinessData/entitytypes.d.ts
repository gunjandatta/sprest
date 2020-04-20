import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* IEntity
**********************************************/
export interface IEntity extends EntityCollections, EntityMethods, Base.IBaseQuery<Entity, IEntityQuery> {

}

/*********************************************
* IEntityCollection
**********************************************/
export interface IEntityCollection extends Base.IBaseResults<Entity> {
	done?: (resolve: (value?: Array<Entity>) => void) => void;
}

/*********************************************
* IEntityQueryCollection
**********************************************/
export interface IEntityQueryCollection extends Base.IBaseResults<EntityOData> {
	done?: (resolve: (value?: Array<EntityOData>) => void) => void;
}

/*********************************************
* IEntityQuery
**********************************************/
export interface IEntityQuery extends EntityOData, EntityMethods {

}

/*********************************************
* Entity
**********************************************/
export interface Entity extends Base.IBaseResult, EntityProps, EntityCollections, EntityMethods {

}

/*********************************************
* EntityProps
**********************************************/
export interface EntityProps {
	EstimatedInstanceCount?: number;
	Name?: string;
	Namespace?: string;
}

/*********************************************
* EntityPropMethods
**********************************************/
export interface EntityPropMethods {

}

/*********************************************
* EntityCollections
**********************************************/
export interface EntityCollections extends EntityPropMethods {

}

/*********************************************
* EntityOData
**********************************************/
export interface EntityOData extends Base.IBaseResult, EntityProps, EntityMethods {

}

/*********************************************
* EntityMethods
**********************************************/
export interface EntityMethods {
	getAssociationView(associationName?: string): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getCreatorView(methodInstanceName?: string): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getDefaultSpecificFinderView(): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getFilters(methodInstanceName?: string): Base.IBaseCollection<SP.BusinessData.Filter>;
	getFinderView(methodInstanceName?: string): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getIdentifierCount(): Base.IBaseExecution<number>;
	getIdentifiers(): Base.IBaseCollection<SP.BusinessData.EntityIdentifier>;
	getLobSystem(): Base.IBaseExecution<SP.BusinessData.LobSystem>;
	getSpecificFinderView(specificFinderName?: string): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
	getUpdaterView(updaterName?: string): Base.IBaseQuery<SP.BusinessData.EntityView, SP.BusinessData.EntityViewOData> & SP.BusinessData.EntityViewCollections & SP.BusinessData.EntityViewMethods;
}

/*********************************************
* EntityField
**********************************************/
export interface EntityField {
	ContainsLocalizedDisplayName?: boolean;
	DefaultDisplayName?: string;
	LocalizedDisplayName?: string;
	Name?: string;
}

/*********************************************
* EntityFieldCollections
**********************************************/
export interface EntityFieldCollections {

}

/*********************************************
* Filter
**********************************************/
export interface Filter {
	DefaultDisplayName?: string;
	FilterField?: string;
	FilterType?: string;
	LocalizedDisplayName?: string;
	Name?: string;
	ValueCount?: number;
}

/*********************************************
* FilterCollections
**********************************************/
export interface FilterCollections {

}

/*********************************************
* IEntityIdentifier
**********************************************/
export interface IEntityIdentifier extends EntityIdentifierCollections, EntityIdentifierMethods, Base.IBaseQuery<EntityIdentifier, IEntityIdentifierQuery> {

}

/*********************************************
* IEntityIdentifierCollection
**********************************************/
export interface IEntityIdentifierCollection extends Base.IBaseResults<EntityIdentifier> {
	done?: (resolve: (value?: Array<EntityIdentifier>) => void) => void;
}

/*********************************************
* IEntityIdentifierQueryCollection
**********************************************/
export interface IEntityIdentifierQueryCollection extends Base.IBaseResults<EntityIdentifierOData> {
	done?: (resolve: (value?: Array<EntityIdentifierOData>) => void) => void;
}

/*********************************************
* IEntityIdentifierQuery
**********************************************/
export interface IEntityIdentifierQuery extends EntityIdentifierOData, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifier
**********************************************/
export interface EntityIdentifier extends Base.IBaseResult, EntityIdentifierProps, EntityIdentifierCollections, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifierProps
**********************************************/
export interface EntityIdentifierProps {
	IdentifierType?: string;
	Name?: string;
}

/*********************************************
* EntityIdentifierPropMethods
**********************************************/
export interface EntityIdentifierPropMethods {

}

/*********************************************
* EntityIdentifierCollections
**********************************************/
export interface EntityIdentifierCollections extends EntityIdentifierPropMethods {

}

/*********************************************
* EntityIdentifierOData
**********************************************/
export interface EntityIdentifierOData extends Base.IBaseResult, EntityIdentifierProps, EntityIdentifierMethods {

}

/*********************************************
* EntityIdentifierMethods
**********************************************/
export interface EntityIdentifierMethods {
	containsLocalizedDisplayName(): Base.IBaseExecution<boolean>;
	getDefaultDisplayName(): Base.IBaseExecution<string>;
	getLocalizedDisplayName(): Base.IBaseExecution<string>;
}

/*********************************************
* LobSystemInstance
**********************************************/
export interface LobSystemInstance {
	Name?: string;
}

/*********************************************
* LobSystemInstanceCollections
**********************************************/
export interface LobSystemInstanceCollections {

}

/*********************************************
* ILobSystem
**********************************************/
export interface ILobSystem extends LobSystemCollections, LobSystemMethods, Base.IBaseQuery<LobSystem, ILobSystemQuery> {

}

/*********************************************
* ILobSystemCollection
**********************************************/
export interface ILobSystemCollection extends Base.IBaseResults<LobSystem> {
	done?: (resolve: (value?: Array<LobSystem>) => void) => void;
}

/*********************************************
* ILobSystemQueryCollection
**********************************************/
export interface ILobSystemQueryCollection extends Base.IBaseResults<LobSystemOData> {
	done?: (resolve: (value?: Array<LobSystemOData>) => void) => void;
}

/*********************************************
* ILobSystemQuery
**********************************************/
export interface ILobSystemQuery extends LobSystemOData, LobSystemMethods {

}

/*********************************************
* LobSystem
**********************************************/
export interface LobSystem extends Base.IBaseResult, LobSystemProps, LobSystemCollections, LobSystemMethods {

}

/*********************************************
* LobSystemProps
**********************************************/
export interface LobSystemProps {
	Name?: string;
}

/*********************************************
* LobSystemPropMethods
**********************************************/
export interface LobSystemPropMethods {

}

/*********************************************
* LobSystemCollections
**********************************************/
export interface LobSystemCollections extends LobSystemPropMethods {

}

/*********************************************
* LobSystemOData
**********************************************/
export interface LobSystemOData extends Base.IBaseResult, LobSystemProps, LobSystemMethods {

}

/*********************************************
* LobSystemMethods
**********************************************/
export interface LobSystemMethods {
	getLobSystemInstances(): Base.IBaseCollection<SP.BusinessData.LobSystemInstance>;
}

/*********************************************
* IMethodExecutionResult
**********************************************/
export interface IMethodExecutionResult extends MethodExecutionResultCollections, MethodExecutionResultMethods, Base.IBaseQuery<MethodExecutionResult, IMethodExecutionResultQuery> {

}

/*********************************************
* IMethodExecutionResultCollection
**********************************************/
export interface IMethodExecutionResultCollection extends Base.IBaseResults<MethodExecutionResult> {
	done?: (resolve: (value?: Array<MethodExecutionResult>) => void) => void;
}

/*********************************************
* IMethodExecutionResultQueryCollection
**********************************************/
export interface IMethodExecutionResultQueryCollection extends Base.IBaseResults<MethodExecutionResultOData> {
	done?: (resolve: (value?: Array<MethodExecutionResultOData>) => void) => void;
}

/*********************************************
* IMethodExecutionResultQuery
**********************************************/
export interface IMethodExecutionResultQuery extends MethodExecutionResultOData, MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResult
**********************************************/
export interface MethodExecutionResult extends Base.IBaseResult, MethodExecutionResultProps, MethodExecutionResultCollections, MethodExecutionResultMethods {

}

/*********************************************
* MethodExecutionResultProps
**********************************************/
export interface MethodExecutionResultProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MethodExecutionResultPropMethods
**********************************************/
export interface MethodExecutionResultPropMethods {

}

/*********************************************
* MethodExecutionResultCollections
**********************************************/
export interface MethodExecutionResultCollections extends MethodExecutionResultPropMethods {
	ReturnParameterCollection(): Base.IBaseCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
	ReturnParameterCollection(id: string | number): Base.IBaseQuery<SP.BusinessData.Runtime.EntityFieldValueDictionary> & SP.BusinessData.Runtime.EntityFieldValueDictionaryCollections & SP.BusinessData.Runtime.EntityFieldValueDictionaryMethods;
}

/*********************************************
* MethodExecutionResultOData
**********************************************/
export interface MethodExecutionResultOData extends Base.IBaseResult, MethodExecutionResultProps, MethodExecutionResultMethods {
	ReturnParameterCollection: Base.IBaseResults<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
}

/*********************************************
* MethodExecutionResultMethods
**********************************************/
export interface MethodExecutionResultMethods {

}

/*********************************************
* ITypeDescriptor
**********************************************/
export interface ITypeDescriptor extends TypeDescriptorCollections, TypeDescriptorMethods, Base.IBaseQuery<TypeDescriptor, ITypeDescriptorQuery> {

}

/*********************************************
* ITypeDescriptorCollection
**********************************************/
export interface ITypeDescriptorCollection extends Base.IBaseResults<TypeDescriptor> {
	done?: (resolve: (value?: Array<TypeDescriptor>) => void) => void;
}

/*********************************************
* ITypeDescriptorQueryCollection
**********************************************/
export interface ITypeDescriptorQueryCollection extends Base.IBaseResults<TypeDescriptorOData> {
	done?: (resolve: (value?: Array<TypeDescriptorOData>) => void) => void;
}

/*********************************************
* ITypeDescriptorQuery
**********************************************/
export interface ITypeDescriptorQuery extends TypeDescriptorOData, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptor
**********************************************/
export interface TypeDescriptor extends Base.IBaseResult, TypeDescriptorProps, TypeDescriptorCollections, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptorProps
**********************************************/
export interface TypeDescriptorProps {
	ContainsReadOnly?: boolean;
	IsCollection?: boolean;
	IsReadOnly?: boolean;
	Name?: string;
	TypeName?: string;
}

/*********************************************
* TypeDescriptorPropMethods
**********************************************/
export interface TypeDescriptorPropMethods {

}

/*********************************************
* TypeDescriptorCollections
**********************************************/
export interface TypeDescriptorCollections extends TypeDescriptorPropMethods {

}

/*********************************************
* TypeDescriptorOData
**********************************************/
export interface TypeDescriptorOData extends Base.IBaseResult, TypeDescriptorProps, TypeDescriptorMethods {

}

/*********************************************
* TypeDescriptorMethods
**********************************************/
export interface TypeDescriptorMethods {
	containsLocalizedDisplayName(): Base.IBaseExecution<boolean>;
	getChildTypeDescriptors(): Base.IBaseCollection<SP.BusinessData.TypeDescriptor>;
	getDefaultDisplayName(): Base.IBaseExecution<string>;
	getLocalizedDisplayName(): Base.IBaseExecution<string>;
	getParentTypeDescriptor(): Base.IBaseExecution<SP.BusinessData.TypeDescriptor>;
	isLeaf(): Base.IBaseExecution<boolean>;
	isRoot(): Base.IBaseExecution<boolean>;
}

/*********************************************
* IEntityView
**********************************************/
export interface IEntityView extends EntityViewCollections, EntityViewMethods, Base.IBaseQuery<EntityView, IEntityViewQuery> {

}

/*********************************************
* IEntityViewCollection
**********************************************/
export interface IEntityViewCollection extends Base.IBaseResults<EntityView> {
	done?: (resolve: (value?: Array<EntityView>) => void) => void;
}

/*********************************************
* IEntityViewQueryCollection
**********************************************/
export interface IEntityViewQueryCollection extends Base.IBaseResults<EntityViewOData> {
	done?: (resolve: (value?: Array<EntityViewOData>) => void) => void;
}

/*********************************************
* IEntityViewQuery
**********************************************/
export interface IEntityViewQuery extends EntityViewOData, EntityViewMethods {

}

/*********************************************
* EntityView
**********************************************/
export interface EntityView extends Base.IBaseResult, EntityViewProps, EntityViewCollections, EntityViewMethods {

}

/*********************************************
* EntityViewProps
**********************************************/
export interface EntityViewProps {
	Name?: string;
	RelatedSpecificFinderName?: string;
}

/*********************************************
* EntityViewPropMethods
**********************************************/
export interface EntityViewPropMethods {

}

/*********************************************
* EntityViewCollections
**********************************************/
export interface EntityViewCollections extends EntityViewPropMethods {
	Fields(): Base.IBaseCollection<SP.BusinessData.EntityField>;
	Fields(id: string | number): Base.IBaseQuery<SP.BusinessData.EntityField> & SP.BusinessData.EntityFieldCollections;
}

/*********************************************
* EntityViewOData
**********************************************/
export interface EntityViewOData extends Base.IBaseResult, EntityViewProps, EntityViewMethods {
	Fields: Base.IBaseResults<SP.BusinessData.EntityField>;
}

/*********************************************
* EntityViewMethods
**********************************************/
export interface EntityViewMethods {
	getDefaultValues(): Base.IBaseExecution<SP.BusinessData.Runtime.EntityFieldValueDictionary>;
	getType(fieldDotNotation?: string): Base.IBaseExecution<string>;
	getTypeDescriptor(fieldDotNotation?: string): Base.IBaseExecution<SP.BusinessData.TypeDescriptor>;
	getXmlSchema(): Base.IBaseExecution<string>;
}

/*********************************************
* IAppBdcCatalog
**********************************************/
export interface IAppBdcCatalog extends AppBdcCatalogCollections, AppBdcCatalogMethods, Base.IBaseQuery<AppBdcCatalog, IAppBdcCatalogQuery> {

}

/*********************************************
* IAppBdcCatalogCollection
**********************************************/
export interface IAppBdcCatalogCollection extends Base.IBaseResults<AppBdcCatalog> {
	done?: (resolve: (value?: Array<AppBdcCatalog>) => void) => void;
}

/*********************************************
* IAppBdcCatalogQueryCollection
**********************************************/
export interface IAppBdcCatalogQueryCollection extends Base.IBaseResults<AppBdcCatalogOData> {
	done?: (resolve: (value?: Array<AppBdcCatalogOData>) => void) => void;
}

/*********************************************
* IAppBdcCatalogQuery
**********************************************/
export interface IAppBdcCatalogQuery extends AppBdcCatalogOData, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalog
**********************************************/
export interface AppBdcCatalog extends Base.IBaseResult, AppBdcCatalogProps, AppBdcCatalogCollections, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalogProps
**********************************************/
export interface AppBdcCatalogProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppBdcCatalogPropMethods
**********************************************/
export interface AppBdcCatalogPropMethods {

}

/*********************************************
* AppBdcCatalogCollections
**********************************************/
export interface AppBdcCatalogCollections extends AppBdcCatalogPropMethods {

}

/*********************************************
* AppBdcCatalogOData
**********************************************/
export interface AppBdcCatalogOData extends Base.IBaseResult, AppBdcCatalogProps, AppBdcCatalogMethods {

}

/*********************************************
* AppBdcCatalogMethods
**********************************************/
export interface AppBdcCatalogMethods {
	getConnectionId(lobSystemName?: string, lobSystemInstanceName?: string): Base.IBaseExecution<string>;
	getEntity(namespace?: string, name?: string): Base.IBaseExecution<SP.BusinessData.Entity>;
	getLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string): Base.IBaseExecution<string>;
	getLobSystemProperty(lobSystemName?: string, propertyName?: string): Base.IBaseExecution<string>;
	getPermissibleConnections(): Base.IBaseCollection<string>;
	setConnectionId(lobSystemName?: string, lobSystemInstanceName?: string, connectionId?: string): Base.IBaseExecution<any>;
	setLobSystemInstanceProperty(lobSystemName?: string, lobSystemInstanceName?: string, propertyName?: string, propertyValue?: string): Base.IBaseExecution<any>;
	setLobSystemProperty(lobSystemName?: string, propertyName?: string, propertyValue?: string): Base.IBaseExecution<any>;
}
