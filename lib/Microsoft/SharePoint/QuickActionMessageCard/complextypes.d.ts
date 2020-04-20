import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* AutoInvokeAction
**********************************************/
export interface AutoInvokeAction {
	body?: string;
	headers?: Array<Microsoft.SharePoint.QuickActionMessageCard.Header>;
	hideCardOnInvoke?: string;
	target?: string;
	type?: string;
}

/*********************************************
* AutoInvokeActionCollections
**********************************************/
export interface AutoInvokeActionCollections {

}

/*********************************************
* Header
**********************************************/
export interface Header {
	name?: string;
	value?: string;
}

/*********************************************
* HeaderCollections
**********************************************/
export interface HeaderCollections {

}

/*********************************************
* AutoInvokeOptions
**********************************************/
export interface AutoInvokeOptions {
	showCardOnFailure?: string;
}

/*********************************************
* AutoInvokeOptionsCollections
**********************************************/
export interface AutoInvokeOptionsCollections {

}

/*********************************************
* Choice
**********************************************/
export interface Choice {
	display?: string;
	value?: string;
}

/*********************************************
* ChoiceCollections
**********************************************/
export interface ChoiceCollections {

}

/*********************************************
* HeroImage
**********************************************/
export interface HeroImage {
	image?: string;
}

/*********************************************
* HeroImageCollections
**********************************************/
export interface HeroImageCollections {

}

/*********************************************
* MessageCardActionButton
**********************************************/
export interface MessageCardActionButton {
	body?: string;
	bodyContentType?: string;
	headers?: Array<Microsoft.SharePoint.QuickActionMessageCard.Header>;
	name?: string;
	target?: string;
	type?: string;
}

/*********************************************
* MessageCardActionButtonCollections
**********************************************/
export interface MessageCardActionButtonCollections {

}

/*********************************************
* MessageCardInput
**********************************************/
export interface MessageCardInput {
	choices?: Array<Microsoft.SharePoint.QuickActionMessageCard.Choice>;
	id?: string;
	type?: string;
	value?: string;
}

/*********************************************
* MessageCardInputCollections
**********************************************/
export interface MessageCardInputCollections {

}

/*********************************************
* MessageCard
**********************************************/
export interface MessageCard {
	autoInvokeAction?: Microsoft.SharePoint.QuickActionMessageCard.AutoInvokeAction;
	autoInvokeOptions?: Microsoft.SharePoint.QuickActionMessageCard.AutoInvokeOptions;
	context?: string;
	hideOriginalBody?: string;
	originator?: string;
	potentialAction?: Array<Microsoft.SharePoint.QuickActionMessageCard.PotentialAction>;
	sections?: Array<Microsoft.SharePoint.QuickActionMessageCard.Section>;
	text?: string;
	themeColor?: string;
	title?: string;
	type?: string;
}

/*********************************************
* MessageCardCollections
**********************************************/
export interface MessageCardCollections {

}

/*********************************************
* PotentialAction
**********************************************/
export interface PotentialAction {
	actions?: Array<Microsoft.SharePoint.QuickActionMessageCard.MessageCardActionButton>;
	inputs?: Array<Microsoft.SharePoint.QuickActionMessageCard.MessageCardInput>;
	type?: string;
}

/*********************************************
* PotentialActionCollections
**********************************************/
export interface PotentialActionCollections {

}

/*********************************************
* Section
**********************************************/
export interface Section {
	activityImage?: string;
	activityImageStyle?: string;
	activityText?: string;
	activityTitle?: string;
	heroImage?: Microsoft.SharePoint.QuickActionMessageCard.HeroImage;
	startGroup?: boolean;
	text?: string;
}

/*********************************************
* SectionCollections
**********************************************/
export interface SectionCollections {

}

/*********************************************
* SPAccessRequestRefreshStatusBody
**********************************************/
export interface SPAccessRequestRefreshStatusBody {
	refreshStatus?: Microsoft.SharePoint.QuickActionMessageCard.SPAccessRequestRefreshStatus;
}

/*********************************************
* SPAccessRequestRefreshStatusBodyCollections
**********************************************/
export interface SPAccessRequestRefreshStatusBodyCollections {

}

/*********************************************
* SPAccessRequestRefreshStatus
**********************************************/
export interface SPAccessRequestRefreshStatus {
	hasprofilepicture?: boolean;
	isAutoInvoke?: boolean;
	roletype?: string;
	signature?: string;
	status?: number;
	uniqueId?: string;
}

/*********************************************
* SPAccessRequestRefreshStatusCollections
**********************************************/
export interface SPAccessRequestRefreshStatusCollections {

}
