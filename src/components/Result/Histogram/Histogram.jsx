import React, {useEffect, useState} from 'react';
import styles from './Histogram.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import axios from "axios";
import {getTotalRisk} from "../../../utils/services/getTotalRisk";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import DesktopHistogram from "./DesktopHistogram/DesktopHistogram";
import MobileHistogram from "./MobileHistogram/MobileHistogram";


function Histogram({inputData, ...props}) {
	const {accessToken, expire} = useAuth()
	const {isMobile} = useDeviceDetect()
	const [data, setData] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		setIsLoading(true)
		axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms',
			inputData, {
				headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
			}
		).then(response => {
			setData(getTotalRisk(response.data.data))
			setIsLoading(false);
		}).catch(err => {
			console.log('Get riskFactor info is ERROR: ', err)
		})
		
	}, [inputData]);
	
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Общая сводка</h1>
			<section className={styles.titleCount}>Найдено {data.length || 0} варианта(ов)</section>
			{
				isMobile
					?
					<MobileHistogram
						isLoading={isLoading}
						data={data}/>
					:
					<DesktopHistogram
						isLoading={isLoading}
						data={data}/>
			}
		</div>
	);
}

export default Histogram;
