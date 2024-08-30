import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu'
import {NavLink, useNavigate} from "react-router-dom";
// import menuUI from '../../../assets/images/Header/menu.svg'
import crossUI from '../../../assets/images/Header/cross.svg'
import styles from './BurgerMenu.module.scss'
import MyButtonBlue from "../../UI/MyButtonBlue/MyButtonBlue";

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
				      customCrossIcon={<img alt="cross" className='.bm-cross-button' src={crossUI}/>}
				>
					<NavLink id="main" className="menu-item" to="/">Главная</NavLink>
					<NavLink id="search" className="menu-item" to="/search">Поиск</NavLink>
					<NavLink id="result" className="menu-item" to="/result">Результат</NavLink>
					<NavLink id="signup" className="menu-item" to="/login">Зарегистрироваться</NavLink>
					<NavLink onClick={(e) => goToLoginPage} className="menu-item--small">
						<MyButtonBlue
						style={{marginTop: 55,
							marginLeft: 30,
							marginBottom: 24,
							width: "85%",
							color: "black",
							background: "rgba(124, 227, 225, 1)",
						}}
						>Войти</MyButtonBlue>
						
						
					
					</NavLink>
				</Menu>
				
			</div>
	);
}

export default BurgerMenu;