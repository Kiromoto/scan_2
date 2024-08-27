import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

function Navbar() {
	return (
		<nav className={styles.navContainer}>
			<NavLink className={styles.navLink} to="/">Главная</NavLink>
			<NavLink className={styles.navLink} to="search/">Поиск</NavLink>
			<NavLink className={styles.navLink} to="result/">Результат</NavLink>
			
			{/*<NavLink className={styles.navLink} to="tariffs/">Тарифы</NavLink>*/}
			{/*<NavLink className={styles.navLink} to="faq/">FAQ</NavLink>*/}
		</nav>
	);
}

export default Navbar;