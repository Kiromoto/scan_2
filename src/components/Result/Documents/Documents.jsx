import React, {useEffect, useState} from 'react';
import styles from './Documents.module.scss'
import PublicationCards from "../PublicationCards/PublicationCards";
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";
import axios from "axios";
import {useAuth} from "../../../hooks/useAuth";


function Documents({inputData, ...props}) {
	const {accessToken, expire} = useAuth()
	const [objects, setObjects] = useState()
	const [docs, setDocs] = useState()
	let ids = []
	
	
	useEffect(() => {
		if (objects) {
			objects.map(item => {
				ids.push(item.encodedId)
			})
			ids = {ids: ids}
		}

		if (ids) {
			axios.post('https://gateway.scan-interfax.ru/api/v1/documents',
				ids, {
					headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
				}
			).then(response => {
				setDocs(response.data)
			}).catch(err => {
				console.log('POST objectsearch is ERROR: ', err)
			})
		}
	}, [objects])
	
	useEffect(() => {
		axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch',
			inputData, {
				headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
			}
		).then(response => {
			setObjects(response.data.items)
		}).catch(err => {
			console.log('POST objectsearch is ERROR: ', err)
		})
	}, [inputData]);
	
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список документов</h1>
			<div className={styles.documentsBox}>
				{docs
					?
					docs.map(item => <PublicationCards key={item.ok.id} item={item}/>)
					:
					<h1 className={styles.noDocuments}>Документы не найдены</h1>
				}
			</div>
			{
				docs
					?
					<MyButtonBlue style={{width: 305, marginTop: 38, alignSelf: "center"}}>Показать больше</MyButtonBlue>
					:
					<></>
			}
		</div>
	);
}

export default Documents;