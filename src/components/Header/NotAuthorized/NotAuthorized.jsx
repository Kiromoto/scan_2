import React from 'react';
import styles from './NotAuthorized.module.scss';
import MyButtonLight from "../../UI/MyButtonLight/MyButtonLight";
import MyButtonLtBlue from "../../UI/MyButtonLtBlue/MyButtonLtBlue";
import {useNavigate} from "react-router-dom";
import {useDeviceType} from '../../../hooks/useDeviceType';
import {useAuth} from '../../../hooks/useAuth';

function NotAuthorized({isOpen, setIsOpen, ...props}) {
	const {isMobile} = useDeviceType()
	const {isLoggedIn, setIsLoggedIn, setAccessToken, setExpire} = useAuth()
	const navigate = useNavigate()

  
	const goToLoginPage = (event) => {
		if (isMobile) {
			setIsOpen(!isOpen)
		}
		event.preventDefault();
		navigate('login/')
	}

	const doLogout = () => {
		if (isMobile) {
			setIsOpen(!isOpen)
		}
		setIsLoggedIn(false);
		setAccessToken(null);
		setExpire(null);
		navigate('/login')
	}
  
	return (
		<div className={styles.container}>
			{isLoggedIn ?  <></> : <MyButtonLight onClick={(e) => {goToLoginPage(e)}}>Зарегистрироваться</MyButtonLight>}
			<div className={styles.slash}></div>
			{isLoggedIn
				?
				<MyButtonLtBlue onClick={(e) => {doLogout(e)}}>Выйти</MyButtonLtBlue>
				:
				<MyButtonLtBlue onClick={(e) => {goToLoginPage(e)}}>Войти</MyButtonLtBlue>}
		</div>
	);
}

export default NotAuthorized;