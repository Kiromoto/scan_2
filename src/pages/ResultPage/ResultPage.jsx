import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import styles from "../ResultPage/ResultPage.module.scss";
import TitleSearch from "../../components/Result/TitleSearch/TitleSearch";
import Histogram from "../../components/Result/Histogram/Histogram";
import Documents from "../../components/Result/Documents/Documents";

function ResultPage() {
	const location = useLocation();
	const searchParams = location?.state?.searchParams || '';
	const inputData = {
		"issueDateInterval": {
			"startDate": new Date(searchParams.startDate).toJSON(),
			"endDate": new Date(searchParams.endDate).toJSON()
		},
		"searchContext": {
			"targetSearchEntitiesContext": {
				"targetSearchEntities": [
					{
						"type": "company",
						"sparkId": null,
						"entityId": null,
						"inn": searchParams.inn,
						"maxFullness": searchParams.maxFullness,
						"inBusinessNews": searchParams.inBusinessNews
					}
				],
				"onlyMainRole": searchParams.onlyMainRole,
				"tonality": searchParams.tonality,
				"onlyWithRiskFactors": searchParams.onlyWithRiskFactors,
				"riskFactors": {
					"and": [],
					"or": [],
					"not": []
				},
				"themes": {
					"and": [],
					"or": [],
					"not": []
				}
			},
			"themesFilter": {
				"and": [],
				"or": [],
				"not": []
			}
		},
		"searchArea": {
			"includedSources": [],
			"excludedSources": [],
			"includedSourceGroups": [],
			"excludedSourceGroups": []
		},
		"attributeFilters": {
			"excludeTechNews": searchParams.excludeTechNews,
			"excludeAnnouncements": searchParams.excludeAnnouncements,
			"excludeDigests": searchParams.excludeDigests
		},
		"similarMode": "duplicates",
		"limit": searchParams.limit,
		"sortType": "sourceInfluence",
		"sortDirectionType": "desc",
		"intervalType": "month",
		"histogramTypes": [
			"totalDocuments",
			"riskFactors"
		]
	}
	
	
	if (!searchParams) {
		return <Navigate to="/search" replace={true} state={{from: location}}/>
	}
	
	return (
		<div className={styles.container}>
			<TitleSearch/>
			<Histogram inputData={inputData}/>
			<Documents inputData={inputData}/>
		</div>
	
	);
}

export default ResultPage;