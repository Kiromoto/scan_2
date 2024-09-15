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
				<NotAuthorized isOpen={isOpen} setIsOpen={setIsOpen}/>
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
		</div>
	);
}

export default BurgerMenu;