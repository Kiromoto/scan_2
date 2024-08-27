import React from 'react';
import styles from './NotAuthorized.module.scss';
import MyButtonLight from "../../UI/MyButtonLight/MyButtonLight";
import MyButtonLtBlue from "../../UI/MyButtonLtBlue/MyButtonLtBlue";
import {useNavigate} from "react-router-dom";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NotAuthorized(props) {
	const navigate = useNavigate()
	const {isMobile} = useDeviceDetect()
  
	const goToLoginPage = (event) => {
		event.preventDefault();
		navigate('login/')
	}
  
  if (isMobile) {
    return (<BurgerMenu/>)
  }
	
	return (
		<div className={styles.container}>
			<MyButtonLight onClick={(e) => {goToLoginPage(e)}}>Зарегистрироваться</MyButtonLight>
			<div className={styles.slash}></div>
			<MyButtonLtBlue onClick={(e) => {goToLoginPage(e)}}>Войти</MyButtonLtBlue>
		</div>
	);
}

export default NotAuthorized;