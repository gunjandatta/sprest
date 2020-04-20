import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* BaseCustomProperty
**********************************************/
export interface BaseCustomProperty {
	IsEdited?: boolean;
	Name?: string;
	PropertyType?: string;
}

/*********************************************
* BaseCustomPropertyCollections
**********************************************/
export interface BaseCustomPropertyCollections {

}

/*********************************************
* BigIntCustomProperty
**********************************************/
export interface BigIntCustomProperty {
	Value?: number;
}

/*********************************************
* BigIntCustomPropertyCollections
**********************************************/
export interface BigIntCustomPropertyCollections {

}

/*********************************************
* BooleanCustomProperty
**********************************************/
export interface BooleanCustomProperty {
	Value?: boolean;
}

/*********************************************
* BooleanCustomPropertyCollections
**********************************************/
export interface BooleanCustomPropertyCollections {

}

/*********************************************
* DateTimeTypeCustomProperty
**********************************************/
export interface DateTimeTypeCustomProperty {
	Value?: any;
}

/*********************************************
* DateTimeTypeCustomPropertyCollections
**********************************************/
export interface DateTimeTypeCustomPropertyCollections {

}

/*********************************************
* MultiValueStringCustomProperty
**********************************************/
export interface MultiValueStringCustomProperty {
	Value?: { results: Array<string> };
}

/*********************************************
* MultiValueStringCustomPropertyCollections
**********************************************/
export interface MultiValueStringCustomPropertyCollections {

}

/*********************************************
* NumberCustomProperty
**********************************************/
export interface NumberCustomProperty {
	Value?: number;
}

/*********************************************
* NumberCustomPropertyCollections
**********************************************/
export interface NumberCustomPropertyCollections {

}

/*********************************************
* PersonTypeCustomProperty
**********************************************/
export interface PersonTypeCustomProperty {
	Value?: SP.Publishing.ProfileCoreProperties;
}

/*********************************************
* PersonTypeCustomPropertyCollections
**********************************************/
export interface PersonTypeCustomPropertyCollections {

}

/*********************************************
* StringCustomProperty
**********************************************/
export interface StringCustomProperty {
	Value?: string;
}

/*********************************************
* StringCustomPropertyCollections
**********************************************/
export interface StringCustomPropertyCollections {

}
