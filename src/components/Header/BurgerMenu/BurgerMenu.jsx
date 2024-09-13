import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
// import menuUI from '../../../assets/images/Header/menu.svg'
import crossUI from '../../../assets/images/Header/cross.svg'
import logoWhite from '../../../assets/images/Header/logoWhite.svg'
import styles from './BurgerMenu.module.scss'
import Navbar from "../Navbar/Navbar";
import {useAuth} from "../../../hooks/useAuth";
import NotAuthorized from "../NotAuthorized/NotAuthorized";

function BurgerMenu() {
	const {isLoggedIn} = useAuth()
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const goToLoginPage =
		(event) => {
			event.preventDefault();
			navigate('login/')
		}
	
	if (isOpen) {
		return (
			<div className={styles.burgerMenuIsOpen}
			>
				<div className={styles.burgerHeader}>
					<img
						alt="logo_white"
						src={logoWhite}
						className={styles.logoImg}
					/>
					<img
						alt="cross"
						src={crossUI}
						className={styles.crossImg}
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(!isOpen)
						}}
					/>
				</div>
				<Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
				<div className={styles.burgerLoginBox}>
					<NotAuthorized/>
				</div>
			
			</div>
		)
	}
	
	
	return (
		<div className={styles.burgerMenuContainer}
		     onClick={(e) => {
			     e.preventDefault();
			     setIsOpen(!isOpen)
		     }}
		>
			{/*<Menu right*/}
			{/*      isOpen={isOpen}*/}
			{/*      onClick={() => setIsOpen(!isOpen)}*/}
			{/*      customCrossIcon={}*/}
			{/*>*/}
			{/*	<NavLink id="main" className="menu-item" to="/">Главная</NavLink>*/}
			{/*	<NavLink id="search" className="menu-item" to="/search">Поиск</NavLink>*/}
			{/*	<NavLink id="result" className="menu-item" to="/result">Результат</NavLink>*/}
			{/*	<NavLink id="signup" className="menu-item" to="/login">Зарегистрироваться</NavLink>*/}
			{/*	<NavLink onClick={(e) => goToLoginPage} className="menu-item--small">*/}
			{/*		<MyButtonBlue*/}
			{/*		style={{marginTop: 55,*/}
			{/*			marginLeft: 30,*/}
			{/*			marginBottom: 24,*/}
			{/*			width: "85%",*/}
			{/*			color: "black",*/}
			{/*			background: "rgba(124, 227, 225, 1)",*/}
			{/*		}}*/}
			{/*		>Войти</MyButtonBlue>*/}
			{/*		*/}
			{/*		*/}
			{/*	*/}
			{/*	</NavLink>*/}
			{/*</Menu>*/}
		
		</div>
	);
}

export default BurgerMenu;