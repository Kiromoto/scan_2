import React, {useEffect, useState} from 'react';
import styles from './Documents.module.scss'
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";
import {useAuth} from "../../../hooks/useAuth";
import Loading from "../../UI/Loading/Loading";
import axios from "axios";
import PublicationCards from "../PublicationCards/PublicationCards";
import {useDeviceType} from "../../../hooks/useDeviceType";


function Documents({objects, ...props}) {
	const {accessToken, expire} = useAuth()
	const {isMobile} = useDeviceType()
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentStart, setCurrentStart] = useState(0)
	const [currentEnd, setCurrentEnd] = useState(10)
	const [showMore, setShowMore] = useState(objects.length > 10)
	
	
	useEffect(() => {
		setIsLoading(true)
		let ids = []
		
		if (objects) {
			objects.slice(currentStart, currentEnd).map(item => {
				ids.push(item.encodedId)
			})
		}
		
		if (ids) {
			axios.post('https://gateway.scan-interfax.ru/api/v1/documents/',
				{ids: ids}, {
					headers: {Authorization: `Bearer ${accessToken}`, expire: expire, "Content-Type": "application/json",}
				}
			).then(response => {
				setData([...data, ...response.data])
				setIsLoading(false)
			}).catch(err => {
				console.log('POST objectsearch is ERROR: ', err)
			})
		}
		setIsLoading(false)
	}, [objects, currentEnd, isMobile])
	
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Список документов</h1>
			<div className={styles.documentsBox}>
				{isLoading
					?
					<Loading imgSize={50} style={{alignSelf: "center"}} textAdd="Загружаем данные"/>
					:
					<>
						{
							(data)
								?
								<>{
									data.map((item, id) => <PublicationCards key={item.ok.id + id} item={item}/>)
								}</>
								:
								<h1>Ошибка получения документов</h1>}
					</>
				}
			</div>
			{
				showMore
					?
					<MyButtonBlue
						style={{width: 305, marginTop: 38, alignSelf: "center"}}
						onClick={(e) => {
							e.preventDefault();
							if (currentEnd + 10 >= objects.length) {
								setCurrentStart(currentEnd)
								setCurrentEnd(objects.length)
								setShowMore(false)
							} else {
								setCurrentStart(currentEnd)
								setCurrentEnd(currentEnd + 10)
							}
						}}
					>Показать больше</MyButtonBlue>
					:
					<></>
			}
		</div>
	);
}

export default Documents;