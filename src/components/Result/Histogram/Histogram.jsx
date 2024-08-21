import React, {useEffect, useState} from 'react';
import styles from './Histogram.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import axios from "axios";

function Histogram({searchParams, ...props}) {
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

    const {accessToken, expire} = useAuth()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
            inputData, {
                headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
            }
        ).then(response => {
            setData(response.data.data)
            console.log(response.data.data)
            setIsLoading(false);
        }).catch(err => {
            console.log('Get account info is ERROR: ', err)
        })

    }, [searchParams]);

    return (
        <div className={styles.container}>
            {isLoading ? <>Loading...</> : <>{data.histogramType}</>

            }

        </div>
    );
}

export default Histogram;