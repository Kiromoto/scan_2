import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import useDeviceDetect from "../../../hooks/useDeviceDetect";

function Navbar({isOpen, setIsOpen, ...props}) {
	const {isMobile} = useDeviceDetect()
	
	const clickMenuLink = (event) => {
		if (isMobile) {
			setIsOpen(!isOpen)
		}
	}
	
	return (
		<nav className={styles.navContainer}>
			<NavLink className={styles.navLink} onClick={(e) => clickMenuLink(e)}  to="/">Главная</NavLink>
			<NavLink className={styles.navLink} onClick={(e) => clickMenuLink(e)} to="search/">Тарифы</NavLink>
			<NavLink className={styles.navLink} onClick={(e) => clickMenuLink(e)} to="result/">FAQ</NavLink>
		</nav>
	);
}

export default Navbar;