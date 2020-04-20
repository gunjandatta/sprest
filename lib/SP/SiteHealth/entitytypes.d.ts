import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* SiteHealthSummary
**********************************************/
export interface SiteHealthSummary {
	FailedErrorCount?: number;
	FailedWarningCount?: number;
	PassedCount?: number;
	Results?: { results: Array<SP.SiteHealth.SiteHealthResult> };
}

/*********************************************
* SiteHealthSummaryCollections
**********************************************/
export interface SiteHealthSummaryCollections {

}
