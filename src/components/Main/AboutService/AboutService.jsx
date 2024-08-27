import React from 'react';
import styles from './AboutService.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";
import {useNavigate} from "react-router-dom";
import funMan from "../../../assets/images/Main/funMan.svg";
import useDeviceDetect from "../../../hooks/useDeviceDetect";

function AboutService() {
	const {isMobile} = useDeviceDetect()
	const {isLoggedIn} = useAuth()
	const navigate = useNavigate();
	
	const goToSearch = (event) => {
		event.preventDefault();
		navigate('search/')
	}
	
	return (
		<div className={styles.container}>
			<div className={styles.leftBlock}>
				<div className={styles.descriptionTitle}>СЕРВИС ПО ПОИСКУ <br/>
					ПУБЛИКАЦИЙ <br/> О КОМПАНИИ <br/> ПО ЕГО ИНН
				</div>
				<div className={styles.descriptionParagraph}>Комплексный анализ публикаций, получение данных <br/> в формате PDF
					на электронную почту.
				</div>
				{
					isLoggedIn
						?
						<MyButtonBlue
							onClick={goToSearch}
							style={{marginTop: isMobile ? 32 : 70}}
						>Запросить данные
						</MyButtonBlue>
						:
						<></>
				}
			</div>
			<div className={styles.rightBlock}>
				<img src={funMan} alt='funMan'/>
			</div>
		
		</div>
	);
}

export default AboutService;