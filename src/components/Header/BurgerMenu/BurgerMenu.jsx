import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu'
import {useNavigate} from "react-router-dom";
// import menuUI from '../../../assets/images/Header/menu.svg'
import crossUI from '../../../assets/images/Header/cross.svg'
import styles from './BurgerMenu.module.scss'

function BurgerMenu() {
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const goToLoginPage =
		(event) => {
			event.preventDefault();
			navigate('login/')
		}
	
	
	return (
			<div className={styles.burgerMenuContainer}>
				<Menu right
				      isOpen={isOpen}
				      onClick={() => setIsOpen(!isOpen)}
				      // customBurgerIcon={<img className='.bm-burger-button' src={menuUI}/>}
				      customCrossIcon={<img alt="cross" className='.bm-cross-button' src={crossUI}/>}
				>
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/search">About</a>
					<a id="contact" className="menu-item" href="/result">Contact</a>
					<a onClick={(e) => goToLoginPage} className="menu-item--small">Войти</a>
				</Menu>
				
			</div>
	);
}

export default BurgerMenu;