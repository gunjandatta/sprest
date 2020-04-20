import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* ITaxonomyField
**********************************************/
export interface ITaxonomyField extends TaxonomyFieldCollections, TaxonomyFieldMethods, Base.IBaseQuery<TaxonomyField, ITaxonomyFieldQuery> {

}

/*********************************************
* ITaxonomyFieldCollection
**********************************************/
export interface ITaxonomyFieldCollection extends Base.IBaseResults<TaxonomyField> {
	done?: (resolve: (value?: Array<TaxonomyField>) => void) => void;
}

/*********************************************
* ITaxonomyFieldQueryCollection
**********************************************/
export interface ITaxonomyFieldQueryCollection extends Base.IBaseResults<TaxonomyFieldOData> {
	done?: (resolve: (value?: Array<TaxonomyFieldOData>) => void) => void;
}

/*********************************************
* ITaxonomyFieldQuery
**********************************************/
export interface ITaxonomyFieldQuery extends TaxonomyFieldOData, TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyField
**********************************************/
export interface TaxonomyField extends SP.FieldLookup, Base.IBaseResult, TaxonomyFieldProps, TaxonomyFieldCollections, TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyFieldProps
**********************************************/
export interface TaxonomyFieldProps {
	AnchorId?: any;
	CreateValuesInEditForm?: boolean;
	IsAnchorValid?: boolean;
	IsKeyword?: boolean;
	IsPathRendered?: boolean;
	IsTermSetValid?: boolean;
	Open?: boolean;
	SspId?: any;
	TargetTemplate?: string;
	TermSetId?: any;
	TextField?: any;
	UserCreated?: boolean;
}

/*********************************************
* TaxonomyFieldPropMethods
**********************************************/
export interface TaxonomyFieldPropMethods {

}

/*********************************************
* TaxonomyFieldCollections
**********************************************/
export interface TaxonomyFieldCollections extends TaxonomyFieldPropMethods {

}

/*********************************************
* TaxonomyFieldOData
**********************************************/
export interface TaxonomyFieldOData extends Base.IBaseResult, TaxonomyFieldProps, TaxonomyFieldMethods {

}

/*********************************************
* TaxonomyFieldMethods
**********************************************/
export interface TaxonomyFieldMethods {
	delete(): Base.IBaseExecution<any>;
	disableIndex(): Base.IBaseExecution<number>;
	enableIndex(): Base.IBaseExecution<number>;
	setShowInDisplayForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInEditForm(value?: boolean): Base.IBaseExecution<any>;
	setShowInNewForm(value?: boolean): Base.IBaseExecution<any>;
}
