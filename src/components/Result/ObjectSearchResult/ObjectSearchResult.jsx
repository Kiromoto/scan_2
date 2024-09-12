import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useAuth} from "../../../hooks/useAuth";
import styles from "./ObjectSearchResult.module.scss";
import Loading from "../../UI/Loading/Loading";
import Documents from "../Documents/Documents";

function ObjectSearchResult({inputData, ...props}) {
	const {accessToken, expire} = useAuth()
	const [objects, setObjects] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch',
			inputData, {
				headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
			}
		).then(response => {
			setObjects(response.data.items)
			setIsLoading(false)
		}).catch(err => {
			console.log('POST objectsearch is ERROR: ', err)
		})
	}, [inputData]);
	
	
	return (
		<div className={styles.container}>
			{isLoading ?
				<Loading imgSize={50} style={{alignSelf: "center"}} textAdd="Загружаем данные"/>
				:
				<>{
					(objects.length)
						?
						<Documents objects={objects}/>
						: <h1>Документов не найдено</h1>
				}</>
			}
		</div>
	)
}

export default ObjectSearchResult;